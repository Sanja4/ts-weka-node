/**
 * Documentation from https://weka.sourceforge.io/doc.dev/weka/classifiers/trees/RandomForest.html
 */
export class RandomForestOptions {
    /** The maximum depth of the tree, 0 for unlimited. (default 0) = -depth */
    depth: number = 0;

    /** Set minimum number of instances per leaf. (default 1) = -M*/
    minNumberOfInstances: number = 1;

    /** Number of iterations. (current value 100) = -I */
    numberOfIterations: number = 100;

    /** The number of decimal places for the output of numbers in the model (default 2). */
    numDecimalPlaces: number = 2;
}
