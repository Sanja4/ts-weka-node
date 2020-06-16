/**
 * Documentation from https://weka.sourceforge.io/doc.dev/weka/classifiers/meta/AdaBoostM1.html
 */
export class AdaBoostM1Options {

    /** Number of iterations. (default 10)*/
    I: number = 10;

    constructor(params?: AdaBoostM1Options) {
        Object.assign(this, params);
    }
}
