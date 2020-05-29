/**
 * See <a href="https://weka.sourceforge.io/doc.dev/weka/attributeSelection/CfsSubsetEval.html">CfsSubsetEval on Weka.Sourceforge</a>
 * Documentation of the options from the official Weka documentation.
 */
export class CfsSubsetEvalOptions {
    /** Treat missing values as a separate value. */
    M: boolean;
    /** Don't include locally predictive attributes. */
    L: boolean;
    /** Precompute the full correlation matrix at the outset, rather than compute correlations lazily (as needed) during the search. Use this in conjuction with parallel processing in order to speed up a backward search. */
    Z: boolean;
    /** The size of the thread pool, for example, the number of cores in the CPU. (default 1) */
    P: number = 1;
    /** The number of threads to use, which should be >= size of thread pool. (default 1) */
    E: number = 1;
    /** Output debugging info. */
    D: boolean;
    /** -s <class name> Sets search method for subset evaluators.*/
    s: string;

    constructor(params?: CfsSubsetEvalOptions) {
        Object.assign(this, params);
    }
}
