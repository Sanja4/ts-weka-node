/**
 * Utils class to parse a result of a Weka training.
 */

import {EvaluationResult} from '../model/evaluation/evaluation-result.model';
import {RandomForest} from '../model/classifiers/random-forest.model';
import {AttributeImportance} from '../model/evaluation/attribute-importance.model';
import {ValidationOverview} from '../model/evaluation/validation-overview.model';
import {DetailedAccuracyByClass} from '../model/evaluation/detailed-accuracy-by-class.model';
import {DetailedAccuracy} from '../model/evaluation/detailed-accuracy.model';
import {ConfusionMatrixElement} from '../model/evaluation/confusion-matrix-element.model';
import {ConfusionMatrix} from '../model/evaluation/confusion-matrix.model';
import {AttributeSelectionResult} from '../model/attribute-selection/attribute-selection-result.model';
import {SelectedAttributes} from '../model/attribute-selection/selected-attributes.model';
import {CrossValidationResult} from '../model/attribute-selection/cross-validation-result.model';
import {CrossValidationResultDetail} from '../model/attribute-selection/cross-validation-result-detail.model';
import {ClassifierType} from '../enum/classifier-type.enum';
import {ClassifierContainer} from '../model/classifiers/classifier-container.model';
import {J48} from '../model/classifiers/J48.model';
import {DecisionTreeContainer} from '../model/classifiers/decision-tree-container.model';
import {WekaTreeParserUtils} from '../utils/weka-tree-parser.utils';
import {DecisionTreeType} from '../enum/decision-tree-type.enum';

export class WekaResultParserUtils {

    /**
     * Parses the Weka result of a trained RandomForest
     * @param resultString - the result as string (the same that can be seen in the GUI)
     * @param classifierType - the type of the classifier/decision tree(s) to parse
     * @param includeWekaOutput - if the weka output should be included in {@link ClassifierContainer.wekaOutput}
     * @returns the result as an object
     */
    public static parseClassifier(resultString: string, classifierType: ClassifierType,
                                  includeWekaOutput: boolean): ClassifierContainer {

        const result: ClassifierContainer = new ClassifierContainer();

        if(includeWekaOutput) {
            result.wekaOutput = resultString;
        }

        let startIdentifier: string;
        let endIdentifier: string;
        let startIndex: number;
        let endIndex: number;
        let relevantSubString: string;

        // OPTIONS
        startIdentifier = 'Options: ';
        endIdentifier = ' \n\n===';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        result.options = resultString.substring(startIndex, endIndex);
        resultString = resultString.slice(endIndex);

        // CLASSIFIER MODEL FOR FULL TRAINING SET
        startIdentifier = '=== Classifier model (full training set) ===';
        endIdentifier = '\nTime taken to build model:';
        startIndex = resultString.search(startIdentifier);
        endIndex = resultString.search(endIdentifier);
        relevantSubString = resultString.substring(startIndex, endIndex);

        if(classifierType == ClassifierType.RANDOM_FOREST) {
            result.classifierModelFullTrainingSet =
                WekaResultParserUtils.parseRandomForest(relevantSubString);
        } else if(classifierType == ClassifierType.J48) {
            // TODO
            result.classifierModelFullTrainingSet =
                WekaResultParserUtils.parseJ48(relevantSubString);
        } else if(classifierType == ClassifierType.ADA_BOOST_M1_J48) {
            // TODO
        } else if(classifierType == ClassifierType.ADA_BOOST_M1_REP_TREE) {
            // TODO
        }

        resultString = resultString.slice(endIndex);

        // TIME TAKEN TO BUILD MODEL
        startIdentifier = 'Time taken to build model: ';
        endIdentifier = ' seconds';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        relevantSubString = resultString.substring(startIndex, endIndex);
        result.timeTakenToBuildModel = Number.parseFloat(relevantSubString);
        resultString = resultString.slice(endIndex + endIdentifier.length);

        // Time taken to test model on training data
        startIdentifier = 'Time taken to test model on training data: ';
        endIdentifier = ' seconds';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        relevantSubString = resultString.substring(startIndex, endIndex);
        result.timeTakenToTestModelOnTrainingData = Number.parseFloat(relevantSubString);
        resultString = resultString.slice(endIndex + endIdentifier.length);

        // Error on training data
        startIdentifier = '=== Error on training data ===';
        endIdentifier = 'Time taken to perform cross-validation: ';
        startIndex = resultString.search(startIdentifier);
        endIndex = resultString.search(endIdentifier);
        relevantSubString = resultString.substring(startIndex, endIndex);
        result.evaluationOnTrainingData = WekaResultParserUtils.parseEvaluationResult(relevantSubString);
        resultString = resultString.slice(endIndex);

        // CROSS VALIDATION CLASSIFIER MODELS (skipped)

        // TIME TAKEN FOR CROSS-VALIDATION
        startIdentifier = 'Time taken to perform cross-validation: ';
        endIdentifier = ' seconds\n\n';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        result.timeTakenToPerformCrossValidation = Number.parseFloat(resultString.substring(startIndex, endIndex));
        resultString = resultString.slice(endIndex);

        // Evaluation of the cross validation
        startIdentifier = '=== Stratified cross-validation ===';
        startIndex = resultString.search(startIdentifier);
        relevantSubString = resultString.substring(startIndex);
        result.evaluationCrossValidation = WekaResultParserUtils.parseEvaluationResult(relevantSubString);

        // FINISHED
        return result;
    }

