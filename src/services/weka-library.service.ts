import {WekaResultParserUtils} from './weka-result-parser.utils';
import * as path from 'path';
import {RandomForestContainer} from '../model/random-forest-container.model';
import {GlobalWekaOptions} from '../model/global-weka-options.model';
import {RandomForestOptions} from '../model/random-forest-options.model';
import {EvaluationResult} from '../model/evaluation-result.model';

const exec = require('child_process').exec;
const fs = require('fs-extra');

export class WekaLibraryService {

    /**
     * The absolute path to the weka JAR, e.g.
     * @param inputDirectory
     * @param wekaClassPath
     * @param outputDirectory - the output directory, e.g. './generated'
     */
    // TODO test
    constructor(private outputDirectory: string, private inputDirectory: string, private readonly wekaClassPath?: string) {
        this.wekaClassPath = wekaClassPath != null ? wekaClassPath : `./src/bin/weka-3.9.3.jar`;
    }

    public getUnbalancedDatasetsDirectory(): string {
        const directoryName: string = `${this.outputDirectory}/datasets/unbalanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getBalancedDatasetsDirectory(): string {
        const directoryName: string = `${this.outputDirectory}/datasets/balanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getTrainingFilePath(fileName: string): string {
        return `./${this.inputDirectory}/datasets/unbalanced/${fileName}.arff`;
    }

    /**
     * Balance
     */
    public async balanceAllDatasets(): Promise<void> {
        console.log('balanceAllDatasets');
        // clear the old directory
        fs.emptyDirSync(this.getBalancedDatasetsDirectory());
        const allUnbalancedDatasetFilenames: string[] = await this.getAllUnbalancedDatasetFilenames();
        console.log('allUnbalancedDatasetFilenames', allUnbalancedDatasetFilenames);
        for(const fileName of allUnbalancedDatasetFilenames) {
            await this.balanceDataset(fileName)
        }
    }

    public balanceDataset(fileName: string): Promise<void> {
        console.log('balanceDataset ' + fileName);
        return new Promise<void>(resolve => {

            // call Weka
            const command: string = `java -classpath \"${this.wekaClassPath}\" weka.filters.supervised.instance.ClassBalancer -c last`
                + ` -i \"${path.join(this.getUnbalancedDatasetsDirectory(), fileName)}\"`
                + ` -o \"${path.join(this.getBalancedDatasetsDirectory(), fileName)}\"`;
            console.log(`Executing command ${command}`);

            const ls = exec(command, {maxBuffer: 1024 * 600000});

            ls.on('close', async(code) => {
                console.log(`Child process exited with code ${code}`);
                resolve();
            });
        });
    }

    public learnRandomForest(fileName: string, options?: GlobalWekaOptions,
                             randomForestOptions?: RandomForestOptions): Promise<RandomForestContainer> {
        const trainingFilePath: string = this.getTrainingFilePath(fileName);
        options = options != null ? options : {
            numberOfSlots: 0,
            numberOfFolds: 5
        } as GlobalWekaOptions;

        // set the training file name in case the global options were specified but the user forgot to set the training file name
        options.trainingFileName = trainingFilePath;

        randomForestOptions = randomForestOptions != null ? randomForestOptions : {
            depth: 0,
            numberOfIterations: 10,
            minNumberOfInstances: 10
        } as RandomForestOptions;

        return new Promise<RandomForestContainer>(resolve => {
            // call Weka
            const command: string = `java -classpath \"${this.wekaClassPath}\" weka.classifiers.trees.RandomForest -t \"${options.trainingFileName}\"`
                +
                ` -num-slots ${options.numberOfSlots} -x ${options.numberOfFolds} -I ${randomForestOptions.numberOfIterations} -M ${randomForestOptions.minNumberOfInstances} -depth ${randomForestOptions.depth}`
                +
                ` -output-models-for-training-splits -print -attribute-importance`;
            console.log(`Executing command ${command}`);

            let stdoutData: string = '';

            const ls = exec(command, {maxBuffer: 1024 * 600000});

            ls.stdout.on('data', (data) => {
                stdoutData += data;
            });

            ls.stderr.on('error', (data) => {
                console.error(`stderr: ${data}`);
            });

            ls.on('close', async(code) => {
                console.log(`Child process exited with code ${code}`);
                const result: RandomForestContainer = WekaResultParserUtils.parseRandomForestResult(stdoutData);

                !fs.existsSync(`${this.outputDirectory}/attributeImportance/`)
                && fs.mkdirSync(`${this.outputDirectory}/attributeImportance/`, {recursive: true});
                !fs.existsSync(`${this.outputDirectory}/evaluation/`)
                && fs.mkdirSync(`${this.outputDirectory}/evaluation/`, {recursive: true});
                !fs.existsSync(`${this.outputDirectory}/classifiers/`) &&
                fs.mkdirSync(`${this.outputDirectory}/classifiers/`, {recursive: true});

                // store the final result in files
                await this.storeAttributeImportanceToFile(result.classifierModelFullTrainingSet.attributeImportance, fileName);
                await this.storeEvaluationToFile(result.evaluationCrossValidationResult, fileName);

                let i: number = 0;
                for(const classifier of result.classifierModelFullTrainingSet.totalModel) {
                    await this.storeClassifierToFile(classifier.classifier, fileName, i);
                    i++
                }

                resolve(result);
            });
        });
    }

    private getAllUnbalancedDatasetFilenames(): Promise<string[]> {
        return new Promise<string[]>(resolve => {
            fs.readdir(this.getUnbalancedDatasetsDirectory(), (err, files) => {
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
        const filePath: string = `${this.outputDirectory}/evaluation/classifier_evaluation_${fileName}.json`;

        fs.writeFile(filePath, JSON.stringify(evaluation, null, 3), (err) => {
            if(err) {
                throw err;
            }
            console.log(`Saved file ${filePath}`);
        })
    }

    private async storeClassifierToFile(classifier: string, fileName: string, index: number): Promise<void> {
        const filePath: string = `${this.outputDirectory}/classifiers/classifier_${fileName}_${String(index +
            1).padStart(3, '0')}.txt`;

        fs.writeFile(filePath, classifier, (err) => {
            if(err) {
                throw err;
            }
            console.log(`Saved file ${filePath}`);
        })
    }

    private async storeAttributeImportanceToFile(attributePerformance: string[],
                                                 fileName: string): Promise<void> {
        const filePath: string = `${this.outputDirectory}/attributeImportance/classifier_attributeImportance_${fileName}.txt`;

        fs.writeFile(filePath, attributePerformance.join('\n'), (err) => {
            if(err) {
                throw err;
            }
            console.log(`Saved file ${filePath}`);
        })
    }
}
