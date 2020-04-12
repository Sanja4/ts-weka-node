import {WekaResultParserUtils} from './weka-result-parser.utils';
import {RandomForestContainer} from '../model/random-forest-container.model';
import {RandomForest} from '../model/random-forest.model';
import {EvaluationResult} from '../model/evaluation-result.model';
import {testRandomForestClassifierResult} from './test-data/testRandomForestClassifierResult';
import {testEvaluationResult1} from './test-data/testEvaluationResult1';
import {testResultString} from './test-data/testResultString';
import {testEvaluationResult2} from './test-data/testEvaluationResult2';

describe('WekaResultParserUtils', () => {

    test('should convert result', () => {
        const result: RandomForestContainer = WekaResultParserUtils.parseRandomForestResult(testResultString);
        expect(result.timeTakenToBuildModel).toEqual(0.56);
        expect(result.timeTakenToTestModelOnTrainingData).toEqual(0.16);
        expect(result.timeTakenToPerformCrossValidation).toEqual(0.6);
    });

    test('should convert a single random forest classifier result', () => {
        const result: RandomForest = WekaResultParserUtils.parseRandomForestClassifierResult(testRandomForestClassifierResult);
        expect(result.attributeImportance[0].includes('0.54 (     5)  trajectorySimilarityTram')).toEqual(true);
        expect(result.totalModel.length).toEqual(3);
        expect(result.totalModel[0].sizeOfTree).toEqual(477);
    });

    test('should convert an evaluation result (1)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult1);
        expect(result.title == 'Stratified cross-validation').toEqual(true);
        expect(result.overview.includes('Correctly Classified Instances')).toEqual(true);
        expect(result.overview.includes('Total Number of Instances')).toEqual(true);
    });

    test('should convert an evaluation result (2)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult2);
        expect(result.title == 'Error on training data').toEqual(true);
        expect(result.overview.includes('Correctly Classified Instances')).toEqual(true);
        expect(result.overview.includes('Total Number of Instances')).toEqual(true);
    });

});
