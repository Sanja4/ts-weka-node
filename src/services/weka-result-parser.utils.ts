/**
 * Utils class to parse a result of a Weka training.
 */
import {RandomForestContainer} from '../model/random-forest-container.model';
import {EvaluationResult} from '../model/evaluation-result.model';
import {RandomForest} from '../model/random-forest.model';
import {WekaTreeParserUtils} from 'ts-weka/lib/weka-tree-parser.utils.';
import {RandomTree} from '../model/random-tree.model';


export class WekaResultParserUtils {

    /**
     * Parses the Weka result of a trained RandomForest
     * @param resultString - the result as string (the same that can be seen in the GUI)
     * @returns the result as an object
     */
    public static parseRandomForestResult(resultString: string): RandomForestContainer {
        const result: RandomForestContainer = new RandomForestContainer();
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
        result.evaluationOnTrainingDataResult = WekaResultParserUtils.parseEvaluationResult(relevantSubString);
        resultString = resultString.slice(endIndex);

        // CROSS VALIDATION CLASSIFIER MODELS
        result.classifierModelPerFold = [];

        while(resultString.includes(startIdentifier)) {
            resultString = this.removeLeadingLineBreaks(resultString);
            startIdentifier = '=== Classifier model';
            endIdentifier = '\n\n=== Classifier model';

            startIndex = resultString.search(startIdentifier);
            endIndex = resultString.search(endIdentifier);

            if(endIndex == -1) {
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
        result.evaluationCrossValidationResult = WekaResultParserUtils.parseEvaluationResult(relevantSubString);

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

        // OVERVIEW
        startIdentifier = '===\n\n';
        endIdentifier = '\n\n\n=== Detailed Accuracy By Class ===';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        result.overview = resultString.substring(startIndex, endIndex);
        resultString = resultString.slice(endIndex);

        // DETAILED ACCURACY BY CLASS
        startIdentifier = '=== Detailed Accuracy By Class ===\n\n';
        endIdentifier = '\n\n=== Confusion Matrix ===';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        endIndex = resultString.search(endIdentifier);
        result.detailedAccuracyByClass = resultString.substring(startIndex, endIndex);
        resultString = resultString.slice(endIndex);

        // CONFUSION MATRIX (last entry --> special)
        startIdentifier = '=== Confusion Matrix ===\n\n\n';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        // remove the start first, so we find the first instance of the end identifier
        resultString = resultString.slice(startIndex);

        resultString = this.removeLeadingLineBreaks(resultString);
        resultString = this.removeTrailingLineBreaks(resultString);

        result.confusionMatrix = resultString;

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

            const randomTree: RandomTree = {
                classifier: model,
                parsedClassifier: WekaTreeParserUtils.parse(model),
                sizeOfTree: treeSize
            };
            result.totalModel.push(randomTree);
            resultString = resultString.slice(endIndex);
        }

        // ATTRIBUTE IMPORTANCE
        resultString = this.removeLeadingLineBreaks(resultString);
        startIdentifier = '\n\n';
        startIndex = resultString.search(startIdentifier) + startIdentifier.length;
        resultString = resultString.substring(startIndex);
        resultString = this.removeTrailingLineBreaks(resultString);

        result.attributeImportance = resultString.split('\n').map((s) => this.removeLeadingSpaces(s));

        return result;
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
}
