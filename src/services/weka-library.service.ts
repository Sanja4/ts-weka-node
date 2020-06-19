import {WekaResultParserUtils} from './weka-result-parser.utils';
import * as path from 'path';
import {ExecException} from 'child_process';
import * as fs from 'fs-extra';
import {SearchMethod} from '../enum/search-method.enum';
import {ResampleOptions} from '../model/options/resample-options.model';
import {CfsSubsetEvalOptions} from '../model/options/cfs-subset-eval-options.model';
import {BestFirstOptions} from '../model/options/best-first-options.model';
import {GeneralOptions} from '../model/options/general-options.model';
import {GlobalWekaOptions} from '../model/options/global-weka-options.model';
import {RandomForestOptions} from '../model/options/random-forest-options.model';
import {EvaluationResult} from '../model/evaluation/evaluation-result.model';
import {AttributeImportance} from '../model/evaluation/attribute-importance.model';
import {AttributeSelectionResult} from '../model/attribute-selection/attribute-selection-result.model';
import {EvaluatorType} from '../enum/evaluator-type.enum';
import {J48Options} from '../model/options/J48-options.model';
import {ClassifierType} from '../enum/classifier-type.enum';
import {ClassifierContainer} from '../model/classifiers/classifier-container.model';
import {DecisionTreeContainer} from '../model/classifiers/decision-tree-container.model';
import {RandomForest} from '../model/classifiers/random-forest.model';
import {J48} from '../model/classifiers/J48.model';
import {DecisionTreeType} from '../enum/decision-tree-type.enum';
import {AdaBoostM1Options} from '../model/options/ada-boost-m1-options.model';

const exec = require('child_process').exec;

export class WekaLibraryService {

