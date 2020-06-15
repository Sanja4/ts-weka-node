import {DecisionTreeContainer} from './decision-tree-container.model';

export class J48 {

    /** The classifier */
    totalModel: DecisionTreeContainer;

    constructor(params?: J48) {
        Object.assign(this, params);
    }

}
