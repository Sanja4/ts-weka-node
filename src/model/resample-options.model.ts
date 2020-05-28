export class ResampleOptions {
    /**
     * [-S <num>] Specify the random number seed (default 1)
     */
    seed: number = 1;

    /**
     * [-Z <num>] The size of the output dataset, as a percentage of the input dataset (default 100)
     */
    sizeOutputDataset: number = 100;

    /**
     * [-B <num>] Bias factor towards uniform class distribution. 0 = distribution in input data -- 1 = uniform distribution.
     */
    biasFactor: number = 0;

    /** [-no-replacement] Disables replacement of instances (default: with replacement)*/
    noReplacement: boolean = false;
}
