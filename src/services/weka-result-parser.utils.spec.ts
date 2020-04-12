import {WekaResultParserUtils} from './weka-result-parser.utils';
import {RandomForestContainer} from '../model/random-forest-container.model';
import {testResultString} from './test-data/testResultString';
import {testAttributeImportance} from './test-data/testAttributeImportance';
import {AttributeImportance} from '../model/attribute-importance.model';
import {RandomForest} from '../model/random-forest.model';
import {testRandomForestClassifierResult} from './test-data/testRandomForestClassifierResult';
import {testCrossValidationResult} from './test-data/testCrossValidationResult';
import {CrossValidationResult} from '../model/cross-validation-result.model';
import {EvaluationResult} from '../model/evaluation-result.model';
import {testEvaluationResult1} from './test-data/testEvaluationResult1';
import {testEvaluationResult2} from './test-data/testEvaluationResult2';
import {testDetailedAccuracyByClass} from './test-data/testDetailedAccuracyByClass';
import {DetailedAccuracy} from '../model/detailed-accuracy.model';

describe('WekaResultParserUtils', () => {

    test('should convert result', () => {
        const result: RandomForestContainer = WekaResultParserUtils.parseRandomForestResult(testResultString);
        expect(result.timeTakenToBuildModel).toEqual(0.56);
        expect(result.timeTakenToTestModelOnTrainingData).toEqual(0.16);
        expect(result.timeTakenToPerformCrossValidation).toEqual(0.6);
    });

    test('should convert a single random forest classifier result', () => {
        const result: RandomForest = WekaResultParserUtils.parseRandomForestClassifierResult(testRandomForestClassifierResult);
        expect(result.totalModel.length).toEqual(3);
        expect(result.totalModel[0].sizeOfTree).toEqual(477);
    });

    test('should convert an evaluation result (1)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult1);
        expect(result.title == 'Stratified cross-validation').toEqual(true);
        expect(result.crossValidationResult.correctlyClassifiedInstancesAbsolute).toEqual(10948);
        expect(result.crossValidationResult.totalNumberOfInstances).toEqual(11609);
    });

    test('should convert an evaluation result (2)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult2);
        expect(result.title == 'Error on training data').toEqual(true);
        expect(result.crossValidationResult.correctlyClassifiedInstancesAbsolute).toEqual(11297);
        expect(result.crossValidationResult.totalNumberOfInstances).toEqual(11609);
    });

    test('should extract attribute importance', () => {
        const result: AttributeImportance[] = WekaResultParserUtils.extractAttributeImportance(testAttributeImportance);
        expect(result.length).toEqual(45);

        expect(result[0].averageImpurityDecrease).toEqual(0.39);
        expect(result[0].numberOfNodes).toEqual(11);
        expect(result[0].attribute).toEqual('feature1');

        expect(result[42].averageImpurityDecrease).toEqual(0);
        expect(result[42].numberOfNodes).toEqual(0);
        expect(result[42].attribute).toEqual('feature43');
    });

    test('should extract cross validation result', () => {
        const result: CrossValidationResult = WekaResultParserUtils.extractCrossValidationResult(testCrossValidationResult);
        expect(result.correctlyClassifiedInstancesAbsolute).toEqual(11297);
        expect(result.correctlyClassifiedInstancesRelative).toEqual(97.3124);
        expect(result.inCorrectlyClassifiedInstancesAbsolute).toEqual(312);
        expect(result.inCorrectlyClassifiedInstancesRelative).toEqual(2.6876);
        expect(result.kappaStatistic).toEqual(0.9669);
        expect(result.meanAbsoluteError).toEqual(0.0247);
        expect(result.rootMeanSquaredError).toEqual(0.0895);
        expect(result.relativeAbsoluteError).toEqual(10.6377);
        expect(result.rootRelativeSquaredError).toEqual(26.2871);
        expect(result.totalNumberOfInstances).toEqual(11609);
    });

    test('should extract detailed accuracy', () => {
        const result: DetailedAccuracy = WekaResultParserUtils.extractDetailedAccuracy(testDetailedAccuracyByClass);

        expect(result.accuracyByClass.length).toEqual(7);
        expect(result.accuracyByClass[0].class).toEqual('stationary');
        expect(result.accuracyByClass[1].class).toEqual('walk');
        expect(result.accuracyByClass[2].class).toEqual('bike');
        expect(result.accuracyByClass[3].class).toEqual('car');
        expect(result.accuracyByClass[4].class).toEqual('bus');
        expect(result.accuracyByClass[5].class).toEqual('tram');
        expect(result.accuracyByClass[6].class).toEqual('train');

        expect(result.accuracyByClass[0].truePositiveRate).toEqual(0.974);
        expect(result.accuracyByClass[0].falsePositiveRate).toEqual(0.001);
        expect(result.accuracyByClass[0].precision).toEqual(0.985);
        expect(result.accuracyByClass[0].recall).toEqual(0.974);
        expect(result.accuracyByClass[0].fMeasure).toEqual(0.979);
        expect(result.accuracyByClass[0].matthewsCorrelationCoefficientMCC).toEqual(0.977);
        expect(result.accuracyByClass[0].rocArea).toEqual(1.000);
        expect(result.accuracyByClass[0].pcrArea).toEqual(0.997);

        expect(result.accuracyByClass[4].truePositiveRate).toEqual(0.959);
        expect(result.accuracyByClass[4].falsePositiveRate).toEqual(0.013);
        expect(result.accuracyByClass[4].precision).toEqual(0.937);
        expect(result.accuracyByClass[4].recall).toEqual(0.959);
        expect(result.accuracyByClass[4].fMeasure).toEqual(0.948);
        expect(result.accuracyByClass[4].matthewsCorrelationCoefficientMCC).toEqual(0.937);
        expect(result.accuracyByClass[4].rocArea).toEqual(0.998);
        expect(result.accuracyByClass[4].pcrArea).toEqual(0.992);

        expect(result.weightedAverage.truePositiveRate).toEqual(0.973);
        expect(result.weightedAverage.falsePositiveRate).toEqual(0.006);
        expect(result.weightedAverage.precision).toEqual(0.973);
        expect(result.weightedAverage.recall).toEqual(0.973);
        expect(result.weightedAverage.fMeasure).toEqual(0.973);
        expect(result.weightedAverage.matthewsCorrelationCoefficientMCC).toEqual(0.967);
        expect(result.weightedAverage.rocArea).toEqual(0.999);
        expect(result.weightedAverage.pcrArea).toEqual(0.996);
        expect(result.weightedAverage.class).toEqual(null);
    });

});
