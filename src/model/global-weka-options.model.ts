export class GlobalWekaOptions {

    /** Number of execution slots. (default 1 - i.e. no parallelism) (use 0 to auto-detect number of cores) */
    numberOfSlots: number = 1;

    /** Sets number of folds for cross-validation (default: 10). = -x */
    numberOfFolds: number = 10;
}
