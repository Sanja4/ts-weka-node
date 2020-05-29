import {SearchMethod} from './search-method.model';
import {SelectedAttributes} from './selected-attributes.model';
import {CrossValidationResult} from './cross-validation-result.model';

export class AttributeSelectionResult {
    searchMethod: SearchMethod;

    attributeSubsetEvaluator: string;

    selectedAttributes: SelectedAttributes;

    crossValidationResult: CrossValidationResult;
}
