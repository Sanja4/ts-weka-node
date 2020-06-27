import {WekaLibraryService} from './weka-library.service';
import {SearchMethod} from '../enum/search-method.enum';
import {GeneralOptions} from '../model/options/general-options.model';
import {BestFirstOptions} from '../model/options/best-first-options.model';
import {CfsSubsetEvalOptions} from '../model/options/cfs-subset-eval-options.model';
import {EvaluatorType} from '../enum/evaluator-type.enum';
import {AttributeSelectionResult} from '../model/attribute-selection/attribute-selection-result.model';
import {J48Options} from '../model/options/j48-options.model';
import {ClassifierContainer} from '../model/classifiers/classifier-container.model';
import {DecisionTreeContainer} from '../model/classifiers/decision-tree-container.model';
import {DecisionTreeType} from '../enum/decision-tree-type.enum';
import {DecisionTree} from '../model/decision-tree/decision-tree.model';
import {DecisionTreeLeaf} from '../model/decision-tree/decision-tree-leaf.model';
import {AdaBoostM1Options} from '../model/options/ada-boost-m1-options.model';
import {InfoGainAttributeEvalOptions} from '../model/options/info-gain-attribute-eval-options.model';
import {InfoGainAttributeRanking} from '../model/attribute-selection/info-gain-attribute-ranking.model';

describe('WekaLibraryService', () => {

    const serviceUnderTest: WekaLibraryService = new WekaLibraryService('./output', './input', './src/bin');

    test('should learn a Random Forest ', async() => {
        const result: ClassifierContainer = await serviceUnderTest.learnRandomForest('test_dataset', false);
        expect(result.options).toEqual('-num-slots 0 -I 100 -M 1 -depth 0 -num-decimal-places 2 -print -attribute-importance');
    });

    test('should learn an AdaBoostM1 J48 ', async() => {
        const result: ClassifierContainer = await serviceUnderTest.learnAdaBoostM1('test_dataset', false,
            new GeneralOptions(),
            new AdaBoostM1Options(),
            DecisionTreeType.J48,
            new J48Options());
        // TODO
    });

    test('should learn an AdaBoostM1 J48 with custom options', async() => {
        const result: ClassifierContainer = await serviceUnderTest.learnAdaBoostM1('test_dataset', false,
            new GeneralOptions(),
            new AdaBoostM1Options({numDecimalPlaces: 10, I: 5}),
            DecisionTreeType.J48,
            new J48Options());
        // TODO
    });

    test('should learn a J48 ', async() => {
        const j48Options: J48Options = new J48Options({
            U: true,
            M: 1
        });

        const result: ClassifierContainer = await serviceUnderTest.learnJ48('test_dataset', true, new GeneralOptions(), j48Options);

        expect(result).not.toBeNull();
        expect(result.options).toBe('-M 1 -U');
        expect((result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).type).toBe(DecisionTreeType.J48);
        expect((result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).numberOfLeaves).toBe(739);
        expect((result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).sizeOfTree).toBe(1477);
        expect((result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).parsedClassifier.splitAttribute)
            .toBe('featureD');
        expect((result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).parsedClassifier.splitValue).toBe(1.48);
        expect((result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).parsedClassifier.children.length).toBe(2);

        let child: DecisionTree = (result.classifierModelFullTrainingSet.totalModel as DecisionTreeContainer).parsedClassifier.children[0] as DecisionTree;
        expect(child.splitAttribute).toBe('featureE');
        expect(child.splitValue).toBe(0.05);

        child = child.children[0] as DecisionTree;
        expect(child.splitAttribute).toBe('featureE');
        expect(child.splitValue).toBe(0.03);

        child = child.children[0] as DecisionTree;
        expect(child.splitAttribute).toBe('featureM');
        expect(child.splitValue).toBe(0.0467);

        const leaf = child.children[0] as DecisionTreeLeaf;
        expect(leaf.predictedClass).toBe('stationary');
        expect(leaf.totalWeightCovered).toBe(620.93);
        expect(leaf.totalWeightMisclassified).toBe(0);
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

        const result: AttributeSelectionResult = await serviceUnderTest.performAttributeSelection(EvaluatorType.CFS_SUBSET_EVAL,
            evaluatorOptions, generalOptions,
            SearchMethod.BEST_FIRST, bestFirstOptions) as AttributeSelectionResult;

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

        const result: AttributeSelectionResult = await serviceUnderTest.performAttributeSelection(EvaluatorType.CFS_SUBSET_EVAL,
            evaluatorOptions, generalOptions,
            SearchMethod.BEST_FIRST, bestFirstOptions) as AttributeSelectionResult;

        expect(result).not.toBeNull();
    });

    test('should perform attribute ranking', async() => {
        const inputFilePath: string = await serviceUnderTest.getUnbalancedTrainingFilePath('test_dataset.arff');
        const generalOptions: GeneralOptions = new GeneralOptions({
            i: inputFilePath,
            x: 10
        });

        const evaluatorOptions: InfoGainAttributeEvalOptions = new InfoGainAttributeEvalOptions();

        const result: InfoGainAttributeRanking[] = await serviceUnderTest.performAttributeSelection(
            EvaluatorType.INFO_GAIN_ATTRIBUTE_EVAL,
            evaluatorOptions,
            generalOptions,
            SearchMethod.RANKER,
            null) as InfoGainAttributeRanking[];

        expect(result).not.toBeNull();
        expect(result.length).toBe(21);
    });

});
