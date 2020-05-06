/**
 * Utils class to parse a result of a Weka training.
 */
import {RandomForestContainer} from '../model/random-forest-container.model';
import {EvaluationResult} from '../model/evaluation-result.model';
import {RandomForest} from '../model/random-forest.model';
import {WekaTreeParserUtils} from 'ts-weka/lib/weka-tree-parser.utils.';
import {RandomTree} from '../model/random-tree.model';
import {AttributeImportance} from '../model/attribute-importance.model';
import {DetailedAccuracyByClass} from '../model/detailed-accuracy-by-class.model';
import {DetailedAccuracy} from '../model/detailed-accuracy.model';
import {ConfusionMatrix} from '../model/confusion-matrix.model';
import {ConfusionMatrixElement} from '../model/confusion-matrix-element.model';
import {ValidationOverview} from '../model/validation-overview.model';

export class WekaResultParserUtils {

    /**
     * Parses the Weka result of a trained RandomForest
     * @param resultString - the result as string (the same that can be seen in the GUI)
     * @returns the result as an object
     */
    public static parseRandomForestResult(resultString: string): RandomForestContainer {
        const result: RandomForestContainer = new RandomForestContainer();
        result.wekaOutput = resultString;
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
        result.classifierModelFullTrainingSet =
            WekaResultParserUtils.parseRandomForestClassifierResult(relevantSubString);
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
        endIdentifier = '=== Classifier model';
        startIndex = resultString.search(startIdentifier);
        endIndex = resultString.search(endIdentifier);
        relevantSubString = resultString.substring(startIndex, endIndex);
        result.evaluationOnTrainingData = WekaResultParserUtils.parseEvaluationResult(relevantSubString);
        resultString = resultString.slice(endIndex);

        // CROSS VALIDATION CLASSIFIER MODELS
        result.classifierModelPerFold = [];

        while (resultString.includes(startIdentifier)) {
            resultString = this.removeLeadingLineBreaks(resultString);
            startIdentifier = '=== Classifier model';
            endIdentifier = '\n\n=== Classifier model';

            startIndex = resultString.search(startIdentifier);
            endIndex = resultString.search(endIdentifier);

            if (endIndex == -1) {
                // last fold
                endIdentifier = 'Time taken to perform cross-validation';
                endIndex = resultString.search(endIdentifier);
            }

            relevantSubString = resultString.substring(startIndex, endIndex);
            result.classifierModelPerFold.push(WekaResultParserUtils.parseRandomForestClassifierResult(relevantSubString));
            resultString = resultString.slice(endIndex);
        }

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
    public static parseRandomForestClassifierResult(resultString: string): RandomForest {
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

        while (resultString.includes(startIdentifier)) {
            // Model
            startIndex = resultString.search(startIdentifier) + startIdentifier.length;
            endIndex = resultString.search(endIdentifier);
            const model: string = resultString.substring(startIndex, endIndex);
            resultString = resultString.slice(endIndex);

            // Tree size (for the tree size wie use the end identifier as start and the start identifier as end)
            startIndex = resultString.search(endIdentifier) + endIdentifier.length;
            endIndex = resultString.search(startIdentifier);

            if (endIndex == -1) {
                // last tree, use a different end identifier
                endIdentifier = '\n\n\n\nAttribute importance';
                endIndex = resultString.search(endIdentifier);
            }

            const treeSizeString: string = resultString.substring(startIndex, endIndex);
            const treeSize: number = Number.parseFloat(treeSizeString);

            const randomTree: RandomTree = {
                classifier: model,
                parsedClassifier: WekaTreeParserUtils.parse(model),
                sizeOfTree: treeSize
            };
            result.totalModel.push(randomTree);
            resultString = resultString.slice(endIndex);
        }

        // ATTRIBUTE IMPORTANCE
        result.attributeImportance = WekaResultParserUtils.extractAttributeImportance(resultString);

        // FINISHED
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

            if (regExpResult != null && regExpResult.length > 0) {
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
     * Helper function that removes the leading line breaks of the given string.
     * @param s - the given string
     * @returns the string without leading line breaks
     */
    private static removeLeadingLineBreaks(s: string): string {
        // remove leading line breaks
        while (s.charAt(0) == '\n') {
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
        while (s.charAt(s.length - 1) == '\n') {
            s = s.slice(0, s.length - 1);
        }

        return s;
    }

    private static removeLeadingSpaces(s: string): string {
        while (s.charAt(0) == ' ') {
            s = s.slice(1, s.length);
        }

        return s;
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
            if (line.includes('Correctly Classified Instances')) {
                regexResult = regExp.exec(resultString);
                crossVal.correctlyClassifiedInstancesAbsolute = Number.parseFloat(regexResult[1]);
                crossVal.correctlyClassifiedInstancesRelative = Number.parseFloat(regexResult[2]);
            } else if (line.includes('Incorrectly Classified Instances')) {
                regexResult = regExp.exec(resultString);
                crossVal.inCorrectlyClassifiedInstancesAbsolute = Number.parseFloat(regexResult[1]);
                crossVal.inCorrectlyClassifiedInstancesRelative = Number.parseFloat(regexResult[2]);
            } else if (line.includes('Kappa statistic')) {
                regexResult = regExp.exec(resultString);
                crossVal.kappaStatistic = Number.parseFloat(regexResult[1]);
            } else if (line.includes('Mean absolute error')) {
                regexResult = regExp.exec(resultString);
                crossVal.meanAbsoluteError = Number.parseFloat(regexResult[1]);
            } else if (line.includes('Root mean squared error')) {
                regexResult = regExp.exec(resultString);
                crossVal.rootMeanSquaredError = Number.parseFloat(regexResult[1]);
            } else if (line.includes('Relative absolute error')) {
                regexResult = regExp.exec(resultString);
                crossVal.relativeAbsoluteError = Number.parseFloat(regexResult[1]);
            } else if (line.includes('Root relative squared error')) {
                regexResult = regExp.exec(resultString);
                crossVal.rootRelativeSquaredError = Number.parseFloat(regexResult[1]);
            } else if (line.includes('Total Number of Instances')) {
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
            if (line.includes('Class')) {
                startIndexOfClass = line.indexOf('Class');
                return;
            }

            const regExpMatchResult = line.match(regExp);
            if (regExpMatchResult == null) {
                return;
            }

            if (line.includes('Weighted Avg.')) {
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

        for (let i = 0; i < splitString.length; i++) {
            for (let j = 0; j < trueClasses.length; j++) {
                if (splitString[i].includes(trueClasses[j])) {
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

            if (regExpResult != null) {
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
    private static extractClassifiedAs(splitString: string, trueClasses: string[]): Array<{ predictedClass: string, weight: number }> {
        const classifiedAs: Array<{ predictedClass: string, weight: number }> = [];
        const classifiedAsRegExp = /(\d+\.?\d*)+/g;

        let match;
        let i = 0;
        while ((match = classifiedAsRegExp.exec(splitString)) != null) {
            classifiedAs.push({predictedClass: trueClasses[i], weight: Number.parseFloat(match[0])});
            i++;
        }

        return classifiedAs;
    }
}
