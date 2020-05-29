export interface SearchMethod {
    name: string;
    startSet: string;
    searchDirection: string;
    staleSearchAfterNodeExpansions: number;
    totalNumberOfSubsetsEvaluated: number;
    meritOfBestSubsetFound: number;
}