    /**
     * Parses an evaluation result consisting of a detailed accuracy by class and a confusion matrix
     * @param resultString - the result as string
     * @returns the result as object
     */
    public static parseEvaluationResult(resultString: string): EvaluationResult {
        const result: EvaluationResult = new EvaluationResult();
        let startIdentifier: string;
        let endIdentifier: string;
        let startIndex: number;
        let endIndex: number;

        // TITLE
        startIdentifier = '=== ';
        endIdentifier = ' ===\n\n';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        result.title = resultString.substring(startIndex, endIndex);
        resultString = resultString.slice(endIndex);

        // CROSS VALIDATION RESULTS
        startIdentifier = '===\n\n';
        endIdentifier = '\n\n\n=== Detailed Accuracy By Class ===';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        const crossValidationResultString = resultString.substring(startIndex, endIndex);
        result.overview = this.extractCrossValidationResult(crossValidationResultString);
        resultString = resultString.slice(endIndex);

        // DETAILED ACCURACY BY CLASS
        startIdentifier = '=== Detailed Accuracy By Class ===\n\n';
        endIdentifier = '\n\n=== Confusion Matrix ===';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        const detailedAccuracyByClassString: string = resultString.substring(startIndex, endIndex);
        result.detailedAccuracy = this.extractDetailedAccuracy(detailedAccuracyByClassString);
        resultString = resultString.slice(endIndex);

        // CONFUSION MATRIX (last entry --> special)
        startIdentifier = '=== Confusion Matrix ===\n\n\n';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        // remove the start first, so we find the first instance of the end identifier
        resultString = resultString.slice(startIndex);

        resultString = this.removeLeadingLineBreaks(resultString);
        resultString = this.removeTrailingLineBreaks(resultString);

        result.confusionMatrix = this.extractConfusionMatrix(resultString);

        // FINISHED
        return result;
    }

    /**
     * Parses the result of a single random forest classifier consisting of multiple base classifiers (random trees).
     * @param resultString - the result as string
     * @returns the result as object
     */
    public static parseRandomForest(resultString: string): RandomForest {
        const result: RandomForest = new RandomForest();
        let startIdentifier: string;
        let endIdentifier: string;
        let startIndex: number;
        let endIndex: number;

        // CLASSIFIER DESCRIPTION
        startIdentifier = '=== Classifier model';
        endIdentifier = 'All the base classifiers:';
        startIndex = resultString.search(startIdentifier);
        endIndex = resultString.search(endIdentifier);
        result.classifierModelDescription = resultString.substring(startIndex, endIndex);
        resultString = resultString.slice(endIndex);

        // CLASSIFIER MODEL (consisting of multiple trees)
        startIdentifier = 'All the base classifiers:';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        resultString = resultString.slice(startIndex);

        result.totalModel = [];
        startIdentifier = '\n\n\nRandomTree\n==========\n\n';
        endIdentifier = '\n\nSize of the tree : ';

        while(resultString.includes(startIdentifier)) {
            // Model
            startIndex = resultString.search(startIdentifier) + startIdentifier.length;
            endIndex = resultString.search(endIdentifier);
            const model: string = resultString.substring(startIndex, endIndex);
            resultString = resultString.slice(endIndex);

            // Tree size (for the tree size wie use the end identifier as start and the start identifier as end)
            startIndex = resultString.search(endIdentifier) + endIdentifier.length;
            endIndex = resultString.search(startIdentifier);

            if(endIndex == -1) {
                // last tree, use a different end identifier
                endIdentifier = '\n\n\n\nAttribute importance';
                endIndex = resultString.search(endIdentifier);
            }

            const treeSizeString: string = resultString.substring(startIndex, endIndex);
            const treeSize: number = Number.parseFloat(treeSizeString);

            const randomTree: DecisionTreeContainer = new DecisionTreeContainer({
                classifier: model,
                parsedClassifier: WekaTreeParserUtils.parse(model, DecisionTreeType.RANDOM_TREE),
                sizeOfTree: treeSize,
                type: DecisionTreeType.RANDOM_TREE,
                weight: 1
            });

            result.totalModel.push(randomTree);
            resultString = resultString.slice(endIndex);
        }

        // ATTRIBUTE IMPORTANCE
        result.attributeImportance = WekaResultParserUtils.extractAttributeImportance(resultString);

        return result;
    }

