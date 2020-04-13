/**
 * Result of an evaluation done using WEKA.
 */
import {CrossValidationResult} from './cross-validation-result.model';
import {DetailedAccuracy} from './detailed-accuracy.model';
import {ConfusionMatrix} from './confusion-matrix.model';

export class EvaluationResult {
    title: string;
    crossValidationResult: CrossValidationResult;
    confusionMatrix: ConfusionMatrix;
    detailedAccuracy: DetailedAccuracy;
}
