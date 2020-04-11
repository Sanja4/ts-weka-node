/**
 * Result of an evaluation done using WEKA.
 */
export class EvaluationResult {
    title: string;
    overview: string;
    /** The confusion matrix */
    confusionMatrix: string;
    detailedAccuracyByClass: string;
}
