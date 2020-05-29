import {WekaLibraryService} from './weka-library.service';
import {SearchMethod} from '../enum/search-method.enum';
import {RandomForestContainer} from '../model/classifiers/random-forest-container.model';
import {GeneralOptions} from '../model/options/general-options.model';
import {BestFirstOptions} from '../model/options/best-first-options.model';
import {CfsSubsetEvalOptions} from '../model/options/cfs-subset-eval-options.model';

describe('WekaLibraryService', () => {

    const serviceUnderTest: WekaLibraryService = new WekaLibraryService('./output', './input', './src/bin/weka-3.9.3.jar');

    test('should learn random forest ', async() => {
        const result: RandomForestContainer = await serviceUnderTest.learnRandomForest('test_dataset');
        expect(result.options).toEqual('-num-slots 0 -I 100 -M 1 -depth 0 -print -attribute-importance');
    });

    test('should return the file path of an unbalanced file', async() => {
        const result: string = await serviceUnderTest.getTrainingFilePathUnbalanced('test_dataset');
        expect(result).toEqual('input\\datasets\\unbalanced\\test_dataset.arff');
    });

    test('should return the file path of an unbalanced file with ending', async() => {
        const result: string = await serviceUnderTest.getTrainingFilePathUnbalanced('test_dataset.arff');
        expect(result).toEqual('input\\datasets\\unbalanced\\test_dataset.arff');
    });

    test('should return the file path of an balanced file', async() => {
        const result: string = await serviceUnderTest.getTrainingFilePathBalanced('test_dataset');
        expect(result).toEqual('input\\datasets\\balanced\\test_dataset.arff');
    });

    test('should return the file path of an balanced file with ending', async() => {
        const result: string = await serviceUnderTest.getTrainingFilePathBalanced('test_dataset.arff');
        expect(result).toEqual('input\\datasets\\balanced\\test_dataset.arff');
    });

    test('should perform attribute selection without cross validation', async() => {
        const inputFilePath: string = await serviceUnderTest.getTrainingFilePathUnbalanced('test_dataset.arff');
        const generalOptions: GeneralOptions = new GeneralOptions({
            i: inputFilePath,
            x: null
        });

        const bestFirstOptions: BestFirstOptions = new BestFirstOptions();

        const evaluatorOptions: CfsSubsetEvalOptions = new CfsSubsetEvalOptions();

        const result: string = await serviceUnderTest.performAttributeSelection(
            (evaluatorOptions) => serviceUnderTest.performCfsSubsetEval(evaluatorOptions, generalOptions),
            SearchMethod.BEST_FIRST,
            bestFirstOptions,
            evaluatorOptions);

        console.log(result);

        expect(result).not.toBeNull();
    });

    test('should perform attribute selection with cross validation', async() => {
        const inputFilePath: string = await serviceUnderTest.getTrainingFilePathUnbalanced('test_dataset.arff');
        const generalOptions: GeneralOptions = new GeneralOptions({
            i: inputFilePath,
            x: 10
        });

        const bestFirstOptions: BestFirstOptions = new BestFirstOptions();

        const evaluatorOptions: CfsSubsetEvalOptions = new CfsSubsetEvalOptions();

        const result: string = await serviceUnderTest.performAttributeSelection(
            (evaluatorOptions) => serviceUnderTest.performCfsSubsetEval(evaluatorOptions, generalOptions),
            SearchMethod.BEST_FIRST,
            bestFirstOptions,
            evaluatorOptions);

        console.log(result);

        expect(result).not.toBeNull();
    });

});
