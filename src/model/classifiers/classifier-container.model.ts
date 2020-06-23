import {RandomForest} from './random-forest.model';
import {EvaluationResult} from '../evaluation/evaluation-result.model';
import {ClassifierType} from '../../enum/classifier-type.enum';
import {J48} from './j48.model';
import {AdaBoostM1} from './ada-boost-m1.model';

export class ClassifierContainer {

    /** The type of the classifier. Determines the type of the {@link classifierModelFullTrainingSet}. */
    type: ClassifierType;

    /** The options used for the WEKA algorithm. */
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
    classifierModelFullTrainingSet: RandomForest | J48 | AdaBoostM1;

    /** The full output of Weka. */
    wekaOutput: string;
}
