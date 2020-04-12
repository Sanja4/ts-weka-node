/**
 * The attribute importance of the WEKA result.
 */
export class AttributeImportance {
    averageImpurityDecrease: number;
    numberOfNodes: number;
    attribute: string;

    constructor(params: AttributeImportance) {
        Object.assign(this, params);
    }
}
