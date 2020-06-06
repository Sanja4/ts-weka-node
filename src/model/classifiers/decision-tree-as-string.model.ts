export class DecisionTreeAsString {
    /** The random tree as string. */
    classifier: string;

    /** The size of the tree is #internalNodes + #leaves */
    sizeOfTree: number;

    /** The number of leaves of the tree. */
    numberOfLeaves?: number;

    constructor(params?: DecisionTreeAsString) {
        Object.assign(this, params);
    }
}
