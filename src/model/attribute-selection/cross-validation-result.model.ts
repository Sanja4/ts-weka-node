import {CrossValidationResultDetail} from './cross-validation-result-detail.model';

export interface CrossValidationResult {
    seed: number;
    crossValidationFolds: number
    crossValidationResultDetails: CrossValidationResultDetail[];
}
