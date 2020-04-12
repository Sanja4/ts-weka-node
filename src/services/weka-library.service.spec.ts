import {WekaLibraryService} from './weka-library.service';
import {RandomForestContainer} from '../model/random-forest-container.model';

describe('WekaLibraryService', () => {

    const serviceUnderTest: WekaLibraryService = new WekaLibraryService('./output', './input');

    test('should learn random forest ', async() => {
        const result: RandomForestContainer = await serviceUnderTest.learnRandomForest('test_dataset');
        expect(result.options).toEqual('-num-slots 0 -I 10 -M 10 -depth 0 -print -attribute-importance');
    });

});
