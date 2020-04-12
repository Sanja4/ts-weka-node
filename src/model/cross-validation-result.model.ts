/**
 * WEKA's cross validation results.
 */
export class CrossValidationResult {

    correctlyClassifiedInstancesAbsolute: number;
    /** In percent */
    correctlyClassifiedInstancesRelative: number;

    inCorrectlyClassifiedInstancesAbsolute: number;
    /** In percent */
    inCorrectlyClassifiedInstancesRelative: number;

    kappaStatistic: number;
    meanAbsoluteError: number;
    rootMeanSquaredError: number;
    /** In percent */
    relativeAbsoluteError: number;
    /** In percent */
    rootRelativeSquaredError: number;

    totalNumberOfInstances: number;

}
