import {RandomForest} from './random-forest.model';
import {EvaluationResult} from '../evaluation/evaluation-result.model';

export class RandomForestContainer {

    /** The options of the RandomForest algorithm used. */
    options: string;

    /** Time taken to perform cross-validation (in seconds)*/
    timeTakenToPerformCrossValidation: number;

    /** Time taken to build the model (in seconds) */
    timeTakenToBuildModel: number;

    /** Time taken to test the model on the training data (in seconds)*/
    timeTakenToTestModelOnTrainingData: number;

    /** Error on training data */
    evaluationOnTrainingData: EvaluationResult;

    /** The evaluation result from the cross-validation */
    evaluationCrossValidation: EvaluationResult;

    /** Classifier model for the full training set */
    classifierModelFullTrainingSet: RandomForest;

    /** The full output of Weka. */
    wekaOutput: string;
}
