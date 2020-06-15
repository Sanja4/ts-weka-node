export class MajorityVotingResult {

    predictedClass: string;

    /** The sum of the weight of the votes/decision trees that predicted the {@link predictedClass}. */
    predictedClassWeight: number;

    /** The total weight of all votes/decision trees. */
    totalWeight: number;

    constructor(params?: MajorityVotingResult) {
        Object.assign(this, params);
    }
}
