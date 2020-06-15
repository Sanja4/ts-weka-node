export const testAdaBoostM1REPTree: string = `=== Run information ===

Scheme:       weka.classifiers.meta.AdaBoostM1 -P 100 -S 1 -I 10 -W weka.classifiers.trees.REPTree -- -M 2 -V 0.001 -N 3 -S 1 -L -1 -I 0.0
Relation:     MetatrueLabelData-weka.filters.supervised.instance.Resample-B1.0-S1-Z100.0-weka.filters.unsupervised.attribute.Remove-R11
Instances:    25151
Attributes:   12
              feature1
              feature2
              feature3
              feature4
              feature5
              feature6
              feature7
              feature8
              feature9
              feature10
              feature11
              trueLabel
Test mode:    10-fold cross-validation

=== Classifier model (full training set) ===

AdaBoostM1: Base classifiers and their weights: 


REPTree
============

feature1 = classA
|   feature6 = classA
|   |   feature7 < 0.72
|   |   |   feature4 = classA
|   |   |   |   feature10 < 0.9 : classA (22.89/1.78) [9.94/1.95]
|   |   |   |   feature10 >= 0.9 : classA (9.89/3.91) [7.38/2.35]
|   |   |   feature4 = classB : classB (0/0) [0.41/0]
|   |   |   feature4 = classC : classC (1.4/0.57) [1.74/0.51]
|   |   |   feature4 = classD : classA (3.45/1.08) [1.06/0.11]
|   |   |   feature4 = classE : classA (7.16/3.03) [2.14/1.45]
|   |   |   feature4 = classF : classA (4.17/0.51) [0.7/0.13]
|   |   |   feature4 = classG : classG (2.78/1.51) [1.83/0.58]
|   |   feature7 >= 0.72
|   |   |   feature2 = classA : classA (939.01/0.28) [445.66/0.4]
|   |   |   feature2 = classB : classA (0.42/0) [0.01/0]
|   |   |   feature2 = classC : classA (0.59/0.17) [0.12/0.11]
|   |   |   feature2 = classD : classA (0.84/0) [0.01/0]
|   |   |   feature2 = classE : classA (5.02/0) [2.1/0]
|   |   |   feature2 = classF : classA (3.77/0) [1.27/0]
|   |   |   feature2 = classG : classA (0/0) [0/0]
|   feature6 = classB
|   |   feature7 < 0.75
|   |   |   feature4 = classA : classA (21.23/5.37) [5.85/1.27]
|   |   |   feature4 = classB : classA (8.09/2.02) [9.08/3.05]
|   |   |   feature4 = classC : classA (2.13/0.06) [0.12/0.09]
|   |   |   feature4 = classD : classA (1.14/0) [0.06/0]
|   |   |   feature4 = classE : classA (0.37/0.18) [0.11/0.08]
|   |   |   feature4 = classF : classA (0.24/0.03) [0.03/0]
|   |   |   feature4 = classG : classA (2.23/0.11) [1.15/0.08]
|   |   feature7 >= 0.75 : classA (28.6/0.01) [23.11/0.03]
|   feature6 = classC
|   |   feature2 = classA : classA (44.07/0.46) [28.27/2.35]
|   |   feature2 = classB : classA (0.1/0) [0.09/0.09]
|   |   feature2 = classC
|   |   |   feature8 < 0.98 : classA (14.69/1.99) [9.65/3.27]
|   |   |   feature8 >= 0.98 : classC (9.14/0.35) [4.14/0.18]
|   |   feature2 = classD : classA (1.17/0.04) [1.05/0.01]
|   |   feature2 = classE : classA (0.86/0.19) [3.38/0.06]
|   |   feature2 = classF : classA (3.53/0.02) [2.16/0.02]
|   |   feature2 = classG : classA (1.07/0.04) [1.02/0]
|   feature6 = classD
|   |   feature2 = classA
|   |   |   feature7 < 0.62
|   |   |   |   feature8 < 0.86
|   |   |   |   |   feature10 < 0.92 : classA (8.36/0.63) [4.11/2.27]
|   |   |   |   |   feature10 >= 0.92 : classA (3.14/1.01) [0.63/0.58]
|   |   |   |   feature8 >= 0.86 : classD (2.42/0.37) [1.6/0.47]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.88
|   |   |   |   |   feature9 < 0.6 : classA (10.54/1.07) [5.95/0.13]
|   |   |   |   |   feature9 >= 0.6 : classA (44.48/0.32) [15.13/0.53]
|   |   |   |   feature7 >= 0.88 : classA (159.93/0.05) [70.92/0]
|   |   feature2 = classB : classA (0.42/0) [0.41/0.41]
|   |   feature2 = classC : classC (0.48/0.29) [0.32/0.01]
|   |   feature2 = classD
|   |   |   feature9 < 0.68
|   |   |   |   feature7 < 0.45 : classD (2.06/0.03) [1.01/0.01]
|   |   |   |   feature7 >= 0.45 : classA (3.22/1.02) [2.11/0.02]
|   |   |   feature9 >= 0.68
|   |   |   |   feature8 < 0.74 : classA (28.62/1.31) [9.85/1.27]
|   |   |   |   feature8 >= 0.74
|   |   |   |   |   feature11 < 0.98 : classD (2.17/0.08) [2.21/1.04]
|   |   |   |   |   feature11 >= 0.98 : classA (5.01/0.84) [1.25/0.17]
|   |   feature2 = classE : classA (30.86/0.98) [21.25/1.41]
|   |   feature2 = classF : classA (28.89/0.16) [10/0.13]
|   |   feature2 = classG : classA (1.18/1.14) [3.02/1.01]
|   feature6 = classE
|   |   feature7 < 0.68
|   |   |   feature7 < 0.45
|   |   |   |   feature10 < 0.75 : classA (10.46/4.67) [6.47/3.01]
|   |   |   |   feature10 >= 0.75 : classE (20.53/1.94) [7.53/0.33]
|   |   |   feature7 >= 0.45
|   |   |   |   feature5 = classA : classA (16.18/3.11) [12.21/4.98]
|   |   |   |   feature5 = classB : classA (0.44/0.01) [0.03/0.02]
|   |   |   |   feature5 = classC : classA (0.23/0.02) [0.22/0.21]
|   |   |   |   feature5 = classD : classA (0.67/0.03) [2.24/0.02]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.52 : classA (7.74/0.22) [3.44/2.23]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   |   feature9 < 0.9
|   |   |   |   |   |   |   |   feature4 = classA : classA (3.64/0.05) [3.3/0.07]
|   |   |   |   |   |   |   |   feature4 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature4 = classC : classA (0/0) [0.05/0]
|   |   |   |   |   |   |   |   feature4 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature4 = classE : classA (3.27/0.04) [3.11/0.07]
|   |   |   |   |   |   |   |   feature4 = classF : classA (1.22/0.07) [1.06/0.04]
|   |   |   |   |   |   |   |   feature4 = classG : classG (0.11/0) [0.17/0]
|   |   |   |   |   |   |   feature9 >= 0.9
|   |   |   |   |   |   |   |   feature2 = classA : classE (1.51/0.51) [0.22/0.22]
|   |   |   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classD : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classE : classE (2.19/0.19) [1.13/0.13]
|   |   |   |   |   |   |   |   feature2 = classF : classA (2.19/0.07) [0.13/0.09]
|   |   |   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature8 >= 0.82 : classE (2.19/0.19) [1.13/0.13]
|   |   |   |   feature5 = classF : classA (1.31/0.84) [1.68/0.45]
|   |   |   |   feature5 = classG : classA (1.31/0.24) [0.08/0.05]
|   |   feature7 >= 0.68
|   |   |   feature7 < 0.95 : classA (168.05/7.53) [91.47/2.72]
|   |   |   feature7 >= 0.95
|   |   |   |   feature2 = classA : classA (220.76/0.07) [99.69/0]
|   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   feature2 = classC : classC (0.04/0) [0.03/0]
|   |   |   |   feature2 = classD : classD (0.08/0) [0/0]
|   |   |   |   feature2 = classE : classA (19.04/0.01) [14.73/0.15]
|   |   |   |   feature2 = classF : classA (3.89/0) [2.44/0]
|   |   |   |   feature2 = classG : classA (1.02/0) [2.01/0]
|   feature6 = classF
|   |   feature7 < 0.62
|   |   |   feature2 = classA
|   |   |   |   feature10 < 0.9
|   |   |   |   |   feature10 < 0.83 : classF (8.47/1.47) [3.81/0.81]
|   |   |   |   |   feature10 >= 0.83 : classA (3.04/1.01) [3.02/2.01]
|   |   |   |   feature10 >= 0.9 : classF (27.14/0.34) [17.83/2.38]
|   |   |   feature2 = classB : classB (0.23/0.23) [0.34/0]
|   |   |   feature2 = classC : classC (0.25/0.12) [0.24/0]
|   |   |   feature2 = classD : classA (0.23/0.12) [0/0]
|   |   |   feature2 = classE : classA (5.68/0.75) [0.77/0.26]
|   |   |   feature2 = classF
|   |   |   |   feature9 < 0.75 : classA (7.29/0.09) [0.12/0.04]
|   |   |   |   feature9 >= 0.75
|   |   |   |   |   feature4 = classA : classA (1.34/0.13) [0.21/0.08]
|   |   |   |   |   feature4 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature4 = classC : classA (0.04/0) [0.04/0]
|   |   |   |   |   feature4 = classD : classA (0.12/0) [0.04/0]
|   |   |   |   |   feature4 = classE : classA (0.13/0.04) [0/0]
|   |   |   |   |   feature4 = classF : classF (19.29/2.28) [6.11/0.11]
|   |   |   |   |   feature4 = classG : classF (8.23/0.22) [2.09/0.09]
|   |   |   feature2 = classG : classG (0.12/0) [0/0]
|   |   feature7 >= 0.62
|   |   |   feature7 < 0.88
|   |   |   |   feature7 < 0.85
|   |   |   |   |   feature11 < 0.98
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature9 < 0.95 : classA (10.32/2.08) [2.78/0.14]
|   |   |   |   |   |   |   feature9 >= 0.95 : classF (8.02/2.02) [2.6/0.6]
|   |   |   |   |   |   feature5 = classB : classA (0/0) [0.06/0]
|   |   |   |   |   |   feature5 = classC : classA (0.07/0.01) [0.01/0.01]
|   |   |   |   |   |   feature5 = classD : classA (0.14/0) [0.13/0]
|   |   |   |   |   |   feature5 = classE : classA (2.94/0.02) [0.44/0.04]
|   |   |   |   |   |   feature5 = classF
|   |   |   |   |   |   |   feature4 = classA : classA (7.59/0.02) [3.31/0.05]
|   |   |   |   |   |   |   feature4 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature4 = classC : classC (0.04/0.02) [0.02/0]
|   |   |   |   |   |   |   feature4 = classD : classA (0/0) [0.06/0]
|   |   |   |   |   |   |   feature4 = classE : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature4 = classF : classA (3.41/0) [3.05/0.01]
|   |   |   |   |   |   |   feature4 = classG : classG (0.04/0) [0.06/0]
|   |   |   |   |   |   feature5 = classG : classA (1.06/0.01) [2.04/0.01]
|   |   |   |   |   feature11 >= 0.98
|   |   |   |   |   |   feature4 = classA : classA (20.46/0.06) [3.53/0.13]
|   |   |   |   |   |   feature4 = classB : classA (0.05/0) [0.05/0]
|   |   |   |   |   |   feature4 = classC : classC (0.1/0.05) [0.05/0]
|   |   |   |   |   |   feature4 = classD : classA (0/0) [0.05/0]
|   |   |   |   |   |   feature4 = classE : classA (0.15/0) [0/0]
|   |   |   |   |   |   feature4 = classF : classA (4.51/0) [1.07/0.02]
|   |   |   |   |   |   feature4 = classG : classG (0.25/0.15) [0.2/0.05]
|   |   |   |   feature7 >= 0.85
|   |   |   |   |   feature11 < 0.95 : classA (3.58/0) [1.27/0]
|   |   |   |   |   feature11 >= 0.95 : classF (8.35/1.35) [3.63/0.63]
|   |   |   feature7 >= 0.88
|   |   |   |   feature4 = classA : classA (111.4/0.03) [74.13/0]
|   |   |   |   feature4 = classB : classA (0/0) [0/0]
|   |   |   |   feature4 = classC : classC (0.02/0) [0.01/0]
|   |   |   |   feature4 = classD : classA (0/0) [2/0]
|   |   |   |   feature4 = classE : classA (1.01/0) [3/0]
|   |   |   |   feature4 = classF : classA (8.52/0) [6.14/0]
|   |   |   |   feature4 = classG : classA (3.48/0) [2.13/0]
|   feature6 = classG
|   |   feature4 = classA
|   |   |   feature7 < 0.75
|   |   |   |   feature10 < 0.98 : classA (29.7/5.8) [15.75/0.76]
|   |   |   |   feature10 >= 0.98
|   |   |   |   |   feature5 = classA : classG (3.33/0.32) [1.06/0.06]
|   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classF : classF (0.37/0.02) [0.18/0.01]
|   |   |   |   |   feature5 = classG : classG (2.1/0.09) [0.04/0.03]
|   |   |   feature7 >= 0.75 : classA (139.49/0.04) [81.04/0.09]
|   |   feature4 = classB : classA (0.09/0) [0.18/0.09]
|   |   feature4 = classC : classC (0.4/0.18) [0.47/0.18]
|   |   feature4 = classD : classA (4.53/2.01) [0.21/0.01]
|   |   feature4 = classE : classA (2.36/0.62) [0.37/0.27]
|   |   feature4 = classF : classA (2.45/0.09) [2.19/0]
|   |   feature4 = classG
|   |   |   feature8 < 0.66 : classA (7.6/1.17) [5.16/0.08]
|   |   |   feature8 >= 0.66
|   |   |   |   feature2 = classA : classA (2.75/0.03) [1.23/0.03]
|   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   feature2 = classG : classG (19.59/1.46) [2.37/1.19]
feature1 = classB
|   feature2 = classA : classB (3.85/0.73) [1.48/0.44]
|   feature2 = classB : classB (2375.1/13.58) [1182.38/3.98]
|   feature2 = classC
|   |   feature4 = classA : classE (0.04/0.01) [0/0]
|   |   feature4 = classB : classB (1.55/0.09) [0.2/0.01]
|   |   feature4 = classC : classC (12.67/0.12) [8.48/2.2]
|   |   feature4 = classD : classC (0/0) [0/0]
|   |   feature4 = classE
|   |   |   feature8 < 0.62 : classE (2.02/0.02) [1.01/0.01]
|   |   |   feature8 >= 0.62 : classA (2.22/0.21) [0.04/0.04]
|   |   feature4 = classF : classC (3.33/0.17) [1.03/0.01]
|   |   feature4 = classG : classC (0/0) [0/0]
|   feature2 = classD : classD (3.14/0.1) [1.49/0.04]
|   feature2 = classE : classB (19.63/12.05) [4.53/3.3]
|   feature2 = classF : classB (1.03/0) [2.01/0]
|   feature2 = classG : classG (1.03/0.03) [1.01/0.01]
feature1 = classC
|   feature6 = classA : classC (1.11/0.01) [2.05/0.01]
|   feature6 = classB
|   |   feature10 < 0.62 : classE (10.26/0.24) [6.14/0.12]
|   |   feature10 >= 0.62 : classB (3.04/1.03) [1.44/0.44]
|   feature6 = classC
|   |   feature7 < 0.82
|   |   |   feature4 = classA
|   |   |   |   feature10 < 0.52
|   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   feature7 < 0.38 : classG (3.15/0.25) [1.21/0.24]
|   |   |   |   |   |   feature7 >= 0.38 : classF (2.18/0.24) [3.93/1.03]
|   |   |   |   |   feature7 >= 0.65 : classA (5/0.12) [0.12/0.12]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature10 < 0.82
|   |   |   |   |   |   feature10 < 0.73
|   |   |   |   |   |   |   feature7 < 0.75 : classC (8.54/2.44) [3.44/0.31]
|   |   |   |   |   |   |   feature7 >= 0.75 : classA (2/0.07) [0.97/0]
|   |   |   |   |   |   feature10 >= 0.73 : classA (3.19/0.19) [1.13/0.11]
|   |   |   |   |   feature10 >= 0.82 : classC (4.2/0.21) [5.09/2.1]
|   |   |   feature4 = classB : classC (2.09/0.1) [0.09/0.06]
|   |   |   feature4 = classC
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature7 < 0.33 : classE (2.1/0.71) [2.79/1.4]
|   |   |   |   |   feature7 >= 0.33 : classC (25.91/9.06) [12.73/5.67]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   feature8 < 0.78
|   |   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   |   feature7 < 0.58 : classC (3.68/0) [1.42/0]
|   |   |   |   |   |   |   feature7 >= 0.58 : classA (2/1) [0/0]
|   |   |   |   |   |   feature7 >= 0.62 : classC (15.37/1.3) [7.33/0.17]
|   |   |   |   |   feature8 >= 0.78
|   |   |   |   |   |   feature7 < 0.75 : classC (45.55/0.54) [19.58/0.54]
|   |   |   |   |   |   feature7 >= 0.75 : classC (23.55/0.54) [8.98/0]
|   |   |   feature4 = classD : classC (8.47/1.37) [9.32/1.22]
|   |   |   feature4 = classE : classC (5.18/2.18) [1.18/0.15]
|   |   |   feature4 = classF : classC (2.1/0.11) [2.05/1.03]
|   |   |   feature4 = classG : classC (0/0) [0/0]
|   |   feature7 >= 0.82
|   |   |   feature7 < 0.85 : classC (16.98/0.97) [5/0]
|   |   |   feature7 >= 0.85
|   |   |   |   feature4 = classA : classC (17.42/0.14) [7.18/0.13]
|   |   |   |   feature4 = classB : classC (3.07/0) [1.03/0]
|   |   |   |   feature4 = classC
|   |   |   |   |   feature2 = classA : classA (0.13/0) [0.13/0]
|   |   |   |   |   feature2 = classB : classC (1/0) [1/0]
|   |   |   |   |   feature2 = classC : classC (2062.17/0.49) [1033.49/0.13]
|   |   |   |   |   feature2 = classD : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classC (2.01/0) [1/0]
|   |   |   |   |   feature2 = classF : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   |   feature4 = classD
|   |   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (15.37/0) [4.85/0.67]
|   |   |   |   |   feature2 = classD : classC (4.88/0) [1.18/0.21]
|   |   |   |   |   feature2 = classE : classC (1.94/0) [0.08/0.08]
|   |   |   |   |   feature2 = classF : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   |   feature4 = classE : classC (0/0) [0/0]
|   |   |   |   feature4 = classF : classA (0.13/0) [0/0]
|   |   |   |   feature4 = classG : classC (0/0) [0/0]
|   feature6 = classD
|   |   feature5 = classA : classD (3.17/0.15) [1.06/0.05]
|   |   feature5 = classB : classC (0.02/0) [0.01/0]
|   |   feature5 = classC : classD (5.94/1.92) [2.92/0.9]
|   |   feature5 = classD : classD (13.19/0.34) [9.56/0.13]
|   |   feature5 = classE : classA (1.08/0.04) [3.01/2.01]
|   |   feature5 = classF : classD (2.05/0.05) [0.02/0.02]
|   |   feature5 = classG : classD (2.05/0.05) [0.02/0.02]
|   feature6 = classE : classE (11.24/1.22) [2.77/0.75]
|   feature6 = classF
|   |   feature2 = classA : classC (0.01/0) [0/0]
|   |   feature2 = classB : classC (0.01/0) [0/0]
|   |   feature2 = classC : classC (7.55/1.11) [6.7/1.06]
|   |   feature2 = classD : classC (0.03/0) [0.01/0]
|   |   feature2 = classE : classF (3.08/0.08) [2.04/0.03]
|   |   feature2 = classF : classF (8.16/0.15) [3.08/0.07]
|   |   feature2 = classG : classF (0/0) [0/0]
|   feature6 = classG : classG (4.9/0.9) [2.36/0.35]
feature1 = classD
|   feature6 = classA : classG (1.1/0.09) [0.05/0.05]
|   feature6 = classB : classE (4.41/1.39) [5.2/2.18]
|   feature6 = classC
|   |   feature5 = classA : classC (3.35/0.35) [0.23/0.23]
|   |   feature5 = classB : classC (0/0) [0/0]
|   |   feature5 = classC
|   |   |   feature7 < 0.52 : classC (4.53/2.46) [0.7/0.24]
|   |   |   feature7 >= 0.52
|   |   |   |   feature4 = classA : classD (0.08/0.03) [0.08/0]
|   |   |   |   feature4 = classB : classC (0/0) [0/0]
|   |   |   |   feature4 = classC : classC (25.66/0.2) [16.01/0.33]
|   |   |   |   feature4 = classD : classC (10.75/0.48) [3.35/0.31]
|   |   |   |   feature4 = classE : classD (0.05/0) [0/0]
|   |   |   |   feature4 = classF : classA (0.15/0.02) [0/0]
|   |   |   |   feature4 = classG : classG (0.03/0) [0.03/0.02]
|   |   feature5 = classD
|   |   |   feature4 = classA : classD (0.01/0) [0.02/0]
|   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   feature4 = classC : classC (2.05/1.05) [1.02/0.02]
|   |   |   feature4 = classD : classD (5.58/0.06) [4.07/1.06]
|   |   |   feature4 = classE : classD (0.07/0.01) [0.04/0.01]
|   |   |   feature4 = classF : classF (0.01/0) [0/0]
|   |   |   feature4 = classG : classG (0.08/0) [0.08/0.03]
|   |   feature5 = classE : classD (0.71/0.31) [0.34/0.12]
|   |   feature5 = classF
|   |   |   feature4 = classA : classD (0.01/0) [0.01/0]
|   |   |   feature4 = classB : classF (0/0) [0/0]
|   |   |   feature4 = classC : classD (0.01/0.01) [0.01/0]
|   |   |   feature4 = classD : classD (0.1/0.01) [0.03/0.01]
|   |   |   feature4 = classE : classF (2.09/0.01) [1.02/0.01]
|   |   |   feature4 = classF : classF (2.06/0.01) [1.1/0]
|   |   |   feature4 = classG : classG (0.01/0) [0/0]
|   |   feature5 = classG : classG (0.19/0) [0.03/0]
|   feature6 = classD
|   |   feature2 = classA
|   |   |   feature10 < 0.98
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature8 < 0.66
|   |   |   |   |   |   feature4 = classA : classD (3.01/0.01) [1/0]
|   |   |   |   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature4 = classC : classD (0.01/0) [0/0]
|   |   |   |   |   |   feature4 = classD : classD (2.02/0) [0.01/0]
|   |   |   |   |   |   feature4 = classE : classG (0.01/0) [0/0]
|   |   |   |   |   |   feature4 = classF : classA (1.01/0.01) [1.01/0.01]
|   |   |   |   |   |   feature4 = classG : classG (0.01/0) [0/0]
|   |   |   |   |   feature8 >= 0.66 : classA (2.87/0.03) [0.01/0.01]
|   |   |   |   feature7 >= 0.45 : classD (7.76/0.1) [3.17/0.06]
|   |   |   feature10 >= 0.98 : classE (2.03/0.03) [0.02/0.02]
|   |   feature2 = classB : classD (0/0) [0/0]
|   |   feature2 = classC : classD (6.34/1.27) [5.16/0.27]
|   |   feature2 = classD
|   |   |   feature7 < 0.35 : classD (15.66/8.63) [8.01/2]
|   |   |   feature7 >= 0.35
|   |   |   |   feature4 = classA : classD (2.69/0.12) [2.56/0]
|   |   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   |   feature4 = classC : classD (13.21/4.94) [9.09/2.4]
|   |   |   |   feature4 = classD
|   |   |   |   |   feature7 < 0.62 : classD (199.13/7.54) [85.68/5.8]
|   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   feature10 < 0.48
|   |   |   |   |   |   |   feature7 < 0.92 : classD (16.33/0) [8.68/0]
|   |   |   |   |   |   |   feature7 >= 0.92
|   |   |   |   |   |   |   |   feature10 < 0.45 : classD (3.12/0) [1.08/0]
|   |   |   |   |   |   |   |   feature10 >= 0.45 : classF (2.36/0.04) [1.58/0.03]
|   |   |   |   |   |   feature10 >= 0.48 : classD (1581.4/0.38) [808.16/0.84]
|   |   |   |   feature4 = classE : classD (49.56/0.15) [21.06/0.06]
|   |   |   |   feature4 = classF : classD (15.49/1.59) [2.89/0.79]
|   |   |   |   feature4 = classG : classD (20.07/0.9) [6.76/2.02]
|   |   feature2 = classE
|   |   |   feature4 = classA : classD (8.81/0.04) [4.63/0.01]
|   |   |   feature4 = classB : classD (1/0) [0/0]
|   |   |   feature4 = classC : classD (1.21/0.09) [1.13/0.08]
|   |   |   feature4 = classD : classD (48.8/1.24) [23.74/2.18]
|   |   |   feature4 = classE
|   |   |   |   feature7 < 0.35 : classE (5.63/0.92) [2.68/1]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature8 < 0.4 : classE (2.02/0.02) [0.01/0.01]
|   |   |   |   |   feature8 >= 0.4
|   |   |   |   |   |   feature8 < 0.66 : classD (18.68/0.07) [8.11/3.38]
|   |   |   |   |   |   feature8 >= 0.66
|   |   |   |   |   |   |   feature7 < 0.6 : classE (2.7/0.02) [3.69/1.01]
|   |   |   |   |   |   |   feature7 >= 0.6 : classD (3.03/0) [0.01/0]
|   |   |   feature4 = classF : classD (7.16/0.11) [5.06/0.05]
|   |   |   feature4 = classG
|   |   |   |   feature8 < 0.42 : classG (2.57/0.85) [1.71/0.03]
|   |   |   |   feature8 >= 0.42 : classD (2.05/0.04) [0.03/0]
|   |   feature2 = classF
|   |   |   feature4 = classA : classD (0.02/0) [1.02/0]
|   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   feature4 = classC : classD (0.04/0.02) [0.03/0.02]
|   |   |   feature4 = classD : classD (10.91/0.09) [4.99/0.04]
|   |   |   feature4 = classE
|   |   |   |   feature10 < 0.42 : classD (2.03/0.01) [0.01/0]
|   |   |   |   feature10 >= 0.42 : classF (2.55/0.03) [0.01/0.01]
|   |   |   feature4 = classF : classF (1.71/0.01) [3.37/0]
|   |   |   feature4 = classG : classF (4.23/0.03) [1.02/1.02]
|   |   feature2 = classG
|   |   |   feature7 < 0.72
|   |   |   |   feature8 < 0.54
|   |   |   |   |   feature8 < 0.38 : classG (4.26/0.05) [0.87/0.03]
|   |   |   |   |   feature8 >= 0.38 : classD (3.9/0.88) [2.03/0.01]
|   |   |   |   feature8 >= 0.54 : classG (6.46/0.08) [1.89/1.04]
|   |   |   feature7 >= 0.72 : classD (3.12/0.02) [2.09/0.02]
|   feature6 = classE
|   |   feature2 = classA : classE (6.51/1.5) [0.07/0.07]
|   |   feature2 = classB : classE (0/0) [0/0]
|   |   feature2 = classC : classD (0.14/0.14) [0.13/0.03]
|   |   feature2 = classD
|   |   |   feature7 < 0.65
|   |   |   |   feature11 < 0.62 : classD (10.35/2.3) [6.63/1.1]
|   |   |   |   feature11 >= 0.62 : classE (20.51/3.42) [12.26/1.24]
|   |   |   feature7 >= 0.65
|   |   |   |   feature11 < 0.72 : classD (19.76/0.16) [12.95/1.14]
|   |   |   |   feature11 >= 0.72 : classD (6.55/2.05) [3.98/3.05]
|   |   feature2 = classE : classE (172.4/14.55) [84.19/5.35]
|   |   feature2 = classF : classD (2.2/1.98) [2.51/0.39]
|   |   feature2 = classG : classG (0.98/0.02) [0.2/0.01]
|   feature6 = classF
|   |   feature4 = classA : classF (6.24/0.23) [5.14/1.13]
|   |   feature4 = classB : classF (0/0) [0/0]
|   |   feature4 = classC : classF (4.26/0.25) [0.14/0.13]
|   |   feature4 = classD
|   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classD (0/0) [0.02/0]
|   |   |   feature2 = classD : classD (7.27/0.12) [2.33/0.1]
|   |   |   feature2 = classE : classE (1.24/0.22) [2.17/0.17]
|   |   |   feature2 = classF : classD (4.23/0.06) [1.13/0.03]
|   |   |   feature2 = classG : classG (0.05/0) [0/0]
|   |   feature4 = classE : classE (6.5/3.4) [0.3/0.11]
|   |   feature4 = classF : classF (28.24/0.08) [10.21/2.07]
|   |   feature4 = classG : classD (0.4/0.4) [1.14/0.09]
|   feature6 = classG
|   |   feature2 = classA : classD (1.54/0.47) [1.17/0.15]
|   |   feature2 = classB : classG (0/0) [0/0]
|   |   feature2 = classC : classD (0.02/0.02) [0.02/0]
|   |   feature2 = classD
|   |   |   feature4 = classA : classD (2.02/0.01) [0.02/0]
|   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   feature4 = classC : classC (0.1/0.06) [0.05/0.03]
|   |   |   feature4 = classD : classD (9.12/0.08) [2.86/0.06]
|   |   |   feature4 = classE : classD (0.06/0.01) [0.03/0]
|   |   |   feature4 = classF : classF (0.01/0) [0.01/0]
|   |   |   feature4 = classG : classD (1.03/0.03) [0.02/0]
|   |   feature2 = classE : classD (0.34/0.14) [0.33/0.16]
|   |   feature2 = classF : classF (2.23/0.07) [0.1/0.04]
|   |   feature2 = classG : classG (22.6/2.37) [10.28/0.24]
feature1 = classE
|   feature6 = classA : classE (3.49/0.1) [1.19/0.05]
|   feature6 = classB : classE (1.16/0.03) [0.06/0.02]
|   feature6 = classC
|   |   feature2 = classA : classA (0.53/0.23) [0.38/0.1]
|   |   feature2 = classB : classB (0.01/0) [0.01/0]
|   |   feature2 = classC : classC (13.66/0.41) [6.23/0.27]
|   |   feature2 = classD : classD (0.35/0.14) [1.08/0.03]
|   |   feature2 = classE
|   |   |   feature10 < 0.42 : classA (3.18/0.17) [0.06/0.06]
|   |   |   feature10 >= 0.42 : classE (2.82/0.27) [1.04/0.11]
|   |   feature2 = classF : classF (10.39/0.25) [6.16/0.11]
|   |   feature2 = classG : classG (0.04/0.01) [0.04/0.01]
|   feature6 = classD
|   |   feature5 = classA : classD (8.87/1.83) [7.81/0.8]
|   |   feature5 = classB : classB (0.07/0) [0.07/0]
|   |   feature5 = classC : classC (0.23/0.14) [0.34/0.13]
|   |   feature5 = classD : classD (66.99/3.91) [35.5/1.72]
|   |   feature5 = classE
|   |   |   feature8 < 0.78 : classD (41.82/13.07) [16.14/4.91]
|   |   |   feature8 >= 0.78
|   |   |   |   feature9 < 0.62 : classE (12.35/0.2) [6.11/0.04]
|   |   |   |   feature9 >= 0.62 : classE (9.03/4.15) [2.81/1.03]
|   |   feature5 = classF
|   |   |   feature2 = classA : classE (0.02/0.01) [0/0]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classE (0.07/0) [0/0]
|   |   |   feature2 = classD : classE (0.01/0) [0/0]
|   |   |   feature2 = classE : classD (3.36/0.34) [0.11/0.1]
|   |   |   feature2 = classF : classD (2.7/0.69) [3.28/0.28]
|   |   |   feature2 = classG : classG (1.02/0.02) [0.01/0.01]
|   |   feature5 = classG : classG (4.52/1.32) [5.37/0.11]
|   feature6 = classE
|   |   feature5 = classA : classE (193.95/5.72) [90.5/1.66]
|   |   feature5 = classB : classB (0.88/0.03) [0.87/0.01]
|   |   feature5 = classC : classC (3.01/1.8) [4.56/1.75]
|   |   feature5 = classD
|   |   |   feature7 < 0.45
|   |   |   |   feature10 < 0.72 : classD (7.23/0.11) [1.08/0.05]
|   |   |   |   feature10 >= 0.72 : classE (2.15/1.08) [1.01/0.01]
|   |   |   feature7 >= 0.45
|   |   |   |   feature4 = classA : classE (0.12/0.02) [0.02/0]
|   |   |   |   feature4 = classB : classE (0.02/0) [0.02/0.02]
|   |   |   |   feature4 = classC : classE (0/0) [0.04/0]
|   |   |   |   feature4 = classD
|   |   |   |   |   feature10 < 0.45 : classE (3.09/0.01) [1.06/0]
|   |   |   |   |   feature10 >= 0.45
|   |   |   |   |   |   feature10 < 0.6 : classD (4.3/0.02) [2.72/1.01]
|   |   |   |   |   |   feature10 >= 0.6 : classE (3.87/0.87) [3.01/0]
|   |   |   |   feature4 = classE
|   |   |   |   |   feature10 < 0.78
|   |   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   |   feature10 < 0.52 : classE (5.79/0.12) [0.89/0]
|   |   |   |   |   |   |   feature10 >= 0.52 : classD (4.61/2.04) [1.72/0.01]
|   |   |   |   |   |   feature10 >= 0.58 : classE (11.1/0.03) [2.08/0.01]
|   |   |   |   |   feature10 >= 0.78 : classE (3.17/2.01) [1.04/0]
|   |   |   |   feature4 = classF : classF (0.12/0.02) [0.04/0.02]
|   |   |   |   feature4 = classG : classD (0/0) [0.9/0.04]
|   |   feature5 = classE
|   |   |   feature4 = classA : classE (31.95/3.95) [22.4/0.91]
|   |   |   feature4 = classB : classE (0.73/0) [0.73/0.73]
|   |   |   feature4 = classC : classE (8.61/0.88) [3.34/0.87]
|   |   |   feature4 = classD : classE (114.77/8.62) [54.19/1.05]
|   |   |   feature4 = classE
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature7 < 0.35 : classE (12.16/2) [6.5/0.65]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature8 < 0.38 : classD (2.85/1.12) [0.03/0.01]
|   |   |   |   |   |   feature8 >= 0.38 : classE (180.38/6.88) [97.62/7.13]
|   |   |   |   feature7 >= 0.55 : classE (1313.5/8.4) [658.36/8.65]
|   |   |   feature4 = classF : classE (24.8/3.7) [18.24/1.05]
|   |   |   feature4 = classG
|   |   |   |   feature8 < 0.58
|   |   |   |   |   feature2 = classA : classE (4.02/0.01) [3.39/0.39]
|   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classG (2.73/0.01) [0.27/0.01]
|   |   |   |   |   feature2 = classF : classE (0.73/0) [0.07/0.07]
|   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   feature8 >= 0.58 : classE (7.89/0.02) [8.63/1.62]
|   |   feature5 = classF
|   |   |   feature4 = classA : classE (3.88/0.08) [0.9/0.01]
|   |   |   feature4 = classB : classE (0.02/0) [0.02/0.02]
|   |   |   feature4 = classC : classE (0/0) [0.03/0]
|   |   |   feature4 = classD : classF (5.87/0.16) [1.92/0.07]
|   |   |   feature4 = classE : classE (21.15/1.8) [9.15/0.04]
|   |   |   feature4 = classF : classF (8.02/1.94) [2.64/0.91]
|   |   |   feature4 = classG : classG (0.02/0.02) [0.03/0]
|   |   feature5 = classG
|   |   |   feature7 < 0.45 : classG (5.84/1.12) [2.04/0.03]
|   |   |   feature7 >= 0.45 : classE (10.77/1.94) [8.43/3.46]
|   feature6 = classF
|   |   feature2 = classA
|   |   |   feature4 = classA : classE (1.65/0.17) [0.17/0]
|   |   |   feature4 = classB : classA (0/0) [0/0]
|   |   |   feature4 = classC : classF (0/0) [0/0]
|   |   |   feature4 = classD : classE (0.03/0.01) [0.01/0]
|   |   |   feature4 = classE : classE (0.23/0.05) [0.12/0]
|   |   |   feature4 = classF : classF (5.06/0.04) [3.03/0.02]
|   |   |   feature4 = classG : classE (4.18/0.01) [0.12/0.02]
|   |   feature2 = classB : classB (0.05/0) [0.05/0]
|   |   feature2 = classC : classC (0.24/0.11) [1.28/0.05]
|   |   feature2 = classD : classD (2.4/0.56) [2.33/0.12]
|   |   feature2 = classE
|   |   |   feature5 = classA : classE (1.75/0.02) [0.29/0.01]
|   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   feature5 = classC : classE (0/0) [0.05/0]
|   |   |   feature5 = classD : classE (1.37/0.28) [0.13/0.11]
|   |   |   feature5 = classE : classE (13.95/0.58) [5.52/0.2]
|   |   |   feature5 = classF : classF (8.58/1.56) [5.19/0.19]
|   |   |   feature5 = classG : classE (0.22/0.05) [0.16/0.11]
|   |   feature2 = classF
|   |   |   feature4 = classA : classE (0.15/0.04) [0.04/0]
|   |   |   feature4 = classB : classA (0/0) [0.04/0]
|   |   |   feature4 = classC : classF (2.01/0.01) [0.01/0.01]
|   |   |   feature4 = classD : classF (6.38/0.27) [3.17/0.12]
|   |   |   feature4 = classE : classF (24.74/0.74) [11.26/0.26]
|   |   |   feature4 = classF : classF (47.99/0.47) [21.39/0.25]
|   |   |   feature4 = classG : classF (1.06/0.06) [0.07/0.07]
|   |   feature2 = classG : classG (0.16/0.06) [0.16/0.05]
|   feature6 = classG
|   |   feature4 = classA : classG (1.55/0.53) [0.09/0.09]
|   |   feature4 = classB : classA (0.02/0.02) [0.03/0.01]
|   |   feature4 = classC : classG (1.06/0.06) [0.08/0.08]
|   |   feature4 = classD : classG (0.34/0.34) [1.09/0.09]
|   |   feature4 = classE
|   |   |   feature7 < 0.55 : classG (3.56/1.56) [1.17/0.17]
|   |   |   feature7 >= 0.55 : classE (6.1/0.09) [1.78/0.05]
|   |   feature4 = classF
|   |   |   feature2 = classA : classA (0.02/0) [0.02/0]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classF (0.01/0) [0/0]
|   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   feature2 = classE : classG (2.06/0.06) [0.04/0.04]
|   |   |   feature2 = classF : classF (0.11/0.03) [0.03/0.01]
|   |   |   feature2 = classG : classG (2.05/0.05) [1.02/0.02]
|   |   feature4 = classG : classG (9.2/0.15) [2.18/0.11]
feature1 = classF
|   feature5 = classA
|   |   feature3 = classA : classA (2.11/0.11) [2.06/0.06]
|   |   feature3 = classB : classF (0/0) [0/0]
|   |   feature3 = classC : classA (0.14/0.01) [0.14/0]
|   |   feature3 = classD : classD (1.06/0.06) [0.03/0.03]
|   |   feature3 = classE
|   |   |   feature7 < 0.55 : classE (12.42/0.39) [9.14/1.13]
|   |   |   feature7 >= 0.55 : classF (5.54/0.03) [3.37/1.02]
|   |   feature3 = classF : classF (298.96/6.3) [159.47/0.94]
|   |   feature3 = classG
|   |   |   feature9 < 0.78 : classF (9.51/1.07) [3.27/1.03]
|   |   |   feature9 >= 0.78
|   |   |   |   feature4 = classA : classG (4.16/0.16) [1.17/0.16]
|   |   |   |   feature4 = classB : classB (0.01/0) [0/0]
|   |   |   |   feature4 = classC : classF (0.01/0) [0/0]
|   |   |   |   feature4 = classD : classF (0.02/0.01) [0/0]
|   |   |   |   feature4 = classE : classF (0.01/0) [0.01/0]
|   |   |   |   feature4 = classF : classF (0.18/0.01) [0.08/0]
|   |   |   |   feature4 = classG : classG (2.09/0.08) [1.06/0.06]
|   feature5 = classB : classB (0/0) [3/0]
|   feature5 = classC
|   |   feature4 = classA : classA (0.05/0.03) [0.04/0.01]
|   |   feature4 = classB : classB (0.03/0.02) [0/0]
|   |   feature4 = classC
|   |   |   feature8 < 0.4 : classA (2.02/0.02) [0.01/0]
|   |   |   feature8 >= 0.4 : classC (20.19/0.29) [9.24/0.29]
|   |   feature4 = classD : classC (4.29/0.16) [1.05/0.03]
|   |   feature4 = classE : classF (0.03/0) [3.04/1.01]
|   |   feature4 = classF : classF (4.72/0.33) [1.25/1.05]
|   |   feature4 = classG : classF (0.15/0.03) [0.04/0]
|   feature5 = classD
|   |   feature4 = classA : classD (1.1/0.06) [0.07/0.06]
|   |   feature4 = classB : classB (0.04/0.02) [0/0]
|   |   feature4 = classC : classF (0.08/0) [0/0]
|   |   feature4 = classD : classD (29.68/3.34) [9.31/1.09]
|   |   feature4 = classE : classD (4.33/0.07) [3.11/0.07]
|   |   feature4 = classF
|   |   |   feature2 = classA : classF (0/0) [0/0]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   feature2 = classD : classD (0.23/0.07) [0.08/0.03]
|   |   |   feature2 = classE : classD (2.1/1.09) [2.09/0.09]
|   |   |   feature2 = classF : classF (3.39/0.03) [2.16/0]
|   |   |   feature2 = classG : classF (0/0) [0/0]
|   |   feature4 = classG : classF (0.19/0.04) [0.06/0]
|   feature5 = classE
|   |   feature4 = classA
|   |   |   feature8 < 0.5
|   |   |   |   feature7 < 0.58 : classE (3.1/0.06) [1.08/0.08]
|   |   |   |   feature7 >= 0.58 : classF (2.01/0) [4/0]
|   |   |   feature8 >= 0.5 : classG (3.07/1.06) [4.05/3.05]
|   |   feature4 = classB : classB (1.08/0.05) [0/0]
|   |   feature4 = classC : classF (0.15/0) [0/0]
|   |   feature4 = classD : classD (4.34/2.34) [7.01/3.01]
|   |   feature4 = classE
|   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   feature6 = classD : classE (2.23/1.02) [1.07/0.01]
|   |   |   feature6 = classE
|   |   |   |   feature9 < 0.72 : classE (16.73/2.15) [3.49/2.08]
|   |   |   |   feature9 >= 0.72 : classE (20.07/0.18) [12.59/1.1]
|   |   |   feature6 = classF : classF (3.35/0.32) [2.1/0.09]
|   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   feature4 = classF
|   |   |   feature6 = classA : classF (0/0) [0/0]
|   |   |   feature6 = classB : classF (0/0) [0/0]
|   |   |   feature6 = classC : classF (0/0) [0/0]
|   |   |   feature6 = classD : classD (4.55/2.54) [2.68/1.68]
|   |   |   feature6 = classE
|   |   |   |   feature7 < 0.48 : classE (7.04/0.04) [1.17/0.17]
|   |   |   |   feature7 >= 0.48 : classF (6.6/2.06) [3.13/1.14]
|   |   |   feature6 = classF : classF (6.06/0.04) [5.9/0.01]
|   |   |   feature6 = classG : classF (0/0) [0/0]
|   |   feature4 = classG : classE (5.42/1.42) [1.13/1.13]
|   feature5 = classF
|   |   feature7 < 0.35
|   |   |   feature4 = classA : classA (1.67/0.86) [0.81/0]
|   |   |   feature4 = classB : classB (0.83/0.08) [0.03/0.03]
|   |   |   feature4 = classC : classF (0/0) [0/0]
|   |   |   feature4 = classD : classA (1.67/0.11) [0.05/0]
|   |   |   feature4 = classE : classF (4.44/0.43) [2.14/0.14]
|   |   |   feature4 = classF
|   |   |   |   feature11 < 0.78 : classA (2.22/0.15) [0.07/0]
|   |   |   |   feature11 >= 0.78 : classF (12.2/1.19) [14.4/0.4]
|   |   |   feature4 = classG : classF (0/0) [0/0]
|   |   feature7 >= 0.35 : classF (1652.55/13.86) [813.02/6.75]
|   feature5 = classG
|   |   feature2 = classA : classA (0.36/0.09) [0.03/0.03]
|   |   feature2 = classB : classG (0/0) [0/0]
|   |   feature2 = classC : classG (0/0) [0/0]
|   |   feature2 = classD : classF (0.08/0) [0.03/0]
|   |   feature2 = classE : classE (1.05/0.05) [0.07/0.07]
|   |   feature2 = classF : classF (5.49/0.04) [3.09/0.02]
|   |   feature2 = classG
|   |   |   feature4 = classA : classA (0.08/0.05) [0.07/0.02]
|   |   |   feature4 = classB : classB (0.05/0.02) [0/0]
|   |   |   feature4 = classC : classF (0.1/0) [0/0]
|   |   |   feature4 = classD : classG (4.22/0.22) [4.01/0.01]
|   |   |   feature4 = classE : classF (0.02/0) [0.02/0.02]
|   |   |   feature4 = classF : classG (19.43/0.35) [6.35/1.34]
|   |   |   feature4 = classG : classG (30.38/0.29) [14.14/0.13]
feature1 = classG
|   feature2 = classA
|   |   feature3 = classA : classA (6.23/0.68) [1.44/0.27]
|   |   feature3 = classB : classA (4.98/0.55) [2.35/0.22]
|   |   feature3 = classC : classA (0.37/0.04) [0.32/0.02]
|   |   feature3 = classD : classA (3.74/0.41) [4.26/1.16]
|   |   feature3 = classE
|   |   |   feature7 < 0.55
|   |   |   |   feature10 < 0.92 : classA (2.88/1.18) [2.58/0.22]
|   |   |   |   feature10 >= 0.92 : classE (6.04/0.04) [4.02/1.02]
|   |   |   feature7 >= 0.55
|   |   |   |   feature8 < 0.62 : classG (2.57/0.18) [1.42/0]
|   |   |   |   feature8 >= 0.62 : classA (8.44/0.57) [5.4/0.22]
|   |   feature3 = classF
|   |   |   feature7 < 0.58 : classF (17.26/2.23) [11.69/4.67]
|   |   |   feature7 >= 0.58
|   |   |   |   feature4 = classA : classA (2.84/0.25) [0.09/0.09]
|   |   |   |   feature4 = classB : classA (0/0) [0/0]
|   |   |   |   feature4 = classC : classA (0/0) [0/0]
|   |   |   |   feature4 = classD : classG (0.02/0) [0.2/0]
|   |   |   |   feature4 = classE : classG (0.01/0) [0.01/0]
|   |   |   |   feature4 = classF : classA (0/0) [0/0]
|   |   |   |   feature4 = classG : classG (2.29/0.39) [0.6/0.2]
|   |   feature3 = classG
|   |   |   feature8 < 0.94 : classG (51.36/3.6) [23.56/3.2]
|   |   |   feature8 >= 0.94
|   |   |   |   feature7 < 0.58 : classA (3.05/0.06) [0.52/0.02]
|   |   |   |   feature7 >= 0.58 : classG (2.18/1) [0.07/0]
|   feature2 = classB : classB (2.1/0.1) [0.04/0.04]
|   feature2 = classC
|   |   feature8 < 0.74 : classE (3.31/0.3) [1.06/0.06]
|   |   feature8 >= 0.74 : classC (10.66/0.51) [4.75/0.34]
|   feature2 = classD
|   |   feature5 = classA : classD (1.1/0.1) [0.06/0.06]
|   |   feature5 = classB : classD (0/0) [0/0]
|   |   feature5 = classC : classD (0/0) [0/0]
|   |   feature5 = classD
|   |   |   feature4 = classA : classG (0.15/0.07) [0.05/0]
|   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   feature4 = classC : classD (0/0) [0/0]
|   |   |   feature4 = classD : classD (28.13/1.62) [10.52/0.19]
|   |   |   feature4 = classE : classD (2.35/1.13) [2.07/1.05]
|   |   |   feature4 = classF : classG (0.04/0) [0.03/0]
|   |   |   feature4 = classG : classD (11.05/2.7) [7.17/3.05]
|   |   feature5 = classE : classD (0/0) [0/0]
|   |   feature5 = classF : classD (0/0) [0/0]
|   |   feature5 = classG : classG (8.76/0.03) [5.5/0.01]
|   feature2 = classE
|   |   feature7 < 0.55
|   |   |   feature4 = classA : classE (4.06/0.06) [0.03/0.03]
|   |   |   feature4 = classB : classE (0/0) [0/0]
|   |   |   feature4 = classC : classE (0/0) [0/0]
|   |   |   feature4 = classD : classE (2.03/0.03) [3/1]
|   |   |   feature4 = classE
|   |   |   |   feature10 < 0.38 : classG (3.08/1.01) [2.01/0]
|   |   |   |   feature10 >= 0.38 : classE (14.09/1.06) [10.05/2.05]
|   |   |   feature4 = classF
|   |   |   |   feature10 < 0.52 : classE (3.04/1.04) [2.2/1.2]
|   |   |   |   feature10 >= 0.52 : classA (4.02/1.02) [2.01/2.01]
|   |   |   feature4 = classG : classE (4.28/1.28) [1.09/1.09]
|   |   feature7 >= 0.55
|   |   |   feature8 < 0.54 : classG (14.58/0.07) [11.72/0.1]
|   |   |   feature8 >= 0.54 : classE (3.36/1.36) [2.14/0.14]
|   feature2 = classF
|   |   feature7 < 0.82
|   |   |   feature4 = classA : classA (2.41/0.41) [0.15/0.15]
|   |   |   feature4 = classB : classF (0/0) [0/0]
|   |   |   feature4 = classC : classF (0/0) [0/0]
|   |   |   feature4 = classD : classD (0.14/0.14) [1/0]
|   |   |   feature4 = classE : classG (0.24/0.05) [0.09/0.05]
|   |   |   feature4 = classF
|   |   |   |   feature8 < 0.78
|   |   |   |   |   feature9 < 0.67 : classF (8.93/0.11) [7.25/0.05]
|   |   |   |   |   feature9 >= 0.67 : classA (2.23/0.23) [1.81/0.81]
|   |   |   |   feature8 >= 0.78 : classF (73.03/0.92) [41.45/0.38]
|   |   |   feature4 = classG : classF (14.4/1.37) [5.68/1.66]
|   |   feature7 >= 0.82
|   |   |   feature8 < 0.72 : classG (10.75/0) [2.53/0]
|   |   |   feature8 >= 0.72 : classF (2.39/0.39) [2.12/0.12]
|   feature2 = classG
|   |   feature7 < 0.72
|   |   |   feature4 = classA : classG (8.44/4.53) [2.81/0.05]
|   |   |   feature4 = classB : classG (1.07/0.01) [1.03/0.01]
|   |   |   feature4 = classC : classG (2.14/0.02) [0.06/0.01]
|   |   |   feature4 = classD : classG (5.97/1.06) [0.17/0.04]
|   |   |   feature4 = classE : classG (21.72/3.07) [4.32/0.99]
|   |   |   feature4 = classF : classG (12.54/0.12) [13.07/0.08]
|   |   |   feature4 = classG
|   |   |   |   feature7 < 0.45 : classG (26.53/5.01) [3.7/0]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature5 = classA : classG (7.14/0.08) [3.76/0.05]
|   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classG (3.57/0.04) [1.38/0.03]
|   |   |   |   |   feature5 = classE : classG (1.19/0.01) [0.13/0.01]
|   |   |   |   |   feature5 = classF : classF (2.38/0.36) [2.25/0.24]
|   |   |   |   |   feature5 = classG : classG (183.33/2.98) [111.63/4.29]
|   |   feature7 >= 0.72 : classG (1840.92/0.55) [929.31/0]

Size of the tree : 783

Weight: 3.81


REPTree
============

feature4 = classA
|   feature3 = classA
|   |   feature7 < 0.78
|   |   |   feature1 = classA
|   |   |   |   feature10 < 0.92
|   |   |   |   |   feature10 < 0.85
|   |   |   |   |   |   feature7 < 0.52 : classG (17.06/2.39) [15.44/5.66]
|   |   |   |   |   |   feature7 >= 0.52 : classA (14.6/6.68) [5.99/0.32]
|   |   |   |   |   feature10 >= 0.85
|   |   |   |   |   |   feature7 < 0.52 : classE (23.24/0.2) [23.34/0.31]
|   |   |   |   |   |   feature7 >= 0.52 : classA (3.76/1.2) [1.61/0.25]
|   |   |   |   feature10 >= 0.92
|   |   |   |   |   feature7 < 0.58 : classF (35.81/1.48) [21.09/1.43]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature7 < 0.68 : classA (2.94/1.22) [0.54/0.41]
|   |   |   |   |   |   feature7 >= 0.68 : classC (7.1/2.21) [0.65/0.65]
|   |   |   feature1 = classB : classE (10.27/0.49) [5.86/0.97]
|   |   |   feature1 = classC : classD (18.02/10.37) [5.15/4.23]
|   |   |   feature1 = classD
|   |   |   |   feature7 < 0.48 : classF (6.72/2.11) [3.4/1.54]
|   |   |   |   feature7 >= 0.48 : classA (6.57/1.68) [0.98/0.98]
|   |   |   feature1 = classE
|   |   |   |   feature7 < 0.32 : classG (6.2/0.39) [4.91/0.02]
|   |   |   |   feature7 >= 0.32 : classD (10.98/4.25) [18.06/6.44]
|   |   |   feature1 = classF : classA (28.46/13.77) [13.03/7.11]
|   |   |   feature1 = classG
|   |   |   |   feature10 < 0.83 : classF (18.44/6.95) [6.88/0.83]
|   |   |   |   feature10 >= 0.83 : classA (12.22/1.31) [6.22/0.82]
|   |   feature7 >= 0.78 : classA (443.58/7.48) [224.26/2.82]
|   feature3 = classB
|   |   feature1 = classA
|   |   |   feature7 < 0.75
|   |   |   |   feature10 < 0.92 : classB (106.09/13.72) [54.79/8.73]
|   |   |   |   feature10 >= 0.92 : classF (12.85/2.36) [6.14/0.13]
|   |   |   feature7 >= 0.75 : classA (20.79/1.7) [10.53/0.06]
|   |   feature1 = classB
|   |   |   feature7 < 0.42 : classA (24.33/1.3) [0.07/0.07]
|   |   |   feature7 >= 0.42
|   |   |   |   feature7 < 0.52 : classE (3.53/0.55) [1.78/0.29]
|   |   |   |   feature7 >= 0.52 : classB (2.63/0.31) [2.65/0.01]
|   |   feature1 = classC : classD (5.73/3.39) [2.07/1.79]
|   |   feature1 = classD
|   |   |   feature7 < 0.48 : classF (2.05/0.64) [0.88/0.31]
|   |   |   feature7 >= 0.48 : classA (2.11/0.62) [0.31/0.31]
|   |   feature1 = classE : classD (5.28/3.23) [7.08/3.53]
|   |   feature1 = classF : classA (8.06/4.2) [3.98/2.17]
|   |   feature1 = classG
|   |   |   feature7 < 0.62 : classA (6.59/2.51) [3.31/0.76]
|   |   |   feature7 >= 0.62 : classF (3.32/0.32) [1.79/0.29]
|   feature3 = classC
|   |   feature1 = classA
|   |   |   feature7 < 0.62
|   |   |   |   feature8 < 0.76 : classF (6.49/2.02) [1.34/0.44]
|   |   |   |   feature8 >= 0.76
|   |   |   |   |   feature10 < 0.97 : classF (4.34/2.55) [5.16/2.47]
|   |   |   |   |   feature10 >= 0.97 : classC (23.6/0.42) [23.67/0.59]
|   |   |   feature7 >= 0.62 : classA (27.04/2.52) [13.2/0.12]
|   |   feature1 = classB : classE (2.11/0.33) [1.13/0.24]
|   |   feature1 = classC : classA (41.91/16.64) [54.01/6.89]
|   |   feature1 = classD : classF (2.5/1.66) [0.73/0.39]
|   |   feature1 = classE : classD (3.17/1.94) [4.26/2.14]
|   |   feature1 = classF : classA (4.84/2.53) [2.42/1.3]
|   |   feature1 = classG
|   |   |   feature10 < 0.83 : classF (3.26/1.16) [1.36/0.25]
|   |   |   feature10 >= 0.83 : classA (2.07/0.27) [1.13/0.17]
|   feature3 = classD
|   |   feature7 < 0.88
|   |   |   feature1 = classA : classD (116.81/66.97) [81.71/32]
|   |   |   feature1 = classB : classA (5.33/5.33) [26.08/2.57]
|   |   |   feature1 = classC
|   |   |   |   feature7 < 0.45 : classD (4.75/1.73) [0.8/0.79]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.53 : classC (3.05/0.49) [0.49/0.49]
|   |   |   |   |   feature7 >= 0.53 : classA (2.19/1.34) [1.7/1.13]
|   |   |   feature1 = classD : classD (14.68/7.57) [8.98/2.97]
|   |   |   feature1 = classE
|   |   |   |   feature7 < 0.32 : classG (3.22/0.21) [2.54/0.01]
|   |   |   |   feature7 >= 0.32 : classD (8.8/2.23) [11.41/3.34]
|   |   |   feature1 = classF
|   |   |   |   feature10 < 0.63 : classA (6.13/0.78) [5.44/2.77]
|   |   |   |   feature10 >= 0.63 : classD (31.4/7.79) [1.41/0.97]
|   |   |   feature1 = classG
|   |   |   |   feature7 < 0.4 : classD (46.7/0.53) [0.29/0.24]
|   |   |   |   feature7 >= 0.4
|   |   |   |   |   feature10 < 0.83 : classF (9.03/3.08) [3.52/0.38]
|   |   |   |   |   feature10 >= 0.83 : classA (5.83/0.71) [2.99/0.45]
|   |   feature7 >= 0.88 : classA (86.81/3.21) [38.53/1.48]
|   feature3 = classE
|   |   feature1 = classA
|   |   |   feature7 < 0.82
|   |   |   |   feature5 = classA
|   |   |   |   |   feature8 < 0.9
|   |   |   |   |   |   feature8 < 0.82 : classA (33.81/4.38) [25.43/24.33]
|   |   |   |   |   |   feature8 >= 0.82
|   |   |   |   |   |   |   feature7 < 0.52 : classE (4.55/1.48) [2.22/1.2]
|   |   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   |   feature7 < 0.55 : classF (12.34/0.09) [18.35/0]
|   |   |   |   |   |   |   |   feature7 >= 0.55 : classA (2.91/0.9) [1.38/0.06]
|   |   |   |   |   feature8 >= 0.9 : classE (194.09/30.27) [63.99/15.88]
|   |   |   |   feature5 = classB : classA (0.15/0.02) [0.28/0.01]
|   |   |   |   feature5 = classC : classA (0.15/0.02) [0.01/0.01]
|   |   |   |   feature5 = classD : classA (1.18/0.12) [0.07/0.06]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature10 < 0.63 : classG (9.05/3.5) [6.52/2.83]
|   |   |   |   |   feature10 >= 0.63
|   |   |   |   |   |   feature9 < 0.88 : classA (7.06/0.35) [2.64/0.06]
|   |   |   |   |   |   feature9 >= 0.88
|   |   |   |   |   |   |   feature11 < 0.87 : classE (90.86/5.04) [24.11/1.08]
|   |   |   |   |   |   |   feature11 >= 0.87
|   |   |   |   |   |   |   |   feature10 < 0.92 : classA (7.65/0.89) [2.67/0.06]
|   |   |   |   |   |   |   |   feature10 >= 0.92 : classE (7.47/0.36) [1.09/0.07]
|   |   |   |   feature5 = classF
|   |   |   |   |   feature10 < 0.98 : classA (3.28/2.41) [4.36/2.11]
|   |   |   |   |   feature10 >= 0.98 : classF (31.62/1.01) [6.38/0.19]
|   |   |   |   feature5 = classG : classA (0.57/0.06) [0.54/0.03]
|   |   |   feature7 >= 0.82
|   |   |   |   feature10 < 0.55 : classA (5.67/1.16) [2.2/0.02]
|   |   |   |   feature10 >= 0.55 : classA (149.86/0.41) [101.32/23.45]
|   |   feature1 = classB : classA (14.91/13.76) [30.67/6.49]
|   |   feature1 = classC : classD (23.42/13.87) [6.36/5.21]
|   |   feature1 = classD : classD (43.91/18.94) [28.57/5.23]
|   |   feature1 = classE
|   |   |   feature7 < 0.48
|   |   |   |   feature7 < 0.32
|   |   |   |   |   feature10 < 0.82 : classE (4.24/0.52) [0.52/0.01]
|   |   |   |   |   feature10 >= 0.82 : classG (7.12/0.29) [6.12/0.02]
|   |   |   |   feature7 >= 0.32 : classD (18.5/9.59) [18.81/9.9]
|   |   |   feature7 >= 0.48 : classE (29.94/1.45) [20.47/7.34]
|   |   feature1 = classF
|   |   |   feature10 < 0.88
|   |   |   |   feature10 < 0.52 : classA (15.77/2.53) [14.33/7.79]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature7 < 0.48 : classE (14.8/8.18) [47.14/0.06]
|   |   |   |   |   feature7 >= 0.48 : classF (2.67/0.53) [1.79/1.12]
|   |   |   feature10 >= 0.88 : classA (27.63/3.04) [2.2/1.68]
|   |   feature1 = classG
|   |   |   feature10 < 0.82
|   |   |   |   feature10 < 0.78
|   |   |   |   |   feature10 < 0.68 : classA (2.5/1.34) [2.36/1.2]
|   |   |   |   |   feature10 >= 0.68 : classE (7.11/0.5) [1.48/0.97]
|   |   |   |   feature10 >= 0.78 : classF (13.68/0.72) [7.24/0.63]
|   |   |   feature10 >= 0.82
|   |   |   |   feature7 < 0.52 : classF (4.34/2.09) [3.07/1.57]
|   |   |   |   feature7 >= 0.52 : classA (38.64/1.72) [6.68/0.44]
|   feature3 = classF
|   |   feature1 = classA
|   |   |   feature7 < 0.58
|   |   |   |   feature10 < 0.68 : classG (15.97/1.55) [16.01/6.39]
|   |   |   |   feature10 >= 0.68
|   |   |   |   |   feature10 < 0.9 : classF (5/1.41) [2.74/1.19]
|   |   |   |   |   feature10 >= 0.9 : classF (51.89/0.73) [45.61/23.69]
|   |   |   feature7 >= 0.58
|   |   |   |   feature8 < 0.94
|   |   |   |   |   feature8 < 0.86
|   |   |   |   |   |   feature7 < 0.88
|   |   |   |   |   |   |   feature7 < 0.85
|   |   |   |   |   |   |   |   feature10 < 0.82 : classA (7.9/0.49) [2.74/0.12]
|   |   |   |   |   |   |   |   feature10 >= 0.82 : classA (4.47/1.79) [1.01/0.07]
|   |   |   |   |   |   |   feature7 >= 0.85
|   |   |   |   |   |   |   |   feature11 < 0.93 : classA (2.24/0.02) [0.56/0.01]
|   |   |   |   |   |   |   |   feature11 >= 0.93 : classF (3.36/0.29) [2.12/0.07]
|   |   |   |   |   |   feature7 >= 0.88 : classA (20.18/0.2) [14.52/0.06]
|   |   |   |   |   feature8 >= 0.86
|   |   |   |   |   |   feature7 < 0.78 : classF (51.79/4.05) [1.64/0.99]
|   |   |   |   |   |   feature7 >= 0.78 : classA (5.51/0.06) [2.9/0.02]
|   |   |   |   feature8 >= 0.94 : classA (139.46/33.32) [55.26/26]
|   |   feature1 = classB : classE (11.33/1.72) [6.01/1.2]
|   |   feature1 = classC : classD (18.44/10.92) [5.01/4.1]
|   |   feature1 = classD
|   |   |   feature8 < 0.52 : classD (29.56/5.54) [2.85/2.7]
|   |   |   feature8 >= 0.52 : classF (11.24/5.88) [2.07/0.51]
|   |   feature1 = classE
|   |   |   feature7 < 0.32 : classG (6.09/0.38) [4.82/0.02]
|   |   |   feature7 >= 0.32 : classD (10.9/4.29) [18.48/6.55]
|   |   feature1 = classF
|   |   |   feature7 < 0.58
|   |   |   |   feature11 < 0.98 : classF (20.62/8.75) [7.96/2.25]
|   |   |   |   feature11 >= 0.98
|   |   |   |   |   feature10 < 0.93
|   |   |   |   |   |   feature10 < 0.77
|   |   |   |   |   |   |   feature9 < 0.83 : classA (27.92/1.51) [7.69/4]
|   |   |   |   |   |   |   feature9 >= 0.83 : classF (4.53/1.42) [2.78/1.22]
|   |   |   |   |   |   feature10 >= 0.77
|   |   |   |   |   |   |   feature7 < 0.43 : classF (2.47/0.42) [0.52/0]
|   |   |   |   |   |   |   feature7 >= 0.43 : classE (8.09/4.06) [0.36/0.28]
|   |   |   |   |   feature10 >= 0.93
|   |   |   |   |   |   feature8 < 0.9 : classF (2.69/0.13) [2.63/0.06]
|   |   |   |   |   |   feature8 >= 0.9 : classA (48.53/1.32) [24.35/0.93]
|   |   |   feature7 >= 0.58 : classF (40.27/0.3) [21.58/0]
|   |   feature1 = classG : classE (104.04/53.17) [62.96/16.69]
|   feature3 = classG
|   |   feature1 = classA
|   |   |   feature7 < 0.75
|   |   |   |   feature10 < 0.75
|   |   |   |   |   feature8 < 0.54 : classA (5.48/0.62) [3.36/0.35]
|   |   |   |   |   feature8 >= 0.54 : classG (80.15/3.94) [11.23/6.59]
|   |   |   |   feature10 >= 0.75
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature7 < 0.55 : classF (5.37/0.72) [7.72/0.76]
|   |   |   |   |   |   |   feature7 >= 0.55 : classA (2.7/0.05) [0.61/0.01]
|   |   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE : classA (0.1/0) [0/0]
|   |   |   |   |   |   feature5 = classF : classF (11.71/0.1) [2.44/0.09]
|   |   |   |   |   |   feature5 = classG : classG (0.52/0.01) [0.52/0.01]
|   |   |   |   |   feature7 >= 0.58 : classA (8.17/4.82) [1.63/0.13]
|   |   |   feature7 >= 0.75
|   |   |   |   feature7 < 0.78 : classA (5.02/2.37) [0.65/0.01]
|   |   |   |   feature7 >= 0.78
|   |   |   |   |   feature10 < 0.55 : classA (4.88/0.56) [2.19/0.01]
|   |   |   |   |   feature10 >= 0.55 : classA (69.39/0.19) [36.04/0.19]
|   |   feature1 = classB : classE (5.54/0.91) [2.98/0.66]
|   |   feature1 = classC : classD (10.07/6.45) [3.08/2.64]
|   |   feature1 = classD
|   |   |   feature7 < 0.53 : classF (5.31/3.11) [1.89/1]
|   |   |   feature7 >= 0.53 : classA (2.83/0.47) [0.08/0.04]
|   |   feature1 = classE
|   |   |   feature10 < 0.78 : classA (26.29/2.13) [32.28/6.16]
|   |   |   feature10 >= 0.78
|   |   |   |   feature7 < 0.32 : classG (2.54/0.14) [2.36/0.04]
|   |   |   |   feature7 >= 0.32 : classD (3.12/0.65) [0.44/0.29]
|   |   feature1 = classF
|   |   |   feature10 < 0.8
|   |   |   |   feature10 < 0.52 : classA (5.76/0.52) [5.26/2.66]
|   |   |   |   feature10 >= 0.52 : classG (2.94/0.65) [0.89/0.29]
|   |   |   feature10 >= 0.8 : classE (7.14/4.77) [1.29/1.24]
|   |   feature1 = classG : classA (50.19/21.15) [59.38/10.08]
feature4 = classB
|   feature7 < 0.85
|   |   feature1 = classA
|   |   |   feature7 < 0.58
|   |   |   |   feature8 < 0.8 : classA (2.79/0.08) [0.21/0.07]
|   |   |   |   feature8 >= 0.8 : classB (97.1/2.15) [27.22/4.19]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.62 : classG (4.84/0.08) [2.46/0.07]
|   |   |   |   feature7 >= 0.62 : classA (6.82/4.78) [0.75/0.02]
|   |   feature1 = classB
|   |   |   feature5 = classA : classA (0.32/0) [0.32/0]
|   |   |   feature5 = classB
|   |   |   |   feature7 < 0.62 : classA (119.21/4.05) [96.91/49.46]
|   |   |   |   feature7 >= 0.62 : classB (11.74/0.03) [7.55/0.03]
|   |   |   feature5 = classC : classC (46.81/0.71) [0.77/0.75]
|   |   |   feature5 = classD : classD (0.06/0) [0.03/0]
|   |   |   feature5 = classE : classE (46.76/0.69) [46.82/0.75]
|   |   |   feature5 = classF : classB (0.52/0) [0.01/0.01]
|   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   feature1 = classC
|   |   |   feature7 < 0.47 : classE (11.27/5.84) [4.07/2.99]
|   |   |   feature7 >= 0.47 : classD (8.31/3.55) [7.18/4.8]
|   |   feature1 = classD
|   |   |   feature7 < 0.22 : classA (23.14/0.07) [23.13/0.07]
|   |   |   feature7 >= 0.22
|   |   |   |   feature7 < 0.28 : classB (23.14/0.11) [0.1/0.1]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature7 < 0.4 : classE (4.79/0.02) [0.02/0.02]
|   |   |   |   |   feature7 >= 0.4
|   |   |   |   |   |   feature7 < 0.48 : classF (11.96/0.02) [7.2/2.4]
|   |   |   |   |   |   feature7 >= 0.48 : classG (2.76/0.38) [2.76/0.38]
|   |   feature1 = classE
|   |   |   feature7 < 0.38 : classD (7.69/2.42) [2.47/0.09]
|   |   |   feature7 >= 0.38 : classA (31.04/3.2) [29.06/3.6]
|   |   feature1 = classF
|   |   |   feature7 < 0.42 : classA (13.04/5.88) [0.67/0.66]
|   |   |   feature7 >= 0.42
|   |   |   |   feature7 < 0.47 : classE (23.14/0.11) [1.12/1.12]
|   |   |   |   feature7 >= 0.47 : classG (2.82/0.44) [7.26/4.88]
|   |   feature1 = classG
|   |   |   feature7 < 0.53 : classF (8.36/1.2) [4.91/0.12]
|   |   |   feature7 >= 0.53 : classG (2.41/0.01) [0.49/0.01]
|   feature7 >= 0.85
|   |   feature10 < 0.95 : classB (75.98/25.84) [30.66/1]
|   |   feature10 >= 0.95
|   |   |   feature2 = classA : classA (1.83/0.03) [1.68/0.02]
|   |   |   feature2 = classB : classB (1131.38/6.77) [582.63/26.82]
|   |   |   feature2 = classC : classC (2.66/0.56) [1.44/0.08]
|   |   |   feature2 = classD : classD (0.74/0.01) [0.41/0.02]
|   |   |   feature2 = classE : classB (1.04/0.01) [0.03/0.02]
|   |   |   feature2 = classF : classB (0/0) [0/0]
|   |   |   feature2 = classG : classB (0/0) [0/0]
feature4 = classC
|   feature1 = classA
|   |   feature7 < 0.72
|   |   |   feature7 < 0.58 : classC (75.78/3.9) [29.63/6.02]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.68
|   |   |   |   |   feature7 < 0.62 : classG (5.56/0.18) [2.89/0.19]
|   |   |   |   |   feature7 >= 0.62 : classD (4.22/1.53) [0.22/0.22]
|   |   |   |   feature7 >= 0.68
|   |   |   |   |   feature2 = classA : classC (2.1/0.27) [1.88/0.05]
|   |   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (23.94/2.62) [22.03/0.94]
|   |   |   |   |   feature2 = classD : classC (0.36/0.05) [0.32/0.01]
|   |   |   |   |   feature2 = classE : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classF : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   feature7 >= 0.72 : classA (8.5/0.17) [3.18/0.09]
|   feature1 = classB
|   |   feature7 < 0.68
|   |   |   feature5 = classA : classA (0.1/0) [0.1/0]
|   |   |   feature5 = classB : classB (1.09/0) [0.05/0.04]
|   |   |   feature5 = classC : classC (1.71/0.01) [3.02/0.93]
|   |   |   feature5 = classD : classD (0.02/0) [0.01/0]
|   |   |   feature5 = classE : classE (23.13/0.1) [1.09/1.09]
|   |   |   feature5 = classF : classE (46.27/0.2) [2.18/2.18]
|   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   feature7 >= 0.68 : classB (5.35/2.81) [1.63/0.64]
|   feature1 = classC
|   |   feature7 < 0.55 : classA (192.17/76.74) [128.81/8.42]
|   |   feature7 >= 0.55
|   |   |   feature8 < 0.62
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature8 < 0.56 : classA (2.22/1.04) [2.16/1.04]
|   |   |   |   |   feature8 >= 0.56 : classD (23.23/0.12) [1.18/1.1]
|   |   |   |   feature7 >= 0.72 : classC (10.96/3.18) [6.25/1.62]
|   |   |   feature8 >= 0.62
|   |   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   |   feature3 = classB : classC (0/0) [0/0]
|   |   |   |   feature3 = classC
|   |   |   |   |   feature7 < 0.85
|   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   feature7 < 0.62 : classC (33.33/0.6) [5.34/0.5]
|   |   |   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   |   |   feature7 < 0.65 : classC (9.95/2.62) [3.8/0.15]
|   |   |   |   |   |   |   |   feature7 >= 0.65 : classC (25.12/0.07) [17.52/5.57]
|   |   |   |   |   |   feature7 >= 0.82 : classC (9.41/2.62) [3.28/0.14]
|   |   |   |   |   feature7 >= 0.85 : classC (1045.44/2.89) [538.97/15.69]
|   |   |   |   feature3 = classD : classD (3.07/0.22) [1.31/0.14]
|   |   |   |   feature3 = classE : classC (0/0) [0/0]
|   |   |   |   feature3 = classF : classC (2.21/0.02) [0.62/0.02]
|   |   |   |   feature3 = classG : classC (0/0) [0/0]
|   feature1 = classD
|   |   feature10 < 0.52
|   |   |   feature7 < 0.52 : classF (7.82/4.21) [3.41/1.96]
|   |   |   feature7 >= 0.52
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature8 < 0.3 : classE (65.28/0.19) [0.21/0.21]
|   |   |   |   |   feature8 >= 0.3
|   |   |   |   |   |   feature7 < 0.68 : classD (2.11/0.56) [1.61/1.06]
|   |   |   |   |   |   feature7 >= 0.68 : classE (4.11/0.1) [0.09/0.09]
|   |   |   |   feature7 >= 0.72 : classC (2.81/1.27) [24.7/1.16]
|   |   feature10 >= 0.52
|   |   |   feature10 < 0.92
|   |   |   |   feature10 < 0.62 : classC (27.75/4.2) [3.71/2.17]
|   |   |   |   feature10 >= 0.62
|   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classC (7.96/0.71) [5.48/3.95]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature7 < 0.48 : classF (3.35/0.96) [1.44/0.48]
|   |   |   |   |   |   feature7 >= 0.48 : classD (51.34/0.62) [1.27/0.62]
|   |   |   |   |   feature3 = classE : classD (0/0) [0.01/0]
|   |   |   |   |   feature3 = classF : classF (2.24/0.1) [0.09/0.04]
|   |   |   |   |   feature3 = classG : classG (0.66/0.14) [0.63/0.1]
|   |   |   feature10 >= 0.92
|   |   |   |   feature5 = classA : classA (0.24/0.02) [0.19/0.01]
|   |   |   |   feature5 = classB : classC (0/0) [0/0]
|   |   |   |   feature5 = classC
|   |   |   |   |   feature8 < 0.76 : classA (61.14/4.48) [2.34/2.34]
|   |   |   |   |   feature8 >= 0.76 : classC (9.29/2.29) [4.24/0.87]
|   |   |   |   feature5 = classD : classD (1.2/0.3) [0.29/0.05]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature7 < 0.53 : classF (4.28/1.6) [2.15/1.07]
|   |   |   |   |   |   feature7 >= 0.53 : classC (46.19/0.13) [23.18/0.15]
|   |   |   |   |   feature7 >= 0.62 : classA (10.65/0.06) [0.04/0.04]
|   |   |   |   feature5 = classF : classC (0/0) [0/0]
|   |   |   |   feature5 = classG : classC (0/0) [0/0]
|   feature1 = classE
|   |   feature7 < 0.32 : classC (26.27/2.81) [23.66/0.42]
|   |   feature7 >= 0.32
|   |   |   feature7 < 0.42 : classD (7.59/1.69) [2.93/0.24]
|   |   |   feature7 >= 0.42 : classA (15.81/10.4) [9.97/7.07]
|   feature1 = classF : classA (23.84/15.22) [13.49/9.97]
|   feature1 = classG
|   |   feature7 < 0.53
|   |   |   feature7 < 0.47 : classE (2.27/0.74) [0.62/0.11]
|   |   |   feature7 >= 0.47 : classF (8.25/0.15) [5.64/0.23]
|   |   feature7 >= 0.53 : classG (2.72/0.06) [1.26/0.06]
feature4 = classD
|   feature3 = classA
|   |   feature1 = classA : classG (23.36/0.25) [0.17/0.13]
|   |   feature1 = classB : classA (0.06/0.02) [0.05/0.01]
|   |   feature1 = classC : classD (0.89/0.22) [0.2/0.16]
|   |   feature1 = classD : classD (2.35/1.47) [1.41/1.02]
|   |   feature1 = classE : classD (2.32/0.26) [1/0.07]
|   |   feature1 = classF : classA (0.31/0.17) [0.18/0.14]
|   |   feature1 = classG : classA (0.23/0.23) [0.92/0.41]
|   feature3 = classB : classE (2.72/1.13) [1.85/0.28]
|   feature3 = classC
|   |   feature1 = classA : classA (2.28/0.46) [0.76/0.19]
|   |   feature1 = classB : classA (0.13/0.04) [0.1/0.02]
|   |   feature1 = classC
|   |   |   feature2 = classA : classA (0.04/0) [0/0]
|   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   feature2 = classC : classC (13.69/0.97) [5.34/0.33]
|   |   |   feature2 = classD : classC (2.24/0.16) [0.6/0.05]
|   |   |   feature2 = classE : classC (0.03/0) [0/0]
|   |   |   feature2 = classF : classD (0.65/0.02) [0.02/0.01]
|   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   feature1 = classD : classC (34.63/5.56) [7.28/4.04]
|   |   feature1 = classE
|   |   |   feature2 = classA : classA (0.02/0.01) [0/0]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classC (0.06/0.02) [0.02/0.01]
|   |   |   feature2 = classD : classD (2.46/0.18) [1.55/0.04]
|   |   |   feature2 = classE : classD (2.58/0.24) [0.39/0.08]
|   |   |   feature2 = classF : classF (1.47/0.41) [2.24/0.19]
|   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   feature1 = classF : classC (2.74/0.68) [0.9/0.38]
|   |   feature1 = classG : classG (0.49/0.31) [0.88/0.19]
|   feature3 = classD
|   |   feature7 < 0.45
|   |   |   feature1 = classA
|   |   |   |   feature7 < 0.35 : classD (23.37/0.22) [2.91/0.58]
|   |   |   |   feature7 >= 0.35 : classA (2.46/1.04) [1.05/0.01]
|   |   |   feature1 = classB : classA (0/0) [0/0]
|   |   |   feature1 = classC : classD (34.72/7.17) [4.08/2.5]
|   |   |   feature1 = classD
|   |   |   |   feature11 < 0.95 : classD (18.24/0.68) [8.42/0.09]
|   |   |   |   feature11 >= 0.95
|   |   |   |   |   feature7 < 0.32 : classA (93.14/1.01) [46.94/0.88]
|   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   feature10 < 0.85 : classD (5.76/1.03) [2.28/0.32]
|   |   |   |   |   |   feature10 >= 0.85
|   |   |   |   |   |   |   feature7 < 0.35 : classE (3.33/0.01) [0.01/0.01]
|   |   |   |   |   |   |   feature7 >= 0.35 : classA (23.64/0.61) [0.59/0.59]
|   |   |   feature1 = classE : classD (77.5/2.52) [45.99/23.3]
|   |   |   feature1 = classF
|   |   |   |   feature7 < 0.28 : classG (4.65/0.04) [0.02/0.02]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature9 < 0.88 : classD (5.89/0.59) [1.13/0.02]
|   |   |   |   |   feature9 >= 0.88
|   |   |   |   |   |   feature10 < 0.55 : classA (76.22/0.96) [47.21/1.14]
|   |   |   |   |   |   feature10 >= 0.55 : classD (3.35/1.58) [1.76/0.01]
|   |   |   feature1 = classG : classD (7.04/2.05) [2.98/0.58]
|   |   feature7 >= 0.45
|   |   |   feature1 = classA
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature7 < 0.58 : classA (4.67/2.34) [0.07/0.02]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature7 < 0.62 : classG (4.65/0.04) [2.37/0.07]
|   |   |   |   |   |   feature7 >= 0.62 : classD (2.48/0.16) [0.08/0.08]
|   |   |   |   feature7 >= 0.65 : classA (13.75/2.41) [27.07/0.05]
|   |   |   feature1 = classB : classD (3.3/3.29) [25.76/2.72]
|   |   |   feature1 = classC
|   |   |   |   feature7 < 0.88
|   |   |   |   |   feature7 < 0.68 : classD (20.99/0.06) [28.75/2.36]
|   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   feature7 < 0.85 : classB (2.94/0.64) [3.85/1.54]
|   |   |   |   |   |   feature7 >= 0.85 : classD (16.34/0.05) [0.57/0.05]
|   |   |   |   feature7 >= 0.88 : classC (2.66/0.02) [1.8/0.01]
|   |   |   feature1 = classD
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   |   feature10 < 0.48 : classD (14.19/1.24) [21.69/16.54]
|   |   |   |   |   |   |   feature10 >= 0.48
|   |   |   |   |   |   |   |   feature7 < 0.55 : classD (6.32/2.74) [4.91/2]
|   |   |   |   |   |   |   |   feature7 >= 0.55 : classG (19.85/2.62) [16.65/0.95]
|   |   |   |   |   |   feature10 >= 0.52 : classD (87.95/23.37) [60.59/28.22]
|   |   |   |   |   feature10 >= 0.98
|   |   |   |   |   |   feature7 < 0.58 : classF (4.04/1.53) [2.05/1.04]
|   |   |   |   |   |   feature7 >= 0.58 : classC (31.55/0.14) [0.09/0.09]
|   |   |   |   feature7 >= 0.62 : classD (856/3.41) [433.75/18.76]
|   |   |   feature1 = classE : classD (104.43/15.36) [46.95/3.74]
|   |   |   feature1 = classF
|   |   |   |   feature7 < 0.67
|   |   |   |   |   feature7 < 0.52 : classD (2.8/1.26) [5.51/1.16]
|   |   |   |   |   feature7 >= 0.52 : classG (3.56/1.25) [4.63/2.32]
|   |   |   |   feature7 >= 0.67 : classD (23.73/0.07) [1.3/0.76]
|   |   |   feature1 = classG
|   |   |   |   feature7 < 0.52 : classF (8.19/1.25) [5.72/1.08]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature7 < 0.58 : classD (48.72/0.88) [0.7/0.13]
|   |   |   |   |   feature7 >= 0.58 : classG (7.17/3.12) [20.7/2.07]
|   feature3 = classE : classE (489.83/255.53) [263.85/127.23]
|   feature3 = classF
|   |   feature1 = classA : classA (1.84/0.63) [0.85/0.26]
|   |   feature1 = classB : classA (0.18/0.05) [0.15/0.02]
|   |   feature1 = classC
|   |   |   feature7 < 0.28 : classB (23.22/0.19) [23.22/0.19]
|   |   |   feature7 >= 0.28 : classD (2.63/0.54) [0.49/0.36]
|   |   feature1 = classD : classD (10.33/4.54) [5.88/3.16]
|   |   feature1 = classE
|   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   feature2 = classD : classD (1.96/0.04) [1.83/0.01]
|   |   |   feature2 = classE : classD (27.86/0.67) [1.13/0.24]
|   |   |   feature2 = classF : classF (5.05/0.89) [0.71/0.18]
|   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   feature1 = classF : classF (17.35/0.83) [6.21/0.43]
|   |   feature1 = classG : classG (0.7/0.44) [1.27/0.27]
|   feature3 = classG
|   |   feature2 = classA : classA (3.81/0.39) [4.19/0.71]
|   |   feature2 = classB : classD (0/0) [0/0]
|   |   feature2 = classC : classC (0.1/0.03) [0.05/0.01]
|   |   feature2 = classD
|   |   |   feature1 = classA : classD (46.7/0.55) [0.36/0.27]
|   |   |   feature1 = classB : classA (0.12/0.04) [0.1/0.02]
|   |   |   feature1 = classC : classD (1.23/0.4) [0.41/0.33]
|   |   |   feature1 = classD : classD (8.52/3.83) [4.65/1.93]
|   |   |   feature1 = classE : classD (3.81/0.45) [2.82/0.1]
|   |   |   feature1 = classF : classA (0.64/0.36) [0.37/0.28]
|   |   |   feature1 = classG : classG (0.5/0.32) [1.22/0.19]
|   |   feature2 = classE : classD (4.85/1.56) [1.9/1.71]
|   |   feature2 = classF : classD (27.2/2.03) [24.49/0.99]
|   |   feature2 = classG : classG (5.25/1.5) [2.89/0.19]
feature4 = classE
|   feature1 = classA
|   |   feature2 = classA : classA (2.5/0.16) [1.83/0.24]
|   |   feature2 = classB
|   |   |   feature7 < 0.58 : classB (46.9/0.21) [4.16/4.16]
|   |   |   feature7 >= 0.58 : classG (2.96/1.71) [0.76/0.13]
|   |   feature2 = classC : classA (0.17/0.07) [0.04/0.04]
|   |   feature2 = classD
|   |   |   feature7 < 0.32 : classD (23.16/0.06) [2.57/0.06]
|   |   |   feature7 >= 0.32 : classA (7.05/1.94) [2.13/0.93]
|   |   feature2 = classE
|   |   |   feature7 < 0.28 : classB (23.1/0.06) [17.18/17.18]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.52 : classE (165.68/3.95) [76.37/5.74]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   feature7 < 0.58 : classB (4.72/1.55) [1.55/1.55]
|   |   |   |   |   |   feature7 >= 0.58 : classG (9.54/3.2) [3.27/0.1]
|   |   |   |   |   feature7 >= 0.65 : classE (49.04/22.83) [60.56/14.5]
|   |   feature2 = classF : classA (3.87/0.25) [1.92/0.37]
|   |   feature2 = classG : classA (0.55/0.04) [0.05/0.05]
|   feature1 = classB : classA (55.04/27.66) [6.81/1.44]
|   feature1 = classC
|   |   feature7 < 0.45 : classE (43.15/9.25) [6.7/4.56]
|   |   feature7 >= 0.45
|   |   |   feature7 < 0.65 : classD (33.77/2.19) [27.96/27.95]
|   |   |   feature7 >= 0.65
|   |   |   |   feature2 = classA : classA (0.03/0.01) [0.04/0.02]
|   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   feature2 = classC
|   |   |   |   |   feature7 < 0.85 : classB (5.2/2.19) [6.03/3.02]
|   |   |   |   |   feature7 >= 0.85 : classC (4.32/0.52) [2.48/0.01]
|   |   |   |   feature2 = classD : classD (0.01/0) [0.01/0]
|   |   |   |   feature2 = classE : classF (3.16/1.11) [2.52/2]
|   |   |   |   feature2 = classF : classE (0.79/0.28) [0.5/0.5]
|   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   feature1 = classD
|   |   feature7 < 0.32 : classA (71.99/25.82) [25.4/2.27]
|   |   feature7 >= 0.32
|   |   |   feature9 < 0.52
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.45 : classE (25.18/1.09) [38.2/19.35]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.48 : classF (9.18/0.42) [6.29/2.77]
|   |   |   |   |   |   feature7 >= 0.48 : classG (4.13/2.38) [2.99/1.24]
|   |   |   |   feature7 >= 0.52 : classD (122.61/4.45) [2.34/0.85]
|   |   |   feature9 >= 0.52
|   |   |   |   feature5 = classA
|   |   |   |   |   feature8 < 0.58
|   |   |   |   |   |   feature7 < 0.45 : classD (24.18/1.15) [4.36/4.36]
|   |   |   |   |   |   feature7 >= 0.45 : classF (4.16/2.61) [1.38/0.75]
|   |   |   |   |   feature8 >= 0.58 : classE (4.84/0.34) [5.7/0.8]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.12/0.05) [0.06/0.03]
|   |   |   |   feature5 = classD
|   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature7 < 0.45 : classE (4.37/0.54) [6.49/3.25]
|   |   |   |   |   |   feature7 >= 0.45 : classD (23.26/1.86) [10.81/1.26]
|   |   |   |   |   feature3 = classE : classE (34.43/4.06) [56.29/6.2]
|   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classD : classD (12.47/4.19) [29.29/4.61]
|   |   |   |   |   feature6 = classE
|   |   |   |   |   |   feature7 < 0.52 : classE (39.44/8.56) [46.73/20.32]
|   |   |   |   |   |   feature7 >= 0.52 : classE (81.44/0.63) [62.79/0.47]
|   |   |   |   |   feature6 = classF : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   |   |   feature5 = classF : classF (3.1/2.01) [24.93/1.82]
|   |   |   |   feature5 = classG : classG (0.77/0.15) [0.22/0.11]
|   feature1 = classE
|   |   feature7 < 0.48
|   |   |   feature10 < 0.62 : classE (72.2/36.89) [43.55/10.28]
|   |   |   feature10 >= 0.62
|   |   |   |   feature7 < 0.38
|   |   |   |   |   feature7 < 0.32 : classG (6.5/3.1) [0.03/0.03]
|   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   feature10 < 0.68 : classA (99.21/6.94) [3.81/3.68]
|   |   |   |   |   |   feature10 >= 0.68 : classE (2.75/1.22) [24.67/1.64]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature10 < 0.65
|   |   |   |   |   |   feature7 < 0.43 : classD (46.79/0.72) [0.2/0.2]
|   |   |   |   |   |   feature7 >= 0.43 : classE (4.08/1.99) [2.03/1]
|   |   |   |   |   feature10 >= 0.65
|   |   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   |   feature11 < 0.83 : classE (5.93/0.25) [2.79/0.13]
|   |   |   |   |   |   |   feature11 >= 0.83
|   |   |   |   |   |   |   |   feature7 < 0.42 : classA (47.32/1.16) [0.74/0.64]
|   |   |   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   |   |   feature10 < 0.92 : classE (11.08/2.06) [26.25/0.55]
|   |   |   |   |   |   |   |   |   feature10 >= 0.92 : classA (25.47/1.25) [1.26/1.2]
|   |   |   |   |   |   feature8 >= 0.82
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature8 < 0.9 : classE (3.61/0.02) [3.62/0.52]
|   |   |   |   |   |   |   |   feature8 >= 0.9 : classD (24.79/1.75) [1.36/1.35]
|   |   |   |   |   |   |   feature7 >= 0.45 : classE (6.52/1.38) [5.3/0.7]
|   |   feature7 >= 0.48
|   |   |   feature2 = classA
|   |   |   |   feature10 < 0.53 : classD (10.82/10.31) [27.18/3.64]
|   |   |   |   feature10 >= 0.53
|   |   |   |   |   feature10 < 0.6 : classA (24.88/0.58) [2.31/1.09]
|   |   |   |   |   feature10 >= 0.6 : classE (5.01/0.27) [1.34/0.26]
|   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   feature2 = classC : classE (0.77/0.25) [0.09/0.09]
|   |   |   feature2 = classD
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   feature3 = classD : classD (5.13/0.51) [4.76/0.37]
|   |   |   |   feature3 = classE : classE (34.47/1.54) [27.67/24.35]
|   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   feature2 = classE
|   |   |   |   feature9 < 0.68
|   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   feature11 < 0.52
|   |   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   |   |   feature10 < 0.52 : classD (2.63/0.72) [1.58/0.56]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.52 : classE (2.7/0.01) [25.83/1.91]
|   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classD (3.72/1.3) [2.9/1]
|   |   |   |   |   |   |   |   feature7 >= 0.75 : classG (47.21/1.15) [46.62/0.55]
|   |   |   |   |   |   |   feature7 >= 0.82
|   |   |   |   |   |   |   |   feature8 < 0.7 : classE (24.1/23.1) [24.38/0.07]
|   |   |   |   |   |   |   |   feature8 >= 0.7 : classE (5.47/0.02) [0.75/0.02]
|   |   |   |   |   |   feature11 >= 0.52
|   |   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   |   feature11 < 0.68
|   |   |   |   |   |   |   |   |   feature5 = classA : classE (2.48/0.02) [1.55/0.02]
|   |   |   |   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature5 = classD : classD (24.87/1.83) [24.24/1.21]
|   |   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   |   feature11 < 0.55 : classE (2.25/0.14) [2.22/0.14]
|   |   |   |   |   |   |   |   |   |   feature11 >= 0.55
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.55 : classD (75.62/2.01) [5.25/0.23]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   feature7 < 0.75 : classE (14.32/6.12) [10.08/5.1]
|   |   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.75 : classD (71.93/2.32) [24.74/1.71]
|   |   |   |   |   |   |   |   |   feature5 = classF : classE (1.03/0.01) [0.01/0.01]
|   |   |   |   |   |   |   |   |   feature5 = classG : classE (0.1/0) [0/0]
|   |   |   |   |   |   |   |   feature11 >= 0.68 : classE (12.82/2.73) [6.99/2.73]
|   |   |   |   |   |   |   feature7 >= 0.82 : classE (14.21/0.55) [5.65/0.04]
|   |   |   |   |   feature8 >= 0.82 : classE (53.24/0.83) [47.24/23.35]
|   |   |   |   feature9 >= 0.68
|   |   |   |   |   feature10 < 0.78
|   |   |   |   |   |   feature8 < 0.9
|   |   |   |   |   |   |   feature8 < 0.5 : classE (70.38/0.93) [34.66/0.42]
|   |   |   |   |   |   |   feature8 >= 0.5
|   |   |   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classD
|   |   |   |   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   |   |   |   feature8 < 0.54 : classD (5.16/0.22) [0.28/0.28]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.54 : classD (6.77/2.34) [7.78/1.48]
|   |   |   |   |   |   |   |   |   feature7 >= 0.82 : classD (46.68/0.62) [1.09/0.58]
|   |   |   |   |   |   |   |   feature3 = classE
|   |   |   |   |   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   |   |   |   |   feature11 < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   feature11 < 0.75 : classE (10.09/2.39) [8.1/1.23]
|   |   |   |   |   |   |   |   |   |   |   |   feature11 >= 0.75
|   |   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.54 : classD (31.82/0.41) [0.3/0.3]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.62 : classE (5.37/0.04) [1.33/0.04]
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.62 : classD (35.68/4.26) [9.9/1.52]
|   |   |   |   |   |   |   |   |   |   |   feature11 >= 0.82
|   |   |   |   |   |   |   |   |   |   |   |   feature7 < 0.55 : classD (5.56/1.75) [4.86/1.04]
|   |   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.55 : classE (27.58/4.02) [14.23/0.21]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.75 : classE (30.15/0.08) [14.21/0.08]
|   |   |   |   |   |   |   |   |   feature8 >= 0.74 : classE (124.18/0.74) [78.6/14.09]
|   |   |   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature8 >= 0.9 : classE (89.68/0.53) [87.23/0.53]
|   |   |   |   |   feature10 >= 0.78 : classE (370.04/3.73) [231.06/48.77]
|   |   |   feature2 = classF
|   |   |   |   feature6 = classA : classF (0/0) [0/0]
|   |   |   |   feature6 = classB : classF (0/0) [0/0]
|   |   |   |   feature6 = classC : classF (3.85/0.26) [1.68/0.14]
|   |   |   |   feature6 = classD : classD (1.1/0.08) [0.55/0.04]
|   |   |   |   feature6 = classE : classE (4.95/0.03) [6.83/0.03]
|   |   |   |   feature6 = classF : classF (7.14/0.48) [5.38/0.25]
|   |   |   |   feature6 = classG : classF (0/0) [0/0]
|   |   |   feature2 = classG
|   |   |   |   feature7 < 0.55 : classG (23.11/0.08) [0.58/0.07]
|   |   |   |   feature7 >= 0.55 : classE (2.74/0.09) [0.65/0.09]
|   feature1 = classF
|   |   feature7 < 0.42 : classA (78.09/19.1) [54.78/31.64]
|   |   feature7 >= 0.42
|   |   |   feature5 = classA : classE (30.28/3.16) [4.77/3.75]
|   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   feature5 = classC : classF (1.11/0.07) [0.1/0.1]
|   |   |   feature5 = classD : classD (1.65/0.08) [0.69/0.09]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.52 : classD (75.89/6.79) [27.55/2.35]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature7 < 0.55 : classG (4.22/2.06) [2.69/0.52]
|   |   |   |   |   feature7 >= 0.55 : classE (2.51/0.98) [4.73/2.17]
|   |   |   feature5 = classF
|   |   |   |   feature7 < 0.52 : classE (23.87/0.83) [1.87/1.87]
|   |   |   |   feature7 >= 0.52 : classF (23.32/1.24) [12.76/2.47]
|   |   |   feature5 = classG : classD (0/0) [0/0]
|   feature1 = classG
|   |   feature6 = classA : classA (0/0) [0/0]
|   |   feature6 = classB : classA (0/0) [0/0]
|   |   feature6 = classC : classA (69.7/15.66) [20.68/4.76]
|   |   feature6 = classD
|   |   |   feature10 < 0.55
|   |   |   |   feature7 < 0.52 : classD (25.74/2.17) [6.15/5.62]
|   |   |   |   feature7 >= 0.52 : classG (2.16/0.01) [0.65/0.01]
|   |   |   feature10 >= 0.55 : classA (9.3/5.05) [4.77/0.52]
|   |   feature6 = classE
|   |   |   feature7 < 0.48
|   |   |   |   feature2 = classA : classE (0/0) [0/0]
|   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (0/0) [0.02/0]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature10 < 0.58 : classA (12.45/2.38) [15.23/1.08]
|   |   |   |   |   feature10 >= 0.58 : classE (7.7/0.04) [1.06/0.03]
|   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   feature2 = classG : classE (29.58/0.55) [29.38/6.34]
|   |   |   feature7 >= 0.48
|   |   |   |   feature10 < 0.35
|   |   |   |   |   feature7 < 0.52 : classF (4.14/0) [2.76/0]
|   |   |   |   |   feature7 >= 0.52 : classA (24.2/1.17) [0.68/0.68]
|   |   |   |   feature10 >= 0.35
|   |   |   |   |   feature7 < 0.52 : classF (2.5/1.02) [2.01/1.03]
|   |   |   |   |   feature7 >= 0.52 : classG (7.6/3.09) [3.7/0.03]
|   |   feature6 = classF : classA (0/0) [0/0]
|   |   feature6 = classG : classG (6.6/2.22) [4.79/2.08]
feature4 = classF
|   feature3 = classA : classF (0/0) [0/0]
|   feature3 = classB : classB (2.21/1.12) [2.28/0.74]
|   feature3 = classC
|   |   feature1 = classA : classA (2.84/0.91) [0.18/0.15]
|   |   feature1 = classB : classC (1.14/0.11) [1.11/0.08]
|   |   feature1 = classC : classC (3.86/1.01) [2.3/0.27]
|   |   feature1 = classD : classF (2.74/0.26) [1.38/0.15]
|   |   feature1 = classE : classF (5.14/1.69) [1.89/1.86]
|   |   feature1 = classF
|   |   |   feature7 < 0.43 : classA (23.94/0.39) [0.14/0.14]
|   |   |   feature7 >= 0.43 : classF (3.32/0.69) [5.06/1.32]
|   |   feature1 = classG : classF (4.23/0.24) [2.27/0.04]
|   feature3 = classD
|   |   feature1 = classA : classD (6.62/6.46) [27.56/4.38]
|   |   feature1 = classB : classA (0.19/0.06) [0.15/0.02]
|   |   feature1 = classC : classD (3.12/1.69) [0.55/0.41]
|   |   feature1 = classD
|   |   |   feature2 = classA : classA (1.34/0.32) [0.16/0.16]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   feature2 = classD
|   |   |   |   feature7 < 0.48 : classD (3.71/1.63) [2.34/0.79]
|   |   |   |   feature7 >= 0.48 : classD (3.51/0.08) [2.12/0.08]
|   |   |   feature2 = classE : classD (5.36/1.27) [1.68/0.64]
|   |   |   feature2 = classF : classF (0.03/0) [0.05/0]
|   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   feature1 = classE
|   |   |   feature10 < 0.65 : classE (4.39/3.12) [26.5/2.3]
|   |   |   feature10 >= 0.65 : classF (7.27/0.53) [0.31/0.27]
|   |   feature1 = classF
|   |   |   feature7 < 0.43
|   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (0.24/0) [0.12/0]
|   |   |   |   feature2 = classE : classA (23.43/0.21) [0.07/0.07]
|   |   |   |   feature2 = classF : classA (23.43/0.21) [0.09/0.09]
|   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   feature7 >= 0.43
|   |   |   |   feature5 = classA : classF (0.19/0.03) [0.06/0.03]
|   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   feature5 = classC : classF (0.03/0) [0.08/0.01]
|   |   |   |   feature5 = classD : classD (0.85/0.3) [1.24/0.19]
|   |   |   |   feature5 = classE : classD (3.56/2.02) [0.81/0.76]
|   |   |   |   feature5 = classF : classF (3.97/0.57) [2.82/1.81]
|   |   |   |   feature5 = classG : classF (0/0) [0/0]
|   |   feature1 = classG : classF (3.17/0.33) [1.44/1.09]
|   feature3 = classE
|   |   feature10 < 0.38
|   |   |   feature11 < 0.58
|   |   |   |   feature10 < 0.35 : classC (4.76/1.68) [0.35/0.35]
|   |   |   |   feature10 >= 0.35
|   |   |   |   |   feature5 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classA (3.3/0.2) [3.16/0.08]
|   |   |   |   |   feature5 = classD : classD (0/0) [0.01/0]
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature1 = classA : classD (3.71/0.24) [3.52/0.05]
|   |   |   |   |   |   feature1 = classB : classD (0.7/0.05) [0.69/0.04]
|   |   |   |   |   |   feature1 = classC : classD (3.51/0.15) [3.4/0.11]
|   |   |   |   |   |   feature1 = classD : classD (3.95/0.29) [3.81/0.15]
|   |   |   |   |   |   feature1 = classE : classD (5.52/0.33) [5.24/0.05]
|   |   |   |   |   |   feature1 = classF : classD (5.57/0.41) [5.29/0.09]
|   |   |   |   |   |   feature1 = classG : classD (1.89/0.14) [1.84/0.09]
|   |   |   |   |   feature5 = classF : classF (0.29/0.02) [0.28/0.01]
|   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   feature11 >= 0.58 : classE (10.58/3.77) [5.03/1.92]
|   |   feature10 >= 0.38 : classE (299.14/88.15) [206.69/56.26]
|   feature3 = classF
|   |   feature1 = classA
|   |   |   feature10 < 0.35
|   |   |   |   feature7 < 0.58 : classC (16.75/0.62) [0.57/0.57]
|   |   |   |   feature7 >= 0.58 : classA (3.79/2.05) [1.13/0.52]
|   |   |   feature10 >= 0.35
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature10 < 0.78 : classA (26.69/1.61) [24.86/1.8]
|   |   |   |   |   |   feature10 >= 0.78 : classF (3.61/0.02) [0.69/0.17]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.58 : classF (3.95/1.38) [0.52/0]
|   |   |   |   |   |   feature7 >= 0.58 : classG (5.39/2.62) [2.45/1.07]
|   |   |   |   feature7 >= 0.62 : classA (16.06/2.81) [5.09/0.04]
|   |   feature1 = classB : classA (2.7/0.81) [2.24/0.34]
|   |   feature1 = classC
|   |   |   feature7 < 0.58 : classE (26.15/6.11) [3.94/2.01]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.72 : classF (5.49/1.89) [2.42/1.89]
|   |   |   |   feature7 >= 0.72 : classB (2.15/0.26) [1.94/0.05]
|   |   feature1 = classD : classF (110.61/53.4) [28.78/4.27]
|   |   feature1 = classE
|   |   |   feature7 < 0.62 : classF (128.75/11.38) [14.18/4.27]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature5 = classA : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classA (17.77/0.3) [17.77/0.3]
|   |   |   |   |   feature5 = classD : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classF : classF (7.32/0.66) [4.77/0.66]
|   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.72 : classE (16.22/0.04) [16.17/0.04]
|   |   feature1 = classF
|   |   |   feature7 < 0.52 : classF (113.06/33.01) [44.95/2.4]
|   |   |   feature7 >= 0.52
|   |   |   |   feature10 < 0.55
|   |   |   |   |   feature10 < 0.52 : classF (67.68/0.16) [36.29/0.33]
|   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   |   feature7 < 0.62 : classF (7.27/0.09) [3.78/0.18]
|   |   |   |   |   |   |   feature7 >= 0.62 : classG (20.84/4.71) [17.21/1.08]
|   |   |   |   |   |   feature7 >= 0.65 : classF (8.82/0) [4.68/0]
|   |   |   |   feature10 >= 0.55 : classF (678.04/2.15) [348.44/19.92]
|   |   feature1 = classG : classF (81.15/5.52) [31.05/1.43]
|   feature3 = classG
|   |   feature1 = classA : classA (4.02/1.87) [0.54/0.29]
|   |   feature1 = classB : classG (47.69/1.62) [24.62/1.59]
|   |   feature1 = classC : classE (2.26/0.8) [0.63/0.49]
|   |   feature1 = classD : classF (6.22/2.12) [2/0.48]
|   |   feature1 = classE
|   |   |   feature10 < 0.65 : classA (4.64/3.24) [3.71/2.36]
|   |   |   feature10 >= 0.65 : classF (7.85/0.74) [0.53/0.48]
|   |   feature1 = classF
|   |   |   feature2 = classA : classA (0.56/0.16) [0.45/0.07]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   feature2 = classD : classF (0.09/0.01) [0.04/0.01]
|   |   |   feature2 = classE : classF (0.19/0.03) [0.15/0.02]
|   |   |   feature2 = classF : classF (5.09/0.73) [1.77/0.58]
|   |   |   feature2 = classG : classG (8.07/0.52) [5.78/0.28]
|   |   feature1 = classG
|   |   |   feature2 = classA : classG (0.91/0.38) [1.91/0.37]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   feature2 = classE : classF (2.47/0.04) [0.07/0.01]
|   |   |   feature2 = classF : classF (0.25/0) [0.09/0]
|   |   |   feature2 = classG : classG (9.28/0.32) [4.36/0.22]
feature4 = classG
|   feature5 = classA
|   |   feature2 = classA
|   |   |   feature7 < 0.42
|   |   |   |   feature1 = classA : classD (1.74/0.13) [0.3/0.07]
|   |   |   |   feature1 = classB : classE (0/0) [0/0]
|   |   |   |   feature1 = classC : classE (0.95/0.48) [0.26/0.26]
|   |   |   |   feature1 = classD : classG (2.12/0.51) [1.66/0.05]
|   |   |   |   feature1 = classE : classE (1.75/0.73) [0.27/0.27]
|   |   |   |   feature1 = classF : classF (3.79/1.22) [0.61/0.07]
|   |   |   |   feature1 = classG
|   |   |   |   |   feature8 < 0.66 : classG (2.11/0.52) [1.55/0.52]
|   |   |   |   |   feature8 >= 0.66 : classE (24.19/1.15) [1.09/1.09]
|   |   |   feature7 >= 0.42
|   |   |   |   feature1 = classA
|   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   feature10 < 0.72 : classA (4.01/0.85) [0.18/0.09]
|   |   |   |   |   |   feature10 >= 0.72 : classG (7.23/0.48) [1.93/0.17]
|   |   |   |   |   feature7 >= 0.68 : classA (11.05/0.26) [3.93/0.03]
|   |   |   |   feature1 = classB : classA (0.33/0.1) [0.28/0.04]
|   |   |   |   feature1 = classC : classD (0.73/0.27) [0.7/0.47]
|   |   |   |   feature1 = classD : classF (1.98/0.83) [0.98/0.51]
|   |   |   |   feature1 = classE
|   |   |   |   |   feature7 < 0.45 : classA (23.56/0.07) [0.53/0.07]
|   |   |   |   |   feature7 >= 0.45 : classE (9.78/4.13) [3.75/0.68]
|   |   |   |   feature1 = classF : classG (4.93/1.55) [5.05/3.21]
|   |   |   |   feature1 = classG
|   |   |   |   |   feature3 = classA : classA (0.86/0.04) [0.05/0.02]
|   |   |   |   |   feature3 = classB : classA (0.86/0.04) [0.56/0.02]
|   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   feature3 = classD : classA (0.86/0.04) [0.56/0.02]
|   |   |   |   |   feature3 = classE : classA (42.91/2.96) [3.62/1.12]
|   |   |   |   |   feature3 = classF : classA (0/0) [0/0]
|   |   |   |   |   feature3 = classG
|   |   |   |   |   |   feature8 < 0.62 : classG (11.03/1.44) [4.15/1.4]
|   |   |   |   |   |   feature8 >= 0.62 : classA (9.14/1.91) [1.43/0.74]
|   |   feature2 = classB : classA (0/0) [0/0]
|   |   feature2 = classC : classA (0/0) [0/0]
|   |   feature2 = classD : classG (5.35/0.3) [4.87/0.13]
|   |   feature2 = classE : classE (27.89/4.14) [1.83/1.79]
|   |   feature2 = classF : classF (10.35/2.02) [4.77/2.12]
|   |   feature2 = classG
|   |   |   feature1 = classA : classG (1.31/0.36) [0.3/0.05]
|   |   |   feature1 = classB : classA (0.05/0.01) [0.04/0.01]
|   |   |   feature1 = classC : classD (0.23/0.13) [0.13/0.1]
|   |   |   feature1 = classD : classG (2.8/0.24) [0.41/0.07]
|   |   |   feature1 = classE : classE (1.15/0.64) [0.1/0.1]
|   |   |   feature1 = classF : classG (0.44/0.13) [0.33/0.08]
|   |   |   feature1 = classG : classG (16.89/0.14) [9.43/0.11]
|   feature5 = classB : classA (28.61/5.3) [2.79/2.34]
|   feature5 = classC : classC (4.23/1.02) [2.45/0.41]
|   feature5 = classD
|   |   feature8 < 0.34
|   |   |   feature1 = classA : classG (3.16/0.86) [0.73/0.11]
|   |   |   feature1 = classB : classA (0.11/0.03) [0.09/0.01]
|   |   |   feature1 = classC : classD (0.55/0.32) [0.31/0.23]
|   |   |   feature1 = classD : classG (24.26/0.62) [0.91/0.22]
|   |   |   feature1 = classE : classG (1.54/0.39) [0.24/0.24]
|   |   |   feature1 = classF : classG (1.07/0.31) [0.8/0.19]
|   |   |   feature1 = classG : classG (24.53/0.3) [1.07/0.22]
|   |   feature8 >= 0.34
|   |   |   feature1 = classA : classA (6.11/1.83) [2.59/0.46]
|   |   |   feature1 = classB : classA (0.06/0.02) [0.05/0.01]
|   |   |   feature1 = classC : classD (0.31/0.18) [0.17/0.13]
|   |   |   feature1 = classD : classD (11.97/2.54) [29.94/1.54]
|   |   |   feature1 = classE : classD (1.41/0.79) [0.15/0.05]
|   |   |   feature1 = classF : classG (0.68/0.26) [0.45/0.11]
|   |   |   feature1 = classG : classG (10/3.92) [29.7/3.6]
|   feature5 = classE
|   |   feature2 = classA : classE (4/1.41) [3.76/2.73]
|   |   feature2 = classB : classG (0/0) [0/0]
|   |   feature2 = classC : classG (0/0) [0/0]
|   |   feature2 = classD
|   |   |   feature1 = classA : classG (1.79/0.49) [0.41/0.06]
|   |   |   feature1 = classB : classA (0.06/0.02) [0.05/0.01]
|   |   |   feature1 = classC : classD (0.31/0.18) [0.18/0.13]
|   |   |   feature1 = classD : classG (1.17/0.83) [0.48/0.09]
|   |   |   feature1 = classE : classD (23.97/0.85) [0.2/0.11]
|   |   |   feature1 = classF : classG (0.61/0.17) [0.45/0.11]
|   |   |   feature1 = classG : classG (3.28/0.14) [3.06/0.1]
|   |   feature2 = classE
|   |   |   feature1 = classA : classA (4.52/0.92) [1.25/0.22]
|   |   |   feature1 = classB : classA (0.03/0.01) [0.03/0]
|   |   |   feature1 = classC : classD (0.16/0.09) [0.09/0.07]
|   |   |   feature1 = classD : classE (0.86/0.3) [0.25/0.25]
|   |   |   feature1 = classE : classE (4.56/2) [5.7/0.59]
|   |   |   feature1 = classF : classE (1.34/0.32) [0.75/0.24]
|   |   |   feature1 = classG : classG (4.87/1.1) [1.18/0.57]
|   |   feature2 = classF
|   |   |   feature1 = classA : classG (2.25/0.99) [0.91/0.58]
|   |   |   feature1 = classB : classA (0.06/0.02) [0.05/0.01]
|   |   |   feature1 = classC : classD (0.3/0.18) [0.17/0.13]
|   |   |   feature1 = classD : classF (2.69/0.43) [0.98/0.38]
|   |   |   feature1 = classE : classG (0.88/0.25) [0.13/0.13]
|   |   |   feature1 = classF : classG (0.59/0.17) [0.44/0.1]
|   |   |   feature1 = classG : classD (23.57/0.54) [0.33/0.33]
|   |   feature2 = classG
|   |   |   feature1 = classA : classG (4.02/1.47) [0.81/0.13]
|   |   |   feature1 = classB : classA (0.12/0.04) [0.1/0.02]
|   |   |   feature1 = classC : classD (0.61/0.36) [0.34/0.26]
|   |   |   feature1 = classD : classG (2.72/0.62) [0.98/0.18]
|   |   |   feature1 = classE : classG (1.71/0.44) [0.26/0.26]
|   |   |   feature1 = classF : classG (47.38/0.47) [1.53/0.85]
|   |   |   feature1 = classG : classG (4.75/0.27) [3.41/0.18]
|   feature5 = classF
|   |   feature1 = classA
|   |   |   feature10 < 0.52 : classF (5.29/1.7) [4.17/2.62]
|   |   |   feature10 >= 0.52
|   |   |   |   feature7 < 0.42 : classD (24.05/0.07) [23.21/0.07]
|   |   |   |   feature7 >= 0.42 : classG (4.46/0.44) [1.1/0.04]
|   |   feature1 = classB : classA (0.19/0.06) [0.16/0.02]
|   |   feature1 = classC : classD (0.97/0.57) [0.55/0.41]
|   |   feature1 = classD : classG (3.03/0.98) [1.53/0.29]
|   |   feature1 = classE : classG (3.77/1.74) [0.42/0.42]
|   |   feature1 = classF : classF (39.39/1.76) [44.48/24.38]
|   |   feature1 = classG
|   |   |   feature2 = classA : classA (0.71/0.71) [1.03/0.08]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   feature2 = classD : classG (2.1/0.06) [2.01/0.04]
|   |   |   feature2 = classE : classF (0/0) [0/0]
|   |   |   feature2 = classF : classF (7.92/0.55) [4.01/0.28]
|   |   |   feature2 = classG : classG (5.63/1.18) [2.05/1.13]
|   feature5 = classG
|   |   feature7 < 0.45
|   |   |   feature1 = classA : classD (20.36/3.09) [4.94/2.48]
|   |   |   feature1 = classB : classG (0.51/0) [0.51/0]
|   |   |   feature1 = classC : classE (10.01/4.94) [3.1/3.05]
|   |   |   feature1 = classD
|   |   |   |   feature10 < 0.52 : classA (49.46/3.39) [0.14/0.14]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature7 < 0.35 : classG (21.55/1.71) [17.85/0.06]
|   |   |   |   |   feature7 >= 0.35 : classG (3.59/0.01) [3.08/0.01]
|   |   |   feature1 = classE
|   |   |   |   feature7 < 0.38
|   |   |   |   |   feature7 < 0.33 : classG (3.36/0.39) [0.52/0.01]
|   |   |   |   |   feature7 >= 0.33 : classD (4.92/0.01) [2.52/0.07]
|   |   |   |   feature7 >= 0.38 : classD (4.1/4.1) [26.62/3.59]
|   |   |   feature1 = classF : classG (18/7.47) [3.23/0.16]
|   |   |   feature1 = classG
|   |   |   |   feature7 < 0.42 : classG (20.53/0.06) [42.92/23.09]
|   |   |   |   feature7 >= 0.42 : classA (94.47/2.34) [2.74/2.74]
|   |   feature7 >= 0.45
|   |   |   feature1 = classA
|   |   |   |   feature7 < 0.68 : classG (126.75/5.64) [20.25/0.51]
|   |   |   |   feature7 >= 0.68
|   |   |   |   |   feature7 < 0.72 : classE (2.57/0.12) [0.06/0.06]
|   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   feature11 < 0.98 : classA (50.56/0.14) [2.49/1.16]
|   |   |   |   |   |   feature11 >= 0.98 : classG (2.63/0.59) [2.58/0.53]
|   |   |   feature1 = classB : classA (3.5/1.04) [2.9/0.45]
|   |   |   feature1 = classC
|   |   |   |   feature7 < 0.68 : classD (4.92/0.01) [4.92/2.47]
|   |   |   |   feature7 >= 0.68 : classB (2.73/0.28) [2.46/0.01]
|   |   |   feature1 = classD
|   |   |   |   feature7 < 0.48 : classF (13.84/1.53) [8.42/3.48]
|   |   |   |   feature7 >= 0.48 : classG (68.96/1.25) [4.73/1.38]
|   |   |   feature1 = classE : classG (184.42/9.62) [5.53/5.53]
|   |   |   feature1 = classF : classG (35.47/5.52) [30.22/6.91]
|   |   |   feature1 = classG
|   |   |   |   feature7 < 0.52 : classG (25.32/7.43) [12.83/4.98]
|   |   |   |   feature7 >= 0.52 : classG (1004.73/2.78) [616.61/112.18]

Size of the tree : 1050

Weight: 2.19


REPTree
============

feature4 = classA
|   feature1 = classA
|   |   feature6 = classA
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature3 = classA
|   |   |   |   |   |   |   feature10 < 0.57 : classA (5.27/0.61) [6.27/4.24]
|   |   |   |   |   |   |   feature10 >= 0.57 : classA (11.31/0.08) [3.56/0.51]
|   |   |   |   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classE : classE (3.1/0.72) [3.74/1.36]
|   |   |   |   |   |   feature3 = classF : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classA (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.48 : classD (4.95/4.95) [23.71/2.48]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature7 < 0.58 : classF (18.78/2.03) [9.89/0]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature7 < 0.68 : classA (3.66/0.63) [2.6/1.51]
|   |   |   |   |   |   feature7 >= 0.68 : classC (4.93/4.76) [21.51/0.27]
|   |   |   feature7 >= 0.72 : classA (265.1/11.07) [150.11/26.78]
|   |   feature6 = classB
|   |   |   feature2 = classA
|   |   |   |   feature8 < 0.62
|   |   |   |   |   feature5 = classA : classB (14.07/1.25) [3.31/3.31]
|   |   |   |   |   feature5 = classB
|   |   |   |   |   |   feature7 < 0.48 : classA (2.9/0.12) [0.79/0.58]
|   |   |   |   |   |   feature7 >= 0.48 : classB (28.86/3.21) [31.27/5.66]
|   |   |   |   |   feature5 = classC : classB (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classA (0.05/0) [0.02/0.01]
|   |   |   |   |   feature5 = classE : classA (1.38/0.1) [0.28/0.25]
|   |   |   |   |   feature5 = classF : classF (3.7/0.31) [1.42/0.67]
|   |   |   |   |   feature5 = classG : classB (0/0) [0/0]
|   |   |   |   feature8 >= 0.62 : classA (16.31/2.54) [24.71/11.02]
|   |   |   feature2 = classB : classA (9.95/0.73) [20.39/14.63]
|   |   |   feature2 = classC : classA (0.02/0) [0/0]
|   |   |   feature2 = classD : classA (0.02/0) [0/0]
|   |   |   feature2 = classE : classA (12.48/1.59) [9.06/2.96]
|   |   |   feature2 = classF : classA (0.07/0) [0.06/0.01]
|   |   |   feature2 = classG : classB (0/0) [0/0]
|   |   feature6 = classC
|   |   |   feature7 < 0.55 : classC (29.42/2.67) [7.29/7.28]
|   |   |   feature7 >= 0.55
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature10 < 0.98 : classA (4.07/0.79) [3.12/0.23]
|   |   |   |   |   feature10 >= 0.98 : classC (2.21/2.21) [3.86/0.54]
|   |   |   |   feature7 >= 0.72 : classA (13.9/0.64) [10.1/3.62]
|   |   feature6 = classD
|   |   |   feature10 < 0.55
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   feature10 < 0.42 : classA (3.15/0.03) [1.87/0.09]
|   |   |   |   |   |   feature10 >= 0.42
|   |   |   |   |   |   |   feature8 < 0.44 : classA (2.57/0.03) [0.09/0.07]
|   |   |   |   |   |   |   feature8 >= 0.44 : classD (142.59/2.12) [31.94/4.94]
|   |   |   |   |   feature10 >= 0.52 : classD (25.95/13.08) [6.71/6.66]
|   |   |   |   feature7 >= 0.65 : classA (16.16/3.86) [16.94/0.34]
|   |   |   feature10 >= 0.55
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   |   feature10 < 0.58 : classA (2.59/0.03) [0.08/0.07]
|   |   |   |   |   |   |   feature10 >= 0.58 : classG (6.09/0.11) [3.16/0.18]
|   |   |   |   |   |   feature10 >= 0.62 : classA (17.11/0.51) [6.17/0.46]
|   |   |   |   |   feature10 >= 0.92
|   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   feature8 < 0.58 : classF (15.22/0.17) [3.43/0.12]
|   |   |   |   |   |   |   feature8 >= 0.58
|   |   |   |   |   |   |   |   feature10 < 0.97 : classF (6.09/0.07) [9.14/0.05]
|   |   |   |   |   |   |   |   feature10 >= 0.97 : classA (2.88/0.32) [2.62/0.08]
|   |   |   |   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (0.02/0) [0.01/0]
|   |   |   |   |   |   feature2 = classE : classE (3.04/0.06) [3.08/0.09]
|   |   |   |   |   |   feature2 = classF : classA (2.59/0.03) [5.16/0.07]
|   |   |   |   |   |   feature2 = classG : classF (0/0) [0/0]
|   |   |   |   feature7 >= 0.58
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.68 : classA (7.22/0.37) [9/1.09]
|   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   feature2 = classA : classC (15.29/15.29) [27.73/5.53]
|   |   |   |   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classC (0.01/0.01) [0.03/0]
|   |   |   |   |   |   |   feature2 = classE : classA (0.08/0.01) [0.18/0.12]
|   |   |   |   |   |   |   feature2 = classF : classC (3.03/3.03) [4.47/0.08]
|   |   |   |   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.72 : classA (127.5/0.97) [119.92/42.23]
|   |   feature6 = classE : classE (422.18/215.76) [383.31/205.07]
|   |   feature6 = classF
|   |   |   feature3 = classA
|   |   |   |   feature7 < 0.48 : classE (27.11/1.5) [1.38/1.38]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.58 : classF (2.26/0.6) [3.32/2.34]
|   |   |   |   |   feature7 >= 0.58 : classA (2/0.55) [5.16/4.39]
|   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   feature3 = classD : classA (3.96/0.5) [1.23/1.11]
|   |   |   feature3 = classE : classE (2.82/0.55) [3.21/0.97]
|   |   |   feature3 = classF
|   |   |   |   feature10 < 0.62
|   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   feature10 < 0.5 : classD (4.29/4.28) [19.58/2.17]
|   |   |   |   |   |   feature10 >= 0.5 : classC (10.49/1.45) [5.29/5.29]
|   |   |   |   |   feature10 >= 0.58
|   |   |   |   |   |   feature7 < 0.53 : classG (3.93/0.04) [2.04/0.09]
|   |   |   |   |   |   feature7 >= 0.53 : classA (2.17/1.25) [0.49/0.07]
|   |   |   |   feature10 >= 0.62
|   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   feature9 < 0.87 : classA (116.52/1.1) [3.43/3.36]
|   |   |   |   |   |   feature9 >= 0.87 : classF (3.17/0.02) [1.5/0.01]
|   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   feature7 < 0.88
|   |   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   |   feature7 < 0.55 : classF (8.9/0.12) [7.2/0.04]
|   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   |   |   |   feature9 < 0.55 : classF (2.89/0.33) [4.79/2.18]
|   |   |   |   |   |   |   |   |   |   feature9 >= 0.55 : classE (24.88/23.24) [163.69/49.15]
|   |   |   |   |   |   |   |   |   feature7 >= 0.82
|   |   |   |   |   |   |   |   |   |   feature11 < 0.97 : classF (8.44/0.75) [3.39/0.67]
|   |   |   |   |   |   |   |   |   |   feature11 >= 0.97 : classA (3.03/0.02) [0.67/0.06]
|   |   |   |   |   |   |   feature5 = classB : classA (0.09/0) [0.04/0.04]
|   |   |   |   |   |   |   feature5 = classC : classA (0.05/0) [0.02/0.02]
|   |   |   |   |   |   |   feature5 = classD : classA (0.09/0) [0.08/0.04]
|   |   |   |   |   |   |   feature5 = classE : classA (0.23/0.01) [0.58/0.1]
|   |   |   |   |   |   |   feature5 = classF
|   |   |   |   |   |   |   |   feature10 < 0.85 : classA (6.1/0.33) [10.11/7.44]
|   |   |   |   |   |   |   |   feature10 >= 0.85
|   |   |   |   |   |   |   |   |   feature7 < 0.62 : classF (24.34/0.22) [3.98/0.39]
|   |   |   |   |   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   |   |   |   |   feature7 < 0.85 : classC (2.56/2.56) [7.63/0.4]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.85 : classF (2.01/0.01) [0.91/0.01]
|   |   |   |   |   |   |   feature5 = classG : classA (0.61/0.03) [0.56/0.27]
|   |   |   |   |   |   feature7 >= 0.88 : classA (35.04/0.24) [17.69/0.73]
|   |   |   feature3 = classG : classA (0.34/0.04) [0.11/0.1]
|   |   feature6 = classG
|   |   |   feature3 = classA : classA (0.51/0.06) [0.51/0.14]
|   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   feature3 = classD : classA (0.24/0.03) [0.07/0.07]
|   |   |   feature3 = classE
|   |   |   |   feature7 < 0.45 : classE (28.15/1.54) [2.29/1.28]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.58 : classF (2.37/0.64) [3.61/2.58]
|   |   |   |   |   feature7 >= 0.58 : classC (2.1/2.03) [5.25/3.07]
|   |   |   feature3 = classF : classA (0.4/0.05) [0.76/0.11]
|   |   |   feature3 = classG
|   |   |   |   feature10 < 0.42 : classG (15.04/2.24) [2.78/2.72]
|   |   |   |   feature10 >= 0.42
|   |   |   |   |   feature5 = classA
|   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   |   |   feature10 < 0.57 : classD (7.09/7.07) [7.53/1.85]
|   |   |   |   |   |   |   |   feature10 >= 0.57
|   |   |   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   |   |   feature7 < 0.48 : classA (5.53/0.04) [0.3/0.18]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.48 : classF (2.83/1.31) [2.99/0.68]
|   |   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   |   feature7 < 0.62 : classA (11.66/0.15) [1.81/0.44]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.62 : classG (3.99/3.99) [31.79/6.18]
|   |   |   |   |   |   |   feature10 >= 0.98 : classG (8.12/0.49) [8.6/6]
|   |   |   |   |   |   feature7 >= 0.75 : classA (32.7/1.57) [24.65/6.35]
|   |   |   |   |   feature5 = classB : classA (0.07/0.01) [0.02/0.02]
|   |   |   |   |   feature5 = classC : classA (0.02/0) [0.01/0.01]
|   |   |   |   |   feature5 = classD : classA (0.09/0.01) [0.04/0.03]
|   |   |   |   |   feature5 = classE : classA (0.96/0.08) [0.5/0.28]
|   |   |   |   |   feature5 = classF : classF (4.23/0.44) [2.15/1.31]
|   |   |   |   |   feature5 = classG : classA (8/0.66) [5.96/2.89]
|   feature1 = classB
|   |   feature10 < 0.42
|   |   |   feature7 < 0.45 : classE (28.38/2.77) [13.42/0.62]
|   |   |   feature7 >= 0.45 : classB (6.3/2.18) [2.04/0.14]
|   |   feature10 >= 0.42
|   |   |   feature10 < 0.57 : classB (10.78/3.66) [3.65/0.23]
|   |   |   feature10 >= 0.57
|   |   |   |   feature5 = classA
|   |   |   |   |   feature7 < 0.4 : classB (2.57/0.03) [3.07/0.07]
|   |   |   |   |   feature7 >= 0.4 : classB (4.34/0.47) [0.78/0.12]
|   |   |   |   feature5 = classB
|   |   |   |   |   feature7 < 0.53 : classA (13.38/0.09) [1.32/1.32]
|   |   |   |   |   feature7 >= 0.53 : classB (2.24/0.5) [1.19/0.05]
|   |   |   |   feature5 = classC : classC (0.01/0) [0/0]
|   |   |   |   feature5 = classD : classD (0.01/0) [0/0]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.68 : classA (13.57/0.28) [14.13/1.32]
|   |   |   |   |   feature7 >= 0.68 : classB (2.01/0.49) [0.9/0.04]
|   |   |   |   feature5 = classF : classA (0/0) [0/0]
|   |   |   |   feature5 = classG : classA (0.01/0) [0.01/0]
|   feature1 = classC : classC (218.85/131.27) [142.04/69.02]
|   feature1 = classD : classD (138.4/97.87) [32.65/11.01]
|   feature1 = classE
|   |   feature10 < 0.45 : classA (149.91/25.04) [27.82/7.27]
|   |   feature10 >= 0.45
|   |   |   feature8 < 0.94
|   |   |   |   feature7 < 0.52 : classE (90.28/44.44) [73.86/54.33]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   feature7 < 0.73 : classA (4.13/2.85) [1.66/0.37]
|   |   |   |   |   |   feature7 >= 0.73 : classE (2.75/1.33) [0.63/0.06]
|   |   |   |   |   feature10 >= 0.55
|   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   feature7 < 0.67 : classE (15.39/0.13) [6.28/0.63]
|   |   |   |   |   |   |   feature7 >= 0.67 : classA (14.5/6.04) [9.9/1.44]
|   |   |   |   |   |   feature7 >= 0.72 : classE (15.56/0.13) [5.47/0.35]
|   |   |   feature8 >= 0.94 : classA (44.68/16.03) [10.79/4.64]
|   feature1 = classF
|   |   feature7 < 0.35
|   |   |   feature7 < 0.28
|   |   |   |   feature2 = classA : classG (36.56/1.57) [0.82/0.82]
|   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   feature2 = classC : classG (5.01/0.22) [0.11/0.11]
|   |   |   |   feature2 = classD : classG (6.44/0.28) [0.14/0.14]
|   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   feature2 = classG : classG (0/0) [0/0]
|   |   |   feature7 >= 0.28
|   |   |   |   feature10 < 0.37 : classE (117.67/3.14) [4.75/4.75]
|   |   |   |   feature10 >= 0.37
|   |   |   |   |   feature10 < 0.62 : classC (5.52/0.71) [0.22/0.22]
|   |   |   |   |   feature10 >= 0.62 : classE (14.92/2.11) [13.44/0.64]
|   |   feature7 >= 0.35
|   |   |   feature7 < 0.48
|   |   |   |   feature10 < 0.88
|   |   |   |   |   feature10 < 0.8 : classA (16.58/16.3) [14.7/1.87]
|   |   |   |   |   feature10 >= 0.8
|   |   |   |   |   |   feature7 < 0.43 : classA (2.14/0.37) [1.03/1.03]
|   |   |   |   |   |   feature7 >= 0.43 : classB (116.04/1.5) [15.33/15.33]
|   |   |   |   feature10 >= 0.88
|   |   |   |   |   feature8 < 0.9
|   |   |   |   |   |   feature3 = classA : classA (0.29/0) [0.29/0.01]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (0.29/0.01) [0.01/0.01]
|   |   |   |   |   |   feature3 = classE : classE (5.21/0.13) [2.68/0.14]
|   |   |   |   |   |   feature3 = classF : classF (2.91/0.04) [1.78/0]
|   |   |   |   |   |   feature3 = classG : classA (0.03/0) [0.03/0]
|   |   |   |   |   feature8 >= 0.9 : classA (27.73/1.14) [26.67/1.03]
|   |   |   feature7 >= 0.48
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature7 < 0.52 : classF (10.69/0.38) [9.19/7.66]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature10 < 0.52 : classA (61.31/3.72) [4.61/4.56]
|   |   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   |   feature10 < 0.78 : classD (3.98/3.98) [13.04/0.23]
|   |   |   |   |   |   |   feature10 >= 0.78
|   |   |   |   |   |   |   |   feature5 = classA : classF (4.41/1.54) [0.83/0.17]
|   |   |   |   |   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classE : classE (3.93/1.39) [2.76/0.22]
|   |   |   |   |   |   |   |   feature5 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   |   feature7 >= 0.58
|   |   |   |   |   feature10 < 0.55 : classF (13.04/1.35) [4.44/0.01]
|   |   |   |   |   feature10 >= 0.55
|   |   |   |   |   |   feature5 = classA : classF (19.07/0.02) [8.9/0.03]
|   |   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classF : classF (6.23/0) [1.07/0]
|   |   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   feature1 = classG
|   |   feature3 = classA
|   |   |   feature10 < 0.7 : classG (3.66/0.52) [0.52/0.3]
|   |   |   feature10 >= 0.7
|   |   |   |   feature7 < 0.72 : classA (2.42/0.83) [1.16/0.87]
|   |   |   |   feature7 >= 0.72 : classA (2.65/0.04) [0.07/0.06]
|   |   feature3 = classB : classA (1.32/0.29) [0.51/0.21]
|   |   feature3 = classC : classA (0.07/0.05) [0.08/0.02]
|   |   feature3 = classD
|   |   |   feature7 < 0.4 : classD (27.77/2.13) [0.59/0.58]
|   |   |   feature7 >= 0.4
|   |   |   |   feature10 < 0.82
|   |   |   |   |   feature10 < 0.78 : classG (3.69/1.93) [3.64/2.62]
|   |   |   |   |   feature10 >= 0.78 : classF (3.59/0.15) [2.01/0.05]
|   |   |   |   feature10 >= 0.82 : classA (6.33/0.6) [0.75/0.68]
|   |   feature3 = classE
|   |   |   feature7 < 0.45 : classE (17.47/2.22) [1.02/0.45]
|   |   |   feature7 >= 0.45
|   |   |   |   feature10 < 0.85
|   |   |   |   |   feature10 < 0.7 : classG (5.2/3.07) [2.66/1.4]
|   |   |   |   |   feature10 >= 0.7
|   |   |   |   |   |   feature7 < 0.72 : classF (4.41/0.04) [5.1/2.66]
|   |   |   |   |   |   feature7 >= 0.72 : classA (3.03/0.07) [5.17/0.08]
|   |   |   |   feature10 >= 0.85
|   |   |   |   |   feature9 < 0.73 : classE (3.71/1.17) [5.32/0.24]
|   |   |   |   |   feature9 >= 0.73 : classA (19.13/0.82) [1.24/1.17]
|   |   feature3 = classF
|   |   |   feature8 < 0.94
|   |   |   |   feature10 < 0.7
|   |   |   |   |   feature10 < 0.5
|   |   |   |   |   |   feature7 < 0.53 : classA (2.03/1.08) [2.07/1.12]
|   |   |   |   |   |   feature7 >= 0.53 : classG (2.91/0.02) [1.03/0.06]
|   |   |   |   |   feature10 >= 0.5 : classG (4.29/2.05) [1.09/0.19]
|   |   |   |   feature10 >= 0.7 : classF (46.86/15.97) [14.34/2.42]
|   |   |   feature8 >= 0.94
|   |   |   |   feature10 < 0.9
|   |   |   |   |   feature10 < 0.73
|   |   |   |   |   |   feature10 < 0.58 : classA (5.02/2.48) [2.79/0.25]
|   |   |   |   |   |   feature10 >= 0.58 : classG (2.68/0.06) [3.77/2.72]
|   |   |   |   |   feature10 >= 0.73 : classF (5.39/0.07) [2.97/0.13]
|   |   |   |   feature10 >= 0.9 : classD (53.11/53.11) [124.88/10.35]
|   |   feature3 = classG
|   |   |   feature7 < 0.62
|   |   |   |   feature2 = classA
|   |   |   |   |   feature10 < 0.57 : classA (15.11/2.27) [14/1.15]
|   |   |   |   |   feature10 >= 0.57 : classG (25.74/13.12) [22.26/5.52]
|   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (2.96/0.42) [0.58/0.58]
|   |   |   |   feature2 = classE : classE (0.9/0.13) [0.95/0.1]
|   |   |   |   feature2 = classF : classA (0.9/0.13) [0.95/0.18]
|   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.7 : classF (15.26/7.36) [6.92/2.71]
|   |   |   |   feature7 >= 0.7 : classG (38.29/2.48) [35.08/13.8]
feature4 = classB
|   feature7 < 0.98
|   |   feature7 < 0.28
|   |   |   feature1 = classA : classA (0/0) [2.54/0]
|   |   |   feature1 = classB : classC (115.46/0.92) [117.05/2.51]
|   |   |   feature1 = classC : classA (5.15/5.14) [16.86/8.48]
|   |   |   feature1 = classD : classA (12.91/0.09) [25.89/13.07]
|   |   |   feature1 = classE : classC (0/0) [0/0]
|   |   |   feature1 = classF : classG (16.88/0.14) [0.37/0.37]
|   |   |   feature1 = classG : classC (0/0) [0/0]
|   |   feature7 >= 0.28
|   |   |   feature1 = classA
|   |   |   |   feature7 < 0.58 : classB (31.12/4.57) [51.41/12.72]
|   |   |   |   feature7 >= 0.58
|   |   |   |   |   feature7 < 0.68 : classG (2.06/2.06) [2.91/0.11]
|   |   |   |   |   feature7 >= 0.68 : classE (9/0.63) [0.71/0.71]
|   |   |   feature1 = classB
|   |   |   |   feature7 < 0.32 : classE (51.63/0.42) [1.13/1.13]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature10 < 0.95
|   |   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   |   feature2 = classA : classA (0.02/0) [0.02/0]
|   |   |   |   |   |   |   feature2 = classB : classC (13.18/13.18) [34.24/8.63]
|   |   |   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classB (6.75/0.08) [1.23/0.14]
|   |   |   |   |   |   |   feature2 = classF : classB (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classB (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.92
|   |   |   |   |   |   |   feature7 < 0.95 : classB (2.21/0.53) [1.98/0.05]
|   |   |   |   |   |   |   feature7 >= 0.95 : classA (115.96/1.33) [2.63/2.54]
|   |   |   |   |   feature10 >= 0.95
|   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   feature10 < 0.98 : classB (2.59/0.05) [2.6/0.06]
|   |   |   |   |   |   |   feature10 >= 0.98 : classA (26.12/0.19) [41.52/3.09]
|   |   |   |   |   |   feature7 >= 0.48 : classB (47.9/0.39) [55.41/26.65]
|   |   |   feature1 = classC
|   |   |   |   feature7 < 0.42 : classD (11.39/3.02) [0.29/0.29]
|   |   |   |   feature7 >= 0.42 : classE (11.22/11.22) [13.07/4.7]
|   |   |   feature1 = classD : classG (17.25/7) [2.46/2.46]
|   |   |   feature1 = classE
|   |   |   |   feature7 < 0.38 : classD (3.77/0.97) [0.55/0.27]
|   |   |   |   feature7 >= 0.38 : classA (48.38/14.36) [21.67/4.89]
|   |   |   feature1 = classF
|   |   |   |   feature7 < 0.35 : classB (6.07/0.98) [3.61/1.07]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature7 < 0.55 : classE (2.82/2.82) [20.56/7.76]
|   |   |   |   |   feature7 >= 0.55 : classA (9/0.62) [0.38/0.37]
|   |   |   feature1 = classG
|   |   |   |   feature7 < 0.42 : classB (2.56/0.02) [2.6/0.06]
|   |   |   |   feature7 >= 0.42 : classF (3.86/1.96) [3.39/0.5]
|   feature7 >= 0.98
|   |   feature2 = classA : classA (0.55/0.01) [0.66/0.02]
|   |   feature2 = classB : classB (618.3/5.48) [428.32/126.4]
|   |   feature2 = classC : classC (6.04/0.13) [4.42/1.31]
|   |   feature2 = classD : classD (0.16/0) [0.09/0.04]
|   |   feature2 = classE : classD (0/0) [3.11/0.57]
|   |   feature2 = classF : classB (0/0) [0/0]
|   |   feature2 = classG : classB (0/0) [0/0]
feature4 = classC
|   feature8 < 0.7
|   |   feature1 = classA
|   |   |   feature7 < 0.68 : classA (5.49/1.55) [14.27/2]
|   |   |   feature7 >= 0.68 : classC (14.65/5.24) [1.1/1.1]
|   |   feature1 = classB
|   |   |   feature7 < 0.68 : classE (26.79/1.19) [14.64/1.84]
|   |   |   feature7 >= 0.68
|   |   |   |   feature7 < 0.72 : classC (2.66/0.12) [0.06/0.06]
|   |   |   |   feature7 >= 0.72 : classB (2.29/0.49) [1.18/0.05]
|   |   feature1 = classC
|   |   |   feature10 < 0.85
|   |   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (18.69/0.85) [9.09/1.24]
|   |   |   |   feature3 = classC
|   |   |   |   |   feature7 < 0.38 : classA (26.58/0.97) [14.76/1.26]
|   |   |   |   |   feature7 >= 0.38 : classC (30.34/0.53) [13.82/1.49]
|   |   |   |   feature3 = classD
|   |   |   |   |   feature5 = classA : classC (0.03/0) [0.08/0]
|   |   |   |   |   feature5 = classB : classC (0.06/0) [0.03/0]
|   |   |   |   |   feature5 = classC : classC (0.06/0) [0/0]
|   |   |   |   |   feature5 = classD : classD (5.25/0.1) [2.89/0.33]
|   |   |   |   |   feature5 = classE : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classF : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classG : classD (2.92/0.05) [0.19/0.18]
|   |   |   |   feature3 = classE : classE (2.67/0.12) [0.21/0.18]
|   |   |   |   feature3 = classF : classF (0/0) [10.17/2.54]
|   |   |   |   feature3 = classG : classA (0.19/0.01) [0.2/0.01]
|   |   |   feature10 >= 0.85 : classD (256.28/8.08) [20/19.29]
|   |   feature1 = classD
|   |   |   feature10 < 0.92
|   |   |   |   feature10 < 0.62
|   |   |   |   |   feature7 < 0.88
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (4.6/0.76) [4.42/0.19]
|   |   |   |   |   |   feature3 = classC
|   |   |   |   |   |   |   feature10 < 0.32 : classC (5.75/0.67) [2.73/0.19]
|   |   |   |   |   |   |   feature10 >= 0.32 : classE (5.5/2.4) [4.4/0.28]
|   |   |   |   |   |   feature3 = classD : classD (9.71/3.74) [9.05/3.88]
|   |   |   |   |   |   feature3 = classE : classE (9.22/1.54) [8.85/0.38]
|   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classA (0.13/0.06) [0.13/0.05]
|   |   |   |   |   feature7 >= 0.88 : classC (17.68/0.17) [0.41/0.41]
|   |   |   |   feature10 >= 0.62
|   |   |   |   |   feature7 < 0.52 : classF (3.72/2.49) [0.91/0.01]
|   |   |   |   |   feature7 >= 0.52 : classD (27.69/1.11) [1.32/0.92]
|   |   |   feature10 >= 0.92 : classC (33.33/33.33) [39.45/1.04]
|   |   feature1 = classE
|   |   |   feature2 = classA : classA (0.16/0.02) [0.16/0.01]
|   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   feature2 = classC
|   |   |   |   feature7 < 0.6
|   |   |   |   |   feature5 = classA : classC (0/0) [0/0]
|   |   |   |   |   feature5 = classB : classC (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classC (11.58/0.53) [3.82/1.28]
|   |   |   |   |   feature5 = classD : classD (0.32/0.03) [0.04/0.03]
|   |   |   |   |   feature5 = classE : classC (14.58/0.67) [14.41/1.61]
|   |   |   |   |   feature5 = classF : classC (0/0) [0/0]
|   |   |   |   |   feature5 = classG : classC (0/0) [0/0]
|   |   |   |   feature7 >= 0.6 : classA (2.02/0.01) [2.06/0.05]
|   |   |   feature2 = classD : classC (0/0) [0/0]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.48 : classE (5.16/2.58) [4.68/2.06]
|   |   |   |   feature7 >= 0.48 : classE (19.76/1.9) [7.3/2.17]
|   |   |   feature2 = classF
|   |   |   |   feature7 < 0.55 : classG (3.23/0.64) [0.59/0.59]
|   |   |   |   feature7 >= 0.55 : classF (3/0.44) [3.04/0.44]
|   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   feature1 = classF
|   |   |   feature7 < 0.28 : classG (8.52/0.08) [0.2/0.2]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.35
|   |   |   |   |   feature7 < 0.32 : classC (10.26/0.09) [2.78/0.24]
|   |   |   |   |   feature7 >= 0.32 : classC (3.04/0.5) [0.54/0.54]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature7 < 0.58 : classA (5.68/0.98) [1.45/1.44]
|   |   |   |   |   feature7 >= 0.58 : classF (2.74/0.57) [2.03/0.01]
|   |   feature1 = classG : classG (2.59/1.54) [4.87/2.04]
|   feature8 >= 0.7
|   |   feature10 < 0.75
|   |   |   feature10 < 0.55
|   |   |   |   feature1 = classA : classA (1.09/0.45) [3.44/0.19]
|   |   |   |   feature1 = classB : classB (0.23/0.08) [0.08/0]
|   |   |   |   feature1 = classC : classC (11.2/0.65) [15.93/1.05]
|   |   |   |   feature1 = classD
|   |   |   |   |   feature10 < 0.38 : classE (16.72/0.48) [0.4/0.4]
|   |   |   |   |   feature10 >= 0.38
|   |   |   |   |   |   feature7 < 0.92 : classD (6.72/0.68) [5.27/0.18]
|   |   |   |   |   |   feature7 >= 0.92 : classC (8.16/0.06) [0.17/0.17]
|   |   |   |   feature1 = classE : classE (3.48/0.92) [0.87/0.84]
|   |   |   |   feature1 = classF : classF (4.53/1.22) [3.47/0.12]
|   |   |   |   feature1 = classG : classF (0.15/0.07) [0.15/0.02]
|   |   |   feature10 >= 0.55
|   |   |   |   feature8 < 0.86
|   |   |   |   |   feature1 = classA : classA (6.52/1.59) [1.67/0.98]
|   |   |   |   |   feature1 = classB : classA (2.19/0.52) [0.3/0.3]
|   |   |   |   |   feature1 = classC
|   |   |   |   |   |   feature7 < 0.62 : classA (119.9/2.99) [6.73/5.47]
|   |   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   |   feature8 < 0.8 : classC (4.07/0.44) [1.03/0.13]
|   |   |   |   |   |   |   feature8 >= 0.8 : classA (9.36/0.86) [0.41/0.41]
|   |   |   |   |   feature1 = classD : classA (9.11/3.34) [1.23/1.23]
|   |   |   |   |   feature1 = classE : classA (8.82/1.97) [2.93/0.41]
|   |   |   |   |   feature1 = classF : classA (19.39/5.56) [0.97/0.83]
|   |   |   |   |   feature1 = classG : classA (1.43/0.52) [0.54/0.54]
|   |   |   |   feature8 >= 0.86
|   |   |   |   |   feature1 = classA : classA (1.06/0.17) [0.09/0.08]
|   |   |   |   |   feature1 = classB : classB (0.09/0.03) [0.03/0]
|   |   |   |   |   feature1 = classC : classC (8.25/0.28) [6.45/0.47]
|   |   |   |   |   feature1 = classD : classC (0.93/0.36) [1.24/0.1]
|   |   |   |   |   feature1 = classE : classC (8.05/0.27) [5.55/0.46]
|   |   |   |   |   feature1 = classF : classG (0.47/0.19) [0.07/0.05]
|   |   |   |   |   feature1 = classG : classF (0.05/0.02) [0.05/0.01]
|   |   feature10 >= 0.75
|   |   |   feature7 < 0.72
|   |   |   |   feature1 = classA : classC (50.79/7.9) [32.56/6.37]
|   |   |   |   feature1 = classB : classB (1.91/1.52) [1.95/0.35]
|   |   |   |   feature1 = classC
|   |   |   |   |   feature10 < 0.98 : classC (21.02/3.14) [10.12/5.22]
|   |   |   |   |   feature10 >= 0.98 : classA (36.36/10.75) [47.58/18.49]
|   |   |   |   feature1 = classD
|   |   |   |   |   feature7 < 0.53 : classG (11.66/4.92) [1.89/1.89]
|   |   |   |   |   feature7 >= 0.53
|   |   |   |   |   |   feature7 < 0.67 : classD (3.54/0.95) [1.27/1.25]
|   |   |   |   |   |   feature7 >= 0.67 : classA (8.34/0.24) [0.85/0.85]
|   |   |   |   feature1 = classE
|   |   |   |   |   feature7 < 0.6 : classC (8.58/2.89) [6.76/6.66]
|   |   |   |   |   feature7 >= 0.6 : classA (5.67/0.16) [5.69/0.18]
|   |   |   |   feature1 = classF : classC (43.45/19.64) [3.87/3.37]
|   |   |   |   feature1 = classG : classF (1.94/0.69) [2.14/0.25]
|   |   |   feature7 >= 0.72
|   |   |   |   feature1 = classA : classA (1.31/0.04) [0.55/0.04]
|   |   |   |   feature1 = classB : classB (3/0.7) [1.2/0.1]
|   |   |   |   feature1 = classC
|   |   |   |   |   feature7 < 0.85 : classC (11.76/1.32) [5.5/0.25]
|   |   |   |   |   feature7 >= 0.85 : classC (577.83/4.46) [294.81/12.42]
|   |   |   |   feature1 = classD : classD (1.46/0.61) [0.23/0.05]
|   |   |   |   feature1 = classE : classE (0/0) [0.01/0]
|   |   |   |   feature1 = classF : classC (0/0) [0/0]
|   |   |   |   feature1 = classG : classG (0.37/0.01) [0.15/0.01]
feature4 = classD
|   feature1 = classA
|   |   feature7 < 0.65
|   |   |   feature3 = classA : classG (14.55/1.75) [2.37/1.04]
|   |   |   feature3 = classB : classA (2.89/0.2) [0.47/0.41]
|   |   |   feature3 = classC : classA (0.71/0.06) [0.12/0.1]
|   |   |   feature3 = classD
|   |   |   |   feature7 < 0.45 : classD (19.28/1.31) [4.02/3.27]
|   |   |   |   feature7 >= 0.45 : classA (3.9/1.45) [2.63/2.2]
|   |   |   feature3 = classE : classA (0/0) [2.54/0]
|   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   feature3 = classG
|   |   |   |   feature7 < 0.55 : classD (26.96/1.35) [2.09/1.2]
|   |   |   |   feature7 >= 0.55 : classG (2.2/2.2) [2.71/0.05]
|   |   feature7 >= 0.65 : classA (52.51/19.61) [7.27/1.13]
|   feature1 = classB
|   |   feature7 < 0.53 : classA (2.16/0.02) [0.05/0.05]
|   |   feature7 >= 0.53 : classD (9.94/9.92) [16.85/4.04]
|   feature1 = classC
|   |   feature7 < 0.28 : classB (26.18/0.57) [38.92/38.92]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.88
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   feature7 < 0.33 : classD (19.97/0.21) [0.54/0.53]
|   |   |   |   |   |   feature7 >= 0.33
|   |   |   |   |   |   |   feature7 < 0.38 : classE (2.16/0.02) [0.05/0.05]
|   |   |   |   |   |   |   feature7 >= 0.38 : classE (2.59/0.45) [0.63/0.06]
|   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classC (2.17/0.75) [1.94/1.09]
|   |   |   |   |   |   feature3 = classD : classD (42.15/0.29) [21.15/19.09]
|   |   |   |   |   |   feature3 = classE : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classA (0.05/0.02) [0.06/0.03]
|   |   |   |   feature7 >= 0.65 : classD (24.96/6.75) [9.21/1.68]
|   |   |   feature7 >= 0.88 : classC (6.41/0.06) [4.08/0.14]
|   feature1 = classD : classD (1547.64/700.69) [782.01/103.32]
|   feature1 = classE
|   |   feature7 < 0.65
|   |   |   feature5 = classA
|   |   |   |   feature7 < 0.48 : classD (21.59/7.19) [11.74/6.94]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature10 < 0.4 : classE (3.31/0.03) [2.53/0.08]
|   |   |   |   |   feature10 >= 0.4 : classD (115.89/1.36) [2.84/2.84]
|   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   feature5 = classC : classC (0.07/0.02) [0.02/0.02]
|   |   |   feature5 = classD
|   |   |   |   feature7 < 0.62 : classD (33.32/2.94) [237.48/116.91]
|   |   |   |   feature7 >= 0.62 : classE (2.6/0.91) [0.7/0.08]
|   |   |   feature5 = classE
|   |   |   |   feature9 < 0.57 : classD (197.92/21.02) [64.19/21.64]
|   |   |   |   feature9 >= 0.57
|   |   |   |   |   feature7 < 0.48 : classD (8.94/3.17) [2.83/1.78]
|   |   |   |   |   feature7 >= 0.48 : classE (13.57/2.54) [10.67/3.47]
|   |   |   feature5 = classF : classF (22.17/4.49) [11.69/4.72]
|   |   |   feature5 = classG : classD (18.81/4.08) [2.24/1.6]
|   |   feature7 >= 0.65
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.68 : classE (16.08/0.72) [2.07/0.36]
|   |   |   |   feature7 >= 0.68
|   |   |   |   |   feature10 < 0.45 : classA (17.84/3.53) [19.77/5.46]
|   |   |   |   |   feature10 >= 0.45 : classE (6.08/5.51) [18.39/5.02]
|   |   |   feature7 >= 0.72
|   |   |   |   feature5 = classA : classE (0.6/0.32) [0.61/0.33]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.01/0) [0/0]
|   |   |   |   feature5 = classD : classE (15.24/1.87) [0.36/0.35]
|   |   |   |   feature5 = classE : classE (24.24/0.17) [8.48/0.51]
|   |   |   |   feature5 = classF : classF (0.57/0) [0.01/0]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   feature1 = classF
|   |   feature5 = classA
|   |   |   feature7 < 0.28 : classG (4.35/0.06) [0.12/0.12]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.35 : classD (26.5/0.89) [1.26/1.26]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature7 < 0.55 : classF (5.03/3.06) [1.95/0.51]
|   |   |   |   |   feature7 >= 0.55 : classA (2.32/0.16) [1.25/1.23]
|   |   feature5 = classB : classA (0/0) [0/0]
|   |   feature5 = classC : classC (0.8/0.19) [0.93/0.07]
|   |   feature5 = classD : classA (75.86/31.67) [24.16/10.32]
|   |   feature5 = classE : classA (207.02/76.73) [29.05/13.41]
|   |   feature5 = classF : classF (17.74/3.45) [20.67/13.27]
|   |   feature5 = classG : classG (1.85/0.21) [0.99/0.13]
|   feature1 = classG
|   |   feature10 < 0.38 : classG (19.11/2.34) [4.29/3.41]
|   |   feature10 >= 0.38 : classD (59.11/15.4) [40.88/16.44]
feature4 = classE
|   feature1 = classA
|   |   feature7 < 0.72
|   |   |   feature5 = classA : classA (0.57/0.09) [0.52/0.35]
|   |   |   feature5 = classB : classB (16.08/3.05) [22.67/9.87]
|   |   |   feature5 = classC : classA (6.51/1.08) [4/3.95]
|   |   |   feature5 = classD
|   |   |   |   feature7 < 0.37
|   |   |   |   |   feature7 < 0.32 : classD (12.92/0.09) [12.61/0.27]
|   |   |   |   |   feature7 >= 0.32 : classD (2.69/0.15) [0.12/0.12]
|   |   |   |   feature7 >= 0.37 : classA (7.07/3.58) [6.86/1.11]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.28 : classD (12.89/12.89) [89.78/0.27]
|   |   |   |   feature7 >= 0.28 : classE (156.17/39.22) [78.77/24.73]
|   |   |   feature5 = classF : classA (1.07/0.17) [0.94/0.65]
|   |   |   feature5 = classG : classA (0.36/0.06) [0.22/0.22]
|   |   feature7 >= 0.72
|   |   |   feature8 < 0.9 : classA (115.77/0.82) [42.82/2.42]
|   |   |   feature8 >= 0.9
|   |   |   |   feature8 < 0.94 : classE (13/0.2) [13.18/0.37]
|   |   |   |   feature8 >= 0.94 : classA (2.68/0.05) [0.08/0.06]
|   feature1 = classB
|   |   feature7 < 0.38 : classE (5.12/0.04) [130.56/13.48]
|   |   feature7 >= 0.38
|   |   |   feature7 < 0.53 : classA (3.08/0.02) [0.07/0.06]
|   |   |   feature7 >= 0.53
|   |   |   |   feature7 < 0.98
|   |   |   |   |   feature2 = classA : classA (0.02/0.01) [0.02/0.01]
|   |   |   |   |   feature2 = classB : classB (4.7/0.03) [1.33/0.1]
|   |   |   |   |   feature2 = classC : classB (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classB (0.01/0) [0/0]
|   |   |   |   |   feature2 = classE : classB (9.15/0.06) [2.59/0.19]
|   |   |   |   |   feature2 = classF : classB (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classB (0/0) [0/0]
|   |   |   |   feature7 >= 0.98 : classB (7.98/3.12) [2/0.17]
|   feature1 = classC
|   |   feature7 < 0.58 : classE (184.63/44.82) [95.54/64.36]
|   |   feature7 >= 0.58
|   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   feature3 = classB : classC (0/0) [0/0]
|   |   |   feature3 = classC : classC (9.69/3.32) [3.13/1.29]
|   |   |   feature3 = classD : classD (4.95/1.85) [0.7/0.14]
|   |   |   feature3 = classE : classE (0.56/0.27) [0.08/0.08]
|   |   |   feature3 = classF
|   |   |   |   feature7 < 0.7 : classD (3.64/2.29) [1.71/0.36]
|   |   |   |   feature7 >= 0.7 : classC (8.45/2.77) [2.81/0.18]
|   |   |   feature3 = classG : classA (0.04/0.02) [0.03/0.01]
|   feature1 = classD
|   |   feature10 < 0.65
|   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   feature3 = classC : classC (0.07/0.02) [0.02/0.01]
|   |   |   feature3 = classD
|   |   |   |   feature7 < 0.32 : classD (115.38/0.8) [2.43/2.41]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   feature10 < 0.5 : classD (5.63/0.5) [0.97/0.12]
|   |   |   |   |   |   |   feature10 >= 0.5
|   |   |   |   |   |   |   |   feature10 < 0.58 : classE (12.74/0.09) [11.87/0.27]
|   |   |   |   |   |   |   |   feature10 >= 0.58 : classD (3.1/0.28) [2.61/0.06]
|   |   |   |   |   |   feature7 >= 0.45 : classG (18.67/10.8) [5.26/5.26]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature5 = classA : classD (5.46/0.34) [0.17/0.11]
|   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classD (9.3/0.58) [6.65/0.19]
|   |   |   |   |   |   feature5 = classE : classD (5.66/1.05) [1.15/0.25]
|   |   |   |   |   |   feature5 = classF : classD (11.2/0.96) [3.01/0.36]
|   |   |   |   |   |   feature5 = classG : classG (0.14/0) [0.13/0]
|   |   |   feature3 = classE
|   |   |   |   feature10 < 0.45
|   |   |   |   |   feature11 < 0.73
|   |   |   |   |   |   feature7 < 0.45 : classD (15.19/0.41) [0.32/0.32]
|   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   feature7 < 0.48 : classD (4.11/2.15) [0.39/0.39]
|   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   feature5 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classD : classD (2.79/0.08) [5.45/0.06]
|   |   |   |   |   |   |   |   feature5 = classE : classD (9.97/0.3) [13.1/0.21]
|   |   |   |   |   |   |   |   feature5 = classF : classF (0.23/0.01) [0.12/0]
|   |   |   |   |   |   |   |   feature5 = classG : classG (0.11/0) [0.11/0]
|   |   |   |   |   feature11 >= 0.73 : classE (7.17/2.01) [4.82/0.29]
|   |   |   |   feature10 >= 0.45
|   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classD : classE (6.13/0.5) [0.74/0.24]
|   |   |   |   |   feature6 = classE : classE (132.68/10.96) [43.94/17.99]
|   |   |   |   |   feature6 = classF
|   |   |   |   |   |   feature7 < 0.53 : classE (2.53/1.17) [1.59/0.32]
|   |   |   |   |   |   feature7 >= 0.53 : classD (12.9/0.09) [0.29/0.27]
|   |   |   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   |   feature3 = classF
|   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (0.45/0.04) [0.21/0.01]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature7 < 0.53 : classE (4.25/2.1) [2.24/0.25]
|   |   |   |   |   feature7 >= 0.53 : classD (12.91/0.09) [13.1/0.27]
|   |   |   |   feature2 = classF : classF (14.16/0.88) [0.47/0.02]
|   |   |   |   feature2 = classG : classG (0.02/0) [0.02/0]
|   |   |   feature3 = classG : classA (0.4/0.08) [0.36/0.04]
|   |   feature10 >= 0.65
|   |   |   feature10 < 0.68
|   |   |   |   feature7 < 0.35 : classG (116.77/2.23) [117.08/2.54]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classF (15.34/5.24) [1.29/0.02]
|   |   |   |   |   feature3 = classD : classD (1.52/0.76) [0.83/0.41]
|   |   |   |   |   feature3 = classE : classE (4.03/2.04) [1.48/0.34]
|   |   |   |   |   feature3 = classF : classF (0/0) [0/0]
|   |   |   |   |   feature3 = classG : classA (0.03/0.02) [0.02/0]
|   |   |   feature10 >= 0.68
|   |   |   |   feature7 < 0.32
|   |   |   |   |   feature10 < 0.75 : classA (25.81/0.19) [0.56/0.54]
|   |   |   |   |   feature10 >= 0.75
|   |   |   |   |   |   feature10 < 0.9
|   |   |   |   |   |   |   feature2 = classA : classA (0.01/0) [0.01/0]
|   |   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (2.56/0.02) [0.05/0.05]
|   |   |   |   |   |   |   feature2 = classE : classE (10.24/0.07) [0.21/0.21]
|   |   |   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.9 : classA (12.91/0.09) [0.28/0.27]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classC (0.01/0) [0/0]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature7 < 0.45 : classD (13.41/0.6) [0.28/0.28]
|   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   feature7 < 0.48 : classG (2.71/0.99) [0.44/0.44]
|   |   |   |   |   |   |   feature7 >= 0.48 : classE (3.79/1.25) [4.43/1.89]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.45 : classE (9.56/0.07) [4.45/0.2]
|   |   |   |   |   |   |   feature7 >= 0.45 : classE (7.85/4.46) [1.28/0.72]
|   |   |   |   |   |   feature7 >= 0.52 : classE (11.04/0.28) [3.94/0.24]
|   |   |   |   |   feature3 = classF : classE (0/0) [0.28/0]
|   |   |   |   |   feature3 = classG : classA (0.05/0.01) [0.04/0]
|   feature1 = classE
|   |   feature10 < 0.92
|   |   |   feature9 < 0.68
|   |   |   |   feature11 < 0.48
|   |   |   |   |   feature3 = classA : classG (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classF (1.41/0.26) [0.42/0.11]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature2 = classA : classA (0.01/0.01) [0.16/0.03]
|   |   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (0.18/0.02) [0.62/0.03]
|   |   |   |   |   |   feature2 = classE : classD (3.29/1.02) [0.98/0.69]
|   |   |   |   |   |   feature2 = classF : classE (0.05/0) [0.03/0]
|   |   |   |   |   |   feature2 = classG : classG (13.27/0.54) [3.22/0.68]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature5 = classA : classE (0.78/0.04) [2.72/0.04]
|   |   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classE (0.47/0.02) [0.03/0.03]
|   |   |   |   |   |   feature5 = classD : classD (3.42/0.16) [0.31/0.22]
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   |   feature8 < 0.4 : classG (3.14/0.55) [3.05/0.51]
|   |   |   |   |   |   |   |   |   feature8 >= 0.4 : classD (2.06/1.09) [1.25/0.78]
|   |   |   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   |   |   feature7 < 0.75 : classG (14.63/1.82) [5.06/5.06]
|   |   |   |   |   |   |   |   |   feature7 >= 0.75 : classG (26.04/0.44) [0.7/0.7]
|   |   |   |   |   |   |   feature8 >= 0.74
|   |   |   |   |   |   |   |   feature10 < 0.48 : classD (4.15/0.18) [0.25/0.24]
|   |   |   |   |   |   |   |   feature10 >= 0.48 : classE (2.66/0.51) [2.08/0.13]
|   |   |   |   |   |   feature5 = classF : classE (0.01/0) [0/0]
|   |   |   |   |   |   feature5 = classG : classE (0.62/0.03) [0.06/0.04]
|   |   |   |   |   feature3 = classF : classE (24.62/4.52) [8.86/2.42]
|   |   |   |   |   feature3 = classG : classE (3.15/0.47) [2.84/0.24]
|   |   |   |   feature11 >= 0.48
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature6 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature6 = classD
|   |   |   |   |   |   |   feature7 < 0.35 : classE (16.12/0.88) [0.51/0.34]
|   |   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   |   feature11 < 0.82
|   |   |   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   |   |   feature8 < 0.38 : classE (3.68/0.08) [0.08/0.08]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.38
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.38 : classD (122.33/0.85) [5.3/2.76]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.54 : classD (7.09/0.14) [3.79/0.2]
|   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.78 : classE (2.09/0.76) [0.96/0.04]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.78 : classD (3.68/0.03) [0.24/0.24]
|   |   |   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   |   |   feature7 < 0.48 : classA (10.01/10.01) [8.07/1.77]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.68 : classD (20.08/7.86) [15.31/8.18]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (10.74/4.43) [7.72/1.42]
|   |   |   |   |   |   |   |   feature11 >= 0.82
|   |   |   |   |   |   |   |   |   feature2 = classA : classA (0/0) [0.34/0]
|   |   |   |   |   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classD : classA (14.4/1.1) [1.52/0.51]
|   |   |   |   |   |   |   |   |   feature2 = classE : classD (2.64/1.16) [4/0.69]
|   |   |   |   |   |   |   |   |   feature2 = classF : classE (0.15/0.01) [0.08/0.01]
|   |   |   |   |   |   |   |   |   feature2 = classG : classE (0.01/0) [0/0]
|   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   feature10 < 0.58 : classE (34.09/4.24) [11.5/7.83]
|   |   |   |   |   |   |   feature10 >= 0.58
|   |   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   |   feature9 < 0.65
|   |   |   |   |   |   |   |   |   |   feature5 = classA : classE (0.64/0.06) [0.04/0.04]
|   |   |   |   |   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classC : classE (2.13/0.21) [0.15/0.14]
|   |   |   |   |   |   |   |   |   |   feature5 = classD : classE (2.84/0.28) [5.28/0.19]
|   |   |   |   |   |   |   |   |   |   feature5 = classE : classD (52.12/7.08) [6.61/4.09]
|   |   |   |   |   |   |   |   |   |   feature5 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature9 >= 0.65 : classE (8.2/1.41) [1.85/0.87]
|   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   feature7 < 0.68 : classE (10.04/0.07) [5.99/0.21]
|   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (7.64/4.93) [4.25/1.54]
|   |   |   |   |   |   feature6 = classF : classF (10.19/2.5) [6.97/1.68]
|   |   |   |   |   |   feature6 = classG
|   |   |   |   |   |   |   feature7 < 0.52 : classD (2.87/1.46) [1.36/0.89]
|   |   |   |   |   |   |   feature7 >= 0.52 : classE (15.39/1.1) [2.31/1.94]
|   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   feature8 < 0.5
|   |   |   |   |   |   |   feature7 < 0.83 : classG (14.21/1.4) [28.67/15.86]
|   |   |   |   |   |   |   feature7 >= 0.83 : classE (4.23/0.03) [2.41/0.09]
|   |   |   |   |   |   feature8 >= 0.5
|   |   |   |   |   |   |   feature8 < 0.9
|   |   |   |   |   |   |   |   feature11 < 0.65 : classD (444.55/17.65) [26.66/13.86]
|   |   |   |   |   |   |   |   feature11 >= 0.65
|   |   |   |   |   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   |   |   |   |   feature8 < 0.78
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.72 : classD (13.32/0.16) [13.08/0.28]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.72 : classE (2.56/0.02) [0.05/0.05]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.78 : classD (18.26/0.13) [0.38/0.38]
|   |   |   |   |   |   |   |   |   feature10 >= 0.55 : classE (9.66/2.89) [4.98/0.2]
|   |   |   |   |   |   |   feature8 >= 0.9 : classE (5.64/0.04) [6.66/2.66]
|   |   |   feature9 >= 0.68
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC : classA (22.45/4.23) [15.01/1.4]
|   |   |   |   feature3 = classD
|   |   |   |   |   feature8 < 0.46
|   |   |   |   |   |   feature9 < 0.78 : classE (27.84/1.21) [15.14/2.02]
|   |   |   |   |   |   feature9 >= 0.78 : classD (6.14/0.44) [3.34/0.48]
|   |   |   |   |   feature8 >= 0.46 : classD (53.5/4.49) [26.89/3.96]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   |   |   |   feature10 < 0.58 : classE (3.71/0.21) [2.31/0.08]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.58 : classD (4.52/0.09) [6.91/2.65]
|   |   |   |   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   |   |   |   feature7 < 0.33 : classE (5.42/0.34) [0.11/0.11]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.33 : classE (19.21/1.04) [3.29/0.4]
|   |   |   |   |   |   |   |   feature8 >= 0.74
|   |   |   |   |   |   |   |   |   feature8 < 0.9 : classA (28.22/2.62) [15.58/2.78]
|   |   |   |   |   |   |   |   |   feature8 >= 0.9 : classE (7.49/0.42) [0.19/0.16]
|   |   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   |   |   |   feature7 < 0.45 : classE (19.52/6.1) [6.63/0.41]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.45 : classE (20.29/8.47) [15.16/9.59]
|   |   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   |   feature10 < 0.62 : classE (25.02/0.17) [11/4.79]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.68 : classD (21.21/3.29) [2.11/1.26]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.68 : classE (15.99/0.11) [7.76/0.33]
|   |   |   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   |   |   feature7 < 0.68 : classE (91.76/0.64) [57.08/6.19]
|   |   |   |   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   |   |   |   feature10 < 0.72 : classE (15.92/3.99) [10.27/4.21]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.72
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.7 : classE (2.27/0.57) [0.89/0.6]
|   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.7 : classD (5.69/1.43) [1.51/1.51]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.74 : classE (6.82/1.71) [3.42/1.81]
|   |   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   |   |   feature10 < 0.45 : classE (2/0.01) [0.89/0.04]
|   |   |   |   |   |   |   |   feature10 >= 0.45
|   |   |   |   |   |   |   |   |   feature9 < 0.78
|   |   |   |   |   |   |   |   |   |   feature8 < 0.62 : classD (13.5/0.7) [1.07/1.07]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.62 : classD (34.3/0.24) [0.73/0.73]
|   |   |   |   |   |   |   |   |   feature9 >= 0.78 : classD (9.34/2.68) [1.2/1.2]
|   |   |   |   |   |   |   feature10 >= 0.55 : classE (17.64/0.12) [7.67/0.37]
|   |   |   |   |   feature7 >= 0.75 : classE (190.05/1.33) [89.94/3.98]
|   |   |   |   feature3 = classF : classF (32.92/6.12) [16.15/2.46]
|   |   |   |   feature3 = classG : classA (1.62/0.29) [1.46/0.1]
|   |   feature10 >= 0.92
|   |   |   feature7 < 0.62
|   |   |   |   feature11 < 0.82 : classA (120.44/5.9) [8.13/5.88]
|   |   |   |   feature11 >= 0.82
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature11 < 0.98 : classE (5.97/1.05) [2.97/0.9]
|   |   |   |   |   |   feature11 >= 0.98 : classA (16.91/4.07) [3.11/1.11]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature8 < 0.86 : classB (115.81/1.27) [2.89/2.89]
|   |   |   |   |   |   feature8 >= 0.86 : classE (3.96/0.08) [0.38/0.09]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature7 < 0.68 : classE (5.16/0.04) [1.82/0.11]
|   |   |   |   |   feature7 >= 0.68 : classA (6.96/2.04) [6.2/1.28]
|   |   |   |   feature7 >= 0.72 : classE (92.51/0.74) [46.63/2.02]
|   feature1 = classF
|   |   feature7 < 0.28 : classG (57.74/3.01) [3.8/3.8]
|   |   feature7 >= 0.28
|   |   |   feature10 < 0.72
|   |   |   |   feature2 = classA : classE (0.88/0.31) [0.82/0.25]
|   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   feature2 = classC : classA (15.19/1.15) [0.77/0.66]
|   |   |   |   feature2 = classD : classD (14.59/1.72) [1.04/0.63]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   feature7 < 0.48 : classE (23.89/1.02) [16.29/3.58]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   |   feature7 < 0.52 : classF (2.42/0.57) [0.59/0.39]
|   |   |   |   |   |   |   |   |   feature7 >= 0.52 : classE (3.24/0.69) [5.82/0.74]
|   |   |   |   |   |   |   |   feature7 >= 0.55 : classF (8.61/3.47) [2.72/0]
|   |   |   |   |   |   |   feature7 >= 0.58 : classE (13.98/0.33) [0.65/0.37]
|   |   |   |   |   feature10 >= 0.58
|   |   |   |   |   |   feature9 < 0.68 : classD (52.86/14.45) [3.24/2.85]
|   |   |   |   |   |   feature9 >= 0.68
|   |   |   |   |   |   |   feature8 < 0.74 : classA (29.01/1.05) [1.75/1.54]
|   |   |   |   |   |   |   feature8 >= 0.74
|   |   |   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classD : classD (5.7/0.61) [0.29/0.25]
|   |   |   |   |   |   |   |   feature3 = classE : classE (14.24/1.53) [3.26/0.72]
|   |   |   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   feature2 = classF
|   |   |   |   |   feature6 = classA : classF (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classF (0/0) [0/0]
|   |   |   |   |   feature6 = classD : classF (0/0) [0/0]
|   |   |   |   |   feature6 = classE : classE (18.65/3.29) [1.9/1.24]
|   |   |   |   |   feature6 = classF
|   |   |   |   |   |   feature8 < 0.42 : classE (6.39/0.75) [2.2/0.32]
|   |   |   |   |   |   feature8 >= 0.42 : classF (46.52/4.13) [20.72/1.25]
|   |   |   |   |   feature6 = classG : classF (0/0) [0/0]
|   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   feature10 >= 0.72 : classE (155.12/17.15) [14.49/8.84]
|   feature1 = classG
|   |   feature6 = classA : classE (0/0) [0/0]
|   |   feature6 = classB : classE (0/0) [0/0]
|   |   feature6 = classC
|   |   |   feature10 < 0.58
|   |   |   |   feature10 < 0.33 : classG (3.13/0.14) [0.27/0.24]
|   |   |   |   feature10 >= 0.33
|   |   |   |   |   feature7 < 0.48 : classA (37.42/0.87) [0.93/0.93]
|   |   |   |   |   feature7 >= 0.48 : classF (2.86/1.36) [2.74/0.46]
|   |   |   feature10 >= 0.58 : classE (3.94/0.29) [0.34/0.34]
|   |   feature6 = classD : classD (23.7/10.87) [3.29/2.72]
|   |   feature6 = classE : classE (90.14/48.64) [43.86/9.59]
|   |   feature6 = classF : classE (0/0) [0/0]
|   |   feature6 = classG : classG (4.96/1.88) [1.72/0.51]
feature4 = classF
|   feature2 = classA
|   |   feature1 = classA : classA (6.38/0.67) [6.23/0.26]
|   |   feature1 = classB : classB (0.18/0.07) [0.06/0.01]
|   |   feature1 = classC : classE (0.77/0.42) [0.99/0.71]
|   |   feature1 = classD : classF (1.84/1.09) [0.46/0.07]
|   |   feature1 = classE : classF (4.49/1.87) [3.53/2.29]
|   |   feature1 = classF
|   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   feature3 = classC : classA (0.02/0) [0.02/0.01]
|   |   |   feature3 = classD : classF (0/0) [0/0]
|   |   |   feature3 = classE : classF (6.2/0.38) [4.02/0.02]
|   |   |   feature3 = classF : classF (16.97/1.05) [11.99/0.06]
|   |   |   feature3 = classG : classA (1.01/0.17) [1.07/0.24]
|   |   feature1 = classG : classF (1.54/0.62) [1.9/0.92]
|   feature2 = classB : classB (1.08/0.19) [0.67/0.1]
|   feature2 = classC
|   |   feature1 = classA : classA (0.72/0.37) [0.12/0.09]
|   |   feature1 = classB : classC (0.97/0.1) [0.35/0.06]
|   |   feature1 = classC : classC (2.14/0.42) [1.42/0.42]
|   |   feature1 = classD : classF (0.69/0.27) [0.23/0.01]
|   |   feature1 = classE : classF (16.77/3.19) [1.16/0.64]
|   |   feature1 = classF : classA (0.95/0.76) [12.93/0.1]
|   |   feature1 = classG : classG (0.2/0.04) [0.07/0.06]
|   feature2 = classD
|   |   feature1 = classA
|   |   |   feature7 < 0.55 : classD (13.05/0.23) [0.47/0.33]
|   |   |   feature7 >= 0.55 : classA (6.28/2.81) [0.65/0.54]
|   |   feature1 = classB : classB (0.76/0.28) [0.26/0.02]
|   |   feature1 = classC : classE (3.29/1.73) [4.24/3.02]
|   |   feature1 = classD
|   |   |   feature10 < 0.6
|   |   |   |   feature7 < 0.42 : classF (2.77/0.19) [1.91/0.57]
|   |   |   |   feature7 >= 0.42 : classD (4.61/1.5) [3.3/0.28]
|   |   |   feature10 >= 0.6 : classE (3.49/0.86) [1.1/1.1]
|   |   feature1 = classE
|   |   |   feature7 < 0.48 : classD (7.69/2.19) [1.56/1.43]
|   |   |   feature7 >= 0.48 : classF (6.44/1.27) [3.17/1.75]
|   |   feature1 = classF
|   |   |   feature7 < 0.52 : classD (118.4/3.68) [2.92/2.72]
|   |   |   feature7 >= 0.52 : classG (5.28/2.59) [0.76/0.62]
|   |   feature1 = classG : classG (1.52/0.28) [0.52/0.44]
|   feature2 = classE
|   |   feature1 = classA
|   |   |   feature10 < 0.32 : classA (21.95/1.42) [3.56/0.92]
|   |   |   feature10 >= 0.32
|   |   |   |   feature10 < 0.4 : classD (4.76/2.85) [2.11/0.2]
|   |   |   |   feature10 >= 0.4 : classA (11.59/0.75) [4.3/0.49]
|   |   feature1 = classB : classG (28.33/2.72) [15.16/2.35]
|   |   feature1 = classC : classE (5.16/2.83) [6.6/4.78]
|   |   feature1 = classD
|   |   |   feature10 < 0.4
|   |   |   |   feature7 < 0.45 : classD (6.47/0.29) [0.95/0.14]
|   |   |   |   feature7 >= 0.45 : classD (3.81/1.98) [1.21/0.32]
|   |   |   feature10 >= 0.4 : classF (6.74/2.46) [2.5/0.29]
|   |   feature1 = classE
|   |   |   feature10 < 0.65 : classE (22.21/9.67) [36.95/4.56]
|   |   |   feature10 >= 0.65 : classF (17.71/2.3) [11.66/1.75]
|   |   feature1 = classF
|   |   |   feature7 < 0.58
|   |   |   |   feature11 < 0.98 : classD (4.57/3.14) [2.3/0.83]
|   |   |   |   feature11 >= 0.98 : classA (18.66/4.08) [1.24/1.07]
|   |   |   feature7 >= 0.58
|   |   |   |   feature11 < 0.6 : classD (2.72/0.36) [2.47/0.11]
|   |   |   |   feature11 >= 0.6
|   |   |   |   |   feature10 < 0.52 : classE (26.26/0.37) [26.26/0.65]
|   |   |   |   |   feature10 >= 0.52 : classE (18.94/6.14) [14.24/1.43]
|   |   feature1 = classG
|   |   |   feature7 < 0.38
|   |   |   |   feature10 < 0.45 : classD (2.42/0.4) [2.08/0.05]
|   |   |   |   feature10 >= 0.45 : classE (38.68/0.27) [1.09/0.81]
|   |   |   feature7 >= 0.38
|   |   |   |   feature8 < 0.6 : classA (4.19/1.65) [3.99/1.45]
|   |   |   |   feature8 >= 0.6 : classF (14.36/1.14) [16.21/2.64]
|   feature2 = classF
|   |   feature1 = classA
|   |   |   feature5 = classA : classA (0/0) [0/0]
|   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   feature5 = classC : classA (0/0) [0.28/0]
|   |   |   feature5 = classD : classA (11.99/1.68) [0.69/0.56]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.4 : classE (25.88/0.27) [0.82/0.82]
|   |   |   |   feature7 >= 0.4 : classA (10.32/4.89) [1.25/0.92]
|   |   |   feature5 = classF
|   |   |   |   feature10 < 0.53 : classA (35.88/7.32) [6.01/1.69]
|   |   |   |   feature10 >= 0.53 : classF (37.35/19.85) [13.19/2.79]
|   |   |   feature5 = classG : classA (3/0.42) [0.17/0.14]
|   |   feature1 = classB : classB (4.55/1.65) [1.54/0.1]
|   |   feature1 = classC
|   |   |   feature7 < 0.33 : classA (7.34/7.34) [14.7/7.44]
|   |   |   feature7 >= 0.33
|   |   |   |   feature7 < 0.58 : classE (9.52/0.23) [9.79/2.53]
|   |   |   |   feature7 >= 0.58 : classF (5.08/3.34) [1.52/0.85]
|   |   feature1 = classD
|   |   |   feature10 < 0.75 : classF (48.19/17.24) [14.25/0.01]
|   |   |   feature10 >= 0.75 : classA (126.87/12.34) [118.39/3.86]
|   |   feature1 = classE
|   |   |   feature7 < 0.62
|   |   |   |   feature10 < 0.45 : classE (9.21/4.01) [1.62/1.27]
|   |   |   |   feature10 >= 0.45
|   |   |   |   |   feature7 < 0.48 : classF (22.98/9.23) [11.44/7.26]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature10 < 0.55 : classD (2.87/0.33) [2.61/0.07]
|   |   |   |   |   |   feature10 >= 0.55 : classF (33.73/0.26) [11.06/0.13]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.8
|   |   |   |   |   feature5 = classA : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classA (32.05/0.22) [9.52/3.3]
|   |   |   |   |   feature5 = classD : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classF : classF (5.33/1.04) [3.29/1.47]
|   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.8 : classE (12.89/0.09) [13.07/0.27]
|   |   feature1 = classF
|   |   |   feature7 < 0.42
|   |   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   feature3 = classC : classF (0/0) [0/0]
|   |   |   |   feature3 = classD : classA (17.61/4.36) [0.69/0.46]
|   |   |   |   feature3 = classE : classE (17.61/4.81) [0.69/0.69]
|   |   |   |   feature3 = classF : classF (27.71/12.18) [6.48/0.36]
|   |   |   |   feature3 = classG : classF (0/0) [0/0]
|   |   |   feature7 >= 0.42
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classE (3.12/0.58) [3.03/0.48]
|   |   |   |   |   |   feature3 = classE : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classF : classF (110.2/7.8) [164.24/116.1]
|   |   |   |   |   |   feature3 = classG : classF (0.7/0.05) [0.33/0.01]
|   |   |   |   |   feature7 >= 0.62 : classF (48.25/15.34) [26.66/0]
|   |   |   |   feature7 >= 0.65 : classF (330.44/0) [183.14/0]
|   |   feature1 = classG
|   |   |   feature10 < 0.65
|   |   |   |   feature7 < 0.53
|   |   |   |   |   feature8 < 0.78 : classA (7.44/2.36) [3.81/1.27]
|   |   |   |   |   feature8 >= 0.78 : classF (3.74/0.61) [2.77/0.03]
|   |   |   |   feature7 >= 0.53
|   |   |   |   |   feature7 < 0.62 : classG (4.63/0.03) [0.11/0.1]
|   |   |   |   |   feature7 >= 0.62 : classF (3.17/0.3) [0.78/0.15]
|   |   |   feature10 >= 0.65 : classF (20.42/0.69) [10.75/0.25]
|   feature2 = classG : classG (200.01/39.81) [41.3/18.53]
feature4 = classG
|   feature6 = classA : classA (2.2/1.27) [1.93/0.6]
|   feature6 = classB : classA (5.74/2.15) [14.99/0.83]
|   feature6 = classC : classF (4.94/3.07) [2.62/1.89]
|   feature6 = classD
|   |   feature1 = classA
|   |   |   feature7 < 0.65
|   |   |   |   feature2 = classA : classD (3.07/0.21) [0.27/0.23]
|   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   feature2 = classD : classA (1.08/0.15) [0.1/0.08]
|   |   |   |   feature2 = classE : classA (1.03/0.13) [0.66/0.07]
|   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   feature2 = classG : classD (30.96/2.1) [6.1/5.77]
|   |   |   feature7 >= 0.65
|   |   |   |   feature7 < 0.68 : classG (13.76/0.13) [3.73/0.32]
|   |   |   |   feature7 >= 0.68
|   |   |   |   |   feature7 < 0.72 : classE (3.81/0.33) [0.09/0.09]
|   |   |   |   |   feature7 >= 0.72 : classA (2.21/0.02) [1.29/0.05]
|   |   feature1 = classB : classB (2.34/0.95) [0.74/0.05]
|   |   feature1 = classC : classD (5.73/1.86) [11.37/10.6]
|   |   feature1 = classD
|   |   |   feature7 < 0.53
|   |   |   |   feature10 < 0.5
|   |   |   |   |   feature5 = classA : classE (4.96/1.38) [0.27/0.27]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classD (2.49/0.78) [12.94/0.14]
|   |   |   |   |   feature5 = classE : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classF : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   |   feature10 >= 0.5 : classG (15.34/1.95) [30.22/1.13]
|   |   |   feature7 >= 0.53
|   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (8.86/0.06) [2.27/0.19]
|   |   |   |   feature2 = classE : classG (2.15/0.12) [0.72/0.05]
|   |   |   |   feature2 = classF : classF (0.32/0.02) [0.08/0]
|   |   |   |   feature2 = classG : classD (2.86/0.17) [0.06/0.06]
|   |   feature1 = classE
|   |   |   feature10 < 0.55 : classD (12.28/3.32) [5.28/2.61]
|   |   |   feature10 >= 0.55
|   |   |   |   feature7 < 0.68 : classG (22.56/3.75) [10.12/3.31]
|   |   |   |   feature7 >= 0.68 : classA (2.64/0.3) [2.97/0.63]
|   |   feature1 = classF
|   |   |   feature7 < 0.3 : classG (7.01/0.05) [0.15/0.15]
|   |   |   feature7 >= 0.3
|   |   |   |   feature10 < 0.52 : classF (5.52/1.26) [1.21/0.32]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature2 = classA : classF (4.01/1.83) [1.98/1.14]
|   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (0.02/0.01) [114.54/0.01]
|   |   |   |   |   feature2 = classE : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classF
|   |   |   |   |   |   feature7 < 0.77 : classG (2.11/1.08) [1.31/0.28]
|   |   |   |   |   |   feature7 >= 0.77 : classF (2.04/0) [1.4/0]
|   |   |   |   |   feature2 = classG : classG (6.73/1.65) [5.6/0.52]
|   |   feature1 = classG
|   |   |   feature7 < 0.78
|   |   |   |   feature2 = classA : classA (2.15/0.12) [31.23/0.06]
|   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (34.97/14.46) [11.24/1.02]
|   |   |   |   feature2 = classE : classG (0.23/0) [3.72/0.01]
|   |   |   |   feature2 = classF : classD (13.09/0.28) [0.38/0.38]
|   |   |   |   feature2 = classG
|   |   |   |   |   feature10 < 0.72
|   |   |   |   |   |   feature10 < 0.62 : classG (3.63/0.03) [1.31/0.09]
|   |   |   |   |   |   feature10 >= 0.62 : classD (233.53/4.47) [7.39/7.39]
|   |   |   |   |   feature10 >= 0.72 : classG (6.89/1.42) [3.91/1.52]
|   |   |   feature7 >= 0.78 : classG (38.2/4.51) [16.17/1.24]
|   feature6 = classE
|   |   feature2 = classA : classA (53.45/30.87) [47.91/9.44]
|   |   feature2 = classB : classD (0/0) [0/0]
|   |   feature2 = classC : classC (0.01/0) [0.01/0]
|   |   feature2 = classD : classG (19.23/4.04) [4.48/3.95]
|   |   feature2 = classE
|   |   |   feature8 < 0.56
|   |   |   |   feature1 = classA : classA (2.2/1.45) [1.58/0.38]
|   |   |   |   feature1 = classB : classB (0.15/0.05) [0.05/0]
|   |   |   |   feature1 = classC : classD (0.38/0.12) [0.76/0.71]
|   |   |   |   feature1 = classD
|   |   |   |   |   feature10 < 0.33 : classE (2.5/0.25) [0.08/0.08]
|   |   |   |   |   feature10 >= 0.33 : classG (2.05/0.14) [0.51/0.07]
|   |   |   |   feature1 = classE : classG (23.87/0.73) [1.52/1.29]
|   |   |   |   feature1 = classF : classG (1.33/0.61) [0.41/0.15]
|   |   |   |   feature1 = classG : classG (1.06/0.06) [2.65/0.1]
|   |   |   feature8 >= 0.56 : classE (21.99/4.18) [4.72/1.99]
|   |   feature2 = classF : classA (10.02/4.73) [2.89/2.66]
|   |   feature2 = classG
|   |   |   feature1 = classA : classG (11.33/6.23) [4.68/0.75]
|   |   |   feature1 = classB : classB (0.91/0.4) [0.28/0.02]
|   |   |   feature1 = classC : classD (2.14/0.69) [4.25/3.96]
|   |   |   feature1 = classD : classG (5.76/1.32) [2.69/0.42]
|   |   |   feature1 = classE : classG (9.47/3.19) [29.78/16.12]
|   |   |   feature1 = classF
|   |   |   |   feature7 < 0.32 : classG (5.18/2.58) [0.11/0.11]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature10 < 0.52 : classF (2.1/0.5) [0.46/0.12]
|   |   |   |   |   feature10 >= 0.52 : classG (5.22/1.34) [4.02/0.42]
|   |   |   feature1 = classG
|   |   |   |   feature10 < 0.55
|   |   |   |   |   feature7 < 0.62 : classD (116.46/1.93) [117.47/2.93]
|   |   |   |   |   feature7 >= 0.62 : classG (2.03/0.01) [0.47/0.04]
|   |   |   |   feature10 >= 0.55 : classG (25.82/1.11) [13.41/1.5]
|   feature6 = classF
|   |   feature1 = classA
|   |   |   feature10 < 0.62 : classA (19.01/3.34) [6.8/1.53]
|   |   |   feature10 >= 0.62 : classG (3.23/0.79) [0.75/0.11]
|   |   feature1 = classB : classB (0.42/0.17) [0.13/0.01]
|   |   feature1 = classC : classD (1.03/0.33) [2.04/1.9]
|   |   feature1 = classD : classG (6.91/3.87) [1.06/0.31]
|   |   feature1 = classE : classG (6.61/3.21) [3.3/2.08]
|   |   feature1 = classF
|   |   |   feature2 = classA : classF (12.93/0.89) [6.38/0.27]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   feature2 = classD : classF (0/0) [0/0]
|   |   |   feature2 = classE : classF (0/0) [0/0]
|   |   |   feature2 = classF : classF (24.03/1.66) [15.01/0.51]
|   |   |   feature2 = classG : classG (1.94/0.09) [0.7/0.06]
|   |   feature1 = classG
|   |   |   feature2 = classA : classA (1.3/0.31) [5.71/0.12]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   feature2 = classD : classG (3.41/0.06) [0.22/0.12]
|   |   |   feature2 = classE : classG (0.1/0) [0.67/0]
|   |   |   feature2 = classF : classF (2.86/0.45) [1.87/0.32]
|   |   |   feature2 = classG : classG (5.62/0.34) [2.73/0.45]
|   feature6 = classG
|   |   feature1 = classA
|   |   |   feature7 < 0.68
|   |   |   |   feature7 < 0.38
|   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   feature10 < 0.43 : classA (2.69/0.02) [1.64/0.3]
|   |   |   |   |   |   feature10 >= 0.43 : classG (5.32/0.24) [0.71/0.71]
|   |   |   |   |   feature7 >= 0.35 : classD (6.53/0.06) [0.15/0.15]
|   |   |   |   feature7 >= 0.38 : classG (36.23/2.42) [36.89/3.55]
|   |   |   feature7 >= 0.68
|   |   |   |   feature7 < 0.72 : classE (6.7/0.09) [0.45/0.45]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature7 < 0.95 : classA (18.1/0.41) [14.51/0.38]
|   |   |   |   |   feature7 >= 0.95
|   |   |   |   |   |   feature8 < 0.62 : classA (3.03/0.02) [0.39/0.06]
|   |   |   |   |   |   feature8 >= 0.62 : classG (4.62/0.37) [3.15/0.32]
|   |   feature1 = classB : classB (4.44/1.8) [1.42/0.1]
|   |   feature1 = classC : classD (13.46/6.12) [21.68/20.21]
|   |   feature1 = classD : classG (81.45/40.16) [20.29/3.63]
|   |   feature1 = classE
|   |   |   feature7 < 0.68 : classG (72.56/18.5) [30.14/9.56]
|   |   |   feature7 >= 0.68 : classA (6.66/0.05) [6.77/0.16]
|   |   feature1 = classF
|   |   |   feature7 < 0.32 : classG (13.61/0.12) [0.59/0.31]
|   |   |   feature7 >= 0.32
|   |   |   |   feature10 < 0.52 : classF (10.38/2.33) [2.48/0.81]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature7 < 0.55 : classF (4.99/0.98) [1.9/0.41]
|   |   |   |   |   |   feature7 >= 0.55 : classG (2.66/1.23) [1.52/0.1]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classF
|   |   |   |   |   |   feature7 < 0.77 : classG (2.95/1.57) [1.78/0.4]
|   |   |   |   |   |   feature7 >= 0.77 : classF (3.88/0) [2.65/0]
|   |   |   |   |   feature2 = classG : classG (20.28/4.3) [16.83/1.42]
|   |   feature1 = classG
|   |   |   feature7 < 0.45
|   |   |   |   feature8 < 0.46 : classG (13.76/0.1) [0.37/0.29]
|   |   |   |   feature8 >= 0.46
|   |   |   |   |   feature8 < 0.62 : classA (41.38/2.86) [14.6/1.68]
|   |   |   |   |   feature8 >= 0.62
|   |   |   |   |   |   feature2 = classA : classA (4.35/0.5) [1.4/0.12]
|   |   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classG : classG (13.08/0.09) [4.61/0.27]
|   |   |   feature7 >= 0.45
|   |   |   |   feature5 = classA
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature10 < 0.7 : classG (6.89/0.54) [5.12/3.62]
|   |   |   |   |   |   feature10 >= 0.7
|   |   |   |   |   |   |   feature10 < 0.75 : classA (6.88/0.08) [0.5/0.18]
|   |   |   |   |   |   |   feature10 >= 0.75 : classG (4.06/0.23) [5.71/0.3]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classG (0.71/0.01) [0.02/0.02]
|   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classF : classG (2.63/0.03) [2.65/0.07]
|   |   |   |   |   feature2 = classG : classG (8.62/0.08) [4.33/0.21]
|   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   feature5 = classC : classG (0/0) [0/0]
|   |   |   |   feature5 = classD : classG (7.9/0.08) [7.72/1.02]
|   |   |   |   feature5 = classE : classG (0.76/0.01) [0.39/0.1]
|   |   |   |   feature5 = classF : classF (5.58/2.1) [4.06/1.07]
|   |   |   |   feature5 = classG : classG (510.1/4.92) [428.18/180.58]

Size of the tree : 1327

Weight: 1.62


REPTree
============

feature5 = classA
|   feature1 = classA
|   |   feature6 = classA
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.32 : classD (3.03/0.19) [0.13/0.13]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature7 < 0.52 : classA (11.09/2.39) [13.53/11.18]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   feature10 < 0.88 : classA (4.1/0.78) [3.26/2.82]
|   |   |   |   |   |   |   feature10 >= 0.88 : classF (4.05/0.72) [3.67/1.54]
|   |   |   |   |   feature7 >= 0.62 : classA (6.09/4.23) [3.26/2.48]
|   |   |   feature7 >= 0.72 : classA (158.45/10.21) [90.27/15.94]
|   |   feature6 = classB : classA (22.29/10.59) [8.95/3.4]
|   |   feature6 = classC
|   |   |   feature7 < 0.65 : classC (9.85/2.18) [9.23/1.26]
|   |   |   feature7 >= 0.65 : classA (6.84/0.69) [3.75/1.31]
|   |   feature6 = classD
|   |   |   feature9 < 0.58
|   |   |   |   feature10 < 0.98
|   |   |   |   |   feature7 < 0.45 : classD (77.23/6.31) [4.63/4.63]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature8 < 0.98
|   |   |   |   |   |   |   feature7 < 0.58 : classF (2.86/0.31) [3.4/1.76]
|   |   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   |   feature4 = classA : classA (9.31/0.75) [5.01/2.92]
|   |   |   |   |   |   |   |   feature4 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature4 = classC : classC (0.04/0) [0.04/0]
|   |   |   |   |   |   |   |   feature4 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature4 = classE : classA (0.17/0.01) [0.02/0.02]
|   |   |   |   |   |   |   |   feature4 = classF : classA (2.01/0.16) [0.36/0.19]
|   |   |   |   |   |   |   |   feature4 = classG : classG (0.17/0.01) [0.13/0.08]
|   |   |   |   |   |   feature8 >= 0.98 : classD (43.99/4.74) [11.42/6.12]
|   |   |   |   feature10 >= 0.98 : classA (8.54/2.09) [5.34/0.41]
|   |   |   feature9 >= 0.58
|   |   |   |   feature7 < 0.68
|   |   |   |   |   feature10 < 0.68 : classD (5.87/2.01) [4.01/2.96]
|   |   |   |   |   feature10 >= 0.68 : classA (17.1/4.69) [7.04/3.87]
|   |   |   |   feature7 >= 0.68 : classA (86.03/6.72) [49.64/10.2]
|   |   feature6 = classE
|   |   |   feature3 = classA : classA (0.52/0.07) [2.85/0.08]
|   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   feature3 = classC : classA (1.02/0.13) [0.17/0.16]
|   |   |   feature3 = classD : classA (10.15/1.33) [2.28/1.55]
|   |   |   feature3 = classE : classA (413.05/103.36) [272.87/73.3]
|   |   |   feature3 = classF
|   |   |   |   feature7 < 0.85 : classD (7.25/5.4) [10.34/5.34]
|   |   |   |   feature7 >= 0.85
|   |   |   |   |   feature7 < 0.88 : classE (73.45/4.83) [3.18/3.18]
|   |   |   |   |   feature7 >= 0.88 : classA (4.58/0.3) [2.54/0.2]
|   |   |   feature3 = classG : classA (1.02/0.13) [0.17/0.16]
|   |   feature6 = classF
|   |   |   feature9 < 0.58
|   |   |   |   feature10 < 0.88
|   |   |   |   |   feature10 < 0.78 : classC (3.03/3.01) [4.88/2.27]
|   |   |   |   |   feature10 >= 0.78 : classE (84.06/7.77) [17.67/9.19]
|   |   |   |   feature10 >= 0.88
|   |   |   |   |   feature7 < 0.65 : classF (5.17/0.19) [1.34/0.17]
|   |   |   |   |   feature7 >= 0.65 : classA (4.75/1.25) [1.99/0.2]
|   |   |   feature9 >= 0.58 : classA (190.69/34.69) [135.11/76.51]
|   |   feature6 = classG
|   |   |   feature3 = classA : classA (0.53/0.07) [0.13/0.08]
|   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   feature3 = classD : classA (0/0) [0.13/0]
|   |   |   feature3 = classE
|   |   |   |   feature7 < 0.45 : classE (16.92/1.58) [0.89/0.89]
|   |   |   |   feature7 >= 0.45 : classA (2.37/1.01) [2.42/2.11]
|   |   |   feature3 = classF : classA (0.77/0.1) [0.3/0.12]
|   |   |   feature3 = classG
|   |   |   |   feature8 < 0.58
|   |   |   |   |   feature8 < 0.54 : classA (8.33/0.98) [1.43/1.1]
|   |   |   |   |   feature8 >= 0.54 : classG (17.44/1.89) [2.38/1.96]
|   |   |   |   feature8 >= 0.58
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.42 : classA (21.12/2.61) [0.97/0.91]
|   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   |   |   feature7 < 0.55 : classF (2.59/0.74) [2.9/1.72]
|   |   |   |   |   |   |   |   feature7 >= 0.55 : classA (4.82/1.34) [16.81/9.97]
|   |   |   |   |   |   |   feature10 >= 0.98 : classG (2.7/1.17) [0.62/0.28]
|   |   |   |   |   feature7 >= 0.72 : classA (45.63/2.94) [22.81/10.28]
|   feature1 = classB
|   |   feature7 < 0.98 : classA (14.27/14.2) [20.08/4.99]
|   |   feature7 >= 0.98 : classA (14.09/6.36) [73.1/4.62]
|   feature1 = classC
|   |   feature7 < 0.35
|   |   |   feature7 < 0.28 : classA (73.59/4.74) [16.93/16.91]
|   |   |   feature7 >= 0.28 : classA (66.22/27.19) [44.94/6.23]
|   |   feature7 >= 0.35
|   |   |   feature7 < 0.42
|   |   |   |   feature7 < 0.38 : classG (6.53/1.97) [1.8/0.28]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature4 = classA : classF (9.33/1.13) [1.57/1.37]
|   |   |   |   |   feature4 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature4 = classC : classC (3.74/0.69) [0.51/0.08]
|   |   |   |   |   feature4 = classD : classF (0/0) [0/0]
|   |   |   |   |   feature4 = classE : classF (0/0) [0/0]
|   |   |   |   |   feature4 = classF : classF (0/0) [0/0]
|   |   |   |   |   feature4 = classG : classF (0/0) [0/0]
|   |   |   feature7 >= 0.42
|   |   |   |   feature7 < 0.55 : classD (41.11/25.63) [38.29/3.3]
|   |   |   |   feature7 >= 0.55 : classA (54.77/51.46) [53.24/13.01]
|   feature1 = classD : classE (329.2/205.04) [158.04/88.74]
|   feature1 = classE : classE (432.68/302.39) [183.6/102.9]
|   feature1 = classF
|   |   feature7 < 0.62
|   |   |   feature7 < 0.28 : classG (14.59/1.01) [14.21/0.63]
|   |   |   feature7 >= 0.28
|   |   |   |   feature10 < 0.88
|   |   |   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classF (0/0) [0/0]
|   |   |   |   |   feature3 = classD : classD (0/0) [7.68/0]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature7 < 0.48 : classE (34.85/8.93) [13.8/8.79]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   feature4 = classA : classF (2.5/0.84) [1.71/0.89]
|   |   |   |   |   |   |   |   feature4 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   |   |   feature4 = classC : classF (0/0) [0/0]
|   |   |   |   |   |   |   |   feature4 = classD : classF (3.75/1.26) [2.95/0.63]
|   |   |   |   |   |   |   |   feature4 = classE : classE (4.7/2.12) [1.85/0.99]
|   |   |   |   |   |   |   |   feature4 = classF : classE (1.54/0.68) [0.34/0.34]
|   |   |   |   |   |   |   |   feature4 = classG : classF (2.23/0.75) [0.75/0.38]
|   |   |   |   |   |   |   feature7 >= 0.55 : classE (14.68/7.01) [1.44/1.44]
|   |   |   |   |   feature3 = classF : classF (56.36/25.3) [33.76/20.91]
|   |   |   |   |   feature3 = classG : classD (14.51/13.95) [21.89/6.54]
|   |   |   |   feature10 >= 0.88
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature11 < 0.75 : classE (3.8/0.75) [1.66/0.14]
|   |   |   |   |   |   feature11 >= 0.75
|   |   |   |   |   |   |   feature8 < 0.9 : classF (5.21/1.14) [1.04/0.08]
|   |   |   |   |   |   |   feature8 >= 0.9
|   |   |   |   |   |   |   |   feature11 < 0.98
|   |   |   |   |   |   |   |   |   feature3 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature3 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature3 = classE : classA (9.57/0.88) [0.35/0.26]
|   |   |   |   |   |   |   |   |   feature3 = classF : classF (4.28/0.45) [0.16/0.06]
|   |   |   |   |   |   |   |   |   feature3 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature11 >= 0.98 : classA (28.97/2.68) [1.27/0.79]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   feature7 < 0.52 : classD (2.93/0.49) [0.35/0.35]
|   |   |   |   |   |   |   feature7 >= 0.52 : classG (2.62/0.18) [2.5/0.06]
|   |   |   |   |   |   feature7 >= 0.55 : classA (5.77/1.41) [0.32/0.32]
|   |   feature7 >= 0.62 : classF (83.08/18.77) [31.61/2.67]
|   feature1 = classG
|   |   feature10 < 0.98
|   |   |   feature6 = classA : classA (3.57/2.19) [1.21/0.52]
|   |   |   feature6 = classB : classA (1.02/0.19) [0.2/0.15]
|   |   |   feature6 = classC : classA (0/0) [0/0]
|   |   |   feature6 = classD
|   |   |   |   feature7 < 0.28 : classD (8.22/0.55) [0.64/0.64]
|   |   |   |   feature7 >= 0.28 : classA (7.64/2.43) [2.65/1.76]
|   |   |   feature6 = classE
|   |   |   |   feature4 = classA
|   |   |   |   |   feature7 < 0.48 : classE (5.1/2.05) [2.51/0.98]
|   |   |   |   |   feature7 >= 0.48 : classA (11.72/1.97) [8.14/4]
|   |   |   |   feature4 = classB : classE (0/0) [0/0]
|   |   |   |   feature4 = classC : classG (0.01/0) [0/0]
|   |   |   |   feature4 = classD : classG (0.16/0.01) [0.01/0]
|   |   |   |   feature4 = classE : classE (8.9/0.9) [8.83/1.16]
|   |   |   |   feature4 = classF : classG (0.59/0.12) [0.23/0.09]
|   |   |   |   feature4 = classG
|   |   |   |   |   feature8 < 0.52 : classG (10.87/0.85) [8.48/0.27]
|   |   |   |   |   feature8 >= 0.52 : classE (16.01/16.01) [40.57/1.88]
|   |   |   feature6 = classF
|   |   |   |   feature7 < 0.52 : classF (12.02/1) [7.85/1.27]
|   |   |   |   feature7 >= 0.52 : classD (7.51/7.51) [70.86/2.24]
|   |   |   feature6 = classG
|   |   |   |   feature8 < 0.78 : classG (75.03/28.82) [37.36/8.42]
|   |   |   |   feature8 >= 0.78
|   |   |   |   |   feature11 < 0.67 : classA (63.62/9.07) [14.97/8.05]
|   |   |   |   |   feature11 >= 0.67 : classG (11.79/3.8) [7.69/2.32]
|   |   feature10 >= 0.98
|   |   |   feature7 < 0.45
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC : classA (0.11/0.01) [0.1/0]
|   |   |   |   feature3 = classD : classE (0/0) [0/0]
|   |   |   |   feature3 = classE : classE (1.63/0.11) [3.1/0.05]
|   |   |   |   feature3 = classF : classE (166.14/11.38) [5.58/5.58]
|   |   |   |   feature3 = classG : classG (2.51/0.98) [0.08/0.05]
|   |   |   feature7 >= 0.45
|   |   |   |   feature3 = classA : classA (0/0) [0.17/0]
|   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   feature3 = classC : classA (0.02/0.01) [0.02/0]
|   |   |   |   feature3 = classD : classF (0/0) [0/0]
|   |   |   |   feature3 = classE : classE (3.87/0.82) [1.75/0.23]
|   |   |   |   feature3 = classF : classF (23.37/1.45) [10.6/0.39]
|   |   |   |   feature3 = classG : classG (4.71/0.86) [6.37/0.2]
feature5 = classB
|   feature1 = classA
|   |   feature10 < 0.98
|   |   |   feature4 = classA
|   |   |   |   feature7 < 0.68
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature10 < 0.52 : classA (7.1/1.44) [4.25/0.15]
|   |   |   |   |   |   feature10 >= 0.52 : classG (3.66/1.03) [4.7/2.07]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.52 : classB (9.31/1.64) [5.74/5.74]
|   |   |   |   |   |   feature7 >= 0.52 : classB (69.55/6.36) [8.68/8.68]
|   |   |   |   feature7 >= 0.68 : classD (9.1/9.1) [30.47/6.94]
|   |   |   feature4 = classB : classB (28.12/4.51) [41.11/25.76]
|   |   |   feature4 = classC : classA (2.57/0.92) [2.4/0.76]
|   |   |   feature4 = classD : classA (1.92/0.21) [0.24/0.18]
|   |   |   feature4 = classE : classB (14.52/6.63) [9.6/1.93]
|   |   |   feature4 = classF : classC (0.04/0.04) [2.65/0.02]
|   |   |   feature4 = classG : classG (2.94/0.86) [1.12/0.46]
|   |   feature10 >= 0.98 : classA (25.64/7.48) [2.65/2.4]
|   feature1 = classB
|   |   feature7 < 0.63
|   |   |   feature7 < 0.3 : classC (73.35/4.73) [71.77/1.58]
|   |   |   feature7 >= 0.3
|   |   |   |   feature10 < 0.88 : classB (16.57/2.63) [26.84/10.51]
|   |   |   |   feature10 >= 0.88 : classA (95.44/18.4) [46.07/6.94]
|   |   feature7 >= 0.63 : classB (436.06/30.72) [246.21/46.92]
|   feature1 = classC
|   |   feature7 < 0.28 : classA (25.15/1.62) [5.8/5.8]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature10 < 0.42 : classF (5.14/2.2) [0.28/0.17]
|   |   |   |   |   feature10 >= 0.42
|   |   |   |   |   |   feature4 = classA
|   |   |   |   |   |   |   feature7 < 0.35 : classD (4.94/0.34) [0.41/0.41]
|   |   |   |   |   |   |   feature7 >= 0.35 : classG (3.33/1.76) [0.98/0.46]
|   |   |   |   |   |   feature4 = classB : classC (0/0) [0.52/0]
|   |   |   |   |   |   feature4 = classC : classD (0/0) [9.33/0]
|   |   |   |   |   |   feature4 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature4 = classE : classD (5.18/0.62) [0.28/0.28]
|   |   |   |   |   |   feature4 = classF : classC (1.03/0.51) [0.06/0.03]
|   |   |   |   |   |   feature4 = classG : classD (0/0) [0/0]
|   |   |   |   feature7 >= 0.52 : classE (6.61/1.42) [0.28/0.28]
|   |   |   feature7 >= 0.58
|   |   |   |   feature4 = classA : classC (3.06/2.21) [1.44/0.59]
|   |   |   |   feature4 = classB : classB (13.97/1.73) [0.37/0.37]
|   |   |   |   feature4 = classC : classC (1.08/0.41) [0.43/0.02]
|   |   |   |   feature4 = classD : classD (0.89/0.32) [0.02/0.02]
|   |   |   |   feature4 = classE : classC (0.85/0.33) [0.02/0.02]
|   |   |   |   feature4 = classF : classB (0/0) [0/0]
|   |   |   |   feature4 = classG : classB (0/0) [0/0]
|   feature1 = classD
|   |   feature4 = classA : classC (0.22/0.22) [1.83/0.18]
|   |   feature4 = classB
|   |   |   feature7 < 0.27 : classB (8.2/8.2) [46.54/7.85]
|   |   |   feature7 >= 0.27 : classF (3.92/2) [1.75/0.42]
|   |   feature4 = classC : classE (2.1/2.03) [1.9/0.78]
|   |   feature4 = classD
|   |   |   feature7 < 0.52 : classF (13.32/6.81) [5.98/1.45]
|   |   |   feature7 >= 0.52
|   |   |   |   feature7 < 0.55 : classE (25.15/1.62) [0.55/0.55]
|   |   |   |   feature7 >= 0.55 : classG (2.64/2.64) [5.97/0.71]
|   |   feature4 = classE
|   |   |   feature7 < 0.45 : classG (11.7/2.37) [1.87/1.87]
|   |   |   feature7 >= 0.45 : classF (5.05/2.42) [1.85/0.01]
|   |   feature4 = classF : classF (2.47/0.93) [0.92/0.09]
|   |   feature4 = classG : classG (1.68/0.4) [1.31/0.79]
|   feature1 = classE
|   |   feature7 < 0.48
|   |   |   feature7 < 0.45
|   |   |   |   feature7 < 0.28 : classG (5.63/0.37) [0.24/0.24]
|   |   |   |   feature7 >= 0.28 : classD (4.15/1.02) [7.23/3.56]
|   |   |   feature7 >= 0.45 : classC (29.14/5.61) [6.44/5.81]
|   |   feature7 >= 0.48
|   |   |   feature7 < 0.62
|   |   |   |   feature7 < 0.53 : classF (2.24/1.06) [5.33/3.72]
|   |   |   |   feature7 >= 0.53 : classB (17.17/1.81) [0.96/0.96]
|   |   |   feature7 >= 0.62 : classA (14.54/5.21) [5.74/3.11]
|   feature1 = classF
|   |   feature4 = classA : classE (9.14/4.48) [10.05/7.42]
|   |   feature4 = classB
|   |   |   feature7 < 0.4
|   |   |   |   feature7 < 0.3 : classG (2.21/0.14) [2.12/0.05]
|   |   |   |   feature7 >= 0.3 : classA (3.24/0.9) [1.7/1.7]
|   |   |   feature7 >= 0.4 : classB (21.93/6.57) [2.1/2.1]
|   |   feature4 = classC : classF (0.36/0.11) [0.26/0.05]
|   |   feature4 = classD : classF (3.06/1.19) [2.05/0.39]
|   |   feature4 = classE : classE (8.58/3.92) [1.45/1.45]
|   |   feature4 = classF : classG (9.73/3.32) [1.84/0.69]
|   |   feature4 = classG : classG (3.41/1.96) [0.74/0.34]
|   feature1 = classG
|   |   feature4 = classA : classE (2.18/2.18) [4.28/1.65]
|   |   feature4 = classB : classB (2.13/0.61) [1.85/0.33]
|   |   feature4 = classC : classG (0.02/0) [0/0]
|   |   feature4 = classD : classG (0.32/0.06) [0.05/0.02]
|   |   feature4 = classE : classG (0.96/0.7) [0.94/0.57]
|   |   feature4 = classF : classG (1.02/0.19) [0.37/0.05]
|   |   feature4 = classG : classA (10.82/6.15) [9.87/2.19]
feature5 = classC
|   feature1 = classA
|   |   feature10 < 0.95
|   |   |   feature4 = classA : classD (8.37/7.65) [37.95/7.88]
|   |   |   feature4 = classB : classD (0/0) [0/0]
|   |   |   feature4 = classC : classA (14.48/4.35) [4.28/3.86]
|   |   |   feature4 = classD : classA (0.45/0.09) [1.2/0.1]
|   |   |   feature4 = classE
|   |   |   |   feature7 < 0.32 : classD (5.82/0.38) [0.13/0.13]
|   |   |   |   feature7 >= 0.32 : classA (5.04/1.26) [3/2.33]
|   |   |   feature4 = classF : classC (0.54/0.54) [2.94/0.14]
|   |   |   feature4 = classG : classG (3.52/1.29) [1.72/0.71]
|   |   feature10 >= 0.95 : classC (27.26/6.42) [30.82/15.13]
|   feature1 = classB
|   |   feature4 = classA : classE (3.01/1.34) [0.79/0.79]
|   |   feature4 = classB
|   |   |   feature7 < 0.85 : classC (8.6/0.92) [8.36/0.68]
|   |   |   feature7 >= 0.85 : classA (3.08/1.71) [30.98/0.91]
|   |   feature4 = classC : classC (6.04/3.27) [3.06/0.55]
|   |   feature4 = classD : classA (0/0) [0/0]
|   |   feature4 = classE : classE (3.22/1.7) [4.2/1.15]
|   |   feature4 = classF : classA (0.02/0) [0/0]
|   |   feature4 = classG : classA (0/0) [0/0]
|   feature1 = classC
|   |   feature7 < 0.55
|   |   |   feature4 = classA : classC (10.46/10.45) [12.31/0.8]
|   |   |   prevPredS = classB : classC (0/0) [0.56/0]
|   |   |   prevPredS = classC
|   |   |   |   feature10 < 0.58 : classC (19.84/6.06) [4.19/1.97]
|   |   |   |   feature10 >= 0.58
|   |   |   |   |   feature10 < 0.82
|   |   |   |   |   |   feature3 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (2.19/0.59) [1.65/0.12]
|   |   |   |   |   |   feature3 = classC : classA (35.81/5.4) [35.79/5.11]
|   |   |   |   |   |   feature3 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classE : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classF : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classA (0/0) [0/0]
|   |   |   |   |   feature10 >= 0.82
|   |   |   |   |   |   feature10 < 0.95 : classC (8.81/2.69) [19.71/10.15]
|   |   |   |   |   |   feature10 >= 0.95
|   |   |   |   |   |   |   feature7 < 0.52 : classA (27.57/5.1) [10.4/10.4]
|   |   |   |   |   |   |   feature7 >= 0.52 : classC (18.48/10.28) [23.77/8.07]
|   |   |   prevPredS = classD : classD (11.79/3.55) [1.02/1.02]
|   |   |   prevPredS = classE : classC (26.17/10.8) [1.51/0.6]
|   |   |   prevPredS = classF : classC (0.97/0.42) [0.06/0.02]
|   |   |   prevPredS = classG : classA (0/0) [0/0]
|   |   feature7 >= 0.55
|   |   |   feature10 < 0.82
|   |   |   |   feature10 < 0.72 : classC (56.8/13.97) [35.48/1.79]
|   |   |   |   feature10 >= 0.72
|   |   |   |   |   feature8 < 0.86 : classA (37.3/6.71) [2.53/1.66]
|   |   |   |   |   feature8 >= 0.86 : classC (7.97/2.34) [4.1/1.89]
|   |   |   feature10 >= 0.82
|   |   |   |   feature7 < 0.85
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   feature7 < 0.62 : classC (7.42/0.48) [0.9/0.16]
|   |   |   |   |   |   feature7 >= 0.62 : classC (11.97/1.66) [13.93/7.93]
|   |   |   |   |   feature7 >= 0.75 : classC (11.12/5.2) [3.9/0.24]
|   |   |   |   feature7 >= 0.85 : classC (373.58/24.46) [180.9/8.25]
|   predS = classD
|   |   prevPredS = classA
|   |   |   feature7 < 0.53 : classF (6.55/3.33) [3.51/1.28]
|   |   |   feature7 >= 0.53 : classA (41.55/2.86) [4.67/4.66]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC
|   |   |   feature7 < 0.52 : classA (63.34/16.07) [45.74/7.04]
|   |   |   feature7 >= 0.52
|   |   |   |   feature9 < 0.83 : classD (2.88/0.34) [7.97/0.3]
|   |   |   |   feature9 >= 0.83 : classC (17.71/5.34) [11.35/1.34]
|   |   prevPredS = classD
|   |   |   feature7 < 0.55
|   |   |   |   feature7 < 0.52 : classF (6.56/3.6) [4.09/2.05]
|   |   |   |   feature7 >= 0.52 : classE (26.84/1.74) [1.47/1.47]
|   |   |   feature7 >= 0.55
|   |   |   |   feature10 < 0.62 : classG (2.74/2.74) [6.28/0.67]
|   |   |   |   feature10 >= 0.62 : classC (7.58/0.71) [3.69/0.25]
|   |   prevPredS = classE : classG (14.01/3.29) [2.25/2.25]
|   |   prevPredS = classF : classF (2.24/0.86) [0.74/0.03]
|   |   prevPredS = classG : classG (1.41/0.19) [1.23/0.67]
|   predS = classE
|   |   feature7 < 0.48
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.32 : classG (6/0.39) [1.37/0.91]
|   |   |   |   feature7 >= 0.32 : classC (5.59/1.4) [4.57/3.85]
|   |   |   prevPredS = classB : classA (1.13/1.13) [7.83/0.08]
|   |   |   prevPredS = classC
|   |   |   |   feature10 < 0.7 : classC (12.34/1.79) [6.33/1.75]
|   |   |   |   feature10 >= 0.7 : classA (9.4/5.32) [1.7/1.03]
|   |   |   prevPredS = classD : classD (2.25/1) [1.43/0.32]
|   |   |   prevPredS = classE : classE (16.87/8.83) [2.43/2.27]
|   |   |   prevPredS = classF : classC (15.89/2.47) [2.48/2.47]
|   |   |   prevPredS = classG : classE (0/0) [0.56/0]
|   |   feature7 >= 0.48
|   |   |   prevPredS = classA : classD (0.8/0.8) [3.68/0.88]
|   |   |   prevPredS = classB : classA (0/0) [0.56/0]
|   |   |   prevPredS = classC : classC (3.5/3.26) [5.09/0.37]
|   |   |   prevPredS = classD : classE (5.03/2.05) [1.32/0.11]
|   |   |   prevPredS = classE : classA (0.78/0.52) [3.04/0.23]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.62 : classF (2.52/0.69) [2.07/0.35]
|   |   |   |   feature7 >= 0.62 : classA (15.39/1.55) [8.58/0.91]
|   |   |   prevPredS = classG : classG (1/0.45) [0.6/0.04]
|   predS = classF
|   |   prevPredS = classA : classE (8.16/3.18) [10.79/7.99]
|   |   prevPredS = classB : classE (0.8/0.25) [0.2/0.2]
|   |   prevPredS = classC
|   |   |   feature7 < 0.28 : classG (3.05/0.61) [2.54/0.1]
|   |   |   feature7 >= 0.28 : classC (44.3/19.13) [9.69/3.09]
|   |   prevPredS = classD : classF (3.71/1.72) [2.26/0.49]
|   |   prevPredS = classE
|   |   |   feature7 < 0.45 : classA (6.69/6.11) [8.4/0.67]
|   |   |   feature7 >= 0.45 : classF (3.44/1.11) [0.54/0.3]
|   |   prevPredS = classF
|   |   |   feature7 < 0.25 : classA (8.23/0.53) [0.18/0.18]
|   |   |   feature7 >= 0.25 : classG (15.34/7.83) [3.7/1.81]
|   |   prevPredS = classG : classG (3.04/1.68) [0.57/0.32]
|   predS = classG
|   |   prevPredS = classA : classA (2.22/2.22) [7.62/4.58]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC : classE (5.43/2.85) [1.71/0.85]
|   |   prevPredS = classD : classE (1.48/0.62) [1.06/0.2]
|   |   prevPredS = classE : classG (0.97/0.72) [0.97/0.6]
|   |   prevPredS = classF : classG (1.06/0.19) [0.36/0.05]
|   |   prevPredS = classG
|   |   |   feature10 < 0.48 : classA (6.85/1.88) [0.98/0.97]
|   |   |   feature10 >= 0.48 : classG (4.15/0.69) [1.05/0.2]
feature5 = classD
|   feature7 < 0.55
|   |   predS = classA
|   |   |   prevPredS = classA
|   |   |   |   feature10 < 0.62
|   |   |   |   |   feature10 < 0.52 : classD (3.47/3.19) [19.14/4.56]
|   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   feature7 < 0.38 : classD (2.24/0.3) [0.33/0.33]
|   |   |   |   |   |   |   feature7 >= 0.38 : classG (8.87/0.65) [9.22/1]
|   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   feature10 < 0.55 : classD (8.25/0.58) [1.49/1.49]
|   |   |   |   |   |   |   feature10 >= 0.55 : classG (5.15/1.89) [1.8/0.17]
|   |   |   |   feature10 >= 0.62 : classA (4.38/0.63) [1.66/0.1]
|   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   prevPredS = classC : classC (0.82/0.45) [0.03/0.03]
|   |   |   prevPredS = classD : classD (23.75/11.08) [8.96/1.25]
|   |   |   prevPredS = classE : classD (30.12/3.95) [5.62/5.61]
|   |   |   prevPredS = classF
|   |   |   |   feature9 < 0.75 : classA (5.41/0.78) [1.69/0.12]
|   |   |   |   feature9 >= 0.75 : classD (9.1/0.7) [3.33/3.33]
|   |   |   prevPredS = classG : classD (2.34/0.52) [1.21/1.21]
|   |   predS = classB
|   |   |   feature10 < 0.42 : classE (5.23/0.34) [1.18/1.18]
|   |   |   feature10 >= 0.42 : classB (2.79/0.19) [0.8/0.8]
|   |   predS = classC
|   |   |   feature7 < 0.28 : classA (79.61/6.07) [18.23/18.23]
|   |   |   feature7 >= 0.28 : classD (82.43/42.76) [38.18/8.8]
|   |   predS = classD
|   |   |   prevPredS = classA : classC (3.78/3.78) [18.79/0.26]
|   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   prevPredS = classC : classD (4.96/4.64) [4.4/1.15]
|   |   |   prevPredS = classD
|   |   |   |   feature11 < 0.95 : classD (47.25/28.56) [12.6/3.67]
|   |   |   |   feature11 >= 0.95
|   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.32 : classA (41.36/2.67) [0.89/0.89]
|   |   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   |   feature7 < 0.45 : classE (5.26/0.93) [4.85/0.52]
|   |   |   |   |   |   |   |   feature7 >= 0.45 : classF (37.39/17.66) [13.97/0.17]
|   |   |   |   |   |   feature7 >= 0.52 : classA (370.37/24.26) [8.37/8.37]
|   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   feature7 < 0.4
|   |   |   |   |   |   |   feature11 < 0.98
|   |   |   |   |   |   |   |   feature7 < 0.32 : classA (124.17/8.1) [80.11/2.73]
|   |   |   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   |   |   feature7 < 0.35 : classE (2.72/0.18) [2.6/0.06]
|   |   |   |   |   |   |   |   |   feature7 >= 0.35 : classA (41.39/2.7) [2.59/2.59]
|   |   |   |   |   |   |   feature11 >= 0.98 : classD (3.77/0.3) [0.32/0.14]
|   |   |   |   |   |   feature7 >= 0.4
|   |   |   |   |   |   |   feature7 < 0.52 : classF (25.67/13.62) [10.58/2.23]
|   |   |   |   |   |   |   feature7 >= 0.52 : classE (75.18/6.12) [2.49/2.49]
|   |   |   prevPredS = classE
|   |   |   |   feature10 < 0.65
|   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (7.78/1.15) [2.2/0.46]
|   |   |   |   |   feature2 = classE : classE (4.03/0.56) [3.5/0.2]
|   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   feature10 >= 0.65
|   |   |   |   |   feature7 < 0.4 : classG (31.53/2.37) [8.68/8.68]
|   |   |   |   |   feature7 >= 0.4 : classF (2.91/1.41) [2.76/1.72]
|   |   |   prevPredS = classF
|   |   |   |   feature2 = classA : classF (3.34/1.87) [0.76/0.03]
|   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (6.33/3.07) [4.69/1.45]
|   |   |   |   feature2 = classE : classD (0/0) [0/0]
|   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   prevPredS = classG
|   |   |   |   feature10 < 0.5 : classD (9.81/1.45) [0.93/0.58]
|   |   |   |   feature10 >= 0.5 : classG (13.84/2.41) [2.46/0.83]
|   |   predS = classE
|   |   |   feature7 < 0.38
|   |   |   |   prevPredS = classA : classG (18.25/1.8) [10.18/9.81]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   prevPredS = classD : classA (377.88/31.78) [20.05/20.05]
|   |   |   |   prevPredS = classE : classD (1.7/0.15) [1.61/0.07]
|   |   |   |   prevPredS = classF : classE (0.35/0.03) [0.66/0.01]
|   |   |   |   prevPredS = classG : classE (0/0) [1.63/0]
|   |   |   feature7 >= 0.38
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature9 < 0.75
|   |   |   |   |   |   prevPredS = classA : classD (0/0) [9.85/1.94]
|   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classD (77.43/4.99) [1.83/1.66]
|   |   |   |   |   |   prevPredS = classE : classD (11.21/0.79) [0.32/0.31]
|   |   |   |   |   |   prevPredS = classF : classD (1.63/0.1) [1.56/0.03]
|   |   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   |   feature9 >= 0.75 : classD (3.58/0.57) [1.03/0.16]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   prevPredS = classA : classC (0/0) [2.62/0]
|   |   |   |   |   |   prevPredS = classB : classC (6.46/2.57) [1/1]
|   |   |   |   |   |   prevPredS = classC : classC (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classC (5.03/2) [1.15/1.15]
|   |   |   |   |   |   prevPredS = classE : classC (80.29/31.96) [21.61/21.61]
|   |   |   |   |   |   prevPredS = classF : classC (30.4/12.1) [4.7/4.7]
|   |   |   |   |   |   prevPredS = classG : classC (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   prevPredS = classA : classD (1.08/0.22) [8.82/0.6]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [1.63/0]
|   |   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature7 < 0.52 : classE (2.12/0.65) [1.81/0.22]
|   |   |   |   |   |   |   feature7 >= 0.52 : classD (8.4/0.54) [1.55/0.18]
|   |   |   |   |   |   prevPredS = classE : classE (7.71/2.03) [10.07/1.86]
|   |   |   |   |   |   prevPredS = classF : classF (4.1/0.57) [5.26/0.29]
|   |   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   predS = classF
|   |   |   prevPredS = classA : classE (24.69/10.11) [30.68/22.46]
|   |   |   prevPredS = classB : classE (2.66/1.03) [0.79/0.79]
|   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.28 : classG (8.52/0.56) [15.83/7.87]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature8 < 0.34
|   |   |   |   |   |   |   feature7 < 0.4 : classA (2.1/0.56) [0.05/0.05]
|   |   |   |   |   |   |   feature7 >= 0.4 : classA (8.2/0.53) [7.99/0.18]
|   |   |   |   |   |   feature8 >= 0.34
|   |   |   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   |   |   feature9 < 0.95
|   |   |   |   |   |   |   |   |   feature8 < 0.68 : classA (11.89/0.77) [2.83/2.83]
|   |   |   |   |   |   |   |   |   feature8 >= 0.68 : classD (2.71/0.96) [0.07/0.06]
|   |   |   |   |   |   |   |   feature9 >= 0.95
|   |   |   |   |   |   |   |   |   feature7 < 0.32 : classD (8.5/0.81) [0.19/0.18]
|   |   |   |   |   |   |   |   |   feature7 >= 0.32 : classA (4.76/1.17) [7.78/0.11]
|   |   |   |   |   |   |   feature7 >= 0.35 : classD (26.21/3.93) [22.7/1.31]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.52 : classF (12.45/6.22) [5.7/0.01]
|   |   |   |   |   |   feature7 >= 0.52 : classG (4.81/0.32) [12.28/7.79]
|   |   |   prevPredS = classE
|   |   |   |   feature10 < 0.67 : classD (18.64/6.62) [5.66/3.27]
|   |   |   |   feature10 >= 0.67
|   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   feature7 < 0.3 : classG (2.25/0.15) [2.15/0.05]
|   |   |   |   |   |   feature7 >= 0.3 : classA (3.29/0.92) [0.07/0.07]
|   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   feature7 < 0.45 : classE (15.59/1.01) [0.57/0.57]
|   |   |   |   |   |   feature7 >= 0.45 : classG (2.69/1.5) [1.38/0.2]
|   |   |   prevPredS = classF : classF (0.42/0.12) [0.11/0.06]
|   |   |   prevPredS = classG : classF (4.76/1.37) [1.48/0.7]
|   |   predS = classG
|   |   |   prevPredS = classA : classC (0.84/0.84) [1.54/0.45]
|   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   prevPredS = classD : classD (15.28/3.86) [12.03/2.29]
|   |   |   prevPredS = classE : classA (12.97/5.3) [11.9/2.6]
|   |   |   prevPredS = classF : classG (2.12/0.41) [0.64/0.11]
|   |   |   prevPredS = classG
|   |   |   |   feature7 < 0.48 : classG (13.34/0.86) [4.05/1.81]
|   |   |   |   feature7 >= 0.48 : classD (6.25/3.21) [3.95/0.91]
|   feature7 >= 0.55
|   |   predS = classA
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.65 : classG (23.25/23.25) [46.69/22.03]
|   |   |   |   feature7 >= 0.65
|   |   |   |   |   prevPredS = classA : classC (16.28/1.7) [10.38/9.82]
|   |   |   |   |   prevPredS = classB : classC (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classC (1.79/0.16) [2.69/1.06]
|   |   |   |   |   prevPredS = classD : classA (0.21/0.03) [0.13/0.13]
|   |   |   |   |   prevPredS = classE : classA (0.19/0.01) [0.11/0.11]
|   |   |   |   |   prevPredS = classF : classA (0.04/0) [0.06/0.02]
|   |   |   |   |   prevPredS = classG : classG (7.18/0.66) [5.88/4.25]
|   |   |   feature7 >= 0.72 : classD (37.3/37.26) [94.33/20.76]
|   |   predS = classB
|   |   |   feature7 < 0.75 : classD (8.55/0.87) [1.53/1.52]
|   |   |   feature7 >= 0.75 : classA (16.7/8.48) [92.49/4.37]
|   |   predS = classC
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.85
|   |   |   |   |   feature7 < 0.75 : classC (2.9/1.48) [0.67/0.06]
|   |   |   |   |   feature7 >= 0.75
|   |   |   |   |   |   feature7 < 0.8 : classA (6.98/3.71) [2.16/0.53]
|   |   |   |   |   |   feature7 >= 0.8 : classB (3.49/0.23) [0.26/0.26]
|   |   |   |   feature7 >= 0.85
|   |   |   |   |   feature10 < 0.45 : classD (8.25/0.56) [0.18/0.18]
|   |   |   |   |   feature10 >= 0.45 : classC (2.78/0.18) [1.63/0.06]
|   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   prevPredS = classC
|   |   |   |   feature8 < 0.44 : classC (4.27/1.64) [0.13/0.09]
|   |   |   |   feature8 >= 0.44 : classD (13.49/5.63) [2.22/0.69]
|   |   |   prevPredS = classD : classD (14/5.16) [1.07/1.06]
|   |   |   prevPredS = classE : classC (2.68/1.03) [0.08/0.06]
|   |   |   prevPredS = classF : classE (2.68/1.05) [0.07/0.07]
|   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   predS = classD
|   |   |   feature8 < 0.9
|   |   |   |   feature7 < 0.92
|   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classC : classD (3.52/0.3) [4.04/0.93]
|   |   |   |   |   |   |   feature6 = classD : classD (53.25/4.61) [32.63/14.04]
|   |   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   |   prevPredS = classA : classC (0.06/0.06) [2.08/0.04]
|   |   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classE (0.89/0.89) [5.69/0.02]
|   |   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   |   feature10 < 0.58 : classD (2.66/0.17) [76.21/7.28]
|   |   |   |   |   |   |   |   |   feature10 >= 0.58 : classE (49.15/6.17) [6.17/1.88]
|   |   |   |   |   |   |   |   prevPredS = classE : classE (17.09/1.24) [11.79/3.95]
|   |   |   |   |   |   |   |   prevPredS = classF : classD (0.77/0.05) [0.02/0.02]
|   |   |   |   |   |   |   |   prevPredS = classG : classG (1.45/0.57) [2.55/0.03]
|   |   |   |   |   |   |   feature6 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classG : classD (1.76/0.15) [0.5/0.46]
|   |   |   |   |   |   feature7 >= 0.75 : classD (142.15/9.16) [39.24/7.07]
|   |   |   |   |   feature10 >= 0.98
|   |   |   |   |   |   feature7 < 0.62 : classC (82.74/5.35) [1.78/1.78]
|   |   |   |   |   |   feature7 >= 0.62 : classD (3.77/0.24) [1.53/0.08]
|   |   |   |   feature7 >= 0.92
|   |   |   |   |   feature10 < 0.65 : classC (380.63/33.23) [23.63/12.14]
|   |   |   |   |   feature10 >= 0.65
|   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC
|   |   |   |   |   |   |   feature8 < 0.86 : classD (2.12/0.14) [0.42/0.05]
|   |   |   |   |   |   |   feature8 >= 0.86 : classC (41.51/2.82) [1/1]
|   |   |   |   |   |   feature3 = classD : classD (34.93/2.25) [11.56/0.75]
|   |   |   |   |   |   feature3 = classE : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classD (0/0) [0.17/0]
|   |   |   feature8 >= 0.9 : classD (209.22/15.47) [103.99/13.33]
|   |   predS = classE
|   |   |   feature7 < 0.72 : classE (81.93/46.33) [41.91/16.32]
|   |   |   feature7 >= 0.72
|   |   |   |   feature7 < 0.88 : classD (28/4.28) [19.58/9.84]
|   |   |   |   feature7 >= 0.88 : classE (9.5/0.62) [1.28/0.58]
|   |   predS = classF
|   |   |   feature7 < 0.62 : classA (27.86/11.65) [2.9/2.9]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.65
|   |   |   |   |   prevPredS = classA : classC (0/0) [0.46/0]
|   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classD (0.01/0) [0.01/0]
|   |   |   |   |   prevPredS = classE : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classF : classG (17.7/1.25) [0.42/0.42]
|   |   |   |   |   prevPredS = classG : classG (3.49/0.23) [0.08/0.08]
|   |   |   |   feature7 >= 0.65 : classD (4.88/1.44) [1.39/1.39]
|   |   predS = classG
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.7 : classE (2.89/2.89) [3.73/1.08]
|   |   |   |   feature7 >= 0.7 : classA (16.52/1.93) [1.06/1.06]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   feature2 = classD
|   |   |   |   feature10 < 0.38 : classG (8.81/0.57) [0.33/0.19]
|   |   |   |   feature10 >= 0.38
|   |   |   |   |   prevPredS = classA : classE (3.08/3.08) [7.43/2.18]
|   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classD (14.41/2.01) [2.04/0.5]
|   |   |   |   |   prevPredS = classE : classG (0.13/0.01) [0.12/0.01]
|   |   |   |   |   prevPredS = classF : classG (0.47/0.03) [0.22/0.01]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature8 < 0.62 : classG (4.04/0.26) [9.48/1.61]
|   |   |   |   |   |   feature8 >= 0.62 : classD (7.56/1.46) [3.58/0.53]
|   |   |   feature2 = classE : classG (0.67/0.08) [0.33/0.14]
|   |   |   feature2 = classF : classG (0/0) [0.65/0]
|   |   |   feature2 = classG : classG (1.73/0.2) [1.14/0.36]
feature5 = classE
|   predS = classA
|   |   feature7 < 0.35
|   |   |   feature10 < 0.52
|   |   |   |   feature7 < 0.28 : classB (41.52/2.83) [8.72/8.72]
|   |   |   |   feature7 >= 0.28 : classD (6.15/1.19) [1.55/1.53]
|   |   |   feature10 >= 0.52
|   |   |   |   feature7 < 0.28 : classD (19.31/1.24) [1.22/1.22]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature2 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (0.6/0.15) [0.04/0.02]
|   |   |   |   |   feature2 = classD : classD (10.16/0.79) [0.71/0.71]
|   |   |   |   |   feature2 = classE : classE (20.55/5.04) [17.12/1.43]
|   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   feature7 >= 0.35
|   |   |   feature10 < 0.72
|   |   |   |   feature7 < 0.45
|   |   |   |   |   prevPredS = classA : classG (12.66/2.47) [14.32/4.13]
|   |   |   |   |   prevPredS = classB : classA (2.76/0.18) [0.06/0.06]
|   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classA (2.12/0.14) [0.05/0.05]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature10 < 0.4 : classE (8.23/0.56) [7.85/0.18]
|   |   |   |   |   |   feature10 >= 0.4 : classA (2.17/0.14) [17.43/0.05]
|   |   |   |   |   prevPredS = classF : classE (16.67/1.33) [0.55/0.55]
|   |   |   |   |   prevPredS = classG : classD (2.17/0.15) [0.05/0.05]
|   |   |   |   feature7 >= 0.45 : classA (203.37/30.29) [131.58/66.95]
|   |   |   feature10 >= 0.72
|   |   |   |   feature7 < 0.72
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   feature10 < 0.9 : classA (12.72/3.5) [8.78/4.29]
|   |   |   |   |   |   |   feature10 >= 0.9 : classE (11.45/3.27) [13.21/5.54]
|   |   |   |   |   |   feature7 >= 0.68 : classC (21.33/3.26) [5.2/5.2]
|   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classC (2.48/0.46) [2.75/0.73]
|   |   |   |   |   prevPredS = classD : classA (0.28/0.05) [0.31/0.08]
|   |   |   |   |   prevPredS = classE : classE (42.69/16.46) [52.53/31.43]
|   |   |   |   |   prevPredS = classF : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classG : classG (9.92/1.84) [4.95/1.27]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature7 < 0.95
|   |   |   |   |   |   feature7 < 0.78 : classD (24.84/24.84) [96.94/5.8]
|   |   |   |   |   |   feature7 >= 0.78
|   |   |   |   |   |   |   feature11 < 0.82 : classA (15.91/1.03) [12.81/0.34]
|   |   |   |   |   |   |   feature11 >= 0.82
|   |   |   |   |   |   |   |   feature9 < 0.85 : classE (74.63/6.01) [2/2]
|   |   |   |   |   |   |   |   feature9 >= 0.85
|   |   |   |   |   |   |   |   |   feature2 = classA : classA (9.59/0.62) [1.66/0.21]
|   |   |   |   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classD : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   |   feature7 < 0.88
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.82 : classE (24.64/1.63) [0.54/0.54]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.82
|   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.9 : classA (3.37/0.22) [0.08/0.07]
|   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.9 : classE (16.48/1.14) [0.4/0.4]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.88 : classA (3.78/0.24) [0.11/0.08]
|   |   |   |   |   |   |   |   |   feature2 = classF : classA (0.07/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.95 : classA (36.76/2.37) [18.53/0.79]
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature7 < 0.35 : classB (10.37/0.67) [1/1]
|   |   |   feature7 >= 0.35 : classA (19.85/9.28) [11.31/3.07]
|   |   prevPredS = classB
|   |   |   feature7 < 0.4 : classE (24.6/1.58) [8.2/0.53]
|   |   |   feature7 >= 0.4 : classA (9.81/6.5) [113.31/3.44]
|   |   prevPredS = classC
|   |   |   feature7 < 0.45 : classE (8.2/0.53) [0.18/0.18]
|   |   |   feature7 >= 0.45 : classB (2.27/1.15) [0.64/0.25]
|   |   prevPredS = classD : classA (0/0) [0/0]
|   |   prevPredS = classE : classE (0/0) [110.36/41.74]
|   |   prevPredS = classF : classG (31.03/8.01) [2.62/2.62]
|   |   prevPredS = classG : classA (0/0) [0/0]
|   predS = classC
|   |   feature7 < 0.28 : classA (107.47/16.32) [30.79/30.79]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.55
|   |   |   |   feature7 < 0.52 : classD (97.31/40.82) [119.9/83.58]
|   |   |   |   feature7 >= 0.52 : classE (24.24/1.61) [4.13/1.09]
|   |   |   feature7 >= 0.55 : classA (72.52/43.72) [15.35/5.65]
|   predS = classD
|   |   feature7 < 0.52 : classE (263.39/175.3) [563.77/139.85]
|   |   feature7 >= 0.52
|   |   |   feature10 < 0.68
|   |   |   |   feature11 < 0.62
|   |   |   |   |   prevPredS = classA : classC (0.39/0.39) [8.76/0.53]
|   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classC (2.13/0.64) [4.54/3.04]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature7 < 0.9 : classD (228.06/16.41) [59.31/58.7]
|   |   |   |   |   |   feature7 >= 0.9 : classF (6.43/0.02) [1.64/0]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 < 0.52 : classD (16.63/1.07) [39.41/0.36]
|   |   |   |   |   |   feature9 >= 0.52 : classE (11.23/0.76) [3.67/0.43]
|   |   |   |   |   prevPredS = classF : classD (3.52/1.09) [1.35/0.08]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (8.21/0.53) [0.18/0.18]
|   |   |   |   |   |   feature2 = classE : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classF : classF (2.72/0) [0.7/0]
|   |   |   |   |   |   feature2 = classG : classG (1.67/0.11) [0.04/0.04]
|   |   |   |   feature11 >= 0.62
|   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classD : classD (5.78/0.61) [2.46/0.74]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   prevPredS = classA : classC (0.13/0.13) [2.88/0.18]
|   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classE (3.96/0.91) [1.56/0.58]
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature7 < 0.75 : classE (60/4.14) [13.18/6.32]
|   |   |   |   |   |   |   feature7 >= 0.75 : classF (2.18/0.07) [0.61/0.07]
|   |   |   |   |   |   prevPredS = classE : classE (23.99/1.58) [11.6/0.53]
|   |   |   |   |   |   prevPredS = classF : classD (0.53/0.03) [0.01/0.01]
|   |   |   |   |   |   prevPredS = classG : classF (1.44/0.51) [0.24/0]
|   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   feature10 >= 0.68
|   |   |   |   prevPredS = classA : classD (0.05/0) [0/0]
|   |   |   |   prevPredS = classB : classD (0/0) [1.52/0]
|   |   |   |   prevPredS = classC : classC (18.61/3.27) [8.07/0.4]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature7 < 0.55 : classE (98.34/6.34) [3.83/2.11]
|   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   feature2 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (6.38/0.41) [2.2/0.14]
|   |   |   |   |   |   feature2 = classE : classE (8.5/1.63) [4.26/0.83]
|   |   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   prevPredS = classE : classE (6.18/0.4) [4.73/1.85]
|   |   |   |   prevPredS = classF : classE (0/0) [0/0]
|   |   |   |   prevPredS = classG : classD (0/0) [2.02/0]
|   predS = classE
|   |   feature10 < 0.92
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.35
|   |   |   |   |   feature2 = classA : classG (22.14/1.77) [5.9/5.68]
|   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classA (73.35/4.73) [18.98/18.98]
|   |   |   |   |   feature2 = classF : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature7 < 0.6
|   |   |   |   |   |   feature7 < 0.45 : classE (19.29/1.82) [14.99/14.99]
|   |   |   |   |   |   feature7 >= 0.45 : classD (13.4/11.58) [15.61/5.42]
|   |   |   |   |   feature7 >= 0.6
|   |   |   |   |   |   feature7 < 0.72 : classE (19.2/4.65) [5.63/4.77]
|   |   |   |   |   |   feature7 >= 0.72 : classE (7.39/0.48) [4.18/1.84]
|   |   |   prevPredS = classB : classA (2.4/2.35) [2.29/0.24]
|   |   |   prevPredS = classC
|   |   |   |   feature2 = classA : classC (0/0) [0/0]
|   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   feature2 = classC : classC (18.2/1.84) [0.75/0.75]
|   |   |   |   feature2 = classD : classC (0/0) [0/0]
|   |   |   |   feature2 = classE : classE (10.84/1.65) [7.34/0.42]
|   |   |   |   feature2 = classF : classF (1.81/0.17) [1.6/0.04]
|   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   feature8 < 0.56 : classD (31.96/12.29) [3.72/1.52]
|   |   |   |   |   |   feature8 >= 0.56
|   |   |   |   |   |   |   feature7 < 0.48 : classE (7.16/2.78) [5.39/2.77]
|   |   |   |   |   |   |   feature7 >= 0.48 : classE (19.61/1.26) [0.98/0.42]
|   |   |   |   |   feature10 >= 0.55
|   |   |   |   |   |   feature7 < 0.52 : classD (35.22/13.8) [5.98/4.46]
|   |   |   |   |   |   feature7 >= 0.52 : classD (94.12/9.3) [3.73/2.87]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature10 < 0.68 : classE (56.59/8.82) [15.96/1.22]
|   |   |   |   |   feature10 >= 0.68 : classD (3.24/1.53) [1.78/0.92]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature6 = classC : classA (4.6/1.55) [0.53/0.53]
|   |   |   |   |   |   feature6 = classD
|   |   |   |   |   |   |   feature7 < 0.35 : classE (8.86/0.57) [1.54/1.22]
|   |   |   |   |   |   |   feature7 >= 0.35 : classD (9.87/1.41) [82.01/10.34]
|   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   feature8 < 0.74 : classE (28.25/12) [14.79/2.16]
|   |   |   |   |   |   |   feature8 >= 0.74
|   |   |   |   |   |   |   |   feature10 < 0.75
|   |   |   |   |   |   |   |   |   feature9 < 0.98 : classA (18.75/3.41) [15.32/7.65]
|   |   |   |   |   |   |   |   |   feature9 >= 0.98 : classE (4.92/0.48) [0.44/0.38]
|   |   |   |   |   |   |   |   feature10 >= 0.75 : classE (8.01/2) [5.1/0.61]
|   |   |   |   |   |   feature6 = classF : classF (11.49/3.13) [1.32/1.08]
|   |   |   |   |   |   feature6 = classG : classG (4.6/1.55) [0.53/0.28]
|   |   |   |   |   feature7 >= 0.45 : classC (70.91/21.94) [19.48/19.48]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   feature8 < 0.46 : classE (49.21/23.24) [23.17/12.94]
|   |   |   |   |   |   feature8 >= 0.46
|   |   |   |   |   |   |   feature9 < 0.68
|   |   |   |   |   |   |   |   feature7 < 0.88
|   |   |   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.54 : classD (35.59/4.73) [1.56/1.39]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classD : classD (12.76/4.28) [1.96/1.79]
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classE
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.65 : classD (3.91/0.58) [15.52/0.18]
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.65 : classE (2.46/0.16) [0.97/0.05]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.52 : classE (11.35/0.73) [34.02/15.59]
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classF : classE (0/0) [1.69/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature3 = classG : classE (0.35/0.09) [0.04/0.01]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classD (47.06/17.9) [1.87/1.01]
|   |   |   |   |   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   |   |   |   |   feature10 < 0.77
|   |   |   |   |   |   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature2 = classD : classD (73.35/4.73) [1.58/1.58]
|   |   |   |   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.62 : classE (5.66/0.36) [2.71/0.12]
|   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.62
|   |   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.78 : classD (9.83/2.16) [7.88/0.21]
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.78 : classD (63.49/4.09) [1.37/1.37]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature7 < 0.85 : classG (11.61/11.61) [19.46/4.12]
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.85 : classD (75.36/6.74) [3.98/3.98]
|   |   |   |   |   |   |   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.77 : classE (5.25/0.34) [17.31/8.64]
|   |   |   |   |   |   |   |   feature7 >= 0.88 : classE (11.43/0.74) [6.79/0.25]
|   |   |   |   |   |   |   feature9 >= 0.68
|   |   |   |   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   |   |   |   feature10 < 0.45 : classE (4.35/0.4) [2.91/0.26]
|   |   |   |   |   |   |   |   |   feature10 >= 0.45 : classD (34.04/7.62) [11.27/3.6]
|   |   |   |   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   |   |   |   |   feature8 < 0.7
|   |   |   |   |   |   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature3 = classD : classD (2.21/0.56) [0.56/0.22]
|   |   |   |   |   |   |   |   |   |   |   feature3 = classE : classE (31.53/4.66) [28.95/8.35]
|   |   |   |   |   |   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.7
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.72 : classE (4.32/0.4) [1.55/0.09]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.72
|   |   |   |   |   |   |   |   |   |   |   |   feature7 < 0.72 : classD (12.54/1.49) [2.2/0.68]
|   |   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.72 : classE (2.82/0.18) [2.29/0.06]
|   |   |   |   |   |   |   |   |   feature8 >= 0.74 : classE (28.86/2.65) [10.4/0.62]
|   |   |   |   |   feature8 >= 0.82
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classA (9.26/1.33) [0.51/0.51]
|   |   |   |   |   |   feature3 = classD : classD (18.5/3.16) [69.81/1.19]
|   |   |   |   |   |   feature3 = classE : classE (142.04/13.04) [66.61/3.05]
|   |   |   |   |   |   feature3 = classF : classE (0.21/0.02) [0.18/0]
|   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   prevPredS = classF
|   |   |   |   feature10 < 0.68
|   |   |   |   |   feature10 < 0.38
|   |   |   |   |   |   feature11 < 0.58 : classD (5.15/2.14) [4.79/1.83]
|   |   |   |   |   |   feature11 >= 0.58 : classE (3.87/0.59) [1.54/0.15]
|   |   |   |   |   feature10 >= 0.38 : classE (15.94/2.43) [3.03/0.62]
|   |   |   |   feature10 >= 0.68 : classF (8.21/1.62) [6.4/0.16]
|   |   |   prevPredS = classG
|   |   |   |   feature10 < 0.55 : classD (4.85/3.28) [43.14/4.45]
|   |   |   |   feature10 >= 0.55 : classG (6.41/1.35) [4.15/0.56]
|   |   feature10 >= 0.92 : classE (277.26/187.25) [92.62/49.43]
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature7 < 0.52
|   |   |   |   feature11 < 0.63 : classG (28.65/11.99) [24.55/15.57]
|   |   |   |   feature11 >= 0.63
|   |   |   |   |   feature7 < 0.28 : classG (2.09/0.13) [2.25/0.29]
|   |   |   |   |   feature7 >= 0.28 : classE (40.87/7) [30.72/16.94]
|   |   |   feature7 >= 0.52
|   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   feature2 = classC : classA (22.53/3.02) [4.73/4.73]
|   |   |   |   feature2 = classD : classA (0/0) [0/0]
|   |   |   |   feature2 = classE : classF (1.5/0.37) [0.32/0.28]
|   |   |   |   feature2 = classF : classE (4.47/1.43) [0.94/0.94]
|   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   prevPredS = classB : classE (4.53/2.51) [0.76/0.76]
|   |   prevPredS = classC : classF (1.02/0.14) [0.88/0.06]
|   |   prevPredS = classD
|   |   |   feature2 = classA : classE (0/0) [0/0]
|   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   feature2 = classD
|   |   |   |   feature7 < 0.82 : classF (12.82/8.69) [5.94/2.95]
|   |   |   |   feature7 >= 0.82 : classE (41.35/2.66) [39.58/0.89]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.42
|   |   |   |   |   feature7 < 0.35 : classA (4.46/2.09) [70.52/1.9]
|   |   |   |   |   feature7 >= 0.35 : classE (42.92/4.23) [1.98/1.98]
|   |   |   |   feature7 >= 0.42 : classF (7.98/4.69) [3.96/1.02]
|   |   |   feature2 = classF : classA (10.51/2.05) [1.32/1.29]
|   |   |   feature2 = classG : classD (10.52/2.65) [9.01/1.33]
|   |   prevPredS = classE
|   |   |   feature2 = classA : classE (0/0) [0/0]
|   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   feature2 = classD : classD (11.91/4.02) [0.95/0.95]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   feature7 < 0.32 : classE (23.41/5) [4/4]
|   |   |   |   |   |   feature7 >= 0.32 : classA (5.84/1.9) [10.84/3.17]
|   |   |   |   |   feature7 >= 0.35 : classE (72.26/10.32) [53.1/34.83]
|   |   |   |   feature7 >= 0.55 : classA (5.85/2.36) [1.02/1.02]
|   |   |   feature2 = classF
|   |   |   |   feature7 < 0.38 : classF (6.1/0.98) [3.64/0.46]
|   |   |   |   feature7 >= 0.38 : classE (8.09/1.6) [2.06/0.54]
|   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   prevPredS = classF
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.42 : classA (31.02/9.61) [7.7/7.1]
|   |   |   |   feature7 >= 0.42
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature7 < 0.48 : classE (4.41/1.17) [4.22/0.12]
|   |   |   |   |   |   feature7 >= 0.48 : classD (77.57/5.45) [2.71/2.07]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.55 : classG (3.63/0.6) [3.82/0.78]
|   |   |   |   |   |   feature7 >= 0.55 : classA (6.9/1.52) [0.96/0.96]
|   |   |   feature7 >= 0.58
|   |   |   |   feature10 < 0.55 : classG (30.97/10.59) [1.95/1.95]
|   |   |   |   feature10 >= 0.55
|   |   |   |   |   feature8 < 0.54 : classF (2.29/0) [0.26/0]
|   |   |   |   |   feature8 >= 0.54 : classE (8.7/1.03) [0.43/0.43]
|   |   prevPredS = classG
|   |   |   feature10 < 0.48 : classE (10.47/2.28) [0.83/0.83]
|   |   |   feature10 >= 0.48 : classG (9.77/5.24) [16.92/1.08]
|   predS = classG
|   |   prevPredS = classA
|   |   |   feature10 < 0.73 : classE (5.86/2.81) [24.23/14.04]
|   |   |   feature10 >= 0.73 : classA (4.68/4.68) [10/2.33]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC : classG (0.05/0.01) [0/0]
|   |   prevPredS = classD : classE (3.03/1.32) [0.2/0.2]
|   |   prevPredS = classE
|   |   |   feature8 < 0.54
|   |   |   |   feature7 < 0.55 : classA (63.97/9.94) [6.11/4.74]
|   |   |   |   feature7 >= 0.55 : classG (7.13/0.46) [1.51/0.15]
|   |   |   feature8 >= 0.54
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   feature3 = classD
|   |   |   |   |   feature7 < 0.52 : classD (9.13/1.45) [0.97/0.97]
|   |   |   |   |   feature7 >= 0.52 : classG (2.49/0.16) [2.71/0.05]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature10 < 0.38 : classG (2.7/0.28) [0.35/0.08]
|   |   |   |   |   feature10 >= 0.38
|   |   |   |   |   |   feature7 < 0.62 : classE (17.08/2.11) [10.86/1.55]
|   |   |   |   |   |   feature7 >= 0.62 : classE (2.1/0.58) [0.19/0.19]
|   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   prevPredS = classF
|   |   |   feature8 < 0.6 : classE (24.58/8.38) [11.15/2.62]
|   |   |   feature8 >= 0.6 : classF (19.23/1.88) [9.29/8.69]
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.7 : classG (2.62/1.08) [1.27/0.29]
|   |   |   |   feature7 >= 0.7 : classA (20.5/2.43) [0.92/0.92]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   feature2 = classD : classG (10.16/1.06) [0.94/0.32]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.48 : classE (3.47/0.43) [1.81/0.29]
|   |   |   |   feature7 >= 0.48 : classG (3.16/0.47) [1.53/0.13]
|   |   |   feature2 = classF : classD (0/0) [7.67/0]
|   |   |   feature2 = classG : classG (2.13/0.22) [1.86/0.07]
feature5 = classF
|   predS = classA
|   |   feature7 < 0.68
|   |   |   feature2 = classA
|   |   |   |   feature10 < 0.85 : classD (9.28/5.82) [13.26/6.19]
|   |   |   |   feature10 >= 0.85 : classF (31.04/5) [35.33/3.47]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classC (0.27/0.09) [0.07/0.05]
|   |   |   feature2 = classD : classF (0/0) [0/0]
|   |   |   feature2 = classE : classA (6.55/2.08) [2.78/1.53]
|   |   |   feature2 = classF : classA (54.1/31.79) [68.51/22.69]
|   |   |   feature2 = classG
|   |   |   |   feature7 < 0.42 : classD (9.61/0.72) [8.15/0.48]
|   |   |   |   feature7 >= 0.42 : classG (2.02/1.12) [2.5/0.69]
|   |   feature7 >= 0.68
|   |   |   feature7 < 0.72
|   |   |   |   feature10 < 0.8 : classA (2.98/0.19) [2.87/2.01]
|   |   |   |   feature10 >= 0.8 : classC (9.54/1.68) [6.47/5.68]
|   |   |   feature7 >= 0.72
|   |   |   |   feature10 < 0.88 : classA (43.85/2.83) [55.94/38.03]
|   |   |   |   feature10 >= 0.88
|   |   |   |   |   feature10 < 0.92 : classA (2.09/0.82) [0.56/0.39]
|   |   |   |   |   feature10 >= 0.92
|   |   |   |   |   |   feature8 < 0.66 : classA (18.48/1.19) [3.73/0.4]
|   |   |   |   |   |   feature8 >= 0.66 : classA (2.08/0.64) [2.36/0.21]
|   predS = classB
|   |   feature7 < 0.68 : classE (12.08/2.04) [9.38/1.71]
|   |   feature7 >= 0.68
|   |   |   feature7 < 0.98 : classA (4.38/4.38) [8.68/1.61]
|   |   |   feature7 >= 0.98 : classA (6.81/2.83) [36.79/1.13]
|   predS = classC
|   |   feature7 < 0.28 : classA (54.51/18.85) [9.5/9.5]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.52
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.35 : classD (9.37/0.66) [0.62/0.62]
|   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature7 < 0.38 : classG (3.1/0.73) [0.96/0.17]
|   |   |   |   |   |   |   |   feature7 >= 0.38 : classF (4.79/0.53) [0.79/0.68]
|   |   |   |   |   |   |   feature7 >= 0.45 : classD (2.85/0.18) [0.15/0.15]
|   |   |   |   |   prevPredS = classB : classC (0/0) [0.79/0]
|   |   |   |   |   prevPredS = classC : classD (0/0) [14.14/0]
|   |   |   |   |   prevPredS = classD : classD (0.66/0.08) [0.04/0.04]
|   |   |   |   |   prevPredS = classE : classD (7.77/0.93) [0.42/0.42]
|   |   |   |   |   prevPredS = classF : classC (1.54/0.75) [0.08/0.04]
|   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature7 < 0.55 : classE (7.56/0.49) [0.32/0.32]
|   |   |   |   |   |   feature7 >= 0.55 : classC (2.45/0.95) [0.11/0.05]
|   |   |   |   |   feature7 >= 0.58 : classF (5.83/2.37) [2.82/0.13]
|   |   |   feature7 >= 0.72
|   |   |   |   feature7 < 0.85 : classB (10.4/2.43) [6.15/6.15]
|   |   |   |   feature7 >= 0.85 : classC (2.5/0.95) [0.63/0.05]
|   predS = classD
|   |   prevPredS = classA : classC (0.27/0.27) [4.8/0.42]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC : classE (3.54/3.47) [3.06/1.41]
|   |   prevPredS = classD
|   |   |   feature10 < 0.68
|   |   |   |   feature7 < 0.88 : classG (5.24/4.59) [9.58/1.61]
|   |   |   |   feature7 >= 0.88 : classF (3.57/0.17) [1.04/0.17]
|   |   |   feature10 >= 0.68
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.45 : classE (2.88/0.19) [1.9/0.06]
|   |   |   |   |   feature7 >= 0.45 : classF (8.13/3.69) [3.13/0.02]
|   |   |   |   feature7 >= 0.52 : classE (38.98/3.32) [1.3/1.3]
|   |   prevPredS = classE
|   |   |   feature7 < 0.45 : classG (17.54/3.4) [2.65/2.65]
|   |   |   feature7 >= 0.45 : classF (17.91/9.07) [11.85/1.54]
|   |   prevPredS = classF
|   |   |   feature7 < 0.42
|   |   |   |   feature7 < 0.37 : classE (4.18/2.16) [3.31/1.29]
|   |   |   |   feature7 >= 0.37
|   |   |   |   |   feature10 < 0.75 : classF (2.78/0) [1.53/0]
|   |   |   |   |   feature10 >= 0.75 : classA (73.35/4.73) [70.2/1.58]
|   |   |   feature7 >= 0.42 : classF (23.17/8.48) [10.82/0.01]
|   |   prevPredS = classG : classG (2.12/0.34) [1.79/1]
|   predS = classE
|   |   feature2 = classA
|   |   |   feature7 < 0.28 : classG (8.52/0.55) [0.37/0.37]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.48 : classC (4.25/1.08) [1.4/1.31]
|   |   |   |   feature7 >= 0.48 : classA (2.75/1.49) [5.28/1.23]
|   |   feature2 = classB : classF (0/0) [0/0]
|   |   feature2 = classC : classF (1.76/0.84) [0.33/0.27]
|   |   feature2 = classD : classE (0.1/0.04) [0.04/0.02]
|   |   feature2 = classE
|   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   feature3 = classC : classA (16.89/7.85) [11.76/3.33]
|   |   |   feature3 = classD : classD (5.24/2.54) [2.13/0.84]
|   |   |   feature3 = classE
|   |   |   |   feature7 < 0.45 : classF (19.19/10.34) [7.3/5.36]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.48 : classC (10.57/2.25) [2.29/2.06]
|   |   |   |   |   feature7 >= 0.48 : classE (11.03/4.57) [4.36/2.33]
|   |   |   feature3 = classF
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45 : classF (2.43/0.75) [1.51/1.46]
|   |   |   |   |   feature7 >= 0.45 : classC (4.34/0.92) [0.94/0.85]
|   |   |   |   feature7 >= 0.48 : classE (9.99/8.32) [10.8/2.71]
|   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   feature2 = classF
|   |   |   feature7 < 0.52 : classF (41.69/22.91) [22.73/13.01]
|   |   |   feature7 >= 0.52
|   |   |   |   feature7 < 0.68
|   |   |   |   |   feature10 < 0.38 : classD (3.09/3.09) [8.93/1.25]
|   |   |   |   |   feature10 >= 0.38 : classF (17.58/0.45) [7.62/0.8]
|   |   |   |   feature7 >= 0.68
|   |   |   |   |   feature7 < 0.72 : classA (9.57/3.51) [1.09/1.09]
|   |   |   |   |   feature7 >= 0.72 : classE (2.92/1.21) [15.97/0.3]
|   |   feature2 = classG : classG (2.8/1.26) [0.52/0.45]
|   predS = classF
|   |   feature7 < 0.52
|   |   |   feature10 < 0.82 : classD (64.91/64.36) [106.94/38.32]
|   |   |   feature10 >= 0.82
|   |   |   |   feature7 < 0.28 : classG (6.51/0.42) [6.23/0.14]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature9 < 0.92
|   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   feature7 < 0.35 : classA (15.78/1.02) [8.17/0.49]
|   |   |   |   |   |   |   feature7 >= 0.35 : classB (2.34/2.34) [12.82/5.84]
|   |   |   |   |   |   feature7 >= 0.48 : classA (373.99/27.88) [8.43/8.43]
|   |   |   |   |   feature9 >= 0.92 : classF (5.28/0.14) [2.33/0.16]
|   |   feature7 >= 0.52
|   |   |   feature2 = classA : classF (5.74/0.3) [0.81/0.18]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   feature2 = classD : classD (0.1/0.1) [46.63/0.27]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.83 : classF (8.23/1.27) [4.23/0.41]
|   |   |   |   feature7 >= 0.83 : classE (16.4/1.06) [8.38/0.7]
|   |   |   feature2 = classF : classF (306.75/15.81) [153.32/9.53]
|   |   |   feature2 = classG : classG (78.01/6.84) [4.27/3.52]
|   predS = classG
|   |   feature2 = classA
|   |   |   feature7 < 0.58 : classG (2.14/1.24) [2.52/1.65]
|   |   |   feature7 >= 0.58 : classA (17.28/2.54) [2.77/2.77]
|   |   feature2 = classB : classF (0/0) [0/0]
|   |   feature2 = classC : classF (0/0) [0/0]
|   |   feature2 = classD : classG (4.13/0.59) [0.8/0.55]
|   |   feature2 = classE : classE (0.44/0.1) [0.09/0.06]
|   |   feature2 = classF : classF (32.18/9.35) [15.05/5.1]
|   |   feature2 = classG
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.68 : classG (2.33/1.21) [2.3/1.32]
|   |   |   |   feature7 >= 0.68 : classF (8.23/0.02) [23.39/0.18]
|   |   |   feature7 >= 0.72 : classG (2.74/0.18) [1.58/0.12]
feature5 = classG
|   predS = classA
|   |   prevPredS = classA
|   |   |   feature7 < 0.58
|   |   |   |   feature10 < 0.52 : classD (2.75/2.49) [6.91/1.23]
|   |   |   |   feature10 >= 0.52 : classG (8.88/2.69) [5.01/1.18]
|   |   |   feature7 >= 0.58 : classD (24.55/23.42) [38.61/9.95]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC : classC (1.1/0.33) [0.96/0.32]
|   |   prevPredS = classD : classA (2.29/0.36) [2/0.39]
|   |   prevPredS = classE : classD (7.59/1.44) [2.16/2.16]
|   |   prevPredS = classF : classA (4.98/0.79) [4.1/4.05]
|   |   prevPredS = classG
|   |   |   feature10 < 0.67 : classG (34.87/8.53) [6.91/3.65]
|   |   |   feature10 >= 0.67 : classA (15.55/7.37) [23.15/6.01]
|   predS = classB : classA (11.59/8.39) [37.34/2.37]
|   predS = classC
|   |   feature7 < 0.28 : classA (30.64/1.97) [14.75/14.75]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.6
|   |   |   |   feature7 < 0.52
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.35 : classD (7.16/0.51) [0.49/0.49]
|   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature7 < 0.38 : classG (2.45/0.54) [0.78/0.14]
|   |   |   |   |   |   |   |   feature7 >= 0.38 : classF (3.81/0.39) [0.6/0.52]
|   |   |   |   |   |   |   feature7 >= 0.45 : classD (2.08/0.13) [0.12/0.12]
|   |   |   |   |   prevPredS = classB : classC (0/0) [0.64/0]
|   |   |   |   |   prevPredS = classC : classD (2.85/0.33) [11.51/0.15]
|   |   |   |   |   prevPredS = classD : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classE : classD (5.99/0.7) [0.31/0.31]
|   |   |   |   |   prevPredS = classF : classC (1.19/0.55) [0.06/0.03]
|   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   feature7 >= 0.52 : classE (8.05/1.73) [0.35/0.35]
|   |   |   feature7 >= 0.6
|   |   |   |   feature7 < 0.65 : classG (25.99/2.95) [1.29/1.29]
|   |   |   |   feature7 >= 0.65
|   |   |   |   |   feature7 < 0.85 : classB (9.04/2.63) [1.31/1.31]
|   |   |   |   |   feature7 >= 0.85 : classC (2.01/0.77) [0.51/0.04]
|   predS = classD
|   |   feature7 < 0.32 : classA (82.9/5.51) [4.25/4.24]
|   |   feature7 >= 0.32
|   |   |   feature10 < 0.68
|   |   |   |   prevPredS = classA : classC (0.22/0.22) [2.9/0.2]
|   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   prevPredS = classC : classG (3.78/1.7) [2.37/2.37]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature7 < 0.45 : classG (10.39/2.71) [10.27/2.59]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   feature7 < 0.48 : classF (2.95/0.85) [1.5/0]
|   |   |   |   |   |   |   feature7 >= 0.48 : classG (2.17/0.36) [8.2/0.07]
|   |   |   |   |   |   feature7 >= 0.58 : classF (3.28/0.53) [2.27/1.57]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.38 : classG (12.65/1.29) [0.75/0.75]
|   |   |   |   |   feature7 >= 0.38 : classF (5.97/3.69) [2.84/1.29]
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 < 0.48 : classF (3.03/0.64) [1.63/0.23]
|   |   |   |   |   feature7 >= 0.48 : classG (6.06/1.03) [0.13/0.13]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 < 0.48 : classG (10.89/4.47) [6.46/3.25]
|   |   |   |   |   feature7 >= 0.48 : classG (18.74/1.22) [4.97/4.97]
|   |   |   feature10 >= 0.68
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.35 : classE (2.29/0.95) [1.85/0.69]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature7 < 0.48 : classF (8.1/2.92) [4.35/0.68]
|   |   |   |   |   |   feature7 >= 0.48 : classG (3.04/0.2) [0.26/0.09]
|   |   |   |   feature7 >= 0.52 : classE (32.35/3.69) [1.62/1.62]
|   predS = classE : classG (172.1/109.48) [85.55/43.1]
|   predS = classF
|   |   feature7 < 0.87
|   |   |   prevPredS = classA : classE (12.21/6.53) [12.45/9.25]
|   |   |   prevPredS = classB : classE (1.2/0.56) [0.34/0.34]
|   |   |   prevPredS = classC : classF (0.48/0.17) [0.34/0.07]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.35 : classG (2.54/1) [0.91/0.05]
|   |   |   |   feature7 >= 0.35 : classF (3.47/1.1) [2.39/0.35]
|   |   |   prevPredS = classE : classE (11.44/5.76) [2.14/2.14]
|   |   |   prevPredS = classF : classG (20.35/7.97) [9.69/1.18]
|   |   |   prevPredS = classG : classG (14.18/5.89) [5.81/0.83]
|   |   feature7 >= 0.87 : classF (43.53/0.52) [7.99/0.94]
|   predS = classG : classG (628.81/226.32) [715.6/515.55]

Size of the tree : 1310

Weight: 1.27


REPTree
============

predS = classA
|   feature7 < 0.68
|   |   prevPredS = classA
|   |   |   feature10 < 0.62
|   |   |   |   feature10 < 0.48
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature10 < 0.4 : classA (8.77/1.32) [7.8/0.38]
|   |   |   |   |   |   feature10 >= 0.4 : classD (258.17/35.75) [19.25/19.25]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.58 : classB (49.99/6.57) [4.13/4.13]
|   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   feature7 < 0.62 : classG (33.56/14.95) [39.24/2.02]
|   |   |   |   |   |   |   feature7 >= 0.62 : classD (24.06/5.44) [3.19/3.19]
|   |   |   |   feature10 >= 0.48
|   |   |   |   |   feature7 < 0.53
|   |   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature7 < 0.38 : classA (10.35/4.91) [5.63/0.45]
|   |   |   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   |   |   feature2 = classA : classG (30.49/9.11) [22.77/1.39]
|   |   |   |   |   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classC : classG (1.63/0.49) [1.22/0.07]
|   |   |   |   |   |   |   |   |   feature2 = classD : classG (3.26/0.97) [2.43/0.15]
|   |   |   |   |   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classG : classG (0/0) [0/0]
|   |   |   |   |   |   |   feature7 >= 0.45 : classA (40.24/16.92) [5.29/1.76]
|   |   |   |   |   |   feature10 >= 0.58 : classG (41.51/6.65) [20.41/2.98]
|   |   |   |   |   feature7 >= 0.53
|   |   |   |   |   |   feature7 < 0.58 : classB (13.97/4.39) [4.51/4.51]
|   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   |   |   feature7 < 0.62 : classG (12.84/3.26) [19.73/0.56]
|   |   |   |   |   |   |   |   feature7 >= 0.62 : classD (18.26/8.67) [18.6/1.17]
|   |   |   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   |   |   |   feature10 < 0.55 : classC (2.64/0.35) [0.12/0.12]
|   |   |   |   |   |   |   |   |   feature10 >= 0.55 : classG (5.67/0.75) [0.65/0.65]
|   |   |   |   |   |   |   |   feature10 >= 0.58 : classB (11.97/2.14) [5.47/0.55]
|   |   |   feature10 >= 0.62
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature11 < 0.73 : classE (34.78/7.35) [7.63/2.24]
|   |   |   |   |   |   feature11 >= 0.73
|   |   |   |   |   |   |   feature5 = classA : classA (114.51/32) [18.66/12.38]
|   |   |   |   |   |   |   feature5 = classB : classA (4.27/0.75) [0.27/0.19]
|   |   |   |   |   |   |   feature5 = classC : classC (0.01/0.01) [0.01/0]
|   |   |   |   |   |   |   feature5 = classD : classA (2.42/0.43) [1.13/0.11]
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature10 < 0.9 : classA (2.17/0.38) [1.23/0.09]
|   |   |   |   |   |   |   |   feature10 >= 0.9 : classE (9.98/1.9) [0.53/0.53]
|   |   |   |   |   |   |   feature5 = classF : classA (4.82/0.84) [5.72/3.67]
|   |   |   |   |   |   |   feature5 = classG : classG (0.68/0.13) [0.62/0.07]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature10 < 0.92 : classA (25.41/13.49) [18.28/5.73]
|   |   |   |   |   |   feature10 >= 0.92 : classF (127.08/23.57) [49.92/10.93]
|   |   |   |   feature7 >= 0.58
|   |   |   |   |   feature7 < 0.62 : classG (36.65/9.81) [89.54/34.89]
|   |   |   |   |   feature7 >= 0.62 : classE (177.3/81.02) [83.77/31.38]
|   |   prevPredS = classB : classA (67.97/34.85) [56.77/19.56]
|   |   prevPredS = classC
|   |   |   feature10 < 0.95 : classA (18.25/7.89) [4.24/3.17]
|   |   |   feature10 >= 0.95 : classC (22.11/6.73) [8.51/3.28]
|   |   prevPredS = classD
|   |   |   feature2 = classA : classG (26.76/8) [4.6/1.94]
|   |   |   feature2 = classB : classA (0/0) [0.98/0]
|   |   |   feature2 = classC : classA (0.01/0) [0/0]
|   |   |   feature2 = classD : classA (17.86/16.19) [29.21/8.51]
|   |   |   feature2 = classE : classA (4.55/1.34) [2.67/0.65]
|   |   |   feature2 = classF : classA (0/0) [0/0]
|   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   prevPredS = classE
|   |   |   feature7 < 0.28 : classD (28.56/28.56) [45.24/1.25]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature2 = classA : classA (0.21/0.03) [0.01/0.01]
|   |   |   |   |   feature2 = classB : classB (5.85/0.94) [5.2/0.28]
|   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (8.34/2.26) [0.4/0.4]
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature7 < 0.38 : classE (26.47/6.36) [1.47/1.47]
|   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   |   |   feature10 < 0.73
|   |   |   |   |   |   |   |   |   feature10 < 0.35 : classE (5.67/0.75) [5.18/0.26]
|   |   |   |   |   |   |   |   |   feature10 >= 0.35 : classA (32.95/4.31) [21.21/1.44]
|   |   |   |   |   |   |   |   feature10 >= 0.73
|   |   |   |   |   |   |   |   |   feature7 < 0.48 : classE (11.37/1.53) [5.46/0.54]
|   |   |   |   |   |   |   |   |   feature7 >= 0.48 : classE (9.03/1.18) [0.39/0.39]
|   |   |   |   |   |   |   feature10 >= 0.92 : classA (20.13/2.63) [0.92/0.88]
|   |   |   |   |   feature2 = classF : classA (0.39/0.06) [0.13/0.02]
|   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature7 < 0.58 : classB (10.99/1.83) [1.25/1.25]
|   |   |   |   |   |   feature7 >= 0.58 : classG (10.68/1.52) [18.78/0.47]
|   |   |   |   |   feature7 >= 0.62 : classA (13.65/10.95) [20.33/0.6]
|   |   prevPredS = classF
|   |   |   feature10 < 0.35
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature7 < 0.55 : classA (8.68/3.12) [1.79/0.38]
|   |   |   |   |   feature7 >= 0.55 : classC (109.32/21.41) [4.77/4.77]
|   |   |   |   feature7 >= 0.58
|   |   |   |   |   feature7 < 0.62 : classG (10.46/3.41) [14.54/0.46]
|   |   |   |   |   feature7 >= 0.62 : classD (13.26/6.22) [0.89/0.89]
|   |   |   feature10 >= 0.35
|   |   |   |   feature7 < 0.42 : classA (33.97/8.13) [17.6/12.48]
|   |   |   |   feature7 >= 0.42
|   |   |   |   |   feature5 = classA : classA (4.64/1.64) [1.88/0.89]
|   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classA (0.82/0.29) [0.16/0.16]
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature7 < 0.52 : classA (4.01/0.53) [3.66/0.18]
|   |   |   |   |   |   feature7 >= 0.52 : classD (9.72/3.78) [6.14/6.14]
|   |   |   |   |   feature5 = classE : classA (2.7/1.6) [0.64/0.52]
|   |   |   |   |   feature5 = classF : classF (45.09/10.35) [13.95/7.37]
|   |   |   |   |   feature5 = classG : classA (0.86/0.31) [1.14/0.17]
|   |   prevPredS = classG
|   |   |   feature7 < 0.42
|   |   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   feature3 = classD : classD (7.24/1.01) [7.53/2.61]
|   |   |   |   feature3 = classE : classF (0/0) [0/0]
|   |   |   |   feature3 = classF
|   |   |   |   |   feature7 < 0.35 : classF (12.04/0.71) [9.89/5.47]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature10 < 0.53 : classA (2.25/0.29) [1.07/0.1]
|   |   |   |   |   |   feature10 >= 0.53 : classD (2.94/0.38) [0.13/0.13]
|   |   |   |   feature3 = classG : classA (8.71/3.69) [6.07/3.31]
|   |   |   feature7 >= 0.42 : classG (42.82/21.56) [32.77/4.57]
|   feature7 >= 0.68
|   |   feature6 = classA : classA (137.7/39.53) [73.85/26.97]
|   |   feature6 = classB : classA (56.52/33.65) [28.52/11.07]
|   |   feature6 = classC : classA (41.68/12.5) [14.36/8.45]
|   |   feature6 = classD
|   |   |   feature7 < 0.72 : classA (77.65/44.62) [30.26/3.41]
|   |   |   feature7 >= 0.72 : classA (154.72/22.28) [125.06/66.97]
|   |   feature6 = classE : classA (671.49/318.64) [337.49/141.33]
|   |   feature6 = classF
|   |   |   feature7 < 0.72
|   |   |   |   prevPredS = classA : classE (38.98/17.14) [2.27/2.27]
|   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   prevPredS = classC : classE (5.15/2.27) [0.25/0.25]
|   |   |   |   prevPredS = classD : classE (0/0) [0/0]
|   |   |   |   prevPredS = classE : classE (0/0) [0/0]
|   |   |   |   prevPredS = classF : classE (0.58/0.25) [0.03/0.03]
|   |   |   |   prevPredS = classG : classE (0/0) [0/0]
|   |   |   feature7 >= 0.72
|   |   |   |   feature10 < 0.88
|   |   |   |   |   feature10 < 0.55 : classA (14.99/4.29) [3.95/0.65]
|   |   |   |   |   feature10 >= 0.55 : classA (42.09/5.51) [52.23/45.29]
|   |   |   |   feature10 >= 0.88
|   |   |   |   |   feature7 < 0.88
|   |   |   |   |   |   feature9 < 0.78 : classF (101.62/0.42) [4.65/0.22]
|   |   |   |   |   |   feature9 >= 0.78
|   |   |   |   |   |   |   feature11 < 0.92 : classA (2.57/0.34) [0.67/0.11]
|   |   |   |   |   |   |   feature11 >= 0.92 : classF (13.38/1.62) [9.84/1.57]
|   |   |   |   |   feature7 >= 0.88 : classA (14.82/1.94) [7.15/0.65]
|   |   feature6 = classG
|   |   |   feature7 < 0.72
|   |   |   |   feature10 < 0.45 : classA (12.31/6.74) [3.5/0.54]
|   |   |   |   feature10 >= 0.45 : classE (9.16/5.34) [0.59/0.59]
|   |   |   feature7 >= 0.72
|   |   |   |   feature11 < 0.95 : classA (26.39/3.78) [21.87/6.55]
|   |   |   |   feature11 >= 0.95
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.75 : classG (5.52/2.06) [7.23/0.31]
|   |   |   |   |   |   feature7 >= 0.75 : classA (17.11/2.57) [15.01/8.08]
|   |   |   |   |   prevPredS = classB : classA (0.04/0.01) [0/0]
|   |   |   |   |   prevPredS = classC : classA (0.01/0) [0.02/0]
|   |   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   |   prevPredS = classE : classA (0.08/0.01) [0/0]
|   |   |   |   |   prevPredS = classF : classA (0.04/0.01) [0.01/0]
|   |   |   |   |   prevPredS = classG : classG (13.05/3.02) [6.18/5.19]
predS = classB
|   feature10 < 0.42
|   |   feature7 < 0.45
|   |   |   feature2 = classA : classA (0.11/0.05) [0.03/0.02]
|   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   feature2 = classC : classA (4.22/2.27) [3.96/2.01]
|   |   |   feature2 = classD : classD (0.02/0.01) [0.01/0]
|   |   |   feature2 = classE : classE (106.65/14.41) [36.15/9.57]
|   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   feature7 >= 0.45
|   |   |   feature7 < 0.58
|   |   |   |   feature2 = classA : classA (0.02/0) [0/0]
|   |   |   |   feature2 = classB : classB (6.93/0.91) [0.49/0.49]
|   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   feature2 = classE : classG (17.09/2.33) [1.21/1.21]
|   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   feature2 = classG : classG (0/0) [0/0]
|   |   |   feature7 >= 0.58 : classB (16.69/5.54) [10.94/0.73]
|   feature10 >= 0.42
|   |   feature7 < 0.32
|   |   |   feature2 = classA : classA (0.04/0.01) [0.01/0]
|   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   feature2 = classC : classE (0.21/0.21) [2.95/0.02]
|   |   |   feature2 = classD : classD (0.01/0) [0/0]
|   |   |   feature2 = classE : classC (51.45/6.73) [134.14/90.15]
|   |   |   feature2 = classF : classC (0/0) [0/0]
|   |   |   feature2 = classG : classG (2.28/0.33) [2.05/0.1]
|   |   feature7 >= 0.32
|   |   |   feature10 < 0.72
|   |   |   |   feature7 < 0.42
|   |   |   |   |   feature10 < 0.57
|   |   |   |   |   |   prevPredS = classA : classC (6.29/0.83) [0.27/0.27]
|   |   |   |   |   |   prevPredS = classB : classB (5.67/0.75) [0.25/0.25]
|   |   |   |   |   |   prevPredS = classC : classC (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classD (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classC (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classF : classA (0.06/0.01) [0/0]
|   |   |   |   |   |   prevPredS = classG : classC (0/0) [0/0]
|   |   |   |   |   feature10 >= 0.57 : classA (20.07/2.63) [0.88/0.88]
|   |   |   |   feature7 >= 0.42 : classB (46.45/26.69) [13.24/2.39]
|   |   |   feature10 >= 0.72
|   |   |   |   feature5 = classA : classB (30.51/14.61) [6.7/1.47]
|   |   |   |   feature5 = classB
|   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   feature7 < 0.98 : classB (19.44/2.54) [9.85/0.97]
|   |   |   |   |   |   feature7 >= 0.98 : classB (8.5/1.75) [3.19/0.37]
|   |   |   |   |   feature10 >= 0.92
|   |   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   |   feature7 < 0.98
|   |   |   |   |   |   |   |   feature8 < 0.98 : classB (12.92/6.12) [6.15/0.63]
|   |   |   |   |   |   |   |   feature8 >= 0.98
|   |   |   |   |   |   |   |   |   feature7 < 0.67 : classA (57.54/7.93) [6.95/6.37]
|   |   |   |   |   |   |   |   |   feature7 >= 0.67
|   |   |   |   |   |   |   |   |   |   feature7 < 0.95 : classB (4.13/0.54) [2.76/0.18]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.95 : classA (44.1/7.83) [2.35/2.35]
|   |   |   |   |   |   |   feature7 >= 0.98 : classB (23.35/6.3) [9.15/1.02]
|   |   |   |   |   |   feature10 >= 0.98
|   |   |   |   |   |   |   feature7 < 0.98
|   |   |   |   |   |   |   |   feature7 < 0.38 : classA (11.32/1.48) [0.49/0.49]
|   |   |   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   |   |   feature7 < 0.47
|   |   |   |   |   |   |   |   |   |   feature7 < 0.42 : classB (20.08/2.63) [5.79/5.79]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.42 : classA (5.66/0.74) [5.16/0.25]
|   |   |   |   |   |   |   |   |   feature7 >= 0.47 : classB (54.67/7.15) [23.37/5.23]
|   |   |   |   |   |   |   feature7 >= 0.98 : classB (537.7/289.98) [134.26/23.45]
|   |   |   |   feature5 = classC
|   |   |   |   |   feature7 < 0.68 : classC (2.93/1.18) [0.84/0.24]
|   |   |   |   |   feature7 >= 0.68 : classA (8.9/2.98) [0.88/0.86]
|   |   |   |   feature5 = classD : classD (0.29/0.16) [4.98/0.02]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.7 : classA (5.8/0.89) [5.27/0.3]
|   |   |   |   |   feature7 >= 0.7 : classA (5.53/1.79) [0.93/0.93]
|   |   |   |   feature5 = classF : classE (10.78/10.78) [12.64/2.8]
|   |   |   |   feature5 = classG : classA (0/0) [0.05/0]
predS = classC
|   feature7 < 0.85
|   |   feature7 < 0.28 : classA (513.08/289.57) [57.43/57.4]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.55
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.35 : classA (59.04/34.19) [53.35/28.54]
|   |   |   |   |   feature7 >= 0.35 : classF (118.16/83.01) [10.1/0.02]
|   |   |   |   prevPredS = classB : classE (3.31/0.91) [8.99/5.07]
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature8 < 0.54
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   |   feature7 < 0.33 : classD (20.42/6.76) [5.56/5.56]
|   |   |   |   |   |   |   |   feature7 >= 0.33
|   |   |   |   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   |   |   |   feature5 = classA : classA (0.03/0.01) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classC : classA (9.31/4.39) [10.24/0.41]
|   |   |   |   |   |   |   |   |   |   feature5 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classE : classE (6.55/0.86) [0.29/0.29]
|   |   |   |   |   |   |   |   |   |   feature5 = classF : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.38 : classC (15.85/8.48) [2.64/0.69]
|   |   |   |   |   |   |   feature7 >= 0.48 : classD (112.45/16.77) [6.86/6.86]
|   |   |   |   |   |   feature7 >= 0.52 : classE (20.85/2.75) [1.89/0.91]
|   |   |   |   |   feature8 >= 0.54
|   |   |   |   |   |   feature7 < 0.33 : classD (9.71/1.77) [1.14/1.14]
|   |   |   |   |   |   feature7 >= 0.33
|   |   |   |   |   |   |   feature7 < 0.43 : classC (26.07/10.05) [29.97/1.14]
|   |   |   |   |   |   |   feature7 >= 0.43
|   |   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   |   feature11 < 0.98
|   |   |   |   |   |   |   |   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature3 = classB : classC (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature3 = classC : classC (3.33/1.37) [1.12/0.15]
|   |   |   |   |   |   |   |   |   |   feature3 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature3 = classE : classC (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature3 = classF : classC (7.15/2.22) [0.31/0.31]
|   |   |   |   |   |   |   |   |   |   feature3 = classG : classC (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature11 >= 0.98 : classA (14.35/4.51) [16.38/1.63]
|   |   |   |   |   |   |   |   feature7 >= 0.52 : classA (47.03/28.96) [19.53/2.1]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature8 < 0.66
|   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   feature7 < 0.33 : classD (2.55/0.42) [0.28/0.28]
|   |   |   |   |   |   |   feature7 >= 0.33 : classE (2.62/1.1) [0.5/0.11]
|   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   feature2 = classA : classA (0.01/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classC : classD (6.26/0.82) [0.38/0.27]
|   |   |   |   |   |   |   |   feature2 = classD : classD (6.4/0.84) [0.67/0.67]
|   |   |   |   |   |   |   |   feature2 = classE : classD (0.28/0.04) [0.01/0.01]
|   |   |   |   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature7 >= 0.52 : classD (7.87/2.95) [0.34/0.34]
|   |   |   |   |   feature8 >= 0.66 : classC (2.7/1.46) [0.65/0.27]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature2 = classA : classA (0.09/0.04) [0.01/0]
|   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classC
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.43 : classC (16.8/10.16) [1.12/1.12]
|   |   |   |   |   |   |   feature7 >= 0.43
|   |   |   |   |   |   |   |   feature10 < 0.37 : classC (6.13/1.21) [0.27/0.27]
|   |   |   |   |   |   |   |   feature10 >= 0.37 : classD (30.88/4.04) [1.35/1.35]
|   |   |   |   |   |   feature7 >= 0.52 : classE (4.98/0.65) [0.22/0.22]
|   |   |   |   |   feature2 = classD : classE (0.67/0.19) [0.03/0.03]
|   |   |   |   |   feature2 = classE : classE (34.51/9.5) [160.36/1.5]
|   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   prevPredS = classF : classC (0.66/0.64) [17.48/0.03]
|   |   |   |   prevPredS = classG : classE (0/0) [0/0]
|   |   |   feature7 >= 0.55
|   |   |   |   feature5 = classA : classC (14.98/6.7) [46.09/28.31]
|   |   |   |   feature5 = classB : classB (10.47/3.06) [2.78/2.78]
|   |   |   |   feature5 = classC : classC (86.74/49.02) [70.47/44.65]
|   |   |   |   feature5 = classD : classD (6.78/3.59) [4.98/1.22]
|   |   |   |   feature5 = classE : classA (32.81/15.17) [14.2/8.73]
|   |   |   |   feature5 = classF : classF (25.79/10.28) [8.73/5.74]
|   |   |   |   feature5 = classG
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   feature10 < 0.95 : classC (2.45/0.32) [2.41/1.88]
|   |   |   |   |   |   feature10 >= 0.95 : classG (17.65/2.88) [5.82/5.82]
|   |   |   |   |   feature7 >= 0.75 : classB (11.29/3.84) [0.51/0.51]
|   feature7 >= 0.85
|   |   feature3 = classA : classC (0/0) [0/0]
|   |   feature3 = classB : classB (0.71/0.15) [0.09/0.09]
|   |   feature3 = classC : classC (323.43/43.2) [159.83/30.79]
|   |   feature3 = classD : classD (12.85/2.82) [13/1.06]
|   |   feature3 = classE : classE (0.73/0.35) [0.1/0.1]
|   |   feature3 = classF : classC (0/0) [0/0]
|   |   feature3 = classG : classA (0.24/0.05) [0.05/0.03]
predS = classD
|   feature5 = classA
|   |   feature9 < 0.88
|   |   |   prevPredS = classA
|   |   |   |   feature8 < 0.4
|   |   |   |   |   feature7 < 0.48 : classE (18.71/3.8) [2.48/2.34]
|   |   |   |   |   feature7 >= 0.48 : classD (2.13/0.84) [1.08/0.58]
|   |   |   |   feature8 >= 0.4
|   |   |   |   |   feature10 < 0.58 : classF (10.86/3.23) [4.35/1.78]
|   |   |   |   |   feature10 >= 0.58 : classD (48.99/9.49) [55.69/54.98]
|   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   prevPredS = classC : classC (6.68/2.61) [8.74/1.82]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature10 < 0.67 : classG (15.98/4.45) [3.16/1.36]
|   |   |   |   |   feature10 >= 0.67
|   |   |   |   |   |   feature7 < 0.52 : classG (2.28/1.54) [2.79/0.75]
|   |   |   |   |   |   feature7 >= 0.52 : classE (15.8/2.07) [0.69/0.69]
|   |   |   |   feature7 >= 0.58 : classD (25.41/4.54) [6.25/1.41]
|   |   |   prevPredS = classE
|   |   |   |   feature10 < 0.65 : classD (49.94/11.58) [11.91/7.98]
|   |   |   |   feature10 >= 0.65 : classG (4.59/1.76) [3.31/0.29]
|   |   |   prevPredS = classF : classE (4.13/4.11) [25.94/1.11]
|   |   |   prevPredS = classG
|   |   |   |   feature10 < 0.4 : classE (4.83/0.9) [0.62/0.59]
|   |   |   |   feature10 >= 0.4 : classD (22.79/5.03) [3.23/3.23]
|   |   feature9 >= 0.88
|   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   feature3 = classC : classA (0.36/0.13) [0.08/0.06]
|   |   |   feature3 = classD : classA (30.05/12.46) [7.36/5.58]
|   |   |   feature3 = classE : classE (18.66/5.28) [9.01/3.87]
|   |   |   feature3 = classF : classF (9.25/1.81) [7.88/1.48]
|   |   |   feature3 = classG : classA (3.25/1.18) [0.71/0.52]
|   feature5 = classB
|   |   feature7 < 0.22 : classA (40.68/5.82) [1.77/1.77]
|   |   feature7 >= 0.22
|   |   |   feature7 < 0.28 : classB (28.95/4.14) [1.26/1.26]
|   |   |   feature7 >= 0.28 : classG (21.92/14.2) [11.36/4.24]
|   feature5 = classC
|   |   prevPredS = classA
|   |   |   feature10 < 0.48
|   |   |   |   feature7 < 0.53 : classG (2.24/1.52) [2.71/0.71]
|   |   |   |   feature7 >= 0.53 : classA (28.69/3.87) [1.59/1.57]
|   |   |   feature10 >= 0.48 : classC (2.59/0.51) [0.35/0.35]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC
|   |   |   feature7 < 0.48 : classA (70.55/14.05) [9.58/9.55]
|   |   |   feature7 >= 0.48
|   |   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   |   feature3 = classB : classC (0/0) [0/0]
|   |   |   |   feature3 = classC : classC (14.96/6.29) [9.06/3.6]
|   |   |   |   feature3 = classD : classD (9/2.47) [2.16/1.39]
|   |   |   |   feature3 = classE : classC (0/0) [0/0]
|   |   |   |   feature3 = classF : classC (0/0) [0/0]
|   |   |   |   feature3 = classG : classC (0/0) [0/0]
|   |   prevPredS = classD
|   |   |   feature10 < 0.68 : classG (18.45/10.15) [3.89/2.69]
|   |   |   feature10 >= 0.68
|   |   |   |   feature7 < 0.55 : classE (12.69/2.65) [2.04/1.93]
|   |   |   |   feature7 >= 0.55 : classC (4.62/0.76) [2.52/0.31]
|   |   prevPredS = classE : classG (3.01/0.98) [3.14/0.98]
|   |   prevPredS = classF : classF (1.05/0.44) [0.58/0.3]
|   |   prevPredS = classG : classG (0.83/0.36) [0.33/0.05]
|   feature5 = classD
|   |   feature7 < 0.58
|   |   |   feature10 < 0.58
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature10 < 0.5 : classD (5.08/1.23) [0.98/0.98]
|   |   |   |   |   feature10 >= 0.5
|   |   |   |   |   |   feature7 < 0.48 : classC (9.37/2.28) [5.49/5.49]
|   |   |   |   |   |   feature7 >= 0.48 : classC (5.58/1.36) [0.86/0.86]
|   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   prevPredS = classC : classE (9.28/2.25) [4.14/4.03]
|   |   |   |   prevPredS = classD : classG (176.01/75.07) [61.28/23.62]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature8 < 0.66 : classE (19.56/5.23) [11.26/6.66]
|   |   |   |   |   feature8 >= 0.66 : classD (2.18/0.53) [1.62/0.42]
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature10 < 0.45
|   |   |   |   |   |   feature2 = classA : classA (5.15/1.25) [2.53/2.53]
|   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (2.03/0.49) [2.08/0.39]
|   |   |   |   |   |   feature2 = classE : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   |   feature10 >= 0.45 : classF (5.63/0.3) [3.33/0.82]
|   |   |   |   prevPredS = classG : classG (13.57/8.09) [2.95/1.4]
|   |   |   feature10 >= 0.58
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   prevPredS = classA : classG (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classD : classE (2.76/0.69) [3.39/1.31]
|   |   |   |   |   |   |   prevPredS = classE : classG (23.1/4.04) [21.08/2.02]
|   |   |   |   |   |   |   prevPredS = classF : classG (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classG : classG (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   feature10 < 0.88
|   |   |   |   |   |   |   |   feature7 < 0.32 : classA (105.7/13.86) [55.42/5.82]
|   |   |   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   |   |   feature7 < 0.35 : classE (7.18/0.94) [6.77/0.53]
|   |   |   |   |   |   |   |   |   feature7 >= 0.35 : classA (29.62/4.82) [1.4/1.4]
|   |   |   |   |   |   |   feature10 >= 0.88
|   |   |   |   |   |   |   |   prevPredS = classA : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classD (4.48/0.78) [0.39/0.39]
|   |   |   |   |   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classF : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classG : classG (5.17/0.9) [0.45/0.45]
|   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   feature7 < 0.48 : classF (59.78/13.01) [69.01/50.83]
|   |   |   |   |   |   feature7 >= 0.48 : classG (48.11/20.51) [34.47/6.87]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature10 < 0.62 : classA (256.46/34.57) [11.57/11.57]
|   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   feature10 < 0.72 : classE (113.84/17.67) [8.44/8.44]
|   |   |   |   |   |   feature10 >= 0.72 : classD (10.36/2.46) [2.9/1]
|   |   feature7 >= 0.58
|   |   |   feature8 < 0.74
|   |   |   |   feature8 < 0.62 : classD (113.09/38.47) [19.9/6.71]
|   |   |   |   feature8 >= 0.62
|   |   |   |   |   prevPredS = classA : classC (4.82/0.65) [1.63/1.63]
|   |   |   |   |   prevPredS = classB : classC (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classD (12.98/6.29) [2.67/2.59]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature7 < 0.92
|   |   |   |   |   |   |   feature10 < 0.98 : classD (19.54/2.56) [37.18/25.66]
|   |   |   |   |   |   |   feature10 >= 0.98 : classC (28.83/4.03) [26.41/1.61]
|   |   |   |   |   |   feature7 >= 0.92
|   |   |   |   |   |   |   feature7 < 0.95
|   |   |   |   |   |   |   |   feature10 < 0.62 : classF (6.45/1.56) [1.3/0.01]
|   |   |   |   |   |   |   |   feature10 >= 0.62 : classC (255.99/34.11) [11.71/11.71]
|   |   |   |   |   |   |   feature7 >= 0.95 : classD (5.51/0.72) [2.35/0.24]
|   |   |   |   |   prevPredS = classE : classD (2.8/0.37) [0.89/0.12]
|   |   |   |   |   prevPredS = classF : classC (0/0) [0/0]
|   |   |   |   |   prevPredS = classG : classD (1.22/0.21) [0.21/0.1]
|   |   |   feature8 >= 0.74 : classD (262.31/44.24) [125.24/38.59]
|   feature5 = classE
|   |   prevPredS = classA
|   |   |   feature10 < 0.85 : classD (21.76/20.64) [22.8/2.79]
|   |   |   feature10 >= 0.85 : classE (12.22/2.29) [6.49/1.48]
|   |   prevPredS = classB : classD (1.21/0.23) [0.16/0.16]
|   |   prevPredS = classC
|   |   |   feature7 < 0.68
|   |   |   |   feature2 = classA : classC (0/0) [0/0]
|   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   feature2 = classD
|   |   |   |   |   feature7 < 0.53 : classG (2.15/1.45) [3.62/1.7]
|   |   |   |   |   feature7 >= 0.53 : classC (16.98/2.23) [1.55/1.55]
|   |   |   |   feature2 = classE : classE (3.8/0.83) [1.87/0.85]
|   |   |   |   feature2 = classF : classC (0/0) [0/0]
|   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   feature7 >= 0.68 : classA (12.69/6.51) [5.01/5.01]
|   |   prevPredS = classD
|   |   |   feature7 < 0.72
|   |   |   |   feature8 < 0.42
|   |   |   |   |   feature10 < 0.48
|   |   |   |   |   |   feature7 < 0.52 : classG (5.76/4.2) [5.92/1.59]
|   |   |   |   |   |   feature7 >= 0.52 : classD (51.75/6.77) [2.27/2.26]
|   |   |   |   |   feature10 >= 0.48
|   |   |   |   |   |   feature10 < 0.68 : classG (8.69/1.93) [1.65/0.99]
|   |   |   |   |   |   feature10 >= 0.68 : classE (10.89/2.57) [1.56/1.48]
|   |   |   |   feature8 >= 0.42
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classB : classE (0.74/0.1) [1.23/0.04]
|   |   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classD : classD (2.6/0.65) [0.84/0.43]
|   |   |   |   |   |   |   feature3 = classE : classE (38.57/5.27) [9.42/2.02]
|   |   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature7 >= 0.45 : classF (33.35/3.75) [45.92/34.37]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature10 < 0.37 : classE (264.71/42.83) [19.84/19.84]
|   |   |   |   |   |   feature10 >= 0.37
|   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   feature10 < 0.52 : classG (72.78/13.25) [8.73/4.95]
|   |   |   |   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   |   |   |   feature7 < 0.52 : classG (16.09/10.1) [6.97/0.98]
|   |   |   |   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   |   |   |   feature10 < 0.72 : classE (94.88/12.91) [9.24/4.29]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.72
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.58 : classE (2.4/0.75) [2.31/0.1]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.58 : classD (2.03/0.27) [0.2/0.09]
|   |   |   |   |   |   |   feature7 >= 0.68 : classE (130.56/17.3) [5.93/5.93]
|   |   |   feature7 >= 0.72
|   |   |   |   feature10 < 0.48 : classF (8.54/0.45) [2.33/0.22]
|   |   |   |   feature10 >= 0.48 : classD (112.37/18.55) [10.56/6]
|   |   prevPredS = classE
|   |   |   feature10 < 0.52
|   |   |   |   feature7 < 0.32 : classD (179.37/23.47) [7.82/7.82]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature7 < 0.48 : classD (24.99/13.01) [30.79/26.01]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature9 < 0.52 : classD (27.29/8.63) [9.46/6.25]
|   |   |   |   |   |   |   feature9 >= 0.52 : classE (3.08/1.55) [2.04/1.16]
|   |   |   |   |   feature7 >= 0.62 : classE (6.5/1.03) [0.88/0.67]
|   |   |   feature10 >= 0.52
|   |   |   |   feature7 < 0.32
|   |   |   |   |   feature8 < 0.64 : classE (9.6/4.72) [1.39/0.42]
|   |   |   |   |   feature8 >= 0.64 : classA (41.23/6.37) [2.77/2.77]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature7 < 0.35 : classG (5.35/0.99) [4.85/0.49]
|   |   |   |   |   |   feature7 >= 0.35 : classD (19.54/6.77) [24.21/6.4]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   |   feature10 < 0.65 : classE (5.51/1.69) [4.17/1.58]
|   |   |   |   |   |   |   |   feature10 >= 0.65 : classG (14.63/3.93) [14.23/1.65]
|   |   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   |   feature7 < 0.45 : classE (5.51/0.72) [0.72/0.24]
|   |   |   |   |   |   |   |   feature7 >= 0.45 : classG (2.02/1.47) [2.03/0.51]
|   |   |   |   |   |   feature7 >= 0.52 : classE (27.29/3.6) [29.92/25.99]
|   |   |   |   |   feature3 = classF
|   |   |   |   |   |   feature7 < 0.53 : classG (3.45/1.52) [3.31/0.79]
|   |   |   |   |   |   feature7 >= 0.53 : classD (5.66/0.74) [0.25/0.25]
|   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   prevPredS = classF
|   |   |   feature10 < 0.42 : classD (11.68/2.26) [3.74/1.5]
|   |   |   feature10 >= 0.42 : classF (6.37/1.84) [6.04/3.93]
|   |   prevPredS = classG
|   |   |   feature10 < 0.9
|   |   |   |   feature7 < 0.72 : classF (2.25/0.72) [3.89/2.08]
|   |   |   |   feature7 >= 0.72 : classD (2.01/0.26) [5.01/0.09]
|   |   |   feature10 >= 0.9 : classG (4.32/0.74) [0.55/0.27]
|   feature5 = classF
|   |   prevPredS = classA : classC (2.05/0.47) [0.9/0.9]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC : classF (3.23/1.54) [1.72/1.15]
|   |   prevPredS = classD
|   |   |   feature10 < 0.68
|   |   |   |   feature10 < 0.48 : classD (3.76/1.4) [1.44/0.65]
|   |   |   |   feature10 >= 0.48 : classG (8.92/2.72) [6.22/5.65]
|   |   |   feature10 >= 0.68 : classE (13.49/4.19) [2.21/2.12]
|   |   prevPredS = classE
|   |   |   feature10 < 0.42 : classD (17.19/3.33) [2.45/2.2]
|   |   |   feature10 >= 0.42
|   |   |   |   feature7 < 0.45 : classG (2.19/0.69) [2/0.5]
|   |   |   |   feature7 >= 0.45 : classF (7.81/0.24) [6.54/4.12]
|   |   prevPredS = classF
|   |   |   feature8 < 0.9 : classF (13.43/0.41) [4.02/0.99]
|   |   |   feature8 >= 0.9
|   |   |   |   feature7 < 0.43 : classA (51.97/7.98) [46.98/2.99]
|   |   |   |   feature7 >= 0.43 : classG (3.76/2.46) [4.86/1.25]
|   |   prevPredS = classG : classG (0.63/0.28) [0.25/0.04]
|   feature5 = classG
|   |   feature7 < 0.32 : classA (31.2/6.4) [26.21/1.36]
|   |   feature7 >= 0.32
|   |   |   prevPredS = classA : classC (1.43/0.37) [0.57/0.57]
|   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   prevPredS = classC : classG (1.94/1.33) [1.34/0.62]
|   |   |   prevPredS = classD
|   |   |   |   feature10 < 0.68
|   |   |   |   |   feature7 < 0.6
|   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   feature8 < 0.36 : classG (7.59/2.2) [6.99/0.75]
|   |   |   |   |   |   |   feature8 >= 0.36 : classD (6.09/1.82) [5.13/1.64]
|   |   |   |   |   |   feature7 >= 0.55 : classG (7.56/1) [0.89/0.34]
|   |   |   |   |   feature7 >= 0.6 : classD (5.61/1.35) [0.43/0.4]
|   |   |   |   feature10 >= 0.68
|   |   |   |   |   feature7 < 0.55 : classE (9.06/2.06) [1.72/1.62]
|   |   |   |   |   feature7 >= 0.55 : classD (2.35/0.31) [0.18/0.1]
|   |   |   prevPredS = classE : classG (3.14/0.9) [2.52/0.88]
|   |   |   prevPredS = classF : classG (4.13/1.07) [0.96/0.6]
|   |   |   prevPredS = classG : classG (37.01/17.39) [7.35/2.61]
predS = classE
|   prevPredS = classA
|   |   feature10 < 0.85
|   |   |   feature10 < 0.55
|   |   |   |   feature10 < 0.52
|   |   |   |   |   feature7 < 0.35 : classA (50.65/6.63) [7.07/7.07]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature7 < 0.43
|   |   |   |   |   |   |   feature8 < 0.44 : classD (33.21/7.5) [1.9/1.45]
|   |   |   |   |   |   |   feature8 >= 0.44
|   |   |   |   |   |   |   |   feature10 < 0.37 : classD (2.36/0.35) [0.14/0.1]
|   |   |   |   |   |   |   |   feature10 >= 0.37 : classE (6.88/1.11) [5.32/0.39]
|   |   |   |   |   |   feature7 >= 0.43
|   |   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   |   feature7 < 0.48 : classC (9.94/9.94) [8.34/1.01]
|   |   |   |   |   |   |   |   |   feature7 >= 0.48 : classE (5.16/1.23) [1.49/0.23]
|   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (8.18/3.02) [5.51/0.36]
|   |   |   |   |   |   |   feature7 >= 0.75 : classE (5.83/0.77) [2.12/0.25]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature7 < 0.48 : classC (35.11/10.01) [7.47/3.65]
|   |   |   |   |   feature7 >= 0.48 : classC (28.56/8.14) [5.12/5.12]
|   |   |   feature10 >= 0.55
|   |   |   |   feature8 < 0.94
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature3 = classA : classG (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD
|   |   |   |   |   |   |   feature7 < 0.32 : classG (7.96/1.04) [8.37/0.62]
|   |   |   |   |   |   |   feature7 >= 0.32 : classD (9.86/1.73) [2.82/0.7]
|   |   |   |   |   |   feature3 = classE
|   |   |   |   |   |   |   feature8 < 0.5 : classG (2.81/0.45) [2.74/0.24]
|   |   |   |   |   |   |   feature8 >= 0.5 : classE (3.28/0.49) [1.41/0.33]
|   |   |   |   |   |   feature3 = classF : classG (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classG (39.97/7) [20.8/3.42]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.48 : classC (12.45/12.45) [8.67/1.15]
|   |   |   |   |   |   |   feature7 >= 0.48 : classD (20.78/4.16) [1.21/1.21]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   feature7 < 0.68 : classE (9.74/1.28) [0.66/0.44]
|   |   |   |   |   |   |   feature7 >= 0.68 : classE (18.54/7.73) [8.96/6.12]
|   |   |   |   feature8 >= 0.94 : classA (61.72/21.66) [11.46/8.85]
|   |   feature10 >= 0.85
|   |   |   feature7 < 0.45 : classE (23.63/4.67) [11.52/5.66]
|   |   |   feature7 >= 0.45
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature8 < 0.62 : classE (2.62/0.65) [1.33/0.33]
|   |   |   |   |   feature8 >= 0.62 : classD (115.38/23.69) [16.3/16.3]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.67
|   |   |   |   |   |   feature10 < 0.97 : classE (2.88/0.38) [0.35/0.13]
|   |   |   |   |   |   feature10 >= 0.97 : classD (2.75/0.8) [1.16/0.61]
|   |   |   |   |   feature7 >= 0.67 : classA (15.36/8.47) [8.19/1.33]
|   prevPredS = classB
|   |   feature2 = classA : classA (0.04/0.01) [0.01/0.01]
|   |   feature2 = classB : classB (15.35/5.5) [2.77/2.77]
|   |   feature2 = classC : classA (7.67/1.35) [1.38/1.06]
|   |   feature2 = classD : classD (0/0) [0/0]
|   |   feature2 = classE
|   |   |   feature7 < 0.48 : classE (22.73/5.02) [3.91/3.78]
|   |   |   feature7 >= 0.48 : classA (4.46/0.66) [1.38/0.23]
|   |   feature2 = classF : classE (0/0) [0/0]
|   |   feature2 = classG : classE (0/0) [0/0]
|   prevPredS = classC
|   |   feature2 = classA : classA (0.04/0.01) [0.01/0.01]
|   |   feature2 = classB : classC (0/0) [0/0]
|   |   feature2 = classC : classC (30.08/16.97) [13.94/3.62]
|   |   feature2 = classD : classD (0/0) [0/0]
|   |   feature2 = classE : classE (14.52/3.61) [3.59/2.53]
|   |   feature2 = classF : classF (2.64/0.34) [1.45/1.34]
|   |   feature2 = classG : classC (0/0) [0/0]
|   prevPredS = classD
|   |   feature10 < 0.38
|   |   |   feature10 < 0.35
|   |   |   |   feature7 < 0.53 : classD (14.02/11.02) [18.8/8.21]
|   |   |   |   feature7 >= 0.53
|   |   |   |   |   feature7 < 0.68 : classE (60.03/7.89) [7.54/7.54]
|   |   |   |   |   feature7 >= 0.68 : classA (4.44/1.13) [3.5/0.2]
|   |   |   feature10 >= 0.35 : classA (300.96/53.53) [54.28/41.59]
|   |   feature10 >= 0.38
|   |   |   feature5 = classA
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature7 < 0.57
|   |   |   |   |   |   feature7 < 0.45 : classD (8.6/2.19) [6.72/5.67]
|   |   |   |   |   |   feature7 >= 0.45 : classC (18.82/18.82) [15.54/2.17]
|   |   |   |   |   feature7 >= 0.57 : classD (179.63/23.72) [7.83/7.83]
|   |   |   |   feature7 >= 0.65 : classA (15.82/6.41) [10.09/0.7]
|   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   feature5 = classC : classC (0.04/0.02) [0.03/0.02]
|   |   |   feature5 = classD
|   |   |   |   feature7 < 0.45 : classD (58.15/8.14) [7.27/5.24]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classD
|   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   feature7 < 0.48 : classD (9.3/5.02) [6.83/5.65]
|   |   |   |   |   |   |   feature7 >= 0.48 : classD (22.4/3.15) [4.56/1.08]
|   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   feature7 < 0.72 : classA (5.56/2.14) [5.62/2.2]
|   |   |   |   |   |   |   feature7 >= 0.72 : classD (2.36/0.31) [0.5/0.11]
|   |   |   |   |   feature6 = classE : classE (14.71/7.96) [31.54/3.86]
|   |   |   |   |   feature6 = classF : classE (1.24/0.67) [0.34/0.33]
|   |   |   |   |   feature6 = classG : classD (0/0) [0/0]
|   |   |   feature5 = classE
|   |   |   |   feature11 < 0.48
|   |   |   |   |   feature10 < 0.53
|   |   |   |   |   |   feature7 < 0.58 : classD (11.1/2.62) [2.52/2.42]
|   |   |   |   |   |   feature7 >= 0.58 : classE (10.49/2.28) [2.05/1.37]
|   |   |   |   |   feature10 >= 0.53
|   |   |   |   |   |   feature7 < 0.65 : classD (69/12.96) [16.65/9.52]
|   |   |   |   |   |   feature7 >= 0.65 : classA (3.52/0.46) [3.21/0.16]
|   |   |   |   feature11 >= 0.48
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature8 < 0.54 : classD (7.82/2.04) [4.07/3.98]
|   |   |   |   |   |   feature8 >= 0.54
|   |   |   |   |   |   |   feature10 < 0.83 : classE (15.25/5.71) [9.73/6.04]
|   |   |   |   |   |   |   feature10 >= 0.83 : classD (4.02/1.05) [3.65/1.04]
|   |   |   |   |   feature7 >= 0.58 : classE (38.17/8.84) [16.38/5.52]
|   |   |   feature5 = classF : classF (12.85/3.01) [4.17/1.76]
|   |   |   feature5 = classG : classD (0/0) [17.43/0]
|   prevPredS = classE
|   |   feature10 < 0.92
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature7 < 0.65 : classE (37.37/25.38) [31.27/25.51]
|   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   feature10 < 0.53 : classE (3.8/0.87) [1.5/0.53]
|   |   |   |   |   |   feature10 >= 0.53 : classA (114.02/14.99) [15.84/5]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature7 < 0.75 : classD (101.72/13.81) [9.38/9.38]
|   |   |   |   |   feature7 >= 0.75 : classE (8.66/1.15) [4.5/0.38]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classE (0.05/0.05) [0.42/0.03]
|   |   |   feature2 = classD
|   |   |   |   feature7 < 0.77
|   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD
|   |   |   |   |   |   |   feature7 < 0.48 : classD (50.81/13.23) [32.34/30.77]
|   |   |   |   |   |   |   feature7 >= 0.48 : classD (14.16/3.77) [3.26/1.33]
|   |   |   |   |   |   feature3 = classE : classE (3.98/1.85) [6.35/0.85]
|   |   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   feature7 < 0.72 : classA (6.87/1.27) [6.03/0.42]
|   |   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   |   feature8 < 0.64 : classE (3.85/0.5) [2.37/0.28]
|   |   |   |   |   |   |   feature8 >= 0.64 : classD (2.3/0.35) [1.08/0.1]
|   |   |   |   feature7 >= 0.77 : classD (50.98/6.95) [2.34/2.33]
|   |   |   feature2 = classE
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC
|   |   |   |   |   feature8 < 0.78 : classD (3.41/2.1) [4.18/1.1]
|   |   |   |   |   feature8 >= 0.78 : classA (22.38/4.76) [6.79/4.87]
|   |   |   |   feature3 = classD
|   |   |   |   |   feature7 < 0.92
|   |   |   |   |   |   feature11 < 0.8
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature8 < 0.58 : classD (7.53/1.8) [4.94/1.35]
|   |   |   |   |   |   |   |   feature8 >= 0.58 : classE (6.8/1.78) [1.74/1.39]
|   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.58 : classD (5.08/2.34) [4.42/2.54]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.58 : classE (6.4/3.82) [3.42/2.99]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   |   |   feature11 < 0.72 : classD (3/0.83) [1.4/0.25]
|   |   |   |   |   |   |   |   |   |   |   feature11 >= 0.72 : classE (7.34/0.96) [15.06/4.54]
|   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (4.78/1.37) [6.55/3.13]
|   |   |   |   |   |   |   |   feature7 >= 0.72 : classD (9.18/7.23) [22.39/7.42]
|   |   |   |   |   |   feature11 >= 0.8
|   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   |   feature7 < 0.48 : classD (18.19/7.35) [12.26/7.31]
|   |   |   |   |   |   |   |   |   feature7 >= 0.48 : classD (10.33/2.64) [4.51/0.8]
|   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (5.79/2.87) [5.57/2.65]
|   |   |   |   |   |   |   feature7 >= 0.72 : classD (8.45/3.31) [6.5/1.37]
|   |   |   |   |   feature7 >= 0.92 : classD (57.34/8.43) [4.08/3.69]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   feature11 < 0.52
|   |   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature6 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature6 = classD : classD (10.01/4.34) [7.32/3.18]
|   |   |   |   |   |   |   |   feature6 = classE : classE (15.12/7.77) [18.48/10.56]
|   |   |   |   |   |   |   |   feature6 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature6 = classG
|   |   |   |   |   |   |   |   |   feature7 < 0.42 : classG (2.95/0.99) [0.89/0.63]
|   |   |   |   |   |   |   |   |   feature7 >= 0.42 : classD (2.7/2) [3.24/1.4]
|   |   |   |   |   |   |   feature7 >= 0.75 : classG (28.19/5.84) [68.72/46.38]
|   |   |   |   |   |   feature11 >= 0.52
|   |   |   |   |   |   |   feature11 < 0.82
|   |   |   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   |   |   feature7 < 0.58 : classD (78.08/41.36) [58.99/22.9]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.68 : classE (12.26/1.6) [4.37/0.53]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (13.4/6.36) [17.94/10.9]
|   |   |   |   |   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   |   |   |   |   feature5 = classA : classE (0.75/0.1) [0.25/0.03]
|   |   |   |   |   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   feature5 = classD : classD (5.68/0.76) [5.17/0.25]
|   |   |   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.45 : classD (11.44/1.61) [0.65/0.65]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.45
|   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.54 : classD (6.25/1.33) [0.49/0.49]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.54 : classE (4.58/0.6) [1.35/0.2]
|   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.85 : classD (21.18/3.75) [0.93/0.93]
|   |   |   |   |   |   |   |   |   |   feature5 = classF : classE (0.76/0.1) [0.14/0.03]
|   |   |   |   |   |   |   |   |   |   feature5 = classG : classE (0/0) [0.39/0]
|   |   |   |   |   |   |   |   feature7 >= 0.82 : classE (12.53/1.64) [6.23/0.55]
|   |   |   |   |   |   |   feature11 >= 0.82
|   |   |   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   |   |   feature5 = classA : classE (0.16/0.04) [0.04/0.03]
|   |   |   |   |   |   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature5 = classC : classE (1.42/0.39) [0.32/0.31]
|   |   |   |   |   |   |   |   |   feature5 = classD : classD (5.03/1.23) [4.61/1.09]
|   |   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   feature8 < 0.5 : classE (6.05/0.97) [0.81/0.8]
|   |   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.5 : classD (4.63/1.02) [4.41/0.87]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.68 : classE (12.36/1.98) [1.96/1.63]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.45 : classE (13.76/6.52) [8.33/4.89]
|   |   |   |   |   |   |   |   |   feature5 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   |   |   feature7 < 0.68 : classE (14.35/1.88) [11.91/6.55]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.68 : classA (6.58/3.03) [9.63/6.08]
|   |   |   |   |   |   |   |   |   feature7 >= 0.72 : classE (20.06/2.62) [8.45/0.87]
|   |   |   |   |   feature8 >= 0.74 : classE (241.14/68.41) [222.89/145.51]
|   |   |   |   feature3 = classF
|   |   |   |   |   feature5 = classA : classE (2.75/0.7) [0.51/0.48]
|   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classE (0.22/0.06) [0.04/0.04]
|   |   |   |   |   feature5 = classD : classD (0.87/0.27) [0.72/0.15]
|   |   |   |   |   feature5 = classE : classE (4.93/1.82) [6.72/4.62]
|   |   |   |   |   feature5 = classF
|   |   |   |   |   |   feature7 < 0.53 : classF (2.89/1.53) [1.61/1.48]
|   |   |   |   |   |   feature7 >= 0.53 : classF (12.75/0.7) [13.07/5.59]
|   |   |   |   |   feature5 = classG : classE (0.02/0) [0.04/0]
|   |   |   |   feature3 = classG : classE (0.54/0.16) [0.21/0.19]
|   |   |   feature2 = classF
|   |   |   |   feature8 < 0.5 : classE (7.5/3.02) [3/1.31]
|   |   |   |   feature8 >= 0.5 : classF (13.98/1.85) [17.49/5.49]
|   |   |   feature2 = classG : classG (8.87/3.44) [20.4/1.78]
|   |   feature10 >= 0.92
|   |   |   feature8 < 0.86
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature7 < 0.45 : classE (5.94/3.12) [12.25/7.32]
|   |   |   |   |   feature7 >= 0.45 : classA (42.02/14.08) [18.55/18.54]
|   |   |   |   feature7 >= 0.58
|   |   |   |   |   feature7 < 0.62 : classB (180.89/24.98) [7.9/7.9]
|   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   feature7 < 0.72 : classA (13.31/2.84) [11.48/1.02]
|   |   |   |   |   |   feature7 >= 0.72 : classE (5.9/0.78) [2.78/0.26]
|   |   |   feature8 >= 0.86
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   feature7 < 0.45 : classG (4.56/4.56) [7.86/1.56]
|   |   |   |   |   |   |   feature7 >= 0.45 : classC (21.67/21.67) [18.31/2.41]
|   |   |   |   |   |   feature7 >= 0.48 : classE (5.13/0.67) [0.9/0.22]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature11 < 0.83 : classA (194.48/27.71) [21/10.13]
|   |   |   |   |   |   feature11 >= 0.83 : classE (5.49/1.06) [2.2/0.56]
|   |   |   |   feature7 >= 0.72 : classE (33.66/4.41) [16.97/1.47]
|   prevPredS = classF
|   |   feature6 = classA : classF (0/0) [0/0]
|   |   feature6 = classB : classF (0/0) [0/0]
|   |   feature6 = classC
|   |   |   feature7 < 0.27 : classC (5.95/1.02) [0.26/0.26]
|   |   |   feature7 >= 0.27 : classF (4.05/2.55) [2.65/1.98]
|   |   feature6 = classD
|   |   |   feature7 < 0.62
|   |   |   |   feature10 < 0.63 : classD (34.13/7.43) [11.93/10.76]
|   |   |   |   feature10 >= 0.63 : classF (5.9/0.61) [3.21/0.66]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.8
|   |   |   |   |   feature10 < 0.35 : classE (2.45/1.32) [2.23/1.11]
|   |   |   |   |   feature10 >= 0.35 : classA (2.44/0.32) [2.23/0.11]
|   |   |   |   feature7 >= 0.8 : classE (2.58/0.34) [0.11/0.11]
|   |   feature6 = classE
|   |   |   feature7 < 0.45 : classE (23.94/4.59) [3.56/2.55]
|   |   |   feature7 >= 0.45
|   |   |   |   feature10 < 0.7
|   |   |   |   |   feature5 = classA : classE (4.74/1.59) [2.84/1.12]
|   |   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classA (2.08/0.54) [1.87/0.5]
|   |   |   |   |   feature5 = classD : classE (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classE (5.47/2.9) [3.32/1.29]
|   |   |   |   |   feature5 = classF : classE (4.34/1.56) [1.44/1.08]
|   |   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   |   feature10 >= 0.7 : classF (10.39/4.21) [4.98/2.12]
|   |   feature6 = classF
|   |   |   feature8 < 0.38 : classE (3.4/1.76) [1.82/1.43]
|   |   |   feature8 >= 0.38 : classF (25.22/4.1) [16.76/4.16]
|   |   feature6 = classG
|   |   |   feature7 < 0.45 : classG (44.45/7.59) [4.37/2.68]
|   |   |   feature7 >= 0.45
|   |   |   |   feature7 < 0.62 : classF (15.43/6.54) [9.47/5.36]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature7 < 0.8
|   |   |   |   |   |   feature10 < 0.35 : classE (3.67/1.98) [3.34/1.66]
|   |   |   |   |   |   feature10 >= 0.35 : classA (3.66/0.48) [3.34/0.16]
|   |   |   |   |   feature7 >= 0.8 : classE (3.87/0.51) [0.17/0.17]
|   prevPredS = classG
|   |   feature7 < 0.42 : classD (148.64/33.34) [25.09/16.88]
|   |   feature7 >= 0.42
|   |   |   feature2 = classA
|   |   |   |   feature8 < 0.78 : classE (17.34/7.1) [12.98/5.3]
|   |   |   |   feature8 >= 0.78 : classA (30.14/7.17) [9.61/6.84]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classC (0.01/0) [0/0]
|   |   |   feature2 = classD : classD (3.39/1.25) [1.08/1.08]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.77
|   |   |   |   |   feature7 < 0.48 : classC (9.1/9.1) [7.14/1.25]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.68 : classG (15.89/3.32) [8.27/1.6]
|   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   feature7 < 0.72 : classA (4.76/0.62) [4.35/0.21]
|   |   |   |   |   |   |   feature7 >= 0.72 : classG (6.1/1.19) [0.27/0.27]
|   |   |   |   feature7 >= 0.77 : classE (9.16/1.2) [4.36/0.4]
|   |   |   feature2 = classF : classF (0.95/0.83) [3.35/1.36]
|   |   |   feature2 = classG
|   |   |   |   feature7 < 0.68 : classG (25.94/8.03) [9.92/5.86]
|   |   |   |   feature7 >= 0.68 : classA (3.07/0.4) [2.8/0.14]
predS = classF
|   prevPredS = classA
|   |   feature7 < 0.48
|   |   |   feature7 < 0.28 : classG (20.71/4.08) [0.91/0.91]
|   |   |   feature7 >= 0.28
|   |   |   |   feature3 = classA : classB (1.72/1.72) [1.73/0.46]
|   |   |   |   feature3 = classB : classB (0/0) [0/0]
|   |   |   |   feature3 = classC : classB (0.22/0.22) [0.18/0.02]
|   |   |   |   feature3 = classD : classB (1.13/1.13) [0.89/0.05]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature10 < 0.48
|   |   |   |   |   |   feature7 < 0.35 : classE (19.24/5.22) [0.84/0.84]
|   |   |   |   |   |   feature7 >= 0.35 : classG (13.7/3.85) [5.52/0.6]
|   |   |   |   |   feature10 >= 0.48
|   |   |   |   |   |   feature10 < 0.62 : classC (5.74/1.37) [0.25/0.25]
|   |   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   |   feature7 < 0.42 : classE (14.83/4.99) [1.2/0.65]
|   |   |   |   |   |   |   feature7 >= 0.42 : classB (13.73/13.73) [55.18/5.52]
|   |   |   |   feature3 = classF
|   |   |   |   |   feature10 < 0.32
|   |   |   |   |   |   feature7 < 0.35 : classE (28.62/5.11) [1.25/1.25]
|   |   |   |   |   |   feature7 >= 0.35 : classF (2.22/0.48) [0.1/0]
|   |   |   |   |   feature10 >= 0.32
|   |   |   |   |   |   feature10 < 0.6 : classC (13.81/6.47) [1.7/1.7]
|   |   |   |   |   |   feature10 >= 0.6
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   |   |   feature8 < 0.9 : classF (3.27/0.48) [2.23/0]
|   |   |   |   |   |   |   |   |   feature8 >= 0.9 : classA (24.36/6) [1.61/1.61]
|   |   |   |   |   |   |   |   feature7 >= 0.42 : classF (3.79/0) [0.82/0]
|   |   |   |   |   |   |   feature7 >= 0.45 : classB (36.69/36.69) [85.12/1.82]
|   |   |   |   feature3 = classG
|   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   feature10 < 0.37 : classE (9.58/3.75) [0.42/0.42]
|   |   |   |   |   |   feature10 >= 0.37 : classA (2.1/1.27) [0.11/0.09]
|   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   feature10 < 0.73 : classG (12.5/2.75) [0.57/0.57]
|   |   |   |   |   |   feature10 >= 0.73 : classB (3.8/3.8) [20.84/0.17]
|   |   feature7 >= 0.48
|   |   |   feature7 < 0.55
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature10 < 0.48 : classE (15.37/10.45) [5.77/0.85]
|   |   |   |   |   feature10 >= 0.48 : classD (16.29/7.74) [1.02/1.02]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature2 = classA : classA (0.05/0.03) [0.01/0]
|   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classA (11.35/6.43) [5.41/0.5]
|   |   |   |   |   feature2 = classD : classD (11.35/6.43) [0.5/0.5]
|   |   |   |   |   feature2 = classE : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classF : classF (2.54/1.11) [0.11/0]
|   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   feature7 >= 0.55
|   |   |   |   feature7 < 0.58 : classA (18.63/10.3) [7.04/2.12]
|   |   |   |   feature7 >= 0.58 : classF (17.5/1.16) [7.85/0]
|   prevPredS = classB
|   |   feature7 < 0.47 : classB (16.22/4.38) [14.01/5.63]
|   |   feature7 >= 0.47 : classD (2.4/1.45) [0.2/0.2]
|   prevPredS = classC : classC (26.01/17.56) [17.24/5.17]
|   prevPredS = classD
|   |   feature7 < 0.82 : classD (213.97/120.68) [161.98/104.25]
|   |   feature7 >= 0.82 : classE (30.2/5.4) [27.22/2.41]
|   prevPredS = classE
|   |   feature7 < 0.45
|   |   |   feature7 < 0.28 : classG (30.9/13.91) [1.35/1.35]
|   |   |   feature7 >= 0.28
|   |   |   |   feature5 = classA : classE (3.08/0.97) [0.35/0.13]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classA (0.02/0.01) [4.92/0]
|   |   |   |   feature5 = classD : classD (16.66/9.77) [0.73/0.73]
|   |   |   |   feature5 = classE : classE (68.85/26.66) [40.53/23.36]
|   |   |   |   feature5 = classF : classF (58.56/22.65) [6.01/0]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   feature7 >= 0.45
|   |   |   feature7 < 0.52
|   |   |   |   feature11 < 0.8
|   |   |   |   |   feature8 < 0.42 : classE (4.23/1.45) [1.13/0.2]
|   |   |   |   |   feature8 >= 0.42
|   |   |   |   |   |   feature10 < 0.48 : classF (6.75/2.68) [1.85/1.53]
|   |   |   |   |   |   feature10 >= 0.48 : classD (83.51/11.56) [27.29/27.29]
|   |   |   |   feature11 >= 0.8 : classE (5.17/1.98) [0.41/0.25]
|   |   |   feature7 >= 0.52 : classF (54.12/32.27) [11.74/0.94]
|   prevPredS = classF : classF (676.32/310.98) [477.27/298.27]
|   prevPredS = classG
|   |   feature10 < 0.48
|   |   |   feature7 < 0.48 : classE (14.46/4.39) [0.74/0.63]
|   |   |   feature7 >= 0.48 : classF (6.18/2.18) [2.56/0]
|   |   feature10 >= 0.48
|   |   |   feature7 < 0.68
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.47
|   |   |   |   |   |   feature7 < 0.28 : classG (4.47/0.59) [0.2/0.2]
|   |   |   |   |   |   feature7 >= 0.28
|   |   |   |   |   |   |   feature2 = classA : classF (6.19/1.62) [0.38/0]
|   |   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (0/0) [43.99/0]
|   |   |   |   |   |   |   feature2 = classE : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classF : classF (1.91/0.5) [0.47/0]
|   |   |   |   |   |   |   feature2 = classG : classG (3.24/1.93) [0.69/0.14]
|   |   |   |   |   feature7 >= 0.47 : classG (7.36/5.41) [2.85/0.79]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature2 = classA : classF (8.94/3.14) [1.33/0]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (0.01/0) [0/0]
|   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classF : classF (4.73/1.65) [1.9/0]
|   |   |   |   |   feature2 = classG
|   |   |   |   |   |   feature10 < 0.52 : classF (3.56/1.14) [2.97/0.22]
|   |   |   |   |   |   feature10 >= 0.52 : classG (22.8/4.26) [1.93/1.17]
|   |   |   feature7 >= 0.68
|   |   |   |   feature2 = classA : classF (3.38/0.01) [3.07/1.95]
|   |   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   feature2 = classE : classF (0/0) [0/0]
|   |   |   |   feature2 = classF : classF (8.76/0) [3.43/0]
|   |   |   |   feature2 = classG : classG (0.5/0.07) [0.13/0.02]
predS = classG
|   feature6 = classA : classG (7.13/2.18) [1.48/0.79]
|   feature6 = classB : classA (11.5/5.88) [3.16/3.02]
|   feature6 = classC
|   |   prevPredS = classA : classF (1.2/0.8) [0.28/0.1]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC : classA (9.23/2.34) [1.02/1]
|   |   prevPredS = classD : classG (0.09/0.02) [0.08/0.01]
|   |   prevPredS = classE : classA (6.06/1.02) [5.38/0.44]
|   |   prevPredS = classF : classF (1.39/0.36) [0.35/0.06]
|   |   prevPredS = classG : classG (1.31/0.74) [0.28/0.11]
|   feature6 = classD
|   |   feature2 = classA
|   |   |   feature8 < 0.62 : classG (2.44/1.34) [0.31/0.14]
|   |   |   feature8 >= 0.62
|   |   |   |   prevPredS = classA : classD (3.26/3.26) [6.28/1.37]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   prevPredS = classD : classG (0.02/0) [0/0]
|   |   |   |   prevPredS = classE : classE (0.12/0.12) [0.12/0.01]
|   |   |   |   prevPredS = classF : classG (0.02/0) [0.03/0]
|   |   |   |   prevPredS = classG : classA (14.76/2.2) [1.59/0.75]
|   |   feature2 = classB : classD (0/0) [0/0]
|   |   feature2 = classC : classC (0.02/0) [0/0]
|   |   feature2 = classD
|   |   |   feature5 = classA : classD (0/0) [0/0]
|   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   feature5 = classD
|   |   |   |   prevPredS = classA : classF (1.42/0.83) [0.32/0.06]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature7 < 0.48 : classD (2.31/0.39) [1.86/0.13]
|   |   |   |   |   feature7 >= 0.48 : classD (11.91/1.7) [3.77/1.5]
|   |   |   |   prevPredS = classE : classD (1.13/0.35) [0.26/0.25]
|   |   |   |   prevPredS = classF : classG (0.04/0.01) [0.06/0]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature8 < 0.46 : classG (2.2/0.3) [0.11/0.1]
|   |   |   |   |   feature8 >= 0.46 : classD (12.89/3.49) [8.05/0.67]
|   |   |   feature5 = classE : classD (0/0) [0/0]
|   |   |   feature5 = classF : classD (0/0) [0/0]
|   |   |   feature5 = classG : classG (15.12/2.59) [11.79/0.9]
|   |   feature2 = classE
|   |   |   prevPredS = classA : classF (1.38/0.93) [0.24/0.04]
|   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   prevPredS = classD : classG (0.02/0) [0/0]
|   |   |   prevPredS = classE
|   |   |   |   feature8 < 0.66 : classA (2.67/0.83) [0.38/0.38]
|   |   |   |   feature8 >= 0.66 : classD (5.85/0.94) [0.38/0.38]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.42 : classA (7.96/1.04) [0.38/0.38]
|   |   |   |   feature7 >= 0.42 : classF (2.31/0.12) [0.16/0.03]
|   |   |   prevPredS = classG : classG (1.29/0.18) [0.19/0.06]
|   |   feature2 = classF : classD (7.51/2.59) [4.89/1.43]
|   |   feature2 = classG : classD (428.51/99.27) [52.59/35.17]
|   feature6 = classE
|   |   feature2 = classA
|   |   |   feature7 < 0.45 : classE (36.75/7.07) [3.71/2.17]
|   |   |   feature7 >= 0.45
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature10 < 0.95 : classA (3.32/1.58) [1.54/0.2]
|   |   |   |   |   |   feature10 >= 0.95 : classE (2.31/0.36) [1.11/0.14]
|   |   |   |   |   feature7 >= 0.58 : classA (9.05/3.16) [2.2/1.1]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   prevPredS = classD : classG (0.07/0.01) [0/0]
|   |   |   |   prevPredS = classE : classG (0.04/0.01) [0/0]
|   |   |   |   prevPredS = classF : classG (0.11/0.02) [0.01/0.01]
|   |   |   |   prevPredS = classG : classA (39.94/7.22) [12.26/12.14]
|   |   feature2 = classB : classD (0/0) [0/0]
|   |   feature2 = classC : classC (0.02/0) [0/0]
|   |   feature2 = classD : classG (12.96/5.96) [3.24/0.98]
|   |   feature2 = classE : classA (86.21/54.19) [36.29/18.84]
|   |   feature2 = classF : classG (1.65/0.97) [1.2/0.55]
|   |   feature2 = classG
|   |   |   prevPredS = classA
|   |   |   |   feature10 < 0.68
|   |   |   |   |   feature10 < 0.57 : classC (6.3/1.13) [0.53/0.53]
|   |   |   |   |   feature10 >= 0.57 : classG (2.15/0.29) [0.77/0.1]
|   |   |   |   feature10 >= 0.68 : classF (10.42/3.8) [3.12/0.03]
|   |   |   prevPredS = classB : classG (0.14/0.02) [0.13/0.01]
|   |   |   prevPredS = classC : classG (1.17/0.16) [0.06/0.06]
|   |   |   prevPredS = classD : classG (0.78/0.11) [0.06/0.04]
|   |   |   prevPredS = classE
|   |   |   |   feature10 < 0.28 : classE (6/1.09) [5.22/0.3]
|   |   |   |   feature10 >= 0.28 : classG (6.5/1.62) [4.03/2.91]
|   |   |   prevPredS = classF : classG (4.44/0.6) [2.36/0.21]
|   |   |   prevPredS = classG
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature7 < 0.48 : classG (3.49/0.46) [1.15/0.15]
|   |   |   |   |   |   feature7 >= 0.48 : classF (2.77/0.4) [2.26/0.8]
|   |   |   |   |   feature7 >= 0.58 : classD (358.92/47.11) [15.83/15.83]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature5 = classA : classG (0.33/0.04) [0.28/0.01]
|   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classG (0.22/0.03) [0.13/0.01]
|   |   |   |   |   feature5 = classE : classG (0.34/0.04) [0.51/0.01]
|   |   |   |   |   feature5 = classF : classF (4.53/0.72) [1.91/0.65]
|   |   |   |   |   feature5 = classG : classG (11.59/1.52) [4.92/0.51]
|   feature6 = classF
|   |   feature10 < 0.98
|   |   |   feature10 < 0.62
|   |   |   |   prevPredS = classA : classA (10.19/3.23) [0.71/0.63]
|   |   |   |   prevPredS = classB : classG (0.03/0) [0.03/0]
|   |   |   |   prevPredS = classC : classG (0.01/0) [0/0]
|   |   |   |   prevPredS = classD : classG (0.42/0.06) [0.45/0.02]
|   |   |   |   prevPredS = classE : classG (1.57/0.85) [0.88/0.83]
|   |   |   |   prevPredS = classF : classA (10.58/3.67) [5.27/1.81]
|   |   |   |   prevPredS = classG : classA (4.28/2.3) [0.57/0.5]
|   |   |   feature10 >= 0.62
|   |   |   |   prevPredS = classA : classD (13.01/13.01) [47.71/3.72]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classC (0/0) [0/0]
|   |   |   |   prevPredS = classD : classD (0.14/0.09) [0.05/0.01]
|   |   |   |   prevPredS = classE : classD (0/0) [0/0]
|   |   |   |   prevPredS = classF : classF (9.7/0.13) [3.7/0.03]
|   |   |   |   prevPredS = classG : classG (4.77/2.56) [1.37/0.66]
|   |   feature10 >= 0.98
|   |   |   feature7 < 0.45 : classE (57.48/7.87) [52.23/2.62]
|   |   |   feature7 >= 0.45 : classF (9.53/1.05) [11.67/0.2]
|   feature6 = classG
|   |   feature10 < 0.65
|   |   |   prevPredS = classA
|   |   |   |   feature10 < 0.32 : classA (40.83/5.94) [2.03/2.03]
|   |   |   |   feature10 >= 0.32
|   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   feature10 < 0.5 : classG (8.85/2.79) [2.44/1.36]
|   |   |   |   |   |   feature10 >= 0.5
|   |   |   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   |   |   feature7 < 0.48 : classC (8.41/1.23) [0.41/0.41]
|   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   feature7 < 0.53 : classC (7.88/1.15) [0.42/0.42]
|   |   |   |   |   |   |   |   |   feature7 >= 0.53 : classC (5.57/0.82) [0.26/0.26]
|   |   |   |   |   |   |   feature10 >= 0.55 : classG (5.81/0.8) [2.77/0.27]
|   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   feature7 < 0.9 : classG (2.75/0.53) [2.26/0.23]
|   |   |   |   |   |   feature7 >= 0.9 : classA (28.59/3.76) [1.25/1.25]
|   |   |   prevPredS = classB : classG (0.35/0.05) [0.31/0.02]
|   |   |   prevPredS = classC : classG (0.07/0.01) [0/0]
|   |   |   prevPredS = classD : classG (6.09/0.83) [6.22/0.29]
|   |   |   prevPredS = classE : classG (20.77/10.8) [11.46/10.37]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.45 : classF (6.18/0.07) [2.94/2.67]
|   |   |   |   feature7 >= 0.45 : classG (5.23/0.81) [3.96/0.27]
|   |   |   prevPredS = classG
|   |   |   |   feature8 < 0.58
|   |   |   |   |   feature2 = classA : classG (3.2/1.49) [0.37/0.15]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classG (12.76/1.74) [0.65/0.6]
|   |   |   |   |   feature2 = classE : classG (0.14/0.02) [0.12/0.01]
|   |   |   |   |   feature2 = classF : classF (0.28/0) [0.01/0]
|   |   |   |   |   feature2 = classG : classG (2.61/0.36) [0.69/0.12]
|   |   |   |   feature8 >= 0.58
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   |   feature7 < 0.45 : classA (70.51/17.18) [22.89/4.93]
|   |   |   |   |   |   |   feature7 >= 0.45 : classF (9.27/2.67) [6.27/2.28]
|   |   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   |   feature7 < 0.65 : classA (905.83/119.47) [40.45/40.45]
|   |   |   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   |   |   feature7 < 0.72 : classG (4.3/0.56) [1.21/0.19]
|   |   |   |   |   |   |   |   feature7 >= 0.72 : classA (28.25/4.53) [1.52/1.52]
|   |   |   |   |   feature7 >= 0.75 : classG (8.96/1.17) [4.68/0.69]
|   |   feature10 >= 0.65
|   |   |   feature5 = classA
|   |   |   |   feature10 < 0.92
|   |   |   |   |   feature10 < 0.72
|   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   feature2 = classA : classG (3.25/0.49) [1.07/0.15]
|   |   |   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classF : classF (0.57/0.08) [0.47/0.03]
|   |   |   |   |   |   |   feature2 = classG : classG (2.71/0.37) [0.27/0.13]
|   |   |   |   |   |   feature10 >= 0.68 : classE (2.26/0.36) [0.12/0.12]
|   |   |   |   |   feature10 >= 0.72
|   |   |   |   |   |   feature10 < 0.75 : classA (12.1/2.09) [0.6/0.6]
|   |   |   |   |   |   feature10 >= 0.75
|   |   |   |   |   |   |   feature8 < 0.9 : classG (5.38/1.83) [14.47/0.75]
|   |   |   |   |   |   |   feature8 >= 0.9 : classA (9.07/4.07) [4.94/2.29]
|   |   |   |   feature10 >= 0.92 : classG (10.67/1.59) [6.69/0.5]
|   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   feature5 = classC : classC (0.06/0.02) [0.01/0.01]
|   |   |   feature5 = classD : classG (8.27/2.59) [1.48/1.16]
|   |   |   feature5 = classE : classG (0.16/0.04) [0.13/0.01]
|   |   |   feature5 = classF
|   |   |   |   feature10 < 0.82 : classF (12.62/1.34) [4.17/0.18]
|   |   |   |   feature10 >= 0.82 : classG (6.82/3.58) [0.92/0.32]
|   |   |   feature5 = classG
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.58 : classE (12.32/2.01) [0.77/0.77]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature10 < 0.73 : classG (5/0.65) [1.74/0.3]
|   |   |   |   |   |   feature10 >= 0.73
|   |   |   |   |   |   |   feature7 < 0.72 : classF (16.77/0.08) [8/0.02]
|   |   |   |   |   |   |   feature7 >= 0.72 : classG (2.28/0.3) [2.06/0.1]
|   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   prevPredS = classD : classG (2.33/0.32) [0.12/0.11]
|   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   prevPredS = classF : classG (0/0) [0/0]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature7 < 0.48 : classG (6.36/0.83) [2.97/0.28]
|   |   |   |   |   |   feature7 >= 0.48 : classF (2.98/1.49) [1.6/0.73]
|   |   |   |   |   feature7 >= 0.52 : classG (201.62/26.38) [98.65/8.79]

Size of the tree : 1295

Weight: 0.83


REPTree
============

predS = classA
|   feature7 < 0.62
|   |   prevPredS = classA
|   |   |   feature10 < 0.48
|   |   |   |   feature7 < 0.53
|   |   |   |   |   feature10 < 0.4 : classB (8.8/8.8) [22.35/4.54]
|   |   |   |   |   feature10 >= 0.4 : classD (214.66/58.59) [19.39/12.19]
|   |   |   |   feature7 >= 0.53 : classG (79.04/44.29) [9.93/9.93]
|   |   |   feature10 >= 0.48
|   |   |   |   feature3 = classA
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature10 < 0.57 : classG (5.04/2.4) [0.29/0.29]
|   |   |   |   |   |   feature10 >= 0.57
|   |   |   |   |   |   |   feature6 = classA : classA (5.17/1.38) [1.02/0.26]
|   |   |   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classD : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classE : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classF : classE (9.83/2.77) [0.6/0.6]
|   |   |   |   |   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.48 : classF (21.36/11.54) [2.78/0.66]
|   |   |   |   feature3 = classB
|   |   |   |   |   feature10 < 0.85
|   |   |   |   |   |   feature7 < 0.42 : classA (2.25/0.75) [2.81/0.29]
|   |   |   |   |   |   feature7 >= 0.42 : classG (9.58/4.12) [0.05/0.05]
|   |   |   |   |   feature10 >= 0.85
|   |   |   |   |   |   feature7 < 0.52 : classB (11.15/3.05) [0.58/0.58]
|   |   |   |   |   |   feature7 >= 0.52 : classF (8.34/3) [1.62/0.02]
|   |   |   |   feature3 = classC
|   |   |   |   |   feature7 < 0.52 : classG (5.76/2.2) [0.8/0.8]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   feature10 < 0.97 : classF (2.97/0.35) [1.22/0]
|   |   |   |   |   |   |   feature10 >= 0.97 : classC (11.11/3) [8.12/0.02]
|   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   feature7 < 0.58 : classA (2.7/2.69) [3.39/0.17]
|   |   |   |   |   |   |   feature7 >= 0.58 : classG (4.6/1.49) [0.07/0.07]
|   |   |   |   feature3 = classD
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature2 = classA : classD (28.92/16.71) [1.4/0.15]
|   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classA (11.15/5.83) [1.95/0.49]
|   |   |   |   |   |   feature2 = classE : classA (0/0) [0.1/0]
|   |   |   |   |   |   feature2 = classF : classA (4.71/2.46) [0.23/0.2]
|   |   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   feature8 < 0.76
|   |   |   |   |   |   |   |   feature5 = classA : classA (6.61/2.9) [3.01/0]
|   |   |   |   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classE : classA (0.02/0.01) [0/0]
|   |   |   |   |   |   |   |   feature5 = classF : classF (4.41/0.75) [0.49/0]
|   |   |   |   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature8 >= 0.76 : classF (9.38/1.61) [3.51/0]
|   |   |   |   |   |   feature7 >= 0.58 : classG (12.97/3.99) [0.17/0.17]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   |   feature7 < 0.45 : classG (19.73/7.68) [1.09/1.09]
|   |   |   |   |   |   |   feature7 >= 0.45 : classA (19.5/13.53) [3.57/0]
|   |   |   |   |   |   feature10 >= 0.58 : classG (22.07/6.83) [0.63/0.63]
|   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature8 < 0.5 : classA (24.82/6.65) [1.41/1.26]
|   |   |   |   |   |   |   feature8 >= 0.5
|   |   |   |   |   |   |   |   feature10 < 0.77 : classA (10.3/2.76) [0.59/0.52]
|   |   |   |   |   |   |   |   feature10 >= 0.77 : classE (27.16/8.14) [14.35/2.18]
|   |   |   |   |   |   feature7 >= 0.52 : classF (65.23/29.06) [12.21/2.55]
|   |   |   |   feature3 = classF
|   |   |   |   |   feature10 < 0.75
|   |   |   |   |   |   feature10 < 0.52 : classA (3.07/1.29) [0.09/0.08]
|   |   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   |   |   feature7 < 0.53
|   |   |   |   |   |   |   |   |   feature10 < 0.57 : classG (15.77/6.88) [0.58/0.58]
|   |   |   |   |   |   |   |   |   feature10 >= 0.57 : classG (12.88/3.51) [0.47/0.47]
|   |   |   |   |   |   |   |   feature7 >= 0.53 : classG (8.98/4.66) [0.04/0.04]
|   |   |   |   |   |   |   feature10 >= 0.62 : classA (2.87/1.21) [0.94/0.07]
|   |   |   |   |   feature10 >= 0.75
|   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   feature7 < 0.55 : classF (48.82/0.66) [45.96/34.43]
|   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   feature5 = classA : classA (6.97/3.44) [7.07/0]
|   |   |   |   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classE : classA (0.04/0.02) [0/0]
|   |   |   |   |   |   |   |   feature5 = classF : classF (9.31/2.09) [0.96/0]
|   |   |   |   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   feature7 >= 0.58 : classA (30.6/30.51) [40.92/0]
|   |   |   |   feature3 = classG
|   |   |   |   |   feature7 < 0.37 : classA (12.19/3.57) [1.44/1.29]
|   |   |   |   |   feature7 >= 0.37
|   |   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   |   feature7 < 0.53 : classG (11.14/4.32) [0.34/0.34]
|   |   |   |   |   |   |   feature7 >= 0.53 : classA (15.29/9.95) [1.7/0]
|   |   |   |   |   |   feature10 >= 0.92 : classF (13.37/4.64) [3.04/0.38]
|   |   prevPredS = classB
|   |   |   feature7 < 0.58
|   |   |   |   feature10 < 0.52 : classB (23.74/6.47) [0.78/0.78]
|   |   |   |   feature10 >= 0.52 : classA (85.61/51.32) [18.25/2.52]
|   |   |   feature7 >= 0.58 : classG (20.4/5.49) [0.13/0.13]
|   |   prevPredS = classC : classC (18.15/10.52) [16.79/3.92]
|   |   prevPredS = classD
|   |   |   feature3 = classA
|   |   |   |   feature10 < 0.43 : classG (21.75/6.73) [0.63/0.63]
|   |   |   |   feature10 >= 0.43 : classA (2.58/1.09) [0.32/0.06]
|   |   |   feature3 = classB : classA (1.36/0.57) [0.05/0.03]
|   |   |   feature3 = classC : classA (2.51/1.06) [0.1/0.06]
|   |   |   feature3 = classD
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature10 < 0.62 : classD (17.09/7.37) [3.97/1.86]
|   |   |   |   |   feature10 >= 0.62 : classA (20.81/6.57) [1.18/0.65]
|   |   |   |   feature7 >= 0.58 : classG (7.07/1.91) [0.05/0.05]
|   |   |   feature3 = classE : classA (1.36/0.57) [0.05/0.03]
|   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   feature3 = classG : classD (15.8/7.71) [8.71/0.22]
|   |   prevPredS = classE
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.28
|   |   |   |   |   feature10 < 0.53 : classB (55.83/15) [0/0]
|   |   |   |   |   feature10 >= 0.53 : classD (43.19/11.6) [0/0]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature5 = classA : classA (0.21/0.07) [0.01/0.01]
|   |   |   |   |   feature5 = classB : classB (12.21/4.11) [0.75/0.75]
|   |   |   |   |   feature5 = classC : classA (2.44/0.87) [0.15/0.13]
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature7 < 0.32 : classD (4.83/1.29) [0.69/0]
|   |   |   |   |   |   feature7 >= 0.32 : classA (7.79/3.16) [3.91/0.7]
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   |   |   feature7 < 0.37 : classE (14.73/4.13) [6.93/3.4]
|   |   |   |   |   |   |   |   feature7 >= 0.37 : classA (34.22/12.71) [7.07/0]
|   |   |   |   |   |   |   feature8 >= 0.82 : classE (27.73/7.66) [14.46/14.46]
|   |   |   |   |   |   feature7 >= 0.55 : classB (10.03/2.69) [0/0]
|   |   |   |   |   feature5 = classF : classA (0.41/0.14) [0.1/0.02]
|   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   feature7 >= 0.58 : classG (39.85/10.73) [0.25/0.25]
|   |   prevPredS = classF
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature5 = classA : classA (0.03/0.01) [0/0]
|   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classA (0.87/0.24) [0.1/0.09]
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classA (2.97/0.8) [1.3/0.53]
|   |   |   |   |   |   |   feature2 = classF : classA (3.51/0.94) [3.19/0.63]
|   |   |   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   feature7 >= 0.52 : classD (4.83/1.29) [0/0]
|   |   |   |   |   feature5 = classE : classE (22.87/6.68) [2.89/2.89]
|   |   |   |   |   feature5 = classF
|   |   |   |   |   |   feature8 < 0.9 : classF (10.71/0.14) [28.75/19.75]
|   |   |   |   |   |   feature8 >= 0.9 : classA (5.46/1.47) [0.63/0.56]
|   |   |   |   |   feature5 = classG : classA (0.55/0.15) [0.06/0.06]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   feature10 < 0.35 : classC (97.32/34.18) [0/0]
|   |   |   |   |   feature10 >= 0.35 : classA (2.38/1.15) [0.32/0.32]
|   |   |   feature7 >= 0.58
|   |   |   |   feature5 = classA : classG (8.21/5.03) [0.03/0.03]
|   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   feature5 = classC : classG (0.32/0.2) [0/0]
|   |   |   |   feature5 = classD : classG (16.54/10.13) [0.06/0.06]
|   |   |   |   feature5 = classE : classG (9.93/6.08) [0.24/0.24]
|   |   |   |   feature5 = classF : classF (28.85/11.18) [2.58/0.09]
|   |   |   |   feature5 = classG : classF (0/0) [0/0]
|   |   prevPredS = classG
|   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   feature3 = classB : classA (3.87/1.8) [1/0.26]
|   |   |   feature3 = classC : classA (0.03/0.02) [0.01/0]
|   |   |   feature3 = classD
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature2 = classA : classD (2.94/1.18) [0.59/0.5]
|   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classA (5.81/2.12) [1.16/0.17]
|   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classD (6.45/2.59) [5.61/1.89]
|   |   |   |   feature7 >= 0.58 : classG (2.83/0.76) [0.02/0.02]
|   |   |   feature3 = classE : classF (0/0) [0/0]
|   |   |   feature3 = classF
|   |   |   |   feature7 < 0.53
|   |   |   |   |   feature10 < 0.45 : classA (5.03/1.35) [5.4/0.16]
|   |   |   |   |   feature10 >= 0.45 : classF (20.37/1.48) [8.13/2.12]
|   |   |   |   feature7 >= 0.53 : classG (6.72/3.03) [0.03/0.03]
|   |   |   feature3 = classG
|   |   |   |   feature7 < 0.42
|   |   |   |   |   feature8 < 0.72 : classA (7.08/2.51) [2.38/0.35]
|   |   |   |   |   feature8 >= 0.72 : classG (6.41/3.19) [5.37/2.15]
|   |   |   |   feature7 >= 0.42 : classG (13.41/4.69) [1.2/0.03]
|   feature7 >= 0.62
|   |   feature7 < 0.72
|   |   |   feature7 < 0.68
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature3 = classA : classA (0.35/0.17) [0/0]
|   |   |   |   |   feature3 = classB : classA (0.78/0.38) [0/0]
|   |   |   |   |   feature3 = classC : classA (0.47/0.4) [0.59/0.09]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature8 < 0.7 : classA (25.91/12.6) [5.7/0]
|   |   |   |   |   |   feature8 >= 0.7 : classD (27.54/9.22) [0.01/0]
|   |   |   |   |   feature3 = classE : classE (178.62/116.05) [13.26/0.67]
|   |   |   |   |   feature3 = classF
|   |   |   |   |   |   feature10 < 0.82 : classE (61.71/30.12) [0/0]
|   |   |   |   |   |   feature10 >= 0.82 : classA (4.06/1.94) [1.81/0]
|   |   |   |   |   feature3 = classG : classG (1.35/0.79) [34.39/5.7]
|   |   |   |   feature7 >= 0.65
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature3 = classA : classA (1.05/0.3) [0.39/0]
|   |   |   |   |   |   feature3 = classB : classB (5.17/1.64) [7.21/0.15]
|   |   |   |   |   |   feature3 = classC : classA (0.53/0.16) [0.2/0]
|   |   |   |   |   |   feature3 = classD : classA (10.7/3.07) [1.92/0]
|   |   |   |   |   |   feature3 = classE : classA (3.98/1.14) [1.02/0]
|   |   |   |   |   |   feature3 = classF : classA (11.87/3.4) [0.34/0]
|   |   |   |   |   |   feature3 = classG : classG (6.53/3) [1.1/1.1]
|   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classA (1.04/0.33) [0.88/0.03]
|   |   |   |   |   prevPredS = classD : classA (0.11/0.03) [0/0]
|   |   |   |   |   prevPredS = classE : classA (18.42/4.94) [0.35/0]
|   |   |   |   |   prevPredS = classF : classE (10.45/4.03) [0.26/0.26]
|   |   |   |   |   prevPredS = classG : classG (19.78/5.65) [3.61/0.08]
|   |   |   feature7 >= 0.68 : classE (484.84/220.1) [128.78/128.78]
|   |   feature7 >= 0.72
|   |   |   feature7 < 0.88
|   |   |   |   feature10 < 0.82
|   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   feature8 < 0.86 : classA (81.5/29.9) [17.67/0.44]
|   |   |   |   |   |   feature8 >= 0.86
|   |   |   |   |   |   |   feature10 < 0.58 : classA (2.17/1.62) [1.09/0]
|   |   |   |   |   |   |   feature10 >= 0.58 : classF (8.91/0.1) [6.43/0.01]
|   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   feature9 < 0.88
|   |   |   |   |   |   |   feature2 = classA : classA (26.06/6.99) [11.45/0]
|   |   |   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classA (12.74/3.42) [0.98/0]
|   |   |   |   |   |   |   feature2 = classF : classA (5.55/1.49) [1.6/0]
|   |   |   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   feature9 >= 0.88
|   |   |   |   |   |   |   feature11 < 0.88 : classE (62.78/17.89) [9.64/1.54]
|   |   |   |   |   |   |   feature11 >= 0.88 : classA (21.57/7.2) [10.46/0.01]
|   |   |   |   feature10 >= 0.82
|   |   |   |   |   feature10 < 0.85
|   |   |   |   |   |   feature7 < 0.78
|   |   |   |   |   |   |   feature7 < 0.75 : classB (5.31/5.31) [32.73/4.04]
|   |   |   |   |   |   |   feature7 >= 0.75 : classD (507.56/142.28) [22.01/21.99]
|   |   |   |   |   |   feature7 >= 0.78 : classA (6.06/1.62) [3.55/0]
|   |   |   |   |   feature10 >= 0.85
|   |   |   |   |   |   feature6 = classA : classA (2.82/0.76) [3.06/0]
|   |   |   |   |   |   feature6 = classB : classA (1.84/0.49) [1.81/0]
|   |   |   |   |   |   feature6 = classC : classA (1.8/1.05) [0.69/0.29]
|   |   |   |   |   |   feature6 = classD
|   |   |   |   |   |   |   feature7 < 0.85 : classA (31.19/8.38) [11.25/0]
|   |   |   |   |   |   |   feature7 >= 0.85
|   |   |   |   |   |   |   |   feature8 < 0.98 : classA (4.37/1.18) [2.88/0]
|   |   |   |   |   |   |   |   feature8 >= 0.98 : classD (55.86/15.01) [0.01/0.01]
|   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   feature9 < 0.98 : classA (75.65/20.29) [101.48/72.42]
|   |   |   |   |   |   |   feature9 >= 0.98 : classE (12.27/4.18) [9.37/1.28]
|   |   |   |   |   |   feature6 = classF
|   |   |   |   |   |   |   feature7 < 0.78 : classF (88.59/1.71) [0.59/0.59]
|   |   |   |   |   |   |   feature7 >= 0.78
|   |   |   |   |   |   |   |   feature9 < 0.95 : classA (4.5/1.21) [0.93/0]
|   |   |   |   |   |   |   |   feature9 >= 0.95
|   |   |   |   |   |   |   |   |   feature8 < 0.98
|   |   |   |   |   |   |   |   |   |   feature7 < 0.85 : classA (3.94/1.06) [0.46/0]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.85 : classF (2.42/0.1) [1.18/0.07]
|   |   |   |   |   |   |   |   |   feature8 >= 0.98 : classF (11.59/1.03) [2.71/0.22]
|   |   |   |   |   |   feature6 = classG : classG (8.56/3.59) [2.94/0.45]
|   |   |   feature7 >= 0.88
|   |   |   |   feature8 < 0.46
|   |   |   |   |   feature10 < 0.98 : classA (44.74/13.24) [11.93/0]
|   |   |   |   |   feature10 >= 0.98
|   |   |   |   |   |   feature9 < 0.85
|   |   |   |   |   |   |   feature7 < 0.95 : classE (99.08/26.66) [0.43/0.43]
|   |   |   |   |   |   |   feature7 >= 0.95 : classA (2.15/0.58) [2.01/0]
|   |   |   |   |   |   feature9 >= 0.85 : classA (4.57/1.23) [1.95/0]
|   |   |   |   feature8 >= 0.46
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature10 < 0.55 : classA (8.1/4.85) [2.78/0]
|   |   |   |   |   |   feature10 >= 0.55 : classA (264.74/71.03) [94.46/0.01]
|   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classA (0.89/0.49) [1.07/0.13]
|   |   |   |   |   prevPredS = classD : classA (2.42/0.67) [13.12/0.02]
|   |   |   |   |   prevPredS = classE : classA (23.76/6.38) [4.23/0]
|   |   |   |   |   prevPredS = classF : classA (4.12/1.31) [2.01/0.2]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature11 < 0.95 : classA (12.31/3.3) [1.19/0]
|   |   |   |   |   |   feature11 >= 0.95
|   |   |   |   |   |   |   feature10 < 0.7 : classA (3.3/0.96) [0.4/0.08]
|   |   |   |   |   |   |   feature10 >= 0.7 : classG (4.94/1.35) [2.77/0]
predS = classB
|   feature6 = classA : classA (0/0) [0/0]
|   feature6 = classB
|   |   feature7 < 0.62
|   |   |   feature10 < 0.45 : classE (21.08/8.04) [41.3/3.69]
|   |   |   feature10 >= 0.45
|   |   |   |   feature7 < 0.57
|   |   |   |   |   feature10 < 0.62 : classA (26.66/13.07) [0/0]
|   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   |   feature7 < 0.43
|   |   |   |   |   |   |   |   prevPredS = classA : classB (6.79/1.82) [1.7/0]
|   |   |   |   |   |   |   |   prevPredS = classB : classB (11.64/3.12) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classC (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classB (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classE : classB (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classF : classB (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classG : classB (0/0) [0/0]
|   |   |   |   |   |   |   feature7 >= 0.43 : classB (4.02/1.99) [0/0]
|   |   |   |   |   |   feature10 >= 0.98 : classA (34.74/21.85) [9.06/3.83]
|   |   |   |   feature7 >= 0.57
|   |   |   |   |   feature8 < 0.98 : classB (7.05/1.96) [2.61/0]
|   |   |   |   |   feature8 >= 0.98 : classA (50.58/14.95) [0.91/0.91]
|   |   feature7 >= 0.62 : classB (342.81/129.57) [281.04/175.6]
|   feature6 = classC : classA (297.6/127.09) [125.05/18.9]
|   feature6 = classD : classA (14.19/9.44) [9.37/0.87]
|   feature6 = classE
|   |   prevPredS = classA
|   |   |   feature10 < 0.33 : classB (12.75/4.01) [0.18/0]
|   |   |   feature10 >= 0.33 : classE (4.97/2.82) [1.5/0.43]
|   |   prevPredS = classB
|   |   |   feature7 < 0.32 : classE (19.3/5.18) [0/0]
|   |   |   feature7 >= 0.32
|   |   |   |   feature10 < 0.92 : classB (3.21/1.19) [0.72/0]
|   |   |   |   feature10 >= 0.92 : classA (12.5/7.89) [33.66/2.09]
|   |   prevPredS = classC : classE (16.87/6.27) [0.32/0.32]
|   |   prevPredS = classD : classA (0/0) [0/0]
|   |   prevPredS = classE : classB (8.58/3.12) [0.12/0]
|   |   prevPredS = classF : classG (11.8/4.74) [4.14/0.61]
|   |   prevPredS = classG : classG (0/0) [0.24/0]
|   feature6 = classF
|   |   feature7 < 0.28 : classC (87.32/23.41) [0/0]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.85
|   |   |   |   feature7 < 0.82
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   prevPredS = classA : classE (5.67/2.26) [2.19/0.48]
|   |   |   |   |   |   prevPredS = classB : classA (2.66/1.39) [0.48/0]
|   |   |   |   |   |   prevPredS = classC : classC (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classA (1.09/0.58) [0/0]
|   |   |   |   |   |   prevPredS = classF : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classG : classG (0/0) [0.38/0]
|   |   |   |   |   feature7 >= 0.48 : classB (4.18/1.16) [0.92/0]
|   |   |   |   feature7 >= 0.82 : classC (11.28/3.09) [8.2/0.11]
|   |   |   feature7 >= 0.85 : classA (31.01/21.14) [55.22/5.46]
|   feature6 = classG : classA (0.9/0.37) [0.37/0.05]
predS = classC
|   prevPredS = classA
|   |   feature7 < 0.32 : classC (122.54/43.29) [50.81/45.11]
|   |   feature7 >= 0.32
|   |   |   feature3 = classA : classC (6.2/3.21) [6.57/1.51]
|   |   |   feature3 = classB
|   |   |   |   feature10 < 0.7
|   |   |   |   |   feature7 < 0.38 : classG (7.81/3.02) [1.6/0]
|   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   feature7 < 0.65 : classF (9.14/4.6) [1.39/0]
|   |   |   |   |   |   feature7 >= 0.65 : classA (7.62/3.92) [5.49/1.59]
|   |   |   |   feature10 >= 0.7
|   |   |   |   |   feature7 < 0.47 : classB (41.84/13.11) [8.05/8.05]
|   |   |   |   |   feature7 >= 0.47 : classD (5.33/3.68) [2.01/1]
|   |   |   feature3 = classC
|   |   |   |   feature10 < 0.63
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   feature10 < 0.52 : classG (25.4/7.64) [5.92/0]
|   |   |   |   |   |   |   feature10 >= 0.52 : classC (3.3/0.99) [0/0]
|   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   feature10 < 0.47 : classF (14.19/2.64) [5.16/0]
|   |   |   |   |   |   |   feature10 >= 0.47 : classC (2.45/0.97) [0/0]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.82 : classA (35.17/24.22) [6.26/3.68]
|   |   |   |   |   |   feature7 >= 0.82 : classC (19.83/6.65) [5.92/0]
|   |   |   |   feature10 >= 0.63
|   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   feature7 < 0.35 : classA (48.69/13.06) [35.52/35.51]
|   |   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   |   feature7 < 0.55 : classE (17.43/8.43) [0/0]
|   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   feature7 < 0.6
|   |   |   |   |   |   |   |   |   |   feature10 < 0.82 : classA (8.78/2.35) [0/0]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.82 : classC (2.1/0.57) [0.51/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.6 : classC (13.73/8.14) [10.94/4.45]
|   |   |   |   |   |   feature7 >= 0.75 : classA (63.9/17.14) [14.05/2.2]
|   |   |   |   |   feature7 >= 0.82 : classC (10.6/5.05) [9.85/0]
|   |   |   feature3 = classD : classD (2.01/1.92) [4.06/0.25]
|   |   |   feature3 = classE : classA (0/0) [0/0]
|   |   |   feature3 = classF : classA (0/0) [0/0]
|   |   |   feature3 = classG
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature7 < 0.6
|   |   |   |   |   |   feature7 < 0.38 : classD (2.01/2.01) [2.45/0.41]
|   |   |   |   |   |   feature7 >= 0.38 : classF (3.3/1.89) [0.39/0.04]
|   |   |   |   |   feature7 >= 0.6 : classG (10.82/3.75) [3.54/0]
|   |   |   |   feature7 >= 0.65 : classA (2.07/1.11) [1.87/0.88]
|   prevPredS = classB
|   |   feature7 < 0.28 : classG (110.28/52.83) [14.24/14.24]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.38 : classE (9.61/5.4) [1.97/0]
|   |   |   |   feature7 >= 0.38 : classC (26.98/14.22) [0/0]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.62 : classB (4.83/1.3) [0/0]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature7 < 0.68 : classD (3.5/0.94) [2.56/0]
|   |   |   |   |   feature7 >= 0.68 : classC (4.41/3.17) [6.9/1.59]
|   prevPredS = classC
|   |   feature7 < 0.72
|   |   |   feature7 < 0.28 : classC (159.3/49.84) [68.55/68.44]
|   |   |   feature7 >= 0.28
|   |   |   |   feature8 < 0.62
|   |   |   |   |   feature2 = classA : classA (13.67/6.48) [5.53/1.99]
|   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classC
|   |   |   |   |   |   feature8 < 0.5
|   |   |   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   |   |   feature7 < 0.62 : classE (20.9/7.37) [4.07/0]
|   |   |   |   |   |   |   |   feature7 >= 0.62 : classD (2.06/1.25) [0.81/0]
|   |   |   |   |   |   |   feature10 >= 0.55
|   |   |   |   |   |   |   |   feature8 < 0.46 : classC (12.84/5.87) [1.96/0.55]
|   |   |   |   |   |   |   |   feature8 >= 0.46 : classE (3.06/1.16) [1.74/0.11]
|   |   |   |   |   |   feature8 >= 0.5
|   |   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   |   feature7 < 0.33 : classD (7.14/2.4) [0.96/0.96]
|   |   |   |   |   |   |   |   feature7 >= 0.33
|   |   |   |   |   |   |   |   |   feature7 < 0.38 : classE (2.57/0.69) [0/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.38 : classC (11.85/7.48) [4.97/0]
|   |   |   |   |   |   |   feature7 >= 0.42 : classD (100.77/31.9) [37.3/1.4]
|   |   |   |   |   feature2 = classD : classC (4.72/2.16) [0.2/0.2]
|   |   |   |   |   feature2 = classE : classE (26.36/10.03) [1.14/0.93]
|   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   feature8 >= 0.62
|   |   |   |   |   feature9 < 0.98 : classC (58.56/27.82) [11.01/4.65]
|   |   |   |   |   feature9 >= 0.98
|   |   |   |   |   |   feature7 < 0.43 : classE (12.33/7.84) [0.68/0.04]
|   |   |   |   |   |   feature7 >= 0.43 : classA (70.1/39.93) [39.79/21.58]
|   |   feature7 >= 0.72
|   |   |   feature7 < 0.85
|   |   |   |   feature7 < 0.82
|   |   |   |   |   feature2 = classA : classB (0.01/0.01) [0.01/0]
|   |   |   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (5.71/1.53) [6.89/4.5]
|   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classF (0/0) [0/0]
|   |   |   |   |   feature2 = classF : classF (3.99/0.43) [8.52/3.55]
|   |   |   |   |   feature2 = classG : classF (0/0) [0/0]
|   |   |   |   feature7 >= 0.82 : classB (12.41/4.82) [0.45/0.45]
|   |   |   feature7 >= 0.85
|   |   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   |   feature3 = classB : classC (0/0) [0/0]
|   |   |   |   feature3 = classC : classC (227.74/61.07) [81.75/0.9]
|   |   |   |   feature3 = classD : classD (4.55/1.46) [2.91/0.1]
|   |   |   |   feature3 = classE : classC (0/0) [0/0]
|   |   |   |   feature3 = classF : classC (0/0) [0/0]
|   |   |   |   feature3 = classG : classA (0.13/0.04) [0/0]
|   prevPredS = classD
|   |   feature7 < 0.28
|   |   |   feature3 = classA : classB (0/0) [0/0]
|   |   |   feature3 = classB : classB (0/0) [0/0]
|   |   |   feature3 = classC : classC (0.02/0.01) [0.01/0.01]
|   |   |   feature3 = classD : classD (6.83/3.57) [1.1/1.07]
|   |   |   feature3 = classE : classB (0/0) [0/0]
|   |   |   feature3 = classF : classB (120.26/62.88) [18.78/18.78]
|   |   |   feature3 = classG : classA (0.1/0.05) [0.02/0]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.55 : classD (35.01/21.36) [6.33/2.55]
|   |   |   feature7 >= 0.55
|   |   |   |   feature7 < 0.88 : classD (56.19/20.75) [8.55/4.61]
|   |   |   |   feature7 >= 0.88 : classC (4.44/1.19) [1.56/0]
|   prevPredS = classE
|   |   feature5 = classA : classA (0.04/0.02) [0.02/0.02]
|   |   feature5 = classB : classE (0/0) [0/0]
|   |   feature5 = classC : classC (13.36/4.89) [13.54/8.97]
|   |   feature5 = classD : classD (0.02/0.01) [0.01/0]
|   |   feature5 = classE : classE (33.5/15.88) [131.69/18.64]
|   |   feature5 = classF : classF (1.64/0.41) [2.1/0.92]
|   |   feature5 = classG : classE (0/0) [0/0]
|   prevPredS = classF
|   |   feature7 < 0.47
|   |   |   feature7 < 0.42
|   |   |   |   feature7 < 0.28 : classC (10.09/3.01) [4.55/4.55]
|   |   |   |   feature7 >= 0.28 : classE (3.44/2.21) [0.23/0.05]
|   |   |   feature7 >= 0.42 : classC (17.65/5.11) [0.27/0.27]
|   |   feature7 >= 0.47
|   |   |   feature7 < 0.58 : classE (13.32/4.35) [0.2/0.2]
|   |   |   feature7 >= 0.58 : classD (4.78/2.52) [3.11/0.84]
|   prevPredS = classG
|   |   feature7 < 0.25 : classG (39.42/10.7) [0/0]
|   |   feature7 >= 0.25
|   |   |   feature7 < 0.28 : classC (11.76/3.16) [5.34/5.34]
|   |   |   feature7 >= 0.28 : classD (8.73/6.11) [1.92/0.95]
predS = classD
|   feature7 < 0.58
|   |   feature2 = classA
|   |   |   feature7 < 0.38
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   feature9 < 0.98 : classF (14.68/6.54) [4.94/3.54]
|   |   |   |   |   |   feature9 >= 0.98 : classA (20.65/7.97) [0.01/0]
|   |   |   |   |   feature7 >= 0.35 : classA (83.77/25.98) [0.66/0.64]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   prevPredS = classE : classG (10.79/3.28) [0/0]
|   |   |   |   prevPredS = classF : classA (0/0) [0/0]
|   |   |   |   prevPredS = classG : classG (1.21/0.37) [0/0]
|   |   |   feature7 >= 0.38
|   |   |   |   feature6 = classA
|   |   |   |   |   feature10 < 0.92 : classG (12.22/5.29) [16.12/11.63]
|   |   |   |   |   feature10 >= 0.92 : classG (67.24/21.82) [6.09/2.79]
|   |   |   |   feature6 = classB : classG (0/0) [0/0]
|   |   |   |   feature6 = classC
|   |   |   |   |   feature7 < 0.52 : classG (8.89/3.74) [2.23/1.21]
|   |   |   |   |   feature7 >= 0.52 : classC (11.85/4.3) [3.61/3.61]
|   |   |   |   feature6 = classD : classD (5.06/3.2) [7.34/4.16]
|   |   |   |   feature6 = classE : classE (11.72/7.48) [6.81/1.83]
|   |   |   |   feature6 = classF : classD (34.66/21.9) [22.2/9.32]
|   |   |   |   feature6 = classG : classG (1.54/1.08) [0.43/0.28]
|   |   feature2 = classB
|   |   |   feature7 < 0.22 : classA (34.59/9.56) [0/0]
|   |   |   feature7 >= 0.22
|   |   |   |   feature7 < 0.28 : classB (24.62/6.8) [0/0]
|   |   |   |   feature7 >= 0.28 : classG (29.1/12.35) [13.1/8.44]
|   |   feature2 = classC
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.53 : classG (8.77/4.18) [1.71/0.8]
|   |   |   |   feature7 >= 0.53 : classA (25.53/7.72) [0/0]
|   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   prevPredS = classC
|   |   |   |   feature7 < 0.48 : classA (67.57/31.95) [6.08/2.65]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.52 : classG (4.12/2.08) [2.28/0.25]
|   |   |   |   |   feature7 >= 0.52 : classC (5.35/2.33) [0.32/0.27]
|   |   |   prevPredS = classD
|   |   |   |   feature10 < 0.53 : classG (7.29/2.77) [7.23/3.49]
|   |   |   |   feature10 >= 0.53
|   |   |   |   |   feature7 < 0.52 : classD (2.58/1.94) [0.98/0.34]
|   |   |   |   |   feature7 >= 0.52 : classE (4.4/4.4) [8.95/0]
|   |   |   prevPredS = classE : classG (6.43/2.02) [0.31/0.14]
|   |   |   prevPredS = classF : classF (1.44/0.81) [0.47/0.04]
|   |   |   prevPredS = classG : classG (0.72/0.23) [0.04/0.02]
|   |   feature2 = classD
|   |   |   prevPredS = classA
|   |   |   |   feature10 < 0.5 : classD (4.5/2.01) [0.22/0.22]
|   |   |   |   feature10 >= 0.5 : classC (13.24/5.93) [6.66/6.66]
|   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   prevPredS = classC
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.43 : classE (4.06/1.09) [4.6/2.11]
|   |   |   |   |   feature7 >= 0.43 : classF (8.27/5.09) [0.72/0]
|   |   |   |   feature7 >= 0.48 : classC (20.07/6.26) [7.46/4.25]
|   |   |   prevPredS = classD
|   |   |   |   feature8 < 0.7
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (17.42/5.6) [7.14/0]
|   |   |   |   |   |   feature3 = classE : classE (6.01/2.1) [0.42/0.02]
|   |   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classD (0.9/0.29) [0.18/0]
|   |   |   |   |   feature7 >= 0.45 : classD (62.72/34) [31.52/14.61]
|   |   |   |   feature8 >= 0.7
|   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   feature7 < 0.32 : classA (153.31/41.23) [18.02/0.21]
|   |   |   |   |   |   feature7 >= 0.32 : classA (37.44/19.63) [0.19/0.19]
|   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   |   feature7 < 0.45 : classD (2.91/0.78) [1.98/0]
|   |   |   |   |   |   |   |   feature7 >= 0.45 : classG (121.52/56.39) [17.82/17.82]
|   |   |   |   |   |   |   feature7 >= 0.48 : classG (35.96/19.94) [18.75/2.73]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   feature8 < 0.98 : classD (3.63/0.97) [1.4/0.84]
|   |   |   |   |   |   |   |   feature8 >= 0.98 : classA (218.51/59.18) [50.96/50.96]
|   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   feature10 < 0.55 : classG (28.62/8.14) [20.73/0.24]
|   |   |   |   |   |   |   |   feature10 >= 0.55 : classD (4.55/1.22) [0.85/0]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.35 : classG (34.19/10.74) [5.7/5.7]
|   |   |   |   feature7 >= 0.35 : classD (71.08/43.51) [17.04/5.14]
|   |   |   prevPredS = classF
|   |   |   |   feature10 < 0.63
|   |   |   |   |   feature7 < 0.42 : classF (2.52/0.54) [3.02/0.4]
|   |   |   |   |   feature7 >= 0.42 : classD (6.88/3.38) [1.37/0.46]
|   |   |   |   feature10 >= 0.63 : classE (2.91/1.26) [1.05/1.05]
|   |   |   prevPredS = classG : classG (25.55/8.91) [2.65/1.97]
|   |   feature2 = classE
|   |   |   feature10 < 0.32 : classE (294.63/129.65) [20.07/15.83]
|   |   |   feature10 >= 0.32
|   |   |   |   feature7 < 0.32
|   |   |   |   |   prevPredS = classA : classE (5.67/2.13) [3.54/0]
|   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classD (2.2/0.59) [0/0]
|   |   |   |   |   prevPredS = classE : classD (39.27/39.27) [128.18/16.23]
|   |   |   |   |   prevPredS = classF : classD (0.12/0.03) [0.09/0]
|   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature9 < 0.48
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   prevPredS = classA : classF (4.38/2.91) [0.59/0.37]
|   |   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classD (0/0) [0.94/0]
|   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   feature7 < 0.45 : classE (3.69/1.71) [1.11/0.31]
|   |   |   |   |   |   |   |   feature7 >= 0.45 : classG (8.07/4.53) [3.28/2.58]
|   |   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   |   feature10 < 0.65
|   |   |   |   |   |   |   |   |   feature7 < 0.45 : classE (11.71/5.55) [1.71/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.45 : classG (18.61/9.47) [3.37/1.56]
|   |   |   |   |   |   |   |   feature10 >= 0.65 : classG (32.18/12.06) [6.75/4.83]
|   |   |   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   |   feature7 < 0.42 : classF (2.01/0.89) [1.16/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.42 : classD (6.79/1.82) [0/0]
|   |   |   |   |   |   |   |   feature7 >= 0.45 : classG (17.77/9.76) [2.92/1.34]
|   |   |   |   |   |   |   prevPredS = classG : classG (6.28/3.22) [0.69/0.32]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   prevPredS = classA : classC (2.07/0.56) [0/0]
|   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   feature10 < 0.47 : classD (43.66/11.71) [0/0]
|   |   |   |   |   |   |   |   feature10 >= 0.47 : classE (14.24/14.24) [36.68/10.41]
|   |   |   |   |   |   |   prevPredS = classE : classD (55.88/14.98) [0/0]
|   |   |   |   |   |   |   prevPredS = classF : classD (0.8/0.21) [0/0]
|   |   |   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   |   feature9 >= 0.48
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature7 < 0.45 : classD (20.31/7.79) [0/0]
|   |   |   |   |   |   |   feature7 >= 0.45 : classG (16.09/10.73) [2.34/1.28]
|   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classD (0/0) [1/0]
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classD
|   |   |   |   |   |   |   |   feature7 < 0.55 : classE (16.63/16.27) [35.43/8.5]
|   |   |   |   |   |   |   |   feature7 >= 0.55 : classG (5.06/1.45) [5.22/1.61]
|   |   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   |   |   |   feature7 < 0.55 : classE (17.07/10) [3.9/1.69]
|   |   |   |   |   |   |   |   |   feature7 >= 0.55 : classG (10.18/2.75) [7.44/0]
|   |   |   |   |   |   |   |   feature10 >= 0.52 : classE (17.4/8.25) [26.59/0.93]
|   |   |   |   |   |   |   feature6 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature7 < 0.35 : classG (18.92/7.86) [1.48/1.48]
|   |   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   |   |   |   |   feature10 < 0.43 : classD (4.26/1.14) [12.52/0]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.43 : classE (9.38/3.07) [2.51/0.28]
|   |   |   |   |   |   |   |   |   feature10 >= 0.62 : classD (21.84/6.84) [0.31/0.31]
|   |   |   |   |   |   |   |   feature7 >= 0.45 : classE (65.42/45.96) [18.29/8.19]
|   |   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   |   feature10 < 0.4 : classD (3.38/1.57) [1.09/0.18]
|   |   |   |   |   |   |   feature10 >= 0.4
|   |   |   |   |   |   |   |   feature7 < 0.53
|   |   |   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   |   |   feature7 < 0.42 : classF (2.4/1.13) [1.24/0]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.42 : classE (3.71/1) [0/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.45 : classG (3.43/1.38) [0.75/0.34]
|   |   |   |   |   |   |   |   feature7 >= 0.53 : classE (4.4/1.19) [0/0]
|   |   |   |   |   |   prevPredS = classG : classG (2.31/0.73) [0.3/0.24]
|   |   feature2 = classF
|   |   |   prevPredS = classA : classF (6.99/2.1) [0.35/0.2]
|   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   prevPredS = classC : classF (1.51/0.22) [0.47/0.16]
|   |   |   prevPredS = classD : classG (7.59/5.22) [5.38/3.82]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature7 < 0.52 : classG (6.64/2.79) [0.91/0.42]
|   |   |   |   |   feature7 >= 0.52 : classF (4.83/0) [0/0]
|   |   |   |   feature7 >= 0.55 : classD (7.12/2.15) [0/0]
|   |   |   prevPredS = classF : classA (13.57/13.57) [65.36/2.18]
|   |   |   prevPredS = classG : classD (3.13/3.13) [8.64/0.55]
|   |   feature2 = classG
|   |   |   feature7 < 0.32
|   |   |   |   feature10 < 0.48 : classA (24.34/6.53) [17.81/0]
|   |   |   |   feature10 >= 0.48 : classG (2.04/0.76) [1.91/0]
|   |   |   feature7 >= 0.32
|   |   |   |   feature6 = classA : classG (0/0) [0/0]
|   |   |   |   feature6 = classB : classG (0/0) [0/0]
|   |   |   |   feature6 = classC : classG (0/0) [0/0]
|   |   |   |   feature6 = classD
|   |   |   |   |   feature10 < 0.65
|   |   |   |   |   |   feature8 < 0.38 : classG (6.66/2.27) [0.82/0.25]
|   |   |   |   |   |   feature8 >= 0.38 : classD (27.26/16.21) [6.74/3.07]
|   |   |   |   |   feature10 >= 0.65 : classG (9.99/3.24) [4.28/3.95]
|   |   |   |   feature6 = classE : classG (0/0) [0/0]
|   |   |   |   feature6 = classF : classG (0/0) [0/0]
|   |   |   |   feature6 = classG
|   |   |   |   |   feature7 < 0.35 : classG (4.98/2.53) [0/0]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   prevPredS = classA : classC (0.93/0.46) [0.08/0.08]
|   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classG (1.55/0.48) [0.29/0.23]
|   |   |   |   |   |   prevPredS = classD : classG (36.88/11.46) [22.27/6.36]
|   |   |   |   |   |   prevPredS = classE : classG (0.32/0.1) [0.18/0.01]
|   |   |   |   |   |   prevPredS = classF : classF (0.45/0.2) [0.26/0.02]
|   |   |   |   |   |   prevPredS = classG : classG (17.06/5.28) [3.69/0.52]
|   feature7 >= 0.58
|   |   feature7 < 0.92
|   |   |   feature5 = classA
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classA (0.02/0.01) [0.01/0]
|   |   |   |   |   feature3 = classD : classD (4.11/1.25) [0.98/0]
|   |   |   |   |   feature3 = classE : classD (5.15/5.1) [16.24/3.54]
|   |   |   |   |   feature3 = classF : classF (4.08/0.18) [2.95/0.15]
|   |   |   |   |   feature3 = classG : classA (0.08/0.02) [0/0]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (2.41/2.4) [2.76/0.06]
|   |   |   |   prevPredS = classD : classD (14.24/3.87) [9.33/0]
|   |   |   |   prevPredS = classE : classD (4.48/1.92) [12.52/0]
|   |   |   |   prevPredS = classF : classE (24.48/6.66) [0/0]
|   |   |   |   prevPredS = classG : classD (0.48/0.15) [0.02/0.02]
|   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   feature5 = classC
|   |   |   |   feature10 < 0.48 : classD (5.12/1.87) [0.13/0.01]
|   |   |   |   feature10 >= 0.48 : classC (9.29/2.72) [6.28/2.78]
|   |   |   feature5 = classD
|   |   |   |   prevPredS = classA : classD (3.96/3.28) [2.39/0]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature7 < 0.72 : classE (20.62/5.64) [12.47/12.47]
|   |   |   |   |   feature7 >= 0.72 : classD (5.35/1.43) [0.72/0]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   feature8 < 0.62
|   |   |   |   |   |   |   feature11 < 0.75 : classD (55.27/14.82) [2.68/0.91]
|   |   |   |   |   |   |   feature11 >= 0.75
|   |   |   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classD : classD (4.46/1.2) [1.95/0]
|   |   |   |   |   |   |   |   feature3 = classE : classE (5.21/1.58) [1.89/0.08]
|   |   |   |   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   feature8 >= 0.62 : classD (116.79/31.32) [63.66/40.83]
|   |   |   |   |   feature10 >= 0.98
|   |   |   |   |   |   feature7 < 0.62 : classC (24.34/6.53) [17.81/0]
|   |   |   |   |   |   feature7 >= 0.62 : classD (10.1/2.71) [3.32/0]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classD : classD (3.78/1.01) [1.66/0]
|   |   |   |   |   feature6 = classE : classE (0.66/0.3) [14.12/5.67]
|   |   |   |   |   feature6 = classF : classD (6.23/1.67) [0/0]
|   |   |   |   |   feature6 = classG : classD (0/0) [0/0]
|   |   |   |   prevPredS = classF : classD (0.11/0.03) [0.16/0]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature10 < 0.42 : classG (6.73/1.9) [1.69/0.08]
|   |   |   |   |   feature10 >= 0.42 : classD (5.71/1.61) [0.32/0.08]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.72
|   |   |   |   |   prevPredS = classA : classC (2.59/1.36) [0.12/0.12]
|   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classA (11.26/11.26) [12.38/0.27]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (2.25/0.6) [0.76/0]
|   |   |   |   |   |   feature3 = classE : classE (121.36/34.16) [4.66/1.38]
|   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (2.47/0.66) [0.16/0]
|   |   |   |   |   |   feature3 = classE : classE (9.46/2.72) [9.1/3.53]
|   |   |   |   |   |   feature3 = classF : classD (0/0) [3.53/0]
|   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classF : classD (0.31/0.08) [0.15/0]
|   |   |   |   |   prevPredS = classG : classG (0.1/0.03) [0.08/0]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature11 < 0.63 : classD (94.11/26.09) [7.13/0]
|   |   |   |   |   feature11 >= 0.63
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (5.95/1.64) [2.28/0]
|   |   |   |   |   |   feature3 = classE : classE (17.53/5.38) [4.34/0.4]
|   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   feature5 = classF : classD (7.72/4.75) [14.57/2.45]
|   |   |   feature5 = classG
|   |   |   |   prevPredS = classA : classD (0.26/0.24) [0.12/0]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (0.6/0.6) [0.69/0.02]
|   |   |   |   prevPredS = classD : classD (4.27/1.14) [0.31/0]
|   |   |   |   prevPredS = classE : classD (0.03/0.01) [0/0]
|   |   |   |   prevPredS = classF : classG (1.92/0.51) [0.7/0]
|   |   |   |   prevPredS = classG : classD (7.9/2.12) [5.7/0]
|   |   feature7 >= 0.92
|   |   |   feature10 < 0.65
|   |   |   |   feature10 < 0.62
|   |   |   |   |   prevPredS = classA : classC (4.34/1.18) [0.01/0.01]
|   |   |   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classC (22.21/6.02) [0.03/0.03]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature10 < 0.48 : classF (15.56/0.78) [7.17/0.1]
|   |   |   |   |   |   feature10 >= 0.48 : classD (8.88/2.38) [3.31/0]
|   |   |   |   |   prevPredS = classE : classD (0.49/0.13) [0.36/0]
|   |   |   |   |   prevPredS = classF : classD (1.07/0.35) [0.16/0]
|   |   |   |   |   prevPredS = classG : classF (0/0) [0/0]
|   |   |   |   feature10 >= 0.62 : classC (220.3/60.95) [2.28/1.37]
|   |   |   feature10 >= 0.65
|   |   |   |   feature5 = classA : classA (0.07/0.02) [0.01/0]
|   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (2.49/0.69) [0.75/0.64]
|   |   |   |   feature5 = classD : classD (104.82/28.11) [79.45/40.83]
|   |   |   |   feature5 = classE : classD (1.62/0.44) [0.16/0]
|   |   |   |   feature5 = classF : classD (1.76/0.47) [0/0]
|   |   |   |   feature5 = classG : classA (0.04/0.01) [0/0]
predS = classE
|   feature7 < 0.48
|   |   feature7 < 0.45
|   |   |   feature2 = classA
|   |   |   |   feature8 < 0.84 : classG (103.99/55.83) [32.77/13.21]
|   |   |   |   feature8 >= 0.84
|   |   |   |   |   feature11 < 0.72
|   |   |   |   |   |   prevPredS = classA : classA (20.47/7.96) [27.28/14.77]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classD (0.84/0.26) [0.17/0.16]
|   |   |   |   |   |   prevPredS = classE : classE (0.07/0.02) [0.04/0.01]
|   |   |   |   |   |   prevPredS = classF : classE (0.26/0.08) [0.14/0.05]
|   |   |   |   |   |   prevPredS = classG : classA (18.91/6.39) [3.86/3.86]
|   |   |   |   |   feature11 >= 0.72 : classE (4.77/1.55) [1.94/0.99]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classC (13.46/5.11) [12.14/7.68]
|   |   |   feature2 = classD : classD (132.93/71.11) [34.07/26.37]
|   |   |   feature2 = classE
|   |   |   |   feature6 = classA : classA (0/0) [0/0]
|   |   |   |   feature6 = classB : classE (1.54/0.73) [0.49/0.45]
|   |   |   |   feature6 = classC : classA (3.09/1.66) [0.98/0.72]
|   |   |   |   feature6 = classD
|   |   |   |   |   feature9 < 0.65 : classE (43.04/20.05) [13.3/12.02]
|   |   |   |   |   feature9 >= 0.65
|   |   |   |   |   |   feature5 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classE (5.71/2.24) [1.23/1.17]
|   |   |   |   |   |   feature5 = classD : classA (1.11/1.11) [159.93/0.59]
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   |   prevPredS = classA : classA (0.84/0.84) [15.33/2.74]
|   |   |   |   |   |   |   |   prevPredS = classB : classG (3.09/3.09) [4.76/0.38]
|   |   |   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classG (7.05/7.05) [10.84/0.86]
|   |   |   |   |   |   |   |   prevPredS = classE : classG (3.7/3.7) [6.04/0.8]
|   |   |   |   |   |   |   |   prevPredS = classF : classG (3.21/3.21) [5.26/0.72]
|   |   |   |   |   |   |   |   prevPredS = classG : classG (3.11/2.47) [4.78/0.38]
|   |   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   |   prevPredS = classA : classD (10.66/3.99) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classD (5.35/1.43) [0.64/0]
|   |   |   |   |   |   |   |   prevPredS = classE : classD (120.98/33.46) [2.17/0.76]
|   |   |   |   |   |   |   |   prevPredS = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classG : classE (0/0) [1.28/0]
|   |   |   |   |   |   feature5 = classF : classA (3.13/1.36) [3.14/1.38]
|   |   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   feature6 = classE : classE (165.65/103.15) [73.93/48.26]
|   |   |   |   feature6 = classF
|   |   |   |   |   feature7 < 0.42 : classG (2.29/2.26) [2.41/0.96]
|   |   |   |   |   feature7 >= 0.42 : classF (5.43/0.47) [1.43/0.03]
|   |   |   |   feature6 = classG : classG (32.68/17.72) [23.55/4.17]
|   |   |   feature2 = classF
|   |   |   |   prevPredS = classA : classC (0.36/0.12) [0.29/0.29]
|   |   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   |   prevPredS = classC : classG (2.43/0.82) [0.5/0.04]
|   |   |   |   prevPredS = classD : classF (1.31/0.49) [0.66/0.27]
|   |   |   |   prevPredS = classE : classF (4.64/0.59) [1.75/1.05]
|   |   |   |   prevPredS = classF : classF (4.19/0.49) [2.09/1]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 < 0.33 : classE (11.07/2.97) [3.01/3.01]
|   |   |   |   |   feature7 >= 0.33 : classD (4.92/1.92) [2.74/0]
|   |   |   feature2 = classG : classD (22.85/21.79) [69.43/5.93]
|   |   feature7 >= 0.45
|   |   |   prevPredS = classA : classD (69.94/69.93) [79.61/2.33]
|   |   |   prevPredS = classB : classC (81.75/49.46) [12.79/12.79]
|   |   |   prevPredS = classC : classC (26.11/11.79) [5.86/5.6]
|   |   |   prevPredS = classD : classC (150.38/90.98) [26.52/26.52]
|   |   |   prevPredS = classE
|   |   |   |   feature5 = classA : classC (1.08/0.65) [0.17/0.17]
|   |   |   |   feature5 = classB : classC (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.23/0.11) [0.05/0.04]
|   |   |   |   feature5 = classD : classD (155.61/133.12) [49.41/0]
|   |   |   |   feature5 = classE : classC (239.56/144.95) [48.78/48.78]
|   |   |   |   feature5 = classF : classF (23.96/14.03) [5.15/3.75]
|   |   |   |   feature5 = classG : classC (9.58/5.8) [4.16/4.16]
|   |   |   prevPredS = classF
|   |   |   |   feature10 < 0.43 : classC (85.81/51.92) [15.82/15.82]
|   |   |   |   feature10 >= 0.43
|   |   |   |   |   feature2 = classA : classC (0.09/0.06) [0.01/0.01]
|   |   |   |   |   feature2 = classB : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (1.02/0.61) [0.16/0.16]
|   |   |   |   |   feature2 = classD : classC (0.01/0.01) [0/0]
|   |   |   |   |   feature2 = classE : classC (31.35/18.97) [4.91/4.91]
|   |   |   |   |   feature2 = classF : classF (4.59/2.65) [1.11/0.72]
|   |   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   prevPredS = classG : classC (43.84/26.52) [10.39/10.39]
|   feature7 >= 0.48
|   |   prevPredS = classA : classE (121.21/86.48) [14.51/0.04]
|   |   prevPredS = classB
|   |   |   feature10 < 0.83 : classA (5.72/1.54) [0.03/0.03]
|   |   |   feature10 >= 0.83 : classB (5.73/2.19) [3.57/0.03]
|   |   prevPredS = classC
|   |   |   feature2 = classA : classA (0.01/0) [0/0]
|   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   feature2 = classC : classA (5.11/4.53) [3.79/0.58]
|   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   feature2 = classE : classE (5.68/2.17) [3.54/0]
|   |   |   feature2 = classF : classF (2.27/0.26) [0.01/0.01]
|   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   prevPredS = classD
|   |   |   feature7 < 0.68
|   |   |   |   feature10 < 0.45 : classE (54.36/22.72) [16.48/8.11]
|   |   |   |   feature10 >= 0.45
|   |   |   |   |   feature5 = classA : classD (153.11/41.15) [1.15/1.15]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classC (0.03/0.01) [0.01/0]
|   |   |   |   |   feature5 = classD : classD (17.24/5.57) [6.92/0.6]
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature11 < 0.48
|   |   |   |   |   |   |   feature8 < 0.74 : classE (6.82/4.32) [2.55/0]
|   |   |   |   |   |   |   feature8 >= 0.74 : classD (49.98/13.4) [0.38/0.38]
|   |   |   |   |   |   feature11 >= 0.48 : classE (23.64/11.66) [10.32/2.21]
|   |   |   |   |   feature5 = classF : classF (5.85/0) [3.34/1.86]
|   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   feature7 >= 0.68
|   |   |   |   feature7 < 0.72 : classA (87.49/38.17) [7.39/7.39]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature8 < 0.48 : classD (4.93/1.32) [3.21/0]
|   |   |   |   |   feature8 >= 0.48 : classE (28.14/8.64) [6.21/1.98]
|   |   prevPredS = classE
|   |   |   feature7 < 0.72
|   |   |   |   feature7 < 0.58
|   |   |   |   |   feature5 = classA : classE (4/2.05) [3.43/0.64]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classC (0.02/0.01) [0/0]
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (6.51/1.8) [1.95/0.28]
|   |   |   |   |   |   feature3 = classE : classE (11.79/3.16) [0.51/0]
|   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature9 < 0.65
|   |   |   |   |   |   |   feature10 < 0.72
|   |   |   |   |   |   |   |   feature11 < 0.55 : classG (6.45/6.45) [13.89/1.38]
|   |   |   |   |   |   |   |   feature11 >= 0.55 : classD (75.39/24.86) [8.31/6.85]
|   |   |   |   |   |   |   feature10 >= 0.72 : classE (6.91/1.85) [1.13/0]
|   |   |   |   |   |   feature9 >= 0.65
|   |   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   |   feature8 < 0.62
|   |   |   |   |   |   |   |   |   feature10 < 0.53 : classD (9.56/3.1) [0.42/0.42]
|   |   |   |   |   |   |   |   |   feature10 >= 0.53
|   |   |   |   |   |   |   |   |   |   feature8 < 0.4 : classD (3.32/1.14) [1.67/0.13]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.4 : classE (7/3.16) [3.89/0]
|   |   |   |   |   |   |   |   feature8 >= 0.62 : classD (7.29/7.29) [18.24/5.73]
|   |   |   |   |   |   |   feature10 >= 0.68 : classE (23.27/6.24) [9.6/0]
|   |   |   |   |   feature5 = classF : classF (7.4/0.06) [8.01/0.32]
|   |   |   |   |   feature5 = classG : classG (0.55/0.15) [0.02/0.02]
|   |   |   |   feature7 >= 0.58 : classA (462.58/207.75) [256.16/193.03]
|   |   |   feature7 >= 0.72
|   |   |   |   feature11 < 0.58
|   |   |   |   |   feature5 = classA : classD (87.87/24.75) [6/6]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classD (1.22/0.33) [1.33/0.89]
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature8 < 0.66
|   |   |   |   |   |   |   feature8 < 0.46 : classG (17.78/5.26) [12.65/0.13]
|   |   |   |   |   |   |   feature8 >= 0.46 : classE (11.67/3.13) [3.32/0]
|   |   |   |   |   |   feature8 >= 0.66
|   |   |   |   |   |   |   feature11 < 0.48 : classG (8.8/5.27) [5/1.46]
|   |   |   |   |   |   |   feature11 >= 0.48
|   |   |   |   |   |   |   |   feature9 < 0.48 : classE (13.33/5.93) [0.87/0]
|   |   |   |   |   |   |   |   feature9 >= 0.48
|   |   |   |   |   |   |   |   |   feature7 < 0.95
|   |   |   |   |   |   |   |   |   |   feature10 < 0.88
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.7 : classD (100.5/28.09) [1.06/1.06]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.52 : classD (57.17/15.38) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.85 : classE (11.02/2.96) [8.1/0]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.85 : classD (61.94/17.83) [0.23/0.23]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.88 : classE (2.24/0.6) [0.46/0]
|   |   |   |   |   |   |   |   |   feature7 >= 0.95 : classE (3.72/1) [1.78/0]
|   |   |   |   |   feature5 = classF : classE (11.65/3.12) [0.27/0]
|   |   |   |   |   feature5 = classG : classE (0.72/0.19) [0/0]
|   |   |   |   feature11 >= 0.58 : classE (227.87/120.73) [97.72/39.57]
|   |   prevPredS = classF
|   |   |   feature7 < 0.62
|   |   |   |   feature10 < 0.55 : classD (5.8/2.96) [3.07/0.23]
|   |   |   |   feature10 >= 0.55 : classF (30.32/0.88) [5.81/1.33]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.72
|   |   |   |   |   feature5 = classA : classE (0.66/0.36) [0.14/0]
|   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature5 = classC
|   |   |   |   |   |   feature10 < 0.35 : classE (3.85/2.03) [1.83/0]
|   |   |   |   |   |   feature10 >= 0.35 : classA (15.22/4.08) [0/0]
|   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classE (9.87/5.56) [1.39/0.36]
|   |   |   |   |   feature5 = classF : classF (7.33/2.59) [2.17/0.7]
|   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.72 : classE (10.39/2.93) [0.73/0.1]
|   |   prevPredS = classG
|   |   |   feature7 < 0.75
|   |   |   |   feature5 = classA : classE (9.23/6.74) [1.64/0]
|   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.01/0.01) [0/0]
|   |   |   |   feature5 = classD : classD (0/0) [1.4/0]
|   |   |   |   feature5 = classE : classE (8.98/5.88) [2.06/1.61]
|   |   |   |   feature5 = classF : classG (0/0) [0/0]
|   |   |   |   feature5 = classG : classG (23.31/9.48) [7.22/0.15]
|   |   |   feature7 >= 0.75 : classE (8.9/2.39) [4.03/0]
predS = classF
|   prevPredS = classA
|   |   feature10 < 0.85
|   |   |   feature10 < 0.32
|   |   |   |   feature7 < 0.35 : classE (46.75/15.16) [0/0]
|   |   |   |   feature7 >= 0.35
|   |   |   |   |   feature7 < 0.52 : classD (4.25/1.66) [0.75/0.75]
|   |   |   |   |   feature7 >= 0.52 : classG (2.96/2.23) [0.78/0.04]
|   |   |   feature10 >= 0.32
|   |   |   |   feature10 < 0.65
|   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   feature10 < 0.35
|   |   |   |   |   |   |   feature7 < 0.42 : classG (16.06/5.03) [0.28/0.28]
|   |   |   |   |   |   |   feature7 >= 0.42 : classF (4.14/1.74) [3.09/0.27]
|   |   |   |   |   |   feature10 >= 0.35
|   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   feature7 < 0.35 : classA (11/3.66) [0/0]
|   |   |   |   |   |   |   |   feature7 >= 0.35 : classA (8.65/5.12) [11.93/8.07]
|   |   |   |   |   |   |   feature7 >= 0.55 : classF (14.07/4.35) [1.95/0]
|   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   |   feature7 < 0.58 : classC (37.18/16.33) [1.22/1.22]
|   |   |   |   |   |   |   feature7 >= 0.58 : classC (7.07/3.1) [0.35/0.35]
|   |   |   |   |   |   feature10 >= 0.55
|   |   |   |   |   |   |   feature7 < 0.47 : classG (7.1/2.53) [3.04/0.24]
|   |   |   |   |   |   |   feature7 >= 0.47 : classF (10.45/1.51) [0.88/0.24]
|   |   |   |   feature10 >= 0.65
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature7 < 0.45 : classE (7.83/6.53) [8.33/1.27]
|   |   |   |   |   |   feature7 >= 0.45 : classA (39.39/10.57) [0.91/0.91]
|   |   |   |   |   feature7 >= 0.48 : classF (16.69/9.08) [2.18/0.87]
|   |   feature10 >= 0.85
|   |   |   feature7 < 0.48
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature7 < 0.28 : classG (8.53/2.29) [0/0]
|   |   |   |   |   feature7 >= 0.28 : classA (25.57/12.33) [14.26/4.36]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature10 < 0.9
|   |   |   |   |   |   feature2 = classA : classB (8.87/4.17) [0/0]
|   |   |   |   |   |   feature2 = classB : classB (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classB (1.52/0.72) [0/0]
|   |   |   |   |   |   feature2 = classD : classB (0.85/0.4) [0/0]
|   |   |   |   |   |   feature2 = classE : classB (0/0) [0/0]
|   |   |   |   |   |   feature2 = classF : classB (200.14/94.14) [0/0]
|   |   |   |   |   |   feature2 = classG : classB (0/0) [0/0]
|   |   |   |   |   feature10 >= 0.9 : classA (4.95/4.9) [9.93/1.79]
|   |   |   feature7 >= 0.48
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature7 < 0.52 : classD (20.01/5.73) [0.07/0.07]
|   |   |   |   |   feature7 >= 0.52 : classG (5.51/1.48) [4.03/0]
|   |   |   |   feature7 >= 0.55 : classF (20.82/8.77) [4.22/1.61]
|   prevPredS = classB
|   |   feature10 < 0.72 : classE (13.83/5.73) [2.88/2.88]
|   |   feature10 >= 0.72 : classB (6.04/2.5) [8.68/0.17]
|   prevPredS = classC
|   |   feature10 < 0.45 : classF (8.24/1.11) [1.84/0.19]
|   |   feature10 >= 0.45
|   |   |   feature8 < 0.4 : classA (5.48/1.99) [3.37/0.1]
|   |   |   feature8 >= 0.4 : classC (20.78/8.62) [9.86/5.51]
|   prevPredS = classD
|   |   feature7 < 0.35
|   |   |   feature7 < 0.25 : classA (99.05/26.6) [0.02/0.02]
|   |   |   feature7 >= 0.25
|   |   |   |   feature7 < 0.28 : classD (13.16/13.16) [12.53/0]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature8 < 0.58
|   |   |   |   |   |   feature2 = classA : classA (0.05/0.01) [0/0]
|   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (9.02/4.82) [0/0]
|   |   |   |   |   |   feature2 = classE : classD (3.01/1.61) [0/0]
|   |   |   |   |   |   feature2 = classF : classD (7.59/4.05) [7.06/0]
|   |   |   |   |   |   feature2 = classG : classG (1.16/0.62) [0/0]
|   |   |   |   |   feature8 >= 0.58 : classA (38.03/11.73) [0.19/0.19]
|   |   feature7 >= 0.35
|   |   |   feature7 < 0.82
|   |   |   |   feature10 < 0.42
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   feature5 = classA : classA (0.01/0) [0/0]
|   |   |   |   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature5 = classC : classC (3.54/1.63) [2.4/1.12]
|   |   |   |   |   |   |   feature5 = classD : classF (1.47/0.79) [0.47/0.32]
|   |   |   |   |   |   |   feature5 = classE : classE (2.6/2.6) [41.66/0.82]
|   |   |   |   |   |   |   feature5 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature2 = classA : classF (46.42/5.88) [5.62/0]
|   |   |   |   |   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classF (7.95/1.01) [0.96/0]
|   |   |   |   |   |   |   feature2 = classD : classF (12.92/1.63) [1.56/0]
|   |   |   |   |   |   |   feature2 = classE : classF (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classF : classF (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classF (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   feature7 < 0.55 : classG (3.27/0.88) [5.93/3.54]
|   |   |   |   |   |   |   feature7 >= 0.55 : classA (6.05/1.8) [0.54/0.54]
|   |   |   |   |   |   feature7 >= 0.58 : classF (5.29/0) [2.32/0]
|   |   |   |   feature10 >= 0.42
|   |   |   |   |   feature2 = classA : classA (0.1/0.04) [0.01/0]
|   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (0.02/0.01) [0/0]
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature8 < 0.36 : classA (15.01/6.2) [8.93/0.56]
|   |   |   |   |   |   feature8 >= 0.36 : classD (72.51/26.53) [18.87/4.05]
|   |   |   |   |   feature2 = classE : classD (5.93/2.17) [0.33/0.33]
|   |   |   |   |   feature2 = classF
|   |   |   |   |   |   feature5 = classA : classF (1.33/0.22) [0.07/0.06]
|   |   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE : classA (15.01/6.2) [0.84/0.56]
|   |   |   |   |   |   feature5 = classF : classF (26.66/4.5) [3.48/1.21]
|   |   |   |   |   |   feature5 = classG : classF (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classD (6.55/2.4) [3.9/0.37]
|   |   |   feature7 >= 0.82
|   |   |   |   feature5 = classA : classA (0.03/0.01) [0/0]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.01/0) [0/0]
|   |   |   |   feature5 = classD : classD (0.02/0.01) [0.01/0]
|   |   |   |   feature5 = classE : classE (48.68/13.05) [0/0]
|   |   |   |   feature5 = classF : classF (5.37/0) [0.18/0]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   prevPredS = classE
|   |   feature7 < 0.38
|   |   |   feature7 < 0.32 : classE (23.45/13.94) [9.51/1.4]
|   |   |   feature7 >= 0.32
|   |   |   |   feature2 = classA : classA (0.07/0.02) [0/0]
|   |   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   |   feature2 = classC : classA (5.78/1.72) [0.08/0.08]
|   |   |   |   feature2 = classD : classD (0.01/0) [0/0]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature10 < 0.6 : classE (10.41/4.04) [4.03/0.15]
|   |   |   |   |   feature10 >= 0.6
|   |   |   |   |   |   feature10 < 0.77 : classA (60.11/17.81) [0.85/0.85]
|   |   |   |   |   |   feature10 >= 0.77 : classE (4.58/1.78) [1.47/0.06]
|   |   |   |   feature2 = classF : classF (26.74/2.45) [6.95/0]
|   |   |   |   feature2 = classG : classF (0/0) [0/0]
|   |   feature7 >= 0.38
|   |   |   feature7 < 0.52
|   |   |   |   feature5 = classA : classE (1.97/0.83) [1.55/0.04]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.02/0.01) [0.01/0.01]
|   |   |   |   feature5 = classD : classD (6.75/1.93) [1.41/1.4]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.45 : classE (15.41/4.13) [24.05/2.24]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature10 < 0.67
|   |   |   |   |   |   |   feature11 < 0.45 : classE (5.86/2.42) [0/0]
|   |   |   |   |   |   |   feature11 >= 0.45
|   |   |   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classD : classD (0/0) [3.53/0]
|   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   feature10 < 0.55 : classF (2.27/0.27) [0/0]
|   |   |   |   |   |   |   |   |   feature10 >= 0.55 : classD (61.73/16.73) [0.04/0.04]
|   |   |   |   |   |   |   |   feature2 = classF : classE (4.4/1.82) [0/0]
|   |   |   |   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.67 : classE (19.43/7.61) [0.01/0.01]
|   |   |   |   feature5 = classF
|   |   |   |   |   feature10 < 0.55 : classF (5.17/0.54) [2.59/0.11]
|   |   |   |   |   feature10 >= 0.55 : classE (45.85/17.16) [10.51/0.97]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   feature7 >= 0.52
|   |   |   |   feature5 = classA
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature7 < 0.55 : classG (5.36/3.26) [2.11/0]
|   |   |   |   |   |   feature7 >= 0.55 : classA (6.35/2.6) [0/0]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature3 = classA : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classF (0/0) [0/0]
|   |   |   |   |   |   feature3 = classE : classE (11.45/3.36) [0.1/0.1]
|   |   |   |   |   |   feature3 = classF : classF (3.97/0) [0.73/0]
|   |   |   |   |   |   feature3 = classG : classA (0.02/0.01) [0/0]
|   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   feature5 = classC : classF (1.7/0.37) [0.14/0.13]
|   |   |   |   feature5 = classD : classD (3.87/2.06) [0.32/0.32]
|   |   |   |   feature5 = classE : classE (18.42/9.78) [6.01/1.52]
|   |   |   |   feature5 = classF : classF (12.42/2.68) [3.54/0.97]
|   |   |   |   feature5 = classG : classF (0/0) [0/0]
|   prevPredS = classF
|   |   feature7 < 0.58
|   |   |   feature6 = classA : classA (0/0) [0/0]
|   |   |   feature6 = classB : classA (0/0) [0/0]
|   |   |   feature6 = classC : classA (16.38/6.75) [0.73/0.5]
|   |   |   feature6 = classD
|   |   |   |   feature7 < 0.38 : classA (32.21/12.49) [0.58/0.58]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature7 < 0.43 : classE (39.22/10.53) [1.25/1.25]
|   |   |   |   |   feature7 >= 0.43
|   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   feature8 < 0.46 : classD (12/3.39) [0.03/0.03]
|   |   |   |   |   |   |   |   feature8 >= 0.46 : classF (2.4/1.05) [0.4/0]
|   |   |   |   |   |   |   feature7 >= 0.52 : classG (3.48/1.71) [1.77/0.01]
|   |   |   |   |   |   feature7 >= 0.55 : classA (4.56/1.43) [0.04/0.04]
|   |   |   feature6 = classE
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.35 : classA (15.13/8.93) [0.08/0.08]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature7 < 0.38 : classF (2.68/0.01) [1.03/0.01]
|   |   |   |   |   |   feature7 >= 0.38 : classE (11.92/3.47) [5.87/2.45]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature5 = classA : classE (1.42/0.51) [0/0]
|   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classF (1.01/0.09) [0.21/0]
|   |   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE : classD (114.4/31.04) [0.73/0.05]
|   |   |   |   |   |   feature5 = classF : classF (0.47/0.04) [0.26/0]
|   |   |   |   |   |   feature5 = classG : classG (5.03/1.82) [0/0]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.55 : classG (4.61/1.51) [3.13/0.04]
|   |   |   |   |   |   feature7 >= 0.55 : classA (8.06/2.57) [0.11/0.11]
|   |   |   feature6 = classF
|   |   |   |   feature7 < 0.28 : classG (32.43/9.25) [0.56/0.56]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature10 < 0.82 : classF (83.3/13.58) [27.09/2.78]
|   |   |   |   |   feature10 >= 0.82
|   |   |   |   |   |   feature7 < 0.52 : classA (628.16/228.11) [23.91/6.42]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   feature7 < 0.55 : classG (18.56/5.21) [13.35/0]
|   |   |   |   |   |   |   feature7 >= 0.55 : classA (34.05/10.38) [0.78/0.78]
|   |   |   feature6 = classG : classF (4.76/2.53) [0.56/0.51]
|   |   feature7 >= 0.58
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.65 : classF (6.65/2.48) [1.22/0]
|   |   |   |   feature7 >= 0.65 : classF (5.48/0.07) [2.75/0]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classA (0.32/0.18) [0.01/0.01]
|   |   |   feature2 = classD : classF (1.54/0.32) [0.8/0.01]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.65 : classE (93.2/55.77) [1.61/1.61]
|   |   |   |   feature7 >= 0.65
|   |   |   |   |   feature10 < 0.52 : classE (50.51/13.73) [16.35/0.16]
|   |   |   |   |   feature10 >= 0.52 : classF (3.7/0.91) [2.32/1.81]
|   |   |   feature2 = classF : classF (214.56/42.34) [56.41/0]
|   |   |   feature2 = classG
|   |   |   |   feature10 < 0.67 : classG (13.2/3.77) [4.53/0.11]
|   |   |   |   feature10 >= 0.67 : classG (24.64/24.64) [72.67/0.07]
|   prevPredS = classG
|   |   feature2 = classA
|   |   |   feature6 = classA : classF (0/0) [0/0]
|   |   |   feature6 = classB : classF (0/0) [0/0]
|   |   |   feature6 = classC : classA (0/0) [0/0]
|   |   |   feature6 = classD : classF (0/0) [0/0]
|   |   |   feature6 = classE : classF (7.18/4.73) [1.53/0.4]
|   |   |   feature6 = classF : classF (6.49/1.08) [2.86/0.36]
|   |   |   feature6 = classG : classG (2.93/1.33) [5.23/0.49]
|   |   feature2 = classB : classF (0/0) [0/0]
|   |   feature2 = classC : classC (0.01/0.01) [0/0]
|   |   feature2 = classD
|   |   |   feature7 < 0.52 : classD (51.71/17.28) [0.83/0.82]
|   |   |   feature7 >= 0.52
|   |   |   |   feature7 < 0.62 : classF (4.79/2.23) [2.36/0.8]
|   |   |   |   feature7 >= 0.62 : classG (2.59/0.7) [1.9/0]
|   |   feature2 = classE : classE (0.44/0.2) [0.04/0.04]
|   |   feature2 = classF : classF (20.48/3.4) [6.69/1.13]
|   |   feature2 = classG
|   |   |   feature7 < 0.52 : classE (3.12/3.12) [4.27/0.74]
|   |   |   feature7 >= 0.52 : classG (10.29/3.37) [4.99/0.35]
predS = classG
|   feature6 = classA : classG (3.29/2.71) [3.47/0.12]
|   feature6 = classB
|   |   prevPredS = classA : classF (1.03/0.53) [0.37/0.26]
|   |   prevPredS = classB : classB (4.56/1.34) [0.01/0.01]
|   |   prevPredS = classC : classE (5.13/1.5) [0.01/0.01]
|   |   prevPredS = classD : classE (2.66/0.85) [0.09/0.09]
|   |   prevPredS = classE : classE (0.59/0.34) [0.1/0.1]
|   |   prevPredS = classF : classF (0.2/0.11) [0.04/0.01]
|   |   prevPredS = classG : classA (6.06/2.32) [0.65/0.29]
|   feature6 = classC : classA (9.67/5.52) [8.88/1.22]
|   feature6 = classD
|   |   prevPredS = classA
|   |   |   feature7 < 0.4 : classD (24.48/8.43) [0.09/0.09]
|   |   |   feature7 >= 0.4
|   |   |   |   feature10 < 0.7 : classG (3.84/2.4) [1.02/0.59]
|   |   |   |   feature10 >= 0.7
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.65 : classE (2.04/2.04) [2.87/0.54]
|   |   |   |   |   |   feature7 >= 0.65 : classF (4.53/0.05) [1.64/0.01]
|   |   |   |   |   feature7 >= 0.72 : classA (2.16/0.6) [0.01/0.01]
|   |   prevPredS = classB : classG (0.15/0.04) [0/0]
|   |   prevPredS = classC : classG (0.01/0.01) [0.01/0]
|   |   prevPredS = classD
|   |   |   feature11 < 0.57 : classG (15.5/4.42) [3.97/0.01]
|   |   |   feature11 >= 0.57
|   |   |   |   feature10 < 0.45 : classD (2.21/1.01) [1.91/0.1]
|   |   |   |   feature10 >= 0.45 : classD (29.69/8.77) [3.36/0.78]
|   |   prevPredS = classE
|   |   |   feature10 < 0.57
|   |   |   |   feature10 < 0.52 : classG (5.59/3.15) [1.53/0]
|   |   |   |   feature10 >= 0.52 : classD (5.14/1.61) [0.01/0.01]
|   |   |   feature10 >= 0.57 : classE (5.3/1.55) [0.93/0.93]
|   |   prevPredS = classF
|   |   |   feature10 < 0.58 : classF (2.92/1.66) [0.49/0.01]
|   |   |   feature10 >= 0.58 : classA (3.69/1.21) [2.68/0.19]
|   |   prevPredS = classG
|   |   |   feature7 < 0.78 : classD (185.71/61.38) [122.91/7.75]
|   |   |   feature7 >= 0.78 : classG (14.97/6.6) [4.72/0.04]
|   feature6 = classE
|   |   feature5 = classA
|   |   |   feature7 < 0.52 : classE (55.35/25.04) [2.03/1.33]
|   |   |   feature7 >= 0.52
|   |   |   |   feature8 < 0.54 : classG (13.3/4.13) [8.97/0.52]
|   |   |   |   feature8 >= 0.54 : classA (32.44/12.11) [6.72/1.6]
|   |   feature5 = classB : classD (0/0) [0/0]
|   |   feature5 = classC : classA (1.29/0.45) [0.05/0.03]
|   |   feature5 = classD : classD (4.53/3.64) [9.28/1.14]
|   |   feature5 = classE : classE (132.18/84.26) [27.61/10.03]
|   |   feature5 = classF
|   |   |   feature2 = classA : classA (2.38/1.45) [0.18/0.05]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   feature2 = classD : classG (0.04/0.01) [0.03/0]
|   |   |   feature2 = classE : classE (0.55/0.18) [0.01/0.01]
|   |   |   feature2 = classF : classF (0.28/0.02) [0.18/0.01]
|   |   |   feature2 = classG : classF (6.44/0.93) [0.31/0.27]
|   |   feature5 = classG
|   |   |   prevPredS = classA : classF (12.28/5.05) [5.29/3.36]
|   |   |   prevPredS = classB : classG (0.29/0.08) [0/0]
|   |   |   prevPredS = classC : classG (0.99/0.27) [0.01/0]
|   |   |   prevPredS = classD : classG (0.42/0.12) [2.31/0]
|   |   |   prevPredS = classE
|   |   |   |   feature10 < 0.57 : classG (5.52/2.77) [0.01/0]
|   |   |   |   feature10 >= 0.57 : classE (6.25/1.83) [0.01/0.01]
|   |   |   prevPredS = classF : classG (5.97/1.64) [0.82/0]
|   |   |   prevPredS = classG
|   |   |   |   feature10 < 0.55
|   |   |   |   |   feature7 < 0.58 : classG (10.59/5.23) [1.11/0]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature7 < 0.62 : classD (306.2/82.28) [0.02/0.02]
|   |   |   |   |   |   feature7 >= 0.62 : classA (2.52/2.52) [5.6/0.74]
|   |   |   |   feature10 >= 0.55 : classG (12.26/3.38) [5.68/0]
|   feature6 = classF
|   |   feature11 < 0.52
|   |   |   feature10 < 0.98
|   |   |   |   prevPredS = classA : classD (2.21/2.21) [32.65/1.06]
|   |   |   |   prevPredS = classB : classG (0.03/0.01) [0/0]
|   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   prevPredS = classD : classG (0.29/0.16) [0.24/0]
|   |   |   |   prevPredS = classE : classE (1.7/0.99) [0.29/0.29]
|   |   |   |   prevPredS = classF : classF (0.59/0.31) [0.13/0.02]
|   |   |   |   prevPredS = classG : classG (2.58/1.45) [1.54/0.81]
|   |   |   feature10 >= 0.98 : classE (50.94/15.31) [35.98/0.35]
|   |   feature11 >= 0.52 : classF (75.51/16.88) [13.92/6.37]
|   feature6 = classG
|   |   feature10 < 0.65
|   |   |   prevPredS = classA
|   |   |   |   feature10 < 0.62
|   |   |   |   |   feature10 < 0.5
|   |   |   |   |   |   feature7 < 0.53 : classA (2.63/0.9) [27.46/1.74]
|   |   |   |   |   |   feature7 >= 0.53 : classG (6.43/1.73) [0.39/0]
|   |   |   |   |   feature10 >= 0.5
|   |   |   |   |   |   feature10 < 0.55 : classC (14.87/4.37) [0.03/0.03]
|   |   |   |   |   |   feature10 >= 0.55 : classG (4.05/1.12) [2.49/0]
|   |   |   |   feature10 >= 0.62
|   |   |   |   |   feature7 < 0.9 : classG (3.82/1.24) [0.75/0]
|   |   |   |   |   feature7 >= 0.9 : classA (24.37/6.54) [0.01/0.01]
|   |   |   prevPredS = classB : classG (0.6/0.17) [0/0]
|   |   |   prevPredS = classC : classG (0/0) [0.04/0]
|   |   |   prevPredS = classD : classG (4.09/1.13) [5.1/0]
|   |   |   prevPredS = classE
|   |   |   |   feature10 < 0.57 : classG (16.38/8.89) [2.73/0]
|   |   |   |   feature10 >= 0.57 : classE (21.91/6.43) [3.85/3.85]
|   |   |   prevPredS = classF
|   |   |   |   feature2 = classA : classG (1.14/0.32) [0.82/0]
|   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature10 < 0.38 : classG (2.29/0.63) [0/0]
|   |   |   |   |   feature10 >= 0.38 : classF (3.09/0.33) [2.05/0.15]
|   |   |   |   feature2 = classF : classF (0/0) [0.1/0]
|   |   |   |   feature2 = classG : classG (8.03/2.21) [0.85/0]
|   |   |   prevPredS = classG : classA (887.24/283.15) [44.59/14.65]
|   |   feature10 >= 0.65
|   |   |   feature5 = classA : classG (38.78/22.6) [21.95/5.84]
|   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   feature5 = classC : classC (0.03/0.01) [0.01/0]
|   |   |   feature5 = classD
|   |   |   |   prevPredS = classA : classF (0.55/0.1) [0.4/0.25]
|   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   prevPredS = classD : classD (2.59/0.76) [0.1/0]
|   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   prevPredS = classF : classG (0/0) [0/0]
|   |   |   |   prevPredS = classG : classG (2.93/0.81) [2.03/0]
|   |   |   feature5 = classE : classG (0.2/0.06) [0.06/0.01]
|   |   |   feature5 = classF
|   |   |   |   feature10 < 0.82 : classF (12.89/0.53) [1.38/0.77]
|   |   |   |   feature10 >= 0.82
|   |   |   |   |   prevPredS = classA : classA (2.69/0.79) [0.01/0.01]
|   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classF : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classG : classG (2.08/0.57) [1.24/0]
|   |   |   feature5 = classG
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature10 < 0.77 : classE (4.6/4.6) [8.43/1.04]
|   |   |   |   |   feature10 >= 0.77
|   |   |   |   |   |   feature10 < 0.88 : classF (14.7/0.25) [5.22/0.03]
|   |   |   |   |   |   feature10 >= 0.88 : classG (2.97/0.82) [0.71/0]
|   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   prevPredS = classD : classG (0.3/0.08) [1.22/0]
|   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   prevPredS = classF : classG (0/0) [0/0]
|   |   |   |   prevPredS = classG : classG (186.9/51.51) [66.33/0]

Size of the tree : 1458

Weight: 1.83


REPTree
============

predS = classA
|   feature7 < 0.68
|   |   feature5 = classA
|   |   |   feature7 < 0.62
|   |   |   |   feature7 < 0.42
|   |   |   |   |   feature7 < 0.28 : classD (8.63/1.18) [0.76/0.76]
|   |   |   |   |   feature7 >= 0.28
|   |   |   |   |   |   feature3 = classA : classG (1.17/1.17) [7.86/0.61]
|   |   |   |   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classA (0.01/0) [0.01/0]
|   |   |   |   |   |   feature3 = classD : classD (0.66/0.13) [0.34/0.08]
|   |   |   |   |   |   feature3 = classE
|   |   |   |   |   |   |   feature10 < 0.82 : classA (5.39/0.54) [3.33/3.05]
|   |   |   |   |   |   |   feature10 >= 0.82 : classE (3.07/0.4) [4.06/1.44]
|   |   |   |   |   |   feature3 = classF
|   |   |   |   |   |   |   feature9 < 0.87 : classA (150.46/20.01) [78.39/72.2]
|   |   |   |   |   |   |   feature9 >= 0.87 : classF (3.69/0.42) [4.88/1.6]
|   |   |   |   |   |   feature3 = classG : classA (2.69/0.26) [4.26/1.29]
|   |   |   |   feature7 >= 0.42
|   |   |   |   |   feature3 = classA
|   |   |   |   |   |   feature6 = classA
|   |   |   |   |   |   |   feature8 < 0.86 : classF (5.06/2.73) [8.01/4.75]
|   |   |   |   |   |   |   feature8 >= 0.86 : classA (16.25/5.88) [20.18/17.31]
|   |   |   |   |   |   feature6 = classB : classB (0/0) [0/0]
|   |   |   |   |   |   feature6 = classC : classB (0/0) [0/0]
|   |   |   |   |   |   feature6 = classD : classB (0/0) [0/0]
|   |   |   |   |   |   feature6 = classE : classB (0/0) [0/0]
|   |   |   |   |   |   feature6 = classF
|   |   |   |   |   |   |   feature7 < 0.48 : classE (5.27/1.18) [0.64/0.64]
|   |   |   |   |   |   |   feature7 >= 0.48 : classB (3.44/3.44) [9.76/4.82]
|   |   |   |   |   |   feature6 = classG : classB (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classA (0.22/0.1) [0.37/0.25]
|   |   |   |   |   feature3 = classC : classC (10.78/6.03) [17.93/12.26]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature8 < 0.86 : classA (4.91/2.63) [7.9/5.47]
|   |   |   |   |   |   feature8 >= 0.86 : classD (4.75/1.95) [5.77/4.22]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature7 < 0.45 : classD (5.41/5.41) [29.84/11.52]
|   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   feature7 < 0.57 : classF (3.68/2.27) [5.58/3.64]
|   |   |   |   |   |   |   feature7 >= 0.57 : classB (3.16/3.16) [12.31/5.36]
|   |   |   |   |   feature3 = classF
|   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   feature10 < 0.75
|   |   |   |   |   |   |   |   feature10 < 0.52 : classD (2.12/2.12) [14.85/1.3]
|   |   |   |   |   |   |   |   feature10 >= 0.52 : classG (8.49/1.15) [2.49/0.97]
|   |   |   |   |   |   |   feature10 >= 0.75 : classF (12.61/0.09) [14.94/0.33]
|   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   feature9 < 0.73 : classF (9.99/3.28) [17.39/10.68]
|   |   |   |   |   |   |   feature9 >= 0.73 : classB (51.08/51.08) [59.06/19.08]
|   |   |   |   |   feature3 = classG : classG (17.11/9.98) [50.92/19.67]
|   |   |   feature7 >= 0.62
|   |   |   |   feature3 = classA : classA (1.05/0.42) [0.2/0.1]
|   |   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   |   feature3 = classC : classA (0.37/0.15) [0.15/0.03]
|   |   |   |   feature3 = classD : classA (12.94/5.22) [2.14/1.17]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature11 < 0.87 : classE (36.6/14.83) [11.2/3.95]
|   |   |   |   |   feature11 >= 0.87
|   |   |   |   |   |   feature10 < 0.95
|   |   |   |   |   |   |   feature10 < 0.88
|   |   |   |   |   |   |   |   feature10 < 0.82 : classA (3.56/2.36) [3.63/0.31]
|   |   |   |   |   |   |   |   feature10 >= 0.82 : classG (3.16/1.23) [0.76/0.28]
|   |   |   |   |   |   |   feature10 >= 0.88 : classE (23.73/9.21) [2.09/2.09]
|   |   |   |   |   |   feature10 >= 0.95 : classA (149.88/58.09) [16.67/13.18]
|   |   |   |   feature3 = classF
|   |   |   |   |   feature10 < 0.82 : classE (30.31/11.99) [2.74/2.74]
|   |   |   |   |   feature10 >= 0.82 : classA (10.15/4.37) [1.04/1]
|   |   |   |   feature3 = classG : classG (39.34/22.28) [5.72/3.57]
|   |   feature5 = classB
|   |   |   feature7 < 0.58
|   |   |   |   feature10 < 0.72
|   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   feature8 < 0.64 : classA (8.4/0.74) [13.57/4.66]
|   |   |   |   |   |   feature8 >= 0.64 : classB (28.67/4.85) [27.81/22.32]
|   |   |   |   |   feature10 >= 0.52 : classA (34.98/12.47) [18.99/17.2]
|   |   |   |   feature10 >= 0.72 : classB (112.24/18.71) [46.39/24.89]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.62 : classG (16.2/4.92) [9.37/3.74]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature7 < 0.65 : classD (39.18/3.89) [3.44/3.44]
|   |   |   |   |   feature7 >= 0.65 : classB (6.91/2.82) [3.19/1.14]
|   |   feature5 = classC
|   |   |   feature10 < 0.88 : classA (19.37/6.99) [12.58/10.96]
|   |   |   feature10 >= 0.88 : classC (11.07/3.24) [9.93/4.16]
|   |   feature5 = classD : classA (121.79/61.42) [90.74/59.31]
|   |   feature5 = classE
|   |   |   feature7 < 0.28 : classB (29.38/5.7) [9.84/9.84]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.62
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature10 < 0.67
|   |   |   |   |   |   |   feature10 < 0.52 : classD (11.77/11.77) [16.89/5.05]
|   |   |   |   |   |   |   feature10 >= 0.52 : classG (12.81/6.4) [7.63/6.03]
|   |   |   |   |   |   feature10 >= 0.67 : classA (15.98/2.6) [45.32/32.73]
|   |   |   |   |   prevPredS = classB : classA (0.84/0.13) [0.43/0.42]
|   |   |   |   |   prevPredS = classC : classA (0.2/0.2) [0.9/0.1]
|   |   |   |   |   prevPredS = classD : classD (6.16/1.46) [3.53/2.63]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 < 0.57
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   |   |   feature7 < 0.32 : classD (4.59/4.59) [13.32/0.45]
|   |   |   |   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   |   |   |   feature8 < 0.38 : classE (3.03/0.99) [2.67/0.63]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.38 : classA (3.58/0.36) [1.06/0.31]
|   |   |   |   |   |   |   |   feature7 >= 0.42 : classE (6.74/0.59) [4.91/2.86]
|   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.48 : classA (53.36/4.69) [17.55/17.51]
|   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   feature8 < 0.82 : classA (6.74/0.59) [0.59/0.59]
|   |   |   |   |   |   |   |   |   feature8 >= 0.82 : classE (2.69/0.24) [1.05/0.24]
|   |   |   |   |   |   feature7 >= 0.57 : classB (7.52/7.52) [23.74/3.84]
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature7 < 0.42 : classE (11.02/1.63) [4.09/4.09]
|   |   |   |   |   |   feature7 >= 0.42 : classA (9.17/2.51) [17.98/11.8]
|   |   |   |   |   prevPredS = classG : classA (2.41/0.38) [3.74/3.19]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature7 < 0.65 : classD (44.14/8.22) [5.23/5.23]
|   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   prevPredS = classA : classA (3.88/0.44) [0.34/0.34]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classA (8.26/0.73) [0.96/0.73]
|   |   |   |   |   |   prevPredS = classF : classE (4.17/0.45) [0.57/0.57]
|   |   |   |   |   |   prevPredS = classG : classG (1.41/0.13) [0.44/0.13]
|   |   feature5 = classF
|   |   |   feature7 < 0.62
|   |   |   |   feature7 < 0.42
|   |   |   |   |   prevPredS = classA : classA (3.01/0.78) [0.97/0.93]
|   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classA (0.17/0.16) [0.41/0.05]
|   |   |   |   |   prevPredS = classD : classA (0.17/0.01) [0.05/0.05]
|   |   |   |   |   prevPredS = classE : classD (3.24/0.66) [1.33/0.62]
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature10 < 0.75 : classA (76.18/6.7) [26.5/23.43]
|   |   |   |   |   |   feature10 >= 0.75 : classF (2.08/0.06) [1.78/0.49]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature7 < 0.37 : classF (5.77/1.21) [4.99/2.86]
|   |   |   |   |   |   feature7 >= 0.37 : classD (4.49/0.39) [3.42/1.61]
|   |   |   |   feature7 >= 0.42
|   |   |   |   |   feature8 < 0.5 : classA (18.36/4.94) [15.7/10.72]
|   |   |   |   |   feature8 >= 0.5
|   |   |   |   |   |   feature7 < 0.48 : classF (8.04/4.45) [7.79/4.2]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   |   |   prevPredS = classA : classD (2.55/2.55) [11.39/2.24]
|   |   |   |   |   |   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classA (0/0) [0.29/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classF (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classE : classF (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classF : classF (4.78/0.67) [8.38/6.36]
|   |   |   |   |   |   |   |   prevPredS = classG : classF (7.24/1.02) [4.06/3.43]
|   |   |   |   |   |   |   feature10 >= 0.62 : classF (48.35/6.99) [34.75/22.87]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.65 : classD (36.21/3.91) [3.71/3.71]
|   |   |   |   feature7 >= 0.65 : classA (5.05/1.63) [0.93/0.73]
|   |   feature5 = classG : classA (75.66/32.64) [93.27/46.74]
|   feature7 >= 0.68 : classA (1732.62/1039.25) [747.95/419.53]
predS = classB
|   prevPredS = classA
|   |   feature10 < 0.57
|   |   |   feature10 < 0.52
|   |   |   |   feature10 < 0.38 : classB (6.32/0.59) [1.12/0.71]
|   |   |   |   feature10 >= 0.38
|   |   |   |   |   feature10 < 0.42 : classE (9.67/2.41) [16.22/1.71]
|   |   |   |   |   feature10 >= 0.42 : classB (4.27/0.4) [1.16/0.48]
|   |   |   feature10 >= 0.52 : classC (7.21/1.8) [1.32/1.32]
|   |   feature10 >= 0.57
|   |   |   feature10 < 0.77
|   |   |   |   feature7 < 0.68
|   |   |   |   |   feature7 < 0.53
|   |   |   |   |   |   feature2 = classA : classA (0.04/0) [0/0]
|   |   |   |   |   |   feature2 = classB : classA (8.02/0.7) [0.7/0.7]
|   |   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classE : classA (2.26/0.2) [0.2/0.2]
|   |   |   |   |   |   feature2 = classF : classA (0/0) [0/0]
|   |   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.53 : classA (2.4/0.35) [0.35/0.35]
|   |   |   |   feature7 >= 0.68 : classB (2.46/0.22) [1.58/0.58]
|   |   |   feature10 >= 0.77 : classB (6.65/0.63) [10.53/0.76]
|   prevPredS = classB
|   |   feature10 < 0.95
|   |   |   feature7 < 0.35
|   |   |   |   feature5 = classA : classA (0.01/0) [0/0]
|   |   |   |   feature5 = classB : classC (20.08/1.77) [32.92/14.6]
|   |   |   |   feature5 = classC : classC (0.01/0) [0/0]
|   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   feature5 = classE : classE (6.74/0.59) [2.64/0.59]
|   |   |   |   feature5 = classF : classC (0/0) [0/0]
|   |   |   |   feature5 = classG : classC (0/0) [0/0]
|   |   |   feature7 >= 0.35
|   |   |   |   feature5 = classA : classB (0.84/0.1) [0.38/0.24]
|   |   |   |   feature5 = classB : classB (82.68/7.76) [49.94/23.99]
|   |   |   |   feature5 = classC : classB (22.66/11.54) [10.31/6.58]
|   |   |   |   feature5 = classD : classB (0.01/0) [0/0]
|   |   |   |   feature5 = classE : classB (0/0) [0/0]
|   |   |   |   feature5 = classF : classB (0/0) [5.75/0]
|   |   |   |   feature5 = classG : classB (0/0) [0/0]
|   |   feature10 >= 0.95 : classB (631.56/300.08) [279.23/74.61]
|   prevPredS = classC
|   |   feature3 = classA : classC (0/0) [0/0]
|   |   feature3 = classB : classB (0.23/0.02) [0.14/0.03]
|   |   feature3 = classC : classC (10.65/4.11) [6.5/4.03]
|   |   feature3 = classD : classD (0/0) [0/0]
|   |   feature3 = classE : classE (8.6/2.46) [3.25/3.25]
|   |   feature3 = classF : classC (8.17/2.33) [3.09/3.09]
|   |   feature3 = classG : classA (0.01/0) [0/0]
|   prevPredS = classD : classD (0.05/0.01) [12.84/0.01]
|   prevPredS = classE
|   |   feature7 < 0.53
|   |   |   feature8 < 0.58 : classE (20.69/1.97) [2.63/1.82]
|   |   |   feature8 >= 0.58 : classA (98.23/8.67) [13.73/8.64]
|   |   feature7 >= 0.53 : classB (26.51/2.35) [19.18/5.78]
|   prevPredS = classF
|   |   feature3 = classA : classC (0/0) [0/0]
|   |   feature3 = classB : classB (0.49/0.05) [0.29/0.05]
|   |   feature3 = classC : classC (6.3/1.68) [5.73/1.11]
|   |   feature3 = classD : classD (0/0) [0/0]
|   |   feature3 = classE : classD (0.73/0.18) [0.13/0.13]
|   |   feature3 = classF : classC (0/0) [0/0]
|   |   feature3 = classG : classG (5.46/1.36) [3.01/0.96]
|   prevPredS = classG : classG (0/0) [10.17/0]
predS = classC
|   prevPredS = classA
|   |   feature7 < 0.55 : classA (67.54/67.49) [200.82/117.83]
|   |   feature7 >= 0.55 : classA (61.64/30.84) [66.06/35.79]
|   prevPredS = classB
|   |   feature7 < 0.28 : classA (46.82/46.81) [37.88/4.12]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.55 : classE (12/1.06) [11.71/10.08]
|   |   |   feature7 >= 0.55
|   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   feature2 = classB : classB (4.57/0.84) [2.38/0.83]
|   |   |   |   feature2 = classC : classC (6.58/1.51) [3.9/3.38]
|   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   feature2 = classE : classB (0/0) [0/0]
|   |   |   |   feature2 = classF : classB (0/0) [0/0]
|   |   |   |   feature2 = classG : classB (0/0) [0/0]
|   prevPredS = classC
|   |   feature8 < 0.78
|   |   |   feature7 < 0.42 : classA (91.87/85.67) [135.59/26.38]
|   |   |   feature7 >= 0.42
|   |   |   |   feature10 < 0.75
|   |   |   |   |   feature6 = classA : classC (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classE (14.94/2.22) [4.2/3.8]
|   |   |   |   |   feature6 = classC : classC (22.43/9.73) [10.37/4.86]
|   |   |   |   |   feature6 = classD : classD (5.29/1.51) [3.59/1.14]
|   |   |   |   |   feature6 = classE : classC (0/0) [0/0]
|   |   |   |   |   feature6 = classF : classF (2.09/0.46) [3.41/0.35]
|   |   |   |   |   feature6 = classG : classA (0.04/0.01) [0.01/0.01]
|   |   |   |   feature10 >= 0.75
|   |   |   |   |   feature7 < 0.52 : classD (41.09/4.45) [4.91/3.61]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature7 < 0.55 : classE (15.85/1.4) [1.39/1.39]
|   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   feature7 < 0.72 : classD (27.66/6.06) [5.34/3.24]
|   |   |   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   |   |   feature7 < 0.85 : classB (2.11/0.81) [9.2/1.05]
|   |   |   |   |   |   |   |   feature7 >= 0.85 : classC (3.03/0.67) [0.72/0.43]
|   |   feature8 >= 0.78
|   |   |   feature7 < 0.55
|   |   |   |   feature7 < 0.28 : classA (47.94/47.74) [159.8/4.4]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature7 < 0.38 : classE (12.62/1.27) [6.08/6.08]
|   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   feature8 < 0.88 : classA (4.63/2.06) [6.47/2.38]
|   |   |   |   |   |   feature8 >= 0.88
|   |   |   |   |   |   |   feature7 < 0.45 : classC (12.82/5.44) [12.97/1.13]
|   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   |   feature11 < 0.98 : classC (5.59/0.49) [2.38/2.38]
|   |   |   |   |   |   |   |   |   feature11 >= 0.98 : classA (2.32/0.27) [4/1.95]
|   |   |   |   |   |   |   |   feature7 >= 0.52 : classC (106.14/46.32) [46.45/16.59]
|   |   |   feature7 >= 0.55
|   |   |   |   feature7 < 0.85 : classC (27.22/9.75) [34.63/24.23]
|   |   |   |   feature7 >= 0.85 : classC (102.86/10.27) [56.29/9.86]
|   prevPredS = classD
|   |   feature7 < 0.28 : classA (54.56/54.54) [65.93/6.67]
|   |   feature7 >= 0.28 : classC (68.28/51.7) [37/20.68]
|   prevPredS = classE
|   |   feature2 = classA : classA (0.12/0.05) [0.09/0.03]
|   |   feature2 = classB : classA (0/0) [0/0]
|   |   feature2 = classC
|   |   |   feature7 < 0.43 : classA (30.58/30.58) [78.32/10.21]
|   |   |   feature7 >= 0.43 : classD (110.62/34.97) [21.36/18.19]
|   |   feature2 = classD : classE (0.3/0.1) [0.22/0.22]
|   |   feature2 = classE
|   |   |   feature7 < 0.28 : classA (19.43/19.43) [65.6/1.71]
|   |   |   feature7 >= 0.28
|   |   |   |   feature7 < 0.58 : classE (101.75/8.95) [18.02/17.13]
|   |   |   |   feature7 >= 0.58 : classB (11.26/10.11) [10.36/3.22]
|   |   feature2 = classF : classE (0.29/0.08) [0.2/0.2]
|   |   feature2 = classG : classA (0/0) [0/0]
|   prevPredS = classF
|   |   feature7 < 0.48 : classA (13.82/13.75) [15.64/2.65]
|   |   feature7 >= 0.48
|   |   |   feature7 < 0.58 : classE (8.24/0.97) [0.96/0.96]
|   |   |   feature7 >= 0.58 : classF (4.87/3.02) [3.17/1.88]
|   prevPredS = classG
|   |   feature7 < 0.25 : classG (18.57/1.91) [1.63/1.63]
|   |   feature7 >= 0.25
|   |   |   feature7 < 0.28 : classA (3.73/3.73) [13.55/0.33]
|   |   |   feature7 >= 0.28 : classE (5.11/1.15) [4.06/4.06]
predS = classD
|   feature7 < 0.72
|   |   feature5 = classA
|   |   |   feature8 < 0.42
|   |   |   |   feature10 < 0.68 : classD (21.96/17.22) [13.54/8.37]
|   |   |   |   feature10 >= 0.68
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature7 < 0.4 : classE (34/3.09) [5.4/5.4]
|   |   |   |   |   |   feature7 >= 0.4 : classF (26.43/11.03) [7.67/0.11]
|   |   |   |   |   feature7 >= 0.52 : classE (35.98/3.67) [4.01/4.01]
|   |   |   feature8 >= 0.42
|   |   |   |   feature7 < 0.38 : classA (74.93/41.42) [14.07/6.79]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.43 : classG (18.65/1.99) [1.65/1.65]
|   |   |   |   |   |   feature7 >= 0.43 : classF (35.65/20.07) [15.33/7.87]
|   |   |   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   feature7 < 0.52 : classF (2.01/0.75) [0.94/0.32]
|   |   |   |   |   |   feature7 >= 0.52 : classE (3.44/3.44) [9.16/3.38]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   feature7 < 0.48 : classF (6.88/2.57) [2.16/0.07]
|   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   feature10 < 0.48 : classD (6.23/1.01) [2.33/0.55]
|   |   |   |   |   |   |   |   feature10 >= 0.48 : classG (5.47/1.48) [4.24/0.64]
|   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   feature7 < 0.52 : classF (6.21/2.35) [1.87/0]
|   |   |   |   |   |   |   feature7 >= 0.52 : classE (10.43/1.34) [0.96/0.96]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   feature7 < 0.45 : classD (8.31/1.05) [1.64/1.64]
|   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.48 : classF (10.25/3.3) [3.81/0.49]
|   |   |   |   |   |   |   |   feature7 >= 0.48 : classE (3.76/1.8) [1.47/0.33]
|   |   |   |   |   |   feature7 >= 0.58 : classD (8.02/0.72) [2.15/0.71]
|   |   |   |   |   prevPredS = classF : classD (21.15/9.42) [3.95/3.75]
|   |   |   |   |   prevPredS = classG : classD (13.08/5.77) [2.89/2.89]
|   |   feature5 = classB
|   |   |   feature7 < 0.27 : classA (8/0.75) [18.29/11.03]
|   |   |   feature7 >= 0.27 : classF (5.52/3.18) [2.02/0.79]
|   |   feature5 = classC
|   |   |   prevPredS = classA : classA (1.03/1.03) [10.59/0.27]
|   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   prevPredS = classC
|   |   |   |   feature8 < 0.88
|   |   |   |   |   feature7 < 0.52 : classA (39.07/16.18) [6.01/6.01]
|   |   |   |   |   feature7 >= 0.52 : classD (5.97/1.32) [7.84/3.86]
|   |   |   |   feature8 >= 0.88 : classC (11.36/4.26) [5.8/2.37]
|   |   |   prevPredS = classD
|   |   |   |   feature10 < 0.58
|   |   |   |   |   feature7 < 0.38 : classC (15.43/3.69) [1.37/1.36]
|   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   feature7 < 0.52 : classF (12.51/5.6) [3.47/0.05]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   feature7 < 0.55 : classC (12.86/1.13) [1.16/1.15]
|   |   |   |   |   |   |   feature7 >= 0.55 : classG (2.06/0.31) [2/0.25]
|   |   |   |   feature10 >= 0.58
|   |   |   |   |   feature7 < 0.52 : classF (3.61/2.01) [1.2/0.37]
|   |   |   |   |   feature7 >= 0.52 : classE (5.79/1.38) [0.76/0.76]
|   |   |   prevPredS = classE : classG (3.26/1.2) [0.92/0.92]
|   |   |   prevPredS = classF : classF (0.73/0.37) [0.3/0.1]
|   |   |   prevPredS = classG : classG (0.26/0.07) [0.36/0.04]
|   |   feature5 = classD
|   |   |   feature7 < 0.32 : classA (96.85/10.09) [44.5/10.49]
|   |   |   feature7 >= 0.32
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   |   prevPredS = classA : classE (1.47/0.47) [0.13/0.13]
|   |   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classD : classE (4.16/1.34) [0.37/0.37]
|   |   |   |   |   |   |   prevPredS = classE : classE (52.04/16.75) [4.58/4.58]
|   |   |   |   |   |   |   prevPredS = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classG : classE (5.7/1.83) [1.18/1.18]
|   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   prevPredS = classA : classD (23.06/2.38) [2.03/2.03]
|   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classD (3.16/3.16) [4.66/0.28]
|   |   |   |   |   |   |   prevPredS = classD : classD (25.69/12.59) [9/3.88]
|   |   |   |   |   |   |   prevPredS = classE : classE (1.19/0.51) [2.15/0.1]
|   |   |   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   |   |   feature10 < 0.33 : classA (5.58/0.49) [5.58/0.49]
|   |   |   |   |   |   |   |   feature10 >= 0.33 : classD (3.64/1.68) [2.54/1]
|   |   |   |   |   |   |   prevPredS = classG : classD (2.86/0.25) [2.3/2.3]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.48 : classF (215.25/88.91) [76.36/14.47]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classC : classD (2.92/2.84) [8.01/2.12]
|   |   |   |   |   |   |   feature6 = classD : classD (82.36/27.63) [23.67/7.24]
|   |   |   |   |   |   |   feature6 = classE : classD (1.46/0.49) [0.16/0.13]
|   |   |   |   |   |   |   feature6 = classF : classD (0/0) [0.21/0]
|   |   |   |   |   |   |   feature6 = classG
|   |   |   |   |   |   |   |   feature2 = classA : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classD : classD (2.73/0.92) [0.42/0.24]
|   |   |   |   |   |   |   |   feature2 = classE : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   |   |   |   |   feature2 = classG : classG (10.93/1.02) [8.31/1.05]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature8 < 0.98
|   |   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classC : classD (1.44/0.5) [0.43/0.41]
|   |   |   |   |   |   |   feature6 = classD : classD (47.75/16.65) [29.92/13.59]
|   |   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   |   prevPredS = classA : classC (0.49/0.14) [0.07/0.07]
|   |   |   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classE (5.37/2.82) [7.01/1.91]
|   |   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   |   feature10 < 0.58 : classD (4.35/3.55) [24.9/5.42]
|   |   |   |   |   |   |   |   |   feature10 >= 0.58 : classE (18.06/3.61) [4.22/2.64]
|   |   |   |   |   |   |   |   prevPredS = classE : classE (29.15/3.29) [21.01/20.8]
|   |   |   |   |   |   |   |   prevPredS = classF : classD (0/0) [0.18/0]
|   |   |   |   |   |   |   |   prevPredS = classG : classG (1.38/0.13) [1.98/0.12]
|   |   |   |   |   |   |   feature6 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classG : classD (0.41/0.14) [0.53/0.12]
|   |   |   |   |   |   feature10 >= 0.98 : classC (12.25/1.92) [11.7/1.37]
|   |   |   |   |   feature8 >= 0.98
|   |   |   |   |   |   feature10 < 0.63
|   |   |   |   |   |   |   feature7 < 0.55 : classA (102.03/9.63) [8.97/8.97]
|   |   |   |   |   |   |   feature7 >= 0.55 : classG (7.87/1.56) [17.8/11.49]
|   |   |   |   |   |   feature10 >= 0.63
|   |   |   |   |   |   |   feature10 < 0.72 : classE (17.61/1.68) [1.55/1.55]
|   |   |   |   |   |   |   feature10 >= 0.72 : classD (2.63/0.23) [4.91/3.1]
|   |   feature5 = classE
|   |   |   feature7 < 0.32
|   |   |   |   feature10 < 0.92
|   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classE (1.67/0.16) [0.18/0.15]
|   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature10 < 0.52 : classD (71.18/6.26) [6.26/6.26]
|   |   |   |   |   |   feature10 >= 0.52
|   |   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (23.36/2.69) [2.05/2.05]
|   |   |   |   |   |   |   feature2 = classE : classE (4.78/0.55) [2.53/0.42]
|   |   |   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classE : classA (18.58/18.58) [55.1/9.66]
|   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   feature10 >= 0.92 : classA (49.82/4.38) [4.38/4.38]
|   |   |   feature7 >= 0.32
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   |   prevPredS = classA : classE (1.54/0.56) [0.14/0.14]
|   |   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classE (1.46/0.13) [0.13/0.13]
|   |   |   |   |   |   |   prevPredS = classD : classE (1.33/0.49) [0.12/0.12]
|   |   |   |   |   |   |   prevPredS = classE : classE (71.53/20.5) [9.12/6.29]
|   |   |   |   |   |   |   prevPredS = classF : classE (0.4/0.15) [0.04/0.04]
|   |   |   |   |   |   |   prevPredS = classG : classE (2.86/1.05) [1.05/1.05]
|   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classB : classE (4.85/0.86) [1.05/0.62]
|   |   |   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classD
|   |   |   |   |   |   |   |   prevPredS = classA : classC (0.11/0.01) [0.01/0.01]
|   |   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classD (0/0) [0.41/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classD (4.72/0.42) [2.52/0.42]
|   |   |   |   |   |   |   |   prevPredS = classE : classD (13.04/1.4) [4.68/1.91]
|   |   |   |   |   |   |   |   prevPredS = classF : classF (0.73/0.16) [0.32/0]
|   |   |   |   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classE
|   |   |   |   |   |   |   |   prevPredS = classA : classD (8.14/0.88) [0.72/0.72]
|   |   |   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classD (0/0) [0.69/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classE (13.34/1.4) [2.47/1.33]
|   |   |   |   |   |   |   |   prevPredS = classE : classE (7.51/2.2) [3.65/0.66]
|   |   |   |   |   |   |   |   prevPredS = classF : classE (2.18/1.12) [4.43/0.62]
|   |   |   |   |   |   |   |   prevPredS = classG : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classF : classD (3.56/0.48) [0.6/0.51]
|   |   |   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.45 : classF (230.35/84.64) [103.38/32.94]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature10 < 0.32 : classE (110.92/18.53) [10.26/10.26]
|   |   |   |   |   feature10 >= 0.32
|   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   |   prevPredS = classA : classC (2.3/0.61) [1.27/1.27]
|   |   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   |   |   |   feature7 < 0.62 : classD (5.88/1.31) [0.52/0.52]
|   |   |   |   |   |   |   |   |   feature7 >= 0.62 : classE (2.79/0.25) [2.79/0.25]
|   |   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   |   feature7 < 0.55
|   |   |   |   |   |   |   |   |   |   feature9 < 0.58 : classD (77.07/15.7) [6.91/6.78]
|   |   |   |   |   |   |   |   |   |   feature9 >= 0.58 : classE (4.45/1.21) [2.64/0.61]
|   |   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   |   feature7 < 0.58 : classG (16.22/2.02) [15.63/1.43]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.58 : classE (5.99/1.84) [4.95/4.04]
|   |   |   |   |   |   |   |   prevPredS = classE : classD (27.03/9.91) [54.06/6.4]
|   |   |   |   |   |   |   |   prevPredS = classF : classE (2.83/0.97) [1.09/1.09]
|   |   |   |   |   |   |   |   prevPredS = classG : classF (3.52/0.34) [6.44/1.82]
|   |   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   |   feature7 < 0.55 : classE (61.98/12.77) [6.91/6.72]
|   |   |   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   |   |   feature10 < 0.97 : classD (8.18/2.23) [1.27/1.09]
|   |   |   |   |   |   |   |   |   feature10 >= 0.97 : classC (4.67/0.58) [2.46/0.41]
|   |   |   |   |   |   feature7 >= 0.68 : classE (53.96/6.03) [34.71/11.41]
|   |   feature5 = classF
|   |   |   prevPredS = classA : classD (4.66/2.31) [0.77/0.66]
|   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   prevPredS = classC : classE (1.78/1.69) [3.99/1.32]
|   |   |   prevPredS = classD
|   |   |   |   feature10 < 0.68
|   |   |   |   |   feature7 < 0.45 : classD (3.92/1.03) [0.75/0.34]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.48 : classD (4.94/2.92) [3.13/1.12]
|   |   |   |   |   |   feature7 >= 0.48 : classG (3.71/1.66) [2.22/0.56]
|   |   |   |   feature10 >= 0.68
|   |   |   |   |   feature7 < 0.52 : classF (4.58/2.51) [1.07/0]
|   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   feature10 < 0.72 : classE (4.71/0.52) [0.41/0.41]
|   |   |   |   |   |   feature10 >= 0.72 : classD (2.98/0.26) [0.28/0.26]
|   |   |   prevPredS = classE : classF (21.28/10.86) [11.63/3.73]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.42
|   |   |   |   |   feature10 < 0.75 : classF (8.21/0.8) [2.76/0]
|   |   |   |   |   feature10 >= 0.75 : classA (22.5/4.18) [35.55/17.24]
|   |   |   |   feature7 >= 0.42 : classF (24.68/5.27) [12.25/0.09]
|   |   |   prevPredS = classG : classG (0.24/0.07) [0.34/0.03]
|   |   feature5 = classG
|   |   |   feature7 < 0.32 : classA (24.45/3.76) [2.52/2.52]
|   |   |   feature7 >= 0.32
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature7 < 0.35 : classE (6.29/2.03) [1.27/0.62]
|   |   |   |   |   |   feature7 >= 0.35 : classG (7.84/4.02) [3.63/1.25]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.48 : classF (18.19/5.94) [7.19/1.33]
|   |   |   |   |   |   |   feature7 >= 0.48 : classG (5.26/0.66) [3/0.91]
|   |   |   |   |   |   feature7 >= 0.52 : classE (3.36/0.32) [0.46/0.46]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   feature8 < 0.54 : classD (7.12/1.34) [6.01/2.63]
|   |   |   |   |   feature8 >= 0.54 : classG (5.98/0.76) [2.26/1.72]
|   feature7 >= 0.72
|   |   feature2 = classA : classF (3.05/0.33) [2.7/1.54]
|   |   feature2 = classB : classC (0/0) [0/0]
|   |   feature2 = classC : classC (4.78/1.35) [1.61/0.62]
|   |   feature2 = classD
|   |   |   feature10 < 0.65
|   |   |   |   feature7 < 0.92
|   |   |   |   |   feature7 < 0.75 : classE (3.26/1.21) [8.02/1.28]
|   |   |   |   |   feature7 >= 0.75 : classD (15.77/1.52) [10.27/1.39]
|   |   |   |   feature7 >= 0.92
|   |   |   |   |   feature8 < 0.76
|   |   |   |   |   |   feature8 < 0.7
|   |   |   |   |   |   |   prevPredS = classA : classC (0.11/0.01) [0.01/0.01]
|   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classC (5.22/0.53) [0.79/0.48]
|   |   |   |   |   |   |   prevPredS = classD : classD (5.66/0.64) [3.95/1.05]
|   |   |   |   |   |   |   prevPredS = classE : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classF : classD (0.35/0.03) [0.03/0.03]
|   |   |   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   |   |   feature8 >= 0.7 : classC (105.44/12.15) [17.73/14.79]
|   |   |   |   |   feature8 >= 0.76 : classD (9.23/1) [3.28/1.52]
|   |   |   feature10 >= 0.65 : classC (83.12/82.43) [341.01/192.3]
|   |   feature2 = classE
|   |   |   feature11 < 0.62 : classD (44.87/4.49) [27.55/6.12]
|   |   |   feature11 >= 0.62
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   feature3 = classD : classD (3.57/0.36) [2.1/0.46]
|   |   |   |   feature3 = classE : classE (4/0.49) [2.31/0.6]
|   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   feature2 = classF
|   |   |   prevPredS = classA : classD (0.18/0.1) [0.09/0.02]
|   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   prevPredS = classC : classC (0.06/0.06) [0.33/0.08]
|   |   |   prevPredS = classD : classD (4.33/0.49) [0.85/0.81]
|   |   |   prevPredS = classE : classD (0.01/0) [0/0]
|   |   |   prevPredS = classF : classE (11.33/1) [1.03/1.03]
|   |   |   prevPredS = classG : classD (0.12/0.01) [0.01/0.01]
|   |   feature2 = classG : classG (1.13/0.32) [0.73/0.32]
predS = classE
|   feature10 < 0.92
|   |   feature6 = classA : classE (1.45/0.69) [0.31/0.25]
|   |   feature6 = classB : classE (0/0) [0.41/0]
|   |   feature6 = classC
|   |   |   feature2 = classA : classE (3.38/1.87) [1.48/1.26]
|   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   feature2 = classC
|   |   |   |   feature10 < 0.72 : classC (9.81/5.03) [2.37/1.68]
|   |   |   |   feature10 >= 0.72 : classA (10.52/4.28) [1.47/1.33]
|   |   |   feature2 = classD : classD (1.66/0.8) [0.98/0.33]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.72 : classD (27.03/16.76) [7.03/5.36]
|   |   |   |   feature7 >= 0.72 : classA (14.93/2.09) [2.66/2.66]
|   |   |   feature2 = classF : classF (14.91/6.47) [3.98/0.85]
|   |   |   feature2 = classG : classG (1.21/0.58) [0.17/0.15]
|   |   feature6 = classD
|   |   |   feature7 < 0.32 : classG (32.3/10.87) [10.52/10.35]
|   |   |   feature7 >= 0.32
|   |   |   |   prevPredS = classA : classD (111.19/46.54) [58.54/22.11]
|   |   |   |   prevPredS = classB : classE (21.43/8.33) [5.7/5.64]
|   |   |   |   prevPredS = classC : classC (2.85/2.08) [1.83/0.43]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classD
|   |   |   |   |   |   feature7 < 0.38 : classA (10.04/10.04) [97.82/5.43]
|   |   |   |   |   |   feature7 >= 0.38 : classD (141.46/45.19) [43.87/18.71]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature7 < 0.58 : classD (12.1/7.56) [4.72/1.42]
|   |   |   |   |   |   feature7 >= 0.58 : classE (15.49/2.29) [4.25/1.8]
|   |   |   |   |   feature3 = classF : classD (0/0) [29.43/0]
|   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   |   feature7 < 0.38 : classD (25.49/13.73) [13.2/8.27]
|   |   |   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classD : classA (0/0) [104.57/0.41]
|   |   |   |   |   |   |   |   |   feature2 = classE : classD (3.51/1.66) [2.92/1.08]
|   |   |   |   |   |   |   |   |   feature2 = classF : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature2 = classG : classG (2.79/0.25) [0.25/0.25]
|   |   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   |   feature10 < 0.4 : classD (47.38/4.17) [4.98/4.17]
|   |   |   |   |   |   |   |   feature10 >= 0.4 : classE (3.53/1.5) [3.07/0.93]
|   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classD (58.62/36.07) [13.86/5.15]
|   |   |   |   |   |   |   feature2 = classE : classD (89.07/57.77) [26.46/13.75]
|   |   |   |   |   |   |   feature2 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classG (0/0) [12.73/0]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature10 < 0.72
|   |   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classD : classD (51.92/25.85) [48.12/19.94]
|   |   |   |   |   |   |   feature3 = classE : classE (26.92/3.64) [27.19/10.89]
|   |   |   |   |   |   |   feature3 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.72
|   |   |   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classD : classD (127.94/24.34) [46.23/22.33]
|   |   |   |   |   |   |   feature3 = classE : classE (5.74/2.29) [2.4/0.67]
|   |   |   |   |   |   |   feature3 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   prevPredS = classF : classD (105.88/45.68) [17.1/13.19]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature10 < 0.47 : classD (15.83/4.83) [4.43/1.65]
|   |   |   |   |   feature10 >= 0.47 : classG (18.27/8.5) [3.95/2.14]
|   |   feature6 = classE
|   |   |   feature7 < 0.48
|   |   |   |   feature7 < 0.32
|   |   |   |   |   feature10 < 0.82
|   |   |   |   |   |   feature7 < 0.28 : classE (2.57/0.27) [0.9/0.23]
|   |   |   |   |   |   feature7 >= 0.28 : classE (41.49/26.01) [19.22/6.62]
|   |   |   |   |   feature10 >= 0.82 : classG (37.69/6.51) [3.31/3.31]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.45 : classE (62.95/35.71) [38.02/19.96]
|   |   |   |   |   |   feature7 >= 0.45 : classD (101.82/67.82) [8.95/8.95]
|   |   |   |   |   prevPredS = classB
|   |   |   |   |   |   feature7 < 0.42 : classA (7.88/7.88) [10.41/2.37]
|   |   |   |   |   |   feature7 >= 0.42 : classE (85.9/49.69) [7.55/7.55]
|   |   |   |   |   prevPredS = classC : classE (1.34/0.77) [0.4/0.4]
|   |   |   |   |   prevPredS = classD : classD (107.64/57.53) [48.73/11.13]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 < 0.35 : classA (65.69/6.91) [5.78/5.78]
|   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   |   feature5 = classA : classE (6.62/2.99) [2.07/1.79]
|   |   |   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classD : classD (12.38/6.27) [4.94/1.09]
|   |   |   |   |   |   |   |   feature5 = classE : classE (27.98/12.66) [7.84/7.56]
|   |   |   |   |   |   |   |   feature5 = classF : classD (9.95/6.32) [3.97/2.16]
|   |   |   |   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   |   |   |   feature10 < 0.7
|   |   |   |   |   |   |   |   |   |   feature10 < 0.62 : classE (6.44/0.57) [4.16/0.57]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.62 : classD (5.24/0.69) [7.06/2.51]
|   |   |   |   |   |   |   |   |   feature10 >= 0.7 : classA (33.97/4.58) [3.99/3.99]
|   |   |   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   |   |   feature7 < 0.45 : classE (10.74/3.89) [9.55/2.49]
|   |   |   |   |   |   |   |   |   feature7 >= 0.45 : classE (402.41/296.61) [98.82/44.49]
|   |   |   |   |   prevPredS = classF : classE (77.55/45.97) [10.5/8.32]
|   |   |   |   |   prevPredS = classG : classD (173.23/131.29) [72.69/26.51]
|   |   |   feature7 >= 0.48
|   |   |   |   feature2 = classA : classE (68.5/11.93) [81.68/67.73]
|   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   feature2 = classC : classC (3.7/2.08) [3.68/0.49]
|   |   |   |   feature2 = classD
|   |   |   |   |   feature7 < 0.78
|   |   |   |   |   |   prevPredS = classA : classD (12.63/3.31) [2.25/2.25]
|   |   |   |   |   |   prevPredS = classB : classA (0.36/0.04) [0.06/0.04]
|   |   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature8 < 0.62 : classE (59.27/9.66) [18.89/17.19]
|   |   |   |   |   |   |   feature8 >= 0.62
|   |   |   |   |   |   |   |   feature7 < 0.67 : classD (6.49/2.64) [1.05/1.05]
|   |   |   |   |   |   |   |   feature7 >= 0.67 : classD (10.22/2.01) [2.91/2.01]
|   |   |   |   |   |   prevPredS = classE : classE (13.73/4.44) [12.19/2.37]
|   |   |   |   |   |   prevPredS = classF : classF (1.8/0.46) [0.89/0.44]
|   |   |   |   |   |   prevPredS = classG : classG (1.34/0.75) [0.22/0.22]
|   |   |   |   |   feature7 >= 0.78 : classD (127.14/12.44) [11.18/11.18]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature8 < 0.5
|   |   |   |   |   |   prevPredS = classA : classD (4.08/2.2) [0.91/0.91]
|   |   |   |   |   |   prevPredS = classB : classA (0.07/0.01) [0.01/0.01]
|   |   |   |   |   |   prevPredS = classC : classE (1.05/0.12) [0.94/0.12]
|   |   |   |   |   |   prevPredS = classD : classD (0.26/0.26) [69.84/4.92]
|   |   |   |   |   |   prevPredS = classE : classE (33.83/18.51) [10.6/3.99]
|   |   |   |   |   |   prevPredS = classF : classF (0.39/0.12) [0.21/0.12]
|   |   |   |   |   |   prevPredS = classG : classG (7.28/0.95) [2.19/0.9]
|   |   |   |   |   feature8 >= 0.5
|   |   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   |   |   prevPredS = classA : classC (6.89/3.23) [0.88/0.88]
|   |   |   |   |   |   |   |   prevPredS = classB : classA (0.74/0.07) [0.09/0.07]
|   |   |   |   |   |   |   |   prevPredS = classC : classE (1.69/0.2) [0.47/0.2]
|   |   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   |   |   |   |   feature8 < 0.78 : classE (2.81/0.45) [2.25/0.35]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.78 : classD (21.21/2.89) [2.19/2.19]
|   |   |   |   |   |   |   |   |   feature7 >= 0.62 : classE (7.72/1.64) [7.65/1.64]
|   |   |   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   |   |   feature8 < 0.66
|   |   |   |   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.58 : classD (24.86/12.22) [10.2/3.73]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.58 : classE (35.73/5.99) [15.04/5.99]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.78 : classD (30.51/4.86) [17.72/4.9]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.78 : classE (3.25/0.29) [0.95/0.29]
|   |   |   |   |   |   |   |   |   feature8 >= 0.66 : classE (69.67/8.23) [64.32/34.56]
|   |   |   |   |   |   |   |   prevPredS = classF : classE (3.62/1.61) [2.32/0.43]
|   |   |   |   |   |   |   |   prevPredS = classG : classE (5.39/0.64) [1.04/0.64]
|   |   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   |   feature10 < 0.82
|   |   |   |   |   |   |   |   |   feature11 < 0.68
|   |   |   |   |   |   |   |   |   |   feature11 < 0.47
|   |   |   |   |   |   |   |   |   |   |   feature7 < 0.75 : classD (2.99/0.69) [0.54/0.54]
|   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.75 : classG (2.27/0.22) [2.33/0.29]
|   |   |   |   |   |   |   |   |   |   feature11 >= 0.47
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.66
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classA : classE (0.18/0.04) [0.16/0.02]
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classD : classD (16.5/2.38) [20.02/7.2]
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classE : classE (9.77/2.02) [3.99/1.18]
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classF : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classA : classD (16.46/2.54) [2.24/2.24]
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classD : classE (0.37/0.04) [0.53/0.04]
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 < 0.52 : classE (2.09/0.18) [1.13/0.18]
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 >= 0.52 : classD (156.11/24.31) [24.82/24.82]
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classF : classF (2.03/0.09) [0.69/0.07]
|   |   |   |   |   |   |   |   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   |   |   |   |   |   feature11 >= 0.68
|   |   |   |   |   |   |   |   |   |   feature8 < 0.74
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.7 : classE (11.19/2.31) [6.12/1.35]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.7 : classD (23.82/4.05) [5.17/5.17]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.74 : classE (14.76/3.05) [12.05/1.78]
|   |   |   |   |   |   |   |   feature10 >= 0.82 : classE (35.72/5.51) [30/11.48]
|   |   |   |   |   |   feature8 >= 0.82 : classE (112.72/19.63) [61.3/13.46]
|   |   |   |   feature2 = classF : classE (29.5/9.22) [10.77/4.81]
|   |   |   |   feature2 = classG
|   |   |   |   |   feature7 < 0.55 : classG (8.75/1.49) [0.85/0.85]
|   |   |   |   |   feature7 >= 0.55 : classE (2.55/0.61) [1.54/0.57]
|   |   feature6 = classF
|   |   |   feature5 = classA : classF (25.03/12.71) [5.57/2.03]
|   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   feature5 = classC : classC (1.12/0.58) [0.94/0.76]
|   |   |   feature5 = classD : classE (1.33/1.2) [2.53/0.83]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.38 : classF (4.7/2.66) [2.26/1.44]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature7 < 0.48 : classD (12.38/8.37) [9.49/2.99]
|   |   |   |   |   feature7 >= 0.48 : classE (16.4/7.71) [7.05/5.08]
|   |   |   feature5 = classF
|   |   |   |   feature7 < 0.53 : classF (30.04/20.22) [5.19/1.29]
|   |   |   |   feature7 >= 0.53 : classF (20.65/1.23) [18.23/6.13]
|   |   |   feature5 = classG : classG (2.01/1.02) [0.37/0.29]
|   |   feature6 = classG
|   |   |   prevPredS = classA : classG (31.14/22) [6.58/6.58]
|   |   |   prevPredS = classB : classE (5.55/2.22) [1.46/1.44]
|   |   |   prevPredS = classC : classG (2.12/1.15) [0.89/0.89]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.48 : classD (23.28/14.67) [4.39/2.05]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.52 : classG (32.74/3.31) [3.03/3.03]
|   |   |   |   |   feature7 >= 0.52 : classD (3.11/1.79) [3.13/2.2]
|   |   |   prevPredS = classE : classE (50.11/30.28) [21.14/13.83]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature7 < 0.38 : classE (4.06/2.21) [1.21/0.84]
|   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   feature2 = classA : classA (0.09/0.01) [0.01/0.01]
|   |   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classG (0/0) [0/0]
|   |   |   |   |   |   feature2 = classE : classG (15.93/1.4) [1.4/1.4]
|   |   |   |   |   |   feature2 = classF : classF (0.01/0) [0/0]
|   |   |   |   |   |   feature2 = classG : classG (5.58/0.49) [0.49/0.49]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature2 = classA : classA (0.32/0.17) [0.04/0.03]
|   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classF (0.45/0.27) [0.06/0.02]
|   |   |   |   |   feature2 = classD : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classE (3.88/2.35) [0.51/0.47]
|   |   |   |   |   feature2 = classF : classA (0.93/0.62) [0.4/0.24]
|   |   |   |   |   feature2 = classG : classG (19.97/14.13) [2.6/2.6]
|   |   |   prevPredS = classG
|   |   |   |   feature7 < 0.43
|   |   |   |   |   feature7 < 0.38 : classE (2.44/1.63) [0.97/0.67]
|   |   |   |   |   feature7 >= 0.38 : classG (20.43/1.99) [8.3/2.47]
|   |   |   |   feature7 >= 0.43 : classA (15.03/11.3) [2.07/1.57]
|   feature10 >= 0.92
|   |   feature7 < 0.55
|   |   |   feature7 < 0.45
|   |   |   |   feature7 < 0.32
|   |   |   |   |   feature2 = classA : classG (0.09/0.02) [0.01/0.01]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classG (2.59/0.46) [0.33/0.33]
|   |   |   |   |   feature2 = classD : classG (0.02/0) [0/0]
|   |   |   |   |   feature2 = classE : classG (22.66/4.04) [1.99/1.99]
|   |   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classG (0/0) [0/0]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.42
|   |   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   |   feature2 = classA : classE (16.87/1.49) [2.3/1.48]
|   |   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classC (0.2/0.02) [0.1/0.02]
|   |   |   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classE (2.79/0.25) [0.25/0.25]
|   |   |   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature7 >= 0.35 : classE (57.01/28.33) [29.78/16.53]
|   |   |   |   |   feature7 >= 0.42 : classG (12.31/2.13) [3.68/1.13]
|   |   |   feature7 >= 0.45
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature8 < 0.62
|   |   |   |   |   |   feature7 < 0.48 : classE (41.15/28.91) [3.62/3.62]
|   |   |   |   |   |   feature7 >= 0.48 : classD (2.2/0.76) [0.95/0.95]
|   |   |   |   |   feature8 >= 0.62
|   |   |   |   |   |   feature7 < 0.48 : classD (172.35/88.92) [26.86/26.86]
|   |   |   |   |   |   feature7 >= 0.48 : classE (2.67/0.24) [1.38/0.24]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classC (20.88/14.24) [3.93/1.97]
|   |   |   |   prevPredS = classD : classD (5.67/2.96) [0.54/0.54]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.48 : classA (224.4/131.66) [19.74/19.74]
|   |   |   |   |   feature7 >= 0.48 : classE (3.85/0.34) [2.4/0.34]
|   |   |   |   prevPredS = classF : classF (0.87/0.61) [0.17/0.01]
|   |   |   |   prevPredS = classG : classE (13.67/9.17) [2.77/1.25]
|   |   feature7 >= 0.55
|   |   |   feature9 < 0.98
|   |   |   |   feature8 < 0.98 : classE (38.47/9.5) [33.81/16.06]
|   |   |   |   feature8 >= 0.98
|   |   |   |   |   feature11 < 0.82 : classA (75.19/8.27) [8.86/6.87]
|   |   |   |   |   feature11 >= 0.82 : classE (7.23/0.93) [2.41/0.83]
|   |   |   feature9 >= 0.98
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature8 < 0.86 : classB (446.22/39.73) [39.57/39.57]
|   |   |   |   |   feature8 >= 0.86
|   |   |   |   |   |   feature2 = classA : classA (0.03/0) [0.03/0]
|   |   |   |   |   |   feature2 = classB : classB (3.6/0.32) [0.32/0.32]
|   |   |   |   |   |   feature2 = classC : classC (5.8/0.51) [2.83/0.51]
|   |   |   |   |   |   feature2 = classD : classD (0.02/0) [0.16/0]
|   |   |   |   |   |   feature2 = classE : classE (3.47/0.31) [0.59/0.31]
|   |   |   |   |   |   feature2 = classF : classC (0/0) [0/0]
|   |   |   |   |   |   feature2 = classG : classC (0/0) [0/0]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature7 < 0.72 : classA (19.11/6.19) [24.25/11.33]
|   |   |   |   |   feature7 >= 0.72 : classE (8.01/0.8) [3.96/0.75]
predS = classF
|   feature7 < 0.52
|   |   feature7 < 0.48
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.45 : classF (67.13/46.84) [75.15/48.93]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature10 < 0.63 : classC (5.01/2.02) [0.97/0.97]
|   |   |   |   |   feature10 >= 0.63 : classE (261.02/91.98) [48.9/48.9]
|   |   |   prevPredS = classB : classB (11.67/6.13) [13.15/2.69]
|   |   |   prevPredS = classC
|   |   |   |   feature9 < 0.98 : classC (2.71/1.07) [0.62/0.62]
|   |   |   |   feature9 >= 0.98 : classC (5.48/0.67) [3.6/1.26]
|   |   |   prevPredS = classD
|   |   |   |   feature5 = classA : classD (2.37/0.32) [2.63/0.58]
|   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (1.3/0.16) [1.06/0.32]
|   |   |   |   feature5 = classD
|   |   |   |   |   feature11 < 0.92 : classD (18.93/2.32) [9.66/4.62]
|   |   |   |   |   feature11 >= 0.92
|   |   |   |   |   |   feature10 < 0.47 : classA (10.7/1.06) [7.39/1.96]
|   |   |   |   |   |   feature10 >= 0.47
|   |   |   |   |   |   |   feature8 < 0.62 : classD (5.03/0.62) [4.5/1.3]
|   |   |   |   |   |   |   feature8 >= 0.62 : classA (5.37/0.55) [1.4/0.88]
|   |   |   |   feature5 = classE : classA (81.36/37.41) [29.65/18.26]
|   |   |   |   feature5 = classF : classF (4.6/0.11) [5.53/0.62]
|   |   |   |   feature5 = classG : classG (4.07/0.5) [0.99/0.78]
|   |   |   prevPredS = classE
|   |   |   |   feature5 = classA : classE (0.64/0.1) [0.42/0.15]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classA (2.36/0.26) [1.04/0.88]
|   |   |   |   feature5 = classD : classD (8.4/1.03) [3.69/3.69]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature11 < 0.65
|   |   |   |   |   |   |   feature9 < 0.65 : classE (5.76/0.84) [4.15/1.89]
|   |   |   |   |   |   |   feature9 >= 0.65 : classA (19.49/2.06) [14.45/12.19]
|   |   |   |   |   |   feature11 >= 0.65 : classE (12.09/2.7) [26.53/12.4]
|   |   |   |   |   feature7 >= 0.45 : classD (25.78/4.01) [9.12/9.12]
|   |   |   |   feature5 = classF : classF (13.13/0.32) [5.77/4.34]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   prevPredS = classF : classF (74.33/42.13) [42.43/20]
|   |   |   prevPredS = classG
|   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   feature3 = classC : classC (0.01/0) [0.01/0]
|   |   |   |   feature3 = classD : classD (20.88/2.56) [4.81/4.81]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature7 < 0.43 : classE (2.94/0.85) [3.26/3.26]
|   |   |   |   |   feature7 >= 0.43 : classE (14.12/1.24) [1.29/1.24]
|   |   |   |   feature3 = classF : classF (1.17/0.03) [0.81/0.14]
|   |   |   |   feature3 = classG : classG (3.9/0.49) [1.75/0.69]
|   |   feature7 >= 0.48 : classD (929.22/359.02) [130.63/128.99]
|   feature7 >= 0.52
|   |   prevPredS = classA
|   |   |   feature2 = classA : classF (13.15/1.52) [10.12/4.77]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classA (5.16/1.07) [2.35/0.65]
|   |   |   feature2 = classD : classD (16.11/3.29) [7.32/7.32]
|   |   |   feature2 = classE : classF (0.17/0.02) [0.21/0.06]
|   |   |   feature2 = classF
|   |   |   |   feature10 < 0.72 : classF (6.64/1.26) [5.64/4.19]
|   |   |   |   feature10 >= 0.72 : classE (6.68/0.84) [7.09/1.25]
|   |   |   feature2 = classG : classF (0.11/0.01) [0.14/0.04]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC
|   |   |   feature10 < 0.53 : classF (3.2/0.11) [1.53/0.31]
|   |   |   feature10 >= 0.53
|   |   |   |   feature10 < 0.83 : classA (2.98/0.38) [2.42/0.38]
|   |   |   |   feature10 >= 0.83 : classC (2.69/0.34) [2.03/0.5]
|   |   prevPredS = classD
|   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   feature3 = classC : classC (0.02/0) [0.01/0]
|   |   |   feature3 = classD : classD (37.2/5.93) [7.21/6.97]
|   |   |   feature3 = classE : classE (12.29/1.96) [12.63/2.3]
|   |   |   feature3 = classF : classF (6.93/0.24) [3.31/0.66]
|   |   |   feature3 = classG : classA (0.02/0) [0/0]
|   |   prevPredS = classE
|   |   |   feature5 = classA : classE (13.38/2.1) [4.83/4.83]
|   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   feature5 = classC : classF (0.53/0.02) [0.13/0.05]
|   |   |   feature5 = classD : classD (0.6/0.08) [0.67/0.14]
|   |   |   feature5 = classE : classE (4.89/0.62) [4.51/1.17]
|   |   |   feature5 = classF : classF (3.97/0.14) [2.32/0.38]
|   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   prevPredS = classF
|   |   |   feature10 < 0.52
|   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   feature6 = classC : classA (0.1/0.03) [0.02/0.02]
|   |   |   |   feature6 = classD : classD (2.73/0.42) [0.59/0.58]
|   |   |   |   feature6 = classE : classE (36.74/6.02) [8.37/8]
|   |   |   |   feature6 = classF : classF (6.6/0.23) [4.19/0.63]
|   |   |   |   feature6 = classG : classA (0.01/0) [0/0]
|   |   |   feature10 >= 0.52
|   |   |   |   feature10 < 0.55 : classG (346.65/36.64) [68.33/55.67]
|   |   |   |   feature10 >= 0.55 : classF (138.71/54.34) [157.49/42.25]
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.75 : classF (3.84/1.33) [2.81/0.56]
|   |   |   |   feature7 >= 0.75 : classG (2.04/0.18) [0.18/0.18]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classC (0.01/0) [0/0]
|   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   feature2 = classE : classF (0/0) [0/0]
|   |   |   feature2 = classF : classF (7.19/1.62) [5.39/0.68]
|   |   |   feature2 = classG : classG (8.33/0.93) [2.98/2.22]
predS = classG
|   feature3 = classA : classA (7.53/2.41) [6.6/2.69]
|   feature3 = classB
|   |   prevPredS = classA : classA (2.03/0.94) [0.66/0.38]
|   |   prevPredS = classB : classB (2.33/0.46) [0.27/0.27]
|   |   prevPredS = classC : classE (1.97/0.39) [0.75/0.23]
|   |   prevPredS = classD : classE (1.37/0.32) [0.18/0.18]
|   |   prevPredS = classE : classA (0.46/0.15) [0.29/0.19]
|   |   prevPredS = classF : classF (0.13/0.06) [0.03/0.01]
|   |   prevPredS = classG : classA (4.18/1.58) [0.85/0.79]
|   feature3 = classC
|   |   feature8 < 0.9
|   |   |   feature2 = classA : classA (0.74/0.22) [0.14/0.12]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC : classA (2.72/0.69) [0.38/0.38]
|   |   |   feature2 = classD : classG (0.45/0.08) [0.2/0.06]
|   |   |   feature2 = classE : classA (0.33/0.23) [0.16/0.07]
|   |   |   feature2 = classF : classF (2.03/0.33) [1.44/0.08]
|   |   |   feature2 = classG : classG (0.27/0.09) [0.14/0.05]
|   |   feature8 >= 0.9 : classC (5.91/1.72) [2.68/0.9]
|   feature3 = classD : classD (180.67/89.02) [130.47/49.78]
|   feature3 = classE
|   |   feature2 = classA : classA (44.72/20.1) [35.85/27.07]
|   |   feature2 = classB : classA (0/0) [0/0]
|   |   feature2 = classC : classC (0.01/0) [0/0]
|   |   feature2 = classD : classG (17.78/3.06) [7.8/2.29]
|   |   feature2 = classE
|   |   |   feature7 < 0.52
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature7 < 0.42 : classE (13.84/6.59) [13.97/1.28]
|   |   |   |   |   feature7 >= 0.42 : classG (25.67/8.59) [6.21/6.21]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.48 : classE (6.25/1.38) [3.01/1.15]
|   |   |   |   |   feature7 >= 0.48 : classF (12.04/5.91) [6.57/2.12]
|   |   |   feature7 >= 0.52
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature11 < 0.92 : classE (3.81/0.9) [0.34/0.34]
|   |   |   |   |   feature11 >= 0.92
|   |   |   |   |   |   prevPredS = classA : classC (0.72/0.06) [0.06/0.06]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classA (71.39/6.72) [6.43/6.43]
|   |   |   |   |   |   prevPredS = classF : classA (49.88/4.39) [4.39/4.39]
|   |   |   |   |   |   prevPredS = classG : classG (0.18/0.02) [0.1/0.02]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   feature10 < 0.68 : classG (14.92/2.6) [9.37/1.31]
|   |   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   |   feature7 < 0.62 : classE (2.63/0.33) [2.09/0.23]
|   |   |   |   |   |   |   feature7 >= 0.62 : classF (3.83/0.62) [0.94/0.6]
|   |   |   |   |   feature10 >= 0.92 : classA (15.47/2.64) [2.45/2.45]
|   |   feature2 = classF : classF (2.9/1.54) [1.05/0.39]
|   |   feature2 = classG
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.28 : classA (4.5/0.94) [0.4/0.4]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   prevPredS = classA : classG (0.81/0.2) [0.12/0.07]
|   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classG (0.18/0.02) [0.02/0.02]
|   |   |   |   |   |   prevPredS = classE : classE (7.35/5.3) [4.98/0.92]
|   |   |   |   |   |   prevPredS = classF : classG (2.04/0.18) [0.18/0.18]
|   |   |   |   |   |   prevPredS = classG : classG (13.25/1.16) [1.86/1.16]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.52 : classF (5.9/0.72) [3.89/0.27]
|   |   |   |   |   |   feature7 >= 0.52 : classG (3.19/1.55) [0.86/0.28]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.62
|   |   |   |   |   prevPredS = classA : classG (3.27/1.08) [0.29/0.29]
|   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classE : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classF : classG (0.26/0.02) [0.14/0.02]
|   |   |   |   |   prevPredS = classG : classD (143.31/13.47) [12.6/12.6]
|   |   |   |   feature7 >= 0.62 : classG (18.32/6.15) [12.58/2.21]
|   feature3 = classF
|   |   feature10 < 0.75
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.65 : classG (7.76/3.29) [2.53/2.24]
|   |   |   |   feature7 >= 0.65 : classA (27.58/3.41) [3.62/3.62]
|   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   feature2 = classD : classG (5.95/1.04) [2.65/0.8]
|   |   |   feature2 = classE : classA (4.38/3.04) [1.95/0.73]
|   |   |   feature2 = classF
|   |   |   |   prevPredS = classA : classG (2.45/1.33) [1.16/0.25]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   prevPredS = classD : classG (0.04/0) [0.01/0]
|   |   |   |   prevPredS = classE : classA (1.95/0.6) [0.98/0.98]
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature8 < 0.78 : classA (34.95/7.89) [4.37/4.37]
|   |   |   |   |   feature8 >= 0.78 : classF (3.63/0.34) [1.29/0.05]
|   |   |   |   prevPredS = classG : classF (2.38/1.3) [0.84/0.27]
|   |   |   feature2 = classG : classG (2.87/0.46) [1.4/0.34]
|   |   feature10 >= 0.75
|   |   |   feature11 < 0.52
|   |   |   |   feature7 < 0.45 : classE (37.47/6.48) [13.63/3.3]
|   |   |   |   feature7 >= 0.45 : classD (5.24/5.24) [20.76/2.44]
|   |   |   feature11 >= 0.52 : classF (21.52/2.61) [6.4/0.55]
|   feature3 = classG
|   |   feature10 < 0.58
|   |   |   feature7 < 0.62
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature7 < 0.42 : classA (8.8/1.54) [8.03/0.77]
|   |   |   |   |   |   feature7 >= 0.42 : classD (10.11/10.11) [21.57/0.89]
|   |   |   |   |   feature7 >= 0.48 : classF (9.52/6.23) [2.48/0]
|   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   prevPredS = classC : classG (0/0) [0.41/0]
|   |   |   |   prevPredS = classD : classG (2.61/0.46) [1.6/0.38]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.48 : classA (38.64/18.12) [10.12/3.89]
|   |   |   |   |   feature7 >= 0.48 : classF (5.7/1.37) [3.42/0.37]
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature10 < 0.48 : classG (4.58/0.8) [0.67/0.67]
|   |   |   |   |   feature10 >= 0.48 : classF (5.6/2.64) [1.3/0.49]
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 < 0.48 : classG (39.3/3.48) [14.2/4.05]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.52 : classG (16.91/6.93) [8.02/5.11]
|   |   |   |   |   |   feature7 >= 0.52 : classG (6.72/0.59) [3.97/0.59]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   prevPredS = classA : classC (3.18/0.29) [2.35/2.35]
|   |   |   |   |   |   prevPredS = classB : classG (0.24/0.02) [0.02/0.02]
|   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classF : classG (0.16/0.06) [0.01/0.01]
|   |   |   |   |   |   prevPredS = classG : classG (2.47/0.22) [1.45/0.22]
|   |   |   |   |   feature10 >= 0.55 : classA (360.56/32.94) [33.97/33.97]
|   |   |   |   feature7 >= 0.65 : classG (42.49/13.24) [20.45/3.74]
|   |   feature10 >= 0.58
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.82 : classG (33.5/15.22) [13.48/6.42]
|   |   |   |   feature7 >= 0.82
|   |   |   |   |   feature10 < 0.75
|   |   |   |   |   |   prevPredS = classA : classA (11.47/1.08) [1.03/1.03]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classF : classG (0.25/0.02) [0.02/0.02]
|   |   |   |   |   |   prevPredS = classG : classA (24.43/2.33) [2.21/2.21]
|   |   |   |   |   feature10 >= 0.75 : classG (4.02/0.41) [1.85/0.35]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classC (0.01/0) [0/0]
|   |   |   feature2 = classD : classG (18.6/3.76) [4.89/2.96]
|   |   |   feature2 = classE : classG (0.16/0.03) [1.07/0.02]
|   |   |   feature2 = classF : classF (3.13/1.05) [1.37/0.45]
|   |   |   feature2 = classG
|   |   |   |   feature8 < 0.62
|   |   |   |   |   feature7 < 0.45 : classA (9.62/2.37) [23.2/1.43]
|   |   |   |   |   feature7 >= 0.45 : classG (8.27/2.24) [4.21/1]
|   |   |   |   feature8 >= 0.62
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature10 < 0.75 : classG (10.27/3.91) [6.94/1.06]
|   |   |   |   |   |   feature10 >= 0.75 : classF (8.81/1.99) [1.42/0.51]
|   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classE : classE (0/0) [4.46/0]
|   |   |   |   |   prevPredS = classF : classG (0.11/0.01) [0.12/0.01]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature5 = classA : classG (0.77/0.09) [0.83/0.08]
|   |   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classG (0.03/0) [0.05/0]
|   |   |   |   |   |   feature5 = classE : classG (0.23/0.03) [0.03/0.02]
|   |   |   |   |   |   feature5 = classF : classF (3.79/0.38) [1.44/0.06]
|   |   |   |   |   |   feature5 = classG
|   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   feature7 < 0.48 : classG (11.55/1.02) [2.83/1.02]
|   |   |   |   |   |   |   |   feature7 >= 0.48 : classF (4.01/0.98) [2.71/0.57]
|   |   |   |   |   |   |   feature7 >= 0.52 : classG (100.66/8.85) [55.2/8.85]

Size of the tree : 1191

Weight: 0.58


REPTree
============

predS = classA
|   feature6 = classA
|   |   feature7 < 0.78
|   |   |   feature7 < 0.68
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.32 : classD (3.27/0.21) [0.66/0.66]
|   |   |   |   |   feature7 >= 0.32 : classA (16.21/6.92) [11.78/7.12]
|   |   |   |   prevPredS = classB : classB (0.02/0.01) [0.01/0]
|   |   |   |   prevPredS = classC : classA (0.31/0.21) [0.13/0.13]
|   |   |   |   prevPredS = classD : classG (9.84/3.76) [3.69/3.48]
|   |   |   |   prevPredS = classE : classD (1.16/0.46) [0.65/0.57]
|   |   |   |   prevPredS = classF : classC (0.44/0.44) [1.52/0.26]
|   |   |   |   prevPredS = classG : classD (1.25/0.44) [0.99/0.99]
|   |   |   feature7 >= 0.68 : classC (27.39/17.32) [7.31/6.08]
|   |   feature7 >= 0.78 : classA (31.41/1.99) [20.7/6.23]
|   feature6 = classB
|   |   feature10 < 0.98
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.75
|   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature7 < 0.32 : classD (6.98/0.44) [1.47/1.47]
|   |   |   |   |   |   |   feature7 >= 0.32 : classA (12.06/6.51) [17.44/7.75]
|   |   |   |   |   |   feature7 >= 0.52 : classB (19.1/11.04) [11.69/6.04]
|   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   feature8 < 0.66
|   |   |   |   |   |   |   feature2 = classA : classB (35.06/7.09) [7.49/7.49]
|   |   |   |   |   |   |   feature2 = classB : classB (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classB (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classA (0/0) [0.02/0]
|   |   |   |   |   |   |   feature2 = classE : classA (2.81/0.54) [2.88/0.59]
|   |   |   |   |   |   |   feature2 = classF : classA (0.16/0.03) [0.03/0.03]
|   |   |   |   |   |   |   feature2 = classG : classB (0/0) [0/0]
|   |   |   |   |   |   feature8 >= 0.66 : classA (13.14/2.52) [4.88/2.77]
|   |   |   |   feature7 >= 0.75 : classD (27.47/3.42) [16.18/16.18]
|   |   |   prevPredS = classB
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   feature7 < 0.32 : classB (31.62/8.69) [6.02/6.02]
|   |   |   |   |   |   feature7 >= 0.32 : classA (6.77/0.47) [7.54/1.29]
|   |   |   |   |   feature7 >= 0.38 : classB (56.91/3.75) [10.85/10.85]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature7 < 0.58 : classA (8.47/0.54) [7.4/7.4]
|   |   |   |   |   |   feature7 >= 0.58 : classG (2.25/0.41) [1.35/0.43]
|   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   feature7 < 0.65 : classD (6.18/0.39) [1.18/1.18]
|   |   |   |   |   |   feature7 >= 0.65 : classE (7.35/0.64) [1.43/1.43]
|   |   |   prevPredS = classC : classC (5.23/1.62) [5.85/2.45]
|   |   |   prevPredS = classD : classA (0.63/0.15) [0.84/0.15]
|   |   |   prevPredS = classE : classD (2.82/1.36) [1.51/1.27]
|   |   |   prevPredS = classF : classC (2.12/2.12) [5.11/0.95]
|   |   |   prevPredS = classG : classG (3.58/3) [3.48/1.86]
|   |   feature10 >= 0.98
|   |   |   feature7 < 0.68 : classA (14.7/7.73) [5.73/5.62]
|   |   |   feature7 >= 0.68 : classC (35.54/5.68) [7.02/7.02]
|   feature6 = classC
|   |   prevPredS = classA
|   |   |   feature10 < 0.98 : classD (21.88/8.36) [9.1/9.1]
|   |   |   feature10 >= 0.98 : classC (23.27/7.55) [10.11/6.43]
|   |   prevPredS = classB : classB (0.03/0.01) [0.01/0.01]
|   |   prevPredS = classC
|   |   |   feature7 < 0.65
|   |   |   |   feature8 < 0.64 : classA (7.83/3.62) [5.54/2.97]
|   |   |   |   feature8 >= 0.64 : classC (13.4/6.56) [8.82/6.1]
|   |   |   feature7 >= 0.65
|   |   |   |   feature8 < 0.98 : classA (43.78/7.74) [12.13/9.76]
|   |   |   |   feature8 >= 0.98 : classC (5.21/0.78) [3.5/0.99]
|   |   prevPredS = classD : classA (1.51/0.37) [0.7/0.37]
|   |   prevPredS = classE : classD (1.13/0.55) [0.61/0.52]
|   |   prevPredS = classF : classC (0.56/0.56) [2.46/0.8]
|   |   prevPredS = classG : classG (1.31/1.09) [1.08/0.44]
|   feature6 = classD
|   |   feature10 < 0.98
|   |   |   feature9 < 0.58
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   feature7 < 0.45 : classD (33.72/3.59) [7.71/7.71]
|   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.62 : classB (6.08/6.08) [9.41/4.45]
|   |   |   |   |   |   |   |   feature7 >= 0.62 : classA (7.29/5.43) [5.86/1.47]
|   |   |   |   |   |   feature7 >= 0.68 : classE (6.65/0.89) [2.1/2.1]
|   |   |   |   |   feature7 >= 0.75 : classD (48.83/4.15) [11.21/11.21]
|   |   |   |   prevPredS = classB : classB (0.04/0.02) [0.02/0.02]
|   |   |   |   prevPredS = classC : classC (2.6/0.85) [2.4/0.75]
|   |   |   |   prevPredS = classD : classA (0.1/0.02) [0.36/0.03]
|   |   |   |   prevPredS = classE : classD (6.23/1.47) [2.79/2.68]
|   |   |   |   prevPredS = classF : classA (3.03/0.72) [4.21/2.77]
|   |   |   |   prevPredS = classG : classD (4.13/1.4) [4.04/2.44]
|   |   |   feature9 >= 0.58
|   |   |   |   feature7 < 0.68
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature10 < 0.67
|   |   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   |   feature7 < 0.48 : classD (5.1/1.31) [1.91/1.91]
|   |   |   |   |   |   |   |   feature7 >= 0.48 : classD (17.3/3.03) [7.47/7.47]
|   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classA (0.27/0.12) [0.1/0.1]
|   |   |   |   |   |   |   prevPredS = classD : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classE : classD (0.99/0.13) [0.36/0.36]
|   |   |   |   |   |   |   prevPredS = classF : classC (1.16/1.16) [2.7/0.76]
|   |   |   |   |   |   |   prevPredS = classG : classD (2.91/0.58) [1.16/1.16]
|   |   |   |   |   |   feature10 >= 0.67 : classA (9.91/5.96) [10.11/5.03]
|   |   |   |   |   feature2 = classB : classA (1.62/0.97) [0.87/0.85]
|   |   |   |   |   feature2 = classC : classC (0.65/0.36) [0.36/0.26]
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   |   |   feature8 < 0.5 : classD (9.03/1.17) [3.46/2.17]
|   |   |   |   |   |   |   |   feature8 >= 0.5 : classA (13.55/5.23) [7.49/3.33]
|   |   |   |   |   |   |   feature7 >= 0.45 : classA (5.32/0.96) [12.34/11.03]
|   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   feature7 < 0.62 : classG (2.05/0.37) [1.25/0.41]
|   |   |   |   |   |   |   feature7 >= 0.62 : classD (5.9/0.63) [11.41/1.29]
|   |   |   |   |   feature2 = classE : classA (9.04/5.28) [26.06/4.62]
|   |   |   |   |   feature2 = classF : classA (1.87/0.9) [3.41/0.82]
|   |   |   |   |   feature2 = classG : classG (0/0) [1.57/0]
|   |   |   |   feature7 >= 0.68
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   |   feature5 = classA : classA (56.91/12.29) [21.68/11.57]
|   |   |   |   |   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature5 = classD : classD (0.01/0) [0.01/0]
|   |   |   |   |   |   |   |   feature5 = classE : classA (12.89/2.78) [4.6/2.62]
|   |   |   |   |   |   |   |   feature5 = classF : classA (2.56/0.55) [0.56/0.52]
|   |   |   |   |   |   |   |   feature5 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature7 >= 0.72 : classA (15.66/1) [3.34/3.19]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classC (4.44/0.85) [4.44/0.85]
|   |   |   |   |   |   prevPredS = classD : classA (0.31/0.09) [0.09/0.09]
|   |   |   |   |   |   prevPredS = classE : classA (24.75/4.67) [14.98/4.72]
|   |   |   |   |   |   prevPredS = classF : classA (0.12/0.02) [0.12/0.02]
|   |   |   |   |   |   prevPredS = classG : classA (0.02/0) [0.04/0]
|   |   |   |   |   feature7 >= 0.75 : classA (58.19/29.59) [31.72/11.66]
|   |   feature10 >= 0.98
|   |   |   feature7 < 0.65
|   |   |   |   feature7 < 0.58 : classD (8.63/2.21) [7.58/7.58]
|   |   |   |   feature7 >= 0.58 : classD (7.57/3.26) [3.1/3.1]
|   |   |   feature7 >= 0.65
|   |   |   |   feature7 < 0.72 : classC (67.14/20.49) [26.12/26.12]
|   |   |   |   feature7 >= 0.72 : classA (5.56/0.35) [4.79/1.06]
|   feature6 = classE
|   |   feature7 < 0.78
|   |   |   feature7 < 0.68
|   |   |   |   feature7 < 0.32 : classD (143.38/36.57) [32.77/31.27]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.48 : classA (135.26/55.05) [62.07/48.52]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   |   feature8 < 0.86
|   |   |   |   |   |   |   |   feature10 < 0.9
|   |   |   |   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   |   |   |   feature10 < 0.5 : classA (18.69/4.83) [23.36/23.36]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.5
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.62 : classG (3.07/0.28) [3.05/2.75]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.62 : classA (9.33/2.41) [10.33/8.38]
|   |   |   |   |   |   |   |   |   feature2 = classB : classA (4.9/1.61) [5.48/5.48]
|   |   |   |   |   |   |   |   |   feature2 = classC : classC (1.97/0.72) [2.21/1.77]
|   |   |   |   |   |   |   |   |   feature2 = classD : classA (0.22/0.07) [0.25/0.25]
|   |   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   |   feature10 < 0.58 : classA (23.64/6.22) [47.18/30.71]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.58
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.65 : classG (4.19/0.38) [3.76/3.35]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.65 : classE (14.58/14.58) [48.13/18.37]
|   |   |   |   |   |   |   |   |   feature2 = classF : classA (2.26/0.74) [2.53/2.53]
|   |   |   |   |   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   feature10 >= 0.9
|   |   |   |   |   |   |   |   |   feature7 < 0.58 : classF (13.7/0) [19.03/10.96]
|   |   |   |   |   |   |   |   |   feature7 >= 0.58 : classG (4.27/0.77) [2.56/0.81]
|   |   |   |   |   |   |   feature8 >= 0.86
|   |   |   |   |   |   |   |   feature7 < 0.53 : classD (30.34/5.89) [6.02/6.02]
|   |   |   |   |   |   |   |   feature7 >= 0.53 : classB (10.46/10.46) [38.46/13.58]
|   |   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   |   feature8 < 0.98
|   |   |   |   |   |   |   |   feature11 < 0.98 : classA (139.89/74.21) [55.45/28.51]
|   |   |   |   |   |   |   |   feature11 >= 0.98 : classE (12.49/6.83) [11.16/2.6]
|   |   |   |   |   |   |   feature8 >= 0.98
|   |   |   |   |   |   |   |   feature10 < 0.92 : classA (4.57/2.98) [1.9/1.34]
|   |   |   |   |   |   |   |   feature10 >= 0.92 : classE (35.01/18.03) [12.39/6.73]
|   |   |   feature7 >= 0.68
|   |   |   |   feature7 < 0.75
|   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   prevPredS = classA : classA (52.65/14.65) [41.19/13.67]
|   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classC (27.55/7.76) [25.05/5.26]
|   |   |   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classA (126.55/41.76) [28.74/24.1]
|   |   |   |   |   |   prevPredS = classF : classA (1.98/0.93) [1.48/0.76]
|   |   |   |   |   |   prevPredS = classG : classA (3.27/0.91) [1.06/0.62]
|   |   |   |   |   feature10 >= 0.98 : classC (254.18/77.2) [48.4/48.39]
|   |   |   |   feature7 >= 0.75
|   |   |   |   |   feature10 < 0.68 : classE (26.34/3.16) [9.84/9.84]
|   |   |   |   |   feature10 >= 0.68
|   |   |   |   |   |   feature10 < 0.85
|   |   |   |   |   |   |   feature10 < 0.82 : classA (2.22/0.14) [2.78/0.42]
|   |   |   |   |   |   |   feature10 >= 0.82 : classD (165.02/22.46) [31.89/31.89]
|   |   |   |   |   |   feature10 >= 0.85 : classA (11.52/0.73) [13.29/2.2]
|   |   feature7 >= 0.78 : classE (500.31/107.81) [202.83/137.78]
|   feature6 = classF
|   |   feature10 < 0.92
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.75
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature7 < 0.53
|   |   |   |   |   |   |   feature7 < 0.32 : classD (13.53/0.86) [2.86/2.86]
|   |   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   |   feature7 < 0.48 : classA (11.53/4.79) [7.46/5.65]
|   |   |   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   |   |   feature10 < 0.53 : classD (8.85/0.56) [1.95/1.95]
|   |   |   |   |   |   |   |   |   feature10 >= 0.53 : classG (3.89/1.11) [1.32/1.32]
|   |   |   |   |   |   feature7 >= 0.53 : classF (21.42/20.06) [43.11/16.11]
|   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   feature10 < 0.83
|   |   |   |   |   |   |   |   feature7 < 0.65 : classE (23.15/8.86) [5.29/5.29]
|   |   |   |   |   |   |   |   feature7 >= 0.65 : classE (9.16/0.75) [2.16/2.16]
|   |   |   |   |   |   |   feature10 >= 0.83 : classA (16.6/9.09) [5.91/3.16]
|   |   |   |   |   |   feature7 >= 0.72 : classF (8.87/0.53) [4.75/0.46]
|   |   |   |   feature7 >= 0.75
|   |   |   |   |   feature7 < 0.78 : classA (106.56/55.08) [23.21/22.51]
|   |   |   |   |   feature7 >= 0.78 : classA (3.02/0.64) [3.18/1.54]
|   |   |   prevPredS = classB : classA (0.04/0.01) [0.04/0.01]
|   |   |   prevPredS = classC : classC (10.74/3.49) [9.53/2.71]
|   |   |   prevPredS = classD : classA (0.51/0.12) [1.49/0.13]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.32 : classD (2.87/0.18) [1.01/0.55]
|   |   |   |   feature7 >= 0.32 : classE (3.44/2.04) [2.49/1.97]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.42 : classA (62.54/10.01) [12.93/12.77]
|   |   |   |   feature7 >= 0.42 : classF (19.8/13.55) [24.59/14.96]
|   |   |   prevPredS = classG
|   |   |   |   feature10 < 0.62
|   |   |   |   |   feature10 < 0.45 : classA (5.13/1.23) [1.7/1.26]
|   |   |   |   |   feature10 >= 0.45 : classF (4.93/1.26) [9.65/3.27]
|   |   |   |   feature10 >= 0.62 : classD (5.34/1.85) [1.66/1.66]
|   |   feature10 >= 0.92
|   |   |   feature7 < 0.68 : classA (96.39/57.66) [135.2/44.22]
|   |   |   feature7 >= 0.68 : classF (166.19/98.4) [38.02/3.7]
|   feature6 = classG
|   |   feature10 < 0.98
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature7 < 0.32 : classD (13.91/2.5) [4.44/4.44]
|   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   feature10 < 0.87 : classA (2.62/0.17) [2.31/1.99]
|   |   |   |   |   |   |   feature10 >= 0.87 : classE (4.66/1.56) [4.24/1.14]
|   |   |   |   |   feature7 >= 0.45 : classG (25/2.08) [5.37/5.37]
|   |   |   |   feature7 >= 0.48 : classA (157.81/69.18) [80.57/57.4]
|   |   |   prevPredS = classB : classB (0.08/0.04) [0.04/0.03]
|   |   |   prevPredS = classC : classC (5.6/1.74) [5.05/1.42]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.65 : classD (17.27/1.8) [5.37/5.37]
|   |   |   |   feature7 >= 0.65 : classA (5.66/1.65) [1.09/1.08]
|   |   |   prevPredS = classE : classD (3.18/1.61) [1.66/1.41]
|   |   |   prevPredS = classF : classC (1.37/1.37) [6.72/2.27]
|   |   |   prevPredS = classG : classG (21.09/10.27) [25.99/10.87]
|   |   feature10 >= 0.98
|   |   |   feature7 < 0.65
|   |   |   |   feature7 < 0.32 : classD (3.8/0.25) [0.73/0.73]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   feature5 = classA : classG (2.58/0.31) [1.58/1.44]
|   |   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classC (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classF : classF (1.08/0.18) [0.66/0.45]
|   |   |   |   |   |   feature5 = classG : classG (5.17/0.59) [3.15/2.86]
|   |   |   |   |   feature7 >= 0.62 : classD (3.29/0.21) [0.63/0.63]
|   |   |   feature7 >= 0.65
|   |   |   |   feature7 < 0.72 : classC (38.01/6.09) [7.29/7.29]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature7 < 0.75 : classG (4.29/0.28) [2.83/0.82]
|   |   |   |   |   feature7 >= 0.75 : classA (5.29/0.34) [4.4/1.01]
predS = classB
|   prevPredS = classA : classB (20.7/8.75) [40.54/31.07]
|   prevPredS = classB : classB (833.85/435.91) [369.05/224.37]
|   prevPredS = classC
|   |   feature3 = classA : classB (0/0) [0/0]
|   |   feature3 = classB : classB (0.18/0.01) [0.18/0.04]
|   |   feature3 = classC
|   |   |   feature7 < 0.67 : classC (4.91/0.41) [5.71/3.89]
|   |   |   feature7 >= 0.67 : classB (2.15/0.64) [3.14/1.21]
|   |   feature3 = classD : classD (0/0) [0/0]
|   |   feature3 = classE : classB (6.76/5.26) [5.61/1.51]
|   |   feature3 = classF : classC (0/0) [4.55/0]
|   |   feature3 = classG : classA (0/0) [0/0]
|   prevPredS = classD : classD (12.4/2.38) [3.41/3.39]
|   prevPredS = classE
|   |   feature8 < 0.58
|   |   |   feature7 < 0.38 : classE (16.28/1.04) [3.11/3.11]
|   |   |   feature7 >= 0.38 : classB (2.57/0.29) [4.3/1.11]
|   |   feature8 >= 0.58
|   |   |   feature7 < 0.53 : classA (79/5.04) [15.05/15.05]
|   |   |   feature7 >= 0.53 : classB (11.77/0.75) [11.76/5.22]
|   prevPredS = classF : classC (9.36/3.95) [8.33/6.53]
|   prevPredS = classG : classG (4.91/0.94) [5.31/1.34]
predS = classC
|   feature7 < 0.28 : classA (816.75/365.48) [212.94/212.06]
|   feature7 >= 0.28
|   |   feature3 = classA : classC (8.87/3.48) [6.6/4.4]
|   |   feature3 = classB
|   |   |   prevPredS = classA : classB (51.45/27.76) [19.43/16.42]
|   |   |   prevPredS = classB
|   |   |   |   feature7 < 0.57 : classE (3.09/1.29) [1.56/0.59]
|   |   |   |   feature7 >= 0.57 : classB (2.07/0.42) [1.83/0.41]
|   |   |   prevPredS = classC
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature10 < 0.73
|   |   |   |   |   |   feature7 < 0.52 : classE (9.7/2.37) [8.6/1.85]
|   |   |   |   |   |   feature7 >= 0.52 : classE (9.87/0.69) [1.9/1.9]
|   |   |   |   |   feature10 >= 0.73 : classD (2.19/0.62) [2.35/0.87]
|   |   |   |   feature7 >= 0.62 : classD (2.55/1.24) [3.59/2.25]
|   |   |   prevPredS = classD : classD (3.64/0.9) [2.87/2.57]
|   |   |   prevPredS = classE : classE (3.31/2.84) [11.94/6.36]
|   |   |   prevPredS = classF : classC (1.53/0.41) [0.86/0.86]
|   |   |   prevPredS = classG : classE (0/0) [0/0]
|   |   feature3 = classC
|   |   |   feature7 < 0.52
|   |   |   |   feature7 < 0.38
|   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   feature11 < 0.98
|   |   |   |   |   |   |   feature10 < 0.9
|   |   |   |   |   |   |   |   feature10 < 0.77 : classC (12.55/3.34) [7.68/5.22]
|   |   |   |   |   |   |   |   feature10 >= 0.77 : classD (28.86/1.83) [11.76/11.76]
|   |   |   |   |   |   |   feature10 >= 0.9 : classC (39.29/10.47) [16.01/16]
|   |   |   |   |   |   feature11 >= 0.98
|   |   |   |   |   |   |   feature10 < 0.78 : classA (11/2.95) [13.09/5.02]
|   |   |   |   |   |   |   feature10 >= 0.78 : classD (6.57/0.62) [2.8/2.8]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   prevPredS = classA : classG (16.4/1.05) [11.44/6.32]
|   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   |   feature2 = classA : classA (3.41/0.22) [2.87/1.27]
|   |   |   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classC (4.32/0.27) [1.67/1.64]
|   |   |   |   |   |   |   feature2 = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classF : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classF : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classG : classG (0/0) [0/0]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   prevPredS = classA : classF (9/3.96) [11.49/3.08]
|   |   |   |   |   |   prevPredS = classB : classC (10.31/0.65) [4.92/4.92]
|   |   |   |   |   |   prevPredS = classC : classC (27.82/1.77) [25.28/14.96]
|   |   |   |   |   |   prevPredS = classD : classC (0/0) [1.8/0]
|   |   |   |   |   |   prevPredS = classE : classD (0/0) [39.41/0]
|   |   |   |   |   |   prevPredS = classF : classC (15.94/1.01) [7.62/7.62]
|   |   |   |   |   |   prevPredS = classG : classC (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature10 < 0.57
|   |   |   |   |   |   |   feature2 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classC (3.36/0.55) [0.69/0.65]
|   |   |   |   |   |   |   feature2 = classD : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classE : classE (38.23/38.23) [47.3/7.73]
|   |   |   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.57
|   |   |   |   |   |   |   feature8 < 0.68 : classD (13.34/0.85) [15.16/3.99]
|   |   |   |   |   |   |   feature8 >= 0.68 : classA (8.37/6.77) [6.54/1.68]
|   |   |   feature7 >= 0.52
|   |   |   |   feature7 < 0.55 : classC (161.05/90.24) [46.25/43.2]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   |   feature10 < 0.82
|   |   |   |   |   |   |   |   |   |   feature7 < 0.6 : classA (3.1/0.2) [0.71/0.71]
|   |   |   |   |   |   |   |   |   |   feature7 >= 0.6 : classD (10.83/3.19) [4.96/4.96]
|   |   |   |   |   |   |   |   |   feature10 >= 0.82 : classD (6.35/2.87) [1.65/1.65]
|   |   |   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   |   |   feature10 < 0.73 : classC (6.46/0.41) [4.25/1.23]
|   |   |   |   |   |   |   |   |   feature10 >= 0.73 : classA (2.9/0.33) [3.27/0.7]
|   |   |   |   |   |   |   feature7 >= 0.75 : classA (27.39/1.75) [20.88/18.02]
|   |   |   |   |   |   feature7 >= 0.82 : classC (24.13/3.47) [11.04/4.59]
|   |   |   |   |   prevPredS = classB : classC (0.42/0.09) [3.98/0.14]
|   |   |   |   |   prevPredS = classC : classC (123.88/27.8) [109.61/57.1]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature10 < 0.45 : classD (24.24/2.8) [8.67/8.67]
|   |   |   |   |   |   feature10 >= 0.45
|   |   |   |   |   |   |   feature7 < 0.7 : classC (7.51/2.53) [5.57/1.43]
|   |   |   |   |   |   |   feature7 >= 0.7 : classC (7.48/0.83) [3.93/3.66]
|   |   |   |   |   prevPredS = classE : classC (19.05/4.27) [6.64/6.47]
|   |   |   |   |   prevPredS = classF : classE (0.52/0.52) [3.47/0.61]
|   |   |   |   |   prevPredS = classG : classC (0/0) [0/0]
|   |   feature3 = classD
|   |   |   feature7 < 0.55 : classD (29.33/16.72) [19.44/14.6]
|   |   |   feature7 >= 0.55
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature10 < 0.38 : classD (3.53/0.3) [1.09/1.09]
|   |   |   |   |   feature10 >= 0.38 : classA (2.94/1.08) [2.87/1.27]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classD (7.04/1.27) [7.62/2.57]
|   |   |   |   prevPredS = classD : classD (4.92/0.49) [2.1/1.53]
|   |   |   |   prevPredS = classE : classD (10.25/2.15) [3.16/3.15]
|   |   |   |   prevPredS = classF : classD (2.8/0.24) [1.12/1.12]
|   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   feature3 = classE : classE (3.55/1.92) [11.63/1.73]
|   |   feature3 = classF
|   |   |   feature5 = classA : classD (0.04/0.04) [0.09/0.02]
|   |   |   feature5 = classB : classC (0/0) [0/0]
|   |   |   feature5 = classC : classC (10.27/3.99) [4.87/4.55]
|   |   |   feature5 = classD : classC (0.05/0.02) [0.02/0.02]
|   |   |   feature5 = classE : classE (0.14/0.12) [1.26/0.12]
|   |   |   feature5 = classF
|   |   |   |   feature7 < 0.58 : classE (2.73/1.82) [2/1.39]
|   |   |   |   feature7 >= 0.58 : classF (6.06/1.13) [4/0.64]
|   |   |   feature5 = classG : classF (0/0) [0/0]
|   |   feature3 = classG
|   |   |   feature7 < 0.6 : classE (2.43/1.75) [2.03/1.19]
|   |   |   feature7 >= 0.6 : classG (4.11/1.25) [7.17/1.45]
predS = classD
|   feature6 = classA
|   |   prevPredS = classA
|   |   |   feature7 < 0.43 : classG (14.01/1.02) [3.55/3.55]
|   |   |   feature7 >= 0.43 : classF (4.52/2.42) [1.71/0.12]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC : classE (0.9/0.67) [0.63/0.33]
|   |   prevPredS = classD : classF (4.66/3.82) [1.55/0.42]
|   |   prevPredS = classE : classG (1.32/0.9) [0.72/0.46]
|   |   prevPredS = classF : classF (0.25/0.03) [0.17/0.03]
|   |   prevPredS = classG : classG (0.32/0.14) [0.17/0.11]
|   feature6 = classB
|   |   prevPredS = classA : classA (0.3/0.13) [0.28/0.28]
|   |   prevPredS = classB : classB (7.9/7.9) [22.18/7.79]
|   |   prevPredS = classC : classE (1.14/0.64) [0.92/0.35]
|   |   prevPredS = classD : classE (5.65/3.06) [1.75/1.53]
|   |   prevPredS = classE : classG (1.01/0.69) [0.56/0.36]
|   |   prevPredS = classF : classF (0.2/0.02) [0.13/0.02]
|   |   prevPredS = classG : classE (3.83/1.26) [1.1/0.93]
|   feature6 = classC
|   |   feature7 < 0.72
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.52 : classF (10.43/6.33) [5.81/2.45]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature10 < 0.33 : classC (6.53/0.51) [1.27/1.27]
|   |   |   |   |   feature10 >= 0.33 : classE (2.58/1.3) [0.9/0.59]
|   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   feature2 = classC
|   |   |   |   prevPredS = classA : classF (2.28/1.74) [1.41/0.82]
|   |   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature8 < 0.76 : classA (18.34/10.28) [14.78/6.72]
|   |   |   |   |   |   feature8 >= 0.76 : classC (4.45/2.5) [3.77/2.63]
|   |   |   |   |   feature7 >= 0.52 : classC (6.11/3.2) [3.92/2.86]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature10 < 0.58
|   |   |   |   |   |   feature7 < 0.42 : classC (9.75/0.62) [4.69/4.68]
|   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   |   feature7 < 0.48 : classF (13.55/5.76) [5.4/0.04]
|   |   |   |   |   |   |   |   feature7 >= 0.48 : classG (3.01/0.2) [0.57/0.57]
|   |   |   |   |   |   |   feature7 >= 0.52 : classC (13.61/4.47) [2.6/2.59]
|   |   |   |   |   feature10 >= 0.58 : classE (9.71/5.52) [3.54/2.86]
|   |   |   |   prevPredS = classE : classG (2.75/0.68) [2.4/0.91]
|   |   |   |   prevPredS = classF : classF (0.34/0.08) [0.43/0.24]
|   |   |   |   prevPredS = classG : classG (0.31/0.08) [0.27/0.1]
|   |   |   feature2 = classD : classD (15.73/10.74) [19.45/13.2]
|   |   |   feature2 = classE
|   |   |   |   feature10 < 0.92
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature7 < 0.45 : classE (2.9/1.94) [4.94/1.73]
|   |   |   |   |   |   feature7 >= 0.45 : classF (12.8/5.64) [5.1/0.13]
|   |   |   |   |   feature7 >= 0.48 : classE (20.84/8.47) [5.83/4.61]
|   |   |   |   feature10 >= 0.92
|   |   |   |   |   feature7 < 0.32 : classA (4.9/0.31) [0.93/0.93]
|   |   |   |   |   feature7 >= 0.32 : classF (5.05/3) [2.44/0.78]
|   |   |   feature2 = classF : classF (18.78/7.07) [11.12/2.3]
|   |   |   feature2 = classG : classG (3.08/1.02) [1.52/1.1]
|   |   feature7 >= 0.72 : classC (145.78/16.24) [34.71/30.57]
|   feature6 = classD
|   |   feature7 < 0.45
|   |   |   feature8 < 0.7
|   |   |   |   prevPredS = classA : classE (38.88/18.85) [14.52/8.7]
|   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   prevPredS = classC : classD (3.42/0.22) [1.16/1.16]
|   |   |   |   prevPredS = classD : classD (12.72/1.46) [18.07/4.98]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.32 : classD (73.01/6.26) [14.71/14.71]
|   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   feature7 < 0.35 : classE (6.8/6.71) [21.29/7.57]
|   |   |   |   |   |   feature7 >= 0.35 : classD (11.85/2.06) [5.94/3.56]
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature2 = classA : classA (4.47/0.5) [5.6/1.63]
|   |   |   |   |   feature2 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classF (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (1.35/0.15) [1.61/0.49]
|   |   |   |   |   feature2 = classE : classD (3.55/0.4) [4.22/1.3]
|   |   |   |   |   feature2 = classF : classF (6.54/0) [5.29/0.98]
|   |   |   |   |   feature2 = classG : classF (0/0) [0/0]
|   |   |   |   prevPredS = classG : classG (3.2/1.22) [2.85/2.1]
|   |   |   feature8 >= 0.7
|   |   |   |   prevPredS = classA : classA (13.87/0.88) [11.25/5.58]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classD (0.45/0.03) [0.16/0.16]
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature11 < 0.95 : classE (2.38/2.38) [9.29/0.88]
|   |   |   |   |   feature11 >= 0.95 : classA (70.35/5.27) [33.92/25.86]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.32 : classA (15.49/0.98) [2.95/2.95]
|   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   feature10 < 0.77 : classG (4.46/0.28) [7.83/3.65]
|   |   |   |   |   |   feature10 >= 0.77 : classE (2.12/0.13) [5.44/0.4]
|   |   |   |   prevPredS = classF : classF (0.56/0) [0.86/0.49]
|   |   |   |   prevPredS = classG : classG (0.5/0.03) [1.54/1.08]
|   |   feature7 >= 0.45
|   |   |   feature7 < 0.48 : classF (275.47/154.46) [134.61/40.86]
|   |   |   feature7 >= 0.48
|   |   |   |   feature7 < 0.72
|   |   |   |   |   prevPredS = classA : classD (9.58/5.07) [6.14/4.51]
|   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   feature7 < 0.68 : classD (16/5.55) [8.8/6.51]
|   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   feature10 < 0.8 : classE (11.22/1.83) [11.52/2.14]
|   |   |   |   |   |   |   feature10 >= 0.8 : classA (10.13/0.64) [1.93/1.93]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature7 < 0.55 : classD (167.51/97.76) [113.87/103.95]
|   |   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   |   |   feature10 < 0.52 : classG (37.96/11.23) [9.41/9.41]
|   |   |   |   |   |   |   |   feature10 >= 0.52 : classD (3.11/0.2) [3.22/0.59]
|   |   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   |   feature10 < 0.98 : classE (18.75/18.75) [36.81/8.26]
|   |   |   |   |   |   |   |   feature10 >= 0.98 : classC (4.27/0.97) [4.31/1.01]
|   |   |   |   |   prevPredS = classE : classD (46.4/10.06) [14.95/9.24]
|   |   |   |   |   prevPredS = classF : classD (3.78/0.7) [1.51/0.72]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (5.02/0.93) [8.22/4.15]
|   |   |   |   |   |   feature2 = classE : classG (0.37/0.03) [2.13/1.24]
|   |   |   |   |   |   feature2 = classF : classF (2.84/0.37) [0.54/0]
|   |   |   |   |   |   feature2 = classG : classG (6.97/3.07) [1.7/1.33]
|   |   |   |   feature7 >= 0.72
|   |   |   |   |   feature10 < 0.65
|   |   |   |   |   |   feature10 < 0.62
|   |   |   |   |   |   |   prevPredS = classA : classD (0.64/0.04) [2.12/1.37]
|   |   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classD (5.2/1.83) [2.52/2.49]
|   |   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   |   feature10 < 0.48
|   |   |   |   |   |   |   |   |   feature10 < 0.45 : classD (3.15/0.2) [1.38/0.6]
|   |   |   |   |   |   |   |   |   feature10 >= 0.45 : classF (4.17/0.4) [3.31/0.18]
|   |   |   |   |   |   |   |   feature10 >= 0.48 : classD (4.51/0.29) [4.07/0.86]
|   |   |   |   |   |   |   prevPredS = classE : classD (1.01/0.06) [0.65/0.19]
|   |   |   |   |   |   |   prevPredS = classF : classD (0.25/0.02) [0.25/0.05]
|   |   |   |   |   |   |   prevPredS = classG : classD (3.59/0.23) [0.71/0.68]
|   |   |   |   |   |   feature10 >= 0.62
|   |   |   |   |   |   |   feature8 < 0.76
|   |   |   |   |   |   |   |   feature8 < 0.7 : classD (2.11/0.13) [0.41/0.4]
|   |   |   |   |   |   |   |   feature8 >= 0.7 : classC (32.03/2.53) [6.29/6.29]
|   |   |   |   |   |   |   feature8 >= 0.76 : classD (4.26/0.27) [2.52/0.81]
|   |   |   |   |   feature10 >= 0.65 : classD (98.96/6.28) [63.26/18.84]
|   feature6 = classE
|   |   feature7 < 0.58
|   |   |   feature7 < 0.32
|   |   |   |   feature10 < 0.65 : classE (20.18/1.41) [4.99/4.99]
|   |   |   |   feature10 >= 0.65
|   |   |   |   |   feature10 < 0.75 : classA (75.68/4.8) [14.41/14.41]
|   |   |   |   |   feature10 >= 0.75
|   |   |   |   |   |   feature10 < 0.92
|   |   |   |   |   |   |   prevPredS = classA : classE (3.05/0.19) [3.44/0.58]
|   |   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classD : classE (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classE : classE (10.31/0.65) [2.72/1.96]
|   |   |   |   |   |   |   prevPredS = classF : classF (5.8/0) [3.82/0]
|   |   |   |   |   |   |   prevPredS = classG : classE (0/0) [0/0]
|   |   |   |   |   |   feature10 >= 0.92 : classA (14.51/0.92) [2.76/2.76]
|   |   |   feature7 >= 0.32
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45 : classE (54.02/37.54) [68/24.38]
|   |   |   |   |   feature7 >= 0.45 : classF (226.95/115.58) [91.79/9.9]
|   |   |   |   feature7 >= 0.48 : classE (192.23/118.59) [87.5/55.7]
|   |   feature7 >= 0.58
|   |   |   feature7 < 0.92
|   |   |   |   feature11 < 0.58 : classD (60.71/11.78) [60.34/14.87]
|   |   |   |   feature11 >= 0.58 : classE (288.2/44.36) [136.1/88.29]
|   |   |   feature7 >= 0.92 : classC (36.77/7.74) [12.25/10.56]
|   feature6 = classF : classF (79.18/51.99) [85.62/52.61]
|   feature6 = classG
|   |   feature7 < 0.32
|   |   |   feature8 < 0.54 : classA (17.29/1.1) [3.51/3.43]
|   |   |   feature8 >= 0.54 : classG (3.31/1.76) [1.95/0.92]
|   |   feature7 >= 0.32
|   |   |   feature2 = classA : classD (5.14/3.06) [14.67/1.95]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classA (0.49/0.25) [0.17/0.17]
|   |   |   feature2 = classD : classD (10.64/7.53) [30.29/4.18]
|   |   |   feature2 = classE
|   |   |   |   feature7 < 0.48 : classF (2.05/1.11) [1.29/0.57]
|   |   |   |   feature7 >= 0.48 : classE (3.85/1.46) [1.05/0.87]
|   |   |   feature2 = classF : classF (0.94/0.32) [0.57/0.12]
|   |   |   feature2 = classG : classG (30.99/8.73) [12/10.13]
predS = classE
|   feature10 < 0.92
|   |   feature2 = classA
|   |   |   feature7 < 0.35
|   |   |   |   feature10 < 0.82 : classE (13.98/3.67) [14.69/12.1]
|   |   |   |   feature10 >= 0.82
|   |   |   |   |   feature10 < 0.85 : classG (10.92/0.7) [10.14/2.09]
|   |   |   |   |   feature10 >= 0.85 : classE (7.5/1.97) [6.96/1.43]
|   |   |   feature7 >= 0.35
|   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   feature3 = classC : classA (0.05/0.02) [0.05/0.02]
|   |   |   |   feature3 = classD
|   |   |   |   |   feature7 < 0.4 : classD (34.88/5.3) [8.79/6.99]
|   |   |   |   |   feature7 >= 0.4
|   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   feature7 < 0.53 : classD (27.93/16.73) [15.96/14.7]
|   |   |   |   |   |   |   feature7 >= 0.53 : classA (2.99/1.32) [12.4/1.08]
|   |   |   |   |   |   feature7 >= 0.72 : classE (4.85/0.31) [1.21/0.97]
|   |   |   |   feature3 = classE
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.45 : classE (49.94/15.42) [26.02/16]
|   |   |   |   |   |   feature7 >= 0.45 : classA (105.59/65.74) [102.87/65.95]
|   |   |   |   |   feature7 >= 0.72
|   |   |   |   |   |   feature10 < 0.42
|   |   |   |   |   |   |   feature7 < 0.78 : classD (54.46/3.46) [10.37/10.37]
|   |   |   |   |   |   |   feature7 >= 0.78 : classE (2.12/0.13) [0.9/0.4]
|   |   |   |   |   |   feature10 >= 0.42 : classE (18.44/1.17) [6.94/4.27]
|   |   |   |   feature3 = classF
|   |   |   |   |   feature7 < 0.45 : classF (3/0.45) [0.87/0.3]
|   |   |   |   |   feature7 >= 0.45 : classA (3.91/2.71) [3.01/1.9]
|   |   |   |   feature3 = classG : classA (65.62/33.7) [35.97/25.11]
|   |   feature2 = classB : classD (0/0) [0/0]
|   |   feature2 = classC
|   |   |   prevPredS = classA : classD (0.43/0.38) [1.22/0.57]
|   |   |   prevPredS = classB : classA (17.88/5.02) [6.04/5.65]
|   |   |   prevPredS = classC : classC (13.31/6.54) [15.55/7.11]
|   |   |   prevPredS = classD : classD (0.15/0.13) [0.39/0.11]
|   |   |   prevPredS = classE : classE (0.49/0.18) [0.22/0.15]
|   |   |   prevPredS = classF : classF (8.37/4.9) [3.27/1.66]
|   |   |   prevPredS = classG : classG (0.13/0.06) [0.04/0.04]
|   |   feature2 = classD : classD (531.96/309.76) [256.7/196.7]
|   |   feature2 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.35 : classA (29.92/4.39) [11.86/11.86]
|   |   |   |   feature7 >= 0.35 : classD (56.9/43.55) [81.06/37.33]
|   |   |   prevPredS = classB
|   |   |   |   feature7 < 0.33 : classD (4.6/1.37) [0.87/0.87]
|   |   |   |   feature7 >= 0.33
|   |   |   |   |   feature7 < 0.48 : classE (60.9/20.61) [20.06/17.65]
|   |   |   |   |   feature7 >= 0.48 : classA (3.07/0.69) [2.08/0.59]
|   |   |   prevPredS = classC
|   |   |   |   feature7 < 0.48 : classE (2.81/1.75) [1.28/1.07]
|   |   |   |   feature7 >= 0.48 : classE (3.23/0.34) [1.06/0.75]
|   |   |   prevPredS = classD
|   |   |   |   feature7 < 0.55 : classA (108.6/79.28) [169.26/97.2]
|   |   |   |   feature7 >= 0.55
|   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   feature10 < 0.45 : classE (4.23/0.27) [13.68/0.8]
|   |   |   |   |   |   feature10 >= 0.45 : classD (85.53/7.12) [26.16/23.6]
|   |   |   |   |   feature7 >= 0.65 : classE (16.11/8.27) [12.65/7.93]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.32 : classG (28.98/9.54) [6.27/6.27]
|   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature6 = classC : classA (0/0) [1.13/0]
|   |   |   |   |   |   feature6 = classD : classD (190.71/108.88) [96.38/80.24]
|   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   feature7 < 0.35 : classA (26.15/3.23) [28.05/5.12]
|   |   |   |   |   |   |   feature7 >= 0.35 : classE (441.83/285.89) [231.13/164.65]
|   |   |   |   |   |   feature6 = classF : classE (1.34/1.08) [2.02/0.49]
|   |   |   |   |   |   feature6 = classG : classE (4.79/3.84) [2.21/1.74]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature3 = classC
|   |   |   |   |   |   feature10 < 0.42 : classA (11.53/0.94) [2.79/2.22]
|   |   |   |   |   |   feature10 >= 0.42 : classD (3.23/1.58) [5.09/1.69]
|   |   |   |   |   feature3 = classD : classD (113.78/40.84) [103.99/40.84]
|   |   |   |   |   feature3 = classE
|   |   |   |   |   |   feature7 < 0.72 : classE (238.43/44.42) [252.61/166.41]
|   |   |   |   |   |   feature7 >= 0.72 : classD (146.94/84.95) [134.04/61.18]
|   |   |   |   |   feature3 = classF
|   |   |   |   |   |   feature10 < 0.48 : classD (2.96/0.52) [2.84/2.84]
|   |   |   |   |   |   feature10 >= 0.48
|   |   |   |   |   |   |   feature9 < 0.5 : classE (16.55/1.94) [9.69/8.37]
|   |   |   |   |   |   |   feature9 >= 0.5 : classF (2.87/0.44) [5.01/1.1]
|   |   |   |   |   feature3 = classG : classE (0.65/0.15) [0.57/0.31]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   feature6 = classD : classE (10.96/1.52) [3.52/2.67]
|   |   |   |   |   feature6 = classE : classE (10.73/2.02) [3.98/3.14]
|   |   |   |   |   feature6 = classF : classF (1.06/0.36) [1.61/0.14]
|   |   |   |   |   feature6 = classG
|   |   |   |   |   |   feature7 < 0.4 : classE (3.45/0.93) [1.9/1.16]
|   |   |   |   |   |   feature7 >= 0.4 : classG (6.05/0.38) [6.82/1.15]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature10 < 0.68
|   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   |   feature8 < 0.42 : classE (50.63/23.26) [18.68/15.7]
|   |   |   |   |   |   |   |   feature8 >= 0.42 : classD (2.49/1.1) [2.34/1.36]
|   |   |   |   |   |   |   feature7 >= 0.48 : classE (4.87/0.4) [1.38/1.02]
|   |   |   |   |   |   feature7 >= 0.68 : classA (2.42/0.47) [2.56/0.61]
|   |   |   |   |   feature10 >= 0.68 : classF (7.15/3.17) [5.05/2.81]
|   |   |   prevPredS = classG
|   |   |   |   feature10 < 0.57
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.43 : classE (2.21/0.57) [4.56/1.45]
|   |   |   |   |   |   feature7 >= 0.43 : classD (11.09/4.8) [4.36/4.36]
|   |   |   |   |   feature7 >= 0.72 : classE (4.24/1.87) [2.34/0.81]
|   |   |   |   feature10 >= 0.57
|   |   |   |   |   feature7 < 0.48 : classG (22.75/12.78) [10.12/10.12]
|   |   |   |   |   feature7 >= 0.48 : classG (11.67/1.74) [2.97/2.97]
|   |   feature2 = classF
|   |   |   feature5 = classA
|   |   |   |   feature7 < 0.48 : classE (6.4/4.31) [3.49/2.71]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   prevPredS = classA : classD (0.01/0.01) [0.51/0.28]
|   |   |   |   |   prevPredS = classB : classA (0.01/0) [0/0]
|   |   |   |   |   prevPredS = classC : classF (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classE (0.03/0) [0.03/0.01]
|   |   |   |   |   prevPredS = classE : classE (3.14/0.32) [4.17/1.5]
|   |   |   |   |   prevPredS = classF : classF (0.9/0.06) [0.59/0.03]
|   |   |   |   |   prevPredS = classG : classF (4.51/0.26) [1.03/0.17]
|   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   feature5 = classC
|   |   |   |   feature7 < 0.6 : classD (4.1/2.97) [2.38/1.96]
|   |   |   |   feature7 >= 0.6 : classA (6.4/0.47) [1.54/1.31]
|   |   |   feature5 = classD : classD (65.28/22.78) [24.39/21.8]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.68 : classE (22.88/16.09) [12.13/10.09]
|   |   |   |   feature7 >= 0.68 : classE (18.21/2.05) [4.59/4.55]
|   |   |   feature5 = classF
|   |   |   |   feature6 = classA : classF (0/0) [0/0]
|   |   |   |   feature6 = classB : classF (0/0) [0/0]
|   |   |   |   feature6 = classC : classF (8.56/3.66) [6/1.56]
|   |   |   |   feature6 = classD : classD (49.05/19.7) [22.2/16.88]
|   |   |   |   feature6 = classE : classF (7.73/4.27) [3.04/1.48]
|   |   |   |   feature6 = classF : classF (21.58/9.23) [18/3.94]
|   |   |   |   feature6 = classG : classF (0/0) [0/0]
|   |   |   feature5 = classG : classG (3.6/1.58) [1.34/1.34]
|   |   feature2 = classG
|   |   |   feature8 < 0.46
|   |   |   |   feature8 < 0.34
|   |   |   |   |   feature7 < 0.45 : classG (18.21/2.58) [7.9/4.35]
|   |   |   |   |   feature7 >= 0.45 : classA (8.94/4.62) [5.79/5.2]
|   |   |   |   feature8 >= 0.34 : classD (116.68/40.16) [48.66/44.02]
|   |   |   feature8 >= 0.46
|   |   |   |   feature7 < 0.38 : classE (5.82/2.32) [3.16/3.04]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature7 < 0.42 : classG (13.96/0.89) [13.88/2.8]
|   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   feature7 < 0.68 : classG (58.44/26.51) [42.05/22.2]
|   |   |   |   |   |   feature7 >= 0.68 : classA (2.03/0.28) [2.31/0.56]
|   feature10 >= 0.92
|   |   feature7 < 0.55
|   |   |   feature7 < 0.45 : classE (96.96/38.38) [43.66/37.57]
|   |   |   feature7 >= 0.45
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature5 = classA : classE (36.77/24.57) [25.19/13.73]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classC (0.18/0.14) [0.09/0.05]
|   |   |   |   |   feature5 = classD : classD (4.99/2.6) [2.31/2.31]
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature7 < 0.48 : classD (133.64/70.52) [66.58/66.58]
|   |   |   |   |   |   feature7 >= 0.48 : classE (2.86/0.18) [0.54/0.54]
|   |   |   |   |   feature5 = classF : classE (2.29/1.53) [1.06/0.85]
|   |   |   |   |   feature5 = classG : classD (0/0) [0/0]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classC (11.57/8.97) [6.98/3.24]
|   |   |   |   prevPredS = classD : classD (4.11/2.15) [1.91/1.9]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.48 : classA (168.05/72.41) [78.82/78.81]
|   |   |   |   |   feature7 >= 0.48 : classE (3.85/0.25) [1.18/0.73]
|   |   |   |   prevPredS = classF : classF (0.79/0.56) [0.4/0.22]
|   |   |   |   prevPredS = classG : classE (5.27/3.58) [4.68/1.97]
|   |   feature7 >= 0.55
|   |   |   feature9 < 0.98
|   |   |   |   feature8 < 0.98
|   |   |   |   |   prevPredS = classA : classD (0.72/0.72) [7.9/0.82]
|   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classD (18.18/1.94) [4.24/4.24]
|   |   |   |   |   prevPredS = classE : classE (21.73/2.31) [21.28/5.07]
|   |   |   |   |   prevPredS = classF : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classG : classE (0.6/0.06) [0.32/0.14]
|   |   |   |   feature8 >= 0.98
|   |   |   |   |   feature11 < 0.82 : classA (57.9/4.79) [14.57/12.08]
|   |   |   |   |   feature11 >= 0.82 : classE (4.19/0.48) [3.44/1.02]
|   |   |   feature9 >= 0.98
|   |   |   |   feature7 < 0.62
|   |   |   |   |   feature8 < 0.86 : classB (338.8/21.79) [65.24/65.24]
|   |   |   |   |   feature8 >= 0.86 : classC (6.69/3.56) [5.42/3.51]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.68 : classE (2.19/0.16) [2.33/0.43]
|   |   |   |   |   |   feature7 >= 0.68 : classA (30.31/13.81) [26.05/9.55]
|   |   |   |   |   feature7 >= 0.72 : classE (6.03/0.44) [3.7/1.18]
predS = classF
|   feature3 = classA : classA (2.99/1.52) [1/0.95]
|   feature3 = classB
|   |   feature7 < 0.48 : classB (12.78/2.07) [6.2/4.6]
|   |   feature7 >= 0.48
|   |   |   feature7 < 0.52 : classD (5.11/0.84) [1.08/1.08]
|   |   |   feature7 >= 0.52 : classG (4.23/1.41) [1.72/1.05]
|   feature3 = classC
|   |   prevPredS = classA : classE (2.09/2.05) [2.09/0.62]
|   |   prevPredS = classB : classE (0.02/0.02) [0.07/0]
|   |   prevPredS = classC : classC (11.63/4.08) [7.75/4.34]
|   |   prevPredS = classD : classC (2.56/1.36) [0.92/0.62]
|   |   prevPredS = classE : classE (0.28/0.12) [0.12/0.11]
|   |   prevPredS = classF : classA (4.42/4.26) [8.35/1.56]
|   |   prevPredS = classG : classF (0.44/0.16) [0.24/0.07]
|   feature3 = classD : classD (201.19/103.94) [113.97/73.68]
|   feature3 = classE : classE (644.99/425.49) [349.04/243.24]
|   feature3 = classF
|   |   feature7 < 0.58
|   |   |   feature7 < 0.48 : classF (220.96/137.12) [187.1/116.78]
|   |   |   feature7 >= 0.48
|   |   |   |   feature7 < 0.52
|   |   |   |   |   feature10 < 0.83 : classF (63.7/24.27) [25.98/4.69]
|   |   |   |   |   feature10 >= 0.83
|   |   |   |   |   |   feature8 < 0.92 : classA (532.82/237.72) [103.08/103.08]
|   |   |   |   |   |   feature8 >= 0.92 : classF (3.58/1.36) [1.88/0.01]
|   |   |   |   feature7 >= 0.52
|   |   |   |   |   feature7 < 0.55 : classG (30.45/9.84) [11.43/9.64]
|   |   |   |   |   feature7 >= 0.55 : classA (61.22/18.59) [20.61/20.61]
|   |   feature7 >= 0.58 : classF (272.42/133.54) [126.83/38.75]
|   feature3 = classG
|   |   feature7 < 0.52 : classG (27.99/17.03) [19.07/11.78]
|   |   feature7 >= 0.52
|   |   |   prevPredS = classA : classF (0.72/0.65) [1.34/0.25]
|   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   prevPredS = classC : classF (0.14/0.07) [0.07/0.04]
|   |   |   prevPredS = classD : classF (0/0) [0.06/0]
|   |   |   prevPredS = classE : classF (0.03/0) [0.04/0]
|   |   |   prevPredS = classF : classG (11.86/1.93) [5.96/2.46]
|   |   |   prevPredS = classG : classG (4.61/2.02) [1.33/0.95]
predS = classG
|   feature3 = classA : classA (9.48/2.87) [5.74/4.85]
|   feature3 = classB : classA (6.25/3.53) [4.72/4.15]
|   feature3 = classC
|   |   prevPredS = classA : classF (0.47/0.4) [0.28/0.13]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC : classC (2.62/0.45) [2.97/1.7]
|   |   prevPredS = classD : classG (0.04/0.01) [0.03/0.01]
|   |   prevPredS = classE : classA (0.29/0.12) [0.19/0.14]
|   |   prevPredS = classF : classF (2.33/0.32) [0.91/0.19]
|   |   prevPredS = classG : classG (0.72/0.28) [0.55/0.35]
|   feature3 = classD
|   |   prevPredS = classA : classD (13.45/11.86) [13.26/7.6]
|   |   prevPredS = classB : classG (0.03/0) [0.03/0.01]
|   |   prevPredS = classC : classG (0/0) [0.01/0]
|   |   prevPredS = classD
|   |   |   feature7 < 0.45 : classG (8.26/1.14) [8.21/2.04]
|   |   |   feature7 >= 0.45
|   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   feature6 = classC : classD (0/0) [0/0]
|   |   |   |   feature6 = classD : classD (11.88/2.03) [4.04/2.88]
|   |   |   |   feature6 = classE : classD (4.47/0.76) [1.13/1.08]
|   |   |   |   feature6 = classF : classD (0/0) [0/0]
|   |   |   |   feature6 = classG : classG (0.39/0.04) [0.42/0.09]
|   |   prevPredS = classE
|   |   |   feature7 < 0.52
|   |   |   |   feature8 < 0.54 : classA (7.96/2.13) [7.07/2.92]
|   |   |   |   feature8 >= 0.54 : classD (5.96/2.79) [2.19/2.19]
|   |   |   feature7 >= 0.52 : classG (9.17/0.58) [3.93/1.75]
|   |   prevPredS = classF : classA (4.25/2.24) [3.41/1.41]
|   |   prevPredS = classG : classD (96.7/42.41) [93.31/39.32]
|   feature3 = classE
|   |   feature2 = classA
|   |   |   feature8 < 0.44 : classG (18.67/2.27) [4.99/4.36]
|   |   |   feature8 >= 0.44
|   |   |   |   feature7 < 0.38 : classE (19.61/2.95) [5.14/4.04]
|   |   |   |   feature7 >= 0.38
|   |   |   |   |   feature10 < 0.98
|   |   |   |   |   |   feature7 < 0.52 : classG (5.1/2.28) [3.35/2.25]
|   |   |   |   |   |   feature7 >= 0.52
|   |   |   |   |   |   |   feature7 < 0.58 : classA (8.06/1.21) [2.53/1.63]
|   |   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   |   feature7 < 0.7 : classG (2.62/0.58) [1.42/1.17]
|   |   |   |   |   |   |   |   feature7 >= 0.7 : classA (10.33/1.42) [12.09/2.24]
|   |   |   |   |   feature10 >= 0.98 : classE (6.39/2.27) [5.17/1.63]
|   |   feature2 = classB : classA (0/0) [0/0]
|   |   feature2 = classC : classC (0/0) [0/0]
|   |   feature2 = classD : classG (12.7/1.97) [7.38/3.32]
|   |   feature2 = classE : classA (102.9/52.84) [101.09/47.95]
|   |   feature2 = classF : classF (1.38/1.17) [1.99/0.79]
|   |   feature2 = classG
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.28 : classA (3.76/0.97) [0.75/0.75]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature7 < 0.48 : classG (15.48/4.18) [9.23/4.65]
|   |   |   |   |   feature7 >= 0.48 : classF (7.9/3.75) [5.07/1.13]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.62 : classD (110.55/9.29) [22.4/22.4]
|   |   |   |   feature7 >= 0.62
|   |   |   |   |   feature5 = classA : classG (0.44/0.05) [0.29/0.13]
|   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classG (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classG (0.12/0.01) [0.55/0.03]
|   |   |   |   |   feature5 = classE : classG (0.46/0.05) [0.46/0.13]
|   |   |   |   |   feature5 = classF : classF (2.61/1.03) [1.4/0.24]
|   |   |   |   |   feature5 = classG : classG (11.96/1.29) [7.41/3.43]
|   feature3 = classF
|   |   feature10 < 0.68
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.65
|   |   |   |   |   feature7 < 0.35 : classF (2.23/1.5) [1.42/0.7]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature7 < 0.48 : classG (2.05/0.13) [1.11/0.43]
|   |   |   |   |   |   feature7 >= 0.48 : classG (2.11/0.74) [1.07/0.85]
|   |   |   |   feature7 >= 0.65 : classA (19.13/2.66) [4.25/4.25]
|   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   feature2 = classD : classG (4.65/0.72) [2.71/1.27]
|   |   |   feature2 = classE : classA (3.77/2.69) [2.78/1.87]
|   |   |   feature2 = classF : classA (13.66/5.93) [19.75/5.56]
|   |   |   feature2 = classG : classG (1.7/0.22) [1.38/0.42]
|   |   feature10 >= 0.68
|   |   |   feature11 < 0.42 : classD (18.83/4.54) [6.03/6.03]
|   |   |   feature11 >= 0.42
|   |   |   |   feature11 < 0.52
|   |   |   |   |   feature7 < 0.45 : classE (27.88/3.72) [13.95/5.89]
|   |   |   |   |   feature7 >= 0.45 : classF (4.05/2.55) [4.1/2.19]
|   |   |   |   feature11 >= 0.52 : classF (14.85/2.06) [9.59/1.29]
|   feature3 = classG
|   |   feature10 < 0.62
|   |   |   feature7 < 0.62
|   |   |   |   feature7 < 0.48
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 < 0.42 : classA (12.59/1.27) [3.66/3.66]
|   |   |   |   |   |   feature7 >= 0.42 : classD (6.12/6.12) [19.86/3.74]
|   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classG (0.48/0.03) [0.13/0.09]
|   |   |   |   |   prevPredS = classD : classG (0.23/0.01) [0.24/0.04]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature10 < 0.48 : classG (5.38/0.34) [1.61/1.02]
|   |   |   |   |   |   feature10 >= 0.48 : classA (24.46/8.28) [18.1/13.18]
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature10 < 0.38 : classG (2.71/0.17) [0.75/0.52]
|   |   |   |   |   |   feature10 >= 0.38 : classF (4.22/1.15) [1.16/0.36]
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature10 < 0.58 : classG (19.21/1.78) [15.79/3.94]
|   |   |   |   |   |   feature10 >= 0.58 : classA (25.74/8.75) [12.76/7.09]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   prevPredS = classA : classE (8.82/4.82) [7.82/3.82]
|   |   |   |   |   prevPredS = classB : classF (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classF (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classG (1.38/0.49) [1.41/0.53]
|   |   |   |   |   prevPredS = classE : classF (3.28/2.12) [1.27/0.02]
|   |   |   |   |   prevPredS = classF : classG (2.28/0.8) [1.14/0.87]
|   |   |   |   |   prevPredS = classG : classG (23.21/8.18) [13.83/8.89]
|   |   |   feature7 >= 0.62
|   |   |   |   feature7 < 0.75
|   |   |   |   |   feature8 < 0.78 : classG (4.89/0.37) [6.73/1.08]
|   |   |   |   |   feature8 >= 0.78
|   |   |   |   |   |   feature9 < 0.93 : classG (2.87/0.3) [2.58/0.58]
|   |   |   |   |   |   feature9 >= 0.93
|   |   |   |   |   |   |   feature7 < 0.65 : classA (278.3/22.94) [56.02/56.02]
|   |   |   |   |   |   |   feature7 >= 0.65
|   |   |   |   |   |   |   |   feature7 < 0.7 : classG (3.61/0.23) [3.27/0.72]
|   |   |   |   |   |   |   |   feature7 >= 0.7 : classA (14.05/1.63) [3.8/3.8]
|   |   |   |   feature7 >= 0.75 : classG (28.97/2.2) [12.7/5.82]
|   |   feature10 >= 0.62
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.55
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature7 < 0.48 : classG (9.35/4.34) [3.91/1.79]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature7 < 0.52 : classF (2.36/0.32) [2.03/0.32]
|   |   |   |   |   |   |   feature7 >= 0.52 : classA (2.12/0.71) [2.12/0.72]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (1.72/0.94) [1.3/0.67]
|   |   |   |   |   feature2 = classE : classG (1.73/0.35) [0.67/0.49]
|   |   |   |   |   feature2 = classF : classF (0/0) [1.55/0]
|   |   |   |   |   feature2 = classG : classG (8.15/1.63) [5.75/2.3]
|   |   |   |   feature7 >= 0.55 : classE (8.8/1.72) [2.89/2.89]
|   |   |   feature7 >= 0.58
|   |   |   |   feature5 = classA : classA (9.79/9.42) [33.78/8.29]
|   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0/0) [0.01/0]
|   |   |   |   feature5 = classD : classG (0.08/0.01) [0.82/0.02]
|   |   |   |   feature5 = classE : classG (1.02/0.09) [0.6/0.24]
|   |   |   |   feature5 = classF : classF (6.61/3.53) [2.86/0.43]
|   |   |   |   feature5 = classG
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature10 < 0.7 : classG (13.94/0.88) [2.76/2.65]
|   |   |   |   |   |   feature10 >= 0.7 : classF (3.86/1.27) [6.61/1.18]
|   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classG (0.1/0.01) [0.19/0.02]
|   |   |   |   |   prevPredS = classE : classG (0/0) [0/0]
|   |   |   |   |   prevPredS = classF : classG (0.04/0) [0.01/0.01]
|   |   |   |   |   prevPredS = classG : classG (76.61/4.86) [47.31/14.59]

Size of the tree : 1011

Weight: 1.08


REPTree
============

predS = classA
|   feature7 < 0.78 : classA (2749.71/2044.16) [1361.62/1015.7]
|   feature7 >= 0.78
|   |   feature9 < 0.35
|   |   |   feature7 < 0.88 : classE (283.84/38.63) [12.19/12.19]
|   |   |   feature7 >= 0.88 : classA (9.46/1.24) [6.18/0.37]
|   |   feature9 >= 0.35
|   |   |   feature5 = classA : classA (151.59/25.26) [93.35/27.99]
|   |   |   feature5 = classB : classA (4.04/0.53) [0.46/0.16]
|   |   |   feature5 = classC : classA (4.65/1.37) [1.46/0.53]
|   |   |   feature5 = classD : classA (19.5/2.58) [10.57/0.77]
|   |   |   feature5 = classE
|   |   |   |   feature10 < 0.72 : classA (27.1/5.79) [24.07/1.06]
|   |   |   |   feature10 >= 0.72
|   |   |   |   |   feature7 < 0.95
|   |   |   |   |   |   feature11 < 0.82 : classA (7.88/0.92) [2.6/0.31]
|   |   |   |   |   |   feature11 >= 0.82
|   |   |   |   |   |   |   feature11 < 0.92 : classE (61.18/8.88) [3.77/3.77]
|   |   |   |   |   |   |   feature11 >= 0.92
|   |   |   |   |   |   |   |   prevPredS = classA : classA (7.53/0.88) [1.59/0.29]
|   |   |   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classD : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classE : classE (4.97/0.59) [4.58/0.2]
|   |   |   |   |   |   |   |   prevPredS = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   |   prevPredS = classG : classE (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.95 : classA (12.56/1.47) [9.44/0.49]
|   |   |   feature5 = classF : classA (18.39/4.78) [8.79/1.61]
|   |   |   feature5 = classG : classA (13.16/5.09) [5.08/1.11]
predS = classB
|   feature10 < 0.85
|   |   prevPredS = classA
|   |   |   feature10 < 0.42
|   |   |   |   feature10 < 0.38 : classB (3.02/0.35) [0.4/0.31]
|   |   |   |   feature10 >= 0.38 : classE (27.24/4.87) [14.79/3.61]
|   |   |   feature10 >= 0.42
|   |   |   |   feature10 < 0.57
|   |   |   |   |   feature10 < 0.5 : classB (2.19/0.26) [0.29/0.22]
|   |   |   |   |   feature10 >= 0.5 : classC (21.61/3.9) [2.95/2.94]
|   |   |   |   feature10 >= 0.57 : classA (28.48/10.95) [3.79/2.01]
|   |   prevPredS = classB
|   |   |   feature7 < 0.28 : classC (63.96/7.49) [2.5/2.5]
|   |   |   feature7 >= 0.28
|   |   |   |   feature5 = classA : classB (0.16/0.02) [0.06/0.03]
|   |   |   |   feature5 = classB : classB (10.79/1.26) [27.11/2]
|   |   |   |   feature5 = classC
|   |   |   |   |   feature7 < 0.87
|   |   |   |   |   |   feature7 < 0.82 : classB (3.21/0.38) [3.25/0.69]
|   |   |   |   |   |   feature7 >= 0.82 : classC (14.64/1.71) [13.5/0.57]
|   |   |   |   |   feature7 >= 0.87 : classB (5.62/0.66) [5.52/3.08]
|   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.4 : classE (7.15/0.84) [6.59/0.28]
|   |   |   |   |   feature7 >= 0.4 : classB (4.31/0.5) [4.28/1.84]
|   |   |   |   feature5 = classF : classB (1.92/0.22) [2.71/0.36]
|   |   |   |   feature5 = classG : classB (0/0) [0/0]
|   |   prevPredS = classC : classB (9.5/6.23) [7.86/4.01]
|   |   prevPredS = classD : classD (0.02/0) [0/0]
|   |   prevPredS = classE : classA (71.01/24.55) [13.23/6.14]
|   |   prevPredS = classF
|   |   |   feature3 = classA : classG (0/0) [0/0]
|   |   |   feature3 = classB : classB (1.08/0.13) [0.14/0.11]
|   |   |   feature3 = classC : classC (4.41/0.79) [1.99/0.78]
|   |   |   feature3 = classD : classD (0/0) [0/0]
|   |   |   feature3 = classE : classD (2.19/0.39) [0.29/0.29]
|   |   |   feature3 = classF : classG (0/0) [0/0]
|   |   |   feature3 = classG : classG (7.69/1.37) [4.17/1.02]
|   |   prevPredS = classG : classC (0/0) [0/0]
|   feature10 >= 0.85 : classA (958.91/335.84) [310.52/147.43]
predS = classC
|   prevPredS = classA
|   |   feature7 < 0.28 : classC (178.94/86.08) [7.01/7]
|   |   feature7 >= 0.28 : classC (196.98/147.04) [197.89/87.18]
|   prevPredS = classB
|   |   feature7 < 0.28
|   |   |   feature7 < 0.25 : classE (2.85/0.33) [0.11/0.11]
|   |   |   feature7 >= 0.25 : classG (115.06/69.19) [50.36/4.5]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.58 : classE (16.07/10.53) [10.98/1.87]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.68 : classD (5.27/1.69) [3.79/0.21]
|   |   |   |   feature7 >= 0.68 : classB (11.79/2) [1.89/1.89]
|   prevPredS = classC
|   |   feature7 < 0.62
|   |   |   feature3 = classA : classC (0/0) [0/0]
|   |   |   feature3 = classB
|   |   |   |   feature7 < 0.28 : classC (15.49/7.95) [0.6/0.6]
|   |   |   |   feature7 >= 0.28 : classE (12.69/2.81) [7.77/1.41]
|   |   |   feature3 = classC
|   |   |   |   feature7 < 0.25
|   |   |   |   |   feature8 < 0.88 : classE (4.27/0.56) [0.17/0.17]
|   |   |   |   |   feature8 >= 0.88 : classE (3.17/0.41) [0.14/0.14]
|   |   |   |   feature7 >= 0.25
|   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   feature7 < 0.28 : classC (164.9/81.4) [6.84/6.43]
|   |   |   |   |   |   feature7 >= 0.28
|   |   |   |   |   |   |   feature7 < 0.33 : classE (3.96/3.96) [11.02/0.16]
|   |   |   |   |   |   |   feature7 >= 0.33
|   |   |   |   |   |   |   |   feature7 < 0.43
|   |   |   |   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   |   |   |   feature8 < 0.58 : classA (3.63/0.42) [1.35/1.35]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.58 : classC (3.13/0.42) [1.18/1.16]
|   |   |   |   |   |   |   |   |   feature7 >= 0.38 : classC (19.96/2.49) [12.74/10.01]
|   |   |   |   |   |   |   |   feature7 >= 0.43
|   |   |   |   |   |   |   |   |   feature8 < 0.68 : classD (6.34/0.74) [10.42/3.88]
|   |   |   |   |   |   |   |   |   feature8 >= 0.68
|   |   |   |   |   |   |   |   |   |   feature10 < 0.97
|   |   |   |   |   |   |   |   |   |   |   feature8 < 0.88 : classA (3.04/0.73) [1.64/0.57]
|   |   |   |   |   |   |   |   |   |   |   feature8 >= 0.88 : classC (7.35/0.86) [5.3/1.38]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.97 : classA (4.92/0.7) [0.97/0.97]
|   |   |   |   |   feature7 >= 0.52 : classC (84.07/31.65) [46.63/43.25]
|   |   |   feature3 = classD : classD (3.89/2.56) [1.05/0.45]
|   |   |   feature3 = classE : classE (182.71/114.8) [26.27/13.05]
|   |   |   feature3 = classF : classC (3.59/1.45) [0.56/0.5]
|   |   |   feature3 = classG : classA (0.2/0.1) [0.03/0.03]
|   |   feature7 >= 0.62
|   |   |   feature7 < 0.85
|   |   |   |   feature7 < 0.75 : classD (29.34/12.83) [48.42/5.52]
|   |   |   |   feature7 >= 0.75 : classB (49.21/9.45) [3.68/3.68]
|   |   |   feature7 >= 0.85 : classC (57.97/8.39) [29.06/3.61]
|   prevPredS = classD
|   |   feature7 < 0.28
|   |   |   feature7 < 0.25
|   |   |   |   feature2 = classA : classE (2.94/0.34) [0.11/0.11]
|   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   feature2 = classC : classE (1.8/0.21) [0.07/0.07]
|   |   |   |   feature2 = classD : classE (2.19/0.26) [0.09/0.09]
|   |   |   |   feature2 = classE : classE (0/0) [0/0]
|   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   feature7 >= 0.25
|   |   |   |   feature3 = classA : classB (0/0) [0/0]
|   |   |   |   feature3 = classB : classB (0/0) [0/0]
|   |   |   |   feature3 = classC : classC (0.06/0.02) [0.02/0]
|   |   |   |   feature3 = classD : classD (14.01/8.86) [0.56/0.55]
|   |   |   |   feature3 = classE : classB (0/0) [0/0]
|   |   |   |   feature3 = classF : classB (249.25/157.63) [9.72/9.72]
|   |   |   |   feature3 = classG : classA (0.09/0.04) [0/0]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.75
|   |   |   |   feature7 < 0.55 : classE (32.69/18.49) [33.87/10.57]
|   |   |   |   feature7 >= 0.55 : classD (16.18/6.98) [10.9/2.16]
|   |   |   feature7 >= 0.75
|   |   |   |   feature7 < 0.85
|   |   |   |   |   feature7 < 0.78 : classB (21.97/2.96) [0.86/0.86]
|   |   |   |   |   feature7 >= 0.78
|   |   |   |   |   |   feature7 < 0.82 : classC (2.55/0.3) [0.1/0.1]
|   |   |   |   |   |   feature7 >= 0.82 : classB (3.44/0.4) [0.89/0.89]
|   |   |   |   feature7 >= 0.85
|   |   |   |   |   feature10 < 0.47 : classD (18.34/2.82) [1.8/1.8]
|   |   |   |   |   feature10 >= 0.47 : classC (2.57/0.45) [0.42/0.25]
|   prevPredS = classE
|   |   feature7 < 0.28 : classC (112.41/57.74) [4.39/4.39]
|   |   feature7 >= 0.28
|   |   |   feature7 < 0.58
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45 : classE (10.94/6.73) [17.39/2.34]
|   |   |   |   |   feature7 >= 0.45 : classD (38.24/4.48) [1.49/1.49]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature2 = classA : classA (0.01/0) [0/0]
|   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (2.65/0.73) [0.22/0.22]
|   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classE (47.42/5.55) [4.07/3.86]
|   |   |   |   |   feature2 = classF : classE (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.75 : classC (21.84/9.31) [7.57/7.39]
|   |   |   |   feature7 >= 0.75
|   |   |   |   |   feature7 < 0.85
|   |   |   |   |   |   feature7 < 0.8 : classB (15.92/2.62) [1/1]
|   |   |   |   |   |   feature7 >= 0.8 : classB (2.41/0.28) [0.09/0.09]
|   |   |   |   |   feature7 >= 0.85 : classD (5.59/0.88) [0.29/0.29]
|   prevPredS = classF
|   |   feature7 < 0.48 : classC (29.29/13.04) [3.78/3.78]
|   |   feature7 >= 0.48
|   |   |   feature7 < 0.58 : classE (4.6/0.84) [0.56/0.56]
|   |   |   feature7 >= 0.58 : classD (8.29/5.23) [2.51/1.51]
|   prevPredS = classG
|   |   feature7 < 0.25 : classG (30.42/4.75) [1.19/1.19]
|   |   feature7 >= 0.25 : classC (40.84/24.74) [8.04/7.97]
predS = classD
|   feature3 = classA
|   |   prevPredS = classA : classG (16.02/3.23) [2.2/2.2]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC : classE (0.95/0.74) [0.28/0.14]
|   |   prevPredS = classD : classG (2.72/1.8) [1.22/1.05]
|   |   prevPredS = classE : classG (0.93/0.54) [0.54/0.39]
|   |   prevPredS = classF : classF (0.18/0.05) [0.08/0.01]
|   |   prevPredS = classG : classG (0.27/0.1) [0.1/0.05]
|   feature3 = classB
|   |   feature7 < 0.27 : classA (23.96/12.78) [12.12/0.93]
|   |   feature7 >= 0.27
|   |   |   feature7 < 0.42 : classE (5.82/2.15) [2.65/1.48]
|   |   |   feature7 >= 0.42 : classG (27.43/11.96) [8.77/8.26]
|   feature3 = classC
|   |   feature7 < 0.95
|   |   |   prevPredS = classA : classA (8.61/8.57) [7.75/2.4]
|   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   prevPredS = classC
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.43 : classE (2.14/0.6) [1.65/0.11]
|   |   |   |   |   feature7 >= 0.43
|   |   |   |   |   |   feature8 < 0.88 : classG (30.7/14.25) [12.01/12.01]
|   |   |   |   |   |   feature8 >= 0.88 : classG (4.16/1.93) [1.28/1.28]
|   |   |   |   feature7 >= 0.48
|   |   |   |   |   feature7 < 0.55 : classC (27.67/13.38) [2.73/1.08]
|   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   feature10 < 0.53 : classE (5.32/2.44) [2.63/0.67]
|   |   |   |   |   |   feature10 >= 0.53 : classC (5.81/3.44) [1.41/0.38]
|   |   |   prevPredS = classD
|   |   |   |   feature2 = classA : classA (0.01/0.01) [0.01/0]
|   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   feature2 = classC : classG (44.02/26.76) [8.48/7.41]
|   |   |   |   feature2 = classD
|   |   |   |   |   feature7 < 0.58 : classG (24.6/12.94) [5.15/4.43]
|   |   |   |   |   feature7 >= 0.58 : classC (5.15/4.91) [9.49/1.83]
|   |   |   |   feature2 = classE : classG (22.96/13.96) [4.16/3.6]
|   |   |   |   feature2 = classF : classD (0.74/0.49) [0.58/0.13]
|   |   |   |   feature2 = classG : classG (2.47/0.7) [0.43/0.37]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.32 : classA (3.82/0.79) [0.32/0.32]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.45 : classG (4.02/1.83) [3.68/1.5]
|   |   |   |   |   feature7 >= 0.45 : classF (10.11/7.72) [8.89/3]
|   |   |   prevPredS = classF : classF (5.11/2.04) [2.21/0.51]
|   |   |   prevPredS = classG : classG (5.13/1.79) [1.71/0.96]
|   |   feature7 >= 0.95 : classC (92.99/12.69) [4.66/3.9]
|   feature3 = classD
|   |   feature7 < 0.45
|   |   |   feature8 < 0.66
|   |   |   |   feature7 < 0.32 : classD (69.56/10.22) [3.26/3.26]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   prevPredS = classA : classE (12.99/1.91) [11.58/0.51]
|   |   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classE (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classD (0.51/0.23) [0.63/0.19]
|   |   |   |   |   |   prevPredS = classE : classG (8.77/4.04) [8.03/3.3]
|   |   |   |   |   |   prevPredS = classF : classE (4.42/2.93) [1.66/0.17]
|   |   |   |   |   |   prevPredS = classG : classG (1.08/0.49) [0.94/0.41]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   prevPredS = classA : classD (10.98/1.84) [0.43/0.43]
|   |   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classD (2.49/0.29) [0.1/0.1]
|   |   |   |   |   |   prevPredS = classD : classD (12.74/4.09) [2.12/0.5]
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature8 < 0.62 : classD (3.12/0.36) [1.2/0.12]
|   |   |   |   |   |   |   feature8 >= 0.62 : classE (2.94/0.34) [3.24/0.64]
|   |   |   |   |   |   prevPredS = classF : classA (3.68/1.02) [4.8/2.14]
|   |   |   |   |   |   prevPredS = classG : classD (3.42/0.4) [2.09/1.09]
|   |   |   feature8 >= 0.66
|   |   |   |   prevPredS = classA : classA (11.83/3.14) [15.64/1.27]
|   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   prevPredS = classC : classD (0.29/0.05) [0.03/0.03]
|   |   |   |   prevPredS = classD : classA (29.59/14.57) [40.02/6.1]
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 < 0.32 : classA (11.06/1.29) [0.43/0.43]
|   |   |   |   |   feature7 >= 0.32 : classD (5.13/4.01) [7.4/3.61]
|   |   |   |   prevPredS = classF : classF (6.14/1.23) [2.76/0.42]
|   |   |   |   prevPredS = classG : classD (2.52/0.72) [0.53/0.53]
|   |   feature7 >= 0.45 : classD (781.35/509.89) [467.52/283.82]
|   feature3 = classE
|   |   feature7 < 0.52
|   |   |   feature7 < 0.42
|   |   |   |   feature7 < 0.32 : classA (67.03/35.1) [28.44/4.72]
|   |   |   |   feature7 >= 0.32
|   |   |   |   |   prevPredS = classA : classA (0.89/0.89) [9.23/0.34]
|   |   |   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classE (3.61/1.02) [2.73/0.14]
|   |   |   |   |   prevPredS = classD : classE (2.48/0.91) [2.71/0.1]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature10 < 0.68 : classG (11.85/5.94) [10.86/4.94]
|   |   |   |   |   |   feature10 >= 0.68 : classE (8.84/1.03) [5.32/0.34]
|   |   |   |   |   prevPredS = classF : classE (4.83/1.45) [2.23/0.56]
|   |   |   |   |   prevPredS = classG : classG (1.33/0.61) [1.83/0.51]
|   |   |   feature7 >= 0.42
|   |   |   |   feature7 < 0.45
|   |   |   |   |   prevPredS = classA : classD (13.25/2.06) [0.52/0.52]
|   |   |   |   |   prevPredS = classB : classD (0/0) [0/0]
|   |   |   |   |   prevPredS = classC : classC (0/0) [0/0]
|   |   |   |   |   prevPredS = classD : classE (3.59/2.81) [6.42/0.69]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature10 < 0.43 : classD (13.62/1.97) [1/0.53]
|   |   |   |   |   |   feature10 >= 0.43 : classE (4.49/0.53) [2.41/0.18]
|   |   |   |   |   prevPredS = classF : classE (1.1/0.28) [0.04/0.04]
|   |   |   |   |   prevPredS = classG : classD (0/0) [0/0]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature8 < 0.38
|   |   |   |   |   |   |   feature7 < 0.48 : classG (19.86/10.55) [3.84/3.84]
|   |   |   |   |   |   |   feature7 >= 0.48 : classG (5.27/0.69) [0.25/0.25]
|   |   |   |   |   |   feature8 >= 0.38 : classG (54.13/24.22) [11.03/11.03]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classD (0.01/0.01) [0.35/0]
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   prevPredS = classA : classG (7.98/3.57) [1.55/1.55]
|   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature7 < 0.48 : classG (93.41/48.9) [18.31/18.31]
|   |   |   |   |   |   |   feature7 >= 0.48 : classG (26.75/4.85) [3.25/3.25]
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature7 < 0.48 : classD (3.31/3.3) [7.19/0.9]
|   |   |   |   |   |   |   feature7 >= 0.48 : classD (3.01/1.5) [0.94/0.12]
|   |   |   |   |   |   prevPredS = classF : classD (0/0) [1.12/0]
|   |   |   |   |   |   prevPredS = classG : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   prevPredS = classA : classE (10.04/10.04) [37.3/1.95]
|   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classC : classG (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD : classG (131.48/58.82) [63.15/63.15]
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature10 < 0.45
|   |   |   |   |   |   |   |   feature7 < 0.48 : classG (3.94/1.15) [1.07/1.07]
|   |   |   |   |   |   |   |   feature7 >= 0.48 : classD (3.59/1.96) [1.77/0.14]
|   |   |   |   |   |   |   feature10 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.48 : classG (7.6/3.64) [1.85/1.85]
|   |   |   |   |   |   |   |   feature7 >= 0.48 : classG (3.09/1.14) [0.66/0.66]
|   |   |   |   |   |   prevPredS = classF : classG (6.67/2.98) [1.07/1.07]
|   |   |   |   |   |   prevPredS = classG : classG (2.77/1.24) [0.45/0.45]
|   |   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classG (0/0) [0/0]
|   |   feature7 >= 0.52
|   |   |   prevPredS = classA
|   |   |   |   feature10 < 0.95 : classD (13.65/5.96) [9.09/6.04]
|   |   |   |   feature10 >= 0.95 : classE (8.99/1.22) [7.06/0.35]
|   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   prevPredS = classC
|   |   |   |   feature10 < 0.78
|   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   feature7 < 0.58 : classD (2.65/0.31) [0.1/0.1]
|   |   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   |   feature5 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature5 = classC : classE (0.87/0.44) [0.5/0.07]
|   |   |   |   |   |   |   feature5 = classD : classE (6.46/0.76) [3.7/0.51]
|   |   |   |   |   |   |   feature5 = classE : classE (3.43/0.41) [3.29/0.27]
|   |   |   |   |   |   |   feature5 = classF : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   |   |   feature7 >= 0.72 : classC (3.07/1.37) [0.38/0.38]
|   |   |   |   feature10 >= 0.78
|   |   |   |   |   feature7 < 0.68 : classC (2.63/0.44) [1.2/0.11]
|   |   |   |   |   feature7 >= 0.68 : classA (6.11/0.74) [0.24/0.24]
|   |   |   prevPredS = classD
|   |   |   |   feature10 < 0.48 : classD (41.57/7.12) [44.25/3.22]
|   |   |   |   feature10 >= 0.48 : classE (108.83/58.04) [198.16/54.99]
|   |   |   prevPredS = classE : classD (93.53/31.47) [49.21/20.96]
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA : classE (6.24/0.84) [0.46/0.46]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classE (0/0) [0/0]
|   |   |   |   feature5 = classD : classD (0/0) [0.01/0]
|   |   |   |   feature5 = classE : classD (1.48/0.17) [1.08/1.03]
|   |   |   |   feature5 = classF : classF (3.07/0.06) [1.55/0.11]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   prevPredS = classG : classG (5.22/2.01) [1.54/0.84]
|   feature3 = classF
|   |   prevPredS = classA
|   |   |   feature10 < 0.85 : classF (9.09/4.1) [4.14/1.24]
|   |   |   feature10 >= 0.85 : classD (35.65/15.3) [5.04/5.04]
|   |   prevPredS = classB : classA (0/0) [0/0]
|   |   prevPredS = classC
|   |   |   feature7 < 0.53 : classF (2.3/1.51) [0.76/0.07]
|   |   |   feature7 >= 0.53 : classE (3/2) [1.02/0.34]
|   |   prevPredS = classD
|   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classD (0/0) [0.04/0]
|   |   |   feature2 = classD : classD (5.91/3.16) [4.2/3.45]
|   |   |   feature2 = classE : classE (5.73/3.11) [0.91/0.82]
|   |   |   feature2 = classF : classD (18.24/9.76) [3.42/2.6]
|   |   |   feature2 = classG : classG (0.62/0.16) [0.09/0.07]
|   |   prevPredS = classE : classD (5.17/4.83) [8.07/2.76]
|   |   prevPredS = classF : classA (18.61/18.61) [60.72/4.26]
|   |   prevPredS = classG : classG (1.33/0.49) [0.49/0.23]
|   feature3 = classG
|   |   prevPredS = classA : classD (23.25/11.37) [12.86/4.1]
|   |   prevPredS = classB : classG (0/0) [0/0]
|   |   prevPredS = classC : classE (4.49/3.58) [1.26/0.62]
|   |   prevPredS = classD
|   |   |   feature7 < 0.45 : classD (3.92/0.98) [0.54/0.42]
|   |   |   feature7 >= 0.45
|   |   |   |   feature7 < 0.58 : classG (12.7/7.07) [2.63/1.92]
|   |   |   |   feature7 >= 0.58 : classD (2.59/0.53) [2.94/2.45]
|   |   prevPredS = classE : classG (3.97/2.31) [2.3/1.65]
|   |   prevPredS = classF : classF (1.53/0.85) [0.93/0.27]
|   |   prevPredS = classG : classG (36.97/17.78) [5.85/4.24]
predS = classE
|   feature7 < 0.52
|   |   feature7 < 0.32
|   |   |   prevPredS = classA
|   |   |   |   feature7 < 0.25 : classE (5.63/0.89) [0.22/0.22]
|   |   |   |   feature7 >= 0.25
|   |   |   |   |   feature10 < 0.82
|   |   |   |   |   |   feature10 < 0.63 : classG (11.4/4.26) [0.45/0.45]
|   |   |   |   |   |   feature10 >= 0.63 : classG (19.76/7.39) [1.07/1.07]
|   |   |   |   |   feature10 >= 0.82 : classG (41.99/4.93) [1.65/1.65]
|   |   |   prevPredS = classB : classG (7.15/2.99) [0.28/0.28]
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA : classG (0/0) [0/0]
|   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   feature5 = classC : classG (2.01/0.84) [0.19/0.19]
|   |   |   |   feature5 = classD : classG (0/0) [0/0]
|   |   |   |   feature5 = classE : classC (6.33/4.42) [2.16/0.25]
|   |   |   |   feature5 = classF : classG (0/0) [0/0]
|   |   |   |   feature5 = classG : classG (0/0) [0/0]
|   |   |   prevPredS = classD : classG (9.22/3.86) [0.36/0.36]
|   |   |   prevPredS = classE
|   |   |   |   feature7 < 0.28 : classE (4.04/0.47) [0.32/0.16]
|   |   |   |   feature7 >= 0.28 : classG (59.26/22.48) [3.72/3.72]
|   |   |   prevPredS = classF
|   |   |   |   feature7 < 0.27 : classC (3.62/0.46) [0.15/0.15]
|   |   |   |   feature7 >= 0.27 : classG (28.11/9.67) [4.18/4.18]
|   |   |   prevPredS = classG : classG (24.01/10.06) [1.62/0.94]
|   |   feature7 >= 0.32
|   |   |   feature5 = classA
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature6 = classC : classA (0.02/0.01) [0.03/0.01]
|   |   |   |   |   feature6 = classD : classD (37.23/10.61) [26.83/4.28]
|   |   |   |   |   feature6 = classE : classA (16.31/16.31) [54.02/20.5]
|   |   |   |   |   feature6 = classF : classF (1.51/0.28) [1.15/0.57]
|   |   |   |   |   feature6 = classG
|   |   |   |   |   |   feature7 < 0.42 : classD (2.91/2.83) [8.17/1.76]
|   |   |   |   |   |   feature7 >= 0.42 : classG (18.76/3.77) [4.6/0.81]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.48 : classA (247.67/149.26) [41.62/41.57]
|   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   feature3 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   feature3 = classD : classD (4.09/1.67) [1.43/0.37]
|   |   |   |   |   |   feature3 = classE : classE (6.58/1.19) [4.49/1.96]
|   |   |   |   |   |   feature3 = classF : classF (0.71/0.18) [0.42/0.22]
|   |   |   |   |   |   feature3 = classG : classA (0.03/0.01) [0.01/0.01]
|   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   feature5 = classC
|   |   |   |   prevPredS = classA : classC (5.04/2.96) [2.65/2.64]
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature7 < 0.43 : classA (8.43/1.73) [1.91/1.91]
|   |   |   |   |   feature7 >= 0.43 : classA (19.92/11.61) [2.92/2.92]
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   feature8 < 0.88 : classA (28.05/13.62) [4.93/4.92]
|   |   |   |   |   |   feature8 >= 0.88 : classC (23.67/14.7) [6.22/4.15]
|   |   |   |   |   feature7 >= 0.48 : classC (4.12/1.12) [1.74/0.26]
|   |   |   |   prevPredS = classD : classD (0.29/0.22) [1.07/0.01]
|   |   |   |   prevPredS = classE : classE (1.46/1.13) [2.96/0.25]
|   |   |   |   prevPredS = classF : classA (0.5/0.35) [0.7/0.08]
|   |   |   |   prevPredS = classG : classA (0/0) [0/0]
|   |   |   feature5 = classD
|   |   |   |   feature10 < 0.38 : classA (188.62/85.34) [36.77/36.77]
|   |   |   |   feature10 >= 0.38
|   |   |   |   |   feature7 < 0.45 : classD (30.94/13.14) [32.36/5.37]
|   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   prevPredS = classA : classC (32.48/20.6) [8.32/8.32]
|   |   |   |   |   |   prevPredS = classB : classE (14.73/9.13) [1.77/1.74]
|   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature7 < 0.48 : classA (30.76/19.75) [4.98/4.98]
|   |   |   |   |   |   |   feature7 >= 0.48 : classE (3.23/0.88) [0.19/0.13]
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature7 < 0.48 : classD (87.04/70.53) [24.6/4.82]
|   |   |   |   |   |   |   feature7 >= 0.48 : classE (2.17/0.84) [1.58/0.92]
|   |   |   |   |   |   prevPredS = classF : classA (111.09/75.1) [13.37/13.37]
|   |   |   |   |   |   prevPredS = classG : classA (0/0) [0/0]
|   |   |   feature5 = classE
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature2 = classA : classE (6.48/0.85) [13.61/2.51]
|   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classA (0/0) [0/0]
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature7 < 0.38 : classD (35.09/35.09) [89.6/11.36]
|   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   prevPredS = classA : classC (3.08/0.36) [0.12/0.12]
|   |   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classD : classD (0.3/0.04) [1/0.01]
|   |   |   |   |   |   |   prevPredS = classE : classA (182.38/21.83) [7.11/7.11]
|   |   |   |   |   |   |   prevPredS = classF : classA (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classG : classD (6.11/0.71) [0.24/0.24]
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   |   |   feature10 < 0.4 : classE (15.25/2.11) [0.88/0.59]
|   |   |   |   |   |   |   |   feature10 >= 0.4
|   |   |   |   |   |   |   |   |   prevPredS = classA : classA (20.33/3.24) [2.12/2.12]
|   |   |   |   |   |   |   |   |   prevPredS = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   prevPredS = classD : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   |   |   |   feature8 < 0.78 : classE (4.72/0.55) [0.18/0.18]
|   |   |   |   |   |   |   |   |   |   feature8 >= 0.78 : classA (17.37/2.03) [16.02/0.68]
|   |   |   |   |   |   |   |   |   prevPredS = classF : classA (0/0) [0/0]
|   |   |   |   |   |   |   |   |   prevPredS = classG : classE (3.45/0.4) [0.13/0.13]
|   |   |   |   |   |   |   feature7 >= 0.35 : classD (44.55/44.31) [77.85/10.79]
|   |   |   |   |   |   feature7 >= 0.38 : classD (88.86/41.56) [74.28/55.28]
|   |   |   |   |   feature2 = classF : classF (2.77/0.57) [2.6/1.24]
|   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   prevPredS = classA : classA (389.08/249.08) [70.39/70.39]
|   |   |   |   |   prevPredS = classB
|   |   |   |   |   |   feature10 < 0.55 : classA (96.25/61.62) [12.45/12.45]
|   |   |   |   |   |   feature10 >= 0.55 : classA (4.33/2.14) [0.56/0.56]
|   |   |   |   |   prevPredS = classC : classA (0/0) [0/0]
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature10 < 0.55 : classE (82.1/54.54) [26.64/13.1]
|   |   |   |   |   |   feature10 >= 0.55 : classA (272.67/174.56) [35.76/35.76]
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 < 0.48
|   |   |   |   |   |   |   feature3 = classA : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   |   feature3 = classD : classA (52.78/32.57) [10.9/10.9]
|   |   |   |   |   |   |   feature3 = classE : classA (675.62/393.14) [119.53/119.53]
|   |   |   |   |   |   |   feature3 = classF : classA (10.54/6.5) [1.65/1.65]
|   |   |   |   |   |   |   feature3 = classG : classA (0/0) [0/0]
|   |   |   |   |   |   feature7 >= 0.48
|   |   |   |   |   |   |   feature2 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature2 = classD : classE (25/2.93) [1.86/0.98]
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature9 < 0.52 : classD (4.13/0.98) [4.28/0.51]
|   |   |   |   |   |   |   |   feature9 >= 0.52 : classE (17.07/2) [6.64/3.21]
|   |   |   |   |   |   |   feature2 = classF : classD (1.4/0.26) [0.67/0.1]
|   |   |   |   |   |   |   feature2 = classG : classE (0/0) [0/0]
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature8 < 0.42
|   |   |   |   |   |   |   feature7 < 0.48 : classA (123.84/78.11) [16.03/16.03]
|   |   |   |   |   |   |   feature7 >= 0.48 : classF (3.26/0.55) [0.4/0.27]
|   |   |   |   |   |   feature8 >= 0.42 : classA (46.28/29.63) [6.43/6.43]
|   |   |   |   |   prevPredS = classG : classA (46.13/29.53) [5.96/5.96]
|   |   |   feature5 = classF
|   |   |   |   feature7 < 0.45
|   |   |   |   |   feature3 = classA : classA (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classA (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classA (15.01/3.73) [4.72/4.72]
|   |   |   |   |   feature3 = classD : classD (5.49/2.58) [1.73/0.39]
|   |   |   |   |   feature3 = classE : classE (5.63/2.11) [6.39/2.24]
|   |   |   |   |   feature3 = classF : classF (0.44/0.05) [1/0.12]
|   |   |   |   |   feature3 = classG : classA (0/0) [0/0]
|   |   |   |   feature7 >= 0.45 : classA (68.21/40.52) [12.62/12.62]
|   |   |   feature5 = classG
|   |   |   |   feature7 < 0.48
|   |   |   |   |   feature7 < 0.45
|   |   |   |   |   |   feature7 < 0.38 : classD (15.49/15.49) [39.55/5.01]
|   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   prevPredS = classA : classD (0.75/0.75) [1.36/0.03]
|   |   |   |   |   |   |   prevPredS = classB : classG (0/0) [0/0]
|   |   |   |   |   |   |   prevPredS = classC : classG (0.55/0.06) [0.02/0.02]
|   |   |   |   |   |   |   prevPredS = classD : classD (0.49/0.06) [0.46/0.02]
|   |   |   |   |   |   |   prevPredS = classE : classD (2.46/0.67) [0.1/0.1]
|   |   |   |   |   |   |   prevPredS = classF : classG (1.5/0.18) [1.39/0.06]
|   |   |   |   |   |   |   prevPredS = classG : classG (40.62/4.75) [29.92/20.69]
|   |   |   |   |   feature7 >= 0.45 : classA (412.07/257.15) [80.18/80.18]
|   |   |   |   feature7 >= 0.48 : classG (56.61/10.18) [9.94/7.8]
|   feature7 >= 0.52
|   |   feature10 < 0.92
|   |   |   prevPredS = classA : classE (76.57/40.46) [14.43/8.55]
|   |   |   prevPredS = classB : classE (0/0) [0/0]
|   |   |   prevPredS = classC : classF (5.72/3.93) [2.61/1.26]
|   |   |   prevPredS = classD
|   |   |   |   feature5 = classA : classD (40.76/5.9) [5.95/4.98]
|   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.02/0) [0.02/0]
|   |   |   |   feature5 = classD
|   |   |   |   |   feature8 < 0.62
|   |   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   feature6 = classD : classD (0.51/0.07) [6.64/0.06]
|   |   |   |   |   |   feature6 = classE : classE (83.39/10.05) [11.39/10.18]
|   |   |   |   |   |   feature6 = classF : classE (2.58/0.31) [0.34/0.32]
|   |   |   |   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   |   |   |   feature8 >= 0.62 : classD (13.54/6.12) [6.07/1.64]
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 < 0.65 : classD (39.29/20.55) [27.13/12.39]
|   |   |   |   |   feature7 >= 0.65 : classE (28.17/3.3) [8.8/5.99]
|   |   |   |   feature5 = classF
|   |   |   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classF (0.03/0) [0.03/0]
|   |   |   |   |   feature3 = classD : classD (4.15/0.71) [0.57/0.57]
|   |   |   |   |   feature3 = classE : classF (1.37/0.03) [0.95/0.11]
|   |   |   |   |   feature3 = classF : classD (18.54/3.18) [3.58/3.58]
|   |   |   |   |   feature3 = classG : classD (0/0) [0/0]
|   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   |   |   prevPredS = classE
|   |   |   |   feature2 = classA
|   |   |   |   |   feature10 < 0.53 : classE (88.79/44.61) [26.03/9.91]
|   |   |   |   |   feature10 >= 0.53
|   |   |   |   |   |   feature10 < 0.6 : classA (39.18/5.01) [4.59/1.74]
|   |   |   |   |   |   feature10 >= 0.6 : classE (2.4/0.28) [0.99/0.27]
|   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   feature2 = classC : classC (0.26/0.18) [0.11/0.03]
|   |   |   |   feature2 = classD
|   |   |   |   |   feature7 < 0.77 : classE (16.26/3.36) [16.08/11.42]
|   |   |   |   |   feature7 >= 0.77 : classD (68.5/8.62) [2.96/2.96]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature7 < 0.75
|   |   |   |   |   |   feature7 < 0.68 : classE (163.69/59.93) [80.52/36.41]
|   |   |   |   |   |   feature7 >= 0.68
|   |   |   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   |   |   feature8 < 0.7 : classE (40.78/13.67) [24.72/7.83]
|   |   |   |   |   |   |   |   feature8 >= 0.7
|   |   |   |   |   |   |   |   |   feature8 < 0.74 : classD (263.89/32.36) [53.22/50.18]
|   |   |   |   |   |   |   |   |   feature8 >= 0.74
|   |   |   |   |   |   |   |   |   |   feature10 < 0.5 : classD (44.51/5.35) [8.29/8.29]
|   |   |   |   |   |   |   |   |   |   feature10 >= 0.5 : classE (8.38/0.98) [7.59/1.55]
|   |   |   |   |   |   |   feature8 >= 0.82
|   |   |   |   |   |   |   |   feature10 < 0.42 : classA (7.59/0.89) [1.4/0.3]
|   |   |   |   |   |   |   |   feature10 >= 0.42 : classE (16.37/1.92) [9.81/3.02]
|   |   |   |   |   feature7 >= 0.75
|   |   |   |   |   |   feature8 < 0.46
|   |   |   |   |   |   |   feature7 < 0.83 : classG (22.95/2.97) [22.09/2.11]
|   |   |   |   |   |   |   feature7 >= 0.83 : classE (5.25/0.61) [2.6/0.2]
|   |   |   |   |   |   feature8 >= 0.46
|   |   |   |   |   |   |   feature6 = classA : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classB : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classC : classE (0/0) [0/0]
|   |   |   |   |   |   |   feature6 = classD
|   |   |   |   |   |   |   |   feature7 < 0.85
|   |   |   |   |   |   |   |   |   feature11 < 0.58 : classE (18.88/2.21) [8.26/0.74]
|   |   |   |   |   |   |   |   |   feature11 >= 0.58 : classD (5.25/2.59) [14.78/0.87]
|   |   |   |   |   |   |   |   feature7 >= 0.85
|   |   |   |   |   |   |   |   |   feature10 < 0.73 : classE (2.08/0.24) [3.23/0.61]
|   |   |   |   |   |   |   |   |   feature10 >= 0.73 : classD (29.06/6.1) [3.56/2.23]
|   |   |   |   |   |   |   feature6 = classE
|   |   |   |   |   |   |   |   feature9 < 0.62
|   |   |   |   |   |   |   |   |   feature7 < 0.82
|   |   |   |   |   |   |   |   |   |   feature11 < 0.5 : classG (4.47/1.32) [3.72/0.56]
|   |   |   |   |   |   |   |   |   |   feature11 >= 0.5
|   |   |   |   |   |   |   |   |   |   |   feature10 < 0.5 : classD (7.58/0.89) [6.99/0.3]
|   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   feature10 < 0.85 : classE (4.42/0.52) [1.78/0.17]
|   |   |   |   |   |   |   |   |   |   |   |   feature10 >= 0.85 : classD (8.98/2.21) [2.08/2.08]
|   |   |   |   |   |   |   |   |   feature7 >= 0.82 : classE (26.22/3.07) [33.48/22.94]
|   |   |   |   |   |   |   |   feature9 >= 0.62 : classE (78.48/9.18) [44.58/16.45]
|   |   |   |   |   |   |   feature6 = classF : classE (6.91/0.81) [2.41/0.27]
|   |   |   |   |   |   |   feature6 = classG : classE (0/0) [0/0]
|   |   |   |   feature2 = classF
|   |   |   |   |   feature5 = classA : classE (4.62/2.09) [1.62/0.52]
|   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classF (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classF (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classE (12.43/1.45) [2.74/1.39]
|   |   |   |   |   feature5 = classF : classF (9.98/0.66) [5.14/0.9]
|   |   |   |   |   feature5 = classG : classF (0/0) [0/0]
|   |   |   |   feature2 = classG
|   |   |   |   |   feature7 < 0.55 : classG (4.53/0.53) [0.18/0.18]
|   |   |   |   |   feature7 >= 0.55 : classE (2.45/0.29) [1.51/0.6]
|   |   |   prevPredS = classF : classE (26.43/9.73) [14.08/8.32]
|   |   |   prevPredS = classG
|   |   |   |   feature9 < 0.52 : classG (5.72/0.92) [1.34/0.79]
|   |   |   |   feature9 >= 0.52 : classE (10.29/3.66) [9.03/7.12]
|   |   feature10 >= 0.92
|   |   |   feature7 < 0.62
|   |   |   |   feature8 < 0.86 : classB (241.14/28.95) [14.77/14.77]
|   |   |   |   feature8 >= 0.86
|   |   |   |   |   feature2 = classA : classA (0.03/0) [0.03/0]
|   |   |   |   |   feature2 = classB : classB (3.59/0.43) [3.31/0.15]
|   |   |   |   |   feature2 = classC : classC (1.84/0.22) [0.77/0.08]
|   |   |   |   |   feature2 = classD : classD (0.29/0.03) [0.02/0.01]
|   |   |   |   |   feature2 = classE : classA (5.63/5.63) [37.99/4.1]
|   |   |   |   |   feature2 = classF : classF (0.03/0) [0.02/0]
|   |   |   |   |   feature2 = classG : classG (0.14/0.02) [0.01/0.01]
|   |   |   feature7 >= 0.62 : classE (43.49/5.38) [66.22/38.93]
predS = classF
|   prevPredS = classA
|   |   feature7 < 0.48
|   |   |   feature7 < 0.45
|   |   |   |   feature7 < 0.28 : classG (13.86/2.5) [11.9/0.54]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature10 < 0.65
|   |   |   |   |   |   feature7 < 0.35
|   |   |   |   |   |   |   feature10 < 0.48 : classE (12.64/12.64) [56.06/5.62]
|   |   |   |   |   |   |   feature10 >= 0.48 : classA (5.34/2.79) [0.21/0.21]
|   |   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   |   feature7 < 0.38
|   |   |   |   |   |   |   |   feature10 < 0.43 : classG (14.32/3.03) [6.88/1.24]
|   |   |   |   |   |   |   |   feature10 >= 0.43 : classC (2.58/0.55) [0.22/0.22]
|   |   |   |   |   |   |   feature7 >= 0.38
|   |   |   |   |   |   |   |   feature7 < 0.42 : classA (3.96/0.94) [0.15/0.15]
|   |   |   |   |   |   |   |   feature7 >= 0.42 : classG (3.97/0.94) [0.91/0.16]
|   |   |   |   |   feature10 >= 0.65
|   |   |   |   |   |   feature7 < 0.32 : classE (5.18/1.36) [0.95/0.95]
|   |   |   |   |   |   feature7 >= 0.32
|   |   |   |   |   |   |   feature11 < 0.98
|   |   |   |   |   |   |   |   feature7 < 0.42 : classF (8.47/3.49) [4.44/2.37]
|   |   |   |   |   |   |   |   feature7 >= 0.42 : classF (2.71/0) [2.09/0.49]
|   |   |   |   |   |   |   feature11 >= 0.98 : classA (22.8/3.95) [9.41/3.32]
|   |   |   feature7 >= 0.45
|   |   |   |   feature10 < 0.88
|   |   |   |   |   feature10 < 0.8 : classA (19.39/19.37) [48.77/2.97]
|   |   |   |   |   feature10 >= 0.8 : classE (209.45/209.45) [236.67/8.19]
|   |   |   |   feature10 >= 0.88
|   |   |   |   |   feature8 < 0.9 : classE (4.83/1.78) [6.89/0.8]
|   |   |   |   |   feature8 >= 0.9 : classA (14.67/1.72) [0.6/0.57]
|   |   feature7 >= 0.48
|   |   |   feature7 < 0.52 : classD (107.29/45.52) [6.39/6.39]
|   |   |   feature7 >= 0.52
|   |   |   |   feature10 < 0.85
|   |   |   |   |   feature10 < 0.52
|   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   feature10 < 0.38 : classA (2.21/0.35) [0.68/0.36]
|   |   |   |   |   |   |   feature10 >= 0.38 : classF (2.1/0) [0.76/0.5]
|   |   |   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classA (14.27/1.81) [4.06/2]
|   |   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classE : classF (0.21/0.09) [0.11/0.05]
|   |   |   |   |   |   feature2 = classF
|   |   |   |   |   |   |   feature10 < 0.4 : classA (4.43/0.56) [1.26/0.62]
|   |   |   |   |   |   |   feature10 >= 0.4 : classF (4.55/0) [5.17/1.07]
|   |   |   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   |   |   |   feature10 >= 0.52 : classD (8.98/8.98) [10.34/3.64]
|   |   |   |   feature10 >= 0.85
|   |   |   |   |   feature5 = classA : classF (3.12/0.01) [2.2/0.74]
|   |   |   |   |   feature5 = classB : classE (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classC (0/0) [0/0]
|   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classE (20.6/2.61) [5.86/5.86]
|   |   |   |   |   feature5 = classF : classF (0.57/0) [0.16/0.13]
|   |   |   |   |   feature5 = classG : classE (0/0) [0/0]
|   prevPredS = classB
|   |   feature7 < 0.42 : classB (11.38/3.7) [1.28/1.28]
|   |   feature7 >= 0.42
|   |   |   feature7 < 0.47
|   |   |   |   feature10 < 0.72 : classE (14.64/1.72) [0.57/0.57]
|   |   |   |   feature10 >= 0.72 : classB (2.42/0.28) [0.09/0.09]
|   |   |   feature7 >= 0.47 : classD (4.66/0.67) [1.17/1.17]
|   prevPredS = classC
|   |   feature10 < 0.82
|   |   |   feature7 < 0.55 : classC (4.15/3.94) [2.25/0.54]
|   |   |   feature7 >= 0.55 : classA (6.25/1.23) [4.76/1.72]
|   |   feature10 >= 0.82
|   |   |   feature7 < 0.65 : classC (5.13/2.42) [1.52/0.71]
|   |   |   feature7 >= 0.65 : classC (4.16/0.49) [0.65/0.16]
|   prevPredS = classD
|   |   feature7 < 0.35
|   |   |   feature11 < 0.48
|   |   |   |   feature7 < 0.28 : classD (14.13/2.93) [1.83/1.83]
|   |   |   |   feature7 >= 0.28 : classD (10.02/3.28) [0.65/0.65]
|   |   |   feature11 >= 0.48
|   |   |   |   feature7 < 0.25 : classA (73.33/8.6) [2.87/2.87]
|   |   |   |   feature7 >= 0.25
|   |   |   |   |   feature7 < 0.28 : classG (6.69/0.78) [6.16/0.26]
|   |   |   |   |   feature7 >= 0.28 : classA (31.32/7.13) [4.66/3.48]
|   |   feature7 >= 0.35
|   |   |   feature3 = classA : classD (0/0) [0/0]
|   |   |   feature3 = classB : classD (0/0) [0/0]
|   |   |   feature3 = classC : classC (2.01/1.03) [0.34/0.33]
|   |   |   feature3 = classD : classD (76.29/42.21) [23.5/11.17]
|   |   |   feature3 = classE
|   |   |   |   feature9 < 0.72
|   |   |   |   |   feature10 < 0.45 : classF (4.53/1.03) [1.95/0.22]
|   |   |   |   |   feature10 >= 0.45
|   |   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classD : classD (6.67/1.02) [1.13/0.64]
|   |   |   |   |   |   feature2 = classE : classD (0/0) [0/0]
|   |   |   |   |   |   feature2 = classF : classF (0.85/0.19) [0.08/0.04]
|   |   |   |   |   |   feature2 = classG : classD (17.64/2.7) [1.68/1.68]
|   |   |   |   feature9 >= 0.72
|   |   |   |   |   feature7 < 0.42 : classE (28.96/6.88) [1.47/1.47]
|   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   feature10 < 0.45 : classF (19.11/10.28) [6.42/2.39]
|   |   |   |   |   |   |   feature10 >= 0.45 : classD (6.89/0.92) [2.32/1.18]
|   |   |   |   |   |   feature7 >= 0.72 : classE (12.56/1.78) [0.8/0.8]
|   |   |   feature3 = classF : classF (12.88/3.4) [4.71/0.84]
|   |   |   feature3 = classG : classA (0.05/0.02) [0.01/0.01]
|   prevPredS = classE
|   |   feature7 < 0.38
|   |   |   feature7 < 0.32
|   |   |   |   feature7 < 0.28 : classG (5.93/0.69) [10.37/5.14]
|   |   |   |   feature7 >= 0.28 : classD (3.49/0.83) [0.14/0.14]
|   |   |   feature7 >= 0.32
|   |   |   |   feature2 = classA : classA (0.01/0) [0/0]
|   |   |   |   feature2 = classB : classA (0/0) [0/0]
|   |   |   |   feature2 = classC : classA (4.19/0.58) [0.21/0.21]
|   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   feature2 = classE
|   |   |   |   |   feature10 < 0.6 : classE (5.78/1.42) [0.5/0.28]
|   |   |   |   |   feature10 >= 0.6 : classA (52.24/8.01) [2.99/2.99]
|   |   |   |   feature2 = classF : classF (7.6/0.82) [3.5/0]
|   |   |   |   feature2 = classG : classA (0/0) [0/0]
|   |   feature7 >= 0.38
|   |   |   feature7 < 0.45
|   |   |   |   feature10 < 0.52 : classF (5.62/0.52) [1.5/1.28]
|   |   |   |   feature10 >= 0.52
|   |   |   |   |   feature7 < 0.42 : classE (35.13/6.47) [1.8/1.37]
|   |   |   |   |   feature7 >= 0.42 : classE (7.88/0.92) [0.36/0.31]
|   |   |   feature7 >= 0.45
|   |   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   |   feature6 = classC : classC (0.02/0.01) [0.01/0]
|   |   |   |   feature6 = classD : classD (21.4/3.91) [2.63/2.63]
|   |   |   |   feature6 = classE
|   |   |   |   |   feature2 = classA : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classF (0.44/0.12) [0.31/0.03]
|   |   |   |   |   feature2 = classD : classD (5.27/0.72) [0.55/0.55]
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature7 < 0.52
|   |   |   |   |   |   |   feature9 < 0.65 : classE (12.25/5.64) [0.98/0.49]
|   |   |   |   |   |   |   feature9 >= 0.65
|   |   |   |   |   |   |   |   feature10 < 0.67 : classD (20.82/2.93) [12.02/0.84]
|   |   |   |   |   |   |   |   feature10 >= 0.67 : classE (2.93/1.31) [0.5/0.12]
|   |   |   |   |   |   feature7 >= 0.52 : classE (8.04/2.69) [8.97/4.47]
|   |   |   |   |   feature2 = classF
|   |   |   |   |   |   feature10 < 0.58 : classF (2.2/0.85) [0.43/0.18]
|   |   |   |   |   |   feature10 >= 0.58
|   |   |   |   |   |   |   feature7 < 0.48 : classE (2.86/0.33) [0.95/0.11]
|   |   |   |   |   |   |   feature7 >= 0.48 : classE (26.62/11.1) [2.95/2.95]
|   |   |   |   |   feature2 = classG : classD (0/0) [0/0]
|   |   |   |   feature6 = classF : classF (5.29/1.57) [1.27/0.38]
|   |   |   |   feature6 = classG : classA (0.02/0.01) [0/0]
|   prevPredS = classF
|   |   feature7 < 0.52
|   |   |   feature7 < 0.48
|   |   |   |   feature7 < 0.28
|   |   |   |   |   feature3 = classA : classG (0/0) [0/0]
|   |   |   |   |   feature3 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature3 = classC : classA (0.01/0.01) [4.4/0.01]
|   |   |   |   |   feature3 = classD : classG (39.06/17.5) [23.08/1.52]
|   |   |   |   |   feature3 = classE : classG (0.4/0.18) [0.24/0.02]
|   |   |   |   |   feature3 = classF : classG (4.77/2.14) [3.35/0.71]
|   |   |   |   |   feature3 = classG : classG (0.02/0.01) [0.01/0]
|   |   |   |   feature7 >= 0.28
|   |   |   |   |   feature7 < 0.35 : classA (56.46/8.17) [15.67/2.71]
|   |   |   |   |   feature7 >= 0.35
|   |   |   |   |   |   feature5 = classA : classF (1.15/0.83) [0.88/0]
|   |   |   |   |   |   feature5 = classB : classF (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classA (0.01/0.01) [0.02/0]
|   |   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 < 0.38 : classA (2.24/2.24) [14.03/1.1]
|   |   |   |   |   |   |   feature7 >= 0.38 : classE (10.29/5.01) [6.17/2.14]
|   |   |   |   |   |   feature5 = classF : classF (24.1/7.12) [24.11/15.51]
|   |   |   |   |   |   feature5 = classG : classG (4.23/2.41) [0.51/0.51]
|   |   |   feature7 >= 0.48
|   |   |   |   feature10 < 0.83
|   |   |   |   |   feature5 = classA : classF (1.42/0.97) [0.15/0]
|   |   |   |   |   feature5 = classB : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classC : classF (1.44/0.49) [2.47/0.13]
|   |   |   |   |   feature5 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature5 = classE : classD (2.33/0.32) [64.83/0.11]
|   |   |   |   |   feature5 = classF : classF (11.99/4.04) [4.32/0]
|   |   |   |   |   feature5 = classG : classG (4.88/2.31) [2.8/0.23]
|   |   |   |   feature10 >= 0.83
|   |   |   |   |   feature10 < 0.9 : classA (366.21/168.64) [14.82/14.81]
|   |   |   |   |   feature10 >= 0.9 : classF (6.35/2.14) [0.52/0]
|   |   feature7 >= 0.52
|   |   |   feature2 = classA
|   |   |   |   feature7 < 0.65 : classG (4.67/1.72) [4.11/1.02]
|   |   |   |   feature7 >= 0.65 : classF (2.61/0.03) [1.09/0]
|   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   feature2 = classC : classA (0.09/0.09) [0.27/0.09]
|   |   |   feature2 = classD : classG (1.36/0.81) [0.9/0.32]
|   |   |   feature2 = classE : classG (103.79/61.79) [53.04/8.84]
|   |   |   feature2 = classF
|   |   |   |   feature10 < 0.55
|   |   |   |   |   feature10 < 0.52 : classF (5.38/0) [2.85/0.29]
|   |   |   |   |   feature10 >= 0.52 : classG (62.48/11.61) [59.57/7.38]
|   |   |   |   feature10 >= 0.55 : classF (57.85/0) [29.78/3.17]
|   |   |   feature2 = classG
|   |   |   |   feature8 < 0.42
|   |   |   |   |   feature10 < 0.57 : classG (32.7/3.95) [31.92/2.48]
|   |   |   |   |   feature10 >= 0.57 : classF (38.34/0) [3.71/2.1]
|   |   |   |   feature8 >= 0.42 : classG (255.35/30.69) [131.97/19.31]
|   prevPredS = classG
|   |   feature7 < 0.52
|   |   |   feature6 = classA : classD (0/0) [0/0]
|   |   |   feature6 = classB : classD (0/0) [0/0]
|   |   |   feature6 = classC : classC (0/0) [0/0]
|   |   |   feature6 = classD : classD (17.24/4.17) [1.42/1.42]
|   |   |   feature6 = classE : classE (2.02/0.9) [6.89/0.17]
|   |   |   feature6 = classF : classF (1.99/0.63) [0.57/0.07]
|   |   |   feature6 = classG : classG (7.31/2.98) [2.13/0.33]
|   |   feature7 >= 0.52
|   |   |   feature7 < 0.58 : classF (7.79/1.19) [4.96/2.57]
|   |   |   feature7 >= 0.58
|   |   |   |   feature7 < 0.68 : classG (8.35/1.63) [6.24/0.6]
|   |   |   |   feature7 >= 0.68 : classF (3.54/0.1) [3.55/1]
predS = classG
|   prevPredS = classA
|   |   feature7 < 0.58
|   |   |   feature10 < 0.65
|   |   |   |   feature10 < 0.5 : classA (6.92/1.59) [30.43/22.66]
|   |   |   |   feature10 >= 0.5
|   |   |   |   |   feature10 < 0.55
|   |   |   |   |   |   feature7 < 0.47 : classC (5/1.15) [1.83/1.83]
|   |   |   |   |   |   feature7 >= 0.47 : classC (3.43/0.79) [0.44/0.44]
|   |   |   |   |   feature10 >= 0.55 : classG (3.08/0.5) [6.73/4]
|   |   |   feature10 >= 0.65
|   |   |   |   feature9 < 0.45 : classD (15.85/6.29) [12.7/12.7]
|   |   |   |   feature9 >= 0.45
|   |   |   |   |   feature11 < 0.65 : classE (30.75/7.4) [9.03/6.28]
|   |   |   |   |   feature11 >= 0.65
|   |   |   |   |   |   feature3 = classA : classA (0.56/0.22) [0.46/0.08]
|   |   |   |   |   |   feature3 = classB : classA (0.49/0.19) [0.1/0.07]
|   |   |   |   |   |   feature3 = classC : classA (0.02/0.01) [0.02/0.01]
|   |   |   |   |   |   feature3 = classD : classD (0/0) [0/0]
|   |   |   |   |   |   feature3 = classE : classE (4.22/1.01) [1.93/0.88]
|   |   |   |   |   |   feature3 = classF : classF (8.28/1.95) [5.41/1.13]
|   |   |   |   |   |   feature3 = classG : classG (1.42/0.48) [1.54/0.18]
|   |   feature7 >= 0.58
|   |   |   feature10 < 0.55
|   |   |   |   feature10 < 0.48 : classG (7.62/1.01) [1.02/0.3]
|   |   |   |   feature10 >= 0.48 : classC (9.78/2.05) [0.49/0.49]
|   |   |   feature10 >= 0.55
|   |   |   |   feature11 < 0.85 : classA (46.81/25.83) [14.05/5.18]
|   |   |   |   feature11 >= 0.85 : classG (31.26/8.79) [11.71/3.78]
|   prevPredS = classB : classB (0.15/0.15) [3.01/0.13]
|   prevPredS = classC
|   |   feature6 = classA : classE (0/0) [0/0]
|   |   feature6 = classB : classE (3.07/0.64) [1.09/0.28]
|   |   feature6 = classC : classC (3.44/2.3) [0.8/0.32]
|   |   feature6 = classD : classD (0/0) [0/0]
|   |   feature6 = classE : classG (0.27/0.04) [0.02/0.01]
|   |   feature6 = classF : classE (0/0) [0/0]
|   |   feature6 = classG : classA (0/0) [0/0]
|   prevPredS = classD
|   |   feature5 = classA : classA (0.01/0) [1.72/0]
|   |   feature5 = classB : classD (0/0) [0/0]
|   |   feature5 = classC : classE (1.05/0.24) [0.94/0.13]
|   |   feature5 = classD
|   |   |   feature7 < 0.62
|   |   |   |   feature7 < 0.45 : classD (2.62/0.78) [1.46/0.68]
|   |   |   |   feature7 >= 0.45
|   |   |   |   |   feature7 < 0.48 : classD (5.82/0.68) [0.28/0.27]
|   |   |   |   |   feature7 >= 0.48 : classD (3.44/0.73) [1.47/0.36]
|   |   |   feature7 >= 0.62 : classG (3.65/1.7) [0.52/0.14]
|   |   feature5 = classE : classE (1.05/0.24) [0.93/0.12]
|   |   feature5 = classF : classD (0.97/0.22) [0.11/0.11]
|   |   feature5 = classG : classG (14.9/5.83) [5.11/0.78]
|   prevPredS = classE
|   |   feature10 < 0.58
|   |   |   feature8 < 0.54
|   |   |   |   feature10 < 0.32
|   |   |   |   |   feature7 < 0.4 : classG (2.78/0.33) [1.09/0.11]
|   |   |   |   |   feature7 >= 0.4 : classE (4.28/1.13) [3.7/0.54]
|   |   |   |   feature10 >= 0.32
|   |   |   |   |   feature7 < 0.55 : classA (64.81/11.19) [14.48/5.88]
|   |   |   |   |   feature7 >= 0.55
|   |   |   |   |   |   feature5 = classA : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classB : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classC : classA (0/0) [0/0]
|   |   |   |   |   |   feature5 = classD : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classE : classG (2.43/0.28) [15.86/0.09]
|   |   |   |   |   |   feature5 = classF : classG (0/0) [0/0]
|   |   |   |   |   |   feature5 = classG : classG (3.18/0.37) [0.54/0.12]
|   |   |   feature8 >= 0.54
|   |   |   |   feature7 < 0.32 : classA (5.46/1.36) [0.57/0.57]
|   |   |   |   feature7 >= 0.32 : classE (22.78/6.77) [10.1/5.79]
|   |   feature10 >= 0.58
|   |   |   feature7 < 0.42 : classE (29.87/3.5) [2.47/1.17]
|   |   |   feature7 >= 0.42
|   |   |   |   feature7 < 0.78
|   |   |   |   |   feature2 = classA : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classB : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classC : classC (0/0) [0/0]
|   |   |   |   |   feature2 = classD : classD (0/0) [0/0]
|   |   |   |   |   feature2 = classE : classE (3.91/2.31) [7.46/1.29]
|   |   |   |   |   feature2 = classF : classG (0/0) [0/0]
|   |   |   |   |   feature2 = classG : classG (3.28/0.75) [5.09/0.37]
|   |   |   |   feature7 >= 0.78 : classE (3.07/0.5) [0.17/0.17]
|   prevPredS = classF
|   |   feature3 = classA : classA (0/0) [0/0]
|   |   feature3 = classB : classA (0/0) [0/0]
|   |   feature3 = classC : classF (1.6/0.29) [0.91/0.33]
|   |   feature3 = classD : classA (2.07/0.72) [1.93/0.58]
|   |   feature3 = classE
|   |   |   feature11 < 0.58 : classG (3.51/2.05) [1.77/1.19]
|   |   |   feature11 >= 0.58 : classA (13.95/13.95) [42.15/18.4]
|   |   feature3 = classF : classA (15.91/11.2) [15.96/6.54]
|   |   feature3 = classG : classG (2.14/0.37) [0.94/0.38]
|   prevPredS = classG
|   |   feature8 < 0.58
|   |   |   feature2 = classA : classG (16.49/6.12) [8.57/0.87]
|   |   |   feature2 = classB : classD (0/0) [0/0]
|   |   |   feature2 = classC : classD (0/0) [0/0]
|   |   |   feature2 = classD : classG (28.69/5.44) [10.88/1.71]
|   |   |   feature2 = classE : classG (5.15/1.77) [1.9/0.27]
|   |   |   feature2 = classF : classG (4.66/0.73) [2.91/1.31]
|   |   |   feature2 = classG
|   |   |   |   feature8 < 0.5 : classG (7.78/1.07) [3.44/0.41]
|   |   |   |   feature8 >= 0.5
|   |   |   |   |   feature7 < 0.58
|   |   |   |   |   |   feature7 < 0.47 : classG (4.21/0.49) [3.17/0.16]
|   |   |   |   |   |   feature7 >= 0.47 : classF (3/0.82) [2/0.67]
|   |   |   |   |   feature7 >= 0.58
|   |   |   |   |   |   feature7 < 0.72
|   |   |   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   |   |   feature7 < 0.62 : classD (38.55/4.67) [35.48/1.6]
|   |   |   |   |   |   |   |   feature7 >= 0.62 : classG (3.45/0.4) [0.51/0.13]
|   |   |   |   |   |   |   feature7 >= 0.68 : classD (38.48/4.6) [1.52/1.52]
|   |   |   |   |   |   feature7 >= 0.72 : classG (3.41/0.4) [1.3/0.13]
|   |   feature8 >= 0.58
|   |   |   feature10 < 0.92
|   |   |   |   feature5 = classA
|   |   |   |   |   feature7 < 0.68
|   |   |   |   |   |   feature7 < 0.42 : classA (14.23/3.87) [10.19/10.19]
|   |   |   |   |   |   feature7 >= 0.42
|   |   |   |   |   |   |   feature7 < 0.52 : classG (5.05/1.87) [6.94/1.39]
|   |   |   |   |   |   |   feature7 >= 0.52 : classG (4.08/0.67) [1.87/0.18]
|   |   |   |   |   feature7 >= 0.68 : classA (40.43/5.76) [6.2/4.75]
|   |   |   |   feature5 = classB : classA (0/0) [0/0]
|   |   |   |   feature5 = classC : classC (0.06/0.02) [0.05/0.01]
|   |   |   |   feature5 = classD : classD (2.05/0.77) [1/0.36]
|   |   |   |   feature5 = classE : classE (4.44/1.57) [2.07/0.63]
|   |   |   |   feature5 = classF : classF (4.6/0.66) [3.33/0.36]
|   |   |   |   feature5 = classG
|   |   |   |   |   feature8 < 0.82
|   |   |   |   |   |   feature7 < 0.62
|   |   |   |   |   |   |   feature7 < 0.45 : classD (26.74/26.74) [47.97/14.08]
|   |   |   |   |   |   |   feature7 >= 0.45
|   |   |   |   |   |   |   |   feature7 < 0.52 : classF (12.87/5.68) [7.85/3.56]
|   |   |   |   |   |   |   |   feature7 >= 0.52 : classG (2.2/0.26) [1.14/0.09]
|   |   |   |   |   |   feature7 >= 0.62
|   |   |   |   |   |   |   feature7 < 0.65
|   |   |   |   |   |   |   |   feature8 < 0.78 : classG (2.04/0.24) [1.15/0.08]
|   |   |   |   |   |   |   |   feature8 >= 0.78 : classA (203.35/32.43) [8.27/8.27]
|   |   |   |   |   |   |   feature7 >= 0.65 : classG (36.67/18.08) [12.94/1.43]
|   |   |   |   |   feature8 >= 0.82
|   |   |   |   |   |   feature7 < 0.52 : classG (3.65/1.03) [5.81/0.54]
|   |   |   |   |   |   feature7 >= 0.52 : classG (26.5/3.1) [12.36/1.03]
|   |   |   feature10 >= 0.92
|   |   |   |   feature7 < 0.52 : classG (3.94/1.64) [3.22/0.94]
|   |   |   |   feature7 >= 0.52 : classG (55.12/6.46) [21.67/2.16]

Size of the tree : 1035

Weight: 0.33

Number of performed Iterations: 9


Time taken to build model: 1.43 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances       24696               98.1909 %
Incorrectly Classified Instances       455                1.8091 %
Kappa statistic                          0.9789
Mean absolute error                      0.006 
Root mean squared error                  0.0666
Relative absolute error                  2.4414 %
Root relative squared error             19.0412 %
Total Number of Instances            25151     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0,969    0,005    0,972      0,969    0,971      0,966    0,996     0,989     classA
                 0,994    0,001    0,996      0,994    0,995      0,994    0,999     0,998     classB
                 0,992    0,001    0,992      0,992    0,992      0,991    1,000     0,999     classC
                 0,960    0,003    0,979      0,960    0,970      0,965    0,997     0,991     classD
                 0,977    0,007    0,960      0,977    0,968      0,963    0,998     0,989     classE
                 0,995    0,003    0,985      0,995    0,990      0,989    1,000     0,998     classF
                 0,986    0,002    0,990      0,986    0,988      0,986    0,999     0,998     classG
Weighted Avg.    0,982    0,003    0,982      0,982    0,982      0,979    0,999     0,994     

=== Confusion Matrix ===

    a    b    c    d    e    f    g   <-- classified as
 3481   11   11   18   40   19   13 |    a = classA
   14 3570    3    0    6    0    0 |    b = classB
   14    0 3564    8    6    1    0 |    c = classC
   22    2   10 3451   80   16   12 |    d = classD
   22    3    5   35 3510    9    9 |    e = classE
    9    0    0    4    1 3576    3 |    f = classF
   18    0    0    8   14    9 3544 |    g = classG

`;
