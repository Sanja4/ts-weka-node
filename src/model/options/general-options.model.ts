export class GeneralOptions {
    /** Sets number of folds for cross-validation (default: 10). = -x. Set to null to disable the option. */
    x?: number = 10;

    /** Sets file path (including name of the input arff file). */
    i?: string;

    constructor(params?: GeneralOptions) {
        Object.assign(this, params);
    }
}
