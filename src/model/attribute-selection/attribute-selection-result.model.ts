export class AttributeSelectionResult {
    searchMethod: {
        name: string;
        startSet: string;
        direction: string;
        additionalInfo: string;
        totalNumberOfSubsetsEvaluated: number;
        meritOfBestSubsetFound: number;
    };
    attributeSubsetEvaluator: string;
    selectedAttributes: {
        attributeIndexes: number[];
        numberOfAttributes: number;
        attributeNames: string[];
    };
    crossValidationResults: Array<{

        attributeIndex: number;
        attributeName: string;
        numberOfFolds: number;
        percentageOfFolds: number;
    }>;

}
