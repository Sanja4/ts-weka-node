/**
 * An element/row of the confusion matrix.
 */
export class ConfusionMatrixElement {

    trueClass: string;

    /** The string denotes the other class and number the count how often the other class matched. */
    classifiedAs: Array<[string, number]>;

}
