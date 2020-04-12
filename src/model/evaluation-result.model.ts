/**
 * Result of an evaluation done using WEKA.
 */
import {CrossValidationResult} from './cross-validation-result.model';

export class EvaluationResult {
    title: string;
    crossValidationResult: CrossValidationResult;
    /** The confusion matrix */
    confusionMatrix: string;
    detailedAccuracyByClass: string;
}