    /**
     * Extracts the attribute importance from the given string.
     * @param resultString - the result as string
     * @returns the result as object
     */
    public static extractAttributeImportance(resultString: string): AttributeImportance[] {
        const results: string[] = resultString.split('\n').map((s) => this.removeLeadingSpaces(s));

        const attributeImportanceArray: AttributeImportance[] = [];

        results.forEach(result => {
            const regExp = /(\d?\.?\d*)(?:\s*\(\s*)(\d*)(?:\)\s*)(\S*)+/gm;
            // the regExp matches the following string (w/o quotes), for example: '0.39 (    11)  trajectorySimilarityTram'
            const regExpResult = regExp.exec(result);

            if(regExpResult != null && regExpResult.length > 0) {
                const attributeImportance: AttributeImportance = new AttributeImportance({
                    averageImpurityDecrease: Number.parseFloat(regExpResult[1]),
                    numberOfNodes: Number.parseFloat(regExpResult[2]),
                    attribute: regExpResult[3]
                });
                attributeImportanceArray.push(attributeImportance);
            }
        });

        return attributeImportanceArray;
    }

    /**
     * Extracts the cross validation results from the given string.
     * @param resultString - the result as string
     * @returns the result as object
     */
    static extractCrossValidationResult(resultString: string): ValidationOverview {
        const crossValidationLines: string[] = resultString.split('\n');

        const regExp = /^(?:\D*)(\d*\.?\d*)(?:\s*)(\d*\.?\d*)+/gm;
        let regexResult;

        const crossVal: ValidationOverview = new ValidationOverview();

        crossValidationLines.forEach(line => {
            if(line.includes('Correctly Classified Instances')) {
                regexResult = regExp.exec(resultString);
                crossVal.correctlyClassifiedInstancesAbsolute = Number.parseFloat(regexResult[1]);
                crossVal.correctlyClassifiedInstancesRelative = Number.parseFloat(regexResult[2]);
            } else if(line.includes('Incorrectly Classified Instances')) {
                regexResult = regExp.exec(resultString);
                crossVal.inCorrectlyClassifiedInstancesAbsolute = Number.parseFloat(regexResult[1]);
                crossVal.inCorrectlyClassifiedInstancesRelative = Number.parseFloat(regexResult[2]);
            } else if(line.includes('Kappa statistic')) {
                regexResult = regExp.exec(resultString);
                crossVal.kappaStatistic = Number.parseFloat(regexResult[1]);
            } else if(line.includes('Mean absolute error')) {
                regexResult = regExp.exec(resultString);
                crossVal.meanAbsoluteError = Number.parseFloat(regexResult[1]);
            } else if(line.includes('Root mean squared error')) {
                regexResult = regExp.exec(resultString);
                crossVal.rootMeanSquaredError = Number.parseFloat(regexResult[1]);
            } else if(line.includes('Relative absolute error')) {
                regexResult = regExp.exec(resultString);
                crossVal.relativeAbsoluteError = Number.parseFloat(regexResult[1]);
            } else if(line.includes('Root relative squared error')) {
                regexResult = regExp.exec(resultString);
                crossVal.rootRelativeSquaredError = Number.parseFloat(regexResult[1]);
            } else if(line.includes('Total Number of Instances')) {
                regexResult = regExp.exec(resultString);
                crossVal.totalWeightOfInstances = Number.parseFloat(regexResult[1]);
            }
        });
        return crossVal;
    }

