export class GeneralOptions {
    /** Sets number of folds for cross-validation (default: 10). = -x. Set to null to disable the option. */
    x?: number = 10;

    /** Sets training file (name of the input file). */
    i?: string;

    constructor(params?: GeneralOptions) {
        Object.assign(this, params);
    }
}
