import {WekaResultParserUtils} from './weka-result-parser.utils';
import {RandomForestContainer} from '../model/random-forest-container.model';
import {RandomForest} from '../model/random-forest.model';
import {EvaluationResult} from '../model/evaluation-result.model';

describe('WekaResultParserUtils', () => {

    test('should convert result', () => {
        const result: RandomForestContainer = WekaResultParserUtils.parseRandomForestResult(testResultString);
        expect(result.timeTakenToBuildModel).toEqual(0.56);
        expect(result.timeTakenToTestModelOnTrainingData).toEqual(0.16);
        expect(result.timeTakenToPerformCrossValidation).toEqual(0.6);
    });

    test('should convert a single random forest classifier result', () => {
        const result: RandomForest = WekaResultParserUtils.parseRandomForestClassifierResult(testRandomForestClassifierResult);
        expect(result.attributeImportance[0].includes('      0.54 (     5)  trajectorySimilarityTram')).toEqual(true);
        expect(result.totalModel.length).toEqual(3);
        expect(result.totalModel[0].sizeOfTree).toEqual(477);
    });

    test('should convert an evaluation result (1)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult);
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


const testRandomForestClassifierResult: string = `
=== Classifier model (training fold 1) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationFrequencyBandEnergy9To10Hz < 1.85
|   accelerationFrequencyBandEnergy25To27Hz < 0.48
|   |   accelerationFrequencyBandEnergy1To3Hz < 5.53
|   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.04
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   |   |   acceleration95Quantile < 0.14
|   |   |   |   |   |   accumulatedTravelDistance < 7.81 : stationary (364.18/0)
|   |   |   |   |   |   accumulatedTravelDistance >= 7.81
|   |   |   |   |   |   |   speed50Quantile < 0.07
|   |   |   |   |   |   |   |   maximumTravelDistance < 3.21 : stationary (27.75/4)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 3.21 : stationary (123.33/0)
|   |   |   |   |   |   |   speed50Quantile >= 0.07 : train (14.74/6.74)
|   |   |   |   |   acceleration95Quantile >= 0.14 : train (11/1)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.15
|   |   |   |   |   |   accelerationMedian < 0.04 : stationary (36/4)
|   |   |   |   |   |   accelerationMedian >= 0.04 : train (11/4)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.15 : train (30/4)
|   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.04
|   |   |   |   trajectorySimilarityBus < 50.33
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.61
|   |   |   |   |   |   travelDistance < 23.79
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.33
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 461.22
|   |   |   |   |   |   |   |   |   travelDistance < 0.47 : train (17.21/1.11)
|   |   |   |   |   |   |   |   |   travelDistance >= 0.47 : train (33.91/20.48)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 461.22
|   |   |   |   |   |   |   |   |   speedMax < 1.73
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.08
|   |   |   |   |   |   |   |   |   |   |   speedMax < 0.01 : stationary (28.07/1.07)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 0.01 : train (29.97/14.8)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.08 : bus (21.22/14.22)
|   |   |   |   |   |   |   |   |   speedMax >= 1.73 : bus (10.82/5.82)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.33
|   |   |   |   |   |   |   |   maximumTravelDistance < 1.63 : stationary (38.1/1.63)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 1.63 : stationary (26.46/10.14)
|   |   |   |   |   |   travelDistance >= 23.79
|   |   |   |   |   |   |   accelerationVariance < 0.03
|   |   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.06 : train (3.57/1.42)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.06
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.09 : train (7.47/0.47)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.09 : train (45.27/0)
|   |   |   |   |   |   |   |   speedMin >= 0.01 : tram (16.24/5.24)
|   |   |   |   |   |   |   accelerationVariance >= 0.03
|   |   |   |   |   |   |   |   accelerationMax < 3.12
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.52 : bus (37.2/20)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.52
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.19 : bus (5/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.26 : train (19.41/0.41)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.26 : train (23.87/6.84)
|   |   |   |   |   |   |   |   accelerationMax >= 3.12
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 952.86
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.1 : stationary (1.01/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.5
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.72 : bus (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.72 : bus (11.01/0.5)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.5 : train (0.5/-0)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 952.86 : stationary (9.54/4.29)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.61
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   acceleration25Quantile < 0.04 : car (15/7)
|   |   |   |   |   |   |   acceleration25Quantile >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   accelerationMin < 0.23
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.54
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.33
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 28.09 : train (3.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 28.09
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.27 : bus (34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.27 : bus (6.55/2.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.41 : bus (4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : bus (2.46/0.46)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35 : bus (45/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.33 : train (2.16/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.61
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.15 : train (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.95 : bus (74.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.95 : bus (1.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.81 : bus (1.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.61 : bus (8.96/0.96)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.54 : bus (3.17/2.12)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.23 : car (3/-0)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.91
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.11 : car (7/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.87
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.18 : bus (3.14/1.14)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.18 : bus (37.87/1.58)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.87 : bus (7.93/5.36)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.91 : train (6.33/0.11)
|   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   stationaryPointRatio < 0.03
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (11.58/0.56)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 540.91 : bus (36.83/4.29)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.03 : stationary (15.78/3.78)
|   |   |   |   trajectorySimilarityBus >= 50.33
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.72
|   |   |   |   |   |   speed50Quantile < 2.57
|   |   |   |   |   |   |   acceleration95Quantile < 0.06
|   |   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (35.8/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.27 : train (34.25/1.17)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.27 : stationary (10.7/2.52)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.35
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.3 : train (10.74/3.11)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.3
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.19
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.06 : train (19.48/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.06 : train (85.23/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.19 : train (18.56/2.12)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : train (7.39/3.7)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.35
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.43 : car (39.16/20.99)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.43
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.07 : train (29.23/0.18)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.07 : train (12.24/3.43)
|   |   |   |   |   |   speed50Quantile >= 2.57
|   |   |   |   |   |   |   accelerationMean < 0.34
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.62
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : train (15.75/7.21)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   speedMedian < 10.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.5 : tram (17.68/8.68)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   speedMean < 9.86
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.1 : stationary (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (30.87/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : train (12.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 9.86 : tram (1.03/0.03)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 10.09
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.08 : train (1.65/0.27)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.05 : train (1.37/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.05 : train (111.12/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.62
|   |   |   |   |   |   |   |   |   speedMax < 17.3
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 279.38
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.18 : train (9.52/3)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.18
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.06 : tram (90/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06 : stationary (0.61/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (2.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.83 : tram (7.02/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.18 : tram (45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.18 : train (0.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.32 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 279.38
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.3 : train (48.8/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.3 : train (11.39/0.24)
|   |   |   |   |   |   |   |   |   speedMax >= 17.3
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.3 : train (97.53/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.3 : train (10.71/0.43)
|   |   |   |   |   |   |   accelerationMean >= 0.34
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.3
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.09 : bus (2.32/0.26)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.09
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 101.46 : bus (2.34/0.27)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 101.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.78
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.22 : train (30.11/2.04)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.22 : train (36.66/0.41)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.78
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.2 : train (25.07/3.67)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.2 : train (22.63/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.3
|   |   |   |   |   |   |   |   |   speed95Quantile < 17.64
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.74
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (7/2)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01 : bus (39.29/5.14)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.74 : car (5.64/2.64)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 17.64
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 2.25
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.34 : train (8.52/1.47)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.01 : train (39.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.01 : train (2.84/0.21)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 2.25 : bus (0.42/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.72 : car (76/-0)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 5.53
|   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.65
|   |   |   |   travelDistance < 79.43 : walk (4.04/0.02)
|   |   |   |   travelDistance >= 79.43
|   |   |   |   |   acceleration75Quantile < 4.72 : bike (620.98/0)
|   |   |   |   |   acceleration75Quantile >= 4.72
|   |   |   |   |   |   accelerationMin < 0.1 : bike (7.98/3.98)
|   |   |   |   |   |   accelerationMin >= 0.1 : bike (195/0)
|   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.65 : car (14/0)
|   accelerationFrequencyBandEnergy25To27Hz >= 0.48
|   |   travelDistance < 374.76
|   |   |   speed95Quantile < 2.77
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.01
|   |   |   |   |   speedMax < 1.98 : car (33.38/23.23)
|   |   |   |   |   speedMax >= 1.98 : car (18.31/8.67)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.01
|   |   |   |   |   accumulatedTravelDistance < 24.01 : bus (9.15/4.09)
|   |   |   |   |   accumulatedTravelDistance >= 24.01 : walk (31.52/0.44)
|   |   |   speed95Quantile >= 2.77
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.32
|   |   |   |   |   speedMin < 0.03
|   |   |   |   |   |   travelDistance < 86.66 : bus (23.08/10.98)
|   |   |   |   |   |   travelDistance >= 86.66
|   |   |   |   |   |   |   acceleration50Quantile < 0.53
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.57 : car (9.96/1.96)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.57
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.93 : car (14.39/0.2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.93 : car (35.59/0)
|   |   |   |   |   |   |   acceleration50Quantile >= 0.53 : car (32.37/4.98)
|   |   |   |   |   speedMin >= 0.03 : car (34.62/18.17)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.32
|   |   |   |   |   trajectorySimilarityTrain < 991.84
|   |   |   |   |   |   accelerationVariance < 1.2
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.65
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.55
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.37
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.95
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.3 : car (13.46/6)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.3
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 0.03 : bus (11.3/3.2)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.22
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.06 : bike (0.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.35 : bus (39.66/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.35 : tram (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.2 : bus (174.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.2 : car (0.22/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.22 : bus (11.97/1.97)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.95 : car (7.44/1.83)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.37
|   |   |   |   |   |   |   |   |   |   speedMax < 14.43
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 2.75 : car (10.72/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 2.75 : bus (37.52/14.68)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.69 : bus (13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.36 : car (37.8/18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.61 : bus (37/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.61 : car (12/6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.17 : car (23.08/8.43)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 308.1 : bus (22.92/6.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 308.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.64 : bus (27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.69 : bus (16.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.69 : bus (24.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.29 : car (0.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.1 : car (0.32/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.92 : car (0.32/0)
|   |   |   |   |   |   |   |   |   |   speedMax >= 14.43 : car (16.68/2.29)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.55
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.53
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.31 : bus (105.98/0)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.31 : bus (21.15/0.92)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.53 : bus (14.46/0.46)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.65
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.18 : bus (9.69/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.54 : car (38.44/1.23)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.54
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 61.58 : bus (24.99/4.64)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 61.58
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.6 : car (29.71/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.6 : car (11.57/4.57)
|   |   |   |   |   |   accelerationVariance >= 1.2 : bus (20.75/7.38)
|   |   |   |   |   trajectorySimilarityTrain >= 991.84
|   |   |   |   |   |   accelerationVariance < 0.43
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.59 : bus (26.15/8.15)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.06
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.25
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.11 : car (3.13/1.07)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.11
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.29 : car (9.6/0.47)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.74 : car (101.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.74 : car (11.53/0.07)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.25
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.63 : car (37.14/4.18)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.63 : bus (5.16/1.15)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.11 : bus (12.18/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.11
|   |   |   |   |   |   |   |   |   |   travelDistance < 371.05
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.81 : car (16.94/2.6)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.81 : car (33.53/0)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 371.05 : bus (2.1/0.08)
|   |   |   |   |   |   accelerationVariance >= 0.43
|   |   |   |   |   |   |   headingVariance < 10.23
|   |   |   |   |   |   |   |   speedVariance < 18.44
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.41 : car (1.11/0.11)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.41
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.45 : train (1.25/0.69)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.45 : bus (38.88/0.88)
|   |   |   |   |   |   |   |   speedVariance >= 18.44 : train (4.46/1.38)
|   |   |   |   |   |   |   headingVariance >= 10.23 : car (11.15/1.08)
|   |   travelDistance >= 374.76
|   |   |   trajectorySimilarityTrain < 281.19
|   |   |   |   speed95Quantile < 23.2
|   |   |   |   |   trajectorySimilarityBus < 529.04
|   |   |   |   |   |   accelerationMedian < 0.95
|   |   |   |   |   |   |   accumulatedTravelDistance < 636.54
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 39.3 : bus (34.42/0.98)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 39.3
|   |   |   |   |   |   |   |   |   speed75Quantile < 11.56 : bus (9.39/4.27)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 11.56
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.71 : car (25.18/2.61)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.71 : bus (30.09/12.55)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 636.54
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 126.28 : train (4.17/2.14)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 126.28
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.51 : train (1.52/0.99)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.51
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.51 : bus (10.76/1.76)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.51
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.3 : train (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.29 : bus (49.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.29 : bus (9.15/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.43 : bus (0.79/0.12)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.24 : bus (34.91/0.85)
|   |   |   |   |   |   accelerationMedian >= 0.95 : car (22.3/1.04)
|   |   |   |   |   trajectorySimilarityBus >= 529.04 : car (26.24/3.71)
|   |   |   |   speed95Quantile >= 23.2
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.6
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.52
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.58
|   |   |   |   |   |   |   |   accelerationMax < 3.24
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.1 : train (45.26/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.1 : train (8.07/0.07)
|   |   |   |   |   |   |   |   accelerationMax >= 3.24 : train (2.31/0.31)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.58 : train (10.15/1.08)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.52 : car (2.72/0.12)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.6 : car (28.04/1.56)
|   |   |   trajectorySimilarityTrain >= 281.19
|   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.17
|   |   |   |   |   |   accelerationMedian < 0.43
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.01
|   |   |   |   |   |   |   |   speed75Quantile < 11.64 : tram (23.44/6.01)
|   |   |   |   |   |   |   |   speed75Quantile >= 11.64
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.08 : bus (11.49/3.49)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.08 : car (37.74/7.74)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.01 : train (16/8)
|   |   |   |   |   |   accelerationMedian >= 0.43
|   |   |   |   |   |   |   maximumTravelDistance < 16.51
|   |   |   |   |   |   |   |   speed95Quantile < 15.56
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.75
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.41
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 70.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81 : bus (8.4/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.76 : bus (3.17/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.43 : car (13.15/2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.43 : car (29.74/0.04)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 70.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.72 : tram (0.6/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 12.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.32 : car (49.86/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.32 : car (16.84/0.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 12.5 : bike (0.06/-0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.24 : train (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.84 : car (101.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.84 : car (3.12/0.12)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.41 : bus (13.71/5.24)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.75 : bus (27.32/13.97)
|   |   |   |   |   |   |   |   speed95Quantile >= 15.56 : bus (36.38/18.08)
|   |   |   |   |   |   |   maximumTravelDistance >= 16.51
|   |   |   |   |   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.64
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.83 : car (26.36/11.39)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.83
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.35 : car (242.83/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.35
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.02
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.29 : car (3.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.29 : car (39.9/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.36 : bus (1.22/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.02 : bus (0.49/-0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.64 : bus (15.68/0.98)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   |   |   |   |   speed95Quantile < 23.66
|   |   |   |   |   |   |   |   |   |   accelerationMax < 7.12
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.55 : car (31.46/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.55 : car (375.34/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.13 : car (26.73/0.49)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.12
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.4 : car (8.91/2.91)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.4 : car (50/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 23.66 : bus (2.04/0.04)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.17
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.43 : train (6.67/0.67)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.43
|   |   |   |   |   |   |   accelerationMax < 14.69
|   |   |   |   |   |   |   |   headingVariance < 1.22
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.47 : bus (17.02/0.41)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.47 : bus (47.44/0)
|   |   |   |   |   |   |   |   headingVariance >= 1.22
|   |   |   |   |   |   |   |   |   accelerationMax < 11.88 : bus (35.21/7.26)
|   |   |   |   |   |   |   |   |   accelerationMax >= 11.88 : car (6/-0)
|   |   |   |   |   |   |   accelerationMax >= 14.69 : car (14.67/1.67)
|   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.33 : train (16.14/10.21)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.33
|   |   |   |   |   |   accelerationVariance < 0.46
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.06 : tram (0.95/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.95
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.44 : car (170.93/0)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.44 : car (16.24/0.24)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.95 : car (8.66/0.95)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.18 : car (714.55/0)
|   |   |   |   |   |   accelerationVariance >= 0.46 : car (28.63/10.68)
accelerationFrequencyBandEnergy9To10Hz >= 1.85
|   accelerationMean < 4.13
|   |   accelerationFrequencyBandEnergy28To30Hz < 2.93
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 5.86
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.13
|   |   |   |   |   travelDistance < 91.22 : walk (19.89/4.89)
|   |   |   |   |   travelDistance >= 91.22 : bus (35.11/1)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.13 : stationary (8/4)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 5.86 : walk (64/0)
|   |   accelerationFrequencyBandEnergy28To30Hz >= 2.93
|   |   |   accelerationMax < 65.3
|   |   |   |   speed95Quantile < 2.99 : walk (4.07/0.04)
|   |   |   |   speed95Quantile >= 2.99
|   |   |   |   |   speed95Quantile < 9.68
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 3.27 : bike (3.97/0.97)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 3.27 : bike (175.95/0)
|   |   |   |   |   speed95Quantile >= 9.68 : bus (1.02/0.02)
|   |   |   accelerationMax >= 65.3 : bus (14/4)
|   accelerationMean >= 4.13
|   |   accelerationMedian < 4.25
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 9.44 : walk (89/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 9.44 : bike (17/0)
|   |   accelerationMedian >= 4.25
|   |   |   speedMean < 3.08 : walk (1498.78/0)
|   |   |   speedMean >= 3.08 : bike (3.22/0.22)

Size of the tree : 477


RandomTree
==========

accelerationFrequencyBandEnergy1To3Hz < 6.91
|   accelerationMean < 0.4
|   |   accelerationFrequencyBandEnergy8To10Hz < 0.09
|   |   |   accelerationVariance < 0.01
|   |   |   |   accelerationMean < 0.04
|   |   |   |   |   speed75Quantile < 0.21
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   |   |   |   |   accelerationMax < 0.1 : stationary (249.17/0)
|   |   |   |   |   |   |   accelerationMax >= 0.1
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.08 : stationary (28/1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.08 : stationary (259.77/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04 : stationary (20.66/0.97)
|   |   |   |   |   speed75Quantile >= 0.21 : stationary (16.4/3.03)
|   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.09 : stationary (25/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.09 : train (38/12)
|   |   |   accelerationVariance >= 0.01 : car (20/13)
|   |   accelerationFrequencyBandEnergy8To10Hz >= 0.09
|   |   |   speedMean < 5.33
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.36
|   |   |   |   |   |   |   accelerationMedian < 0.23
|   |   |   |   |   |   |   |   speedVariance < 13.44
|   |   |   |   |   |   |   |   |   speedMedian < 2.49
|   |   |   |   |   |   |   |   |   |   accelerationMax < 1.65
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.71 : train (34.27/6.26)
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.71 : train (35.41/7.27)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.65
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.17 : car (5.53/0.53)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 875.58 : bus (25.87/5.87)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 875.58 : train (18.32/6.29)
|   |   |   |   |   |   |   |   |   speedMedian >= 2.49 : tram (18.97/8.97)
|   |   |   |   |   |   |   |   speedVariance >= 13.44
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.18
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.08 : train (14.22/0.74)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.08 : train (31.06/0)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.18 : train (17.21/2.19)
|   |   |   |   |   |   |   accelerationMedian >= 0.23 : bus (15.3/2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.36 : car (22.09/5.09)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.29
|   |   |   |   |   |   |   speedVariance < 5.54 : bus (35.46/18.13)
|   |   |   |   |   |   |   speedVariance >= 5.54
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 59.31
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.78 : car (5.07/1.07)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.78
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 312.17
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.89
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.14 : stationary (0.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.85 : bus (17.53/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.59 : bus (16.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.59 : bus (30.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.91 : bus (2.35/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (0.53/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.89 : train (2.23/1.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.94 : car (1.35/0.35)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 312.17 : train (1.06/0.03)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 59.31 : bus (16.12/7.97)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.29
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.36 : car (33.19/5.19)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.36 : car (10.3/3.3)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.76 : bus (7.09/2.09)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   stationaryPointRatio < 0.77
|   |   |   |   |   |   acceleration75Quantile < 0.33
|   |   |   |   |   |   |   speed50Quantile < 0.1 : train (7.86/3.19)
|   |   |   |   |   |   |   speed50Quantile >= 0.1
|   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (24.55/6.87)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.06 : stationary (37.24/2.06)
|   |   |   |   |   |   acceleration75Quantile >= 0.33 : stationary (28.77/4.77)
|   |   |   |   |   stationaryPointRatio >= 0.77
|   |   |   |   |   |   accelerationMedian < 0.06
|   |   |   |   |   |   |   accelerationMax < 0.68 : train (12.39/0)
|   |   |   |   |   |   |   accelerationMax >= 0.68
|   |   |   |   |   |   |   |   headingVariance < 2.28 : stationary (31.76/8.06)
|   |   |   |   |   |   |   |   headingVariance >= 2.28
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 8.62 : car (2.05/0.05)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 8.62
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.07 : stationary (45.6/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.07 : stationary (27.13/0.13)
|   |   |   |   |   |   accelerationMedian >= 0.06
|   |   |   |   |   |   |   accelerationMean < 0.17
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.2
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 17.61 : bus (39.79/14.79)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 17.61 : train (23.87/0.45)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.2 : bus (18.59/4.59)
|   |   |   |   |   |   |   accelerationMean >= 0.17
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.07
|   |   |   |   |   |   |   |   |   accelerationMean < 0.27 : train (48.13/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.27 : train (5.96/1.98)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.07 : train (19.22/9.96)
|   |   |   speedMean >= 5.33
|   |   |   |   speedMax < 17.58
|   |   |   |   |   trajectorySimilarityTram < 283.79
|   |   |   |   |   |   accelerationMin < 0.01 : train (7.54/2.51)
|   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.44 : train (3.79/1.28)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.44
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.62
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.18 : tram (8.26/1.26)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.18
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.42
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.52 : tram (4.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.32 : tram (99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.32 : tram (4.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.18 : tram (11.98/0.98)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.25 : tram (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.25 : tram (14.28/0.28)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.49 : train (0.42/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.62 : tram (8.82/1.82)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62 : train (0.84/0)
|   |   |   |   |   trajectorySimilarityTram >= 283.79
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.98
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.44
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.29 : train (3.84/0.73)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.29 : train (112.49/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.44 : train (28.31/4.57)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.98 : bus (27.06/13.06)
|   |   |   |   speedMax >= 17.58
|   |   |   |   |   acceleration25Quantile < 0.08 : train (32.13/2.78)
|   |   |   |   |   acceleration25Quantile >= 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.59
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.26 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.26 : train (133.61/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.08 : train (1.87/0.17)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.08 : train (47/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.76 : train (4.35/0.35)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.59 : train (24.74/1.39)
|   accelerationMean >= 0.4
|   |   speed50Quantile < 9.39
|   |   |   speed95Quantile < 2
|   |   |   |   speed25Quantile < 0.04
|   |   |   |   |   accelerationVariance < 2.62
|   |   |   |   |   |   accelerationMedian < 0.6 : bus (33.99/7.46)
|   |   |   |   |   |   accelerationMedian >= 0.6 : car (25.6/8.03)
|   |   |   |   |   accelerationVariance >= 2.62 : walk (21.13/4.07)
|   |   |   |   speed25Quantile >= 0.04 : stationary (32.93/5.9)
|   |   |   speed95Quantile >= 2
|   |   |   |   trajectorySimilarityTrain < 951.47
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.9
|   |   |   |   |   |   accelerationMean < 1.11
|   |   |   |   |   |   |   accelerationMax < 1.81 : train (28.41/10)
|   |   |   |   |   |   |   accelerationMax >= 1.81
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 28.18 : train (13.44/3.38)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 28.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.93
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.36
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.84
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.27 : train (1.58/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.15 : car (2.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.02 : bus (87.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.02 : bus (1.34/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.97 : car (2.01/1)
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.03 : car (21.52/9.32)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.84
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.37 : bus (13.37/1.08)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.29 : bus (12.51/1.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.29 : bus (47.29/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.36 : car (21.8/5.86)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.93
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.46 : bus (12.22/4.22)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.59
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.41
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.98 : bus (23.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.98 : bus (47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.25 : bus (23.37/1.94)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.41 : car (1.43/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.59
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.04
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.95 : bus (130.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.95 : bus (34.43/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.04 : bus (38.94/0.43)
|   |   |   |   |   |   accelerationMean >= 1.11 : bike (14.98/6.98)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.9
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.66
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.02 : car (33.43/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.02
|   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : car (15.22/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (27.54/11.22)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.66
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.51
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.6
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.8 : bus (34.11/2.44)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.8 : car (12.22/6)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.6
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.46 : bus (29.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.46 : bus (22.76/1.77)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.51 : car (12.22/2.22)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.66
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.95 : bus (71.1/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.95 : bus (4.88/0.88)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.66
|   |   |   |   |   |   |   trajectorySimilarityBus < 61.58
|   |   |   |   |   |   |   |   travelDistance < 196.52 : car (31.12/4.15)
|   |   |   |   |   |   |   |   travelDistance >= 196.52 : bus (33.35/7.94)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 61.58
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.22
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.52 : car (7.18/0.86)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.52
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 1.11
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.94 : car (28.69/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.94 : car (16.08/0.22)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 1.11 : bus (0.86/0.32)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.22 : bike (8.32/-0)
|   |   |   |   trajectorySimilarityTrain >= 951.47
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.74
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.68
|   |   |   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.32 : train (5.13/2.4)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.32
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.06 : bus (35.62/10.47)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.06 : car (19.16/3.16)
|   |   |   |   |   |   |   accelerationMin >= 0.06 : tram (19.86/8.78)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.68
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.87
|   |   |   |   |   |   |   |   speedVariance < 19.01
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.21
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : tram (0.03/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.52 : car (25.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.52 : car (15.8/0.06)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.1 : car (0.21/0.03)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.21 : car (14.25/5.12)
|   |   |   |   |   |   |   |   speedVariance >= 19.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.48 : car (43.66/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.48
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.34 : bike (0.14/0.05)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.78 : car (6.04/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.78 : car (35.94/0.05)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.41 : bus (0.09/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.87 : tram (3/1)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.74
|   |   |   |   |   |   accelerationVariance < 0.96
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.16 : bus (26.78/2.55)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.16
|   |   |   |   |   |   |   |   maximumTravelDistance < 11.98 : bus (37.58/17.3)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 11.98 : car (37.58/1.68)
|   |   |   |   |   |   accelerationVariance >= 0.96 : bus (14.48/4.86)
|   |   speed50Quantile >= 9.39
|   |   |   speed95Quantile < 23.87
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.39
|   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.45
|   |   |   |   |   |   |   acceleration50Quantile < 0.14 : train (4.49/2.49)
|   |   |   |   |   |   |   acceleration50Quantile >= 0.14 : train (37.81/2.66)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.45
|   |   |   |   |   |   |   accelerationMin < 0.03 : bus (25.73/6.07)
|   |   |   |   |   |   |   accelerationMin >= 0.03 : train (28.61/4.32)
|   |   |   |   |   accelerationMin >= 0.06
|   |   |   |   |   |   accelerationMedian < 0.8 : train (12.24/5.24)
|   |   |   |   |   |   accelerationMedian >= 0.8
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.89 : car (10.73/3.73)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.89 : car (52.32/0)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.39
|   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   trajectorySimilarityTrain < 830.76
|   |   |   |   |   |   |   accelerationMax < 7.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.92
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.46 : bus (28.18/10.54)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.46
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.31 : bus (8.64/0.32)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.31 : bus (59.09/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.92
|   |   |   |   |   |   |   |   |   speed50Quantile < 19.49
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.54
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 192.78
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.38 : car (36.82/1.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.38 : bus (5.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 192.78 : bus (13.28/2.25)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.54 : bus (32.54/2.23)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.6
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.52 : car (3.31/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.52 : car (85.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.6 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.7 : bus (19.77/3.31)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.7 : car (23.77/9)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 19.49
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.77 : bus (28.78/0.55)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.77 : bus (26.94/6.88)
|   |   |   |   |   |   |   accelerationMax >= 7.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.68 : tram (7.57/2.57)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.68
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.31 : train (3.32/0.16)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.31
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.63 : train (0.8/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.63
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.6 : bus (18.09/0.8)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.6 : bus (25.09/0.8)
|   |   |   |   |   |   trajectorySimilarityTrain >= 830.76
|   |   |   |   |   |   |   accelerationMax < 4.18
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.46
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62 : car (26.54/0.76)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 68.28 : bus (25/6)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 68.28 : car (28/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.46
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.31
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 12.41
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.48
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.95 : car (7.12/1.01)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.95
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.96 : car (10.64/0.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.96 : car (66.64/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.48 : bus (8.19/-0)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 12.41
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.04 : car (19.57/0.57)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.97 : car (255.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.97 : bus (0.19/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.31 : bus (4/-0)
|   |   |   |   |   |   |   accelerationMax >= 4.18
|   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   accelerationMax < 7
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.49 : bus (11.61/2.03)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.49 : car (34.52/1.76)
|   |   |   |   |   |   |   |   |   accelerationMax >= 7 : train (23.13/10.61)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.28
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 16.18 : bus (29.61/10.03)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 16.18
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.69 : car (28.59/4.13)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.14
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.63 : car (13.94/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.63 : car (41.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.14 : car (1.38/0.38)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.28 : bus (37.52/8.51)
|   |   |   |   |   accelerationMin >= 0.07
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.26
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.83 : car (366.3/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.83
|   |   |   |   |   |   |   |   accelerationMedian < 0.8 : car (21.24/4.83)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.8
|   |   |   |   |   |   |   |   |   speed75Quantile < 11.39 : bus (1.01/0.01)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 11.39
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.03 : car (1.82/0.82)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.03 : car (128.82/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.26 : bus (23.9/7.49)
|   |   |   speed95Quantile >= 23.87
|   |   |   |   accelerationMean < 0.73
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.79
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.55
|   |   |   |   |   |   |   accelerationMax < 3.21
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.37 : train (10.68/2.6)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.37
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.64
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11 : train (43.04/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : train (27.04/1.04)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.64 : tram (0.26/-0)
|   |   |   |   |   |   |   accelerationMax >= 3.21 : train (14.15/8.85)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.55 : car (4.56/-0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.79 : train (35.81/1.3)
|   |   |   |   accelerationMean >= 0.73
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.37 : car (35.19/7.98)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.37
|   |   |   |   |   |   accelerationVariance < 0.51
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.72
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.72
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.62 : bus (0.26/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.62
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.32 : car (147.42/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.32 : bus (0.26/-0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.72 : bus (0.52/-0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.72
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.37
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.68 : car (183.86/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.68 : car (17.26/0.26)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.37 : car (602.59/0)
|   |   |   |   |   |   accelerationVariance >= 0.51 : bus (15.71/8.42)
accelerationFrequencyBandEnergy1To3Hz >= 6.91
|   speedMin < 1.85
|   |   speed50Quantile < 2.15
|   |   |   accelerationMedian < 1.99
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 2.06 : bike (17.44/7.6)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 2.06 : walk (38.06/16.25)
|   |   |   accelerationMedian >= 1.99
|   |   |   |   travelDistance < 239.24 : walk (1661.05/0)
|   |   |   |   travelDistance >= 239.24 : bike (6.32/1.32)
|   |   speed50Quantile >= 2.15
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 11.62 : bus (12.46/7.3)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 11.62
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 8.78
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.64
|   |   |   |   |   |   acceleration50Quantile < 2.58 : bike (31.04/0)
|   |   |   |   |   |   acceleration50Quantile >= 2.58
|   |   |   |   |   |   |   accelerationMin < 0.12 : bike (10.16/0.12)
|   |   |   |   |   |   |   accelerationMin >= 0.12 : bike (34/0)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.64 : bike (16.12/0.12)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 8.78 : bike (9.67/2.47)
|   speedMin >= 1.85
|   |   accelerationFrequencyBandEnergy10To14Hz < 2.47
|   |   |   acceleration50Quantile < 2.76 : bike (393.42/0)
|   |   |   acceleration50Quantile >= 2.76
|   |   |   |   acceleration95Quantile < 2.84 : bike (168.71/0)
|   |   |   |   acceleration95Quantile >= 2.84
|   |   |   |   |   accelerationMin < 0.1 : walk (2.07/1)
|   |   |   |   |   accelerationMin >= 0.1 : bike (190/0)
|   |   accelerationFrequencyBandEnergy10To14Hz >= 2.47
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 7.3
|   |   |   |   acceleration25Quantile < 3.81 : bus (36.12/5.7)
|   |   |   |   acceleration25Quantile >= 3.81 : walk (9.55/1)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 7.3
|   |   |   |   speed50Quantile < 12.41
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 3.86
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 11.09 : bike (37.67/1.34)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 11.09 : bike (89/0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 3.86
|   |   |   |   |   |   acceleration25Quantile < 3.82 : bike (34.68/7.01)
|   |   |   |   |   |   acceleration25Quantile >= 3.82
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 7.26 : walk (24.38/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 7.26 : bike (16.67/1.67)
|   |   |   |   speed50Quantile >= 12.41 : car (13.41/7.41)

Size of the tree : 447


RandomTree
==========

accelerationFrequencyBandEnergy8To9Hz < 2.82
|   accelerationMedian < 0.73
|   |   accelerationFrequencyBandEnergy8To9Hz < 0.05
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.17
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.05
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.01 : stationary (107/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.01 : train (4/0)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.08 : stationary (302/0)
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.05
|   |   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.05
|   |   |   |   |   |   |   acceleration95Quantile < 0.08
|   |   |   |   |   |   |   |   speedVariance < 0.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.1 : stationary (52.3/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.1 : train (4.81/2)
|   |   |   |   |   |   |   |   speedVariance >= 0.01 : train (3.89/0.7)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.08 : train (8/3)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.05 : stationary (103/0)
|   |   |   |   |   accelerationMedian >= 0.04 : train (4/1)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.17
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.08 : train (28/0)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.08
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.28 : stationary (24/12)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.28 : train (18/4)
|   |   accelerationFrequencyBandEnergy8To9Hz >= 0.05
|   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.53
|   |   |   |   maximumTravelDistance < 17.73
|   |   |   |   |   speed25Quantile < 1.68
|   |   |   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   |   |   accelerationMax < 1.6
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 820.69
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (36.73/5.48)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01 : bus (12.76/3.76)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 820.69
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.13 : train (38.76/0.54)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.13 : train (16.92/6)
|   |   |   |   |   |   |   accelerationMax >= 1.6
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.28
|   |   |   |   |   |   |   |   |   speedMax < 8.18
|   |   |   |   |   |   |   |   |   |   speedMax < 6.15 : bus (21.27/9.19)
|   |   |   |   |   |   |   |   |   |   speedMax >= 6.15
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.21 : bus (16.34/4.34)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.21 : bus (27.26/1.1)
|   |   |   |   |   |   |   |   |   speedMax >= 8.18
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.07 : train (10.55/3.41)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.07
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 3.44
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.26 : bus (15.76/7.76)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.26 : car (25.42/1.42)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.18 : bus (10.98/2.87)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 3.44 : bus (13.84/3.78)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.28
|   |   |   |   |   |   |   |   |   accelerationMean < 0.39
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.62
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.29 : bus (8.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.29 : bus (58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.27 : train (2.37/1)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.62 : train (7.2/3.06)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 0.01 : train (14.4/6.12)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.39
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.2
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.07 : bus (12.63/5.79)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.48 : bus (20.44/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.48 : bus (31.74/2.47)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.63 : car (0.62/-0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.2
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : bus (52.51/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : bus (11.53/1.53)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   accelerationMean < 0.29
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.08
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.03
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.1
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.31
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.25 : stationary (8.38/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.25 : train (37.06/9.06)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.31 : stationary (27.55/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.1 : bus (19.67/8.67)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.03
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.24 : stationary (30.88/12.35)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.24 : stationary (12.06/3.53)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.08
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.15
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 26.48 : bus (34.94/11.94)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 26.48 : train (18.04/3.06)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.15 : train (36.71/6)
|   |   |   |   |   |   |   accelerationMean >= 0.29
|   |   |   |   |   |   |   |   speedMin < 0.01 : bus (19.93/5.07)
|   |   |   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.45 : train (9.49/4.99)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.45
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.48
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.55 : bus (0.99/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.38 : stationary (60.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.38 : stationary (1.28/0.28)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.48 : stationary (6.36/4.36)
|   |   |   |   |   speed25Quantile >= 1.68
|   |   |   |   |   |   accelerationMax < 1.51
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.55
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 851.42 : train (13.89/0.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 851.42 : train (38.89/18.75)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.55
|   |   |   |   |   |   |   |   speed95Quantile < 10.54 : tram (17.67/7.67)
|   |   |   |   |   |   |   |   speed95Quantile >= 10.54
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.31
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.14 : train (4.28/2)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.14
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.18 : tram (61/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.18 : tram (5.91/0.91)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.2 : tram (69/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.31 : train (3.65/0)
|   |   |   |   |   |   accelerationMax >= 1.51
|   |   |   |   |   |   |   speedMean < 8.93
|   |   |   |   |   |   |   |   accelerationMean < 0.35
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.93 : train (6.88/2.44)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.93
|   |   |   |   |   |   |   |   |   |   speedVariance < 12.7
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.09
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.4 : tram (34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.4 : tram (11.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.29 : train (0.67/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.09 : tram (7.67/3.67)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 12.7 : train (4.2/0.05)
|   |   |   |   |   |   |   |   accelerationMean >= 0.35
|   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.27 : tram (4.42/0.37)
|   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.27
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : tram (4.42/1.37)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.31 : bus (18.31/3.99)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.44 : bus (28.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.99 : train (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.99
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (0.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : bus (40/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.55 : bus (18.5/1.16)
|   |   |   |   |   |   |   speedMean >= 8.93
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 247.47 : tram (8.9/0.83)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 247.47
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.66 : train (30.62/2.14)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.66 : bus (36.14/15.81)
|   |   |   |   maximumTravelDistance >= 17.73
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.13
|   |   |   |   |   |   accelerationMin < 0.01
|   |   |   |   |   |   |   speedMax < 2.59 : stationary (19.85/0.88)
|   |   |   |   |   |   |   speedMax >= 2.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.14
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.02 : train (16/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.02 : train (27.01/1.07)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.14 : stationary (0.64/0)
|   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.24 : bus (2.81/0.62)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.24
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.48 : train (73.25/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.48
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.15 : train (84.87/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.15 : train (4.62/0.62)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.13
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.15 : train (29.06/8)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.15
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.66
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.25 : train (17.12/1.87)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.25
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.27
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.35 : train (115.62/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.35 : train (12.75/0.94)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.27
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.29 : bus (1.25/0.31)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.29
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (5/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.78
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 614.63 : train (12.64/2.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 614.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.47 : train (49.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.79
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.54 : train (71.84/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.54 : tram (1.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.79 : tram (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.78 : train (25.37/3.12)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.66 : walk (2/-0)
|   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.53
|   |   |   |   trajectorySimilarityTrain < 250.91
|   |   |   |   |   accelerationMin < 0.01 : bike (29.34/16)
|   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   maximumTravelDistance < 24.16
|   |   |   |   |   |   |   maximumTravelDistance < 14.38
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 19.14 : bus (16.88/5.61)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 19.14
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.18 : bike (1/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.18
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : bus (10.16/1.16)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : bus (87.39/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.31 : car (2.19/1.19)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.31
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 242.78
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.24 : bus (39.77/6.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.24 : bus (33.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 242.78 : car (1.07/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.92
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.74 : car (1.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.74
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 24.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.48 : bus (35.97/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.06 : bus (22.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.06 : bus (28.07/1.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 24.34 : bus (8.97/0.97)
|   |   |   |   |   |   |   maximumTravelDistance >= 14.38
|   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.51 : car (31.48/6.92)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.51 : bus (15.25/0.82)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   speedMedian < 13.99
|   |   |   |   |   |   |   |   |   |   speedMean < 10.49 : bus (30.55/2.36)
|   |   |   |   |   |   |   |   |   |   speedMean >= 10.49 : car (20.37/4.13)
|   |   |   |   |   |   |   |   |   speedMedian >= 13.99
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 1.45
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.16 : car (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.16
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.43 : bus (9.15/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.43 : bus (35.24/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.08 : bus (1.19/0.19)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1.45 : car (0.19/0)
|   |   |   |   |   |   maximumTravelDistance >= 24.16
|   |   |   |   |   |   |   accumulatedTravelDistance < 385.68 : bus (1.05/0.04)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 385.68
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.48
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.24
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.13 : train (37.24/0.03)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.13 : train (9.97/0.87)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.24 : bus (0.55/0.1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.48 : car (0.76/0.31)
|   |   |   |   trajectorySimilarityTrain >= 250.91
|   |   |   |   |   accelerationMax < 9
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.95
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.76
|   |   |   |   |   |   |   |   accelerationMedian < 0.36
|   |   |   |   |   |   |   |   |   speed25Quantile < 2.84
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.84
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.25 : car (56/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.25 : car (1.5/0.5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.84 : bus (5.5/1)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 2.84 : tram (20.32/8.16)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.36
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.74 : car (39.25/19.6)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.74
|   |   |   |   |   |   |   |   |   |   travelDistance < 242.25 : bus (20/8)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 242.25 : bus (25/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.76
|   |   |   |   |   |   |   |   accelerationMedian < 0.34 : bus (15/7)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.02 : bus (29.21/12)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.02
|   |   |   |   |   |   |   |   |   |   speedMin < 2.13 : bus (41.3/0)
|   |   |   |   |   |   |   |   |   |   speedMin >= 2.13 : bus (21.15/4)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.95
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.27
|   |   |   |   |   |   |   |   maximumTravelDistance < 16.12
|   |   |   |   |   |   |   |   |   accelerationMean < 0.63
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 4.96 : bus (1.06/0.06)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 4.96
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.61 : car (115.65/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.61 : bus (3/1)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.63
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 61.28 : bus (37.25/18.13)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 61.28
|   |   |   |   |   |   |   |   |   |   |   headingVariance < 0.55 : bus (3.1/0.09)
|   |   |   |   |   |   |   |   |   |   |   headingVariance >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.61 : car (5.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.61 : car (49.66/0)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 16.12
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.85 : car (26.34/1.34)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.85 : car (200.11/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.27
|   |   |   |   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.94
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.29 : bus (23.66/1.66)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.29
|   |   |   |   |   |   |   |   |   |   |   speedMean < 4.7 : bus (1.06/0.05)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 4.7
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.78 : car (2.1/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.78 : car (39.83/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.4 : bus (0.64/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.94
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 139.15
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 221.34 : car (1.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 221.34 : bus (96.04/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 139.15 : train (3.35/1.35)
|   |   |   |   |   |   |   |   accelerationMin >= 0.07 : car (19/3)
|   |   |   |   |   accelerationMax >= 9
|   |   |   |   |   |   speedMedian < 1.11 : stationary (32.17/16.17)
|   |   |   |   |   |   speedMedian >= 1.11
|   |   |   |   |   |   |   trajectorySimilarityBus < 117.47 : bus (25.52/2.29)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 117.47 : train (15.53/7.84)
|   accelerationMedian >= 0.73
|   |   accelerationFrequencyBandEnergy1To3Hz < 6.63
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.23
|   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.42
|   |   |   |   |   |   mediumSpeedPointRatio < 0.98
|   |   |   |   |   |   |   accelerationVariance < 0.15 : bus (37.89/1.89)
|   |   |   |   |   |   |   accelerationVariance >= 0.15
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.34 : car (25.42/10.18)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.34 : car (16.94/1.12)
|   |   |   |   |   |   mediumSpeedPointRatio >= 0.98
|   |   |   |   |   |   |   maximumTravelDistance < 15.05 : bus (10.42/5.38)
|   |   |   |   |   |   |   maximumTravelDistance >= 15.05
|   |   |   |   |   |   |   |   acceleration50Quantile < 1.31 : car (151/0)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 1.31 : car (30.33/0.67)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.42
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.92
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.74
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.01 : bus (36/1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.01 : car (8/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.74 : car (18/3)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.92
|   |   |   |   |   |   |   accelerationMax < 2.22 : train (3/0)
|   |   |   |   |   |   |   accelerationMax >= 2.22 : bus (47/0)
|   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   speed25Quantile < 7.39
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.14 : bike (5/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.14
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.02 : car (26/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.02
|   |   |   |   |   |   |   |   acceleration75Quantile < 1.08
|   |   |   |   |   |   |   |   |   headingVariance < 4.38
|   |   |   |   |   |   |   |   |   |   speedMedian < 1.68 : car (9.17/4.1)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 1.68 : bus (31.57/2.29)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.38 : car (29.54/2.33)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 1.08
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.68 : bus (1.72/0.72)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.68 : car (38.96/0.08)
|   |   |   |   |   speed25Quantile >= 7.39
|   |   |   |   |   |   accelerationVariance < 0.33
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.13
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.57
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.25 : bus (0.92/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.25 : car (164.76/0)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.57 : car (1205.12/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.13
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.26 : bus (9.76/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.26 : car (49/0)
|   |   |   |   |   |   accelerationVariance >= 0.33
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.97
|   |   |   |   |   |   |   |   accelerationMax < 4.88 : bus (26.84/10.84)
|   |   |   |   |   |   |   |   accelerationMax >= 4.88
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.76
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.56 : car (8.68/3.76)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.09 : car (20.92/0.92)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.09 : car (33/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.76 : car (25.68/10.68)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.97
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.32 : car (4.84/1.84)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.32
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.21 : car (85.76/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.21 : car (4.76/1)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.23
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.02
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.01 : train (3/0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.01
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.69 : car (41/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.69 : train (1/0)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.02
|   |   |   |   |   speed75Quantile < 24.04
|   |   |   |   |   |   travelDistance < 177.12 : bike (10.56/6.52)
|   |   |   |   |   |   travelDistance >= 177.12
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.43
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 119.25 : bus (30.38/2.38)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 119.25 : car (32.41/4.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.43 : car (26.37/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.43
|   |   |   |   |   |   |   |   speedMax < 7.53 : car (7.51/0.45)
|   |   |   |   |   |   |   |   speedMax >= 7.53
|   |   |   |   |   |   |   |   |   accelerationMean < 1.79
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.94
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.91 : car (0.73/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.91 : bus (84.67/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.94 : bus (11.47/2)
|   |   |   |   |   |   |   |   |   accelerationMean >= 1.79 : bike (0.73/-0)
|   |   |   |   |   speed75Quantile >= 24.04
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.42
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.59 : train (0.17/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.59 : car (39.84/0.17)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.42 : bus (1.17/0.17)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 6.63
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.91
|   |   |   |   mediumSpeedPointRatio < 0.01 : walk (11.14/5.11)
|   |   |   |   mediumSpeedPointRatio >= 0.01
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.41
|   |   |   |   |   |   accelerationMax < 13.45
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 16.74 : bike (98.96/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 16.74 : bike (11.98/1.98)
|   |   |   |   |   |   accelerationMax >= 13.45 : bike (767.95/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.41 : car (1.98/-0)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.91
|   |   |   |   travelDistance < 311.87
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 9.37 : walk (10.25/4.25)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 9.37 : bike (38.59/0)
|   |   |   |   travelDistance >= 311.87
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.94 : car (7/0)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.94 : bus (36.16/3.41)
accelerationFrequencyBandEnergy8To9Hz >= 2.82
|   speedMax < 3.87
|   |   accelerationFrequencyBandEnergy25To27Hz < 11.28 : walk (1664.39/0)
|   |   accelerationFrequencyBandEnergy25To27Hz >= 11.28 : walk (7.69/2.69)
|   speedMax >= 3.87
|   |   speed95Quantile < 10.38
|   |   |   accelerationMin < 0.26
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.63 : walk (2.76/0)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.63
|   |   |   |   |   accelerationMax < 21.51 : bike (13.96/2.96)
|   |   |   |   |   accelerationMax >= 21.51
|   |   |   |   |   |   acceleration75Quantile < 3.08 : bike (100.2/0)
|   |   |   |   |   |   acceleration75Quantile >= 3.08
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 5.36
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 13.03 : bike (9.1/0.1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 13.03 : bike (40/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 5.36 : bike (12.28/1.18)
|   |   |   accelerationMin >= 0.26 : walk (5.92/-0)
|   |   speed95Quantile >= 10.38 : bus (9.7/0.7)

Size of the tree : 443



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.54 (     5)  trajectorySimilarityTram
      0.35 (     6)  speedMin
      0.31 (    17)  trajectorySimilarityBus
      0.31 (     5)  headingVariance
      0.3  (    11)  speedMax
      0.26 (    13)  travelDistance
      0.26 (     5)  lowSpeedPointRatio
      0.25 (     8)  speedMedian
      0.25 (     6)  speed25Quantile
      0.21 (     1)  highSpeedPointRatio
      0.21 (    42)  accelerationFrequencyBandEnergy1To3Hz
      0.2  (     5)  stationaryPointRatio
      0.19 (     6)  speedMean
      0.19 (    26)  accelerationFrequencyBandEnergy14To20Hz
      0.18 (    19)  accelerationFrequencyBandEnergy25To30Hz
      0.18 (    18)  trajectorySimilarityTrain
      0.18 (    18)  accelerationFrequencyBandEnergy28To30Hz
      0.18 (    23)  accelerationFrequencyBandEnergy8To10Hz
      0.17 (    35)  accelerationMedian
      0.17 (    13)  speed95Quantile
      0.17 (    14)  accelerationFrequencyBandEnergy27To28Hz
      0.17 (     6)  accumulatedTravelDistance
      0.16 (    10)  speed50Quantile
      0.16 (    23)  accelerationMin
      0.16 (    13)  maximumTravelDistance
      0.16 (     4)  mediumSpeedPointRatio
      0.15 (    22)  accelerationFrequencyBandEnergy9To10Hz
      0.15 (    32)  accelerationMax
      0.15 (     7)  speed75Quantile
      0.14 (     7)  speedVariance
      0.14 (    21)  accelerationFrequencyBandEnergy25To27Hz
      0.14 (    35)  accelerationMean
      0.14 (    22)  accelerationFrequencyBandEnergy8To9Hz
      0.14 (    52)  accelerationFrequencyBandEnergy10To14Hz
      0.14 (    37)  accelerationVariance
      0.11 (    13)  accelerationFrequencyBandEnergy20To22Hz
      0.09 (    28)  accelerationFrequencyBandEnergy22To25Hz
      0.09 (     9)  acceleration25Quantile
      0.07 (    16)  acceleration75Quantile
      0.06 (    17)  acceleration50Quantile
      0.06 (    12)  acceleration95Quantile
      0    (     0)  stoppages5To15s
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages0To5s
      0    (     0)  stoppages30To90s`;

const testEvaluationResult: string = `
=== Stratified cross-validation ===

Correctly Classified Instances       10948               94.3061 %
Incorrectly Classified Instances       661                5.6939 %
Kappa statistic                          0.9298
Mean absolute error                      0.0356
Root mean squared error                  0.1177
Relative absolute error                 15.3393 %
Root relative squared error             34.5489 %
Total Number of Instances            11609     


=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0,951    0,004    0,955      0,951    0,953      0,948    0,999     0,992     stationary
                 0,990    0,002    0,992      0,990    0,991      0,989    1,000     0,999     walk
                 0,964    0,001    0,993      0,964    0,978      0,976    0,999     0,996     bike
                 0,946    0,020    0,951      0,946    0,949      0,927    0,994     0,989     car
                 0,906    0,026    0,878      0,906    0,892      0,869    0,991     0,956     bus
                 0,858    0,001    0,978      0,858    0,914      0,914    0,996     0,958     tram
                 0,903    0,016    0,874      0,903    0,888      0,874    0,994     0,963     train
Weighted Avg.    0,943    0,013    0,944      0,943    0,943      0,930    0,996     0,983     


=== Confusion Matrix ===

    a    b    c    d    e    f    g   <-- classified as
  947    3    0    1    3    0   42 |    a = stationary
    5 2188    7    0    9    0    0 |    b = walk
    1   13 1316    8   19    0    8 |    c = bike
    6    0    1 3273  145    1   33 |    d = car
    4    0    1  117 1789    0   64 |    e = bus
    0    0    0    9   15  271   21 |    f = tram
   29    1    0   32   58    5 1164 |    g = train
`;

const testEvaluationResult2: string = `
=== Error on training data ===

Correctly Classified Instances       11297               97.3124 %
Incorrectly Classified Instances       312                2.6876 %
Kappa statistic                          0.9669
Mean absolute error                      0.0247
Root mean squared error                  0.0895
Relative absolute error                 10.6377 %
Root relative squared error             26.2871 %
Total Number of Instances            11609     


=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0,974    0,001    0,985      0,974    0,979      0,977    1,000     0,997     stationary
                 0,995    0,001    0,996      0,995    0,995      0,994    1,000     1,000     walk
                 0,982    0,000    0,999      0,982    0,990      0,989    1,000     0,999     bike
                 0,975    0,011    0,975      0,975    0,975      0,964    0,999     0,997     car
                 0,959    0,013    0,937      0,959    0,948      0,937    0,998     0,992     bus
                 0,949    0,000    0,990      0,949    0,969      0,969    1,000     0,995     tram
                 0,950    0,007    0,947      0,950    0,948      0,942    0,998     0,989     train
Weighted Avg.    0,973    0,006    0,973      0,973    0,973      0,967    0,999     0,996     


=== Confusion Matrix ===

    a    b    c    d    e    f    g   <-- classified as
  970    1    0    0    4    0   21 |    a = stationary
    0 2197    0    2   10    0    0 |    b = walk
    0    3 1340    2   17    0    3 |    c = bike
    4    1    1 3371   56    0   26 |    d = car
    4    3    1   60 1895    0   12 |    e = bus
    0    0    0    4    5  300    7 |    f = tram
    7    0    0   19   36    3 1224 |    g = train
`;

const testResultString: string = `
Options: -num-slots 0 -I 3 -M 20 -depth 0 -print -attribute-importance 

=== Classifier model (full training set) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationMean < 1.38
|   accelerationFrequencyBandEnergy8To10Hz < 0.61
|   |   accelerationFrequencyBandEnergy1To3Hz < 0.21
|   |   |   accumulatedTravelDistance < 4.99
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.09 : stationary (431.61/0)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.09
|   |   |   |   |   accelerationMean < 0.04
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.14 : stationary (12.74/1.78)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.14 : stationary (41.22/0)
|   |   |   |   |   accelerationMean >= 0.04 : train (3.96/1)
|   |   |   accumulatedTravelDistance >= 4.99
|   |   |   |   trajectorySimilarityTrain < 920.02 : train (27.28/18.02)
|   |   |   |   trajectorySimilarityTrain >= 920.02
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.07 : stationary (26.12/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.07 : stationary (39/19)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.13 : stationary (193.22/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.13
|   |   |   |   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.02 : stationary (1.12/0.37)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.02 : stationary (46.1/0)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.07 : train (0.37/-0)
|   |   |   |   |   |   |   accelerationMedian >= 0.04 : train (3.25/1)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 0.21
|   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.15
|   |   |   |   speed25Quantile < 1.89
|   |   |   |   |   mediumSpeedPointRatio < 0.01
|   |   |   |   |   |   headingVariance < 4.02
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.55
|   |   |   |   |   |   |   |   accelerationMax < 3.08
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.07
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.24
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.04 : stationary (4/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.08 : train (29.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.08 : train (19.9/1.22)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.24 : stationary (2.22/0.22)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.86
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.49 : train (71.53/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.49 : bus (0.11/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.86 : train (1.23/0.22)
|   |   |   |   |   |   |   |   accelerationMax >= 3.08 : stationary (8.68/2.67)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.55 : car (3/0)
|   |   |   |   |   |   headingVariance >= 4.02
|   |   |   |   |   |   |   speedVariance < 0.71
|   |   |   |   |   |   |   |   maximumTravelDistance < 2.3
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.16
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 756.11 : bus (20.3/2.2)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 756.11 : stationary (35.27/6.97)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.16 : stationary (16.26/6.09)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 2.3
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 656.26 : train (24.69/11.36)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 656.26 : stationary (31.43/7.15)
|   |   |   |   |   |   |   speedVariance >= 0.71 : bus (19.67/6.59)
|   |   |   |   |   mediumSpeedPointRatio >= 0.01
|   |   |   |   |   |   trajectorySimilarityTrain < 929.14
|   |   |   |   |   |   |   trajectorySimilarityBus < 46.41
|   |   |   |   |   |   |   |   accelerationMax < 0.87 : train (8.1/0.06)
|   |   |   |   |   |   |   |   accelerationMax >= 0.87
|   |   |   |   |   |   |   |   |   speedMin < 0.34
|   |   |   |   |   |   |   |   |   |   speedMax < 7.98 : bus (25.95/10.83)
|   |   |   |   |   |   |   |   |   |   speedMax >= 7.98 : bus (39.44/3.27)
|   |   |   |   |   |   |   |   |   speedMin >= 0.34 : train (5.19/0.08)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 46.41
|   |   |   |   |   |   |   |   headingVariance < 12.59
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.51
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.08 : stationary (0.55/0.21)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.08
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.33 : train (69.33/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.33 : train (11.28/0.07)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.51 : train (5.18/0.83)
|   |   |   |   |   |   |   |   headingVariance >= 12.59 : car (4.37/1.36)
|   |   |   |   |   |   trajectorySimilarityTrain >= 929.14
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.12
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.12
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.03 : train (9.84/0.67)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.03
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.03 : bus (1.34/0.5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.03
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.38 : train (10/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.38 : train (31/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.08 : train (66.51/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.12 : train (2.17/1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.12
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.64
|   |   |   |   |   |   |   |   |   accelerationMean < 0.15 : train (16.01/2.5)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.15 : car (29.5/1.5)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.64
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.64 : train (39.8/9.79)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.64 : car (2.57/0.55)
|   |   |   |   speed25Quantile >= 1.89
|   |   |   |   |   speedMax < 17.27
|   |   |   |   |   |   accelerationVariance < 0.06
|   |   |   |   |   |   |   trajectorySimilarityTram < 285.48
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.14 : train (27.32/13.55)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.14
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (2.74/0.91)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01 : tram (161/0)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 285.48
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.59
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.07 : stationary (1.42/0.39)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.07 : train (132.64/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.59 : bus (1/-0)
|   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 5.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.25 : train (22.25/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.25 : bus (21.68/10.12)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 5.42 : bike (19/0)
|   |   |   |   |   speedMax >= 17.27
|   |   |   |   |   |   accelerationMax < 3.16
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.08 : train (4.46/0.46)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.08
|   |   |   |   |   |   |   |   accelerationMean < 0.09 : train (0.77/0.31)
|   |   |   |   |   |   |   |   accelerationMean >= 0.09
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.4 : train (162.93/0)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.4 : train (11.93/0.31)
|   |   |   |   |   |   accelerationMax >= 3.16 : train (13.32/1.7)
|   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.15
|   |   |   |   stationaryPointRatio < 0.18
|   |   |   |   |   trajectorySimilarityTram < 478.34
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.71 : tram (11.07/1.07)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.71 : tram (33/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1 : tram (22.71/0.71)
|   |   |   |   |   trajectorySimilarityTram >= 478.34 : train (39.04/9.42)
|   |   |   |   stationaryPointRatio >= 0.18
|   |   |   |   |   accumulatedTravelDistance < 89.31
|   |   |   |   |   |   speedMedian < 0.06
|   |   |   |   |   |   |   trajectorySimilarityBus < 42.77
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.06 : car (2.68/1.68)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.06
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.35
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.22 : bus (39/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.22 : bus (11.71/1.36)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35 : bus (74/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 42.77 : car (21.57/5.57)
|   |   |   |   |   |   speedMedian >= 0.06 : train (4.11/2.04)
|   |   |   |   |   accumulatedTravelDistance >= 89.31
|   |   |   |   |   |   accumulatedTravelDistance < 483.02
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.22 : car (26.3/0.3)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.22
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.7
|   |   |   |   |   |   |   |   |   accelerationMax < 1.35 : car (5.99/0.99)
|   |   |   |   |   |   |   |   |   accelerationMax >= 1.35
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 257.07 : bus (25.48/0.1)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 257.07 : bus (39.75/17.15)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.7 : car (14.45/0.45)
|   |   |   |   |   |   accumulatedTravelDistance >= 483.02 : train (5.14/0.05)
|   accelerationFrequencyBandEnergy8To10Hz >= 0.61
|   |   speedMax < 12.7
|   |   |   lowSpeedPointRatio < 0.93
|   |   |   |   trajectorySimilarityTram < 510.05
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.52 : train (13.79/1.4)
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.52
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.68 : tram (36.73/1.69)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.68 : car (7.09/4.71)
|   |   |   |   trajectorySimilarityTram >= 510.05
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.35
|   |   |   |   |   |   speedMin < 5.09
|   |   |   |   |   |   |   maximumTravelDistance < 13.99
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.98
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.89
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.19
|   |   |   |   |   |   |   |   |   |   |   speedVariance < 18.72
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 3.78 : bus (26.79/8.47)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 3.78 : bus (36.83/3.39)
|   |   |   |   |   |   |   |   |   |   |   speedVariance >= 18.72 : train (11.16/2.36)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.72
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.63 : bus (4/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.58
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.58 : bus (39.56/1.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.58 : bus (27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.58 : bus (31/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.72 : car (1/-0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.96 : car (7/3)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.89
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.13 : bike (0.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.44 : bus (13.11/1.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.44 : bus (33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.92 : car (2.22/1.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.68 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 7.31 : car (31.66/1.53)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 7.31 : car (21.45/8.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.54 : bus (20/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 149.76 : bus (2.14/0.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 149.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.83 : car (37.33/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.83 : car (4.64/0.64)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.59 : bus (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.67 : bus (10.33/1.11)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 340.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.19 : bus (26.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.19 : bus (27.53/1.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 340.15 : car (1.04/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1.1 : car (1.56/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.1 : car (9.22/0.22)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.98
|   |   |   |   |   |   |   |   |   accelerationMean < 1.31
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 993.85
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 102.98
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 7.79
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.53 : bus (16.21/1.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.53
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.11 : car (0.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 2.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.9 : bus (70.47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.68 : tram (0.55/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : bus (1.37/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.23 : bus (1.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.23 : bus (48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 2.14 : car (0.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.26 : car (0.55/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.16 : bus (12.92/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.16 : bus (47.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.91 : bus (8.39/2.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.67 : bus (33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.92 : bus (7.66/1.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.44 : bus (5.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.66 : bus (19.37/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.66 : bus (177.61/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.79
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 9.11 : car (8.32/2.95)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 9.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.07 : bike (0.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63 : bus (16.55/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.15 : bus (44.92/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.15 : bus (4.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 102.98
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.07 : bus (33.57/1.77)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.07 : car (7.13/1.07)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 993.85
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 8.77 : train (7.31/2.23)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 8.77
|   |   |   |   |   |   |   |   |   |   |   |   speedMean < 5.38 : car (19.83/5.71)
|   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 5.38
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.31 : car (2.56/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.31 : bus (38.14/0.59)
|   |   |   |   |   |   |   |   |   accelerationMean >= 1.31 : car (9/0)
|   |   |   |   |   |   |   maximumTravelDistance >= 13.99 : car (28.28/8.96)
|   |   |   |   |   |   speedMin >= 5.09
|   |   |   |   |   |   |   trajectorySimilarityBus < 153.72
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.9
|   |   |   |   |   |   |   |   |   speed95Quantile < 7.98 : car (1.07/0.06)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 7.98 : bus (39.72/1.83)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.9 : car (34.63/9.28)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 153.72
|   |   |   |   |   |   |   |   accelerationMax < 5.55
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.46 : train (3.78/0.35)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.46 : car (37.71/0.26)
|   |   |   |   |   |   |   |   accelerationMax >= 5.55 : train (10.89/2.61)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.35
|   |   |   |   |   |   accelerationMax < 6.5
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.73 : bus (7.25/0.25)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.73
|   |   |   |   |   |   |   |   acceleration75Quantile < 2.08
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.38 : car (15.51/1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.38 : car (79.11/0)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 2.08 : car (6.25/3)
|   |   |   |   |   |   accelerationMax >= 6.5
|   |   |   |   |   |   |   maximumTravelDistance < 7.02 : bike (4.06/0.01)
|   |   |   |   |   |   |   maximumTravelDistance >= 7.02
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.19 : car (9.24/1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.19
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.42 : bus (9/3)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.42
|   |   |   |   |   |   |   |   |   |   accelerationMax < 34.5
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 2.32 : bus (46/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 2.32 : bike (0.72/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 34.5 : car (1/0)
|   |   |   lowSpeedPointRatio >= 0.93
|   |   |   |   accelerationMedian < 0.45
|   |   |   |   |   accumulatedTravelDistance < 109.97
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.9
|   |   |   |   |   |   |   trajectorySimilarityTrain < 585.71 : walk (7.15/3.15)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 585.71
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 934.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.56
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.15 : stationary (22.06/0.06)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.15
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (0.17/0.04)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.05
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.17 : train (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.32 : stationary (34.17/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.32 : stationary (11.13/0.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.05 : bus (0.06/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.23 : train (0.13/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.88 : stationary (4.11/0.11)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.56 : train (0.61/0.04)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 934.11 : stationary (36.75/8.7)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.9 : bus (27.3/17.27)
|   |   |   |   |   accumulatedTravelDistance >= 109.97 : train (18.34/4.15)
|   |   |   |   accelerationMedian >= 0.45
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.34 : train (12.87/8.03)
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.34 : car (35.69/2.06)
|   |   speedMax >= 12.7
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 1
|   |   |   |   accelerationMax < 2.67
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.62
|   |   |   |   |   |   speedMedian < 16.64
|   |   |   |   |   |   |   trajectorySimilarityBus < 106.85 : train (26.98/16.88)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 106.85 : train (31.47/2.02)
|   |   |   |   |   |   speedMedian >= 16.64
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.29 : train (35.59/3.55)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.29
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.65 : train (86.13/0)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.65 : train (34.52/1.52)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.62 : car (18/3)
|   |   |   |   accelerationMax >= 2.67
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.65
|   |   |   |   |   |   accelerationMedian < 0.73
|   |   |   |   |   |   |   speedMax < 15.5
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.47
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 565.61 : tram (9.39/1.32)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 565.61 : car (31.7/12.7)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.47 : bus (25.53/4.04)
|   |   |   |   |   |   |   speedMax >= 15.5
|   |   |   |   |   |   |   |   maximumTravelDistance < 17.86 : bus (21.78/4.29)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 17.86
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.18 : train (34.25/11.32)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.18 : train (29.81/0.88)
|   |   |   |   |   |   accelerationMedian >= 0.73
|   |   |   |   |   |   |   maximumTravelDistance < 18.71
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.67 : car (25.21/1.28)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.67 : car (16.85/4.85)
|   |   |   |   |   |   |   maximumTravelDistance >= 18.71 : bus (3.61/0.55)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.65
|   |   |   |   |   |   accelerationMax < 7.08
|   |   |   |   |   |   |   acceleration50Quantile < 0.67 : car (21.39/1.39)
|   |   |   |   |   |   |   acceleration50Quantile >= 0.67 : car (85/0)
|   |   |   |   |   |   accelerationMax >= 7.08 : train (4.09/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1
|   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.12
|   |   |   |   |   accelerationMean < 0.86
|   |   |   |   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.97
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.88
|   |   |   |   |   |   |   |   |   speed50Quantile < 13.09
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.6 : bus (9.13/2.13)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.6
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.57
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.43 : car (47.68/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.43 : car (17.04/2.13)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 2.87 : car (9.3/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 2.87 : car (33.06/11.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.24 : bus (11.45/0.45)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 13.09
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.55 : train (6.2/0.2)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 480.19
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.73
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.23 : bus (8.17/1.83)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.23 : bus (52/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.73 : walk (0.57/0.23)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 480.19
|   |   |   |   |   |   |   |   |   |   |   |   speedMax < 15.32 : bus (10.47/0.41)
|   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 15.32 : car (32.47/5.67)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.88
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.35
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.46 : car (39.53/1.27)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.46 : bus (5/-0)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.35
|   |   |   |   |   |   |   |   |   |   accelerationMax < 12.5
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.01
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.5 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.5
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.77 : car (84.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.77 : car (18.91/0.84)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.01 : car (168.11/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 12.5 : bike (2.27/1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.97
|   |   |   |   |   |   |   |   speedVariance < 0.94 : bus (18.04/8.33)
|   |   |   |   |   |   |   |   speedVariance >= 0.94
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.02 : train (2/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.02
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.47 : walk (1.12/0.37)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.47
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.75
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.66 : bus (15.75/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.66 : bus (81.25/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.75
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.21 : car (1.87/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.21 : bus (41.25/0)
|   |   |   |   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   |   |   |   maximumTravelDistance < 34.98
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.17 : train (8.23/4.23)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.17
|   |   |   |   |   |   |   |   |   accelerationMean < 0.56 : tram (17.98/4.48)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.56
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 17.37
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 13.94
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 18.05
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.66 : bus (0.1/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.14 : bus (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.86 : car (14.46/0.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.84 : car (57.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.84 : car (8.46/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.95 : bus (0.66/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 18.05 : bus (1.04/0.03)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 13.94 : bus (7.27/3.19)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 17.37
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.33
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.58
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.59 : tram (0.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.59 : car (84.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.58
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.76 : bus (0.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.72 : car (37.46/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.72 : car (6.38/0.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.46 : car (174.54/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.33 : bus (3.08/0.58)
|   |   |   |   |   |   |   maximumTravelDistance >= 34.98
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.48 : train (37.35/1.3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.48 : train (7.8/3.72)
|   |   |   |   |   accelerationMean >= 0.86
|   |   |   |   |   |   accelerationMean < 0.97
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.38
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 50.45 : car (33.49/9.22)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 50.45
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.84
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.37
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.92 : car (52/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.92 : car (17.01/2.01)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.37 : bus (5.68/2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.84
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.08 : bus (0.67/0)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.08 : car (741.69/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.38 : bus (14/1)
|   |   |   |   |   |   accelerationMean >= 0.97
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.99
|   |   |   |   |   |   |   |   accelerationMin < 0.08
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 2.69
|   |   |   |   |   |   |   |   |   |   accelerationMax < 8.66 : car (69/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 8.66 : car (6.09/2.09)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 2.69 : bus (2.09/0)
|   |   |   |   |   |   |   |   accelerationMin >= 0.08
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.64 : train (5.48/2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.64
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.89 : train (0.7/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.89 : car (61.48/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.99
|   |   |   |   |   |   |   |   accelerationVariance < 1.21
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.52 : car (657.06/0)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.52
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.13 : car (104.39/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.13 : car (18.7/0.7)
|   |   |   |   |   |   |   |   accelerationVariance >= 1.21 : bike (1.39/-0)
|   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.12
|   |   |   |   |   speed75Quantile < 23.83
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.42
|   |   |   |   |   |   |   trajectorySimilarityTrain < 123.76 : train (1.06/0.06)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 123.76
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 191.82
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.76 : bus (106.08/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.76 : bus (3.47/0.47)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 191.82 : car (1.06/0.06)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.42
|   |   |   |   |   |   |   accelerationMax < 6.04 : bus (31.43/1.43)
|   |   |   |   |   |   |   accelerationMax >= 6.04
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 356.14 : bus (27.31/0.15)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 356.14
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 3.3
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : car (12.32/5.32)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : car (32/2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 3.3 : bus (13.32/0.32)
|   |   |   |   |   speed75Quantile >= 23.83
|   |   |   |   |   |   accelerationMean < 0.98 : bus (2.64/0)
|   |   |   |   |   |   accelerationMean >= 0.98
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 6.72
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.35 : car (3.44/0.44)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.35 : car (98.88/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 6.72 : bike (0.22/0)
accelerationMean >= 1.38
|   accumulatedTravelDistance < 146.15
|   |   accelerationMean < 3.75
|   |   |   accelerationVariance < 3.37 : bus (15.2/6.69)
|   |   |   accelerationVariance >= 3.37
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 13.63
|   |   |   |   |   accelerationMax < 33.6
|   |   |   |   |   |   speedMax < 4.06 : walk (75.14/0)
|   |   |   |   |   |   speedMax >= 4.06 : bike (2.12/0.12)
|   |   |   |   |   accelerationMax >= 33.6 : bike (2.82/0)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 13.63 : bike (6.86/2)
|   |   accelerationMean >= 3.75 : walk (2107.55/0)
|   accumulatedTravelDistance >= 146.15
|   |   highSpeedPointRatio < 0.01
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.37
|   |   |   |   accelerationVariance < 0.68 : bike (5.62/2.62)
|   |   |   |   accelerationVariance >= 0.68
|   |   |   |   |   accelerationMedian < 4.71 : bike (935.24/0)
|   |   |   |   |   accelerationMedian >= 4.71
|   |   |   |   |   |   accelerationMedian < 4.83 : bike (11.36/3.36)
|   |   |   |   |   |   accelerationMedian >= 4.83 : bike (69/0)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.37
|   |   |   |   accelerationMin < 0.26
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.28 : walk (32.7/16.23)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.28
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 15.47
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 4.17
|   |   |   |   |   |   |   |   accelerationVariance < 5.52 : bike (46.37/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 5.52 : walk (2.24/0.75)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 4.17 : bike (136/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 15.47
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 12.59 : walk (11.59/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 12.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 14.35
|   |   |   |   |   |   |   |   |   accelerationMax < 22.88 : walk (0.37/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 22.88 : bike (60.24/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 14.35 : bike (12.99/2.99)
|   |   |   |   accelerationMin >= 0.26 : walk (34.77/0)
|   |   highSpeedPointRatio >= 0.01
|   |   |   accelerationFrequencyBandEnergy9To10Hz < 1 : bike (16.4/6.29)
|   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1
|   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 3.08
|   |   |   |   |   speedMedian < 23.75
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 4.54
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.92 : walk (0.03/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.92
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 6.64
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.39 : walk (0.02/0)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.39 : bus (41.24/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 6.64 : bus (3.02/0.02)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 4.54 : bike (0.03/0)
|   |   |   |   |   speedMedian >= 23.75 : car (2.02/0.02)
|   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 3.08 : walk (3.04/0.11)

Size of the tree : 573


RandomTree
==========

accelerationVariance < 1.29
|   accelerationFrequencyBandEnergy8To10Hz < 0.59
|   |   accelerationFrequencyBandEnergy8To10Hz < 0.14
|   |   |   accelerationMedian < 0.04
|   |   |   |   headingVariance < 0.01
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.02 : train (32.24/1.24)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.02
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.03 : stationary (47.11/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.03 : stationary (14.5/0.23)
|   |   |   |   headingVariance >= 0.01
|   |   |   |   |   speed50Quantile < 0.1
|   |   |   |   |   |   acceleration95Quantile < 0.25
|   |   |   |   |   |   |   lowSpeedPointRatio < 0.95 : car (1.52/0.52)
|   |   |   |   |   |   |   lowSpeedPointRatio >= 0.95
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.09 : stationary (642.64/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.09
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.17 : stationary (3.51/1.76)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.17 : stationary (82.45/0)
|   |   |   |   |   |   acceleration95Quantile >= 0.25 : train (4/2)
|   |   |   |   |   speed50Quantile >= 0.1 : stationary (6.04/3.01)
|   |   |   accelerationMedian >= 0.04
|   |   |   |   acceleration95Quantile < 0.53
|   |   |   |   |   accelerationMax < 2.26
|   |   |   |   |   |   headingVariance < 9.41
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.04 : train (41.59/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.04 : train (17.72/2)
|   |   |   |   |   |   headingVariance >= 9.41 : train (26.69/10)
|   |   |   |   |   accelerationMax >= 2.26 : stationary (3/1)
|   |   |   |   acceleration95Quantile >= 0.53
|   |   |   |   |   accelerationMax < 5.17 : train (11/3)
|   |   |   |   |   accelerationMax >= 5.17 : bike (41/0)
|   |   accelerationFrequencyBandEnergy8To10Hz >= 0.14
|   |   |   lowSpeedPointRatio < 0.26
|   |   |   |   speed25Quantile < 13.09
|   |   |   |   |   trajectorySimilarityTram < 271.81
|   |   |   |   |   |   accelerationMedian < 0.17 : tram (29.72/10.72)
|   |   |   |   |   |   accelerationMedian >= 0.17
|   |   |   |   |   |   |   accelerationMean < 0.35
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.05 : bus (0.68/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.05
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.06
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.62 : tram (18.35/1.35)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.62
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.09 : tram (55/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.09 : tram (18.34/0.34)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.2 : tram (115/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06 : tram (4.68/0.68)
|   |   |   |   |   |   |   accelerationMean >= 0.35 : train (1.86/1.02)
|   |   |   |   |   trajectorySimilarityTram >= 271.81
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.23
|   |   |   |   |   |   |   accelerationMedian < 0.08 : stationary (0.86/0.14)
|   |   |   |   |   |   |   accelerationMedian >= 0.08 : train (181.84/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.23 : train (24.6/3.88)
|   |   |   |   speed25Quantile >= 13.09
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.26
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.57
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.29 : stationary (0.47/0.09)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.29 : train (106.84/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.57 : train (4.84/0.19)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.26 : train (21.86/1.77)
|   |   |   lowSpeedPointRatio >= 0.26
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.11
|   |   |   |   |   accelerationMean < 0.1
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.09
|   |   |   |   |   |   |   speedMedian < 0.15
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.07 : train (15/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.11 : train (27.97/7.97)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.11 : stationary (15/0)
|   |   |   |   |   |   |   speedMedian >= 0.15 : stationary (13.22/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.09 : stationary (31.34/0)
|   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   speedVariance < 13.34
|   |   |   |   |   |   |   trajectorySimilarityTrain < 837.7
|   |   |   |   |   |   |   |   accelerationMax < 1.13
|   |   |   |   |   |   |   |   |   travelDistance < 8.14 : train (19.83/6)
|   |   |   |   |   |   |   |   |   travelDistance >= 8.14 : train (53.35/0)
|   |   |   |   |   |   |   |   accelerationMax >= 1.13
|   |   |   |   |   |   |   |   |   headingVariance < 4.31
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 3.22 : train (19.94/0.47)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 3.22 : bus (28.34/8.07)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.31
|   |   |   |   |   |   |   |   |   |   accelerationMax < 3.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 45.84
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.4 : bus (38.63/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.4 : bus (3.79/0.79)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 45.84 : car (1.03/0.02)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.17 : train (4.13/1)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.06 : bike (20.64/13.64)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 837.7
|   |   |   |   |   |   |   |   travelDistance < 41.75
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.83 : stationary (13.1/4.06)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.83 : train (29.48/6.43)
|   |   |   |   |   |   |   |   travelDistance >= 41.75
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.08 : car (17.36/3.36)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.08 : train (32.07/11.72)
|   |   |   |   |   |   speedVariance >= 13.34
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.06 : bus (2.74/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.16 : train (106.59/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.16 : train (18.41/3.11)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.11
|   |   |   |   |   speedMean < 0.24
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.28
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.17 : stationary (16.85/9.85)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.17 : bus (67.68/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.28 : car (13.36/9.36)
|   |   |   |   |   speedMean >= 0.24
|   |   |   |   |   |   trajectorySimilarityTrain < 275.7
|   |   |   |   |   |   |   acceleration25Quantile < 0.27 : train (38.75/10.39)
|   |   |   |   |   |   |   acceleration25Quantile >= 0.27
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.5
|   |   |   |   |   |   |   |   |   speedMax < 12.63
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.36 : bus (11.27/0.91)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.36 : bus (33/0)
|   |   |   |   |   |   |   |   |   speedMax >= 12.63 : bus (3.09/1.06)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.5 : train (26.19/13)
|   |   |   |   |   |   trajectorySimilarityTrain >= 275.7
|   |   |   |   |   |   |   speedMedian < 1.3
|   |   |   |   |   |   |   |   accelerationMax < 3.85
|   |   |   |   |   |   |   |   |   speedMean < 2.84
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.81
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.68 : car (14.19/1.19)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.68 : car (34.3/0.3)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.81 : bus (4.13/2.11)
|   |   |   |   |   |   |   |   |   speedMean >= 2.84 : car (16.5/5.5)
|   |   |   |   |   |   |   |   accelerationMax >= 3.85 : bus (12.28/3)
|   |   |   |   |   |   |   speedMedian >= 1.3
|   |   |   |   |   |   |   |   travelDistance < 156.58 : bus (27.82/3.63)
|   |   |   |   |   |   |   |   travelDistance >= 156.58 : car (23.7/11.7)
|   accelerationFrequencyBandEnergy8To10Hz >= 0.59
|   |   accelerationMedian < 0.78
|   |   |   mediumSpeedPointRatio < 0.02
|   |   |   |   speedMax < 2.21
|   |   |   |   |   trajectorySimilarityTrain < 841.5 : car (21.48/13.98)
|   |   |   |   |   trajectorySimilarityTrain >= 841.5
|   |   |   |   |   |   speedMean < 0.11
|   |   |   |   |   |   |   accelerationMean < 0.16 : stationary (20/0)
|   |   |   |   |   |   |   accelerationMean >= 0.16 : train (39.08/5.33)
|   |   |   |   |   |   speedMean >= 0.11
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.57
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.78
|   |   |   |   |   |   |   |   |   accelerationMean < 0.53
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.5
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.64 : train (0.16/0.03)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.64
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.65 : stationary (56.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.65 : stationary (17.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.38 : stationary (4.39/0.39)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.5 : train (0.39/0.23)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.53 : car (1.08/0.26)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.78 : stationary (12.21/1.08)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.57 : train (6.21/2.56)
|   |   |   |   speedMax >= 2.21 : bus (38.67/20.78)
|   |   |   mediumSpeedPointRatio >= 0.02
|   |   |   |   accelerationMax < 2.75
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.73
|   |   |   |   |   |   speed75Quantile < 18.13
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.62
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.86
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.53 : train (30.13/9.6)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.53 : train (39.19/14.53)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.86 : bus (17.51/0.51)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.62
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 245.09 : tram (12.51/0.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 245.09
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.52
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.27
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 9.05
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.44 : car (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 20.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.17 : bus (14.17/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.17 : bus (40/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 20.52 : bus (5.11/1.11)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 9.05 : train (6.13/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.27
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.41 : bus (29.94/14.94)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.41 : bus (36/1)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.52 : bus (18.77/8.77)
|   |   |   |   |   |   speed75Quantile >= 18.13
|   |   |   |   |   |   |   accelerationMedian < 0.54
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.18 : train (21.17/2.92)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.18
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : train (29.08/0.42)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35 : train (105.08/0)
|   |   |   |   |   |   |   accelerationMedian >= 0.54
|   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.85
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.86 : tram (1.25/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.86 : train (42/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.85 : bus (2/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : tram (3.75/1.25)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.73
|   |   |   |   |   |   speedMax < 34.65
|   |   |   |   |   |   |   accumulatedTravelDistance < 374.69
|   |   |   |   |   |   |   |   accelerationMean < 0.57 : car (38/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.57 : bus (31/14)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 374.69 : car (164.38/0)
|   |   |   |   |   |   speedMax >= 34.65 : train (22.32/0.32)
|   |   |   |   accelerationMax >= 2.75
|   |   |   |   |   trajectorySimilarityBus < 170.62
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.89
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.64
|   |   |   |   |   |   |   |   accelerationMean < 0.48
|   |   |   |   |   |   |   |   |   speedMax < 10.58
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 0.18 : car (2.22/0.22)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 0.18
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.51
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.63
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.04 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.08 : bus (65.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.08 : train (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.63 : train (1.7/-0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.51 : bus (16.85/0.85)
|   |   |   |   |   |   |   |   |   speedMax >= 10.58
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.29 : bus (10.9/5.63)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.29
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 981.32 : bus (20.72/1.74)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 981.32 : car (32.71/11.71)
|   |   |   |   |   |   |   |   accelerationMean >= 0.48
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.51
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.5 : bus (34.78/5.51)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.5
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.43 : bus (79.3/0)
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.43 : bus (12.2/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : bus (6.75/0.75)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.51
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 959.04
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.27 : car (2.76/1.38)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.79
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 143.52 : bus (83.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 143.52 : bus (8.31/3)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.79 : tram (2.07/-0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 959.04 : tram (8.75/1.56)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.64
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 914.79
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.96
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.33
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.2 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.69 : bus (1.94/0.94)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.47 : bus (17.26/0.63)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.47 : bus (102.26/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.16
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.02
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean < 9.29 : bus (35.31/6.61)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 9.29 : car (5.89/1.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.02 : bus (40.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.16
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 18.69 : car (18.5/3.28)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 18.69 : bus (23.94/1.58)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.33
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 26.3 : bus (38.08/10.5)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 26.3
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 12.29 : car (31.73/14.56)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 12.29 : car (14.81/0.26)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.96
|   |   |   |   |   |   |   |   |   |   speedMin < 5.67
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 60.38
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 11.52
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 7.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.58
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.98 : bus (36.66/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.98 : bus (6.66/1.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.58 : car (1.06/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.82 : car (1.53/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.56 : car (2.53/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.91 : bus (22/0)
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 11.52 : car (9.75/2.14)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 60.38 : car (35.76/8.52)
|   |   |   |   |   |   |   |   |   |   speedMin >= 5.67
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.75
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.28 : car (0.42/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.28 : car (49.69/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.75 : bike (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.96 : bus (8.27/3.71)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 914.79
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.01
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 205.28 : bus (21.3/8.08)
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 205.28
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.22
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.98
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.11 : car (10.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.11 : car (74.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.15 : car (8.31/1.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.73 : car (26.24/10.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.73
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.1 : car (63.48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.1 : car (1.31/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.15 : car (37.75/8.55)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.98 : bus (5.62/1.62)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.22
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.06 : bike (0.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.06 : car (96.89/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.01
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.58
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.67 : car (0.66/0.33)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.67 : bus (43.99/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.58 : bus (5.98/2.32)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.89
|   |   |   |   |   |   |   stationaryPointRatio < 0.02
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 516.13 : tram (5.34/0.34)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 516.13
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.18 : bus (18.76/2.38)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.18
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.84
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.13 : bus (32.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.13 : bus (9.4/0.4)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.84 : bus (17.38/2.79)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.46 : bus (117.59/0)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.02
|   |   |   |   |   |   |   |   accelerationMean < 1.08
|   |   |   |   |   |   |   |   |   speed95Quantile < 16.39
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.74
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.4
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.25
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 5.4 : bus (30.16/7)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 5.4 : bus (30.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.25 : car (6.32/2)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.4
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.91 : bus (6.64/1)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.22 : bus (7.56/0.96)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.22 : bus (60.48/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.74 : bus (13.6/1.6)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 16.39 : car (11.75/2.73)
|   |   |   |   |   |   |   |   accelerationMean >= 1.08 : train (3/0)
|   |   |   |   |   trajectorySimilarityBus >= 170.62
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.58
|   |   |   |   |   |   |   speedMax < 9.97 : bus (37.22/1.21)
|   |   |   |   |   |   |   speedMax >= 9.97
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 252.12 : tram (2.19/0.18)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 252.12
|   |   |   |   |   |   |   |   |   accelerationMax < 3.42 : train (4.61/2.61)
|   |   |   |   |   |   |   |   |   accelerationMax >= 3.42
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.65
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.39 : train (7.42/0.42)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.39 : train (38.31/0.21)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.65 : train (7.67/1.05)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.58
|   |   |   |   |   |   |   maximumTravelDistance < 39.92
|   |   |   |   |   |   |   |   accelerationMedian < 0.43 : tram (35.75/18.59)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.43
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.39
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 7.45 : bus (6.3/0.25)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 7.45
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.13 : car (56.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.34 : bus (0.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.57 : car (45.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.57 : car (27.99/0.47)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.51
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.7 : bus (1.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.59 : bus (0.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.75 : car (11.31/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.75 : car (66.57/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.51 : bus (7.31/1.31)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.39 : bus (9.54/3.65)
|   |   |   |   |   |   |   maximumTravelDistance >= 39.92 : train (22.49/1.4)
|   |   accelerationMedian >= 0.78
|   |   |   trajectorySimilarityTrain < 909.69
|   |   |   |   maximumTravelDistance < 25.09
|   |   |   |   |   speedMean < 8.03
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.25
|   |   |   |   |   |   |   accelerationMax < 4.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.49 : car (16.16/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.49 : bus (36.13/5.73)
|   |   |   |   |   |   |   accelerationMax >= 4.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.34 : bus (5.22/1.22)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.34
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.39 : bus (33.89/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.39 : bus (9.24/0.16)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.25
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.87
|   |   |   |   |   |   |   |   accelerationVariance < 0.51 : car (59.03/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.51 : car (16.41/1.16)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.87 : bus (36.16/7)
|   |   |   |   |   speedMean >= 8.03
|   |   |   |   |   |   trajectorySimilarityBus < 131.23
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.8
|   |   |   |   |   |   |   |   headingVariance < 10.47
|   |   |   |   |   |   |   |   |   speedMedian < 23.23
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.81 : car (9.94/1.56)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.81 : car (36.86/0.19)
|   |   |   |   |   |   |   |   |   speedMedian >= 23.23 : bus (2.08/0.07)
|   |   |   |   |   |   |   |   headingVariance >= 10.47 : bus (11.44/2.38)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.8
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.5 : bus (24.87/0.73)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.5 : bus (41.53/0)
|   |   |   |   |   |   trajectorySimilarityBus >= 131.23
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 3.01
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.02
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 2.53
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.02
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.08 : car (0.29/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.03 : car (1.08/0.5)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.03 : car (122.72/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.02
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.86 : train (0.43/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.86
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.1 : car (21.16/0.94)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.1 : car (32.43/0.07)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 2.53 : car (1.36/0.36)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.02 : bus (1/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 3.01 : bus (8.07/0.07)
|   |   |   |   maximumTravelDistance >= 25.09
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.61 : bus (0.44/0.05)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.61
|   |   |   |   |   |   accelerationVariance < 0.51
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.11
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.7 : car (7.49/0.29)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.7
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.06 : car (41.49/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.06
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.98 : car (60.39/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.98 : bus (0.15/-0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.11 : car (16.93/0.29)
|   |   |   |   |   |   accelerationVariance >= 0.51 : bus (0.88/0.39)
|   |   |   trajectorySimilarityTrain >= 909.69
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.23
|   |   |   |   |   accelerationMax < 7.1
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.16
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.61
|   |   |   |   |   |   |   |   accelerationMax < 3.5 : car (49.75/0)
|   |   |   |   |   |   |   |   accelerationMax >= 3.5 : bus (4.75/1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.61
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.5
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.1
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.42 : car (17.75/1)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.42 : car (304.75/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.1 : car (3/1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.5 : car (958.24/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.16
|   |   |   |   |   |   |   speed95Quantile < 24.02
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.2 : car (105.23/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.2
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.15 : car (39.46/0.92)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.15 : bus (13.61/1)
|   |   |   |   |   |   |   speed95Quantile >= 24.02
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.27
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.3 : car (3.89/0.89)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.3 : car (222.98/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.27 : bus (1.33/0)
|   |   |   |   |   accelerationMax >= 7.1
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.89 : train (20.25/8)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.89
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.55 : bus (2.25/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.55
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.54 : car (115/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.54 : bus (5.5/1)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.23
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.42 : car (28.5/1.5)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.42
|   |   |   |   |   |   accelerationMin < 0.1
|   |   |   |   |   |   |   headingVariance < 9.58
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.62 : bus (24/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.62 : bus (20.09/8)
|   |   |   |   |   |   |   headingVariance >= 9.58 : train (4.41/0.41)
|   |   |   |   |   |   accelerationMin >= 0.1 : car (18/0)
accelerationVariance >= 1.29
|   speed95Quantile < 3.08
|   |   accelerationFrequencyBandEnergy9To10Hz < 2.22
|   |   |   accelerationMedian < 4.13
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.09 : walk (25.8/12.8)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.09 : bus (26/14)
|   |   |   accelerationMedian >= 4.13 : walk (83.6/0)
|   |   accelerationFrequencyBandEnergy9To10Hz >= 2.22
|   |   |   acceleration25Quantile < 1.01
|   |   |   |   acceleration50Quantile < 4.54 : walk (24/3)
|   |   |   |   acceleration50Quantile >= 4.54 : walk (28.6/0)
|   |   |   acceleration25Quantile >= 1.01 : walk (1969.21/0)
|   speed95Quantile >= 3.08
|   |   speedMax < 10.36
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.69
|   |   |   |   accelerationMean < 1.13 : bus (1/0)
|   |   |   |   accelerationMean >= 1.13
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 18.19
|   |   |   |   |   |   accelerationMin < 0.1 : bike (22.24/1.12)
|   |   |   |   |   |   accelerationMin >= 0.1 : bike (231.24/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 18.19 : bike (760.75/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.69
|   |   |   |   accelerationMin < 0.26
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 2.77 : walk (14.71/6.86)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 2.77
|   |   |   |   |   |   accelerationMedian < 4.25
|   |   |   |   |   |   |   accelerationMedian < 3.28 : bike (222.36/0)
|   |   |   |   |   |   |   accelerationMedian >= 3.28 : bike (36.62/2.62)
|   |   |   |   |   |   accelerationMedian >= 4.25 : walk (22.19/5)
|   |   |   |   accelerationMin >= 0.26 : walk (32.52/0)
|   |   speedMax >= 10.36
|   |   |   accelerationMin < 0.15
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.77 : train (1.24/0.24)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.77
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 12.75
|   |   |   |   |   |   accelerationMedian < 2.25
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.45 : bus (1.1/0.1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.45
|   |   |   |   |   |   |   |   accelerationVariance < 1.4 : bus (1.13/0.1)
|   |   |   |   |   |   |   |   accelerationVariance >= 1.4
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.54 : bus (9.18/0.03)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.54
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 2.95 : bus (51.16/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 2.95 : bus (8.03/0.03)
|   |   |   |   |   |   accelerationMedian >= 2.25 : walk (0.31/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 12.75 : walk (0.81/0.1)
|   |   |   accelerationMin >= 0.15 : bike (21.2/3.06)

Size of the tree : 531


RandomTree
==========

accelerationFrequencyBandEnergy8To10Hz < 4.59
|   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   accelerationFrequencyBandEnergy1To3Hz < 5.7
|   |   |   acceleration25Quantile < 0.1
|   |   |   |   accumulatedTravelDistance < 4.56
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.05 : stationary (416.46/0)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.05
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.1 : stationary (37.07/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.1 : stationary (11.65/2.33)
|   |   |   |   accumulatedTravelDistance >= 4.56
|   |   |   |   |   headingVariance < 0.08 : train (38.3/15.11)
|   |   |   |   |   headingVariance >= 0.08
|   |   |   |   |   |   speedMin < 0.03
|   |   |   |   |   |   |   accelerationMean < 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.13 : stationary (243.98/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.13 : stationary (24.23/0.7)
|   |   |   |   |   |   |   accelerationMean >= 0.04 : stationary (10.72/5.72)
|   |   |   |   |   |   speedMin >= 0.03 : train (17.58/5.52)
|   |   |   acceleration25Quantile >= 0.1 : train (20/3)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 5.7
|   |   |   accumulatedTravelDistance < 163.85 : walk (7.09/0.03)
|   |   |   accumulatedTravelDistance >= 163.85
|   |   |   |   acceleration50Quantile < 1.8 : bike (298.97/0)
|   |   |   |   acceleration50Quantile >= 1.8
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 18.18
|   |   |   |   |   |   acceleration75Quantile < 4.66
|   |   |   |   |   |   |   acceleration95Quantile < 6.35 : bike (117.99/0)
|   |   |   |   |   |   |   acceleration95Quantile >= 6.35 : bike (10.99/1.99)
|   |   |   |   |   |   acceleration75Quantile >= 4.66 : bike (18.96/5.96)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 18.18 : bike (619/0)
|   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   accelerationFrequencyBandEnergy27To28Hz < 0.28
|   |   |   speedMax < 2.12
|   |   |   |   trajectorySimilarityBus < 14.31
|   |   |   |   |   stationaryPointRatio < 0.62
|   |   |   |   |   |   accelerationMedian < 0.17 : train (4.5/1.24)
|   |   |   |   |   |   accelerationMedian >= 0.17
|   |   |   |   |   |   |   accelerationMean < 0.55
|   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (1.26/0.07)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.11 : bus (0.27/0.1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.11
|   |   |   |   |   |   |   |   |   |   accelerationMax < 3.21
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.64 : car (0.27/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.64
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.55 : bus (0.1/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.07
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.34 : stationary (21.2/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.34 : stationary (54.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.37 : stationary (0.14/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.07 : stationary (3.1/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.19 : train (0.1/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.21 : bus (0.41/0.03)
|   |   |   |   |   |   |   accelerationMean >= 0.55 : train (2.17/1.36)
|   |   |   |   |   stationaryPointRatio >= 0.62
|   |   |   |   |   |   acceleration50Quantile < 0.07 : bus (24.21/13.12)
|   |   |   |   |   |   acceleration50Quantile >= 0.07
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.71
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.04 : train (3.09/0)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.04
|   |   |   |   |   |   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 1.98
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.39 : bus (35.29/0.29)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.39 : bus (37.66/3.29)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 1.98 : bus (2.11/1.1)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 0.01 : train (2.5/0.01)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.71 : train (8.5/4.86)
|   |   |   |   trajectorySimilarityBus >= 14.31
|   |   |   |   |   accelerationMean < 0.28
|   |   |   |   |   |   headingVariance < 4.02
|   |   |   |   |   |   |   acceleration95Quantile < 0.06
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.07
|   |   |   |   |   |   |   |   |   speedMax < 0.01 : train (26.62/12.26)
|   |   |   |   |   |   |   |   |   speedMax >= 0.01 : train (14.71/2.22)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.07 : train (16.74/0.07)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.15 : train (5.71/0.07)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.15 : train (81.03/0)
|   |   |   |   |   |   headingVariance >= 4.02
|   |   |   |   |   |   |   accelerationMean < 0.11
|   |   |   |   |   |   |   |   speedMax < 0.06
|   |   |   |   |   |   |   |   |   accelerationMax < 0.68 : stationary (3.02/1.02)
|   |   |   |   |   |   |   |   |   accelerationMax >= 0.68 : stationary (56.22/0)
|   |   |   |   |   |   |   |   speedMax >= 0.06 : stationary (21.12/5.68)
|   |   |   |   |   |   |   accelerationMean >= 0.11
|   |   |   |   |   |   |   |   accelerationMax < 6.75
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 590.78 : train (27.64/0.05)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 590.78 : train (14.42/6.02)
|   |   |   |   |   |   |   |   accelerationMax >= 6.75 : stationary (19/0)
|   |   |   |   |   accelerationMean >= 0.28
|   |   |   |   |   |   speed25Quantile < 0.04
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.66 : car (11.94/2.94)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.66 : train (33.44/12.81)
|   |   |   |   |   |   speed25Quantile >= 0.04 : stationary (28.88/7.34)
|   |   |   speedMax >= 2.12
|   |   |   |   highSpeedPointRatio < 0.19
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.78
|   |   |   |   |   |   lowSpeedPointRatio < 0.71
|   |   |   |   |   |   |   speed50Quantile < 2.88
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.11 : train (39.89/1.22)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.11 : car (5.43/2.43)
|   |   |   |   |   |   |   speed50Quantile >= 2.88
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 594.73 : train (32.73/0.88)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 594.73 : tram (24.2/7.2)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.71
|   |   |   |   |   |   |   accelerationMean < 0.17
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 28.23 : train (27.16/17.37)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 28.23
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.06 : train (7.74/2.81)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.06 : train (35.47/1.36)
|   |   |   |   |   |   |   accelerationMean >= 0.17
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.06 : train (6/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.06
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 413.14 : bus (20.87/4.87)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 413.14 : car (34.05/5.05)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.78
|   |   |   |   |   |   speed25Quantile < 1.67
|   |   |   |   |   |   |   accelerationMedian < 0.14
|   |   |   |   |   |   |   |   maximumTravelDistance < 9.54 : bus (29.29/16.29)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 9.54 : train (36.88/19.05)
|   |   |   |   |   |   |   accelerationMedian >= 0.14
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.89
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.62
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.17 : bus (34.29/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.17
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 174.53
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.11 : train (13.31/3.15)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.62 : bus (35.76/5.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.62 : train (11.53/3.85)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 174.53 : train (15.76/1.46)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.62
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.56
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 145.34
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.24 : bus (33.57/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.78 : bus (15.9/0.49)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.78 : bus (29.41/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.9 : train (0.73/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.41 : train (0.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 145.34
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 155.45 : bus (21.76/10.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 155.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean < 3.41 : bus (3.11/1.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 3.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.08 : bus (14.95/0.81)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.97 : bus (43.75/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.97 : bus (3.07/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.52 : bus (4.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : bus (0.34/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.56 : bus (21.55/5.55)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.56 : bus (37.02/12.48)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.89
|   |   |   |   |   |   |   |   |   accelerationMax < 3.31 : car (29.88/10.7)
|   |   |   |   |   |   |   |   |   accelerationMax >= 3.31 : bus (12.64/5.12)
|   |   |   |   |   |   speed25Quantile >= 1.67
|   |   |   |   |   |   |   trajectorySimilarityTrain < 554.34
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.22 : train (7.13/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.22
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.32
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.43 : bus (29.82/7.98)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.43
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.76
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.2 : train (0.61/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.48 : bus (6.31/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.48 : bus (36.48/0.22)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.76 : train (0.83/0.44)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.32 : train (2.7/0.57)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 554.34
|   |   |   |   |   |   |   |   accelerationMean < 0.88
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.48
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 537.38
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.23
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.86 : tram (4.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.86 : tram (39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.08 : stationary (0.5/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : train (0.94/0.4)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.23 : tram (19.93/2.38)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 537.38 : bus (28.17/2.83)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.48 : bus (20.21/3.14)
|   |   |   |   |   |   |   |   accelerationMean >= 0.88 : car (22.78/0.85)
|   |   |   |   highSpeedPointRatio >= 0.19
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.74
|   |   |   |   |   |   trajectorySimilarityTram < 180.29
|   |   |   |   |   |   |   accelerationMin < 0.01 : train (5.19/2.21)
|   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   |   |   |   speedMax < 18.3
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.34
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.1 : train (1.68/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.13 : tram (2.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.17 : tram (2.67/0.67)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.5 : train (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.21 : tram (133/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.21 : tram (30.67/0.67)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.34 : train (1.68/0.08)
|   |   |   |   |   |   |   |   |   speedMax >= 18.3 : train (1.85/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : tram (19.34/8.89)
|   |   |   |   |   |   trajectorySimilarityTram >= 180.29
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.33
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.69
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.15 : train (19.25/6.26)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 188.6 : train (10.77/4.2)
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 188.6
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.06 : train (32.02/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06 : train (201.05/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.46 : train (24.5/5.42)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 248.26 : train (2.22/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 248.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.32 : train (96.34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.51 : train (36.43/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.51 : train (19/1.34)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.69
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.8
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 87.97 : bus (9.8/3.33)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 87.97
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.14 : bus (2.86/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.28 : train (24.91/1.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.28 : train (25.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.4 : train (9.95/0.95)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.57 : train (4.27/1.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.57 : train (36.95/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.8 : bus (15.09/7.39)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.33
|   |   |   |   |   |   |   |   speed95Quantile < 19.84
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.25 : train (16.96/3.2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.25
|   |   |   |   |   |   |   |   |   |   accelerationMax < 6.66
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.99
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 59.55 : train (10.79/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 59.55 : bus (32.36/7.36)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.99 : bus (29.12/2.75)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (28.73/13.73)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.66 : train (18.77/1.59)
|   |   |   |   |   |   |   |   speed95Quantile >= 19.84
|   |   |   |   |   |   |   |   |   accelerationMax < 2.38 : train (90.63/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 2.38 : train (14.71/4.39)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.74
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.62
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.37 : train (2.16/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.37
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.22 : car (79.62/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.22 : car (20.87/0.87)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.62 : train (1.3/-0)
|   |   accelerationFrequencyBandEnergy27To28Hz >= 0.28
|   |   |   trajectorySimilarityBus < 170.01
|   |   |   |   maximumTravelDistance < 12.7
|   |   |   |   |   speedMean < 1.67
|   |   |   |   |   |   accelerationVariance < 0.34
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.45 : bus (25/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.45
|   |   |   |   |   |   |   |   accelerationMin < 0.04 : bus (7.9/3.87)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04 : car (33.2/2.41)
|   |   |   |   |   |   accelerationVariance >= 0.34
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.67 : stationary (34.98/15.98)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.67 : walk (34.79/16.48)
|   |   |   |   |   speedMean >= 1.67
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.43
|   |   |   |   |   |   |   accelerationMedian < 0.65
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.88 : car (17.8/6.8)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.88
|   |   |   |   |   |   |   |   |   speed50Quantile < 8.78
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63 : tram (1/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63 : car (64.77/0)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 8.78 : car (2.02/1)
|   |   |   |   |   |   |   accelerationMedian >= 0.65 : bus (27.59/4)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.43
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 6.32
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.82
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : car (2/0)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.93
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.82
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.42 : bus (20.2/2.2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.4 : bus (8.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.4 : bus (57/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.03 : bus (174.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.38 : bus (31.79/1.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.95 : bus (13.39/1)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.82 : bus (13/2)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.93 : car (1.99/0.4)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.82
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.15
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.66
|   |   |   |   |   |   |   |   |   |   |   speedMax < 11.84
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.71
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.83 : car (15.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 6.5 : bus (34.01/0.94)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 6.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.6
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speed25Quantile < 7.02 : bus (37.21/4.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speed25Quantile >= 7.02 : car (6.2/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.6 : car (11.22/-0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.71 : car (7.28/0)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 11.84 : car (15.06/0.02)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.66
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.56
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.25
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 516.13 : tram (1.02/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 516.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.89 : bus (55.98/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.89 : bus (16.59/0.39)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.1 : car (0.2/-0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.25 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.56
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.6 : bus (22.99/1.79)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.6 : car (35.98/15.2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.15
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.71
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.59
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.74 : bus (1.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.74
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.88 : bus (66.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.88 : bus (37.57/0.2)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 5.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.42 : bus (14.2/5.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.64 : bus (15.79/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.64 : bus (28.38/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 5.97 : car (2.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.12 : bus (3.39/0.39)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.12 : bus (50.38/0)
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.71 : bike (2.1/1.09)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 6.32 : bike (15.59/0)
|   |   |   |   maximumTravelDistance >= 12.7
|   |   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   |   accelerationMax < 7.19
|   |   |   |   |   |   |   accelerationMean < 0.73
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.79
|   |   |   |   |   |   |   |   |   speedMean < 9.7
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.26
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.44 : car (31/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.44 : car (10.53/4.53)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.26
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.39
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 12.6 : bus (17.49/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 12.6 : car (34.97/16.65)
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.39 : car (18.51/2.34)
|   |   |   |   |   |   |   |   |   speedMean >= 9.7
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.4 : car (2.64/0.37)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.4
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 14.17 : car (7.1/3.09)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 14.17
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.78
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.28 : bus (5.21/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.28 : bus (53.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.13 : bus (10.06/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.78 : walk (0.58/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.79
|   |   |   |   |   |   |   |   |   speed95Quantile < 12.44 : bus (17.14/5.13)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 12.44
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.37
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.05 : car (12.63/0.21)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.05 : car (182.04/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.37
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.61 : bus (31.42/15.21)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.61 : car (22/-0)
|   |   |   |   |   |   |   accelerationMean >= 0.73
|   |   |   |   |   |   |   |   accelerationMedian < 1.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.98
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.22
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.62 : car (1.53/0.53)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.62 : car (125.31/0)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.22 : car (33.32/12.14)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.98
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 3.33 : car (18.66/5.25)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 3.33
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.76 : bus (99.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.76 : bus (30.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 5.79
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.27 : car (5/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 38.31 : bus (13.47/3.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 38.31
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.67 : bus (39.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.77 : bus (4.43/0.89)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.77 : bus (37.89/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 5.79 : car (20.36/6.42)
|   |   |   |   |   |   |   |   accelerationMedian >= 1.06 : car (37.12/0)
|   |   |   |   |   |   accelerationMax >= 7.19
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.36 : train (8.68/4.67)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.36
|   |   |   |   |   |   |   |   highSpeedPointRatio < 0.65
|   |   |   |   |   |   |   |   |   accelerationMax < 9.46 : bus (17.42/0.16)
|   |   |   |   |   |   |   |   |   accelerationMax >= 9.46 : bus (23.63/4.44)
|   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.65
|   |   |   |   |   |   |   |   |   accelerationMax < 17.44
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.73 : bus (37.36/18.89)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.73 : bus (27.01/-0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 17.44 : car (10.88/2.59)
|   |   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.9 : car (19.6/2.92)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.9
|   |   |   |   |   |   |   accelerationMedian < 1.31
|   |   |   |   |   |   |   |   accelerationMedian < 0.66 : car (1.55/0.75)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.66
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.63
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 5.89
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.17
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.77
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.73 : car (34.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.73 : car (9.25/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.77 : bus (0.06/-0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.03 : car (14.56/0.31)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.17 : car (210.17/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 5.89 : bike (0.19/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.63 : bus (0.37/0.19)
|   |   |   |   |   |   |   accelerationMedian >= 1.31 : bus (1.24/0.25)
|   |   |   trajectorySimilarityBus >= 170.01
|   |   |   |   trajectorySimilarityTrain < 210.15
|   |   |   |   |   speed25Quantile < 18.95
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.95
|   |   |   |   |   |   |   speedMax < 17.58 : bus (19.74/9.61)
|   |   |   |   |   |   |   speedMax >= 17.58 : car (29.09/3.42)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.95 : bus (11.79/0.39)
|   |   |   |   |   speed25Quantile >= 18.95
|   |   |   |   |   |   accelerationMean < 0.74
|   |   |   |   |   |   |   accelerationVariance < 0.25
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.89
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.87 : car (0.1/0.05)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.87
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.23 : train (3.02/0.02)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.23 : train (38/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.89 : train (4.12/0.12)
|   |   |   |   |   |   |   accelerationVariance >= 0.25 : bus (0.25/0.17)
|   |   |   |   |   |   accelerationMean >= 0.74 : car (1.54/0.71)
|   |   |   |   trajectorySimilarityTrain >= 210.15
|   |   |   |   |   accelerationMean < 0.6
|   |   |   |   |   |   speed95Quantile < 5.68 : bus (9.53/1.41)
|   |   |   |   |   |   speed95Quantile >= 5.68
|   |   |   |   |   |   |   accelerationMax < 6
|   |   |   |   |   |   |   |   accelerationMedian < 0.4 : car (19.83/9.83)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.4 : car (30.86/1)
|   |   |   |   |   |   |   accelerationMax >= 6 : tram (14.83/5.83)
|   |   |   |   |   accelerationMean >= 0.6
|   |   |   |   |   |   accumulatedTravelDistance < 428.07
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.1
|   |   |   |   |   |   |   |   speed95Quantile < 6.39 : bus (29.02/9.8)
|   |   |   |   |   |   |   |   speed95Quantile >= 6.39
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.43 : train (14.8/5.8)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.43
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.17 : train (1.18/0.18)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.17
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.55 : train (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.72 : car (24.69/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.72 : car (37.84/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.03 : bus (0.11/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.67 : bus (0.04/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.41 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.44 : bus (0.69/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.18 : car (67.53/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.94 : train (2.07/1.07)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.1 : bus (19.44/2.44)
|   |   |   |   |   |   accumulatedTravelDistance >= 428.07
|   |   |   |   |   |   |   acceleration95Quantile < 0.15 : car (11.52/4.1)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.15
|   |   |   |   |   |   |   |   accelerationMedian < 1.36
|   |   |   |   |   |   |   |   |   accelerationMax < 6.42
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.16
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.53 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.19 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.54 : car (201.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.14 : car (14.78/1.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.04 : car (30.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.04 : car (16.42/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.45 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.91 : car (4.26/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.3 : bus (1.68/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.07 : car (355.4/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.68 : bus (3.52/1)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.16 : car (1069.73/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 6.42
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : car (17.44/11.34)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.42
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.79 : train (3.52/1)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.79
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.34 : car (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.41 : car (15.52/1.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.41 : car (132.94/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.42 : car (14.94/3.94)
|   |   |   |   |   |   |   |   accelerationMedian >= 1.36 : bus (6.72/1.68)
accelerationFrequencyBandEnergy8To10Hz >= 4.59
|   speedMax < 3.87
|   |   accelerationMean < 2.12 : stationary (8.89/0.89)
|   |   accelerationMean >= 2.12
|   |   |   accelerationFrequencyBandEnergy28To30Hz < 12.37 : walk (2168.52/0)
|   |   |   accelerationFrequencyBandEnergy28To30Hz >= 12.37 : bike (1.79/0)
|   speedMax >= 3.87
|   |   highSpeedPointRatio < 0.31
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 7.28 : walk (4/0.1)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 7.28
|   |   |   |   acceleration75Quantile < 5.14
|   |   |   |   |   accelerationMedian < 4.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 4.02 : bike (146/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 4.02
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 4.07 : walk (0.2/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 4.07
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 18.2 : walk (0.29/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 18.2 : bike (42.2/0)
|   |   |   |   |   accelerationMedian >= 4.25 : bike (7.71/3.71)
|   |   |   |   acceleration75Quantile >= 5.14 : bike (37.81/7.81)
|   |   highSpeedPointRatio >= 0.31 : bus (23.61/1.61)

Size of the tree : 561



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.48 (    11)  trajectorySimilarityTram
      0.29 (     8)  speed25Quantile
      0.28 (    25)  trajectorySimilarityTrain
      0.27 (    20)  speedMax
      0.27 (     5)  speed75Quantile
      0.25 (    11)  stationaryPointRatio
      0.25 (    15)  speed95Quantile
      0.24 (     6)  travelDistance
      0.23 (    11)  headingVariance
      0.22 (     4)  highSpeedPointRatio
      0.21 (    19)  trajectorySimilarityBus
      0.2  (    14)  maximumTravelDistance
      0.19 (    10)  speedMedian
      0.18 (     2)  mediumSpeedPointRatio
      0.17 (     9)  speedMean
      0.17 (    37)  accelerationFrequencyBandEnergy10To14Hz
      0.17 (    51)  accelerationMax
      0.17 (    10)  lowSpeedPointRatio
      0.16 (    13)  accumulatedTravelDistance
      0.15 (    47)  accelerationMean
      0.15 (     5)  speedVariance
      0.15 (    41)  accelerationFrequencyBandEnergy1To3Hz
      0.15 (    21)  accelerationMin
      0.15 (    37)  accelerationFrequencyBandEnergy9To10Hz
      0.15 (     4)  speedMin
      0.15 (    47)  accelerationMedian
      0.14 (    20)  accelerationFrequencyBandEnergy22To25Hz
      0.14 (    27)  accelerationVariance
      0.13 (    33)  accelerationFrequencyBandEnergy14To20Hz
      0.13 (    32)  accelerationFrequencyBandEnergy25To27Hz
      0.13 (    20)  accelerationFrequencyBandEnergy20To22Hz
      0.13 (    25)  accelerationFrequencyBandEnergy8To10Hz
      0.13 (    31)  accelerationFrequencyBandEnergy28To30Hz
      0.13 (    26)  accelerationFrequencyBandEnergy27To28Hz
      0.12 (     4)  speed50Quantile
      0.12 (    23)  accelerationFrequencyBandEnergy8To9Hz
      0.09 (    32)  accelerationFrequencyBandEnergy25To30Hz
      0.07 (    23)  acceleration95Quantile
      0.07 (    14)  acceleration25Quantile
      0.06 (    19)  acceleration50Quantile
      0.05 (    19)  acceleration75Quantile
      0    (     0)  stoppages5To15s
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages0To5s
      0    (     0)  stoppages30To90s


Time taken to build model: 0.56 seconds

Time taken to test model on training data: 0.16 seconds

=== Error on training data ===

Correctly Classified Instances       11297               97.3124 %
Incorrectly Classified Instances       312                2.6876 %
Kappa statistic                          0.9669
Mean absolute error                      0.0247
Root mean squared error                  0.0895
Relative absolute error                 10.6377 %
Root relative squared error             26.2871 %
Total Number of Instances            11609     


=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0,974    0,001    0,985      0,974    0,979      0,977    1,000     0,997     stationary
                 0,995    0,001    0,996      0,995    0,995      0,994    1,000     1,000     walk
                 0,982    0,000    0,999      0,982    0,990      0,989    1,000     0,999     bike
                 0,975    0,011    0,975      0,975    0,975      0,964    0,999     0,997     car
                 0,959    0,013    0,937      0,959    0,948      0,937    0,998     0,992     bus
                 0,949    0,000    0,990      0,949    0,969      0,969    1,000     0,995     tram
                 0,950    0,007    0,947      0,950    0,948      0,942    0,998     0,989     train
Weighted Avg.    0,973    0,006    0,973      0,973    0,973      0,967    0,999     0,996     


=== Confusion Matrix ===

    a    b    c    d    e    f    g   <-- classified as
  970    1    0    0    4    0   21 |    a = stationary
    0 2197    0    2   10    0    0 |    b = walk
    0    3 1340    2   17    0    3 |    c = bike
    4    1    1 3371   56    0   26 |    d = car
    4    3    1   60 1895    0   12 |    e = bus
    0    0    0    4    5  300    7 |    f = tram
    7    0    0   19   36    3 1224 |    g = train

=== Classifier model (training fold 1) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationFrequencyBandEnergy9To10Hz < 1.85
|   accelerationFrequencyBandEnergy25To27Hz < 0.48
|   |   accelerationFrequencyBandEnergy1To3Hz < 5.53
|   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.04
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   |   |   acceleration95Quantile < 0.14
|   |   |   |   |   |   accumulatedTravelDistance < 7.81 : stationary (364.18/0)
|   |   |   |   |   |   accumulatedTravelDistance >= 7.81
|   |   |   |   |   |   |   speed50Quantile < 0.07
|   |   |   |   |   |   |   |   maximumTravelDistance < 3.21 : stationary (27.75/4)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 3.21 : stationary (123.33/0)
|   |   |   |   |   |   |   speed50Quantile >= 0.07 : train (14.74/6.74)
|   |   |   |   |   acceleration95Quantile >= 0.14 : train (11/1)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.15
|   |   |   |   |   |   accelerationMedian < 0.04 : stationary (36/4)
|   |   |   |   |   |   accelerationMedian >= 0.04 : train (11/4)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.15 : train (30/4)
|   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.04
|   |   |   |   trajectorySimilarityBus < 50.33
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.61
|   |   |   |   |   |   travelDistance < 23.79
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.33
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 461.22
|   |   |   |   |   |   |   |   |   travelDistance < 0.47 : train (17.21/1.11)
|   |   |   |   |   |   |   |   |   travelDistance >= 0.47 : train (33.91/20.48)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 461.22
|   |   |   |   |   |   |   |   |   speedMax < 1.73
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.08
|   |   |   |   |   |   |   |   |   |   |   speedMax < 0.01 : stationary (28.07/1.07)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 0.01 : train (29.97/14.8)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.08 : bus (21.22/14.22)
|   |   |   |   |   |   |   |   |   speedMax >= 1.73 : bus (10.82/5.82)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.33
|   |   |   |   |   |   |   |   maximumTravelDistance < 1.63 : stationary (38.1/1.63)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 1.63 : stationary (26.46/10.14)
|   |   |   |   |   |   travelDistance >= 23.79
|   |   |   |   |   |   |   accelerationVariance < 0.03
|   |   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.06 : train (3.57/1.42)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.06
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.09 : train (7.47/0.47)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.09 : train (45.27/0)
|   |   |   |   |   |   |   |   speedMin >= 0.01 : tram (16.24/5.24)
|   |   |   |   |   |   |   accelerationVariance >= 0.03
|   |   |   |   |   |   |   |   accelerationMax < 3.12
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.52 : bus (37.2/20)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.52
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.19 : bus (5/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.26 : train (19.41/0.41)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.26 : train (23.87/6.84)
|   |   |   |   |   |   |   |   accelerationMax >= 3.12
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 952.86
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.1 : stationary (1.01/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.5
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.72 : bus (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.72 : bus (11.01/0.5)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.5 : train (0.5/-0)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 952.86 : stationary (9.54/4.29)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.61
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   acceleration25Quantile < 0.04 : car (15/7)
|   |   |   |   |   |   |   acceleration25Quantile >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   accelerationMin < 0.23
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.54
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.33
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 28.09 : train (3.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 28.09
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.27 : bus (34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.27 : bus (6.55/2.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.41 : bus (4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : bus (2.46/0.46)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35 : bus (45/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.33 : train (2.16/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.61
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.15 : train (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.95 : bus (74.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.95 : bus (1.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.81 : bus (1.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.61 : bus (8.96/0.96)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.54 : bus (3.17/2.12)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.23 : car (3/-0)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.91
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.11 : car (7/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.87
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.18 : bus (3.14/1.14)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.18 : bus (37.87/1.58)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.87 : bus (7.93/5.36)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.91 : train (6.33/0.11)
|   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   stationaryPointRatio < 0.03
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (11.58/0.56)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 540.91 : bus (36.83/4.29)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.03 : stationary (15.78/3.78)
|   |   |   |   trajectorySimilarityBus >= 50.33
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.72
|   |   |   |   |   |   speed50Quantile < 2.57
|   |   |   |   |   |   |   acceleration95Quantile < 0.06
|   |   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (35.8/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.27 : train (34.25/1.17)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.27 : stationary (10.7/2.52)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.35
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.3 : train (10.74/3.11)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.3
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.19
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.06 : train (19.48/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.06 : train (85.23/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.19 : train (18.56/2.12)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : train (7.39/3.7)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.35
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.43 : car (39.16/20.99)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.43
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.07 : train (29.23/0.18)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.07 : train (12.24/3.43)
|   |   |   |   |   |   speed50Quantile >= 2.57
|   |   |   |   |   |   |   accelerationMean < 0.34
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.62
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : train (15.75/7.21)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   speedMedian < 10.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.5 : tram (17.68/8.68)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   speedMean < 9.86
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.1 : stationary (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (30.87/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : train (12.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 9.86 : tram (1.03/0.03)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 10.09
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.08 : train (1.65/0.27)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.05 : train (1.37/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.05 : train (111.12/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.62
|   |   |   |   |   |   |   |   |   speedMax < 17.3
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 279.38
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.18 : train (9.52/3)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.18
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.06 : tram (90/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06 : stationary (0.61/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (2.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.83 : tram (7.02/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.18 : tram (45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.18 : train (0.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.32 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 279.38
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.3 : train (48.8/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.3 : train (11.39/0.24)
|   |   |   |   |   |   |   |   |   speedMax >= 17.3
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.3 : train (97.53/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.3 : train (10.71/0.43)
|   |   |   |   |   |   |   accelerationMean >= 0.34
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.3
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.09 : bus (2.32/0.26)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.09
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 101.46 : bus (2.34/0.27)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 101.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.78
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.22 : train (30.11/2.04)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.22 : train (36.66/0.41)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.78
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.2 : train (25.07/3.67)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.2 : train (22.63/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.3
|   |   |   |   |   |   |   |   |   speed95Quantile < 17.64
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.74
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (7/2)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01 : bus (39.29/5.14)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.74 : car (5.64/2.64)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 17.64
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 2.25
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.34 : train (8.52/1.47)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.01 : train (39.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.01 : train (2.84/0.21)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 2.25 : bus (0.42/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.72 : car (76/-0)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 5.53
|   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.65
|   |   |   |   travelDistance < 79.43 : walk (4.04/0.02)
|   |   |   |   travelDistance >= 79.43
|   |   |   |   |   acceleration75Quantile < 4.72 : bike (620.98/0)
|   |   |   |   |   acceleration75Quantile >= 4.72
|   |   |   |   |   |   accelerationMin < 0.1 : bike (7.98/3.98)
|   |   |   |   |   |   accelerationMin >= 0.1 : bike (195/0)
|   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.65 : car (14/0)
|   accelerationFrequencyBandEnergy25To27Hz >= 0.48
|   |   travelDistance < 374.76
|   |   |   speed95Quantile < 2.77
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.01
|   |   |   |   |   speedMax < 1.98 : car (33.38/23.23)
|   |   |   |   |   speedMax >= 1.98 : car (18.31/8.67)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.01
|   |   |   |   |   accumulatedTravelDistance < 24.01 : bus (9.15/4.09)
|   |   |   |   |   accumulatedTravelDistance >= 24.01 : walk (31.52/0.44)
|   |   |   speed95Quantile >= 2.77
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.32
|   |   |   |   |   speedMin < 0.03
|   |   |   |   |   |   travelDistance < 86.66 : bus (23.08/10.98)
|   |   |   |   |   |   travelDistance >= 86.66
|   |   |   |   |   |   |   acceleration50Quantile < 0.53
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.57 : car (9.96/1.96)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.57
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.93 : car (14.39/0.2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.93 : car (35.59/0)
|   |   |   |   |   |   |   acceleration50Quantile >= 0.53 : car (32.37/4.98)
|   |   |   |   |   speedMin >= 0.03 : car (34.62/18.17)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.32
|   |   |   |   |   trajectorySimilarityTrain < 991.84
|   |   |   |   |   |   accelerationVariance < 1.2
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.65
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.55
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.37
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.95
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.3 : car (13.46/6)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.3
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 0.03 : bus (11.3/3.2)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.22
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.06 : bike (0.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.35 : bus (39.66/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.35 : tram (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.2 : bus (174.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.2 : car (0.22/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.22 : bus (11.97/1.97)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.95 : car (7.44/1.83)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.37
|   |   |   |   |   |   |   |   |   |   speedMax < 14.43
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 2.75 : car (10.72/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 2.75 : bus (37.52/14.68)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.69 : bus (13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.36 : car (37.8/18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.61 : bus (37/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.61 : car (12/6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.17 : car (23.08/8.43)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 308.1 : bus (22.92/6.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 308.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.64 : bus (27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.69 : bus (16.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.69 : bus (24.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.29 : car (0.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.1 : car (0.32/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.92 : car (0.32/0)
|   |   |   |   |   |   |   |   |   |   speedMax >= 14.43 : car (16.68/2.29)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.55
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.53
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.31 : bus (105.98/0)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.31 : bus (21.15/0.92)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.53 : bus (14.46/0.46)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.65
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.18 : bus (9.69/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.54 : car (38.44/1.23)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.54
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 61.58 : bus (24.99/4.64)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 61.58
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.6 : car (29.71/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.6 : car (11.57/4.57)
|   |   |   |   |   |   accelerationVariance >= 1.2 : bus (20.75/7.38)
|   |   |   |   |   trajectorySimilarityTrain >= 991.84
|   |   |   |   |   |   accelerationVariance < 0.43
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.59 : bus (26.15/8.15)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.06
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.25
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.11 : car (3.13/1.07)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.11
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.29 : car (9.6/0.47)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.74 : car (101.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.74 : car (11.53/0.07)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.25
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.63 : car (37.14/4.18)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.63 : bus (5.16/1.15)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.11 : bus (12.18/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.11
|   |   |   |   |   |   |   |   |   |   travelDistance < 371.05
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.81 : car (16.94/2.6)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.81 : car (33.53/0)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 371.05 : bus (2.1/0.08)
|   |   |   |   |   |   accelerationVariance >= 0.43
|   |   |   |   |   |   |   headingVariance < 10.23
|   |   |   |   |   |   |   |   speedVariance < 18.44
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.41 : car (1.11/0.11)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.41
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.45 : train (1.25/0.69)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.45 : bus (38.88/0.88)
|   |   |   |   |   |   |   |   speedVariance >= 18.44 : train (4.46/1.38)
|   |   |   |   |   |   |   headingVariance >= 10.23 : car (11.15/1.08)
|   |   travelDistance >= 374.76
|   |   |   trajectorySimilarityTrain < 281.19
|   |   |   |   speed95Quantile < 23.2
|   |   |   |   |   trajectorySimilarityBus < 529.04
|   |   |   |   |   |   accelerationMedian < 0.95
|   |   |   |   |   |   |   accumulatedTravelDistance < 636.54
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 39.3 : bus (34.42/0.98)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 39.3
|   |   |   |   |   |   |   |   |   speed75Quantile < 11.56 : bus (9.39/4.27)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 11.56
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.71 : car (25.18/2.61)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.71 : bus (30.09/12.55)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 636.54
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 126.28 : train (4.17/2.14)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 126.28
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.51 : train (1.52/0.99)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.51
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.51 : bus (10.76/1.76)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.51
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.3 : train (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.29 : bus (49.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.29 : bus (9.15/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.43 : bus (0.79/0.12)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.24 : bus (34.91/0.85)
|   |   |   |   |   |   accelerationMedian >= 0.95 : car (22.3/1.04)
|   |   |   |   |   trajectorySimilarityBus >= 529.04 : car (26.24/3.71)
|   |   |   |   speed95Quantile >= 23.2
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.6
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.52
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.58
|   |   |   |   |   |   |   |   accelerationMax < 3.24
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.1 : train (45.26/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.1 : train (8.07/0.07)
|   |   |   |   |   |   |   |   accelerationMax >= 3.24 : train (2.31/0.31)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.58 : train (10.15/1.08)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.52 : car (2.72/0.12)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.6 : car (28.04/1.56)
|   |   |   trajectorySimilarityTrain >= 281.19
|   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.17
|   |   |   |   |   |   accelerationMedian < 0.43
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.01
|   |   |   |   |   |   |   |   speed75Quantile < 11.64 : tram (23.44/6.01)
|   |   |   |   |   |   |   |   speed75Quantile >= 11.64
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.08 : bus (11.49/3.49)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.08 : car (37.74/7.74)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.01 : train (16/8)
|   |   |   |   |   |   accelerationMedian >= 0.43
|   |   |   |   |   |   |   maximumTravelDistance < 16.51
|   |   |   |   |   |   |   |   speed95Quantile < 15.56
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.75
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.41
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 70.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81 : bus (8.4/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.76 : bus (3.17/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.43 : car (13.15/2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.43 : car (29.74/0.04)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 70.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.72 : tram (0.6/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 12.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.32 : car (49.86/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.32 : car (16.84/0.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 12.5 : bike (0.06/-0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.24 : train (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.84 : car (101.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.84 : car (3.12/0.12)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.41 : bus (13.71/5.24)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.75 : bus (27.32/13.97)
|   |   |   |   |   |   |   |   speed95Quantile >= 15.56 : bus (36.38/18.08)
|   |   |   |   |   |   |   maximumTravelDistance >= 16.51
|   |   |   |   |   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.64
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.83 : car (26.36/11.39)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.83
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.35 : car (242.83/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.35
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.02
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.29 : car (3.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.29 : car (39.9/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.36 : bus (1.22/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.02 : bus (0.49/-0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.64 : bus (15.68/0.98)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   |   |   |   |   speed95Quantile < 23.66
|   |   |   |   |   |   |   |   |   |   accelerationMax < 7.12
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.55 : car (31.46/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.55 : car (375.34/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.13 : car (26.73/0.49)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.12
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.4 : car (8.91/2.91)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.4 : car (50/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 23.66 : bus (2.04/0.04)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.17
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.43 : train (6.67/0.67)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.43
|   |   |   |   |   |   |   accelerationMax < 14.69
|   |   |   |   |   |   |   |   headingVariance < 1.22
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.47 : bus (17.02/0.41)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.47 : bus (47.44/0)
|   |   |   |   |   |   |   |   headingVariance >= 1.22
|   |   |   |   |   |   |   |   |   accelerationMax < 11.88 : bus (35.21/7.26)
|   |   |   |   |   |   |   |   |   accelerationMax >= 11.88 : car (6/-0)
|   |   |   |   |   |   |   accelerationMax >= 14.69 : car (14.67/1.67)
|   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.33 : train (16.14/10.21)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.33
|   |   |   |   |   |   accelerationVariance < 0.46
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.06 : tram (0.95/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.95
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.44 : car (170.93/0)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.44 : car (16.24/0.24)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.95 : car (8.66/0.95)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.18 : car (714.55/0)
|   |   |   |   |   |   accelerationVariance >= 0.46 : car (28.63/10.68)
accelerationFrequencyBandEnergy9To10Hz >= 1.85
|   accelerationMean < 4.13
|   |   accelerationFrequencyBandEnergy28To30Hz < 2.93
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 5.86
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.13
|   |   |   |   |   travelDistance < 91.22 : walk (19.89/4.89)
|   |   |   |   |   travelDistance >= 91.22 : bus (35.11/1)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.13 : stationary (8/4)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 5.86 : walk (64/0)
|   |   accelerationFrequencyBandEnergy28To30Hz >= 2.93
|   |   |   accelerationMax < 65.3
|   |   |   |   speed95Quantile < 2.99 : walk (4.07/0.04)
|   |   |   |   speed95Quantile >= 2.99
|   |   |   |   |   speed95Quantile < 9.68
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 3.27 : bike (3.97/0.97)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 3.27 : bike (175.95/0)
|   |   |   |   |   speed95Quantile >= 9.68 : bus (1.02/0.02)
|   |   |   accelerationMax >= 65.3 : bus (14/4)
|   accelerationMean >= 4.13
|   |   accelerationMedian < 4.25
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 9.44 : walk (89/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 9.44 : bike (17/0)
|   |   accelerationMedian >= 4.25
|   |   |   speedMean < 3.08 : walk (1498.78/0)
|   |   |   speedMean >= 3.08 : bike (3.22/0.22)

Size of the tree : 477


RandomTree
==========

accelerationFrequencyBandEnergy1To3Hz < 6.91
|   accelerationMean < 0.4
|   |   accelerationFrequencyBandEnergy8To10Hz < 0.09
|   |   |   accelerationVariance < 0.01
|   |   |   |   accelerationMean < 0.04
|   |   |   |   |   speed75Quantile < 0.21
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   |   |   |   |   accelerationMax < 0.1 : stationary (249.17/0)
|   |   |   |   |   |   |   accelerationMax >= 0.1
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.08 : stationary (28/1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.08 : stationary (259.77/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04 : stationary (20.66/0.97)
|   |   |   |   |   speed75Quantile >= 0.21 : stationary (16.4/3.03)
|   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.09 : stationary (25/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.09 : train (38/12)
|   |   |   accelerationVariance >= 0.01 : car (20/13)
|   |   accelerationFrequencyBandEnergy8To10Hz >= 0.09
|   |   |   speedMean < 5.33
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.36
|   |   |   |   |   |   |   accelerationMedian < 0.23
|   |   |   |   |   |   |   |   speedVariance < 13.44
|   |   |   |   |   |   |   |   |   speedMedian < 2.49
|   |   |   |   |   |   |   |   |   |   accelerationMax < 1.65
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.71 : train (34.27/6.26)
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.71 : train (35.41/7.27)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.65
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.17 : car (5.53/0.53)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 875.58 : bus (25.87/5.87)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 875.58 : train (18.32/6.29)
|   |   |   |   |   |   |   |   |   speedMedian >= 2.49 : tram (18.97/8.97)
|   |   |   |   |   |   |   |   speedVariance >= 13.44
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.18
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.08 : train (14.22/0.74)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.08 : train (31.06/0)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.18 : train (17.21/2.19)
|   |   |   |   |   |   |   accelerationMedian >= 0.23 : bus (15.3/2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.36 : car (22.09/5.09)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.29
|   |   |   |   |   |   |   speedVariance < 5.54 : bus (35.46/18.13)
|   |   |   |   |   |   |   speedVariance >= 5.54
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 59.31
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.78 : car (5.07/1.07)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.78
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 312.17
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.89
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.14 : stationary (0.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.85 : bus (17.53/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.59 : bus (16.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.59 : bus (30.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.91 : bus (2.35/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (0.53/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.89 : train (2.23/1.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.94 : car (1.35/0.35)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 312.17 : train (1.06/0.03)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 59.31 : bus (16.12/7.97)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.29
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.36 : car (33.19/5.19)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.36 : car (10.3/3.3)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.76 : bus (7.09/2.09)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   stationaryPointRatio < 0.77
|   |   |   |   |   |   acceleration75Quantile < 0.33
|   |   |   |   |   |   |   speed50Quantile < 0.1 : train (7.86/3.19)
|   |   |   |   |   |   |   speed50Quantile >= 0.1
|   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (24.55/6.87)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.06 : stationary (37.24/2.06)
|   |   |   |   |   |   acceleration75Quantile >= 0.33 : stationary (28.77/4.77)
|   |   |   |   |   stationaryPointRatio >= 0.77
|   |   |   |   |   |   accelerationMedian < 0.06
|   |   |   |   |   |   |   accelerationMax < 0.68 : train (12.39/0)
|   |   |   |   |   |   |   accelerationMax >= 0.68
|   |   |   |   |   |   |   |   headingVariance < 2.28 : stationary (31.76/8.06)
|   |   |   |   |   |   |   |   headingVariance >= 2.28
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 8.62 : car (2.05/0.05)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 8.62
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.07 : stationary (45.6/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.07 : stationary (27.13/0.13)
|   |   |   |   |   |   accelerationMedian >= 0.06
|   |   |   |   |   |   |   accelerationMean < 0.17
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.2
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 17.61 : bus (39.79/14.79)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 17.61 : train (23.87/0.45)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.2 : bus (18.59/4.59)
|   |   |   |   |   |   |   accelerationMean >= 0.17
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.07
|   |   |   |   |   |   |   |   |   accelerationMean < 0.27 : train (48.13/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.27 : train (5.96/1.98)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.07 : train (19.22/9.96)
|   |   |   speedMean >= 5.33
|   |   |   |   speedMax < 17.58
|   |   |   |   |   trajectorySimilarityTram < 283.79
|   |   |   |   |   |   accelerationMin < 0.01 : train (7.54/2.51)
|   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.44 : train (3.79/1.28)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.44
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.62
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.18 : tram (8.26/1.26)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.18
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.42
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.52 : tram (4.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.32 : tram (99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.32 : tram (4.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.18 : tram (11.98/0.98)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.25 : tram (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.25 : tram (14.28/0.28)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.49 : train (0.42/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.62 : tram (8.82/1.82)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62 : train (0.84/0)
|   |   |   |   |   trajectorySimilarityTram >= 283.79
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.98
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.44
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.29 : train (3.84/0.73)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.29 : train (112.49/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.44 : train (28.31/4.57)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.98 : bus (27.06/13.06)
|   |   |   |   speedMax >= 17.58
|   |   |   |   |   acceleration25Quantile < 0.08 : train (32.13/2.78)
|   |   |   |   |   acceleration25Quantile >= 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.59
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.26 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.26 : train (133.61/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.08 : train (1.87/0.17)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.08 : train (47/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.76 : train (4.35/0.35)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.59 : train (24.74/1.39)
|   accelerationMean >= 0.4
|   |   speed50Quantile < 9.39
|   |   |   speed95Quantile < 2
|   |   |   |   speed25Quantile < 0.04
|   |   |   |   |   accelerationVariance < 2.62
|   |   |   |   |   |   accelerationMedian < 0.6 : bus (33.99/7.46)
|   |   |   |   |   |   accelerationMedian >= 0.6 : car (25.6/8.03)
|   |   |   |   |   accelerationVariance >= 2.62 : walk (21.13/4.07)
|   |   |   |   speed25Quantile >= 0.04 : stationary (32.93/5.9)
|   |   |   speed95Quantile >= 2
|   |   |   |   trajectorySimilarityTrain < 951.47
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.9
|   |   |   |   |   |   accelerationMean < 1.11
|   |   |   |   |   |   |   accelerationMax < 1.81 : train (28.41/10)
|   |   |   |   |   |   |   accelerationMax >= 1.81
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 28.18 : train (13.44/3.38)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 28.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.93
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.36
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.84
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.27 : train (1.58/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.15 : car (2.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.02 : bus (87.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.02 : bus (1.34/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.97 : car (2.01/1)
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.03 : car (21.52/9.32)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.84
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.37 : bus (13.37/1.08)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.29 : bus (12.51/1.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.29 : bus (47.29/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.36 : car (21.8/5.86)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.93
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.46 : bus (12.22/4.22)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.59
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.41
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.98 : bus (23.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.98 : bus (47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.25 : bus (23.37/1.94)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.41 : car (1.43/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.59
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.04
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.95 : bus (130.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.95 : bus (34.43/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.04 : bus (38.94/0.43)
|   |   |   |   |   |   accelerationMean >= 1.11 : bike (14.98/6.98)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.9
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.66
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.02 : car (33.43/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.02
|   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : car (15.22/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (27.54/11.22)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.66
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.51
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.6
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.8 : bus (34.11/2.44)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.8 : car (12.22/6)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.6
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.46 : bus (29.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.46 : bus (22.76/1.77)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.51 : car (12.22/2.22)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.66
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.95 : bus (71.1/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.95 : bus (4.88/0.88)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.66
|   |   |   |   |   |   |   trajectorySimilarityBus < 61.58
|   |   |   |   |   |   |   |   travelDistance < 196.52 : car (31.12/4.15)
|   |   |   |   |   |   |   |   travelDistance >= 196.52 : bus (33.35/7.94)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 61.58
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.22
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.52 : car (7.18/0.86)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.52
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 1.11
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.94 : car (28.69/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.94 : car (16.08/0.22)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 1.11 : bus (0.86/0.32)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.22 : bike (8.32/-0)
|   |   |   |   trajectorySimilarityTrain >= 951.47
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.74
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.68
|   |   |   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.32 : train (5.13/2.4)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.32
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.06 : bus (35.62/10.47)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.06 : car (19.16/3.16)
|   |   |   |   |   |   |   accelerationMin >= 0.06 : tram (19.86/8.78)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.68
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.87
|   |   |   |   |   |   |   |   speedVariance < 19.01
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.21
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : tram (0.03/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.52 : car (25.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.52 : car (15.8/0.06)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.1 : car (0.21/0.03)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.21 : car (14.25/5.12)
|   |   |   |   |   |   |   |   speedVariance >= 19.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.48 : car (43.66/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.48
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.34 : bike (0.14/0.05)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.78 : car (6.04/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.78 : car (35.94/0.05)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.41 : bus (0.09/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.87 : tram (3/1)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.74
|   |   |   |   |   |   accelerationVariance < 0.96
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.16 : bus (26.78/2.55)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.16
|   |   |   |   |   |   |   |   maximumTravelDistance < 11.98 : bus (37.58/17.3)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 11.98 : car (37.58/1.68)
|   |   |   |   |   |   accelerationVariance >= 0.96 : bus (14.48/4.86)
|   |   speed50Quantile >= 9.39
|   |   |   speed95Quantile < 23.87
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.39
|   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.45
|   |   |   |   |   |   |   acceleration50Quantile < 0.14 : train (4.49/2.49)
|   |   |   |   |   |   |   acceleration50Quantile >= 0.14 : train (37.81/2.66)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.45
|   |   |   |   |   |   |   accelerationMin < 0.03 : bus (25.73/6.07)
|   |   |   |   |   |   |   accelerationMin >= 0.03 : train (28.61/4.32)
|   |   |   |   |   accelerationMin >= 0.06
|   |   |   |   |   |   accelerationMedian < 0.8 : train (12.24/5.24)
|   |   |   |   |   |   accelerationMedian >= 0.8
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.89 : car (10.73/3.73)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.89 : car (52.32/0)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.39
|   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   trajectorySimilarityTrain < 830.76
|   |   |   |   |   |   |   accelerationMax < 7.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.92
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.46 : bus (28.18/10.54)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.46
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.31 : bus (8.64/0.32)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.31 : bus (59.09/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.92
|   |   |   |   |   |   |   |   |   speed50Quantile < 19.49
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.54
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 192.78
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.38 : car (36.82/1.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.38 : bus (5.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 192.78 : bus (13.28/2.25)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.54 : bus (32.54/2.23)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.6
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.52 : car (3.31/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.52 : car (85.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.6 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.7 : bus (19.77/3.31)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.7 : car (23.77/9)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 19.49
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.77 : bus (28.78/0.55)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.77 : bus (26.94/6.88)
|   |   |   |   |   |   |   accelerationMax >= 7.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.68 : tram (7.57/2.57)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.68
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.31 : train (3.32/0.16)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.31
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.63 : train (0.8/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.63
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.6 : bus (18.09/0.8)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.6 : bus (25.09/0.8)
|   |   |   |   |   |   trajectorySimilarityTrain >= 830.76
|   |   |   |   |   |   |   accelerationMax < 4.18
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.46
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62 : car (26.54/0.76)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 68.28 : bus (25/6)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 68.28 : car (28/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.46
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.31
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 12.41
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.48
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.95 : car (7.12/1.01)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.95
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.96 : car (10.64/0.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.96 : car (66.64/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.48 : bus (8.19/-0)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 12.41
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.04 : car (19.57/0.57)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.97 : car (255.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.97 : bus (0.19/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.31 : bus (4/-0)
|   |   |   |   |   |   |   accelerationMax >= 4.18
|   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   accelerationMax < 7
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.49 : bus (11.61/2.03)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.49 : car (34.52/1.76)
|   |   |   |   |   |   |   |   |   accelerationMax >= 7 : train (23.13/10.61)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.28
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 16.18 : bus (29.61/10.03)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 16.18
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.69 : car (28.59/4.13)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.14
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.63 : car (13.94/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.63 : car (41.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.14 : car (1.38/0.38)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.28 : bus (37.52/8.51)
|   |   |   |   |   accelerationMin >= 0.07
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.26
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.83 : car (366.3/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.83
|   |   |   |   |   |   |   |   accelerationMedian < 0.8 : car (21.24/4.83)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.8
|   |   |   |   |   |   |   |   |   speed75Quantile < 11.39 : bus (1.01/0.01)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 11.39
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.03 : car (1.82/0.82)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.03 : car (128.82/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.26 : bus (23.9/7.49)
|   |   |   speed95Quantile >= 23.87
|   |   |   |   accelerationMean < 0.73
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.79
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.55
|   |   |   |   |   |   |   accelerationMax < 3.21
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.37 : train (10.68/2.6)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.37
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.64
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11 : train (43.04/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : train (27.04/1.04)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.64 : tram (0.26/-0)
|   |   |   |   |   |   |   accelerationMax >= 3.21 : train (14.15/8.85)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.55 : car (4.56/-0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.79 : train (35.81/1.3)
|   |   |   |   accelerationMean >= 0.73
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.37 : car (35.19/7.98)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.37
|   |   |   |   |   |   accelerationVariance < 0.51
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.72
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.72
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.62 : bus (0.26/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.62
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.32 : car (147.42/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.32 : bus (0.26/-0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.72 : bus (0.52/-0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.72
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.37
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.68 : car (183.86/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.68 : car (17.26/0.26)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.37 : car (602.59/0)
|   |   |   |   |   |   accelerationVariance >= 0.51 : bus (15.71/8.42)
accelerationFrequencyBandEnergy1To3Hz >= 6.91
|   speedMin < 1.85
|   |   speed50Quantile < 2.15
|   |   |   accelerationMedian < 1.99
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 2.06 : bike (17.44/7.6)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 2.06 : walk (38.06/16.25)
|   |   |   accelerationMedian >= 1.99
|   |   |   |   travelDistance < 239.24 : walk (1661.05/0)
|   |   |   |   travelDistance >= 239.24 : bike (6.32/1.32)
|   |   speed50Quantile >= 2.15
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 11.62 : bus (12.46/7.3)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 11.62
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 8.78
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.64
|   |   |   |   |   |   acceleration50Quantile < 2.58 : bike (31.04/0)
|   |   |   |   |   |   acceleration50Quantile >= 2.58
|   |   |   |   |   |   |   accelerationMin < 0.12 : bike (10.16/0.12)
|   |   |   |   |   |   |   accelerationMin >= 0.12 : bike (34/0)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.64 : bike (16.12/0.12)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 8.78 : bike (9.67/2.47)
|   speedMin >= 1.85
|   |   accelerationFrequencyBandEnergy10To14Hz < 2.47
|   |   |   acceleration50Quantile < 2.76 : bike (393.42/0)
|   |   |   acceleration50Quantile >= 2.76
|   |   |   |   acceleration95Quantile < 2.84 : bike (168.71/0)
|   |   |   |   acceleration95Quantile >= 2.84
|   |   |   |   |   accelerationMin < 0.1 : walk (2.07/1)
|   |   |   |   |   accelerationMin >= 0.1 : bike (190/0)
|   |   accelerationFrequencyBandEnergy10To14Hz >= 2.47
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 7.3
|   |   |   |   acceleration25Quantile < 3.81 : bus (36.12/5.7)
|   |   |   |   acceleration25Quantile >= 3.81 : walk (9.55/1)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 7.3
|   |   |   |   speed50Quantile < 12.41
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 3.86
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 11.09 : bike (37.67/1.34)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 11.09 : bike (89/0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 3.86
|   |   |   |   |   |   acceleration25Quantile < 3.82 : bike (34.68/7.01)
|   |   |   |   |   |   acceleration25Quantile >= 3.82
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 7.26 : walk (24.38/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 7.26 : bike (16.67/1.67)
|   |   |   |   speed50Quantile >= 12.41 : car (13.41/7.41)

Size of the tree : 447


RandomTree
==========

accelerationFrequencyBandEnergy8To9Hz < 2.82
|   accelerationMedian < 0.73
|   |   accelerationFrequencyBandEnergy8To9Hz < 0.05
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.17
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.05
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.01 : stationary (107/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.01 : train (4/0)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.08 : stationary (302/0)
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.05
|   |   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.05
|   |   |   |   |   |   |   acceleration95Quantile < 0.08
|   |   |   |   |   |   |   |   speedVariance < 0.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.1 : stationary (52.3/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.1 : train (4.81/2)
|   |   |   |   |   |   |   |   speedVariance >= 0.01 : train (3.89/0.7)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.08 : train (8/3)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.05 : stationary (103/0)
|   |   |   |   |   accelerationMedian >= 0.04 : train (4/1)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.17
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.08 : train (28/0)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.08
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.28 : stationary (24/12)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.28 : train (18/4)
|   |   accelerationFrequencyBandEnergy8To9Hz >= 0.05
|   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.53
|   |   |   |   maximumTravelDistance < 17.73
|   |   |   |   |   speed25Quantile < 1.68
|   |   |   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   |   |   accelerationMax < 1.6
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 820.69
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (36.73/5.48)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01 : bus (12.76/3.76)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 820.69
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.13 : train (38.76/0.54)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.13 : train (16.92/6)
|   |   |   |   |   |   |   accelerationMax >= 1.6
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.28
|   |   |   |   |   |   |   |   |   speedMax < 8.18
|   |   |   |   |   |   |   |   |   |   speedMax < 6.15 : bus (21.27/9.19)
|   |   |   |   |   |   |   |   |   |   speedMax >= 6.15
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.21 : bus (16.34/4.34)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.21 : bus (27.26/1.1)
|   |   |   |   |   |   |   |   |   speedMax >= 8.18
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.07 : train (10.55/3.41)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.07
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 3.44
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.26 : bus (15.76/7.76)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.26 : car (25.42/1.42)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.18 : bus (10.98/2.87)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 3.44 : bus (13.84/3.78)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.28
|   |   |   |   |   |   |   |   |   accelerationMean < 0.39
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.62
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.29 : bus (8.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.29 : bus (58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.27 : train (2.37/1)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.62 : train (7.2/3.06)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 0.01 : train (14.4/6.12)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.39
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.2
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.07 : bus (12.63/5.79)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.48 : bus (20.44/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.48 : bus (31.74/2.47)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.63 : car (0.62/-0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.2
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : bus (52.51/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : bus (11.53/1.53)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   accelerationMean < 0.29
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.08
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.03
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.1
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.31
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.25 : stationary (8.38/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.25 : train (37.06/9.06)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.31 : stationary (27.55/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.1 : bus (19.67/8.67)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.03
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.24 : stationary (30.88/12.35)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.24 : stationary (12.06/3.53)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.08
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.15
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 26.48 : bus (34.94/11.94)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 26.48 : train (18.04/3.06)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.15 : train (36.71/6)
|   |   |   |   |   |   |   accelerationMean >= 0.29
|   |   |   |   |   |   |   |   speedMin < 0.01 : bus (19.93/5.07)
|   |   |   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.45 : train (9.49/4.99)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.45
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.48
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.55 : bus (0.99/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.38 : stationary (60.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.38 : stationary (1.28/0.28)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.48 : stationary (6.36/4.36)
|   |   |   |   |   speed25Quantile >= 1.68
|   |   |   |   |   |   accelerationMax < 1.51
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.55
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 851.42 : train (13.89/0.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 851.42 : train (38.89/18.75)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.55
|   |   |   |   |   |   |   |   speed95Quantile < 10.54 : tram (17.67/7.67)
|   |   |   |   |   |   |   |   speed95Quantile >= 10.54
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.31
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.14 : train (4.28/2)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.14
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.18 : tram (61/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.18 : tram (5.91/0.91)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.2 : tram (69/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.31 : train (3.65/0)
|   |   |   |   |   |   accelerationMax >= 1.51
|   |   |   |   |   |   |   speedMean < 8.93
|   |   |   |   |   |   |   |   accelerationMean < 0.35
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.93 : train (6.88/2.44)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.93
|   |   |   |   |   |   |   |   |   |   speedVariance < 12.7
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.09
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.4 : tram (34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.4 : tram (11.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.29 : train (0.67/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.09 : tram (7.67/3.67)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 12.7 : train (4.2/0.05)
|   |   |   |   |   |   |   |   accelerationMean >= 0.35
|   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.27 : tram (4.42/0.37)
|   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.27
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : tram (4.42/1.37)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.31 : bus (18.31/3.99)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.44 : bus (28.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.99 : train (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.99
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (0.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : bus (40/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.55 : bus (18.5/1.16)
|   |   |   |   |   |   |   speedMean >= 8.93
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 247.47 : tram (8.9/0.83)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 247.47
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.66 : train (30.62/2.14)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.66 : bus (36.14/15.81)
|   |   |   |   maximumTravelDistance >= 17.73
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.13
|   |   |   |   |   |   accelerationMin < 0.01
|   |   |   |   |   |   |   speedMax < 2.59 : stationary (19.85/0.88)
|   |   |   |   |   |   |   speedMax >= 2.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.14
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.02 : train (16/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.02 : train (27.01/1.07)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.14 : stationary (0.64/0)
|   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.24 : bus (2.81/0.62)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.24
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.48 : train (73.25/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.48
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.15 : train (84.87/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.15 : train (4.62/0.62)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.13
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.15 : train (29.06/8)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.15
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.66
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.25 : train (17.12/1.87)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.25
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.27
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.35 : train (115.62/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.35 : train (12.75/0.94)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.27
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.29 : bus (1.25/0.31)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.29
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (5/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.78
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 614.63 : train (12.64/2.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 614.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.47 : train (49.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.79
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.54 : train (71.84/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.54 : tram (1.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.79 : tram (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.78 : train (25.37/3.12)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.66 : walk (2/-0)
|   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.53
|   |   |   |   trajectorySimilarityTrain < 250.91
|   |   |   |   |   accelerationMin < 0.01 : bike (29.34/16)
|   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   maximumTravelDistance < 24.16
|   |   |   |   |   |   |   maximumTravelDistance < 14.38
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 19.14 : bus (16.88/5.61)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 19.14
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.18 : bike (1/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.18
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : bus (10.16/1.16)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : bus (87.39/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.31 : car (2.19/1.19)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.31
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 242.78
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.24 : bus (39.77/6.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.24 : bus (33.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 242.78 : car (1.07/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.92
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.74 : car (1.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.74
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 24.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.48 : bus (35.97/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.06 : bus (22.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.06 : bus (28.07/1.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 24.34 : bus (8.97/0.97)
|   |   |   |   |   |   |   maximumTravelDistance >= 14.38
|   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.51 : car (31.48/6.92)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.51 : bus (15.25/0.82)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   speedMedian < 13.99
|   |   |   |   |   |   |   |   |   |   speedMean < 10.49 : bus (30.55/2.36)
|   |   |   |   |   |   |   |   |   |   speedMean >= 10.49 : car (20.37/4.13)
|   |   |   |   |   |   |   |   |   speedMedian >= 13.99
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 1.45
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.16 : car (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.16
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.43 : bus (9.15/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.43 : bus (35.24/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.08 : bus (1.19/0.19)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1.45 : car (0.19/0)
|   |   |   |   |   |   maximumTravelDistance >= 24.16
|   |   |   |   |   |   |   accumulatedTravelDistance < 385.68 : bus (1.05/0.04)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 385.68
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.48
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.24
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.13 : train (37.24/0.03)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.13 : train (9.97/0.87)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.24 : bus (0.55/0.1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.48 : car (0.76/0.31)
|   |   |   |   trajectorySimilarityTrain >= 250.91
|   |   |   |   |   accelerationMax < 9
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.95
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.76
|   |   |   |   |   |   |   |   accelerationMedian < 0.36
|   |   |   |   |   |   |   |   |   speed25Quantile < 2.84
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.84
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.25 : car (56/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.25 : car (1.5/0.5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.84 : bus (5.5/1)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 2.84 : tram (20.32/8.16)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.36
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.74 : car (39.25/19.6)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.74
|   |   |   |   |   |   |   |   |   |   travelDistance < 242.25 : bus (20/8)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 242.25 : bus (25/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.76
|   |   |   |   |   |   |   |   accelerationMedian < 0.34 : bus (15/7)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.02 : bus (29.21/12)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.02
|   |   |   |   |   |   |   |   |   |   speedMin < 2.13 : bus (41.3/0)
|   |   |   |   |   |   |   |   |   |   speedMin >= 2.13 : bus (21.15/4)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.95
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.27
|   |   |   |   |   |   |   |   maximumTravelDistance < 16.12
|   |   |   |   |   |   |   |   |   accelerationMean < 0.63
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 4.96 : bus (1.06/0.06)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 4.96
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.61 : car (115.65/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.61 : bus (3/1)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.63
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 61.28 : bus (37.25/18.13)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 61.28
|   |   |   |   |   |   |   |   |   |   |   headingVariance < 0.55 : bus (3.1/0.09)
|   |   |   |   |   |   |   |   |   |   |   headingVariance >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.61 : car (5.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.61 : car (49.66/0)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 16.12
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.85 : car (26.34/1.34)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.85 : car (200.11/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.27
|   |   |   |   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.94
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.29 : bus (23.66/1.66)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.29
|   |   |   |   |   |   |   |   |   |   |   speedMean < 4.7 : bus (1.06/0.05)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 4.7
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.78 : car (2.1/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.78 : car (39.83/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.4 : bus (0.64/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.94
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 139.15
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 221.34 : car (1.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 221.34 : bus (96.04/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 139.15 : train (3.35/1.35)
|   |   |   |   |   |   |   |   accelerationMin >= 0.07 : car (19/3)
|   |   |   |   |   accelerationMax >= 9
|   |   |   |   |   |   speedMedian < 1.11 : stationary (32.17/16.17)
|   |   |   |   |   |   speedMedian >= 1.11
|   |   |   |   |   |   |   trajectorySimilarityBus < 117.47 : bus (25.52/2.29)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 117.47 : train (15.53/7.84)
|   accelerationMedian >= 0.73
|   |   accelerationFrequencyBandEnergy1To3Hz < 6.63
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.23
|   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.42
|   |   |   |   |   |   mediumSpeedPointRatio < 0.98
|   |   |   |   |   |   |   accelerationVariance < 0.15 : bus (37.89/1.89)
|   |   |   |   |   |   |   accelerationVariance >= 0.15
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.34 : car (25.42/10.18)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.34 : car (16.94/1.12)
|   |   |   |   |   |   mediumSpeedPointRatio >= 0.98
|   |   |   |   |   |   |   maximumTravelDistance < 15.05 : bus (10.42/5.38)
|   |   |   |   |   |   |   maximumTravelDistance >= 15.05
|   |   |   |   |   |   |   |   acceleration50Quantile < 1.31 : car (151/0)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 1.31 : car (30.33/0.67)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.42
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.92
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.74
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.01 : bus (36/1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.01 : car (8/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.74 : car (18/3)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.92
|   |   |   |   |   |   |   accelerationMax < 2.22 : train (3/0)
|   |   |   |   |   |   |   accelerationMax >= 2.22 : bus (47/0)
|   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   speed25Quantile < 7.39
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.14 : bike (5/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.14
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.02 : car (26/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.02
|   |   |   |   |   |   |   |   acceleration75Quantile < 1.08
|   |   |   |   |   |   |   |   |   headingVariance < 4.38
|   |   |   |   |   |   |   |   |   |   speedMedian < 1.68 : car (9.17/4.1)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 1.68 : bus (31.57/2.29)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.38 : car (29.54/2.33)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 1.08
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.68 : bus (1.72/0.72)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.68 : car (38.96/0.08)
|   |   |   |   |   speed25Quantile >= 7.39
|   |   |   |   |   |   accelerationVariance < 0.33
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.13
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.57
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.25 : bus (0.92/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.25 : car (164.76/0)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.57 : car (1205.12/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.13
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.26 : bus (9.76/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.26 : car (49/0)
|   |   |   |   |   |   accelerationVariance >= 0.33
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.97
|   |   |   |   |   |   |   |   accelerationMax < 4.88 : bus (26.84/10.84)
|   |   |   |   |   |   |   |   accelerationMax >= 4.88
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.76
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.56 : car (8.68/3.76)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.09 : car (20.92/0.92)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.09 : car (33/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.76 : car (25.68/10.68)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.97
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.32 : car (4.84/1.84)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.32
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.21 : car (85.76/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.21 : car (4.76/1)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.23
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.02
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.01 : train (3/0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.01
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.69 : car (41/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.69 : train (1/0)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.02
|   |   |   |   |   speed75Quantile < 24.04
|   |   |   |   |   |   travelDistance < 177.12 : bike (10.56/6.52)
|   |   |   |   |   |   travelDistance >= 177.12
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.43
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 119.25 : bus (30.38/2.38)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 119.25 : car (32.41/4.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.43 : car (26.37/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.43
|   |   |   |   |   |   |   |   speedMax < 7.53 : car (7.51/0.45)
|   |   |   |   |   |   |   |   speedMax >= 7.53
|   |   |   |   |   |   |   |   |   accelerationMean < 1.79
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.94
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.91 : car (0.73/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.91 : bus (84.67/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.94 : bus (11.47/2)
|   |   |   |   |   |   |   |   |   accelerationMean >= 1.79 : bike (0.73/-0)
|   |   |   |   |   speed75Quantile >= 24.04
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.42
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.59 : train (0.17/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.59 : car (39.84/0.17)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.42 : bus (1.17/0.17)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 6.63
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.91
|   |   |   |   mediumSpeedPointRatio < 0.01 : walk (11.14/5.11)
|   |   |   |   mediumSpeedPointRatio >= 0.01
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.41
|   |   |   |   |   |   accelerationMax < 13.45
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 16.74 : bike (98.96/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 16.74 : bike (11.98/1.98)
|   |   |   |   |   |   accelerationMax >= 13.45 : bike (767.95/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.41 : car (1.98/-0)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.91
|   |   |   |   travelDistance < 311.87
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 9.37 : walk (10.25/4.25)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 9.37 : bike (38.59/0)
|   |   |   |   travelDistance >= 311.87
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.94 : car (7/0)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.94 : bus (36.16/3.41)
accelerationFrequencyBandEnergy8To9Hz >= 2.82
|   speedMax < 3.87
|   |   accelerationFrequencyBandEnergy25To27Hz < 11.28 : walk (1664.39/0)
|   |   accelerationFrequencyBandEnergy25To27Hz >= 11.28 : walk (7.69/2.69)
|   speedMax >= 3.87
|   |   speed95Quantile < 10.38
|   |   |   accelerationMin < 0.26
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.63 : walk (2.76/0)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.63
|   |   |   |   |   accelerationMax < 21.51 : bike (13.96/2.96)
|   |   |   |   |   accelerationMax >= 21.51
|   |   |   |   |   |   acceleration75Quantile < 3.08 : bike (100.2/0)
|   |   |   |   |   |   acceleration75Quantile >= 3.08
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 5.36
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 13.03 : bike (9.1/0.1)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 13.03 : bike (40/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 5.36 : bike (12.28/1.18)
|   |   |   accelerationMin >= 0.26 : walk (5.92/-0)
|   |   speed95Quantile >= 10.38 : bus (9.7/0.7)

Size of the tree : 443



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.54 (     5)  trajectorySimilarityTram
      0.35 (     6)  speedMin
      0.31 (    17)  trajectorySimilarityBus
      0.31 (     5)  headingVariance
      0.3  (    11)  speedMax
      0.26 (    13)  travelDistance
      0.26 (     5)  lowSpeedPointRatio
      0.25 (     8)  speedMedian
      0.25 (     6)  speed25Quantile
      0.21 (     1)  highSpeedPointRatio
      0.21 (    42)  accelerationFrequencyBandEnergy1To3Hz
      0.2  (     5)  stationaryPointRatio
      0.19 (     6)  speedMean
      0.19 (    26)  accelerationFrequencyBandEnergy14To20Hz
      0.18 (    19)  accelerationFrequencyBandEnergy25To30Hz
      0.18 (    18)  trajectorySimilarityTrain
      0.18 (    18)  accelerationFrequencyBandEnergy28To30Hz
      0.18 (    23)  accelerationFrequencyBandEnergy8To10Hz
      0.17 (    35)  accelerationMedian
      0.17 (    13)  speed95Quantile
      0.17 (    14)  accelerationFrequencyBandEnergy27To28Hz
      0.17 (     6)  accumulatedTravelDistance
      0.16 (    10)  speed50Quantile
      0.16 (    23)  accelerationMin
      0.16 (    13)  maximumTravelDistance
      0.16 (     4)  mediumSpeedPointRatio
      0.15 (    22)  accelerationFrequencyBandEnergy9To10Hz
      0.15 (    32)  accelerationMax
      0.15 (     7)  speed75Quantile
      0.14 (     7)  speedVariance
      0.14 (    21)  accelerationFrequencyBandEnergy25To27Hz
      0.14 (    35)  accelerationMean
      0.14 (    22)  accelerationFrequencyBandEnergy8To9Hz
      0.14 (    52)  accelerationFrequencyBandEnergy10To14Hz
      0.14 (    37)  accelerationVariance
      0.11 (    13)  accelerationFrequencyBandEnergy20To22Hz
      0.09 (    28)  accelerationFrequencyBandEnergy22To25Hz
      0.09 (     9)  acceleration25Quantile
      0.07 (    16)  acceleration75Quantile
      0.06 (    17)  acceleration50Quantile
      0.06 (    12)  acceleration95Quantile
      0    (     0)  stoppages5To15s
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages0To5s
      0    (     0)  stoppages30To90s

=== Classifier model (training fold 2) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationVariance < 1.31
|   accelerationFrequencyBandEnergy27To28Hz < 0.24
|   |   accelerationFrequencyBandEnergy1To3Hz < 0.15
|   |   |   acceleration50Quantile < 0.31
|   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   speedMean < 0.04
|   |   |   |   |   |   headingVariance < 0.01 : stationary (26.41/9.04)
|   |   |   |   |   |   headingVariance >= 0.01
|   |   |   |   |   |   |   accelerationMedian < 0.03 : stationary (48.13/0)
|   |   |   |   |   |   |   accelerationMedian >= 0.03
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.02 : stationary (345.16/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.02
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.03 : stationary (41.16/0)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.03
|   |   |   |   |   |   |   |   |   |   accelerationMax < 0.22 : stationary (29.38/0.83)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 0.22 : stationary (36.51/0)
|   |   |   |   |   speedMean >= 0.04
|   |   |   |   |   |   trajectorySimilarityBus < 27.61 : car (4.4/1.4)
|   |   |   |   |   |   trajectorySimilarityBus >= 27.61
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.16 : stationary (26.35/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.16 : stationary (22.08/0.08)
|   |   |   |   speed25Quantile >= 0.01 : stationary (26.41/13.04)
|   |   |   acceleration50Quantile >= 0.31 : bus (5/0)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 0.15
|   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   speed95Quantile < 17.25
|   |   |   |   |   accelerationMean < 0.89
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.54
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.24
|   |   |   |   |   |   |   |   accelerationMax < 0.78
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 528.03 : tram (22.43/6.43)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 528.03 : train (23.83/1.27)
|   |   |   |   |   |   |   |   accelerationMax >= 0.78
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.73
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.59 : bus (29.66/15.37)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.59 : train (35.8/15.53)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.73
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.15
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : train (11.74/1.74)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04 : train (65/0)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.15
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.11 : train (35.58/4.47)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.11 : train (37/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.24
|   |   |   |   |   |   |   |   speedMedian < 2.62
|   |   |   |   |   |   |   |   |   accelerationMax < 1.13 : train (9/1)
|   |   |   |   |   |   |   |   |   accelerationMax >= 1.13
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (30.92/14)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 11.52 : bus (34.55/13.44)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 11.52 : car (20.32/1.19)
|   |   |   |   |   |   |   |   speedMedian >= 2.62
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 283.79
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.39
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.29 : train (13.34/6)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (2.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.98 : tram (105/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.98 : train (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.4 : car (0.57/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.39 : tram (32.57/0.57)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 283.79 : train (38.99/9.29)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.54
|   |   |   |   |   |   |   speed25Quantile < 1.69
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.34 : bus (39.08/13.78)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.34
|   |   |   |   |   |   |   |   |   accelerationMax < 1.58 : train (7.51/2)
|   |   |   |   |   |   |   |   |   accelerationMax >= 1.58
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.6
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.94
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.71 : bus (32.36/7.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.58 : bus (12.63/0.63)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.58 : bus (32.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.46 : bus (11.26/3.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.18 : bus (31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.29 : bus (28.26/4)
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.89 : train (4.29/0.11)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.94 : train (4/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.6 : tram (2.92/0.97)
|   |   |   |   |   |   |   speed25Quantile >= 1.69
|   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.99
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.5 : bus (19.89/6.61)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.5
|   |   |   |   |   |   |   |   |   |   speedVariance < 10.39
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.04 : tram (22.92/4.25)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.04 : bus (23.15/3.15)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 10.39 : bus (15/0.91)
|   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   |   |   accelerationMean < 0.3 : tram (12.1/1.1)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.3 : train (37.64/11.27)
|   |   |   |   |   accelerationMean >= 0.89
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 5.47 : car (35.59/3.59)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 5.47
|   |   |   |   |   |   |   speed50Quantile < 7.29
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.42 : bike (44.95/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.42 : car (4.76/-0)
|   |   |   |   |   |   |   speed50Quantile >= 7.29 : car (5.65/0.11)
|   |   |   |   speed95Quantile >= 17.25
|   |   |   |   |   accelerationVariance < 0.24
|   |   |   |   |   |   headingVariance < 1.82
|   |   |   |   |   |   |   accelerationMean < 0.04 : stationary (2.17/0)
|   |   |   |   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   |   |   |   accelerationMax < 3.76
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.3
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.63
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.77
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.25 : train (72.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.25 : train (34.52/1.08)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.77
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.19 : train (38.27/0.72)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.21 : train (2.36/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.21 : train (103.35/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.63 : train (20.81/1.81)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.3 : bus (0.72/0.36)
|   |   |   |   |   |   |   |   accelerationMax >= 3.76 : bus (2.35/1.45)
|   |   |   |   |   |   headingVariance >= 1.82
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.92
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.08 : bus (0.31/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.08
|   |   |   |   |   |   |   |   |   accelerationMax < 3.27
|   |   |   |   |   |   |   |   |   |   accelerationMax < 3.16
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.47
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.23 : train (32.56/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.23 : train (32.17/0.31)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.47 : tram (0.1/-0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.16 : train (10.58/0.58)
|   |   |   |   |   |   |   |   |   accelerationMax >= 3.27 : train (2.05/0.68)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.92 : tram (2.21/1)
|   |   |   |   |   accelerationVariance >= 0.24
|   |   |   |   |   |   acceleration50Quantile < 0.3 : train (5.17/0.23)
|   |   |   |   |   |   acceleration50Quantile >= 0.3
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.53 : train (2.8/1.4)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.53
|   |   |   |   |   |   |   |   accelerationMedian < 1.06 : car (5.7/0.7)
|   |   |   |   |   |   |   |   accelerationMedian >= 1.06 : car (59.33/0)
|   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   speed75Quantile < 0.2
|   |   |   |   |   headingVariance < 4.04
|   |   |   |   |   |   accelerationMedian < 0.1
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.12
|   |   |   |   |   |   |   |   travelDistance < 2.42 : train (23.52/10.03)
|   |   |   |   |   |   |   |   travelDistance >= 2.42
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.07 : train (1.07/0.07)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.07 : train (48.64/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.12 : stationary (13.63/0.43)
|   |   |   |   |   |   accelerationMedian >= 0.1
|   |   |   |   |   |   |   trajectorySimilarityBus < 8.11 : bus (32.95/7.39)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 8.11
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.48
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.78
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.47 : train (54.07/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.47 : train (17.01/1.16)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.56 : tram (0.62/0.39)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.78 : car (2.08/1.31)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.48 : bus (6.77/0.62)
|   |   |   |   |   headingVariance >= 4.04
|   |   |   |   |   |   trajectorySimilarityTrain < 748.03 : bus (39.85/18.46)
|   |   |   |   |   |   trajectorySimilarityTrain >= 748.03
|   |   |   |   |   |   |   trajectorySimilarityBus < 3.92 : bus (9.11/1.02)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 3.92
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.07
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.06
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.9
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.29 : stationary (20.22/0.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.29 : stationary (30.48/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.9 : bike (0.04/-0)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06 : stationary (3.39/0.39)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.07 : stationary (26.69/15.48)
|   |   |   |   speed75Quantile >= 0.2
|   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   speedMin < 0.15
|   |   |   |   |   |   |   accelerationMedian < 0.21 : stationary (26.23/11.4)
|   |   |   |   |   |   |   accelerationMedian >= 0.21
|   |   |   |   |   |   |   |   accelerationMean < 0.49
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.28 : bus (0.49/0.27)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.28
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.26
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.43 : stationary (51.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.43 : stationary (5.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.38 : stationary (5.38/0.38)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.26 : train (0.88/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.49 : train (0.71/0.27)
|   |   |   |   |   |   speedMin >= 0.15 : train (4.33/0.08)
|   |   |   |   |   accelerationMin >= 0.04 : car (11.76/2.19)
|   accelerationFrequencyBandEnergy27To28Hz >= 0.24
|   |   speedMax < 12.71
|   |   |   speed95Quantile < 1.96
|   |   |   |   trajectorySimilarityBus < 27.91
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.9 : bus (20/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.9 : bike (25.94/12.85)
|   |   |   |   trajectorySimilarityBus >= 27.91 : train (34.46/18.27)
|   |   |   speed95Quantile >= 1.96
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.91
|   |   |   |   |   speedMean < 9.06
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62
|   |   |   |   |   |   |   trajectorySimilarityTrain < 403.01
|   |   |   |   |   |   |   |   accelerationVariance < 0.15
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.19
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.04 : bus (52.18/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.04 : train (0.71/0.09)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.19 : car (0.09/-0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.15 : car (13.79/5.18)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 403.01
|   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.53 : bus (27.47/16.47)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.53
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 258.95 : tram (4.16/0.13)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 258.95 : car (36.4/1.84)
|   |   |   |   |   |   |   |   accelerationMin >= 0.03
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.39 : bus (38.85/6.48)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.39 : car (11.25/0.11)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.45 : bus (22.71/11.22)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.45
|   |   |   |   |   |   |   |   accelerationMin < 0.15
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 197.08
|   |   |   |   |   |   |   |   |   |   speedVariance < 16.48
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 4.1 : bus (16.46/3.21)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 4.1
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.57 : bus (65.97/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11 : bus (11.19/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : bus (42.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.36 : bus (17.39/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.98 : bus (38.36/1.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.98 : bus (6.75/1.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.2 : car (0.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.96 : bus (114.92/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.9 : bus (14/2)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 16.48
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.34 : bus (37.59/1.38)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.34 : car (9.74/3.74)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 197.08 : car (15.43/7.35)
|   |   |   |   |   |   |   |   accelerationMin >= 0.15 : train (1.73/-0)
|   |   |   |   |   speedMean >= 9.06
|   |   |   |   |   |   accelerationMean < 0.81 : tram (11.96/3.88)
|   |   |   |   |   |   accelerationMean >= 0.81 : car (32.4/2.34)
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.91
|   |   |   |   |   speedMedian < 8.72
|   |   |   |   |   |   speedMean < 6.63
|   |   |   |   |   |   |   maximumTravelDistance < 13.12
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.6
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.93
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.94
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : car (6/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.78
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81 : bus (28/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 4.29 : car (3.16/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 4.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.36 : car (3/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.36 : bus (39.18/3.72)
|   |   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.78 : car (4.13/0.03)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.94 : car (39.26/10.91)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.93
|   |   |   |   |   |   |   |   |   |   headingVariance < 8.54
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.45 : bus (19.04/3.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.45 : bus (32.47/0)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 8.54 : train (3.36/1.34)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.6 : car (16.39/0)
|   |   |   |   |   |   |   maximumTravelDistance >= 13.12 : car (22.38/1.48)
|   |   |   |   |   |   speedMean >= 6.63
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.1
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 338.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.76 : car (33.08/3.12)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.76 : car (16.36/7.28)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 338.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.67 : car (39.26/0.1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.67 : car (1.76/0.23)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.1 : bus (18.27/3.02)
|   |   |   |   |   speedMedian >= 8.72
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.54 : car (6.44/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.54
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.53 : train (8.26/3.26)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.53
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.11 : bike (0.48/0.17)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.11
|   |   |   |   |   |   |   |   |   accelerationMean < 0.69 : car (0.17/0.04)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.69
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 3.04
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.11
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.98 : car (0.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.98
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.24 : bus (8.35/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.24 : bus (38.09/0.92)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.11 : bus (2.92/0.7)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 3.04 : car (0.17/0.04)
|   |   speedMax >= 12.71
|   |   |   accumulatedTravelDistance < 1046.57
|   |   |   |   trajectorySimilarityBus < 171.1
|   |   |   |   |   trajectorySimilarityTram < 987.1
|   |   |   |   |   |   highSpeedPointRatio < 0.29 : tram (1.04/0.04)
|   |   |   |   |   |   highSpeedPointRatio >= 0.29
|   |   |   |   |   |   |   acceleration75Quantile < 0.12 : bike (0.11/0.04)
|   |   |   |   |   |   |   acceleration75Quantile >= 0.12
|   |   |   |   |   |   |   |   accelerationVariance < 0.43
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.71 : train (0.38/0.16)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.71
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.03 : car (12.89/0.35)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.03 : car (57.73/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.43 : bus (0.93/0.42)
|   |   |   |   |   trajectorySimilarityTram >= 987.1
|   |   |   |   |   |   trajectorySimilarityTrain < 966.34
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.6
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.47 : train (33.96/13)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.47 : bus (12.85/3.74)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.6
|   |   |   |   |   |   |   |   accelerationMean < 1.1
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.57
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 18.8
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.34 : bus (26.55/4.94)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.34
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.19 : bus (5.16/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 141.39 : bus (8.27/2.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 141.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 7.28
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.32 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.49 : car (49.46/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.49 : car (14.56/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.28 : bus (1.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.96 : bus (4/0)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 18.8
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (3.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 26.62
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.46 : car (0.92/0.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.73 : bus (21.85/0.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.73 : bus (34.37/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 26.62 : train (3.12/1.12)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.57
|   |   |   |   |   |   |   |   |   |   speedMax < 18.02
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.17
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.77 : bus (37.09/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.77 : bus (11.28/1.71)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.17 : car (15.77/5.47)
|   |   |   |   |   |   |   |   |   |   speedMax >= 18.02
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.97
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.85 : car (0.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 10.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.33 : bus (57.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.33 : bus (12.56/0.56)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 10.04 : car (0.23/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.41 : bus (1.35/0.39)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.97 : car (0.84/0.39)
|   |   |   |   |   |   |   |   accelerationMean >= 1.1
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.59
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.98 : car (5.32/0.32)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.98
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.58 : car (4.21/0.11)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.58 : car (39.64/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.59 : bus (12.49/2.42)
|   |   |   |   |   |   trajectorySimilarityTrain >= 966.34
|   |   |   |   |   |   |   speedMedian < 19.71
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.7
|   |   |   |   |   |   |   |   |   speedMean < 4.61 : car (8.41/0.39)
|   |   |   |   |   |   |   |   |   speedMean >= 4.61
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 40.16 : car (10.51/3.49)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 40.16 : bus (33.64/7.29)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.7
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.05
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.38
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.73 : car (16.37/2.27)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.73
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.39 : car (30.37/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.39 : car (184.1/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.38 : car (20.19/6.46)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.05
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.21
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.83 : bus (29.46/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.83 : bus (15.74/7.73)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.21 : car (11.47/3.73)
|   |   |   |   |   |   |   speedMedian >= 19.71
|   |   |   |   |   |   |   |   headingVariance < 1.44 : bus (39.68/4.15)
|   |   |   |   |   |   |   |   headingVariance >= 1.44 : car (22.97/0.51)
|   |   |   |   trajectorySimilarityBus >= 171.1
|   |   |   |   |   accelerationMedian < 0.45 : tram (23.55/12.02)
|   |   |   |   |   accelerationMedian >= 0.45
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.01
|   |   |   |   |   |   |   accelerationMax < 4.62
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.12
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : tram (0.53/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.79 : car (158.76/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.79 : bus (0.53/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.12 : car (538.82/0)
|   |   |   |   |   |   |   accelerationMax >= 4.62
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.96 : car (24.34/4.76)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.96
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 206.44 : car (15.96/6.47)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 206.44
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.81 : car (25.98/4.49)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.81
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.7 : car (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : bus (0.25/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.47 : car (217.49/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.47 : car (17.24/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 2.31 : bike (1/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.01 : bus (16.7/0)
|   |   |   accumulatedTravelDistance >= 1046.57
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.48
|   |   |   |   |   speed95Quantile < 33.47
|   |   |   |   |   |   accelerationMedian < 0.7 : train (11.19/3.17)
|   |   |   |   |   |   accelerationMedian >= 0.7 : car (32.27/2.04)
|   |   |   |   |   speed95Quantile >= 33.47
|   |   |   |   |   |   accelerationMax < 3.2 : train (29.14/1.07)
|   |   |   |   |   |   accelerationMax >= 3.2 : train (21.55/5.24)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.48
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.06 : car (26.75/2.88)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.06
|   |   |   |   |   |   accelerationMin < 0.01 : car (6.21/1.55)
|   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.01 : car (5.33/0.66)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.01
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.66
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 6.12
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.49 : train (0.44/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.49
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.13 : car (29.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.13 : car (709.07/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 6.12 : bus (0.44/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.66 : bus (1.11/0)
accelerationVariance >= 1.31
|   accelerationFrequencyBandEnergy25To30Hz < 0.23
|   |   headingVariance < 7
|   |   |   speedMean < 2.33 : bike (3.03/1)
|   |   |   speedMean >= 2.33
|   |   |   |   acceleration95Quantile < 3.96 : bike (468.67/0)
|   |   |   |   acceleration95Quantile >= 3.96
|   |   |   |   |   accelerationMedian < 4.72 : bike (150/0)
|   |   |   |   |   accelerationMedian >= 4.72
|   |   |   |   |   |   accelerationMin < 0.16 : walk (0.81/0)
|   |   |   |   |   |   accelerationMin >= 0.16 : bike (43/0)
|   |   headingVariance >= 7
|   |   |   maximumTravelDistance < 5.04 : walk (8.08/0.07)
|   |   |   maximumTravelDistance >= 5.04
|   |   |   |   acceleration75Quantile < 5.52 : bike (117.24/0)
|   |   |   |   acceleration75Quantile >= 5.52 : bike (27.18/0.18)
|   accelerationFrequencyBandEnergy25To30Hz >= 0.23
|   |   speed95Quantile < 3.15
|   |   |   speed95Quantile < 0.55 : walk (16.27/9.1)
|   |   |   speed95Quantile >= 0.55
|   |   |   |   accelerationMax < 9.79 : bus (6.8/1.7)
|   |   |   |   accelerationMax >= 9.79
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 2.4 : walk (27.8/8.95)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 2.4 : walk (1724.1/0)
|   |   speed95Quantile >= 3.15
|   |   |   accumulatedTravelDistance < 326.23
|   |   |   |   speedMax < 10.16
|   |   |   |   |   accelerationMax < 21.51 : bike (39.23/10.91)
|   |   |   |   |   accelerationMax >= 21.51
|   |   |   |   |   |   speed75Quantile < 1.49 : bus (1.03/0.03)
|   |   |   |   |   |   speed75Quantile >= 1.49
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 8.94
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.32 : bike (2.11/0.11)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.32
|   |   |   |   |   |   |   |   |   accelerationMean < 4.08 : bike (129.32/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 4.08 : bike (1.21/0.21)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 8.94
|   |   |   |   |   |   |   |   acceleration75Quantile < 8.57
|   |   |   |   |   |   |   |   |   accelerationMin < 0.24
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 11.9 : walk (0.21/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 11.9
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 41.23 : bike (2.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 41.23 : bike (41/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.24 : walk (2.45/0)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 8.57 : walk (2.66/0)
|   |   |   |   speedMax >= 10.16 : bus (5.42/0.41)
|   |   |   accumulatedTravelDistance >= 326.23
|   |   |   |   accelerationMedian < 2.75
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.58 : bus (2.07/1.03)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.58
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.02 : bus (52.2/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.02 : bus (8.2/0.2)
|   |   |   |   accelerationMedian >= 2.75 : walk (4.81/-0)

Size of the tree : 501


RandomTree
==========

speedMax < 3.09
|   accelerationVariance < 2.37
|   |   accelerationFrequencyBandEnergy14To20Hz < 0.23
|   |   |   headingVariance < 0.01
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.02 : train (36.87/0.7)
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.02 : stationary (36.18/6.25)
|   |   |   headingVariance >= 0.01
|   |   |   |   accelerationMean < 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.04 : stationary (287.81/0)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.04
|   |   |   |   |   |   trajectorySimilarityBus < 570.3
|   |   |   |   |   |   |   acceleration95Quantile < 0.1
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : stationary (69.46/0)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.1 : stationary (42.65/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.1 : stationary (6.44/0.48)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.1 : train (0.48/0.24)
|   |   |   |   |   |   trajectorySimilarityBus >= 570.3 : train (6.67/0.63)
|   |   |   |   accelerationMean >= 0.04 : stationary (35.06/9.06)
|   |   accelerationFrequencyBandEnergy14To20Hz >= 0.23
|   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.83
|   |   |   |   speed50Quantile < 0.09
|   |   |   |   |   acceleration75Quantile < 0.07
|   |   |   |   |   |   accelerationMedian < 0.06
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.08 : train (9/1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.08
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.29 : stationary (19/4)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.29 : stationary (43.45/0)
|   |   |   |   |   |   accelerationMedian >= 0.06 : train (23.12/10)
|   |   |   |   |   acceleration75Quantile >= 0.07
|   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.16
|   |   |   |   |   |   |   |   speedVariance < 0.36
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.45 : train (33.1/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.45 : train (25.88/3)
|   |   |   |   |   |   |   |   speedVariance >= 0.36 : stationary (1.03/0.03)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.4 : bus (32.45/10.45)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.4
|   |   |   |   |   |   |   |   |   speedMax < 0.61
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.69
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.3 : train (31.01/2.37)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.3 : train (12.27/2.56)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.69 : train (24.35/12.39)
|   |   |   |   |   |   |   |   |   speedMax >= 0.61 : train (20.7/14.94)
|   |   |   |   |   |   accelerationMin >= 0.04 : bus (34.01/7.89)
|   |   |   |   speed50Quantile >= 0.09
|   |   |   |   |   accelerationMedian < 0.21 : train (26.77/12.23)
|   |   |   |   |   accelerationMedian >= 0.21
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.47 : stationary (8.32/4.32)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.47
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.61 : train (0.72/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.61
|   |   |   |   |   |   |   |   accelerationMean < 0.52
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.21
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.61
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.38 : stationary (48.29/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.38 : stationary (14.22/0.14)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.61 : train (0.14/-0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.21 : bus (0.22/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.52 : bus (1.44/0.79)
|   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.83
|   |   |   |   accelerationMedian < 0.39 : stationary (36.14/17.14)
|   |   |   |   accelerationMedian >= 0.39
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.83 : train (33.86/20.77)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.83
|   |   |   |   |   |   accelerationMin < 0.06 : car (19.61/10.16)
|   |   |   |   |   |   accelerationMin >= 0.06 : car (31.04/2.07)
|   accelerationVariance >= 2.37
|   |   accelerationMean < 0.8 : stationary (7/0)
|   |   accelerationMean >= 0.8
|   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.11 : walk (10.77/4.89)
|   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.11
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 14.47 : walk (1643.4/0)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 14.47 : walk (30.36/0.3)
speedMax >= 3.09
|   speedMedian < 9.14
|   |   accelerationFrequencyBandEnergy14To20Hz < 0.03
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.01
|   |   |   |   acceleration75Quantile < 0.36 : bike (4/0.67)
|   |   |   |   acceleration75Quantile >= 0.36
|   |   |   |   |   accelerationMedian < 0.88 : train (0.67/0)
|   |   |   |   |   accelerationMedian >= 0.88
|   |   |   |   |   |   accelerationMax < 13.45
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 17.08 : bike (95.67/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 17.08 : bike (7/1)
|   |   |   |   |   |   accelerationMax >= 13.45 : bike (781/0)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.01 : bus (39.66/2.66)
|   |   accelerationFrequencyBandEnergy14To20Hz >= 0.03
|   |   |   accelerationFrequencyBandEnergy10To14Hz < 6.63
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.35
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.03
|   |   |   |   |   |   accelerationMedian < 0.04 : stationary (55.22/0)
|   |   |   |   |   |   accelerationMedian >= 0.04 : car (2/-0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.03
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   speed95Quantile < 10.79
|   |   |   |   |   |   |   |   accelerationMean < 0.11 : train (39.99/7.73)
|   |   |   |   |   |   |   |   accelerationMean >= 0.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.1
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.06 : car (8/2)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.06 : train (35.47/1.89)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.1
|   |   |   |   |   |   |   |   |   |   speedMax < 10.34
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 3.8
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.06 : train (16.36/6)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.39 : train (3.47/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.39 : bus (39.53/8.41)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 3.8 : train (10.27/0.35)
|   |   |   |   |   |   |   |   |   |   speedMax >= 10.34 : car (9.13/0.97)
|   |   |   |   |   |   |   speed95Quantile >= 10.79
|   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.19 : stationary (2.47/0.34)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (1.24/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.28 : train (13.76/1.11)
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.28
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.33 : train (90.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.33 : train (3.78/0.78)
|   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (4.04/1.69)
|   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.27
|   |   |   |   |   |   |   |   accelerationVariance < 0.03
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.21 : tram (28.58/12.58)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.21 : tram (20.31/0.31)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.03 : train (7.82/2.5)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.27 : car (7.95/1.63)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.35
|   |   |   |   |   trajectorySimilarityBus < 89.97
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.23
|   |   |   |   |   |   |   travelDistance < 227.75
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.19
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.16 : tram (4.4/0.4)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.16
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.64 : bus (32.59/13.08)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.64 : car (9.17/1.17)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.19
|   |   |   |   |   |   |   |   |   speed95Quantile < 12.07
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 976.69
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.22 : bus (23.96/2.68)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.22
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.27 : bus (10.38/1.96)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.6
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.97 : bus (68.68/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.97 : train (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.6 : tram (0.28/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.94 : train (1.26/-0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 976.69 : bus (25.9/12.32)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 12.07 : car (10.79/4.79)
|   |   |   |   |   |   |   travelDistance >= 227.75
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (37.94/2.79)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 540.91 : bus (27.1/2.56)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.23
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.85
|   |   |   |   |   |   |   |   headingVariance < 12.78
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.22
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.5
|   |   |   |   |   |   |   |   |   |   |   speedMax < 11.39
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.11 : car (6.33/2.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.27 : bus (33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.27 : bus (26.31/1.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.4 : bus (7.33/2.16)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.72 : car (20.66/5.66)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 11.39 : car (31.89/5.89)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.5
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.6
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.03 : car (5/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMean < 5.93
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.98
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.1 : car (2.27/1.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.96 : bus (50.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : bus (2.27/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.01 : bus (6.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.79 : bus (14.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.79 : bus (36.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1 : car (0.27/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.95 : bus (11.45/0.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.9 : car (0.27/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.98 : car (4.08/2.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 5.93 : bus (8.17/3.12)
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.6
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.6 : bus (8.36/2.24)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.6
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 521.04 : tram (1.02/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 521.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.08 : train (0.36/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.48 : bus (66.72/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.44 : tram (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.34 : bus (6.36/0.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.34 : bus (39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3 : bus (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.03 : bus (17.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.96 : train (1.08/0.48)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.22
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.23
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.57
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.48 : car (39.96/1)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.48 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.57 : bus (13/2)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.23
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.04 : car (13.78/0.3)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 0.92 : car (11.66/0.25)
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 15.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.65 : bus (50.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.65
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.4 : car (5.71/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.34 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 10.19 : bus (29.96/1.94)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 10.19 : bus (22.19/4.44)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 15.96 : car (2.12/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.88 : car (5.54/1.54)
|   |   |   |   |   |   |   |   headingVariance >= 12.78
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.19
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.24 : car (10.28/2.24)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.24
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.45 : car (36.62/13.41)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.45 : bus (35.82/6.34)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.19 : car (16.69/0.1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.85
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 3.4
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 2.66
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.91
|   |   |   |   |   |   |   |   |   |   |   speedMax < 5.07 : bus (4.14/2.05)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 5.07
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.34 : bus (12.11/1.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.5 : car (0.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.45 : bus (76.89/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.45 : bus (7.45/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.46 : bus (5.67/0.67)
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.28 : bus (10.34/1.14)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.91
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.5 : bus (38.85/1.53)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.5 : bus (20.34/6.07)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.15 : train (0.76/-0)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 2.66 : walk (2.04/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 3.4 : bike (3.76/1)
|   |   |   |   |   trajectorySimilarityBus >= 89.97
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.63
|   |   |   |   |   |   |   speed50Quantile < 0.67 : car (38.01/13.01)
|   |   |   |   |   |   |   speed50Quantile >= 0.67
|   |   |   |   |   |   |   |   accelerationMax < 2.38 : tram (36.3/13.18)
|   |   |   |   |   |   |   |   accelerationMax >= 2.38
|   |   |   |   |   |   |   |   |   speedMax < 9.53
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.24 : bus (32.5/0.59)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.24 : bus (17.88/5.88)
|   |   |   |   |   |   |   |   |   speedMax >= 9.53 : train (18.89/6.47)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.63
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 3.58
|   |   |   |   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.5
|   |   |   |   |   |   |   |   |   |   accelerationMax < 1.75 : train (1.08/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.75
|   |   |   |   |   |   |   |   |   |   |   speed25Quantile < 1.37 : car (25.65/0.24)
|   |   |   |   |   |   |   |   |   |   |   speed25Quantile >= 1.37 : car (23.6/2.22)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.5
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 179.29 : tram (1.07/0.07)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 179.29
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 131.69 : bus (35.21/11.5)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 131.69
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.47 : bus (3/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 48.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 2.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.14 : car (18.59/4.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.14 : car (36.07/1.53)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 2.62 : bus (2.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 48.03 : bus (1.07/0.05)
|   |   |   |   |   |   |   |   accelerationMin >= 0.07
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 1.21 : car (35.5/1.17)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1.21 : car (26.16/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 3.58 : bus (6.8/1.63)
|   |   |   accelerationFrequencyBandEnergy10To14Hz >= 6.63
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 3.04 : walk (16.98/7.67)
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 3.04
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 4.19
|   |   |   |   |   |   acceleration25Quantile < 7.5
|   |   |   |   |   |   |   accelerationMean < 4.61 : bike (110/0)
|   |   |   |   |   |   |   accelerationMean >= 4.61 : walk (1/0)
|   |   |   |   |   |   acceleration25Quantile >= 7.5 : walk (1.33/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 4.19
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 5.71 : walk (22.62/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 5.71
|   |   |   |   |   |   |   accelerationMax < 42.1 : bike (38.65/9.31)
|   |   |   |   |   |   |   accelerationMax >= 42.1 : bike (41/0)
|   speedMedian >= 9.14
|   |   accelerationFrequencyBandEnergy14To20Hz < 2.18
|   |   |   accelerationVariance < 0.01
|   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.12 : stationary (55.42/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.12 : stationary (16.37/1.12)
|   |   |   |   accelerationMedian >= 0.04 : train (3.35/-0)
|   |   |   accelerationVariance >= 0.01
|   |   |   |   trajectorySimilarityTram < 187.94
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.13
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.18 : stationary (1.2/0.08)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.18
|   |   |   |   |   |   |   speedMin < 16.71
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.52
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.53 : tram (6.46/2.46)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.53
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.34
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.17 : tram (36/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.22
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.15 : train (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.2 : train (0.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.29 : tram (29/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.29 : tram (11.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.62 : train (0.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.22 : tram (35.08/0.08)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.34 : tram (1.79/0.79)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.52 : train (0.87/0.08)
|   |   |   |   |   |   |   speedMin >= 16.71 : train (1.05/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.13 : train (13.82/7.89)
|   |   |   |   trajectorySimilarityTram >= 187.94
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.52
|   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.18
|   |   |   |   |   |   |   |   accelerationMax < 1.97
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.23 : train (146.5/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.23
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.07 : train (12.88/0.88)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.07
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.41 : train (48.46/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.41 : train (4.17/0.58)
|   |   |   |   |   |   |   |   accelerationMax >= 1.97
|   |   |   |   |   |   |   |   |   accelerationMean < 0.1 : stationary (4.09/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.68
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.28 : train (28.75/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.28 : train (12.58/0.58)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.68 : stationary (0.88/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.18
|   |   |   |   |   |   |   |   speed75Quantile < 17.17 : train (31.84/8.37)
|   |   |   |   |   |   |   |   speed75Quantile >= 17.17
|   |   |   |   |   |   |   |   |   accelerationMax < 2.87
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.59 : train (96.65/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.59 : train (20.46/0.46)
|   |   |   |   |   |   |   |   |   accelerationMax >= 2.87 : train (2.15/0.92)
|   |   |   |   |   |   accelerationVariance >= 0.11
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.32
|   |   |   |   |   |   |   |   accelerationMean < 1.09 : train (37.05/5.79)
|   |   |   |   |   |   |   |   accelerationMean >= 1.09 : bike (3.63/1.88)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.32 : bus (14.13/5.33)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.52 : car (35.84/18.25)
|   |   accelerationFrequencyBandEnergy14To20Hz >= 2.18
|   |   |   accelerationMedian < 0.78
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.76
|   |   |   |   |   trajectorySimilarityBus < 170.31
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.61 : bus (36.38/20.86)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.61
|   |   |   |   |   |   |   acceleration95Quantile < 0.17 : bus (4.26/1.26)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.17
|   |   |   |   |   |   |   |   accelerationMedian < 0.7 : bus (54.52/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.7 : car (0.26/0)
|   |   |   |   |   trajectorySimilarityBus >= 170.31
|   |   |   |   |   |   speed50Quantile < 17.54 : tram (16.96/10.69)
|   |   |   |   |   |   speed50Quantile >= 17.54 : train (25.44/0.89)
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.76
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.55
|   |   |   |   |   |   travelDistance < 1531.49
|   |   |   |   |   |   |   accelerationMax < 2.79
|   |   |   |   |   |   |   |   accelerationMax < 1.59 : train (5/0)
|   |   |   |   |   |   |   |   accelerationMax >= 1.59 : car (143.16/0)
|   |   |   |   |   |   |   accelerationMax >= 2.79
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.78 : car (23.36/4.26)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.78
|   |   |   |   |   |   |   |   |   |   accelerationMax < 5.51
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.13 : bus (54.17/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.13 : bus (1.17/0.17)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 5.51 : car (6.34/2)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.31 : train (4/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.31
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.82 : car (18.1/9)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.82
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.15 : bus (5/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.15
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.21
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin < 10.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.35 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 2.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.34 : tram (0.25/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.19 : car (4/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.33 : bus (0.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.33
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.44 : car (90.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.44 : car (11.37/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.44 : bus (3.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 2.34 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin >= 10.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.73 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.73 : car (112.65/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.24 : car (21.2/0.6)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.21 : bus (2/-0)
|   |   |   |   |   |   travelDistance >= 1531.49 : train (17.37/0.37)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.55
|   |   |   |   |   |   speedMax < 13.43 : bus (31.16/1.01)
|   |   |   |   |   |   speedMax >= 13.43
|   |   |   |   |   |   |   accelerationMean < 0.57 : tram (6.9/0.9)
|   |   |   |   |   |   |   accelerationMean >= 0.57
|   |   |   |   |   |   |   |   speedMedian < 12.61 : car (38.54/10.97)
|   |   |   |   |   |   |   |   speedMedian >= 12.61
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.04 : car (12.62/4.21)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.04
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.06
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 967.37
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.63 : bus (20.4/2.48)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.63
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.97 : bus (21.03/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.97 : bus (23/0)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 967.37 : car (2.15/0.12)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.06 : car (5.37/2.31)
|   |   |   accelerationMedian >= 0.78
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 3.22
|   |   |   |   |   accumulatedTravelDistance < 1046.57
|   |   |   |   |   |   acceleration95Quantile < 3.67
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.1
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.49
|   |   |   |   |   |   |   |   |   speed95Quantile < 11.54 : train (7.1/2.07)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 11.54
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 74.94 : bus (11.29/0.29)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 74.94
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.11 : car (5/2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.11 : car (68.9/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.35 : car (68.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.35 : car (8.22/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.56 : train (1.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.72 : car (111.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.72
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.21 : car (13.88/0.88)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.21 : car (35/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.89 : bus (0.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.17 : car (15.07/1.53)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.88 : car (419.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.88
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.13 : car (169.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.13 : car (5.66/0.44)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.49 : bus (9/2)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.1
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 168.01
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.5
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.41 : bus (45.29/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.41 : bus (3.72/0.72)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.5
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 899.97 : bus (25.15/1.54)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 899.97 : car (15.31/2.2)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 168.01
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 485.93 : bus (7.37/0.13)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 485.93
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : train (3.13/0.13)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (36.87/1.42)
|   |   |   |   |   |   acceleration95Quantile >= 3.67 : bus (5.87/2.87)
|   |   |   |   |   accumulatedTravelDistance >= 1046.57
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.81
|   |   |   |   |   |   |   accelerationMax < 7.08
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.15
|   |   |   |   |   |   |   |   |   accelerationMax < 5.71
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.6 : car (0.6/0.3)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.6 : car (104.72/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 5.71 : car (4.45/0.45)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.15 : car (608.63/0)
|   |   |   |   |   |   |   accelerationMax >= 7.08 : car (22.18/3.18)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.81 : car (7.99/4.99)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 3.22
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 3.32 : bus (28.86/9.86)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 3.32
|   |   |   |   |   |   accelerationMedian < 2.54 : bus (3.37/0.37)
|   |   |   |   |   |   accelerationMedian >= 2.54 : walk (44.26/0)

Size of the tree : 519


RandomTree
==========

accelerationVariance < 1.31
|   accelerationFrequencyBandEnergy27To28Hz < 0.27
|   |   accelerationFrequencyBandEnergy1To3Hz < 0.17
|   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.15
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.08
|   |   |   |   |   accumulatedTravelDistance < 4.55 : stationary (340.44/0)
|   |   |   |   |   accumulatedTravelDistance >= 4.55
|   |   |   |   |   |   headingVariance < 0.08 : stationary (13.13/4)
|   |   |   |   |   |   headingVariance >= 0.08
|   |   |   |   |   |   |   stationaryPointRatio < 0.17 : train (1.45/0.45)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.17 : stationary (170.99/0)
|   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.08
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.12 : train (5/2)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.12
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.05 : train (1/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.05
|   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (64/0)
|   |   |   |   |   |   |   accelerationMedian >= 0.04 : car (1/0)
|   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.15 : stationary (26/10)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 0.17
|   |   |   trajectorySimilarityBus < 51.98
|   |   |   |   speed75Quantile < 1.26
|   |   |   |   |   travelDistance < 78.28
|   |   |   |   |   |   trajectorySimilarityTrain < 461.22
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.84
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.09 : bus (28.07/10.07)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.09
|   |   |   |   |   |   |   |   |   headingVariance < 9.87 : train (36.81/2.88)
|   |   |   |   |   |   |   |   |   headingVariance >= 9.87 : bike (15.16/9.16)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.84 : bus (33.3/8.56)
|   |   |   |   |   |   trajectorySimilarityTrain >= 461.22
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.2
|   |   |   |   |   |   |   |   accelerationMedian < 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.03 : train (28/5)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.03 : stationary (37.52/1.74)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.07
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.48
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.16 : train (4.41/0.11)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.16
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.19 : bus (29.9/4.9)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.19 : bus (26/0)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.48 : stationary (3.41/0.41)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.2
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.22
|   |   |   |   |   |   |   |   |   speed75Quantile < 0.12 : stationary (23.92/7.45)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 0.12
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.02 : train (1.59/0.62)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.02
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.12
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.27 : stationary (20.33/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.27 : stationary (25.27/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.26 : stationary (18.8/0.62)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.41 : stationary (5.88/0.88)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.12 : train (0.97/0.35)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.22 : train (9.47/2.18)
|   |   |   |   |   travelDistance >= 78.28
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.12 : train (31.75/0.87)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.12 : car (14.19/1.19)
|   |   |   |   speed75Quantile >= 1.26
|   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (28.46/2.39)
|   |   |   |   |   trajectorySimilarityTram >= 540.91
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.26
|   |   |   |   |   |   |   trajectorySimilarityBus < 42.26
|   |   |   |   |   |   |   |   accelerationMean < 0.27
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 18.7 : car (38.07/22.07)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 18.7 : train (11.42/0.48)
|   |   |   |   |   |   |   |   accelerationMean >= 0.27
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.5
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.64
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.17 : bus (5.64/1.64)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.17 : bus (36.38/1.43)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.64 : train (2.23/0.79)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.5 : train (3.95/0.95)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 42.26 : train (20.5/1.17)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.26
|   |   |   |   |   |   |   accelerationMean < 0.96
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.43 : car (14.11/8.11)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.43
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.07 : car (12.19/6.19)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.41
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.25
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.79
|   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 3.87 : bus (17.65/3.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 3.87
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.23 : bus (4.47/1.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1 : bus (7.09/1.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.64 : bus (32.47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.21 : bus (29.25/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.21 : bus (16/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.79 : bus (7.87/3.87)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.25 : car (3.16/1.16)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.41
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (0.96/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.46 : bus (39.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.17 : bus (14.54/1.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.5 : bus (1.77/0.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.5 : bus (52.19/0)
|   |   |   |   |   |   |   accelerationMean >= 0.96 : car (14.15/1.15)
|   |   |   trajectorySimilarityBus >= 51.98
|   |   |   |   accelerationMin < 0.08
|   |   |   |   |   speedMean < 2.96
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.43
|   |   |   |   |   |   |   headingVariance < 39.63
|   |   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (5.61/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   |   |   |   |   speed50Quantile < 0.25
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.03 : bus (1.08/0.29)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.03
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 70.82 : train (16.65/2.15)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 70.82
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.45 : train (102.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.45 : train (2.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.32 : train (1.69/0.76)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 0.25 : train (14.02/5.21)
|   |   |   |   |   |   |   headingVariance >= 39.63 : stationary (20.25/1.97)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.43
|   |   |   |   |   |   |   accelerationVariance < 0.08 : car (37.48/14.48)
|   |   |   |   |   |   |   accelerationVariance >= 0.08 : bus (18.24/10.37)
|   |   |   |   |   speedMean >= 2.96
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.34
|   |   |   |   |   |   |   trajectorySimilarityTrain < 258.07
|   |   |   |   |   |   |   |   accelerationMean < 0.05 : stationary (1.93/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.05
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (140/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : train (39.57/2.08)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 258.07
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.25
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.92
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : stationary (8.17/3.97)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   speedMax < 11.21 : tram (8.55/0.55)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 11.21
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.04 : bus (2.15/0.92)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.93 : train (156.07/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.93 : train (1.23/0.61)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.08 : train (4/1)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.92 : bike (4/-0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.25
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.24
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.13 : train (9.29/1)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.13
|   |   |   |   |   |   |   |   |   |   |   speedVariance < 21.91
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 17.2
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.55 : train (3.36/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.09
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.16 : tram (44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.16
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.1 : tram (3.12/1.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.49 : tram (12.56/0.56)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.49 : tram (52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.03 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.09 : train (1.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 17.2 : train (3.21/0)
|   |   |   |   |   |   |   |   |   |   |   speedVariance >= 21.91 : train (14.96/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.24
|   |   |   |   |   |   |   |   |   |   speedVariance < 14.08
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.31
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.8 : car (0.3/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.24 : tram (41/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.24 : tram (4.3/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.36 : bus (0.91/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.31 : tram (12.51/1.51)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.27 : car (2.21/1.21)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 14.08 : car (4.3/1.25)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.34
|   |   |   |   |   |   |   trajectorySimilarityTrain < 161.58
|   |   |   |   |   |   |   |   speed25Quantile < 6.53 : train (29.6/7.08)
|   |   |   |   |   |   |   |   speed25Quantile >= 6.53
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.07 : bus (1.03/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.07
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.51
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.12
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.03 : train (86.6/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.03 : train (12.06/0.26)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.12 : train (34.86/2.83)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.51 : train (5.8/1.03)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 161.58
|   |   |   |   |   |   |   |   speed75Quantile < 17.36
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.86
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.55
|   |   |   |   |   |   |   |   |   |   |   speedMin < 3.85 : bus (38.16/2.28)
|   |   |   |   |   |   |   |   |   |   |   speedMin >= 3.85 : bus (8.72/3.52)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.55 : train (2.45/1.27)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.86 : train (8.77/0.32)
|   |   |   |   |   |   |   |   speed75Quantile >= 17.36 : train (29.6/9.08)
|   |   |   |   accelerationMin >= 0.08
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.82
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.15 : bike (32.6/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.15 : train (16.37/-0)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.82
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.66
|   |   |   |   |   |   |   trajectorySimilarityTram < 521.32 : tram (1.05/0.05)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 521.32
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.48 : car (75.54/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.48 : car (11.59/0.59)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.66 : tram (3.79/1.79)
|   accelerationFrequencyBandEnergy27To28Hz >= 0.27
|   |   trajectorySimilarityTrain < 963.94
|   |   |   trajectorySimilarityBus < 63.14
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   speedMax < 23.87
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.46
|   |   |   |   |   |   |   speed25Quantile < 3.44
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.66
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : car (2/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.57 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.57 : bus (6.81/0.64)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.66
|   |   |   |   |   |   |   |   |   speedMax < 7.96 : car (21.94/3.47)
|   |   |   |   |   |   |   |   |   speedMax >= 7.96 : bus (22.99/7.66)
|   |   |   |   |   |   |   speed25Quantile >= 3.44 : car (31.98/1.63)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.46
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.87
|   |   |   |   |   |   |   |   accelerationMean < 0.99
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.1
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 856.39 : car (2.02/0.01)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 856.39
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 931.73
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.77
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.96 : bus (212/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.96 : car (0.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.77
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.38 : bus (10.65/1.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.24 : bike (1.08/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.24 : bus (42.22/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 931.73 : car (1.01/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.1
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.67
|   |   |   |   |   |   |   |   |   |   |   speedMax < 8.89 : car (20.35/2.1)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 8.89 : bus (25.71/7.71)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.67
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.9 : bus (36.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.9
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 2.17 : car (6.29/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 2.17
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.71 : bus (38.45/12.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.68 : bus (40.82/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.68 : bus (7.82/0.82)
|   |   |   |   |   |   |   |   accelerationMean >= 0.99 : car (31/5)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.87
|   |   |   |   |   |   |   |   accelerationMean < 0.9
|   |   |   |   |   |   |   |   |   accelerationMean < 0.56 : bus (10.22/0.22)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.56
|   |   |   |   |   |   |   |   |   |   accelerationMax < 6.34 : bus (100/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.34
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.6 : bus (40.62/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.6 : bus (4.66/0.66)
|   |   |   |   |   |   |   |   accelerationMean >= 0.9
|   |   |   |   |   |   |   |   |   accelerationMax < 6.43 : bus (33.74/10.43)
|   |   |   |   |   |   |   |   |   accelerationMax >= 6.43
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.7 : train (1.97/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.7
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.91 : bus (9.87/0.87)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.91 : bus (39.19/0)
|   |   |   |   |   speedMax >= 23.87 : car (24.93/0.45)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.13 : bus (18.25/4.15)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.13 : car (30.57/12.66)
|   |   |   trajectorySimilarityBus >= 63.14
|   |   |   |   speedMin < 33.5
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.85
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.31 : car (27.4/5.4)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.31
|   |   |   |   |   |   |   maximumTravelDistance < 21.94
|   |   |   |   |   |   |   |   maximumTravelDistance < 15.96
|   |   |   |   |   |   |   |   |   travelDistance < 410.42
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.82
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 90.78 : car (1.03/0.03)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 90.78
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.99 : tram (1.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.99
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.03 : bus (33.91/1.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.03 : bus (39.18/0.72)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.82 : train (3.38/0.37)
|   |   |   |   |   |   |   |   |   travelDistance >= 410.42 : tram (12.59/0.53)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 15.96
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.35
|   |   |   |   |   |   |   |   |   |   speedMax < 13.71 : car (3.16/0.14)
|   |   |   |   |   |   |   |   |   |   speedMax >= 13.71 : bus (39.02/6.38)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.35 : car (7.12/0.12)
|   |   |   |   |   |   |   maximumTravelDistance >= 21.94 : train (32.52/13.02)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.85
|   |   |   |   |   |   speedMax < 37.54
|   |   |   |   |   |   |   trajectorySimilarityTram < 171.99 : tram (9.33/1.33)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 171.99
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.42 : bus (26.18/7.18)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.42
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.87
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.91 : car (8.18/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.91 : car (112.18/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.87
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 217.76
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.73 : bus (31.96/7.64)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.73 : car (15.1/0.03)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 217.76
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 7.07 : bus (6.14/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 7.07
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 940.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.28 : car (12/1.5)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.81 : car (28.5/0.63)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.81 : car (141.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.24 : bus (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.47 : bus (0.75/0.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 940.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 24.05 : bus (8.18/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 24.05
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.85 : bus (0.47/0.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.85
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : bike (0.15/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.25 : car (6.17/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.25 : car (36.17/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.03
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.51 : bus (18.39/0)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.51
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.92 : bus (22.78/0.59)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.92
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 3.66
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 461.65 : car (33.75/1.28)
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 461.65
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 24.66 : bus (16.87/7.32)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 24.66 : car (27/1.02)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 3.66 : bus (2/0)
|   |   |   |   |   |   speedMax >= 37.54 : train (8.29/0.29)
|   |   |   |   speedMin >= 33.5 : train (29.08/0.95)
|   |   trajectorySimilarityTrain >= 963.94
|   |   |   speedMean < 12.95
|   |   |   |   speedMax < 11.02
|   |   |   |   |   accelerationMedian < 0.1 : stationary (15/0)
|   |   |   |   |   accelerationMedian >= 0.1
|   |   |   |   |   |   highSpeedPointRatio < 0.02 : car (32.4/12.68)
|   |   |   |   |   |   highSpeedPointRatio >= 0.02
|   |   |   |   |   |   |   headingVariance < 26.36
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.7 : bus (28.95/5.44)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.7 : bus (29.58/0.41)
|   |   |   |   |   |   |   headingVariance >= 26.36 : car (2.09/0.04)
|   |   |   |   speedMax >= 11.02
|   |   |   |   |   maximumTravelDistance < 16.5
|   |   |   |   |   |   trajectorySimilarityBus < 122.56
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.28
|   |   |   |   |   |   |   |   accelerationMedian < 0.67
|   |   |   |   |   |   |   |   |   speed50Quantile < 13.39
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.88
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 14.3
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.52 : car (34.73/2.36)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.52 : bus (11.39/4.15)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 14.3 : bus (17.42/2.3)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.88
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.75
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.49 : car (27.12/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.49 : car (28.17/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.75 : bus (1.17/-0)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 13.39 : bus (11.19/0.13)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.67 : bus (14/3.14)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.28 : bus (29.32/2.09)
|   |   |   |   |   |   trajectorySimilarityBus >= 122.56
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.81
|   |   |   |   |   |   |   |   accelerationMean < 0.55 : car (7.71/2.63)
|   |   |   |   |   |   |   |   accelerationMean >= 0.55
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.24
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.89 : car (64.5/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.89
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.1 : car (3.08/0.08)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.1
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.41 : car (59.71/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.41 : car (2.08/0.04)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.24 : car (0.21/0.08)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.81 : car (22.67/7.04)
|   |   |   |   |   maximumTravelDistance >= 16.5
|   |   |   |   |   |   speedMax < 12.8 : train (1.04/0.03)
|   |   |   |   |   |   speedMax >= 12.8
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63 : bus (6.42/2.34)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63
|   |   |   |   |   |   |   |   accelerationMax < 5.64
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.91
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.85
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.54 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.97 : car (29.76/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.97 : car (35.61/0)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.85 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.91
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.55 : car (35.42/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.55 : car (6.08/0.04)
|   |   |   |   |   |   |   |   accelerationMax >= 5.64 : car (32.98/1.79)
|   |   |   speedMean >= 12.95
|   |   |   |   trajectorySimilarityBus < 140.82
|   |   |   |   |   accumulatedTravelDistance < 1051.82
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.51
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.67
|   |   |   |   |   |   |   |   accelerationMax < 1.78 : bus (1.2/0.2)
|   |   |   |   |   |   |   |   accelerationMax >= 1.78
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.33
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.43 : bus (0.25/0.1)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.43
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.63
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.32 : tram (0.2/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.68 : bus (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.55 : car (35.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.55 : car (5.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.67 : car (43.49/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.88 : car (49.54/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.63 : bus (0.05/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.33 : car (2.43/1.38)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.67 : bus (24.22/8.53)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.51 : bus (27.44/3)
|   |   |   |   |   accumulatedTravelDistance >= 1051.82
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.56 : car (1.91/1.21)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.56
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.7
|   |   |   |   |   |   |   |   accelerationMax < 6.43
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.46 : car (75.42/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.46 : car (37.33/0.3)
|   |   |   |   |   |   |   |   accelerationMax >= 6.43 : car (1.39/0.3)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.7 : bus (0.27/-0)
|   |   |   |   trajectorySimilarityBus >= 140.82
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.38
|   |   |   |   |   |   accelerationMedian < 0.58 : car (18.63/12.89)
|   |   |   |   |   |   accelerationMedian >= 0.58
|   |   |   |   |   |   |   accelerationMin < 0.17
|   |   |   |   |   |   |   |   accelerationMax < 4.62
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.38
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.67 : car (18.64/0.64)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.67 : car (36.64/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.38 : car (848.66/0)
|   |   |   |   |   |   |   |   accelerationMax >= 4.62
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : bus (0.96/0.32)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.23
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.84 : car (10.6/1.6)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.84
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.52 : car (99.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.52 : car (3.32/0.32)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.82 : car (3.96/0.64)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.82
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 2.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.93 : car (9.64/0.64)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.93 : car (153.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 2.69 : bus (0.32/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.23 : bus (1.28/-0)
|   |   |   |   |   |   |   accelerationMin >= 0.17 : train (0.64/-0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.38 : car (17.7/5.11)
accelerationVariance >= 1.31
|   speedMax < 3.17
|   |   acceleration50Quantile < 1.83
|   |   |   accumulatedTravelDistance < 22.45 : bus (10.34/6.16)
|   |   |   accumulatedTravelDistance >= 22.45
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.11 : bike (2.18/0)
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.11
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 8.28 : walk (33.09/4.91)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 8.28
|   |   |   |   |   |   accelerationVariance < 17.8 : walk (94.55/0)
|   |   |   |   |   |   accelerationVariance >= 17.8 : bike (1.09/0.55)
|   |   acceleration50Quantile >= 1.83
|   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.29 : walk (6.77/3.18)
|   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.29
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 13.67 : walk (1512.28/0)
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 13.67 : walk (3.18/0.59)
|   speedMax >= 3.17
|   |   accelerationFrequencyBandEnergy25To30Hz < 0.86
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 7.52 : bus (3/0)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 7.52
|   |   |   |   acceleration25Quantile < 1.23
|   |   |   |   |   acceleration25Quantile < 1.23 : bike (128.82/0)
|   |   |   |   |   acceleration25Quantile >= 1.23 : walk (0.41/0)
|   |   |   |   acceleration25Quantile >= 1.23 : bike (722.65/0)
|   |   accelerationFrequencyBandEnergy25To30Hz >= 0.86
|   |   |   speedMean < 7.12
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.63
|   |   |   |   |   accelerationMedian < 2.58 : bike (27.7/11.69)
|   |   |   |   |   accelerationMedian >= 2.58 : walk (19.17/0)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.63
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 7.86
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 3.62
|   |   |   |   |   |   |   accelerationMean < 3.67 : bike (53.67/0)
|   |   |   |   |   |   |   accelerationMean >= 3.67 : walk (0.34/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 3.62 : walk (18.86/0)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 7.86
|   |   |   |   |   |   accelerationMin < 0.25
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 7.75 : bike (124.67/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 7.75 : walk (0.67/0)
|   |   |   |   |   |   accelerationMin >= 0.25 : walk (6.73/0)
|   |   |   speedMean >= 7.12
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 2.96
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 6.05
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 7.67
|   |   |   |   |   |   |   accelerationMin < 0.03 : bus (2.3/0.3)
|   |   |   |   |   |   |   accelerationMin >= 0.03
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 2.79 : bus (40.3/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 2.79 : bike (0.07/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 7.67 : bike (0.3/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 6.05 : walk (0.15/0)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 2.96 : walk (12.7/3.15)

Size of the tree : 527



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.3  (    12)  trajectorySimilarityTram
      0.27 (    18)  trajectorySimilarityBus
      0.25 (     9)  speed50Quantile
      0.24 (    23)  speedMax
      0.24 (    23)  accelerationVariance
      0.23 (     6)  travelDistance
      0.23 (     3)  highSpeedPointRatio
      0.23 (     6)  speedMedian
      0.23 (    16)  trajectorySimilarityTrain
      0.22 (    14)  maximumTravelDistance
      0.21 (    37)  accelerationMedian
      0.2  (    12)  speed95Quantile
      0.18 (    12)  headingVariance
      0.16 (    19)  accelerationFrequencyBandEnergy8To9Hz
      0.15 (     7)  speedVariance
      0.15 (    26)  accelerationFrequencyBandEnergy27To28Hz
      0.15 (    29)  accelerationFrequencyBandEnergy22To25Hz
      0.15 (     5)  stationaryPointRatio
      0.15 (    24)  accelerationMin
      0.15 (    24)  accelerationFrequencyBandEnergy14To20Hz
      0.14 (    40)  accelerationFrequencyBandEnergy10To14Hz
      0.14 (    35)  accelerationFrequencyBandEnergy9To10Hz
      0.14 (    10)  accumulatedTravelDistance
      0.13 (     9)  speed75Quantile
      0.13 (    25)  accelerationFrequencyBandEnergy20To22Hz
      0.13 (    29)  accelerationFrequencyBandEnergy1To3Hz
      0.13 (    44)  accelerationMean
      0.12 (     6)  speedMin
      0.12 (     9)  speedMean
      0.12 (     3)  lowSpeedPointRatio
      0.12 (     5)  speed25Quantile
      0.12 (    28)  accelerationFrequencyBandEnergy8To10Hz
      0.11 (    27)  accelerationFrequencyBandEnergy28To30Hz
      0.1  (    26)  accelerationFrequencyBandEnergy25To30Hz
      0.1  (     4)  mediumSpeedPointRatio
      0.09 (    31)  accelerationFrequencyBandEnergy25To27Hz
      0.09 (    21)  acceleration75Quantile
      0.08 (    40)  accelerationMax
      0.06 (    15)  acceleration50Quantile
      0.05 (    20)  acceleration95Quantile
      0.05 (    20)  acceleration25Quantile
      0    (     0)  stoppages0To5s
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages30To90s
      0    (     0)  stoppages5To15s

=== Classifier model (training fold 3) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationFrequencyBandEnergy1To3Hz < 7.12
|   accelerationVariance < 0.07
|   |   accelerationFrequencyBandEnergy8To9Hz < 0.05
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.07
|   |   |   |   speedMin < 0.06
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.08
|   |   |   |   |   |   speedMax < 0.01 : stationary (54.73/0)
|   |   |   |   |   |   speedMax >= 0.01 : stationary (32.19/7)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.08 : stationary (382.94/0)
|   |   |   |   speedMin >= 0.06 : train (6.14/2.14)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.07
|   |   |   |   speed50Quantile < 0.01
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.13
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.15
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.05 : stationary (41.51/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.05 : stationary (15.4/4.93)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.15 : train (20/3)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.13
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.04
|   |   |   |   |   |   |   speedMax < 2.27 : stationary (32.49/1)
|   |   |   |   |   |   |   speedMax >= 2.27 : car (8.12/3.12)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.04 : car (14.82/6.82)
|   |   |   |   speed50Quantile >= 0.01 : train (28.65/10.41)
|   |   accelerationFrequencyBandEnergy8To9Hz >= 0.05
|   |   |   speedMin < 0.01
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.38
|   |   |   |   |   travelDistance < 83.13
|   |   |   |   |   |   speed95Quantile < 1.83
|   |   |   |   |   |   |   accelerationMean < 0.1
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.03
|   |   |   |   |   |   |   |   |   accelerationMean < 0.04 : stationary (14.21/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.04 : train (32/3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.44 : stationary (31.41/3)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.44 : stationary (30.44/0)
|   |   |   |   |   |   |   accelerationMean >= 0.1
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 28.34
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.09 : bus (26.66/3.66)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.09 : train (34.31/17.85)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 28.34 : train (27.95/3.39)
|   |   |   |   |   |   speed95Quantile >= 1.83
|   |   |   |   |   |   |   trajectorySimilarityTrain < 932.93
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.06 : bike (8.04/4.04)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.39 : train (4.55/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.39 : bus (39.72/8.39)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 932.93 : car (22.26/11.26)
|   |   |   |   |   travelDistance >= 83.13
|   |   |   |   |   |   trajectorySimilarityBus < 36.17 : bus (31.66/15.46)
|   |   |   |   |   |   trajectorySimilarityBus >= 36.17
|   |   |   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.26
|   |   |   |   |   |   |   |   |   accelerationMax < 2.28
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (0.26/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.04 : train (177.95/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 2.28 : train (5.79/0.79)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.26 : train (23.69/1.58)
|   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.31 : train (26.05/0.53)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.31 : train (18.37/4.05)
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.38
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.73
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.39 : bus (50/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.39 : car (1/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.73
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.73
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.09
|   |   |   |   |   |   |   |   accelerationMedian < 0.61
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.4 : bus (28.81/10.81)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.4 : bus (46/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.61 : train (6/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.09 : car (3/-0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.73 : car (38/14)
|   |   |   speedMin >= 0.01
|   |   |   |   maximumTravelDistance < 19.36
|   |   |   |   |   trajectorySimilarityTram < 285.48
|   |   |   |   |   |   accelerationMean < 0.18 : tram (27.94/10.94)
|   |   |   |   |   |   accelerationMean >= 0.18
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.4
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.33
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.3
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.06 : bus (0.29/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.19 : tram (52/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.19 : train (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (0.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.1 : tram (7.29/0.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.2 : tram (30.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.2 : tram (56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.3 : train (0.44/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.33 : tram (5.32/1.32)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.4 : train (4.32/1)
|   |   |   |   |   trajectorySimilarityTram >= 285.48
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.66
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.36
|   |   |   |   |   |   |   |   speed25Quantile < 0.17 : stationary (6.71/0.63)
|   |   |   |   |   |   |   |   speed25Quantile >= 0.17
|   |   |   |   |   |   |   |   |   speed50Quantile < 3.29 : train (10.06/2.14)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 3.29
|   |   |   |   |   |   |   |   |   |   accelerationMax < 2.29
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.04 : train (7.23/0.23)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.04 : train (58.21/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.29 : stationary (0.68/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.36 : bus (12.32/3.94)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.66 : car (23/-0)
|   |   |   |   maximumTravelDistance >= 19.36
|   |   |   |   |   accelerationMean < 0.63
|   |   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   |   acceleration95Quantile < 0.04 : stationary (2.31/0.71)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.04
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.08 : train (19.85/0.18)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.08 : train (143.69/0)
|   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   acceleration50Quantile < 0.14 : train (2.89/0.71)
|   |   |   |   |   |   |   acceleration50Quantile >= 0.14
|   |   |   |   |   |   |   |   accelerationMedian < 0.29 : train (12.36/0.36)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.29 : train (34.07/0)
|   |   |   |   |   accelerationMean >= 0.63 : train (8/3)
|   accelerationVariance >= 0.07
|   |   speed75Quantile < 11.39
|   |   |   speedMax < 2.12
|   |   |   |   accelerationMax < 12.16
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.72
|   |   |   |   |   |   stationaryPointRatio < 0.91
|   |   |   |   |   |   |   accelerationMedian < 0.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.11 : stationary (7.09/2.09)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.99
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.67
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.57
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.1 : stationary (26.16/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.1 : stationary (24.21/0.21)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.57 : stationary (5.19/0.14)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.67 : train (0.02/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.99 : train (0.38/0.09)
|   |   |   |   |   |   |   accelerationMedian >= 0.42 : train (1.41/0.59)
|   |   |   |   |   |   stationaryPointRatio >= 0.91 : train (33.28/15.68)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.72 : car (17.75/7.25)
|   |   |   |   accelerationMax >= 12.16
|   |   |   |   |   accelerationMean < 0.71 : stationary (25.14/6.14)
|   |   |   |   |   accelerationMean >= 0.71 : walk (24.32/1.32)
|   |   |   speedMax >= 2.12
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.45
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.32
|   |   |   |   |   |   trajectorySimilarityTrain < 957.99
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.42 : bike (29.87/17.87)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.42
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.24 : train (3.33/1.24)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.24
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.33
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.35
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.17 : bus (39.37/2.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.17 : bus (23.58/1.78)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.35 : bus (1.59/0.59)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.33 : car (2/0)
|   |   |   |   |   |   trajectorySimilarityTrain >= 957.99
|   |   |   |   |   |   |   speedMax < 12.62 : car (36.17/13.72)
|   |   |   |   |   |   |   speedMax >= 12.62 : train (13.15/0.66)
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.32
|   |   |   |   |   |   speedMax < 14
|   |   |   |   |   |   |   accelerationMax < 6.38
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 786.37 : tram (23.59/7.48)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 786.37
|   |   |   |   |   |   |   |   |   travelDistance < 368.95
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.92 : car (23/4)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.92
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.54
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.48 : bus (37.6/9)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.48 : car (8.6/2.6)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.65 : bus (21/9)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.65 : bus (23.8/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.15 : train (1.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.28 : bus (20.6/0.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.28 : bus (106/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.97 : bus (31.4/1.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.09 : bus (12.2/4.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.09 : bus (39.4/0.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 1.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.65 : bus (15.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.65 : bus (67/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1.11 : bus (10.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.9 : bus (38.53/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.9 : bus (25.49/10.49)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : car (16.06/5.49)
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : bus (28.91/6.54)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26 : car (20.3/10.09)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.92 : car (10.33/0.09)
|   |   |   |   |   |   |   |   |   travelDistance >= 368.95 : car (15.38/1.27)
|   |   |   |   |   |   |   accelerationMax >= 6.38
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.77
|   |   |   |   |   |   |   |   |   speedMax < 12.16
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.37 : bus (25.69/5.61)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.37 : bus (39.81/1.81)
|   |   |   |   |   |   |   |   |   speedMax >= 12.16 : tram (5.28/0.28)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.77
|   |   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.14 : bus (36.74/1.87)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.14 : train (6/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : train (19.51/3)
|   |   |   |   |   |   speedMax >= 14
|   |   |   |   |   |   |   lowSpeedPointRatio < 0.34 : bus (13.48/5.36)
|   |   |   |   |   |   |   lowSpeedPointRatio >= 0.34 : car (38.36/3.05)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.45
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 2.74
|   |   |   |   |   |   travelDistance < 63.58 : car (21.2/11.49)
|   |   |   |   |   |   travelDistance >= 63.58
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.53
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.16
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.35 : bus (25.49/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.35
|   |   |   |   |   |   |   |   |   |   headingVariance < 1.63
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.55 : car (24.6/1.13)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.55 : car (20.15/9.67)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 1.63
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 223.61
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.56 : car (33.3/7.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.56 : bus (38.12/10.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin >= 3.18 : car (10.66/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.57 : bus (28.81/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.57 : bus (24.44/5.83)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 223.61 : car (18.11/0.33)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.16
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 127.96
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.48 : bus (18.4/0.56)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.48 : bus (88.65/0)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 127.96 : car (6.3/1.26)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.53
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.52 : car (36.97/1.3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.52
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 11.91
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.27
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 146.25
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 2.99 : bus (39.8/1.8)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 2.99 : car (0.45/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 146.25 : car (10.59/1.08)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.27 : car (8/0)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 11.91 : car (33.62/0.22)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 2.74 : bike (19.93/7)
|   |   speed75Quantile >= 11.39
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 1
|   |   |   |   acceleration25Quantile < 0.73
|   |   |   |   |   maximumTravelDistance < 17.9
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.4 : train (15.76/5.98)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.4
|   |   |   |   |   |   |   speed95Quantile < 13.67 : car (8.32/4.32)
|   |   |   |   |   |   |   speed95Quantile >= 13.67 : bus (39.24/10.61)
|   |   |   |   |   maximumTravelDistance >= 17.9
|   |   |   |   |   |   accelerationMean < 0.85
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.54
|   |   |   |   |   |   |   |   accelerationMax < 2.8
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (11.18/3.18)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.54
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.16 : train (19.36/0.45)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.16 : train (35.27/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.54 : train (5.36/2.36)
|   |   |   |   |   |   |   |   accelerationMax >= 2.8
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.66
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.24
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.08 : train (23.36/0.45)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.08 : train (18/5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.24 : bus (13.46/6.64)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.66 : tram (0.91/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.54 : bus (5/2)
|   |   |   |   |   |   accelerationMean >= 0.85 : car (12.82/1.36)
|   |   |   |   acceleration25Quantile >= 0.73
|   |   |   |   |   speed25Quantile < 0.02 : bus (4.41/1.39)
|   |   |   |   |   speed25Quantile >= 0.02
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.24 : train (32.44/12.27)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.24
|   |   |   |   |   |   |   accelerationMedian < 0.69 : train (3/1)
|   |   |   |   |   |   |   accelerationMedian >= 0.69
|   |   |   |   |   |   |   |   accelerationMin < 0.17
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.9 : car (20.63/0.63)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.9 : car (62/0)
|   |   |   |   |   |   |   |   accelerationMin >= 0.17 : car (24.24/6.34)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1
|   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   acceleration25Quantile < 0.53
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.5
|   |   |   |   |   |   |   acceleration95Quantile < 0.38
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.33 : bus (21.41/7.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.33 : car (29.63/2.41)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.38
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.7 : car (39.22/6.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.7 : car (78.41/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.5
|   |   |   |   |   |   |   trajectorySimilarityBus < 200.27
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 109.25 : car (2.06/0.05)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 109.25
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.12
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.26 : bus (2.52/0.52)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.26
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.46 : bus (40.05/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.46 : bus (16.79/1.26)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.12
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.39 : car (21.05/10.52)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.39
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 6.64
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.36 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.36 : bus (15.52/0.52)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.64 : bus (11.52/4)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 200.27
|   |   |   |   |   |   |   |   accelerationMax < 7.19
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.73 : walk (0.28/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.73 : car (66.71/0)
|   |   |   |   |   |   |   |   accelerationMax >= 7.19 : train (10.41/4.41)
|   |   |   |   |   acceleration25Quantile >= 0.53
|   |   |   |   |   |   accelerationVariance < 0.28
|   |   |   |   |   |   |   trajectorySimilarityBus < 170.62
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.65
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 855.35
|   |   |   |   |   |   |   |   |   |   speedVariance < 31.44
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.83 : bus (20.64/1.42)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 17.99 : car (36.95/11.12)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 17.99 : bus (15.4/2.34)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 31.44 : car (12.34/0.08)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 855.35
|   |   |   |   |   |   |   |   |   |   speedMean < 15.21
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.77
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.75
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.47 : tram (0.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.47 : car (65.71/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.75 : car (37.47/8.07)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.77 : bus (24.16/10.48)
|   |   |   |   |   |   |   |   |   |   speedMean >= 15.21
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.36 : bus (0.16/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.06 : tram (0.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.06
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.69 : car (27.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.69 : car (38.41/0.19)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.65
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.24 : car (13/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.24 : bus (31/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 170.62
|   |   |   |   |   |   |   |   accelerationMean < 0.84
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 267.51 : bus (14.08/6.87)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 267.51
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.08 : tram (0.74/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.08
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.57 : car (121.7/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.57 : car (22.71/3.23)
|   |   |   |   |   |   |   |   accelerationMean >= 0.84
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.22
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.94
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.85 : car (119/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.85 : car (29.82/0.54)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.94 : car (142.9/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.22 : car (198.27/0)
|   |   |   |   |   |   accelerationVariance >= 0.28
|   |   |   |   |   |   |   accelerationMedian < 0.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.39 : train (2.41/0.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.39
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.28 : bus (15.04/7.81)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.28
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.9 : bus (8.81/0.81)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.9 : bus (35.44/0)
|   |   |   |   |   |   |   accelerationMedian >= 0.76
|   |   |   |   |   |   |   |   speed50Quantile < 19.64
|   |   |   |   |   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.97
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.34 : bus (22.65/7.33)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.34
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.4 : car (20.98/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 2.06 : bus (17.83/7.56)
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 2.06 : car (24.13/1.38)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.97 : bus (8/-0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.06
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.53
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 8.21 : bus (3.22/1.2)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 8.21
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.63 : car (30.84/2.84)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.63 : car (55.15/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.53 : bus (7.31/0.98)
|   |   |   |   |   |   |   |   speed50Quantile >= 19.64
|   |   |   |   |   |   |   |   |   speed25Quantile < 19.76 : bus (12.75/5.59)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 19.76 : bus (33.99/1.58)
|   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   speed50Quantile < 34.95
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.92 : train (25.58/12.92)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.92
|   |   |   |   |   |   |   accelerationVariance < 0.47
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.1 : bike (0.47/0)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.1
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.61 : car (10.14/0.24)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.61
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.81
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.78 : car (48.37/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.78 : car (5.37/0.24)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.81 : car (869.75/0)
|   |   |   |   |   |   |   accelerationVariance >= 0.47 : bus (9.17/5.14)
|   |   |   |   |   speed50Quantile >= 34.95 : train (36.15/1.09)
accelerationFrequencyBandEnergy1To3Hz >= 7.12
|   lowSpeedPointRatio < 0.96
|   |   accelerationFrequencyBandEnergy22To25Hz < 0.98
|   |   |   accelerationMedian < 4.71 : bike (739.96/0)
|   |   |   accelerationMedian >= 4.71
|   |   |   |   accelerationMedian < 4.83 : bike (8.54/3.54)
|   |   |   |   accelerationMedian >= 4.83 : bike (62/0)
|   |   accelerationFrequencyBandEnergy22To25Hz >= 0.98
|   |   |   speed95Quantile < 9.38
|   |   |   |   accelerationMean < 4.38
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 6.67 : bus (3.04/0.34)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 6.67
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 3.08 : walk (4.36/2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 3.08 : bike (186.01/0)
|   |   |   |   accelerationMean >= 4.38
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 7.35 : walk (39.85/0)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 7.35 : walk (6.04/3)
|   |   |   speed95Quantile >= 9.38 : bus (39.04/14.6)
|   lowSpeedPointRatio >= 0.96
|   |   speed25Quantile < 0.01 : stationary (14.86/7.86)
|   |   speed25Quantile >= 0.01
|   |   |   accelerationVariance < 2.37 : bus (7.82/3.01)
|   |   |   accelerationVariance >= 2.37
|   |   |   |   acceleration25Quantile < 1.21 : walk (37.01/3.2)
|   |   |   |   acceleration25Quantile >= 1.21
|   |   |   |   |   acceleration95Quantile < 3.9
|   |   |   |   |   |   acceleration50Quantile < 0.39 : walk (4.6/0.6)
|   |   |   |   |   |   acceleration50Quantile >= 0.39 : walk (397.08/0)
|   |   |   |   |   acceleration95Quantile >= 3.9 : walk (1221.78/0)

Size of the tree : 449


RandomTree
==========

accelerationMedian < 1.31
|   accelerationMin < 0.03
|   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   acceleration95Quantile < 0.14
|   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   trajectorySimilarityTrain < 920.02 : train (15.32/7.32)
|   |   |   |   |   trajectorySimilarityTrain >= 920.02
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.07
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.01 : stationary (86.89/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.01 : train (4/-0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.07 : stationary (469.79/0)
|   |   |   |   accelerationMedian >= 0.04 : train (19/5)
|   |   |   acceleration95Quantile >= 0.14 : car (7/3)
|   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.53
|   |   |   |   stationaryPointRatio < 0.09
|   |   |   |   |   speedMean < 14.61
|   |   |   |   |   |   accelerationMax < 1.36
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.05
|   |   |   |   |   |   |   |   speed75Quantile < 7.63 : tram (6.57/3.57)
|   |   |   |   |   |   |   |   speed75Quantile >= 7.63
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.27 : train (3.12/1.04)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.27 : train (37.42/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.05
|   |   |   |   |   |   |   |   maximumTravelDistance < 20.04
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : train (34.21/12)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 15.5
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 1.88 : tram (48/0)
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 1.88 : tram (8/1)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 15.5 : tram (2/1)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.18 : tram (16.9/0.9)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.18 : tram (36/0)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 20.04 : train (9.75/0)
|   |   |   |   |   |   accelerationMax >= 1.36
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.33
|   |   |   |   |   |   |   |   accelerationMedian < 0.2 : train (29.38/1.93)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.2 : tram (26.24/15.24)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.33 : bus (23.62/9.17)
|   |   |   |   |   speedMean >= 14.61
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.44 : train (37.61/1.72)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.44
|   |   |   |   |   |   |   accelerationVariance < 0.1
|   |   |   |   |   |   |   |   accelerationVariance < 0.08 : train (63.89/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.08 : train (3.18/0.18)
|   |   |   |   |   |   |   accelerationVariance >= 0.1 : stationary (0.63/0.36)
|   |   |   |   stationaryPointRatio >= 0.09
|   |   |   |   |   speedMax < 3.52
|   |   |   |   |   |   travelDistance < 189.16
|   |   |   |   |   |   |   accelerationMax < 1.89
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.24
|   |   |   |   |   |   |   |   |   speedMedian < 0.12
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 17.09 : bus (22.67/9.56)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 17.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.16
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 2.19 : stationary (31.15/8.61)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 2.19
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.04 : stationary (4.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.08 : train (35.2/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.08 : train (7.22/2)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.16 : train (30.69/-0)
|   |   |   |   |   |   |   |   |   speedMedian >= 0.12 : stationary (21.13/2.03)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.24 : bus (26.28/1.28)
|   |   |   |   |   |   |   accelerationMax >= 1.89
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.4
|   |   |   |   |   |   |   |   |   speedMax < 1.83
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.06 : stationary (46.9/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.06
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.56 : stationary (23.42/14.42)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.56 : stationary (21.9/1.71)
|   |   |   |   |   |   |   |   |   speedMax >= 1.83 : bike (7.42/3.42)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.4 : stationary (20.28/6.51)
|   |   |   |   |   |   travelDistance >= 189.16
|   |   |   |   |   |   |   accelerationMean < 0.09 : stationary (1.12/0.47)
|   |   |   |   |   |   |   accelerationMean >= 0.09
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.24 : train (53.23/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.24 : train (14.06/0.94)
|   |   |   |   |   speedMax >= 3.52
|   |   |   |   |   |   accelerationMean < 0.29
|   |   |   |   |   |   |   accumulatedTravelDistance < 149.95
|   |   |   |   |   |   |   |   accelerationMin < 0.01
|   |   |   |   |   |   |   |   |   accelerationMean < 0.11 : train (16.94/3.73)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.11
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 837.7 : bus (36.65/11.65)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 837.7 : car (34.61/13.61)
|   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   speedVariance < 11.17 : bus (33.16/14.16)
|   |   |   |   |   |   |   |   |   speedVariance >= 11.17 : train (18.3/1.06)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 149.95
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.38
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.1
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.16 : stationary (1.17/0.59)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.16
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.06 : train (119.15/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.06 : train (3.78/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.06 : train (38.44/0.2)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.1 : train (5.15/0.98)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.38 : train (5.78/3)
|   |   |   |   |   |   accelerationMean >= 0.29
|   |   |   |   |   |   |   accelerationMax < 3.19
|   |   |   |   |   |   |   |   headingVariance < 4.79 : train (19.53/4.21)
|   |   |   |   |   |   |   |   headingVariance >= 4.79 : bus (24.12/4.76)
|   |   |   |   |   |   |   accelerationMax >= 3.19
|   |   |   |   |   |   |   |   accelerationMedian < 0.21 : bus (17.35/1.35)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.21 : bus (37.35/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.53
|   |   |   |   travelDistance < 47.5
|   |   |   |   |   trajectorySimilarityTrain < 853.49
|   |   |   |   |   |   accelerationMean < 1.23 : bike (26.17/15.99)
|   |   |   |   |   |   accelerationMean >= 1.23 : walk (25.18/0)
|   |   |   |   |   trajectorySimilarityTrain >= 853.49
|   |   |   |   |   |   trajectorySimilarityBus < 281.16
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.65 : stationary (22.4/8.4)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.65 : stationary (19.32/1.32)
|   |   |   |   |   |   trajectorySimilarityBus >= 281.16 : car (8.56/0.48)
|   |   |   |   travelDistance >= 47.5
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.55
|   |   |   |   |   |   maximumTravelDistance < 19.27
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.24
|   |   |   |   |   |   |   |   speed50Quantile < 2.63 : bus (24.29/12.13)
|   |   |   |   |   |   |   |   speed50Quantile >= 2.63
|   |   |   |   |   |   |   |   |   accelerationMean < 0.28 : tram (38.16/1.16)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.28
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.14 : tram (35.5/9.5)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.14 : bus (13.99/2.82)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.24
|   |   |   |   |   |   |   |   speedMedian < 2.52
|   |   |   |   |   |   |   |   |   speedMedian < 2.21 : bus (37.53/3.68)
|   |   |   |   |   |   |   |   |   speedMedian >= 2.21 : car (11.79/5.79)
|   |   |   |   |   |   |   |   speedMedian >= 2.52
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 692.81 : tram (8.58/2.58)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 692.81
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.11 : train (3.15/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.01
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.33 : bus (39.62/1.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.33 : bus (12.11/3.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.64 : train (1.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.01 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26 : bus (48/0)
|   |   |   |   |   |   maximumTravelDistance >= 19.27
|   |   |   |   |   |   |   travelDistance < 194.88 : car (5.33/2.33)
|   |   |   |   |   |   |   travelDistance >= 194.88
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.22 : train (10.87/0.93)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.22
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.35 : train (4.31/0.31)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.35 : train (49.87/0)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.55
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.71
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.91
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.82
|   |   |   |   |   |   |   |   |   accelerationMax < 1.65 : train (5.46/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 1.65
|   |   |   |   |   |   |   |   |   |   speedMin < 1.71
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 77.3 : car (28/7)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 77.3 : car (23/0)
|   |   |   |   |   |   |   |   |   |   speedMin >= 1.71 : tram (5/2)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.82
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.38
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.56 : car (4/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.56
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 210.7
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.7
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.63 : bus (9/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.63 : bus (76.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.7 : train (1/-0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 210.7 : train (8.32/2.32)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.38 : bus (22/9)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.91
|   |   |   |   |   |   |   |   accelerationMax < 3.45
|   |   |   |   |   |   |   |   |   headingVariance < 0.15 : train (7.29/0.29)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.15
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 2.58
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.23 : car (9.7/1.7)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.23 : car (95.56/0)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 2.58 : bus (1/0)
|   |   |   |   |   |   |   |   accelerationMax >= 3.45
|   |   |   |   |   |   |   |   |   speedMax < 15.77
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.6
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.85 : car (17/2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.85 : car (25.89/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.24 : tram (4.16/2.16)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.6
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.12 : car (15.72/3.29)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.12
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.15 : bus (33.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.15 : bus (13.74/3.74)
|   |   |   |   |   |   |   |   |   speedMax >= 15.77
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.1 : bike (0.99/0)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.77 : car (36.99/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.77 : car (24.99/3.33)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.71
|   |   |   |   |   |   |   speedMax < 16.37
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.78 : walk (5.68/1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.78
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.32
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 5.23 : bus (3.18/1)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 5.23 : bus (59.33/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.32 : bus (39.09/7.34)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.04 : car (11/4)
|   |   |   |   |   |   |   speedMax >= 16.37
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 849.68 : bus (29.01/1.72)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 849.68 : car (36.82/3.82)
|   accelerationMin >= 0.03
|   |   trajectorySimilarityTrain < 941.28
|   |   |   trajectorySimilarityBus < 105.31
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 7.68
|   |   |   |   |   speedMax < 23.87
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.3 : train (34.33/15.82)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.3
|   |   |   |   |   |   |   accelerationMax < 7.14
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.18
|   |   |   |   |   |   |   |   |   accelerationMean < 0.99
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.55
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.1
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : train (1.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35 : bus (86/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.1 : bus (21.55/5.55)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 210.39
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.59
|   |   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 2.31 : car (2.03/0.01)
|   |   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.86 : car (2.13/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.3 : bus (9/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.04 : car (0.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.84
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.65 : bus (64.27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.65 : bus (11.4/0.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.84 : bus (82.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.74 : bus (6.74/1.34)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.59
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 987.1 : car (8.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 987.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 76.31
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.93 : car (0.35/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.93
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.92 : bus (51/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.92 : car (0.23/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 76.31 : car (1.01/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.82 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 210.39
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.17
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.65 : car (26.05/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.65 : bus (14.55/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.54 : bus (15.22/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.17
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.51
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.79 : bus (17.27/4.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.79 : car (26.5/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.51 : bus (37.53/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.43 : bus (76/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.99 : car (36.53/5.02)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.18
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.16
|   |   |   |   |   |   |   |   |   |   travelDistance < 611.42 : car (43.22/0)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 611.42 : car (2.06/1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.16
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.47 : car (18.28/0)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.47
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 14.11
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 15.25 : bus (32.26/8.26)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 15.25 : car (13.98/3)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 14.11 : bus (30.11/4.11)
|   |   |   |   |   |   |   accelerationMax >= 7.14
|   |   |   |   |   |   |   |   accelerationMin < 0.08
|   |   |   |   |   |   |   |   |   accelerationMax < 10.18 : bus (60.06/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 10.18 : bus (35.53/3.27)
|   |   |   |   |   |   |   |   accelerationMin >= 0.08 : bus (7.29/2.29)
|   |   |   |   |   speedMax >= 23.87
|   |   |   |   |   |   accelerationMedian < 0.72 : train (1.24/0.61)
|   |   |   |   |   |   accelerationMedian >= 0.72
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.82 : train (0.18/0.1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.82
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 3.4
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.97 : car (18.47/0.19)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.97 : car (35.48/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 3.4 : bus (0.06/-0)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 7.68 : bike (18.81/1)
|   |   |   trajectorySimilarityBus >= 105.31
|   |   |   |   trajectorySimilarityTrain < 165.26
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.91
|   |   |   |   |   |   acceleration75Quantile < 1.05
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.78
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.49 : train (27.52/0.16)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.49 : train (32.1/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.78
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.77 : bus (0.21/0.05)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.77
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.63 : train (38.67/1.25)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.63
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.68 : train (38.36/0.05)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.68 : train (8.47/0.16)
|   |   |   |   |   |   acceleration75Quantile >= 1.05 : train (11.68/3.47)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.91 : car (26.29/4.78)
|   |   |   |   trajectorySimilarityTrain >= 165.26
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.5
|   |   |   |   |   |   accelerationVariance < 0.49
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.49 : train (8.32/3.58)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.49 : bus (38.45/2.17)
|   |   |   |   |   |   accelerationVariance >= 0.49 : bike (15.47/0.12)
|   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.5
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 3.17
|   |   |   |   |   |   |   speed95Quantile < 8.8 : bus (14.5/3.39)
|   |   |   |   |   |   |   speed95Quantile >= 8.8
|   |   |   |   |   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.58
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 232.39 : bus (5.4/1.31)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 232.39
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.98
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.34 : car (1.92/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.49 : car (2.61/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.08 : bus (0.41/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.51 : car (31.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.51 : car (19.41/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.98 : bus (0.2/-0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.94 : bus (1.51/0.1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.58 : bus (28.45/3.45)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.43
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 276.39
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 2.02
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 710.04
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.67 : car (5.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.67 : car (46.82/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 710.04 : car (7.13/1.02)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 2.02 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 276.39
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.42 : car (2.8/0.4)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.42 : car (146.91/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.43 : car (14.9/5.68)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 3.17 : bus (17/1)
|   |   trajectorySimilarityTrain >= 941.28
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.39
|   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.71
|   |   |   |   |   accelerationMean < 0.46 : train (39.36/3.68)
|   |   |   |   |   accelerationMean >= 0.46 : bus (17.32/8.72)
|   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.71
|   |   |   |   |   accelerationMedian < 0.84 : tram (27.52/13.48)
|   |   |   |   |   accelerationMedian >= 0.84
|   |   |   |   |   |   acceleration95Quantile < 0.42 : car (4.56/0.56)
|   |   |   |   |   |   acceleration95Quantile >= 0.42 : car (73/0)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.39
|   |   |   |   speedMax < 12.66
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.93
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.53
|   |   |   |   |   |   |   accelerationMedian < 0.36 : bus (0.04/0)
|   |   |   |   |   |   |   accelerationMedian >= 0.36
|   |   |   |   |   |   |   |   accelerationMean < 1.02
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.47 : car (15.33/0.08)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.47 : car (41.96/0)
|   |   |   |   |   |   |   |   accelerationMean >= 1.02 : car (0.17/0.08)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.53 : car (7.21/3.21)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.93
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.41 : train (7.37/0.12)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.41
|   |   |   |   |   |   |   accelerationMin < 0.14
|   |   |   |   |   |   |   |   maximumTravelDistance < 10.28 : car (6.18/0.06)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 10.28
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.88 : car (2.7/1.04)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.88
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 6.44
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.45 : train (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.45
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.67 : bus (23.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.67 : bus (22.33/0.26)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 6.44 : car (1/0)
|   |   |   |   |   |   |   accelerationMin >= 0.14 : car (6/-0)
|   |   |   |   speedMax >= 12.66
|   |   |   |   |   accelerationVariance < 0.33
|   |   |   |   |   |   speedMean < 16.82
|   |   |   |   |   |   |   accelerationMean < 0.93
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 135.58
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.46
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.73 : bus (8.31/1.06)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.73
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.99 : car (73.05/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.99 : car (14.19/4.12)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.46 : bus (19.12/0.12)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 135.58
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.86
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.4 : bus (0.08/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.4 : car (43/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : car (11.39/0.39)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.86 : car (91.66/0)
|   |   |   |   |   |   |   accelerationMean >= 0.93
|   |   |   |   |   |   |   |   headingVariance < 1.25 : car (2.06/1)
|   |   |   |   |   |   |   |   headingVariance >= 1.25
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.71 : car (23.25/0.28)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.71 : car (125.79/0)
|   |   |   |   |   |   speedMean >= 16.82
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.61 : bus (1.51/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.61
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.63
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.29
|   |   |   |   |   |   |   |   |   |   accelerationMax < 4.53 : car (168.66/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.53 : car (8.13/0.38)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.29 : car (26.26/3.38)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.63
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.58
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.62 : car (63.13/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.62 : car (19.75/0.75)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.58 : car (816.04/0)
|   |   |   |   |   accelerationVariance >= 0.33
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.7
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.56 : car (22.7/6.7)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.56
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.38 : bus (36.11/2)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.38 : car (11.04/3)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.7
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.7 : bus (3/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.7
|   |   |   |   |   |   |   |   accelerationMax < 9.05
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.85 : bus (1.04/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.85 : car (59.74/0)
|   |   |   |   |   |   |   |   accelerationMax >= 9.05 : car (18.59/3.59)
accelerationMedian >= 1.31
|   speed50Quantile < 2.28
|   |   accelerationFrequencyBandEnergy28To30Hz < 0.38
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.14 : bike (31.26/15.24)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.14 : walk (19.46/3.62)
|   |   accelerationFrequencyBandEnergy28To30Hz >= 0.38
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 7.9 : walk (33.43/4.82)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 7.9
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 16.81 : walk (1620.1/0)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 16.81 : walk (31.63/4.01)
|   speed50Quantile >= 2.28
|   |   accelerationFrequencyBandEnergy10To14Hz < 1.32
|   |   |   accelerationMin < 0.1
|   |   |   |   accelerationMean < 4.82 : bike (43.78/0)
|   |   |   |   accelerationMean >= 4.82 : bike (10.37/4.37)
|   |   |   accelerationMin >= 0.1 : bike (789.19/0)
|   |   accelerationFrequencyBandEnergy10To14Hz >= 1.32
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.35
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 3.9 : car (14.4/1)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 3.9
|   |   |   |   |   accelerationVariance < 2.8 : bus (31.38/0)
|   |   |   |   |   accelerationVariance >= 2.8 : walk (12.71/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.35
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 5.2
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 4.61
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 14.23
|   |   |   |   |   |   |   speedMin < 12.54 : bike (46.97/0)
|   |   |   |   |   |   |   speedMin >= 12.54 : bus (3.2/0.2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 14.23 : walk (13.93/4)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 4.61 : bike (139/0)
|   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 5.2 : walk (38.19/11.99)

Size of the tree : 469


RandomTree
==========

accelerationFrequencyBandEnergy1To3Hz < 6.94
|   accelerationFrequencyBandEnergy14To20Hz < 1.97
|   |   accelerationFrequencyBandEnergy1To3Hz < 0.15
|   |   |   accelerationMax < 0.34
|   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   headingVariance < 0.01 : stationary (21.48/1)
|   |   |   |   |   headingVariance >= 0.01 : stationary (510.85/0)
|   |   |   |   speed25Quantile >= 0.01 : stationary (7.67/1)
|   |   |   accelerationMax >= 0.34
|   |   |   |   acceleration95Quantile < 0.14
|   |   |   |   |   accelerationMean < 0.04 : stationary (45/0)
|   |   |   |   |   accelerationMean >= 0.04 : stationary (29/15)
|   |   |   |   acceleration95Quantile >= 0.14 : car (8/2)
|   |   accelerationFrequencyBandEnergy1To3Hz >= 0.15
|   |   |   accumulatedTravelDistance < 296.57
|   |   |   |   lowSpeedPointRatio < 0.98
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.1
|   |   |   |   |   |   accelerationMedian < 0.07
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.07 : train (21.15/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.07 : car (21.69/6.69)
|   |   |   |   |   |   accelerationMedian >= 0.07
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.04 : bus (31.84/12.69)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 226.91 : tram (10.5/1.5)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 226.91
|   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 97.52
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.22 : train (19.54/5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.22 : bus (37.64/15.52)
|   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 97.52
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.36 : train (97.87/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.36 : train (14.15/2.2)
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.1
|   |   |   |   |   |   accelerationMax < 1.98
|   |   |   |   |   |   |   trajectorySimilarityTram < 272.06 : tram (18.73/2.73)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 272.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.37
|   |   |   |   |   |   |   |   |   speed50Quantile < 10.38
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 28.07 : bus (25.22/1.22)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 28.07
|   |   |   |   |   |   |   |   |   |   |   speedVariance < 22.23 : car (36.83/6.83)
|   |   |   |   |   |   |   |   |   |   |   speedVariance >= 22.23 : bus (6.26/1.26)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 10.38 : train (9.39/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.37 : train (14.76/0)
|   |   |   |   |   |   accelerationMax >= 1.98
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.49
|   |   |   |   |   |   |   |   stationaryPointRatio < 0.11 : bus (38.95/15.83)
|   |   |   |   |   |   |   |   stationaryPointRatio >= 0.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.65 : car (29/14)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.65
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.98 : bus (36.18/11.86)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.98
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.04 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.25
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.63 : bus (16.86/2.91)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.53 : bus (85.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.53 : train (0.95/-0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.25 : bus (18.73/3.18)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.49
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.32
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.9
|   |   |   |   |   |   |   |   |   |   travelDistance < 64.3 : bus (2.04/1.04)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 64.3 : car (38.73/4.73)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.9 : bus (6/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.32
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.35 : car (38.21/13.21)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.35 : bus (30.17/1)
|   |   |   |   lowSpeedPointRatio >= 0.98
|   |   |   |   |   accelerationMax < 1.92
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.26
|   |   |   |   |   |   |   headingVariance < 4.02
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.08 : train (22.86/0.74)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.08 : stationary (19.33/7.88)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.64
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.07 : train (16.69/0.5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.07 : train (36.2/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.64 : bus (0.13/-0)
|   |   |   |   |   |   |   headingVariance >= 4.02
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.14
|   |   |   |   |   |   |   |   |   accelerationMean < 0.08 : stationary (37.04/1.52)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.08 : bus (28.46/7.35)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.14 : train (13.38/1)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.26
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.99
|   |   |   |   |   |   |   |   acceleration75Quantile < 0.1 : bus (10.23/0.23)
|   |   |   |   |   |   |   |   acceleration75Quantile >= 0.1 : bus (46/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.99 : train (18.27/7)
|   |   |   |   |   accelerationMax >= 1.92
|   |   |   |   |   |   acceleration95Quantile < 0.08
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.19 : stationary (11/4)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.19
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.06 : stationary (34.37/0)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.06 : stationary (24.92/7.92)
|   |   |   |   |   |   acceleration95Quantile >= 0.08
|   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 11.46 : train (22.97/7.81)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 11.46 : walk (17.23/10.23)
|   |   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (6.14/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.07 : train (3.83/0.28)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.07
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 10.12
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.21
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.27 : stationary (27.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.27 : stationary (13.27/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.21 : stationary (8.41/0.85)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 10.12 : train (0.7/-0)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : stationary (4.4/2.4)
|   |   |   accumulatedTravelDistance >= 296.57
|   |   |   |   speed95Quantile < 17.25
|   |   |   |   |   accelerationMean < 0.36
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.06
|   |   |   |   |   |   |   accelerationVariance < 0.01 : stationary (5.7/2.7)
|   |   |   |   |   |   |   accelerationVariance >= 0.01
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.59
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 365.03 : tram (1.04/0.04)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 365.03
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.06 : train (8.37/0.76)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.06 : train (67.84/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.59 : train (6/2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.06
|   |   |   |   |   |   |   stationaryPointRatio < 0.04
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.11 : tram (36.32/17.32)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.14 : train (10.45/1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.14
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.33
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 291.28 : train (6.11/0.03)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 291.28
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : tram (6.09/1.09)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (0.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01 : tram (90/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.19 : tram (51/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.08 : train (1.08/0.72)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.33 : tram (8.75/3.75)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.04 : train (27.88/0.35)
|   |   |   |   |   accelerationMean >= 0.36
|   |   |   |   |   |   accelerationMedian < 0.68
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.58
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.84 : train (27.28/4.47)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.84 : bus (19.41/2.7)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.58 : car (13.06/1.06)
|   |   |   |   |   |   accelerationMedian >= 0.68 : bike (6.43/2.43)
|   |   |   |   speed95Quantile >= 17.25
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.15
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.4
|   |   |   |   |   |   |   accelerationMedian < 0.06 : stationary (1.92/0.17)
|   |   |   |   |   |   |   accelerationMedian >= 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.34
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.15 : train (73.89/0)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.15
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.24
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.27 : train (62.53/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.43 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.18 : train (16.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.18 : train (29.34/1.4)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.68 : bus (0.52/0.17)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.24 : train (2.87/0.87)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.34 : stationary (1.22/0.17)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.4
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.16
|   |   |   |   |   |   |   |   accelerationVariance < 0.13
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.45 : train (59.87/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.45 : train (6.87/0.35)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.13 : bus (1.92/-0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.16 : train (48.51/0)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.15 : train (16.09/4.7)
|   accelerationFrequencyBandEnergy14To20Hz >= 1.97
|   |   accelerationMedian < 0.78
|   |   |   trajectorySimilarityTrain < 253.48
|   |   |   |   speed25Quantile < 19.75
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.73
|   |   |   |   |   |   speed95Quantile < 20.07
|   |   |   |   |   |   |   trajectorySimilarityTram < 695.47 : train (5.27/0.11)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 695.47
|   |   |   |   |   |   |   |   accelerationMean < 0.29 : train (1.74/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.29
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.67
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : bus (25.47/4.47)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.43 : car (2/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.43
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.94 : bus (81.5/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.94 : walk (0.25/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.67 : car (5/3)
|   |   |   |   |   |   speed95Quantile >= 20.07 : train (20.03/0.43)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.73
|   |   |   |   |   |   trajectorySimilarityBus < 12.95 : bike (18.89/8.89)
|   |   |   |   |   |   trajectorySimilarityBus >= 12.95
|   |   |   |   |   |   |   trajectorySimilarityBus < 172.07
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.78
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.62 : walk (0.81/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.62
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.99 : bus (89.81/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.99 : bus (3.27/0.27)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.78
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.54
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 913.95 : car (9.63/0.27)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 913.95
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.45 : car (3.51/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.26 : car (4.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.21 : bus (27.41/12.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.21
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.67 : bus (69.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.67 : bus (36.12/8.09)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.41 : bus (12.03/0.26)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.41 : bus (57.06/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.54
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.58 : bus (2.54/0.54)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.58 : bus (44.27/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 172.07 : car (25.19/10.62)
|   |   |   |   speed25Quantile >= 19.75
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.46
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.01
|   |   |   |   |   |   |   acceleration25Quantile < 0.37 : train (6.16/0.04)
|   |   |   |   |   |   |   acceleration25Quantile >= 0.37 : train (36.04/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.01 : car (0.04/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.46 : train (31.3/8.77)
|   |   |   trajectorySimilarityTrain >= 253.48
|   |   |   |   accelerationVariance < 0.24
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.92
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.16
|   |   |   |   |   |   |   accelerationMean < 0.4 : tram (31.63/19.63)
|   |   |   |   |   |   |   accelerationMean >= 0.4
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.39 : car (31.66/4.66)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.39
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.49
|   |   |   |   |   |   |   |   |   |   headingVariance < 7.72
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.81 : bus (31.52/2.52)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.81 : car (16.04/3)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 7.72 : car (12.41/0.14)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.49
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 916.98
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.44 : tram (1.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.44
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.32 : bus (6.52/1.52)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.32 : bus (36.02/1.02)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.08 : tram (11/5)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 916.98 : tram (16.19/9.45)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.16
|   |   |   |   |   |   |   trajectorySimilarityBus < 124.64
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.47
|   |   |   |   |   |   |   |   |   speedVariance < 2.82 : car (19.1/0.18)
|   |   |   |   |   |   |   |   |   speedVariance >= 2.82
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.43 : car (28.5/0.38)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.43
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.75 : car (24/7)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.75 : bus (26.01/4.63)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.47 : bus (31/2)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 124.64
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.9
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.68 : car (35.33/0)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.68 : car (8.95/0.38)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.9 : car (8/1)
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.92
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.84
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.54 : car (20/5)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.54
|   |   |   |   |   |   |   |   accelerationMax < 2.93 : bus (3.31/1.31)
|   |   |   |   |   |   |   |   accelerationMax >= 2.93 : bus (42/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.84
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.99
|   |   |   |   |   |   |   |   speedMax < 15.77
|   |   |   |   |   |   |   |   |   speed95Quantile < 15.4
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.08
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.99 : car (29.46/6)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.99 : car (52.38/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.08 : car (54.38/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 15.4 : tram (7.17/2.17)
|   |   |   |   |   |   |   |   speedMax >= 15.77 : car (244.8/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.99 : bus (29.97/13.66)
|   |   |   |   accelerationVariance >= 0.24
|   |   |   |   |   speed75Quantile < 2.96
|   |   |   |   |   |   accelerationMean < 0.21 : stationary (14/0)
|   |   |   |   |   |   accelerationMean >= 0.21 : walk (32.77/16.3)
|   |   |   |   |   speed75Quantile >= 2.96
|   |   |   |   |   |   maximumTravelDistance < 12.35
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.04
|   |   |   |   |   |   |   |   accelerationMedian < 0.2 : train (2.39/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.2
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.91
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.19 : bus (51.68/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.19
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.02 : bus (31.73/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.02 : bus (9.39/1.71)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.91 : bus (24.02/2.34)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.04
|   |   |   |   |   |   |   |   speed75Quantile < 8.05 : car (8.77/2.59)
|   |   |   |   |   |   |   |   speed75Quantile >= 8.05
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 5.32 : bus (35.1/0.85)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 5.32 : bus (6.56/0.56)
|   |   |   |   |   |   maximumTravelDistance >= 12.35
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3 : car (37.76/9.32)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.48 : bus (35.99/2.33)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.48 : bus (36.1/16.44)
|   |   accelerationMedian >= 0.78
|   |   |   accelerationMax < 7.14
|   |   |   |   highSpeedPointRatio < 0.33
|   |   |   |   |   speedVariance < 1.27
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.04 : car (23.55/0.02)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.04 : car (21.76/0.31)
|   |   |   |   |   speedVariance >= 1.27
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.7
|   |   |   |   |   |   |   trajectorySimilarityTrain < 64.2 : car (4.11/0.03)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 64.2
|   |   |   |   |   |   |   |   speed50Quantile < 8.36
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.7 : bus (19.07/4.98)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.7 : bus (32.26/0)
|   |   |   |   |   |   |   |   speed50Quantile >= 8.36 : car (2.05/0.02)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.7 : car (33.15/4.24)
|   |   |   |   highSpeedPointRatio >= 0.33
|   |   |   |   |   accelerationVariance < 0.29
|   |   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   |   highSpeedPointRatio < 0.83
|   |   |   |   |   |   |   |   speedMax < 19.3 : car (33.49/2.25)
|   |   |   |   |   |   |   |   speedMax >= 19.3 : car (18.27/8.13)
|   |   |   |   |   |   |   highSpeedPointRatio >= 0.83
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.37 : car (38.57/7.28)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.37
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.02
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 193.22 : bus (1.08/0.02)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 193.22
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.63 : car (13.12/3.12)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.55 : tram (0.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.55 : car (40/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.02 : car (486.98/0)
|   |   |   |   |   |   accelerationMin >= 0.07
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.68
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.68 : car (68.93/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.68 : bus (0.93/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.68 : car (670.28/0)
|   |   |   |   |   accelerationVariance >= 0.29
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.18
|   |   |   |   |   |   |   accelerationMedian < 0.98
|   |   |   |   |   |   |   |   speedMedian < 19.39
|   |   |   |   |   |   |   |   |   accelerationMean < 1.11
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.04 : car (62.55/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.04 : car (7.09/0.77)
|   |   |   |   |   |   |   |   |   accelerationMean >= 1.11 : bus (1.55/0)
|   |   |   |   |   |   |   |   speedMedian >= 19.39 : bus (14.24/6.77)
|   |   |   |   |   |   |   accelerationMedian >= 0.98 : car (157.93/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.18
|   |   |   |   |   |   |   speed25Quantile < 23.65
|   |   |   |   |   |   |   |   speedMin < 14.63 : car (38.46/14.23)
|   |   |   |   |   |   |   |   speedMin >= 14.63
|   |   |   |   |   |   |   |   |   speedMax < 24.97
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.1 : bus (41.59/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.1 : car (4.35/1.88)
|   |   |   |   |   |   |   |   |   speedMax >= 24.97 : car (3.2/0.1)
|   |   |   |   |   |   |   speed25Quantile >= 23.65
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.19 : bus (1.11/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.19
|   |   |   |   |   |   |   |   |   accelerationMin < 0.02 : bus (0.74/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.02 : car (55.84/0)
|   |   |   accelerationMax >= 7.14
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 2.49
|   |   |   |   |   maximumTravelDistance < 12.88
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.12 : car (16.86/1.86)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.12
|   |   |   |   |   |   |   acceleration75Quantile < 4.14
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.2 : train (1.07/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.2 : bus (46.13/0)
|   |   |   |   |   |   |   acceleration75Quantile >= 4.14 : walk (2/0)
|   |   |   |   |   maximumTravelDistance >= 12.88
|   |   |   |   |   |   trajectorySimilarityTrain < 547.12 : bus (28.16/7.25)
|   |   |   |   |   |   trajectorySimilarityTrain >= 547.12
|   |   |   |   |   |   |   accelerationMean < 1.37
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.42 : car (26.82/12.82)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.42
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.54 : bus (1.24/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.54
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.24
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.99 : car (12.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.99 : car (42/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.24 : car (68/0)
|   |   |   |   |   |   |   accelerationMean >= 1.37 : bus (3.1/-0)
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 2.49 : bike (27/5)
accelerationFrequencyBandEnergy1To3Hz >= 6.94
|   accelerationFrequencyBandEnergy10To14Hz < 0.75
|   |   headingVariance < 6.82
|   |   |   accelerationVariance < 4.96
|   |   |   |   accelerationMean < 4.3 : bike (155.3/0)
|   |   |   |   accelerationMean >= 4.3 : walk (5.96/-0)
|   |   |   accelerationVariance >= 4.96 : bike (551.65/0)
|   |   headingVariance >= 6.82
|   |   |   speedMax < 2.95 : walk (10.14/0.07)
|   |   |   speedMax >= 2.95
|   |   |   |   accelerationVariance < 4.96 : bike (30.62/0.97)
|   |   |   |   accelerationVariance >= 4.96 : bike (109.32/0)
|   accelerationFrequencyBandEnergy10To14Hz >= 0.75
|   |   speed95Quantile < 3.79
|   |   |   accelerationFrequencyBandEnergy8To9Hz < 2.82 : bus (25.83/16.74)
|   |   |   accelerationFrequencyBandEnergy8To9Hz >= 2.82
|   |   |   |   accelerationMedian < 1.94 : walk (18.87/0.87)
|   |   |   |   accelerationMedian >= 1.94 : walk (1677.09/0)
|   |   speed95Quantile >= 3.79
|   |   |   maximumTravelDistance < 9.68
|   |   |   |   accelerationVariance < 7.23
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 2.5 : walk (1.83/0.64)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 2.5
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 9.73
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 3.8
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 4.49 : bike (106.18/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 4.49 : bike (5.18/0.18)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 3.8 : bike (21.92/1.92)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 9.73 : walk (1.47/0)
|   |   |   |   accelerationVariance >= 7.23
|   |   |   |   |   acceleration50Quantile < 4.83 : bike (31.3/3.21)
|   |   |   |   |   acceleration50Quantile >= 4.83 : bike (13.41/5.41)
|   |   |   maximumTravelDistance >= 9.68
|   |   |   |   accelerationVariance < 2.8
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 7.38 : bus (39.38/0.11)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 7.38 : car (5/-0)
|   |   |   |   accelerationVariance >= 2.8 : bike (30.53/7.49)

Size of the tree : 433



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.36 (     5)  lowSpeedPointRatio
      0.35 (     4)  accumulatedTravelDistance
      0.3  (     9)  trajectorySimilarityTram
      0.28 (    12)  maximumTravelDistance
      0.28 (     7)  stationaryPointRatio
      0.28 (    20)  trajectorySimilarityTrain
      0.27 (     1)  mediumSpeedPointRatio
      0.25 (    40)  accelerationMean
      0.24 (    10)  speed50Quantile
      0.23 (    11)  speed95Quantile
      0.23 (     7)  speed75Quantile
      0.22 (    22)  trajectorySimilarityBus
      0.21 (     7)  speedMin
      0.21 (    16)  speedMax
      0.19 (     6)  speedVariance
      0.19 (    24)  accelerationFrequencyBandEnergy27To28Hz
      0.19 (    35)  accelerationFrequencyBandEnergy1To3Hz
      0.19 (    35)  accelerationFrequencyBandEnergy10To14Hz
      0.18 (    10)  headingVariance
      0.18 (    26)  accelerationVariance
      0.18 (     7)  speed25Quantile
      0.18 (    23)  accelerationFrequencyBandEnergy14To20Hz
      0.17 (    20)  accelerationFrequencyBandEnergy8To10Hz
      0.16 (    31)  accelerationFrequencyBandEnergy25To27Hz
      0.16 (     4)  speedMedian
      0.16 (    27)  accelerationFrequencyBandEnergy28To30Hz
      0.16 (    25)  accelerationFrequencyBandEnergy25To30Hz
      0.16 (     8)  travelDistance
      0.15 (    24)  accelerationFrequencyBandEnergy22To25Hz
      0.15 (    21)  accelerationFrequencyBandEnergy9To10Hz
      0.15 (    34)  accelerationMedian
      0.14 (    28)  accelerationMax
      0.13 (    19)  accelerationFrequencyBandEnergy20To22Hz
      0.13 (    16)  accelerationMin
      0.12 (    22)  accelerationFrequencyBandEnergy8To9Hz
      0.11 (     3)  speedMean
      0.1  (    15)  acceleration95Quantile
      0.08 (    10)  acceleration25Quantile
      0.08 (    13)  acceleration50Quantile
      0.05 (    14)  acceleration75Quantile
      0.05 (     3)  highSpeedPointRatio
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages30To90s
      0    (     0)  stoppages5To15s
      0    (     0)  stoppages0To5s

=== Classifier model (training fold 4) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationVariance < 1.29
|   accelerationFrequencyBandEnergy27To28Hz < 0.23
|   |   accelerationMean < 0.08
|   |   |   accelerationMedian < 0.04
|   |   |   |   accelerationMean < 0.04
|   |   |   |   |   maximumTravelDistance < 2.88 : stationary (356.9/0)
|   |   |   |   |   maximumTravelDistance >= 2.88
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.1
|   |   |   |   |   |   |   speedMedian < 0.1
|   |   |   |   |   |   |   |   travelDistance < 15.43 : stationary (19.31/4)
|   |   |   |   |   |   |   |   travelDistance >= 15.43 : stationary (45.52/0)
|   |   |   |   |   |   |   speedMedian >= 0.1 : train (4.14/1.14)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.1 : stationary (136.12/0)
|   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.01 : train (22/0)
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.01
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.06 : stationary (18/5)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.06 : stationary (60/0)
|   |   |   accelerationMedian >= 0.04
|   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.28
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.07 : train (30/9)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.07 : train (16/0)
|   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.28 : stationary (19/2)
|   |   accelerationMean >= 0.08
|   |   |   accumulatedTravelDistance < 342.58
|   |   |   |   speedMin < 0.01
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.24
|   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   speedMax < 10.55
|   |   |   |   |   |   |   |   accelerationVariance < 0.03
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.11
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 15.18 : bus (30.81/6.81)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 15.18 : train (31.88/3)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.11 : train (34.26/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.03
|   |   |   |   |   |   |   |   |   headingVariance < 4.64 : train (21.43/4.6)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.64
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.07 : car (12/2)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.07
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.4 : bus (24/4)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.4 : bus (27.22/12.86)
|   |   |   |   |   |   |   speedMax >= 10.55
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.21
|   |   |   |   |   |   |   |   |   accelerationMean < 0.32 : train (85.05/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.32 : train (0.6/0.3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.21 : train (30.26/8.2)
|   |   |   |   |   |   accelerationVariance >= 0.11
|   |   |   |   |   |   |   mediumSpeedPointRatio < 0.09 : stationary (31.78/10.64)
|   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.09
|   |   |   |   |   |   |   |   accelerationMedian < 0.53
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.06 : car (1/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.06
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.56 : bus (9.5/3.5)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.56
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.4 : bus (32.5/0.25)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.4 : bus (10.25/1.5)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.53 : car (5.76/1.75)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.24
|   |   |   |   |   |   speed50Quantile < 0.67
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.24
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.5 : bus (39/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.5 : bus (9.14/1.92)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.24
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 81.13
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.07 : car (13.86/1.86)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   accelerationMax < 1.69 : train (10.45/3)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.69
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.91 : bus (38.25/2.02)
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.91 : bus (10.34/5.28)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 81.13
|   |   |   |   |   |   |   |   |   speedVariance < 12.96 : car (35.38/9.38)
|   |   |   |   |   |   |   |   |   speedVariance >= 12.96 : train (7.5/0.12)
|   |   |   |   |   |   speed50Quantile >= 0.67
|   |   |   |   |   |   |   accelerationMean < 0.77
|   |   |   |   |   |   |   |   speedMean < 7.93
|   |   |   |   |   |   |   |   |   accelerationMax < 1.71 : train (3.91/1)
|   |   |   |   |   |   |   |   |   accelerationMax >= 1.71
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.08 : bus (6.23/2.23)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.08
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.85
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.12 : bus (3.46/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.12
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.75 : bus (73.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.75 : bus (14.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.85 : bus (1.77/0.77)
|   |   |   |   |   |   |   |   speedMean >= 7.93 : train (2.12/0.03)
|   |   |   |   |   |   |   accelerationMean >= 0.77 : car (7.16/1.16)
|   |   |   |   speedMin >= 0.01
|   |   |   |   |   speed75Quantile < 1
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.72 : train (14.73/4.55)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.72
|   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.1 : stationary (5.93/0.93)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.1
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.58 : train (0.66/0.11)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.58
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.42
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.93
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.4 : stationary (66.27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.4 : stationary (2.11/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.2 : stationary (2.05/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.97 : train (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.93 : train (0.11/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.42 : train (0.11/0)
|   |   |   |   |   |   |   accelerationMin >= 0.03 : train (2.24/0.82)
|   |   |   |   |   speed75Quantile >= 1
|   |   |   |   |   |   accelerationVariance < 0.39
|   |   |   |   |   |   |   trajectorySimilarityTram < 90.89
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.35
|   |   |   |   |   |   |   |   |   travelDistance < 72.28 : train (1.01/0.01)
|   |   |   |   |   |   |   |   |   travelDistance >= 72.28 : tram (39.81/2.81)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.35 : train (3.61/1.76)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 90.89
|   |   |   |   |   |   |   |   accelerationVariance < 0.04 : train (35.57/0.07)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 40.58 : train (8.86/2.42)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 40.58
|   |   |   |   |   |   |   |   |   |   speedMax < 3.73 : train (3.32/0.16)
|   |   |   |   |   |   |   |   |   |   speedMax >= 3.73 : bus (38.77/5.04)
|   |   |   |   |   |   accelerationVariance >= 0.39
|   |   |   |   |   |   |   speedMedian < 7.29
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.54 : bus (2.25/0.25)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.54
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.33
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.92 : bike (13.08/0.08)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.92 : bike (30.08/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.33 : car (0.25/0.08)
|   |   |   |   |   |   |   speedMedian >= 7.29 : car (16.23/0.09)
|   |   |   accumulatedTravelDistance >= 342.58
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.62
|   |   |   |   |   trajectorySimilarityTram < 224.98
|   |   |   |   |   |   accelerationVariance < 0.06
|   |   |   |   |   |   |   mediumSpeedPointRatio < 0.64 : train (2.47/0)
|   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.64
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.25 : train (3.78/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.25
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.42 : tram (59/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.42
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.21
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : train (2.18/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.43 : tram (24.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.43 : tram (25/0)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.21 : tram (39.44/0.44)
|   |   |   |   |   |   accelerationVariance >= 0.06 : bus (2.95/2.22)
|   |   |   |   |   trajectorySimilarityTram >= 224.98
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.27 : train (8.3/2.5)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.27
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.52 : train (257.42/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.52 : train (39.4/2.1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.59 : train (18.8/1.2)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.62
|   |   |   |   |   accelerationMedian < 0.73
|   |   |   |   |   |   trajectorySimilarityTrain < 166.69
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.07 : train (3.84/1.92)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.07
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.08 : train (1.6/0.64)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.08
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.28 : stationary (1.6/0.96)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.28
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.73 : train (10.91/1.12)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.73
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.38 : train (24.67/0.89)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.63
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.23 : train (9.78/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.23 : train (103.82/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.63 : tram (0.3/0)
|   |   |   |   |   |   trajectorySimilarityTrain >= 166.69
|   |   |   |   |   |   |   maximumTravelDistance < 18.02 : bus (12.57/1.36)
|   |   |   |   |   |   |   maximumTravelDistance >= 18.02
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.58 : bus (0.51/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.58
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.89
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.19 : train (29.72/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.19 : train (19.62/0.92)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.89 : bike (0.41/0.21)
|   |   |   |   |   accelerationMedian >= 0.73
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.67 : car (15.69/0.45)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.67 : car (54.34/0)
|   accelerationFrequencyBandEnergy27To28Hz >= 0.23
|   |   highSpeedPointRatio < 0.71
|   |   |   speedMax < 12.58
|   |   |   |   speedVariance < 1.06
|   |   |   |   |   headingVariance < 0.83 : bus (34.37/1.88)
|   |   |   |   |   headingVariance >= 0.83
|   |   |   |   |   |   accelerationMax < 7.14
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.5 : bus (20/1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.5
|   |   |   |   |   |   |   |   accelerationVariance < 0.06 : tram (2.06/0.06)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : train (0.29/0.03)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : car (2.52/0.49)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.57 : car (35.71/0.06)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.57 : car (36.78/0.52)
|   |   |   |   |   |   accelerationMax >= 7.14 : stationary (29.68/19.68)
|   |   |   |   speedVariance >= 1.06
|   |   |   |   |   trajectorySimilarityTram < 406.11 : tram (33.33/3.3)
|   |   |   |   |   trajectorySimilarityTram >= 406.11
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.2
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.05
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 91.53
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.64
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.48
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.3 : train (0.72/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.25 : bus (12.48/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.25
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.39 : bus (98.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.39 : bus (1.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.69 : bus (13.48/0.36)
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.48
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.96 : bus (13.06/5.06)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.42
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : bus (8.58/0.58)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.05 : bus (39.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.05 : bus (2.19/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.42 : bus (5.13/2.06)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.66
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.69 : bus (23.18/5.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 306.82 : car (38.37/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 306.82 : bus (3.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.05 : car (20.62/7.47)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.05
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.6
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.02 : bus (60.34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.02 : bus (7.75/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.6 : bus (35.05/1.6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.49 : bus (4.13/1.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.14 : car (2/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.66
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.34 : bus (37.56/2.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.87 : bus (76.46/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.87 : bus (3.37/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.23 : bus (3.1/1.1)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.13 : train (0.73/0)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.96 : car (1.05/0.02)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 91.53
|   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.01
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 7.19 : bus (37.07/0.7)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 7.19 : car (28.83/8.5)
|   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.01
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.58
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.98
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.55 : car (21.22/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.55 : car (20.13/0.02)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.98 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.58 : car (18.34/5.82)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.05
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.93
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.97 : bus (59.91/0)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.97 : bus (25.61/0.69)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.93 : train (3/-0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.2
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.97
|   |   |   |   |   |   |   |   speedMedian < 7.9
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.28 : car (10.18/2)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.28
|   |   |   |   |   |   |   |   |   |   accelerationMax < 8.46 : car (57.05/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 8.46 : car (1.44/0.36)
|   |   |   |   |   |   |   |   speedMedian >= 7.9 : bus (18.83/7.78)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.97
|   |   |   |   |   |   |   |   speed75Quantile < 6.7 : car (8.32/0.13)
|   |   |   |   |   |   |   |   speed75Quantile >= 6.7
|   |   |   |   |   |   |   |   |   accelerationMax < 5.2 : car (14/4)
|   |   |   |   |   |   |   |   |   accelerationMax >= 5.2
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 5.09 : bus (30/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 5.09 : bus (37.13/1.88)
|   |   |   speedMax >= 12.58
|   |   |   |   trajectorySimilarityTram < 222.62 : tram (11.46/0.45)
|   |   |   |   trajectorySimilarityTram >= 222.62
|   |   |   |   |   travelDistance < 669.82
|   |   |   |   |   |   maximumTravelDistance < 16.2
|   |   |   |   |   |   |   accelerationVariance < 0.34
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 85.86
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.99
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 849.68
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.87 : bus (32.6/1.52)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.87 : car (16.58/1)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 849.68
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 13.41
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.64 : car (6.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.28 : car (19.52/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.28 : car (21.44/0)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 13.41 : bus (27.66/9.62)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.99
|   |   |   |   |   |   |   |   |   |   speedMax < 16.01
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.27
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 8.86 : bus (44.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 8.86 : car (0.25/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.27 : car (0.7/0)
|   |   |   |   |   |   |   |   |   |   speedMax >= 16.01 : car (2.06/0.02)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 85.86
|   |   |   |   |   |   |   |   |   speedMax < 15.79
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.34 : train (0.24/0.06)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.65 : car (10.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.65
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.54 : car (32.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.54
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.15 : car (7.42/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.38 : car (3.21/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.4 : car (35.48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.4 : car (8.54/0.03)
|   |   |   |   |   |   |   |   |   speedMax >= 15.79 : car (7.19/1.05)
|   |   |   |   |   |   |   accelerationVariance >= 0.34
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.37 : bus (36.29/0.93)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.37 : car (17.68/8.34)
|   |   |   |   |   |   maximumTravelDistance >= 16.2
|   |   |   |   |   |   |   speedMax < 18.42
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.23
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.26
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.85
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.87 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.87
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.26 : train (0.18/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.51 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.51
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.21 : car (38.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.21 : car (6.22/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.88 : car (2.22/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.13 : car (0.26/0.09)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.85 : car (23.67/10.31)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.26
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.48
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.18
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.56 : car (30.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.56 : car (21.75/0.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.38 : bus (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.92 : car (2.31/0.22)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.18 : bus (0.44/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.48 : car (30.4/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.23 : car (14.61/4.61)
|   |   |   |   |   |   |   speedMax >= 18.42
|   |   |   |   |   |   |   |   speedMax < 20.91
|   |   |   |   |   |   |   |   |   headingVariance < 0.85 : bus (14.58/0.37)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.85
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 905.05 : bus (26.04/8.66)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 905.05 : car (21.87/2.44)
|   |   |   |   |   |   |   |   speedMax >= 20.91 : car (16.66/0.34)
|   |   |   |   |   travelDistance >= 669.82 : train (9.37/4.33)
|   |   highSpeedPointRatio >= 0.71
|   |   |   trajectorySimilarityTrain < 220.6
|   |   |   |   speed95Quantile < 21.48
|   |   |   |   |   speedMean < 14.67 : car (34.37/9.69)
|   |   |   |   |   speedMean >= 14.67
|   |   |   |   |   |   accelerationMedian < 0.9
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.3 : train (0.33/0.03)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.3
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.25 : car (0.83/0.18)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.25
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.11
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.73
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.35 : bus (9.05/0.03)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.35 : bus (48.43/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.73 : bus (26.16/0.61)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.11 : car (0.18/0.08)
|   |   |   |   |   |   accelerationMedian >= 0.9 : car (13.96/2.38)
|   |   |   |   speed95Quantile >= 21.48
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.61
|   |   |   |   |   |   speedMax < 23.24 : car (3.07/0.03)
|   |   |   |   |   |   speedMax >= 23.24
|   |   |   |   |   |   |   accelerationVariance < 0.13
|   |   |   |   |   |   |   |   accelerationMean < 0.74
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.41 : train (8.07/0.02)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.41
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.27 : train (3.07/0.02)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.27 : train (37/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.74 : car (0.26/0.09)
|   |   |   |   |   |   |   accelerationVariance >= 0.13 : train (4.84/0.7)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.61
|   |   |   |   |   |   headingVariance < 0.63 : car (16/7.57)
|   |   |   |   |   |   headingVariance >= 0.63 : car (24.54/0.87)
|   |   |   trajectorySimilarityTrain >= 220.6
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.44 : train (16.08/4.51)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.44
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.19
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.15
|   |   |   |   |   |   |   speedMedian < 15.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.88
|   |   |   |   |   |   |   |   |   accelerationMean < 0.83
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.74 : bus (19.29/3.6)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.74
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 499 : bus (5.17/0.08)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 499
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.92 : car (15.51/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.92 : bus (24.81/12.38)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.83
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.94 : car (31.79/0.79)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.94 : car (26.99/0.3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.88
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 33.77 : car (18.48/7.07)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 33.77
|   |   |   |   |   |   |   |   |   |   speed50Quantile < 11.54 : car (4.11/2.02)
|   |   |   |   |   |   |   |   |   |   speed50Quantile >= 11.54
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 7.99
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.88
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.62 : car (107.77/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.57 : car (0.53/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.69 : car (18.62/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.69 : car (42.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.88 : bus (0.35/0.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.99 : car (19.51/2.18)
|   |   |   |   |   |   |   speedMedian >= 15.76
|   |   |   |   |   |   |   |   accelerationVariance < 0.42
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.82
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 722.63 : bus (4.89/0.54)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 722.63 : car (35.47/3.95)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.82
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.74
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.31 : bus (0.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81 : bus (1.23/0.41)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.17 : car (144.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.17 : car (25.68/0.41)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.34 : bus (0.82/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.74 : car (1153.26/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.42 : bus (12.4/5.04)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.15
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.73
|   |   |   |   |   |   |   |   speed75Quantile < 27.9 : bus (39.92/0)
|   |   |   |   |   |   |   |   speed75Quantile >= 27.9 : car (1.17/0.17)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.73
|   |   |   |   |   |   |   |   speed95Quantile < 24.84 : car (17/6)
|   |   |   |   |   |   |   |   speed95Quantile >= 24.84 : car (51/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.19
|   |   |   |   |   |   speed50Quantile < 24.35
|   |   |   |   |   |   |   speedMedian < 19.8
|   |   |   |   |   |   |   |   accelerationMin < 0.04 : bus (15.13/5.14)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04 : car (27.52/3.55)
|   |   |   |   |   |   |   speedMedian >= 19.8
|   |   |   |   |   |   |   |   speedMax < 24.17
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.38
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.42
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.97
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.12 : bus (41.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.12 : car (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.97 : train (1.36/0.51)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.42 : car (1.54/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.38 : car (6.71/1.02)
|   |   |   |   |   |   |   |   speedMax >= 24.17 : car (5.61/0.35)
|   |   |   |   |   |   speed50Quantile >= 24.35
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.94 : bus (2.14/0.89)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.94
|   |   |   |   |   |   |   |   accelerationMean < 1.46
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 2.48 : car (48.49/0)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 2.48 : car (2.18/0.18)
|   |   |   |   |   |   |   |   accelerationMean >= 1.46 : bus (1.07/-0)
accelerationVariance >= 1.29
|   speedMax < 3.15
|   |   accelerationMedian < 2.29
|   |   |   trajectorySimilarityTrain < 726.74
|   |   |   |   accelerationVariance < 2.63 : bus (10.76/3.64)
|   |   |   |   accelerationVariance >= 2.63
|   |   |   |   |   accelerationMin < 0.04 : walk (54.12/0)
|   |   |   |   |   accelerationMin >= 0.04 : bike (6.16/2)
|   |   |   trajectorySimilarityTrain >= 726.74 : stationary (12.46/4.46)
|   |   accelerationMedian >= 2.29 : walk (1697.83/0)
|   speedMax >= 3.15
|   |   speedMean < 8.18
|   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.1
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.16
|   |   |   |   |   accelerationMin < 0.1
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 19.31 : bike (16.73/3.36)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 19.31 : bike (24.37/0)
|   |   |   |   |   accelerationMin >= 0.1 : bike (781.75/0)
|   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.16 : bike (2/0)
|   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.1
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 2.64 : walk (27.78/13.24)
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 2.64
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 3.58
|   |   |   |   |   |   acceleration50Quantile < 0.15 : bus (3/0)
|   |   |   |   |   |   acceleration50Quantile >= 0.15 : bike (90.24/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 3.58
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 13.35
|   |   |   |   |   |   |   acceleration75Quantile < 4.72 : walk (18.44/8)
|   |   |   |   |   |   |   acceleration75Quantile >= 4.72 : walk (24/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 13.35
|   |   |   |   |   |   |   accelerationMean < 5.21 : bike (89.12/0)
|   |   |   |   |   |   |   accelerationMean >= 5.21 : walk (9.46/2)
|   |   speedMean >= 8.18
|   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.34 : train (2.32/0.32)
|   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.34
|   |   |   |   acceleration50Quantile < 3.47
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 3.28 : bus (38.19/0.1)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 3.28 : bus (4.56/0.56)
|   |   |   |   acceleration50Quantile >= 3.47 : walk (1.72/0.05)

Size of the tree : 521


RandomTree
==========

accelerationFrequencyBandEnergy1To3Hz < 6.31
|   accelerationFrequencyBandEnergy10To14Hz < 1.3
|   |   accelerationMean < 0.1
|   |   |   accelerationMedian < 0.04
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.25
|   |   |   |   |   speed25Quantile < 0.08
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.03
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.04 : stationary (50.93/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.04 : stationary (38/8)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.03
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04 : stationary (447.41/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.04 : stationary (3.95/1.97)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.05 : stationary (8.97/0.99)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.05 : stationary (42.88/0)
|   |   |   |   |   speed25Quantile >= 0.08 : train (7.85/2.81)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.25 : stationary (35/16)
|   |   |   accelerationMedian >= 0.04
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.04
|   |   |   |   |   accelerationVariance < 0.01
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.18
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.13 : train (9/1)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.13 : train (42/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.18 : train (5/1)
|   |   |   |   |   accelerationVariance >= 0.01 : car (2/0)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.11 : train (18/10)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.11 : stationary (26/0)
|   |   accelerationMean >= 0.1
|   |   |   trajectorySimilarityTram < 197.56
|   |   |   |   accelerationVariance < 0.07
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : tram (27.35/8.35)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.24 : train (0.98/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.24
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.37
|   |   |   |   |   |   |   |   accelerationMedian < 0.29
|   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : train (0.82/0)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.34 : tram (116/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.34
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.21 : tram (8.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.31 : tram (51/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.31 : tram (6.33/0.33)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.29 : tram (1.98/0.98)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.37 : train (1.15/0.49)
|   |   |   |   accelerationVariance >= 0.07 : tram (9.22/6.22)
|   |   |   trajectorySimilarityTram >= 197.56
|   |   |   |   maximumTravelDistance < 14.88
|   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   trajectorySimilarityTrain < 874.66
|   |   |   |   |   |   |   trajectorySimilarityBus < 40.58
|   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.13
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.08 : bus (19.35/6.35)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.08 : bus (34/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.13 : train (38.25/11)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04 : bus (33/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 40.58 : train (42.32/0)
|   |   |   |   |   |   trajectorySimilarityTrain >= 874.66
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.51
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.32 : train (17.44/4)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.32
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.09 : train (3/1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.09 : train (55.53/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.51 : car (6.32/0.32)
|   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   |   |   headingVariance < 4.48
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.32
|   |   |   |   |   |   |   |   |   speedMin < 2.52
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.58 : train (11/5)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.58 : bus (37.13/19.69)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.09 : car (7.44/1.44)
|   |   |   |   |   |   |   |   |   speedMin >= 2.52 : train (18.87/1.48)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.32 : bus (26.55/11.71)
|   |   |   |   |   |   |   headingVariance >= 4.48
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 82.97
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.23
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 718.4 : bus (38.09/4.98)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 718.4 : car (37.06/13.06)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.23
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.77
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.39 : bus (34.29/2.57)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.39
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.9 : bus (2.07/1.07)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.44 : bus (50.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.44 : bus (1.21/0.21)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.77 : bus (18.64/7.64)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 82.97 : car (27.35/1.1)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   speedMax < 2.17
|   |   |   |   |   |   |   |   speed95Quantile < 0.45
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 508.12 : train (14.73/7.49)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 508.12 : stationary (35.77/6.56)
|   |   |   |   |   |   |   |   speed95Quantile >= 0.45
|   |   |   |   |   |   |   |   |   accelerationVariance < 1.89 : stationary (37.08/1.83)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 1.89 : walk (5/0)
|   |   |   |   |   |   |   speedMax >= 2.17 : car (7.36/1.29)
|   |   |   |   maximumTravelDistance >= 14.88
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.26
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.32 : train (341.25/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.32 : train (24.18/5.71)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.26
|   |   |   |   |   |   speed50Quantile < 11.16
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.16 : train (13.45/3.6)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.16 : car (27.36/6.11)
|   |   |   |   |   |   speed50Quantile >= 11.16
|   |   |   |   |   |   |   accelerationVariance < 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.38 : train (46.75/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.38 : train (8.61/0.69)
|   |   |   |   |   |   |   accelerationVariance >= 0.06 : train (20.43/5.28)
|   accelerationFrequencyBandEnergy10To14Hz >= 1.3
|   |   speed95Quantile < 12.19
|   |   |   accelerationMedian < 0.41
|   |   |   |   speed95Quantile < 4.07
|   |   |   |   |   trajectorySimilarityTrain < 584.15 : walk (15.6/8.55)
|   |   |   |   |   trajectorySimilarityTrain >= 584.15
|   |   |   |   |   |   accelerationMean < 0.2 : stationary (19/0)
|   |   |   |   |   |   accelerationMean >= 0.2
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.24 : train (8/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.24 : stationary (35.41/8.41)
|   |   |   |   speed95Quantile >= 4.07
|   |   |   |   |   trajectorySimilarityBus < 150.95
|   |   |   |   |   |   speed75Quantile < 8.25
|   |   |   |   |   |   |   acceleration95Quantile < 0.45
|   |   |   |   |   |   |   |   accelerationVariance < 0.12 : bus (20.46/6.11)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.12
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 511.45 : tram (2.06/0.06)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 511.45
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.33 : bus (39.79/1.34)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.33 : car (9.67/4.67)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.45
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.51 : bus (28.17/1.82)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.51 : car (36.12/15.12)
|   |   |   |   |   |   speed75Quantile >= 8.25
|   |   |   |   |   |   |   accelerationMax < 1.76 : train (2.05/1)
|   |   |   |   |   |   |   accelerationMax >= 1.76
|   |   |   |   |   |   |   |   travelDistance < 412.71
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.87
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.29 : train (0.45/0.07)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.29
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.26 : train (0.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.59 : bus (1.15/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.48 : bus (52.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.48 : bus (25.37/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.01 : bus (2.15/0.15)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : train (0.15/-0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.87 : bus (2.3/0.3)
|   |   |   |   |   |   |   |   travelDistance >= 412.71 : tram (1.03/0.03)
|   |   |   |   |   trajectorySimilarityBus >= 150.95 : tram (27.05/15)
|   |   |   accelerationMedian >= 0.41
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.24
|   |   |   |   |   speedMean < 0.5 : car (24.39/12.86)
|   |   |   |   |   speedMean >= 0.5
|   |   |   |   |   |   trajectorySimilarityTrain < 993.85
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.91
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 201.03
|   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.18
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.12
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.51 : train (0.85/0.24)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.51
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.97 : bus (50/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.97 : bus (15.46/0.49)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.12 : bus (34.98/4.37)
|   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.18 : bus (5.39/2.3)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 201.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.68 : bus (17.02/2.02)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.68
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.69
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.14 : car (39/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.14 : bus (4.56/1.56)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.69 : bus (17/3.79)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.91
|   |   |   |   |   |   |   |   accelerationMax < 7.88
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : train (2.07/0.06)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.29 : car (1.32/0.66)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.29
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.29
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.25 : bus (4.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.25 : bus (48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.15 : bus (31.76/2.54)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.29 : bus (225.39/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.96 : bus (4.63/1.76)
|   |   |   |   |   |   |   |   accelerationMax >= 7.88
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.5 : bus (20.64/6.43)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.5 : bus (24.65/1.77)
|   |   |   |   |   |   trajectorySimilarityTrain >= 993.85
|   |   |   |   |   |   |   speed75Quantile < 8
|   |   |   |   |   |   |   |   accelerationMax < 5.3 : car (18.18/8.51)
|   |   |   |   |   |   |   |   accelerationMax >= 5.3 : car (24.23/5.98)
|   |   |   |   |   |   |   speed75Quantile >= 8
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.32 : car (36.57/5.11)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.32
|   |   |   |   |   |   |   |   |   speed50Quantile < 5.25 : car (7.35/0.28)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 5.25
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.45 : car (3.18/0.09)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.45 : bus (38.8/2.74)
|   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.24
|   |   |   |   |   highSpeedPointRatio < 0.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.68
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 5.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.54
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.36 : car (36.97/0.1)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.36
|   |   |   |   |   |   |   |   |   |   accelerationMax < 6.17 : car (32.82/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 6.17 : bus (7.32/0.32)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.54 : bus (3/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 5.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 6.21 : bus (32.03/9.62)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 6.21 : car (10/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.68 : bike (5.82/0.41)
|   |   |   |   |   highSpeedPointRatio >= 0.25
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.91 : car (8.63/2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.91 : bus (39.62/0.31)
|   |   speed95Quantile >= 12.19
|   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.3
|   |   |   |   speedMax < 21.79
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.37
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.59 : train (37.54/3.06)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.59 : bus (12.71/6.06)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.37
|   |   |   |   |   |   accelerationMax < 2.79 : bus (29.88/9.88)
|   |   |   |   |   |   accelerationMax >= 2.79
|   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.4 : car (25.81/5.81)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.4 : bus (29.35/4)
|   |   |   |   |   |   |   speedMin >= 0.01 : car (29.14/1.14)
|   |   |   |   speedMax >= 21.79
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.09 : car (7.92/2.92)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.09
|   |   |   |   |   |   accelerationVariance < 0.18
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.32
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.16
|   |   |   |   |   |   |   |   |   accelerationMax < 2.78 : train (53.44/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 2.78 : train (4.83/1.22)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.16
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.01 : train (44.89/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.01 : train (6.53/0.61)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.32 : bus (0.61/-0)
|   |   |   |   |   |   accelerationVariance >= 0.18 : bus (3.66/1.53)
|   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.3
|   |   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   |   travelDistance < 1034.32
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.57
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.86
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.83
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.42 : bus (10.68/6.68)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.42
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.46 : car (2/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.93 : bus (47.8/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.93 : car (1.58/-0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.83 : car (37.48/10.23)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.86
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.79
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 217.34 : bus (14.66/1.61)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 217.34
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.92 : bus (1.81/0.61)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.92
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.88 : car (133.48/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.88 : car (0.81/0.2)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.79
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.89
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.46
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 9.92 : car (14.22/5.22)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 9.92
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 534.79 : bus (26.41/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 534.79 : bus (17.27/8.13)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.46
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 781.21
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.91 : bus (27.21/8.21)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06 : car (13.39/4.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.1 : car (3/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.42 : car (26.73/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.42 : car (65.01/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.48 : bus (1/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.86 : bus (17/8)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 781.21 : bus (12.27/0.22)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.89 : car (33.68/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.57
|   |   |   |   |   |   |   accelerationMedian < 0.92
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.13
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.54
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.23
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.61
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.57 : train (1.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63 : bus (3.23/0.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63 : bus (97.51/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.61 : walk (2.25/-0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.23 : bus (6.13/2.23)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.54
|   |   |   |   |   |   |   |   |   |   accelerationMax < 4.14 : bus (13.68/6.68)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.14
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.32 : bus (39.03/0.68)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.32 : bus (5/2)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.13
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.73 : bus (18.45/0.45)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.73
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.14 : car (19.9/1.23)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.14
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 5.11 : bus (30/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 5.11 : car (11/5)
|   |   |   |   |   |   |   accelerationMedian >= 0.92
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.53
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.34
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.78
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.81 : car (17.23/0.23)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.81 : car (62.58/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.78 : car (2.8/1.13)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.34 : bus (6/3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.53 : bus (27.35/0.45)
|   |   |   |   |   travelDistance >= 1034.32
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.42 : bus (4.93/3.46)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.42
|   |   |   |   |   |   |   accelerationMax < 6.48
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.17
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.37 : car (41.23/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.37 : car (3.26/0.26)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.17 : car (95.76/0)
|   |   |   |   |   |   |   accelerationMax >= 6.48 : car (0.98/0.57)
|   |   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   |   speedMax < 35.36
|   |   |   |   |   |   trajectorySimilarityTrain < 801.63
|   |   |   |   |   |   |   accelerationMedian < 0.56 : tram (22.23/9.17)
|   |   |   |   |   |   |   accelerationMedian >= 0.56
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.87
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.23
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.42
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.42 : car (37.28/1.42)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.42 : car (143.86/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.42 : car (3.67/1.49)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.23 : car (16.87/5.74)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.87 : bus (15.19/3.19)
|   |   |   |   |   |   trajectorySimilarityTrain >= 801.63
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.45
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.56
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.58 : train (12.58/4.05)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.58
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.81 : train (3.38/0.38)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.82 : car (10.76/0.76)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.82 : car (31/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.56
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.34
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.6 : car (4.91/1.91)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.6
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.24 : bus (1.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.24
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.94 : car (49.38/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.94 : car (21.38/0.38)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.07 : car (117.87/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.34 : bus (15.22/7.58)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.45
|   |   |   |   |   |   |   |   accelerationVariance < 0.41
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.62 : car (2.29/1.15)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.62
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.02
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.01 : car (127.02/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.01 : bus (0.38/-0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.02 : car (1043.31/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.41 : car (34.22/11.07)
|   |   |   |   |   speedMax >= 35.36
|   |   |   |   |   |   accelerationVariance < 0.24 : train (39.77/0.77)
|   |   |   |   |   |   accelerationVariance >= 0.24 : bus (0.95/0.51)
accelerationFrequencyBandEnergy1To3Hz >= 6.31
|   lowSpeedPointRatio < 0.98
|   |   accelerationFrequencyBandEnergy27To28Hz < 0.15
|   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.43
|   |   |   |   accelerationMedian < 4.72 : bike (804.74/0)
|   |   |   |   accelerationMedian >= 4.72
|   |   |   |   |   accelerationMedian < 4.83 : bike (7.66/1.66)
|   |   |   |   |   accelerationMedian >= 4.83 : bike (74/0)
|   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.43 : car (1.66/0)
|   |   accelerationFrequencyBandEnergy27To28Hz >= 0.15
|   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.7
|   |   |   |   accelerationMedian < 2.63
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.36
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.49 : car (5.83/0.83)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.49
|   |   |   |   |   |   |   speed50Quantile < 6.46 : car (3.47/1.47)
|   |   |   |   |   |   |   speed50Quantile >= 6.46 : bus (45.17/0)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.36 : car (17/3)
|   |   |   |   accelerationMedian >= 2.63 : walk (17.03/0)
|   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.7
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 7.99
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 2.12 : bus (2/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 2.12
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.93 : bike (19.08/0.83)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.93 : bike (105.42/0)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 7.99
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 4.87 : walk (29.49/0)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 4.87
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 10.67 : bus (9/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 10.67
|   |   |   |   |   |   |   acceleration25Quantile < 8.64
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 11.87 : bike (51.42/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 11.87 : bike (16.48/6.65)
|   |   |   |   |   |   |   acceleration25Quantile >= 8.64 : walk (4.15/0)
|   lowSpeedPointRatio >= 0.98
|   |   speedMax < 0.67 : bus (8.53/2.48)
|   |   speedMax >= 0.67
|   |   |   accelerationVariance < 2.37 : bus (19.2/9.89)
|   |   |   accelerationVariance >= 2.37
|   |   |   |   maximumTravelDistance < 12.88
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 11.43
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 10.68
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.9
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.33 : walk (9.89/0.58)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.33 : walk (109.52/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.9 : bike (0.58/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 10.68
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 5.19 : walk (1540.51/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 5.19 : walk (9.58/0.58)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 11.43 : bike (2.16/1)
|   |   |   |   maximumTravelDistance >= 12.88 : walk (8.44/2.01)

Size of the tree : 435


RandomTree
==========

accelerationFrequencyBandEnergy1To3Hz < 6.3
|   acceleration95Quantile < 0.34
|   |   acceleration50Quantile < 0.07
|   |   |   accelerationVariance < 0.01
|   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.16
|   |   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   |   trajectorySimilarityTrain < 539.09 : train (10.54/3.37)
|   |   |   |   |   |   trajectorySimilarityTrain >= 539.09
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.13 : stationary (492.01/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.13 : stationary (36.84/5)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.1 : train (9.85/2.98)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.1 : stationary (31.76/1.96)
|   |   |   |   |   accelerationMedian >= 0.04 : train (11/1)
|   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.16
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.29
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.07 : train (8/3)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.07 : stationary (34/3)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.29 : train (25/1)
|   |   |   accelerationVariance >= 0.01
|   |   |   |   speedVariance < 0.41
|   |   |   |   |   accelerationMax < 1.11 : train (21.26/3)
|   |   |   |   |   accelerationMax >= 1.11
|   |   |   |   |   |   headingVariance < 28.73
|   |   |   |   |   |   |   accelerationVariance < 0.07 : train (31.32/15.32)
|   |   |   |   |   |   |   accelerationVariance >= 0.07 : stationary (11.79/0.79)
|   |   |   |   |   |   headingVariance >= 28.73
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.99 : stationary (39.8/0.52)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.99 : stationary (2.26/0.26)
|   |   |   |   speedVariance >= 0.41
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.28
|   |   |   |   |   |   accelerationMedian < 0.07 : train (20.43/9.96)
|   |   |   |   |   |   accelerationMedian >= 0.07
|   |   |   |   |   |   |   speedVariance < 7.38 : train (20.27/6)
|   |   |   |   |   |   |   speedVariance >= 7.38 : train (22.52/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.28 : train (34.35/22.43)
|   |   acceleration50Quantile >= 0.07
|   |   |   stationaryPointRatio < 0.07
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.51
|   |   |   |   |   speed50Quantile < 15.19
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.66
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.16
|   |   |   |   |   |   |   |   accelerationMax < 0.94 : train (35.33/10)
|   |   |   |   |   |   |   |   accelerationMax >= 0.94 : train (33.28/2.28)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.16
|   |   |   |   |   |   |   |   accelerationMean < 0.37
|   |   |   |   |   |   |   |   |   speedVariance < 12.73
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 285.48
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.64 : tram (20.95/5.95)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.3 : train (0.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.15 : train (0.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.52 : tram (100/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.52 : tram (38.04/1.04)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 285.48 : train (21.02/0)
|   |   |   |   |   |   |   |   |   speedVariance >= 12.73 : train (16.82/1)
|   |   |   |   |   |   |   |   accelerationMean >= 0.37 : bus (8.28/1.64)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.66
|   |   |   |   |   |   |   speed75Quantile < 4.41 : tram (15.67/6.67)
|   |   |   |   |   |   |   speed75Quantile >= 4.41
|   |   |   |   |   |   |   |   highSpeedPointRatio < 0.35 : bus (37.37/11.18)
|   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.35 : tram (10.85/5.85)
|   |   |   |   |   speed50Quantile >= 15.19
|   |   |   |   |   |   lowSpeedPointRatio < 0.13
|   |   |   |   |   |   |   stationaryPointRatio < 0.05
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.52
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.68
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.24
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.16
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.06 : train (0.67/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.06 : train (105.41/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.16 : train (0.67/0.27)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.24 : train (25/0.8)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.68 : train (7.93/0.8)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.52 : train (1.4/0.4)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.05 : tram (1.1/0.1)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.13 : bus (2.2/0.19)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.51
|   |   |   |   |   accelerationMean < 0.45 : car (21.37/9.37)
|   |   |   |   |   accelerationMean >= 0.45
|   |   |   |   |   |   trajectorySimilarityBus < 142.03
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.26
|   |   |   |   |   |   |   |   speedMin < 13.04 : car (34.85/13.22)
|   |   |   |   |   |   |   |   speedMin >= 13.04 : bus (7.62/0.62)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.26
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.8 : bus (11.34/6.07)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.8 : bus (30.8/0.8)
|   |   |   |   |   |   trajectorySimilarityBus >= 142.03
|   |   |   |   |   |   |   accelerationMedian < 0.73 : car (22.46/11.38)
|   |   |   |   |   |   |   accelerationMedian >= 0.73 : car (37.52/0.19)
|   |   |   stationaryPointRatio >= 0.07
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.57
|   |   |   |   |   accelerationMax < 3.57
|   |   |   |   |   |   accumulatedTravelDistance < 122.94
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.26
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.16
|   |   |   |   |   |   |   |   |   speed95Quantile < 0.23
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.33 : train (24.63/3.27)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.33 : train (21.61/7)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 0.23 : bus (29.41/13.24)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.16 : train (37.84/9.44)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.26 : stationary (18.1/1.99)
|   |   |   |   |   |   accumulatedTravelDistance >= 122.94
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.27
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.08 : train (10.35/0.64)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.08 : train (153.39/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.27 : train (27.14/7.89)
|   |   |   |   |   accelerationMax >= 3.57 : bus (35.54/14.54)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.57
|   |   |   |   |   maximumTravelDistance < 12.46
|   |   |   |   |   |   accelerationMean < 0.87
|   |   |   |   |   |   |   speedVariance < 0.45
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.2 : bus (35.24/2.24)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.2 : stationary (21.38/6.21)
|   |   |   |   |   |   |   speedVariance >= 0.45
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.53
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.75
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.16 : train (2.14/0.03)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.16
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.47 : bus (22.95/4.53)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.47
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.31 : train (1.21/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.11 : bus (21.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.11 : bus (33.42/0.42)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.75 : bus (19.26/8.16)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.53
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 8.41 : car (17.06/8.42)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 8.41
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.09 : car (5/0)
|   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62 : bus (6.53/2.32)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 8.25
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.89 : bus (35.63/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.89 : bus (15.84/0.84)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 8.25 : bus (5.21/1.21)
|   |   |   |   |   |   accelerationMean >= 0.87 : car (19.41/13.34)
|   |   |   |   |   maximumTravelDistance >= 12.46
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.24 : train (35.37/17.59)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.24
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.5 : bus (8.2/0.2)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.5
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 823.15 : bus (31.39/13.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 823.15
|   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.53
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.56 : car (33.56/2.28)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.56 : car (18.85/6.28)
|   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.53 : car (23.97/0.28)
|   acceleration95Quantile >= 0.34
|   |   accelerationFrequencyBandEnergy14To20Hz < 2.27
|   |   |   accumulatedTravelDistance < 427.45
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.25
|   |   |   |   |   speedMean < 0.54
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.18 : train (24.22/13.19)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.18 : bus (29.84/3.42)
|   |   |   |   |   |   speedMin >= 0.01 : stationary (30.41/3.29)
|   |   |   |   |   speedMean >= 0.54
|   |   |   |   |   |   accelerationMax < 2.46
|   |   |   |   |   |   |   trajectorySimilarityTram < 237.79 : tram (21.07/2.86)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 237.79
|   |   |   |   |   |   |   |   speed95Quantile < 12.53
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.83
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.18 : car (5/1)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.18
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 43.86 : bus (25.18/9.18)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 43.86 : train (17.23/1.16)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.83 : bus (26.36/5.36)
|   |   |   |   |   |   |   |   speed95Quantile >= 12.53 : train (25.72/1.99)
|   |   |   |   |   |   accelerationMax >= 2.46
|   |   |   |   |   |   |   speedMin < 3.35
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 952.86
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 4.68 : car (5.59/1.56)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 4.68
|   |   |   |   |   |   |   |   |   |   headingVariance < 26.3
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : train (1.12/0.06)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 17.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 2.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.13 : train (0.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.13 : bus (58.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 2.46 : train (1.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.86 : bus (1.77/0.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 17.95 : car (1.13/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.65 : bus (42.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.65 : bus (14.74/2.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.26 : train (1.96/-0)
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.85 : bus (3.36/1.19)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 26.3 : train (3.36/1.18)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 952.86 : bus (38.04/19.2)
|   |   |   |   |   |   |   speedMin >= 3.35 : bike (7.83/3.83)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.25
|   |   |   |   |   speed75Quantile < 9.28
|   |   |   |   |   |   accelerationMax < 1.73 : car (12.08/6.08)
|   |   |   |   |   |   accelerationMax >= 1.73
|   |   |   |   |   |   |   accelerationMean < 0.46 : car (34.62/9.62)
|   |   |   |   |   |   |   accelerationMean >= 0.46
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.91
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.32 : bus (28.08/12.08)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.32
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.21 : bus (7/1)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.21 : bus (92.08/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.91 : car (5/0)
|   |   |   |   |   speed75Quantile >= 9.28
|   |   |   |   |   |   accelerationMax < 4.16
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.41
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.66 : car (35.62/0.21)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.66 : car (6.21/2.21)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.41 : car (13/4)
|   |   |   |   |   |   accelerationMax >= 4.16 : car (14.04/7.04)
|   |   |   accumulatedTravelDistance >= 427.45
|   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.75
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.27
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.14 : train (37.02/0.25)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.14 : train (26.05/9.76)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.27
|   |   |   |   |   |   accelerationMedian < 0.58
|   |   |   |   |   |   |   accelerationMax < 2.79
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.4 : train (12.76/0.76)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.4 : train (49.58/0)
|   |   |   |   |   |   |   accelerationMax >= 2.79 : train (17.3/2.54)
|   |   |   |   |   |   accelerationMedian >= 0.58 : walk (1.51/0.51)
|   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.75
|   |   |   |   |   speed25Quantile < 17.65
|   |   |   |   |   |   acceleration25Quantile < 0.86 : train (29.92/10.33)
|   |   |   |   |   |   acceleration25Quantile >= 0.86 : car (11.89/0.59)
|   |   |   |   |   speed25Quantile >= 17.65 : train (30.02/1.38)
|   |   accelerationFrequencyBandEnergy14To20Hz >= 2.27
|   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   travelDistance < 1036.71
|   |   |   |   |   trajectorySimilarityTram < 987.1
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.85 : tram (10.73/2.64)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.85 : car (34.92/0.29)
|   |   |   |   |   trajectorySimilarityTram >= 987.1
|   |   |   |   |   |   accelerationVariance < 0.41
|   |   |   |   |   |   |   trajectorySimilarityTrain < 955.23
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.51
|   |   |   |   |   |   |   |   |   speed95Quantile < 24.31
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.46
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.18 : bus (18.31/6.09)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.18 : car (30.09/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.15
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 2.42 : bus (2.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.42
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.29 : bus (7.22/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.29 : bus (110/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.34 : bus (4.65/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.22 : bus (9.44/1.44)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.22 : bus (82.87/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.15
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.38 : car (4.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.52 : car (10.65/3)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.77
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1 : bus (42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1 : bus (12.82/0.82)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.77 : car (2.27/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.47 : car (35.44/5)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 18.93 : bus (34.95/7.72)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 18.93 : bus (28.79/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.91 : bus (86.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.29 : bus (25.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.29 : car (30.87/11)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.96 : car (21.48/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 24.31 : car (12.34/2.08)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.51
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.71
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.09 : car (32.97/10.22)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.09 : bus (30.86/2.6)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.71 : car (38.97/0.15)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 955.23
|   |   |   |   |   |   |   |   speed95Quantile < 16.37
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.07
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.87
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.53
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.46 : car (14.85/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.46 : car (41.67/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.53 : bus (2/1)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.87
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 15.51
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 11.23 : car (34.65/6.2)
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 11.23 : bus (19.36/3.33)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 15.51 : car (20.38/0.12)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.07 : bus (34.64/4.03)
|   |   |   |   |   |   |   |   speed95Quantile >= 16.37
|   |   |   |   |   |   |   |   |   speedMedian < 18.66
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.35
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.57 : car (8.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : car (32.01/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.08 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.06 : car (6.16/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.5 : car (25.8/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.5 : car (38.28/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.35 : bus (0.48/0.16)
|   |   |   |   |   |   |   |   |   speedMedian >= 18.66
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.22
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.23 : car (26.27/7.43)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.23 : car (23.36/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.22 : bus (13.07/0.07)
|   |   |   |   |   |   accelerationVariance >= 0.41
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 6.53
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.55 : bus (39.51/22.75)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.55
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.14
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : car (8/2)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.32 : bus (36.09/0.84)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.32 : bus (13.12/5.31)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.14
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 156.1 : bus (4.26/2.13)
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 156.1
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3 : train (1.09/0.36)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 51.74
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.42 : bus (11.79/0.79)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.42
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.32 : bus (6.53/0.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.32 : bus (42.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 51.74 : bus (23.1/3.4)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 6.53 : bus (7.38/4.38)
|   |   |   |   travelDistance >= 1036.71
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.47 : train (12.17/4.26)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.47
|   |   |   |   |   |   accelerationMean < 1.44
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.46 : car (121.15/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.46
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.36 : car (6.48/0.48)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.36
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.34 : car (4.12/0.12)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.34 : car (52.79/0)
|   |   |   |   |   |   accelerationMean >= 1.44 : bus (0.42/0.12)
|   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   speed75Quantile < 34.7
|   |   |   |   |   speed25Quantile < 7.94
|   |   |   |   |   |   trajectorySimilarityTram < 151.31 : tram (7.26/0.25)
|   |   |   |   |   |   trajectorySimilarityTram >= 151.31
|   |   |   |   |   |   |   speedMax < 9.45 : car (37.35/16.64)
|   |   |   |   |   |   |   speedMax >= 9.45
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 253.39
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 19.23 : car (36.31/2.62)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 19.23 : train (8.3/0.26)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 253.39
|   |   |   |   |   |   |   |   |   speedMax < 12.4 : car (13.49/2.23)
|   |   |   |   |   |   |   |   |   speedMax >= 12.4
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.45 : train (0.2/0.08)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.45
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.7
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.85 : car (21.37/0.9)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 2.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 1.77
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.82 : car (41.76/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.82 : car (27.56/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 1.77 : car (0.08/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 2.7 : bus (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.35 : walk (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.7 : bus (0.28/0.03)
|   |   |   |   |   speed25Quantile >= 7.94
|   |   |   |   |   |   accelerationMax < 7.42
|   |   |   |   |   |   |   speedMax < 34.44
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.59
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.07
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.56 : car (6.41/1.41)
|   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.86 : car (6.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.86 : car (65/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.07 : car (3.88/1.88)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.59
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.72
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.3
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.8 : car (93.57/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.8 : bus (4.35/2)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.3 : bus (2.47/0)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.72
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.13 : bus (0.47/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.13
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 2.38
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.26 : car (22.94/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.85 : car (268.86/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.85 : car (18.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.15 : car (901.45/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 2.38 : car (13.94/0.94)
|   |   |   |   |   |   |   speedMax >= 34.44 : car (7.17/3.05)
|   |   |   |   |   |   accelerationMax >= 7.42
|   |   |   |   |   |   |   accelerationVariance < 0.4
|   |   |   |   |   |   |   |   accelerationMin < 0.04 : train (8.3/4.3)
|   |   |   |   |   |   |   |   accelerationMin >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.86 : train (0.47/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.86 : car (87.42/0)
|   |   |   |   |   |   |   accelerationVariance >= 0.4 : bus (28.04/12.43)
|   |   |   |   speed75Quantile >= 34.7 : train (37.35/1.16)
accelerationFrequencyBandEnergy1To3Hz >= 6.3
|   speedMax < 4.53
|   |   acceleration75Quantile < 0.04 : stationary (6/2)
|   |   acceleration75Quantile >= 0.04
|   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.38 : walk (32.99/9.79)
|   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.38
|   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 2.48 : walk (17.93/5.34)
|   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 2.48
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 6.2 : walk (1327.95/0)
|   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 6.2
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 6.21 : bike (0.59/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 6.21 : walk (307.4/0)
|   speedMax >= 4.53
|   |   speed95Quantile < 9.32
|   |   |   accelerationFrequencyBandEnergy8To10Hz < 8
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.81
|   |   |   |   |   accelerationMin < 0.1
|   |   |   |   |   |   acceleration50Quantile < 5.22
|   |   |   |   |   |   |   accelerationMax < 12.78 : bike (13.16/0.77)
|   |   |   |   |   |   |   accelerationMax >= 12.78 : bike (28.77/0)
|   |   |   |   |   |   acceleration50Quantile >= 5.22 : bike (12.54/1.54)
|   |   |   |   |   accelerationMin >= 0.1 : bike (773.77/0)
|   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.81
|   |   |   |   |   accelerationMean < 4.41
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.45 : walk (7.7/4.62)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.45
|   |   |   |   |   |   |   lowSpeedPointRatio < 0.89 : bike (149.77/0)
|   |   |   |   |   |   |   lowSpeedPointRatio >= 0.89 : bus (1.01/0.01)
|   |   |   |   |   accelerationMean >= 4.41 : walk (4.24/0)
|   |   |   accelerationFrequencyBandEnergy8To10Hz >= 8
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 12.14 : walk (37.74/0)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 12.14
|   |   |   |   |   accelerationMean < 5.12
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 10.94 : walk (0.39/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 10.94 : bike (65.39/0)
|   |   |   |   |   accelerationMean >= 5.12 : walk (18.48/5)
|   |   speed95Quantile >= 9.32
|   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.31 : bike (20.32/0.17)
|   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.31
|   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 4.58 : car (10.09/0)
|   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 4.58
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 10.9
|   |   |   |   |   |   speed75Quantile < 24.95
|   |   |   |   |   |   |   accelerationMedian < 2.66
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 6.48
|   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.56 : bus (3.03/0.03)
|   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.56 : bus (41.2/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 6.48 : bus (4.09/0.09)
|   |   |   |   |   |   |   accelerationMedian >= 2.66 : walk (1.68/0)
|   |   |   |   |   |   speed75Quantile >= 24.95 : car (1.04/0.04)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 10.9 : walk (2.77/0.06)

Size of the tree : 471



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.31 (    12)  trajectorySimilarityTram
      0.28 (     6)  speedMin
      0.27 (    11)  speed95Quantile
      0.26 (    16)  accelerationFrequencyBandEnergy25To27Hz
      0.25 (    14)  trajectorySimilarityBus
      0.24 (    10)  speed75Quantile
      0.24 (     8)  speed50Quantile
      0.24 (     5)  highSpeedPointRatio
      0.23 (     7)  speedMedian
      0.23 (     3)  mediumSpeedPointRatio
      0.23 (    21)  trajectorySimilarityTrain
      0.22 (    19)  speedMax
      0.21 (     6)  accumulatedTravelDistance
      0.21 (     8)  headingVariance
      0.2  (     7)  speedVariance
      0.2  (    16)  maximumTravelDistance
      0.2  (    10)  lowSpeedPointRatio
      0.19 (    31)  accelerationFrequencyBandEnergy25To30Hz
      0.18 (    35)  accelerationFrequencyBandEnergy1To3Hz
      0.17 (    38)  accelerationMedian
      0.17 (    41)  accelerationVariance
      0.17 (    27)  accelerationMean
      0.16 (    27)  accelerationFrequencyBandEnergy27To28Hz
      0.16 (     5)  speedMean
      0.15 (    27)  accelerationFrequencyBandEnergy8To9Hz
      0.15 (    29)  accelerationMax
      0.13 (    21)  accelerationFrequencyBandEnergy14To20Hz
      0.13 (    23)  accelerationFrequencyBandEnergy22To25Hz
      0.13 (    27)  accelerationFrequencyBandEnergy8To10Hz
      0.13 (    34)  accelerationFrequencyBandEnergy10To14Hz
      0.12 (    32)  accelerationFrequencyBandEnergy9To10Hz
      0.12 (    14)  accelerationMin
      0.11 (    36)  accelerationFrequencyBandEnergy28To30Hz
      0.11 (    17)  acceleration50Quantile
      0.1  (    16)  acceleration95Quantile
      0.1  (     7)  travelDistance
      0.1  (     3)  speed25Quantile
      0.09 (     3)  stationaryPointRatio
      0.08 (    14)  acceleration25Quantile
      0.07 (    15)  accelerationFrequencyBandEnergy20To22Hz
      0.04 (    11)  acceleration75Quantile
      0    (     0)  stoppages30To90s
      0    (     0)  stoppages5To15s
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages0To5s

=== Classifier model (training fold 5) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

accelerationFrequencyBandEnergy27To28Hz < 0.29
|   acceleration25Quantile < 0.86
|   |   accelerationFrequencyBandEnergy9To10Hz < 0.04
|   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.23
|   |   |   |   trajectorySimilarityTrain < 374.38 : train (15.28/8.26)
|   |   |   |   trajectorySimilarityTrain >= 374.38
|   |   |   |   |   accelerationMax < 0.13 : stationary (326.93/0)
|   |   |   |   |   accelerationMax >= 0.13
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.02
|   |   |   |   |   |   |   accelerationMax < 0.45 : stationary (39/4)
|   |   |   |   |   |   |   accelerationMax >= 0.45 : train (3/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.02
|   |   |   |   |   |   |   acceleration25Quantile < 0.04 : stationary (129.06/0)
|   |   |   |   |   |   |   acceleration25Quantile >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 21.92 : stationary (2.65/1.03)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 21.92
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.05 : stationary (54.62/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.05 : stationary (19.46/0.94)
|   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.23
|   |   |   |   accelerationVariance < 0.57 : train (23/3)
|   |   |   |   accelerationVariance >= 0.57 : bike (40/0)
|   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   maximumTravelDistance < 17.73
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.78
|   |   |   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   |   |   accelerationMax < 2.28
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 25.25 : bus (12.65/5.65)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 25.25
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.04 : stationary (1.55/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.21 : car (2.26/0.26)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.08 : train (3.26/0.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.08 : train (98.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.27 : car (1/-0)
|   |   |   |   |   |   |   |   accelerationMax >= 2.28 : stationary (4.04/-0)
|   |   |   |   |   |   |   accelerationVariance >= 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.28
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.51 : bus (23.4/1.99)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.51 : train (24.51/10.48)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.28
|   |   |   |   |   |   |   |   |   accelerationMean < 0.2 : car (19/2)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.2 : bus (30.87/16.87)
|   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.78
|   |   |   |   |   |   |   speedMedian < 1.1
|   |   |   |   |   |   |   |   accelerationMedian < 0.36
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.33 : bus (21.16/7.16)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.33
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.06 : train (4.62/1)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.06
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 1
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 932.93 : car (20.98/7.98)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 932.93 : car (20.98/0.98)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1 : bus (8/0)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.36
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.48
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.6
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.21 : train (1.39/0.46)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.54 : bus (16.54/1.73)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.54 : bus (34.35/0.23)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.6 : car (4.5/1.16)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.48 : car (6/3)
|   |   |   |   |   |   |   speedMedian >= 1.1
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.77
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.06 : car (3.18/1.18)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.82
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.17 : train (3.69/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.1 : train (3.38/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.65 : bus (11.04/5.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.65
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.37 : bus (28.36/0.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.74 : bus (3.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.06 : bus (36.9/0.6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.06 : bus (29/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.9 : bus (4.45/0.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.45 : train (0.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.45 : bus (12.4/2.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : bus (28.34/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : bus (11.68/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.56 : bus (23.51/3.51)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.82 : car (2.84/1.34)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.77 : tram (5.41/1.37)
|   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   trajectorySimilarityTram < 273.11
|   |   |   |   |   |   |   accelerationMin < 0.03
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.24 : bus (2.57/1.52)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.24
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.08 : stationary (2.69/1.05)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.08
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.34
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.14 : tram (26.21/4.21)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.1 : tram (6.35/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.28 : tram (23/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.28 : tram (17.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.14 : tram (121/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.28 : tram (10.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.34 : train (2.64/1)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.34 : train (2.57/1.52)
|   |   |   |   |   |   |   accelerationMin >= 0.03 : tram (14.73/7.56)
|   |   |   |   |   |   trajectorySimilarityTram >= 273.11
|   |   |   |   |   |   |   speedMin < 2.92
|   |   |   |   |   |   |   |   accelerationMedian < 0.23 : train (7.6/0.94)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.23
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.32 : bus (21.37/6.63)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.32
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.86 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.86
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.7
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.64 : bus (1.29/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.33 : train (0.16/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.33
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.02 : bus (42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.02 : bus (6.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.7 : bus (1.29/0.29)
|   |   |   |   |   |   |   speedMin >= 2.92
|   |   |   |   |   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.35
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.22 : train (32.73/0.4)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.22 : train (19.44/1.7)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.35 : bus (21.7/8.66)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.81 : car (14.18/0.04)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   accelerationMedian < 0.06
|   |   |   |   |   |   headingVariance < 4.06
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.08 : train (34.38/13.3)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.08 : train (11.93/0.17)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.16 : stationary (7/0)
|   |   |   |   |   |   headingVariance >= 4.06
|   |   |   |   |   |   |   travelDistance < 6.71
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.05 : train (0.1/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.05
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.08 : stationary (7.68/0.1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.08 : stationary (54.35/0)
|   |   |   |   |   |   |   travelDistance >= 6.71 : car (9.32/4.32)
|   |   |   |   |   accelerationMedian >= 0.06
|   |   |   |   |   |   accelerationMax < 1.92
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.24
|   |   |   |   |   |   |   |   accelerationMax < 1.4
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.08 : bus (9.63/4.63)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.08 : train (39.77/0.97)
|   |   |   |   |   |   |   |   accelerationMax >= 1.4 : bus (30.94/17.16)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.24
|   |   |   |   |   |   |   |   accelerationMean < 0.17 : bus (41/0)
|   |   |   |   |   |   |   |   accelerationMean >= 0.17 : bus (31.11/9.11)
|   |   |   |   |   |   accelerationMax >= 1.92
|   |   |   |   |   |   |   speed50Quantile < 0.09 : bike (38.61/26.61)
|   |   |   |   |   |   |   speed50Quantile >= 0.09
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.28 : train (5.08/0.49)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.28
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.05
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.46
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.16 : stationary (9/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.16
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.73 : stationary (26.24/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.73 : stationary (13.98/0.98)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.46 : bus (1.34/0.85)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.05 : stationary (9.88/4.88)
|   |   |   maximumTravelDistance >= 17.73
|   |   |   |   accelerationMean < 0.76
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.24
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.27 : train (18.75/10.55)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.27
|   |   |   |   |   |   |   accelerationMin < 0.01
|   |   |   |   |   |   |   |   speed95Quantile < 1.79 : stationary (15.32/5.29)
|   |   |   |   |   |   |   |   speed95Quantile >= 1.79
|   |   |   |   |   |   |   |   |   accelerationMax < 2.3
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.15 : stationary (0.24/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.15 : train (41.72/0)
|   |   |   |   |   |   |   |   |   accelerationMax >= 2.3 : train (8.38/3.13)
|   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   accelerationVariance < 0.07 : train (134.03/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.07
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.16 : train (42.89/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.16 : stationary (0.63/-0)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.24
|   |   |   |   |   |   maximumTravelDistance < 20.07
|   |   |   |   |   |   |   speed50Quantile < 12.24 : train (30.36/2.57)
|   |   |   |   |   |   |   speed50Quantile >= 12.24 : train (32.72/15.62)
|   |   |   |   |   |   maximumTravelDistance >= 20.07
|   |   |   |   |   |   |   trajectorySimilarityTrain < 511.13
|   |   |   |   |   |   |   |   accelerationMax < 2.78
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.46 : train (121.72/0)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.46
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.04 : train (42.62/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.04 : train (14.2/0.2)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11 : train (9.61/1.01)
|   |   |   |   |   |   |   |   accelerationMax >= 2.78 : train (25.86/2.83)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 511.13
|   |   |   |   |   |   |   |   travelDistance < 206.17 : car (7.96/0.96)
|   |   |   |   |   |   |   |   travelDistance >= 206.17
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.53
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.43
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.4 : train (35.09/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.4 : train (6.76/0.09)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.43 : train (4.51/0.82)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.53 : car (2/-0)
|   |   |   |   accelerationMean >= 0.76 : car (22.52/1.57)
|   acceleration25Quantile >= 0.86
|   |   accelerationFrequencyBandEnergy10To14Hz < 0.14
|   |   |   speed95Quantile < 2.3 : walk (7.1/0.03)
|   |   |   speed95Quantile >= 2.3
|   |   |   |   accelerationMin < 0.1
|   |   |   |   |   acceleration75Quantile < 5.73
|   |   |   |   |   |   accelerationMedian < 4.25 : bike (54/0)
|   |   |   |   |   |   accelerationMedian >= 4.25 : walk (1.98/0)
|   |   |   |   |   acceleration75Quantile >= 5.73 : walk (9.95/4)
|   |   |   |   accelerationMin >= 0.1 : bike (774.97/0)
|   |   accelerationFrequencyBandEnergy10To14Hz >= 0.14
|   |   |   speed95Quantile < 13.22
|   |   |   |   trajectorySimilarityTrain < 948.58
|   |   |   |   |   speedMean < 0.78 : stationary (13.73/4.66)
|   |   |   |   |   speedMean >= 0.78 : bus (36.98/4.58)
|   |   |   |   trajectorySimilarityTrain >= 948.58 : car (26.41/11.85)
|   |   |   speed95Quantile >= 13.22
|   |   |   |   accelerationVariance < 0.29
|   |   |   |   |   accelerationMean < 0.8 : train (38.53/4.53)
|   |   |   |   |   accelerationMean >= 0.8 : car (6.18/1.18)
|   |   |   |   accelerationVariance >= 0.29
|   |   |   |   |   accelerationMedian < 0.71 : bus (1/0)
|   |   |   |   |   accelerationMedian >= 0.71 : car (64.18/0)
accelerationFrequencyBandEnergy27To28Hz >= 0.29
|   accelerationFrequencyBandEnergy8To10Hz < 4.05
|   |   maximumTravelDistance < 16.41
|   |   |   speedMax < 3.97
|   |   |   |   accelerationVariance < 0.34 : car (31.28/10.31)
|   |   |   |   accelerationVariance >= 0.34
|   |   |   |   |   accelerationMedian < 0.07 : stationary (10/0)
|   |   |   |   |   accelerationMedian >= 0.07 : walk (30.47/18.3)
|   |   |   speedMax >= 3.97
|   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   trajectorySimilarityTram < 884.93 : car (34.11/16.63)
|   |   |   |   |   trajectorySimilarityTram >= 884.93
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.16
|   |   |   |   |   |   |   speed95Quantile < 12.56
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.11 : bus (9.52/4.52)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.11
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.68
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 39.4 : bus (26.86/0.49)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 39.4 : car (29.95/4.68)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.39 : bus (90.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.55 : car (18/9)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.55 : bus (29/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.96 : car (3/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.68
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.76
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 12.29
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.41 : bus (74.49/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.41 : bus (33.97/1.25)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 12.29 : bus (5.12/1.01)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.76 : bus (3.55/1.55)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.61
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.13 : car (30/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 4.82 : bus (22.29/8.03)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.82 : car (29.29/4)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.61
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.46 : car (34.07/14.55)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 977
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.67 : bus (16.23/3)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.8 : bus (59.23/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.8 : bus (19.13/1.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.34 : car (0.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 977 : car (13.29/1.06)
|   |   |   |   |   |   |   speed95Quantile >= 12.56
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.89
|   |   |   |   |   |   |   |   |   speedVariance < 18.78 : bus (23.62/0.39)
|   |   |   |   |   |   |   |   |   speedVariance >= 18.78 : car (34.91/15.8)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.89
|   |   |   |   |   |   |   |   |   headingVariance < 0.4 : bus (15.39/0.21)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.4
|   |   |   |   |   |   |   |   |   |   accelerationMax < 4.77
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.11 : car (36.17/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 15.38
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.07 : car (8.29/2.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.07 : car (39.5/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.4 : bus (3.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 15.38 : bus (10.19/4.13)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 4.77 : bus (31.97/9.86)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.16
|   |   |   |   |   |   |   accelerationMin < 0.01 : bike (5.42/2)
|   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 132.78
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.35
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.74
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.71 : car (17.99/4)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.71 : bus (22.99/6.99)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.74
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.85 : bus (39/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.85 : bus (14/1)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.35
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 1.2
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 657.22
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.06 : bike (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.64 : bus (73.63/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3 : bus (1.66/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 1.44 : bus (45.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 1.44 : bus (2.99/0.66)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 657.22 : car (1.04/0.04)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 1.2 : walk (0.66/0.33)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 132.78 : car (14.73/0.33)
|   |   |   |   accelerationMedian >= 0.81
|   |   |   |   |   speedMax < 11.8
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.54
|   |   |   |   |   |   |   speed25Quantile < 7.88
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 37.41 : train (2.14/0.11)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 37.41
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.98
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.9 : bus (25.29/2.48)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.9 : bus (30.35/0.67)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.98 : car (1.07/0.04)
|   |   |   |   |   |   |   speed25Quantile >= 7.88 : car (8.56/2.35)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.54
|   |   |   |   |   |   |   accelerationVariance < 0.41 : car (31.12/0)
|   |   |   |   |   |   |   accelerationVariance >= 0.41
|   |   |   |   |   |   |   |   speedMedian < 6.03 : car (25.94/5.6)
|   |   |   |   |   |   |   |   speedMedian >= 6.03 : bus (23.86/3.47)
|   |   |   |   |   speedMax >= 11.8
|   |   |   |   |   |   trajectorySimilarityBus < 144.56 : bus (28.61/6.1)
|   |   |   |   |   |   trajectorySimilarityBus >= 144.56
|   |   |   |   |   |   |   speed95Quantile < 11.64 : train (3.18/0.16)
|   |   |   |   |   |   |   speed95Quantile >= 11.64
|   |   |   |   |   |   |   |   accelerationMean < 1.41
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.48
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : train (0.34/0)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.06
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.54 : train (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.54 : car (103.18/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.06
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.88 : bus (0.67/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.14 : car (6.67/0.67)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.14 : car (39.35/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.48 : bus (0.84/0)
|   |   |   |   |   |   |   |   accelerationMean >= 1.41 : bus (1.34/0.5)
|   |   maximumTravelDistance >= 16.41
|   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   maximumTravelDistance < 24.89
|   |   |   |   |   speed50Quantile < 18.73
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.22
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.8
|   |   |   |   |   |   |   |   speedMedian < 6.82 : car (10.68/0.37)
|   |   |   |   |   |   |   |   speedMedian >= 6.82
|   |   |   |   |   |   |   |   |   speed95Quantile < 17.78 : car (16.03/4.56)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 17.78 : bus (25.64/2.36)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.8
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.95
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.75
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.69
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.7 : car (130.48/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.56 : car (36.34/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.56 : car (33.15/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.69 : car (1.19/0.19)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.75 : car (7.48/0.48)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.95 : car (22.05/6.57)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.22
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 2.13
|   |   |   |   |   |   |   |   maximumTravelDistance < 22.73
|   |   |   |   |   |   |   |   |   speedMedian < 9.38 : car (1.05/0.04)
|   |   |   |   |   |   |   |   |   speedMedian >= 9.38
|   |   |   |   |   |   |   |   |   |   speedMedian < 18.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.46
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 1.64 : bus (44.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 1.64 : bus (0.42/0.17)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.46 : bike (0.5/0.25)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 18.09 : bus (3.14/1.05)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 22.73 : car (2.09/0.08)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 2.13 : car (20.25/6.72)
|   |   |   |   |   speed50Quantile >= 18.73
|   |   |   |   |   |   trajectorySimilarityTrain < 751.06
|   |   |   |   |   |   |   acceleration95Quantile < 1.61
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.57 : car (0.36/0.19)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.57
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.53 : car (0.45/0.3)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.53
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.1
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : bus (0.28/0.09)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 2.54
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.65 : train (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.65
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.25 : bus (37.51/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.25 : bus (27.58/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 2.54 : walk (0.04/-0)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.1 : car (0.19/0.04)
|   |   |   |   |   |   |   acceleration95Quantile >= 1.61 : bus (3.21/1.11)
|   |   |   |   |   |   trajectorySimilarityTrain >= 751.06
|   |   |   |   |   |   |   accelerationMax < 4.59 : bus (27.44/10.35)
|   |   |   |   |   |   |   accelerationMax >= 4.59 : car (19.35/0.85)
|   |   |   |   maximumTravelDistance >= 24.89
|   |   |   |   |   accelerationVariance < 0.34
|   |   |   |   |   |   accelerationMax < 1.73 : train (0.14/0)
|   |   |   |   |   |   accelerationMax >= 1.73
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.57 : car (21.81/0.98)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.57 : car (174.68/0)
|   |   |   |   |   accelerationVariance >= 0.34
|   |   |   |   |   |   accelerationMedian < 1.02 : bus (25.56/14.31)
|   |   |   |   |   |   accelerationMedian >= 1.02 : car (37.77/0.49)
|   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   speedMax < 35.74
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 5.16
|   |   |   |   |   |   speedMin < 0.23
|   |   |   |   |   |   |   acceleration95Quantile < 0.18 : train (3.17/0.17)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.18
|   |   |   |   |   |   |   |   accelerationMean < 0.73 : car (18.47/7.21)
|   |   |   |   |   |   |   |   accelerationMean >= 0.73 : car (33.32/1.57)
|   |   |   |   |   |   speedMin >= 0.23
|   |   |   |   |   |   |   acceleration95Quantile < 0.11 : bike (3.55/0.79)
|   |   |   |   |   |   |   acceleration95Quantile >= 0.11
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.03
|   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : car (17.8/12.07)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.03
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.26 : bus (2.76/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.26
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 8.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.53 : car (25.37/1.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.53 : car (30.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.56 : car (126.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.3 : bus (0.39/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 8.13 : car (9.94/3.55)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.3 : train (0.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.3 : car (70.15/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.56 : car (16.15/3.15)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.24 : car (1110.59/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.24 : car (18.79/0.79)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 5.16 : bus (29.32/12.23)
|   |   |   |   speedMax >= 35.74 : train (28.08/1.02)
|   accelerationFrequencyBandEnergy8To10Hz >= 4.05
|   |   accelerationMedian < 3.5
|   |   |   speed75Quantile < 2.92
|   |   |   |   speedMean < 0.19 : bus (10.63/4.44)
|   |   |   |   speedMean >= 0.19
|   |   |   |   |   accelerationMean < 2.51 : walk (6.31/2.1)
|   |   |   |   |   accelerationMean >= 2.51 : walk (54.26/0)
|   |   |   speed75Quantile >= 2.92
|   |   |   |   travelDistance < 321.04
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 4.3 : walk (7.4/3.36)
|   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 4.3
|   |   |   |   |   |   acceleration25Quantile < 2.53 : bike (99.67/0)
|   |   |   |   |   |   acceleration25Quantile >= 2.53
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 4.35 : bike (10.36/0.67)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 4.35 : bike (77/0)
|   |   |   |   travelDistance >= 321.04 : bus (23.38/0.97)
|   |   accelerationMedian >= 3.5
|   |   |   mediumSpeedPointRatio < 0.25 : walk (1617.19/0)
|   |   |   mediumSpeedPointRatio >= 0.25 : bike (22.81/1.81)

Size of the tree : 491


RandomTree
==========

accelerationFrequencyBandEnergy8To10Hz < 4.85
|   accelerationFrequencyBandEnergy20To22Hz < 0.42
|   |   acceleration95Quantile < 0.81
|   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.16
|   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   trajectorySimilarityTrain < 538.44 : train (10.53/3.49)
|   |   |   |   |   trajectorySimilarityTrain >= 538.44
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.01
|   |   |   |   |   |   |   headingVariance < 0.15 : train (11.78/0.78)
|   |   |   |   |   |   |   headingVariance >= 0.15 : stationary (107.08/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.01
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.16 : stationary (361.5/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.16
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04 : stationary (93.4/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04 : stationary (30.71/1.97)
|   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.02
|   |   |   |   |   |   accelerationMedian < 0.86 : train (10/0)
|   |   |   |   |   |   accelerationMedian >= 0.86 : bike (33/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.02 : train (21/9)
|   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.16
|   |   |   |   speedMax < 3.92
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.39
|   |   |   |   |   |   headingVariance < 4.43
|   |   |   |   |   |   |   trajectorySimilarityBus < 11.61 : bus (22.69/12.47)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 11.61
|   |   |   |   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   |   |   |   speedMean < 0.59
|   |   |   |   |   |   |   |   |   |   accelerationMax < 2.76
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.04 : train (22.86/1.14)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.04 : train (67.73/0)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.76 : stationary (0.59/-0)
|   |   |   |   |   |   |   |   |   speedMean >= 0.59 : stationary (1.82/0.11)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : train (32.39/6.79)
|   |   |   |   |   |   headingVariance >= 4.43
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.24
|   |   |   |   |   |   |   |   speedMax < 1.83
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.1
|   |   |   |   |   |   |   |   |   |   accelerationMax < 1.6 : stationary (39.04/3.56)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.6 : stationary (17.47/5.32)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.1
|   |   |   |   |   |   |   |   |   |   travelDistance < 28.13 : stationary (30.64/17.44)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 28.13 : train (19.53/0.25)
|   |   |   |   |   |   |   |   speedMax >= 1.83 : bus (18.66/4.66)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.24
|   |   |   |   |   |   |   |   accelerationMean < 0.46
|   |   |   |   |   |   |   |   |   accelerationMax < 1.68 : stationary (6.97/3.97)
|   |   |   |   |   |   |   |   |   accelerationMax >= 1.68
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.26
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.3 : stationary (40.12/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.3 : stationary (3.19/0.19)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.26 : stationary (39.04/1.67)
|   |   |   |   |   |   |   |   accelerationMean >= 0.46 : bus (19.02/10.46)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.39
|   |   |   |   |   |   speedMedian < 0.11 : bus (39.81/0)
|   |   |   |   |   |   speedMedian >= 0.11 : train (5.1/2.1)
|   |   |   |   speedMax >= 3.92
|   |   |   |   |   trajectorySimilarityTram < 186.68
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.13
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.35
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.08 : tram (8.86/2.86)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.08
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.05 : train (1.14/0.23)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.05
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.41 : train (0.69/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.41
|   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.2 : tram (30.4/2.4)
|   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.11 : train (0.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.11 : tram (19.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.11 : tram (87/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.35 : train (3.03/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.13 : train (10.15/4.31)
|   |   |   |   |   trajectorySimilarityTram >= 186.68
|   |   |   |   |   |   travelDistance < 233.38
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.57
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.04 : bus (21.72/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.04
|   |   |   |   |   |   |   |   |   speedVariance < 13.5
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 3.93
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.11 : train (27.85/3.74)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.11 : train (5.64/0.28)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.11 : car (34.79/16.33)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 3.93
|   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.95 : train (27.28/0.25)
|   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.95 : train (19.79/7.58)
|   |   |   |   |   |   |   |   |   speedVariance >= 13.5
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.16
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.04 : train (7.2/0.69)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.07 : train (7.43/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.07 : train (39.57/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.48 : car (0.17/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.16 : train (9.28/3.54)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.57
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.83
|   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.02 : bus (24.55/12.55)
|   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.02 : car (18.41/0.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.83
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.12
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 13.56
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 160.57
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.23 : train (2.2/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.17 : bus (33.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.17 : bus (7.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.43 : bus (34.03/1.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2 : train (0.41/-0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1 : bus (5.22/2.15)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 160.57 : bus (5.22/2.15)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 13.56 : train (4.18/0.07)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.12 : car (3/-0)
|   |   |   |   |   |   travelDistance >= 233.38
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.98
|   |   |   |   |   |   |   |   acceleration95Quantile < 0.29
|   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.88
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.25
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.21 : stationary (1.71/0.34)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.04 : stationary (2.39/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 3.01 : train (281.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 3.01 : train (34.43/1.36)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.25 : bus (1/0)
|   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.88 : stationary (3.39/2.36)
|   |   |   |   |   |   |   |   acceleration95Quantile >= 0.29
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.79
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.11
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.05 : train (50.73/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.05
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.36 : bus (1.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.17 : train (24.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.17 : train (17.02/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.69 : car (0.68/-0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.11 : train (28.75/4.39)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.79 : bus (9.05/1.34)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.98 : car (23.68/10)
|   |   acceleration95Quantile >= 0.81
|   |   |   accelerationVariance < 0.59
|   |   |   |   acceleration25Quantile < 0.87
|   |   |   |   |   maximumTravelDistance < 12.3 : train (26.21/16.6)
|   |   |   |   |   maximumTravelDistance >= 12.3 : train (22.79/9.4)
|   |   |   |   acceleration25Quantile >= 0.87
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 6.44
|   |   |   |   |   |   acceleration95Quantile < 0.87 : car (2/1)
|   |   |   |   |   |   acceleration95Quantile >= 0.87 : car (51/0)
|   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 6.44 : bike (4/0)
|   |   |   accelerationVariance >= 0.59
|   |   |   |   accumulatedTravelDistance < 162 : walk (21.28/2.15)
|   |   |   |   accumulatedTravelDistance >= 162
|   |   |   |   |   accelerationMax < 15.66
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 6.72 : car (0.97/0)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 6.72
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 17.19 : bike (109.9/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 17.19
|   |   |   |   |   |   |   |   accelerationMax < 13.45 : bike (15.9/3.9)
|   |   |   |   |   |   |   |   accelerationMax >= 13.45
|   |   |   |   |   |   |   |   |   accelerationVariance < 4.96 : bike (9.97/0.97)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 4.96 : bike (37/0)
|   |   |   |   |   accelerationMax >= 15.66 : bike (637.97/0)
|   accelerationFrequencyBandEnergy20To22Hz >= 0.42
|   |   speedMax < 12.7
|   |   |   speedMax < 1.92
|   |   |   |   speed95Quantile < 0.01 : car (24.1/15.64)
|   |   |   |   speed95Quantile >= 0.01
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.78 : stationary (16.33/2.33)
|   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.78 : walk (33.96/10.9)
|   |   |   speedMax >= 1.92
|   |   |   |   maximumTravelDistance < 8.91
|   |   |   |   |   speedVariance < 0.52
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.03 : bus (27.79/11.35)
|   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.03 : bike (37.17/4.11)
|   |   |   |   |   speedVariance >= 0.52
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.64
|   |   |   |   |   |   |   trajectorySimilarityTrain < 285.64
|   |   |   |   |   |   |   |   accelerationMax < 1.94 : car (2.13/0.99)
|   |   |   |   |   |   |   |   accelerationMax >= 1.94
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 4.64 : car (2.08/0.05)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 4.64
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 130.85
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.01 : bus (13.18/1.18)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.52
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.53
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.39 : bus (3.42/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.48 : bus (27.46/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.48 : bus (54.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.53 : train (0.18/-0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.52
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.88 : bus (37.09/2.72)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 2.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.33 : train (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.33
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 3.49 : bus (35.66/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 3.49 : bus (9.32/0.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 2.48 : walk (0.09/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.48 : bus (2.6/0.37)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 130.85 : car (2.08/0.05)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 285.64
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.5 : car (37.75/7.41)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.5
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.41
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.35 : bus (15.43/5.3)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.35
|   |   |   |   |   |   |   |   |   |   |   speedMean < 1.44 : car (2.04/0.03)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 1.44
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : bus (13.46/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : bus (46.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.97 : car (0.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.63 : walk (0.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.72 : bus (17.83/0.79)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.41 : car (38.89/16.8)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.64 : car (24.35/4.18)
|   |   |   |   maximumTravelDistance >= 8.91
|   |   |   |   |   trajectorySimilarityBus < 69.63
|   |   |   |   |   |   trajectorySimilarityTram < 528.11 : tram (15.71/0.7)
|   |   |   |   |   |   trajectorySimilarityTram >= 528.11
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.18 : car (33.91/12.79)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.18
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.92
|   |   |   |   |   |   |   |   |   speedMean < 5.3
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 10.33
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.06
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.98
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.48 : bus (19.58/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.71 : bus (6.13/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.71 : bus (37.13/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.76 : train (0.1/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.98 : bus (11.93/0.38)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.06 : bus (12.12/1.7)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 10.33
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.1 : car (10.08/2.08)
|   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 732.93 : bus (32.28/0.78)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 732.93 : car (14.58/6.38)
|   |   |   |   |   |   |   |   |   speedMean >= 5.3
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.3
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 8.96 : car (1.04/0.01)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 8.96
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.84
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.23 : train (0.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.4 : bus (1.34/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 5.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.04 : bus (48.07/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.04 : bus (18.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.62 : bus (13.54/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 5.2 : bike (0.2/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.84 : bus (6.49/1.42)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.3
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.25 : bus (3.69/0.62)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.25
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.13 : car (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.13
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.99 : bus (3.34/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.99
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63 : bus (22.89/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.52 : bus (14.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.52 : bus (53.17/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.92
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.42
|   |   |   |   |   |   |   |   |   |   speedMax < 11.08
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 8.51 : car (33.8/0.04)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 8.51 : bus (38.03/14.98)
|   |   |   |   |   |   |   |   |   |   speedMax >= 11.08 : bus (30.63/1.6)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.42
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.44
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 2.48 : bus (27.7/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 2.48 : bus (25.46/1.34)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.44 : bus (0.85/0.49)
|   |   |   |   |   trajectorySimilarityBus >= 69.63
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.62
|   |   |   |   |   |   |   trajectorySimilarityTram < 224.09
|   |   |   |   |   |   |   |   acceleration50Quantile < 0.67
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.77
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.55 : tram (34.07/0.07)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.55 : tram (22.65/0.58)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.77 : car (0.25/0)
|   |   |   |   |   |   |   |   acceleration50Quantile >= 0.67 : train (0.22/0.07)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 224.09
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.53 : train (12.38/3.03)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.53 : car (34.59/0.32)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.62
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.6
|   |   |   |   |   |   |   |   accelerationMedian < 0.46 : car (12.65/8.46)
|   |   |   |   |   |   |   |   accelerationMedian >= 0.46 : car (32.77/0.33)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.6
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.8
|   |   |   |   |   |   |   |   |   travelDistance < 412.94
|   |   |   |   |   |   |   |   |   |   speedMax < 12.4
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 698.27 : train (3.19/0.13)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 698.27
|   |   |   |   |   |   |   |   |   |   |   |   speedMax < 6.92 : train (2.13/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 6.92
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.3 : bus (18.6/2.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.3 : bus (35.65/0.1)
|   |   |   |   |   |   |   |   |   |   speedMax >= 12.4 : train (5.32/0.22)
|   |   |   |   |   |   |   |   |   travelDistance >= 412.94 : train (6.38/0.27)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.8
|   |   |   |   |   |   |   |   |   travelDistance < 298.44 : car (28.89/0.63)
|   |   |   |   |   |   |   |   |   travelDistance >= 298.44 : bus (31.03/6.59)
|   |   speedMax >= 12.7
|   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   accumulatedTravelDistance < 1046.98
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3.1
|   |   |   |   |   |   accelerationMedian < 0.63
|   |   |   |   |   |   |   speed75Quantile < 19.27
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.65
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.88
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.14 : tram (2/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.14
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 92.45 : bus (39.31/3.77)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 92.45 : train (5.62/0.08)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.88 : bus (34.49/18.49)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.65
|   |   |   |   |   |   |   |   |   accelerationMedian < 0.38
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.14 : car (1.41/0.41)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.14
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.45 : car (36/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.45 : car (10.41/0.41)
|   |   |   |   |   |   |   |   |   accelerationMedian >= 0.38
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.04
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.47 : car (17.21/4)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.47 : bus (33.82/0.41)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.04
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 15.66
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 13.34
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.9 : car (62.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 6.25 : bus (28.91/9.91)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 6.25 : car (16.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 13.34 : bus (11.21/2.21)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 15.66 : car (67.26/0)
|   |   |   |   |   |   |   speed75Quantile >= 19.27 : bus (34.27/11.15)
|   |   |   |   |   |   accelerationMedian >= 0.63
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.62 : train (24.35/11.45)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.62
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.8
|   |   |   |   |   |   |   |   |   travelDistance < 693.32
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.67 : car (21.45/6.11)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.67 : car (23.36/0.34)
|   |   |   |   |   |   |   |   |   travelDistance >= 693.32
|   |   |   |   |   |   |   |   |   |   accelerationMean < 1.01
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.37 : bus (0.11/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 1.8
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.98 : car (9.67/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.98 : car (33.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 1.8 : bus (0.11/-0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 1.01 : bus (0.11/-0)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.8 : car (134.04/0)
|   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3.1
|   |   |   |   |   |   speedMax < 24.05
|   |   |   |   |   |   |   trajectorySimilarityTrain < 566.94
|   |   |   |   |   |   |   |   accelerationVariance < 0.29
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.85 : bus (52.32/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.85 : bus (34.63/0.63)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.29
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.91 : car (3.63/0.63)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.91
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.23 : bus (29.78/0.21)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.23 : bus (26.89/6.36)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 566.94
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.82
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.95 : bus (32.6/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.95 : bus (10.9/0.9)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.82
|   |   |   |   |   |   |   |   |   travelDistance < 860.67
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.06 : bus (32.3/12.77)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.06 : car (25.02/4.13)
|   |   |   |   |   |   |   |   |   travelDistance >= 860.67
|   |   |   |   |   |   |   |   |   |   accelerationMax < 5.79 : bus (35.33/0.08)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 5.79 : car (4.69/1.78)
|   |   |   |   |   |   speedMax >= 24.05 : car (26.67/6.08)
|   |   |   |   accumulatedTravelDistance >= 1046.98
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.81 : train (26.57/2.36)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.81
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.11
|   |   |   |   |   |   |   accelerationMax < 6.48
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.86 : car (110.64/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.86
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.81 : car (0.23/0.05)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.81 : car (47.75/0)
|   |   |   |   |   |   |   accelerationMax >= 6.48 : car (1.07/0.56)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.11 : car (14.06/1.68)
|   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.39
|   |   |   |   |   trajectorySimilarityTram < 496.95 : tram (1.41/0.38)
|   |   |   |   |   trajectorySimilarityTram >= 496.95
|   |   |   |   |   |   accelerationMin < 0.04
|   |   |   |   |   |   |   accelerationMax < 2.87 : train (45.11/0)
|   |   |   |   |   |   |   accelerationMax >= 2.87 : train (7.87/1.22)
|   |   |   |   |   |   accelerationMin >= 0.04 : train (4.8/1.22)
|   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.39
|   |   |   |   |   accelerationMean < 0.76
|   |   |   |   |   |   speed50Quantile < 22.63
|   |   |   |   |   |   |   trajectorySimilarityTram < 222.62 : tram (11.04/0.99)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 222.62
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 248.44 : bus (16.56/8.39)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 248.44
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.84
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.21 : car (1.88/0.8)
|   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.21
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.36 : car (17.68/1.07)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.35
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.43 : train (0.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.74 : car (2.27/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.74 : car (102.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.35 : bike (0.54/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.84 : train (3.14/1.61)
|   |   |   |   |   |   speed50Quantile >= 22.63
|   |   |   |   |   |   |   accelerationVariance < 0.11 : train (26.54/0)
|   |   |   |   |   |   |   accelerationVariance >= 0.11 : train (16.51/7.33)
|   |   |   |   |   accelerationMean >= 0.76
|   |   |   |   |   |   accelerationMean < 1.42
|   |   |   |   |   |   |   accelerationMax < 6.47
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1.15
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.25 : car (2.66/1.25)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.25
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.36 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.36
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 395.49
|   |   |   |   |   |   |   |   |   |   |   |   speedMax < 17.34 : car (39.62/1.03)
|   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 17.34
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.07 : car (22.95/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.07 : car (221.86/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 395.49
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.71 : car (4.32/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.71 : car (313.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.08 : bus (0.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 1.08 : car (680/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1.15 : car (37.16/2.08)
|   |   |   |   |   |   |   accelerationMax >= 6.47
|   |   |   |   |   |   |   |   accelerationMin < 0.03 : bus (7.07/0)
|   |   |   |   |   |   |   |   accelerationMin >= 0.03
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.95
|   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.42
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.63 : train (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.63 : car (147.66/0)
|   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.42 : car (9.08/2.08)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.95 : car (29.49/4.49)
|   |   |   |   |   |   accelerationMean >= 1.42 : bus (7.07/1.66)
accelerationFrequencyBandEnergy8To10Hz >= 4.85
|   speed95Quantile < 3.79
|   |   accelerationFrequencyBandEnergy14To20Hz < 40.7 : walk (1740.94/0)
|   |   accelerationFrequencyBandEnergy14To20Hz >= 40.7 : bike (1.76/-0)
|   speed95Quantile >= 3.79
|   |   accelerationMax < 11.16 : bus (12.48/0.48)
|   |   accelerationMax >= 11.16
|   |   |   speedMin < 10.21
|   |   |   |   accelerationMin < 0.26
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 1.36 : walk (2.83/0)
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 1.36
|   |   |   |   |   |   accelerationMean < 4.82
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 2.35 : bike (34.57/0.57)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 2.35 : bike (153.23/0)
|   |   |   |   |   |   accelerationMean >= 4.82 : bike (13.4/3.4)
|   |   |   |   accelerationMin >= 0.26 : walk (8.04/0)
|   |   |   speedMin >= 10.21 : bus (10.76/0.76)

Size of the tree : 483


RandomTree
==========

accelerationFrequencyBandEnergy8To9Hz < 2.67
|   accelerationFrequencyBandEnergy22To25Hz < 0.61
|   |   accelerationFrequencyBandEnergy9To10Hz < 0.01
|   |   |   speed25Quantile < 7.67
|   |   |   |   accelerationMin < 0.95
|   |   |   |   |   accelerationMean < 4.92
|   |   |   |   |   |   acceleration95Quantile < 0.28 : bike (2.98/0.99)
|   |   |   |   |   |   acceleration95Quantile >= 0.28 : bike (655.93/0)
|   |   |   |   |   accelerationMean >= 4.92
|   |   |   |   |   |   accelerationVariance < 8.81 : walk (4.96/0)
|   |   |   |   |   |   accelerationVariance >= 8.81 : bike (130/0)
|   |   |   |   accelerationMin >= 0.95 : walk (4/0)
|   |   |   speed25Quantile >= 7.67 : train (7.12/0.12)
|   |   accelerationFrequencyBandEnergy9To10Hz >= 0.01
|   |   |   acceleration95Quantile < 0.04
|   |   |   |   accelerationMax < 0.4
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.03
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.13
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.17 : stationary (390/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.17
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.09 : stationary (43/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.09 : stationary (15/1)
|   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.13 : stationary (31/8)
|   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.03 : stationary (14/7)
|   |   |   |   accelerationMax >= 0.4
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.15
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.03
|   |   |   |   |   |   |   speedVariance < 0.7 : train (23/7)
|   |   |   |   |   |   |   speedVariance >= 0.7 : train (22/2)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.03
|   |   |   |   |   |   |   accelerationMedian < 0.04
|   |   |   |   |   |   |   |   speedMax < 0.25 : stationary (90.63/0)
|   |   |   |   |   |   |   |   speedMax >= 0.25 : stationary (13.37/2)
|   |   |   |   |   |   |   accelerationMedian >= 0.04
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.28 : train (21/2)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.28 : train (21/11)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.15 : car (32/24)
|   |   |   acceleration95Quantile >= 0.04
|   |   |   |   trajectorySimilarityTram < 187.94
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.09 : stationary (7.37/1.87)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.09
|   |   |   |   |   |   accelerationMedian < 0.34
|   |   |   |   |   |   |   speedMax < 2.76 : stationary (1.79/0.79)
|   |   |   |   |   |   |   speedMax >= 2.76
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 284.34 : train (1.04/0)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 284.34
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.08 : tram (4.42/1.42)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.08
|   |   |   |   |   |   |   |   |   |   accelerationMax < 0.72 : tram (11.63/1.63)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 0.72
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.22
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 1.84
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.66 : tram (26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.53 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.23 : tram (43/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.23 : tram (5.61/0.61)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 1.84 : train (0.51/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.22 : tram (38.2/0.2)
|   |   |   |   |   |   accelerationMedian >= 0.34 : train (8.05/1.98)
|   |   |   |   trajectorySimilarityTram >= 187.94
|   |   |   |   |   headingVariance < 18.63
|   |   |   |   |   |   travelDistance < 242.72
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.22
|   |   |   |   |   |   |   |   accelerationMean < 0.04 : stationary (21.81/2.75)
|   |   |   |   |   |   |   |   accelerationMean >= 0.04
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.11
|   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.16 : car (8.26/0.26)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.16
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 3.46
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 29.41 : bus (6.49/3.46)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 29.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 0.36 : train (7.05/0.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 0.36 : train (44.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.25 : train (2.95/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 3.46
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.07 : car (17.74/8.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.07 : bus (36.78/7.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 0.55 : train (29.86/9.3)
|   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.01
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.04
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.12
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.03 : train (14.24/3)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.03 : train (30.15/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.12 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.04 : train (26.98/14.61)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.11
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.82
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.57 : train (17.26/9.38)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.57 : bus (28.51/2.51)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.82 : car (10.26/4)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.22
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 2.93
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   |   speedMax < 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.32 : bus (39.93/0.77)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.32 : stationary (6.09/2.09)
|   |   |   |   |   |   |   |   |   |   speedMax >= 0.56
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.23
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.81 : bus (16.25/6.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.22 : car (0.81/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.22
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.9 : bus (62.81/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.9 : train (0.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.68 : bus (7.35/1.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.44 : bus (43.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.23 : train (2.1/0.05)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.82 : train (2.74/0.46)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.07 : car (13.91/4.82)
|   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.07 : bus (28.89/4.36)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 2.93 : car (8/1)
|   |   |   |   |   |   travelDistance >= 242.72
|   |   |   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.04 : stationary (9.68/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.04
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.26
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.09 : train (3.79/1.68)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.09
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 0.77 : train (255.43/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 0.77
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.36 : train (3.42/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.36 : train (60.84/0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.26
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.97
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.29 : train (14.37/1.37)
|   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.29 : bus (27.72/11.9)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.97
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.3
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 0.47 : train (19.99/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 0.47 : train (38.97/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.35
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.66 : train (17.32/0.99)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.66 : train (37.6/4.62)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.35 : train (37.85/0.66)
|   |   |   |   |   |   |   accelerationMin >= 0.06
|   |   |   |   |   |   |   |   accelerationMedian < 1.04 : train (3.11/0.84)
|   |   |   |   |   |   |   |   accelerationMedian >= 1.04 : car (69.53/0)
|   |   |   |   |   headingVariance >= 18.63
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz < 0.64
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.04 : stationary (25.64/0.29)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.04
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 51.95 : bus (20.73/11.51)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 51.95 : train (25.33/0.54)
|   |   |   |   |   |   accelerationFrequencyBandEnergy8To10Hz >= 0.64
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.47 : bus (3.86/1.86)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.47
|   |   |   |   |   |   |   |   accelerationMax < 3.46
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.49
|   |   |   |   |   |   |   |   |   |   accelerationMean < 0.48 : stationary (41.1/0)
|   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.48 : train (0.39/0.1)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.49 : stationary (20.78/0.78)
|   |   |   |   |   |   |   |   accelerationMax >= 3.46 : car (1.37/0.59)
|   accelerationFrequencyBandEnergy22To25Hz >= 0.61
|   |   speedMean < 9.08
|   |   |   lowSpeedPointRatio < 0.98
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.33
|   |   |   |   |   trajectorySimilarityTram < 315.31
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.32
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.01
|   |   |   |   |   |   |   |   acceleration25Quantile < 0.06 : train (0.18/0)
|   |   |   |   |   |   |   |   acceleration25Quantile >= 0.06
|   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.14 : tram (11/0)
|   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.14
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.29
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.37 : train (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.37 : tram (45/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.29 : tram (5.72/0.45)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.01 : tram (3.9/0.72)
|   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.32 : car (0.72/-0)
|   |   |   |   |   trajectorySimilarityTram >= 315.31
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.55
|   |   |   |   |   |   |   trajectorySimilarityTrain < 95.64 : bus (17.57/5.5)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 95.64
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 80.39
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.24 : bus (25.03/7.03)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.24
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.41
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.21 : car (9/4)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.21 : car (37.34/0.34)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.41 : bus (19.55/4.2)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 80.39 : car (28.93/0.93)
|   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.55
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.59 : bus (5.04/1.04)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.59
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.83 : car (48.08/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.83 : bus (1/0)
|   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.33
|   |   |   |   |   mediumSpeedPointRatio < 0.93
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.44
|   |   |   |   |   |   |   accelerationVariance < 0.33
|   |   |   |   |   |   |   |   speed95Quantile < 12.39
|   |   |   |   |   |   |   |   |   speed75Quantile < 3.29 : bus (26.49/11.44)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 3.29
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.55
|   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.12
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.27
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.47 : bus (14.37/5)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.49 : bus (36.74/0.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.78 : bus (119.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.78 : bus (2.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.15 : bus (23.55/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.96 : car (1.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.27 : car (2.37/0)
|   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.12
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.55 : bus (29.3/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.55 : bus (24.8/9.75)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.55
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.53 : bus (65/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.5 : bus (1.93/0.93)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.29 : bus (5.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile < 0.76 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration50Quantile >= 0.76 : bus (13.47/0.47)
|   |   |   |   |   |   |   |   speed95Quantile >= 12.39
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 22.66
|   |   |   |   |   |   |   |   |   |   accelerationMax < 2.99 : bus (13.38/1.38)
|   |   |   |   |   |   |   |   |   |   accelerationMax >= 2.99
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 1.65 : bus (15.34/1.25)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 1.65 : car (39.55/15.04)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 22.66 : car (10.19/2.1)
|   |   |   |   |   |   |   accelerationVariance >= 0.33
|   |   |   |   |   |   |   |   accelerationMean < 1
|   |   |   |   |   |   |   |   |   travelDistance < 246.96
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 507.28 : tram (2.3/0.3)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 507.28
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.59 : bus (12.45/3)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.28 : bus (11.82/2.82)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.3 : bus (19.23/2.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.3 : bus (22.14/0)
|   |   |   |   |   |   |   |   |   travelDistance >= 246.96 : bus (18.42/12.15)
|   |   |   |   |   |   |   |   accelerationMean >= 1 : train (15.09/4)
|   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.44
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.12
|   |   |   |   |   |   |   |   maximumTravelDistance < 11.16
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.15
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 1.48 : bus (11/4)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 1.48
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 0.23 : car (1/0)
|   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 0.23
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.98 : bus (31.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.98 : bus (32.4/0.4)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.15
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.31
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.68 : car (17.4/5.93)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.68 : bus (23.8/0.67)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.31 : car (21.6/2.27)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 11.16
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 309.61 : bus (33.85/12.46)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 309.61
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.06 : car (27.51/12.4)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.06
|   |   |   |   |   |   |   |   |   |   |   speedMean < 3.91 : car (10.58/2.15)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 3.91
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 7.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.34 : car (21.06/1.48)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.34 : car (38.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 7.47 : bus (1.26/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.59 : car (39.8/0.19)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.12
|   |   |   |   |   |   |   |   accelerationVariance < 1.21
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 134.46
|   |   |   |   |   |   |   |   |   |   travelDistance < 224.75 : bus (37.4/11.51)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 224.75
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 1.48
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile < 1.73 : bus (83.98/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration25Quantile >= 1.73 : bus (9.99/0.2)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 1.48 : bus (22.39/2.39)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 134.46 : car (21.82/2.56)
|   |   |   |   |   |   |   |   accelerationVariance >= 1.21 : bus (26.58/12.59)
|   |   |   |   |   mediumSpeedPointRatio >= 0.93
|   |   |   |   |   |   speedMax < 7.38 : bike (21.01/4.96)
|   |   |   |   |   |   speedMax >= 7.38
|   |   |   |   |   |   |   accelerationMedian < 0.34 : tram (6.46/0.46)
|   |   |   |   |   |   |   accelerationMedian >= 0.34
|   |   |   |   |   |   |   |   headingVariance < 3.35
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.11
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.26 : bus (23.06/1.85)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.26 : bus (34.6/13.27)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.11
|   |   |   |   |   |   |   |   |   |   accelerationMin < 0.14
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 3.03
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : bus (7.82/0.57)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.03 : bus (33.02/0.25)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 3.03 : bike (0.11/0)
|   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.14 : car (1.08/0.08)
|   |   |   |   |   |   |   |   headingVariance >= 3.35
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.84 : car (25.18/4.54)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.84 : bus (36.74/10.98)
|   |   |   lowSpeedPointRatio >= 0.98
|   |   |   |   accelerationMean < 0.74
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.89 : stationary (39.83/23.83)
|   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.89 : stationary (28.4/16.4)
|   |   |   |   accelerationMean >= 0.74
|   |   |   |   |   accelerationMedian < 0.72 : walk (20.81/3.65)
|   |   |   |   |   accelerationMedian >= 0.72 : car (29.48/2.21)
|   |   speedMean >= 9.08
|   |   |   speed95Quantile < 23.87
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.31
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.55 : train (30.57/11.76)
|   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.55
|   |   |   |   |   |   acceleration95Quantile < 0.38 : train (32.09/15.52)
|   |   |   |   |   |   acceleration95Quantile >= 0.38
|   |   |   |   |   |   |   accelerationMedian < 0.76 : bus (24.43/15.43)
|   |   |   |   |   |   |   accelerationMedian >= 0.76
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.67 : car (46.38/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.67 : car (21.9/1.9)
|   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.31
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 1
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.89
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.45
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 927.64 : tram (8.69/0.54)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 927.64
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 1.97 : tram (2.32/1.33)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 1.97
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 0.76 : car (35.33/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 0.76 : car (20.99/0.33)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.45
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.25
|   |   |   |   |   |   |   |   |   accelerationMin < 0.03 : bus (18.38/6.38)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.03
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 2.46 : car (7.76/2.76)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 2.46
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.45 : car (9/1)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.45 : car (64.28/0)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.25
|   |   |   |   |   |   |   |   |   headingVariance < 0.49
|   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.81
|   |   |   |   |   |   |   |   |   |   |   accelerationMin < 0.06
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.67 : bus (38.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.67 : bus (2.76/0.22)
|   |   |   |   |   |   |   |   |   |   |   accelerationMin >= 0.06 : car (0.11/0)
|   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.81 : car (4.76/0.43)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.49
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.75
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 912.73 : bus (34.35/1.6)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 912.73 : car (28.1/8.74)
|   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.75
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz < 3.09 : car (27.64/3.82)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy14To20Hz >= 3.09 : car (26.09/1.09)
|   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.89
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.14
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 90.88
|   |   |   |   |   |   |   |   |   accelerationMean < 0.77
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 203.61 : car (27.19/12.04)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 203.61
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 461.4 : car (22.16/1.03)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 461.4
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile < 0.05 : bike (0.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   acceleration95Quantile >= 0.05 : car (95.54/0)
|   |   |   |   |   |   |   |   |   accelerationMean >= 0.77
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 3
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 0.53 : car (1.12/0.41)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.2 : car (42.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.2 : bus (0.1/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 3 : bus (38.02/5.51)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 90.88
|   |   |   |   |   |   |   |   |   headingVariance < 0.29
|   |   |   |   |   |   |   |   |   |   speedMean < 13.61 : tram (6.12/0.12)
|   |   |   |   |   |   |   |   |   |   speedMean >= 13.61
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz < 1.55
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian < 0.57 : car (0.33/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMedian >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax < 8.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 4.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.25 : bus (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile < 0.21 : bus (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   acceleration75Quantile >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 2.52 : car (19.36/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 2.52 : car (45.36/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 4.01 : bus (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationMax >= 8.7 : bike (0.15/0.09)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy8To9Hz >= 1.55 : bus (1/0)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.29
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.09 : train (1/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.09
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean < 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 18.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 589.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.98 : car (10.75/1.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.98 : car (29.27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 589.27 : bus (3.16/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 18.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 1.55 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 1.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 0.77 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 0.77 : car (88.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationMean >= 0.83 : car (405.23/0)
|   |   |   |   |   |   |   |   |   |   |   accelerationVariance >= 0.41 : car (10.96/2.96)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.14
|   |   |   |   |   |   |   |   speedMax < 18.82 : bus (24.17/7)
|   |   |   |   |   |   |   |   speedMax >= 18.82 : bus (31.21/0)
|   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 1
|   |   |   |   |   |   accelerationMedian < 0.77
|   |   |   |   |   |   |   accelerationMax < 5.81 : bus (35.38/0)
|   |   |   |   |   |   |   accelerationMax >= 5.81 : bus (34.28/8.09)
|   |   |   |   |   |   accelerationMedian >= 0.77
|   |   |   |   |   |   |   trajectorySimilarityBus < 281.01
|   |   |   |   |   |   |   |   speedMax < 16 : bus (27.24/1.38)
|   |   |   |   |   |   |   |   speedMax >= 16
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.67 : car (9.62/0.62)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.67
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.49 : bus (31.11/0.99)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.49 : bus (30.08/10.35)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 281.01
|   |   |   |   |   |   |   |   speed50Quantile < 10.51 : train (4.36/0.34)
|   |   |   |   |   |   |   |   speed50Quantile >= 10.51
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.94
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.22
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz < 3.97
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz < 4.6
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 1.98 : car (103.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 1.98 : car (1.41/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy10To14Hz >= 4.6 : bus (0.4/-0)
|   |   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy1To3Hz >= 3.97 : bus (2.42/1.61)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.22 : bus (2.22/-0)
|   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.94 : bus (6.01/1.01)
|   |   |   speed95Quantile >= 23.87
|   |   |   |   accelerationMedian < 0.73
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.51
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz < 0.89
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.43
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.3
|   |   |   |   |   |   |   |   |   accelerationVariance < 0.1
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 0.66 : train (6.21/0.48)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 0.66 : train (40.66/0)
|   |   |   |   |   |   |   |   |   accelerationVariance >= 0.1 : train (5.35/1.94)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.3 : train (18.42/2.42)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.43 : train (16.84/5.84)
|   |   |   |   |   |   accelerationFrequencyBandEnergy9To10Hz >= 0.89 : bus (10.26/5.9)
|   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.51 : car (36.08/3.42)
|   |   |   |   accelerationMedian >= 0.73
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz < 0.65 : train (7.18/0.24)
|   |   |   |   |   accelerationFrequencyBandEnergy28To30Hz >= 0.65
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz < 2.22
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz < 2.53
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz < 0.53
|   |   |   |   |   |   |   |   |   accelerationMin < 0.17
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz < 1.67 : car (45.14/0)
|   |   |   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy22To25Hz >= 1.67 : car (3.48/0.48)
|   |   |   |   |   |   |   |   |   accelerationMin >= 0.17 : car (1.73/0.73)
|   |   |   |   |   |   |   |   accelerationFrequencyBandEnergy27To28Hz >= 0.53 : bus (1.69/0)
|   |   |   |   |   |   |   accelerationFrequencyBandEnergy25To30Hz >= 2.53
|   |   |   |   |   |   |   |   accelerationVariance < 0.51 : car (853.05/0)
|   |   |   |   |   |   |   |   accelerationVariance >= 0.51 : car (9.18/1.94)
|   |   |   |   |   |   accelerationFrequencyBandEnergy20To22Hz >= 2.22 : car (9.32/3.87)
accelerationFrequencyBandEnergy8To9Hz >= 2.67
|   speedMax < 3.87
|   |   acceleration75Quantile < 0.05 : stationary (2/0)
|   |   acceleration75Quantile >= 0.05
|   |   |   accelerationFrequencyBandEnergy25To30Hz < 29.52 : walk (1694.84/0)
|   |   |   accelerationFrequencyBandEnergy25To30Hz >= 29.52 : bike (3.5/-0)
|   speedMax >= 3.87
|   |   speedMax < 10.45
|   |   |   accelerationMedian < 3.62
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz < 3.14 : bike (1.23/0.23)
|   |   |   |   accelerationFrequencyBandEnergy25To27Hz >= 3.14
|   |   |   |   |   accelerationMedian < 3.5 : bike (186.47/0)
|   |   |   |   |   accelerationMedian >= 3.5 : bike (3.12/0.12)
|   |   |   accelerationMedian >= 3.62 : bike (35.61/17.61)
|   |   speedMax >= 10.45 : bus (15.24/1.24)

Size of the tree : 483



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.39 (    11)  trajectorySimilarityTram
      0.28 (     3)  accumulatedTravelDistance
      0.28 (     8)  speed50Quantile
      0.25 (    10)  headingVariance
      0.24 (    15)  travelDistance
      0.24 (     4)  speedMin
      0.24 (     8)  speedMean
      0.24 (    44)  accelerationMedian
      0.23 (     4)  speed75Quantile
      0.23 (     6)  speedMedian
      0.22 (    14)  accelerationFrequencyBandEnergy8To10Hz
      0.21 (    18)  trajectorySimilarityBus
      0.21 (     4)  speedVariance
      0.21 (    15)  speed95Quantile
      0.2  (     2)  highSpeedPointRatio
      0.19 (    20)  trajectorySimilarityTrain
      0.19 (     2)  speed25Quantile
      0.19 (    20)  speedMax
      0.18 (    32)  accelerationFrequencyBandEnergy10To14Hz
      0.18 (    24)  accelerationFrequencyBandEnergy9To10Hz
      0.17 (     3)  lowSpeedPointRatio
      0.17 (    37)  accelerationVariance
      0.14 (    18)  maximumTravelDistance
      0.14 (    25)  accelerationFrequencyBandEnergy25To27Hz
      0.14 (    28)  accelerationFrequencyBandEnergy25To30Hz
      0.12 (    35)  accelerationMax
      0.12 (    12)  acceleration75Quantile
      0.12 (    42)  accelerationMean
      0.12 (    37)  accelerationFrequencyBandEnergy28To30Hz
      0.12 (    21)  acceleration95Quantile
      0.11 (    18)  accelerationFrequencyBandEnergy22To25Hz
      0.11 (     4)  stationaryPointRatio
      0.1  (    19)  accelerationFrequencyBandEnergy20To22Hz
      0.1  (    27)  accelerationFrequencyBandEnergy27To28Hz
      0.1  (    42)  accelerationFrequencyBandEnergy1To3Hz
      0.1  (    19)  acceleration25Quantile
      0.09 (    22)  accelerationFrequencyBandEnergy8To9Hz
      0.09 (    23)  accelerationMin
      0.08 (    18)  accelerationFrequencyBandEnergy14To20Hz
      0.06 (     2)  mediumSpeedPointRatio
      0.03 (    11)  acceleration50Quantile
      0    (     0)  stoppages0To5s
      0    (     0)  stoppages15To30s
      0    (     0)  stoppages5To15s
      0    (     0)  stoppages30To90s

Time taken to perform cross-validation: 0.6 seconds


=== Stratified cross-validation ===

Correctly Classified Instances       10948               94.3061 %
Incorrectly Classified Instances       661                5.6939 %
Kappa statistic                          0.9298
Mean absolute error                      0.0356
Root mean squared error                  0.1177
Relative absolute error                 15.3393 %
Root relative squared error             34.5489 %
Total Number of Instances            11609     


=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0,951    0,004    0,955      0,951    0,953      0,948    0,999     0,992     stationary
                 0,990    0,002    0,992      0,990    0,991      0,989    1,000     0,999     walk
                 0,964    0,001    0,993      0,964    0,978      0,976    0,999     0,996     bike
                 0,946    0,020    0,951      0,946    0,949      0,927    0,994     0,989     car
                 0,906    0,026    0,878      0,906    0,892      0,869    0,991     0,956     bus
                 0,858    0,001    0,978      0,858    0,914      0,914    0,996     0,958     tram
                 0,903    0,016    0,874      0,903    0,888      0,874    0,994     0,963     train
Weighted Avg.    0,943    0,013    0,944      0,943    0,943      0,930    0,996     0,983     


=== Confusion Matrix ===

    a    b    c    d    e    f    g   <-- classified as
  947    3    0    1    3    0   42 |    a = stationary
    5 2188    7    0    9    0    0 |    b = walk
    1   13 1316    8   19    0    8 |    c = bike
    6    0    1 3273  145    1   33 |    d = car
    4    0    1  117 1789    0   64 |    e = bus
    0    0    0    9   15  271   21 |    f = tram
   29    1    0   32   58    5 1164 |    g = train

`;
