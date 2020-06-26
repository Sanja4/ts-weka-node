/**
 * Utils class to parse a decision tree from Weka.
 */

import {DecisionTree} from '../model/decision-tree/decision-tree.model';
import {DecisionTreeLeaf} from '../model/decision-tree/decision-tree-leaf.model';
import {DecisionTreeType} from '../enum/decision-tree-type.enum';
import {DecisionTreeContainer} from '../model/classifiers/decision-tree-container.model';

/**
 * Helper class to parse a decision tree from Weka with numerical attributes.
 */
    // TODO
export class WekaTreeParserUtils {

    /**
     * Parses the given decision tree
     * @param treeString - the string of the decision tree
     * @param decisionTreeType - the decision tree type
     * @returns the decision tree object
     */
    public static parse(treeString: string, decisionTreeType: DecisionTreeType): DecisionTree {
        // split by lines
        const splitTreeString: string[] = treeString.split('\n');

        const decisionTree: DecisionTree = this.parseNode(splitTreeString, decisionTreeType) as DecisionTree;

        // set the default weight (if the weight should be different, it needs to be overwritten later)
        decisionTree.weight = 1;

        return decisionTree;
    }

    public static parseWeight(treeString: string): number {
        // weight
        let regExp = /(?:Weight:\s*)(.*)/gm;
        let regExpResult = regExp.exec(treeString);
        let weight: number = 1;

        if(regExpResult != null) {
            weight = Number.parseFloat(regExpResult[1]);
        }

        return weight;
    }

