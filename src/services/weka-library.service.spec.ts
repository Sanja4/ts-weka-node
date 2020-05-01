import {WekaLibraryService} from './weka-library.service';
import {RandomForestContainer} from '../model/random-forest-container.model';

describe('WekaLibraryService', () => {

    const serviceUnderTest: WekaLibraryService = new WekaLibraryService('./output', './input', './src/bin/weka-3.9.3.jar');

    test('should learn random forest ', async () => {
        const result: RandomForestContainer = await serviceUnderTest.learnRandomForest('test_dataset');
        expect(result.options).toEqual('-num-slots 0 -I 100 -M 1 -depth 0 -print -attribute-importance');
    });

    test('should return the file path of an unbalanced file', async () => {
        const result: string = await serviceUnderTest.getTrainingFilePathUnbalanced('test_dataset');
        expect(result).toEqual('input\\datasets\\unbalanced\\test_dataset.arff');
    });

    test('should return the file path of an unbalanced file with ending', async () => {
        const result: string = await serviceUnderTest.getTrainingFilePathUnbalanced('test_dataset.arff');
        expect(result).toEqual('input\\datasets\\unbalanced\\test_dataset.arff');
    });

    test('should return the file path of an balanced file', async () => {
        const result: string = await serviceUnderTest.getTrainingFilePathBalanced('test_dataset');
        expect(result).toEqual('input\\datasets\\balanced\\test_dataset.arff');
    });

    test('should return the file path of an balanced file with ending', async () => {
        const result: string = await serviceUnderTest.getTrainingFilePathBalanced('test_dataset.arff');
        expect(result).toEqual('input\\datasets\\balanced\\test_dataset.arff');
    });

});
