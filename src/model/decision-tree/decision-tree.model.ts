import {DecisionTreeLeaf} from './decision-tree-leaf.model';
import {DecisionTreeType} from '../../enum/decision-tree-type.enum';

// TODO
export class DecisionTree {

    /** The attribute/feature to use for the split */
    splitAttribute: string;

    /** The value of the feature to split at */
    splitValue: number | string[];

    /**
     * For a numeric {@link splitValue}, there are two children: The first child is for {@link splitAttribute} <&lt {@link splitValue} and
     * the second child is for {@link splitAttribute} >= {@link splitValue}. If {@link splitValue} is a {@link string} array (for enum
     * values), each value of {@link splitValue} corresponds to a child in the {@link children} array, e.g. for  {@link splitAttribute} ==
     * {@link splitValue}[2], the associated child is {@link children}[2].
     */
    children: Array<DecisionTree | DecisionTreeLeaf>;

    type: DecisionTreeType;

    /** The weight of the decision tree when used in an esemble for classification. */
    weight: number;

    constructor(params: DecisionTree) {
        Object.assign(this, params);
    }

}
