/**
 * WEKA's detailed accuracy results by class.
 */
export class DetailedAccuracyByClass {

    truePositiveRate: number;
    falsePositiveRate: number;
    precision: number;
    recall: number;
    fMeasure: number;
    matthewsCorrelationCoefficientMCC: number;
    rocArea: number;
    pcrArea: number;
    /** The class all the values belong to. If class is null, each value belongs to the weighted average over all classes. */
    class?: string;

}
