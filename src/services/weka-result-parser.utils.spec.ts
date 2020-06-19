import {WekaResultParserUtils} from './weka-result-parser.utils';
import {testResultStringRandomForest} from './test-data/testResultStringRandomForest';
import {testAttributeImportance} from './test-data/testAttributeImportance';
import {testRandomForestClassifierResult} from './test-data/testRandomForestClassifierResult';
import {testCrossValidationResult} from './test-data/testCrossValidationResult';
import {testEvaluationResult1} from './test-data/testEvaluationResult1';
import {testEvaluationResult2} from './test-data/testEvaluationResult2';
import {testDetailedAccuracyByClass} from './test-data/testDetailedAccuracyByClass';
import {testConfusionMatrix1} from './test-data/testConfusionMatrix1';
import {testConfusionMatrix2} from './test-data/testConfusionMatrix2';
import {testConfusionMatrix3} from './test-data/testConfusionMatrix3';
import {RandomForest} from '../model/classifiers/random-forest.model';
import {EvaluationResult} from '../model/evaluation/evaluation-result.model';
import {DetailedAccuracy} from '../model/evaluation/detailed-accuracy.model';
import {ValidationOverview} from '../model/evaluation/validation-overview.model';
import {AttributeImportance} from '../model/evaluation/attribute-importance.model';
import {ConfusionMatrix} from '../model/evaluation/confusion-matrix.model';
import {ClassifierType} from '../enum/classifier-type.enum';
import {ClassifierContainer} from '../model/classifiers/classifier-container.model';
import {testAdaBoostM1J48} from './test-data/test-AdaBoostM1-J48';
import {AdaBoostM1} from '../model/classifiers/ada-boost-m1.model';
import {DecisionTreeContainer} from '../model/classifiers/decision-tree-container.model';
import {DecisionTreeType} from '../enum/decision-tree-type.enum';
import {DecisionTree} from '../model/decision-tree/decision-tree.model';
import {DecisionTreeLeaf} from '../model/decision-tree/decision-tree-leaf.model';
import exp from 'constants';