    /**
     * Parses the given leaf of a decision tree
     * @param leafString - the string of the leaf
     * @returns the leaf object
     */
    public static parseLeaf(leafString: string): DecisionTreeLeaf {
        let relevantSubstring: string;
        let startIndex: number;
        let identifier = /:\s*/gm;

        const result = identifier.exec(leafString);

        if(result == null) {
            startIndex = 0;
        } else {
            startIndex = leafString.indexOf(result[0]) + result[0].length;
        }

        relevantSubstring = leafString.substring(startIndex);

        const predictedClassRegExp = /(?::*\s*)(.*(?=\s))(?:\s*\()/gm;
        let regExpResult = predictedClassRegExp.exec(relevantSubstring);
        const predictedClass: string = regExpResult[1];

        const totalWeightCoveredRegExp = /(?:\()(\d*\.*\d*)[\/)]+/gm;
        regExpResult = totalWeightCoveredRegExp.exec(relevantSubstring);
        const totalWeightCoveredString: string = regExpResult[1];

        const totalWeightMisclassifiedRegExp = /(?:\(.*\/)(.*)(?:\))+/gm;
        regExpResult = totalWeightMisclassifiedRegExp.exec(relevantSubstring);

        let totalWeightMisclassifiedString;
        if(regExpResult == null) {
            totalWeightMisclassifiedString = 0;
        } else {
            totalWeightMisclassifiedString = regExpResult[1];
        }

        return {
            predictedClass: predictedClass,
            totalWeightCovered: Number.parseFloat(totalWeightCoveredString),
            totalWeightMisclassified: Number.parseFloat(totalWeightMisclassifiedString)
        };
    }

    public static parseJ48DecisionTree(resultString: string): DecisionTreeContainer {
        // number of leaves
        let regExp = /Number of Leaves\s\s:\s*(\d*)/gm;
        let regExpResult = regExp.exec(resultString);
        const numberOfLeaves: number = Number.parseInt(regExpResult[1]);

        // tree size
        regExp = /(?:Size of the tree :)\s*(.+)/gm;
        // the regExp matches the following string (w/o quotes), for example: '0.39 (    11)  trajectorySimilarityTram'
        regExpResult = regExp.exec(resultString);
        const treeSize: number = Number.parseInt(regExpResult[1]);
        // weight
        const weight: number = this.parseWeight(resultString);

        // Model
        const startIdentifier: string = '\n------------------\n\n';
        const endIdentifier: string = '\n\nNumber of Leaves';
        const startIndex: number = resultString.search(startIdentifier) + startIdentifier.length;
        const endIndex: number = resultString.search(endIdentifier);
        const model: string = resultString.substring(startIndex, endIndex);

        const parsedClassifier: DecisionTree = WekaTreeParserUtils.parse(model, DecisionTreeType.J48);
        parsedClassifier.weight = weight;

        return new DecisionTreeContainer({
            classifier: model,
            parsedClassifier: parsedClassifier,
            numberOfLeaves: numberOfLeaves,
            sizeOfTree: treeSize,
            type: DecisionTreeType.J48
        });
    }

    /**
     * Parses a node consisting of multiple lines. A node can be a decision tree or a leaf.
     * @param splitTreeString - the decision tree or leaf of the nodes line by line
     * @param decisionTreeType - the decision tree type
     * @returns the decision tree or leaf of the node
     */
    // TODO enable parsing of Random Trees and REP-Trees
    private static parseNode(splitTreeString: string[],
                             decisionTreeType: DecisionTreeType): DecisionTree | DecisionTreeLeaf {
        let firstLine: string = splitTreeString[0];

        if(splitTreeString.length == 1) {
            // it is a single leaf
            return this.parseLeaf(firstLine);
        }

        // it is a tree
        const identifierRegex = /(?:\S\s)(\D{1,2})(?:\s\S)+/gm; // matches '<', '>', ':', '>=', '<=', '='
        const identifierFirstLine = identifierRegex.exec(firstLine)[1];

        // ATTRIBUTE
        let splitAttributeEndIndex: number = firstLine.indexOf(identifierFirstLine) - 1;
        const splitAttribute: string = firstLine.substring(0, splitAttributeEndIndex);

        // VALUE
        let splitValueString: string;
        let splitValue: number | string[] = null;
        const children: Array<DecisionTree | DecisionTreeLeaf> = [];

        let isNumericAttribute: boolean = true;

        // numeric attribute
        const rootNodeStrings: { line: string, index: number }[] = this.extractAllRootNodeStrings(splitTreeString);

        for(const node of rootNodeStrings) {
            const splitValueRegex = /(?:(?:<=|>=|>|<|=)\s*)(\S*)(?:\s*:|\n|$)/gm;
            const regexResult = splitValueRegex.exec(node.line);
            splitValueString = regexResult[1];

            if(isNumericAttribute) {
                splitValue = Number.parseFloat(splitValueString);
                if(isNaN(splitValue)) {
                    // it was not a numeric attribute
                    isNumericAttribute = false;
                    splitValue = [];
                    (splitValue as string[]).push(splitValueString);
                }
            } else {
                (splitValue as string[]).push(splitValueString);
            }

            const childTree: string[] = this.getChild(node.index, splitTreeString);
            children.push(this.parseNode(childTree, decisionTreeType));
        }

        return new DecisionTree({
            splitAttribute: splitAttribute,
            splitValue: splitValue,
            children: children,
            type: decisionTreeType
        } as DecisionTree);
    }

    /**
     * Returns the child tree or leaf line by line
     * @param startIndex - the index in the tree where the child starts
     * @param tree - the tree (line by line)
     * @returns the tree or leaf of the child
     */
    private static getChild(startIndex: number, tree: string[]): string[] {
        let firstLine = tree[startIndex];
        const child: string[] = [];
        const leafIdentifierRegex = /:/gm;
        const regExpResult = leafIdentifierRegex.exec(firstLine);
        let leafIdentifier: string;
        if(regExpResult != null) {
            leafIdentifier = regExpResult[0];
        }
        const subTreeIdentifier: string = '|   ';
        let index: number = startIndex;

        if(firstLine.includes(leafIdentifier)) {
            // the child is a leaf
            child.push(firstLine);
        } else {
            let relevantSubstring: string;
            index++; // skip the first line

            while(index < tree.length && tree[index].includes(subTreeIdentifier)) {
                // remove one sub-tree identifier from each line
                relevantSubstring = tree[index];
                startIndex = relevantSubstring.indexOf(subTreeIdentifier) + subTreeIdentifier.length;
                relevantSubstring = relevantSubstring.substring(startIndex);
                child.push(relevantSubstring);
                index++;
            }
        }

        return child;
    }

    /**
     * Returns all root lines/nodes from the given string array.
     * @param splitTreeString - array containing all lines of a tree or sub-tree.
     */
    private static extractAllRootNodeStrings(splitTreeString: string[]): { line: string, index: number }[] {
        const rootNodesLines: { line: string, index: number }[] = [];
        splitTreeString.forEach((line, index) => {
            const isRootNode: boolean = this.isRootNode(line);
            if(isRootNode) {
                rootNodesLines.push({
                    line: line,
                    index: index
                });
            }
        });
        return rootNodesLines;
    }

    /**
     * Determines if the given line forms a root node.
     * @param treeLine - the line to check.
     */
    private static isRootNode(treeLine: string): boolean {
        const identifierIndex: number = treeLine.indexOf('|');
        return identifierIndex === -1;
    }
}
