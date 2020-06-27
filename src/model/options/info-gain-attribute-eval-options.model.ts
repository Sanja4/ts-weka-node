/**
 * See <a href="https://weka.sourceforge.io/doc.dev/weka/attributeSelection/InfoGainAttributeEval.html">InfoGainAttributeEval on
 * Weka.Sourceforge</a> Documentation of the options from the official Weka documentation.
 */
export class InfoGainAttributeEvalOptions {
    /** -s <class name> Sets search method for subset evaluators.*/
    s?: string;

    constructor(params?: InfoGainAttributeEvalOptions) {
        Object.assign(this, params);
    }
}