describe('WekaResultParserUtils', () => {

    test('should parse Random Forest result', () => {
        const initialStringLength: number = testResultStringRandomForest.length;
        const result: ClassifierContainer = WekaResultParserUtils.parseClassifier(testResultStringRandomForest,
            ClassifierType.RANDOM_FOREST, true);

        expect(result.classifierModelFullTrainingSet.totalModel[0].parsedClassifier.weight).toEqual(1);
        expect(result.options).toEqual('-num-slots 0 -I 3 -M 20 -depth 0 -print -attribute-importance');
        expect(result.timeTakenToBuildModel).toEqual(0.56);
        expect(result.timeTakenToTestModelOnTrainingData).toEqual(0.16);
        expect(result.timeTakenToPerformCrossValidation).toEqual(0.6);
        expect(result.wekaOutput.length).toEqual(initialStringLength);
        // parsing should not change the initial string
        expect(testResultStringRandomForest.length).toEqual(initialStringLength);
    });

    test('should parse AdaBoostM1 REP-Tree result', () => {
        // TODO not implemented yet
        // const result: ClassifierContainer = WekaResultParserUtils.parseClassifier(testAdaBoostM1REPTree,
        //    ClassifierType.ADA_BOOST_M1_REP_TREE, false);

    });

    test('should parse AdaBoostM1 J48 result', () => {
        const result: ClassifierContainer = WekaResultParserUtils.parseClassifier(testAdaBoostM1J48, ClassifierType.ADA_BOOST_M1_J48,
            false);

        expect(result.classifierModelFullTrainingSet.totalModel[0].parsedClassifier.weight).toEqual(4);

        expect(result.timeTakenToBuildModel).toBe(5.43);
        expect(result.timeTakenToTestModelOnTrainingData).toBeUndefined();
        expect(result.type).toBe(ClassifierType.ADA_BOOST_M1_J48);
        expect(result.options).toEqual('-I 10 -W weka.classifiers.trees.J48 -- -C 0.25 -M 2');

        const classifierModelFullTrainingSet: AdaBoostM1 = result.classifierModelFullTrainingSet as AdaBoostM1;

        // expect(classifierModelFullTrainingSet.classifierModelDescription)
        //    .toBe('weka.classifiers.meta.AdaBoostM1 -P 100 -S 1 -I 10 -W weka.classifiers.trees.J48 -- -C 0.25 -M 2');

        const totalModels: DecisionTreeContainer[] = classifierModelFullTrainingSet.totalModel;
        expect(classifierModelFullTrainingSet.totalModel.length).toBe(9);

        const firstDecisionTreeContainer: DecisionTreeContainer = totalModels[0];

        expect(firstDecisionTreeContainer.type).toBe(DecisionTreeType.J48);
        expect(firstDecisionTreeContainer.classifier).not.toBeNull();
        expect(firstDecisionTreeContainer.sizeOfTree).toBe(669);
        expect(firstDecisionTreeContainer.numberOfLeaves).toBe(500);
        expect(firstDecisionTreeContainer.parsedClassifier).not.toBeNull();

        const firstParsedDecisionTree: DecisionTree = firstDecisionTreeContainer.parsedClassifier;
        expect(firstParsedDecisionTree.type).toBe(DecisionTreeType.J48);
        expect(firstParsedDecisionTree.weight).toBe(4);
        expect(firstParsedDecisionTree.splitAttribute).toBe('feature1');
        expect(firstParsedDecisionTree.splitValue)
            .toStrictEqual(['classA', 'classB', 'classC', 'classD', 'classE', 'classF', 'classG']);

        let child: DecisionTree | DecisionTreeLeaf = firstParsedDecisionTree.children[0] as DecisionTree;
        expect(child.type).toBe(DecisionTreeType.J48);
        expect(child.weight).toBeUndefined();
        expect(child.splitAttribute).toBe('feature6');
        expect(child.splitValue).toBe(0.6667);

        child = child.children[0] as DecisionTree;
        expect(child.type).toBe(DecisionTreeType.J48);
        expect(child.weight).toBeUndefined();
        expect(child.splitAttribute).toBe('feature3');
        expect(child.splitValue).toStrictEqual(['classA', 'classB', 'classC', 'classD', 'classE', 'classF', 'classG']);

        child = child.children[0] as DecisionTree;
        expect(child.type).toBe(DecisionTreeType.J48);
        expect(child.weight).toBeUndefined();
        expect(child.splitAttribute).toBe('feature8');
        expect(child.splitValue).toBe(0.5);

        child = child.children[0] as DecisionTreeLeaf;
        expect(child.predictedClass).toBe('classE');
        expect(child.totalWeightCovered).toBe(3.86);
        expect(child.totalWeightMisclassified).toBe(1.82);
    });

    test('should convert a single random forest classifier result', () => {
        const result: RandomForest = WekaResultParserUtils.parseRandomForest(testRandomForestClassifierResult);
        expect(result.totalModel.length).toEqual(3);
        expect(result.totalModel[0].sizeOfTree).toEqual(477);
    });

    test('should convert an evaluation result (1)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult1);
        expect(result.title).toBe('Stratified cross-validation');
        expect(result.overview.correctlyClassifiedInstancesAbsolute).toEqual(10948);
        expect(result.overview.totalWeightOfInstances).toEqual(11609);
    });

    test('should convert an evaluation result (2)', () => {
        const result: EvaluationResult = WekaResultParserUtils.parseEvaluationResult(testEvaluationResult2);
        expect(result.title).toBe('Error on training data');
        expect(result.overview.correctlyClassifiedInstancesAbsolute).toEqual(11297);
        expect(result.overview.totalWeightOfInstances).toEqual(11609);
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
        const result: ValidationOverview = WekaResultParserUtils.extractCrossValidationResult(testCrossValidationResult);
        expect(result.correctlyClassifiedInstancesAbsolute).toEqual(11297);
        expect(result.correctlyClassifiedInstancesRelative).toEqual(97.3124);
        expect(result.inCorrectlyClassifiedInstancesAbsolute).toEqual(312);
        expect(result.inCorrectlyClassifiedInstancesRelative).toEqual(2.6876);
        expect(result.kappaStatistic).toEqual(0.9669);
        expect(result.meanAbsoluteError).toEqual(0.0247);
        expect(result.rootMeanSquaredError).toEqual(0.0895);
        expect(result.relativeAbsoluteError).toEqual(10.6377);
        expect(result.rootRelativeSquaredError).toEqual(26.2871);
        expect(result.totalWeightOfInstances).toEqual(11609);
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

    test('should extract confusion result (1)', () => {
        const result: ConfusionMatrix = WekaResultParserUtils.extractConfusionMatrix(testConfusionMatrix1);
        expect(result.matrixElements.length).toEqual(7);

        expect(result.matrixElements[0].trueClass).toEqual('stationary');
        const expected0 = [
            {
                predictedClass: 'stationary',
                weight: 970
            }, {
                predictedClass: 'walk',
                weight: 1
            }, {
                predictedClass: 'bike',
                weight: 0
            }, {
                predictedClass: 'car',
                weight: 0
            }, {
                predictedClass: 'bus',
                weight: 4
            }, {
                predictedClass: 'tram',
                weight: 0
            }, {
                predictedClass: 'train',
                weight: 21
            }
        ];
        expect(result.matrixElements[0].classifiedAs).toEqual(expected0);

        expect(result.matrixElements[4].trueClass).toEqual('bus');
        const expected4 = [
            {
                predictedClass: 'stationary',
                weight: 4
            }, {
                predictedClass: 'walk',
                weight: 3
            }, {
                predictedClass: 'bike',
                weight: 1
            }, {
                predictedClass: 'car',
                weight: 60
            }, {
                predictedClass: 'bus',
                weight: 1895
            }, {
                predictedClass: 'tram',
                weight: 0
            }, {
                predictedClass: 'train',
                weight: 12
            }
        ];
        expect(result.matrixElements[4].classifiedAs).toEqual(expected4);

        expect(result.matrixElements[6].trueClass).toEqual('train');
        const expected6 = [
            {
                predictedClass: 'stationary',
                weight: 7
            }, {
                predictedClass: 'walk',
                weight: 0
            }, {
                predictedClass: 'bike',
                weight: 0
            }, {
                predictedClass: 'car',
                weight: 19
            }, {
                predictedClass: 'bus',
                weight: 36
            }, {
                predictedClass: 'tram',
                weight: 3
            }, {
                predictedClass: 'train',
                weight: 1224
            }
        ];
        expect(result.matrixElements[6].classifiedAs).toEqual(expected6);
    });

    test('should extract confusion result (2)', () => {
        const result: ConfusionMatrix = WekaResultParserUtils.extractConfusionMatrix(testConfusionMatrix2);
        expect(result.matrixElements.length).toEqual(11);

        expect(result.matrixElements[0].trueClass).toEqual('open front left');
        const expected0 = [
            {
                predictedClass: 'open front left',
                weight: 134
            },
            {
                predictedClass: 'close front left',
                weight: 11
            },
            {
                predictedClass: 'open front right',
                weight: 11
            },
            {
                predictedClass: 'close front right',
                weight: 3
            },
            {
                predictedClass: 'open back left',
                weight: 15
            },
            {
                predictedClass: 'close back left',
                weight: 3
            },
            {
                predictedClass: 'open back right',
                weight: 3
            },
            {
                predictedClass: 'close back right',
                weight: 0
            },
            {
                predictedClass: 'no car door',
                weight: 126
            },
            {
                predictedClass: 'open trunk',
                weight: 15
            },
            {
                predictedClass: 'close trunk',
                weight: 2
            }
        ];
        expect(result.matrixElements[0].classifiedAs).toEqual(expected0);

        expect(result.matrixElements[5].trueClass).toEqual('close back left');
        const expected5 = [
            {
                predictedClass: 'open front left',
                weight: 4
            },
            {
                predictedClass: 'close front left',
                weight: 7
            },
            {
                predictedClass: 'open front right',
                weight: 1
            },
            {
                predictedClass: 'close front right',
                weight: 3
            },
            {
                predictedClass: 'open back left',
                weight: 24
            },
            {
                predictedClass: 'close back left',
                weight: 158
            },
            {
                predictedClass: 'open back right',
                weight: 3
            },
            {
                predictedClass: 'close back right',
                weight: 8
            },
            {
                predictedClass: 'no car door',
                weight: 44
            },
            {
                predictedClass: 'open trunk',
                weight: 8
            },
            {
                predictedClass: 'close trunk',
                weight: 25
            }
        ];
        expect(result.matrixElements[5].classifiedAs).toEqual(expected5);
        expect(result.matrixElements[10].trueClass).toEqual('close trunk');
        const expected10 = [
            {
                predictedClass: 'open front left',
                weight: 2
            },
            {
                predictedClass: 'close front left',
                weight: 10
            },
            {
                predictedClass: 'open front right',
                weight: 5
            },
            {
                predictedClass: 'close front right',
                weight: 10
            },
            {
                predictedClass: 'open back left',
                weight: 14
            },
            {
                predictedClass: 'close back left',
                weight: 19
            },
            {
                predictedClass: 'open back right',
                weight: 11
            },
            {
                predictedClass: 'close back right',
                weight: 10
            },
            {
                predictedClass: 'no car door',
                weight: 94
            },
            {
                predictedClass: 'open trunk',
                weight: 27
            },
            {
                predictedClass: 'close trunk',
                weight: 216
            }
        ];
        expect(result.matrixElements[10].classifiedAs).toEqual(expected10);
    });

    test('should extract confusion result (3)', () => {
        const result: ConfusionMatrix = WekaResultParserUtils.extractConfusionMatrix(testConfusionMatrix3);
        expect(result.matrixElements.length).toEqual(7);

        expect(result.matrixElements[0].trueClass).toEqual('stationary');
        const expected0 = [
            {
                predictedClass: 'stationary',
                weight: 2847.55
            },
            {
                predictedClass: 'walk',
                weight: 29.33
            },
            {
                predictedClass: 'bike',
                weight: 31.42
            },
            {
                predictedClass: 'car',
                weight: 155.71
            },
            {
                predictedClass: 'bus',
                weight: 233.22
            },
            {
                predictedClass: 'tram',
                weight: 215.07
            },
            {
                predictedClass: 'train',
                weight: 256.27
            }
        ];
        expect(result.matrixElements[0].classifiedAs).toEqual(expected0);

        expect(result.matrixElements[6].trueClass).toEqual('train');
        const expected6 = [
            {
                predictedClass: 'stationary',
                weight: 81.13
            },
            {
                predictedClass: 'walk',
                weight: 7.06
            },
            {
                predictedClass: 'bike',
                weight: 36.45
            },
            {
                predictedClass: 'car',
                weight: 119.94
            },
            {
                predictedClass: 'bus',
                weight: 393.91
            },
            {
                predictedClass: 'tram',
                weight: 344.52
            },
            {
                predictedClass: 'train',
                weight: 2785.57
            }
        ];
        expect(result.matrixElements[6].classifiedAs).toEqual(expected6);
    });

});
