import {RandomTree} from './random-tree.model';
import {AttributeImportance} from '../evaluation/attribute-importance.model';

export class RandomForest {

    /** Attribute importance based on average impurity decrease (and number of nodes using that attribute) for each attribute. */
    attributeImportance: AttributeImportance[];

    /** The description of the classifier. */
    classifierModelDescription: string;

    /** The base classifiers (random trees) */
    totalModel: RandomTree[];

    constructor(params?: RandomForest) {
        Object.assign(this, params);
    }
}
