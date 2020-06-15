import {DecisionTree} from '../model/decision-tree/decision-tree.model';
import {DecisionTreeLeaf} from '../model/decision-tree/decision-tree-leaf.model';
import {Features} from '../model/features.model';
import {Vote} from '../model/vote.model';
import {MajorityVotingResult} from '../model/majority-voting-result.model';
import {DecisionTreeType} from '../enum/decision-tree-type.enum';

export class WekaClassificationUtils {

    /**
     * Classifies the given instance (features) using the given decision trees
     * @param features - the features of the instance to classify
     * @param decisionTrees - the decision trees to use for classification
     * @returns the predicted class
     */
    public static classifyMultiple(features: Features,
                                   decisionTrees: DecisionTree[]): MajorityVotingResult {
        // use a majority vote of all decision trees
        const votes: Vote[] = decisionTrees.map((decisionTree) => this.classify(features, decisionTree));

        if(votes.length == 1) {
            return new MajorityVotingResult({predictedClass: votes[0].class, predictedClassWeight: votes[0].weight, totalWeight: votes[0].weight});
        }

        // count the weight of the votes per class
        const weightOfVotesPerClass: Map<string, number> = new Map<string, number>();

        for(const vote of votes) {
            const weightToAdd: number = vote.weight;

            if(weightOfVotesPerClass.has(vote.class)) {
                weightOfVotesPerClass.set(vote.class, weightOfVotesPerClass.get(vote.class) + weightToAdd);
            } else {
                weightOfVotesPerClass.set(vote.class, weightToAdd);
            }
        }

        return this.getClassWithMaxVotes(weightOfVotesPerClass);
    }

    /**
     * Classifies the given instance (features) using the given decision tree
     * @param features - the features of the instance to classify
     * @param decisionTree - the decision tree to use for classification
     * @returns the predicted class
     */
    public static classify(features: Features,
                           decisionTree: DecisionTree): Vote {
        // traverse the decision tree
        // use a majority vote of all paths because there are multiple paths if a value is missing
        const leaves: DecisionTreeLeaf[] = this.traverseTreeOrLeaf(features, decisionTree);

        const predictedClass: string =  this.getMajorityVotingResultFromLeaves(leaves);

        return new Vote({class: predictedClass, weight: decisionTree.weight})
    }

    /**
     * Traverses the given decision tree (which can be a tree or a leaf) using the given features and returns all leaves that can be reached using the features.
     * @param features
     * @param decisionTree - a decision tree (which can also be a leaf)
     */
    public static traverseTreeOrLeaf(features: Features,
                                     decisionTree: DecisionTree | DecisionTreeLeaf): DecisionTreeLeaf[] {
        const isLeaf: boolean = (decisionTree as DecisionTree).splitAttribute == null;

        if(!isLeaf) {
           return this.traverseTree(features, decisionTree as DecisionTree);
        } else {
            // leaf
            return [(decisionTree as DecisionTreeLeaf)];
        }
    }

    /**
     * Traverses the given decision tree using the given features and returns all leaves that can be reached using the
     * features. Contrary to {@link traverseTreeOrLeaf} this method only handles decision trees that are not only a leaf.
     * @param features
     * @param decisionTree - a decision tree
     */
    private static traverseTree(features: Features, decisionTree: DecisionTree): DecisionTreeLeaf[] {
        // tree
        decisionTree = decisionTree as DecisionTree;
        // check the split
        const featureValue: number | string = features[decisionTree.splitAttribute] as number | string;

        // check if the feature value is known
        if(featureValue == null) {
            // feature value not given; traverse all children and collect the votes of all paths
            let resultsOfChildren = [];

            for(const child of decisionTree.children) {
                const resultsOfChild: DecisionTreeLeaf[] = this.traverseTreeOrLeaf(features, child);
                resultsOfChildren = resultsOfChildren.concat(resultsOfChild);
            }

            // combine the results
           return resultsOfChildren;
        } else {
            // recursive call
            if(typeof decisionTree.splitValue == 'number') {
                return this.traverseNumericNode(decisionTree, featureValue as number, features);
            } else {
                // enum split attribute
                const index: number = (decisionTree.splitValue as string[]).findIndex((v) => v == featureValue);
                return this.traverseTreeOrLeaf(features, decisionTree.children[index]);
            }
        }
    }

    /**
     * Traverses a node that has a numeric split value (and feature value)
     * @param decisionTree - the decision tree with the numeric node as root
     * @param featureValue - the feature value to use for the current node
     * @param features - the feature values to use for classification
     */
    private static traverseNumericNode(decisionTree: DecisionTree, featureValue: number, features: Features): DecisionTreeLeaf[] {
        // numeric split attribute; differ based on tree type
        if(decisionTree.type == DecisionTreeType.RANDOM_TREE || decisionTree.type == DecisionTreeType.REP_TREE) {
            if(featureValue < decisionTree.splitValue) {
                // use the left child
                return this.traverseTreeOrLeaf(features, decisionTree.children[0]);
            } else {
                // use the right child
                return this.traverseTreeOrLeaf(features, decisionTree.children[1]);
            }
        } else if(decisionTree.type == DecisionTreeType.J48) {
            if(featureValue <= decisionTree.splitValue) {
                // use the left child
                return this.traverseTreeOrLeaf(features, decisionTree.children[0]);
            } else {
                // use the right child
                return this.traverseTreeOrLeaf(features, decisionTree.children[1]);
            }
        }

        throw new Error(`Can't handle a decision tree of type ${decisionTree.type}`);
    }

    private static getClassWithMaxVotes(numberOfVotesPerClass: Map<string, number>): MajorityVotingResult {
        // find the maximum value; care: use -1 as start value and not 0 because for enum only trees, the total weight of a leaf might be 0
        let sumVotes: number = 0;
        let maxWeightOfVotes: number = -1;
        let classWithMaxVotes: string;

        for(const [motionType, numberOfVotes] of numberOfVotesPerClass) {
            sumVotes += numberOfVotes;
            if(numberOfVotes > maxWeightOfVotes) {
                maxWeightOfVotes = numberOfVotes;
                classWithMaxVotes = motionType;
            }
        }

        return new MajorityVotingResult({
            predictedClass: classWithMaxVotes,
            predictedClassWeight: maxWeightOfVotes,
            totalWeight: sumVotes
        });
    }

    /**
     * For the majority voting the weight of the class of each leaf is used {@link DecisionTreeLeaf.totalWeightCovered}
     * @param votes
     */
    private static getMajorityVotingResultFromLeaves(votes: DecisionTreeLeaf[]): string {
        if(votes.length == 1) {
            return votes[0].predictedClass;
        }

        // count the weight of the votes per class
        const weightOfVotesPerClass: Map<string, number> = new Map<string, number>();

        for(const vote of votes) {
            if(weightOfVotesPerClass.has(vote.predictedClass)) {
                weightOfVotesPerClass.set(vote.predictedClass, weightOfVotesPerClass.get(vote.predictedClass) +
                    vote.totalWeightCovered);
            } else {
                weightOfVotesPerClass.set(vote.predictedClass, vote.totalWeightCovered);
            }
        }

        let sumVotes: number = 0;
        let maxWeightOfVotes: number = -1;
        let classWithMaxVotes: string;

        for(const [motionType, numberOfVotes] of weightOfVotesPerClass) {
            sumVotes += numberOfVotes;
            if(numberOfVotes > maxWeightOfVotes) {
                maxWeightOfVotes = numberOfVotes;
                classWithMaxVotes = motionType;
            }
        }

        return classWithMaxVotes;
    }
}
