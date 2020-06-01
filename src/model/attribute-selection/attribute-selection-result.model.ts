import {SelectedAttributes} from './selected-attributes.model';
import {CrossValidationResult} from './cross-validation-result.model';

export class AttributeSelectionResult {

    searchMethod: string;

    attributeSubsetEvaluator: string;

    selectedAttributes: SelectedAttributes;

    crossValidationResult: CrossValidationResult;
}
