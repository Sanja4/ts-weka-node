import {RandomTreeAsString} from './random-tree-as-string.model';
import {DecisionTree} from 'ts-weka/lib/model/decision-tree/decision-tree.model';

export class RandomTree extends RandomTreeAsString {

    /** The parsed random tree (parsed from {@link RandomTreeAsString.classifier}. */
    parsedClassifier: DecisionTree;

    constructor(params?: RandomTree) {
        super(params);
        Object.assign(this, params);
    }
}