    /**
     * Extracts the detailed accuracy results from the given string.
     * @param resultString - the result as string
     * @returns the result as object
     */
    static extractDetailedAccuracy(resultString: string): DetailedAccuracy {
        resultString = resultString.replace(/,/g, '.');

        const detailedAccuracy: DetailedAccuracy = new DetailedAccuracy();
        const accuracyByClasses: DetailedAccuracyByClass[] = [];
        const weightedAverage: DetailedAccuracyByClass = new DetailedAccuracyByClass();

        const regExp = /(\d+\.\d*)+/g;
        let startIndexOfClass: number;

        resultString.split('\n').forEach(line => {
            if(line.includes('Class')) {
                startIndexOfClass = line.indexOf('Class');
                return;
            }

            const regExpMatchResult = line.match(regExp);
            if(regExpMatchResult == null) {
                return;
            }

            if(line.includes('Weighted Avg.')) {
                weightedAverage.truePositiveRate = Number.parseFloat(regExpMatchResult[0]);
                weightedAverage.falsePositiveRate = Number.parseFloat(regExpMatchResult[1]);
                weightedAverage.precision = Number.parseFloat(regExpMatchResult[2]);
                weightedAverage.recall = Number.parseFloat(regExpMatchResult[3]);
                weightedAverage.fMeasure = Number.parseFloat(regExpMatchResult[4]);
                weightedAverage.matthewsCorrelationCoefficientMCC = Number.parseFloat(regExpMatchResult[5]);
                weightedAverage.rocArea = Number.parseFloat(regExpMatchResult[6]);
                weightedAverage.pcrArea = Number.parseFloat(regExpMatchResult[7]);
                weightedAverage.class = null;
                return;
            }

            const detailedAccuracyByClass: DetailedAccuracyByClass = new DetailedAccuracyByClass();
            detailedAccuracyByClass.truePositiveRate = Number.parseFloat(regExpMatchResult[0]);
            detailedAccuracyByClass.falsePositiveRate = Number.parseFloat(regExpMatchResult[1]);
            detailedAccuracyByClass.precision = Number.parseFloat(regExpMatchResult[2]);
            detailedAccuracyByClass.recall = Number.parseFloat(regExpMatchResult[3]);
            detailedAccuracyByClass.fMeasure = Number.parseFloat(regExpMatchResult[4]);
            detailedAccuracyByClass.matthewsCorrelationCoefficientMCC = Number.parseFloat(regExpMatchResult[5]);
            detailedAccuracyByClass.rocArea = Number.parseFloat(regExpMatchResult[6]);
            detailedAccuracyByClass.pcrArea = Number.parseFloat(regExpMatchResult[7]);
            detailedAccuracyByClass.class = line.substring(startIndexOfClass);

            accuracyByClasses.push(detailedAccuracyByClass);
        });

        detailedAccuracy.accuracyByClass = accuracyByClasses;
        detailedAccuracy.weightedAverage = weightedAverage;
        return detailedAccuracy;
    }

    /**
     * Extracts the confusion matrix from the given string
     * @param resultString - the result as string
     * @returns the result as object
     */
    static extractConfusionMatrix(resultString: string): ConfusionMatrix {
        const splitString: string[] = resultString.split('\n');
        const trueClasses: string[] = this.extractTrueClasses(splitString);
        const matrixElements: ConfusionMatrixElement[] = [];

        for(let i = 0; i < splitString.length; i++) {
            for(let j = 0; j < trueClasses.length; j++) {
                const classifiedAs = [];
                classifiedAs.push(splitString[i]);
                const classifiedAsExtracted = this.extractTrueClasses(classifiedAs);
                if(classifiedAsExtracted.includes(trueClasses[j])) {
                    const element: ConfusionMatrixElement = new ConfusionMatrixElement();
                    element.trueClass = trueClasses[j];
                    element.classifiedAs = this.extractClassifiedAs(splitString[i], trueClasses);
                    matrixElements.push(element);
                    break;
                }
            }
        }

        const confusionMatrix: ConfusionMatrix = new ConfusionMatrix();
        confusionMatrix.matrixElements = matrixElements;
        return confusionMatrix;
    }

    static extractAttributeSelectionResult(contentToParse: string,
                                           isGeneralOptionsXSet: boolean): AttributeSelectionResult {
        const attributeSelectionResult: AttributeSelectionResult = new AttributeSelectionResult();

        attributeSelectionResult.searchMethod = this.extractAttributeSelectionSearchMethod(contentToParse);
        attributeSelectionResult.attributeSubsetEvaluator =
            this.extractAttributeSelectionAttributeSubsetEvaluator(contentToParse);
        attributeSelectionResult.selectedAttributes = this.extractAttributeSelectionSelectedAttributes(contentToParse,
            isGeneralOptionsXSet);
        if(isGeneralOptionsXSet) {
            attributeSelectionResult.crossValidationResult =
                this.extractAttributeSelectionCrossValidationResults(contentToParse);
        }

        return attributeSelectionResult;
    }

