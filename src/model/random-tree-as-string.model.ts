export class RandomTreeAsString {
    /** The random tree as string. */
    classifier: string;

    /** The size of the tree is #internalNodes + #leaves */
    sizeOfTree: number;

    constructor(params?: RandomTreeAsString) {
        Object.assign(this, params);
    }
}