    /**
     * Creates a new instance of this service
     * @param inputDirectory - the path to the input data sets, e.g. './input'
     * @param outputDirectory - the output directory, e.g. './output'
     * @param binPath - the full path to the JARs, e.g. `/usr/src/app/src/bin/`
     */
    constructor(private outputDirectory: string,
                private inputDirectory: string,
                private binPath: string) {
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

    public getTestUnbalancedDataSetsDirectory(): string {
        const directoryName: string = `${this.inputDirectory}/datasets/test/unbalanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getTestBalancedDataSetsDirectory(): string {
        const directoryName: string = `${this.inputDirectory}/datasets/test/balanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getInitialUnbalancedDataSetsDirectory(): string {
        const directoryName: string = `${this.inputDirectory}/datasets/initial/unbalanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getInitialBalancedDataSetsDirectory(): string {
        const directoryName: string = `${this.inputDirectory}/datasets/initial/balanced/`;
        !fs.existsSync(directoryName) && fs.mkdirSync(directoryName, {recursive: true});
        return directoryName;
    }

    public getUnbalancedTrainingFilePath(fileName: string): string {
        return path.join(this.getUnbalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    public getBalancedTrainingFilePath(fileName: string): string {
        return path.join(this.getBalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    public getInitialUnbalancedFilePath(fileName: string): string {
        return path.join(this.getInitialUnbalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    public getInitialBalancedFilePath(fileName: string): string {
        return path.join(this.getInitialBalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    public getTestUnbalancedFilePath(fileName: string): string {
        return path.join(this.getTestUnbalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    public getTestBalancedFilePath(fileName: string): string {
        return path.join(this.getTestBalancedDataSetsDirectory(), this.appendArffSuffix(fileName));
    }

    /**
     * Balances all data sets in the directory of the
     */
    public async balanceAllDataSetsUsingClassBalancer(): Promise<void> {
        // clear the old directory
        fs.emptyDirSync(this.getBalancedDataSetsDirectory());
        const allUnbalancedDatasetFilenames: string[] = await this.getAllUnbalancedDatasetFilenames();
        console.log('File names of all unbalanced data sets', allUnbalancedDatasetFilenames);
        for(const fileName of allUnbalancedDatasetFilenames) {
            await this.balanceDatasetUsingClassBalancer(fileName);
        }
    }

    public async resampleAllDataSets(resampleOptions: ResampleOptions): Promise<void> {
        // clear the old directory
        fs.emptyDirSync(this.getBalancedDataSetsDirectory());
        const allUnbalancedDatasetFilenames: string[] = await this.getAllUnbalancedDatasetFilenames();
        console.log('File names of all unbalanced data sets', allUnbalancedDatasetFilenames);
        for(const fileName of allUnbalancedDatasetFilenames) {
            await this.resampleDataset(this.getUnbalancedTrainingFilePath(fileName), this.getBalancedTrainingFilePath(fileName),
                resampleOptions);
        }
    }

    /**
     * Balances the data set in the given file using weka.filters.supervised.instance.ClassBalancer.
     * The unbalanced (original) data set has to be in the directory provided by {@link getUnbalancedTrainingFilePath}.
     * The class attribute has to be the last attribute in the data set (option '-c last').
     * The balanced data set is placed in the directory provided by {@link getBalancedTrainingFilePath}.
     * @param fileName - the file name of the ARFF data set
     */
    public async balanceDatasetUsingClassBalancer(fileName: string): Promise<void> {
        console.log('balanceDatasetUsingClassBalancer ' + fileName);

        // call Weka
        const command: string = `java -classpath \"${this.getClassPath()}\" weka.filters.supervised.instance.ClassBalancer`
                                + ` -c last`
                                + ` -i \"${this.getUnbalancedTrainingFilePath(fileName)}\"`
                                + ` -o \"${this.getBalancedTrainingFilePath(fileName)}\"`;

        await this.executeCommand(command);
    }

    public async resampleDataset(inputFilePath: string, outputFilePath: string,
                                 resampleOptions: ResampleOptions): Promise<void> {
        console.log('resampleDataset ' + inputFilePath);
        // call Weka
        let command: string = `java -classpath \"${this.getClassPath()}\" weka.filters.supervised.instance.Resample`
                              + ` -c last`
                              + ` -S ${resampleOptions.seed}`
                              + ` -Z ${resampleOptions.sizeOutputDataset}`
                              + ` -B ${resampleOptions.biasFactor}`
                              + ` -i \"${inputFilePath}\"`
                              + ` -o \"${outputFilePath}\"`;

        if(resampleOptions.noReplacement) {
            command += +` -no-replacement`;
        }

        await this.executeCommand(command);
    }

    public async performAttributeSelection(evaluator: EvaluatorType,
                                           evaluatorOptions: CfsSubsetEvalOptions | any,
                                           generalOptions: GeneralOptions,
                                           searchMethod: SearchMethod,
                                           searchMethodOptions: BestFirstOptions | any) {
        let searchMethodCommand: string = ``;

        if(searchMethod == SearchMethod.BEST_FIRST) {
            searchMethodCommand +=
                `weka.attributeSelection.BestFirst -D ${searchMethodOptions.D} -N ${searchMethodOptions.N} -S ${searchMethodOptions.S}`;
        } else if(searchMethod == SearchMethod.EVOLUTIONARY_SEARCH) {
            searchMethodCommand +=
                `weka.attributeSelection.EvolutionarySearch -population-size 20 -generations 20 -init-op 0 -selection-op 1 -crossover-op 0 -crossover-probability 0.6 -mutation-op 0 -mutation-probability 0.1 -replacement-op 0 -seed 1 -report-frequency 20`;
        } else if(searchMethod == SearchMethod.GENETIC_SEARCH) {
            searchMethodCommand += `weka.attributeSelection.GeneticSearch -Z 20 -G 20 -C 0.6 -M 0.033 -R 20 -S 1`;
        } else {
            throw new Error(`Found no search method for ${searchMethod}`);
        }

        evaluatorOptions.s = searchMethodCommand;

        if(evaluator == EvaluatorType.CFS_SUBSET_EVAL) {
            return await this.performCfsSubsetEval(evaluatorOptions, generalOptions);
        } else {
            throw new Error(`Found no evaluator method for ${evaluator}`);
        }
    }

    public async learnAdaBoostM1(fileName: string, useBalancedArffFile: boolean,
                                 generalOptions: GeneralOptions,
                                 adaBoostM1Options: AdaBoostM1Options,
                                 baseClassifierType: DecisionTreeType.REP_TREE | DecisionTreeType.J48 | DecisionTreeType.RANDOM_TREE,
                                 // TODO
                                 baseClassifierOptions: J48Options,
                                 enableLogging?: boolean,
                                 includeWekaOutput?: boolean) {
        includeWekaOutput = includeWekaOutput != null ? includeWekaOutput : false;

        const trainingFilePath: string = useBalancedArffFile ? this.getBalancedTrainingFilePath(
            fileName) : this.getUnbalancedTrainingFilePath(fileName);

        let baseClassifierCommand: string = ``;

        if(baseClassifierType == DecisionTreeType.J48) {
            baseClassifierCommand = `weka.classifiers.trees.J48 -- -M ${baseClassifierOptions.M}`;

            if(baseClassifierOptions.U) {
                baseClassifierCommand += ` -U`;
            } else {
                // -C option only for pruned trees
                baseClassifierCommand += ` -C ${baseClassifierOptions.C}`
            }
        } else {
            throw new Error(`AdaBoostM1 not implemented for base classifier type ${baseClassifierType}`);
        }

        // call Weka
        let command: string = `java -classpath \"${this.getClassPath()}\" weka.classifiers.meta.AdaBoostM1`
                              + ` -t \"${trainingFilePath}\"`;

        if(adaBoostM1Options.I) {
            command += ` -I ${adaBoostM1Options.I}`;
        }

        if(generalOptions.x != null) {
            command += ` -x ${generalOptions.x}`;
        }

        // add the base classifier command at last
        command += ` -W ${baseClassifierCommand}`

        const output: string = await this.executeCommand(command);

        if(enableLogging) {
            console.log(output);
        }

        let classifierType: ClassifierType = null;

        if(baseClassifierType == DecisionTreeType.J48) {
            classifierType = ClassifierType.ADA_BOOST_M1_J48;
        } else if(baseClassifierType == DecisionTreeType.REP_TREE) {
            classifierType = ClassifierType.ADA_BOOST_M1_REP_TREE;
        } else {
            throw new Error(`AdaBoostM1 not implemented for base classifier type ${baseClassifierType}`);
        }

        const result: ClassifierContainer = WekaResultParserUtils.parseClassifier(output, classifierType, includeWekaOutput);

        await this.storeClassifierResults(output, result, fileName);

        return result;
    }

    public async learnJ48(fileName: string, useBalancedArffFile: boolean,
                          generalOptions: GeneralOptions,
                          j48Options: J48Options,
                          enableLogging?: boolean,
                          includeWekaOutput?: boolean) {

        includeWekaOutput = includeWekaOutput != null ? includeWekaOutput : false;

        const trainingFilePath: string = useBalancedArffFile ? this.getBalancedTrainingFilePath(
            fileName) : this.getUnbalancedTrainingFilePath(fileName);

        // call Weka
        let command: string = `java -classpath \"${this.getClassPath()}\" weka.classifiers.trees.J48`
                              + ` -t \"${trainingFilePath}\"`
                              + ` -M ${j48Options.M}`;


        if(j48Options.U) {
            command += ` -U`;
        } else {
            // -C option only for pruned trees
            command += ` -C ${j48Options.C}`
        }

        if(generalOptions.x != null) {
            command += ` -x ${generalOptions.x}`;
        }

        const output: string = await this.executeCommand(command);

        if(enableLogging) {
            console.log(output);
        }

        const result: ClassifierContainer = WekaResultParserUtils.parseClassifier(output, ClassifierType.J48, includeWekaOutput);

        await this.storeClassifierResults(output, result, fileName);

        return result;
    }

    public async performCfsSubsetEval(options: CfsSubsetEvalOptions,
                                      generalOptions: GeneralOptions): Promise<AttributeSelectionResult> {
        let command: string = `java -classpath \"${this.getClassPath()}\" weka.attributeSelection.CfsSubsetEval`
                              + ` -s \"${options.s}\"`
                              + ` -P ${options.P}`
                              + ` -E ${options.E}`
                              + ` -i \"${generalOptions.i}\"`
                              + ` -c last`;

        if(options.M) {
            command += +` -M`;
        }

        if(options.L) {
            command += +` -L`;
        }

        if(options.Z) {
            command += +` -Z`;
        }

        if(options.D) {
            command += +` -D`;
        }

        if(generalOptions.x) {
            command += ` -x ${generalOptions.x}`;
        }

        const output: string = await this.executeCommand(command);

        return WekaResultParserUtils.extractAttributeSelectionResult(output, generalOptions.x != null);
    }

    /**
     * Learns a Random Forest
     * @param fileName - the file name of the arff file (e.g. my_arff_file)
     * @param useBalancedArffFile - whether to use the balanced (=true) or unbalanced (=false) arff-file . Defaults to false (= unbalanced).
     * @param options - the global Weka options to use
     * @param randomForestOptions - the random forest options to use
     * @param generalOptions - the general options (input file path not used)
     * @param enableLogging - denotes whether the Weka output string should be printed on the console or not
     * @param includeWekaOutput - if {@link ClassifierContainer.wekaOutput} should be included in the result
     */
    public async learnRandomForest(fileName: string, useBalancedArffFile: boolean,
                                   options?: GlobalWekaOptions,
                                   randomForestOptions?: RandomForestOptions,
                                   generalOptions?: GeneralOptions,
                                   enableLogging?: boolean,
                                   includeWekaOutput?: boolean): Promise<ClassifierContainer> {
        includeWekaOutput = includeWekaOutput != null ? includeWekaOutput : false;

        const trainingFilePath: string = useBalancedArffFile ? this.getBalancedTrainingFilePath(
            fileName) : this.getUnbalancedTrainingFilePath(fileName);

        if(options == null) {
            options = new GlobalWekaOptions();
        }

        if(generalOptions == null) {
            generalOptions = new GeneralOptions();
        }

        if(randomForestOptions == null) {
            randomForestOptions = new RandomForestOptions();
        }

        // call Weka
        let command: string = `java -classpath \"${this.getClassPath()}\" weka.classifiers.trees.RandomForest`
                              + ` -t \"${trainingFilePath}\"`
                              + ` -num-slots ${options.numSlots}`
                              + ` -I ${randomForestOptions.numberOfIterations}`
                              + ` -M ${randomForestOptions.minNumberOfInstances}`
                              + ` -depth ${randomForestOptions.depth}`
                              + ` -num-decimal-places ${randomForestOptions.numDecimalPlaces}`
                              + ` -print -attribute-importance`;

        if(generalOptions.x != null) {
            command += ` -x ${generalOptions.x}`;
        }

        const output: string = await this.executeCommand(command);

        if(enableLogging) {
            console.log(output);
        }

        const result: ClassifierContainer = WekaResultParserUtils.parseClassifier(output, ClassifierType.RANDOM_FOREST, includeWekaOutput);

        await this.storeClassifierResults(output, result, fileName);

        return result;
    }

    private async storeClassifierResults(output: string, result: ClassifierContainer, fileName: string): Promise<void> {
        // store the full result to a file
        !fs.existsSync(`${this.outputDirectory}/full/`) &&
        fs.mkdirSync(`${this.outputDirectory}/full/`, {recursive: true});

        const prefix: string = result.type == ClassifierType.RANDOM_FOREST ?
            `RandomForest` :
            result.type == ClassifierType.J48 ? `J48` : ``;

        // store the final results in files
        fs.writeFileSync(`${this.outputDirectory}/full/${prefix}_${this.getFileNameWithoutSuffix(fileName)}.txt`, output);

        !fs.existsSync(`${this.outputDirectory}/evaluation/`)
        && fs.mkdirSync(`${this.outputDirectory}/evaluation/`, {recursive: true});
        !fs.existsSync(`${this.outputDirectory}/classifiers/`) &&
        fs.mkdirSync(`${this.outputDirectory}/classifiers/`, {recursive: true});

        // ATTRIBUTE IMPORTANCE

        if(result.type == ClassifierType.RANDOM_FOREST) {
            !fs.existsSync(`${this.outputDirectory}/attributeImportance/`)
            && fs.mkdirSync(`${this.outputDirectory}/attributeImportance/`, {recursive: true});

            await this.storeAttributeImportanceToFile((result.classifierModelFullTrainingSet as RandomForest).attributeImportance,
                fileName);
        }

        await this.storeEvaluationToFile(result.evaluationCrossValidation, fileName);

        let i: number = 0;

        if(result.classifierModelFullTrainingSet.totalModel instanceof DecisionTreeContainer) {
            if(result.type == ClassifierType.RANDOM_FOREST) {
                for(const classifier of (result.classifierModelFullTrainingSet as RandomForest).totalModel) {
                    await this.storeClassifierToFile(classifier.classifier, fileName, i);
                    i++;
                }
            } else if(result.type == ClassifierType.J48) {
                await this.storeClassifierToFile((result.classifierModelFullTrainingSet as J48).totalModel.classifier, fileName, null);
            }
        }
    }

    /**
     * Returns the path for the WEKA JARs to use (for the java -classpath argument).
     * Multiple paths are joined using a semicolon (;).
     */
    private getClassPath(): string {
        return path.join(this.binPath, '*');
    }

    private executeCommand(command: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            console.log(`Executing command ${command}`);
            let stdoutData: string = '';

            const ls = exec(command, {maxBuffer: 1024 * 600000}, (error: ExecException | null, stdout: Buffer,
                                                                  stderr: Buffer) => {
                if(error) {
                    console.error(error);
                    return reject(error);
                } else if(stderr) {
                    console.error(stderr);
                    return reject(stderr);
                }
            });

            ls.stdout.on('data', (data) => {
                stdoutData += data;
            });

            ls.stderr.on('error', (data) => {
                console.error(`stderr: ${data}`);
            });

            ls.on('close', async(code) => {
                console.log(`Child process exited with code ${code}`);
                if(code != 0) {
                    return reject(`Command failed. Child process exited with code ${code}.`);
                }

                resolve(stdoutData);
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
        let suffix: string = ``;

        if(index != null) {
            suffix += `_${String(index + 1).padStart(3, '0')}`;
        }

        const filePath: string = `${this.outputDirectory}/classifiers/classifier_${this.getFileNameWithoutSuffix(fileName)}${suffix}.txt`;

        fs.writeFileSync(filePath, classifier);
        console.log(`Saved file ${filePath}`);
    }

    private async storeAttributeImportanceToFile(attributeImportances: AttributeImportance[],
                                                 fileName: string): Promise<void> {
        const filePath: string = `${this.outputDirectory}/attributeImportance/classifier_attributeImportance_${this.getFileNameWithoutSuffix(
            fileName)}.json`;

        fs.writeFileSync(filePath, JSON.stringify(attributeImportances));
        console.log(`Saved file ${filePath}`);
    }
}