    /**
     * Helper function that removes the leading line breaks of the given string.
     * @param s - the given string
     * @returns the string without leading line breaks
     */
    private static removeLeadingLineBreaks(s: string): string {
        // remove leading line breaks
        while(s.charAt(0) == '\n') {
            s = s.slice(1, s.length);
        }

        return s;
    }

    /**
     * Helper function that removes the trailing line breaks of the given string.
     * @param s - the given string
     * @returns the string without trailing line breaks
     */
    private static removeTrailingLineBreaks(s: string): string {
        // remove trailing line breaks
        while(s.charAt(s.length - 1) == '\n') {
            s = s.slice(0, s.length - 1);
        }

        return s;
    }

    private static removeLeadingSpaces(s: string): string {
        while(s.charAt(0) == ' ') {
            s = s.slice(1, s.length);
        }

        return s;
    }

    private static removeLeadingTabs(s: string): string {
        while(s.charAt(0) == '\t') {
            s = s.slice(1, s.length);
        }

        return s;
    }

    /**
     * Extracts the true classes from the given confusion matrix string.
     * @param splitString - the confusion matrix split by row.
     */
    private static extractTrueClasses(splitString: string[]): string[] {
        const trueClassRegExp = /(?:\w{1}\s*=\s*)(\D*(?:\n|$))/;

        const trueClasses: string[] = [];

        splitString.forEach(trueClass => {
            const regExp: RegExp = new RegExp(trueClassRegExp);
            const regExpResult = regExp.exec(trueClass);

            if(regExpResult != null) {
                trueClasses.push(regExpResult[1]);
            }
        });

        return trueClasses;
    }

    /**
     * Extracts the classified as classes and counts from the given splitString
     * @param splitString - the string to extract the information from
     * @param trueClasses - all available classes in the confusion matrix
     */
    private static extractClassifiedAs(splitString: string,
                                       trueClasses: string[]): Array<{ predictedClass: string, weight: number }> {
        const classifiedAs: Array<{ predictedClass: string, weight: number }> = [];
        const classifiedAsRegExp = /(\d+\.?\d*)+/g;

        let match;
        let i = 0;
        while((match = classifiedAsRegExp.exec(splitString)) != null) {
            classifiedAs.push({
                predictedClass: trueClasses[i],
                weight: Number.parseFloat(match[0])
            });
            i++;
        }

        return classifiedAs;
    }

    private static extractAttributeSelectionSearchMethod(contentToParse: string): string {
        let regEx = /(?:Search Method:\n)((.|\n)*)(?:Attribute Subset Evaluator)/g;
        const regExResult = regEx.exec(contentToParse);
        let searchMethodRaw: string = regExResult[1];

        while(searchMethodRaw.includes('\t')) {
            searchMethodRaw = searchMethodRaw.replace('\t', '');
        }

        searchMethodRaw = searchMethodRaw.replace('\n\n', '');

        return searchMethodRaw;
    }

    private static extractAttributeSelectionAttributeSubsetEvaluator(contentToParse: string): string {
        let startIdentifier = 'Attribute Subset Evaluator';
        let endIdentifier = '\n\nSelected attributes';
        const startIndex = contentToParse.search(startIdentifier);
        const endIndex = contentToParse.search(endIdentifier);
        return contentToParse.substring(startIndex, endIndex);
    }

    private static extractAttributeSelectionSelectedAttributes(contentToParse: string,
                                                               isGeneralOptionsXSet: boolean): SelectedAttributes {
        const attributeIndexes: number[] = [];
        let numberOfAttributes: number = -Infinity;
        const attributeNames: string[] = [];

        let regEx = /(?:Selected attributes: )((?:\d+(,|\s))*)/g;
        let regExResult = regEx.exec(contentToParse);
        let raw: string = regExResult[1];
        raw.split(',').forEach(line => {
            attributeIndexes.push(Number.parseFloat(line));
        });

        regEx = /(?:\s:\s)(\d*)/g;
        regExResult = regEx.exec(contentToParse);
        numberOfAttributes = Number.parseFloat(regExResult[1]);

        if(isGeneralOptionsXSet) {
            regEx = /(?:\s:\s\d*\n)((.|\n)*\n)(?:\n\n)/g;
        } else {
            regEx = /(?:\s:\s\d*\n)((.|\n)*)/g;
        }
        regExResult = regEx.exec(contentToParse);
        raw = regExResult[1];
        raw.split('\n').forEach(line => {
            if(line.length != 0) {
                line = this.removeLeadingSpaces(line);
                attributeNames.push(line);
            }
        });

        return {
            attributeIndexes: attributeIndexes,
            numberOfAttributes: numberOfAttributes,
            attributeNames: attributeNames
        };
    }

