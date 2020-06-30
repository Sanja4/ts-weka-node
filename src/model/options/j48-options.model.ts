export class J48Options {
    /** Whether pruning should be used or not. False = pruning is used. True = pruning is not used. Default is false. */
    U?: boolean = false;
    /** Minimum number of instances per leaf. Default is 2. */
    M?: number = 2;
    /** confidenceFactor - The confidence factor used for pruning (smaller values incur more pruning). Default is 0.25 */
    C?: number = 0.25;

    constructor(params?: J48Options) {
        Object.assign(this, params);
    }
}
