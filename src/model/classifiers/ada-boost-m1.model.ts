import {DecisionTreeContainer} from './decision-tree-container.model';

export class AdaBoostM1 {
    /** The description of the classifier. */
    classifierModelDescription: string;

    /** The base classifiers (rep trees) */
    totalModel: DecisionTreeContainer[];
}
