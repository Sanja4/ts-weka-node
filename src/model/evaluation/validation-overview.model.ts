/**
 * WEKA's cross validation results.
 */
export class ValidationOverview {
    /** The total weight of the correctly classified instances. */
    correctlyClassifiedInstancesAbsolute: number;
    /** {@link correctlyClassifiedInstancesAbsolute} in relation to the total weight of all instances (in percent) */
    correctlyClassifiedInstancesRelative: number;
    /** The total weight of the incorrectly classified instances. */
    inCorrectlyClassifiedInstancesAbsolute: number;
    /** {@link inCorrectlyClassifiedInstancesAbsolute} in relation to the total weight of all instances (in percent) */
    inCorrectlyClassifiedInstancesRelative: number;

    kappaStatistic: number;

    meanAbsoluteError: number;

    rootMeanSquaredError: number;

    /** In percent */
    relativeAbsoluteError: number;
    /** In percent */
    rootRelativeSquaredError: number;

    /** The total weight of all instances. */
    totalWeightOfInstances: number;

}
