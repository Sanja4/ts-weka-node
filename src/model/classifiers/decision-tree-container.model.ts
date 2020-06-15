import {DecisionTreeAsString} from './decision-tree-as-string.model';
import {DecisionTree} from '../decision-tree/decision-tree.model';
import {DecisionTreeType} from '../../enum/decision-tree-type.enum';

export class DecisionTreeContainer extends DecisionTreeAsString {

    /** The parsed random tree (parsed from {@link DecisionTreeAsString.classifier}. */
    parsedClassifier: DecisionTree;

    type: DecisionTreeType;

    constructor(params?: DecisionTreeContainer) {
        super(params);
        Object.assign(this, params);
    }
}
