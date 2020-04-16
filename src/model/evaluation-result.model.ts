/**
 * Result of an evaluation done using WEKA.
 */
import {ValidationOverview} from './validation-overview.model';
import {DetailedAccuracy} from './detailed-accuracy.model';
import {ConfusionMatrix} from './confusion-matrix.model';

export class EvaluationResult {
    title: string;
    overview: ValidationOverview;
    confusionMatrix: ConfusionMatrix;
    detailedAccuracy: DetailedAccuracy;
}
