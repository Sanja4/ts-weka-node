import {WekaResultParserUtils} from './weka-result-parser.utils';
import * as path from 'path';
import {RandomForestContainer} from '../model/random-forest-container.model';
import {GlobalWekaOptions} from '../model/global-weka-options.model';
import {RandomForestOptions} from '../model/random-forest-options.model';
import {EvaluationResult} from '../model/evaluation-result.model';
import {AttributeImportance} from '../model/attribute-importance.model';
import {ExecException} from 'child_process';

const exec = require('child_process').exec;
import * as fs from 'fs-extra';

export class WekaLibraryService {

    /**
     * Creates a new instance of this service
     * @param inputDirectory - the path to the input data sets, e.g. './input'
     * @param outputDirectory - the output directory, e.g. './output'
     * @param wekaClassPath - the path to the Weka JAR, e.g. `./src/bin/weka-3.9.3.jar`
     */
    constructor(private outputDirectory: string, private inputDirectory: string,
                private wekaClassPath: string) {
    }

    /**
     * @returns the path to the directory where the service expects the unbalanced data sets as arff files.
     * Creates the directory if it does not exist.
     */
    public getUnbalancedDataSetsDirectory(): string {
        const directoryName: string = `${this.inputDirectory}/datasets/unbalanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    /**
     * @returns the path to the directory where the service expects the balanced data sets as arff files.
     * Creates the directory if it does not exist.
     */
    public getBalancedDataSetsDirectory(): string {
        const directoryName: string = `${this.inputDirectory}/datasets/balanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getTrainingFilePathUnbalanced(fileName: string): string {
        return path.join(this.getUnbalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    public getTrainingFilePathBalanced(fileName: string): string {
        return path.join(this.getBalancedDataSetsDirectory(), this.appendArffSuffix(fileName))
    }

    /**
     * Balances all data sets in the directory of the
     */
    public async balanceAllDataSets(): Promise<void> {
        // clear the old directory
        fs.emptyDirSync(this.getBalancedDataSetsDirectory());
        const allUnbalancedDatasetFilenames: string[] = await this.getAllUnbalancedDatasetFilenames();
        console.log('File names of all unbalanced data sets', allUnbalancedDatasetFilenames);
        for(const fileName of allUnbalancedDatasetFilenames) {
            await this.balanceDataset(fileName);
        }
    }

    /**
     * Balances the data set in the given file using weka.filters.supervised.instance.ClassBalancer.
     * The unbalanced (original) data set has to be in the directory provided by {@link getTrainingFilePathUnbalanced}.
     * The class attribute has to be the last attribute in the data set (option '-c last').
     * The balanced data set is placed in the directory provided by {@link getTrainingFilePathBalanced}.
     * @param fileName - the file name of the ARFF data set
     */
    public balanceDataset(fileName: string): Promise<void> {
        console.log('balanceDataset ' + fileName);
        return new Promise<void>((resolve, reject) => {

            // call Weka
            const command: string = `java -classpath \"${this.wekaClassPath}\" weka.filters.supervised.instance.ClassBalancer`
                                    +` -c last`
                                    + ` -i \"${this.getTrainingFilePathUnbalanced(fileName)}\"`
                                    + ` -o \"${this.getTrainingFilePathBalanced(fileName)}\"`;
            console.log(`Executing command ${command}`);

            const ls = exec(command, {maxBuffer: 1024 * 600000}, (error: ExecException | null, stdout: Buffer,
                                                                  stderr: Buffer) => {
                if(error) {
                    console.error(error);
                }
            });

            ls.on('close', async(code) => {
                console.log(`Child process exited with code ${code}`);
                if(code != 0) {
                    return reject(`Balancing failed. Child process exited with code ${code}.`);
                }

                resolve();
            });
        });
    }

    /**
     * Learns a Random Forest
     * @param fileName - the file name of the arff file (e.g. my_arff_file)
     * @param useBalancedArffFile - whether to use the balanced (=true) or unbalanced (=false) arff-file . Defaults to false (= unbalanced).
     * @param options - the global Weka options to use
     * @param randomForestOptions - the random forest options to use
     * @param enableLogging - denotes whether the Weka output string should be printed on the console or not
     */
    public learnRandomForest(fileName: string, useBalancedArffFile?: boolean, options?: GlobalWekaOptions,
                             randomForestOptions?: RandomForestOptions,
                             enableLogging?: boolean): Promise<RandomForestContainer> {

        useBalancedArffFile = useBalancedArffFile != null ? useBalancedArffFile : false;

        const trainingFilePath: string = useBalancedArffFile ? this.getTrainingFilePathBalanced(
            fileName) : this.getTrainingFilePathUnbalanced(fileName);

        if(options == null) {
            options = new GlobalWekaOptions();
        }

        if(randomForestOptions == null) {
            randomForestOptions = new RandomForestOptions();
        }

        return new Promise<RandomForestContainer>((resolve, reject) => {
            // call Weka
            const command: string = `java -classpath \"${this.wekaClassPath}\" weka.classifiers.trees.RandomForest`
                                    + ` -t \"${trainingFilePath}\"`
                                    + ` -num-slots ${options.numberOfSlots}`
                                    + ` -x ${options.numberOfFolds}`
                                    + ` -I ${randomForestOptions.numberOfIterations}`
                                    + ` -M ${randomForestOptions.minNumberOfInstances}`
                                    + ` -depth ${randomForestOptions.depth}`
                                    + ` -output-models-for-training-splits -print -attribute-importance`;
            console.log(`Executing command ${command}`);

            let stdoutData: string = '';

            const ls = exec(command, {maxBuffer: 1024 * 600000}, (error: ExecException | null, stdout: Buffer,
                                                                  stderr: Buffer) => {
                if(error) {
                    console.error(error);
                }
            });

            ls.stdout.on('data', (data) => {
                stdoutData += data;
            });

            ls.stderr.on('error', (data) => {
                console.error(`stderr: ${data}`);
            });

            ls.on('close', async(code) => {
                if(enableLogging) {
                    console.log(stdoutData);
                }
                console.log(`Child process exited with code ${code}`);

                if(code != 0) {
                    return reject(`Learning failed. Child process exited with code ${code}.`);
                }

                // store the full result to a file
                !fs.existsSync(`${this.outputDirectory}/full/`) &&
                fs.mkdirSync(`${this.outputDirectory}/full/`, {recursive: true});

                fs.writeFileSync(`${this.outputDirectory}/full/output_random_forest.txt`, stdoutData);

                const result: RandomForestContainer = WekaResultParserUtils.parseRandomForestResult(stdoutData);

                !fs.existsSync(`${this.outputDirectory}/attributeImportance/`)
                && fs.mkdirSync(`${this.outputDirectory}/attributeImportance/`, {recursive: true});
                !fs.existsSync(`${this.outputDirectory}/evaluation/`)
                && fs.mkdirSync(`${this.outputDirectory}/evaluation/`, {recursive: true});
                !fs.existsSync(`${this.outputDirectory}/classifiers/`) &&
                fs.mkdirSync(`${this.outputDirectory}/classifiers/`, {recursive: true});


                // store the final result in files
                await this.storeAttributeImportanceToFile(result.classifierModelFullTrainingSet.attributeImportance, fileName);
                await this.storeEvaluationToFile(result.evaluationCrossValidation, fileName);

                let i: number = 0;
                for(const classifier of result.classifierModelFullTrainingSet.totalModel) {
                    await this.storeClassifierToFile(classifier.classifier, fileName, i);
                    i++;
                }

                resolve(result);
            });
        });
    }

    private appendArffSuffix(fileName: string): string {
        if(fileName.endsWith('.arff')) {
            return fileName;
        }
        return `${fileName}.arff`;
    }

    private getAllUnbalancedDatasetFilenames(): Promise<string[]> {
        return new Promise<string[]>(resolve => {
            fs.readdir(this.getUnbalancedDataSetsDirectory(), (err, files) => {
                //handling error
                if(err) {
                    return console.log('Unable to scan directory: ' + err);
                }
                //listing all files using forEach
                files.forEach(function(file) {
                    // Do whatever you want to do with the file
                    console.log(file);
                });

                resolve(files);
            });
        });
    }

    private async storeEvaluationToFile(evaluation: EvaluationResult, fileName: string): Promise<void> {
        !fs.existsSync(`${this.outputDirectory}/evaluation/`)
        && fs.mkdirSync(`${this.outputDirectory}/evaluation/`, {recursive: true});
        const filePath: string = `${this.outputDirectory}/evaluation/classifier_evaluation_${this.getFileNameWithoutSuffix(fileName)}.json`;

        fs.writeFileSync(filePath, JSON.stringify(evaluation, null, 3));
        console.log(`Saved file ${filePath}`);
    }

    private getFileNameWithoutSuffix(fileName: string): string {
        if(fileName.endsWith('.arff')) {
            return fileName.substring(0, fileName.length - 5);
        }
        return fileName;
    }

    private async storeClassifierToFile(classifier: string, fileName: string, index: number): Promise<void> {
        const filePath: string = `${this.outputDirectory}/classifiers/classifier_${this.getFileNameWithoutSuffix(fileName)}_${String(index
                                                                                                                                     +
                                                                                                                                     1)
            .padStart(3, '0')}.txt`;

        fs.writeFileSync(filePath, classifier);
        console.log(`Saved file ${filePath}`);
    }

    private async storeAttributeImportanceToFile(attributeImportances: AttributeImportance[],
                                                 fileName: string): Promise<void> {
        const filePath: string = `${this.outputDirectory}/attributeImportance/classifier_attributeImportance_${this.getFileNameWithoutSuffix(fileName)}.json`;

        fs.writeFileSync(filePath, JSON.stringify(attributeImportances));
        console.log(`Saved file ${filePath}`);
    }
}
