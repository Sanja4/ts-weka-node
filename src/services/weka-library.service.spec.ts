import {WekaLibraryService} from './weka-library.service';
import {SearchMethod} from '../enum/search-method.enum';
import {GeneralOptions} from '../model/options/general-options.model';
import {BestFirstOptions} from '../model/options/best-first-options.model';
import {CfsSubsetEvalOptions} from '../model/options/cfs-subset-eval-options.model';
import {EvaluatorType} from '../enum/evaluator-type.enum';
import {AttributeSelectionResult} from '../model/attribute-selection/attribute-selection-result.model';
import {J48Options} from '../model/options/J48-options.model';
import {ClassifierContainer} from '../model/classifiers/classifier-container.model';

describe('WekaLibraryService', () => {

    const serviceUnderTest: WekaLibraryService = new WekaLibraryService('./output', './input', './src/bin');

    test('should learn random forest ', async() => {
        const result: ClassifierContainer = await serviceUnderTest.learnRandomForest('test_dataset');
        expect(result.options).toEqual('-num-slots 0 -I 100 -M 1 -depth 0 -print -attribute-importance');
    });

    test('should learn a J48 ', async() => {
        const j48Options: J48Options = new J48Options({
            U: true
        });

        const result: ClassifierContainer = await serviceUnderTest.learnJ48('test_dataset', true, new GeneralOptions(), j48Options);
        expect(result).not.toBe(null);
    });

    test('should return the file path of an unbalanced file', async() => {
        const result: string = await serviceUnderTest.getUnbalancedTrainingFilePath('test_dataset');
        expect(result).toEqual('input\\datasets\\unbalanced\\test_dataset.arff');
    });

    test('should return the file path of an unbalanced file with ending', async() => {
        const result: string = await serviceUnderTest.getUnbalancedTrainingFilePath('test_dataset.arff');
        expect(result).toEqual('input\\datasets\\unbalanced\\test_dataset.arff');
    });

    test('should return the file path of an balanced file', async() => {
        const result: string = await serviceUnderTest.getBalancedTrainingFilePath('test_dataset');
        expect(result).toEqual('input\\datasets\\balanced\\test_dataset.arff');
    });

    test('should return the file path of an balanced file with ending', async() => {
        const result: string = await serviceUnderTest.getBalancedTrainingFilePath('test_dataset.arff');
        expect(result).toEqual('input\\datasets\\balanced\\test_dataset.arff');
    });

    test('should perform attribute selection without cross validation', async() => {
        const inputFilePath: string = await serviceUnderTest.getUnbalancedTrainingFilePath('test_dataset.arff');
        const generalOptions: GeneralOptions = new GeneralOptions({
            i: inputFilePath,
            x: null
        });

        const bestFirstOptions: BestFirstOptions = new BestFirstOptions();

        const evaluatorOptions: CfsSubsetEvalOptions = new CfsSubsetEvalOptions();

        const result: AttributeSelectionResult = await serviceUnderTest.performAttributeSelection(EvaluatorType.CFS_SUBSET_EVAL, evaluatorOptions, generalOptions,
            SearchMethod.BEST_FIRST, bestFirstOptions);

        expect(result).not.toBeNull();
    });

    test('should perform attribute selection with cross validation', async() => {
        const inputFilePath: string = await serviceUnderTest.getUnbalancedTrainingFilePath('test_dataset.arff');
        const generalOptions: GeneralOptions = new GeneralOptions({
            i: inputFilePath,
            x: 10
        });

        const bestFirstOptions: BestFirstOptions = new BestFirstOptions();

        const evaluatorOptions: CfsSubsetEvalOptions = new CfsSubsetEvalOptions();

        const result: AttributeSelectionResult = await serviceUnderTest.performAttributeSelection(EvaluatorType.CFS_SUBSET_EVAL, evaluatorOptions, generalOptions,
            SearchMethod.BEST_FIRST, bestFirstOptions);

        expect(result).not.toBeNull();
    });

});