    private static extractAttributeSelectionCrossValidationResults(contentToParse: string): CrossValidationResult {
        let crossValidationFolds: number = -Infinity;
        let seed: number = -Infinity;
        let crossValidationResultDetails: CrossValidationResultDetail[] = [];

        let startIdentifier = '=== Attribute selection';
        const startIndex = contentToParse.search(startIdentifier);
        let endIndex = contentToParse.length;
        let raw: string = contentToParse.substring(startIndex, endIndex);

        let regEx = /(?:Attribute selection\s)(\d+)/g;
        let regExResult = regEx.exec(raw);
        crossValidationFolds = Number.parseFloat(regExResult[1]);

        regEx = /(?:seed:\s)(\d+)/g;
        regExResult = regEx.exec(raw);
        seed = Number.parseFloat(regExResult[1]);

        let endIdentifier = 'attribute\n';
        endIndex = raw.search(endIdentifier) + endIdentifier.length;
        raw = raw.slice(endIndex, raw.length);

        raw.split('\n').forEach(line => {
            if(line.length > 1) {

                let attributeIndex: number = -Infinity;
                let attributeName: string;
                let numberOfFolds: number = -Infinity;
                let percentageOfFolds: number = -Infinity;

                regEx = new RegExp(/(\d+)(?:\s\w*$)/gm);
                regExResult = regEx.exec(line);
                attributeIndex = Number.parseFloat(regExResult[1]);

                regEx = new RegExp(/(?:\d+\s)(\w*$)/gm);
                regExResult = regEx.exec(line);
                attributeName = regExResult[1];

                regEx = new RegExp(/(\d+)(?:\()/g);
                regExResult = regEx.exec(line);
                numberOfFolds = Number.parseFloat(regExResult[1]);

                regEx = new RegExp(/(?:\(\s*)(\d+)(?:\s%\))/g);
                regExResult = regEx.exec(line);
                percentageOfFolds = Number.parseFloat(regExResult[1]);

                crossValidationResultDetails.push({
                    attributeIndex: attributeIndex,
                    attributeName: attributeName,
                    numberOfFolds: numberOfFolds,
                    percentageOfFolds: percentageOfFolds
                });
            }

        });

        return {
            crossValidationFolds: crossValidationFolds,
            seed: seed,
            crossValidationResultDetails: crossValidationResultDetails
        };
    }

    private static parseJ48(resultString: string): J48 {
        const result: J48 = new J48();

        let startIndex: number;
        let endIndex: number;

        // number of leaves
        let regExp = /Number of Leaves\s\s:\s*(\d*)/gm;
        let regExpResult = regExp.exec(resultString);
        const numberOfLeaves: number = Number.parseInt(regExpResult[1]);

        // tree size
        regExp = /(?:Size of the tree :)\s*(.+)/gm;
        // the regExp matches the following string (w/o quotes), for example: '0.39 (    11)  trajectorySimilarityTram'
        regExpResult = regExp.exec(resultString);
        const treeSize: number = Number.parseInt(regExpResult[1]);

        // Model
        let startIdentifier: string = '\n------------------\n\n';
        let endIdentifier: string = '\n\nNumber of Leaves';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        let model: string = resultString.substring(startIndex, endIndex);

        result.totalModel = new DecisionTreeContainer({
            classifier: model,
            // FIXME WekaTreeParserUtils.parse(model) can't parse the J48 currently because the first J48 node uses <= and the second >  (for Random Trees, the first uses >= and the second <) --> ts-weka updaten (classify benötigt damit auch den ClassifierType)
            parsedClassifier: WekaTreeParserUtils.parse(model, DecisionTreeType.J48),
            numberOfLeaves: numberOfLeaves,
            sizeOfTree: treeSize,
            type: DecisionTreeType.J48,
            weight: 1
        });

        return result;
    }
}
