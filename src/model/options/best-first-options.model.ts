/**
 * Source: https://weka.sourceforge.io/doc.dev/weka/attributeSelection/BestFirst.html
 */
export class BestFirstOptions {

    /** Size of lookup cache for evaluated subsets. Expressed as a multiple of the number of attributes in the data set. (default = 1). */
    S?: number = 1;

    /** <0 = backward | 1 = forward | 2 = bi-directional>  Direction of search. (default = 1). */
    D?: number = 1;

    /** Number of non-improving nodes to consider before terminating search (search termination). */
    N?: number = 5;

    constructor(params?: BestFirstOptions) {
        Object.assign(this, params);
    }
}
