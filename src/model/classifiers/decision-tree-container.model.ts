import {DecisionTree} from 'ts-weka/lib/model/decision-tree/decision-tree.model';
import {DecisionTreeAsString} from './decision-tree-as-string.model';

export class DecisionTreeContainer extends DecisionTreeAsString {

    /** The parsed random tree (parsed from {@link DecisionTreeAsString.classifier}. */
    parsedClassifier: DecisionTree;

    constructor(params?: DecisionTreeContainer) {
        super(params);
        Object.assign(this, params);
    }
}
