/**
 * Result of an evaluation done using WEKA.
 */
import {CrossValidationResult} from './cross-validation-result.model';
import {DetailedAccuracy} from './detailed-accuracy.model';

export class EvaluationResult {
    title: string;
    crossValidationResult: CrossValidationResult;
    /** The confusion matrix */
    confusionMatrix: string;
    detailedAccuracy: DetailedAccuracy;
}
