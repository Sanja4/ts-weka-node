export const testAdaBoostM1J48: string = `=== Run information ===

Scheme:       weka.classifiers.meta.AdaBoostM1 -P 100 -S 1 -I 10 -W weka.classifiers.trees.J48 -- -C 0.25 -M 2
Relation:     MetatrueLabelData-weka.filters.supervised.instance.Resample-B1.0-S1-Z100.0-weka.filters.unsupervised.attribute.Remove-R11-weka.filters.unsupervised.attribute.Remove-R11-weka.filters.unsupervised.attribute.Remove-R6
Instances:    25151
Attributes:   10
              feature1
              feature2
              feature3
              feature4
              feature5
              feature6
              feature7
              feature8
              feature9
              trueLabel
Test mode:    10-fold cross-validation

=== Classifier model (full training set) ===

AdaBoostM1: Base classifiers and their weights: 

J48 pruned tree
------------------

feature1 = classA
|   feature6 <= 0.6667
|   |   feature3 = classA
|   |   |   feature8 <= 0.5: classE (3.86/1.82)
|   |   |   feature8 > 0.5: classA (27.04/2.37)
|   |   feature3 = classB: classA (46.35/14.06)
|   |   feature3 = classC
|   |   |   feature9 <= 0.9333: classA (16.64/1.93)
|   |   |   feature9 > 0.9333: classC (9.17/1.37)
|   |   feature3 = classD: classA (79.33/20.56)
|   |   feature3 = classE
|   |   |   feature9 <= 0.8: classA (70.02/17.38)
|   |   |   feature9 > 0.8
|   |   |   |   feature6 <= 0.4333: classE (29.84/1.84)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature4 = classA
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature2 = classA: classF (3.64/0.89)
|   |   |   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   |   |   |   feature2 = classE: classA (2.52/0.14)
|   |   |   |   |   |   |   feature2 = classF: classA (0.0)
|   |   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature8 <= 0.7333: classE (4.56/0.56)
|   |   |   |   |   |   |   feature8 > 0.7333
|   |   |   |   |   |   |   |   feature9 <= 0.9333: classE (4.16/1.16)
|   |   |   |   |   |   |   |   feature9 > 0.9333: classA (6.1/0.03)
|   |   |   |   |   feature4 = classB: classA (0.0)
|   |   |   |   |   feature4 = classC: classC (0.01/0.0)
|   |   |   |   |   feature4 = classD: classA (0.0)
|   |   |   |   |   feature4 = classE: classE (6.64/2.64)
|   |   |   |   |   feature4 = classF: classA (0.0)
|   |   |   |   |   feature4 = classG: classG (1.33/0.06)
|   |   feature3 = classF
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.7333: classA (6.5/1.55)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature6 <= 0.5333: classF (47.8/2.39)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature8 <= 0.7333: classF (4.04/2.04)
|   |   |   |   |   |   |   feature8 > 0.7333: classA (9.42/0.59)
|   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   |   feature5 = classE: classA (0.63/0.04)
|   |   |   |   |   |   feature5 = classF: classF (8.64/0.96)
|   |   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   feature2 = classB: classB (1.56/0.72)
|   |   |   feature2 = classC: classC (1.28/0.41)
|   |   |   feature2 = classD: classA (0.93/0.31)
|   |   |   feature2 = classE: classA (12.3/2.13)
|   |   |   feature2 = classF
|   |   |   |   feature8 <= 0.7333: classA (7.9/0.29)
|   |   |   |   feature8 > 0.7333
|   |   |   |   |   feature4 = classA: classA (4.33/0.47)
|   |   |   |   |   feature4 = classB: classF (0.0)
|   |   |   |   |   feature4 = classC: classA (0.17/0.0)
|   |   |   |   |   feature4 = classD: classA (0.35/0.0)
|   |   |   |   |   feature4 = classE: classA (0.33/0.09)
|   |   |   |   |   feature4 = classF: classF (26.52/3.51)
|   |   |   |   |   feature4 = classG: classF (11.18/1.18)
|   |   |   feature2 = classG: classG (0.31/0.02)
|   |   feature3 = classG
|   |   |   feature4 = classA
|   |   |   |   feature9 <= 0.9667: classA (33.97/4.69)
|   |   |   |   feature9 > 0.9667: classG (4.1/1.08)
|   |   |   feature4 = classB: classB (0.12/0.0)
|   |   |   feature4 = classC: classC (0.62/0.26)
|   |   |   feature4 = classD: classD (2.94/0.93)
|   |   |   feature4 = classE: classA (3.12/1.21)
|   |   |   feature4 = classF: classA (3.06/0.15)
|   |   |   feature4 = classG: classG (12.68/1.9)
|   feature6 > 0.6667
|   |   feature4 = classA: classA (2869.23/35.77)
|   |   feature4 = classB: classA (2.03/0.0)
|   |   feature4 = classC
|   |   |   feature9 <= 0.8: classA (14.32/0.02)
|   |   |   feature9 > 0.8
|   |   |   |   feature7 <= 0.96: classA (6.41/1.32)
|   |   |   |   feature7 > 0.96: classC (12.27/0.15)
|   |   feature4 = classD: classA (39.8/2.31)
|   |   feature4 = classE
|   |   |   feature7 <= 0.88: classA (78.1/1.17)
|   |   |   feature7 > 0.88
|   |   |   |   feature7 <= 0.92: classE (2.03/0.03)
|   |   |   |   feature7 > 0.92: classA (2.1/0.05)
|   |   feature4 = classF: classA (58.16/0.33)
|   |   feature4 = classG
|   |   |   feature2 = classA: classA (30.45/0.01)
|   |   |   feature2 = classB: classA (0.0)
|   |   |   feature2 = classC: classC (0.02/0.0)
|   |   |   feature2 = classD: classA (2.06/0.04)
|   |   |   feature2 = classE: classA (14.16/0.01)
|   |   |   feature2 = classF: classA (6.07/0.0)
|   |   |   feature2 = classG
|   |   |   |   feature7 <= 0.64: classA (11.12/0.01)
|   |   |   |   feature7 > 0.64
|   |   |   |   |   feature9 <= 0.9333: classG (10.11/0.11)
|   |   |   |   |   feature9 > 0.9333: classA (2.02/0.0)
feature1 = classB
|   feature4 = classA
|   |   feature9 <= 0.4
|   |   |   feature9 <= 0.3667: classB (2.02/0.0)
|   |   |   feature9 > 0.3667: classE (3.03/0.03)
|   |   feature9 > 0.4: classB (18.9/3.75)
|   feature4 = classB
|   |   feature6 <= 0.6
|   |   |   feature6 <= 0.3
|   |   |   |   feature8 <= 0.4: classE (4.0/0.0)
|   |   |   |   feature8 > 0.4: classC (2.01/0.0)
|   |   |   feature6 > 0.3
|   |   |   |   feature7 <= 0.96: classB (12.61/1.53)
|   |   |   |   feature7 > 0.96: classA (11.35/4.89)
|   |   feature6 > 0.6: classB (3518.31/8.89)
|   feature4 = classC
|   |   feature2 = classA: classA (0.0/0.0)
|   |   feature2 = classB: classB (5.43/0.0)
|   |   feature2 = classC
|   |   |   feature5 = classA: classC (0.0)
|   |   |   feature5 = classB: classC (0.0)
|   |   |   feature5 = classC: classC (19.84/1.7)
|   |   |   feature5 = classD: classC (0.0)
|   |   |   feature5 = classE: classC (0.0)
|   |   |   feature5 = classF: classE (2.17/0.17)
|   |   |   feature5 = classG: classC (0.0)
|   |   feature2 = classD: classD (0.01/0.0)
|   |   feature2 = classE: classE (1.08/0.08)
|   |   feature2 = classF: classC (0.0)
|   |   feature2 = classG: classC (0.0)
|   feature4 = classD: classD (3.63/0.03)
|   feature4 = classE
|   |   feature6 <= 0.5333
|   |   |   feature7 <= 0.56: classE (4.0/0.0)
|   |   |   feature7 > 0.56: classA (3.11/0.11)
|   |   feature6 > 0.5333: classB (3.13/0.05)
|   feature4 = classF
|   |   feature3 = classA: classB (0.0)
|   |   feature3 = classB: classB (5.04/0.0)
|   |   feature3 = classC: classC (4.18/0.18)
|   |   feature3 = classD: classD (0.01/0.0)
|   |   feature3 = classE: classD (0.29/0.0)
|   |   feature3 = classF: classB (0.0)
|   |   feature3 = classG: classG (3.03/0.03)
|   feature4 = classG: classG (2.02/0.02)
feature1 = classC
|   feature2 = classA
|   |   feature5 = classA
|   |   |   feature8 <= 0.8333: classC (8.6/0.07)
|   |   |   feature8 > 0.8333
|   |   |   |   feature7 <= 0.56: classC (3.71/0.31)
|   |   |   |   feature7 > 0.56: classA (3.34/1.06)
|   |   feature5 = classB: classC (0.0)
|   |   feature5 = classC: classA (3.53/0.24)
|   |   feature5 = classD: classC (0.0)
|   |   feature5 = classE: classC (0.0)
|   |   feature5 = classF: classC (0.0)
|   |   feature5 = classG: classA (0.3/0.02)
|   feature2 = classB
|   |   feature9 <= 0.9333: classC (3.08/0.03)
|   |   feature9 > 0.9333: classB (2.02/0.01)
|   feature2 = classC
|   |   feature6 <= 0.8
|   |   |   feature3 = classA: classC (0.0)
|   |   |   feature3 = classB: classE (9.63/2.33)
|   |   |   feature3 = classC
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature4 = classA
|   |   |   |   |   |   feature9 <= 0.4333: classF (6.39/2.1)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (2.33/1.26)
|   |   |   |   |   |   |   feature6 > 0.3333: classG (4.06/0.63)
|   |   |   |   |   feature4 = classB: classC (0.0)
|   |   |   |   |   feature4 = classC
|   |   |   |   |   |   feature6 <= 0.3333: classE (2.8/1.21)
|   |   |   |   |   |   feature6 > 0.3333: classC (9.28/0.79)
|   |   |   |   |   feature4 = classD: classC (0.0)
|   |   |   |   |   feature4 = classE: classC (1.32/0.35)
|   |   |   |   |   feature4 = classF: classA (0.0/0.0)
|   |   |   |   |   feature4 = classG: classC (0.0)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature4 = classA
|   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   feature5 = classA: classC (3.79/0.08)
|   |   |   |   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   |   |   |   feature5 = classC
|   |   |   |   |   |   |   |   feature7 <= 0.92
|   |   |   |   |   |   |   |   |   feature9 <= 0.8: classA (4.14/0.14)
|   |   |   |   |   |   |   |   |   feature9 > 0.8: classC (3.44/0.08)
|   |   |   |   |   |   |   |   feature7 > 0.92: classC (3.8/0.08)
|   |   |   |   |   |   |   feature5 = classD: classC (0.0)
|   |   |   |   |   |   |   feature5 = classE: classA (4.49/0.93)
|   |   |   |   |   |   |   feature5 = classF: classC (0.0)
|   |   |   |   |   |   |   feature5 = classG: classC (0.0)
|   |   |   |   |   |   feature6 > 0.7333: classA (4.69/0.11)
|   |   |   |   |   feature4 = classB: classC (1.03/0.02)
|   |   |   |   |   feature4 = classC: classC (149.6/14.01)
|   |   |   |   |   feature4 = classD: classC (11.36/0.25)
|   |   |   |   |   feature4 = classE: classC (3.75/0.97)
|   |   |   |   |   feature4 = classF: classC (3.85/0.95)
|   |   |   |   |   feature4 = classG: classC (0.0)
|   |   |   feature3 = classD: classD (4.13/0.98)
|   |   |   feature3 = classE: classC (0.0)
|   |   |   feature3 = classF
|   |   |   |   feature5 = classA: classC (0.0)
|   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   feature5 = classC: classC (10.95/1.34)
|   |   |   |   feature5 = classD: classC (0.07/0.01)
|   |   |   |   feature5 = classE: classA (0.27/0.05)
|   |   |   |   feature5 = classF: classB (2.46/0.45)
|   |   |   |   feature5 = classG: classC (0.0)
|   |   |   feature3 = classG: classC (0.0)
|   |   feature6 > 0.8
|   |   |   feature3 = classA: classC (0.0)
|   |   |   feature3 = classB: classC (0.0)
|   |   |   feature3 = classC: classC (3169.53/2.69)
|   |   |   feature3 = classD: classD (5.4/0.4)
|   |   |   feature3 = classE: classC (0.0)
|   |   |   feature3 = classF: classC (1.08/0.0)
|   |   |   feature3 = classG: classC (0.0)
|   feature2 = classD
|   |   feature3 = classA: classD (0.0)
|   |   feature3 = classB: classD (0.0)
|   |   feature3 = classC: classC (7.12/0.06)
|   |   feature3 = classD
|   |   |   feature5 = classA: classC (3.73/0.03)
|   |   |   feature5 = classB: classD (0.0)
|   |   |   feature5 = classC: classD (2.04/0.03)
|   |   |   feature5 = classD: classD (17.56/0.3)
|   |   |   feature5 = classE: classA (3.06/1.05)
|   |   |   feature5 = classF: classD (0.0)
|   |   |   feature5 = classG: classD (0.0)
|   |   feature3 = classE: classE (2.54/0.54)
|   |   feature3 = classF: classD (0.0)
|   |   feature3 = classG: classD (0.0)
|   feature2 = classE
|   |   feature5 = classA
|   |   |   feature3 = classA: classC (0.0)
|   |   |   feature3 = classB: classC (0.0)
|   |   |   feature3 = classC: classC (3.23/0.03)
|   |   |   feature3 = classD: classD (2.15/0.15)
|   |   |   feature3 = classE: classC (0.0)
|   |   |   feature3 = classF: classC (0.0)
|   |   |   feature3 = classG: classC (0.0)
|   |   feature5 = classB: classE (0.0)
|   |   feature5 = classC: classC (1.08/0.01)
|   |   feature5 = classD: classD (3.23/0.22)
|   |   feature5 = classE: classE (21.81/1.76)
|   |   feature5 = classF
|   |   |   feature9 <= 0.3333: classD (2.01/0.01)
|   |   |   feature9 > 0.3333: classF (5.51/0.5)
|   |   feature5 = classG: classE (0.0)
|   feature2 = classF
|   |   feature5 = classA: classD (3.06/0.05)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classF (0.0)
|   |   feature5 = classD: classF (0.0)
|   |   feature5 = classE: classE (1.02/0.02)
|   |   feature5 = classF: classF (11.21/0.19)
|   |   feature5 = classG: classF (0.0)
|   feature2 = classG: classG (7.13/1.13)
feature1 = classD
|   feature3 = classA: classG (1.1/0.09)
|   feature3 = classB
|   |   feature5 = classA: classD (0.02/0.01)
|   |   feature5 = classB: classA (3.09/1.09)
|   |   feature5 = classC: classD (0.02/0.0)
|   |   feature5 = classD: classD (0.41/0.03)
|   |   feature5 = classE: classE (6.29/0.25)
|   |   feature5 = classF: classF (0.02/0.01)
|   |   feature5 = classG: classG (0.01/0.0)
|   feature3 = classC
|   |   feature5 = classA: classC (3.53/0.53)
|   |   feature5 = classB: classC (0.0)
|   |   feature5 = classC: classC (61.37/4.43)
|   |   feature5 = classD
|   |   |   feature4 = classA: classD (0.03/0.0)
|   |   |   feature4 = classB: classD (0.0)
|   |   |   feature4 = classC: classC (2.07/0.06)
|   |   |   feature4 = classD: classD (10.45/1.13)
|   |   |   feature4 = classE: classD (0.11/0.02)
|   |   |   feature4 = classF: classF (0.01/0.0)
|   |   |   feature4 = classG: classG (0.16/0.03)
|   |   feature5 = classE: classD (0.94/0.38)
|   |   feature5 = classF: classF (6.37/0.2)
|   |   feature5 = classG: classG (0.12/0.0)
|   feature3 = classD
|   |   feature2 = classA
|   |   |   feature9 <= 0.9667
|   |   |   |   feature5 = classA
|   |   |   |   |   feature7 <= 0.64: classD (14.73/0.13)
|   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   feature6 <= 0.3667: classA (2.85/0.01)
|   |   |   |   |   |   feature6 > 0.3667: classD (2.09/0.04)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   feature5 = classD: classA (2.13/0.13)
|   |   |   |   feature5 = classE: classD (0.0)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classD (0.0)
|   |   |   feature9 > 0.9667: classE (2.04/0.04)
|   |   feature2 = classB: classD (0.0)
|   |   feature2 = classC: classD (11.53/1.55)
|   |   feature2 = classD: classD (2875.77/40.1)
|   |   feature2 = classE
|   |   |   feature4 = classA: classD (12.57/0.05)
|   |   |   feature4 = classB: classD (1.01/0.0)
|   |   |   feature4 = classC: classD (2.33/0.17)
|   |   |   feature4 = classD: classD (69.41/1.39)
|   |   |   feature4 = classE
|   |   |   |   feature8 <= 0.6333
|   |   |   |   |   feature9 <= 0.4333: classD (3.23/0.01)
|   |   |   |   |   feature9 > 0.4333: classE (12.67/2.69)
|   |   |   |   feature8 > 0.6333
|   |   |   |   |   feature9 <= 0.5333: classD (15.31/0.05)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature6 <= 0.3333: classE (2.76/0.59)
|   |   |   |   |   |   feature6 > 0.3333: classD (10.84/3.28)
|   |   |   feature4 = classF: classD (10.21/0.15)
|   |   |   feature4 = classG
|   |   |   |   feature7 <= 0.4: classG (4.29/0.88)
|   |   |   |   feature7 > 0.4: classD (2.05/0.03)
|   |   feature2 = classF
|   |   |   feature4 = classA: classD (1.04/0.0)
|   |   |   feature4 = classB: classD (0.0)
|   |   |   feature4 = classC: classD (0.06/0.03)
|   |   |   feature4 = classD: classD (13.83/0.11)
|   |   |   feature4 = classE
|   |   |   |   feature7 <= 0.64: classD (2.03/0.01)
|   |   |   |   feature7 > 0.64: classF (2.54/0.03)
|   |   |   feature4 = classF: classF (2.55/0.01)
|   |   |   feature4 = classG: classF (5.23/1.04)
|   |   feature2 = classG
|   |   |   feature8 <= 0.5333: classG (10.13/0.18)
|   |   |   feature8 > 0.5333: classD (13.04/3.88)
|   feature3 = classE
|   |   feature2 = classA
|   |   |   feature8 <= 0.6: classD (2.16/0.05)
|   |   |   feature8 > 0.6: classE (5.4/0.39)
|   |   feature2 = classB: classE (0.0)
|   |   feature2 = classC: classD (0.29/0.18)
|   |   feature2 = classD
|   |   |   feature8 <= 0.6667
|   |   |   |   feature6 <= 0.4333: classE (5.46/0.43)
|   |   |   |   feature6 > 0.4333: classD (47.04/5.78)
|   |   |   feature8 > 0.6667
|   |   |   |   feature9 <= 0.6667: classE (27.3/3.22)
|   |   |   |   feature9 > 0.6667: classD (13.53/2.31)
|   |   feature2 = classE
|   |   |   feature7 <= 0.48
|   |   |   |   feature8 <= 0.6333: classD (7.88/1.32)
|   |   |   |   feature8 > 0.6333: classE (7.88/0.81)
|   |   |   feature7 > 0.48: classE (250.97/14.5)
|   |   feature2 = classF
|   |   |   feature4 = classA: classD (0.01/0.0)
|   |   |   feature4 = classB: classD (0.0)
|   |   |   feature4 = classC: classD (0.02/0.01)
|   |   |   feature4 = classD: classD (4.42/0.04)
|   |   |   feature4 = classE: classE (1.33/0.33)
|   |   |   feature4 = classF: classF (4.34/1.02)
|   |   |   feature4 = classG: classF (0.52/0.01)
|   |   feature2 = classG: classG (0.83/0.01)
|   feature3 = classF
|   |   feature7 <= 0.52: classD (14.62/1.53)
|   |   feature7 > 0.52
|   |   |   feature2 = classA: classF (8.19/0.15)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classD (0.06/0.04)
|   |   |   feature2 = classD: classD (2.99/0.09)
|   |   |   feature2 = classE: classD (2.52/1.25)
|   |   |   feature2 = classF
|   |   |   |   feature9 <= 0.7333: classF (44.77/1.51)
|   |   |   |   feature9 > 0.7333: classA (2.31/0.3)
|   |   |   feature2 = classG: classG (0.1/0.0)
|   feature3 = classG
|   |   feature5 = classA: classD (2.46/0.35)
|   |   feature5 = classB: classG (0.0)
|   |   feature5 = classC: classD (0.09/0.03)
|   |   feature5 = classD: classD (12.61/0.27)
|   |   feature5 = classE: classD (0.61/0.25)
|   |   feature5 = classF: classF (2.18/0.08)
|   |   feature5 = classG
|   |   |   feature4 = classA: classA (0.39/0.09)
|   |   |   feature4 = classB: classG (0.0)
|   |   |   feature4 = classC: classG (2.11/0.11)
|   |   |   feature4 = classD: classD (2.53/0.12)
|   |   |   feature4 = classE: classD (0.14/0.09)
|   |   |   feature4 = classF: classG (3.06/0.05)
|   |   |   feature4 = classG
|   |   |   |   feature9 <= 0.4333: classA (2.01/0.01)
|   |   |   |   feature9 > 0.4333: classG (27.21/0.12)
feature1 = classE
|   feature3 = classA: classE (0.0)
|   feature3 = classB: classE (1.14/0.03)
|   feature3 = classC
|   |   feature2 = classA: classA (0.87/0.3)
|   |   feature2 = classB: classB (0.02/0.0)
|   |   feature2 = classC: classC (19.86/0.67)
|   |   feature2 = classD: classD (1.41/0.17)
|   |   feature2 = classE
|   |   |   feature5 = classA: classE (0.15/0.0)
|   |   |   feature5 = classB: classA (0.0)
|   |   |   feature5 = classC: classE (0.01/0.0)
|   |   |   feature5 = classD: classD (0.05/0.01)
|   |   |   feature5 = classE
|   |   |   |   feature9 <= 0.4: classA (3.18/0.18)
|   |   |   |   feature9 > 0.4: classE (2.71/0.18)
|   |   |   feature5 = classF: classA (2.12/0.12)
|   |   |   feature5 = classG: classE (0.09/0.04)
|   |   feature2 = classF: classF (11.45/0.29)
|   |   feature2 = classG: classG (0.07/0.03)
|   feature3 = classD
|   |   feature5 = classA: classD (14.34/2.3)
|   |   feature5 = classB: classB (0.13/0.0)
|   |   feature5 = classC: classC (0.59/0.28)
|   |   feature5 = classD
|   |   |   feature8 <= 0.5
|   |   |   |   feature6 <= 0.6333: classD (8.28/0.17)
|   |   |   |   feature6 > 0.6333: classE (3.18/0.06)
|   |   |   feature8 > 0.5: classD (94.95/3.48)
|   |   feature5 = classE
|   |   |   feature8 <= 0.5333: classE (17.55/0.4)
|   |   |   feature8 > 0.5333: classD (71.45/27.44)
|   |   feature5 = classF: classD (9.43/2.4)
|   |   feature5 = classG: classG (9.98/1.51)
|   feature3 = classE
|   |   feature2 = classA: classE (163.59/7.47)
|   |   feature2 = classB: classB (1.76/0.03)
|   |   feature2 = classC: classC (8.54/2.75)
|   |   feature2 = classD
|   |   |   feature4 = classA: classD (1.09/0.07)
|   |   |   feature4 = classB: classA (0.02/0.0)
|   |   |   feature4 = classC: classE (0.0)
|   |   |   feature4 = classD
|   |   |   |   feature8 <= 0.5333: classD (7.91/0.08)
|   |   |   |   feature8 > 0.5333
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature7 <= 0.6: classE (5.13/1.07)
|   |   |   |   |   |   feature7 > 0.6: classD (3.13/1.04)
|   |   |   |   |   feature9 > 0.6333: classD (3.61/0.01)
|   |   |   feature4 = classE
|   |   |   |   feature7 <= 0.64: classE (34.3/4.55)
|   |   |   |   feature7 > 0.64: classD (2.77/0.03)
|   |   |   feature4 = classF: classE (0.17/0.09)
|   |   |   feature4 = classG: classD (1.77/0.04)
|   |   feature2 = classE
|   |   |   feature6 <= 0.5
|   |   |   |   feature4 = classA: classE (9.46/2.68)
|   |   |   |   feature4 = classB: classE (1.7/0.81)
|   |   |   |   feature4 = classC: classE (1.03/0.02)
|   |   |   |   feature4 = classD: classE (21.62/5.3)
|   |   |   |   feature4 = classE
|   |   |   |   |   feature8 <= 0.5
|   |   |   |   |   |   feature7 <= 0.36: classG (2.15/0.15)
|   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   feature6 <= 0.4667: classE (8.71/1.43)
|   |   |   |   |   |   |   feature6 > 0.4667: classD (2.36/0.31)
|   |   |   |   |   feature8 > 0.5: classE (225.85/13.81)
|   |   |   |   feature4 = classF
|   |   |   |   |   feature9 <= 0.6333: classE (19.58/0.37)
|   |   |   |   |   feature9 > 0.6333: classF (10.21/0.32)
|   |   |   |   feature4 = classG
|   |   |   |   |   feature7 <= 0.6: classG (6.53/0.19)
|   |   |   |   |   feature7 > 0.6: classE (8.12/0.14)
|   |   |   feature6 > 0.5: classE (2404.74/25.29)
|   |   feature2 = classF
|   |   |   feature4 = classA: classE (2.09/0.02)
|   |   |   feature4 = classB: classA (0.02/0.0)
|   |   |   feature4 = classC: classE (0.0)
|   |   |   feature4 = classD: classF (7.79/0.2)
|   |   |   feature4 = classE: classE (29.04/0.08)
|   |   |   feature4 = classF
|   |   |   |   feature7 <= 0.52: classE (6.55/1.78)
|   |   |   |   feature7 > 0.52: classF (10.94/0.1)
|   |   |   feature4 = classG: classE (0.9/0.04)
|   |   feature2 = classG
|   |   |   feature6 <= 0.5333: classG (9.63/0.17)
|   |   |   feature6 > 0.5333: classE (8.9/0.02)
|   feature3 = classF
|   |   feature2 = classA
|   |   |   feature8 <= 0.7333: classE (2.28/1.05)
|   |   |   feature8 > 0.7333: classF (9.14/1.12)
|   |   feature2 = classB: classB (0.1/0.0)
|   |   feature2 = classC: classC (1.5/0.17)
|   |   feature2 = classD: classD (1.59/0.61)
|   |   feature2 = classE
|   |   |   feature5 = classA: classE (3.74/0.04)
|   |   |   feature5 = classB: classE (0.0)
|   |   |   feature5 = classC: classE (0.05/0.0)
|   |   |   feature5 = classD: classD (0.2/0.06)
|   |   |   feature5 = classE: classE (21.65/1.76)
|   |   |   feature5 = classF: classF (7.45/1.44)
|   |   |   feature5 = classG: classE (0.36/0.15)
|   |   feature2 = classF: classF (121.17/3.4)
|   |   feature2 = classG: classD (1.32/0.31)
|   feature3 = classG
|   |   feature6 <= 0.5333
|   |   |   feature6 <= 0.3667: classA (2.33/0.28)
|   |   |   feature6 > 0.3667: classG (20.25/1.2)
|   |   feature6 > 0.5333: classE (7.62/0.36)
feature1 = classF
|   feature3 = classA: classA (4.4/0.38)
|   feature3 = classB: classB (4.4/0.4)
|   feature3 = classC
|   |   feature5 = classA: classA (0.47/0.2)
|   |   feature5 = classB: classC (0.0)
|   |   feature5 = classC: classC (32.27/2.66)
|   |   feature5 = classD: classD (0.18/0.08)
|   |   feature5 = classE: classF (0.34/0.17)
|   |   feature5 = classF: classF (18.76/0.15)
|   |   feature5 = classG: classF (0.08/0.0)
|   feature3 = classD
|   |   feature5 = classA: classD (1.28/0.28)
|   |   feature5 = classB: classD (0.0)
|   |   feature5 = classC: classF (0.29/0.16)
|   |   feature5 = classD
|   |   |   feature7 <= 0.32: classA (2.05/0.04)
|   |   |   feature7 > 0.32: classD (41.51/3.38)
|   |   feature5 = classE
|   |   |   feature6 <= 0.4
|   |   |   |   feature8 <= 0.7333: classD (2.04/0.04)
|   |   |   |   feature8 > 0.7333: classA (3.06/0.04)
|   |   |   feature6 > 0.4
|   |   |   |   feature8 <= 0.6333: classE (4.35/0.29)
|   |   |   |   feature8 > 0.6333: classD (5.44/0.44)
|   |   feature5 = classF
|   |   |   feature2 = classA: classF (0.05/0.0)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD: classD (3.08/0.08)
|   |   |   feature2 = classE: classF (0.11/0.0)
|   |   |   feature2 = classF: classF (4.85/0.03)
|   |   |   feature2 = classG: classG (0.02/0.0)
|   |   feature5 = classG: classF (0.1/0.0)
|   feature3 = classE
|   |   feature5 = classA
|   |   |   feature6 <= 0.6: classE (22.83/1.79)
|   |   |   feature6 > 0.6: classF (7.66/0.04)
|   |   feature5 = classB: classE (0.0)
|   |   feature5 = classC: classF (0.65/0.36)
|   |   feature5 = classD: classD (3.76/1.34)
|   |   feature5 = classE
|   |   |   feature9 <= 0.3333: classG (3.14/0.13)
|   |   |   feature9 > 0.3333: classE (75.5/13.11)
|   |   feature5 = classF
|   |   |   feature8 <= 0.5667: classF (28.16/0.24)
|   |   |   feature8 > 0.5667: classE (6.4/1.39)
|   |   feature5 = classG: classG (6.43/1.41)
|   feature3 = classF
|   |   feature2 = classA
|   |   |   feature7 <= 0.88: classF (241.0/2.73)
|   |   |   feature7 > 0.88
|   |   |   |   feature9 <= 0.9333: classF (8.24/0.07)
|   |   |   |   feature9 > 0.9333: classA (3.02/0.02)
|   |   feature2 = classB: classF (0.0)
|   |   feature2 = classC
|   |   |   feature7 <= 0.76: classA (6.36/1.9)
|   |   |   feature7 > 0.76: classC (4.24/0.1)
|   |   feature2 = classD
|   |   |   feature4 = classA: classA (0.02/0.01)
|   |   |   feature4 = classB: classB (0.0/0.0)
|   |   |   feature4 = classC: classF (0.01/0.0)
|   |   |   feature4 = classD: classD (4.49/0.05)
|   |   |   feature4 = classE: classF (0.0/0.0)
|   |   |   feature4 = classF: classF (3.63/0.01)
|   |   |   feature4 = classG: classF (0.02/0.0)
|   |   feature2 = classE: classF (19.77/1.03)
|   |   feature2 = classF: classF (2671.03/28.43)
|   |   feature2 = classG
|   |   |   feature7 <= 0.4: classF (5.12/0.04)
|   |   |   feature7 > 0.4: classG (8.87/0.18)
|   feature3 = classG
|   |   feature2 = classA
|   |   |   feature8 <= 0.7667: classF (7.35/0.05)
|   |   |   feature8 > 0.7667: classG (8.96/0.94)
|   |   feature2 = classB: classG (0.0)
|   |   feature2 = classC: classA (0.34/0.19)
|   |   feature2 = classD: classD (0.26/0.12)
|   |   feature2 = classE: classF (0.43/0.03)
|   |   feature2 = classF
|   |   |   feature4 = classA: classE (0.08/0.01)
|   |   |   feature4 = classB: classB (0.01/0.0)
|   |   |   feature4 = classC: classF (0.01/0.0)
|   |   |   feature4 = classD: classD (2.15/0.15)
|   |   |   feature4 = classE: classF (0.54/0.14)
|   |   |   feature4 = classF: classF (7.19/0.03)
|   |   |   feature4 = classG: classF (0.2/0.01)
|   |   feature2 = classG: classG (66.63/1.38)
feature1 = classG
|   feature2 = classA
|   |   feature3 = classA: classA (7.29/0.74)
|   |   feature3 = classB: classA (7.29/0.74)
|   |   feature3 = classC: classA (0.72/0.07)
|   |   feature3 = classD: classA (8.51/1.86)
|   |   feature3 = classE
|   |   |   feature9 <= 0.9
|   |   |   |   feature7 <= 0.6: classG (4.18/0.02)
|   |   |   |   feature7 > 0.6: classA (19.14/1.97)
|   |   |   feature9 > 0.9: classE (10.7/1.7)
|   |   feature3 = classF
|   |   |   feature8 <= 0.5667: classE (6.08/2.07)
|   |   |   feature8 > 0.5667
|   |   |   |   feature6 <= 0.5667: classF (23.68/1.63)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature4 = classA: classA (2.78/0.27)
|   |   |   |   |   feature4 = classB: classA (0.0)
|   |   |   |   |   feature4 = classC: classA (0.0)
|   |   |   |   |   feature4 = classD: classG (0.2/0.0)
|   |   |   |   |   feature4 = classE: classG (0.02/0.0)
|   |   |   |   |   feature4 = classF: classA (0.0)
|   |   |   |   |   feature4 = classG: classG (2.49/0.51)
|   |   feature3 = classG
|   |   |   feature7 <= 0.88: classG (72.23/5.67)
|   |   |   feature7 > 0.88: classA (7.48/2.33)
|   feature2 = classB: classB (2.09/0.09)
|   feature2 = classC
|   |   feature7 <= 0.88: classE (4.49/0.49)
|   |   feature7 > 0.88: classC (15.34/0.67)
|   feature2 = classD
|   |   feature5 = classA: classD (1.11/0.11)
|   |   feature5 = classB: classD (0.0)
|   |   feature5 = classC: classD (0.0)
|   |   feature5 = classD
|   |   |   feature4 = classA: classG (0.19/0.07)
|   |   |   feature4 = classB: classD (0.0)
|   |   |   feature4 = classC: classD (0.0)
|   |   |   feature4 = classD: classD (38.52/1.74)
|   |   |   feature4 = classE
|   |   |   |   feature7 <= 0.52: classA (2.09/0.08)
|   |   |   |   feature7 > 0.52: classD (2.38/0.1)
|   |   |   feature4 = classF: classG (0.07/0.0)
|   |   |   feature4 = classG
|   |   |   |   feature7 <= 0.6
|   |   |   |   |   feature7 <= 0.44: classG (2.61/0.0)
|   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   feature9 <= 0.6: classD (3.19/0.19)
|   |   |   |   |   |   feature9 > 0.6: classG (2.04/0.0)
|   |   |   |   feature7 > 0.6: classD (10.39/0.86)
|   |   feature5 = classE: classD (0.0)
|   |   feature5 = classF: classD (0.0)
|   |   feature5 = classG: classG (14.38/0.05)
|   feature2 = classE
|   |   feature6 <= 0.5
|   |   |   feature3 = classA: classE (0.0)
|   |   |   feature3 = classB: classE (3.65/1.48)
|   |   |   feature3 = classC: classE (0.0)
|   |   |   feature3 = classD: classA (3.65/1.48)
|   |   |   feature3 = classE: classE (36.64/4.95)
|   |   |   feature3 = classF: classE (0.0)
|   |   |   feature3 = classG: classE (0.0)
|   |   feature6 > 0.5
|   |   |   feature4 = classA: classG (2.26/1.1)
|   |   |   feature4 = classB: classG (0.0)
|   |   |   feature4 = classC: classG (0.0)
|   |   |   feature4 = classD: classD (1.08/0.08)
|   |   |   feature4 = classE
|   |   |   |   feature9 <= 0.5: classG (10.31/1.0)
|   |   |   |   feature9 > 0.5: classE (6.24/0.24)
|   |   |   feature4 = classF: classE (3.32/1.32)
|   |   |   feature4 = classG: classG (19.99/0.0)
|   feature2 = classF
|   |   feature6 <= 0.8: classF (158.92/11.51)
|   |   feature6 > 0.8
|   |   |   feature7 <= 0.72: classG (13.09/0.0)
|   |   |   feature7 > 0.72: classF (4.76/0.76)
|   feature2 = classG: classG (3190.2/27.05)

Number of Leaves  : \t500

Size of the tree : \t669


Weight: 4.0

J48 pruned tree
------------------

feature3 = classA
|   feature4 = classA
|   |   feature6 <= 0.7
|   |   |   feature1 = classA
|   |   |   |   feature9 <= 0.6: classG (10.09/3.83)
|   |   |   |   feature9 > 0.6: classA (16.04/5.86)
|   |   |   feature1 = classB: classA (0.94/0.13)
|   |   |   feature1 = classC: classD (9.35/6.07)
|   |   |   feature1 = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classE (2.17/0.54)
|   |   |   |   |   feature6 > 0.4333: classF (6.59/0.86)
|   |   |   |   feature6 > 0.4667: classG (2.87/1.24)
|   |   |   feature1 = classE
|   |   |   |   feature6 <= 0.3: classG (3.02/0.08)
|   |   |   |   feature6 > 0.3: classD (11.2/4.75)
|   |   |   feature1 = classF: classA (18.34/9.83)
|   |   |   feature1 = classG
|   |   |   |   feature9 <= 0.8333: classF (10.37/4.16)
|   |   |   |   feature9 > 0.8333: classA (3.87/1.22)
|   |   feature6 > 0.7: classA (644.57/8.06)
|   feature4 = classB: classB (19.83/7.82)
|   feature4 = classC
|   |   feature1 = classA: classC (4.59/1.34)
|   |   feature1 = classB: classB (2.28/0.08)
|   |   feature1 = classC
|   |   |   feature7 <= 0.6: classD (3.5/0.26)
|   |   |   feature7 > 0.6: classC (4.65/0.19)
|   |   feature1 = classD
|   |   |   feature9 <= 0.5333: classE (4.51/1.29)
|   |   |   feature9 > 0.5333: classC (5.61/1.32)
|   |   feature1 = classE: classC (0.42/0.28)
|   |   feature1 = classF: classA (0.47/0.31)
|   |   feature1 = classG: classF (0.2/0.05)
|   feature4 = classD
|   |   feature1 = classA: classG (28.53/0.61)
|   |   feature1 = classB: classA (0.18/0.04)
|   |   feature1 = classC: classC (4.22/1.82)
|   |   feature1 = classD
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5333: classE (3.66/1.39)
|   |   |   |   feature6 > 0.5333: classG (2.26/0.13)
|   |   |   feature6 > 0.5667
|   |   |   |   feature9 <= 0.4667: classF (5.56/0.22)
|   |   |   |   feature9 > 0.4667: classC (6.26/3.07)
|   |   feature1 = classE: classD (8.68/0.73)
|   |   feature1 = classF: classA (3.09/0.68)
|   |   feature1 = classG: classG (2.33/0.95)
|   feature4 = classE
|   |   feature5 = classA: classA (1.18/0.6)
|   |   feature5 = classB: classB (2.87/0.73)
|   |   feature5 = classC: classF (3.16/0.98)
|   |   feature5 = classD: classD (8.93/1.79)
|   |   feature5 = classE
|   |   |   feature1 = classA: classE (7.52/1.1)
|   |   |   feature1 = classB: classA (0.1/0.02)
|   |   |   feature1 = classC: classD (1.21/0.33)
|   |   |   feature1 = classD: classG (3.32/1.77)
|   |   |   feature1 = classE
|   |   |   |   feature6 <= 0.7333: classD (12.74/3.35)
|   |   |   |   feature6 > 0.7333: classE (2.02/0.01)
|   |   |   feature1 = classF: classE (6.49/0.46)
|   |   |   feature1 = classG: classA (4.01/1.17)
|   |   feature5 = classF: classE (1.91/0.73)
|   |   feature5 = classG: classE (0.21/0.12)
|   feature4 = classF: classF (18.96/8.08)
|   feature4 = classG: classG (40.64/14.3)
feature3 = classB
|   feature4 = classA
|   |   feature1 = classA
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature7 <= 0.76: classA (2.98/0.04)
|   |   |   |   |   |   |   feature7 > 0.76: classD (3.51/0.21)
|   |   |   |   |   |   feature9 > 0.5: classG (18.74/2.38)
|   |   |   |   |   feature9 > 0.8667: classB (28.1/0.4)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   feature7 <= 0.68
|   |   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   |   feature6 <= 0.6333: classG (2.03/1.01)
|   |   |   |   |   |   |   |   feature6 > 0.6333: classB (112.82/2.02)
|   |   |   |   |   |   |   feature2 = classB: classB (28.74/0.96)
|   |   |   |   |   |   |   feature2 = classC: classB (0.0)
|   |   |   |   |   |   |   feature2 = classD: classA (0.06/0.0)
|   |   |   |   |   |   |   feature2 = classE: classA (2.22/0.07)
|   |   |   |   |   |   |   feature2 = classF: classB (0.0)
|   |   |   |   |   |   |   feature2 = classG: classB (0.0)
|   |   |   |   |   |   feature7 > 0.68: classA (2.68/0.08)
|   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   feature9 <= 0.9667: classA (2.26/0.35)
|   |   |   |   |   |   feature9 > 0.9667: classC (3.84/0.57)
|   |   |   feature6 > 0.7333: classA (41.26/3.78)
|   |   feature1 = classB
|   |   |   feature7 <= 0.68: classB (5.0/0.21)
|   |   |   feature7 > 0.68
|   |   |   |   feature6 <= 0.5333: classA (28.65/0.56)
|   |   |   |   feature6 > 0.5333: classB (2.21/0.42)
|   |   feature1 = classC
|   |   |   feature9 <= 0.7: classC (2.37/1.28)
|   |   |   feature9 > 0.7
|   |   |   |   feature6 <= 0.4: classE (2.25/1.36)
|   |   |   |   feature6 > 0.4: classB (30.7/2.14)
|   |   feature1 = classD
|   |   |   feature6 <= 0.5333: classF (5.81/2.58)
|   |   |   feature6 > 0.5333: classA (3.85/0.58)
|   |   feature1 = classE
|   |   |   feature6 <= 0.3: classG (7.27/0.27)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.3333: classA (3.37/0.1)
|   |   |   |   feature6 > 0.3333: classD (14.86/3.21)
|   |   feature1 = classF
|   |   |   feature9 <= 0.5
|   |   |   |   feature9 <= 0.3333: classE (3.8/0.53)
|   |   |   |   feature9 > 0.3333: classA (11.54/0.94)
|   |   |   feature9 > 0.5: classE (15.98/6.17)
|   |   feature1 = classG
|   |   |   feature6 <= 0.6
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667: classA (6.85/0.31)
|   |   |   |   |   feature6 > 0.4667: classF (3.59/1.28)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature9 <= 0.7333: classE (3.48/0.21)
|   |   |   |   |   feature9 > 0.7333: classA (4.38/0.04)
|   |   |   feature6 > 0.6: classF (10.86/1.0)
|   feature4 = classB
|   |   feature1 = classA
|   |   |   feature6 <= 0.5667
|   |   |   |   feature7 <= 0.76: classA (2.63/0.09)
|   |   |   |   feature7 > 0.76: classB (150.02/6.11)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.6: classG (6.58/0.07)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (2.69/0.52)
|   |   |   |   |   feature6 > 0.6333: classE (3.9/1.73)
|   |   feature1 = classB
|   |   |   feature7 <= 0.84
|   |   |   |   feature6 <= 0.4667: classA (5.48/2.17)
|   |   |   |   feature6 > 0.4667: classB (26.42/0.28)
|   |   |   feature7 > 0.84: classB (1620.49/19.96)
|   |   feature1 = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.2667: classA (4.4/2.23)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.3333: classD (2.3/0.13)
|   |   |   |   |   feature6 > 0.3333: classE (10.35/2.32)
|   |   |   feature6 > 0.5333
|   |   |   |   feature6 <= 0.7: classD (4.87/0.53)
|   |   |   |   feature6 > 0.7: classB (5.15/0.3)
|   |   feature1 = classD
|   |   |   feature6 <= 0.2667: classB (28.84/1.14)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4: classE (4.36/0.02)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.4667: classF (17.44/2.17)
|   |   |   |   |   feature6 > 0.4667: classG (4.6/0.26)
|   |   feature1 = classE
|   |   |   feature6 <= 0.3667
|   |   |   |   feature6 <= 0.3333: classG (2.18/0.01)
|   |   |   |   feature6 > 0.3333: classD (6.58/0.07)
|   |   |   feature6 > 0.3667: classA (17.89/4.84)
|   |   feature1 = classF
|   |   |   feature6 <= 0.4333
|   |   |   |   feature6 <= 0.2667: classG (4.36/0.02)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.4: classA (10.96/4.45)
|   |   |   |   |   feature6 > 0.4: classE (4.3/1.03)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.5: classD (2.42/0.25)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (4.36/0.02)
|   |   |   |   |   feature6 > 0.5333: classA (2.34/0.17)
|   |   feature1 = classG
|   |   |   feature6 <= 0.5333: classF (12.12/1.21)
|   |   |   feature6 > 0.5333: classG (2.35/0.01)
|   feature4 = classC
|   |   feature1 = classA: classC (12.05/2.08)
|   |   feature1 = classB: classB (8.06/0.26)
|   |   feature1 = classC
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.8: classE (5.76/0.59)
|   |   |   |   feature9 > 0.8: classD (10.79/0.73)
|   |   |   feature6 > 0.7: classC (13.72/0.26)
|   |   feature1 = classD
|   |   |   feature9 <= 0.5333
|   |   |   |   feature6 <= 0.8667: classE (11.67/0.75)
|   |   |   |   feature6 > 0.8667: classC (3.29/0.02)
|   |   |   feature9 > 0.5333
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature6 <= 0.7: classA (3.62/0.35)
|   |   |   |   |   feature6 > 0.7: classC (3.37/0.08)
|   |   |   |   feature9 > 0.9333: classC (10.3/0.42)
|   |   feature1 = classE: classE (1.89/1.25)
|   |   feature1 = classF: classA (1.51/1.0)
|   |   feature1 = classG: classE (2.71/0.68)
|   feature4 = classD
|   |   feature6 <= 0.9
|   |   |   feature9 <= 0.9
|   |   |   |   feature1 = classA: classA (1.68/0.69)
|   |   |   |   feature1 = classB: classA (0.12/0.03)
|   |   |   |   feature1 = classC: classD (4.94/1.22)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.5333: classE (11.25/2.99)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classG (6.94/0.39)
|   |   |   |   |   |   feature6 > 0.5667: classD (5.0/0.02)
|   |   |   |   feature1 = classE: classD (25.57/1.63)
|   |   |   |   feature1 = classF: classF (1.8/1.17)
|   |   |   |   feature1 = classG: classG (5.59/1.64)
|   |   |   feature9 > 0.9
|   |   |   |   feature1 = classA: classG (0.19/0.11)
|   |   |   |   feature1 = classB: classA (0.03/0.01)
|   |   |   |   feature1 = classC: classD (0.27/0.17)
|   |   |   |   feature1 = classD: classC (7.95/1.41)
|   |   |   |   feature1 = classE: classD (0.22/0.13)
|   |   |   |   feature1 = classF: classA (6.8/0.16)
|   |   |   |   feature1 = classG: classF (0.26/0.14)
|   |   feature6 > 0.9
|   |   |   feature9 <= 0.5: classF (16.98/0.55)
|   |   |   feature9 > 0.5
|   |   |   |   feature1 = classA: classA (0.01/0.0)
|   |   |   |   feature1 = classB: classA (0.08/0.02)
|   |   |   |   feature1 = classC: classC (6.87/0.03)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.9333: classC (3.83/0.56)
|   |   |   |   |   feature6 > 0.9333: classD (3.49/0.02)
|   |   |   |   feature1 = classE: classC (0.0)
|   |   |   |   feature1 = classF: classC (0.0)
|   |   |   |   feature1 = classG: classG (0.02/0.0)
|   feature4 = classE
|   |   feature5 = classA: classE (1.53/0.43)
|   |   feature5 = classB: classB (9.55/2.43)
|   |   feature5 = classC
|   |   |   feature6 <= 0.5: classE (2.63/1.94)
|   |   |   feature6 > 0.5: classF (7.09/0.51)
|   |   feature5 = classD: classD (27.44/5.5)
|   |   feature5 = classE
|   |   |   feature1 = classA
|   |   |   |   feature6 <= 0.3: classD (2.37/0.01)
|   |   |   |   feature6 > 0.3: classE (20.81/1.05)
|   |   |   feature1 = classB: classE (0.83/0.33)
|   |   |   feature1 = classC: classD (4.81/2.06)
|   |   |   feature1 = classD
|   |   |   |   feature6 <= 0.3: classA (3.47/0.19)
|   |   |   |   feature6 > 0.3: classG (6.83/1.99)
|   |   |   feature1 = classE
|   |   |   |   feature2 = classA: classA (2.34/0.09)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   feature2 = classD: classD (7.29/0.66)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.7333: classD (29.49/7.23)
|   |   |   |   |   feature6 > 0.7333: classE (6.19/0.03)
|   |   |   |   feature2 = classF: classE (0.13/0.0)
|   |   |   |   feature2 = classG: classE (0.06/0.0)
|   |   |   feature1 = classF: classE (20.03/1.44)
|   |   |   feature1 = classG
|   |   |   |   feature9 <= 0.5667: classA (10.01/1.24)
|   |   |   |   feature9 > 0.5667: classE (2.39/0.16)
|   |   feature5 = classF: classE (5.87/2.26)
|   |   feature5 = classG: classE (0.65/0.37)
|   feature4 = classF
|   |   feature9 <= 0.4667
|   |   |   feature1 = classA: classC (4.78/1.5)
|   |   |   feature1 = classB: classB (2.09/0.05)
|   |   |   feature1 = classC: classE (3.53/0.19)
|   |   |   feature1 = classD: classF (0.32/0.17)
|   |   |   feature1 = classE: classA (7.37/0.76)
|   |   |   feature1 = classF: classF (1.28/0.19)
|   |   |   feature1 = classG: classG (0.25/0.11)
|   |   feature9 > 0.4667
|   |   |   feature1 = classA: classA (1.09/0.33)
|   |   |   feature1 = classB: classB (0.63/0.1)
|   |   |   feature1 = classC: classD (0.59/0.4)
|   |   |   feature1 = classD: classF (10.61/0.24)
|   |   |   feature1 = classE: classF (4.56/0.55)
|   |   |   feature1 = classF
|   |   |   |   feature9 <= 0.5333: classG (8.78/2.14)
|   |   |   |   feature9 > 0.5333: classF (8.33/0.27)
|   |   |   feature1 = classG: classF (7.94/0.41)
|   feature4 = classG
|   |   feature5 = classA
|   |   |   feature2 = classA: classA (11.98/4.56)
|   |   |   feature2 = classB: classA (0.0)
|   |   |   feature2 = classC: classA (0.0)
|   |   |   feature2 = classD: classG (0.05/0.0)
|   |   |   feature2 = classE: classE (5.12/1.82)
|   |   |   feature2 = classF: classG (0.39/0.04)
|   |   |   feature2 = classG: classG (1.17/0.09)
|   |   feature5 = classB
|   |   |   feature9 <= 0.9667: classG (16.49/3.23)
|   |   |   feature9 > 0.9667: classA (30.07/2.01)
|   |   feature5 = classC: classC (0.01/0.0)
|   |   feature5 = classD: classG (12.59/1.56)
|   |   feature5 = classE: classG (3.61/1.87)
|   |   feature5 = classF
|   |   |   feature1 = classA: classG (3.19/0.65)
|   |   |   feature1 = classB: classA (0.06/0.01)
|   |   |   feature1 = classC: classD (0.28/0.18)
|   |   |   feature1 = classD: classG (1.33/0.24)
|   |   |   feature1 = classE: classG (1.23/0.22)
|   |   |   feature1 = classF: classG (1.38/0.3)
|   |   |   feature1 = classG: classF (15.21/1.69)
|   |   feature5 = classG: classG (46.6/5.19)
feature3 = classC
|   feature6 <= 0.8333
|   |   feature5 = classA
|   |   |   feature2 = classA: classA (25.95/14.59)
|   |   |   feature2 = classB: classB (0.01/0.0)
|   |   |   feature2 = classC: classC (3.85/2.08)
|   |   |   feature2 = classD: classD (0.07/0.04)
|   |   |   feature2 = classE: classE (5.93/2.07)
|   |   |   feature2 = classF: classF (1.11/0.72)
|   |   |   feature2 = classG: classG (0.52/0.18)
|   |   feature5 = classB
|   |   |   feature1 = classA: classB (11.92/1.89)
|   |   |   feature1 = classB: classA (5.55/2.04)
|   |   |   feature1 = classC: classD (1.02/0.57)
|   |   |   feature1 = classD: classF (1.7/1.05)
|   |   |   feature1 = classE: classD (1.69/0.98)
|   |   |   feature1 = classF: classA (1.65/1.07)
|   |   |   feature1 = classG: classF (0.93/0.41)
|   |   feature5 = classC
|   |   |   feature4 = classA
|   |   |   |   feature1 = classA
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature9 <= 0.5: classD (2.71/0.57)
|   |   |   |   |   |   feature9 > 0.5: classG (11.8/0.8)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.7: classC (2.67/0.53)
|   |   |   |   |   |   feature6 > 0.7: classD (2.79/0.69)
|   |   |   |   feature1 = classB: classA (0.38/0.18)
|   |   |   |   feature1 = classC: classC (8.24/5.12)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.5333: classF (2.52/1.09)
|   |   |   |   |   feature6 > 0.5333: classA (3.64/0.31)
|   |   |   |   feature1 = classE
|   |   |   |   |   feature6 <= 0.3333: classG (4.49/0.08)
|   |   |   |   |   feature6 > 0.3333: classD (6.12/1.11)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature9 <= 0.3333: classE (2.43/0.33)
|   |   |   |   |   |   feature9 > 0.3333: classA (7.28/0.57)
|   |   |   |   |   feature9 > 0.4667: classB (5.05/2.95)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.4667: classA (6.91/0.26)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.7333: classE (2.7/0.6)
|   |   |   |   |   |   feature9 > 0.7333: classF (7.19/0.11)
|   |   |   feature4 = classB
|   |   |   |   feature1 = classA: classG (0.26/0.16)
|   |   |   |   feature1 = classB: classB (0.27/0.03)
|   |   |   |   feature1 = classC: classC (0.92/0.33)
|   |   |   |   feature1 = classD: classF (0.4/0.17)
|   |   |   |   feature1 = classE: classA (5.8/0.28)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature6 <= 0.4: classB (2.28/0.18)
|   |   |   |   |   feature6 > 0.4: classE (2.25/0.15)
|   |   |   |   feature1 = classG: classF (0.19/0.02)
|   |   |   feature4 = classC
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature1 = classA
|   |   |   |   |   |   feature6 <= 0.5667: classC (15.02/4.89)
|   |   |   |   |   |   feature6 > 0.5667: classG (4.73/0.66)
|   |   |   |   |   feature1 = classB: classB (4.84/2.68)
|   |   |   |   |   feature1 = classC
|   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   feature7 <= 0.68
|   |   |   |   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   |   |   |   feature6 <= 0.4333: classA (2.19/0.61)
|   |   |   |   |   |   |   |   |   feature6 > 0.4333: classC (2.64/0.1)
|   |   |   |   |   |   |   |   feature9 > 0.8333: classD (5.02/0.77)
|   |   |   |   |   |   |   feature7 > 0.68
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classC (8.6/5.29)
|   |   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classA (7.62/1.64)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88: classC (3.09/0.05)
|   |   |   |   |   |   |   |   |   feature8 > 0.9667: classA (231.54/9.93)
|   |   |   |   |   |   feature7 > 0.96: classC (14.31/0.49)
|   |   |   |   |   feature1 = classD
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (2.94/0.23)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature7 <= 0.88: classA (67.69/10.66)
|   |   |   |   |   |   |   |   feature7 > 0.88: classC (3.18/0.5)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.5: classG (2.9/0.19)
|   |   |   |   |   |   |   feature6 > 0.5: classC (6.64/0.31)
|   |   |   |   |   feature1 = classE
|   |   |   |   |   |   feature6 <= 0.4: classD (5.83/1.76)
|   |   |   |   |   |   feature6 > 0.4: classC (7.54/3.12)
|   |   |   |   |   feature1 = classF
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.2667: classG (2.9/0.19)
|   |   |   |   |   |   |   feature6 > 0.2667: classC (10.94/4.44)
|   |   |   |   |   |   feature6 > 0.4667: classG (6.36/3.65)
|   |   |   |   |   feature1 = classG: classF (7.49/0.68)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature1 = classA: classA (5.18/3.01)
|   |   |   |   |   feature1 = classB: classC (1.16/0.11)
|   |   |   |   |   feature1 = classC
|   |   |   |   |   |   feature7 <= 0.6: classD (4.81/1.28)
|   |   |   |   |   |   feature7 > 0.6: classC (58.65/6.7)
|   |   |   |   |   feature1 = classD
|   |   |   |   |   |   feature9 <= 0.4: classE (4.25/0.05)
|   |   |   |   |   |   feature9 > 0.4: classC (10.81/2.65)
|   |   |   |   |   feature1 = classE: classA (2.93/0.15)
|   |   |   |   |   feature1 = classF: classC (0.26/0.01)
|   |   |   |   |   feature1 = classG: classG (0.86/0.06)
|   |   |   feature4 = classD
|   |   |   |   feature1 = classA: classA (2.06/0.81)
|   |   |   |   feature1 = classB: classA (0.12/0.01)
|   |   |   |   feature1 = classC: classC (8.93/1.19)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5333: classE (4.98/2.65)
|   |   |   |   |   |   feature6 > 0.5333: classG (4.31/0.11)
|   |   |   |   |   feature6 > 0.5667: classC (3.88/0.83)
|   |   |   |   feature1 = classE: classD (9.78/0.92)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature9 <= 0.6333: classC (3.2/0.66)
|   |   |   |   |   feature9 > 0.6333: classA (4.87/0.39)
|   |   |   |   feature1 = classG: classF (0.77/0.2)
|   |   |   feature4 = classE
|   |   |   |   feature1 = classA: classD (3.02/0.74)
|   |   |   |   feature1 = classB: classA (0.4/0.19)
|   |   |   |   feature1 = classC: classD (3.79/1.33)
|   |   |   |   feature1 = classD: classG (5.67/1.2)
|   |   |   |   feature1 = classE
|   |   |   |   |   feature2 = classA: classA (2.76/0.54)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC: classC (0.02/0.0)
|   |   |   |   |   feature2 = classD: classE (0.2/0.03)
|   |   |   |   |   feature2 = classE: classD (3.3/1.01)
|   |   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature9 <= 0.6333: classF (7.55/0.7)
|   |   |   |   |   feature9 > 0.6333: classE (2.31/0.21)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.3: classA (2.23/0.13)
|   |   |   |   |   feature6 > 0.3: classE (2.71/0.61)
|   |   |   feature4 = classF
|   |   |   |   feature9 <= 0.4667: classA (62.45/14.37)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature1 = classA: classA (0.49/0.32)
|   |   |   |   |   feature1 = classB: classA (0.05/0.0)
|   |   |   |   |   feature1 = classC: classD (0.55/0.37)
|   |   |   |   |   feature1 = classD: classF (6.9/0.25)
|   |   |   |   |   feature1 = classE: classF (2.73/0.42)
|   |   |   |   |   feature1 = classF: classG (6.1/1.72)
|   |   |   |   |   feature1 = classG: classF (0.38/0.15)
|   |   |   feature4 = classG
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature1 = classA: classD (2.38/0.24)
|   |   |   |   |   feature1 = classB: classA (0.02/0.0)
|   |   |   |   |   feature1 = classC: classD (0.21/0.13)
|   |   |   |   |   feature1 = classD: classG (0.3/0.17)
|   |   |   |   |   feature1 = classE: classD (0.21/0.13)
|   |   |   |   |   feature1 = classF: classF (0.44/0.17)
|   |   |   |   |   feature1 = classG: classA (3.38/1.28)
|   |   |   |   feature9 > 0.6333: classG (29.28/3.84)
|   |   feature5 = classD
|   |   |   feature4 = classA: classG (6.68/4.83)
|   |   |   feature4 = classB: classB (0.85/0.59)
|   |   |   feature4 = classC
|   |   |   |   feature1 = classA: classC (0.67/0.2)
|   |   |   |   feature1 = classB: classB (0.26/0.03)
|   |   |   |   feature1 = classC: classC (2.36/0.71)
|   |   |   |   feature1 = classD: classE (5.36/1.53)
|   |   |   |   feature1 = classE: classD (0.23/0.13)
|   |   |   |   feature1 = classF: classA (0.24/0.15)
|   |   |   |   feature1 = classG: classF (0.15/0.02)
|   |   |   feature4 = classD
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   feature1 = classA: classA (0.53/0.37)
|   |   |   |   |   feature1 = classB: classA (0.06/0.01)
|   |   |   |   |   feature1 = classC: classD (0.58/0.38)
|   |   |   |   |   feature1 = classD: classD (7.67/1.35)
|   |   |   |   |   feature1 = classE: classD (5.76/0.32)
|   |   |   |   |   feature1 = classF: classA (1.28/0.61)
|   |   |   |   |   feature1 = classG: classG (3.9/0.52)
|   |   |   |   feature9 > 0.9667: classC (7.98/1.29)
|   |   |   feature4 = classE: classD (27.06/5.26)
|   |   |   feature4 = classF: classF (2.44/1.26)
|   |   |   feature4 = classG: classG (12.49/2.16)
|   |   feature5 = classE
|   |   |   feature1 = classA
|   |   |   |   feature4 = classA
|   |   |   |   |   feature6 <= 0.6: classG (4.19/1.1)
|   |   |   |   |   feature6 > 0.6: classA (3.31/1.36)
|   |   |   |   feature4 = classB: classA (0.14/0.02)
|   |   |   |   feature4 = classC: classC (1.31/0.18)
|   |   |   |   feature4 = classD: classA (0.05/0.0)
|   |   |   |   feature4 = classE
|   |   |   |   |   feature6 <= 0.4333: classE (20.98/1.04)
|   |   |   |   |   feature6 > 0.4333: classG (2.38/1.33)
|   |   |   |   feature4 = classF: classC (0.73/0.18)
|   |   |   |   feature4 = classG: classG (3.78/0.85)
|   |   |   feature1 = classB: classC (3.81/1.78)
|   |   |   feature1 = classC: classD (9.0/5.13)
|   |   |   feature1 = classD
|   |   |   |   feature4 = classA: classD (0.13/0.06)
|   |   |   |   feature4 = classB: classC (0.0)
|   |   |   |   feature4 = classC
|   |   |   |   |   feature6 <= 0.5333: classF (2.93/1.22)
|   |   |   |   |   feature6 > 0.5333: classC (11.73/1.76)
|   |   |   |   feature4 = classD
|   |   |   |   |   feature6 <= 0.5333: classE (5.92/1.78)
|   |   |   |   |   feature6 > 0.5333: classD (2.27/1.11)
|   |   |   |   feature4 = classE
|   |   |   |   |   feature6 <= 0.3: classA (3.52/0.2)
|   |   |   |   |   feature6 > 0.3: classG (2.92/1.5)
|   |   |   |   feature4 = classF: classF (2.09/0.19)
|   |   |   |   feature4 = classG: classG (1.82/0.6)
|   |   |   feature1 = classE
|   |   |   |   feature4 = classA
|   |   |   |   |   feature6 <= 0.3333: classA (4.63/1.3)
|   |   |   |   |   feature6 > 0.3333: classD (5.47/0.7)
|   |   |   |   feature4 = classB: classA (0.61/0.04)
|   |   |   |   feature4 = classC: classC (0.15/0.03)
|   |   |   |   feature4 = classD: classD (10.38/0.99)
|   |   |   |   feature4 = classE
|   |   |   |   |   feature7 <= 0.8: classD (35.72/7.93)
|   |   |   |   |   feature7 > 0.8: classE (5.95/2.55)
|   |   |   |   feature4 = classF: classF (0.91/0.3)
|   |   |   |   feature4 = classG: classG (1.48/0.24)
|   |   |   feature1 = classF
|   |   |   |   feature4 = classA
|   |   |   |   |   feature9 <= 0.7: classA (2.75/0.81)
|   |   |   |   |   feature9 > 0.7: classE (8.98/1.78)
|   |   |   |   feature4 = classB: classB (1.28/0.73)
|   |   |   |   feature4 = classC: classF (0.05/0.01)
|   |   |   |   feature4 = classD: classA (1.35/0.17)
|   |   |   |   feature4 = classE: classE (19.95/2.78)
|   |   |   |   feature4 = classF: classG (2.43/1.19)
|   |   |   |   feature4 = classG: classG (1.55/0.23)
|   |   |   feature1 = classG
|   |   |   |   feature4 = classA: classF (2.84/0.82)
|   |   |   |   feature4 = classB: classF (0.0)
|   |   |   |   feature4 = classC: classG (0.01/0.0)
|   |   |   |   feature4 = classD: classG (0.04/0.0)
|   |   |   |   feature4 = classE: classA (9.59/2.39)
|   |   |   |   feature4 = classF: classF (7.86/0.19)
|   |   |   |   feature4 = classG: classG (1.64/0.76)
|   |   feature5 = classF
|   |   |   feature2 = classA: classA (7.27/3.14)
|   |   |   feature2 = classB: classB (0.01/0.01)
|   |   |   feature2 = classC: classE (6.83/3.21)
|   |   |   feature2 = classD: classD (0.16/0.09)
|   |   |   feature2 = classE: classA (3.71/2.25)
|   |   |   feature2 = classF: classF (45.98/13.48)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.6667: classG (5.62/3.77)
|   |   |   |   feature6 > 0.6667: classF (14.03/0.66)
|   |   feature5 = classG: classG (22.03/5.82)
|   feature6 > 0.8333
|   |   feature1 = classA: classA (53.91/1.15)
|   |   feature1 = classB
|   |   |   feature9 <= 0.9333
|   |   |   |   feature9 <= 0.9: classB (7.19/1.47)
|   |   |   |   feature9 > 0.9: classA (4.88/1.21)
|   |   |   feature9 > 0.9333: classB (34.05/6.66)
|   |   feature1 = classC
|   |   |   feature7 <= 0.84
|   |   |   |   feature4 = classA: classC (4.23/0.04)
|   |   |   |   feature4 = classB: classC (0.0)
|   |   |   |   feature4 = classC
|   |   |   |   |   feature7 <= 0.8: classC (32.09/0.48)
|   |   |   |   |   feature7 > 0.8
|   |   |   |   |   |   feature9 <= 0.7333: classA (14.43/0.07)
|   |   |   |   |   |   feature9 > 0.7333: classC (9.6/0.04)
|   |   |   |   feature4 = classD: classC (12.46/0.32)
|   |   |   |   feature4 = classE: classC (0.0)
|   |   |   |   feature4 = classF: classA (14.51/0.07)
|   |   |   |   feature4 = classG: classC (0.0)
|   |   |   feature7 > 0.84: classC (1476.53/10.17)
|   |   feature1 = classD
|   |   |   feature9 <= 0.5
|   |   |   |   feature4 = classA: classD (0.12/0.0)
|   |   |   |   feature4 = classB: classF (0.0)
|   |   |   |   feature4 = classC: classC (3.35/0.02)
|   |   |   |   feature4 = classD: classF (16.74/0.04)
|   |   |   |   feature4 = classE: classF (0.0)
|   |   |   |   feature4 = classF: classA (0.62/0.0)
|   |   |   |   feature4 = classG: classF (0.0)
|   |   |   feature9 > 0.5
|   |   |   |   feature2 = classA: classA (0.04/0.0)
|   |   |   |   feature2 = classB: classC (0.0)
|   |   |   |   feature2 = classC: classC (3.23/0.67)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature7 <= 0.88: classC (40.59/3.64)
|   |   |   |   |   feature7 > 0.88: classD (2.17/0.01)
|   |   |   |   feature2 = classE: classD (0.19/0.0)
|   |   |   |   feature2 = classF: classC (0.0)
|   |   |   |   feature2 = classG: classC (0.0)
|   |   feature1 = classE: classE (5.13/0.21)
|   |   feature1 = classF: classF (2.35/0.15)
|   |   feature1 = classG: classG (21.61/1.0)
feature3 = classD
|   feature2 = classA
|   |   feature6 <= 0.5333
|   |   |   feature1 = classA
|   |   |   |   feature9 <= 0.6667: classD (92.99/3.22)
|   |   |   |   feature9 > 0.6667
|   |   |   |   |   feature9 <= 0.9333: classA (3.61/0.51)
|   |   |   |   |   feature9 > 0.9333: classD (27.95/0.14)
|   |   |   feature1 = classB: classB (1.07/0.54)
|   |   |   feature1 = classC: classE (3.72/2.16)
|   |   |   feature1 = classD
|   |   |   |   feature4 = classA: classD (8.15/4.9)
|   |   |   |   feature4 = classB: classF (0.0)
|   |   |   |   feature4 = classC: classD (0.01/0.0)
|   |   |   |   feature4 = classD: classD (2.37/1.31)
|   |   |   |   feature4 = classE: classG (2.3/1.09)
|   |   |   |   feature4 = classF: classF (3.83/1.55)
|   |   |   |   feature4 = classG: classG (1.53/0.39)
|   |   |   feature1 = classE
|   |   |   |   feature6 <= 0.3333: classG (11.43/0.39)
|   |   |   |   feature6 > 0.3333: classD (15.71/2.33)
|   |   |   feature1 = classF
|   |   |   |   feature6 <= 0.4667: classA (7.68/4.13)
|   |   |   |   feature6 > 0.4667: classG (2.39/1.38)
|   |   |   feature1 = classG
|   |   |   |   feature6 <= 0.2667: classD (28.39/0.69)
|   |   |   |   feature6 > 0.2667: classF (3.98/1.43)
|   |   feature6 > 0.5333
|   |   |   feature6 <= 0.8667
|   |   |   |   feature6 <= 0.8333
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature4 = classA: classA (18.29/7.31)
|   |   |   |   |   |   feature4 = classB: classA (0.0)
|   |   |   |   |   |   feature4 = classC: classC (0.12/0.07)
|   |   |   |   |   |   feature4 = classD: classG (1.33/0.23)
|   |   |   |   |   |   feature4 = classE: classA (6.32/0.85)
|   |   |   |   |   |   feature4 = classF: classG (3.18/1.98)
|   |   |   |   |   |   feature4 = classG: classG (5.59/0.65)
|   |   |   |   |   feature6 > 0.6667: classA (44.15/5.42)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   feature7 <= 0.96: classA (7.95/0.19)
|   |   |   |   |   feature7 > 0.96: classD (29.47/1.36)
|   |   |   feature6 > 0.8667: classA (126.48/7.18)
|   feature2 = classB
|   |   feature1 = classA: classB (18.2/2.31)
|   |   feature1 = classB
|   |   |   feature6 <= 0.4667: classA (5.68/0.13)
|   |   |   feature6 > 0.4667: classB (42.54/0.48)
|   |   feature1 = classC: classD (1.26/0.84)
|   |   feature1 = classD: classF (2.66/1.4)
|   |   feature1 = classE: classD (1.6/0.94)
|   |   feature1 = classF: classA (2.08/1.33)
|   |   feature1 = classG: classF (1.15/0.48)
|   feature2 = classC
|   |   feature4 = classA: classA (9.51/2.9)
|   |   feature4 = classB: classA (6.67/0.92)
|   |   feature4 = classC
|   |   |   feature1 = classA: classC (16.59/0.66)
|   |   |   feature1 = classB: classB (0.46/0.15)
|   |   |   feature1 = classC
|   |   |   |   feature7 <= 0.64: classD (18.17/0.71)
|   |   |   |   feature7 > 0.64: classC (22.91/1.53)
|   |   |   feature1 = classD: classD (5.04/1.48)
|   |   |   feature1 = classE: classD (1.78/0.98)
|   |   |   feature1 = classF: classA (1.28/0.8)
|   |   |   feature1 = classG: classF (0.45/0.09)
|   |   feature4 = classD: classD (4.95/2.16)
|   |   feature4 = classE
|   |   |   feature1 = classA: classD (0.35/0.16)
|   |   |   feature1 = classB: classE (0.55/0.26)
|   |   |   feature1 = classC: classD (6.35/0.46)
|   |   |   feature1 = classD: classG (0.61/0.26)
|   |   |   feature1 = classE: classE (5.59/0.27)
|   |   |   feature1 = classF: classF (11.07/0.48)
|   |   |   feature1 = classG: classF (0.45/0.31)
|   |   feature4 = classF: classF (6.88/1.03)
|   |   feature4 = classG: classG (1.95/0.27)
|   feature2 = classD
|   |   feature6 <= 0.4
|   |   |   feature4 = classA
|   |   |   |   feature9 <= 0.4: classE (3.27/0.5)
|   |   |   |   feature9 > 0.4: classA (8.94/2.25)
|   |   |   feature4 = classB: classB (2.99/0.3)
|   |   |   feature4 = classC: classD (0.11/0.06)
|   |   |   feature4 = classD
|   |   |   |   feature8 <= 0.9: classD (28.53/4.99)
|   |   |   |   feature8 > 0.9
|   |   |   |   |   feature1 = classA: classD (31.02/1.34)
|   |   |   |   |   feature1 = classB: classA (0.0)
|   |   |   |   |   feature1 = classC
|   |   |   |   |   |   feature6 <= 0.3333: classD (6.15/3.8)
|   |   |   |   |   |   feature6 > 0.3333: classE (3.7/0.07)
|   |   |   |   |   feature1 = classD
|   |   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (167.72/1.51)
|   |   |   |   |   |   |   feature9 > 0.7333: classD (2.16/0.01)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.3333: classE (4.18/0.55)
|   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   feature8 <= 0.9333: classA (28.0/0.3)
|   |   |   |   |   |   |   |   feature8 > 0.9333: classD (2.67/0.01)
|   |   |   |   |   feature1 = classE: classD (15.22/1.92)
|   |   |   |   |   feature1 = classF
|   |   |   |   |   |   feature6 <= 0.2667: classG (3.67/0.04)
|   |   |   |   |   |   feature6 > 0.2667: classA (67.77/1.95)
|   |   |   |   |   feature1 = classG: classD (2.78/0.06)
|   |   |   feature4 = classE
|   |   |   |   feature1 = classA: classD (36.42/0.19)
|   |   |   |   feature1 = classB: classD (0.0)
|   |   |   |   feature1 = classC: classE (2.46/1.46)
|   |   |   |   feature1 = classD: classG (7.41/2.02)
|   |   |   |   feature1 = classE: classA (30.39/2.69)
|   |   |   |   feature1 = classF: classE (5.15/2.46)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.3: classA (2.86/0.17)
|   |   |   |   |   feature6 > 0.3: classE (3.73/1.04)
|   |   |   feature4 = classF: classF (10.95/2.76)
|   |   |   feature4 = classG: classG (18.25/7.01)
|   |   feature6 > 0.4
|   |   |   feature4 = classA
|   |   |   |   feature1 = classA
|   |   |   |   |   feature6 <= 0.6: classG (15.77/1.93)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   |   feature9 <= 0.5: classD (28.18/0.3)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.7333: classC (3.67/0.53)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classD (3.14/0.44)
|   |   |   |   |   |   feature6 > 0.7667: classA (8.06/0.24)
|   |   |   |   feature1 = classB: classA (0.48/0.23)
|   |   |   |   feature1 = classC: classA (3.23/2.07)
|   |   |   |   feature1 = classD: classD (3.64/1.37)
|   |   |   |   feature1 = classE: classD (4.12/0.78)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature6 <= 0.4667: classB (5.56/2.86)
|   |   |   |   |   feature6 > 0.4667: classA (3.85/1.03)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature9 <= 0.7333: classE (3.42/0.72)
|   |   |   |   |   feature9 > 0.7333: classF (8.7/0.12)
|   |   |   feature4 = classB
|   |   |   |   feature1 = classA: classG (0.16/0.09)
|   |   |   |   feature1 = classB: classA (8.95/3.52)
|   |   |   |   feature1 = classC: classD (0.13/0.07)
|   |   |   |   feature1 = classD: classF (0.3/0.15)
|   |   |   |   feature1 = classE: classA (2.82/0.06)
|   |   |   |   feature1 = classF: classE (2.8/0.11)
|   |   |   |   feature1 = classG: classF (0.13/0.02)
|   |   |   feature4 = classC
|   |   |   |   feature1 = classA: classG (0.76/0.54)
|   |   |   |   feature1 = classB: classB (5.61/0.19)
|   |   |   |   feature1 = classC: classD (2.69/0.94)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.7: classE (12.26/1.61)
|   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   feature6 <= 0.9: classD (2.65/0.01)
|   |   |   |   |   |   |   feature6 > 0.9: classC (2.78/0.09)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature7 <= 0.52
|   |   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   |   feature9 <= 0.6: classC (5.38/0.12)
|   |   |   |   |   |   |   |   feature9 > 0.6: classA (2.57/0.14)
|   |   |   |   |   |   |   feature9 > 0.9333: classC (16.15/0.35)
|   |   |   |   |   |   feature7 > 0.52: classD (2.61/0.32)
|   |   |   |   feature1 = classE: classA (0.39/0.16)
|   |   |   |   feature1 = classF: classF (0.52/0.3)
|   |   |   |   feature1 = classG: classF (0.47/0.09)
|   |   |   feature4 = classD
|   |   |   |   feature1 = classA
|   |   |   |   |   feature6 <= 0.4333: classD (56.18/0.39)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (3.91/1.69)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (6.79/0.12)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   feature6 <= 0.6667: classD (3.77/1.52)
|   |   |   |   |   |   |   |   feature6 > 0.6667: classE (2.89/0.66)
|   |   |   |   |   |   |   feature6 > 0.7333: classA (6.4/0.07)
|   |   |   |   feature1 = classB: classA (5.61/1.16)
|   |   |   |   feature1 = classC
|   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   feature6 <= 0.5: classD (31.3/0.14)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5333: classE (2.25/0.03)
|   |   |   |   |   |   |   feature6 > 0.5333: classD (5.53/0.02)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature6 <= 0.8333: classB (6.63/2.18)
|   |   |   |   |   |   feature6 > 0.8333: classD (4.36/0.62)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature7 <= 0.96: classD (104.23/22.04)
|   |   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   |   feature6 <= 0.5: classF (8.6/4.07)
|   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.6333: classA (29.56/1.86)
|   |   |   |   |   |   |   |   feature9 > 0.6333: classD (4.06/0.79)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.9: classD (12.61/0.06)
|   |   |   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   |   |   feature9 <= 0.4333: classD (2.59/0.01)
|   |   |   |   |   |   |   |   feature9 > 0.4333: classF (13.66/0.13)
|   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   feature9 <= 0.9667: classD (22.04/0.1)
|   |   |   |   |   |   |   |   feature9 > 0.9667: classC (10.62/0.08)
|   |   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   feature6 <= 0.9: classD (58.29/0.26)
|   |   |   |   |   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6: classD (14.06/0.06)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.72: classC (5.8/0.53)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.72: classD (4.24/0.02)
|   |   |   |   |   |   |   |   feature9 > 0.6333: classD (1097.53/4.84)
|   |   |   |   feature1 = classE
|   |   |   |   |   feature6 <= 0.6667: classD (30.52/5.13)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classA (6.65/2.2)
|   |   |   |   |   |   feature6 > 0.7: classD (2.29/0.05)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature6 <= 0.5: classD (9.24/1.59)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classG (5.01/0.56)
|   |   |   |   |   |   feature6 > 0.5333: classA (3.44/1.22)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.5: classF (14.22/3.03)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature9 <= 0.3667: classG (6.28/0.04)
|   |   |   |   |   |   feature9 > 0.3667: classD (8.51/1.83)
|   |   |   feature4 = classE
|   |   |   |   feature1 = classA: classA (5.49/0.68)
|   |   |   |   feature1 = classB: classA (0.27/0.05)
|   |   |   |   feature1 = classC: classD (0.7/0.38)
|   |   |   |   feature1 = classD: classD (33.72/1.22)
|   |   |   |   feature1 = classE: classD (34.33/2.63)
|   |   |   |   feature1 = classF: classD (1.01/0.39)
|   |   |   |   feature1 = classG: classA (1.78/0.76)
|   |   |   feature4 = classF
|   |   |   |   feature1 = classA
|   |   |   |   |   feature6 <= 0.5333: classD (27.9/0.13)
|   |   |   |   |   feature6 > 0.5333: classC (3.38/0.69)
|   |   |   |   feature1 = classB: classA (0.18/0.04)
|   |   |   |   feature1 = classC: classE (3.2/0.43)
|   |   |   |   feature1 = classD: classD (7.7/0.74)
|   |   |   |   feature1 = classE: classD (1.22/0.64)
|   |   |   |   feature1 = classF: classG (7.15/1.62)
|   |   |   |   feature1 = classG: classF (0.59/0.23)
|   |   |   feature4 = classG
|   |   |   |   feature1 = classA: classG (14.26/0.59)
|   |   |   |   feature1 = classB: classA (0.17/0.03)
|   |   |   |   feature1 = classC: classD (0.41/0.21)
|   |   |   |   feature1 = classD: classD (11.83/0.72)
|   |   |   |   feature1 = classE: classG (5.87/0.48)
|   |   |   |   feature1 = classF: classG (6.06/0.53)
|   |   |   |   feature1 = classG: classD (10.09/4.48)
|   feature2 = classE
|   |   feature1 = classA
|   |   |   feature6 <= 0.3: classD (30.1/0.17)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature4 = classA: classG (2.8/0.57)
|   |   |   |   |   feature4 = classB: classE (0.0)
|   |   |   |   |   feature4 = classC: classA (0.02/0.0)
|   |   |   |   |   feature4 = classD: classA (0.08/0.0)
|   |   |   |   |   feature4 = classE: classE (33.74/2.13)
|   |   |   |   |   feature4 = classF: classE (0.0)
|   |   |   |   |   feature4 = classG: classD (1.18/0.07)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature9 <= 0.5667: classA (9.08/3.53)
|   |   |   |   |   |   feature9 > 0.5667: classG (12.44/1.58)
|   |   |   |   |   feature6 > 0.6667: classA (22.33/3.51)
|   |   feature1 = classB
|   |   |   feature4 = classA: classA (30.21/0.7)
|   |   |   feature4 = classB: classA (4.18/1.7)
|   |   |   feature4 = classC: classB (2.42/0.16)
|   |   |   feature4 = classD: classD (0.55/0.04)
|   |   |   feature4 = classE: classA (0.0)
|   |   |   feature4 = classF: classA (0.0)
|   |   |   feature4 = classG: classA (0.0)
|   |   feature1 = classC
|   |   |   feature6 <= 0.8667
|   |   |   |   feature6 <= 0.2667: classC (2.26/1.15)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.7: classD (11.72/5.21)
|   |   |   |   |   feature6 > 0.7: classB (3.57/1.34)
|   |   |   feature6 > 0.8667: classC (12.47/1.58)
|   |   feature1 = classD
|   |   |   feature4 = classA: classD (5.7/0.67)
|   |   |   feature4 = classB: classD (0.55/0.05)
|   |   |   feature4 = classC
|   |   |   |   feature6 <= 0.7: classE (3.9/1.58)
|   |   |   |   feature6 > 0.7: classC (2.18/1.07)
|   |   |   feature4 = classD
|   |   |   |   feature9 <= 0.3333: classE (6.94/1.58)
|   |   |   |   feature9 > 0.3333
|   |   |   |   |   feature6 <= 0.9: classD (33.66/6.85)
|   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   feature9 <= 0.5333: classF (5.61/0.0)
|   |   |   |   |   |   feature9 > 0.5333: classD (2.41/0.01)
|   |   |   feature4 = classE
|   |   |   |   feature6 <= 0.3333
|   |   |   |   |   feature6 <= 0.3: classA (6.09/0.82)
|   |   |   |   |   feature6 > 0.3: classG (3.5/1.27)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.4333: classD (31.46/0.52)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classF (6.7/2.61)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature8 <= 0.5333: classE (2.13/0.1)
|   |   |   |   |   |   |   feature8 > 0.5333: classD (36.63/1.95)
|   |   |   feature4 = classF
|   |   |   |   feature9 <= 0.4333: classD (5.01/0.43)
|   |   |   |   feature9 > 0.4333: classF (4.21/0.65)
|   |   |   feature4 = classG
|   |   |   |   feature9 <= 0.3333: classE (6.32/0.96)
|   |   |   |   feature9 > 0.3333: classG (3.44/0.75)
|   |   feature1 = classE
|   |   |   feature5 = classA: classE (1.79/0.63)
|   |   |   feature5 = classB: classE (0.0)
|   |   |   feature5 = classC: classE (0.1/0.01)
|   |   |   feature5 = classD
|   |   |   |   feature9 <= 0.3667: classA (29.14/1.27)
|   |   |   |   feature9 > 0.3667: classD (28.14/1.1)
|   |   |   feature5 = classE
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   feature6 <= 0.3333: classA (6.44/1.18)
|   |   |   |   |   |   feature6 > 0.3333: classD (45.69/2.86)
|   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   feature9 <= 0.4333: classE (91.2/5.68)
|   |   |   |   |   |   feature9 > 0.4333: classD (17.07/4.35)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature9 <= 0.4667: classD (9.2/1.9)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature9 <= 0.7: classE (265.07/8.2)
|   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   |   |   feature8 <= 0.5333: classE (5.69/1.99)
|   |   |   |   |   |   |   |   feature8 > 0.5333: classD (15.65/6.21)
|   |   |   |   |   |   |   feature9 > 0.9: classE (32.34/0.34)
|   |   |   feature5 = classF: classD (1.95/0.34)
|   |   |   feature5 = classG: classE (0.73/0.34)
|   |   feature1 = classF
|   |   |   feature4 = classA: classA (8.86/4.62)
|   |   |   feature4 = classB: classB (2.93/1.82)
|   |   |   feature4 = classC: classF (0.11/0.02)
|   |   |   feature4 = classD
|   |   |   |   feature9 <= 0.8: classD (3.49/0.87)
|   |   |   |   feature9 > 0.8: classA (2.93/0.4)
|   |   |   feature4 = classE
|   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   feature5 = classD: classD (3.87/1.24)
|   |   |   |   feature5 = classE: classE (9.6/2.52)
|   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   feature5 = classG: classE (0.0)
|   |   |   feature4 = classF
|   |   |   |   feature9 <= 0.5333: classG (5.74/2.92)
|   |   |   |   feature9 > 0.5333: classD (3.18/1.58)
|   |   |   feature4 = classG: classG (3.12/0.57)
|   |   feature1 = classG
|   |   |   feature4 = classA: classF (5.41/1.62)
|   |   |   feature4 = classB: classD (0.0)
|   |   |   feature4 = classC: classD (0.0)
|   |   |   feature4 = classD: classD (0.63/0.12)
|   |   |   feature4 = classE
|   |   |   |   feature6 <= 0.4333: classA (12.94/1.28)
|   |   |   |   feature6 > 0.4333: classD (32.67/4.96)
|   |   |   feature4 = classF: classF (12.89/1.31)
|   |   |   feature4 = classG: classG (8.64/0.7)
|   feature2 = classF
|   |   feature4 = classA
|   |   |   feature1 = classA: classA (11.88/2.26)
|   |   |   feature1 = classB: classB (0.23/0.1)
|   |   |   feature1 = classC: classD (0.62/0.44)
|   |   |   feature1 = classD: classD (1.06/0.53)
|   |   |   feature1 = classE: classD (0.68/0.25)
|   |   |   feature1 = classF: classE (12.64/1.58)
|   |   |   feature1 = classG: classA (12.21/1.67)
|   |   feature4 = classB: classA (1.76/0.96)
|   |   feature4 = classC: classE (1.82/1.29)
|   |   feature4 = classD
|   |   |   feature6 <= 0.7333: classD (40.85/4.84)
|   |   |   feature6 > 0.7333: classA (7.81/2.65)
|   |   feature4 = classE
|   |   |   feature5 = classA: classE (0.11/0.01)
|   |   |   feature5 = classB: classE (0.0)
|   |   |   feature5 = classC: classE (0.0)
|   |   |   feature5 = classD: classD (5.97/0.58)
|   |   |   feature5 = classE
|   |   |   |   feature1 = classA: classD (0.42/0.17)
|   |   |   |   feature1 = classB: classA (0.07/0.01)
|   |   |   |   feature1 = classC: classD (0.32/0.21)
|   |   |   |   feature1 = classD: classG (0.74/0.27)
|   |   |   |   feature1 = classE: classD (2.05/0.41)
|   |   |   |   feature1 = classF: classE (21.63/0.36)
|   |   |   |   feature1 = classG: classA (0.58/0.39)
|   |   |   feature5 = classF: classF (3.11/1.42)
|   |   |   feature5 = classG: classE (0.0)
|   |   feature4 = classF
|   |   |   feature1 = classA: classA (5.49/0.61)
|   |   |   feature1 = classB: classA (0.12/0.02)
|   |   |   feature1 = classC: classD (1.81/0.61)
|   |   |   feature1 = classD: classF (1.65/0.24)
|   |   |   feature1 = classE
|   |   |   |   feature6 <= 0.5333: classD (2.77/1.06)
|   |   |   |   feature6 > 0.5333: classA (10.88/0.25)
|   |   |   feature1 = classF: classF (18.16/2.97)
|   |   |   feature1 = classG: classF (1.47/0.07)
|   |   feature4 = classG
|   |   |   feature6 <= 0.5333: classD (60.81/3.53)
|   |   |   feature6 > 0.5333: classG (7.25/2.42)
|   feature2 = classG
|   |   feature9 <= 0.7
|   |   |   feature9 <= 0.5
|   |   |   |   feature1 = classA: classA (1.87/0.71)
|   |   |   |   feature1 = classB: classA (0.13/0.07)
|   |   |   |   feature1 = classC: classD (1.42/0.82)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature9 <= 0.4333: classE (2.32/1.35)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature9 <= 0.4667: classF (2.49/0.05)
|   |   |   |   |   |   feature9 > 0.4667: classG (5.35/1.63)
|   |   |   |   feature1 = classE: classG (4.03/1.46)
|   |   |   |   feature1 = classF: classA (2.89/1.34)
|   |   |   |   feature1 = classG: classG (8.44/0.67)
|   |   |   feature9 > 0.5
|   |   |   |   feature1 = classA
|   |   |   |   |   feature6 <= 0.4: classD (57.04/0.39)
|   |   |   |   |   feature6 > 0.4: classG (9.78/1.25)
|   |   |   |   feature1 = classB: classA (0.8/0.2)
|   |   |   |   feature1 = classC: classD (31.35/2.46)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classG (2.26/1.12)
|   |   |   |   |   |   feature6 > 0.4333: classF (2.99/0.9)
|   |   |   |   |   feature6 > 0.5: classD (2.7/0.59)
|   |   |   |   feature1 = classE: classD (32.37/2.52)
|   |   |   |   feature1 = classF: classG (5.11/1.73)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   feature7 <= 0.72: classD (115.54/4.73)
|   |   |   |   |   |   feature7 > 0.72: classG (3.58/0.1)
|   |   |   |   |   feature6 > 0.7: classG (6.72/0.04)
|   |   feature9 > 0.7
|   |   |   feature1 = classA: classG (4.95/2.14)
|   |   |   feature1 = classB: classB (3.01/1.45)
|   |   |   feature1 = classC: classD (1.76/1.17)
|   |   |   feature1 = classD
|   |   |   |   feature6 <= 0.5333: classG (3.83/1.33)
|   |   |   |   feature6 > 0.5333: classD (2.21/0.48)
|   |   |   feature1 = classE: classG (30.48/1.49)
|   |   |   feature1 = classF: classA (4.21/2.68)
|   |   |   feature1 = classG
|   |   |   |   feature5 = classA: classG (0.52/0.02)
|   |   |   |   feature5 = classB: classG (0.0)
|   |   |   |   feature5 = classC: classG (0.0)
|   |   |   |   feature5 = classD: classG (0.1/0.0)
|   |   |   |   feature5 = classE: classG (2.38/0.07)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature9 <= 0.8: classF (21.92/0.12)
|   |   |   |   |   feature9 > 0.8: classG (2.89/0.04)
|   |   |   |   feature5 = classG: classG (53.53/1.65)
feature3 = classE
|   feature4 = classA
|   |   feature6 <= 0.9333
|   |   |   feature9 <= 0.6
|   |   |   |   feature9 <= 0.4667
|   |   |   |   |   feature1 = classA
|   |   |   |   |   |   feature9 <= 0.4333: classA (7.97/0.31)
|   |   |   |   |   |   feature9 > 0.4333: classD (38.41/3.27)
|   |   |   |   |   feature1 = classB: classB (1.44/0.62)
|   |   |   |   |   feature1 = classC: classD (3.85/2.94)
|   |   |   |   |   feature1 = classD: classA (10.78/3.73)
|   |   |   |   |   feature1 = classE
|   |   |   |   |   |   feature6 <= 0.4333: classD (44.57/8.63)
|   |   |   |   |   |   feature6 > 0.4333: classE (8.3/1.18)
|   |   |   |   |   feature1 = classF
|   |   |   |   |   |   feature9 <= 0.3333: classE (9.2/2.15)
|   |   |   |   |   |   feature9 > 0.3333: classA (23.8/1.98)
|   |   |   |   |   feature1 = classG: classA (16.29/2.18)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature1 = classA
|   |   |   |   |   |   feature6 <= 0.6: classG (40.9/5.37)
|   |   |   |   |   |   feature6 > 0.6: classA (4.2/0.57)
|   |   |   |   |   feature1 = classB: classA (0.12/0.03)
|   |   |   |   |   feature1 = classC: classC (2.19/1.38)
|   |   |   |   |   feature1 = classD: classD (2.41/1.25)
|   |   |   |   |   feature1 = classE: classE (8.71/1.6)
|   |   |   |   |   feature1 = classF: classF (1.87/1.19)
|   |   |   |   |   feature1 = classG: classG (0.98/0.52)
|   |   |   feature9 > 0.6
|   |   |   |   feature1 = classA
|   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   feature8 <= 0.8667: classA (16.88/0.35)
|   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   feature6 <= 0.8: classE (175.77/9.14)
|   |   |   |   |   |   |   feature6 > 0.8: classA (5.1/0.02)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature6 <= 0.9
|   |   |   |   |   |   |   feature6 <= 0.4: classE (9.61/0.48)
|   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   |   |   |   feature6 <= 0.7667: classD (10.04/2.94)
|   |   |   |   |   |   |   |   |   feature6 > 0.7667: classA (3.86/0.02)
|   |   |   |   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.7333: classE (4.89/0.33)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.7333: classA (65.35/5.37)
|   |   |   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.7: classC (9.02/1.96)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.7: classA (37.02/0.16)
|   |   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   |   feature7 <= 0.4: classA (2.56/0.01)
|   |   |   |   |   |   |   |   feature7 > 0.4: classE (28.51/0.81)
|   |   |   |   |   |   |   feature7 > 0.48: classA (11.29/0.05)
|   |   |   |   feature1 = classB: classA (29.04/0.46)
|   |   |   |   feature1 = classC
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.3: classA (2.69/1.82)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.5333: classE (3.64/1.03)
|   |   |   |   |   |   |   feature6 > 0.5333: classD (2.43/0.69)
|   |   |   |   |   feature6 > 0.7333: classB (2.17/0.43)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.4: classE (2.9/0.14)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.4667: classF (8.14/2.01)
|   |   |   |   |   |   feature6 > 0.4667: classG (4.2/2.46)
|   |   |   |   feature1 = classE
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature7 <= 0.56: classG (15.11/0.32)
|   |   |   |   |   |   feature7 > 0.56: classE (4.4/0.22)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   |   feature9 <= 0.7333: classD (4.04/0.38)
|   |   |   |   |   |   |   |   feature9 > 0.7333: classE (10.14/1.74)
|   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (0.0)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature7 <= 0.6: classE (3.6/1.43)
|   |   |   |   |   |   |   |   feature7 > 0.6: classD (11.77/0.74)
|   |   |   |   |   |   |   feature5 = classF: classE (1.69/0.67)
|   |   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   |   feature6 > 0.5: classE (22.55/1.84)
|   |   |   |   feature1 = classF
|   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   feature6 <= 0.5333: classE (20.48/10.89)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature2 = classA: classF (2.1/0.06)
|   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   |   |   feature2 = classE: classE (0.0)
|   |   |   |   |   |   |   feature2 = classF: classE (14.6/0.49)
|   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   feature9 > 0.8667: classA (33.44/4.09)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classE (4.15/0.1)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classF (4.88/0.51)
|   |   |   |   |   |   |   feature6 > 0.5: classE (9.53/1.46)
|   |   |   |   |   |   feature6 > 0.5667: classA (7.95/0.39)
|   |   |   |   |   feature6 > 0.6333: classF (23.23/1.96)
|   |   feature6 > 0.9333
|   |   |   feature9 <= 0.6
|   |   |   |   feature1 = classA: classA (6.29/0.69)
|   |   |   |   feature1 = classB: classA (0.1/0.03)
|   |   |   |   feature1 = classC: classC (1.02/0.0)
|   |   |   |   feature1 = classD: classA (0.0)
|   |   |   |   feature1 = classE: classE (4.56/0.5)
|   |   |   |   feature1 = classF: classA (0.0)
|   |   |   |   feature1 = classG: classA (1.73/0.21)
|   |   |   feature9 > 0.6: classA (206.1/1.67)
|   feature4 = classB
|   |   feature1 = classA: classB (8.5/1.3)
|   |   feature1 = classB
|   |   |   feature7 <= 0.72
|   |   |   |   feature9 <= 0.9667: classB (3.37/1.02)
|   |   |   |   feature9 > 0.9667: classA (8.85/0.77)
|   |   |   feature7 > 0.72
|   |   |   |   feature6 <= 0.9667
|   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   feature6 <= 0.9333: classB (2.02/0.09)
|   |   |   |   |   |   feature6 > 0.9333: classA (6.47/0.4)
|   |   |   |   |   feature9 > 0.9333: classB (5.4/0.33)
|   |   |   |   feature6 > 0.9667: classB (60.87/6.46)
|   |   feature1 = classC: classG (2.79/1.78)
|   |   feature1 = classD: classF (1.79/0.76)
|   |   feature1 = classE: classA (15.9/1.35)
|   |   feature1 = classF
|   |   |   feature6 <= 0.4: classB (7.83/0.77)
|   |   |   feature6 > 0.4: classE (7.7/0.65)
|   |   feature1 = classG: classF (1.16/0.42)
|   feature4 = classC
|   |   feature1 = classA: classC (23.65/2.14)
|   |   feature1 = classB: classB (16.63/2.04)
|   |   feature1 = classC
|   |   |   feature6 <= 0.7: classD (25.05/3.11)
|   |   |   feature6 > 0.7: classC (29.57/0.52)
|   |   feature1 = classD
|   |   |   feature9 <= 0.5333
|   |   |   |   feature6 <= 0.8667: classE (24.9/1.53)
|   |   |   |   feature6 > 0.8667: classC (7.09/0.03)
|   |   |   feature9 > 0.5333
|   |   |   |   feature6 <= 0.5667: classC (22.67/1.35)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature9 <= 0.8: classC (7.35/0.3)
|   |   |   |   |   feature9 > 0.8: classA (7.19/0.14)
|   |   feature1 = classE: classE (6.39/2.56)
|   |   feature1 = classF: classA (3.1/2.07)
|   |   feature1 = classG: classF (1.32/0.35)
|   feature4 = classD
|   |   feature6 <= 0.3333
|   |   |   feature1 = classA: classD (0.84/0.05)
|   |   |   feature1 = classB: classA (0.0)
|   |   |   feature1 = classC: classA (2.45/1.66)
|   |   |   feature1 = classD: classE (1.6/0.01)
|   |   |   feature1 = classE: classG (0.8/0.0)
|   |   |   feature1 = classF: classA (45.7/2.3)
|   |   |   feature1 = classG: classG (0.13/0.0)
|   |   feature6 > 0.3333
|   |   |   feature6 <= 0.9
|   |   |   |   feature8 <= 0.6
|   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC: classD (0.1/0.01)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature1 = classA: classG (0.23/0.13)
|   |   |   |   |   |   |   feature1 = classB: classA (0.04/0.0)
|   |   |   |   |   |   |   feature1 = classC: classD (1.65/0.19)
|   |   |   |   |   |   |   feature1 = classD: classD (11.04/3.12)
|   |   |   |   |   |   |   feature1 = classE: classD (6.53/0.85)
|   |   |   |   |   |   |   feature1 = classF: classD (1.29/0.3)
|   |   |   |   |   |   |   feature1 = classG: classG (5.45/0.2)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature9 <= 0.7667
|   |   |   |   |   |   |   |   feature6 <= 0.7333: classE (67.89/8.2)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classD (3.19/0.28)
|   |   |   |   |   |   |   feature9 > 0.7667
|   |   |   |   |   |   |   |   feature9 <= 0.9667: classD (6.42/0.34)
|   |   |   |   |   |   |   |   feature9 > 0.9667: classC (10.54/0.87)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature1 = classA: classA (3.45/1.79)
|   |   |   |   |   |   feature1 = classB: classA (0.33/0.03)
|   |   |   |   |   |   feature1 = classC: classD (5.04/1.53)
|   |   |   |   |   |   feature1 = classD
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classE (9.8/0.92)
|   |   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classG (5.97/0.72)
|   |   |   |   |   |   |   |   |   feature6 > 0.5667: classE (5.04/1.5)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classF (2.12/0.42)
|   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   feature9 <= 0.6667: classD (84.08/0.82)
|   |   |   |   |   |   |   |   |   feature9 > 0.6667: classE (5.83/0.67)
|   |   |   |   |   |   feature1 = classE
|   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   feature8 <= 0.5333: classD (84.83/2.06)
|   |   |   |   |   |   |   |   feature8 > 0.5333: classE (3.08/1.03)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (7.57/0.63)
|   |   |   |   |   |   feature1 = classF: classA (1.85/1.25)
|   |   |   |   |   |   feature1 = classG: classF (1.82/0.33)
|   |   |   |   |   feature2 = classF: classF (4.16/0.91)
|   |   |   |   |   feature2 = classG
|   |   |   |   |   |   feature6 <= 0.3667: classD (57.62/0.38)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.6: classG (6.38/3.9)
|   |   |   |   |   |   |   feature6 > 0.6: classD (2.23/0.97)
|   |   |   |   feature8 > 0.6
|   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   feature1 = classA: classA (3.4/1.44)
|   |   |   |   |   |   feature1 = classB: classA (0.27/0.03)
|   |   |   |   |   |   feature1 = classC: classD (4.22/1.23)
|   |   |   |   |   |   feature1 = classD
|   |   |   |   |   |   |   feature5 = classA: classD (3.27/0.58)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classD (0.15/0.03)
|   |   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   |   feature7 <= 0.6: classE (6.99/2.13)
|   |   |   |   |   |   |   |   feature7 > 0.6: classD (3.27/0.58)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (9.17/0.86)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classG (4.0/0.77)
|   |   |   |   |   |   |   |   feature9 > 0.5: classE (24.75/2.35)
|   |   |   |   |   |   |   feature5 = classF: classD (0.63/0.11)
|   |   |   |   |   |   |   feature5 = classG: classG (0.1/0.01)
|   |   |   |   |   |   feature1 = classE
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4: classD (5.33/0.03)
|   |   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   |   feature7 <= 0.72: classD (7.98/1.37)
|   |   |   |   |   |   |   |   |   feature7 > 0.72: classE (4.06/1.01)
|   |   |   |   |   |   |   feature6 > 0.4667: classE (91.59/3.48)
|   |   |   |   |   |   feature1 = classF: classE (3.4/1.87)
|   |   |   |   |   |   feature1 = classG
|   |   |   |   |   |   |   feature6 <= 0.5: classF (2.32/1.12)
|   |   |   |   |   |   |   feature6 > 0.5: classG (2.78/0.01)
|   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   feature9 <= 0.9667: classD (5.04/0.27)
|   |   |   |   |   |   feature9 > 0.9667: classC (4.9/0.43)
|   |   |   feature6 > 0.9
|   |   |   |   feature1 = classA: classA (0.15/0.0)
|   |   |   |   feature1 = classB: classA (1.11/0.31)
|   |   |   |   feature1 = classC: classC (15.51/0.07)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature9 <= 0.5: classF (35.44/0.01)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.9333: classC (8.26/1.2)
|   |   |   |   |   |   feature6 > 0.9333: classD (8.54/0.04)
|   |   |   |   feature1 = classE: classE (7.64/0.03)
|   |   |   |   feature1 = classF: classF (0.0)
|   |   |   |   feature1 = classG: classG (0.51/0.0)
|   feature4 = classE
|   |   feature8 <= 0.8
|   |   |   feature1 = classA
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classB (7.72/0.67)
|   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   feature2 = classD: classD (3.88/0.03)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.3: classD (4.41/0.02)
|   |   |   |   |   |   feature6 > 0.3: classE (51.03/1.69)
|   |   |   |   |   feature2 = classF: classA (0.07/0.01)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5667: classB (3.39/1.6)
|   |   |   |   |   |   feature6 > 0.5667: classG (5.42/0.06)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (2.37/0.58)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (3.11/1.32)
|   |   |   |   |   |   feature6 > 0.7: classA (8.28/0.04)
|   |   |   feature1 = classB: classA (4.8/1.1)
|   |   |   feature1 = classC
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.2667: classA (3.62/1.84)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   feature2 = classC: classD (11.15/3.46)
|   |   |   |   |   |   feature2 = classD: classD (0.02/0.01)
|   |   |   |   |   |   feature2 = classE: classE (7.94/3.07)
|   |   |   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   feature6 > 0.7333: classB (3.75/0.18)
|   |   |   feature1 = classD
|   |   |   |   feature6 <= 0.3: classA (31.57/0.34)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature9 <= 0.4333: classD (4.25/0.33)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classG (4.11/0.15)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333: classE (57.48/0.25)
|   |   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classF (7.85/0.98)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667: classG (2.03/0.07)
|   |   |   |   |   |   |   feature6 > 0.5333: classE (87.43/0.78)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature7 <= 0.52: classE (2.2/0.66)
|   |   |   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (29.36/1.53)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4333: classF (5.85/1.84)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classD (57.31/1.77)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classG (2.64/0.16)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classE (4.59/0.53)
|   |   |   |   |   |   feature7 > 0.64: classE (24.47/2.24)
|   |   |   |   |   feature2 = classF: classE (0.78/0.26)
|   |   |   |   |   feature2 = classG: classG (0.14/0.01)
|   |   |   feature1 = classE
|   |   |   |   feature7 <= 0.8
|   |   |   |   |   feature9 <= 0.7
|   |   |   |   |   |   feature6 <= 0.8
|   |   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   |   feature6 <= 0.6333: classE (3.63/0.56)
|   |   |   |   |   |   |   |   |   feature6 > 0.6333: classA (4.21/0.54)
|   |   |   |   |   |   |   |   feature6 > 0.7: classD (27.89/0.19)
|   |   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (3.61/0.09)
|   |   |   |   |   |   |   feature2 = classD
|   |   |   |   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classD: classD (8.01/0.89)
|   |   |   |   |   |   |   |   |   |   feature5 = classE: classE (2.6/0.06)
|   |   |   |   |   |   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   |   |   |   |   feature9 > 0.5333: classD (35.44/0.81)
|   |   |   |   |   |   |   |   feature8 > 0.6: classE (3.01/0.95)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature7 <= 0.48: classE (9.37/1.24)
|   |   |   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   |   |   feature5 = classA: classE (3.26/0.08)
|   |   |   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classD (35.5/0.42)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4667: classE (2.77/0.18)
|   |   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.5667: classE (15.97/2.56)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.5667
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.7: classD (87.24/3.38)
|   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.7: classE (2.09/0.05)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.7333: classE (5.67/1.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.7333: classD (35.7/2.01)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (18.17/0.44)
|   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classD (68.52/2.57)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5667: classE (8.37/0.37)
|   |   |   |   |   |   |   |   |   feature5 = classF: classE (5.73/0.14)
|   |   |   |   |   |   |   |   |   feature5 = classG: classE (0.07/0.0)
|   |   |   |   |   |   |   feature2 = classF: classE (3.32/0.08)
|   |   |   |   |   |   |   feature2 = classG: classE (2.15/0.56)
|   |   |   |   |   |   feature6 > 0.8: classE (27.85/0.14)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.68: classE (3.7/0.75)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.68: classD (4.64/0.71)
|   |   |   |   |   |   |   |   |   feature7 > 0.72: classE (6.07/1.23)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classG (112.38/1.57)
|   |   |   |   |   |   |   feature6 > 0.8333: classD (28.84/1.14)
|   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   feature6 <= 0.7667: classE (33.66/2.72)
|   |   |   |   |   |   |   feature6 > 0.7667
|   |   |   |   |   |   |   |   feature6 <= 0.8
|   |   |   |   |   |   |   |   |   feature8 <= 0.7: classD (84.74/1.64)
|   |   |   |   |   |   |   |   |   feature8 > 0.7: classE (2.55/0.01)
|   |   |   |   |   |   |   |   feature6 > 0.8: classE (19.68/0.09)
|   |   |   |   feature7 > 0.8
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature7 <= 0.88: classE (4.74/1.03)
|   |   |   |   |   |   feature7 > 0.88: classD (6.09/1.83)
|   |   |   |   |   feature6 > 0.4667: classE (151.48/1.33)
|   |   |   feature1 = classF
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.2667: classG (3.59/0.02)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature7 <= 0.76
|   |   |   |   |   |   |   feature7 <= 0.64: classE (5.12/0.68)
|   |   |   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classA (30.53/0.22)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classE (3.9/1.33)
|   |   |   |   |   |   feature7 > 0.76: classE (7.53/0.91)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature7 <= 0.4: classE (17.47/0.33)
|   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   feature9 <= 0.4667: classE (2.68/0.15)
|   |   |   |   |   |   |   feature9 > 0.4667: classD (119.08/3.23)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature5 = classA: classF (0.0)
|   |   |   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   |   |   feature5 = classC: classF (9.84/2.6)
|   |   |   |   |   |   feature5 = classD: classD (0.01/0.0)
|   |   |   |   |   |   feature5 = classE: classE (4.96/1.41)
|   |   |   |   |   |   feature5 = classF: classF (5.51/1.45)
|   |   |   |   |   |   feature5 = classG: classF (0.0)
|   |   |   feature1 = classG
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.2667: classE (55.84/0.43)
|   |   |   |   |   feature9 > 0.2667
|   |   |   |   |   |   feature9 <= 0.5667: classA (10.86/0.29)
|   |   |   |   |   |   feature9 > 0.5667: classE (7.12/0.05)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classF (9.49/0.51)
|   |   |   |   |   feature6 > 0.5: classG (7.07/1.55)
|   |   feature8 > 0.8
|   |   |   feature6 <= 0.6
|   |   |   |   feature5 = classA: classE (14.49/1.87)
|   |   |   |   feature5 = classB: classB (8.28/1.2)
|   |   |   |   feature5 = classC: classF (9.11/1.76)
|   |   |   |   feature5 = classD: classD (25.07/2.96)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature1 = classA
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.2667: classB (31.11/3.4)
|   |   |   |   |   |   |   feature6 > 0.2667: classE (80.88/2.25)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5: classA (27.92/0.12)
|   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (3.19/1.53)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classG (5.02/0.05)
|   |   |   |   |   feature1 = classB: classA (1.73/0.07)
|   |   |   |   |   feature1 = classC
|   |   |   |   |   |   feature6 <= 0.2667: classA (3.36/1.7)
|   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (7.15/1.72)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (7.18/2.26)
|   |   |   |   |   feature1 = classD
|   |   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   |   feature7 <= 0.64: classE (2.23/0.01)
|   |   |   |   |   |   |   feature7 > 0.64: classA (31.88/0.65)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classG (10.97/4.44)
|   |   |   |   |   |   |   |   feature6 > 0.3333: classE (7.5/0.16)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classF (17.0/5.33)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classE (28.6/3.63)
|   |   |   |   |   feature1 = classE
|   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5: classE (5.1/0.34)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5: classD (3.61/0.08)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6: classD (21.86/3.75)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classE (2.25/0.01)
|   |   |   |   |   |   |   |   feature9 > 0.6667: classE (7.56/0.29)
|   |   |   |   |   |   |   feature7 > 0.6: classE (19.94/0.76)
|   |   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature9 <= 0.6: classE (14.59/0.97)
|   |   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   |   feature8 <= 0.8667: classE (7.83/0.7)
|   |   |   |   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (57.01/1.6)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classD (4.56/1.06)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.8: classA (58.79/2.41)
|   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.8: classE (12.0/3.73)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   |   |   feature9 <= 0.9: classE (56.58/0.25)
|   |   |   |   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.84: classB (28.86/1.16)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.84: classE (10.7/0.05)
|   |   |   |   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   |   |   |   feature7 <= 0.96: classE (3.26/0.01)
|   |   |   |   |   |   |   |   |   feature7 > 0.96: classA (29.46/1.76)
|   |   |   |   |   feature1 = classF
|   |   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   |   feature6 <= 0.3: classG (4.35/1.03)
|   |   |   |   |   |   |   feature6 > 0.3: classA (34.7/3.69)
|   |   |   |   |   |   feature6 > 0.3333: classE (35.09/9.07)
|   |   |   |   |   feature1 = classG
|   |   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classA (10.11/0.31)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667: classF (6.48)
|   |   |   |   |   |   |   |   feature6 > 0.5: classA (27.92/0.22)
|   |   |   |   |   |   |   feature9 > 0.5667: classE (3.23/0.5)
|   |   |   |   |   |   feature7 > 0.56: classE (9.4/2.28)
|   |   |   |   feature5 = classF: classE (2.92/1.33)
|   |   |   |   feature5 = classG: classG (0.38/0.11)
|   |   |   feature6 > 0.6
|   |   |   |   feature1 = classA
|   |   |   |   |   feature9 <= 0.8333: classA (49.21/2.3)
|   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   feature8 <= 0.9: classE (29.54/1.21)
|   |   |   |   |   |   feature8 > 0.9: classA (5.95/1.29)
|   |   |   |   feature1 = classB: classB (3.64/1.81)
|   |   |   |   feature1 = classC
|   |   |   |   |   feature6 <= 0.7: classD (3.66/0.08)
|   |   |   |   |   feature6 > 0.7: classB (4.34/0.76)
|   |   |   |   feature1 = classD: classE (16.69/0.46)
|   |   |   |   feature1 = classE: classE (709.88/17.5)
|   |   |   |   feature1 = classF: classF (0.19)
|   |   |   |   feature1 = classG: classG (2.48/0.52)
|   feature4 = classF
|   |   feature9 <= 0.4667
|   |   |   feature5 = classA: classE (38.51/3.98)
|   |   |   feature5 = classB: classE (0.0)
|   |   |   feature5 = classC: classA (16.1/1.78)
|   |   |   feature5 = classD: classD (0.6/0.07)
|   |   |   feature5 = classE
|   |   |   |   feature9 <= 0.3333
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature1 = classA: classC (6.37/1.52)
|   |   |   |   |   |   feature1 = classB: classA (0.08/0.0)
|   |   |   |   |   |   feature1 = classC: classE (0.63/0.39)
|   |   |   |   |   |   feature1 = classD: classF (1.02/0.48)
|   |   |   |   |   |   feature1 = classE: classE (2.59/0.55)
|   |   |   |   |   |   feature1 = classF: classA (0.71/0.41)
|   |   |   |   |   |   feature1 = classG: classF (0.49/0.11)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.6667: classE (55.93/0.35)
|   |   |   |   |   |   feature6 > 0.6667: classA (2.08/0.69)
|   |   |   |   feature9 > 0.3333
|   |   |   |   |   feature7 <= 0.48: classE (33.86/2.24)
|   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   feature8 <= 0.6333: classD (94.95/10.68)
|   |   |   |   |   |   feature8 > 0.6333: classE (7.96/0.51)
|   |   |   feature5 = classF: classA (5.24/3.27)
|   |   |   feature5 = classG: classE (33.31/4.53)
|   |   feature9 > 0.4667
|   |   |   feature1 = classA
|   |   |   |   feature6 <= 0.4: classE (55.94/0.53)
|   |   |   |   feature6 > 0.4: classA (4.44/1.65)
|   |   |   feature1 = classB: classA (0.68/0.14)
|   |   |   feature1 = classC: classD (3.2/2.11)
|   |   |   feature1 = classD: classF (28.03/2.93)
|   |   |   feature1 = classE
|   |   |   |   feature5 = classA: classE (5.08/2.03)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC: classF (0.0)
|   |   |   |   feature5 = classD: classF (0.0)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classF (3.47/0.34)
|   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   feature2 = classE: classE (7.54/0.94)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   feature5 = classF: classF (9.56/1.18)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   feature1 = classF
|   |   |   |   feature2 = classA: classF (2.52/0.53)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.6: classE (32.52/2.29)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.6333: classG (9.0/1.09)
|   |   |   |   |   |   feature6 > 0.6333: classF (3.05/1.52)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.6333: classG (6.71/0.86)
|   |   |   |   |   |   feature6 > 0.6333: classF (2.08)
|   |   |   |   |   feature9 > 0.5333: classF (23.5/0.72)
|   |   |   |   feature2 = classG: classG (0.17/0.01)
|   |   |   feature1 = classG
|   |   |   |   feature6 <= 0.5: classF (17.09/1.55)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature2 = classA: classA (0.0)
|   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   |   feature2 = classE: classA (28.41/0.71)
|   |   |   |   |   feature2 = classF: classF (1.59/0.03)
|   |   |   |   |   feature2 = classG: classG (2.48/0.01)
|   feature4 = classG
|   |   feature5 = classA
|   |   |   feature6 <= 0.4
|   |   |   |   feature1 = classA: classD (2.61/0.15)
|   |   |   |   feature1 = classB: classE (0.0)
|   |   |   |   feature1 = classC: classE (0.92/0.55)
|   |   |   |   feature1 = classD: classG (4.95/0.38)
|   |   |   |   feature1 = classE: classE (1.79/0.73)
|   |   |   |   feature1 = classF: classA (0.91/0.37)
|   |   |   |   feature1 = classG: classE (28.55/0.85)
|   |   |   feature6 > 0.4
|   |   |   |   feature1 = classA
|   |   |   |   |   feature9 <= 0.8: classA (4.53/0.3)
|   |   |   |   |   feature9 > 0.8: classG (12.77/0.95)
|   |   |   |   feature1 = classB: classA (0.45/0.09)
|   |   |   |   feature1 = classC: classD (1.1/0.56)
|   |   |   |   feature1 = classD: classE (9.59/2.54)
|   |   |   |   feature1 = classE
|   |   |   |   |   feature6 <= 0.4333: classA (27.82/0.12)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.6667: classG (6.81/2.25)
|   |   |   |   |   |   feature6 > 0.6667: classE (5.97/0.39)
|   |   |   |   feature1 = classF: classG (6.31/1.39)
|   |   |   |   feature1 = classG
|   |   |   |   |   feature6 <= 0.5333: classA (30.6/1.89)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature9 <= 0.7333: classA (12.95/1.96)
|   |   |   |   |   |   feature9 > 0.7333: classG (4.71/0.02)
|   |   feature5 = classB: classG (0.0)
|   |   feature5 = classC: classC (0.03/0.01)
|   |   feature5 = classD: classG (24.1/2.66)
|   |   feature5 = classE
|   |   |   feature1 = classA
|   |   |   |   feature6 <= 0.6667: classG (3.58/0.73)
|   |   |   |   feature6 > 0.6667: classA (6.82/0.07)
|   |   |   feature1 = classB: classA (0.11/0.02)
|   |   |   feature1 = classC: classD (0.48/0.31)
|   |   |   feature1 = classD: classG (2.3/1.06)
|   |   |   feature1 = classE: classE (13.22/2.43)
|   |   |   feature1 = classF: classE (3.9/1.87)
|   |   |   feature1 = classG
|   |   |   |   feature9 <= 0.5333: classE (2.42/0.9)
|   |   |   |   feature9 > 0.5333: classG (6.07/0.18)
|   |   feature5 = classF
|   |   |   feature1 = classA: classG (3.82/0.84)
|   |   |   feature1 = classB: classA (0.11/0.02)
|   |   |   feature1 = classC: classD (0.5/0.32)
|   |   |   feature1 = classD: classG (1.73/0.43)
|   |   |   feature1 = classE: classG (1.57/0.38)
|   |   |   feature1 = classF: classG (1.8/0.49)
|   |   |   feature1 = classG: classF (31.19/2.1)
|   |   feature5 = classG
|   |   |   feature6 <= 0.6
|   |   |   |   feature6 <= 0.5667: classG (42.86/13.72)
|   |   |   |   feature6 > 0.5667: classD (58.71/3.31)
|   |   |   feature6 > 0.6: classG (135.95/8.86)
feature3 = classF
|   feature5 = classA
|   |   feature8 <= 0.5667
|   |   |   feature1 = classA
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature6 <= 0.6: classG (5.45/3.42)
|   |   |   |   |   feature6 > 0.6: classE (59.53/3.87)
|   |   |   |   feature6 > 0.8667: classA (19.47/0.11)
|   |   |   feature1 = classB: classB (2.17/1.04)
|   |   |   feature1 = classC: classD (5.09/3.04)
|   |   |   feature1 = classD
|   |   |   |   feature6 <= 0.5: classF (6.54/3.97)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classD (28.12/0.41)
|   |   |   |   |   feature6 > 0.5333: classF (3.36/2.08)
|   |   |   feature1 = classE
|   |   |   |   feature4 = classA: classD (30.86/1.87)
|   |   |   |   feature4 = classB: classA (0.28/0.02)
|   |   |   |   feature4 = classC: classE (0.01/0.0)
|   |   |   |   feature4 = classD: classD (1.12/0.07)
|   |   |   |   feature4 = classE: classE (2.67/0.67)
|   |   |   |   feature4 = classF: classF (4.1/0.26)
|   |   |   |   feature4 = classG: classE (1.19/0.58)
|   |   |   feature1 = classF
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.4667: classA (3.85/2.07)
|   |   |   |   |   feature6 > 0.4667: classG (2.67/1.14)
|   |   |   |   feature6 > 0.6333: classF (18.05/0.02)
|   |   |   feature1 = classG
|   |   |   |   feature4 = classA
|   |   |   |   |   feature6 <= 0.5: classE (3.23/1.2)
|   |   |   |   |   feature6 > 0.5: classD (29.24/1.54)
|   |   |   |   feature4 = classB: classD (0.0)
|   |   |   |   feature4 = classC: classG (0.0/0.0)
|   |   |   |   feature4 = classD: classG (0.02/0.0)
|   |   |   |   feature4 = classE: classA (0.58/0.32)
|   |   |   |   feature4 = classF: classF (0.1/0.02)
|   |   |   |   feature4 = classG: classA (2.8/1.41)
|   |   feature8 > 0.5667
|   |   |   feature4 = classA
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature8 <= 0.7667
|   |   |   |   |   |   feature1 = classA
|   |   |   |   |   |   |   feature6 <= 0.4: classA (29.75/1.99)
|   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   feature6 <= 0.6333: classG (4.22/1.31)
|   |   |   |   |   |   |   |   feature6 > 0.6333: classA (2.54/0.71)
|   |   |   |   |   |   feature1 = classB: classA (0.34/0.05)
|   |   |   |   |   |   feature1 = classC: classD (2.75/1.59)
|   |   |   |   |   |   feature1 = classD: classF (3.65/1.61)
|   |   |   |   |   |   feature1 = classE: classD (4.55/2.58)
|   |   |   |   |   |   feature1 = classF
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (31.98/2.06)
|   |   |   |   |   |   |   feature9 > 0.7333: classF (5.27/1.19)
|   |   |   |   |   |   feature1 = classG: classF (6.44/0.69)
|   |   |   |   |   feature8 > 0.7667
|   |   |   |   |   |   feature1 = classA
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.6667: classG (2.84/0.62)
|   |   |   |   |   |   |   |   feature9 > 0.6667: classF (19.34/0.33)
|   |   |   |   |   |   |   feature6 > 0.5333: classA (6.86/2.38)
|   |   |   |   |   |   feature1 = classB: classA (0.37/0.05)
|   |   |   |   |   |   feature1 = classC: classD (3.0/1.73)
|   |   |   |   |   |   feature1 = classD: classF (7.04/1.76)
|   |   |   |   |   |   feature1 = classE: classD (4.96/2.81)
|   |   |   |   |   |   feature1 = classF: classF (45.57/7.11)
|   |   |   |   |   |   feature1 = classG: classF (9.8/1.78)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature1 = classA
|   |   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   |   feature9 <= 0.6333: classF (111.84/0.54)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature9 <= 0.9667: classA (5.93/0.88)
|   |   |   |   |   |   |   |   feature9 > 0.9667
|   |   |   |   |   |   |   |   |   feature7 <= 0.92: classF (27.97/0.15)
|   |   |   |   |   |   |   |   |   feature7 > 0.92
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.9333: classA (2.55/0.01)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.9333: classF (114.0/2.69)
|   |   |   |   |   |   feature6 > 0.8333: classA (58.92/0.35)
|   |   |   |   |   feature1 = classB: classA (0.94/0.34)
|   |   |   |   |   feature1 = classC: classB (1.51/0.3)
|   |   |   |   |   feature1 = classD: classF (2.12/0.08)
|   |   |   |   |   feature1 = classE: classE (0.11/0.0)
|   |   |   |   |   feature1 = classF: classF (32.13/0.05)
|   |   |   |   |   feature1 = classG: classG (0.56/0.13)
|   |   |   feature4 = classB: classA (6.3/3.67)
|   |   |   feature4 = classC
|   |   |   |   feature1 = classA: classC (1.89/0.15)
|   |   |   |   feature1 = classB: classB (1.74/0.03)
|   |   |   |   feature1 = classC: classD (2.48/0.73)
|   |   |   |   feature1 = classD: classE (4.51/2.78)
|   |   |   |   feature1 = classE: classD (0.14/0.09)
|   |   |   |   feature1 = classF: classF (0.18/0.11)
|   |   |   |   feature1 = classG: classF (0.09/0.03)
|   |   |   feature4 = classD
|   |   |   |   feature1 = classA: classA (0.25/0.17)
|   |   |   |   feature1 = classB: classA (0.06/0.01)
|   |   |   |   feature1 = classC: classC (3.22/1.17)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature9 <= 0.4667: classF (4.68/0.29)
|   |   |   |   |   feature9 > 0.4667: classG (3.22/1.49)
|   |   |   |   feature1 = classE: classD (3.75/0.25)
|   |   |   |   feature1 = classF: classF (6.1/1.92)
|   |   |   |   feature1 = classG: classF (0.21/0.09)
|   |   |   feature4 = classE
|   |   |   |   feature1 = classA: classD (1.07/0.19)
|   |   |   |   feature1 = classB: classA (0.04/0.01)
|   |   |   |   feature1 = classC: classD (1.04/0.13)
|   |   |   |   feature1 = classD: classG (2.04/0.29)
|   |   |   |   feature1 = classE: classE (3.97/2.37)
|   |   |   |   feature1 = classF: classF (3.61/0.99)
|   |   |   |   feature1 = classG: classA (1.95/1.1)
|   |   |   feature4 = classF: classF (131.21/10.49)
|   |   |   feature4 = classG
|   |   |   |   feature1 = classA
|   |   |   |   |   feature9 <= 0.8: classA (2.62/0.98)
|   |   |   |   |   feature9 > 0.8: classG (4.71/0.35)
|   |   |   |   feature1 = classB: classA (0.11/0.02)
|   |   |   |   feature1 = classC: classD (0.51/0.33)
|   |   |   |   feature1 = classD
|   |   |   |   |   feature6 <= 0.4667: classG (2.17/0.41)
|   |   |   |   |   feature6 > 0.4667: classE (3.67/0.17)
|   |   |   |   feature1 = classE: classG (2.97/1.22)
|   |   |   |   feature1 = classF: classF (16.56/2.11)
|   |   |   |   feature1 = classG: classA (7.57/2.9)
|   feature5 = classB
|   |   feature1 = classA: classB (16.12/2.44)
|   |   feature1 = classB
|   |   |   feature6 <= 0.4667: classA (5.06/0.28)
|   |   |   feature6 > 0.4667: classB (38.02/0.44)
|   |   feature1 = classC: classD (1.71/1.1)
|   |   feature1 = classD: classF (2.53/1.39)
|   |   feature1 = classE: classD (2.01/1.18)
|   |   feature1 = classF: classA (1.93/1.25)
|   |   feature1 = classG: classF (1.19/0.58)
|   feature5 = classC
|   |   feature1 = classA
|   |   |   feature9 <= 0.5667: classC (6.76/1.71)
|   |   |   feature9 > 0.5667: classG (2.87/1.37)
|   |   feature1 = classB: classC (58.31/2.18)
|   |   feature1 = classC
|   |   |   feature7 <= 0.6: classD (6.16/0.94)
|   |   |   feature7 > 0.6: classC (23.87/1.76)
|   |   feature1 = classD
|   |   |   feature9 <= 0.4333: classA (6.36/1.83)
|   |   |   feature9 > 0.4333: classF (4.23/2.39)
|   |   feature1 = classE: classA (18.79/4.33)
|   |   feature1 = classF
|   |   |   feature6 <= 0.4667: classA (2.65/1.39)
|   |   |   feature6 > 0.4667: classF (11.75/2.07)
|   |   feature1 = classG
|   |   |   feature6 <= 0.4667: classA (9.57/0.33)
|   |   |   feature6 > 0.4667: classF (2.25/0.89)
|   feature5 = classD
|   |   feature4 = classA: classA (3.58/2.53)
|   |   feature4 = classB: classA (0.82/0.48)
|   |   feature4 = classC: classE (6.36/1.55)
|   |   feature4 = classD
|   |   |   feature1 = classA: classA (0.55/0.34)
|   |   |   feature1 = classB: classA (0.12/0.02)
|   |   |   feature1 = classC: classC (1.12/0.6)
|   |   |   feature1 = classD
|   |   |   |   feature9 <= 0.6: classD (5.29/0.9)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature7 <= 0.72: classC (18.33/4.72)
|   |   |   |   |   feature7 > 0.72: classD (5.66/0.16)
|   |   |   feature1 = classE: classD (6.12/0.29)
|   |   |   feature1 = classF: classD (1.1/0.63)
|   |   |   feature1 = classG: classG (5.19/0.59)
|   |   feature4 = classE: classD (32.02/3.06)
|   |   feature4 = classF: classF (1.53/0.55)
|   |   feature4 = classG: classG (13.01/1.3)
|   feature5 = classE
|   |   feature1 = classA
|   |   |   feature6 <= 0.4333: classE (30.24/3.02)
|   |   |   feature6 > 0.4333: classA (12.96/6.99)
|   |   feature1 = classB: classB (3.76/1.58)
|   |   feature1 = classC: classD (7.83/4.75)
|   |   feature1 = classD
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3: classA (4.81/0.28)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.3333: classG (2.4/0.86)
|   |   |   |   |   |   feature6 > 0.3333: classD (2.41/1.19)
|   |   |   |   feature6 > 0.4333: classE (65.32/4.83)
|   |   |   feature6 > 0.5333
|   |   |   |   feature4 = classA: classD (0.08/0.02)
|   |   |   |   feature4 = classB: classC (0.0)
|   |   |   |   feature4 = classC: classC (15.66/1.28)
|   |   |   |   feature4 = classD
|   |   |   |   |   feature9 <= 0.4667: classF (2.03/0.1)
|   |   |   |   |   feature9 > 0.4667: classD (2.15/0.78)
|   |   |   |   feature4 = classE: classD (0.53/0.0)
|   |   |   |   feature4 = classF: classD (0.01/0.0)
|   |   |   |   feature4 = classG: classF (0.44/0.02)
|   |   feature1 = classE
|   |   |   feature4 = classA
|   |   |   |   feature6 <= 0.3333: classA (5.51/0.97)
|   |   |   |   feature6 > 0.3333: classD (6.08/0.63)
|   |   |   feature4 = classB: classA (0.4/0.02)
|   |   |   feature4 = classC: classF (1.24/0.22)
|   |   |   feature4 = classD: classD (40.56/1.48)
|   |   |   feature4 = classE
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.3667: classF (3.79/1.24)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature7 <= 0.6: classD (31.17/3.83)
|   |   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6667: classE (7.07/0.64)
|   |   |   |   |   |   |   feature6 > 0.6667: classD (11.44/2.37)
|   |   |   |   feature6 > 0.7333: classE (9.9/0.04)
|   |   |   feature4 = classF: classF (0.73/0.31)
|   |   |   feature4 = classG: classG (1.15/0.21)
|   |   feature1 = classF
|   |   |   feature4 = classA
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature6 <= 0.5667: classA (2.08/0.61)
|   |   |   |   |   feature6 > 0.5667: classF (3.09/0.04)
|   |   |   |   feature9 > 0.7: classE (10.59/1.14)
|   |   |   feature4 = classB: classB (0.83/0.44)
|   |   |   feature4 = classC: classF (0.03/0.0)
|   |   |   feature4 = classD: classA (0.87/0.08)
|   |   |   feature4 = classE
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   feature2 = classE: classE (5.45/0.67)
|   |   |   |   |   feature2 = classF: classF (3.05/0.49)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   feature6 > 0.4333: classE (19.09/0.95)
|   |   |   feature4 = classF: classF (6.93/1.22)
|   |   |   feature4 = classG: classG (1.09/0.12)
|   |   feature1 = classG
|   |   |   feature4 = classA: classF (1.98/0.67)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classG (0.03/0.0)
|   |   |   prevPredS = classE: classA (11.48/2.02)
|   |   |   prevPredS = classF: classF (10.08/0.2)
|   |   |   prevPredS = classG: classG (1.98/0.54)
|   feature5 = classF
|   |   predS = classA
|   |   |   feature6 <= 0.8333
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   prevPredS = classA: classA (0.39/0.1)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classC (5.51/0.26)
|   |   |   |   |   prevPredS = classD: classA (0.1/0.0)
|   |   |   |   |   prevPredS = classE: classD (2.83/0.11)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.3: classD (2.07/0.01)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (56.26/0.25)
|   |   |   |   |   |   |   feature9 > 0.7333: classF (4.08/0.01)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.5333: classF (5.43/1.85)
|   |   |   |   |   |   feature9 > 0.5333: classD (2.73/0.02)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature9 <= 0.5: classD (3.7/0.93)
|   |   |   |   |   |   |   |   feature9 > 0.5: classG (16.77/1.63)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature9 <= 0.9: classA (4.05/1.34)
|   |   |   |   |   |   |   |   feature9 > 0.9: classF (6.44/1.35)
|   |   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   |   prevPredS = classC: classA (0.06/0.01)
|   |   |   |   |   |   prevPredS = classD: classA (0.23/0.05)
|   |   |   |   |   |   prevPredS = classE: classA (2.04/0.42)
|   |   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   |   feature9 <= 0.4333: classC (3.34/0.71)
|   |   |   |   |   |   |   feature9 > 0.4333: classF (9.9/2.25)
|   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   feature6 <= 0.5667: classF (2.34/0.8)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (16.28/0.92)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classC (6.41/3.68)
|   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   |   |   feature9 <= 0.8: classA (6.84/0.04)
|   |   |   |   |   |   |   |   feature9 > 0.8: classD (2.9/0.28)
|   |   |   |   |   |   |   feature6 > 0.7667: classA (6.59/0.04)
|   |   |   feature6 > 0.8333
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   feature7 <= 0.56: classA (3.16/0.02)
|   |   |   |   |   |   feature7 > 0.56: classF (111.55/0.26)
|   |   |   |   |   feature8 > 0.9667: classF (167.48/0.53)
|   |   |   |   feature6 > 0.8667: classA (41.96/0.23)
|   |   predS = classB
|   |   |   prevPredS = classA: classE (0.31/0.16)
|   |   |   prevPredS = classB: classA (15.17/6.45)
|   |   |   prevPredS = classC: classB (7.39/1.73)
|   |   |   prevPredS = classD: classB (0.0)
|   |   |   prevPredS = classE: classB (0.0)
|   |   |   prevPredS = classF: classB (0.0)
|   |   |   prevPredS = classG: classB (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.2667: classC (6.34/3.71)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.4333: classE (8.68/3.29)
|   |   |   |   |   feature6 > 0.4333: classD (16.31/5.82)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.6: classF (2.04/0.0)
|   |   |   |   |   |   feature6 > 0.6: classD (7.87/2.63)
|   |   |   |   |   feature6 > 0.6667: classF (3.81/0.24)
|   |   |   |   feature6 > 0.7333
|   |   |   |   |   feature6 <= 0.8333: classB (5.47/0.22)
|   |   |   |   |   feature6 > 0.8333
|   |   |   |   |   |   feature9 <= 0.4333: classD (2.68/0.05)
|   |   |   |   |   |   feature9 > 0.4333: classC (6.64/0.03)
|   |   predS = classD
|   |   |   prevPredS = classA: classD (0.78/0.35)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.6667: classF (8.3/2.7)
|   |   |   |   |   feature6 > 0.6667: classE (7.9/2.66)
|   |   |   |   feature6 > 0.7: classC (5.39/0.15)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.4667: classF (18.82/2.54)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature9 <= 0.5: classG (7.63/1.85)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5: classF (2.42/1.09)
|   |   |   |   |   |   |   feature6 > 0.5: classE (2.72/0.09)
|   |   |   |   |   |   feature6 > 0.5333: classD (2.93/0.01)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classG (5.89/0.64)
|   |   |   |   feature6 > 0.4333: classF (3.15/0.9)
|   |   |   prevPredS = classF: classF (38.51/5.67)
|   |   |   prevPredS = classG: classG (7.63/1.71)
|   |   predS = classE
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.3333: classG (5.55/0.11)
|   |   |   |   feature6 > 0.3333: classD (7.53/1.52)
|   |   |   prevPredS = classB: classA (3.1/0.34)
|   |   |   prevPredS = classC: classE (0.11/0.02)
|   |   |   prevPredS = classD
|   |   |   |   feature7 <= 0.56: classD (43.4/3.74)
|   |   |   |   feature7 > 0.56: classF (6.89/2.04)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.4333: classD (7.45/1.81)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature2 = classA: classA (3.37/0.35)
|   |   |   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   |   |   feature2 = classC: classF (0.0)
|   |   |   |   |   |   feature2 = classD: classF (0.0)
|   |   |   |   |   |   feature2 = classE: classF (3.68/1.13)
|   |   |   |   |   |   feature2 = classF: classF (18.87/4.09)
|   |   |   |   |   |   feature2 = classG: classF (0.0)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature9 <= 0.5333: classF (2.55/0.0)
|   |   |   |   |   feature9 > 0.5333: classE (32.93/0.15)
|   |   |   prevPredS = classF: classF (37.59/5.43)
|   |   |   prevPredS = classG: classG (6.14/0.81)
|   |   predS = classF
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.3
|   |   |   |   |   feature6 <= 0.2667: classG (7.31/2.07)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature8 <= 0.8: classA (65.8/0.36)
|   |   |   |   |   |   feature8 > 0.8: classF (3.01/0.46)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   prevPredS = classA: classE (8.65/3.41)
|   |   |   |   |   prevPredS = classB
|   |   |   |   |   |   feature6 <= 0.4: classB (2.9/0.28)
|   |   |   |   |   |   feature6 > 0.4: classE (2.73/0.11)
|   |   |   |   |   prevPredS = classC: classF (0.0)
|   |   |   |   |   prevPredS = classD: classF (3.21/0.2)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.7: classF (3.32/0.21)
|   |   |   |   |   |   feature9 > 0.7: classE (2.82/0.2)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature9 <= 0.8333: classF (90.15/5.63)
|   |   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   |   feature8 <= 0.9: classA (30.86/1.71)
|   |   |   |   |   |   |   feature8 > 0.9: classF (20.7/1.29)
|   |   |   |   |   prevPredS = classG: classF (2.72/0.17)
|   |   |   feature6 > 0.5: classF (1058.52/22.23)
|   |   predS = classG
|   |   |   feature9 <= 0.6
|   |   |   |   feature7 <= 0.8: classA (102.99/14.92)
|   |   |   |   feature7 > 0.8: classF (12.45/0.98)
|   |   |   feature9 > 0.6
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature6 <= 0.8333: classF (89.35/4.69)
|   |   |   |   |   feature6 > 0.8333: classG (2.1/0.01)
|   |   |   |   feature9 > 0.9333: classA (6.28/1.75)
|   feature5 = classG
|   |   prevPredS = classA: classA (5.28/1.87)
|   |   prevPredS = classB: classA (0.67/0.46)
|   |   prevPredS = classC: classC (0.85/0.54)
|   |   prevPredS = classD: classG (2.19/1.2)
|   |   prevPredS = classE: classE (1.43/0.91)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.7: classG (2.11/0.65)
|   |   |   feature6 > 0.7: classF (2.08/0.02)
|   |   prevPredS = classG: classG (46.24/3.62)
feature3 = classG
|   feature2 = classA
|   |   feature6 <= 0.8667
|   |   |   feature9 <= 0.3
|   |   |   |   predS = classA: classG (0.95/0.65)
|   |   |   |   predS = classB: classA (0.12/0.01)
|   |   |   |   predS = classC: classD (1.22/0.82)
|   |   |   |   predS = classD: classF (1.35/0.65)
|   |   |   |   predS = classE: classD (2.56/0.73)
|   |   |   |   predS = classF: classE (1.79/1.07)
|   |   |   |   predS = classG: classA (61.6/0.96)
|   |   |   feature9 > 0.3
|   |   |   |   predS = classA
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature7 <= 0.52: classA (21.9/2.05)
|   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   feature8 <= 0.9333: classA (8.42/1.26)
|   |   |   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   |   feature7 <= 0.6: classG (35.4/3.0)
|   |   |   |   |   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (3.42/0.33)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.4667: classA (6.47/1.65)
|   |   |   |   |   |   |   |   feature6 > 0.6: classG (146.55/4.94)
|   |   |   |   |   feature6 > 0.7333: classA (20.39/0.83)
|   |   |   |   predS = classB: classB (1.73/0.82)
|   |   |   |   predS = classC
|   |   |   |   |   feature6 <= 0.6: classE (5.93/3.3)
|   |   |   |   |   feature6 > 0.6: classD (3.73/1.77)
|   |   |   |   predS = classD
|   |   |   |   |   prevPredS = classA: classD (1.56/0.84)
|   |   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   |   prevPredS = classC: classE (4.13/2.44)
|   |   |   |   |   prevPredS = classD: classG (4.48/2.62)
|   |   |   |   |   prevPredS = classE: classG (2.78/1.08)
|   |   |   |   |   prevPredS = classF: classF (4.08/1.01)
|   |   |   |   |   prevPredS = classG: classG (2.73/1.04)
|   |   |   |   predS = classE
|   |   |   |   |   feature6 <= 0.3333: classG (7.95/0.96)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature5 = classA: classA (12.21/6.03)
|   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   |   feature5 = classE: classD (8.28/3.52)
|   |   |   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   |   |   feature5 = classG: classA (0.09/0.03)
|   |   |   |   predS = classF
|   |   |   |   |   feature7 <= 0.76: classA (20.84/13.84)
|   |   |   |   |   feature7 > 0.76: classG (6.4/2.61)
|   |   |   |   predS = classG
|   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature6 <= 0.7: classG (21.32/7.8)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   |   feature7 <= 0.6: classG (5.66/0.03)
|   |   |   |   |   |   |   |   |   feature7 > 0.6: classA (2.9/0.04)
|   |   |   |   |   |   |   |   feature8 > 0.9667: classA (9.66/2.17)
|   |   |   |   |   |   feature5 = classB: classG (0.0)
|   |   |   |   |   |   feature5 = classC: classG (0.0)
|   |   |   |   |   |   feature5 = classD: classG (0.0)
|   |   |   |   |   |   feature5 = classE: classG (0.0)
|   |   |   |   |   |   feature5 = classF: classA (3.79/0.3)
|   |   |   |   |   |   feature5 = classG: classA (0.23/0.02)
|   |   |   |   |   feature7 > 0.8
|   |   |   |   |   |   feature6 <= 0.7: classF (7.91/4.72)
|   |   |   |   |   |   feature6 > 0.7: classG (57.57/0.39)
|   |   feature6 > 0.8667
|   |   |   prevPredS = classA: classA (129.43/3.04)
|   |   |   prevPredS = classB: classA (2.5/0.82)
|   |   |   prevPredS = classC: classC (1.73/0.91)
|   |   |   prevPredS = classD: classF (4.71/1.09)
|   |   |   prevPredS = classE: classE (0.22/0.02)
|   |   |   prevPredS = classF: classG (0.58/0.07)
|   |   |   prevPredS = classG: classG (4.94/0.56)
|   feature2 = classB
|   |   predS = classA: classB (11.0/1.4)
|   |   predS = classB
|   |   |   feature6 <= 0.4667: classA (3.43/0.08)
|   |   |   feature6 > 0.4667: classB (25.72/0.29)
|   |   predS = classC: classD (0.76/0.51)
|   |   predS = classD: classF (1.6/0.84)
|   |   predS = classE: classD (0.97/0.57)
|   |   predS = classF: classA (1.26/0.81)
|   |   predS = classG: classF (0.69/0.29)
|   feature2 = classC
|   |   prevPredS = classA: classA (5.59/1.62)
|   |   prevPredS = classB: classA (3.99/0.53)
|   |   prevPredS = classC
|   |   |   predS = classA: classC (10.0/0.36)
|   |   |   predS = classB: classB (0.25/0.08)
|   |   |   predS = classC
|   |   |   |   feature7 <= 0.6: classD (9.91/0.29)
|   |   |   |   feature7 > 0.6: classC (13.34/0.29)
|   |   |   predS = classD: classF (0.79/0.51)
|   |   |   predS = classE: classC (0.72/0.33)
|   |   |   predS = classF: classA (0.73/0.46)
|   |   |   predS = classG: classF (0.25/0.05)
|   |   prevPredS = classD: classD (1.55/1.15)
|   |   prevPredS = classE
|   |   |   predS = classA: classD (0.2/0.1)
|   |   |   predS = classB: classE (0.33/0.16)
|   |   |   predS = classC: classD (3.53/0.28)
|   |   |   predS = classD: classG (0.35/0.15)
|   |   |   predS = classE: classE (3.37/0.16)
|   |   |   predS = classF: classF (6.68/0.28)
|   |   |   predS = classG: classF (0.25/0.17)
|   |   prevPredS = classF: classF (4.1/0.59)
|   |   prevPredS = classG: classG (1.07/0.15)
|   feature2 = classD
|   |   prevPredS = classA: classD (3.74/1.98)
|   |   prevPredS = classB: classA (0.61/0.33)
|   |   prevPredS = classC
|   |   |   feature7 <= 0.4: classE (3.67/0.43)
|   |   |   feature7 > 0.4: classC (14.18/1.31)
|   |   prevPredS = classD
|   |   |   predS = classA: classD (1.3/0.22)
|   |   |   predS = classB: classA (0.09/0.02)
|   |   |   predS = classC: classC (0.78/0.45)
|   |   |   predS = classD
|   |   |   |   feature7 <= 0.72
|   |   |   |   |   feature9 <= 0.6: classD (4.35/0.56)
|   |   |   |   |   feature9 > 0.6: classC (12.96/3.4)
|   |   |   |   feature7 > 0.72: classD (6.6/0.35)
|   |   |   predS = classE: classD (1.25/0.2)
|   |   |   predS = classF: classD (0.81/0.49)
|   |   |   predS = classG: classG (3.89/0.43)
|   |   prevPredS = classE: classD (18.98/2.32)
|   |   prevPredS = classF: classF (1.01/0.44)
|   |   prevPredS = classG: classG (8.27/1.36)
|   feature2 = classE
|   |   predS = classA
|   |   |   prevPredS = classA: classA (3.17/1.35)
|   |   |   prevPredS = classB: classE (0.0)
|   |   |   prevPredS = classC: classA (0.02/0.01)
|   |   |   prevPredS = classD: classA (1.27/0.06)
|   |   |   prevPredS = classE: classE (20.74/1.5)
|   |   |   prevPredS = classF: classC (0.31/0.14)
|   |   |   prevPredS = classG: classG (1.13/0.27)
|   |   predS = classB: classG (2.97/1.44)
|   |   predS = classC: classC (8.87/2.15)
|   |   predS = classD
|   |   |   feature9 <= 0.3333: classE (7.28/0.76)
|   |   |   feature9 > 0.3333: classA (9.78/6.43)
|   |   predS = classE
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.4333: classA (3.27/0.06)
|   |   |   |   feature9 > 0.4333: classD (3.89/0.5)
|   |   |   prevPredS = classB: classA (0.23/0.06)
|   |   |   prevPredS = classC: classE (0.12/0.0)
|   |   |   prevPredS = classD: classD (14.57/1.18)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.5333: classD (24.94/2.21)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.6667: classE (3.29/0.01)
|   |   |   |   |   |   feature6 > 0.6667: classD (9.52/3.15)
|   |   |   |   |   feature6 > 0.7333: classE (6.74/0.03)
|   |   |   prevPredS = classF: classG (1.25/0.24)
|   |   |   prevPredS = classG: classG (0.7/0.08)
|   |   predS = classF
|   |   |   feature6 <= 0.4667: classE (5.74/1.88)
|   |   |   feature6 > 0.4667: classG (2.48/1.48)
|   |   predS = classG
|   |   |   prevPredS = classA: classF (0.88/0.33)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classF (0.0)
|   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   prevPredS = classE: classA (7.5/0.96)
|   |   |   prevPredS = classF: classF (6.77/0.08)
|   |   |   prevPredS = classG: classG (4.29/0.2)
|   feature2 = classF
|   |   feature5 = classA: classF (4.17/2.0)
|   |   feature5 = classB: classE (0.0)
|   |   feature5 = classC: classA (15.33/2.2)
|   |   feature5 = classD: classD (4.18/0.91)
|   |   feature5 = classE: classE (25.55/5.82)
|   |   feature5 = classF: classF (13.7/2.59)
|   |   feature5 = classG: classG (0.96/0.41)
|   feature2 = classG
|   |   feature6 <= 0.7
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.3667: classD (7.43/1.39)
|   |   |   |   |   feature6 > 0.3667: classA (28.95/1.17)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature9 <= 0.4: classA (6.94/3.65)
|   |   |   |   |   |   feature9 > 0.4: classG (36.66/5.72)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature9 <= 0.4333: classA (3.08/1.0)
|   |   |   |   |   |   feature9 > 0.4333: classC (3.24/1.14)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.4667: classA (2.29/0.28)
|   |   |   |   feature6 > 0.4667: classB (2.21/0.01)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classC (4.6/2.58)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.3333: classD (2.17/0.12)
|   |   |   |   |   |   feature6 > 0.3333: classE (10.87/2.81)
|   |   |   |   |   feature6 > 0.6: classD (5.62/1.59)
|   |   |   predS = classD
|   |   |   |   prevPredS = classA: classC (0.23/0.16)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.6667: classF (5.12/2.77)
|   |   |   |   |   feature6 > 0.6667: classE (6.07/2.04)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.4667: classF (3.88/2.08)
|   |   |   |   |   |   feature6 > 0.4667: classG (4.68/0.15)
|   |   |   |   |   feature9 > 0.6667: classE (3.39/1.18)
|   |   |   |   prevPredS = classE: classG (6.62/1.89)
|   |   |   |   prevPredS = classF: classF (9.54/1.47)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.4333: classG (14.95/2.76)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classF (9.28/3.37)
|   |   |   |   |   |   feature6 > 0.4667: classG (3.94/0.06)
|   |   |   predS = classE
|   |   |   |   prevPredS = classA: classD (3.91/1.13)
|   |   |   |   prevPredS = classB: classA (3.65/1.1)
|   |   |   |   prevPredS = classC: classD (0.0)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.4333: classD (8.32/0.6)
|   |   |   |   |   feature6 > 0.4333: classA (3.11/1.44)
|   |   |   |   prevPredS = classE: classG (1.96/1.36)
|   |   |   |   prevPredS = classF: classG (3.43/1.74)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.3667: classD (3.45/0.97)
|   |   |   |   |   feature6 > 0.3667: classG (13.48/4.26)
|   |   |   predS = classF
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature9 <= 0.3333: classE (2.65/0.63)
|   |   |   |   |   |   feature9 > 0.3333: classA (7.94/1.09)
|   |   |   |   |   feature9 > 0.4667: classB (5.41/3.39)
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature6 <= 0.4: classB (2.71/0.69)
|   |   |   |   |   feature6 > 0.4: classE (2.59/0.57)
|   |   |   |   prevPredS = classC: classF (0.19/0.04)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.6667: classG (5.62/0.99)
|   |   |   |   |   feature9 > 0.6667: classA (5.29/0.73)
|   |   |   |   prevPredS = classE: classE (2.7/0.68)
|   |   |   |   prevPredS = classF: classG (17.1/2.72)
|   |   |   |   prevPredS = classG: classG (27.11/3.98)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.2667: classA (2.16/0.14)
|   |   |   |   |   |   feature6 > 0.2667: classG (26.17/1.4)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   prevPredS = classA: classG (0.12/0.0)
|   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   |   |   prevPredS = classD: classG (0.08/0.0)
|   |   |   |   |   |   prevPredS = classE: classE (2.1/0.09)
|   |   |   |   |   |   prevPredS = classF: classG (2.72/0.11)
|   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   feature6 <= 0.4333: classA (111.37/0.57)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.6: classF (6.82/1.61)
|   |   |   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   |   |   feature7 <= 0.76: classG (2.63/0.01)
|   |   |   |   |   |   |   |   |   feature7 > 0.76: classA (28.1/0.4)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature5 = classA: classG (3.49/0.4)
|   |   |   |   |   feature5 = classB: classG (0.0)
|   |   |   |   |   feature5 = classC: classG (0.0)
|   |   |   |   |   feature5 = classD: classG (0.65/0.07)
|   |   |   |   |   feature5 = classE: classG (0.07/0.01)
|   |   |   |   |   feature5 = classF: classF (14.62/0.48)
|   |   |   |   |   feature5 = classG
|   |   |   |   |   |   prevPredS = classA: classF (7.06/1.81)
|   |   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   |   |   prevPredS = classD: classG (0.0)
|   |   |   |   |   |   prevPredS = classE: classG (0.0)
|   |   |   |   |   |   prevPredS = classF: classG (0.56/0.02)
|   |   |   |   |   |   prevPredS = classG: classG (80.86/3.17)
|   |   feature6 > 0.7
|   |   |   predS = classA
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.7667: classD (2.29/0.27)
|   |   |   |   |   feature6 > 0.7667: classA (10.87/0.07)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classA (0.04/0.0)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE: classA (0.0)
|   |   |   |   prevPredS = classF: classA (0.04/0.0)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 <= 0.64: classA (5.34/0.02)
|   |   |   |   |   feature7 > 0.64: classG (6.4/1.34)
|   |   |   predS = classB
|   |   |   |   prevPredS = classA: classC (0.02/0.0)
|   |   |   |   prevPredS = classB: classA (8.79/3.22)
|   |   |   |   prevPredS = classC: classB (2.71/0.49)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE: classA (0.0)
|   |   |   |   prevPredS = classF: classA (0.0)
|   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.8333: classB (4.27/0.24)
|   |   |   |   feature6 > 0.8333: classD (2.8/0.79)
|   |   |   predS = classD
|   |   |   |   prevPredS = classA: classD (0.09/0.02)
|   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   prevPredS = classC: classC (2.11/0.1)
|   |   |   |   prevPredS = classD: classF (10.68/0.56)
|   |   |   |   prevPredS = classE: classD (0.04/0.0)
|   |   |   |   prevPredS = classF: classG (1.54/0.02)
|   |   |   |   prevPredS = classG: classD (0.04/0.0)
|   |   |   predS = classE: classE (0.33/0.0)
|   |   |   predS = classF: classG (4.58/0.47)
|   |   |   predS = classG: classG (1173.97/6.47)

Number of Leaves  : \t1690

Size of the tree : \t2454


Weight: 3.33

J48 pruned tree
------------------

feature3 = classA
|   feature6 <= 0.7333
|   |   predS = classA
|   |   |   feature8 <= 0.5
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.4667: classE (18.11/3.51)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6: classB (8.44/4.51)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (4.36/0.43)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (5.17/1.24)
|   |   |   |   prevPredS = classB: classB (0.52/0.16)
|   |   |   |   prevPredS = classC: classC (2.37/1.45)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.4: classG (15.6/1.25)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.6: classB (3.49/0.78)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (2.89/0.18)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (2.91/0.21)
|   |   |   |   prevPredS = classE: classE (6.77/4.24)
|   |   |   |   prevPredS = classF: classC (0.6/0.3)
|   |   |   |   prevPredS = classG: classG (5.2/3.34)
|   |   |   feature8 > 0.5
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5: classA (25.3/7.16)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5667: classB (9.48/3.26)
|   |   |   |   |   |   feature6 > 0.5667: classA (2.27/0.85)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (7.06/0.84)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.6667: classA (3.13/1.37)
|   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   feature6 <= 0.7: classE (7.47/1.24)
|   |   |   |   |   |   |   feature6 > 0.7: classA (2.54/0.2)
|   |   predS = classB: classB (5.91/3.17)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (16.65/2.11)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature9 <= 0.4: classF (3.67/2.1)
|   |   |   |   |   feature9 > 0.4: classD (6.67/4.15)
|   |   |   |   feature6 > 0.5333: classC (30.23/4.05)
|   |   predS = classD: classG (58.24/31.58)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (20.15/4.54)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classD (14.19/6.57)
|   |   |   |   |   feature6 > 0.4333: classC (36.86/21.73)
|   |   |   |   feature6 > 0.4667: classE (29.08/12.24)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classA (11.18/6.2)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   prevPredS = classA: classB (16.41/1.87)
|   |   |   |   |   prevPredS = classB: classB (0.0)
|   |   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classB (0.0)
|   |   |   |   |   prevPredS = classE: classE (2.79/0.7)
|   |   |   |   |   prevPredS = classF: classF (0.1)
|   |   |   |   |   prevPredS = classG: classB (0.0)
|   |   |   feature6 > 0.4667: classF (20.09/6.17)
|   |   predS = classG
|   |   |   feature2 = classA: classA (26.02/7.71)
|   |   |   feature2 = classB: classA (0.0)
|   |   |   feature2 = classC: classC (0.0/0.0)
|   |   |   feature2 = classD: classD (0.92/0.37)
|   |   |   feature2 = classE: classG (16.69/5.86)
|   |   |   feature2 = classF: classA (1.67/0.61)
|   |   |   feature2 = classG: classF (4.77/1.97)
|   feature6 > 0.7333
|   |   predS = classA
|   |   |   feature9 <= 0.5333
|   |   |   |   prevPredS = classA: classC (9.7/3.29)
|   |   |   |   prevPredS = classB: classA (0.02/0.0)
|   |   |   |   prevPredS = classC: classA (0.01/0.0)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE: classA (0.01/0.0)
|   |   |   |   prevPredS = classF: classA (0.06/0.0)
|   |   |   |   prevPredS = classG: classA (8.38/0.53)
|   |   |   feature9 > 0.5333: classA (386.09/25.04)
|   |   predS = classB
|   |   |   feature6 <= 0.9667: classB (5.27/0.94)
|   |   |   feature6 > 0.9667: classA (24.58/9.52)
|   |   predS = classC
|   |   |   feature6 <= 0.8667: classB (2.73/1.68)
|   |   |   feature6 > 0.8667: classC (3.55/0.23)
|   |   predS = classD
|   |   |   feature9 <= 0.4667: classF (4.11/1.24)
|   |   |   feature9 > 0.4667: classD (3.71/1.41)
|   |   predS = classE: classE (2.72/0.22)
|   |   predS = classF: classF (2.13/0.04)
|   |   predS = classG: classG (7.56/1.71)
feature3 = classB
|   feature5 = classA
|   |   predS = classA
|   |   |   feature7 <= 0.44: classB (20.65/5.25)
|   |   |   feature7 > 0.44
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.5333: classF (5.7/1.49)
|   |   |   |   |   feature6 > 0.5333: classB (3.98/2.53)
|   |   |   |   feature6 > 0.6667: classA (18.93/3.06)
|   |   predS = classB: classB (10.67/3.76)
|   |   predS = classC
|   |   |   feature6 <= 0.4: classA (3.86/1.35)
|   |   |   feature6 > 0.4
|   |   |   |   feature6 <= 0.4333: classB (15.68/1.34)
|   |   |   |   feature6 > 0.4333: classC (2.48/1.31)
|   |   predS = classD: classD (12.29/8.74)
|   |   predS = classE: classE (24.24/11.25)
|   |   predS = classF
|   |   |   feature6 <= 0.4667: classB (4.29/1.69)
|   |   |   feature6 > 0.4667: classF (6.7/0.92)
|   |   predS = classG: classA (28.44/5.63)
|   feature5 = classB
|   |   prevPredS = classA
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5: classA (2.92/0.22)
|   |   |   |   |   |   |   feature9 > 0.5: classG (4.39/2.18)
|   |   |   |   |   |   feature9 > 0.6: classA (8.25/0.61)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (29.25/13.56)
|   |   |   |   |   |   |   feature6 > 0.5667: classD (2.64/1.3)
|   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classG (4.16/0.85)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333: classB (18.03/1.14)
|   |   |   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   |   |   feature6 <= 0.6: classA (2.11/0.47)
|   |   |   |   |   |   |   |   |   feature6 > 0.6: classD (3.33/0.21)
|   |   |   |   |   |   |   feature6 > 0.6333: classB (46.58/3.53)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (7.42/2.95)
|   |   |   |   |   feature6 > 0.7: classA (9.51/2.74)
|   |   |   predS = classB
|   |   |   |   feature9 <= 0.5333: classC (6.94/4.2)
|   |   |   |   feature9 > 0.5333
|   |   |   |   |   feature6 <= 0.4333: classA (15.92/1.57)
|   |   |   |   |   feature6 > 0.4333: classB (2.26/0.38)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (5.69/1.22)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.4333: classF (3.52/0.49)
|   |   |   |   |   |   feature9 > 0.4333: classG (4.63/2.38)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.7333: classC (3.98/0.57)
|   |   |   |   |   |   feature6 > 0.7333: classA (2.7/1.02)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.5333: classG (7.55/2.77)
|   |   |   |   feature6 > 0.5333: classD (3.87/0.67)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (8.06/1.39)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.4333: classD (2.69/1.11)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classC (11.18/5.5)
|   |   |   |   |   |   feature6 > 0.4667: classE (4.13/2.14)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature9 <= 0.4667: classA (5.0/1.62)
|   |   |   |   |   feature9 > 0.4667: classC (5.77/0.68)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.4667: classB (34.79/4.12)
|   |   |   |   |   feature6 > 0.4667: classF (1.2/0.49)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.6667: classG (7.79/2.4)
|   |   |   |   feature9 > 0.6667: classF (5.31/1.34)
|   |   prevPredS = classB
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   feature6 <= 0.3: classB (24.0/9.65)
|   |   |   |   |   |   feature6 > 0.3: classA (34.14/3.68)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.4667: classB (63.08/5.69)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (8.07/0.51)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (24.88/1.84)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6667: classD (35.59/12.56)
|   |   |   |   |   feature6 > 0.6667: classE (25.15/2.11)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.3667: classA (10.51/1.7)
|   |   |   |   |   |   feature6 > 0.3667: classB (56.7/11.78)
|   |   |   |   |   feature6 > 0.5333: classA (17.33/2.73)
|   |   |   |   feature6 > 0.6: classB (892.54/89.23)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (25.93/2.9)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5333: classE (6.82/3.07)
|   |   |   |   |   feature6 > 0.5333: classB (12.56/3.34)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.2667: classA (30.91/16.31)
|   |   |   |   feature6 > 0.2667: classG (36.16/11.47)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (24.59/1.56)
|   |   |   |   feature6 > 0.3333: classA (60.64/34.84)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.4333: classB (31.51/8.51)
|   |   |   |   feature6 > 0.4333: classF (8.04/3.31)
|   |   |   predS = classG
|   |   |   |   feature6 <= 0.4: classB (15.59/0.99)
|   |   |   |   feature6 > 0.4: classF (7.58/2.96)
|   |   prevPredS = classC
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.5: classC (3.08/0.88)
|   |   |   |   |   feature6 > 0.5: classB (2.28/1.54)
|   |   |   |   feature6 > 0.6333: classA (17.04/1.86)
|   |   |   predS = classB: classB (3.15/0.25)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.5333: classD (3.39/1.13)
|   |   |   |   feature6 > 0.5333: classC (4.22/0.37)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.6667: classD (2.94/1.22)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature9 <= 0.4: classE (2.36/0.15)
|   |   |   |   |   feature9 > 0.4: classC (4.74/2.54)
|   |   |   predS = classE: classA (2.67/1.88)
|   |   |   predS = classF: classF (0.53/0.24)
|   |   |   predS = classG: classF (0.27/0.12)
|   |   prevPredS = classD
|   |   |   predS = classA: classD (2.5/1.88)
|   |   |   predS = classB: classB (0.37/0.07)
|   |   |   predS = classC: classC (4.49/2.23)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.9: classD (10.42/4.81)
|   |   |   |   feature6 > 0.9: classF (6.01/0.11)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4333: classD (5.44/0.96)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classA (1.33/0.73)
|   |   |   |   |   feature6 > 0.4667: classE (4.28/0.31)
|   |   |   predS = classF: classA (2.85/0.55)
|   |   |   predS = classG: classG (0.28/0.13)
|   |   prevPredS = classE
|   |   |   predS = classA
|   |   |   |   feature9 <= 0.3333: classB (4.53/1.14)
|   |   |   |   feature9 > 0.3333: classD (3.33/1.95)
|   |   |   predS = classB: classB (0.67/0.09)
|   |   |   predS = classC: classD (2.79/1.59)
|   |   |   predS = classD
|   |   |   |   feature9 <= 0.6: classE (3.02/0.75)
|   |   |   |   feature9 > 0.6: classG (2.84/0.3)
|   |   |   predS = classE: classE (14.57/5.18)
|   |   |   predS = classF: classF (3.96/1.31)
|   |   |   predS = classG: classG (4.41/2.6)
|   |   prevPredS = classF
|   |   |   predS = classA: classC (2.52/1.42)
|   |   |   predS = classB: classB (0.78/0.08)
|   |   |   predS = classC: classE (2.34/1.18)
|   |   |   predS = classD: classF (4.69/0.99)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classE (2.18/0.49)
|   |   |   |   feature6 > 0.3333: classF (2.21/0.87)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.6: classF (2.21/0.12)
|   |   |   |   feature6 > 0.6: classG (2.96/0.75)
|   |   |   predS = classG: classG (2.54/0.22)
|   |   prevPredS = classG
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6333: classD (5.02/3.05)
|   |   |   |   feature6 > 0.6333: classG (6.81/1.29)
|   |   |   predS = classB: classB (0.51/0.09)
|   |   |   predS = classC: classA (1.33/0.49)
|   |   |   predS = classD: classG (4.33/1.17)
|   |   |   predS = classE: classG (5.92/2.88)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.6: classF (7.09/0.27)
|   |   |   |   feature6 > 0.6: classG (2.36/0.15)
|   |   |   predS = classG: classA (19.3/3.84)
|   feature5 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.5333: classA (4.28/2.36)
|   |   |   feature6 > 0.5333: classD (4.92/3.62)
|   |   predS = classB
|   |   |   feature6 <= 0.3: classE (2.51/0.2)
|   |   |   feature6 > 0.3: classA (2.59/1.15)
|   |   predS = classC: classC (14.9/6.05)
|   |   predS = classD
|   |   |   feature6 <= 0.5333: classG (2.67/1.14)
|   |   |   feature6 > 0.5333: classA (3.56/2.01)
|   |   predS = classE: classA (11.15/5.17)
|   |   predS = classF
|   |   |   feature6 <= 0.4667: classB (2.99/1.69)
|   |   |   feature6 > 0.4667: classF (7.98/0.71)
|   |   predS = classG
|   |   |   feature6 <= 0.4333: classE (17.41/1.72)
|   |   |   feature6 > 0.4333: classA (4.19/1.12)
|   feature5 = classD
|   |   prevPredS = classA: classC (4.92/3.72)
|   |   prevPredS = classB: classA (1.63/0.52)
|   |   prevPredS = classC: classE (2.89/1.24)
|   |   prevPredS = classD: classD (22.8/11.67)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.6667: classD (14.57/4.87)
|   |   |   feature6 > 0.6667: classE (4.78/0.61)
|   |   prevPredS = classF: classF (0.88/0.45)
|   |   prevPredS = classG: classG (9.53/5.34)
|   feature5 = classE
|   |   predS = classA: classA (78.64/36.14)
|   |   predS = classB
|   |   |   feature6 <= 0.4333: classE (32.44/2.67)
|   |   |   feature6 > 0.4333: classA (10.77/4.69)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (6.29/0.8)
|   |   |   feature6 > 0.2667
|   |   |   |   feature9 <= 0.4: classE (29.98/4.23)
|   |   |   |   feature9 > 0.4: classC (4.2/1.92)
|   |   predS = classD
|   |   |   feature2 = classA: classD (0.16/0.05)
|   |   |   feature2 = classB: classE (0.0)
|   |   |   feature2 = classC: classE (0.41/0.14)
|   |   |   feature2 = classD
|   |   |   |   prevPredS = classA: classC (0.28/0.07)
|   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   prevPredS = classC: classC (6.74/1.95)
|   |   |   |   prevPredS = classD: classD (5.58/1.69)
|   |   |   |   prevPredS = classE: classG (0.16/0.03)
|   |   |   |   prevPredS = classF: classF (0.25/0.06)
|   |   |   |   prevPredS = classG: classG (0.18/0.05)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.3667: classE (14.24/3.1)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature6 <= 0.4667: classG (7.01/3.81)
|   |   |   |   |   feature6 > 0.4667: classD (6.42/3.69)
|   |   |   feature2 = classF: classF (6.03/1.43)
|   |   |   feature2 = classG: classG (0.02/0.0)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (9.51/3.62)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature9 <= 0.5667: classE (11.08/5.74)
|   |   |   |   |   |   feature9 > 0.5667: classD (6.18/2.35)
|   |   |   |   |   feature6 > 0.4333: classC (16.82/11.06)
|   |   |   |   feature6 > 0.4667: classE (39.49/13.92)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667: classB (7.55/2.06)
|   |   |   |   feature6 > 0.4667: classE (4.38/1.35)
|   |   |   prevPredS = classB: classB (9.09/1.59)
|   |   |   prevPredS = classC: classF (0.02/0.0)
|   |   |   prevPredS = classD: classA (0.49/0.09)
|   |   |   prevPredS = classE: classE (9.64/1.88)
|   |   |   prevPredS = classF: classF (1.31/0.46)
|   |   |   prevPredS = classG: classF (1.84/0.55)
|   |   predS = classG
|   |   |   prevPredS = classA: classE (4.17/2.43)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classA (4.2/0.97)
|   |   |   |   feature6 > 0.4333: classG (5.65/0.87)
|   |   |   prevPredS = classF: classF (4.05/0.56)
|   |   |   prevPredS = classG: classG (0.96/0.31)
|   feature5 = classF
|   |   predS = classA: classF (9.8/4.56)
|   |   predS = classB: classB (2.31/1.0)
|   |   predS = classC: classA (1.72/0.98)
|   |   predS = classD: classD (3.09/1.95)
|   |   predS = classE: classE (9.57/3.71)
|   |   predS = classF: classF (8.51/1.45)
|   |   predS = classG
|   |   |   feature6 <= 0.6667: classA (2.28/0.74)
|   |   |   feature6 > 0.6667: classF (7.07/0.27)
|   feature5 = classG
|   |   predS = classA: classG (3.68/1.96)
|   |   predS = classB: classA (0.93/0.45)
|   |   predS = classC: classA (1.08/0.61)
|   |   predS = classD: classG (1.43/0.72)
|   |   predS = classE: classG (2.45/1.75)
|   |   predS = classF: classF (5.34/0.89)
|   |   predS = classG: classG (12.8/1.2)
feature3 = classC
|   predS = classA
|   |   feature6 <= 0.6
|   |   |   feature5 = classA
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classA (7.82/4.4)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature9 <= 0.9333: classF (4.98/0.33)
|   |   |   |   |   |   feature9 > 0.9333: classC (16.14/1.54)
|   |   |   |   feature6 > 0.5333: classB (12.76/3.21)
|   |   |   feature5 = classB: classB (13.84/5.56)
|   |   |   feature5 = classC
|   |   |   |   feature7 <= 0.64: classA (66.69/28.44)
|   |   |   |   feature7 > 0.64: classC (11.57/6.81)
|   |   |   feature5 = classD
|   |   |   |   feature6 <= 0.3667: classD (2.26/0.43)
|   |   |   |   feature6 > 0.3667: classB (3.06/1.84)
|   |   |   feature5 = classE
|   |   |   |   feature6 <= 0.4667: classE (15.04/4.82)
|   |   |   |   feature6 > 0.4667: classB (7.45/2.3)
|   |   |   feature5 = classF
|   |   |   |   feature2 = classA: classF (10.51/4.65)
|   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   feature2 = classC: classC (1.3/0.58)
|   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   feature2 = classE: classA (0.71/0.29)
|   |   |   |   feature2 = classF: classA (29.26/11.91)
|   |   |   |   feature2 = classG: classA (0.0)
|   |   |   feature5 = classG: classG (3.44/1.51)
|   |   feature6 > 0.6
|   |   |   feature6 <= 0.6333: classD (53.14/5.78)
|   |   |   feature6 > 0.6333
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   prevPredS = classA: classA (2.32/0.34)
|   |   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (0.16/0.07)
|   |   |   |   |   |   prevPredS = classD: classA (0.03/0.0)
|   |   |   |   |   |   prevPredS = classE: classG (0.0)
|   |   |   |   |   |   prevPredS = classF: classA (0.17/0.01)
|   |   |   |   |   |   prevPredS = classG: classG (9.31/0.79)
|   |   |   |   |   feature6 > 0.6667: classE (56.63/9.27)
|   |   |   |   feature6 > 0.7: classA (42.53/5.43)
|   predS = classB
|   |   feature6 <= 0.6333
|   |   |   feature9 <= 0.8
|   |   |   |   prevPredS = classA: classE (5.06/2.46)
|   |   |   |   prevPredS = classB: classB (3.12/0.3)
|   |   |   |   prevPredS = classC: classB (2.35/0.52)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 <= 0.56: classE (3.02/0.42)
|   |   |   |   |   feature7 > 0.56: classA (8.38/0.78)
|   |   |   |   prevPredS = classF: classC (1.53/0.48)
|   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   feature9 > 0.8: classC (36.96/6.75)
|   |   feature6 > 0.6333
|   |   |   feature6 <= 0.9667: classB (19.74/3.82)
|   |   |   feature6 > 0.9667
|   |   |   |   feature9 <= 0.9667: classB (7.55/2.79)
|   |   |   |   feature9 > 0.9667: classA (75.03/25.35)
|   predS = classC
|   |   feature6 <= 0.8
|   |   |   feature6 <= 0.2667: classA (55.91/7.47)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature9 <= 0.5: classG (6.33/2.86)
|   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   feature8 <= 0.9667: classC (38.22/8.31)
|   |   |   |   |   |   |   feature8 > 0.9667: classA (2.76/1.02)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   prevPredS = classA: classF (5.91/1.2)
|   |   |   |   |   |   prevPredS = classB: classC (1.01/0.12)
|   |   |   |   |   |   prevPredS = classC: classC (27.53/3.36)
|   |   |   |   |   |   prevPredS = classD: classC (0.31/0.04)
|   |   |   |   |   |   prevPredS = classE: classC (0.0)
|   |   |   |   |   |   prevPredS = classF: classC (1.21/0.31)
|   |   |   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature9 <= 0.4333: classC (43.24/8.26)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   feature9 <= 0.5: classA (8.06/0.72)
|   |   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.7333: classC (6.42/0.65)
|   |   |   |   |   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6: classC (3.47/0.27)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6: classA (2.82/0.2)
|   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   feature9 <= 0.8: classA (32.24/2.88)
|   |   |   |   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classC (4.41/0.39)
|   |   |   |   |   |   |   |   |   feature9 > 0.9333: classA (10.26/0.92)
|   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature7 <= 0.64: classD (5.71/2.26)
|   |   |   |   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   |   |   |   feature9 <= 0.5333: classC (7.92/0.62)
|   |   |   |   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classA (47.91/3.74)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classC (16.17/1.26)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.9333: classA (88.01/30.61)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   |   feature9 <= 0.5333: classC (8.78/0.86)
|   |   |   |   |   |   |   |   |   feature9 > 0.5333: classA (17.37/2.94)
|   |   |   |   |   |   |   |   feature9 > 0.5667: classC (97.73/12.08)
|   |   |   |   |   |   prevPredS = classD: classC (4.09/0.4)
|   |   |   |   |   |   prevPredS = classE: classC (0.96/0.09)
|   |   |   |   |   |   prevPredS = classF: classA (2.16/0.19)
|   |   |   |   |   |   prevPredS = classG: classA (0.0)
|   |   feature6 > 0.8
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9667: classC (27.28/1.92)
|   |   |   |   feature9 > 0.9667: classA (5.04/0.69)
|   |   |   prevPredS = classB: classC (1.15/0.08)
|   |   |   prevPredS = classC
|   |   |   |   feature2 = classA: classA (4.38/0.29)
|   |   |   |   feature2 = classB: classC (0.56/0.04)
|   |   |   |   feature2 = classC
|   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   feature7 <= 0.8: classC (16.39/1.07)
|   |   |   |   |   |   feature7 > 0.8
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (4.56/0.3)
|   |   |   |   |   |   |   feature9 > 0.7333: classC (5.29/0.35)
|   |   |   |   |   feature7 > 0.84: classC (804.99/52.62)
|   |   |   |   feature2 = classD: classC (0.0)
|   |   |   |   feature2 = classE: classC (0.84/0.06)
|   |   |   |   feature2 = classF: classC (0.0)
|   |   |   |   feature2 = classG: classC (0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.8667: classD (2.42/0.71)
|   |   |   |   feature6 > 0.8667: classC (7.87/0.54)
|   |   |   prevPredS = classE: classC (0.0)
|   |   |   prevPredS = classF: classA (4.67/0.4)
|   |   |   prevPredS = classG: classC (0.0)
|   predS = classD
|   |   feature6 <= 0.4667
|   |   |   prevPredS = classA: classG (11.16/7.61)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.4333: classE (2.53/1.12)
|   |   |   |   feature6 > 0.4333: classA (59.15/29.48)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.3667: classC (8.62/1.31)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature6 <= 0.4333: classD (4.86/0.4)
|   |   |   |   |   feature6 > 0.4333: classG (16.73/7.11)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3: classE (4.62/2.02)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature9 <= 0.6: classE (4.06/0.34)
|   |   |   |   |   |   feature9 > 0.6: classG (4.91/1.51)
|   |   |   |   feature6 > 0.4333: classG (10.3/2.69)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4333: classF (6.29/0.69)
|   |   |   |   feature6 > 0.4333: classG (5.33/1.63)
|   |   |   prevPredS = classG: classG (10.1/1.74)
|   |   feature6 > 0.4667
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.5333: classC (26.31/4.0)
|   |   |   |   feature6 > 0.5333: classD (7.42/4.57)
|   |   |   feature2 = classB: classC (0.0)
|   |   |   feature2 = classC
|   |   |   |   feature9 <= 0.4667
|   |   |   |   |   feature6 <= 0.6667: classA (2.98/0.86)
|   |   |   |   |   feature6 > 0.6667: classF (2.99/1.35)
|   |   |   |   feature9 > 0.4667: classC (23.84/5.18)
|   |   |   feature2 = classD
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature6 <= 0.9: classD (11.33/6.14)
|   |   |   |   |   feature6 > 0.9: classF (5.52/0.93)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature8 <= 0.7
|   |   |   |   |   |   feature9 <= 0.9667: classD (13.13/2.53)
|   |   |   |   |   |   feature9 > 0.9667: classC (2.48/0.59)
|   |   |   |   |   feature8 > 0.7: classC (54.84/14.21)
|   |   |   feature2 = classE
|   |   |   |   feature9 <= 0.3667: classE (4.47/0.79)
|   |   |   |   feature9 > 0.3667: classD (9.28/2.38)
|   |   |   feature2 = classF: classF (10.7/3.5)
|   |   |   feature2 = classG: classG (0.21/0.05)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature6 <= 0.2333
|   |   |   |   feature9 <= 0.3667: classC (7.84/0.54)
|   |   |   |   feature9 > 0.3667: classE (2.27/0.54)
|   |   |   feature6 > 0.2333: classG (65.72/14.9)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 <= 0.4
|   |   |   |   |   |   |   feature9 <= 0.5: classD (2.56/0.66)
|   |   |   |   |   |   |   feature9 > 0.5: classE (2.72/0.95)
|   |   |   |   |   |   feature7 > 0.4: classA (4.53/2.45)
|   |   |   |   |   prevPredS = classB: classA (2.03/0.31)
|   |   |   |   |   prevPredS = classC: classC (1.01/0.48)
|   |   |   |   |   prevPredS = classD: classD (11.81/2.02)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.3667: classA (18.4/3.71)
|   |   |   |   |   |   feature9 > 0.3667
|   |   |   |   |   |   |   feature7 <= 0.56: classD (9.66/2.1)
|   |   |   |   |   |   |   feature7 > 0.56: classE (10.75/3.76)
|   |   |   |   |   prevPredS = classF: classA (0.49/0.17)
|   |   |   |   |   prevPredS = classG: classD (2.1/1.07)
|   |   |   |   feature6 > 0.4333: classC (125.26/73.56)
|   |   |   feature6 > 0.4667
|   |   |   |   prevPredS = classA: classE (17.62/5.86)
|   |   |   |   prevPredS = classB: classA (3.91/2.07)
|   |   |   |   prevPredS = classC: classC (1.83/0.84)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.5: classE (13.9/1.46)
|   |   |   |   |   feature9 > 0.5: classD (2.82/0.96)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature9 <= 0.4
|   |   |   |   |   |   feature6 <= 0.7: classE (2.48/0.48)
|   |   |   |   |   |   feature6 > 0.7: classA (8.08/0.74)
|   |   |   |   |   feature9 > 0.4: classE (50.76/18.31)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature9 <= 0.5: classA (4.58/0.46)
|   |   |   |   |   feature9 > 0.5: classF (4.09/1.97)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.6667: classE (2.99/1.19)
|   |   |   |   |   feature9 > 0.6667: classG (3.98/0.48)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4333
|   |   |   |   prevPredS = classA: classA (8.59/4.07)
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature6 <= 0.3333: classB (2.46/0.76)
|   |   |   |   |   feature6 > 0.3333: classE (2.23/0.52)
|   |   |   |   prevPredS = classC: classC (4.9/1.6)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.7333: classD (4.41/2.58)
|   |   |   |   |   feature9 > 0.7333: classA (4.69/0.82)
|   |   |   |   prevPredS = classE: classE (5.88/2.47)
|   |   |   |   prevPredS = classF: classA (21.34/4.62)
|   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   feature6 > 0.4333
|   |   |   |   prevPredS = classA: classB (54.15/6.79)
|   |   |   |   prevPredS = classB: classB (0.0)
|   |   |   |   prevPredS = classC: classC (1.15/0.39)
|   |   |   |   prevPredS = classD: classB (0.0)
|   |   |   |   prevPredS = classE: classE (9.15/2.34)
|   |   |   |   prevPredS = classF: classF (0.67/0.32)
|   |   |   |   prevPredS = classG: classB (0.0)
|   |   feature6 > 0.4667: classF (79.33/22.54)
|   predS = classG
|   |   feature5 = classA: classA (18.55/9.58)
|   |   feature5 = classB: classG (0.0)
|   |   feature5 = classC: classA (11.34/5.95)
|   |   feature5 = classD: classG (10.34/4.5)
|   |   feature5 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5333: classE (3.18/1.44)
|   |   |   |   feature9 > 0.5333: classF (3.76/2.03)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classG (0.04/0.01)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classA (5.56/1.75)
|   |   |   |   feature6 > 0.4333: classG (6.88/1.38)
|   |   |   prevPredS = classF: classF (5.24/1.11)
|   |   |   prevPredS = classG: classG (1.83/0.66)
|   |   feature5 = classF: classF (21.47/7.96)
|   |   feature5 = classG: classG (24.31/6.34)
feature3 = classD
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.5: classD (60.4/12.53)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature9 <= 0.9: classA (3.62/2.25)
|   |   |   |   |   |   |   feature9 > 0.9: classF (26.97/8.89)
|   |   |   |   |   |   feature6 > 0.5667: classD (14.34/4.84)
|   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   prevPredS = classC: classA (0.66/0.34)
|   |   |   |   |   prevPredS = classD: classD (0.0)
|   |   |   |   |   prevPredS = classE: classA (0.11/0.06)
|   |   |   |   |   prevPredS = classF: classC (1.68/1.05)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature6 <= 0.5333: classD (15.32/0.97)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (8.12/0.52)
|   |   |   |   |   |   |   feature6 > 0.5667: classD (12.56/4.96)
|   |   |   feature2 = classB
|   |   |   |   feature6 <= 0.5667: classB (13.93/2.6)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6: classA (3.58/0.56)
|   |   |   |   |   feature6 > 0.6: classD (3.34/0.78)
|   |   |   feature2 = classC
|   |   |   |   feature6 <= 0.5333: classC (10.73/1.76)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classB (2.21/0.28)
|   |   |   |   |   feature6 > 0.5667: classD (2.79/0.86)
|   |   |   feature2 = classD
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature8 <= 0.8: classD (73.25/12.79)
|   |   |   |   |   feature8 > 0.8
|   |   |   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   feature5 = classC: classA (9.11/1.31)
|   |   |   |   |   |   feature5 = classD: classA (67.16/11.85)
|   |   |   |   |   |   feature5 = classE: classD (18.56/3.77)
|   |   |   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classB (45.55/7.82)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature6 <= 0.6: classG (5.19/1.12)
|   |   |   |   |   |   |   feature6 > 0.6: classD (80.64/28.29)
|   |   |   |   |   |   feature6 > 0.6333: classG (8.42/1.64)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.3: classD (16.68/1.32)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature7 <= 0.76
|   |   |   |   |   |   |   feature7 <= 0.36: classE (7.0/1.15)
|   |   |   |   |   |   |   feature7 > 0.36: classA (36.64/3.86)
|   |   |   |   |   |   feature7 > 0.76: classE (14.0/2.31)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5333: classG (2.49/0.99)
|   |   |   |   |   |   feature6 > 0.5333: classB (16.68/2.71)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature6 <= 0.6: classG (2.2/0.69)
|   |   |   |   |   |   |   feature6 > 0.6: classD (15.17/1.2)
|   |   |   |   |   |   feature6 > 0.6333: classG (3.14/0.63)
|   |   |   feature2 = classF: classA (5.07/2.02)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.4: classD (32.95/3.51)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5333: classG (5.37/1.21)
|   |   |   |   |   |   feature6 > 0.5333: classB (8.82/1.94)
|   |   |   |   |   feature6 > 0.6: classD (8.99/2.11)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7: classE (107.04/25.74)
|   |   |   feature6 > 0.7
|   |   |   |   feature8 <= 0.5667
|   |   |   |   |   feature8 <= 0.5333: classA (16.54/1.62)
|   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   feature7 <= 0.96: classA (3.34/0.33)
|   |   |   |   |   |   feature7 > 0.96: classD (18.21/3.53)
|   |   |   |   feature8 > 0.5667: classA (118.53/11.86)
|   predS = classB
|   |   feature5 = classA
|   |   |   feature6 <= 0.9667: classB (2.95/0.54)
|   |   |   feature6 > 0.9667: classA (3.46/0.97)
|   |   feature5 = classB
|   |   |   feature9 <= 0.9: classB (22.32/6.57)
|   |   |   feature9 > 0.9
|   |   |   |   feature7 <= 0.72: classA (12.97/3.54)
|   |   |   |   feature7 > 0.72
|   |   |   |   |   feature6 <= 0.9667: classB (15.62/3.78)
|   |   |   |   |   feature6 > 0.9667: classA (73.61/31.52)
|   |   feature5 = classC
|   |   |   prevPredS = classA: classE (1.2/0.78)
|   |   |   prevPredS = classB: classA (11.62/3.53)
|   |   |   prevPredS = classC: classB (0.84/0.09)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classE (6.32/1.85)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   feature5 = classD: classA (2.56/1.5)
|   |   feature5 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.6667: classA (18.65/3.99)
|   |   |   |   feature6 > 0.6667: classB (4.88/0.83)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.9667: classB (6.5/1.74)
|   |   |   |   feature6 > 0.9667: classA (29.47/5.74)
|   |   |   prevPredS = classC: classB (2.31/0.21)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classA (0.0)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   feature5 = classF: classB (0.46/0.24)
|   |   feature5 = classG: classA (0.46/0.27)
|   predS = classC
|   |   feature6 <= 0.2667: classA (93.54/12.24)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.4
|   |   |   |   feature6 <= 0.3667
|   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   feature6 <= 0.3: classE (8.61/4.15)
|   |   |   |   |   |   feature6 > 0.3: classC (3.24/1.7)
|   |   |   |   |   feature6 > 0.3333: classG (9.66/3.71)
|   |   |   |   feature6 > 0.3667: classF (12.89/4.64)
|   |   |   feature6 > 0.4
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.9667: classC (2.68/1.04)
|   |   |   |   |   |   feature6 > 0.9667: classD (7.81/0.5)
|   |   |   |   |   feature9 > 0.3667
|   |   |   |   |   |   feature6 <= 0.7333: classC (12.46/2.63)
|   |   |   |   |   |   feature6 > 0.7333: classA (7.34/2.88)
|   |   |   |   prevPredS = classB: classC (1.78/0.26)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5: classD (7.71/0.49)
|   |   |   |   |   |   |   feature6 > 0.5: classC (6.07/1.49)
|   |   |   |   |   |   feature6 > 0.5667: classD (66.39/9.58)
|   |   |   |   |   feature9 > 0.8667: classC (18.17/3.19)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.8667: classD (59.59/7.47)
|   |   |   |   |   feature6 > 0.8667: classC (6.93/0.46)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667: classD (3.12/0.2)
|   |   |   |   |   feature6 > 0.4667: classC (6.01/2.89)
|   |   |   |   prevPredS = classF: classE (5.89/2.89)
|   |   |   |   prevPredS = classG: classD (0.0)
|   predS = classD
|   |   feature6 <= 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.5: classD (3.11/1.09)
|   |   |   |   |   |   |   |   feature9 > 0.5: classC (10.12/5.36)
|   |   |   |   |   |   |   feature6 > 0.5: classD (13.29/5.63)
|   |   |   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   |   |   feature5 = classC: classA (6.85/3.92)
|   |   |   |   |   |   feature5 = classD: classD (0.69/0.39)
|   |   |   |   |   |   feature5 = classE: classC (0.0)
|   |   |   |   |   |   feature5 = classF: classD (0.61/0.35)
|   |   |   |   |   |   feature5 = classG: classC (0.0)
|   |   |   |   |   feature9 > 0.8667
|   |   |   |   |   |   feature6 <= 0.4: classA (17.64/1.55)
|   |   |   |   |   |   feature6 > 0.4: classG (4.11/1.71)
|   |   |   |   feature9 > 0.9667
|   |   |   |   |   feature6 <= 0.4: classE (15.75/1.01)
|   |   |   |   |   feature6 > 0.4: classG (2.79/0.74)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC: classD (0.84/0.21)
|   |   |   |   feature5 = classD: classD (12.77/2.65)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.5333: classG (2.77/1.34)
|   |   |   |   |   feature6 > 0.5333: classC (10.2/1.42)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classD (0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.3667
|   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   feature9 <= 0.4: classA (16.23/1.88)
|   |   |   |   |   |   feature9 > 0.4: classD (20.92/1.74)
|   |   |   |   |   feature7 > 0.8: classA (94.79/8.69)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classD (48.86/3.21)
|   |   |   |   |   |   feature6 > 0.4333: classG (81.18/45.09)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   |   feature2 = classC: classD (0.42/0.08)
|   |   |   |   |   |   |   feature2 = classD: classD (44.99/8.69)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classD: classD (3.85/0.74)
|   |   |   |   |   |   |   |   feature5 = classE: classE (3.89/0.84)
|   |   |   |   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   |   |   feature2 = classF: classD (1.96/0.38)
|   |   |   |   |   |   |   feature2 = classG: classG (1.73/0.25)
|   |   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classG (3.48/1.32)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (16.1/1.76)
|   |   |   |   |   |   |   feature9 > 0.6333: classD (11.19/2.07)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature7 <= 0.36
|   |   |   |   |   |   feature6 <= 0.4667: classE (19.64/4.83)
|   |   |   |   |   |   feature6 > 0.4667: classD (8.13/0.72)
|   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   feature7 <= 0.6: classD (103.16/22.04)
|   |   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (7.06/1.03)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (4.06/2.04)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature6 <= 0.2667: classD (7.8/0.49)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   |   feature9 <= 0.9: classE (4.77/0.31)
|   |   |   |   |   |   |   feature9 > 0.9: classA (3.12/0.2)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.5333: classG (15.94/5.68)
|   |   |   |   |   |   |   feature6 > 0.5333: classE (8.26/0.96)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.2667
|   |   |   |   |   feature6 <= 0.4333: classA (16.32/1.72)
|   |   |   |   |   feature6 > 0.4333: classG (3.88/1.64)
|   |   |   |   feature9 > 0.2667
|   |   |   |   |   feature6 <= 0.3667: classD (16.4/1.52)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4: classF (9.37/0.01)
|   |   |   |   |   |   feature6 > 0.4: classD (17.59/7.04)
|   |   |   prevPredS = classG
|   |   |   |   feature5 = classA: classE (4.04/1.09)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature9 <= 0.5333: classD (65.23/13.54)
|   |   |   |   |   feature9 > 0.5333: classG (10.27/1.31)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.5333: classG (2.29/0.49)
|   |   |   |   |   feature6 > 0.5333: classF (7.98/0.04)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classG (1.16/0.38)
|   |   feature6 > 0.5667
|   |   |   feature9 <= 0.5333
|   |   |   |   feature6 <= 0.9
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   prevPredS = classA: classD (9.24/0.59)
|   |   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   |   feature9 <= 0.3667: classE (6.29/0.44)
|   |   |   |   |   |   |   feature9 > 0.3667
|   |   |   |   |   |   |   |   feature7 <= 0.32: classE (3.5/0.58)
|   |   |   |   |   |   |   |   feature7 > 0.32: classD (11.54/0.73)
|   |   |   |   |   |   prevPredS = classD: classD (31.94/2.03)
|   |   |   |   |   |   prevPredS = classE: classD (14.23/0.9)
|   |   |   |   |   |   prevPredS = classF: classD (1.98/0.13)
|   |   |   |   |   |   prevPredS = classG: classD (3.92/0.57)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   prevPredS = classA: classC (11.68/0.82)
|   |   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   |   prevPredS = classC: classD (0.56/0.04)
|   |   |   |   |   |   prevPredS = classD: classD (4.35/0.28)
|   |   |   |   |   |   prevPredS = classE: classD (1.69/0.11)
|   |   |   |   |   |   prevPredS = classF: classD (0.28/0.02)
|   |   |   |   |   |   prevPredS = classG: classD (0.28/0.02)
|   |   |   |   feature6 > 0.9
|   |   |   |   |   prevPredS = classA: classC (3.19/0.29)
|   |   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   |   prevPredS = classC: classC (3.21/0.29)
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature9 <= 0.4667: classF (17.24/1.53)
|   |   |   |   |   |   feature9 > 0.4667: classD (2.37/0.15)
|   |   |   |   |   prevPredS = classE: classD (0.58/0.04)
|   |   |   |   |   prevPredS = classF: classD (0.58/0.04)
|   |   |   |   |   prevPredS = classG: classF (0.0)
|   |   |   feature9 > 0.5333
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature9 <= 0.9667: classD (21.43/1.36)
|   |   |   |   |   feature9 > 0.9667: classC (6.25/0.4)
|   |   |   |   feature6 > 0.6: classD (712.22/54.0)
|   predS = classE
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.3: classG (152.31/65.05)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature6 <= 0.3667: classD (2.37/0.29)
|   |   |   |   |   |   feature6 > 0.3667: classE (3.51/0.38)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC: classA (4.2/1.28)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature9 <= 0.6333: classD (33.67/3.74)
|   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   feature9 <= 0.6667: classA (16.71/2.37)
|   |   |   |   |   |   |   feature9 > 0.6667: classE (2.83/1.41)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature9 <= 0.4333: classA (3.34/0.41)
|   |   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.5: classD (4.21/1.07)
|   |   |   |   |   |   |   |   feature9 > 0.5: classE (3.27/1.76)
|   |   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   |   prevPredS = classC: classE (0.0)
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature7 <= 0.44
|   |   |   |   |   |   |   |   feature9 <= 0.3333: classD (2.35/0.17)
|   |   |   |   |   |   |   |   feature9 > 0.3333: classA (17.85/3.51)
|   |   |   |   |   |   |   feature7 > 0.44: classD (9.18/0.66)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature9 <= 0.4667: classE (13.07/2.82)
|   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4: classD (8.1/0.65)
|   |   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   |   feature9 <= 0.8: classE (4.43/0.28)
|   |   |   |   |   |   |   |   |   feature9 > 0.8: classD (3.12/0.2)
|   |   |   |   |   |   prevPredS = classF: classE (16.38/1.89)
|   |   |   |   |   |   prevPredS = classG: classE (1.76/0.26)
|   |   |   |   |   feature2 = classF: classD (0.89/0.27)
|   |   |   |   |   feature2 = classG: classG (18.55/4.2)
|   |   |   |   feature6 > 0.4333: classC (243.68/158.5)
|   |   feature6 > 0.4667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5667: classC (9.18/1.31)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   feature6 <= 0.5: classD (5.23/2.04)
|   |   |   |   |   feature6 > 0.5: classE (19.56/1.55)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.5333: classA (3.19/0.26)
|   |   |   |   feature6 > 0.5333: classB (3.26/0.29)
|   |   |   prevPredS = classC: classE (31.68/2.59)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature8 <= 0.6333: classE (77.39/8.86)
|   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   feature5 = classA: classD (0.65/0.13)
|   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   feature5 = classD: classD (14.19/2.75)
|   |   |   |   |   |   feature5 = classE: classE (2.73/0.48)
|   |   |   |   |   |   feature5 = classF: classF (0.04/0.0)
|   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   feature9 > 0.6333: classD (45.87/3.87)
|   |   |   prevPredS = classE
|   |   |   |   feature8 <= 0.7667
|   |   |   |   |   feature2 = classA: classA (4.91/2.45)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classE (2.76/0.21)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature7 <= 0.4: classD (6.12/0.77)
|   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   feature9 <= 0.6667: classE (11.03/0.96)
|   |   |   |   |   |   |   feature9 > 0.6667: classD (2.35/0.77)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature7 <= 0.56: classE (95.22/10.62)
|   |   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   |   feature8 <= 0.5667: classE (50.84/8.46)
|   |   |   |   |   |   |   feature8 > 0.5667
|   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   feature9 <= 0.4333: classE (2.28/0.17)
|   |   |   |   |   |   |   |   |   feature9 > 0.4333: classD (27.75/3.51)
|   |   |   |   |   |   |   |   feature9 > 0.6333: classE (8.42/2.98)
|   |   |   |   |   feature2 = classF: classE (0.15/0.01)
|   |   |   |   |   feature2 = classG: classE (0.05/0.0)
|   |   |   |   feature8 > 0.7667
|   |   |   |   |   feature9 <= 0.4667: classE (4.71/1.94)
|   |   |   |   |   feature9 > 0.4667: classD (40.68/11.3)
|   |   |   prevPredS = classF
|   |   |   |   feature2 = classA: classA (0.0)
|   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   feature2 = classC: classF (3.29/0.09)
|   |   |   |   feature2 = classD: classD (0.01/0.0)
|   |   |   |   feature2 = classE: classA (0.0)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   feature5 = classC: classA (6.58/0.66)
|   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   feature5 = classE: classA (0.0)
|   |   |   |   |   feature5 = classF: classE (3.94/0.9)
|   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   feature2 = classG: classA (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.6667: classE (5.22/2.2)
|   |   |   |   feature9 > 0.6667: classG (7.43/0.63)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.3: classA (6.65/0.81)
|   |   |   |   |   |   feature6 > 0.3: classE (4.04/1.12)
|   |   |   |   |   feature9 > 0.4667: classD (12.09/4.78)
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature6 <= 0.4: classB (4.01/1.08)
|   |   |   |   |   feature6 > 0.4: classE (3.12/0.2)
|   |   |   |   prevPredS = classC: classC (0.01/0.0)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.2667: classG (3.64/0.24)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   feature8 <= 0.8667: classD (2.5/0.37)
|   |   |   |   |   |   |   feature8 > 0.8667: classA (59.84/5.93)
|   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.3: classA (6.28/0.43)
|   |   |   |   |   |   |   feature6 > 0.3: classD (23.62/4.1)
|   |   |   |   prevPredS = classE: classE (10.55/4.17)
|   |   |   |   prevPredS = classF: classA (19.68/4.03)
|   |   |   |   prevPredS = classG: classD (8.9/1.59)
|   |   |   feature6 > 0.4333
|   |   |   |   feature9 <= 0.8333
|   |   |   |   |   feature7 <= 0.4: classE (29.62/3.33)
|   |   |   |   |   feature7 > 0.4: classD (13.71/2.07)
|   |   |   |   feature9 > 0.8333: classB (90.05/8.75)
|   |   feature6 > 0.4667
|   |   |   feature2 = classA: classF (27.9/4.62)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (10.61/2.2)
|   |   |   feature2 = classD
|   |   |   |   prevPredS = classA: classD (11.46/3.94)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classF (0.08/0.01)
|   |   |   |   prevPredS = classD: classD (28.96/5.83)
|   |   |   |   prevPredS = classE: classF (0.89/0.32)
|   |   |   |   prevPredS = classF: classF (3.96/1.99)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.5333: classF (3.92/0.31)
|   |   |   |   |   feature6 > 0.5333: classG (2.16/0.45)
|   |   |   feature2 = classE
|   |   |   |   feature5 = classA: classF (0.0)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC: classF (12.04/2.0)
|   |   |   |   feature5 = classD: classD (3.19/1.56)
|   |   |   |   feature5 = classE
|   |   |   |   |   prevPredS = classA: classA (1.23/0.72)
|   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   prevPredS = classC: classF (0.05/0.0)
|   |   |   |   |   prevPredS = classD: classF (0.07/0.0)
|   |   |   |   |   prevPredS = classE: classF (4.04/0.27)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.5333: classD (17.83/2.89)
|   |   |   |   |   |   feature6 > 0.5333: classF (3.02/1.34)
|   |   |   |   |   prevPredS = classG: classF (3.51/1.23)
|   |   |   |   feature5 = classF: classF (0.54/0.09)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   feature2 = classF
|   |   |   |   prevPredS = classA: classE (9.1/3.25)
|   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   prevPredS = classC: classF (0.06/0.0)
|   |   |   |   prevPredS = classD: classD (0.56/0.29)
|   |   |   |   prevPredS = classE: classF (1.38/0.09)
|   |   |   |   prevPredS = classF: classF (12.65/2.17)
|   |   |   |   prevPredS = classG: classF (16.07/2.4)
|   |   |   feature2 = classG: classG (0.27/0.08)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature6 <= 0.2667: classD (16.34/1.99)
|   |   |   feature6 > 0.2667
|   |   |   |   feature2 = classA: classA (21.91/6.56)
|   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   feature2 = classD: classG (0.03/0.01)
|   |   |   |   feature2 = classE: classA (0.0)
|   |   |   |   feature2 = classF: classG (1.01/0.4)
|   |   |   |   feature2 = classG: classG (2.98/0.55)
|   |   feature5 = classB: classD (0.0)
|   |   feature5 = classC: classA (7.81/1.86)
|   |   feature5 = classD
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6667
|   |   |   |   |   feature9 <= 0.5333: classC (2.67/1.01)
|   |   |   |   |   feature9 > 0.5333: classG (2.75/0.27)
|   |   |   |   feature9 > 0.6667: classF (3.09/0.76)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.8: classD (52.76/6.34)
|   |   |   |   feature6 > 0.8: classG (3.65/0.53)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.3333: classG (2.56/1.52)
|   |   |   |   feature6 > 0.3333: classD (17.41/2.77)
|   |   |   prevPredS = classF: classG (1.58/0.16)
|   |   |   prevPredS = classG
|   |   |   |   feature2 = classA: classA (0.94/0.26)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   feature2 = classD: classD (12.44/2.21)
|   |   |   |   feature2 = classE: classG (3.78/0.36)
|   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   feature2 = classG: classG (0.69/0.07)
|   |   feature5 = classE
|   |   |   feature9 <= 0.5
|   |   |   |   prevPredS = classA: classE (4.2/1.23)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   |   prevPredS = classD: classG (0.03/0.0)
|   |   |   |   prevPredS = classE: classG (12.18/1.88)
|   |   |   |   prevPredS = classF: classF (7.07/0.54)
|   |   |   |   prevPredS = classG: classA (1.15/0.44)
|   |   |   feature9 > 0.5
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   prevPredS = classA: classD (18.27/3.92)
|   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   prevPredS = classC: classD (0.0)
|   |   |   |   |   prevPredS = classD: classG (0.03/0.0)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.5333: classD (16.32/1.97)
|   |   |   |   |   |   feature9 > 0.5333: classA (6.64/0.79)
|   |   |   |   |   prevPredS = classF: classG (0.83/0.08)
|   |   |   |   |   prevPredS = classG: classD (16.62/2.27)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.6667: classG (2.89/0.28)
|   |   |   |   |   |   feature9 > 0.6667: classF (3.24/0.79)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   |   prevPredS = classE: classG (2.0/0.91)
|   |   |   |   |   prevPredS = classF: classA (16.99/2.39)
|   |   |   |   |   prevPredS = classG: classG (1.49/0.14)
|   |   feature5 = classF
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9: classG (3.33/2.03)
|   |   |   |   feature9 > 0.9: classA (3.32/0.4)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classD (16.31/1.96)
|   |   |   prevPredS = classE: classG (1.08/0.63)
|   |   |   prevPredS = classF: classG (1.11/0.53)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.7: classF (13.6/0.52)
|   |   |   |   feature6 > 0.7: classG (2.19/0.62)
|   |   feature5 = classG
|   |   |   feature2 = classA: classA (1.42/0.47)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classG (38.47/5.8)
|   |   |   feature2 = classE: classG (0.21/0.03)
|   |   |   feature2 = classF: classG (1.24/0.19)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.6667: classG (4.09/1.58)
|   |   |   |   |   |   feature9 > 0.6667: classF (3.12/0.76)
|   |   |   |   |   prevPredS = classB: classG (0.12/0.01)
|   |   |   |   |   prevPredS = classC: classG (0.02/0.0)
|   |   |   |   |   prevPredS = classD: classD (16.69/2.34)
|   |   |   |   |   prevPredS = classE: classG (2.91/1.67)
|   |   |   |   |   prevPredS = classF: classG (1.79/0.2)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (15.39/1.04)
|   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   feature6 <= 0.6667: classG (5.15/2.06)
|   |   |   |   |   |   |   |   feature6 > 0.6667: classD (16.17/1.82)
|   |   |   |   |   |   feature7 > 0.72: classG (5.8/0.64)
|   |   |   |   feature6 > 0.7: classG (32.31/2.56)
feature3 = classE
|   prevPredS = classA
|   |   predS = classA
|   |   |   feature9 <= 0.6
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature8 <= 0.6: classD (23.91/5.43)
|   |   |   |   |   |   feature8 > 0.6: classA (5.16/1.6)
|   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   |   feature2 = classE: classA (40.12/7.02)
|   |   |   |   |   feature2 = classF: classA (0.19/0.03)
|   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5333: classC (70.34/21.17)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature9 <= 0.5667: classA (19.29/3.37)
|   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333: classG (12.77/0.91)
|   |   |   |   |   |   |   feature6 > 0.5333: classA (3.97/2.1)
|   |   |   feature9 > 0.6
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature8 <= 0.9333: classE (32.12/5.48)
|   |   |   |   |   |   feature8 > 0.9333: classA (27.46/3.12)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature2 = classA: classF (34.45/10.13)
|   |   |   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   |   |   feature2 = classC: classF (0.0)
|   |   |   |   |   |   feature2 = classD: classF (0.0)
|   |   |   |   |   |   feature2 = classE: classE (22.26/7.91)
|   |   |   |   |   |   feature2 = classF: classA (11.33/4.03)
|   |   |   |   |   |   feature2 = classG: classF (0.0)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.9333
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.9: classA (32.24/11.99)
|   |   |   |   |   |   |   feature9 > 0.9: classE (39.17/16.22)
|   |   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   feature8 <= 0.9333
|   |   |   |   |   |   |   |   |   feature7 <= 0.44: classA (9.12/1.27)
|   |   |   |   |   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.8667: classA (3.68/0.51)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.8667: classE (67.42/4.94)
|   |   |   |   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   |   |   |   feature6 <= 0.7: classE (2.15/0.15)
|   |   |   |   |   |   |   |   |   feature6 > 0.7: classA (24.37/1.55)
|   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   feature9 <= 0.9667: classA (107.24/18.85)
|   |   |   |   |   |   |   |   feature9 > 0.9667
|   |   |   |   |   |   |   |   |   feature8 <= 0.8: classA (24.03/5.26)
|   |   |   |   |   |   |   |   |   feature8 > 0.8
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.8333: classE (18.86/3.09)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.8333: classA (6.56/1.44)
|   |   |   |   |   feature6 > 0.9333: classA (97.81/6.21)
|   |   predS = classB
|   |   |   feature6 <= 0.5333
|   |   |   |   feature9 <= 0.6333: classE (8.99/2.96)
|   |   |   |   feature9 > 0.6333: classA (18.14/3.16)
|   |   |   feature6 > 0.5333: classB (18.39/3.33)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (31.64/5.54)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.3333: classD (5.04/2.09)
|   |   |   |   |   |   feature6 > 0.3333: classG (10.33/2.28)
|   |   |   |   |   feature6 > 0.3667: classF (13.2/2.3)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.7333: classC (19.63/5.29)
|   |   |   |   |   feature6 > 0.7333: classA (10.11/4.08)
|   |   predS = classD
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.3333: classE (2.76/0.36)
|   |   |   |   |   feature6 > 0.3333: classA (2.31/0.3)
|   |   |   |   feature6 > 0.4: classG (61.53/33.54)
|   |   |   feature6 > 0.5
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   feature9 <= 0.4667: classD (11.81/0.75)
|   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   feature9 <= 0.5333: classC (3.48/0.48)
|   |   |   |   |   |   |   feature9 > 0.5333: classD (8.84/0.56)
|   |   |   |   |   feature7 > 0.56: classA (5.14/1.19)
|   |   |   |   feature9 > 0.9333: classE (25.2/3.3)
|   |   predS = classE
|   |   |   feature6 <= 0.3
|   |   |   |   feature6 <= 0.2333: classE (4.63/0.6)
|   |   |   |   feature6 > 0.2333: classG (43.83/9.82)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature9 <= 0.3667: classD (16.58/1.18)
|   |   |   |   |   feature9 > 0.3667
|   |   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   |   feature9 <= 0.4667: classA (4.22/0.27)
|   |   |   |   |   |   |   feature9 > 0.4667: classE (5.02/1.17)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature7 <= 0.4
|   |   |   |   |   |   |   |   feature2 = classA: classE (2.82/0.61)
|   |   |   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   |   |   |   |   feature2 = classD: classD (0.0)
|   |   |   |   |   |   |   |   feature2 = classE: classD (5.54/1.25)
|   |   |   |   |   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   |   |   |   feature7 > 0.4: classE (25.47/5.5)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classC (68.26/37.59)
|   |   |   |   |   feature6 > 0.4667: classE (61.94/13.9)
|   |   predS = classF
|   |   |   feature9 <= 0.8
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature9 <= 0.3333
|   |   |   |   |   |   feature9 <= 0.3: classE (4.47/0.52)
|   |   |   |   |   |   feature9 > 0.3: classG (24.78/2.54)
|   |   |   |   |   feature9 > 0.3333
|   |   |   |   |   |   feature6 <= 0.3333: classA (8.88/0.77)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.5: classE (16.3/1.7)
|   |   |   |   |   |   |   feature6 > 0.5: classA (4.92/0.72)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5333: classC (25.55/6.99)
|   |   |   |   |   feature9 > 0.5333: classF (8.32/1.57)
|   |   |   feature9 > 0.8
|   |   |   |   feature9 <= 0.8667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classA (3.27/1.86)
|   |   |   |   |   |   feature6 > 0.4333: classB (121.61/11.67)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5333: classF (3.04/1.41)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classE (8.95/1.04)
|   |   |   |   |   |   |   feature6 > 0.5667: classF (2.14)
|   |   |   |   feature9 > 0.8667
|   |   |   |   |   feature9 <= 0.9: classA (16.24/1.67)
|   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   feature6 <= 0.4667: classE (24.07/2.17)
|   |   |   |   |   |   feature6 > 0.4667: classF (5.26/0.4)
|   |   predS = classG
|   |   |   feature9 <= 0.6667
|   |   |   |   feature2 = classA
|   |   |   |   |   feature9 <= 0.5333: classC (4.39/1.32)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature9 <= 0.6333: classG (2.3/0.22)
|   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   feature6 <= 0.5667: classA (8.42/1.12)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (2.96/0.19)
|   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   feature2 = classD: classG (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature9 <= 0.4667: classE (4.58/0.56)
|   |   |   |   |   feature9 > 0.4667: classG (4.4/1.95)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature7 <= 0.36: classG (8.99/2.4)
|   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   feature9 <= 0.5: classA (9.01/1.1)
|   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   feature9 <= 0.5333: classC (3.41/0.42)
|   |   |   |   |   |   |   feature9 > 0.5333: classG (5.25/0.51)
|   |   |   |   feature2 = classG: classG (0.32/0.09)
|   |   |   feature9 > 0.6667
|   |   |   |   feature6 <= 0.5: classE (14.62/5.22)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature9 <= 0.7333: classE (4.25/0.29)
|   |   |   |   |   |   |   feature9 > 0.7333: classF (12.74/0.06)
|   |   |   |   |   |   feature6 > 0.7: classA (10.67/0.83)
|   |   |   |   |   feature9 > 0.8: classA (40.8/3.46)
|   prevPredS = classB
|   |   predS = classA
|   |   |   feature6 <= 0.6: classB (9.7/1.77)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.6333: classD (4.25/0.27)
|   |   |   |   feature6 > 0.6333: classE (4.51/0.54)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (12.08/0.79)
|   |   |   feature9 > 0.9
|   |   |   |   feature7 <= 0.72: classA (20.8/2.31)
|   |   |   |   feature7 > 0.72
|   |   |   |   |   feature6 <= 0.9333: classB (2.95/0.45)
|   |   |   |   |   feature6 > 0.9333
|   |   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   |   feature6 <= 0.9667: classA (4.21/0.76)
|   |   |   |   |   |   |   feature6 > 0.9667: classB (3.32/0.22)
|   |   |   |   |   |   feature9 > 0.9667: classA (132.11/36.06)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (5.04/1.06)
|   |   |   feature6 > 0.2667: classC (4.0/1.76)
|   |   predS = classD: classG (6.53/2.26)
|   |   predS = classE
|   |   |   feature6 <= 0.3667: classG (4.78/0.81)
|   |   |   feature6 > 0.3667
|   |   |   |   feature6 <= 0.5333: classA (19.63/7.74)
|   |   |   |   feature6 > 0.5333: classB (4.6/0.58)
|   |   predS = classF
|   |   |   feature6 <= 0.3333: classB (4.83/0.88)
|   |   |   feature6 > 0.3333: classE (6.0/2.04)
|   |   predS = classG: classF (1.46/0.66)
|   prevPredS = classC
|   |   predS = classA
|   |   |   feature6 <= 0.5333
|   |   |   |   feature9 <= 0.5: classA (2.23/0.16)
|   |   |   |   feature9 > 0.5: classC (13.16/1.27)
|   |   |   feature6 > 0.5333
|   |   |   |   feature6 <= 0.6: classB (5.88/2.79)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (3.31/0.22)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.7: classE (3.48/0.39)
|   |   |   |   |   |   feature6 > 0.7: classA (2.3/0.15)
|   |   predS = classB
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.4: classE (7.81/0.51)
|   |   |   |   |   feature6 > 0.4: classB (4.63/0.41)
|   |   |   |   feature6 > 0.6333: classE (15.62/1.02)
|   |   |   feature6 > 0.6667: classB (5.94/0.5)
|   |   predS = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333: classE (11.9/4.15)
|   |   |   |   feature6 > 0.4333: classD (8.7/0.68)
|   |   |   feature6 > 0.5333
|   |   |   |   feature7 <= 0.6
|   |   |   |   |   feature6 <= 0.6: classC (5.1/0.32)
|   |   |   |   |   feature6 > 0.6: classD (4.66/0.64)
|   |   |   |   feature7 > 0.6: classC (25.73/1.95)
|   |   predS = classD
|   |   |   feature9 <= 0.8
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.4333: classD (2.87/0.86)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333: classG (2.94/0.71)
|   |   |   |   |   |   |   feature6 > 0.5333: classD (2.23/0.14)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC
|   |   |   |   |   |   |   feature9 <= 0.4: classE (2.57/0.17)
|   |   |   |   |   |   |   feature9 > 0.4: classD (3.46/0.22)
|   |   |   |   |   |   feature5 = classD: classE (12.26/3.43)
|   |   |   |   |   |   feature5 = classE: classE (1.57/0.42)
|   |   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   feature6 > 0.8667: classC (10.63/2.72)
|   |   |   feature9 > 0.8
|   |   |   |   feature9 <= 0.9333: classA (4.68/0.73)
|   |   |   |   feature9 > 0.9333: classC (13.98/2.05)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (3.46/0.37)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4667: classC (7.63/4.45)
|   |   |   |   feature6 > 0.4667: classE (2.49/0.6)
|   |   predS = classF: classF (2.63/1.44)
|   |   predS = classG: classF (1.1/0.47)
|   prevPredS = classD
|   |   feature6 <= 0.3333
|   |   |   predS = classA: classA (1.06/0.46)
|   |   |   predS = classB: classA (0.0)
|   |   |   predS = classC: classA (13.41/2.44)
|   |   |   predS = classD: classE (0.84/0.05)
|   |   |   predS = classE: classG (11.71/0.74)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.6: classD (8.21/0.91)
|   |   |   |   feature9 > 0.6: classA (25.03/2.18)
|   |   |   predS = classG: classG (0.08/0.0)
|   |   feature6 > 0.3333
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6: classB (14.79/3.82)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (11.71/0.74)
|   |   |   |   |   feature6 > 0.6333: classE (13.21/2.25)
|   |   |   predS = classB: classB (6.63/1.21)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.8667: classD (8.59/3.38)
|   |   |   |   feature6 > 0.8667: classC (9.26/0.59)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.9
|   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   feature8 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (6.23/0.66)
|   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (2.17/0.34)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classG (13.8/8.1)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5: classE (2.46/0.3)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5: classD (12.5/1.06)
|   |   |   |   |   |   |   |   |   feature9 > 0.4667: classG (5.55/1.21)
|   |   |   |   |   |   |   |   feature9 > 0.5: classD (79.82/10.18)
|   |   |   |   |   |   feature8 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   |   |   feature2 = classC: classD (0.07/0.02)
|   |   |   |   |   |   |   |   feature2 = classD: classD (13.63/5.32)
|   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (5.29/2.44)
|   |   |   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (5.68/2.79)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (8.67/0.79)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classG (5.05/2.85)
|   |   |   |   |   |   |   |   feature2 = classF: classD (1.88/0.66)
|   |   |   |   |   |   |   |   feature2 = classG: classG (0.14/0.04)
|   |   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   |   feature6 <= 0.7333: classE (48.28/7.03)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classD (13.05/2.14)
|   |   |   |   |   feature9 > 0.9667
|   |   |   |   |   |   feature7 <= 0.64: classC (9.17/1.26)
|   |   |   |   |   |   feature7 > 0.64: classD (2.41/0.3)
|   |   |   |   feature6 > 0.9
|   |   |   |   |   feature9 <= 0.5: classF (21.25/0.13)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.6333: classC (4.72/0.76)
|   |   |   |   |   |   feature9 > 0.6333: classD (7.39/0.47)
|   |   |   predS = classE
|   |   |   |   feature8 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classD (17.31/1.18)
|   |   |   |   |   |   feature6 > 0.4333: classA (12.44/7.87)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.4333: classE (16.29/1.12)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (43.85/6.05)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (4.73/0.64)
|   |   |   |   feature8 > 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classD (14.71/2.1)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature9 <= 0.5333: classE (28.73/13.14)
|   |   |   |   |   |   |   feature9 > 0.5333: classD (4.31/1.97)
|   |   |   |   |   feature6 > 0.4667: classE (84.57/8.6)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.3667: classD (36.02/3.29)
|   |   |   |   feature6 > 0.3667: classF (5.94/2.98)
|   |   |   predS = classG
|   |   |   |   feature6 <= 0.4: classE (15.74/1.14)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature7 <= 0.32: classD (6.05/2.03)
|   |   |   |   |   feature7 > 0.32: classG (6.93/1.49)
|   prevPredS = classE
|   |   feature8 <= 0.6667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   |   |   feature5 = classB: classB (4.11/1.32)
|   |   |   |   |   |   |   feature5 = classC: classA (2.09/0.33)
|   |   |   |   |   |   |   feature5 = classD: classD (2.06/0.47)
|   |   |   |   |   |   |   feature5 = classE: classE (12.32/3.96)
|   |   |   |   |   |   |   feature5 = classF: classA (1.04/0.16)
|   |   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   |   feature6 > 0.5: classB (18.71/1.9)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classG (2.27/0.45)
|   |   |   |   |   |   feature6 > 0.6: classD (25.77/8.96)
|   |   |   |   feature6 > 0.6333
|   |   |   |   |   feature6 <= 0.6667: classA (15.66/1.0)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classE (17.98/1.18)
|   |   |   |   |   |   feature6 > 0.7: classA (2.38/0.15)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.3333: classE (2.27/0.14)
|   |   |   |   feature6 > 0.3333: classB (10.21/1.91)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (18.92/2.12)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classD (8.03/5.22)
|   |   |   |   |   feature2 = classD: classD (0.01/0.0)
|   |   |   |   |   feature2 = classE: classE (5.73/2.56)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.3: classA (19.09/3.34)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature9 <= 0.6: classE (4.17/0.32)
|   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   feature9 <= 0.6667: classG (3.4/0.61)
|   |   |   |   |   |   |   |   feature9 > 0.6667: classE (2.79/0.18)
|   |   |   |   |   |   feature6 > 0.4333: classG (22.52/5.72)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature8 <= 0.5: classD (46.21/4.64)
|   |   |   |   |   feature8 > 0.5
|   |   |   |   |   |   feature9 <= 0.4667: classD (2.4/0.77)
|   |   |   |   |   |   feature9 > 0.4667: classE (49.31/4.39)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature7 <= 0.36: classG (25.25/2.91)
|   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   feature6 <= 0.3: classG (12.64/3.58)
|   |   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   |   feature9 <= 0.6: classE (13.7/1.67)
|   |   |   |   |   |   |   |   feature9 > 0.6: classD (3.21/0.24)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature8 <= 0.6333: classE (21.98/3.66)
|   |   |   |   |   |   |   feature8 > 0.6333: classD (18.87/2.59)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (42.64/25.1)
|   |   |   |   |   |   |   feature5 = classE: classE (22.58/13.05)
|   |   |   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   |   |   feature5 = classG: classE (1.31/0.75)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   feature6 <= 0.7: classE (10.93/2.17)
|   |   |   |   |   |   |   feature6 > 0.7: classD (16.17/1.82)
|   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   feature2 = classC: classE (1.52/0.1)
|   |   |   |   |   |   feature2 = classD
|   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   feature7 <= 0.4: classD (3.09/0.3)
|   |   |   |   |   |   |   |   feature7 > 0.4: classE (16.65/1.28)
|   |   |   |   |   |   |   feature6 > 0.7333: classD (15.37/0.98)
|   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   feature7 <= 0.44
|   |   |   |   |   |   |   |   feature6 <= 0.7333: classE (2.4/0.26)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classG (31.34/2.64)
|   |   |   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   |   |   feature7 <= 0.68
|   |   |   |   |   |   |   |   |   feature5 = classA: classE (0.72/0.05)
|   |   |   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   |   |   feature5 = classD: classD (32.9/4.2)
|   |   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.56: classE (5.52/1.5)
|   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.56: classD (49.91/5.47)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.64: classE (19.39/1.29)
|   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.64: classD (17.23/2.88)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.6: classE (21.03/1.92)
|   |   |   |   |   |   |   |   |   feature5 = classF: classE (8.94/0.59)
|   |   |   |   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   |   |   |   feature7 > 0.68
|   |   |   |   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.5: classD (17.42/2.6)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.5
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.7333: classE (3.28/1.24)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.7333: classG (31.56/2.86)
|   |   |   |   |   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classD (15.8/1.45)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classE (16.09/2.51)
|   |   |   |   |   |   feature2 = classF: classE (12.33/0.82)
|   |   |   |   |   |   feature2 = classG: classG (7.98/0.68)
|   |   |   |   |   feature7 > 0.8: classE (37.78/2.51)
|   |   |   predS = classF
|   |   |   |   feature5 = classA: classE (1.27/0.2)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC: classF (4.22/0.94)
|   |   |   |   feature5 = classD: classD (1.72/0.29)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature7 <= 0.4: classE (6.52/0.94)
|   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (5.07/2.62)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (63.87/6.12)
|   |   |   |   |   |   |   |   feature6 > 0.5: classF (4.64/2.11)
|   |   |   |   |   feature9 > 0.6333: classE (9.93/1.37)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature8 <= 0.5667: classF (19.83/1.08)
|   |   |   |   |   feature8 > 0.5667: classE (8.95/1.55)
|   |   |   |   feature5 = classG: classD (0.0)
|   |   |   predS = classG
|   |   |   |   feature6 <= 0.3: classG (3.76/1.63)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature5 = classA: classE (34.78/5.41)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   feature5 = classD: classD (0.02/0.0)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   feature9 <= 0.5333: classG (5.86/0.61)
|   |   |   |   |   |   |   feature9 > 0.5333: classA (3.22/0.43)
|   |   |   |   |   |   feature9 > 0.5667: classE (27.95/3.76)
|   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   feature5 = classG: classG (0.99/0.12)
|   |   feature8 > 0.6667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.2667: classB (18.05/3.71)
|   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   |   |   feature2 = classB: classB (5.66/0.54)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classD (2.83/0.25)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.3: classE (32.6/3.11)
|   |   |   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.3333: classE (5.65/0.53)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.3333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.36: classE (5.65/0.53)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.36: classA (46.06/2.92)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classE (45.98/4.34)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88: classA (16.14/1.29)
|   |   |   |   |   |   |   feature2 = classF: classA (1.44/0.1)
|   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   feature6 > 0.5333: classB (34.33/3.48)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.6: classG (4.16/0.83)
|   |   |   |   |   |   feature6 > 0.6: classD (32.99/2.14)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   |   feature6 <= 0.6667: classA (15.38/0.98)
|   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.7: classE (15.17/1.25)
|   |   |   |   |   |   |   |   feature6 > 0.7: classA (12.18/0.77)
|   |   |   |   |   |   feature9 > 0.8333: classE (51.99/6.11)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.5333: classE (5.46/1.55)
|   |   |   |   feature6 > 0.5333: classB (18.02/2.25)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (34.73/3.88)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC
|   |   |   |   |   |   feature6 <= 0.4333: classC (2.79/1.36)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.4667: classD (2.73/0.17)
|   |   |   |   |   |   |   feature6 > 0.4667: classC (3.73/1.8)
|   |   |   |   |   feature2 = classD: classE (0.47/0.14)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.5667: classE (13.56/2.04)
|   |   |   |   |   |   feature6 > 0.5667: classC (3.14/2.08)
|   |   |   |   |   feature2 = classF: classE (12.98/4.02)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.2333: classA (15.32/0.97)
|   |   |   |   feature6 > 0.2333
|   |   |   |   |   feature9 <= 0.4
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (16.2/1.76)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (8.82/2.3)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classD (4.4/1.8)
|   |   |   |   |   |   feature6 > 0.5333: classE (25.22/2.27)
|   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   feature9 <= 0.6333: classE (9.42/0.6)
|   |   |   |   |   |   |   |   |   feature9 > 0.6333: classG (6.17/1.05)
|   |   |   |   |   |   |   |   feature9 > 0.6667: classE (64.14/4.07)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (119.03/41.05)
|   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   feature6 <= 0.3: classA (2.73/0.17)
|   |   |   |   |   |   |   feature6 > 0.3: classE (2.36/1.0)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.3: classG (40.75/9.9)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   |   |   |   feature7 <= 0.44: classE (2.94/0.3)
|   |   |   |   |   |   |   |   |   feature7 > 0.44: classD (12.1/1.38)
|   |   |   |   |   |   |   |   feature7 > 0.56: classE (13.89/1.44)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   |   |   feature5 = classD: classD (9.84/4.66)
|   |   |   |   |   |   |   |   feature5 = classE: classE (50.6/21.5)
|   |   |   |   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   feature6 <= 0.3333: classA (30.64/1.94)
|   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (18.86/3.37)
|   |   |   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   |   |   feature7 <= 0.72: classE (14.47/5.94)
|   |   |   |   |   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.4: classA (16.16/1.81)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.4: classE (26.84/4.26)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4333: classA (60.56/28.55)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   |   feature8 <= 0.8
|   |   |   |   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   |   |   |   feature9 <= 0.4667: classE (13.13/0.91)
|   |   |   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.48: classE (4.94/1.22)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.7667
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (17.08/2.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (4.25/0.78)
|   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.7667: classD (17.23/2.1)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (11.96/2.59)
|   |   |   |   |   |   |   |   feature7 > 0.64: classE (30.3/3.9)
|   |   |   |   |   |   |   feature8 > 0.8: classE (189.16/24.96)
|   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   feature8 <= 0.8667
|   |   |   |   |   |   |   |   feature7 <= 0.96: classE (2.47/0.17)
|   |   |   |   |   |   |   |   feature7 > 0.96: classA (16.58/2.14)
|   |   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   |   |   |   feature8 <= 0.9667: classE (18.97/1.31)
|   |   |   |   |   |   |   |   |   feature8 > 0.9667: classB (16.64/2.29)
|   |   |   |   |   |   |   |   feature7 > 0.84: classE (38.25/2.65)
|   |   |   |   |   feature6 > 0.7333: classE (364.15/23.1)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   feature9 <= 0.7: classA (37.31/5.4)
|   |   |   |   |   |   |   feature9 > 0.7: classE (3.21/0.56)
|   |   |   |   |   |   feature7 > 0.72: classE (24.51/4.29)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature5 = classA: classE (1.12/0.07)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   feature5 = classD: classD (2.73/0.17)
|   |   |   |   |   |   feature5 = classE: classE (19.29/1.22)
|   |   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   feature6 > 0.4667: classF (26.71/8.38)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   feature9 <= 0.3: classG (5.24/0.75)
|   |   |   |   |   |   feature9 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classA (8.78/1.77)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667: classF (2.54)
|   |   |   |   |   |   |   |   feature6 > 0.5: classA (15.32/0.97)
|   |   |   |   |   |   |   feature6 > 0.5333: classG (3.38/0.21)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature9 <= 0.3667: classG (7.77/1.11)
|   |   |   |   |   |   feature9 > 0.3667: classE (4.58/1.7)
|   |   |   |   feature9 > 0.5667: classE (22.41/4.47)
|   prevPredS = classF
|   |   feature2 = classA: classE (4.95/2.66)
|   |   feature2 = classB: classE (0.0)
|   |   feature2 = classC: classF (6.02/1.42)
|   |   feature2 = classD: classD (23.54/7.69)
|   |   feature2 = classE
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.5667: classB (11.67/5.3)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classA (26.24/4.23)
|   |   |   |   |   |   feature6 > 0.6: classD (7.37/0.47)
|   |   |   |   feature6 > 0.6333
|   |   |   |   |   feature9 <= 0.3333: classE (37.21/2.82)
|   |   |   |   |   feature9 > 0.3333: classD (4.46/1.49)
|   |   |   predS = classB: classB (4.17/1.02)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (7.77/1.39)
|   |   |   |   feature6 > 0.2667: classE (7.88/4.16)
|   |   |   predS = classD
|   |   |   |   feature9 <= 0.4: classD (8.06/1.51)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature9 <= 0.4667: classE (8.0/0.51)
|   |   |   |   |   |   feature9 > 0.4667: classF (8.8/0.21)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.4333: classE (23.38/1.48)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333: classG (8.0/1.93)
|   |   |   |   |   |   |   feature6 > 0.5333: classE (15.77/1.42)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (12.09/5.71)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   feature8 <= 0.6667
|   |   |   |   |   |   |   feature9 <= 0.3667: classD (5.42/1.97)
|   |   |   |   |   |   |   feature9 > 0.3667: classF (3.27/1.44)
|   |   |   |   |   |   feature8 > 0.6667: classE (4.41/1.63)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (9.82/1.12)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (10.16/5.57)
|   |   |   |   |   |   feature6 > 0.4667: classE (13.73/1.38)
|   |   |   predS = classF
|   |   |   |   feature5 = classA: classE (0.66/0.14)
|   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   feature5 = classC: classF (10.18/0.79)
|   |   |   |   feature5 = classD: classE (18.15/3.8)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 <= 0.52: classD (8.82/1.97)
|   |   |   |   |   feature7 > 0.52: classE (11.56/2.42)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature6 <= 0.8333: classF (4.77/2.18)
|   |   |   |   |   feature6 > 0.8333: classE (23.38/1.48)
|   |   |   |   feature5 = classG: classE (18.15/3.8)
|   |   |   predS = classG
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature9 <= 0.4: classD (4.15/1.62)
|   |   |   |   |   feature9 > 0.4: classE (31.18/1.98)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature9 <= 0.4333: classD (3.31/0.93)
|   |   |   |   |   |   feature9 > 0.4333: classF (9.01/0.22)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.5333: classA (16.35/2.0)
|   |   |   |   |   |   feature9 > 0.5333: classG (4.65/0.46)
|   |   feature2 = classF
|   |   |   feature5 = classA
|   |   |   |   feature6 <= 0.6667: classF (6.2/4.38)
|   |   |   |   feature6 > 0.6667: classE (16.33/1.63)
|   |   |   feature5 = classB: classE (0.0)
|   |   |   feature5 = classC: classA (11.94/3.55)
|   |   |   feature5 = classD: classF (0.55/0.12)
|   |   |   feature5 = classE
|   |   |   |   predS = classA: classE (33.86/4.44)
|   |   |   |   predS = classB: classB (0.44/0.08)
|   |   |   |   predS = classC: classA (1.65/0.92)
|   |   |   |   predS = classD: classF (2.28/1.04)
|   |   |   |   predS = classE: classE (3.96/2.61)
|   |   |   |   predS = classF: classF (2.68/0.84)
|   |   |   |   predS = classG: classG (0.9/0.19)
|   |   |   feature5 = classF
|   |   |   |   predS = classA: classA (4.05/2.61)
|   |   |   |   predS = classB: classB (0.4/0.07)
|   |   |   |   predS = classC: classA (1.5/0.84)
|   |   |   |   predS = classD: classF (3.15/0.94)
|   |   |   |   predS = classE
|   |   |   |   |   feature6 <= 0.7: classF (4.37/2.63)
|   |   |   |   |   feature6 > 0.7: classE (4.3/0.27)
|   |   |   |   predS = classF
|   |   |   |   |   feature6 <= 0.4333: classE (8.19/0.89)
|   |   |   |   |   feature6 > 0.4333: classF (14.22/0.65)
|   |   |   |   predS = classG: classF (1.44/0.65)
|   |   |   feature5 = classG: classA (11.02/3.28)
|   |   feature2 = classG: classG (24.26/6.66)
|   prevPredS = classG
|   |   feature2 = classA
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.3333: classA (2.44/0.26)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (4.77/1.84)
|   |   |   |   |   |   |   feature6 > 0.5667: classD (4.36/1.43)
|   |   |   |   |   feature6 > 0.6333: classG (7.37/0.74)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (3.41/0.48)
|   |   |   |   |   feature6 > 0.7: classA (7.99/0.51)
|   |   |   predS = classB: classB (1.77/0.32)
|   |   |   predS = classC: classA (4.65/1.73)
|   |   |   predS = classD
|   |   |   |   feature9 <= 0.9: classD (11.96/3.82)
|   |   |   |   feature9 > 0.9: classG (3.98/0.54)
|   |   |   predS = classE
|   |   |   |   feature7 <= 0.76: classE (31.16/9.15)
|   |   |   |   feature7 > 0.76: classA (21.24/5.62)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.4: classE (8.36/1.06)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature6 <= 0.6: classF (14.82/0.64)
|   |   |   |   |   feature6 > 0.6: classG (2.83/0.18)
|   |   |   predS = classG
|   |   |   |   feature8 <= 0.6333
|   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   feature7 <= 0.64: classA (3.12/1.2)
|   |   |   |   |   |   feature7 > 0.64: classE (16.18/1.83)
|   |   |   |   |   feature7 > 0.72: classA (6.63/0.75)
|   |   |   |   feature8 > 0.6333: classA (27.31/3.42)
|   |   feature2 = classB: classG (0.0)
|   |   feature2 = classC: classC (0.02/0.01)
|   |   feature2 = classD
|   |   |   predS = classA: classA (7.06/2.7)
|   |   |   predS = classB: classB (0.23/0.04)
|   |   |   predS = classC: classA (0.61/0.23)
|   |   |   predS = classD
|   |   |   |   feature9 <= 0.5: classD (2.53/0.33)
|   |   |   |   feature9 > 0.5: classG (5.53/0.94)
|   |   |   predS = classE: classD (6.04/1.96)
|   |   |   predS = classF: classF (1.27/0.47)
|   |   |   predS = classG: classG (0.99/0.13)
|   |   feature2 = classE
|   |   |   feature8 <= 0.5: classG (46.64/14.51)
|   |   |   feature8 > 0.5
|   |   |   |   predS = classA
|   |   |   |   |   feature9 <= 0.5333: classA (4.28/1.7)
|   |   |   |   |   feature9 > 0.5333: classG (4.2/2.11)
|   |   |   |   predS = classB: classB (0.54/0.1)
|   |   |   |   predS = classC: classA (1.43/0.53)
|   |   |   |   predS = classD
|   |   |   |   |   feature6 <= 0.4667: classG (2.15/0.43)
|   |   |   |   |   feature6 > 0.4667: classE (2.85/0.68)
|   |   |   |   predS = classE: classE (33.05/6.01)
|   |   |   |   predS = classF: classF (3.81/1.9)
|   |   |   |   predS = classG: classG (4.5/1.24)
|   |   feature2 = classF
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6333: classD (2.42/1.44)
|   |   |   |   feature6 > 0.6333: classG (2.88/1.39)
|   |   |   predS = classB: classB (0.4/0.07)
|   |   |   predS = classC: classA (1.05/0.39)
|   |   |   predS = classD: classF (12.58/1.56)
|   |   |   predS = classE: classE (5.13/3.05)
|   |   |   predS = classF: classF (15.06/0.81)
|   |   |   predS = classG: classG (2.1/0.54)
|   |   feature2 = classG
|   |   |   feature5 = classA
|   |   |   |   feature9 <= 0.4: classE (10.08/2.56)
|   |   |   |   feature9 > 0.4: classG (2.79/1.03)
|   |   |   feature5 = classB: classG (0.0)
|   |   |   feature5 = classC: classG (0.0)
|   |   |   feature5 = classD: classG (1.21/0.3)
|   |   |   feature5 = classE: classG (3.16/1.31)
|   |   |   feature5 = classF: classF (25.96/7.55)
|   |   |   feature5 = classG
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   predS = classA: classG (6.17/2.22)
|   |   |   |   |   |   predS = classB: classA (0.03/0.0)
|   |   |   |   |   |   predS = classC: classA (1.24/0.35)
|   |   |   |   |   |   predS = classD: classG (1.33/0.37)
|   |   |   |   |   |   predS = classE: classG (4.49/2.29)
|   |   |   |   |   |   predS = classF: classF (5.17/0.78)
|   |   |   |   |   |   predS = classG: classG (0.53/0.19)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.6: classD (32.03/3.3)
|   |   |   |   |   |   feature6 > 0.6: classG (5.11/2.83)
|   |   |   |   feature9 > 0.5333: classG (96.87/21.0)
feature3 = classF
|   feature5 = classA
|   |   feature8 <= 0.4667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5333: classF (2.51/1.58)
|   |   |   |   |   |   feature6 > 0.5333: classB (2.6/0.33)
|   |   |   |   |   feature6 > 0.5667: classD (3.34/1.07)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.8667: classE (19.12/2.5)
|   |   |   |   |   feature6 > 0.8667: classA (7.72/0.61)
|   |   |   predS = classB: classA (4.69/2.17)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (2.6/0.33)
|   |   |   |   feature6 > 0.2667: classC (3.02/2.01)
|   |   |   predS = classD: classD (31.12/7.9)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.4333: classG (4.77/2.34)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classC (5.7/3.34)
|   |   |   |   |   |   feature6 > 0.4667: classF (3.12/0.99)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (15.9/1.55)
|   |   |   |   |   feature6 > 0.6333: classE (2.31/0.59)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.4667: classB (3.89/1.54)
|   |   |   |   feature6 > 0.4667: classF (2.97/0.78)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.8667: classG (11.4/3.0)
|   |   |   |   feature9 > 0.8667: classD (16.48/2.13)
|   |   feature8 > 0.4667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (4.19/1.86)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.4: classC (2.74/1.24)
|   |   |   |   |   |   |   |   feature6 > 0.4: classG (5.12/2.62)
|   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   feature6 <= 0.5333: classF (55.89/16.27)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (13.24/1.63)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classF (17.5/1.79)
|   |   |   |   |   feature6 > 0.6: classE (50.35/22.77)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.5667: classC (3.37/0.26)
|   |   |   |   |   |   |   feature9 > 0.5667: classF (61.33/0.04)
|   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.92: classF (15.82/0.47)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.92: classA (3.1/0.23)
|   |   |   |   |   |   |   |   |   feature6 > 0.7667: classA (31.55/2.0)
|   |   |   |   |   |   |   |   feature7 > 0.96: classF (63.6/2.17)
|   |   |   |   |   |   |   feature8 > 0.9667: classA (17.62/1.18)
|   |   |   |   |   feature6 > 0.8333: classA (35.99/2.85)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.9667: classB (8.28/2.33)
|   |   |   |   feature6 > 0.9667: classA (19.0/5.3)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (15.15/1.92)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5333: classD (8.38/5.72)
|   |   |   |   |   feature6 > 0.5333: classC (9.22/4.17)
|   |   |   predS = classD: classG (47.11/30.05)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   feature6 <= 0.2667: classE (3.23/1.21)
|   |   |   |   |   |   feature6 > 0.2667: classG (16.39/3.16)
|   |   |   |   |   feature6 > 0.3333: classD (5.38/2.04)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classE (3.65/2.03)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.4667: classC (33.21/19.46)
|   |   |   |   |   |   |   feature6 > 0.4667: classE (3.1/1.24)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.6: classF (21.29/3.02)
|   |   |   |   |   |   feature6 > 0.6: classE (10.59/3.22)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature7 <= 0.88: classF (10.19/1.69)
|   |   |   |   |   |   feature7 > 0.88: classA (31.06/6.66)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature9 <= 0.7333: classA (17.0/2.65)
|   |   |   |   |   |   feature9 > 0.7333: classB (16.03/2.81)
|   |   |   |   feature6 > 0.4667: classF (127.66/6.31)
|   |   |   predS = classG
|   |   |   |   feature7 <= 0.84
|   |   |   |   |   prevPredS = classA: classF (6.09/1.56)
|   |   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   |   |   prevPredS = classE: classG (1.64/0.47)
|   |   |   |   |   prevPredS = classF: classF (2.35/0.38)
|   |   |   |   |   prevPredS = classG: classA (3.65/1.43)
|   |   |   |   feature7 > 0.84: classA (32.97/11.7)
|   feature5 = classB
|   |   feature7 <= 0.72: classA (12.15/7.08)
|   |   feature7 > 0.72: classB (40.79/13.0)
|   feature5 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.4667: classA (3.54/0.82)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333: classC (2.56/0.47)
|   |   |   |   |   feature6 > 0.5333: classB (2.41/0.31)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.6667: classD (3.04/0.94)
|   |   |   |   feature6 > 0.6667: classE (2.77/0.67)
|   |   predS = classB
|   |   |   prevPredS = classA: classC (0.86/0.23)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.8333: classC (30.9/2.2)
|   |   |   |   feature6 > 0.8333: classA (3.37/1.12)
|   |   |   prevPredS = classC: classC (0.56/0.24)
|   |   |   prevPredS = classD: classC (0.0)
|   |   |   prevPredS = classE: classE (3.54/0.41)
|   |   |   prevPredS = classF: classC (0.0)
|   |   |   prevPredS = classG: classC (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (2.41/0.31)
|   |   |   feature6 > 0.2667: classC (19.43/4.96)
|   |   predS = classD
|   |   |   feature6 <= 0.4667: classG (4.03/1.62)
|   |   |   feature6 > 0.4667: classA (5.59/3.46)
|   |   predS = classE
|   |   |   prevPredS = classA: classC (1.3/0.8)
|   |   |   prevPredS = classB: classA (3.3/0.87)
|   |   |   prevPredS = classC: classC (11.4/2.96)
|   |   |   prevPredS = classD: classD (0.87/0.56)
|   |   |   prevPredS = classE: classE (1.26/0.57)
|   |   |   prevPredS = classF: classA (6.56/1.86)
|   |   |   prevPredS = classG: classG (0.29/0.11)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classA (2.37/0.8)
|   |   |   |   feature6 > 0.4333: classB (2.37/0.27)
|   |   |   feature6 > 0.4667: classF (11.21/1.1)
|   |   predS = classG: classA (6.61/2.35)
|   feature5 = classD
|   |   prevPredS = classA: classC (7.74/5.84)
|   |   prevPredS = classB: classA (2.58/0.82)
|   |   prevPredS = classC: classE (4.12/1.86)
|   |   prevPredS = classD
|   |   |   feature7 <= 0.6: classD (26.69/8.56)
|   |   |   feature7 > 0.6
|   |   |   |   feature7 <= 0.72: classC (11.74/5.38)
|   |   |   |   feature7 > 0.72: classD (3.78/0.92)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.6667: classD (20.1/6.88)
|   |   |   feature6 > 0.6667: classE (6.79/1.12)
|   |   prevPredS = classF: classF (1.35/0.71)
|   |   prevPredS = classG: classG (13.2/7.38)
|   feature5 = classE
|   |   prevPredS = classA
|   |   |   predS = classA: classA (9.43/5.77)
|   |   |   predS = classB: classB (1.05/0.54)
|   |   |   predS = classC: classA (3.88/2.6)
|   |   |   predS = classD: classG (2.09/1.2)
|   |   |   predS = classE
|   |   |   |   feature9 <= 0.6: classA (5.26/2.91)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature7 <= 0.6: classE (7.86/2.35)
|   |   |   |   |   feature7 > 0.6: classD (2.87/0.74)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7: classF (4.44/2.53)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.5333: classB (6.34/0.87)
|   |   |   |   |   feature6 > 0.5333: classE (4.46/0.35)
|   |   |   predS = classG: classE (4.85/2.56)
|   |   prevPredS = classB: classA (9.53/3.22)
|   |   prevPredS = classC: classC (13.69/5.76)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.3333: classA (2.54/1.24)
|   |   |   |   feature6 > 0.3333: classD (28.87/4.83)
|   |   |   feature6 > 0.4667: classE (19.59/8.44)
|   |   prevPredS = classE
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.5: classE (14.06/1.73)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.6: classB (3.22/0.54)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.6333: classD (2.89/0.22)
|   |   |   |   |   |   feature6 > 0.6333: classE (2.97/0.3)
|   |   |   predS = classB: classB (1.62/0.29)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (3.01/0.34)
|   |   |   |   feature6 > 0.2667: classE (2.68/1.2)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.9: classE (24.14/5.03)
|   |   |   |   |   feature9 > 0.9: classA (2.56/0.5)
|   |   |   |   feature6 > 0.4667: classD (3.02/0.46)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3667: classE (10.3/4.93)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature7 <= 0.36: classD (5.18/1.06)
|   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature7 <= 0.6: classD (4.62/0.51)
|   |   |   |   |   |   |   |   feature7 > 0.6: classE (6.05/0.58)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (14.54/5.97)
|   |   |   |   |   |   feature6 > 0.4667: classE (40.4/10.96)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature6 <= 0.3333: classE (2.32/0.27)
|   |   |   |   |   feature6 > 0.3333: classF (2.2/0.15)
|   |   |   |   feature9 > 0.5333: classE (10.09/1.68)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.5333: classG (7.77/0.98)
|   |   |   |   feature9 > 0.5333: classA (4.94/0.83)
|   |   prevPredS = classF
|   |   |   predS = classA: classA (2.7/2.03)
|   |   |   predS = classB: classB (0.32/0.06)
|   |   |   predS = classC: classA (1.16/0.63)
|   |   |   predS = classD: classE (17.45/3.06)
|   |   |   predS = classE: classA (2.55/1.99)
|   |   |   predS = classF: classF (4.12/0.56)
|   |   |   predS = classG: classF (4.99/0.47)
|   |   prevPredS = classG: classF (16.23/8.7)
|   feature5 = classF
|   |   predS = classA
|   |   |   feature6 <= 0.8333
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature9 <= 0.7333: classA (78.95/16.9)
|   |   |   |   |   |   feature9 > 0.7333: classF (2.45/0.19)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.5667: classF (3.85/1.24)
|   |   |   |   |   |   |   |   feature9 > 0.5667: classG (4.66/1.35)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (43.45/12.7)
|   |   |   |   |   |   feature6 > 0.5667: classF (13.61/4.14)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.6333: classD (33.97/3.22)
|   |   |   |   |   |   feature6 > 0.6333: classG (6.88/1.35)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classE (43.42/12.66)
|   |   |   |   |   |   feature6 > 0.7: classA (9.9/1.89)
|   |   |   feature6 > 0.8333
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature9 <= 0.8333: classC (3.36/0.85)
|   |   |   |   |   feature9 > 0.8333: classF (154.48/1.19)
|   |   |   |   feature6 > 0.8667: classA (23.07/1.83)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (20.19/4.71)
|   |   |   feature9 > 0.9
|   |   |   |   feature6 <= 0.9667: classB (9.23/2.48)
|   |   |   |   feature6 > 0.9667: classA (39.75/8.22)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (51.07/20.32)
|   |   |   feature6 > 0.2667
|   |   |   |   feature9 <= 0.3667
|   |   |   |   |   feature6 <= 0.6333: classE (5.55/2.62)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.7: classF (40.79/0.65)
|   |   |   |   |   |   feature6 > 0.7: classB (2.14/0.85)
|   |   |   |   feature9 > 0.3667
|   |   |   |   |   feature9 <= 0.5: classF (13.0/9.36)
|   |   |   |   |   feature9 > 0.5: classC (21.4/10.67)
|   |   predS = classD
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5333: classG (4.34/1.97)
|   |   |   |   feature6 > 0.5333: classD (4.24/1.2)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333: classG (8.2/3.54)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.8667
|   |   |   |   |   |   feature9 <= 0.4333: classE (3.11/0.9)
|   |   |   |   |   |   feature9 > 0.4333: classD (2.5/1.26)
|   |   |   |   |   feature6 > 0.8667: classC (3.05/0.84)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.9
|   |   |   |   |   feature6 <= 0.4333: classD (3.59/0.77)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classG (10.16/2.56)
|   |   |   |   |   |   feature6 > 0.4667: classD (9.23/4.45)
|   |   |   |   feature6 > 0.9: classF (6.48/0.54)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature6 <= 0.4333: classE (2.5/0.16)
|   |   |   |   |   feature6 > 0.4333: classG (2.39/1.04)
|   |   |   |   feature9 > 0.6: classG (3.97/0.66)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature9 <= 0.7333: classF (6.92/0.28)
|   |   |   |   |   feature9 > 0.7333: classA (16.41/1.81)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.5: classG (22.28/8.36)
|   |   |   |   |   feature6 > 0.5: classF (4.72/1.53)
|   |   |   prevPredS = classG: classG (5.09/1.41)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (38.86/5.9)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   prevPredS = classA: classD (2.65/1.25)
|   |   |   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   |   |   prevPredS = classC: classF (0.0)
|   |   |   |   |   |   prevPredS = classD: classD (7.79/2.48)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature9 <= 0.6333: classF (9.77/1.85)
|   |   |   |   |   |   |   feature9 > 0.6333: classE (3.47/1.72)
|   |   |   |   |   |   prevPredS = classF: classF (5.69/0.75)
|   |   |   |   |   |   prevPredS = classG: classF (0.0)
|   |   |   |   |   feature6 > 0.4333: classC (74.97/43.03)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.7: classC (2.71/1.41)
|   |   |   |   |   |   feature9 > 0.7: classE (5.5/0.5)
|   |   |   |   |   prevPredS = classB: classA (1.24/0.1)
|   |   |   |   |   prevPredS = classC: classE (0.05/0.0)
|   |   |   |   |   prevPredS = classD: classD (21.29/6.95)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature2 = classA: classA (1.43/0.28)
|   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   feature2 = classC: classE (2.65/0.24)
|   |   |   |   |   |   feature2 = classD: classE (0.1/0.01)
|   |   |   |   |   |   feature2 = classE: classE (22.53/3.35)
|   |   |   |   |   |   feature2 = classF: classF (9.15/1.48)
|   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature7 <= 0.32: classE (2.38/0.23)
|   |   |   |   |   |   feature7 > 0.32: classF (10.53/0.54)
|   |   |   |   |   prevPredS = classG: classG (2.49/0.28)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature9 <= 0.5: classA (6.84/3.49)
|   |   |   |   |   feature9 > 0.5: classC (15.08/2.06)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature9 <= 0.9: classB (34.8/4.05)
|   |   |   |   |   feature9 > 0.9: classF (3.14/0.04)
|   |   |   prevPredS = classB: classB (2.42/1.31)
|   |   |   prevPredS = classC: classF (0.09/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.7333: classF (10.34/0.13)
|   |   |   |   feature9 > 0.7333: classA (2.42/0.19)
|   |   |   prevPredS = classE: classF (18.01/1.32)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature9 <= 0.8: classF (83.29/2.86)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature7 <= 0.88: classA (49.27/5.37)
|   |   |   |   |   |   |   feature7 > 0.88: classF (2.7/0.09)
|   |   |   |   |   |   feature9 > 0.8667: classF (26.86/0.92)
|   |   |   |   feature6 > 0.5: classF (525.59/5.03)
|   |   |   prevPredS = classG: classF (39.86/2.7)
|   |   predS = classG
|   |   |   feature7 <= 0.76
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6667: classG (5.43/1.9)
|   |   |   |   |   feature9 > 0.6667
|   |   |   |   |   |   feature9 <= 0.9: classF (2.91/0.71)
|   |   |   |   |   |   feature9 > 0.9: classA (2.35/0.3)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classG (0.02/0.0)
|   |   |   |   prevPredS = classD: classG (0.06/0.01)
|   |   |   |   prevPredS = classE: classG (2.59/1.53)
|   |   |   |   prevPredS = classF: classA (51.77/8.72)
|   |   |   |   prevPredS = classG: classF (20.14/1.92)
|   |   |   feature7 > 0.76: classF (63.3/9.67)
|   feature5 = classG
|   |   predS = classA
|   |   |   feature6 <= 0.6667: classG (5.24/2.76)
|   |   |   feature6 > 0.6667: classA (2.88/1.2)
|   |   predS = classB: classA (1.88/0.88)
|   |   predS = classC: classA (2.21/1.26)
|   |   predS = classD: classG (2.83/1.48)
|   |   predS = classE
|   |   |   feature6 <= 0.4333: classD (9.58/1.98)
|   |   |   feature6 > 0.4333: classA (3.15/2.12)
|   |   predS = classF
|   |   |   feature9 <= 0.6667: classG (2.66/0.92)
|   |   |   feature9 > 0.6667: classF (8.25/1.29)
|   |   predS = classG: classG (18.27/1.84)
feature3 = classG
|   predS = classA
|   |   feature6 <= 0.6333
|   |   |   feature6 <= 0.6
|   |   |   |   feature2 = classA
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3667: classA (5.38/2.13)
|   |   |   |   |   |   feature6 > 0.3667: classG (31.98/6.97)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333: classF (4.78/0.22)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (27.1/11.31)
|   |   |   |   |   |   feature6 > 0.5667: classG (11.55/2.55)
|   |   |   |   feature2 = classB: classB (11.49/4.22)
|   |   |   |   feature2 = classC: classC (8.65/3.41)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature6 <= 0.5333: classD (2.98/0.67)
|   |   |   |   |   feature6 > 0.5333: classB (2.23/1.21)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature7 <= 0.76
|   |   |   |   |   |   |   feature7 <= 0.36: classE (4.16/0.81)
|   |   |   |   |   |   |   feature7 > 0.36: classA (5.44/0.7)
|   |   |   |   |   |   feature7 > 0.76: classE (8.32/1.61)
|   |   |   |   |   feature6 > 0.4667: classB (6.83/2.0)
|   |   |   |   feature2 = classF: classA (1.46/0.52)
|   |   |   |   feature2 = classG
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (4.1/1.09)
|   |   |   |   |   |   |   feature9 > 0.5: classG (41.9/7.29)
|   |   |   |   |   |   feature9 > 0.6333: classA (24.46/1.81)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classB (31.67/10.94)
|   |   |   |   |   |   feature6 > 0.5667: classG (3.98/1.75)
|   |   |   feature6 > 0.6: classD (75.61/29.02)
|   |   feature6 > 0.6333
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   prevPredS = classA: classG (17.91/3.56)
|   |   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   |   |   prevPredS = classD: classA (0.03/0.0)
|   |   |   |   |   |   prevPredS = classE: classA (7.92/0.5)
|   |   |   |   |   |   prevPredS = classF: classA (0.1/0.01)
|   |   |   |   |   |   prevPredS = classG: classG (9.09/0.71)
|   |   |   |   |   feature6 > 0.6667: classE (56.36/9.77)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature9 <= 0.9333: classA (22.66/2.8)
|   |   |   |   |   feature9 > 0.9333: classG (46.45/3.4)
|   |   |   feature6 > 0.7333: classA (93.68/11.47)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.4: classE (3.65/1.09)
|   |   |   feature9 > 0.4: classB (5.19/2.4)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.9667
|   |   |   |   feature9 <= 0.9: classB (10.47/1.39)
|   |   |   |   feature9 > 0.9
|   |   |   |   |   feature6 <= 0.5333: classA (2.72/0.17)
|   |   |   |   |   feature6 > 0.5333: classB (10.27/2.43)
|   |   |   feature6 > 0.9667
|   |   |   |   feature9 <= 0.9667: classB (2.68/0.25)
|   |   |   |   feature9 > 0.9667: classA (71.88/23.23)
|   |   prevPredS = classC: classB (4.92/0.51)
|   |   prevPredS = classD: classA (0.0)
|   |   prevPredS = classE: classE (3.74/1.18)
|   |   prevPredS = classF: classG (1.12/0.34)
|   |   prevPredS = classG: classG (0.09/0.03)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classG (8.95/1.65)
|   |   |   feature6 > 0.2333: classA (53.0/5.88)
|   |   feature6 > 0.2667
|   |   |   feature2 = classA: classC (3.92/2.5)
|   |   |   feature2 = classB: classC (1.82/0.71)
|   |   |   feature2 = classC
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.5333: classD (15.47/8.95)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.6: classC (4.59/0.89)
|   |   |   |   |   |   feature6 > 0.6: classD (3.67/0.81)
|   |   |   |   feature6 > 0.7: classC (11.27/3.4)
|   |   |   feature2 = classD: classC (0.33/0.13)
|   |   |   feature2 = classE: classC (10.81/5.05)
|   |   |   feature2 = classF: classD (0.07/0.03)
|   |   |   feature2 = classG
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature9 <= 0.5: classF (8.83/6.25)
|   |   |   |   |   feature9 > 0.5: classC (7.97/3.55)
|   |   |   |   feature9 > 0.9333
|   |   |   |   |   feature6 <= 0.5667: classE (3.83/1.52)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6333: classG (23.93/2.03)
|   |   |   |   |   |   feature6 > 0.6333: classB (2.25/1.23)
|   predS = classD
|   |   feature2 = classA
|   |   |   feature8 <= 0.7333
|   |   |   |   feature6 <= 0.6: classG (8.26/4.67)
|   |   |   |   feature6 > 0.6: classD (9.9/1.69)
|   |   |   feature8 > 0.7333: classA (7.24/3.94)
|   |   feature2 = classB: classG (0.0)
|   |   feature2 = classC: classA (3.13/1.43)
|   |   feature2 = classD
|   |   |   feature6 <= 0.5: classG (30.78/15.45)
|   |   |   feature6 > 0.5
|   |   |   |   feature9 <= 0.5: classD (18.23/6.72)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature7 <= 0.72: classC (17.45/5.21)
|   |   |   |   |   feature7 > 0.72: classD (3.82/0.49)
|   |   feature2 = classE
|   |   |   feature6 <= 0.4333: classE (11.9/4.69)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classG (8.24/2.86)
|   |   |   |   feature6 > 0.4667: classD (14.88/7.43)
|   |   feature2 = classF: classF (12.18/5.43)
|   |   feature2 = classG
|   |   |   prevPredS = classA: classC (3.6/1.1)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333: classG (22.46/3.26)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature9 <= 0.4333: classE (2.97/1.23)
|   |   |   |   |   feature9 > 0.4333: classD (2.5/1.03)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4333: classD (18.43/1.62)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.5333: classG (4.92/1.19)
|   |   |   |   |   |   feature6 > 0.5333: classF (5.86/1.14)
|   |   |   |   |   feature9 > 0.4667: classG (5.96/2.16)
|   |   |   prevPredS = classE: classG (2.6/0.37)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4333: classF (2.85/0.06)
|   |   |   |   feature6 > 0.4333: classG (2.55/0.87)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.3: classA (16.99/2.39)
|   |   |   |   feature6 > 0.3: classG (65.55/9.65)
|   predS = classE
|   |   feature6 <= 0.4333
|   |   |   feature6 <= 0.3: classG (65.28/15.27)
|   |   |   feature6 > 0.3
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature7 <= 0.36: classD (4.22/1.83)
|   |   |   |   |   |   feature7 > 0.36: classA (5.27/2.97)
|   |   |   |   |   feature6 > 0.4: classG (9.3/2.0)
|   |   |   |   prevPredS = classB: classA (2.03/0.33)
|   |   |   |   prevPredS = classC: classG (0.36/0.1)
|   |   |   |   prevPredS = classD: classD (10.25/0.9)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature5 = classA: classA (0.34/0.14)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classE (0.05/0.01)
|   |   |   |   |   feature5 = classD: classD (5.66/1.37)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature9 <= 0.5667: classE (6.08/0.91)
|   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.4: classD (4.51/0.41)
|   |   |   |   |   |   |   feature6 > 0.4: classE (4.18/1.45)
|   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   prevPredS = classF: classG (1.38/0.33)
|   |   |   |   prevPredS = classG: classG (4.96/2.57)
|   |   feature6 > 0.4333
|   |   |   feature6 <= 0.4667: classC (119.71/71.21)
|   |   |   feature6 > 0.4667
|   |   |   |   feature5 = classA: classE (52.87/10.58)
|   |   |   |   feature5 = classB: classB (2.49/0.78)
|   |   |   |   feature5 = classC: classA (5.04/1.45)
|   |   |   |   feature5 = classD
|   |   |   |   |   prevPredS = classA: classE (0.53/0.33)
|   |   |   |   |   prevPredS = classB: classA (0.13/0.01)
|   |   |   |   |   prevPredS = classC: classE (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classD (2.52/0.69)
|   |   |   |   |   prevPredS = classE: classE (5.72/0.71)
|   |   |   |   |   prevPredS = classF: classF (0.15/0.01)
|   |   |   |   |   prevPredS = classG: classD (1.22/0.37)
|   |   |   |   feature5 = classE: classE (52.73/19.33)
|   |   |   |   feature5 = classF: classE (8.81/1.62)
|   |   |   |   feature5 = classG
|   |   |   |   |   feature6 <= 0.5333: classG (9.24/1.32)
|   |   |   |   |   feature6 > 0.5333: classE (2.54/1.03)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4333: classA (13.87/7.57)
|   |   |   |   feature6 > 0.4333: classB (53.75/7.15)
|   |   |   prevPredS = classB: classB (4.01/2.33)
|   |   |   prevPredS = classC: classC (0.01/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature8 <= 0.5: classD (19.15/3.0)
|   |   |   |   |   feature8 > 0.5: classG (3.04/0.86)
|   |   |   |   feature9 > 0.7333: classA (4.01/0.45)
|   |   |   prevPredS = classE: classE (15.05/4.99)
|   |   |   prevPredS = classF: classF (3.31/1.05)
|   |   |   prevPredS = classG: classG (4.71/0.64)
|   |   feature6 > 0.4667
|   |   |   feature8 <= 0.6667: classF (101.42/14.84)
|   |   |   feature8 > 0.6667
|   |   |   |   prevPredS = classA: classF (6.37/3.37)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classF (0.15/0.08)
|   |   |   |   prevPredS = classD: classF (0.11/0.01)
|   |   |   |   prevPredS = classE: classF (3.34/0.22)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 <= 0.8: classF (4.33/0.98)
|   |   |   |   |   feature7 > 0.8: classG (6.49/1.92)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature2 = classA: classG (32.02/8.47)
|   |   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   |   feature2 = classD: classG (0.0)
|   |   |   |   |   feature2 = classE: classG (0.0)
|   |   |   |   |   feature2 = classF: classF (2.56/0.18)
|   |   |   |   |   feature2 = classG: classG (6.62/1.26)
|   predS = classG
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.3667
|   |   |   |   feature6 <= 0.3333
|   |   |   |   |   prevPredS = classA: classC (0.17/0.01)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classG (0.03/0.0)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.4667: classG (3.33/0.24)
|   |   |   |   |   |   feature9 > 0.4667: classA (3.62/1.91)
|   |   |   |   |   prevPredS = classF: classA (0.0)
|   |   |   |   |   prevPredS = classG: classA (2.89/0.31)
|   |   |   |   feature6 > 0.3333: classG (14.56/1.36)
|   |   |   feature6 > 0.3667
|   |   |   |   prevPredS = classA: classA (46.94/7.1)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classG (0.3/0.03)
|   |   |   |   prevPredS = classD: classD (2.2/0.5)
|   |   |   |   prevPredS = classE: classA (4.34/0.94)
|   |   |   |   prevPredS = classF: classF (3.75/0.16)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.6: classA (64.67/6.64)
|   |   |   |   |   feature9 > 0.6: classG (7.84/1.43)
|   |   feature6 > 0.4667
|   |   |   feature9 <= 0.7333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.5: classG (4.08/2.04)
|   |   |   |   |   |   feature9 > 0.5: classC (16.66/1.39)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature6 <= 0.9
|   |   |   |   |   |   |   feature9 <= 0.6667: classG (6.99/0.67)
|   |   |   |   |   |   |   feature9 > 0.6667: classE (2.88/1.2)
|   |   |   |   |   |   feature6 > 0.9: classA (15.61/1.0)
|   |   |   |   prevPredS = classB: classG (0.07/0.01)
|   |   |   |   prevPredS = classC: classG (0.03/0.0)
|   |   |   |   prevPredS = classD: classG (3.06/0.25)
|   |   |   |   prevPredS = classE: classG (22.8/1.87)
|   |   |   |   prevPredS = classF: classG (11.64/1.32)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   feature7 <= 0.76: classG (37.92/5.65)
|   |   |   |   |   |   feature7 > 0.76
|   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   feature8 <= 0.9333: classG (3.14/0.47)
|   |   |   |   |   |   |   |   feature8 > 0.9333: classA (19.06/3.28)
|   |   |   |   |   |   |   feature6 > 0.7333: classG (6.28/0.4)
|   |   |   |   |   feature7 > 0.8: classG (47.61/3.47)
|   |   |   feature9 > 0.7333
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature9 <= 0.8: classF (19.19/4.5)
|   |   |   |   |   feature9 > 0.8: classG (54.04/12.29)
|   |   |   |   feature6 > 0.7: classG (691.29/50.69)

Number of Leaves  : \t1763

Size of the tree : \t2735


Weight: 1.76

J48 pruned tree
------------------

feature3 = classA
|   feature6 <= 0.7333
|   |   predS = classA
|   |   |   feature8 <= 0.5
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature9 <= 0.8333: classG (20.29/9.73)
|   |   |   |   |   feature9 > 0.8333: classE (11.79/3.24)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5667: classB (8.09/4.26)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6667: classD (7.49/3.66)
|   |   |   |   |   |   feature6 > 0.6667: classE (7.13/3.31)
|   |   |   feature8 > 0.5: classA (53.07/32.8)
|   |   predS = classB: classB (6.32/4.23)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (12.81/5.28)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature9 <= 0.4: classE (7.85/4.94)
|   |   |   |   |   feature9 > 0.4: classD (8.83/6.06)
|   |   |   |   feature6 > 0.6333: classC (19.68/6.24)
|   |   predS = classD
|   |   |   feature6 <= 0.4333: classG (12.25/6.56)
|   |   |   feature6 > 0.4333: classF (45.88/24.16)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (20.23/12.15)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classD (12.22/6.96)
|   |   |   |   |   feature6 > 0.4333: classC (77.78/33.11)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature2 = classA: classA (5.0/2.88)
|   |   |   |   |   feature2 = classB: classB (0.54/0.27)
|   |   |   |   |   feature2 = classC: classF (1.24/0.69)
|   |   |   |   |   feature2 = classD: classE (4.02/2.55)
|   |   |   |   |   feature2 = classE: classD (19.73/12.17)
|   |   |   |   |   feature2 = classF: classA (1.26/0.59)
|   |   |   |   |   feature2 = classG: classE (0.28/0.11)
|   |   predS = classF
|   |   |   feature6 <= 0.4333: classF (13.01/7.57)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classB (13.58/6.06)
|   |   |   |   feature6 > 0.4667: classF (27.86/15.27)
|   |   predS = classG
|   |   |   feature2 = classA
|   |   |   |   prevPredS = classA: classF (4.37/2.22)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.6667: classF (2.61/0.63)
|   |   |   |   |   feature6 > 0.6667: classA (5.46/1.18)
|   |   |   |   prevPredS = classE: classF (0.96/0.58)
|   |   |   |   prevPredS = classF: classG (0.55/0.22)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.4667: classA (7.19/2.36)
|   |   |   |   |   feature6 > 0.4667: classF (2.69/0.37)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classC (0.0/0.0)
|   |   |   feature2 = classD: classF (0.75/0.44)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.5: classF (7.6/2.8)
|   |   |   |   feature6 > 0.5: classG (7.25/2.0)
|   |   |   feature2 = classF: classF (1.65/0.79)
|   |   |   feature2 = classG: classF (3.91/1.22)
|   feature6 > 0.7333
|   |   predS = classA: classA (292.62/67.8)
|   |   predS = classB: classB (33.06/18.17)
|   |   predS = classC
|   |   |   feature6 <= 0.8333: classB (4.68/1.52)
|   |   |   feature6 > 0.8333: classC (2.69/0.85)
|   |   predS = classD: classF (4.91/2.49)
|   |   predS = classE: classE (1.68/0.38)
|   |   predS = classF: classF (1.34/0.04)
|   |   predS = classG: classG (6.02/2.79)
feature3 = classB
|   predS = classA
|   |   prevPredS = classA
|   |   |   feature6 <= 0.4667
|   |   |   |   feature9 <= 0.6: classG (18.22/8.15)
|   |   |   |   feature9 > 0.6: classA (19.03/5.13)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature5 = classA: classF (4.89/1.63)
|   |   |   |   |   feature5 = classB
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classG (4.37/2.07)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333: classB (10.73/2.33)
|   |   |   |   |   |   |   |   feature6 > 0.5: classB (21.92/5.28)
|   |   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   |   feature6 <= 0.6: classA (3.52/1.74)
|   |   |   |   |   |   |   |   feature6 > 0.6: classD (10.85/2.61)
|   |   |   |   |   |   feature6 > 0.6333: classB (33.97/8.76)
|   |   |   |   |   feature5 = classC: classB (0.0)
|   |   |   |   |   feature5 = classD: classA (0.03/0.02)
|   |   |   |   |   feature5 = classE: classA (0.73/0.35)
|   |   |   |   |   feature5 = classF: classF (5.24/1.47)
|   |   |   |   |   feature5 = classG: classB (0.0)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (24.2/14.92)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature6 <= 0.7333: classB (12.27/3.87)
|   |   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   |   feature6 <= 0.7667: classD (8.24/3.21)
|   |   |   |   |   |   |   feature6 > 0.7667: classA (13.13/3.16)
|   |   prevPredS = classB
|   |   |   feature9 <= 0.9667
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   feature9 <= 0.5: classB (23.76/5.61)
|   |   |   |   |   |   feature9 > 0.5: classA (20.27/5.78)
|   |   |   |   |   feature7 > 0.88: classB (36.85/8.7)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6667: classD (7.23/2.65)
|   |   |   |   |   feature6 > 0.6667: classE (6.06/1.49)
|   |   |   feature9 > 0.9667
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.5: classA (44.82/10.71)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5667: classB (5.96/1.29)
|   |   |   |   |   |   feature6 > 0.5667: classA (39.27/13.69)
|   |   |   |   feature6 > 0.6667: classE (6.15/1.48)
|   |   prevPredS = classC
|   |   |   feature2 = classA: classA (0.03/0.01)
|   |   |   feature2 = classB: classA (18.63/7.18)
|   |   |   feature2 = classC: classC (5.67/3.02)
|   |   |   feature2 = classD: classA (0.0)
|   |   |   feature2 = classE: classA (0.0)
|   |   |   feature2 = classF: classA (0.0)
|   |   |   feature2 = classG: classA (0.0)
|   |   prevPredS = classD: classA (1.91/0.72)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.3: classD (7.91/1.72)
|   |   |   feature6 > 0.3: classE (21.15/14.57)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.6333: classC (10.62/5.59)
|   |   |   feature6 > 0.6333: classA (12.92/3.94)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.5: classA (13.62/5.15)
|   |   |   feature9 > 0.5
|   |   |   |   feature6 <= 0.6333: classD (10.61/4.43)
|   |   |   |   feature6 > 0.6333
|   |   |   |   |   feature6 <= 0.6667: classG (5.53/1.22)
|   |   |   |   |   feature6 > 0.6667: classA (3.34/1.67)
|   predS = classB
|   |   feature9 <= 0.5333
|   |   |   feature9 <= 0.4333
|   |   |   |   feature6 <= 0.4333: classE (25.63/5.75)
|   |   |   |   feature6 > 0.4333: classB (4.64/1.37)
|   |   |   feature9 > 0.4333
|   |   |   |   feature9 <= 0.5: classB (4.21/0.96)
|   |   |   |   feature9 > 0.5: classC (12.77/4.91)
|   |   feature9 > 0.5333
|   |   |   feature6 <= 0.6
|   |   |   |   feature9 <= 0.6: classA (11.52/2.62)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature7 <= 0.96: classB (7.53/2.85)
|   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.9667: classB (15.77/4.21)
|   |   |   |   |   |   |   feature9 > 0.9667
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classA (52.32/19.76)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classB (10.73/2.33)
|   |   |   |   |   |   feature6 > 0.5333: classA (11.79/3.24)
|   |   |   feature6 > 0.6: classB (689.7/183.41)
|   predS = classC
|   |   feature6 <= 0.2667: classA (40.78/16.82)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.6
|   |   |   |   feature9 <= 0.4: classE (41.19/16.92)
|   |   |   |   feature9 > 0.4: classB (45.17/32.49)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.7: classD (15.23/4.3)
|   |   |   |   feature6 > 0.7: classB (25.44/15.22)
|   predS = classD
|   |   feature6 <= 0.2333
|   |   |   feature9 <= 0.9333: classB (63.56/14.48)
|   |   |   feature9 > 0.9333: classA (10.92/2.37)
|   |   feature6 > 0.2333: classF (191.57/105.59)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature7 <= 0.48: classG (11.61/5.53)
|   |   |   feature7 > 0.48: classE (52.78/31.59)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   prevPredS = classA: classE (9.15/4.68)
|   |   |   |   |   prevPredS = classB: classA (1.32/0.46)
|   |   |   |   |   prevPredS = classC: classE (0.38/0.2)
|   |   |   |   |   prevPredS = classD: classD (6.69/1.89)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   |   feature7 <= 0.56: classD (7.17/3.25)
|   |   |   |   |   |   |   feature7 > 0.56: classE (5.1/1.44)
|   |   |   |   |   |   feature9 > 0.8: classD (7.73/2.18)
|   |   |   |   |   prevPredS = classF: classF (0.07/0.01)
|   |   |   |   |   prevPredS = classG: classD (1.49/0.95)
|   |   |   |   feature6 > 0.4333: classC (247.65/105.42)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333: classD (31.5/14.63)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature7 <= 0.68: classE (47.34/27.99)
|   |   |   |   |   feature7 > 0.68: classD (28.63/18.56)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3: classG (7.52/3.53)
|   |   |   |   |   feature6 > 0.3: classF (6.49/2.04)
|   |   |   |   feature6 > 0.4333: classB (38.17/14.21)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classF (5.73/2.13)
|   |   |   |   |   feature6 > 0.5: classG (5.49/1.51)
|   |   |   |   feature6 > 0.5333: classA (14.75/7.72)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.4333: classB (28.5/10.54)
|   |   |   feature6 > 0.4333: classF (5.38/3.46)
|   |   prevPredS = classC: classC (1.12/0.74)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.3333: classA (2.61/0.84)
|   |   |   feature6 > 0.3333: classF (2.72/1.49)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667: classE (10.67/5.5)
|   |   |   feature6 > 0.4667: classF (7.63/1.87)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.6: classF (13.29/4.8)
|   |   |   feature6 > 0.6: classG (15.57/5.41)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.6667
|   |   |   |   feature6 <= 0.6: classF (14.23/4.63)
|   |   |   |   feature6 > 0.6: classG (13.42/3.35)
|   |   |   feature9 > 0.6667: classF (3.95/0.66)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature9 <= 0.4: classA (20.07/10.2)
|   |   |   feature9 > 0.4: classF (13.37/7.28)
|   |   feature5 = classB
|   |   |   prevPredS = classA: classF (4.38/2.0)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.4: classB (10.92/2.37)
|   |   |   |   feature6 > 0.4: classF (4.99/1.23)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classG (0.03/0.01)
|   |   |   prevPredS = classE: classF (1.53/0.94)
|   |   |   prevPredS = classF: classG (0.88/0.34)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4667: classA (12.46/4.06)
|   |   |   |   feature6 > 0.4667: classF (4.9/0.92)
|   |   feature5 = classC
|   |   |   feature6 <= 0.4333: classE (15.27/5.96)
|   |   |   feature6 > 0.4333: classF (10.49/3.44)
|   |   feature5 = classD: classG (6.52/3.74)
|   |   feature5 = classE
|   |   |   feature6 <= 0.5: classF (11.54/4.5)
|   |   |   feature6 > 0.5: classG (5.17/1.65)
|   |   feature5 = classF: classF (11.8/3.03)
|   |   feature5 = classG
|   |   |   feature6 <= 0.6667: classF (7.48/3.02)
|   |   |   feature6 > 0.6667: classG (7.85/1.86)
feature3 = classC
|   feature5 = classA
|   |   predS = classA
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature9 <= 0.9333: classF (7.32/3.37)
|   |   |   |   |   feature9 > 0.9333: classC (12.43/3.88)
|   |   |   |   feature6 > 0.5333: classB (3.85/1.7)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.6667: classD (5.62/3.47)
|   |   |   |   |   feature6 > 0.6667: classE (4.31/2.16)
|   |   |   |   feature6 > 0.7: classA (15.89/4.05)
|   |   predS = classB: classA (8.23/4.41)
|   |   predS = classC
|   |   |   feature8 <= 0.7333: classC (35.63/11.95)
|   |   |   feature8 > 0.7333
|   |   |   |   feature6 <= 0.8: classA (10.97/4.46)
|   |   |   |   feature6 > 0.8: classC (10.44/3.49)
|   |   predS = classD
|   |   |   prevPredS = classA: classD (12.59/6.82)
|   |   |   prevPredS = classB: classC (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5: classF (3.83/1.34)
|   |   |   |   feature6 > 0.5: classC (17.66/4.68)
|   |   |   prevPredS = classD: classF (4.11/2.51)
|   |   |   prevPredS = classE: classG (0.52/0.34)
|   |   |   prevPredS = classF: classF (0.42/0.07)
|   |   |   prevPredS = classG: classE (1.75/0.82)
|   |   predS = classE
|   |   |   feature6 <= 0.4333: classE (13.29/6.88)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classC (23.79/10.98)
|   |   |   |   feature6 > 0.4667: classE (8.42/4.38)
|   |   predS = classF: classF (17.34/9.24)
|   |   predS = classG: classF (13.67/7.81)
|   feature5 = classB
|   |   feature6 <= 0.9333
|   |   |   predS = classA: classB (12.62/8.82)
|   |   |   predS = classB: classC (15.93/7.23)
|   |   |   predS = classC: classF (4.99/3.81)
|   |   |   predS = classD: classF (5.96/2.88)
|   |   |   predS = classE: classC (16.05/9.98)
|   |   |   predS = classF: classF (6.27/4.03)
|   |   |   predS = classG: classF (2.85/1.05)
|   |   feature6 > 0.9333: classB (44.62/12.05)
|   feature5 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5333: classG (16.69/7.25)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classB (6.02/1.56)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.6: classA (2.77/1.19)
|   |   |   |   |   |   |   feature6 > 0.6: classD (6.61/2.14)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.6: classA (40.54/21.54)
|   |   |   |   |   feature6 > 0.6: classD (9.51/2.55)
|   |   |   |   prevPredS = classD: classA (0.12/0.07)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.3: classD (5.35/1.19)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.5667: classB (4.85/2.92)
|   |   |   |   |   |   feature6 > 0.5667: classD (3.66/1.73)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.5667: classC (8.51/4.75)
|   |   |   |   |   feature6 > 0.5667: classD (3.37/1.72)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.7333: classD (12.26/6.44)
|   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   feature6 <= 0.6333: classD (4.15/2.75)
|   |   |   |   |   |   feature6 > 0.6333: classG (4.17/0.95)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7: classE (32.92/15.04)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.7667: classD (6.21/2.45)
|   |   |   |   |   feature6 > 0.7667: classA (6.12/1.43)
|   |   predS = classB
|   |   |   prevPredS = classA: classB (6.4/3.74)
|   |   |   prevPredS = classB: classA (46.08/19.65)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.6333: classC (14.49/5.24)
|   |   |   |   feature6 > 0.6333: classB (5.12/2.33)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classE (2.87/1.46)
|   |   |   prevPredS = classF: classA (0.59/0.2)
|   |   |   prevPredS = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.8333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5333: classF (11.07/7.03)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (5.83/1.53)
|   |   |   |   |   |   |   feature9 > 0.5: classC (6.83/2.79)
|   |   |   |   |   |   feature9 > 0.7333: classA (25.54/8.32)
|   |   |   |   prevPredS = classB: classC (0.73/0.23)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   |   feature6 <= 0.2667: classA (5.54/2.22)
|   |   |   |   |   |   |   feature6 > 0.2667: classC (22.58/8.3)
|   |   |   |   |   |   feature7 > 0.8
|   |   |   |   |   |   |   feature8 <= 0.9667: classC (9.4/4.31)
|   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   feature7 <= 0.88: classA (43.63/13.44)
|   |   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classA (3.52/1.82)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.3667: classC (11.35/2.58)
|   |   |   |   |   |   |   |   |   feature9 > 0.9333: classA (31.0/10.66)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classC (6.47/1.54)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (11.03/2.58)
|   |   |   |   |   |   |   feature9 > 0.5667: classC (167.7/57.69)
|   |   |   |   |   |   feature6 > 0.6: classC (52.58/25.04)
|   |   |   |   prevPredS = classD: classC (3.48/1.12)
|   |   |   |   prevPredS = classE: classC (9.33/3.65)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature9 <= 0.3333: classC (12.89/4.15)
|   |   |   |   |   feature9 > 0.3333: classE (9.12/5.2)
|   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   feature6 > 0.8333: classC (599.41/138.59)
|   |   predS = classD
|   |   |   prevPredS = classA: classF (8.81/5.39)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5: classF (50.23/27.71)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.9: classC (10.84/6.0)
|   |   |   |   |   feature9 > 0.9: classA (6.65/2.86)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.4667: classF (10.48/3.19)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classC (6.63/2.35)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.4667: classF (9.95/3.19)
|   |   |   |   |   |   |   feature6 > 0.4667: classG (10.28/2.54)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.5: classF (10.12/3.89)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature9 <= 0.6333: classC (5.91/1.47)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (4.83/1.07)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classC (2.65/0.96)
|   |   |   prevPredS = classE: classF (5.96/3.65)
|   |   |   prevPredS = classF: classF (6.3/1.92)
|   |   |   prevPredS = classG: classG (3.55/1.79)
|   |   predS = classE
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.4333: classG (10.71/5.89)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classC (34.18/13.22)
|   |   |   |   |   feature6 > 0.4667: classA (10.37/4.77)
|   |   |   feature2 = classB: classC (0.0)
|   |   |   feature2 = classC
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.2333: classC (5.87/1.41)
|   |   |   |   |   feature6 > 0.2333: classG (17.43/10.96)
|   |   |   |   feature6 > 0.4: classC (77.78/36.5)
|   |   |   feature2 = classD: classC (0.41/0.25)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3333: classG (10.6/4.86)
|   |   |   |   |   feature6 > 0.3333: classD (10.56/4.28)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classC (58.89/24.78)
|   |   |   |   |   feature6 > 0.4667: classE (9.77/6.56)
|   |   |   feature2 = classF
|   |   |   |   feature6 <= 0.4333: classE (7.67/4.3)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classC (19.76/7.29)
|   |   |   |   |   feature6 > 0.4667: classA (5.47/2.66)
|   |   |   feature2 = classG: classC (0.0)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.7: classA (12.98/7.35)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.3: classG (2.78/0.62)
|   |   |   |   |   |   |   feature6 > 0.3: classF (2.84/0.57)
|   |   |   |   |   |   feature6 > 0.4333: classB (27.81/9.93)
|   |   |   |   |   feature6 > 0.4667: classF (6.78/4.37)
|   |   |   prevPredS = classB: classF (2.39/1.72)
|   |   |   prevPredS = classC: classC (7.55/4.34)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4: classA (3.17/1.72)
|   |   |   |   feature6 > 0.4: classC (7.7/3.2)
|   |   |   prevPredS = classE: classF (7.95/2.55)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.4667
|   |   |   |   |   feature6 <= 0.2333: classA (11.33/2.46)
|   |   |   |   |   feature6 > 0.2333: classF (5.58/3.2)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature6 <= 0.6: classF (9.98/3.55)
|   |   |   |   |   feature6 > 0.6: classG (9.97/2.46)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.6: classF (11.0/3.68)
|   |   |   |   feature6 > 0.6: classG (9.66/2.14)
|   |   predS = classG
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classG (15.25/5.05)
|   |   |   |   feature6 > 0.4333: classA (2.99/1.1)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classF (25.08/0.86)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.6667: classG (6.17/2.17)
|   |   |   |   |   feature9 > 0.6667: classF (5.01/1.99)
|   feature5 = classD
|   |   prevPredS = classA: classF (9.66/7.08)
|   |   prevPredS = classB: classA (3.1/1.68)
|   |   prevPredS = classC: classC (20.13/9.04)
|   |   prevPredS = classD
|   |   |   feature8 <= 0.7333: classD (16.99/8.73)
|   |   |   feature8 > 0.7333: classC (28.98/16.62)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667: classD (12.41/6.21)
|   |   |   feature6 > 0.4667: classA (9.7/6.52)
|   |   prevPredS = classF: classF (2.95/1.88)
|   |   prevPredS = classG: classG (10.16/6.54)
|   feature5 = classE
|   |   predS = classA
|   |   |   prevPredS = classA: classA (10.2/7.85)
|   |   |   prevPredS = classB: classA (0.07/0.04)
|   |   |   prevPredS = classC: classA (1.18/0.79)
|   |   |   prevPredS = classD: classA (0.01/0.01)
|   |   |   prevPredS = classE: classE (13.32/6.61)
|   |   |   prevPredS = classF: classC (1.81/1.29)
|   |   |   prevPredS = classG: classD (2.39/1.61)
|   |   predS = classB: classA (14.69/6.35)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (4.25/1.75)
|   |   |   feature6 > 0.2667: classF (9.45/7.17)
|   |   predS = classD: classF (34.36/20.16)
|   |   predS = classE
|   |   |   feature9 <= 0.4
|   |   |   |   feature6 <= 0.4333: classA (13.96/5.41)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.6667: classC (5.48/2.76)
|   |   |   |   |   feature6 > 0.6667: classA (5.86/1.39)
|   |   |   feature9 > 0.4
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classE (26.23/13.22)
|   |   |   |   |   feature6 > 0.4333: classC (32.11/19.87)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   prevPredS = classA: classE (4.12/2.08)
|   |   |   |   |   prevPredS = classB: classA (0.12/0.03)
|   |   |   |   |   prevPredS = classC: classE (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classE (3.87/1.04)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.7333: classD (40.7/17.22)
|   |   |   |   |   |   feature9 > 0.7333: classE (2.85/0.66)
|   |   |   |   |   prevPredS = classF: classF (0.18/0.0)
|   |   |   |   |   prevPredS = classG: classG (0.36/0.09)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5333: classB (6.79/4.3)
|   |   |   |   feature6 > 0.5333: classE (3.52/1.66)
|   |   |   prevPredS = classB: classB (0.3/0.21)
|   |   |   prevPredS = classC: classF (0.01/0.0)
|   |   |   prevPredS = classD: classA (0.32/0.13)
|   |   |   prevPredS = classE: classE (8.3/3.58)
|   |   |   prevPredS = classF: classG (2.4/1.14)
|   |   |   prevPredS = classG: classG (2.68/1.37)
|   |   predS = classG
|   |   |   feature6 <= 0.5: classF (11.56/4.58)
|   |   |   feature6 > 0.5: classG (5.33/1.65)
|   feature5 = classF
|   |   feature8 <= 0.6: classF (56.29/20.46)
|   |   feature8 > 0.6
|   |   |   predS = classA
|   |   |   |   feature9 <= 0.5667: classA (13.52/4.41)
|   |   |   |   feature9 > 0.5667: classF (3.56/1.58)
|   |   |   predS = classB: classA (1.38/0.74)
|   |   |   predS = classC: classF (1.94/1.48)
|   |   |   predS = classD: classF (2.65/1.35)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3667: classA (3.33/1.54)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature6 <= 0.4667: classC (4.34/2.01)
|   |   |   |   |   feature6 > 0.4667: classE (2.71/1.13)
|   |   |   predS = classF: classF (4.63/1.62)
|   |   |   predS = classG: classF (4.07/0.89)
|   feature5 = classG
|   |   predS = classA: classG (3.14/2.03)
|   |   predS = classB: classA (0.8/0.43)
|   |   predS = classC: classF (1.12/0.86)
|   |   predS = classD: classF (1.67/0.91)
|   |   predS = classE: classC (3.55/2.19)
|   |   predS = classF: classF (4.44/0.93)
|   |   predS = classG: classG (9.64/2.48)
feature3 = classD
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature9 <= 0.9: classD (53.65/21.05)
|   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   feature6 <= 0.5: classD (11.76/2.86)
|   |   |   |   |   |   feature6 > 0.5: classF (6.07)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classF (26.21/14.82)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature6 <= 0.6: classA (4.03/1.94)
|   |   |   |   |   |   |   feature6 > 0.6: classD (15.45/5.89)
|   |   |   |   |   |   feature6 > 0.6333: classA (6.71/3.24)
|   |   |   feature2 = classB: classB (16.57/9.68)
|   |   |   feature2 = classC: classC (12.86/6.9)
|   |   |   feature2 = classD
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classG (15.38/5.94)
|   |   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   |   feature9 <= 0.5667: classA (13.04/3.41)
|   |   |   |   |   |   |   |   |   feature9 > 0.5667: classG (3.18/0.75)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (9.5/3.66)
|   |   |   |   |   |   feature6 > 0.6: classA (34.65/14.6)
|   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   feature6 <= 0.6: classG (8.76/5.03)
|   |   |   |   |   |   feature6 > 0.6: classD (13.84/3.66)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classA (9.47/3.75)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   feature6 <= 0.4333: classD (33.85/7.7)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (11.23/2.44)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (5.7/1.24)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classD (7.05/2.59)
|   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (24.57/6.68)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (9.05/3.26)
|   |   |   |   |   |   feature6 > 0.6: classA (41.45/15.01)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.3667: classD (22.69/5.2)
|   |   |   |   |   feature6 > 0.3667: classA (43.53/20.24)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 <= 0.52
|   |   |   |   |   |   feature6 <= 0.5667: classC (6.02/3.14)
|   |   |   |   |   |   feature6 > 0.5667: classA (11.74/4.07)
|   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   feature9 <= 0.3333: classC (5.57/2.32)
|   |   |   |   |   |   feature9 > 0.3333: classD (14.44/4.68)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (2.93/1.18)
|   |   |   |   |   |   |   |   feature6 > 0.3333: classD (8.08/1.94)
|   |   |   |   |   |   |   feature6 > 0.5: classB (3.32/0.72)
|   |   |   |   |   |   feature6 > 0.5667: classA (12.54/5.61)
|   |   |   |   |   feature6 > 0.6333: classG (6.79/1.54)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.3333: classD (20.97/9.44)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature7 <= 0.64: classA (31.74/11.06)
|   |   |   |   |   |   feature7 > 0.64: classE (13.32/5.85)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5667: classB (15.52/8.07)
|   |   |   |   |   |   feature6 > 0.5667: classA (3.23/1.53)
|   |   |   |   |   feature6 > 0.6: classD (11.82/4.37)
|   |   |   feature2 = classF: classA (3.87/1.97)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.4: classD (24.85/6.04)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5333: classG (5.05/1.5)
|   |   |   |   |   |   feature6 > 0.5333: classB (6.29/3.11)
|   |   |   |   |   feature6 > 0.6: classD (5.02/1.84)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667: classA (112.41/66.55)
|   |   |   |   feature9 > 0.9667: classE (32.42/20.79)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   feature7 <= 0.96: classA (7.68/3.1)
|   |   |   |   |   |   feature7 > 0.96: classD (15.91/4.69)
|   |   |   |   |   feature8 > 0.6
|   |   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   |   feature6 <= 0.7333: classA (4.31/0.98)
|   |   |   |   |   |   |   feature6 > 0.7333: classD (11.39/4.65)
|   |   |   |   |   |   feature6 > 0.7667: classA (22.3/5.08)
|   |   |   |   feature6 > 0.8667: classA (61.4/13.94)
|   predS = classB
|   |   feature5 = classA: classB (3.18/1.7)
|   |   feature5 = classB
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature9 <= 0.4: classE (3.86/1.48)
|   |   |   |   |   feature9 > 0.4: classC (3.69/1.48)
|   |   |   |   feature9 > 0.6333: classB (7.52/2.21)
|   |   |   prevPredS = classB
|   |   |   |   feature7 <= 0.72
|   |   |   |   |   feature9 <= 0.9: classB (3.64/1.07)
|   |   |   |   |   feature9 > 0.9: classA (9.17/3.5)
|   |   |   |   feature7 > 0.72
|   |   |   |   |   feature6 <= 0.4667: classA (11.73/3.5)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   feature6 <= 0.9667: classA (13.78/5.22)
|   |   |   |   |   |   |   feature6 > 0.9667: classB (3.07/1.35)
|   |   |   |   |   |   feature9 > 0.9333: classB (175.38/85.98)
|   |   |   prevPredS = classC: classB (5.17/1.52)
|   |   |   prevPredS = classD: classB (0.0)
|   |   |   prevPredS = classE: classB (0.0)
|   |   |   prevPredS = classF: classB (0.0)
|   |   |   prevPredS = classG: classB (0.0)
|   |   feature5 = classC
|   |   |   prevPredS = classA: classB (0.69/0.42)
|   |   |   prevPredS = classB: classA (4.73/1.93)
|   |   |   prevPredS = classC: classB (0.3/0.1)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classE (5.28/2.43)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   feature5 = classD: classD (3.78/2.65)
|   |   feature5 = classE: classA (28.08/11.31)
|   |   feature5 = classF: classB (0.78/0.42)
|   |   feature5 = classG: classG (0.23/0.16)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classE (7.18/1.63)
|   |   |   feature6 > 0.2333: classA (82.48/30.54)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.5667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.3333: classD (6.91/2.59)
|   |   |   |   |   |   feature6 > 0.3333: classG (5.82/2.02)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5: classF (11.39/4.16)
|   |   |   |   |   |   |   feature6 > 0.5: classE (4.47/1.11)
|   |   |   |   |   |   feature6 > 0.5333: classC (7.44/3.41)
|   |   |   |   prevPredS = classB: classC (2.0/0.95)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.5333: classD (12.94/6.82)
|   |   |   |   |   feature6 > 0.5333: classC (7.38/1.6)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.5: classD (20.7/6.94)
|   |   |   |   |   feature6 > 0.5: classE (2.87/0.66)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667: classD (6.1/3.31)
|   |   |   |   |   feature6 > 0.4667: classE (3.82/1.94)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3667: classD (4.26/1.93)
|   |   |   |   |   |   feature6 > 0.3667: classC (3.75/1.61)
|   |   |   |   |   feature6 > 0.5: classE (16.92/3.68)
|   |   |   |   prevPredS = classG: classD (0.0)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.8333
|   |   |   |   |   feature6 <= 0.7333: classD (54.27/17.09)
|   |   |   |   |   feature6 > 0.7333: classB (48.96/27.14)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   feature9 <= 0.9: classD (44.18/13.04)
|   |   |   |   |   feature9 > 0.9: classC (13.81/4.21)
|   predS = classD
|   |   feature6 <= 0.7
|   |   |   feature6 <= 0.3667
|   |   |   |   feature7 <= 0.64
|   |   |   |   |   feature9 <= 0.6333: classD (53.87/13.49)
|   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   feature8 <= 0.5333: classE (17.97/6.76)
|   |   |   |   |   |   feature8 > 0.5333: classD (11.59/5.48)
|   |   |   |   feature7 > 0.64
|   |   |   |   |   feature6 <= 0.3: classA (69.2/16.91)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature9 <= 0.8333: classD (16.82/7.03)
|   |   |   |   |   |   feature9 > 0.8333: classA (27.36/9.45)
|   |   |   feature6 > 0.3667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5: classF (37.06/21.38)
|   |   |   |   |   feature6 > 0.5: classD (37.68/13.54)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.5: classF (15.23/5.85)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   feature5 = classC: classD (1.81/0.4)
|   |   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   |   feature9 <= 0.4333: classD (11.83/2.57)
|   |   |   |   |   |   |   |   feature9 > 0.4333: classE (3.57/1.7)
|   |   |   |   |   |   |   feature5 = classE: classC (8.02/2.42)
|   |   |   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature9 <= 0.8: classE (4.97/1.23)
|   |   |   |   |   |   feature9 > 0.8: classA (13.95/3.04)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.4667: classD (240.87/120.97)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.5: classE (3.26/1.39)
|   |   |   |   |   |   |   |   feature6 > 0.5: classD (8.06/1.75)
|   |   |   |   |   |   |   feature9 > 0.4667: classG (33.87/10.85)
|   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (16.31/4.95)
|   |   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   |   feature9 <= 0.6: classA (12.11/3.71)
|   |   |   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.7: classE (14.97/4.06)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.7: classD (3.7/0.8)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.9667: classD (55.03/11.94)
|   |   |   |   |   |   |   |   feature9 > 0.9667
|   |   |   |   |   |   |   |   |   feature6 <= 0.6: classC (5.12/1.38)
|   |   |   |   |   |   |   |   |   feature6 > 0.6: classD (4.24/0.92)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature7 <= 0.6: classD (12.03/2.61)
|   |   |   |   |   |   |   feature7 > 0.6: classE (7.16/3.36)
|   |   |   |   |   |   feature6 > 0.4333: classF (54.75/29.31)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature7 <= 0.52: classD (37.16/8.48)
|   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   feature8 <= 0.6333: classE (12.43/4.33)
|   |   |   |   |   |   |   feature8 > 0.6333: classD (9.09/2.32)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature9 <= 0.3667: classA (10.92/2.37)
|   |   |   |   |   |   feature9 > 0.3667: classF (7.55/0.31)
|   |   |   |   |   feature6 > 0.4333: classD (20.51/11.35)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature5 = classA: classE (3.11/1.25)
|   |   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   |   feature5 = classC: classF (0.0)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature7 <= 0.4: classG (4.68/1.67)
|   |   |   |   |   |   feature7 > 0.4: classD (25.52/10.12)
|   |   |   |   |   feature5 = classE: classF (7.92/0.64)
|   |   |   |   |   feature5 = classF: classF (0.0)
|   |   |   |   |   feature5 = classG: classD (2.27/1.21)
|   |   feature6 > 0.7
|   |   |   feature9 <= 0.6333
|   |   |   |   prevPredS = classA: classC (7.72/3.07)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classC (8.47/4.73)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature9 <= 0.4333: classD (19.03/4.13)
|   |   |   |   |   |   feature9 > 0.4333: classF (13.69/1.38)
|   |   |   |   |   feature9 > 0.4667: classD (31.41/8.68)
|   |   |   |   prevPredS = classE: classD (4.41/0.96)
|   |   |   |   prevPredS = classF: classD (1.39/0.3)
|   |   |   |   prevPredS = classG: classD (2.02/0.44)
|   |   |   feature9 > 0.6333: classD (413.21/89.67)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature9 <= 0.3: classD (40.95/15.97)
|   |   |   feature9 > 0.3: classE (259.25/109.24)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature5 = classA
|   |   |   |   |   feature6 <= 0.4333: classD (10.79/6.36)
|   |   |   |   |   feature6 > 0.4333: classC (104.02/61.92)
|   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.4: classA (2.73/0.86)
|   |   |   |   |   feature6 > 0.4: classC (5.24/2.12)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature7 <= 0.44: classA (13.67/5.27)
|   |   |   |   |   |   feature7 > 0.44: classD (32.63/9.32)
|   |   |   |   |   feature6 > 0.4333: classC (120.8/59.81)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature9 <= 0.5667: classE (27.97/12.15)
|   |   |   |   |   |   |   feature9 > 0.5667: classD (12.14/5.31)
|   |   |   |   |   |   feature6 > 0.4333: classC (179.66/99.26)
|   |   |   |   |   feature8 > 0.6
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   |   |   |   feature2 = classD: classA (13.01/4.61)
|   |   |   |   |   |   |   feature2 = classE: classD (18.09/8.22)
|   |   |   |   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   |   |   feature6 > 0.4333: classC (66.87/31.15)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature6 <= 0.4333: classG (13.96/5.56)
|   |   |   |   |   feature6 > 0.4333: classC (24.13/10.26)
|   |   |   |   feature5 = classG
|   |   |   |   |   feature6 <= 0.4333: classD (12.5/6.37)
|   |   |   |   |   feature6 > 0.4333: classC (188.46/114.71)
|   |   |   feature6 > 0.4667
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.4: classA (18.22/6.41)
|   |   |   |   |   feature7 > 0.4: classE (11.84/5.45)
|   |   |   |   feature2 = classB: classB (2.92/1.02)
|   |   |   |   feature2 = classC
|   |   |   |   |   feature6 <= 0.6: classF (3.59/0.93)
|   |   |   |   |   feature6 > 0.6: classE (3.1/1.06)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature8 <= 0.5333: classE (29.99/12.45)
|   |   |   |   |   feature8 > 0.5333: classD (36.32/16.09)
|   |   |   |   feature2 = classE
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.7: classD (16.83/7.82)
|   |   |   |   |   |   feature9 > 0.7: classE (9.61/2.68)
|   |   |   |   |   prevPredS = classB: classA (1.9/0.42)
|   |   |   |   |   prevPredS = classC: classE (23.07/6.06)
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.2667: classD (5.85/1.57)
|   |   |   |   |   |   |   |   feature9 > 0.2667: classE (6.31/1.66)
|   |   |   |   |   |   |   feature9 > 0.4333: classD (27.41/7.52)
|   |   |   |   |   |   feature7 > 0.64: classE (32.53/8.54)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 <= 0.44: classE (36.62/9.77)
|   |   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   |   |   feature7 <= 0.52: classD (13.74/4.94)
|   |   |   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   |   |   feature7 <= 0.56: classE (26.83/7.05)
|   |   |   |   |   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5: classD (9.96/3.85)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5: classE (26.48/5.9)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.6667: classD (28.61/13.7)
|   |   |   |   |   |   |   feature8 > 0.6: classD (83.17/32.26)
|   |   |   |   |   prevPredS = classF: classF (1.08/0.11)
|   |   |   |   |   prevPredS = classG: classG (5.44/2.36)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature5 = classA: classE (0.05/0.02)
|   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   feature5 = classC: classA (5.74/1.72)
|   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   feature5 = classE: classD (2.19/0.78)
|   |   |   |   |   feature5 = classF
|   |   |   |   |   |   feature6 <= 0.5333: classD (2.63/0.69)
|   |   |   |   |   |   feature6 > 0.5333: classE (3.97/1.85)
|   |   |   |   |   feature5 = classG: classG (0.71/0.24)
|   |   |   |   feature2 = classG: classE (1.51/0.47)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.3: classA (6.32/2.58)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.3333: classE (2.65/0.78)
|   |   |   |   |   |   |   feature6 > 0.3333: classF (4.55/2.32)
|   |   |   |   |   feature6 > 0.5333: classA (14.98/3.47)
|   |   |   |   feature9 > 0.5: classF (16.05/7.0)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   feature6 <= 0.3: classG (7.05/1.53)
|   |   |   |   |   |   |   feature6 > 0.3: classF (6.58/0.95)
|   |   |   |   |   |   feature6 > 0.3667: classD (6.07/1.79)
|   |   |   |   |   feature6 > 0.4333: classB (80.3/28.36)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333: classD (17.87/10.83)
|   |   |   |   |   feature6 > 0.5333: classF (11.95/6.5)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.3333: classB (2.79/0.92)
|   |   |   feature6 > 0.3333: classE (3.51/1.64)
|   |   prevPredS = classC: classC (2.28/1.46)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.5333
|   |   |   |   feature8 <= 0.8667: classD (10.99/4.28)
|   |   |   |   feature8 > 0.8667
|   |   |   |   |   feature6 <= 0.2667: classG (2.82/0.61)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.4333: classA (42.0/11.81)
|   |   |   |   |   |   feature6 > 0.4333: classF (7.16/4.42)
|   |   |   feature9 > 0.5333
|   |   |   |   feature9 <= 0.9: classD (35.52/14.08)
|   |   |   |   feature9 > 0.9: classA (6.42/2.47)
|   |   prevPredS = classE
|   |   |   feature5 = classA: classF (0.0)
|   |   |   feature5 = classB: classF (0.0)
|   |   |   feature5 = classC: classF (10.07/2.77)
|   |   |   feature5 = classD: classD (12.42/6.37)
|   |   |   feature5 = classE
|   |   |   |   feature6 <= 0.4667: classE (15.71/5.19)
|   |   |   |   feature6 > 0.4667: classF (5.01/1.76)
|   |   |   feature5 = classF: classF (1.03/0.19)
|   |   |   feature5 = classG: classF (0.0)
|   |   prevPredS = classF
|   |   |   feature8 <= 0.6333
|   |   |   |   feature9 <= 0.6667
|   |   |   |   |   feature6 <= 0.6: classF (6.79/2.24)
|   |   |   |   |   feature6 > 0.6: classG (9.39/3.1)
|   |   |   |   feature9 > 0.6667
|   |   |   |   |   feature6 <= 0.4667: classE (12.69/4.14)
|   |   |   |   |   feature6 > 0.4667: classF (2.92/1.38)
|   |   |   feature8 > 0.6333
|   |   |   |   feature5 = classA: classF (0.48/0.16)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.5: classF (4.69/0.56)
|   |   |   |   |   feature6 > 0.5: classG (2.86/1.05)
|   |   |   |   feature5 = classD: classF (1.73/1.08)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.4333: classA (18.19/8.98)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333: classD (22.37/8.26)
|   |   |   |   |   |   |   feature6 > 0.5333: classF (3.68/1.28)
|   |   |   |   |   feature6 > 0.6: classG (16.06/4.13)
|   |   |   |   feature5 = classF: classF (8.47/2.99)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.6: classF (11.91/2.7)
|   |   |   |   feature6 > 0.6: classG (7.64/1.66)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature9 <= 0.5333: classF (3.48/0.48)
|   |   |   |   |   feature9 > 0.5333: classD (7.21/2.78)
|   |   |   |   feature9 > 0.6: classG (11.41/3.68)
|   |   |   feature2 = classE: classF (0.0)
|   |   |   feature2 = classF
|   |   |   |   feature9 <= 0.6667
|   |   |   |   |   feature9 <= 0.6: classF (6.21/0.86)
|   |   |   |   |   feature9 > 0.6: classG (15.11/4.85)
|   |   |   |   feature9 > 0.6667: classF (8.0/1.11)
|   |   |   feature2 = classG: classG (0.35/0.15)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature6 <= 0.2667: classD (11.45/3.05)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4: classA (6.9/3.1)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.7: classF (15.35/5.4)
|   |   |   |   |   feature6 > 0.7: classA (6.53/2.54)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classA (7.5/3.7)
|   |   feature5 = classD
|   |   |   prevPredS = classA: classF (7.89/3.83)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.3667: classG (4.24/2.1)
|   |   |   |   feature9 > 0.3667: classD (46.68/19.09)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4: classD (12.91/4.34)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.4667: classA (3.74/1.94)
|   |   |   |   |   feature6 > 0.4667: classF (3.53/0.11)
|   |   |   prevPredS = classF: classG (1.52/0.53)
|   |   |   prevPredS = classG
|   |   |   |   feature2 = classA: classG (1.47/0.95)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   feature2 = classD: classD (10.96/4.97)
|   |   |   |   feature2 = classE: classG (3.63/1.26)
|   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   feature2 = classG: classG (0.66/0.23)
|   |   feature5 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4: classD (12.17/3.76)
|   |   |   |   feature6 > 0.4: classF (13.3/5.73)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classG (0.06/0.02)
|   |   |   prevPredS = classE
|   |   |   |   feature7 <= 0.64
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4667: classA (7.18/3.2)
|   |   |   |   |   |   feature6 > 0.4667: classF (3.1)
|   |   |   |   |   feature6 > 0.5: classG (8.19/1.78)
|   |   |   |   feature7 > 0.64: classD (15.43/7.03)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4: classA (11.21/2.66)
|   |   |   |   feature6 > 0.4: classF (11.12/2.04)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.5: classF (4.6/1.28)
|   |   |   |   feature6 > 0.5: classD (13.06/4.66)
|   |   feature5 = classF
|   |   |   prevPredS = classA: classF (6.37/3.62)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.6333: classF (3.42/0.81)
|   |   |   |   feature6 > 0.6333: classD (10.81/2.41)
|   |   |   prevPredS = classE: classF (1.07/0.7)
|   |   |   prevPredS = classF: classF (1.36/0.45)
|   |   |   prevPredS = classG: classF (16.64/2.57)
|   |   feature5 = classG
|   |   |   feature2 = classA: classF (2.15/1.37)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD
|   |   |   |   feature6 <= 0.4667: classG (25.7/6.12)
|   |   |   |   feature6 > 0.4667: classF (7.99/1.38)
|   |   |   feature2 = classE: classG (0.2/0.08)
|   |   |   feature2 = classF: classG (1.17/0.45)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.3333: classD (12.86/4.45)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.4667: classG (8.54/1.93)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.5: classF (17.24/1.12)
|   |   |   |   |   |   |   feature6 > 0.5: classD (31.84/15.03)
|   |   |   |   feature6 > 0.7: classG (23.82/5.39)
feature3 = classE
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature5 = classA: classD (21.16/9.31)
|   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   feature5 = classD: classA (9.86/4.62)
|   |   |   |   |   |   feature5 = classE: classA (1.63/0.76)
|   |   |   |   |   |   feature5 = classF: classA (0.35/0.17)
|   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.5333: classG (41.43/15.77)
|   |   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.5667: classA (11.45/2.74)
|   |   |   |   |   |   |   |   feature9 > 0.5667: classG (8.83/2.24)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (9.53/2.88)
|   |   |   |   |   |   |   feature6 > 0.5667: classD (12.07/5.42)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature8 <= 0.9333
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (4.88/2.73)
|   |   |   |   |   |   |   |   feature6 > 0.3333: classE (20.92/5.63)
|   |   |   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   |   |   feature6 <= 0.4: classE (6.73/3.14)
|   |   |   |   |   |   |   |   feature6 > 0.4: classA (17.86/3.87)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature2 = classA: classF (24.05/6.54)
|   |   |   |   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   |   |   |   feature2 = classC: classF (0.0)
|   |   |   |   |   |   |   feature2 = classD: classF (0.0)
|   |   |   |   |   |   |   feature2 = classE: classE (16.13/7.72)
|   |   |   |   |   |   |   feature2 = classF: classA (8.2/3.93)
|   |   |   |   |   |   |   feature2 = classG: classF (0.0)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature9 <= 0.9: classA (24.45/11.02)
|   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   feature9 <= 0.9333: classE (25.47/12.65)
|   |   |   |   |   |   |   feature9 > 0.9333: classA (10.17/5.2)
|   |   |   prevPredS = classB: classB (3.8/1.3)
|   |   |   prevPredS = classC
|   |   |   |   feature9 <= 0.5: classA (13.24/5.32)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classC (8.84/2.23)
|   |   |   |   |   feature6 > 0.5333: classB (2.62/1.7)
|   |   |   prevPredS = classD: classA (2.72/1.09)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5: classB (12.0/3.59)
|   |   |   |   |   |   |   feature9 > 0.5: classD (21.45/4.65)
|   |   |   |   |   |   feature9 > 0.6: classE (24.64/7.37)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature2 = classA: classA (0.0)
|   |   |   |   |   |   |   feature2 = classB: classB (5.83/1.44)
|   |   |   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   |   |   feature2 = classD: classD (0.01/0.0)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature8 <= 0.7333
|   |   |   |   |   |   |   |   |   feature7 <= 0.8: classA (19.91/5.4)
|   |   |   |   |   |   |   |   |   feature7 > 0.8: classE (2.87/0.71)
|   |   |   |   |   |   |   |   feature8 > 0.7333
|   |   |   |   |   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.36: classE (4.39/1.08)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.72: classA (15.81/3.43)
|   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.72: classE (4.39/1.08)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6667: classE (32.76/8.06)
|   |   |   |   |   |   |   |   |   feature9 > 0.9: classA (12.34/3.58)
|   |   |   |   |   |   |   feature2 = classF: classA (1.48/0.32)
|   |   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   |   feature6 > 0.5333: classB (37.39/14.64)
|   |   |   |   feature6 > 0.5667: classA (89.8/44.69)
|   |   |   prevPredS = classF
|   |   |   |   feature7 <= 0.52
|   |   |   |   |   feature6 <= 0.5667: classC (14.92/9.98)
|   |   |   |   |   feature6 > 0.5667: classA (30.13/11.83)
|   |   |   |   feature7 > 0.52
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.4: classE (23.41/6.6)
|   |   |   |   |   |   feature6 > 0.4: classC (19.53/11.64)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.6333: classD (7.34/1.59)
|   |   |   |   |   |   feature6 > 0.6333: classE (21.75/4.94)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   feature9 <= 0.5: classA (11.98/5.63)
|   |   |   |   |   |   feature9 > 0.5: classG (4.35/2.11)
|   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   feature6 <= 0.4: classD (17.33/3.91)
|   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   feature6 <= 0.6: classB (4.56/1.79)
|   |   |   |   |   |   |   feature6 > 0.6: classD (3.54/0.77)
|   |   |   |   feature6 > 0.6333: classG (15.31/4.33)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7: classE (140.96/71.47)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.9333
|   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.6: classA (5.68/2.41)
|   |   |   |   |   |   |   feature9 > 0.6: classE (10.74/2.34)
|   |   |   |   |   |   feature9 > 0.6333: classA (83.07/30.86)
|   |   |   |   |   feature6 > 0.7667
|   |   |   |   |   |   feature9 <= 0.7: classA (47.99/12.0)
|   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   feature5 = classA: classA (17.8/3.86)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classC (0.01/0.0)
|   |   |   |   |   |   |   feature5 = classD: classA (0.1/0.02)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.8: classE (32.73/7.52)
|   |   |   |   |   |   |   |   feature6 > 0.8
|   |   |   |   |   |   |   |   |   feature9 <= 0.9: classA (4.45/0.97)
|   |   |   |   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.8333: classE (11.19/2.79)
|   |   |   |   |   |   |   |   |   |   |   feature8 > 0.8333: classA (7.68/1.67)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88: classE (11.12/2.57)
|   |   |   |   |   |   |   feature5 = classF: classA (0.5/0.11)
|   |   |   |   |   |   |   feature5 = classG: classA (0.2/0.04)
|   |   |   |   feature6 > 0.9333: classA (77.7/17.78)
|   predS = classB
|   |   feature5 = classA: classB (3.49/1.82)
|   |   feature5 = classB
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature9 <= 0.4: classE (4.0/1.51)
|   |   |   |   |   feature9 > 0.4: classC (4.01/1.59)
|   |   |   |   feature9 > 0.6333: classB (7.79/2.26)
|   |   |   prevPredS = classB
|   |   |   |   feature7 <= 0.72: classA (14.19/7.69)
|   |   |   |   feature7 > 0.72
|   |   |   |   |   feature6 <= 0.4667: classA (12.56/3.84)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   feature6 <= 0.9667: classA (14.44/5.46)
|   |   |   |   |   |   |   feature6 > 0.9667: classB (3.25/1.39)
|   |   |   |   |   |   feature9 > 0.9333: classB (194.62/92.55)
|   |   |   prevPredS = classC: classB (5.37/1.56)
|   |   |   prevPredS = classD: classB (0.0)
|   |   |   prevPredS = classE: classB (0.0)
|   |   |   prevPredS = classF: classB (0.0)
|   |   |   prevPredS = classG: classB (0.0)
|   |   feature5 = classC
|   |   |   prevPredS = classA: classB (0.73/0.44)
|   |   |   prevPredS = classB: classA (4.9/1.99)
|   |   |   prevPredS = classC: classB (0.33/0.11)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classE (6.13/2.78)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   feature5 = classD: classD (0.03/0.02)
|   |   feature5 = classE
|   |   |   feature9 <= 0.7
|   |   |   |   feature8 <= 0.4667: classE (7.85/3.28)
|   |   |   |   feature8 > 0.4667: classB (3.86/2.3)
|   |   |   feature9 > 0.7: classA (34.4/13.73)
|   |   feature5 = classF
|   |   |   prevPredS = classA: classB (1.66/1.0)
|   |   |   prevPredS = classB: classA (11.61/4.93)
|   |   |   prevPredS = classC: classE (14.27/5.72)
|   |   |   prevPredS = classD: classE (0.0)
|   |   |   prevPredS = classE: classE (0.0)
|   |   |   prevPredS = classF: classE (0.0)
|   |   |   prevPredS = classG: classE (0.0)
|   |   feature5 = classG: classG (0.25/0.17)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classE (8.47/1.94)
|   |   |   feature6 > 0.2333: classA (103.73/42.64)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.7
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (8.21/3.07)
|   |   |   |   |   |   |   feature6 > 0.3333: classG (6.85/2.38)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.4333: classF (11.04/3.06)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (7.72/3.71)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classC (5.94/1.29)
|   |   |   |   |   feature6 > 0.6: classD (11.9/3.88)
|   |   |   |   prevPredS = classB: classC (3.0/1.76)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5: classD (13.83/6.14)
|   |   |   |   |   |   |   feature6 > 0.5: classE (3.6/0.78)
|   |   |   |   |   |   feature6 > 0.5333: classC (8.67/1.88)
|   |   |   |   |   feature6 > 0.6: classD (10.16/2.33)
|   |   |   |   prevPredS = classD: classE (2.52/1.31)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classD (13.09/7.67)
|   |   |   |   |   feature2 = classD: classE (0.47/0.25)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.5667: classE (14.83/5.77)
|   |   |   |   |   |   feature6 > 0.5667: classD (4.72/1.69)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.3667: classD (5.56/2.5)
|   |   |   |   |   |   |   feature6 > 0.3667: classC (4.75/2.11)
|   |   |   |   |   |   feature6 > 0.5: classE (20.5/4.67)
|   |   |   |   |   feature6 > 0.6: classD (7.77/1.69)
|   |   |   |   prevPredS = classG: classD (0.0)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.8333
|   |   |   |   |   feature6 <= 0.7333: classC (4.51/0.99)
|   |   |   |   |   feature6 > 0.7333: classB (38.15/12.49)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   prevPredS = classA: classE (0.0)
|   |   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (0.16/0.03)
|   |   |   |   |   |   prevPredS = classD: classD (3.09/0.89)
|   |   |   |   |   |   prevPredS = classE: classE (5.51/1.24)
|   |   |   |   |   |   prevPredS = classF: classD (0.09/0.02)
|   |   |   |   |   |   prevPredS = classG: classE (0.0)
|   |   |   |   |   feature9 > 0.4667: classC (18.61/4.04)
|   predS = classD
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5: classD (23.4/11.0)
|   |   |   |   feature9 > 0.5: classC (16.86/7.54)
|   |   |   feature9 > 0.6333
|   |   |   |   feature7 <= 0.44: classE (101.7/38.5)
|   |   |   |   feature7 > 0.44: classD (20.66/9.2)
|   |   prevPredS = classB: classE (0.0)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333: classE (4.08/2.01)
|   |   |   |   feature6 > 0.4333: classF (12.62/4.17)
|   |   |   feature6 > 0.5333
|   |   |   |   feature9 <= 0.8
|   |   |   |   |   feature6 <= 0.8667
|   |   |   |   |   |   feature7 <= 0.28: classE (6.69/2.51)
|   |   |   |   |   |   feature7 > 0.28
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (3.85/0.83)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (4.28/1.56)
|   |   |   |   |   feature6 > 0.8667: classC (7.08/2.69)
|   |   |   |   feature9 > 0.8
|   |   |   |   |   feature9 <= 0.9333: classA (16.65/3.82)
|   |   |   |   |   feature9 > 0.9333: classC (8.57/1.96)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.5333
|   |   |   |   feature9 <= 0.4667
|   |   |   |   |   feature6 <= 0.8667
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (6.96/3.56)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classF (16.22/7.41)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classE (3.63/1.13)
|   |   |   |   |   |   feature6 > 0.5: classD (18.16/4.99)
|   |   |   |   |   feature6 > 0.8667: classF (14.11/0.07)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature5 = classA: classG (0.0)
|   |   |   |   |   feature5 = classB: classG (0.0)
|   |   |   |   |   feature5 = classC: classG (0.0)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333: classF (7.44/3.74)
|   |   |   |   |   |   |   feature6 > 0.5333: classG (9.54/2.12)
|   |   |   |   |   |   feature6 > 0.5667: classD (6.27/1.36)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (5.72/2.78)
|   |   |   |   |   |   |   feature6 > 0.4333: classF (16.95/8.31)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.5667: classG (24.44/6.5)
|   |   |   |   |   |   |   feature6 > 0.5667: classE (8.35/2.1)
|   |   |   |   |   feature5 = classF: classG (0.0)
|   |   |   |   |   feature5 = classG: classG (1.73/0.6)
|   |   |   feature9 > 0.5333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classE (9.55/2.19)
|   |   |   |   |   feature6 > 0.4333: classF (49.9/20.77)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   |   |   feature8 <= 0.5667
|   |   |   |   |   |   |   |   |   feature6 <= 0.7: classE (16.23/5.48)
|   |   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classD (11.6/2.52)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.7333: classE (2.94/1.14)
|   |   |   |   |   |   |   |   feature8 > 0.5667: classE (50.75/15.69)
|   |   |   |   |   |   |   feature6 > 0.8333
|   |   |   |   |   |   |   |   feature9 <= 0.6: classD (6.68/1.45)
|   |   |   |   |   |   |   |   feature9 > 0.6: classC (3.77/1.58)
|   |   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   |   feature9 <= 0.9667: classD (7.26/1.62)
|   |   |   |   |   |   |   feature9 > 0.9667: classC (7.69/3.29)
|   |   |   |   |   feature7 > 0.84
|   |   |   |   |   |   feature9 <= 0.6667: classD (30.57/6.82)
|   |   |   |   |   |   feature9 > 0.6667
|   |   |   |   |   |   |   feature9 <= 0.7333: classE (4.37/1.0)
|   |   |   |   |   |   |   feature9 > 0.7333: classD (3.13/0.7)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.3
|   |   |   |   feature9 <= 0.7333: classA (22.25/5.45)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature9 <= 0.9: classE (9.74/2.11)
|   |   |   |   |   feature9 > 0.9: classA (2.81/0.61)
|   |   |   feature6 > 0.3
|   |   |   |   feature8 <= 0.5
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classE (3.17/1.52)
|   |   |   |   |   |   feature6 > 0.4333: classF (10.71/3.45)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature8 <= 0.4667: classD (22.29/5.06)
|   |   |   |   |   |   feature8 > 0.4667
|   |   |   |   |   |   |   feature9 <= 0.5667: classD (7.64/1.72)
|   |   |   |   |   |   |   feature9 > 0.5667: classE (5.46/1.84)
|   |   |   |   feature8 > 0.5
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   |   feature8 <= 0.8333
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (11.23/2.57)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classF (8.05/3.5)
|   |   |   |   |   |   |   feature8 > 0.8333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classF (4.8/2.26)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classE (5.51/1.91)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classG (5.0/1.35)
|   |   |   |   |   |   |   |   |   feature6 > 0.3333: classE (9.19/1.99)
|   |   |   |   |   |   |   |   feature9 > 0.6667: classE (37.41/8.12)
|   |   |   |   |   |   |   feature6 > 0.4333: classF (84.59/46.46)
|   |   |   |   |   feature6 > 0.5: classE (74.26/18.13)
|   |   prevPredS = classF
|   |   |   feature9 <= 0.4: classD (5.99/2.25)
|   |   |   feature9 > 0.4
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   feature9 <= 0.4667: classE (5.61/1.22)
|   |   |   |   |   |   |   feature9 > 0.4667: classF (8.8/0.18)
|   |   |   |   |   |   feature6 > 0.4: classE (16.38/3.55)
|   |   |   |   |   feature6 > 0.4333: classF (13.45/4.53)
|   |   |   |   feature6 > 0.5333: classE (22.81/6.0)
|   |   prevPredS = classG
|   |   |   feature2 = classA: classD (9.19/4.59)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD
|   |   |   |   feature6 <= 0.4333: classG (4.02/0.9)
|   |   |   |   feature6 > 0.4333: classD (3.44/1.9)
|   |   |   feature2 = classE: classE (6.74/4.52)
|   |   |   feature2 = classF: classF (12.02/2.74)
|   |   |   feature2 = classG: classG (0.35/0.12)
|   predS = classE
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4333
|   |   |   |   feature6 <= 0.3
|   |   |   |   |   feature9 <= 0.8: classE (167.85/94.72)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8333: classG (9.72/2.11)
|   |   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   |   feature6 <= 0.2333: classE (2.86/0.62)
|   |   |   |   |   |   |   feature6 > 0.2333: classG (4.09/1.79)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature8 <= 0.6667
|   |   |   |   |   |   feature7 <= 0.36: classG (16.52/7.2)
|   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   feature5 = classA: classD (16.13/5.88)
|   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   feature5 = classC: classA (1.53/0.71)
|   |   |   |   |   |   |   feature5 = classD: classD (3.1/0.9)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   |   |   |   feature9 <= 0.6: classE (30.87/11.11)
|   |   |   |   |   |   |   |   |   feature9 > 0.6: classD (13.73/5.01)
|   |   |   |   |   |   |   |   feature8 > 0.6333: classD (17.36/6.17)
|   |   |   |   |   |   |   feature5 = classF: classF (2.4/0.45)
|   |   |   |   |   |   |   feature5 = classG: classG (0.26/0.1)
|   |   |   |   |   feature8 > 0.6667
|   |   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   |   feature7 <= 0.76: classE (7.25/3.02)
|   |   |   |   |   |   |   feature7 > 0.76: classA (21.72/4.92)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   prevPredS = classA: classE (23.93/8.58)
|   |   |   |   |   |   |   prevPredS = classB: classA (1.9/0.52)
|   |   |   |   |   |   |   prevPredS = classC: classC (0.21/0.06)
|   |   |   |   |   |   |   prevPredS = classD: classD (13.52/6.02)
|   |   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   |   feature7 <= 0.76
|   |   |   |   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature2 = classD: classD (3.95/1.08)
|   |   |   |   |   |   |   |   |   |   feature2 = classE: classE (11.04/5.47)
|   |   |   |   |   |   |   |   |   |   feature2 = classF: classE (0.88/0.22)
|   |   |   |   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   |   |   |   |   feature7 > 0.72: classA (13.26/4.86)
|   |   |   |   |   |   |   |   feature7 > 0.76
|   |   |   |   |   |   |   |   |   feature9 <= 0.8: classE (27.19/6.69)
|   |   |   |   |   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4: classE (9.3/2.63)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4: classD (11.64/3.6)
|   |   |   |   |   |   |   prevPredS = classF: classE (7.7/1.97)
|   |   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   |   feature6 <= 0.4: classE (6.15/2.69)
|   |   |   |   |   |   |   |   feature6 > 0.4: classA (11.32/2.92)
|   |   |   feature6 > 0.4333: classC (744.33/380.67)
|   |   feature6 > 0.4667
|   |   |   feature8 <= 0.6667
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.32: classD (13.02/4.48)
|   |   |   |   |   feature7 > 0.32
|   |   |   |   |   |   feature7 <= 0.36: classA (7.56/2.28)
|   |   |   |   |   |   feature7 > 0.36: classE (12.42/3.3)
|   |   |   |   feature2 = classB: classB (1.24/0.35)
|   |   |   |   feature2 = classC: classF (2.85/1.36)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   feature9 <= 0.6333: classE (18.11/5.98)
|   |   |   |   |   |   feature9 > 0.6333: classD (11.92/5.42)
|   |   |   |   |   feature6 > 0.7667: classD (10.88/2.46)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature7 <= 0.44
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   prevPredS = classA: classE (2.93/1.57)
|   |   |   |   |   |   |   prevPredS = classB: classA (0.14/0.03)
|   |   |   |   |   |   |   prevPredS = classC: classD (0.0)
|   |   |   |   |   |   |   prevPredS = classD: classD (13.14/4.73)
|   |   |   |   |   |   |   prevPredS = classE: classE (1.85/0.52)
|   |   |   |   |   |   |   prevPredS = classF: classF (0.08/0.01)
|   |   |   |   |   |   |   prevPredS = classG: classG (0.41/0.12)
|   |   |   |   |   |   feature6 > 0.7: classG (34.46/9.25)
|   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature9 <= 0.5667: classC (3.75/0.91)
|   |   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   |   feature9 <= 0.7: classD (4.63/1.27)
|   |   |   |   |   |   |   |   feature9 > 0.7: classE (3.14/0.75)
|   |   |   |   |   |   prevPredS = classB: classA (0.76/0.17)
|   |   |   |   |   |   prevPredS = classC: classE (0.04/0.01)
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature9 <= 0.5333: classE (13.88/3.32)
|   |   |   |   |   |   |   feature9 > 0.5333: classD (14.46/5.19)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   |   |   feature7 <= 0.68
|   |   |   |   |   |   |   |   |   feature7 <= 0.52: classD (30.89/8.99)
|   |   |   |   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classD (17.6/3.96)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classE (7.87/2.75)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.7333: classD (21.98/5.18)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.64: classE (31.6/7.55)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.8333: classE (9.32/2.47)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.8333: classD (11.29/2.89)
|   |   |   |   |   |   |   |   feature7 > 0.68
|   |   |   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.6667: classE (5.97/1.3)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.6667: classD (7.43/3.66)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.6: classD (22.89/8.05)
|   |   |   |   |   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.7667: classG (23.17/6.36)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.7667
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.8: classD (10.77/2.37)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.8: classE (6.65/1.44)
|   |   |   |   |   |   |   feature7 > 0.8: classE (27.26/6.51)
|   |   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   |   feature9 <= 0.3667: classD (3.97/0.98)
|   |   |   |   |   |   |   feature9 > 0.3667: classE (8.44/2.32)
|   |   |   |   |   |   prevPredS = classG: classE (18.49/5.62)
|   |   |   |   feature2 = classF
|   |   |   |   |   prevPredS = classA: classD (0.81/0.59)
|   |   |   |   |   prevPredS = classB: classA (0.05/0.01)
|   |   |   |   |   prevPredS = classC: classF (0.0)
|   |   |   |   |   prevPredS = classD: classF (6.47/0.29)
|   |   |   |   |   prevPredS = classE: classE (8.93/2.13)
|   |   |   |   |   prevPredS = classF: classA (3.5/1.68)
|   |   |   |   |   prevPredS = classG: classG (0.1/0.02)
|   |   |   |   feature2 = classG: classG (7.88/3.58)
|   |   |   feature8 > 0.6667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.5: classD (13.34/5.6)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature9 <= 0.5667: classC (4.78/2.4)
|   |   |   |   |   |   |   feature9 > 0.5667: classE (15.45/4.28)
|   |   |   |   |   prevPredS = classB: classA (3.6/2.15)
|   |   |   |   |   prevPredS = classC: classC (0.86/0.42)
|   |   |   |   |   prevPredS = classD: classE (41.19/12.97)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classE (3.06/0.78)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (11.26/3.11)
|   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (1.82/0.46)
|   |   |   |   |   |   |   feature2 = classD
|   |   |   |   |   |   |   |   feature7 <= 0.4: classD (3.65/1.0)
|   |   |   |   |   |   |   |   feature7 > 0.4: classE (9.19/2.75)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature8 <= 0.8
|   |   |   |   |   |   |   |   |   feature8 <= 0.7333: classE (12.64/5.47)
|   |   |   |   |   |   |   |   |   feature8 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classD (21.96/8.43)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.6667: classE (5.62/1.22)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.7: classD (7.12/4.56)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.52: classD (10.75/2.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.76: classE (8.14/1.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.76: classD (3.47/0.91)
|   |   |   |   |   |   |   |   feature8 > 0.8
|   |   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (7.96/3.35)
|   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (22.11/4.8)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.56: classD (9.07/4.46)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.6: classE (30.39/6.59)
|   |   |   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.68: classE (12.71/4.19)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.68
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.7: classD (10.98/6.37)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (6.47/1.87)
|   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (2.89/0.63)
|   |   |   |   |   |   |   feature2 = classF: classE (1.37/0.35)
|   |   |   |   |   |   |   feature2 = classG: classE (0.03/0.01)
|   |   |   |   |   |   feature7 > 0.8
|   |   |   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   |   |   feature9 <= 0.9: classE (12.96/3.28)
|   |   |   |   |   |   |   |   feature9 > 0.9: classB (13.55/5.15)
|   |   |   |   |   |   |   feature7 > 0.84
|   |   |   |   |   |   |   |   feature8 <= 0.8667
|   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classE (14.94/3.79)
|   |   |   |   |   |   |   |   |   feature9 > 0.9333: classA (11.95/3.11)
|   |   |   |   |   |   |   |   feature8 > 0.8667: classE (64.55/16.36)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.6: classF (5.21/2.05)
|   |   |   |   |   |   feature6 > 0.6: classA (4.9/1.88)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.7333: classE (9.81/3.37)
|   |   |   |   |   |   feature9 > 0.7333: classG (5.23/2.58)
|   |   |   |   feature6 > 0.7333: classE (280.78/63.54)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature9 <= 0.3333
|   |   |   |   |   |   feature9 <= 0.3: classE (3.44/1.25)
|   |   |   |   |   |   feature9 > 0.3: classG (20.1/5.97)
|   |   |   |   |   feature9 > 0.3333
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.4333: classA (9.06/4.32)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (14.53/5.98)
|   |   |   |   |   |   feature6 > 0.5333: classA (17.54/4.04)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5333: classC (14.99/7.66)
|   |   |   |   |   feature9 > 0.5333: classF (5.26/0.56)
|   |   |   feature9 > 0.6333
|   |   |   |   feature9 <= 0.8667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.2667: classG (5.43/1.18)
|   |   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classE (3.22/1.43)
|   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classF (4.14)
|   |   |   |   |   |   |   |   |   feature6 > 0.3667: classE (2.76/0.96)
|   |   |   |   |   |   feature6 > 0.4333: classB (95.54/34.46)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5: classD (4.13/2.01)
|   |   |   |   |   |   |   feature6 > 0.5: classG (5.43/1.18)
|   |   |   |   |   |   feature6 > 0.5333: classE (10.06/5.66)
|   |   |   |   feature9 > 0.8667
|   |   |   |   |   feature9 <= 0.9: classA (13.17/4.44)
|   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   feature5 = classA: classE (20.1/7.27)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   feature5 = classD: classE (0.0)
|   |   |   |   |   |   feature5 = classE: classE (0.0)
|   |   |   |   |   |   feature5 = classF: classF (3.5/0.37)
|   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.3333: classB (3.14/0.94)
|   |   |   feature6 > 0.3333: classE (3.75/1.55)
|   |   prevPredS = classC: classC (2.5/1.53)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.6333
|   |   |   |   feature8 <= 0.7667
|   |   |   |   |   feature6 <= 0.5: classD (36.05/11.34)
|   |   |   |   |   feature6 > 0.5: classG (2.79/1.53)
|   |   |   |   feature8 > 0.7667: classE (4.76/2.07)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.3333: classA (17.32/4.41)
|   |   |   |   feature6 > 0.3333: classF (2.74/1.36)
|   |   prevPredS = classE
|   |   |   feature8 <= 0.6667
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3: classG (4.73/1.03)
|   |   |   |   |   |   feature6 > 0.3: classF (20.57/4.73)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   |   |   feature2 = classD: classD (11.47/2.75)
|   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classE (3.35/1.24)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classD (33.97/7.85)
|   |   |   |   |   |   |   feature9 > 0.6333: classE (5.76/1.48)
|   |   |   |   |   |   feature2 = classF: classE (14.43/5.05)
|   |   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.6: classF (14.8/5.55)
|   |   |   |   |   feature6 > 0.6: classE (4.67/1.08)
|   |   |   feature8 > 0.6667
|   |   |   |   feature5 = classA: classE (6.94/2.66)
|   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   feature5 = classC: classF (4.13/0.99)
|   |   |   |   feature5 = classD: classD (1.65/0.62)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   feature6 <= 0.3667: classA (25.9/8.84)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.5333: classE (16.58/6.57)
|   |   |   |   |   |   |   feature6 > 0.5333: classF (2.95/0.74)
|   |   |   |   |   feature7 > 0.72: classE (35.99/13.22)
|   |   |   |   feature5 = classF: classF (0.42/0.05)
|   |   |   |   feature5 = classG: classE (0.0)
|   |   prevPredS = classF
|   |   |   feature2 = classA: classF (6.17/1.62)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD
|   |   |   |   feature9 <= 0.4667: classD (13.44/4.82)
|   |   |   |   feature9 > 0.4667: classG (5.34/2.05)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3333: classG (4.62/1.62)
|   |   |   |   |   |   feature6 > 0.3333: classF (14.67/3.31)
|   |   |   |   |   feature6 > 0.5: classG (5.91/2.91)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature9 <= 0.5: classE (31.19/9.81)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.5333: classG (18.84/4.35)
|   |   |   |   |   |   feature9 > 0.5333: classE (17.04/4.36)
|   |   |   feature2 = classF
|   |   |   |   feature9 <= 0.4667: classE (7.42/3.15)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature9 <= 0.5333: classG (8.67/3.88)
|   |   |   |   |   feature9 > 0.5333: classF (10.8/1.14)
|   |   |   feature2 = classG: classG (19.27/6.21)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.4667: classE (12.33/4.46)
|   |   |   feature9 > 0.4667
|   |   |   |   feature2 = classA
|   |   |   |   |   feature6 <= 0.6: classF (12.09/2.18)
|   |   |   |   |   feature6 > 0.6: classG (8.46/1.83)
|   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   feature2 = classC: classF (0.0)
|   |   |   |   feature2 = classD: classF (0.0)
|   |   |   |   feature2 = classE: classF (0.0)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   feature9 <= 0.6: classF (6.5/0.69)
|   |   |   |   |   |   feature9 > 0.6: classG (15.57/4.62)
|   |   |   |   |   feature9 > 0.6667: classF (8.76/0.93)
|   |   |   |   feature2 = classG
|   |   |   |   |   feature9 <= 0.5: classF (4.35/0.46)
|   |   |   |   |   feature9 > 0.5: classG (23.92/7.1)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   prevPredS = classA: classG (2.02/0.88)
|   |   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   |   prevPredS = classC: classE (0.0)
|   |   |   |   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature6 <= 0.4: classG (3.92/1.96)
|   |   |   |   |   |   |   feature6 > 0.4: classE (27.24/10.44)
|   |   |   |   |   |   prevPredS = classF: classG (0.44/0.1)
|   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   feature6 <= 0.3667: classE (10.87/2.46)
|   |   |   |   |   |   |   feature6 > 0.3667: classG (2.79/0.61)
|   |   |   |   |   feature7 > 0.84: classA (9.63/5.05)
|   |   |   |   feature6 > 0.4667: classF (30.85/4.67)
|   |   |   feature6 > 0.5
|   |   |   |   feature7 <= 0.52: classG (5.81/2.5)
|   |   |   |   feature7 > 0.52: classA (57.32/21.56)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classA (8.74/4.27)
|   |   feature5 = classD: classG (14.58/7.96)
|   |   feature5 = classE
|   |   |   feature8 <= 0.8333
|   |   |   |   prevPredS = classA: classF (12.75/6.62)
|   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   prevPredS = classC: classG (0.02/0.01)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.4: classE (10.93/2.38)
|   |   |   |   |   feature6 > 0.4: classF (3.52/0.89)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.4333: classA (6.53/3.1)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5: classF (2.58/0.03)
|   |   |   |   |   |   |   feature6 > 0.5: classG (6.27/1.36)
|   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.4667: classG (4.82/2.7)
|   |   |   |   |   |   |   feature6 > 0.4667: classF (11.85/4.28)
|   |   |   |   |   |   feature6 > 0.5667: classE (22.06/4.96)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.4: classE (23.13/6.03)
|   |   |   |   |   feature6 > 0.4: classF (17.57/5.65)
|   |   |   |   prevPredS = classG: classG (7.77/4.16)
|   |   |   feature8 > 0.8333
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature7 <= 0.64: classF (7.72/4.51)
|   |   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (4.1/1.7)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (3.46/0.89)
|   |   |   |   |   feature6 > 0.4667: classF (13.36/1.42)
|   |   |   |   feature6 > 0.5: classA (41.38/15.86)
|   |   feature5 = classF: classF (25.83/6.3)
|   |   feature5 = classG
|   |   |   feature9 <= 0.5333
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.4667: classG (4.68/1.56)
|   |   |   |   |   feature6 > 0.4667: classF (6.86/0.43)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature9 <= 0.5: classG (3.77/1.25)
|   |   |   |   |   feature9 > 0.5: classD (22.96/6.15)
|   |   |   feature9 > 0.5333
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4667: classG (6.29/1.79)
|   |   |   |   |   feature6 > 0.4667: classF (10.15/0.35)
|   |   |   |   feature6 > 0.5: classG (42.38/10.91)
feature3 = classF
|   feature2 = classA
|   |   predS = classA
|   |   |   feature9 <= 0.9333
|   |   |   |   feature8 <= 0.9333
|   |   |   |   |   feature7 <= 0.92
|   |   |   |   |   |   feature6 <= 0.5333: classF (3.42/1.58)
|   |   |   |   |   |   feature6 > 0.5333: classA (17.89/6.18)
|   |   |   |   |   feature7 > 0.92
|   |   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.6: classF (3.71/2.91)
|   |   |   |   |   |   |   feature6 > 0.6: classE (25.49/8.11)
|   |   |   |   |   |   feature8 > 0.6: classA (5.17/1.95)
|   |   |   |   feature8 > 0.9333
|   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classG (7.91/3.87)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classB (3.32/2.42)
|   |   |   |   |   |   |   |   feature9 > 0.7333: classF (15.42/3.62)
|   |   |   |   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   |   |   |   prevPredS = classC: classA (1.66/0.67)
|   |   |   |   |   |   |   prevPredS = classD: classA (0.03/0.01)
|   |   |   |   |   |   |   prevPredS = classE: classD (2.96/1.06)
|   |   |   |   |   |   |   prevPredS = classF: classC (3.32/1.71)
|   |   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (2.8/1.09)
|   |   |   |   |   |   |   |   feature6 > 0.5: classG (3.11/1.68)
|   |   |   |   |   |   feature6 > 0.6667: classE (5.72/2.48)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature9 <= 0.5667: classC (4.02/1.42)
|   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   feature7 <= 0.88: classF (110.91/2.82)
|   |   |   |   |   |   |   feature7 > 0.88: classA (3.47/0.8)
|   |   |   feature9 > 0.9333
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.3333: classF (3.18/1.57)
|   |   |   |   |   |   feature6 > 0.3333: classA (81.57/32.06)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6: classF (37.74/8.09)
|   |   |   |   |   |   feature6 > 0.6: classD (9.86/3.93)
|   |   |   |   feature6 > 0.6333
|   |   |   |   |   feature6 <= 0.7333: classA (45.26/17.9)
|   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   |   |   feature8 <= 0.8667: classF (10.79/0.05)
|   |   |   |   |   |   |   |   |   feature8 > 0.8667: classA (16.47/3.57)
|   |   |   |   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   |   |   |   feature8 <= 0.9333: classA (6.89/1.5)
|   |   |   |   |   |   |   |   |   feature8 > 0.9333: classF (42.99/0.05)
|   |   |   |   |   |   |   feature8 > 0.9667: classA (11.35/2.46)
|   |   |   |   |   |   feature6 > 0.8333: classA (34.83/7.56)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (6.03/2.96)
|   |   |   feature9 > 0.9: classA (27.09/11.15)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (17.46/7.2)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333: classD (23.89/16.87)
|   |   |   |   feature6 > 0.7333: classB (7.14/2.83)
|   |   predS = classD: classF (83.21/39.93)
|   |   predS = classE
|   |   |   feature6 <= 0.4333
|   |   |   |   feature6 <= 0.3333: classG (28.43/15.71)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   prevPredS = classA: classE (4.14/1.4)
|   |   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   |   prevPredS = classC: classF (0.0)
|   |   |   |   |   prevPredS = classD: classD (1.87/0.58)
|   |   |   |   |   prevPredS = classE: classE (0.95/0.3)
|   |   |   |   |   prevPredS = classF: classF (4.55/0.87)
|   |   |   |   |   prevPredS = classG: classF (0.0)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classC (107.98/47.08)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6333: classD (20.63/10.07)
|   |   |   |   |   feature6 > 0.6333: classA (21.5/10.02)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.2667: classG (4.04/0.93)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.9333: classF (11.25/1.8)
|   |   |   |   |   |   |   |   feature9 > 0.9333: classA (20.98/7.64)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   |   feature7 <= 0.64: classA (11.14/2.73)
|   |   |   |   |   |   |   |   |   feature7 > 0.64: classF (4.76/0.14)
|   |   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classB (15.85/5.59)
|   |   |   |   |   |   |   |   |   feature9 > 0.9333: classF (3.44)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classF (6.11/1.64)
|   |   |   |   |   |   |   |   feature6 > 0.5: classG (4.04/0.93)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.4333: classA (3.72/0.81)
|   |   |   |   |   |   |   |   feature9 > 0.4333: classF (3.89/0.89)
|   |   |   |   feature6 > 0.5667: classF (22.92/0.29)
|   |   |   prevPredS = classB: classB (1.12/0.75)
|   |   |   prevPredS = classC: classF (0.04/0.0)
|   |   |   prevPredS = classD: classA (1.18/0.42)
|   |   |   prevPredS = classE: classF (0.84/0.45)
|   |   |   prevPredS = classF: classF (25.65/6.63)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.6: classF (8.68/1.28)
|   |   |   |   feature6 > 0.6: classG (5.5/1.19)
|   |   predS = classG
|   |   |   feature8 <= 0.5667
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4: classA (2.79/1.47)
|   |   |   |   |   |   feature6 > 0.4: classE (7.4/3.81)
|   |   |   |   |   feature6 > 0.4667: classF (6.42/0.09)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature7 <= 0.92: classA (4.42/1.87)
|   |   |   |   |   feature7 > 0.92: classD (12.47/4.07)
|   |   |   feature8 > 0.5667
|   |   |   |   feature6 <= 0.5667: classF (22.95/6.52)
|   |   |   |   feature6 > 0.5667: classA (16.61/5.71)
|   feature2 = classB
|   |   feature6 <= 0.9333
|   |   |   predS = classA: classB (17.48/12.31)
|   |   |   predS = classB
|   |   |   |   feature5 = classA: classC (0.0)
|   |   |   |   feature5 = classB: classA (3.73/2.19)
|   |   |   |   feature5 = classC: classC (22.86/5.84)
|   |   |   |   feature5 = classD: classC (0.0)
|   |   |   |   feature5 = classE: classC (0.0)
|   |   |   |   feature5 = classF: classC (0.0)
|   |   |   |   feature5 = classG: classC (0.0)
|   |   |   predS = classC: classF (7.7/5.9)
|   |   |   predS = classD: classF (8.27/3.86)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4333: classG (3.67/2.19)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classC (13.96/5.15)
|   |   |   |   |   feature6 > 0.4667: classB (3.79/2.54)
|   |   |   predS = classF: classF (8.92/5.91)
|   |   |   predS = classG: classF (3.93/1.36)
|   |   feature6 > 0.9333: classB (65.76/17.1)
|   feature2 = classC
|   |   feature6 <= 0.2667: classB (69.25/19.32)
|   |   feature6 > 0.2667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.5333: classC (7.53/3.77)
|   |   |   |   feature6 > 0.5333: classF (9.58/7.5)
|   |   |   predS = classB: classA (8.57/5.56)
|   |   |   predS = classC
|   |   |   |   feature7 <= 0.6: classD (12.18/6.62)
|   |   |   |   feature7 > 0.6: classC (10.65/3.81)
|   |   |   predS = classD: classF (11.03/5.68)
|   |   |   predS = classE: classC (33.5/18.28)
|   |   |   predS = classF: classF (14.52/7.7)
|   |   |   predS = classG: classF (4.29/1.41)
|   feature2 = classD
|   |   prevPredS = classA: classF (9.82/7.18)
|   |   prevPredS = classB: classA (2.95/1.41)
|   |   prevPredS = classC
|   |   |   feature7 <= 0.4: classD (4.8/3.41)
|   |   |   feature7 > 0.4: classC (9.51/3.94)
|   |   prevPredS = classD: classD (41.27/22.91)
|   |   prevPredS = classE
|   |   |   predS = classA: classA (7.76/4.04)
|   |   |   predS = classB: classB (0.31/0.18)
|   |   |   predS = classC: classA (1.01/0.74)
|   |   |   predS = classD: classF (1.42/0.72)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4667: classD (6.26/3.72)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature7 <= 0.4: classD (3.25/0.79)
|   |   |   |   |   feature7 > 0.4: classE (7.25/2.04)
|   |   |   predS = classF: classF (0.72/0.41)
|   |   |   predS = classG: classF (0.71/0.28)
|   |   prevPredS = classF: classE (17.76/8.42)
|   |   prevPredS = classG: classF (10.33/7.65)
|   feature2 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.3333: classE (6.32/3.87)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature7 <= 0.64: classA (5.94/2.55)
|   |   |   |   |   feature7 > 0.64: classE (10.26/5.35)
|   |   |   feature6 > 0.5
|   |   |   |   feature6 <= 0.6: classB (9.54/5.09)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (5.75/1.3)
|   |   |   |   |   feature6 > 0.6333: classE (11.75/7.3)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (11.61/3.97)
|   |   |   feature9 > 0.9: classA (9.89/3.65)
|   |   predS = classC
|   |   |   feature6 <= 0.6333
|   |   |   |   feature6 <= 0.2667: classA (7.57/3.12)
|   |   |   |   feature6 > 0.2667: classE (10.2/7.15)
|   |   |   feature6 > 0.6333
|   |   |   |   feature6 <= 0.7: classF (28.83/1.2)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.8333: classB (2.95/1.08)
|   |   |   |   |   feature6 > 0.8333: classC (3.53/0.93)
|   |   predS = classD
|   |   |   prevPredS = classA: classD (5.24/2.69)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classF (2.94/1.99)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature9 <= 0.4667: classF (4.19/2.04)
|   |   |   |   |   feature9 > 0.4667: classG (3.51/1.37)
|   |   |   |   feature9 > 0.5: classD (9.14/4.61)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667: classE (26.35/12.8)
|   |   |   |   feature6 > 0.4667: classD (3.71/1.22)
|   |   |   prevPredS = classF: classD (3.98/2.08)
|   |   |   prevPredS = classG: classE (3.64/2.39)
|   |   predS = classE
|   |   |   feature8 <= 0.5
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3333: classE (19.88/8.78)
|   |   |   |   |   |   feature6 > 0.3333: classD (19.67/8.91)
|   |   |   |   |   feature6 > 0.4333: classC (62.64/42.47)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature5 = classA: classE (0.95/0.25)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   feature5 = classD: classD (2.0/1.05)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   prevPredS = classA: classE (2.79/1.7)
|   |   |   |   |   |   prevPredS = classB: classA (0.12/0.03)
|   |   |   |   |   |   prevPredS = classC: classE (0.03/0.01)
|   |   |   |   |   |   prevPredS = classD: classE (4.76/1.13)
|   |   |   |   |   |   prevPredS = classE: classD (46.09/24.47)
|   |   |   |   |   |   prevPredS = classF: classF (0.07/0.0)
|   |   |   |   |   |   prevPredS = classG: classG (0.37/0.09)
|   |   |   |   |   feature5 = classF: classE (14.04/3.68)
|   |   |   |   |   feature5 = classG: classE (0.17/0.1)
|   |   |   feature8 > 0.5
|   |   |   |   feature5 = classA: classE (0.14/0.06)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC: classE (0.01/0.0)
|   |   |   |   feature5 = classD: classD (2.16/1.14)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classE (10.45/5.91)
|   |   |   |   |   |   feature6 > 0.4333: classC (9.57/5.5)
|   |   |   |   |   feature6 > 0.4667: classD (15.32/8.12)
|   |   |   |   feature5 = classF: classF (18.85/5.99)
|   |   |   |   feature5 = classG: classE (0.08/0.05)
|   |   predS = classF
|   |   |   feature9 <= 0.7: classF (24.22/11.04)
|   |   |   feature9 > 0.7: classB (11.09/6.48)
|   |   predS = classG
|   |   |   feature6 <= 0.5: classF (19.39/8.05)
|   |   |   feature6 > 0.5: classG (7.18/2.26)
|   feature2 = classF
|   |   predS = classA
|   |   |   feature6 <= 0.8333
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   prevPredS = classA: classG (12.68/5.01)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (0.37/0.09)
|   |   |   |   |   prevPredS = classD: classA (0.05/0.01)
|   |   |   |   |   prevPredS = classE: classD (5.71/2.45)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.4: classA (25.1/7.83)
|   |   |   |   |   |   feature6 > 0.4: classF (6.28/0.4)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.4333: classA (18.83/4.78)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature9 <= 0.5333: classF (9.33/0.55)
|   |   |   |   |   |   |   feature9 > 0.5333: classD (4.21/1.01)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classB (24.7/10.19)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (26.1/11.59)
|   |   |   |   |   |   |   feature6 > 0.6333: classG (4.2/1.59)
|   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   feature6 <= 0.7: classE (25.4/10.89)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature9 <= 0.8: classA (4.15/0.98)
|   |   |   |   |   |   |   |   feature9 > 0.8: classD (4.85/1.8)
|   |   |   feature6 > 0.8333
|   |   |   |   feature6 <= 0.8667: classF (44.69/1.38)
|   |   |   |   feature6 > 0.8667: classA (11.4/2.58)
|   |   predS = classB
|   |   |   prevPredS = classA: classB (6.77/3.57)
|   |   |   prevPredS = classB: classA (38.83/16.3)
|   |   |   prevPredS = classC: classB (2.07/0.71)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classA (0.0)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (24.7/10.19)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   prevPredS = classA: classF (10.88/7.19)
|   |   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (3.67/2.1)
|   |   |   |   |   |   prevPredS = classD: classD (0.06/0.03)
|   |   |   |   |   |   prevPredS = classE: classE (0.0)
|   |   |   |   |   |   prevPredS = classF: classE (9.16/4.23)
|   |   |   |   |   |   prevPredS = classG: classE (0.0)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classF (4.64/0.04)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6667: classD (8.22/2.13)
|   |   |   |   |   |   |   feature6 > 0.6667: classF (4.96/0.58)
|   |   |   |   feature6 > 0.7333: classB (10.1/4.0)
|   |   predS = classD
|   |   |   prevPredS = classA: classF (6.32/2.18)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333: classF (11.4/2.48)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature9 <= 0.8: classE (3.1/2.05)
|   |   |   |   |   feature9 > 0.8: classA (4.0/0.95)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.4667
|   |   |   |   |   feature6 <= 0.5: classF (10.68/4.28)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.8667: classD (12.41/2.69)
|   |   |   |   |   |   feature6 > 0.8667: classF (3.4/0.05)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4667: classF (5.19/2.02)
|   |   |   |   |   |   feature6 > 0.4667: classG (8.08/1.88)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.5: classF (2.9/0.99)
|   |   |   |   |   |   feature6 > 0.5: classE (5.39/2.34)
|   |   |   prevPredS = classE: classF (4.07/1.59)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.7333: classF (35.49/4.8)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature6 <= 0.4333: classA (11.17/2.62)
|   |   |   |   |   feature6 > 0.4333: classF (6.02/2.07)
|   |   |   prevPredS = classG: classF (8.84/2.44)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (31.49/16.98)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classF (26.48/7.28)
|   |   |   |   |   feature6 > 0.4333: classC (154.67/68.48)
|   |   |   |   feature6 > 0.4667: classF (66.46/28.92)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature9 <= 0.4: classA (4.81/1.73)
|   |   |   |   |   |   feature9 > 0.4: classF (11.32/1.38)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.5333: classC (8.39/2.16)
|   |   |   |   |   |   feature9 > 0.5333: classF (4.25/0.13)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature6 <= 0.4667: classB (25.41/10.9)
|   |   |   |   |   feature6 > 0.4667: classE (3.97/1.51)
|   |   |   prevPredS = classB: classB (1.41/0.88)
|   |   |   prevPredS = classC: classF (0.05/0.0)
|   |   |   prevPredS = classD: classF (10.8/1.36)
|   |   |   prevPredS = classE
|   |   |   |   feature5 = classA: classF (1.09/0.06)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC: classF (0.0)
|   |   |   |   feature5 = classD: classD (1.74/0.5)
|   |   |   |   feature5 = classE: classE (8.04/2.94)
|   |   |   |   feature5 = classF: classF (10.9/0.58)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature9 <= 0.8: classF (146.88/16.2)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   |   |   feature6 <= 0.5: classA (35.15/9.73)
|   |   |   |   |   |   |   |   feature6 > 0.5: classF (3.1/1.21)
|   |   |   |   |   |   |   feature7 > 0.84: classF (7.46/0.51)
|   |   |   |   |   |   feature9 > 0.8667: classF (38.63/2.66)
|   |   |   |   feature6 > 0.6333: classF (306.38)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature9 <= 0.6333: classF (10.59/0.65)
|   |   |   |   |   feature9 > 0.6333: classG (9.38/2.93)
|   |   |   |   feature6 > 0.6333: classF (21.27)
|   |   predS = classG
|   |   |   feature7 <= 0.76
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.4667: classA (4.85/2.39)
|   |   |   |   |   feature6 > 0.4667: classF (6.25/2.59)
|   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   prevPredS = classC: classF (0.0)
|   |   |   |   prevPredS = classD: classG (0.03/0.01)
|   |   |   |   prevPredS = classE: classF (1.8/1.19)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature8 <= 0.6333: classF (4.69/0.33)
|   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.3333: classA (10.73/2.33)
|   |   |   |   |   |   |   feature6 > 0.3333: classG (3.16/0.68)
|   |   |   |   |   |   feature6 > 0.4667: classA (30.02/13.21)
|   |   |   |   prevPredS = classG: classF (9.41/1.09)
|   |   |   feature7 > 0.76: classF (50.85/5.95)
|   feature2 = classG
|   |   predS = classA: classG (5.91/4.21)
|   |   predS = classB: classA (1.92/0.98)
|   |   predS = classC: classF (2.68/2.05)
|   |   predS = classD: classF (3.74/1.91)
|   |   predS = classE
|   |   |   feature6 <= 0.4333: classD (7.01/2.61)
|   |   |   feature6 > 0.4333: classC (7.16/3.72)
|   |   predS = classF: classF (5.88/3.41)
|   |   predS = classG
|   |   |   feature5 = classA: classG (7.23/1.82)
|   |   |   feature5 = classB: classG (0.0)
|   |   |   feature5 = classC: classG (0.0)
|   |   |   feature5 = classD: classG (0.1/0.02)
|   |   |   feature5 = classE: classG (0.1/0.02)
|   |   |   feature5 = classF: classF (7.17/0.53)
|   |   |   feature5 = classG: classG (13.26/3.35)
feature3 = classG
|   predS = classA
|   |   feature5 = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 <= 0.92
|   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   feature7 <= 0.52: classA (12.11/5.65)
|   |   |   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (15.63/5.05)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (4.03/1.51)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5667: classD (4.01/1.49)
|   |   |   |   |   |   |   |   feature6 > 0.6333: classG (11.08/2.67)
|   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333: classF (6.58/2.48)
|   |   |   |   |   |   |   feature6 > 0.5333: classA (28.25/11.45)
|   |   |   |   |   feature7 > 0.92
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.4: classD (2.92/1.39)
|   |   |   |   |   |   |   |   feature6 > 0.4: classG (7.02/2.47)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (9.47/2.16)
|   |   |   |   |   |   feature6 > 0.5667: classG (81.36/27.22)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classA (5.72/3.32)
|   |   |   |   prevPredS = classD: classA (0.08/0.03)
|   |   |   |   prevPredS = classE: classD (7.15/3.25)
|   |   |   |   prevPredS = classF: classC (6.76/3.48)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.7333: classD (7.68/3.73)
|   |   |   |   |   feature9 > 0.7333: classG (5.22/2.37)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7: classE (30.86/15.26)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature9 <= 0.9333: classA (16.03/3.95)
|   |   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   |   feature7 <= 0.72: classA (2.6/0.56)
|   |   |   |   |   |   |   feature7 > 0.72: classG (32.19/6.99)
|   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   feature6 <= 0.7667: classD (5.99/2.71)
|   |   |   |   |   |   feature6 > 0.7667: classA (41.7/9.44)
|   |   feature5 = classB
|   |   |   feature6 <= 0.5667: classB (5.49/1.96)
|   |   |   feature6 > 0.5667: classA (2.96/1.71)
|   |   feature5 = classC: classA (4.51/3.15)
|   |   feature5 = classD
|   |   |   feature6 <= 0.5333: classD (2.82/1.1)
|   |   |   feature6 > 0.5333: classA (8.87/4.08)
|   |   feature5 = classE
|   |   |   prevPredS = classA: classA (4.39/2.49)
|   |   |   prevPredS = classB: classA (0.06/0.02)
|   |   |   prevPredS = classC: classA (0.26/0.16)
|   |   |   prevPredS = classD: classA (0.0/0.0)
|   |   |   prevPredS = classE: classE (10.68/3.89)
|   |   |   prevPredS = classF: classC (0.28/0.13)
|   |   |   prevPredS = classG: classD (0.56/0.37)
|   |   feature5 = classF: classF (9.04/3.87)
|   |   feature5 = classG
|   |   |   feature7 <= 0.64
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.6333: classG (6.94/2.86)
|   |   |   |   |   |   |   |   feature9 > 0.6333: classA (6.58/2.07)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (4.36/1.04)
|   |   |   |   |   |   feature6 > 0.5667: classA (43.16/13.97)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (2.77/1.77)
|   |   |   |   |   prevPredS = classD: classA (0.03/0.01)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.4333: classA (6.65/2.28)
|   |   |   |   |   |   feature9 > 0.4333: classD (3.17/1.34)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.6: classA (38.64/12.99)
|   |   |   |   |   |   feature6 > 0.6: classD (2.97/0.71)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.3667: classD (3.1/1.18)
|   |   |   |   |   |   |   feature6 > 0.3667: classA (10.77/2.34)
|   |   |   |   |   |   feature6 > 0.4333: classG (12.82/5.95)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (20.3/12.58)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature6 <= 0.7667: classD (2.92/1.29)
|   |   |   |   |   |   feature6 > 0.7667: classA (5.29/1.2)
|   |   |   feature7 > 0.64
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.4333: classG (31.08/9.75)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (6.69/3.78)
|   |   |   |   |   |   |   feature6 > 0.5667: classD (7.94/5.03)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classE (4.36/1.45)
|   |   |   |   |   |   feature6 > 0.7: classG (14.17/5.19)
|   |   |   |   feature9 > 0.9333
|   |   |   |   |   feature6 <= 0.7333: classF (4.36/3.41)
|   |   |   |   |   feature6 > 0.7333: classA (11.92/2.59)
|   predS = classB
|   |   feature5 = classA: classA (18.44/7.96)
|   |   feature5 = classB
|   |   |   feature9 <= 0.9333: classB (24.89/14.99)
|   |   |   feature9 > 0.9333
|   |   |   |   feature6 <= 0.5333: classA (6.94/1.51)
|   |   |   |   feature6 > 0.5333: classB (101.35/50.47)
|   |   feature5 = classC: classA (6.18/4.12)
|   |   feature5 = classD: classB (0.0)
|   |   feature5 = classE: classG (1.54/1.08)
|   |   feature5 = classF: classB (0.44/0.23)
|   |   feature5 = classG: classA (0.18/0.11)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classG (9.96/5.69)
|   |   |   feature6 > 0.2333: classA (47.63/16.92)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.7
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5: classD (34.66/23.78)
|   |   |   |   |   feature6 > 0.5: classE (23.82/11.54)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classG (26.29/13.46)
|   |   |   |   |   feature6 > 0.6333: classD (10.34/3.15)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.8333: classB (21.2/8.92)
|   |   |   |   feature6 > 0.8333: classC (10.89/3.75)
|   predS = classD
|   |   prevPredS = classA: classD (32.13/20.13)
|   |   prevPredS = classB: classF (0.0)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333: classG (12.53/3.98)
|   |   |   |   feature6 > 0.4333: classF (15.53/5.41)
|   |   |   feature6 > 0.5333
|   |   |   |   feature9 <= 0.8: classE (10.76/7.6)
|   |   |   |   feature9 > 0.8: classA (12.61/6.08)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.4333: classD (21.15/6.24)
|   |   |   feature6 > 0.4333
|   |   |   |   feature9 <= 0.6667
|   |   |   |   |   feature9 <= 0.4667: classF (27.72/12.03)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature6 <= 0.4667: classF (14.09/5.39)
|   |   |   |   |   |   feature6 > 0.4667: classG (21.29/8.74)
|   |   |   |   feature9 > 0.6667
|   |   |   |   |   feature6 <= 0.5: classF (17.76/8.31)
|   |   |   |   |   feature6 > 0.5: classE (17.31/11.17)
|   |   prevPredS = classE: classF (18.34/11.9)
|   |   prevPredS = classF: classF (8.82/2.23)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.4333
|   |   |   |   feature6 <= 0.3: classA (11.37/2.47)
|   |   |   |   feature6 > 0.3: classF (13.49/4.63)
|   |   |   feature9 > 0.4333: classG (72.4/33.77)
|   predS = classE
|   |   feature6 <= 0.3: classG (81.85/50.48)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   prevPredS = classA: classE (18.56/12.84)
|   |   |   |   |   prevPredS = classB: classA (1.63/0.53)
|   |   |   |   |   prevPredS = classC: classG (0.42/0.26)
|   |   |   |   |   prevPredS = classD: classD (8.24/2.49)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.5667: classE (8.45/4.65)
|   |   |   |   |   |   feature9 > 0.5667: classD (16.19/7.08)
|   |   |   |   |   prevPredS = classF: classG (1.04/0.43)
|   |   |   |   |   prevPredS = classG: classG (3.98/2.48)
|   |   |   |   feature6 > 0.4333: classC (315.98/142.38)
|   |   |   feature6 > 0.4667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.7: classD (13.1/6.96)
|   |   |   |   |   feature9 > 0.7: classE (8.92/2.89)
|   |   |   |   prevPredS = classB: classA (3.17/1.79)
|   |   |   |   prevPredS = classC: classC (0.57/0.23)
|   |   |   |   prevPredS = classD: classE (20.61/12.92)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.5333: classD (26.37/11.99)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature7 <= 0.68: classE (52.6/25.48)
|   |   |   |   |   |   |   feature7 > 0.68: classD (21.88/9.61)
|   |   |   |   |   feature9 > 0.7333: classE (5.54/1.78)
|   |   |   |   prevPredS = classF: classF (7.22/4.04)
|   |   |   |   prevPredS = classG: classG (6.03/3.61)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature9 <= 0.8
|   |   |   |   feature9 <= 0.5: classA (16.37/6.92)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5667: classF (9.73/4.5)
|   |   |   |   |   feature9 > 0.5667: classG (7.78/2.69)
|   |   |   feature9 > 0.8
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3: classG (4.5/1.12)
|   |   |   |   |   |   feature6 > 0.3: classF (4.59/1.01)
|   |   |   |   |   feature6 > 0.4333: classB (47.03/17.81)
|   |   |   |   feature6 > 0.4667: classF (32.23/9.87)
|   |   prevPredS = classB: classB (3.62/2.57)
|   |   prevPredS = classC: classC (1.31/0.85)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.7333: classD (19.41/9.37)
|   |   |   feature9 > 0.7333: classA (3.62/1.3)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667: classE (12.69/6.38)
|   |   |   feature6 > 0.4667: classF (8.64/1.9)
|   |   prevPredS = classF
|   |   |   feature2 = classA: classG (4.93/3.27)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classF (0.25/0.09)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.5: classF (3.83/0.49)
|   |   |   |   feature6 > 0.5: classG (3.46/1.29)
|   |   |   feature2 = classF: classF (10.42/4.0)
|   |   |   feature2 = classG: classG (24.53/8.65)
|   |   prevPredS = classG
|   |   |   feature8 <= 0.3333
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.6: classF (12.4/5.31)
|   |   |   |   |   feature6 > 0.6: classG (6.82/1.7)
|   |   |   |   feature6 > 0.6333: classF (23.26)
|   |   |   feature8 > 0.3333: classG (59.45/26.97)
|   predS = classG
|   |   feature6 <= 0.7
|   |   |   feature6 <= 0.4667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4: classA (22.35/4.85)
|   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (3.78/0.94)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (4.15/1.92)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature7 <= 0.92: classG (10.81/3.66)
|   |   |   |   |   |   feature7 > 0.92: classA (8.0/3.73)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classG (0.24/0.06)
|   |   |   |   prevPredS = classD: classG (3.1/1.88)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature2 = classA: classA (1.03/0.52)
|   |   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   |   feature2 = classD: classG (0.0)
|   |   |   |   |   feature2 = classE: classA (5.03/2.55)
|   |   |   |   |   feature2 = classF: classG (0.0)
|   |   |   |   |   feature2 = classG: classG (7.79/2.87)
|   |   |   |   prevPredS = classF: classF (4.03/1.05)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature8 <= 0.9667: classG (4.64/1.17)
|   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   feature9 <= 0.6333: classA (54.75/17.81)
|   |   |   |   |   |   feature9 > 0.6333: classG (3.5/1.37)
|   |   |   feature6 > 0.4667
|   |   |   |   feature5 = classA
|   |   |   |   |   feature8 <= 0.9667: classG (33.1/15.24)
|   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   feature6 <= 0.5: classF (6.83/2.78)
|   |   |   |   |   |   feature6 > 0.5: classA (7.63/4.45)
|   |   |   |   feature5 = classB: classG (0.0)
|   |   |   |   feature5 = classC: classC (0.01/0.0)
|   |   |   |   feature5 = classD: classG (2.01/0.86)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.5: classF (2.83/1.1)
|   |   |   |   |   feature6 > 0.5: classG (3.46/0.94)
|   |   |   |   feature5 = classF: classF (10.12/1.49)
|   |   |   |   feature5 = classG
|   |   |   |   |   feature6 <= 0.5: classF (40.15/12.46)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   prevPredS = classA: classF (5.84/2.62)
|   |   |   |   |   |   prevPredS = classB: classG (0.05/0.01)
|   |   |   |   |   |   prevPredS = classC: classG (0.02/0.0)
|   |   |   |   |   |   prevPredS = classD: classG (0.33/0.07)
|   |   |   |   |   |   prevPredS = classE: classG (0.08/0.02)
|   |   |   |   |   |   prevPredS = classF: classG (3.93/0.85)
|   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   feature7 <= 0.8: classA (12.87/4.47)
|   |   |   |   |   |   |   |   feature7 > 0.8: classG (6.19/1.34)
|   |   |   |   |   |   |   feature9 > 0.5667: classG (37.46/8.13)
|   |   feature6 > 0.7
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.7333: classA (23.76/8.52)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature7 <= 0.52: classA (29.04/15.09)
|   |   |   |   |   feature7 > 0.52: classG (51.14/11.12)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classC (0.02/0.01)
|   |   |   feature2 = classD: classG (1.86/0.42)
|   |   |   feature2 = classE: classG (1.49/0.34)
|   |   |   feature2 = classF: classG (13.16/3.43)
|   |   |   feature2 = classG: classG (458.99/103.85)

Number of Leaves  : \t1619

Size of the tree : \t2572


Weight: 1.8

J48 pruned tree
------------------

feature3 = classA
|   feature6 <= 0.7333
|   |   predS = classA
|   |   |   prevPredS = classA
|   |   |   |   feature8 <= 0.4333
|   |   |   |   |   feature9 <= 0.8667: classE (10.79/5.22)
|   |   |   |   |   feature9 > 0.8667: classC (3.91/2.45)
|   |   |   |   feature8 > 0.4333
|   |   |   |   |   feature6 <= 0.6667: classA (19.22/9.4)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature9 <= 0.9667: classA (4.59/1.79)
|   |   |   |   |   |   feature9 > 0.9667: classC (4.18/1.4)
|   |   |   prevPredS = classB: classB (0.19/0.06)
|   |   |   prevPredS = classC: classC (1.55/1.03)
|   |   |   prevPredS = classD: classG (7.67/2.5)
|   |   |   prevPredS = classE: classD (4.05/2.96)
|   |   |   prevPredS = classF: classC (1.54/0.84)
|   |   |   prevPredS = classG: classD (2.77/1.89)
|   |   predS = classB: classB (3.88/2.01)
|   |   predS = classC: classC (33.22/16.13)
|   |   predS = classD: classG (62.91/35.05)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (28.44/8.01)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4333: classD (10.86/5.81)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classC (74.86/52.97)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6333: classE (10.12/5.62)
|   |   |   |   |   |   feature6 > 0.6333: classA (15.85/6.68)
|   |   predS = classF
|   |   |   feature6 <= 0.2667: classG (10.08/1.61)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classA (9.14/3.94)
|   |   |   |   |   feature6 > 0.4333: classE (9.73/5.02)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classD (6.1/1.86)
|   |   |   |   |   |   feature6 > 0.5: classG (11.39/2.91)
|   |   |   |   |   feature6 > 0.5333: classA (12.92/7.83)
|   |   predS = classG: classG (42.2/24.55)
|   feature6 > 0.7333
|   |   feature2 = classA: classA (198.36/39.81)
|   |   feature2 = classB: classB (6.82/2.08)
|   |   feature2 = classC: classC (0.99/0.37)
|   |   feature2 = classD: classC (2.09/1.1)
|   |   feature2 = classE: classE (1.66/1.01)
|   |   feature2 = classF: classF (1.37/0.7)
|   |   feature2 = classG: classG (1.4/0.44)
feature3 = classB
|   feature5 = classA
|   |   predS = classA
|   |   |   feature7 <= 0.44: classB (8.74/3.58)
|   |   |   feature7 > 0.44: classA (20.39/8.53)
|   |   predS = classB
|   |   |   feature9 <= 0.9667: classB (3.25/1.4)
|   |   |   feature9 > 0.9667: classA (8.37/2.02)
|   |   predS = classC
|   |   |   feature6 <= 0.4: classC (4.44/2.58)
|   |   |   feature6 > 0.4: classB (8.78/3.51)
|   |   predS = classD
|   |   |   prevPredS = classA: classD (27.06/11.59)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classD (0.99/0.65)
|   |   |   prevPredS = classD: classG (2.02/1.32)
|   |   |   prevPredS = classE: classG (0.28/0.17)
|   |   |   prevPredS = classF: classF (0.3/0.15)
|   |   |   prevPredS = classG: classE (4.64/2.07)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (9.03/3.57)
|   |   |   feature6 > 0.3333: classE (29.58/20.31)
|   |   predS = classF: classG (15.07/9.79)
|   |   predS = classG: classA (21.53/10.06)
|   feature5 = classB
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature9 <= 0.5: classA (5.49/0.9)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.6: classG (5.43/2.37)
|   |   |   |   |   |   |   |   feature9 > 0.6: classA (3.13/0.51)
|   |   |   |   |   |   feature6 > 0.4667: classB (42.42/15.48)
|   |   |   |   |   prevPredS = classB
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classB (12.09/1.72)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (9.98/1.84)
|   |   |   |   |   |   |   feature7 > 0.88: classB (18.65/2.66)
|   |   |   |   |   |   feature6 > 0.5667: classD (3.99/2.03)
|   |   |   |   |   prevPredS = classC: classA (8.7/2.71)
|   |   |   |   |   prevPredS = classD: classA (0.74/0.18)
|   |   |   |   |   prevPredS = classE: classD (3.56/1.84)
|   |   |   |   |   prevPredS = classF: classC (2.09/0.56)
|   |   |   |   |   prevPredS = classG: classD (4.39/2.63)
|   |   |   |   feature9 > 0.9667: classA (46.2/11.61)
|   |   |   feature6 > 0.6667
|   |   |   |   feature9 <= 0.9333: classA (20.96/9.98)
|   |   |   |   feature9 > 0.9333: classC (14.57/5.29)
|   |   predS = classB
|   |   |   feature9 <= 0.5333
|   |   |   |   feature9 <= 0.5: classB (3.63/0.94)
|   |   |   |   feature9 > 0.5: classC (25.16/8.65)
|   |   |   feature9 > 0.5333
|   |   |   |   prevPredS = classA: classA (6.84/1.8)
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.3333: classA (2.85/0.36)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classB (6.44/0.81)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classA (6.98/1.74)
|   |   |   |   |   |   |   feature9 > 0.9667: classB (60.73/23.88)
|   |   |   |   |   feature6 > 0.6: classB (389.92/103.58)
|   |   |   |   prevPredS = classC: classB (0.73/0.11)
|   |   |   |   prevPredS = classD: classB (0.0)
|   |   |   |   prevPredS = classE: classB (0.11/0.02)
|   |   |   |   prevPredS = classF: classB (0.0)
|   |   |   |   prevPredS = classG: classB (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.7333: classC (52.72/34.17)
|   |   |   feature6 > 0.7333: classB (7.9/4.75)
|   |   predS = classD
|   |   |   feature6 <= 0.2667
|   |   |   |   feature9 <= 0.9333: classB (34.22/5.63)
|   |   |   |   feature9 > 0.9333: classA (5.7/0.72)
|   |   |   feature6 > 0.2667: classG (103.72/49.53)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (57.78/13.09)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.4333: classD (16.32/7.39)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.4667: classC (136.6/89.59)
|   |   |   |   |   |   feature6 > 0.4667: classE (9.2/4.08)
|   |   |   |   |   feature6 > 0.6333: classA (25.48/5.39)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classG (22.07/3.51)
|   |   |   |   |   feature6 > 0.2667: classB (21.56/13.83)
|   |   |   |   feature6 > 0.4333: classE (19.7/10.42)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (12.2/2.92)
|   |   |   |   |   feature6 > 0.5: classG (23.81/5.26)
|   |   |   |   feature6 > 0.5333: classA (22.12/11.31)
|   |   predS = classG
|   |   |   feature2 = classA: classG (9.2/3.48)
|   |   |   feature2 = classB
|   |   |   |   feature6 <= 0.4: classB (9.24/4.26)
|   |   |   |   feature6 > 0.4: classG (18.96/7.09)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classG (0.52/0.18)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.4333: classG (12.39/3.24)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classA (6.21/1.31)
|   |   |   |   |   feature6 > 0.4667: classF (9.11/4.59)
|   |   |   feature2 = classF: classG (1.51/0.53)
|   |   |   feature2 = classG: classG (2.19/0.76)
|   feature5 = classC
|   |   predS = classA: classA (6.51/4.96)
|   |   predS = classB: classA (6.91/2.4)
|   |   predS = classC
|   |   |   prevPredS = classA: classC (3.19/0.88)
|   |   |   prevPredS = classB: classC (0.01/0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature7 <= 0.48: classE (17.25/3.67)
|   |   |   |   feature7 > 0.48: classC (3.22/1.07)
|   |   |   prevPredS = classD: classC (0.09/0.04)
|   |   |   prevPredS = classE: classC (2.04/0.41)
|   |   |   prevPredS = classF: classE (0.15/0.04)
|   |   |   prevPredS = classG: classE (0.0)
|   |   predS = classD
|   |   |   feature6 <= 0.5333: classG (6.09/2.5)
|   |   |   feature6 > 0.5333: classA (4.58/1.95)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (4.07/0.93)
|   |   |   feature6 > 0.3333: classA (15.72/9.94)
|   |   predS = classF: classF (13.37/9.54)
|   |   predS = classG
|   |   |   feature6 <= 0.4333: classE (8.56/3.11)
|   |   |   feature6 > 0.4333: classF (2.84/1.89)
|   feature5 = classD
|   |   prevPredS = classA: classC (8.08/5.4)
|   |   prevPredS = classB: classA (4.14/1.86)
|   |   prevPredS = classC: classE (1.52/1.05)
|   |   prevPredS = classD: classD (15.35/10.46)
|   |   prevPredS = classE: classD (19.58/11.21)
|   |   prevPredS = classF: classG (1.2/0.79)
|   |   prevPredS = classG: classG (8.23/4.8)
|   feature5 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.6: classA (24.37/13.49)
|   |   |   feature6 > 0.6
|   |   |   |   feature9 <= 0.9667: classA (14.96/6.99)
|   |   |   |   feature9 > 0.9667: classC (4.7/1.8)
|   |   predS = classB
|   |   |   feature6 <= 0.4333: classE (12.39/2.22)
|   |   |   feature6 > 0.4333: classA (24.59/6.95)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classC (6.44/3.33)
|   |   |   feature6 > 0.2667: classE (22.78/11.68)
|   |   predS = classD
|   |   |   feature6 <= 0.4333: classE (33.14/8.06)
|   |   |   feature6 > 0.4333: classD (50.41/32.07)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (23.07/9.13)
|   |   |   feature6 > 0.3
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   feature9 <= 0.5: classA (5.95/2.51)
|   |   |   |   |   |   feature9 > 0.5: classC (7.57/2.63)
|   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   feature6 <= 0.5: classD (27.21/10.99)
|   |   |   |   |   |   feature6 > 0.5: classA (2.68/1.31)
|   |   |   |   prevPredS = classB: classE (2.84/1.28)
|   |   |   |   prevPredS = classC: classE (0.17/0.07)
|   |   |   |   prevPredS = classD: classD (9.85/5.88)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667: classE (36.27/21.99)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   feature7 <= 0.48: classE (3.72/1.3)
|   |   |   |   |   |   |   |   feature7 > 0.48: classD (6.15/1.3)
|   |   |   |   |   |   |   feature9 > 0.6667: classE (3.59/0.45)
|   |   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   |   feature6 <= 0.7: classA (8.75/5.3)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature9 <= 0.5: classD (3.8/1.38)
|   |   |   |   |   |   |   |   feature9 > 0.5: classE (2.41/0.3)
|   |   |   |   prevPredS = classF: classE (1.74/0.86)
|   |   |   |   prevPredS = classG: classD (3.6/2.19)
|   |   predS = classF
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classG (14.3/8.51)
|   |   |   |   |   feature6 > 0.4333: classE (8.12/3.57)
|   |   |   |   feature6 > 0.4667: classG (11.94/6.13)
|   |   |   feature6 > 0.5333: classE (13.03/7.99)
|   |   predS = classG: classG (29.56/17.33)
|   feature5 = classF: classF (34.0/22.21)
|   feature5 = classG: classG (16.0/8.68)
feature3 = classC
|   feature2 = classA
|   |   predS = classA
|   |   |   feature6 <= 0.6333
|   |   |   |   feature5 = classA
|   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   feature9 <= 0.5333: classA (4.38/2.73)
|   |   |   |   |   |   |   feature9 > 0.5333: classF (3.43/1.61)
|   |   |   |   |   |   feature9 > 0.9333: classC (7.75/2.77)
|   |   |   |   |   feature7 > 0.88: classA (6.67/3.44)
|   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   feature5 = classC: classA (4.62/2.2)
|   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   feature5 = classE: classA (1.74/0.83)
|   |   |   |   feature5 = classF: classF (3.52/1.41)
|   |   |   |   feature5 = classG: classA (0.0)
|   |   |   feature6 > 0.6333: classA (29.43/11.18)
|   |   predS = classB: classA (30.39/7.65)
|   |   predS = classC
|   |   |   feature8 <= 0.8333: classC (24.76/8.42)
|   |   |   feature8 > 0.8333
|   |   |   |   feature7 <= 0.48: classC (8.7/4.59)
|   |   |   |   feature7 > 0.48: classA (12.73/5.37)
|   |   predS = classD
|   |   |   feature7 <= 0.48: classD (42.21/19.16)
|   |   |   feature7 > 0.48
|   |   |   |   feature8 <= 0.6333
|   |   |   |   |   feature6 <= 0.5: classG (6.04/2.77)
|   |   |   |   |   feature6 > 0.5: classC (10.06/2.24)
|   |   |   |   feature8 > 0.6333: classA (24.27/11.85)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (26.73/11.1)
|   |   |   feature6 > 0.3333
|   |   |   |   feature5 = classA
|   |   |   |   |   prevPredS = classA: classA (21.25/9.8)
|   |   |   |   |   prevPredS = classB: classA (0.06/0.02)
|   |   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   |   prevPredS = classD: classE (0.41/0.29)
|   |   |   |   |   prevPredS = classE: classA (3.95/2.1)
|   |   |   |   |   prevPredS = classF: classF (0.05/0.03)
|   |   |   |   |   prevPredS = classG: classE (11.93/5.87)
|   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   feature5 = classC: classA (19.34/7.67)
|   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4667: classD (44.4/22.76)
|   |   |   |   |   feature6 > 0.4667: classA (7.42/2.95)
|   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   feature5 = classG: classA (0.0)
|   |   predS = classF
|   |   |   feature9 <= 0.9333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classG (10.52/5.54)
|   |   |   |   |   feature6 > 0.4333: classE (7.12/4.07)
|   |   |   |   feature6 > 0.4667: classG (21.54/14.56)
|   |   |   feature9 > 0.9333: classA (8.94/4.19)
|   |   predS = classG
|   |   |   feature9 <= 0.7: classG (16.9/8.61)
|   |   |   feature9 > 0.7
|   |   |   |   feature6 <= 0.5: classG (7.81/4.16)
|   |   |   |   feature6 > 0.5: classA (14.01/3.8)
|   feature2 = classB
|   |   predS = classA
|   |   |   feature6 <= 0.5667: classB (3.18/1.19)
|   |   |   feature6 > 0.5667: classA (2.96/2.02)
|   |   predS = classB: classB (31.72/8.49)
|   |   predS = classC: classC (3.25/1.87)
|   |   predS = classD: classG (4.88/2.24)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (2.75/0.59)
|   |   |   feature6 > 0.3333: classA (8.87/5.8)
|   |   predS = classF: classG (5.44/3.33)
|   |   predS = classG: classG (2.67/1.07)
|   feature2 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature7 <= 0.6: classA (33.8/21.58)
|   |   |   |   |   feature7 > 0.6: classC (13.21/9.29)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6: classG (11.56/5.76)
|   |   |   |   |   feature6 > 0.6: classD (13.57/4.7)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   prevPredS = classA: classC (29.43/16.88)
|   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   prevPredS = classC: classA (7.16/3.19)
|   |   |   |   |   prevPredS = classD: classC (0.0)
|   |   |   |   |   prevPredS = classE: classC (0.0)
|   |   |   |   |   prevPredS = classF: classA (1.1/0.4)
|   |   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   |   feature6 > 0.7: classA (6.39/2.91)
|   |   predS = classB
|   |   |   feature6 <= 0.9333: classC (21.17/13.03)
|   |   |   feature6 > 0.9333: classA (89.48/19.28)
|   |   predS = classC
|   |   |   feature6 <= 0.8333
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classC (26.42/14.11)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3: classE (6.03/3.07)
|   |   |   |   |   |   feature6 > 0.3: classC (21.36/8.97)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature9 <= 0.4333: classC (18.18/6.84)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   prevPredS = classA: classC (7.35/1.07)
|   |   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   |   |   feature7 <= 0.64: classC (3.73/1.64)
|   |   |   |   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.9667: classC (4.12/1.53)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classA (17.65/2.96)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classC (6.0/1.01)
|   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.9333: classA (12.04/2.25)
|   |   |   |   |   |   |   |   |   feature6 > 0.5: classA (123.56/61.58)
|   |   |   |   |   |   |   prevPredS = classD: classC (0.42/0.06)
|   |   |   |   |   |   |   prevPredS = classE: classA (0.0)
|   |   |   |   |   |   |   prevPredS = classF: classA (4.05/0.59)
|   |   |   |   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classC (2.96/0.57)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333: classA (14.61/4.65)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classA (11.84/3.91)
|   |   |   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classC (16.95/2.68)
|   |   |   |   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.9333: classC (5.7/0.72)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.84: classA (6.15/0.78)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.84: classC (3.41/0.43)
|   |   |   |   |   |   |   |   feature6 > 0.6: classC (21.57/8.24)
|   |   |   |   |   |   |   prevPredS = classD: classC (0.79/0.16)
|   |   |   |   |   |   |   prevPredS = classE: classC (1.25/0.26)
|   |   |   |   |   |   |   prevPredS = classF: classA (2.14/0.45)
|   |   |   |   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   feature6 > 0.8333
|   |   |   |   feature7 <= 0.84
|   |   |   |   |   prevPredS = classA: classC (2.09/0.26)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   feature7 <= 0.8: classC (6.39/0.81)
|   |   |   |   |   |   feature7 > 0.8: classA (8.8/2.8)
|   |   |   |   |   prevPredS = classD: classC (1.47/0.21)
|   |   |   |   |   prevPredS = classE: classA (0.0)
|   |   |   |   |   prevPredS = classF: classA (6.87/0.87)
|   |   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   |   feature7 > 0.84: classC (305.88/38.95)
|   |   predS = classD
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.4667
|   |   |   |   |   feature6 <= 0.5333: classG (2.54/0.82)
|   |   |   |   |   feature6 > 0.5333: classA (4.01/0.7)
|   |   |   |   feature9 > 0.4667: classC (14.46/7.23)
|   |   |   prevPredS = classB: classA (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4333: classE (4.24/1.67)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classA (123.77/61.04)
|   |   |   |   |   |   feature6 > 0.4667: classG (3.07/0.49)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.6333: classD (5.58/2.65)
|   |   |   |   |   feature9 > 0.6333: classC (9.84/5.39)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3667: classC (3.46/0.97)
|   |   |   |   |   feature6 > 0.3667: classD (2.81/0.36)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature9 <= 0.5333: classG (12.67/4.77)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classG (5.4/1.61)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature9 <= 0.6333: classC (3.13/0.55)
|   |   |   |   |   |   |   feature9 > 0.6333: classE (2.99/1.13)
|   |   |   prevPredS = classE: classG (1.44/0.43)
|   |   |   prevPredS = classF: classA (11.48/7.49)
|   |   |   prevPredS = classG: classG (9.4/3.07)
|   |   predS = classE
|   |   |   feature6 <= 0.3333
|   |   |   |   feature6 <= 0.2667: classC (4.3/1.65)
|   |   |   |   feature6 > 0.2667: classG (71.74/17.94)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.4: classD (11.11/4.67)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.4667: classA (165.35/105.57)
|   |   |   |   |   |   feature6 > 0.4667: classE (10.69/6.1)
|   |   |   |   feature6 > 0.6: classA (32.35/8.57)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classG (34.4/11.79)
|   |   |   |   |   feature6 > 0.2667: classA (19.46/9.99)
|   |   |   |   feature6 > 0.4333: classE (25.35/14.04)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (15.6/4.3)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (31.94/9.34)
|   |   |   |   |   feature6 > 0.5333: classA (30.28/15.31)
|   |   predS = classG
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.3333
|   |   |   |   |   feature9 <= 0.4: classG (3.39/0.43)
|   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   feature9 <= 0.5: classA (2.39/0.3)
|   |   |   |   |   |   feature9 > 0.5: classE (2.8/0.87)
|   |   |   |   feature6 > 0.3333: classG (32.37/6.49)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classF (12.05/1.21)
|   |   |   |   feature6 > 0.5: classG (17.14/6.33)
|   feature2 = classD
|   |   prevPredS = classA: classC (17.21/11.35)
|   |   prevPredS = classB: classA (8.17/3.21)
|   |   prevPredS = classC: classC (20.39/9.75)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.9: classD (39.12/22.17)
|   |   |   feature6 > 0.9: classC (11.51/2.83)
|   |   prevPredS = classE: classD (17.67/12.35)
|   |   prevPredS = classF: classG (2.5/1.62)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.2667: classD (6.05/2.5)
|   |   |   feature9 > 0.2667: classG (5.22/2.83)
|   feature2 = classE
|   |   predS = classA
|   |   |   feature9 <= 0.9667: classA (26.67/18.3)
|   |   |   feature9 > 0.9667: classC (4.84/2.06)
|   |   predS = classB
|   |   |   feature6 <= 0.2667: classC (5.92/0.75)
|   |   |   feature6 > 0.2667: classA (26.82/7.39)
|   |   predS = classC: classC (20.57/11.87)
|   |   predS = classD
|   |   |   prevPredS = classA: classC (5.72/3.81)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classD (2.7/1.89)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.5: classG (5.05/2.9)
|   |   |   |   feature9 > 0.5: classD (19.78/9.19)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classE (3.73/1.29)
|   |   |   |   |   feature6 > 0.4333: classG (4.27/1.27)
|   |   |   |   feature6 > 0.4667: classD (5.21/1.58)
|   |   |   prevPredS = classF: classF (0.88/0.49)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.3333: classE (6.11/2.7)
|   |   |   |   feature9 > 0.3333: classG (4.82/1.28)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (22.64/9.4)
|   |   |   feature6 > 0.3
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3333: classA (3.79/0.48)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (4.18/0.78)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (2.82/1.6)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.6: classC (8.57/2.47)
|   |   |   |   |   |   feature9 > 0.6: classE (3.53/1.67)
|   |   |   |   prevPredS = classB: classE (15.6/5.41)
|   |   |   |   prevPredS = classC: classE (0.03/0.01)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.5333: classE (4.61/2.28)
|   |   |   |   |   feature9 > 0.5333: classD (7.05/2.39)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature9 <= 0.4: classA (14.7/5.56)
|   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   feature5 = classA: classE (0.25/0.09)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.13/0.05)
|   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   feature9 <= 0.6: classD (10.61/3.72)
|   |   |   |   |   |   |   feature9 > 0.6: classE (3.72/1.74)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   feature9 <= 0.8: classE (6.12/2.31)
|   |   |   |   |   |   |   |   |   feature9 > 0.8: classD (3.34/0.46)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classE (38.54/18.86)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333: classD (10.78/4.41)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (4.41/0.56)
|   |   |   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.7: classD (6.35/3.16)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.76: classE (2.73/0.34)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.76: classD (4.21/1.03)
|   |   |   |   |   |   |   |   feature7 > 0.8: classE (4.15/0.87)
|   |   |   |   |   |   feature5 = classF: classA (2.18/0.88)
|   |   |   |   |   |   feature5 = classG: classE (0.08/0.03)
|   |   |   |   prevPredS = classF: classE (1.76/0.65)
|   |   |   |   prevPredS = classG: classG (1.62/0.87)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classG (14.28/8.72)
|   |   |   |   feature6 > 0.4333: classE (5.91/3.12)
|   |   |   feature6 > 0.4667: classG (19.58/12.18)
|   |   predS = classG
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.4667: classE (5.56/2.2)
|   |   |   |   feature9 > 0.4667: classG (4.73/2.71)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0)
|   |   |   prevPredS = classD: classG (0.03/0.01)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.5333: classG (4.77/1.42)
|   |   |   |   feature9 > 0.5333: classA (11.72/5.1)
|   |   |   prevPredS = classF: classF (3.4/1.64)
|   |   |   prevPredS = classG: classG (2.13/0.42)
|   feature2 = classF
|   |   feature5 = classA: classF (2.99/2.27)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classA (7.13/3.56)
|   |   feature5 = classD: classD (1.56/0.95)
|   |   feature5 = classE
|   |   |   predS = classA: classA (1.74/1.29)
|   |   |   predS = classB: classA (1.6/0.43)
|   |   |   predS = classC: classC (1.14/0.76)
|   |   |   predS = classD: classF (3.79/1.66)
|   |   |   predS = classE: classA (5.28/3.98)
|   |   |   predS = classF: classE (12.9/3.87)
|   |   |   predS = classG: classG (1.32/0.48)
|   |   feature5 = classF
|   |   |   predS = classA: classA (10.06/3.5)
|   |   |   predS = classB: classA (3.0/0.81)
|   |   |   predS = classC: classC (2.15/1.43)
|   |   |   predS = classD: classG (4.91/2.82)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3667: classG (3.55/1.84)
|   |   |   |   feature6 > 0.3667: classF (16.47/6.3)
|   |   |   predS = classF: classF (8.12/3.68)
|   |   |   predS = classG: classF (3.87/1.89)
|   |   feature5 = classG: classF (3.63/1.71)
|   feature2 = classG: classG (27.42/15.15)
feature3 = classD
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.6667: classD (51.71/27.72)
|   |   |   |   feature9 > 0.6667
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature9 <= 0.9333: classA (4.39/0.92)
|   |   |   |   |   |   |   feature9 > 0.9333: classD (6.6/1.16)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   |   feature7 <= 0.76: classA (13.07/4.01)
|   |   |   |   |   |   |   |   feature7 > 0.76: classF (4.36/0.79)
|   |   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   |   |   feature5 = classE: classA (1.11/0.34)
|   |   |   |   |   |   |   feature5 = classF: classF (5.23/0.94)
|   |   |   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   |   feature6 > 0.5667: classA (22.48/11.4)
|   |   |   feature2 = classB: classB (10.08/5.77)
|   |   |   feature2 = classC: classC (9.21/5.17)
|   |   |   feature2 = classD
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (7.82/1.32)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classG (11.57/4.86)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (6.75/2.87)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (6.82/1.54)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (5.19/1.74)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature7 <= 0.6: classA (24.11/9.38)
|   |   |   |   |   |   feature7 > 0.6: classD (8.2/1.96)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classA (4.6/1.57)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   feature6 <= 0.4333: classD (17.58/2.41)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (5.85/0.74)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (2.64/0.33)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classD (4.71/2.4)
|   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (12.57/2.23)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (3.24/0.42)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classG (2.47/0.62)
|   |   |   |   |   |   feature6 > 0.6: classA (19.4/5.35)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.3667: classD (11.6/1.61)
|   |   |   |   |   feature6 > 0.3667: classA (23.02/9.8)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 <= 0.52
|   |   |   |   |   |   feature6 <= 0.6: classC (3.21/1.73)
|   |   |   |   |   |   feature6 > 0.6: classA (5.2/1.29)
|   |   |   |   |   feature7 > 0.52
|   |   |   |   |   |   feature6 <= 0.5333: classD (5.91/0.85)
|   |   |   |   |   |   feature6 > 0.5333: classC (4.69/2.82)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.4: classD (5.07/1.56)
|   |   |   |   |   |   feature6 > 0.4: classA (4.67/2.53)
|   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   feature6 <= 0.6333: classA (3.3/1.84)
|   |   |   |   |   |   feature6 > 0.6333: classG (3.31/0.43)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.3: classD (8.57/1.36)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (3.54/1.23)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (9.33/4.37)
|   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   prevPredS = classC: classA (0.91/0.21)
|   |   |   |   |   |   prevPredS = classD: classA (0.36/0.08)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classE (2.87/0.5)
|   |   |   |   |   |   |   |   |   feature6 > 0.3333: classA (9.93/1.26)
|   |   |   |   |   |   |   |   feature6 > 0.4: classE (7.02/2.27)
|   |   |   |   |   |   |   feature6 > 0.5: classB (2.78/0.35)
|   |   |   |   |   |   prevPredS = classF: classC (2.01/0.86)
|   |   |   |   |   |   prevPredS = classG: classA (12.45/4.07)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classG (5.6/2.0)
|   |   |   |   |   |   feature6 > 0.6: classD (8.02/2.52)
|   |   |   feature2 = classF: classA (2.5/1.19)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.4: classD (13.23/2.34)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.6: classG (7.44/4.2)
|   |   |   |   |   feature6 > 0.6: classD (2.53/0.79)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.5: classA (6.37/2.1)
|   |   |   |   |   |   feature9 > 0.5: classC (8.17/2.8)
|   |   |   |   |   feature9 > 0.5333: classA (70.81/24.82)
|   |   |   |   feature9 > 0.9667
|   |   |   |   |   prevPredS = classA: classC (73.6/31.54)
|   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classD (0.0/0.0)
|   |   |   |   |   prevPredS = classE: classC (0.0)
|   |   |   |   |   prevPredS = classF: classC (0.0)
|   |   |   |   |   prevPredS = classG: classA (4.82/1.58)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   feature7 <= 0.96: classA (4.27/1.36)
|   |   |   |   |   |   feature7 > 0.96: classD (10.57/3.99)
|   |   |   |   |   feature8 > 0.6: classA (28.5/9.12)
|   |   |   |   feature6 > 0.8667: classA (33.47/5.34)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.4667: classE (2.94/1.13)
|   |   |   |   feature9 > 0.4667: classC (19.79/5.83)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.4: classB (4.04/0.51)
|   |   |   |   feature6 > 0.4: classA (8.75/2.39)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.9667
|   |   |   |   feature9 <= 0.9
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classB (5.58/0.71)
|   |   |   |   |   |   feature6 > 0.4333: classA (3.41/0.43)
|   |   |   |   |   feature6 > 0.4667: classB (13.67/1.73)
|   |   |   |   feature9 > 0.9
|   |   |   |   |   feature6 <= 0.5333: classA (5.34/0.68)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.9333: classB (9.57/1.21)
|   |   |   |   |   |   feature6 > 0.9333: classA (9.6/2.66)
|   |   |   feature6 > 0.9667: classA (333.46/95.59)
|   |   prevPredS = classC: classB (3.49/0.87)
|   |   prevPredS = classD: classD (0.9/0.26)
|   |   prevPredS = classE: classA (4.75/2.66)
|   |   prevPredS = classF: classA (0.0)
|   |   prevPredS = classG: classG (0.37/0.11)
|   predS = classC
|   |   feature6 <= 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.8333
|   |   |   |   |   feature6 <= 0.2667: classC (34.4/16.78)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3667: classE (14.11/7.92)
|   |   |   |   |   |   feature6 > 0.3667: classC (30.42/14.13)
|   |   |   |   feature9 > 0.8333
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.2667: classC (11.11/5.92)
|   |   |   |   |   |   feature6 > 0.2667: classE (10.29/6.29)
|   |   |   |   |   feature6 > 0.5333: classA (7.26/0.92)
|   |   |   prevPredS = classB: classC (2.49/1.21)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.2667: classC (9.84/5.24)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   feature6 <= 0.3667: classE (3.14/1.16)
|   |   |   |   |   |   |   feature6 > 0.3667: classC (3.58/1.24)
|   |   |   |   |   |   feature6 > 0.4: classD (4.59/1.34)
|   |   |   |   |   feature6 > 0.5333: classC (4.2/0.53)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.2667: classC (19.41/12.05)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature6 <= 0.3667: classE (6.24/3.06)
|   |   |   |   |   |   feature6 > 0.3667: classC (5.74/1.99)
|   |   |   |   |   feature6 > 0.4: classD (9.22/2.38)
|   |   |   prevPredS = classE: classC (25.0/13.9)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.2667: classC (12.06/6.42)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3667: classE (3.86/1.42)
|   |   |   |   |   |   feature6 > 0.3667: classC (6.18/2.71)
|   |   |   |   |   feature6 > 0.5: classE (9.01/1.14)
|   |   |   prevPredS = classG: classC (0.0)
|   |   feature6 > 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature2 = classA: classC (3.25/2.04)
|   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   feature2 = classC: classA (16.71/8.12)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.4333: classD (3.6/0.8)
|   |   |   |   |   |   feature9 > 0.4333: classC (3.42/1.03)
|   |   |   |   |   feature9 > 0.6333: classA (6.39/1.97)
|   |   |   |   feature2 = classE: classA (0.0)
|   |   |   |   feature2 = classF: classA (0.0)
|   |   |   |   feature2 = classG: classA (0.0)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA: classC (0.13/0.04)
|   |   |   |   feature5 = classB: classC (0.1/0.03)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature9 <= 0.9: classD (11.98/4.25)
|   |   |   |   |   feature9 > 0.9: classC (6.1/1.83)
|   |   |   |   feature5 = classD: classD (16.25/3.92)
|   |   |   |   feature5 = classE: classD (0.0)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classD (7.2/1.68)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.8667: classD (73.59/16.58)
|   |   |   |   feature6 > 0.8667: classC (3.66/0.47)
|   |   |   prevPredS = classE: classC (6.05/2.34)
|   |   |   prevPredS = classF: classD (1.51/0.33)
|   |   |   prevPredS = classG: classD (0.0)
|   predS = classD
|   |   feature6 <= 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   feature9 <= 0.6333: classC (6.33/1.61)
|   |   |   |   |   |   feature9 > 0.6333: classD (4.1/0.93)
|   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   feature9 <= 0.9333: classA (11.18/2.54)
|   |   |   |   |   |   feature9 > 0.9333: classE (7.12/1.42)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature5 = classA
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.5: classD (40.4/18.53)
|   |   |   |   |   |   |   feature9 > 0.5: classC (46.38/24.2)
|   |   |   |   |   |   feature9 > 0.6333: classD (48.41/22.21)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC
|   |   |   |   |   |   feature6 <= 0.5333: classG (9.43/4.05)
|   |   |   |   |   |   feature6 > 0.5333: classA (10.41/3.21)
|   |   |   |   |   feature5 = classD: classD (1.81/1.13)
|   |   |   |   |   feature5 = classE: classD (0.0)
|   |   |   |   |   feature5 = classF: classD (1.5/0.93)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4333: classD (5.24/1.03)
|   |   |   |   |   feature6 > 0.4333: classG (8.88/3.53)
|   |   |   |   feature6 > 0.5333: classD (9.2/4.75)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.3667
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature8 <= 0.9667: classD (3.71/0.47)
|   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (33.72/4.35)
|   |   |   |   |   |   |   feature9 > 0.7333: classD (3.64/0.46)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.3333: classE (10.48/4.7)
|   |   |   |   |   |   feature6 > 0.3333: classA (7.88/2.99)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature6 <= 0.4667: classD (235.02/130.95)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature9 <= 0.4667: classD (6.7/2.52)
|   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classD (6.8/2.99)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classG (20.45/6.31)
|   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5: classD (15.46/5.29)
|   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6667: classD (6.87/0.87)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6667: classE (7.9/3.01)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classD (7.15/0.9)
|   |   |   |   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   |   |   |   feature9 <= 0.6333: classA (5.98/1.08)
|   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (3.17/1.13)
|   |   |   prevPredS = classE
|   |   |   |   feature7 <= 0.36
|   |   |   |   |   feature6 <= 0.4667: classE (54.12/23.02)
|   |   |   |   |   feature6 > 0.4667: classD (4.41/1.46)
|   |   |   |   feature7 > 0.36
|   |   |   |   |   feature6 <= 0.4667: classD (132.68/72.0)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature7 <= 0.84: classD (29.61/7.78)
|   |   |   |   |   |   feature7 > 0.84: classE (6.34/1.79)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.3667: classD (7.82/1.7)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature9 <= 0.4
|   |   |   |   |   |   feature6 <= 0.5333: classG (15.44/9.78)
|   |   |   |   |   |   feature6 > 0.5333: classD (4.62/0.58)
|   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   feature6 <= 0.4333: classF (5.32/1.09)
|   |   |   |   |   |   feature6 > 0.4333: classG (8.8/4.82)
|   |   |   prevPredS = classG
|   |   |   |   feature5 = classA
|   |   |   |   |   feature6 <= 0.4667: classG (9.72/2.47)
|   |   |   |   |   feature6 > 0.4667: classE (8.77/1.57)
|   |   |   |   feature5 = classB: classG (0.0)
|   |   |   |   feature5 = classC: classG (0.0)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4333: classD (14.81/2.36)
|   |   |   |   |   |   feature6 > 0.4333: classG (16.8/9.55)
|   |   |   |   |   feature9 > 0.5333: classG (18.97/4.35)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.5333: classG (4.23/1.06)
|   |   |   |   |   feature6 > 0.5333: classF (3.53/0.06)
|   |   |   |   feature5 = classF: classG (0.0)
|   |   |   |   feature5 = classG: classG (4.19/1.37)
|   |   feature6 > 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature9 <= 0.5: classD (8.43/1.07)
|   |   |   |   |   feature9 > 0.5: classC (14.94/2.26)
|   |   |   |   feature9 > 0.5333: classD (10.02/1.27)
|   |   |   prevPredS = classB: classD (0.11/0.01)
|   |   |   prevPredS = classC
|   |   |   |   feature9 <= 0.9
|   |   |   |   |   feature9 <= 0.3667: classE (2.8/0.42)
|   |   |   |   |   feature9 > 0.3667
|   |   |   |   |   |   feature6 <= 0.9: classD (20.24/3.74)
|   |   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   |   feature9 <= 0.6: classC (2.87/0.49)
|   |   |   |   |   |   |   feature9 > 0.6: classD (4.75/0.6)
|   |   |   |   feature9 > 0.9: classA (8.2/1.26)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature6 <= 0.9: classD (34.35/4.34)
|   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   feature9 <= 0.4333: classD (2.49/0.31)
|   |   |   |   |   |   |   feature9 > 0.4333: classF (7.03/0.2)
|   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   feature9 <= 0.6: classD (3.39/0.43)
|   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   feature5 = classA: classC (0.0)
|   |   |   |   |   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   |   |   |   |   feature5 = classC: classC (0.0)
|   |   |   |   |   |   |   |   feature5 = classD: classC (9.4/2.2)
|   |   |   |   |   |   |   |   feature5 = classE: classC (0.0)
|   |   |   |   |   |   |   |   feature5 = classF: classD (2.93/0.37)
|   |   |   |   |   |   |   |   feature5 = classG: classC (0.0)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature9 <= 0.9667: classD (2.87/0.36)
|   |   |   |   |   |   feature9 > 0.9667: classC (2.72/0.34)
|   |   |   |   |   feature6 > 0.6: classD (228.74/28.91)
|   |   |   prevPredS = classE: classD (8.38/1.06)
|   |   |   prevPredS = classF: classD (1.06/0.13)
|   |   |   prevPredS = classG
|   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   feature2 = classD: classD (4.4/0.56)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature9 <= 0.6: classG (3.61/0.53)
|   |   |   |   |   feature9 > 0.6: classD (2.35/0.3)
|   |   |   |   feature2 = classF: classD (0.0)
|   |   |   |   feature2 = classG: classG (0.51/0.25)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature6 <= 0.2667: classE (8.46/3.73)
|   |   |   feature6 > 0.2667: classG (363.15/162.64)
|   |   feature6 > 0.3
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature9 <= 0.4333: classA (15.25/5.63)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (4.36/0.79)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classD (8.25/1.04)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (7.23/4.1)
|   |   |   |   |   feature9 > 0.5: classC (109.14/38.4)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   feature6 <= 0.5: classD (250.55/102.55)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.6333: classE (4.84/0.61)
|   |   |   |   |   |   feature6 > 0.6333: classA (18.18/5.39)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.4667: classE (40.64/18.05)
|   |   |   |   feature6 > 0.4667: classA (5.54/2.19)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333: classC (11.23/6.2)
|   |   |   |   feature6 > 0.5333: classE (12.59/2.76)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.3667
|   |   |   |   |   |   feature9 <= 0.3333: classD (4.78/2.02)
|   |   |   |   |   |   feature9 > 0.3333: classA (9.16/3.03)
|   |   |   |   |   feature9 > 0.3667: classD (406.71/171.82)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.4: classE (6.27/0.79)
|   |   |   |   |   |   feature9 > 0.4: classD (24.25/7.67)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.7: classA (39.84/15.99)
|   |   |   |   |   |   feature6 > 0.7: classE (19.13/6.92)
|   |   |   prevPredS = classE
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.56: classA (14.77/5.5)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.4667: classA (4.16/2.79)
|   |   |   |   |   |   feature6 > 0.4667: classD (8.16/1.81)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classE (2.31/0.98)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   feature5 = classD: classD (51.54/25.66)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   feature7 <= 0.4: classD (4.61/2.07)
|   |   |   |   |   |   |   feature7 > 0.4: classE (4.74/2.02)
|   |   |   |   |   |   feature7 > 0.48: classA (9.5/3.11)
|   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   feature5 = classA: classE (0.43/0.19)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.21/0.09)
|   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   feature9 <= 0.6: classD (20.28/8.88)
|   |   |   |   |   |   |   feature9 > 0.6: classE (5.35/3.12)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classD (6.02/2.42)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.3667: classE (16.93/3.9)
|   |   |   |   |   |   |   |   |   feature9 > 0.8: classD (6.97/1.06)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classE (255.4/126.63)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.48: classE (3.77/0.48)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.48: classD (14.95/3.07)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (9.91/1.78)
|   |   |   |   |   |   |   |   |   feature7 > 0.6: classE (16.44/2.08)
|   |   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   |   feature6 <= 0.7: classA (31.07/12.83)
|   |   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (8.07/2.93)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.4667: classE (20.71/3.14)
|   |   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   |   feature5 = classG: classE (0.14/0.06)
|   |   |   |   |   feature8 > 0.6
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature9 <= 0.6: classD (33.03/20.66)
|   |   |   |   |   |   |   feature9 > 0.6: classE (46.63/29.9)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classE (18.84/2.47)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classA (3.73/1.4)
|   |   |   |   |   |   |   feature7 > 0.48: classD (43.16/17.62)
|   |   |   |   feature2 = classF: classD (0.86/0.56)
|   |   |   |   feature2 = classG
|   |   |   |   |   feature6 <= 0.4667: classG (37.39/16.64)
|   |   |   |   |   feature6 > 0.4667: classA (2.96/1.07)
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA: classF (0.0)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC: classA (4.79/1.66)
|   |   |   |   feature5 = classD: classD (12.53/5.88)
|   |   |   |   feature5 = classE: classE (14.53/6.78)
|   |   |   |   feature5 = classF: classF (14.0/6.99)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.4333: classD (21.42/9.07)
|   |   |   |   feature9 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classE (24.52/12.11)
|   |   |   |   |   feature6 > 0.4667: classG (6.91/3.75)
|   predS = classF
|   |   feature6 <= 0.3: classG (119.8/35.66)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3333: classA (30.49/11.19)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.3667: classF (28.65/13.57)
|   |   |   |   |   |   feature6 > 0.3667: classA (32.07/19.89)
|   |   |   |   feature6 > 0.4333: classE (106.1/54.3)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (64.37/19.08)
|   |   |   |   |   feature6 > 0.5: classG (122.37/38.19)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classA (78.03/29.03)
|   |   |   |   |   feature6 > 0.5667: classG (64.99/37.12)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature6 <= 0.2667
|   |   |   |   prevPredS = classA: classD (5.92/1.02)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classD (0.0)
|   |   |   |   prevPredS = classD: classD (0.0)
|   |   |   |   prevPredS = classE: classG (2.42/1.14)
|   |   |   |   prevPredS = classF: classD (0.0)
|   |   |   |   prevPredS = classG: classD (0.0)
|   |   |   feature6 > 0.2667
|   |   |   |   feature9 <= 0.7: classG (21.47/10.26)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.5: classG (9.42/3.93)
|   |   |   |   |   feature6 > 0.5: classA (14.7/4.89)
|   |   feature5 = classB: classG (0.0)
|   |   feature5 = classC: classA (6.52/4.03)
|   |   feature5 = classD
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5333: classC (4.97/2.25)
|   |   |   |   feature9 > 0.5333: classG (8.24/3.58)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classD (33.16/14.82)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.3333
|   |   |   |   |   feature6 <= 0.4: classD (7.95/2.97)
|   |   |   |   |   feature6 > 0.4: classG (3.82/1.37)
|   |   |   |   feature9 > 0.3333: classA (6.21/3.88)
|   |   |   prevPredS = classF: classG (4.47/0.9)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4: classD (3.12/0.63)
|   |   |   |   feature6 > 0.4: classG (10.8/3.61)
|   |   feature5 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature2 = classA: classG (0.0)
|   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   feature2 = classD: classG (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4667: classG (2.73/0.35)
|   |   |   |   |   |   feature6 > 0.4667: classE (9.68/2.35)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature9 <= 0.5333: classC (4.22/1.73)
|   |   |   |   |   |   feature9 > 0.5333: classG (7.55/3.28)
|   |   |   |   feature2 = classF: classG (1.12/0.42)
|   |   |   |   feature2 = classG
|   |   |   |   |   feature6 <= 0.4: classD (6.61/1.71)
|   |   |   |   |   feature6 > 0.4: classG (9.54/4.57)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classG (0.15/0.03)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.4: classG (5.16/0.65)
|   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   feature9 <= 0.5667: classA (27.47/11.05)
|   |   |   |   |   |   feature9 > 0.5667: classE (3.38/1.36)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classF (10.02/4.89)
|   |   |   |   |   feature6 > 0.5: classG (5.58/0.71)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4: classA (6.88/1.9)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature9 <= 0.5333: classF (5.53/1.82)
|   |   |   |   |   feature9 > 0.5333: classG (7.07/1.71)
|   |   |   prevPredS = classG
|   |   |   |   feature2 = classA: classG (4.71/1.28)
|   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   feature2 = classD: classG (0.27/0.05)
|   |   |   |   feature2 = classE: classG (0.2/0.04)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature6 <= 0.5: classG (4.01/1.34)
|   |   |   |   |   feature6 > 0.5: classD (7.17/2.28)
|   |   |   |   feature2 = classG: classG (1.17/0.24)
|   |   feature5 = classF
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9: classG (8.97/4.96)
|   |   |   |   feature9 > 0.9
|   |   |   |   |   feature6 <= 0.5667: classG (3.73/1.38)
|   |   |   |   |   feature6 > 0.5667: classA (8.46/1.26)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.6333: classG (2.61/0.95)
|   |   |   |   feature6 > 0.6333: classD (5.74/0.84)
|   |   |   prevPredS = classE: classG (5.27/2.81)
|   |   |   prevPredS = classF: classG (3.51/0.98)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.8
|   |   |   |   |   feature6 <= 0.4667: classG (2.93/0.37)
|   |   |   |   |   feature6 > 0.4667: classF (8.61/1.4)
|   |   |   |   feature9 > 0.8: classG (6.45/1.3)
|   |   feature5 = classG
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6667
|   |   |   |   |   feature9 <= 0.5333: classC (8.13/3.72)
|   |   |   |   |   feature9 > 0.5333: classG (8.08/1.62)
|   |   |   |   feature9 > 0.6667: classF (5.28/3.19)
|   |   |   prevPredS = classB: classG (0.07/0.01)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4667: classG (17.19/2.17)
|   |   |   |   feature6 > 0.4667: classD (9.08/4.18)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.4667: classG (6.14/1.23)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature6 <= 0.3667: classA (4.78/2.69)
|   |   |   |   |   feature6 > 0.3667: classG (2.42/0.84)
|   |   |   prevPredS = classF: classG (7.36/1.48)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.3333: classD (5.93/1.03)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature7 <= 0.52
|   |   |   |   |   |   feature6 <= 0.6667: classG (8.93/2.49)
|   |   |   |   |   |   feature6 > 0.6667: classD (7.67/2.78)
|   |   |   |   |   feature7 > 0.52: classG (43.35/9.38)
feature3 = classE
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classD (7.28/1.83)
|   |   |   |   |   |   feature6 > 0.4333: classA (26.57/11.82)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classG (30.75/14.63)
|   |   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (7.58/3.54)
|   |   |   |   |   |   |   |   |   feature6 > 0.5667: classG (5.47/2.83)
|   |   |   |   |   |   |   feature6 > 0.6: classD (7.35/3.32)
|   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   feature9 <= 0.5667: classA (7.98/2.81)
|   |   |   |   |   |   |   feature9 > 0.5667: classG (7.46/2.94)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4: classE (14.42/5.27)
|   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   feature8 <= 0.9333: classE (4.91/1.97)
|   |   |   |   |   |   |   |   feature8 > 0.9333: classA (12.65/1.6)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature2 = classA: classF (14.75/5.16)
|   |   |   |   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   |   |   |   feature2 = classC: classF (0.0)
|   |   |   |   |   |   |   feature2 = classD: classF (0.0)
|   |   |   |   |   |   |   feature2 = classE: classE (8.37/3.48)
|   |   |   |   |   |   |   feature2 = classF: classA (4.26/1.77)
|   |   |   |   |   |   |   feature2 = classG: classF (0.0)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classG (11.23/6.05)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature9 <= 0.9: classA (9.29/3.64)
|   |   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   |   feature9 <= 0.9333: classE (12.4/4.93)
|   |   |   |   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   |   |   |   feature8 <= 0.8: classE (3.7/1.53)
|   |   |   |   |   |   |   |   |   feature8 > 0.8: classA (4.46/1.75)
|   |   |   prevPredS = classB: classB (2.2/0.65)
|   |   |   prevPredS = classC
|   |   |   |   feature9 <= 0.5: classA (7.65/2.7)
|   |   |   |   feature9 > 0.5: classC (6.64/2.47)
|   |   |   prevPredS = classD: classA (1.51/0.53)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5: classB (6.22/1.32)
|   |   |   |   |   |   |   feature9 > 0.5: classD (11.99/1.52)
|   |   |   |   |   |   feature9 > 0.6: classE (12.77/2.72)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   |   |   feature2 = classB: classB (3.27/0.51)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classD (0.0/0.0)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature8 <= 0.7333: classA (11.82/3.37)
|   |   |   |   |   |   |   |   feature8 > 0.7333
|   |   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classE (2.64/0.5)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.72: classA (8.38/1.06)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.72: classE (2.5/0.37)
|   |   |   |   |   |   |   |   |   feature9 > 0.6667
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classE (17.27/2.68)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.4: classE (3.77/0.59)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.4: classA (5.78/0.73)
|   |   |   |   |   |   |   feature2 = classF: classA (0.83/0.11)
|   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   |   feature6 > 0.5333: classB (19.27/6.54)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6: classG (11.1/2.76)
|   |   |   |   |   feature6 > 0.6: classA (43.88/18.28)
|   |   |   prevPredS = classF
|   |   |   |   feature7 <= 0.52
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature9 <= 0.3333: classC (6.51/2.94)
|   |   |   |   |   |   feature9 > 0.3333: classA (6.9/2.67)
|   |   |   |   |   feature6 > 0.5667: classA (17.31/6.57)
|   |   |   |   feature7 > 0.52
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5: classE (12.38/2.6)
|   |   |   |   |   |   feature6 > 0.5: classC (8.63/4.14)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature6 <= 0.6: classG (2.66/0.66)
|   |   |   |   |   |   |   feature6 > 0.6: classD (3.49/0.44)
|   |   |   |   |   |   feature6 > 0.6333: classE (11.49/1.7)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.4333: classA (2.75/0.56)
|   |   |   |   |   |   feature6 > 0.4333: classG (3.73/1.67)
|   |   |   |   |   feature6 > 0.6: classA (6.64/1.87)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature9 <= 0.7333: classD (12.85/3.56)
|   |   |   |   |   feature9 > 0.7333: classG (11.0/3.53)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.5333: classC (12.22/4.87)
|   |   |   |   |   |   feature9 > 0.5333: classA (86.27/25.69)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classC (2.61/0.81)
|   |   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature8 <= 0.9: classE (7.09/0.98)
|   |   |   |   |   |   feature8 > 0.9: classA (13.79/4.11)
|   |   |   |   |   prevPredS = classF: classA (3.04/1.21)
|   |   |   |   |   prevPredS = classG: classA (6.17/1.84)
|   |   |   |   feature9 > 0.9667: classC (92.7/43.82)
|   |   |   feature6 > 0.7
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature9 <= 0.5: classA (18.52/2.58)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.5333: classC (9.7/3.99)
|   |   |   |   |   |   feature9 > 0.5333: classA (2.78/0.35)
|   |   |   |   feature9 > 0.6
|   |   |   |   |   feature6 <= 0.9333
|   |   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   |   feature9 <= 0.6333: classE (5.61/0.71)
|   |   |   |   |   |   |   feature9 > 0.6333: classA (48.44/14.19)
|   |   |   |   |   |   feature6 > 0.7667
|   |   |   |   |   |   |   feature5 = classA: classA (10.19/1.29)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classC (0.0/0.0)
|   |   |   |   |   |   |   feature5 = classD: classA (0.06/0.01)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature9 <= 0.7: classA (4.41/0.56)
|   |   |   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   |   |   feature7 <= 0.48: classE (24.24/4.66)
|   |   |   |   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classA (6.7/0.85)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88: classE (5.8/0.82)
|   |   |   |   |   |   |   feature5 = classF: classA (0.37/0.05)
|   |   |   |   |   |   |   feature5 = classG: classA (0.1/0.01)
|   |   |   |   |   feature6 > 0.9333: classA (37.24/4.71)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.4667: classE (4.14/2.04)
|   |   |   |   feature9 > 0.4667: classC (23.3/6.79)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.3333: classB (4.69/0.59)
|   |   |   |   feature6 > 0.3333: classA (8.99/2.55)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.9667
|   |   |   |   feature9 <= 0.9
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classB (6.48/0.82)
|   |   |   |   |   |   feature6 > 0.4333: classA (3.88/0.49)
|   |   |   |   |   feature6 > 0.4667: classB (15.69/1.98)
|   |   |   |   feature9 > 0.9
|   |   |   |   |   feature6 <= 0.5333: classA (6.11/0.77)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.9333: classB (10.93/1.38)
|   |   |   |   |   |   feature6 > 0.9333: classA (11.13/3.07)
|   |   |   feature6 > 0.9667: classA (386.19/110.7)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6667: classE (10.76/3.29)
|   |   |   feature6 > 0.6667: classB (3.82/1.91)
|   |   prevPredS = classD: classA (0.0)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.3333: classE (2.41/0.31)
|   |   |   feature6 > 0.3333: classA (3.34/0.9)
|   |   prevPredS = classF: classD (0.98/0.29)
|   |   prevPredS = classG: classG (0.43/0.13)
|   predS = classC
|   |   prevPredS = classA
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.2667: classC (44.62/21.99)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.3667: classE (18.72/10.57)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.6: classC (37.68/17.82)
|   |   |   |   |   |   feature6 > 0.6: classD (13.99/7.78)
|   |   |   feature6 > 0.7333: classA (25.11/12.34)
|   |   prevPredS = classB: classG (22.52/16.17)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6
|   |   |   |   feature6 <= 0.2667: classE (45.69/29.47)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.3667: classE (9.08/3.34)
|   |   |   |   |   feature6 > 0.3667: classC (23.48/12.46)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.7: classD (7.12/1.36)
|   |   |   |   feature6 > 0.7: classC (13.43/6.07)
|   |   prevPredS = classD: classC (18.24/10.81)
|   |   prevPredS = classE: classC (54.61/34.09)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.2667: classC (8.68/4.7)
|   |   |   feature6 > 0.2667: classE (20.93/9.81)
|   |   prevPredS = classG: classC (0.0)
|   predS = classD
|   |   prevPredS = classA
|   |   |   feature9 <= 0.5333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature7 <= 0.56: classD (54.52/21.41)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.5333: classG (4.34/1.41)
|   |   |   |   |   |   feature6 > 0.5333: classA (9.89/1.52)
|   |   |   |   feature9 > 0.5: classC (67.24/27.51)
|   |   |   feature9 > 0.5333
|   |   |   |   feature7 <= 0.44
|   |   |   |   |   feature8 <= 0.6: classD (6.36/2.5)
|   |   |   |   |   feature8 > 0.6: classE (62.54/25.12)
|   |   |   |   feature7 > 0.44
|   |   |   |   |   feature6 <= 0.4: classA (7.01/2.75)
|   |   |   |   |   feature6 > 0.4: classD (49.38/20.49)
|   |   prevPredS = classB: classE (0.0)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333: classD (7.03/2.77)
|   |   |   |   feature6 > 0.4333: classG (17.29/4.99)
|   |   |   feature6 > 0.5333
|   |   |   |   feature9 <= 0.8
|   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   feature6 <= 0.6667: classD (4.71/2.15)
|   |   |   |   |   |   feature6 > 0.6667: classE (3.16/0.4)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.8667: classD (4.88/0.62)
|   |   |   |   |   |   |   feature6 > 0.8667: classC (3.25/0.49)
|   |   |   |   |   |   feature9 > 0.6: classD (4.93/0.62)
|   |   |   |   feature9 > 0.8
|   |   |   |   |   feature9 <= 0.9333: classA (9.56/1.5)
|   |   |   |   |   feature9 > 0.9333: classC (4.9/0.76)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.5667
|   |   |   |   feature2 = classA: classG (0.0)
|   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   feature2 = classC: classD (0.4/0.22)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.4333: classD (6.21/3.09)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (9.99/4.92)
|   |   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (6.51/2.05)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classD (4.0/0.83)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classG (5.48/0.86)
|   |   |   |   |   |   |   feature9 > 0.5: classD (36.85/18.14)
|   |   |   |   |   feature9 > 0.6667
|   |   |   |   |   |   feature6 <= 0.4667: classG (5.6/2.08)
|   |   |   |   |   |   feature6 > 0.4667: classD (8.28/3.61)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.5: classE (39.55/21.32)
|   |   |   |   |   |   |   feature6 > 0.5: classD (5.08/1.19)
|   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (11.68/5.65)
|   |   |   |   |   |   |   feature6 > 0.4333: classG (54.36/25.31)
|   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   feature6 <= 0.5: classD (76.76/41.94)
|   |   |   |   |   |   feature6 > 0.5: classE (11.8/2.31)
|   |   |   |   feature2 = classF: classD (1.81/1.02)
|   |   |   |   feature2 = classG: classG (4.61/1.31)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.9
|   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   feature5 = classA: classD (4.18/0.53)
|   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   feature5 = classC: classD (0.03/0.0)
|   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   feature9 <= 0.5667: classD (8.09/1.02)
|   |   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classE (8.02/2.08)
|   |   |   |   |   |   |   |   |   feature8 > 0.6333: classD (4.43/1.01)
|   |   |   |   |   |   |   |   feature7 > 0.64: classD (7.4/0.94)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature6 <= 0.7: classE (17.82/3.49)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature8 <= 0.7: classD (10.92/2.43)
|   |   |   |   |   |   |   |   feature8 > 0.7: classE (3.34/0.54)
|   |   |   |   |   |   feature5 = classF: classD (0.65/0.08)
|   |   |   |   |   |   feature5 = classG: classD (0.62/0.08)
|   |   |   |   |   feature9 > 0.9667: classC (4.17/1.41)
|   |   |   |   feature6 > 0.9
|   |   |   |   |   feature9 <= 0.5: classF (8.48/0.51)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.9333: classC (11.57/3.2)
|   |   |   |   |   |   feature6 > 0.9333: classD (2.3/0.29)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.3
|   |   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   feature5 = classD: classA (5.6/0.71)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature6 <= 0.2333: classA (5.6/0.71)
|   |   |   |   |   |   feature6 > 0.2333: classE (9.33/2.56)
|   |   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature7 <= 0.44: classE (3.8/0.48)
|   |   |   |   |   |   |   feature7 > 0.44: classD (6.22/1.02)
|   |   |   |   |   |   feature6 > 0.4333: classG (9.53/4.27)
|   |   |   |   |   feature9 > 0.4333: classE (254.97/120.23)
|   |   |   feature6 > 0.4667
|   |   |   |   feature8 <= 0.5: classD (24.88/7.32)
|   |   |   |   feature8 > 0.5
|   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   feature5 = classA: classE (10.21/2.65)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   feature5 = classD: classD (2.83/0.89)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 <= 0.56: classE (3.31/0.86)
|   |   |   |   |   |   |   feature7 > 0.56: classD (10.56/3.64)
|   |   |   |   |   |   feature5 = classF: classF (0.07/0.01)
|   |   |   |   |   |   feature5 = classG: classG (0.3/0.06)
|   |   |   |   |   feature9 > 0.4667: classE (37.16/9.33)
|   |   prevPredS = classF
|   |   |   feature9 <= 0.4
|   |   |   |   feature6 <= 0.5333: classG (3.78/1.71)
|   |   |   |   feature6 > 0.5333: classD (6.25/0.79)
|   |   |   feature9 > 0.4
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature9 <= 0.4667: classE (3.11/0.39)
|   |   |   |   |   |   feature9 > 0.4667: classF (5.27/0.38)
|   |   |   |   |   feature6 > 0.4: classE (8.55/1.08)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5333: classG (13.41/4.3)
|   |   |   |   |   feature6 > 0.5333: classE (13.9/4.11)
|   |   prevPredS = classG
|   |   |   feature5 = classA
|   |   |   |   feature9 <= 0.4
|   |   |   |   |   feature6 <= 0.4667: classG (4.08/1.37)
|   |   |   |   |   feature6 > 0.4667: classE (10.04/1.67)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature9 <= 0.9: classD (8.48/3.58)
|   |   |   |   |   feature9 > 0.9: classG (15.18/3.05)
|   |   |   feature5 = classB: classG (0.0)
|   |   |   feature5 = classC: classG (0.0)
|   |   |   feature5 = classD
|   |   |   |   feature6 <= 0.7: classG (17.9/3.84)
|   |   |   |   feature6 > 0.7: classD (2.29/0.29)
|   |   |   feature5 = classE
|   |   |   |   feature6 <= 0.5333: classG (7.09/1.63)
|   |   |   |   feature6 > 0.5333: classF (5.13/0.97)
|   |   |   feature5 = classF: classG (0.0)
|   |   |   feature5 = classG: classG (0.09/0.02)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature6 <= 0.2667: classE (13.59/4.94)
|   |   |   feature6 > 0.2667: classG (328.83/95.82)
|   |   feature6 > 0.3
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (10.07/2.52)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classA (4.8/3.04)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classE (2.81/1.09)
|   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   feature5 = classD: classD (0.24/0.11)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (9.58/1.21)
|   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (2.56/0.62)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.3667: classD (6.47/0.82)
|   |   |   |   |   |   |   |   |   feature6 > 0.4333: classA (8.98/5.09)
|   |   |   |   |   |   |   feature7 > 0.56: classE (12.82/5.06)
|   |   |   |   |   |   feature5 = classF: classE (1.47/0.79)
|   |   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   |   feature9 > 0.5: classC (137.61/47.6)
|   |   |   |   feature9 > 0.5333
|   |   |   |   |   feature5 = classA: classE (33.74/14.98)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   feature5 = classD: classD (0.0)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature7 <= 0.6: classE (28.93/12.85)
|   |   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.5667: classD (89.44/32.77)
|   |   |   |   |   |   |   feature6 > 0.5667: classA (6.63/2.62)
|   |   |   |   |   feature5 = classF: classE (4.45/1.97)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.4667: classE (44.43/18.4)
|   |   |   |   feature6 > 0.4667: classA (5.91/2.43)
|   |   |   prevPredS = classC: classC (7.84/4.13)
|   |   |   prevPredS = classD
|   |   |   |   feature8 <= 0.5333
|   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   |   feature2 = classD: classD (24.08/9.97)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.4667: classD (16.09/10.62)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   feature9 <= 0.4333: classE (4.17/0.53)
|   |   |   |   |   |   |   |   feature9 > 0.4333: classD (12.39/2.17)
|   |   |   |   |   |   |   feature6 > 0.6333: classE (6.72/2.49)
|   |   |   |   |   feature2 = classF: classF (5.14/1.74)
|   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   feature8 > 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature9 <= 0.5333: classE (86.78/42.52)
|   |   |   |   |   |   feature9 > 0.5333: classD (16.32/7.78)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6667: classE (25.86/6.06)
|   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   feature6 <= 0.7: classA (8.51/2.23)
|   |   |   |   |   |   |   feature6 > 0.7: classE (13.04/2.88)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature8 <= 0.8
|   |   |   |   |   |   feature8 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classD (2.58/0.85)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classG (6.85/1.87)
|   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   feature5 = classA: classE (6.39/3.11)
|   |   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classC: classE (0.04/0.02)
|   |   |   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6: classD (61.09/27.36)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6: classE (5.91/3.19)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667: classA (7.18/2.48)
|   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classE (19.37/13.48)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333: classD (8.52/1.78)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (2.6/0.63)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classE (6.63/4.07)
|   |   |   |   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classG: classE (2.51/1.22)
|   |   |   |   |   |   feature8 > 0.5
|   |   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classA (3.41/2.27)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667: classE (2.83/0.36)
|   |   |   |   |   |   |   |   feature6 > 0.6333: classA (3.03/0.39)
|   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classE (18.15/9.83)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classE (16.83/5.0)
|   |   |   |   |   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.6667: classD (9.33/2.85)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.6667: classE (13.03/3.87)
|   |   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classD: classD (15.08/9.89)
|   |   |   |   |   |   |   |   |   |   feature5 = classE: classE (142.06/87.04)
|   |   |   |   |   |   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5: classE (14.28/3.96)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classD (7.2/1.78)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.7667: classE (15.12/3.01)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.7667: classD (7.32/1.9)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5667: classE (15.97/2.02)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.6667: classA (28.08/13.3)
|   |   |   |   |   |   |   feature2 = classF: classE (1.03/0.48)
|   |   |   |   |   |   |   feature2 = classG: classG (5.14/2.65)
|   |   |   |   |   feature8 > 0.8
|   |   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   |   feature5 = classA: classE (13.66/6.52)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classE (0.22/0.11)
|   |   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classD (27.53/13.81)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classE (5.2/2.64)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (12.41/2.62)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classD (16.17/8.92)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6: classE (5.49/0.69)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6: classD (2.57/0.85)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.7: classA (7.11/2.21)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classE (10.98/1.39)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.7667: classE (4.06/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.7667: classD (5.29/0.67)
|   |   |   |   |   |   |   |   |   feature6 > 0.4333: classE (340.71/188.95)
|   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5333: classD (7.71/2.68)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5333: classE (17.15/3.89)
|   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.56: classD (7.59/2.57)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6667: classE (13.2/1.67)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classE (23.58/2.98)
|   |   |   |   |   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   |   |   |   |   feature2 = classA: classA (10.24/1.42)
|   |   |   |   |   |   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.6667: classE (10.25/1.3)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.6667: classA (48.06/24.14)
|   |   |   |   |   |   |   |   |   |   feature2 = classF: classE (0.21/0.11)
|   |   |   |   |   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   |   |   feature5 = classF: classE (0.62/0.3)
|   |   |   |   |   |   |   feature5 = classG: classE (0.04/0.02)
|   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature8 <= 0.9333: classE (27.53/15.11)
|   |   |   |   |   |   |   |   feature8 > 0.9333: classA (72.72/29.56)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature8 <= 0.8667: classA (11.18/4.53)
|   |   |   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.9667: classE (15.84/2.0)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classB (7.46/2.57)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.9333: classE (7.84/0.99)
|   |   |   |   |   |   |   |   |   feature6 > 0.6667: classA (7.57/1.52)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature8 <= 0.7667
|   |   |   |   |   |   feature6 <= 0.8
|   |   |   |   |   |   |   feature5 = classA: classD (6.86/1.97)
|   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (12.82/1.63)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classD (21.44/4.31)
|   |   |   |   |   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.52: classD (5.72/0.83)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.52: classE (9.55/2.95)
|   |   |   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.72: classG (22.87/3.29)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.72: classE (7.64/0.97)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.5333: classD (6.39/1.5)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.5333: classE (8.33/1.05)
|   |   |   |   |   |   |   feature5 = classF: classE (7.04/0.89)
|   |   |   |   |   |   |   feature5 = classG: classE (0.41/0.05)
|   |   |   |   |   |   feature6 > 0.8
|   |   |   |   |   |   |   feature8 <= 0.5333
|   |   |   |   |   |   |   |   feature8 <= 0.5: classE (7.77/0.98)
|   |   |   |   |   |   |   |   feature8 > 0.5: classD (8.49/3.59)
|   |   |   |   |   |   |   feature8 > 0.5333: classE (25.83/3.26)
|   |   |   |   |   feature8 > 0.7667: classE (139.77/22.83)
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA: classE (13.3/5.64)
|   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   feature5 = classC: classA (5.08/1.61)
|   |   |   |   feature5 = classD: classE (0.0)
|   |   |   |   feature5 = classE: classE (34.63/17.92)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature7 <= 0.72: classE (8.66/4.48)
|   |   |   |   |   feature7 > 0.72: classF (10.03/3.02)
|   |   |   |   feature5 = classG: classE (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.76: classE (64.05/26.43)
|   |   |   |   |   feature7 > 0.76: classA (10.63/4.24)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   feature2 = classD: classD (15.24/6.24)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature8 <= 0.5: classG (38.56/16.78)
|   |   |   |   |   feature8 > 0.5
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (3.17/0.91)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (7.2/4.44)
|   |   |   |   |   |   feature6 > 0.7: classE (9.17/1.16)
|   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   feature2 = classG: classE (5.81/3.15)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.2667: classG (2.51/0.32)
|   |   |   |   |   |   |   |   feature6 > 0.2667: classA (2.62/1.09)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classE (7.06/2.08)
|   |   |   |   |   |   |   |   feature6 > 0.5: classG (2.51/0.32)
|   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   feature9 <= 0.3667: classG (19.12/5.95)
|   |   |   |   |   |   |   feature9 > 0.3667: classA (8.19/4.29)
|   |   |   |   |   feature6 > 0.5333: classA (13.01/1.82)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5333: classC (61.59/33.39)
|   |   |   |   |   feature9 > 0.5333: classF (4.38/1.62)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.2667: classG (33.92/4.29)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   feature6 <= 0.3333: classA (7.01/1.93)
|   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classF (4.27)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classA (3.5/0.97)
|   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   feature9 <= 0.8667: classE (104.11/51.53)
|   |   |   |   |   |   |   feature9 > 0.8667
|   |   |   |   |   |   |   |   feature7 <= 0.88: classE (8.55/1.08)
|   |   |   |   |   |   |   |   feature7 > 0.88: classA (5.6/0.71)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5: classD (18.42/3.6)
|   |   |   |   |   |   |   feature6 > 0.5: classG (33.92/4.29)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classE (36.12/19.38)
|   |   |   |   |   |   |   feature6 > 0.5667: classF (5.07)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.3333: classB (2.46/1.08)
|   |   |   feature6 > 0.3333: classE (3.29/1.91)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6333
|   |   |   |   feature6 <= 0.5333: classG (4.39/1.78)
|   |   |   |   feature6 > 0.5333: classA (2.97/0.53)
|   |   |   feature6 > 0.6333: classC (4.12/0.52)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.6333
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.3: classG (7.28/3.41)
|   |   |   |   |   feature6 > 0.3: classD (18.71/4.98)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (4.43/0.56)
|   |   |   |   |   feature6 > 0.5333: classA (3.6/1.66)
|   |   |   feature9 > 0.6333: classA (15.93/6.9)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.2667: classG (30.96/8.89)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature2 = classA: classE (0.66/0.19)
|   |   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   |   feature2 = classC: classA (7.79/2.67)
|   |   |   |   |   |   feature2 = classD: classD (0.01/0.0)
|   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   |   feature7 <= 0.6: classE (6.28/1.96)
|   |   |   |   |   |   |   |   feature7 > 0.6: classA (17.01/5.4)
|   |   |   |   |   |   |   feature6 > 0.3667: classE (10.59/2.58)
|   |   |   |   |   |   feature2 = classF: classF (9.11/2.49)
|   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   |   |   feature2 = classD: classD (7.53/1.17)
|   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   feature9 <= 0.6333: classD (24.65/5.18)
|   |   |   |   |   |   |   feature9 > 0.6333: classE (9.88/3.33)
|   |   |   |   |   |   feature2 = classF: classE (14.72/6.53)
|   |   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (32.81/10.75)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classA (15.16/4.12)
|   |   |   |   |   |   feature6 > 0.5667: classE (6.82/2.11)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.3: classG (18.61/2.51)
|   |   |   |   |   |   feature6 > 0.3: classE (15.53/9.23)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5: classD (25.71/12.55)
|   |   |   |   |   |   feature6 > 0.5: classG (18.87/2.77)
|   |   |   |   feature6 > 0.5333: classA (9.65/1.6)
|   |   |   feature6 > 0.5667
|   |   |   |   feature9 <= 0.5: classE (17.36/4.9)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5333: classG (19.73/3.61)
|   |   |   |   |   feature9 > 0.5333: classF (16.08/7.53)
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.4: classE (5.18/2.69)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.3: classG (2.75/0.35)
|   |   |   |   |   |   feature6 > 0.3: classF (11.92/5.42)
|   |   |   |   |   feature6 > 0.6: classG (6.44/0.81)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classG (0.0)
|   |   |   feature2 = classE: classG (7.79/4.35)
|   |   |   feature2 = classF
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature9 <= 0.6: classF (5.34/2.45)
|   |   |   |   |   feature9 > 0.6: classG (11.55/3.83)
|   |   |   |   feature6 > 0.7333: classF (4.02)
|   |   |   feature2 = classG: classG (20.39/7.8)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature9 <= 0.9667
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   prevPredS = classA: classG (10.25/5.81)
|   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   |   feature9 <= 0.4: classG (4.57/0.58)
|   |   |   |   |   |   |   feature9 > 0.4: classA (3.0/0.38)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.3333: classE (3.0/0.38)
|   |   |   |   |   |   |   feature6 > 0.3333: classG (28.55/13.4)
|   |   |   |   |   prevPredS = classF: classG (2.64/0.33)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   feature7 <= 0.8: classE (6.07/1.18)
|   |   |   |   |   |   |   feature7 > 0.8: classA (3.24/0.43)
|   |   |   |   |   |   feature6 > 0.4: classG (8.03/1.01)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classF (12.48/0.95)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classA (20.26/4.18)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   |   |   feature9 <= 0.6: classC (4.59/2.82)
|   |   |   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classA (2.86/0.37)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5667: classG (6.63/0.84)
|   |   |   |   |   |   |   |   feature9 > 0.6667
|   |   |   |   |   |   |   |   |   feature9 <= 0.7: classE (3.18/0.56)
|   |   |   |   |   |   |   |   |   feature9 > 0.7: classA (9.01/2.88)
|   |   |   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   |   |   |   |   prevPredS = classD: classG (0.13/0.02)
|   |   |   |   |   |   |   prevPredS = classE: classG (0.12/0.01)
|   |   |   |   |   |   |   prevPredS = classF: classG (4.85/0.61)
|   |   |   |   |   |   |   prevPredS = classG: classG (11.28/3.53)
|   |   |   feature9 > 0.9667
|   |   |   |   feature6 <= 0.4667: classG (9.67/2.85)
|   |   |   |   feature6 > 0.4667: classE (28.83/7.38)
|   |   feature5 = classB: classG (0.0)
|   |   feature5 = classC: classA (6.88/4.01)
|   |   feature5 = classD: classG (11.35/4.64)
|   |   feature5 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature9 <= 0.4667: classE (14.93/6.41)
|   |   |   |   |   feature9 > 0.4667: classC (14.26/5.51)
|   |   |   |   feature9 > 0.5333
|   |   |   |   |   feature9 <= 0.6667: classG (14.19/2.77)
|   |   |   |   |   feature9 > 0.6667: classF (17.26/12.01)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.02/0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4: classE (5.71/0.73)
|   |   |   |   feature6 > 0.4: classG (2.67/0.91)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.4333: classG (26.6/12.62)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4333: classA (31.66/11.11)
|   |   |   |   |   |   feature6 > 0.4333: classF (7.03/3.48)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4: classE (7.47/0.94)
|   |   |   |   |   |   feature6 > 0.4: classG (12.97/3.36)
|   |   |   |   |   feature6 > 0.4667: classE (33.87/8.81)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature6 <= 0.4: classE (13.91/3.95)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4667: classG (12.27/4.54)
|   |   |   |   |   |   |   feature6 > 0.4667: classF (3.51/0.07)
|   |   |   |   |   |   feature6 > 0.5: classE (13.97/7.63)
|   |   |   |   feature9 > 0.5333: classG (9.47/1.85)
|   |   |   prevPredS = classG: classG (24.64/9.65)
|   |   feature5 = classF
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.4667: classG (13.41/4.42)
|   |   |   |   feature6 > 0.4667: classF (5.39/1.84)
|   |   |   feature6 > 0.5667
|   |   |   |   feature9 <= 0.9667: classF (12.95/4.58)
|   |   |   |   feature9 > 0.9667: classA (10.02/1.65)
|   |   feature5 = classG
|   |   |   feature9 <= 0.5333
|   |   |   |   feature6 <= 0.5667: classG (15.41/6.42)
|   |   |   |   feature6 > 0.5667: classD (15.86/6.07)
|   |   |   feature9 > 0.5333: classG (45.01/11.5)
feature3 = classF
|   feature2 = classA
|   |   predS = classA
|   |   |   feature9 <= 0.5333
|   |   |   |   feature9 <= 0.5: classA (8.2/3.43)
|   |   |   |   feature9 > 0.5: classC (17.67/5.83)
|   |   |   feature9 > 0.5333
|   |   |   |   feature8 <= 0.7333
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature6 <= 0.6: classF (9.51/2.68)
|   |   |   |   |   |   feature6 > 0.6: classE (6.98/2.09)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature8 <= 0.3333: classE (7.17/2.11)
|   |   |   |   |   |   feature8 > 0.3333: classA (33.04/6.14)
|   |   |   |   feature8 > 0.7333
|   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.5667: classF (13.29/2.95)
|   |   |   |   |   |   |   feature6 > 0.5667: classA (9.7/6.98)
|   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   feature8 <= 0.9667: classA (3.68/0.48)
|   |   |   |   |   |   |   feature8 > 0.9667: classF (57.85/1.59)
|   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   feature6 <= 0.4667: classF (94.55/31.06)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classB (6.66/3.58)
|   |   |   |   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   |   |   |   feature5 = classA: classA (6.11/2.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classE: classA (0.0)
|   |   |   |   |   |   |   |   |   |   feature5 = classF: classF (3.9/0.91)
|   |   |   |   |   |   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   |   |   feature6 <= 0.6667: classA (11.66/5.16)
|   |   |   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classA (4.95/1.98)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.9333: classC (7.75/3.52)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.92: classF (5.81/0.18)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.92: classA (9.87/1.38)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.9333: classA (3.69/0.52)
|   |   |   |   |   |   |   |   |   |   |   feature8 > 0.9333: classF (23.03/0.54)
|   |   |   |   |   |   |   |   |   feature6 > 0.8333: classA (5.68/0.72)
|   |   |   |   |   |   |   |   feature8 > 0.9667: classA (10.0/1.38)
|   |   predS = classB
|   |   |   prevPredS = classA: classC (4.38/2.37)
|   |   |   prevPredS = classB: classA (56.05/12.16)
|   |   |   prevPredS = classC: classB (0.62/0.16)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classA (0.0)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classC (16.27/8.42)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature9 <= 0.4667: classE (11.45/7.35)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature6 <= 0.3667: classE (3.29/1.75)
|   |   |   |   |   |   feature6 > 0.3667: classC (7.54/3.93)
|   |   |   |   feature6 > 0.7333: classB (5.6/3.19)
|   |   predS = classD
|   |   |   feature7 <= 0.52
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.5: classD (28.75/13.85)
|   |   |   |   |   |   feature9 > 0.5: classC (7.77/3.89)
|   |   |   |   |   feature9 > 0.6333: classD (55.01/26.51)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.5333: classG (3.36/1.52)
|   |   |   |   |   feature6 > 0.5333: classD (3.34/2.01)
|   |   |   |   prevPredS = classD: classG (11.36/6.14)
|   |   |   |   prevPredS = classE: classG (0.84/0.25)
|   |   |   |   prevPredS = classF: classF (2.19/1.24)
|   |   |   |   prevPredS = classG: classG (5.48/1.79)
|   |   |   feature7 > 0.52
|   |   |   |   feature9 <= 0.8667: classF (12.64/5.85)
|   |   |   |   feature9 > 0.8667
|   |   |   |   |   feature6 <= 0.4: classA (2.88/0.79)
|   |   |   |   |   feature6 > 0.4: classG (2.29/0.87)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (49.2/12.99)
|   |   |   feature6 > 0.3333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.9333: classC (32.4/20.45)
|   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   feature6 <= 0.6333: classD (81.75/47.58)
|   |   |   |   |   |   feature6 > 0.6333: classA (7.97/1.01)
|   |   |   |   prevPredS = classB: classA (0.64/0.27)
|   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   prevPredS = classD: classA (4.21/3.11)
|   |   |   |   prevPredS = classE: classA (23.45/13.34)
|   |   |   |   prevPredS = classF: classF (13.79/7.65)
|   |   |   |   prevPredS = classG: classE (24.59/15.78)
|   |   predS = classF
|   |   |   feature6 <= 0.2667: classG (17.42/2.77)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   feature9 <= 0.7
|   |   |   |   |   |   |   feature7 <= 0.64: classA (9.55/3.72)
|   |   |   |   |   |   |   feature7 > 0.64: classF (3.99/1.05)
|   |   |   |   |   |   feature9 > 0.7: classE (19.88/11.3)
|   |   |   |   |   feature9 > 0.8667
|   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   feature7 <= 0.84: classF (3.86/0.56)
|   |   |   |   |   |   |   feature7 > 0.84: classA (11.0/2.1)
|   |   |   |   |   |   feature6 > 0.4: classF (7.92)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classD (11.16/3.84)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classG (20.15/5.5)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classA (11.64/3.11)
|   |   |   |   |   |   |   feature6 > 0.5667: classF (26.66/5.7)
|   |   predS = classG
|   |   |   feature8 <= 0.5667
|   |   |   |   feature6 <= 0.4667: classG (15.05/6.27)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333: classD (11.54/6.65)
|   |   |   |   |   feature6 > 0.5333: classG (9.75/5.12)
|   |   |   feature8 > 0.5667
|   |   |   |   feature6 <= 0.5: classG (20.88/10.4)
|   |   |   |   feature6 > 0.5: classA (22.04/11.6)
|   feature2 = classB
|   |   predS = classA
|   |   |   feature6 <= 0.5667: classB (4.46/1.84)
|   |   |   feature6 > 0.5667: classA (4.61/3.29)
|   |   predS = classB
|   |   |   feature5 = classA: classB (0.0)
|   |   |   feature5 = classB: classB (39.41/10.43)
|   |   |   feature5 = classC: classC (13.8/3.56)
|   |   |   feature5 = classD: classB (0.0)
|   |   |   feature5 = classE: classB (0.74/0.18)
|   |   |   feature5 = classF: classB (0.12/0.03)
|   |   |   feature5 = classG: classB (0.0)
|   |   predS = classC: classC (4.87/3.03)
|   |   predS = classD: classG (8.05/3.69)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (4.52/0.97)
|   |   |   feature6 > 0.3333: classA (14.35/9.28)
|   |   predS = classF: classG (8.96/5.48)
|   |   predS = classG: classG (4.4/1.76)
|   feature2 = classC
|   |   feature6 <= 0.2667
|   |   |   predS = classA: classD (0.21/0.03)
|   |   |   predS = classB: classB (0.0)
|   |   |   predS = classC: classB (37.06/7.98)
|   |   |   predS = classD: classB (0.0)
|   |   |   predS = classE: classE (0.11/0.02)
|   |   |   predS = classF: classG (2.59/0.42)
|   |   |   predS = classG: classG (0.56/0.28)
|   |   feature6 > 0.2667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5: classA (15.3/6.73)
|   |   |   |   feature9 > 0.5: classC (19.7/13.73)
|   |   |   prevPredS = classB: classA (13.85/6.53)
|   |   |   prevPredS = classC: classC (35.44/19.99)
|   |   |   prevPredS = classD: classG (2.88/2.12)
|   |   |   prevPredS = classE
|   |   |   |   predS = classA: classD (0.75/0.56)
|   |   |   |   predS = classB: classA (2.57/1.46)
|   |   |   |   predS = classC: classC (4.51/1.6)
|   |   |   |   predS = classD: classG (1.65/0.59)
|   |   |   |   predS = classE: classE (5.62/4.19)
|   |   |   |   predS = classF
|   |   |   |   |   feature6 <= 0.4333: classA (2.78/0.59)
|   |   |   |   |   feature6 > 0.4333: classF (2.51/0.79)
|   |   |   |   predS = classG: classG (0.93/0.47)
|   |   |   prevPredS = classF: classF (5.72/4.0)
|   |   |   prevPredS = classG: classG (3.31/1.67)
|   feature2 = classD
|   |   prevPredS = classA: classC (16.8/10.98)
|   |   prevPredS = classB: classA (8.12/3.19)
|   |   prevPredS = classC: classC (8.51/5.32)
|   |   prevPredS = classD: classD (47.7/26.8)
|   |   prevPredS = classE: classD (21.32/14.77)
|   |   prevPredS = classF: classE (11.21/5.68)
|   |   prevPredS = classG
|   |   |   predS = classA: classA (1.49/0.74)
|   |   |   predS = classB: classA (0.18/0.07)
|   |   |   predS = classC: classC (0.44/0.3)
|   |   |   predS = classD: classG (2.34/0.89)
|   |   |   predS = classE: classD (6.85/2.53)
|   |   |   predS = classF: classG (1.16/0.5)
|   |   |   predS = classG: classG (0.96/0.2)
|   feature2 = classE
|   |   prevPredS = classA
|   |   |   predS = classA
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature9 <= 0.5333: classC (11.46/6.81)
|   |   |   |   |   feature9 > 0.5333: classA (9.62/3.35)
|   |   |   |   feature9 > 0.9333: classC (6.31/1.62)
|   |   |   predS = classB: classA (3.04/1.98)
|   |   |   predS = classC: classC (11.53/5.75)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.4667: classG (8.07/3.75)
|   |   |   |   feature6 > 0.4667: classD (3.04/1.21)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3: classG (6.14/1.82)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature9 <= 0.4333: classA (8.16/2.61)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (5.31/1.08)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (3.62/2.05)
|   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   feature9 <= 0.6: classC (11.76/4.43)
|   |   |   |   |   |   |   feature9 > 0.6: classE (6.04/3.56)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7: classC (9.36/5.42)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.4667: classE (11.31/6.61)
|   |   |   |   |   feature6 > 0.4667: classG (2.57/1.49)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.4667: classE (6.19/2.01)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature9 <= 0.5333: classC (3.59/1.17)
|   |   |   |   |   feature9 > 0.5333: classG (4.5/2.01)
|   |   prevPredS = classB
|   |   |   predS = classA: classD (1.85/1.39)
|   |   |   predS = classB
|   |   |   |   feature9 <= 0.9: classB (4.39/0.63)
|   |   |   |   feature9 > 0.9: classA (27.77/4.15)
|   |   |   predS = classC: classC (2.33/1.58)
|   |   |   predS = classD: classG (3.89/1.4)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (2.66/0.34)
|   |   |   |   feature6 > 0.3333: classE (22.08/9.2)
|   |   |   predS = classF: classG (4.17/2.21)
|   |   |   predS = classG: classG (1.75/0.62)
|   |   prevPredS = classC: classA (6.82/5.03)
|   |   prevPredS = classD
|   |   |   predS = classA: classD (2.92/2.24)
|   |   |   predS = classB: classA (1.4/0.56)
|   |   |   predS = classC: classC (5.15/2.68)
|   |   |   predS = classD: classD (26.13/11.73)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (3.93/0.5)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5667: classD (51.95/14.64)
|   |   |   |   |   feature6 > 0.5667: classE (4.56/2.02)
|   |   |   predS = classF: classG (6.03/3.14)
|   |   |   predS = classG: classG (2.61/0.93)
|   |   prevPredS = classE
|   |   |   predS = classA: classE (15.45/9.66)
|   |   |   predS = classB: classA (4.26/1.71)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.6333: classC (10.02/6.3)
|   |   |   |   feature6 > 0.6333: classF (15.57/1.15)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classE (5.26/1.75)
|   |   |   |   |   feature6 > 0.4333: classG (20.45/10.01)
|   |   |   |   feature6 > 0.4667: classD (8.31/2.68)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3: classG (19.31/8.88)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature5 = classA: classE (0.73/0.22)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.13/0.04)
|   |   |   |   |   feature5 = classD: classD (14.89/6.05)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.8: classE (11.91/3.55)
|   |   |   |   |   |   |   |   feature9 > 0.8: classD (3.98/0.54)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (66.25/26.78)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classE (18.64/2.36)
|   |   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.48: classE (2.69/0.34)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.48: classD (10.24/2.33)
|   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (5.91/0.75)
|   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.7: classD (7.71/3.76)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.76: classE (2.38/0.3)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.76: classD (4.53/0.58)
|   |   |   |   |   |   |   |   |   feature7 > 0.84: classE (4.09/1.29)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classE (4.75/0.6)
|   |   |   |   |   feature5 = classF
|   |   |   |   |   |   feature8 <= 0.5: classE (8.51/2.63)
|   |   |   |   |   |   feature8 > 0.5: classF (8.87/2.65)
|   |   |   |   |   feature5 = classG: classE (0.09/0.03)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3: classG (5.02/0.63)
|   |   |   |   |   |   feature6 > 0.3: classE (3.62/2.14)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.5: classD (2.8/0.61)
|   |   |   |   |   |   feature6 > 0.5: classG (5.02/0.63)
|   |   |   |   feature6 > 0.5333: classA (3.84/1.65)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.5333: classG (7.19/2.28)
|   |   |   |   feature9 > 0.5333: classA (15.71/7.48)
|   |   prevPredS = classF: classF (22.77/15.71)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.3333: classE (7.8/3.51)
|   |   |   feature9 > 0.3333: classG (18.48/7.97)
|   feature2 = classF
|   |   prevPredS = classA
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.8333
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (4.91/1.98)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (4.09/1.92)
|   |   |   |   |   |   feature6 > 0.5333: classB (3.55/2.11)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   |   feature9 <= 0.5333: classC (7.52/1.77)
|   |   |   |   |   |   |   feature9 > 0.5333: classA (17.41/5.05)
|   |   |   |   |   |   feature9 > 0.9667: classC (11.28/2.38)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   feature9 <= 0.5333: classC (5.9/0.86)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature6 <= 0.8667: classF (22.42/0.01)
|   |   |   |   |   |   feature6 > 0.8667: classA (3.42/0.43)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.9667: classB (3.45/1.67)
|   |   |   |   feature6 > 0.9667: classA (2.98/1.14)
|   |   |   predS = classC
|   |   |   |   feature9 <= 0.6333: classC (9.5/5.11)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature6 <= 0.7333: classC (4.2/2.48)
|   |   |   |   |   feature6 > 0.7333: classA (2.96/0.64)
|   |   |   predS = classD: classG (19.69/10.31)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (12.24/3.49)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.6: classC (34.52/20.61)
|   |   |   |   |   feature6 > 0.6: classA (5.68/2.0)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature9 <= 0.5: classF (9.33/3.77)
|   |   |   |   |   feature9 > 0.5: classC (19.03/7.6)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature5 = classA: classF (19.02/10.08)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   feature5 = classD: classE (0.0)
|   |   |   |   |   feature5 = classE: classE (24.64/11.4)
|   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   predS = classG: classG (18.94/10.55)
|   |   prevPredS = classB
|   |   |   predS = classA: classD (2.15/1.61)
|   |   |   predS = classB: classA (53.32/8.85)
|   |   |   predS = classC: classC (2.71/1.84)
|   |   |   predS = classD: classG (4.52/1.62)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (3.1/0.39)
|   |   |   |   feature6 > 0.3333: classA (9.54/5.44)
|   |   |   predS = classF: classG (5.07/2.8)
|   |   |   predS = classG: classG (2.03/0.73)
|   |   prevPredS = classC
|   |   |   predS = classA: classA (5.85/1.63)
|   |   |   predS = classB: classB (0.93/0.33)
|   |   |   predS = classC: classF (3.49/1.48)
|   |   |   predS = classD
|   |   |   |   feature9 <= 0.6333: classD (4.19/1.84)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature6 <= 0.4333: classF (2.43/0.03)
|   |   |   |   |   feature6 > 0.4333: classA (2.59/1.12)
|   |   |   predS = classE: classF (5.22/3.51)
|   |   |   predS = classF: classG (1.48/0.74)
|   |   |   predS = classG: classG (0.66/0.24)
|   |   prevPredS = classD
|   |   |   feature7 <= 0.6
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.3333: classG (6.97/3.11)
|   |   |   |   |   feature6 > 0.3333: classD (34.13/23.16)
|   |   |   |   feature6 > 0.6: classD (41.74/10.08)
|   |   |   feature7 > 0.6: classF (18.92/7.28)
|   |   prevPredS = classE
|   |   |   predS = classA: classA (6.84/4.49)
|   |   |   predS = classB: classA (1.38/0.55)
|   |   |   predS = classC: classC (4.29/2.42)
|   |   |   predS = classD: classG (6.98/2.84)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (4.73/1.34)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature9 <= 0.7: classF (40.91/8.63)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature6 <= 0.4: classF (3.08/0.08)
|   |   |   |   |   |   feature6 > 0.4: classE (6.21/2.41)
|   |   |   predS = classF
|   |   |   |   feature7 <= 0.44: classE (6.35/3.16)
|   |   |   |   feature7 > 0.44: classF (13.79/4.22)
|   |   |   predS = classG: classG (8.76/4.74)
|   |   prevPredS = classF
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   feature6 <= 0.4: classA (12.06/2.05)
|   |   |   |   |   |   |   feature6 > 0.4: classF (3.22/0.18)
|   |   |   |   |   |   feature9 > 0.7333: classF (5.31/0.29)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classB (5.52/2.16)
|   |   |   |   |   |   feature6 > 0.5667: classF (6.03/2.55)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (3.84/0.49)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.7: classE (5.3/1.94)
|   |   |   |   |   |   feature6 > 0.7: classA (3.76/0.47)
|   |   |   predS = classB: classA (8.31/3.33)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.2667: classC (9.14/4.87)
|   |   |   |   |   feature6 > 0.2667: classE (9.72/4.97)
|   |   |   |   feature6 > 0.5667: classF (6.18/2.95)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.4: classA (9.41/4.43)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4333: classF (2.39)
|   |   |   |   |   |   feature6 > 0.4333: classG (36.9/15.1)
|   |   |   |   |   feature6 > 0.5333: classD (3.44/1.15)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (25.85/5.5)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.6: classF (95.74/52.23)
|   |   |   |   |   feature6 > 0.6: classA (14.34/4.44)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature9 <= 0.8: classF (64.8/16.68)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature6 <= 0.2667: classG (2.42/0.31)
|   |   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   |   feature6 <= 0.5: classA (20.02/4.79)
|   |   |   |   |   |   |   |   feature6 > 0.5: classG (4.35/2.24)
|   |   |   |   |   |   feature9 > 0.8667: classF (16.58/4.27)
|   |   |   |   feature6 > 0.5667: classF (191.16/2.93)
|   |   |   predS = classG
|   |   |   |   feature7 <= 0.76
|   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.3333: classA (5.6/0.71)
|   |   |   |   |   |   |   feature6 > 0.3333: classG (5.35/0.68)
|   |   |   |   |   |   feature6 > 0.4667: classA (14.53/4.75)
|   |   |   |   |   feature9 > 0.6: classF (3.62/1.07)
|   |   |   |   feature7 > 0.76
|   |   |   |   |   feature6 <= 0.4333: classG (7.7/3.3)
|   |   |   |   |   feature6 > 0.4333: classF (17.5/1.6)
|   |   prevPredS = classG
|   |   |   predS = classA
|   |   |   |   feature9 <= 0.4333: classA (10.69/2.38)
|   |   |   |   feature9 > 0.4333
|   |   |   |   |   feature9 <= 0.5333: classF (5.11/0.54)
|   |   |   |   |   feature9 > 0.5333: classD (3.54/1.97)
|   |   |   predS = classB: classA (1.2/0.48)
|   |   |   predS = classC: classC (2.94/1.99)
|   |   |   predS = classD
|   |   |   |   feature9 <= 0.9: classF (5.07/2.38)
|   |   |   |   feature9 > 0.9: classG (6.18/1.41)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (5.66/2.73)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5333: classA (8.61/5.68)
|   |   |   |   |   feature6 > 0.5333: classF (4.83/1.73)
|   |   |   predS = classF: classF (25.78/6.94)
|   |   |   predS = classG: classF (9.68/3.74)
|   feature2 = classG: classG (55.35/31.24)
feature3 = classG
|   feature2 = classA
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature7 <= 0.92
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   feature7 <= 0.52: classA (6.13/2.11)
|   |   |   |   |   |   |   |   feature7 > 0.52: classG (17.94/7.04)
|   |   |   |   |   |   |   feature9 > 0.5667: classA (15.62/5.54)
|   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   |   feature5 = classE: classA (0.84/0.27)
|   |   |   |   |   |   feature5 = classF: classF (2.65/0.58)
|   |   |   |   |   |   feature5 = classG
|   |   |   |   |   |   |   feature9 <= 0.5: classA (20.3/5.25)
|   |   |   |   |   |   |   feature9 > 0.5: classG (3.6/1.79)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (0.64/0.16)
|   |   |   |   |   prevPredS = classD: classA (0.01/0.0)
|   |   |   |   |   prevPredS = classE: classD (1.64/0.86)
|   |   |   |   |   prevPredS = classF: classC (1.36/0.67)
|   |   |   |   |   prevPredS = classG: classG (6.12/2.87)
|   |   |   |   feature7 > 0.92
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5333: classA (5.56/3.47)
|   |   |   |   |   |   feature6 > 0.5333: classB (3.49/1.26)
|   |   |   |   |   feature6 > 0.5667: classG (43.12/10.19)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature9 <= 0.9667: classA (15.06/6.14)
|   |   |   |   |   feature9 > 0.9667: classC (11.76/4.74)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature9 <= 0.9333: classA (8.84/2.0)
|   |   |   |   |   |   feature9 > 0.9333: classG (17.96/3.28)
|   |   |   |   |   feature6 > 0.7333: classA (29.47/5.85)
|   |   predS = classB
|   |   |   prevPredS = classA: classC (4.72/2.66)
|   |   |   prevPredS = classB: classA (57.45/12.12)
|   |   |   prevPredS = classC: classB (0.63/0.2)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classA (0.0)
|   |   |   prevPredS = classF: classA (0.0)
|   |   |   prevPredS = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classC (16.74/9.16)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature9 <= 0.4667: classE (11.72/7.79)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature6 <= 0.3667: classE (3.4/1.92)
|   |   |   |   |   |   feature6 > 0.3667: classC (7.74/4.28)
|   |   |   |   feature6 > 0.7333: classB (5.76/3.45)
|   |   predS = classD
|   |   |   feature6 <= 0.5667: classG (102.39/61.4)
|   |   |   feature6 > 0.5667: classD (29.32/9.06)
|   |   predS = classE
|   |   |   feature6 <= 0.4333: classG (80.56/30.87)
|   |   |   feature6 > 0.4333
|   |   |   |   feature5 = classA
|   |   |   |   |   feature8 <= 0.8
|   |   |   |   |   |   feature6 <= 0.4667: classC (18.5/12.33)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.6333: classE (7.07/1.38)
|   |   |   |   |   |   |   feature6 > 0.6333: classA (4.25/1.25)
|   |   |   |   |   feature8 > 0.8: classA (58.04/31.22)
|   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   feature5 = classE
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.6: classC (8.71/4.3)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.5333: classD (59.93/36.51)
|   |   |   |   |   |   |   feature6 > 0.5333: classA (7.09/1.64)
|   |   |   |   |   prevPredS = classB: classA (0.3/0.12)
|   |   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   |   prevPredS = classD: classE (1.09/0.68)
|   |   |   |   |   prevPredS = classE: classA (7.01/3.45)
|   |   |   |   |   prevPredS = classF: classF (0.23/0.15)
|   |   |   |   |   prevPredS = classG: classG (0.61/0.41)
|   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   feature5 = classG: classA (0.12/0.06)
|   |   predS = classF
|   |   |   feature6 <= 0.6333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.2667: classG (17.92/3.86)
|   |   |   |   |   |   feature6 > 0.2667: classA (13.62/8.45)
|   |   |   |   |   feature6 > 0.4333: classE (15.99/8.96)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classD (17.34/10.31)
|   |   |   |   |   |   feature6 > 0.5: classG (20.29/6.23)
|   |   |   |   |   feature6 > 0.5333: classA (18.02/8.82)
|   |   |   feature6 > 0.6333: classF (26.38/4.84)
|   |   predS = classG
|   |   |   feature9 <= 0.7333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.3: classA (14.01/3.43)
|   |   |   |   |   feature9 > 0.3
|   |   |   |   |   |   feature9 <= 0.5333: classC (9.45/3.39)
|   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.7333: classG (10.79/3.73)
|   |   |   |   |   |   |   feature6 > 0.7333: classA (6.45/0.89)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   prevPredS = classD: classG (0.08/0.02)
|   |   |   |   prevPredS = classE: classG (6.14/3.72)
|   |   |   |   prevPredS = classF: classG (6.61/1.41)
|   |   |   |   prevPredS = classG: classG (24.22/7.19)
|   |   |   feature9 > 0.7333
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.5: classG (27.21/11.1)
|   |   |   |   |   feature6 > 0.5: classA (11.2/3.56)
|   |   |   |   feature6 > 0.7: classG (68.58/12.52)
|   feature2 = classB
|   |   predS = classA
|   |   |   feature6 <= 0.5667: classB (3.31/1.24)
|   |   |   feature6 > 0.5667: classA (3.07/2.1)
|   |   predS = classB: classB (33.04/8.83)
|   |   predS = classC: classC (3.15/1.91)
|   |   predS = classD: classG (5.06/2.32)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (2.84/0.61)
|   |   |   feature6 > 0.3333: classA (9.19/6.01)
|   |   predS = classF: classG (5.63/3.44)
|   |   predS = classG: classG (2.77/1.11)
|   feature2 = classC
|   |   prevPredS = classA
|   |   |   feature9 <= 0.5: classA (10.62/4.01)
|   |   |   feature9 > 0.5: classC (8.02/5.07)
|   |   prevPredS = classB: classA (5.8/2.6)
|   |   prevPredS = classC: classC (20.02/10.65)
|   |   prevPredS = classD: classG (1.13/0.85)
|   |   prevPredS = classE: classA (14.95/11.3)
|   |   prevPredS = classF: classF (2.9/1.83)
|   |   prevPredS = classG: classG (1.18/0.56)
|   feature2 = classD
|   |   predS = classA: classA (11.54/7.97)
|   |   predS = classB: classA (8.5/2.29)
|   |   predS = classC: classC (6.47/4.11)
|   |   predS = classD
|   |   |   prevPredS = classA: classC (3.98/2.06)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classC (5.26/2.96)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.5667: classD (16.01/5.48)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature7 <= 0.72: classC (6.74/2.15)
|   |   |   |   |   feature7 > 0.72: classD (2.9/0.41)
|   |   |   prevPredS = classE: classD (1.24/0.36)
|   |   |   prevPredS = classF: classF (0.23/0.11)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.5333: classG (4.16/1.1)
|   |   |   |   feature6 > 0.5333: classD (17.87/2.26)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (6.18/1.33)
|   |   |   feature6 > 0.3333: classD (31.93/21.18)
|   |   predS = classF: classG (13.01/8.26)
|   |   predS = classG
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classG (3.58/0.94)
|   |   |   |   feature6 > 0.4333: classD (4.57/0.82)
|   |   |   feature6 > 0.4667: classG (3.77/1.7)
|   feature2 = classE
|   |   predS = classA
|   |   |   feature9 <= 0.9667: classA (35.02/20.93)
|   |   |   feature9 > 0.9667: classC (4.89/1.88)
|   |   predS = classB: classA (26.11/7.77)
|   |   predS = classC: classC (21.77/12.77)
|   |   predS = classD
|   |   |   prevPredS = classA: classC (6.11/4.08)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classD (2.95/2.07)
|   |   |   prevPredS = classD: classD (26.35/14.27)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333: classE (3.9/1.35)
|   |   |   |   |   feature6 > 0.4333: classG (4.58/1.36)
|   |   |   |   feature6 > 0.4667: classD (5.44/1.66)
|   |   |   prevPredS = classF: classF (0.97/0.53)
|   |   |   prevPredS = classG: classG (11.61/6.22)
|   |   predS = classE
|   |   |   feature6 <= 0.3: classG (24.27/9.94)
|   |   |   feature6 > 0.3
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.4333: classA (5.33/1.31)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature9 <= 0.5: classD (5.72/2.13)
|   |   |   |   |   |   feature9 > 0.5: classC (13.23/6.06)
|   |   |   |   prevPredS = classB: classE (15.96/5.37)
|   |   |   |   prevPredS = classC: classE (0.03/0.01)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.4667: classD (13.23/7.54)
|   |   |   |   |   feature6 > 0.4667: classG (22.05/6.95)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature9 <= 0.8: classE (8.86/2.87)
|   |   |   |   |   |   feature9 > 0.8: classD (4.18/0.58)
|   |   |   |   |   feature6 > 0.4333: classE (96.69/53.96)
|   |   |   |   prevPredS = classF: classE (2.08/0.91)
|   |   |   |   prevPredS = classG: classG (1.67/0.88)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.2667: classG (7.16/1.14)
|   |   |   |   feature6 > 0.2667: classE (11.18/6.91)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (5.33/2.32)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (7.52/1.5)
|   |   |   |   |   feature6 > 0.5333: classA (8.24/4.73)
|   |   predS = classG
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.4667: classE (5.84/2.34)
|   |   |   |   feature9 > 0.4667: classG (5.13/2.92)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0)
|   |   |   prevPredS = classD: classG (0.03/0.01)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.5333: classG (5.09/1.53)
|   |   |   |   feature9 > 0.5333: classA (12.35/5.45)
|   |   |   prevPredS = classF: classF (3.64/1.78)
|   |   |   prevPredS = classG: classG (2.28/0.45)
|   feature2 = classF
|   |   feature5 = classA: classD (16.99/10.95)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classA (6.0/3.01)
|   |   feature5 = classD: classD (1.64/1.0)
|   |   feature5 = classE
|   |   |   predS = classA: classC (2.29/1.87)
|   |   |   predS = classB: classA (2.4/0.65)
|   |   |   predS = classC: classC (1.72/1.15)
|   |   |   predS = classD: classF (4.9/2.44)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (2.69/1.32)
|   |   |   |   feature6 > 0.3333: classA (5.31/3.36)
|   |   |   predS = classF: classE (14.54/5.02)
|   |   |   predS = classG: classG (7.95/1.68)
|   |   feature5 = classF: classF (18.06/10.57)
|   |   feature5 = classG: classF (4.05/2.0)
|   feature2 = classG
|   |   prevPredS = classA
|   |   |   predS = classA
|   |   |   |   feature9 <= 0.5: classA (17.63/3.42)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.6333: classC (17.83/6.7)
|   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   feature9 <= 0.9667: classA (14.32/4.02)
|   |   |   |   |   |   feature9 > 0.9667: classC (9.89/2.34)
|   |   |   predS = classB: classA (4.68/3.13)
|   |   |   predS = classC
|   |   |   |   feature9 <= 0.8333
|   |   |   |   |   feature9 <= 0.6333: classC (8.69/3.33)
|   |   |   |   |   feature9 > 0.6333: classA (3.73/1.6)
|   |   |   |   feature9 > 0.8333
|   |   |   |   |   feature6 <= 0.5667: classC (2.7/1.72)
|   |   |   |   |   feature6 > 0.5667: classG (9.06/1.59)
|   |   |   predS = classD: classG (13.74/6.97)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (9.2/2.88)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5333: classC (26.35/15.35)
|   |   |   |   |   feature6 > 0.5333: classA (4.76/2.1)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7: classC (13.86/7.2)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classG (2.57/0.95)
|   |   |   |   |   |   feature6 > 0.4333: classE (15.42/7.87)
|   |   |   |   |   feature6 > 0.4667: classG (3.85/2.23)
|   |   |   predS = classG
|   |   |   |   feature9 <= 0.5333: classC (4.61/1.94)
|   |   |   |   feature9 > 0.5333: classG (9.74/3.91)
|   |   prevPredS = classB
|   |   |   predS = classA: classD (1.83/1.37)
|   |   |   predS = classB: classA (45.26/7.51)
|   |   |   predS = classC: classC (2.3/1.56)
|   |   |   predS = classD: classG (3.84/1.38)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (2.63/0.33)
|   |   |   |   feature6 > 0.3333: classA (8.1/4.62)
|   |   |   predS = classF: classG (4.3/2.37)
|   |   |   predS = classG: classG (1.75/0.62)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333: classG (12.63/5.36)
|   |   |   feature6 > 0.5333: classA (7.3/4.74)
|   |   prevPredS = classD
|   |   |   predS = classA: classD (0.93/0.7)
|   |   |   predS = classB: classA (0.47/0.19)
|   |   |   predS = classC: classD (1.4/1.03)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.4333: classD (8.52/1.9)
|   |   |   |   feature6 > 0.4333: classG (7.65/3.93)
|   |   |   predS = classE: classA (6.86/5.22)
|   |   |   predS = classF: classG (7.4/2.09)
|   |   |   predS = classG: classG (1.88/0.44)
|   |   prevPredS = classE
|   |   |   predS = classA: classA (5.1/2.55)
|   |   |   predS = classB: classA (0.43/0.17)
|   |   |   predS = classC: classC (1.8/0.8)
|   |   |   predS = classD: classG (2.46/0.79)
|   |   |   predS = classE: classE (9.91/5.66)
|   |   |   predS = classF: classE (3.34/2.04)
|   |   |   predS = classG: classG (8.75/3.87)
|   |   prevPredS = classF
|   |   |   predS = classA: classA (23.77/5.82)
|   |   |   predS = classB: classA (1.01/0.4)
|   |   |   predS = classC: classE (4.02/2.33)
|   |   |   predS = classD: classG (7.47/3.2)
|   |   |   predS = classE: classG (17.43/11.62)
|   |   |   predS = classF: classG (12.77/3.75)
|   |   |   predS = classG: classG (8.57/1.51)
|   |   prevPredS = classG
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   feature6 <= 0.4333: classA (6.3/1.27)
|   |   |   |   |   |   feature6 > 0.4333: classG (3.7/2.32)
|   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   feature6 <= 0.5: classG (15.65/4.12)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (3.18/0.4)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (13.87/4.89)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (4.44/0.82)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature6 <= 0.9333: classA (7.59/1.48)
|   |   |   |   |   |   feature6 > 0.9333: classG (5.72/1.02)
|   |   |   predS = classB
|   |   |   |   feature6 <= 0.9667: classB (3.0/1.27)
|   |   |   |   feature6 > 0.9667: classA (6.13/1.5)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667
|   |   |   |   |   feature6 <= 0.2333: classG (3.29/0.8)
|   |   |   |   |   feature6 > 0.2333: classC (9.45/4.82)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5667: classE (8.54/4.99)
|   |   |   |   |   feature6 > 0.5667: classB (3.65/2.13)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.3333
|   |   |   |   |   feature9 <= 0.6: classA (6.59/1.61)
|   |   |   |   |   feature9 > 0.6: classG (6.89/1.68)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5333: classG (48.97/11.53)
|   |   |   |   |   feature6 > 0.5333: classD (2.77/0.48)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3333: classG (25.34/3.2)
|   |   |   |   |   feature6 > 0.3333: classD (4.09/1.71)
|   |   |   |   feature6 > 0.4333: classA (72.83/41.58)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.3: classG (10.79/1.36)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classA (5.38/3.01)
|   |   |   |   |   |   feature6 > 0.4333: classD (5.85/1.23)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classG (11.89/2.26)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classA (7.5/2.88)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (4.18/0.79)
|   |   |   predS = classG
|   |   |   |   feature6 <= 0.4333: classA (34.91/15.34)
|   |   |   |   feature6 > 0.4333: classG (328.3/52.47)

Number of Leaves  : \t1817

Size of the tree : \t2868


Weight: 1.09

J48 pruned tree
------------------

feature3 = classA
|   predS = classA
|   |   feature6 <= 0.7667
|   |   |   feature8 <= 0.4333
|   |   |   |   prevPredS = classA: classE (15.61/10.53)
|   |   |   |   prevPredS = classB: classB (0.07/0.03)
|   |   |   |   prevPredS = classC: classC (0.75/0.51)
|   |   |   |   prevPredS = classD: classG (6.45/3.02)
|   |   |   |   prevPredS = classE: classE (1.46/1.08)
|   |   |   |   prevPredS = classF: classC (0.59/0.38)
|   |   |   |   prevPredS = classG: classF (1.03/0.77)
|   |   |   feature8 > 0.4333: classA (28.65/18.64)
|   |   feature6 > 0.7667: classA (119.03/32.42)
|   predS = classB
|   |   feature9 <= 0.9: classB (3.84/2.37)
|   |   feature9 > 0.9: classA (29.18/13.44)
|   predS = classC
|   |   feature6 <= 0.2667: classA (12.91/6.8)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.6333: classF (16.03/11.45)
|   |   |   feature6 > 0.6333
|   |   |   |   feature6 <= 0.7333: classC (8.26/2.77)
|   |   |   |   feature6 > 0.7333: classB (5.42/2.85)
|   predS = classD: classF (57.47/33.31)
|   predS = classE
|   |   feature6 <= 0.3: classG (25.6/12.93)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classD (9.08/5.66)
|   |   |   |   feature6 > 0.4333: classC (100.48/62.58)
|   |   |   feature6 > 0.4667: classF (23.53/17.28)
|   predS = classF
|   |   feature6 <= 0.4333
|   |   |   feature6 <= 0.3: classG (8.03/2.78)
|   |   |   feature6 > 0.3: classA (7.09/4.06)
|   |   feature6 > 0.4333
|   |   |   feature6 <= 0.4667: classB (12.74/6.63)
|   |   |   feature6 > 0.4667: classF (25.71/14.75)
|   predS = classG
|   |   feature2 = classA: classA (38.71/21.46)
|   |   feature2 = classB: classA (0.0)
|   |   feature2 = classC: classC (0.0/0.0)
|   |   feature2 = classD: classG (0.49/0.27)
|   |   feature2 = classE: classG (8.45/4.93)
|   |   feature2 = classF: classF (0.89/0.48)
|   |   feature2 = classG: classG (2.64/1.28)
feature3 = classB
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   feature9 <= 0.5: classA (5.09/1.42)
|   |   |   |   |   |   feature9 > 0.5: classG (5.94/2.92)
|   |   |   |   |   feature9 > 0.6: classA (8.31/2.32)
|   |   |   |   feature6 > 0.4667: classB (40.91/21.92)
|   |   |   prevPredS = classB
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   |   feature9 <= 0.5: classB (9.57/2.56)
|   |   |   |   |   |   |   feature9 > 0.5: classA (8.17/2.53)
|   |   |   |   |   |   feature7 > 0.88: classB (14.74/3.93)
|   |   |   |   |   feature6 > 0.5667: classD (4.24/2.65)
|   |   |   |   feature9 > 0.9667: classA (37.66/14.11)
|   |   |   prevPredS = classC: classA (8.28/3.88)
|   |   |   prevPredS = classD: classA (0.71/0.27)
|   |   |   prevPredS = classE: classF (8.97/6.72)
|   |   |   prevPredS = classF: classC (3.06/1.55)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.5: classA (4.56/1.71)
|   |   |   |   feature9 > 0.5: classD (5.05/3.28)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7: classE (54.84/33.58)
|   |   |   feature6 > 0.7: classA (27.15/15.13)
|   predS = classB
|   |   feature9 <= 0.5333
|   |   |   feature2 = classA: classB (0.14/0.07)
|   |   |   feature2 = classB: classB (23.0/12.42)
|   |   |   feature2 = classC: classC (1.66/1.23)
|   |   |   feature2 = classD: classB (0.0)
|   |   |   feature2 = classE
|   |   |   |   prevPredS = classA: classC (5.87/1.86)
|   |   |   |   prevPredS = classB: classE (9.62/2.96)
|   |   |   |   prevPredS = classC: classE (0.0)
|   |   |   |   prevPredS = classD: classE (0.0)
|   |   |   |   prevPredS = classE: classE (0.08/0.02)
|   |   |   |   prevPredS = classF: classE (0.0)
|   |   |   |   prevPredS = classG: classE (0.0)
|   |   |   feature2 = classF: classB (0.0)
|   |   |   feature2 = classG: classB (0.0)
|   |   feature9 > 0.5333
|   |   |   feature6 <= 0.4667
|   |   |   |   prevPredS = classA: classA (5.68/2.31)
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature9 <= 0.9667: classB (5.13/1.37)
|   |   |   |   |   feature9 > 0.9667: classA (69.14/37.16)
|   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE: classA (0.0)
|   |   |   |   prevPredS = classF: classA (0.0)
|   |   |   |   prevPredS = classG: classG (0.08/0.02)
|   |   |   feature6 > 0.4667: classB (353.58/145.27)
|   predS = classC
|   |   feature6 <= 0.2667: classA (44.91/23.65)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.4: classE (38.14/24.19)
|   |   |   feature6 > 0.4
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature6 <= 0.6333: classE (28.38/14.85)
|   |   |   |   |   feature6 > 0.6333: classB (14.97/9.62)
|   |   |   |   feature9 > 0.7: classB (28.99/17.15)
|   predS = classD
|   |   feature6 <= 0.2333
|   |   |   feature9 <= 0.9333: classB (26.4/7.29)
|   |   |   feature9 > 0.9333: classA (4.44/1.11)
|   |   feature6 > 0.2333
|   |   |   feature6 <= 0.4333: classE (40.02/20.41)
|   |   |   feature6 > 0.4333: classF (173.19/96.61)
|   predS = classE
|   |   feature6 <= 0.3: classG (89.08/44.98)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classD (31.68/19.76)
|   |   |   |   feature6 > 0.4333: classC (349.59/217.74)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.6667: classE (33.84/23.21)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classA (36.62/18.33)
|   |   |   |   |   feature6 > 0.7: classE (11.42/6.11)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4333
|   |   |   |   feature6 <= 0.2667: classG (25.14/6.85)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.3333: classB (19.34/11.97)
|   |   |   |   |   feature6 > 0.3333: classF (14.83/8.63)
|   |   |   feature6 > 0.4333: classB (44.32/23.06)
|   |   feature6 > 0.4667
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.5: classF (19.22/9.57)
|   |   |   |   feature6 > 0.5: classG (34.8/16.5)
|   |   |   feature6 > 0.5333: classF (35.45/21.68)
|   predS = classG: classF (117.96/75.53)
feature3 = classC
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature6 <= 0.6: classA (102.44/71.61)
|   |   |   feature6 > 0.6: classD (20.02/9.92)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7: classE (79.2/49.29)
|   |   |   feature6 > 0.7: classA (25.15/13.18)
|   predS = classB
|   |   feature6 <= 0.9667: classB (40.8/28.61)
|   |   feature6 > 0.9667: classA (142.19/63.99)
|   predS = classC
|   |   feature6 <= 0.8333
|   |   |   feature6 <= 0.5
|   |   |   |   feature7 <= 0.8
|   |   |   |   |   feature6 <= 0.2667: classA (29.96/15.45)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.4667: classC (42.65/27.27)
|   |   |   |   |   |   feature6 > 0.4667: classD (11.01/5.9)
|   |   |   |   feature7 > 0.8
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.2667: classA (36.01/18.72)
|   |   |   |   |   |   feature6 > 0.2667: classF (28.89/20.16)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature8 <= 0.9667: classC (3.49/1.69)
|   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   feature7 <= 0.88: classA (15.63/5.81)
|   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   feature9 <= 0.9333: classC (5.7/1.99)
|   |   |   |   |   |   |   |   feature9 > 0.9333: classA (10.99/3.97)
|   |   |   feature6 > 0.5
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.7333: classC (10.31/4.01)
|   |   |   |   |   |   feature9 > 0.7333: classA (16.39/7.73)
|   |   |   |   |   prevPredS = classB: classC (0.09/0.03)
|   |   |   |   |   prevPredS = classC: classC (222.53/111.52)
|   |   |   |   |   prevPredS = classD: classC (1.0/0.34)
|   |   |   |   |   prevPredS = classE: classC (3.99/1.19)
|   |   |   |   |   prevPredS = classF: classE (5.69/3.43)
|   |   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   |   feature6 > 0.7333: classB (40.01/27.45)
|   |   feature6 > 0.8333: classC (261.13/73.23)
|   predS = classD: classF (374.29/231.67)
|   predS = classE
|   |   feature6 <= 0.3333
|   |   |   feature6 <= 0.2667: classE (6.55/4.38)
|   |   |   feature6 > 0.2667: classG (130.65/69.32)
|   |   feature6 > 0.3333
|   |   |   feature6 <= 0.6
|   |   |   |   feature6 <= 0.4: classD (38.31/25.05)
|   |   |   |   feature6 > 0.4: classC (566.07/376.15)
|   |   |   feature6 > 0.6: classA (86.96/54.21)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classG (18.92/5.97)
|   |   |   |   |   feature6 > 0.2667: classA (9.88/5.61)
|   |   |   |   feature6 > 0.4333: classB (62.52/32.61)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (12.69/6.21)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (20.96/8.01)
|   |   |   |   |   feature6 > 0.5333: classA (20.63/11.58)
|   |   prevPredS = classB: classF (5.03/3.65)
|   |   prevPredS = classC
|   |   |   feature9 <= 0.8: classA (8.17/5.04)
|   |   |   feature9 > 0.8: classC (6.38/3.65)
|   |   prevPredS = classD: classF (18.55/13.23)
|   |   prevPredS = classE: classF (26.92/14.92)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.2333: classA (13.81/3.46)
|   |   |   feature6 > 0.2333: classF (37.15/20.9)
|   |   prevPredS = classG: classF (27.76/12.5)
|   predS = classG
|   |   feature6 <= 0.4667: classG (69.37/35.55)
|   |   feature6 > 0.4667: classF (74.48/39.55)
feature3 = classD
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.6667: classD (45.08/26.8)
|   |   |   |   feature9 > 0.6667
|   |   |   |   |   feature5 = classA
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.9333: classF (5.87/2.28)
|   |   |   |   |   |   |   feature9 > 0.9333: classD (4.82/1.33)
|   |   |   |   |   |   feature6 > 0.5333: classA (23.86/12.65)
|   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   feature5 = classD: classA (4.17/1.91)
|   |   |   |   |   feature5 = classE: classA (2.82/1.29)
|   |   |   |   |   feature5 = classF: classF (5.02/1.21)
|   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   feature2 = classB
|   |   |   |   feature6 <= 0.5667: classB (5.62/2.57)
|   |   |   |   feature6 > 0.5667: classA (2.8/1.76)
|   |   |   feature2 = classC: classC (7.68/4.89)
|   |   |   feature2 = classD
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (5.4/1.54)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classG (7.01/3.33)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (4.9/2.34)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classB (4.11/1.31)
|   |   |   |   |   |   |   feature6 > 0.5667: classA (22.16/11.7)
|   |   |   |   |   feature7 > 0.64
|   |   |   |   |   |   feature6 <= 0.6: classG (4.78/3.2)
|   |   |   |   |   |   feature6 > 0.6: classD (5.91/1.94)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classA (3.76/1.64)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   feature6 <= 0.4333: classD (13.71/3.56)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (4.56/1.14)
|   |   |   |   |   |   |   feature6 > 0.5333: classB (6.31/4.73)
|   |   |   |   |   feature7 > 0.48: classA (30.18/13.19)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature8 <= 0.4667: classD (9.71/4.61)
|   |   |   |   |   feature8 > 0.4667
|   |   |   |   |   |   feature6 <= 0.3: classD (3.08/0.77)
|   |   |   |   |   |   feature6 > 0.3: classA (15.51/7.06)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 <= 0.52
|   |   |   |   |   |   feature6 <= 0.6: classC (2.72/1.7)
|   |   |   |   |   |   feature6 > 0.6: classA (4.13/1.47)
|   |   |   |   |   feature7 > 0.52: classD (8.51/4.57)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.5667: classD (5.39/2.92)
|   |   |   |   |   feature6 > 0.5667: classA (7.97/5.38)
|   |   |   feature2 = classE
|   |   |   |   feature8 <= 0.5333
|   |   |   |   |   feature6 <= 0.3: classD (5.0/1.36)
|   |   |   |   |   feature6 > 0.3: classF (8.4/6.3)
|   |   |   |   feature8 > 0.5333: classA (49.25/30.66)
|   |   |   feature2 = classF: classA (2.51/1.36)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.4: classD (10.25/2.96)
|   |   |   |   feature6 > 0.4: classG (8.27/5.81)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   feature9 <= 0.5333: classE (17.92/12.01)
|   |   |   |   |   feature9 > 0.5333: classA (83.16/51.5)
|   |   |   |   feature9 > 0.9667: classE (107.5/72.04)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   |   feature8 <= 0.6: classD (13.81/5.49)
|   |   |   |   |   |   |   feature8 > 0.6
|   |   |   |   |   |   |   |   feature6 <= 0.7667: classD (18.39/8.98)
|   |   |   |   |   |   |   |   feature6 > 0.7667: classA (7.37/2.05)
|   |   |   |   |   |   feature9 > 0.9667: classA (4.88/1.22)
|   |   |   |   |   prevPredS = classB: classA (0.04/0.01)
|   |   |   |   |   prevPredS = classC: classA (0.59/0.15)
|   |   |   |   |   prevPredS = classD: classA (0.33/0.09)
|   |   |   |   |   prevPredS = classE: classA (0.04/0.01)
|   |   |   |   |   prevPredS = classF: classA (0.79/0.2)
|   |   |   |   |   prevPredS = classG: classA (3.12/0.78)
|   |   |   |   feature6 > 0.8667: classA (26.14/7.13)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333: classC (16.63/8.36)
|   |   |   feature9 > 0.6333: classB (11.99/7.37)
|   |   prevPredS = classB
|   |   |   feature9 <= 0.9: classB (13.32/4.56)
|   |   |   feature9 > 0.9
|   |   |   |   feature6 <= 0.9667
|   |   |   |   |   feature6 <= 0.5333: classA (7.0/1.75)
|   |   |   |   |   feature6 > 0.5333: classB (25.69/11.31)
|   |   |   |   feature6 > 0.9667: classA (294.26/127.74)
|   |   prevPredS = classC: classB (2.96/1.02)
|   |   prevPredS = classD: classD (0.71/0.29)
|   |   prevPredS = classE: classA (4.03/2.58)
|   |   prevPredS = classF: classA (0.0)
|   |   prevPredS = classG: classG (0.32/0.13)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classE (10.11/2.76)
|   |   |   feature6 > 0.2333: classA (143.89/75.1)
|   |   feature6 > 0.2667
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.3333: classD (12.36/6.43)
|   |   |   |   |   |   feature6 > 0.3333: classG (9.79/4.75)
|   |   |   |   |   feature6 > 0.3667: classF (41.23/24.61)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.8: classA (36.53/22.39)
|   |   |   |   |   feature6 > 0.8: classB (10.05/5.39)
|   |   |   prevPredS = classB: classC (1.14/0.65)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature6 <= 0.3333: classD (6.41/3.28)
|   |   |   |   |   |   feature6 > 0.3333: classE (10.15/5.81)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.5: classD (11.02/2.76)
|   |   |   |   |   |   feature6 > 0.5: classE (4.18/1.05)
|   |   |   |   feature6 > 0.5333: classD (41.96/24.76)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (12.49/5.66)
|   |   |   |   |   |   |   feature6 > 0.3333: classE (15.39/8.8)
|   |   |   |   |   |   feature6 > 0.4: classD (11.43/2.86)
|   |   |   |   |   feature6 > 0.5: classE (6.46/1.71)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature7 <= 0.48: classC (4.01/1.83)
|   |   |   |   |   feature7 > 0.48: classD (61.94/25.29)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.4333: classD (13.91/8.8)
|   |   |   |   feature9 > 0.4333: classC (13.81/7.94)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.6: classE (12.54/5.67)
|   |   |   |   feature6 > 0.6: classB (3.53/2.17)
|   |   |   prevPredS = classG: classD (0.0)
|   predS = classD
|   |   feature6 <= 0.5667
|   |   |   feature6 <= 0.4333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   feature9 <= 0.6333: classC (6.55/2.34)
|   |   |   |   |   |   feature9 > 0.6333: classD (3.05/0.92)
|   |   |   |   |   feature9 > 0.8333
|   |   |   |   |   |   feature9 <= 0.9333: classA (8.48/2.57)
|   |   |   |   |   |   feature9 > 0.9333: classE (6.27/2.61)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classD (4.23/1.29)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature8 <= 0.9667: classD (2.88/0.72)
|   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (26.44/6.8)
|   |   |   |   |   |   |   feature9 > 0.7333: classD (2.83/0.71)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   feature7 <= 0.84: classD (18.1/7.66)
|   |   |   |   |   |   |   feature7 > 0.84: classA (5.69/2.41)
|   |   |   |   |   |   feature6 > 0.3667: classD (21.74/6.53)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature9 <= 0.9: classD (26.34/13.06)
|   |   |   |   |   feature9 > 0.9: classA (3.55/1.08)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature6 <= 0.4: classF (3.19/0.86)
|   |   |   |   |   |   feature6 > 0.4: classA (13.16/3.29)
|   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   feature2 = classD: classD (9.09/3.61)
|   |   |   |   |   feature2 = classE: classD (1.26/0.5)
|   |   |   |   |   feature2 = classF: classF (0.08/0.0)
|   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.5: classD (11.95/3.62)
|   |   |   |   |   feature9 > 0.5: classG (16.81/5.1)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classF (545.58/307.84)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature7 <= 0.96: classD (154.56/89.42)
|   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   feature9 <= 0.6333: classA (6.78/3.51)
|   |   |   |   |   |   feature9 > 0.6333: classD (4.87/1.87)
|   |   feature6 > 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature9 <= 0.5: classD (6.88/1.72)
|   |   |   |   |   feature9 > 0.5: classC (9.2/2.5)
|   |   |   |   feature9 > 0.5333: classD (7.82/1.96)
|   |   |   prevPredS = classB: classD (0.08/0.02)
|   |   |   prevPredS = classC
|   |   |   |   feature9 <= 0.9
|   |   |   |   |   feature7 <= 0.28: classE (5.74/2.91)
|   |   |   |   |   feature7 > 0.28: classD (21.1/8.09)
|   |   |   |   feature9 > 0.9: classA (6.72/1.84)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature6 <= 0.9: classD (26.9/6.73)
|   |   |   |   |   feature6 > 0.9
|   |   |   |   |   |   feature9 <= 0.4667: classF (7.69/1.59)
|   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.9333: classC (11.04/5.98)
|   |   |   |   |   |   |   feature6 > 0.9333: classD (2.86/0.72)
|   |   |   |   feature9 > 0.6333: classD (183.06/47.5)
|   |   |   prevPredS = classE: classD (6.56/1.64)
|   |   |   prevPredS = classF: classD (0.82/0.21)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.6333: classG (3.29/1.13)
|   |   |   |   feature6 > 0.6333: classD (5.54/1.57)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6333: classC (23.31/12.51)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   feature6 <= 0.2333: classE (3.36/0.84)
|   |   |   |   |   |   feature6 > 0.2333: classG (5.68/1.42)
|   |   |   |   |   feature7 > 0.6: classE (15.87/8.51)
|   |   |   prevPredS = classB: classD (62.16/33.35)
|   |   |   prevPredS = classC: classC (6.96/3.73)
|   |   |   prevPredS = classD: classD (13.74/7.37)
|   |   |   prevPredS = classE: classE (297.32/159.54)
|   |   |   prevPredS = classF: classE (47.59/25.54)
|   |   |   prevPredS = classG: classE (16.26/8.91)
|   |   feature6 > 0.3
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3333: classA (6.76/1.69)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (3.91/1.28)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classD (6.76/1.69)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classC (19.39/11.36)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classD (4.34/2.27)
|   |   |   |   |   feature9 > 0.5: classC (126.67/56.77)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   feature6 <= 0.5: classD (271.23/162.29)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.6333: classE (3.97/0.99)
|   |   |   |   |   |   |   feature6 > 0.6333: classA (14.67/6.19)
|   |   |   |   |   |   feature6 > 0.7: classE (5.23/1.31)
|   |   |   prevPredS = classB
|   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   feature2 = classB
|   |   |   |   |   feature6 <= 0.5333: classC (3.71/2.27)
|   |   |   |   |   feature6 > 0.5333: classB (3.64/1.12)
|   |   |   |   feature2 = classC: classA (7.22/3.94)
|   |   |   |   feature2 = classD: classD (0.02/0.01)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4667: classE (41.2/24.08)
|   |   |   |   |   feature6 > 0.4667: classA (2.74/0.85)
|   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   feature2 = classG: classE (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classC (7.91/4.58)
|   |   |   |   feature2 = classD: classD (0.01/0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4667: classC (8.86/5.26)
|   |   |   |   |   feature6 > 0.4667: classE (9.57/2.93)
|   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   feature2 = classG: classE (0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.4: classA (7.04/3.77)
|   |   |   |   |   |   feature6 > 0.4: classC (9.06/5.27)
|   |   |   |   |   feature9 > 0.3667: classD (463.51/289.74)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.4333: classE (30.35/12.67)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (7.42/3.26)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   |   feature6 <= 0.6333: classD (5.44/3.36)
|   |   |   |   |   |   |   |   |   feature6 > 0.6333: classA (4.35/1.09)
|   |   |   |   |   |   |   |   feature6 > 0.7: classE (9.72/2.43)
|   |   |   |   |   |   |   feature5 = classF: classF (0.28/0.05)
|   |   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   feature8 > 0.6333: classD (42.0/21.08)
|   |   |   prevPredS = classE
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   feature6 <= 0.4667: classC (9.09/5.5)
|   |   |   |   |   |   feature6 > 0.4667: classA (9.33/3.92)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.4667: classC (6.15/3.72)
|   |   |   |   |   |   feature6 > 0.4667: classD (6.31/2.07)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classE (2.45/1.45)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature5 = classA: classC (0.0)
|   |   |   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   |   |   feature5 = classC: classC (0.0)
|   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (6.44/2.57)
|   |   |   |   |   |   |   feature6 > 0.4333: classC (44.95/30.9)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature6 <= 0.4: classA (4.66/1.38)
|   |   |   |   |   |   |   feature6 > 0.4: classC (9.49/5.63)
|   |   |   |   |   |   feature5 = classF: classC (0.0)
|   |   |   |   |   |   feature5 = classG: classC (0.0)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature7 <= 0.4: classD (9.26/3.58)
|   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   feature7 <= 0.52: classE (12.05/4.81)
|   |   |   |   |   |   |   feature7 > 0.52: classD (4.99/1.93)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.44/0.3)
|   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   feature9 <= 0.6: classD (38.99/26.15)
|   |   |   |   |   |   |   feature9 > 0.6: classE (9.96/7.15)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.4: classE (5.32/1.88)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6667: classD (11.22/3.37)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6667: classE (4.28/1.51)
|   |   |   |   |   |   |   |   |   feature7 > 0.56: classE (12.3/4.35)
|   |   |   |   |   |   |   |   feature9 > 0.8: classD (7.29/2.19)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classD (9.02/6.33)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classE (374.1/262.24)
|   |   |   |   |   |   feature5 = classF: classD (1.73/1.24)
|   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature7 <= 0.6: classD (19.98/8.87)
|   |   |   |   |   |   |   |   feature7 > 0.6: classE (10.08/4.19)
|   |   |   |   |   |   |   feature9 > 0.6333: classE (29.67/7.43)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   feature7 <= 0.72: classD (53.95/30.53)
|   |   |   |   |   |   |   |   feature7 > 0.72: classE (7.81/4.25)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature7 <= 0.56: classE (13.12/3.81)
|   |   |   |   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   |   |   |   feature8 <= 0.5
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.7333: classD (2.09/0.82)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.7333: classE (3.88/0.97)
|   |   |   |   |   |   |   |   |   feature8 > 0.5: classD (17.03/7.2)
|   |   |   |   feature2 = classF: classE (1.42/1.02)
|   |   |   |   feature2 = classG: classG (40.8/26.92)
|   |   |   prevPredS = classF: classF (64.33/41.13)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.4333
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classD (4.74/1.27)
|   |   |   |   |   |   feature6 > 0.4333: classC (10.57/6.19)
|   |   |   |   |   feature6 > 0.5: classD (7.13/2.43)
|   |   |   |   feature9 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classE (35.58/24.43)
|   |   |   |   |   feature6 > 0.4667: classG (10.46/4.97)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature9 <= 0.3333: classE (5.37/2.89)
|   |   |   |   |   feature9 > 0.3333: classA (21.17/10.11)
|   |   |   |   feature9 > 0.5: classC (39.15/23.23)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3: classG (28.15/7.05)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (4.82/1.21)
|   |   |   |   |   |   |   |   feature6 > 0.3333: classF (3.54/0.0)
|   |   |   |   |   |   |   feature6 > 0.3667: classD (8.99/4.06)
|   |   |   |   |   feature6 > 0.4333: classB (131.25/62.46)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classD (17.67/7.12)
|   |   |   |   |   |   feature6 > 0.5: classG (34.73/13.63)
|   |   |   |   |   feature6 > 0.5333: classA (29.54/18.99)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.3333: classB (4.67/2.2)
|   |   |   feature6 > 0.3333: classE (6.07/3.59)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6333: classA (4.6/3.05)
|   |   |   feature6 > 0.6333: classC (2.9/0.73)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.2667: classG (14.81/3.72)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   feature8 <= 0.9: classA (15.43/5.38)
|   |   |   |   |   |   feature8 > 0.9
|   |   |   |   |   |   |   feature9 <= 0.7667: classD (24.58/7.7)
|   |   |   |   |   |   |   feature9 > 0.7667: classA (2.95/0.8)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.3333: classA (21.15/5.71)
|   |   |   |   |   |   feature6 > 0.3333: classF (3.1/1.64)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classD (11.0/4.44)
|   |   |   |   |   |   feature6 > 0.5: classG (21.64/10.55)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.6333: classA (7.83/2.29)
|   |   |   |   |   |   feature6 > 0.6333: classD (13.46/3.4)
|   |   prevPredS = classE
|   |   |   feature5 = classA: classF (0.0)
|   |   |   feature5 = classB: classF (0.0)
|   |   |   feature5 = classC
|   |   |   |   feature9 <= 0.4: classA (5.59/2.67)
|   |   |   |   feature9 > 0.4: classF (18.77/6.84)
|   |   |   feature5 = classD
|   |   |   |   feature6 <= 0.5333: classD (17.66/10.53)
|   |   |   |   feature6 > 0.5333: classF (2.72/0.83)
|   |   |   feature5 = classE
|   |   |   |   feature6 <= 0.4667: classE (13.27/5.57)
|   |   |   |   feature6 > 0.4667: classF (6.7/3.26)
|   |   |   feature5 = classF: classF (1.76/0.6)
|   |   |   feature5 = classG: classF (0.0)
|   |   prevPredS = classF
|   |   |   feature5 = classA: classF (0.67/0.24)
|   |   |   feature5 = classB: classF (0.0)
|   |   |   feature5 = classC: classF (14.87/5.23)
|   |   |   feature5 = classD
|   |   |   |   feature6 <= 0.7333: classG (5.36/2.92)
|   |   |   |   feature6 > 0.7333: classD (4.43/1.2)
|   |   |   feature5 = classE
|   |   |   |   feature8 <= 0.8667
|   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.4667: classE (6.0/2.67)
|   |   |   |   |   |   feature6 > 0.4667: classG (4.02/2.34)
|   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (4.61/2.19)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (18.58/7.51)
|   |   |   |   |   |   feature6 > 0.5333: classF (6.48/3.77)
|   |   |   |   feature8 > 0.8667
|   |   |   |   |   feature6 <= 0.4333: classA (18.55/7.96)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.5: classD (4.65/1.57)
|   |   |   |   |   |   feature6 > 0.5: classG (11.48/5.66)
|   |   |   feature5 = classF: classF (13.31/4.95)
|   |   |   feature5 = classG: classF (0.0)
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.5333: classF (20.3/6.09)
|   |   |   |   feature6 > 0.5333: classG (6.78/2.86)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD
|   |   |   |   feature9 <= 0.6
|   |   |   |   |   feature9 <= 0.5333: classF (7.53/2.0)
|   |   |   |   |   feature9 > 0.5333: classD (10.71/5.33)
|   |   |   |   feature9 > 0.6: classG (8.33/3.13)
|   |   |   feature2 = classE: classF (0.0)
|   |   |   feature2 = classF: classF (13.71/5.62)
|   |   |   feature2 = classG: classG (0.16/0.08)
|   predS = classG
|   |   prevPredS = classA
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4: classD (11.52/4.97)
|   |   |   |   feature6 > 0.4: classG (31.25/11.7)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5667: classE (48.65/28.48)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature9 <= 0.7333: classG (20.21/8.18)
|   |   |   |   |   feature9 > 0.7333: classF (18.0/6.07)
|   |   prevPredS = classB: classG (0.06/0.02)
|   |   prevPredS = classC: classG (0.06/0.03)
|   |   prevPredS = classD: classD (51.72/32.83)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667
|   |   |   |   feature9 <= 0.4: classG (22.77/9.73)
|   |   |   |   feature9 > 0.4: classA (37.86/22.66)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classF (19.67/9.7)
|   |   |   |   feature6 > 0.5: classG (5.81/1.45)
|   |   prevPredS = classF
|   |   |   feature7 <= 0.56
|   |   |   |   feature6 <= 0.4: classA (6.04/2.7)
|   |   |   |   feature6 > 0.4: classG (11.5/4.96)
|   |   |   feature7 > 0.56: classF (20.33/8.91)
|   |   prevPredS = classG: classG (110.92/59.92)
feature3 = classE
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.7667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   feature9 <= 0.4333: classA (4.36/1.92)
|   |   |   |   |   |   |   feature9 > 0.4333: classD (11.48/4.48)
|   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   |   feature6 <= 0.6: classG (14.66/9.61)
|   |   |   |   |   |   |   |   feature6 > 0.6: classD (3.85/2.62)
|   |   |   |   |   |   |   feature9 > 0.6: classA (8.96/3.94)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (1.91/0.84)
|   |   |   |   |   prevPredS = classD: classA (0.04/0.02)
|   |   |   |   |   prevPredS = classE: classD (3.2/1.25)
|   |   |   |   |   prevPredS = classF: classC (3.79/2.1)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature6 <= 0.5667: classD (4.03/2.2)
|   |   |   |   |   |   feature6 > 0.5667: classA (5.99/2.6)
|   |   |   |   feature9 > 0.7667
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature7 <= 0.48: classA (4.91/1.47)
|   |   |   |   |   |   |   feature7 > 0.48: classE (11.94/3.98)
|   |   |   |   |   |   feature6 > 0.5: classF (12.32/3.95)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classG (6.75/4.16)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature9 <= 0.9: classA (9.46/5.39)
|   |   |   |   |   |   |   feature9 > 0.9: classE (14.29/7.84)
|   |   |   feature2 = classB
|   |   |   |   feature6 <= 0.5667: classB (6.49/3.01)
|   |   |   |   feature6 > 0.5667: classA (3.27/2.07)
|   |   |   feature2 = classC: classC (8.9/5.73)
|   |   |   feature2 = classD: classA (34.68/20.03)
|   |   |   feature2 = classE
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (8.01/3.11)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classG (14.39/8.81)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classA (7.92/4.33)
|   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   feature9 <= 0.7: classE (5.66/2.38)
|   |   |   |   |   |   |   feature9 > 0.7: classA (6.85/2.78)
|   |   |   |   |   feature6 > 0.6: classD (5.17/2.0)
|   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   prevPredS = classC: classA (2.75/1.21)
|   |   |   |   prevPredS = classD: classA (1.13/0.5)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.2667: classB (7.62/4.35)
|   |   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (16.33/5.59)
|   |   |   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classA (16.46/6.01)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.88: classE (13.85/3.63)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.88: classA (4.44/1.11)
|   |   |   |   |   |   feature6 > 0.5333: classB (7.56/1.89)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classG (7.34/3.63)
|   |   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6333: classD (7.56/1.89)
|   |   |   |   |   |   |   feature6 > 0.6333: classA (4.54/1.14)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.5667: classC (6.96/4.52)
|   |   |   |   |   |   feature6 > 0.5667: classA (12.22/6.63)
|   |   |   |   |   feature6 > 0.6333: classE (9.27/2.73)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.7333: classD (5.82/2.91)
|   |   |   |   |   feature9 > 0.7333: classG (3.95/1.69)
|   |   |   feature2 = classF
|   |   |   |   feature6 <= 0.3667: classE (12.05/5.5)
|   |   |   |   feature6 > 0.3667: classA (32.13/19.18)
|   |   |   feature2 = classG: classG (2.43/1.27)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   feature9 <= 0.5333: classC (17.84/11.7)
|   |   |   |   |   |   feature9 > 0.5333: classA (86.71/45.84)
|   |   |   |   |   feature9 > 0.9667: classE (136.42/98.47)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classC (7.83/4.19)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature8 <= 0.9: classE (7.05/1.81)
|   |   |   |   |   feature8 > 0.9: classA (13.69/7.24)
|   |   |   |   prevPredS = classF: classA (4.24/2.99)
|   |   |   |   prevPredS = classG: classA (6.13/3.24)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.7667
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.6: classA (4.02/2.51)
|   |   |   |   |   |   feature9 > 0.6: classE (4.37/1.1)
|   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   feature6 <= 0.7333: classA (15.65/3.92)
|   |   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   |   feature9 <= 0.8: classA (2.85/0.71)
|   |   |   |   |   |   |   feature9 > 0.8: classD (34.06/17.69)
|   |   |   |   feature6 > 0.7667
|   |   |   |   |   feature5 = classA: classA (32.09/8.74)
|   |   |   |   |   feature5 = classB: classA (0.02/0.01)
|   |   |   |   |   feature5 = classC: classC (0.0/0.0)
|   |   |   |   |   feature5 = classD: classA (2.15/0.59)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature9 <= 0.7: classA (23.1/7.33)
|   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   feature6 <= 0.8: classE (14.12/4.3)
|   |   |   |   |   |   |   feature6 > 0.8
|   |   |   |   |   |   |   |   feature7 <= 0.88: classA (16.74/7.46)
|   |   |   |   |   |   |   |   feature7 > 0.88: classE (4.78/1.45)
|   |   |   |   |   feature5 = classF: classA (3.29/0.9)
|   |   |   |   |   feature5 = classG: classA (0.17/0.05)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.4667: classB (4.57/3.0)
|   |   |   |   feature9 > 0.4667: classC (16.24/6.68)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.3333: classB (3.75/0.94)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5333: classA (4.58/1.15)
|   |   |   |   |   feature6 > 0.5333: classB (4.42/2.09)
|   |   prevPredS = classB
|   |   |   feature9 <= 0.9: classB (14.99/5.1)
|   |   |   feature9 > 0.9
|   |   |   |   feature6 <= 0.9667
|   |   |   |   |   feature6 <= 0.5333: classA (7.75/1.94)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   feature6 <= 0.9333: classB (10.13/2.54)
|   |   |   |   |   |   |   feature6 > 0.9333: classA (11.39/5.87)
|   |   |   |   |   |   feature9 > 0.9333: classB (7.08/1.77)
|   |   |   |   feature6 > 0.9667: classA (331.6/143.84)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6667: classE (8.4/3.4)
|   |   |   feature6 > 0.6667: classB (3.42/1.77)
|   |   prevPredS = classD: classA (0.0)
|   |   prevPredS = classE: classA (5.14/3.46)
|   |   prevPredS = classF: classD (1.97/0.81)
|   |   prevPredS = classG: classG (0.36/0.15)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classE (11.48/3.16)
|   |   |   feature6 > 0.2333: classA (173.42/95.54)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.7333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (9.72/4.97)
|   |   |   |   |   |   |   feature6 > 0.3333: classG (9.83/4.12)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.4333: classF (22.68/9.87)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (25.45/17.32)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.3333: classD (8.41/4.65)
|   |   |   |   |   |   feature6 > 0.3333: classC (24.87/15.8)
|   |   |   |   prevPredS = classB: classC (1.79/1.16)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (5.48/2.8)
|   |   |   |   |   |   |   feature6 > 0.3333: classE (8.68/4.96)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5: classD (11.18/2.8)
|   |   |   |   |   |   |   feature6 > 0.5: classE (3.57/0.89)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.6: classC (3.9/0.98)
|   |   |   |   |   |   feature6 > 0.6: classD (5.33/2.58)
|   |   |   |   prevPredS = classD: classE (4.24/2.34)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC
|   |   |   |   |   |   feature9 <= 0.4333: classD (12.21/7.08)
|   |   |   |   |   |   feature9 > 0.4333: classC (15.61/10.08)
|   |   |   |   |   feature2 = classD: classE (0.8/0.46)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.5667: classE (29.97/15.04)
|   |   |   |   |   |   feature6 > 0.5667: classC (4.91/2.88)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   prevPredS = classF: classE (24.64/14.07)
|   |   |   |   prevPredS = classG: classF (0.0)
|   |   |   feature6 > 0.7333
|   |   |   |   feature6 <= 0.8333: classB (58.66/25.94)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   prevPredS = classA: classC (1.27/0.32)
|   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   prevPredS = classC: classC (4.91/1.23)
|   |   |   |   |   prevPredS = classD: classC (4.63/2.11)
|   |   |   |   |   prevPredS = classE: classE (6.62/1.69)
|   |   |   |   |   prevPredS = classF: classD (0.06/0.02)
|   |   |   |   |   prevPredS = classG: classC (0.0)
|   predS = classD
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature5 = classA: classD (43.9/22.63)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC
|   |   |   |   |   |   feature6 <= 0.5333: classF (5.22/2.41)
|   |   |   |   |   |   feature6 > 0.5333: classA (9.55/3.82)
|   |   |   |   |   feature5 = classD: classD (0.23/0.12)
|   |   |   |   |   feature5 = classE: classD (0.0)
|   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   feature9 > 0.5: classC (57.29/32.7)
|   |   |   feature9 > 0.6333
|   |   |   |   feature7 <= 0.44: classE (53.62/28.63)
|   |   |   |   feature7 > 0.44
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature2 = classA: classA (4.31/1.39)
|   |   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   |   |   feature2 = classE: classE (3.18/0.79)
|   |   |   |   |   |   feature2 = classF: classA (0.0)
|   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   feature6 > 0.4: classD (45.02/24.65)
|   |   prevPredS = classB: classF (0.0)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333: classF (27.34/14.52)
|   |   |   feature6 > 0.5333
|   |   |   |   feature9 <= 0.8
|   |   |   |   |   feature6 <= 0.7: classE (9.12/4.07)
|   |   |   |   |   feature6 > 0.7: classD (10.45/4.51)
|   |   |   |   feature9 > 0.8
|   |   |   |   |   feature9 <= 0.9333: classA (7.62/2.1)
|   |   |   |   |   feature9 > 0.9333: classC (3.91/1.07)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.4333: classE (36.73/17.96)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4667: classF (200.28/110.65)
|   |   |   |   |   |   feature6 > 0.4667: classE (51.6/33.31)
|   |   |   |   |   feature6 > 0.5333: classG (22.06/11.02)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.9
|   |   |   |   |   feature5 = classA: classD (3.28/0.82)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classD (0.02/0.01)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   |   |   feature9 <= 0.5667: classD (5.78/1.45)
|   |   |   |   |   |   |   |   feature9 > 0.5667
|   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classE (6.38/2.41)
|   |   |   |   |   |   |   |   |   feature8 > 0.6333: classD (4.29/1.96)
|   |   |   |   |   |   |   feature7 > 0.64: classD (6.39/1.6)
|   |   |   |   |   |   feature9 > 0.9667: classC (3.38/1.49)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature8 <= 0.5667
|   |   |   |   |   |   |   feature7 <= 0.64: classD (9.27/3.37)
|   |   |   |   |   |   |   feature7 > 0.64: classE (7.08/2.19)
|   |   |   |   |   |   feature8 > 0.5667: classE (10.75/3.16)
|   |   |   |   |   feature5 = classF: classD (0.5/0.13)
|   |   |   |   |   feature5 = classG: classD (0.49/0.12)
|   |   |   |   feature6 > 0.9
|   |   |   |   |   feature9 <= 0.5: classF (6.82/0.38)
|   |   |   |   |   feature9 > 0.5: classC (11.15/5.41)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   |   feature5 = classD: classA (4.37/1.09)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 <= 0.64: classE (3.86/0.97)
|   |   |   |   |   |   |   feature7 > 0.64: classA (10.33/4.25)
|   |   |   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   |   feature6 > 0.3: classE (34.24/13.94)
|   |   |   |   feature6 > 0.4333: classF (208.03/121.44)
|   |   |   feature6 > 0.4667
|   |   |   |   feature8 <= 0.4667: classD (11.78/3.71)
|   |   |   |   feature8 > 0.4667
|   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   feature5 = classA: classE (7.76/2.7)
|   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   feature5 = classD: classD (2.23/0.66)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 <= 0.72: classD (12.93/5.46)
|   |   |   |   |   |   |   feature7 > 0.72: classE (4.0/1.39)
|   |   |   |   |   |   feature5 = classF: classF (0.07/0.01)
|   |   |   |   |   |   feature5 = classG: classG (0.27/0.08)
|   |   |   |   |   feature9 > 0.4333: classE (37.75/13.39)
|   |   prevPredS = classF
|   |   |   feature5 = classA
|   |   |   |   feature6 <= 0.5333: classF (3.72/1.44)
|   |   |   |   feature6 > 0.5333: classE (5.11/1.84)
|   |   |   feature5 = classB: classF (0.0)
|   |   |   feature5 = classC: classF (0.0)
|   |   |   feature5 = classD: classD (3.13/1.77)
|   |   |   feature5 = classE
|   |   |   |   feature9 <= 0.4: classD (10.16/5.24)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.4: classF (4.93/1.92)
|   |   |   |   |   |   feature6 > 0.4: classE (6.66/1.67)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.5333: classF (8.4/3.77)
|   |   |   |   |   |   feature6 > 0.5333: classE (4.72/1.44)
|   |   |   feature5 = classF: classF (8.85/2.0)
|   |   |   feature5 = classG: classF (0.0)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.4
|   |   |   |   feature6 <= 0.4667: classF (5.89/2.64)
|   |   |   |   feature6 > 0.4667: classE (11.44/5.7)
|   |   |   feature9 > 0.4
|   |   |   |   feature9 <= 0.9: classF (18.48/9.56)
|   |   |   |   feature9 > 0.9: classG (24.32/9.12)
|   predS = classE
|   |   feature6 <= 0.3: classG (353.39/191.81)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (7.75/2.77)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classC (12.01/6.98)
|   |   |   |   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   |   |   |   feature5 = classC: classC (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (0.36/0.25)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature7 <= 0.4
|   |   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (6.79/2.43)
|   |   |   |   |   |   |   |   |   feature6 > 0.4333: classC (10.52/6.12)
|   |   |   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (7.65/1.92)
|   |   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4333: classE (7.03/2.12)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4333: classC (22.75/13.23)
|   |   |   |   |   |   |   feature5 = classF: classC (0.0)
|   |   |   |   |   |   |   feature5 = classG: classC (0.0)
|   |   |   |   |   |   feature9 > 0.5: classC (140.23/65.32)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature5 = classA: classE (26.39/17.39)
|   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   feature5 = classD: classD (0.0)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature7 <= 0.6: classE (24.69/16.27)
|   |   |   |   |   |   |   feature7 > 0.6: classD (119.76/78.45)
|   |   |   |   |   |   feature5 = classF: classE (0.21/0.14)
|   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   prevPredS = classB
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC
|   |   |   |   |   |   feature6 <= 0.4333: classA (3.93/1.13)
|   |   |   |   |   |   feature6 > 0.4333: classC (6.09/3.54)
|   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   feature2 = classE: classE (60.93/40.16)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   prevPredS = classC: classE (4.3/3.0)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature8 <= 0.5333: classD (27.53/18.04)
|   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature9 <= 0.4333: classD (3.67/1.05)
|   |   |   |   |   |   |   feature9 > 0.4333: classE (14.13/6.23)
|   |   |   |   |   |   feature6 > 0.4333: classC (116.16/82.08)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature5 = classA: classE (1.23/0.82)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.43/0.29)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature9 <= 0.6: classD (127.96/86.4)
|   |   |   |   |   |   feature9 > 0.6: classE (17.47/12.35)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   |   |   feature7 <= 0.76: classE (4.45/1.11)
|   |   |   |   |   |   |   |   feature7 > 0.76: classA (8.73/2.19)
|   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   feature7 <= 0.36: classG (6.3/2.97)
|   |   |   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   |   |   feature8 <= 0.6667
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classE (12.5/5.52)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.6333: classD (8.9/3.92)
|   |   |   |   |   |   |   |   |   feature8 > 0.6667
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.76
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.48: classE (3.53/1.16)
|   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.48: classD (7.64/2.74)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.4: classA (7.22/3.94)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.4: classE (5.91/1.48)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.76: classE (45.58/18.59)
|   |   |   |   |   |   feature6 > 0.4333: classC (693.54/488.9)
|   |   |   |   |   feature5 = classF: classE (1.23/0.82)
|   |   |   |   |   feature5 = classG: classE (2.98/1.98)
|   |   |   |   prevPredS = classF: classF (54.7/36.03)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature7 <= 0.76: classE (71.3/46.99)
|   |   |   |   |   |   feature7 > 0.76
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.4: classE (3.13/0.97)
|   |   |   |   |   |   |   |   feature6 > 0.4: classA (4.37/1.09)
|   |   |   |   |   |   |   feature6 > 0.4333: classC (11.61/6.75)
|   |   |   |   |   feature2 = classB: classC (0.0)
|   |   |   |   |   feature2 = classC: classC (0.0)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature6 <= 0.4333: classD (4.09/1.07)
|   |   |   |   |   |   feature6 > 0.4333: classC (6.34/3.69)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (3.95/1.14)
|   |   |   |   |   |   |   feature6 > 0.4333: classC (6.12/3.56)
|   |   |   |   |   |   feature9 > 0.8: classG (38.29/27.58)
|   |   |   |   |   feature2 = classF: classC (0.0)
|   |   |   |   |   feature2 = classG: classG (5.39/3.89)
|   |   |   feature6 > 0.4667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5333: classC (38.19/20.67)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classD (9.71/4.18)
|   |   |   |   |   |   feature6 > 0.5: classE (23.52/8.68)
|   |   |   |   prevPredS = classB: classB (5.8/2.95)
|   |   |   |   prevPredS = classC: classE (5.91/3.84)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature5 = classA: classD (5.8/2.53)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature7 <= 0.52: classD (5.27/2.05)
|   |   |   |   |   |   |   feature7 > 0.52: classE (5.81/1.56)
|   |   |   |   |   |   feature6 > 0.6333: classD (12.26/6.82)
|   |   |   |   |   feature5 = classE: classE (36.01/16.13)
|   |   |   |   |   feature5 = classF: classF (3.39/0.49)
|   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature8 <= 0.8
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   feature2 = classA: classE (2.33/0.58)
|   |   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   |   feature2 = classD
|   |   |   |   |   |   |   |   |   feature7 <= 0.4: classD (4.11/1.34)
|   |   |   |   |   |   |   |   |   feature7 > 0.4: classE (4.06/1.02)
|   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333: classD (7.73/3.3)
|   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (3.63/0.91)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5: classD (8.82/4.45)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.7667: classE (18.6/6.68)
|   |   |   |   |   |   |   |   |   |   |   feature8 > 0.7667
|   |   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (6.39/2.85)
|   |   |   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classD (5.1/1.82)
|   |   |   |   |   |   |   |   |   feature6 > 0.5667: classE (9.93/2.49)
|   |   |   |   |   |   |   |   feature2 = classF: classE (0.2/0.05)
|   |   |   |   |   |   |   |   feature2 = classG: classG (2.48/0.82)
|   |   |   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   |   |   feature2 = classA: classA (10.22/4.29)
|   |   |   |   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   |   |   |   feature2 = classC: classA (0.0)
|   |   |   |   |   |   |   |   feature2 = classD: classE (6.56/3.7)
|   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   feature9 <= 0.7: classE (26.29/14.81)
|   |   |   |   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.72: classD (20.49/12.4)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.72: classE (11.72/6.6)
|   |   |   |   |   |   |   |   feature2 = classF: classE (0.91/0.52)
|   |   |   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   |   |   feature9 <= 0.4: classD (4.45/1.17)
|   |   |   |   |   |   |   |   |   feature9 > 0.4: classE (7.32/1.83)
|   |   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   |   feature5 = classD: classD (11.37/3.92)
|   |   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   |   feature7 <= 0.44: classG (10.27/3.72)
|   |   |   |   |   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.5333
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.7667: classG (9.36/2.81)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.7667: classD (9.92/3.38)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.6333: classD (13.72/3.9)
|   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.52: classD (4.46/1.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature7 > 0.52: classE (5.36/1.34)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5667: classE (11.08/2.77)
|   |   |   |   |   |   |   |   feature5 = classF: classE (7.31/1.83)
|   |   |   |   |   |   |   |   feature5 = classG: classE (0.35/0.09)
|   |   |   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (4.85/2.12)
|   |   |   |   |   |   |   |   feature9 > 0.4667: classE (34.81/8.71)
|   |   |   |   |   feature8 > 0.8: classE (290.58/126.89)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature9 <= 0.7: classE (28.76/13.64)
|   |   |   |   |   feature9 > 0.7: classF (6.66/0.69)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature2 = classA: classE (8.45/4.12)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   feature2 = classD: classD (5.83/2.91)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature8 <= 0.5333: classG (6.84/2.36)
|   |   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.7: classG (4.79/2.69)
|   |   |   |   |   |   |   feature6 > 0.7: classE (7.14/1.79)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (3.33/1.62)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.2667: classG (42.2/12.66)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3333: classA (16.89/9.94)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.3667: classF (12.45/5.62)
|   |   |   |   |   |   |   feature6 > 0.3667: classA (5.09/2.56)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   feature9 <= 0.8: classC (14.89/6.2)
|   |   |   |   |   |   feature9 > 0.8: classB (148.59/70.7)
|   |   |   |   |   feature9 > 0.8667
|   |   |   |   |   |   feature7 <= 0.88: classE (6.66/1.67)
|   |   |   |   |   |   feature7 > 0.88: classA (4.37/1.09)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (33.31/18.54)
|   |   |   |   |   feature6 > 0.5: classG (47.39/17.85)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classA (45.38/25.09)
|   |   |   |   |   feature6 > 0.5667: classF (6.04/0.3)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.3333: classB (5.15/2.35)
|   |   |   feature6 > 0.3333: classE (6.6/3.8)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6333: classA (4.92/3.22)
|   |   |   feature6 > 0.6333: classC (3.29/0.82)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.6333
|   |   |   |   feature8 <= 0.7667
|   |   |   |   |   feature6 <= 0.5: classD (23.05/9.36)
|   |   |   |   |   feature6 > 0.5: classG (4.34/2.23)
|   |   |   |   feature8 > 0.7667: classE (7.2/4.09)
|   |   |   feature9 > 0.6333: classA (18.61/8.65)
|   |   prevPredS = classE
|   |   |   feature5 = classA: classE (8.39/4.65)
|   |   |   feature5 = classB: classF (0.0)
|   |   |   feature5 = classC
|   |   |   |   feature7 <= 0.44: classF (13.86/3.9)
|   |   |   |   feature7 > 0.44: classA (6.66/3.35)
|   |   |   feature5 = classD: classD (6.76/3.69)
|   |   |   feature5 = classE
|   |   |   |   feature8 <= 0.6667
|   |   |   |   |   feature6 <= 0.3: classG (5.62/1.41)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (8.35/3.7)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (28.6/13.4)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5333: classG (5.62/1.41)
|   |   |   |   |   |   |   feature6 > 0.5333: classF (6.52/3.51)
|   |   |   |   feature8 > 0.6667
|   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.5333: classE (11.74/6.53)
|   |   |   |   |   |   |   feature6 > 0.5333: classF (3.26/0.58)
|   |   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.3667: classA (11.69/4.85)
|   |   |   |   |   |   |   feature6 > 0.3667: classE (10.47/6.62)
|   |   |   |   |   feature7 > 0.72: classE (42.44/22.52)
|   |   |   feature5 = classF: classF (16.07/6.19)
|   |   |   feature5 = classG: classF (0.0)
|   |   prevPredS = classF
|   |   |   feature2 = classA: classF (3.2/1.04)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD
|   |   |   |   feature6 <= 0.5: classD (6.32/2.69)
|   |   |   |   feature6 > 0.5: classG (2.93/1.53)
|   |   |   feature2 = classE
|   |   |   |   feature5 = classA: classE (3.83/2.39)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC: classF (15.16/4.94)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.5667: classG (9.41/5.44)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.6: classE (13.23/3.54)
|   |   |   |   |   |   feature6 > 0.6: classG (3.13/1.2)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature8 <= 0.6333: classD (6.31/3.74)
|   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.4667: classE (4.24/2.06)
|   |   |   |   |   |   |   feature6 > 0.4667: classG (4.56/2.42)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6: classG (3.89/2.24)
|   |   |   |   |   |   |   feature6 > 0.6: classE (6.8/1.87)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature6 <= 0.8333: classG (6.85/3.76)
|   |   |   |   |   feature6 > 0.8333: classE (6.66/1.67)
|   |   |   |   feature5 = classG
|   |   |   |   |   feature6 <= 0.6: classG (3.28/1.94)
|   |   |   |   |   feature6 > 0.6: classE (5.42/2.15)
|   |   |   feature2 = classF: classF (15.5/6.71)
|   |   |   feature2 = classG: classG (27.03/10.68)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.4667
|   |   |   |   feature6 <= 0.4667: classE (9.48/3.67)
|   |   |   |   feature6 > 0.4667: classG (2.7/1.76)
|   |   |   feature9 > 0.4667
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.3: classG (6.9/1.73)
|   |   |   |   |   feature6 > 0.3: classF (41.63/14.07)
|   |   |   |   feature6 > 0.6: classG (18.59/7.54)
|   predS = classG
|   |   feature5 = classA
|   |   |   feature2 = classA
|   |   |   |   feature9 <= 0.9667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4: classA (23.68/16.64)
|   |   |   |   |   |   feature6 > 0.4: classG (19.41/6.49)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   |   feature6 <= 0.7: classF (23.42/12.44)
|   |   |   |   |   |   |   feature6 > 0.7: classA (14.47/6.82)
|   |   |   |   |   |   feature9 > 0.8: classA (20.9/8.27)
|   |   |   |   feature9 > 0.9667
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.3667: classE (4.31/1.08)
|   |   |   |   |   |   feature6 > 0.3667: classG (5.16/1.29)
|   |   |   |   |   feature6 > 0.4667: classE (21.73/7.38)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD: classG (0.27/0.1)
|   |   |   feature2 = classE: classF (0.0)
|   |   |   feature2 = classF: classF (4.74/2.06)
|   |   |   feature2 = classG
|   |   |   |   prevPredS = classA: classF (8.15/4.95)
|   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   |   prevPredS = classD: classG (0.04/0.01)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667: classE (35.28/15.37)
|   |   |   |   |   feature6 > 0.4667: classF (3.01/0.41)
|   |   |   |   prevPredS = classF: classG (1.92/0.57)
|   |   |   |   prevPredS = classG: classG (3.44/1.03)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classA (4.9/2.94)
|   |   feature5 = classD: classG (8.25/4.28)
|   |   feature5 = classE
|   |   |   feature8 <= 0.8333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.4667: classE (5.84/2.78)
|   |   |   |   |   |   |   feature9 > 0.4667: classC (5.73/2.48)
|   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   feature9 <= 0.6667: classG (5.97/1.78)
|   |   |   |   |   |   |   feature9 > 0.6667: classE (7.73/3.35)
|   |   |   |   |   feature9 > 0.7333: classF (3.83/0.51)
|   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   |   prevPredS = classD: classE (5.98/2.65)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   feature9 <= 0.4333: classG (6.08/1.82)
|   |   |   |   |   |   feature9 > 0.4333: classA (14.22/6.71)
|   |   |   |   |   feature9 > 0.5667: classE (40.41/17.49)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature7 <= 0.6: classE (19.96/10.73)
|   |   |   |   |   |   feature7 > 0.6: classF (8.52/3.03)
|   |   |   |   |   feature9 > 0.5333: classG (3.99/1.19)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 <= 0.84: classG (5.96/2.5)
|   |   |   |   |   feature7 > 0.84
|   |   |   |   |   |   feature6 <= 0.4667: classE (10.99/4.7)
|   |   |   |   |   |   feature6 > 0.4667: classG (2.79/1.36)
|   |   |   feature8 > 0.8333
|   |   |   |   feature8 <= 0.8667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.9333
|   |   |   |   |   |   |   feature6 <= 0.4667: classG (7.16/2.23)
|   |   |   |   |   |   |   feature6 > 0.4667: classF (16.26/8.84)
|   |   |   |   |   |   feature6 > 0.9333: classA (14.22/4.52)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   |   |   prevPredS = classD: classG (0.08/0.02)
|   |   |   |   |   prevPredS = classE: classA (33.04/18.05)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.5: classF (9.12/3.57)
|   |   |   |   |   |   feature6 > 0.5: classA (15.42/5.73)
|   |   |   |   |   prevPredS = classG: classG (9.17/5.32)
|   |   |   |   feature8 > 0.8667
|   |   |   |   |   prevPredS = classA: classF (5.79/3.63)
|   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classG (0.02/0.01)
|   |   |   |   |   prevPredS = classE: classE (19.98/10.9)
|   |   |   |   |   prevPredS = classF: classF (2.1/0.89)
|   |   |   |   |   prevPredS = classG: classG (1.55/0.61)
|   |   feature5 = classF
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.5667: classG (5.65/3.05)
|   |   |   |   feature6 > 0.5667: classA (9.75/3.85)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD: classG (0.05/0.02)
|   |   |   feature2 = classE: classE (5.27/2.91)
|   |   |   feature2 = classF: classF (1.67/0.52)
|   |   |   feature2 = classG: classF (10.96/3.75)
|   |   feature5 = classG
|   |   |   feature9 <= 0.5333
|   |   |   |   feature6 <= 0.5667: classG (8.89/4.31)
|   |   |   |   feature6 > 0.5667: classD (12.82/6.27)
|   |   |   feature9 > 0.5333: classG (33.19/12.89)
feature3 = classF
|   feature2 = classA
|   |   predS = classA
|   |   |   feature9 <= 0.8333
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.5: classA (7.93/4.66)
|   |   |   |   |   feature9 > 0.5: classC (14.52/6.73)
|   |   |   |   feature9 > 0.5667: classF (39.15/15.07)
|   |   |   feature9 > 0.8333
|   |   |   |   feature6 <= 0.6667: classF (165.55/78.05)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7333: classA (41.49/25.24)
|   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   feature6 <= 0.8667
|   |   |   |   |   |   |   feature8 <= 0.4333: classE (4.38/1.11)
|   |   |   |   |   |   |   feature8 > 0.4333
|   |   |   |   |   |   |   |   feature5 = classA
|   |   |   |   |   |   |   |   |   feature9 <= 0.9667: classA (3.27/0.82)
|   |   |   |   |   |   |   |   |   feature9 > 0.9667
|   |   |   |   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.96
|   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.8667: classF (4.39/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.8667: classA (6.7/1.68)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.96: classF (19.44/1.48)
|   |   |   |   |   |   |   |   |   |   feature8 > 0.9667: classA (4.45/1.12)
|   |   |   |   |   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   |   |   |   |   feature5 = classC: classF (0.0)
|   |   |   |   |   |   |   |   feature5 = classD: classF (0.0)
|   |   |   |   |   |   |   |   feature5 = classE: classA (0.01/0.0)
|   |   |   |   |   |   |   |   feature5 = classF: classF (28.41/1.66)
|   |   |   |   |   |   |   |   feature5 = classG: classF (0.0)
|   |   |   |   |   |   feature6 > 0.8667: classA (15.45/3.87)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (4.98/3.19)
|   |   |   feature9 > 0.9: classA (47.95/17.55)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (24.96/13.14)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333: classF (29.43/20.98)
|   |   |   |   feature6 > 0.7333: classB (9.01/4.05)
|   |   predS = classD: classF (122.94/70.83)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (47.5/22.41)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.5333: classC (211.97/138.29)
|   |   |   |   |   feature6 > 0.5333: classF (8.41/4.49)
|   |   |   |   feature6 > 0.6333: classA (24.05/11.29)
|   |   predS = classF
|   |   |   feature6 <= 0.2667: classG (13.97/3.8)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature8 <= 0.9667: classF (12.79/2.91)
|   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   feature9 <= 0.9333: classF (6.56/2.76)
|   |   |   |   |   |   |   feature9 > 0.9333: classA (9.32/3.48)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   feature9 <= 0.6: classF (2.78/0.68)
|   |   |   |   |   |   |   feature9 > 0.6: classA (4.37/1.09)
|   |   |   |   |   |   feature9 > 0.7333: classB (23.95/12.13)
|   |   |   |   feature6 > 0.4667: classF (63.67/25.92)
|   |   predS = classG: classF (79.11/47.36)
|   feature2 = classB
|   |   feature6 <= 0.9333: classF (69.91/49.57)
|   |   feature6 > 0.9333: classB (32.34/11.68)
|   feature2 = classC
|   |   prevPredS = classA
|   |   |   feature9 <= 0.5
|   |   |   |   feature6 <= 0.5: classF (5.41/3.59)
|   |   |   |   feature6 > 0.5: classA (8.83/2.86)
|   |   |   feature9 > 0.5: classF (21.07/15.14)
|   |   prevPredS = classB: classA (12.79/7.1)
|   |   prevPredS = classC: classC (33.06/20.25)
|   |   prevPredS = classD
|   |   |   predS = classA: classE (1.43/0.93)
|   |   |   predS = classB: classA (0.6/0.35)
|   |   |   predS = classC: classB (28.28/8.62)
|   |   |   predS = classD: classF (3.57/1.84)
|   |   |   predS = classE: classC (9.32/6.42)
|   |   |   predS = classF: classG (2.19/1.33)
|   |   |   predS = classG: classG (0.89/0.4)
|   |   prevPredS = classE: classF (22.66/13.82)
|   |   prevPredS = classF: classF (7.16/3.71)
|   |   prevPredS = classG: classG (3.0/1.88)
|   feature2 = classD
|   |   prevPredS = classA: classF (17.89/12.74)
|   |   prevPredS = classB: classA (7.22/3.93)
|   |   prevPredS = classC
|   |   |   feature9 <= 0.5333: classE (4.52/3.0)
|   |   |   feature9 > 0.5333: classC (4.67/2.47)
|   |   prevPredS = classD: classD (44.22/28.15)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667: classF (11.39/8.1)
|   |   |   feature6 > 0.4667
|   |   |   |   feature7 <= 0.4: classD (4.44/1.69)
|   |   |   |   feature7 > 0.4: classE (9.95/6.01)
|   |   prevPredS = classF: classE (10.39/6.2)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.2667: classD (6.26/3.3)
|   |   |   feature9 > 0.2667: classG (5.37/3.58)
|   feature2 = classE
|   |   prevPredS = classA
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6: classA (10.61/6.04)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.7: classC (11.53/7.13)
|   |   |   |   |   feature6 > 0.7: classA (4.79/3.26)
|   |   |   predS = classB: classB (2.7/1.84)
|   |   |   predS = classC: classC (13.7/9.6)
|   |   |   predS = classD: classF (10.87/5.97)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3: classG (4.72/1.69)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3333: classA (3.6/0.9)
|   |   |   |   |   |   feature6 > 0.3333: classC (5.12/3.21)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (4.11/1.33)
|   |   |   |   |   |   |   feature6 > 0.4333: classC (5.46/3.37)
|   |   |   |   |   |   feature9 > 0.5: classC (21.21/12.29)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature9 <= 0.5: classF (3.49/1.51)
|   |   |   |   |   feature9 > 0.5: classC (4.96/2.08)
|   |   |   |   feature9 > 0.7: classB (18.04/10.73)
|   |   |   predS = classG: classF (13.02/8.45)
|   |   prevPredS = classB
|   |   |   predS = classA: classE (1.91/1.24)
|   |   |   predS = classB
|   |   |   |   feature9 <= 0.9: classB (3.46/0.91)
|   |   |   |   feature9 > 0.9: classA (22.41/6.63)
|   |   |   predS = classC: classF (3.01/2.25)
|   |   |   predS = classD: classF (3.51/1.66)
|   |   |   predS = classE: classE (23.03/14.01)
|   |   |   predS = classF: classG (3.4/2.25)
|   |   |   predS = classG: classG (1.19/0.53)
|   |   prevPredS = classC: classF (6.34/4.59)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.3667: classG (8.38/5.54)
|   |   |   feature6 > 0.3667
|   |   |   |   feature9 <= 0.5333: classF (13.16/9.08)
|   |   |   |   feature9 > 0.5333: classD (69.52/35.57)
|   |   prevPredS = classE
|   |   |   feature5 = classA: classE (0.76/0.42)
|   |   |   feature5 = classB: classF (0.0)
|   |   |   feature5 = classC: classA (1.33/0.8)
|   |   |   feature5 = classD: classD (15.85/9.42)
|   |   |   feature5 = classE
|   |   |   |   predS = classA: classE (12.87/7.34)
|   |   |   |   predS = classB: classA (3.44/2.0)
|   |   |   |   predS = classC
|   |   |   |   |   feature6 <= 0.2667: classA (5.87/3.01)
|   |   |   |   |   feature6 > 0.2667: classE (8.3/5.87)
|   |   |   |   predS = classD
|   |   |   |   |   feature6 <= 0.4667: classF (31.22/19.19)
|   |   |   |   |   feature6 > 0.4667: classD (5.69/2.42)
|   |   |   |   predS = classE
|   |   |   |   |   feature6 <= 0.3333: classE (24.39/11.97)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.6: classE (4.32/1.27)
|   |   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   |   feature6 <= 0.4: classD (4.39/1.31)
|   |   |   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.8: classE (2.75/0.69)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.8: classD (2.85/0.71)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (73.3/44.59)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classE (14.52/3.64)
|   |   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5: classD (4.02/1.42)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (3.53/0.93)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (3.65/0.91)
|   |   |   |   |   |   |   |   |   feature9 > 0.6333: classE (4.54/1.14)
|   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.7333: classD (21.33/11.04)
|   |   |   |   |   |   |   |   feature6 > 0.7333: classE (3.66/0.92)
|   |   |   |   predS = classF
|   |   |   |   |   feature6 <= 0.5333: classG (12.39/7.46)
|   |   |   |   |   feature6 > 0.5333: classF (3.94/1.23)
|   |   |   |   predS = classG
|   |   |   |   |   feature9 <= 0.5333: classG (4.86/1.96)
|   |   |   |   |   feature9 > 0.5333: classA (11.39/5.99)
|   |   |   feature5 = classF
|   |   |   |   feature8 <= 0.5: classE (8.67/4.72)
|   |   |   |   feature8 > 0.5: classF (31.11/10.68)
|   |   |   feature5 = classG: classE (0.09/0.05)
|   |   prevPredS = classF: classF (34.84/19.12)
|   |   prevPredS = classG
|   |   |   feature9 <= 0.3333: classE (6.51/3.58)
|   |   |   feature9 > 0.3333: classG (18.8/11.43)
|   feature2 = classF
|   |   prevPredS = classA
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.8333
|   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   feature9 <= 0.6333: classG (8.82/6.24)
|   |   |   |   |   |   feature9 > 0.6333: classA (8.32/3.39)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classC (17.08/9.9)
|   |   |   |   |   |   feature6 > 0.7: classD (5.95/3.28)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   feature6 <= 0.8667
|   |   |   |   |   |   feature9 <= 0.7333: classC (2.7/0.68)
|   |   |   |   |   |   feature9 > 0.7333: classF (17.47/0.0)
|   |   |   |   |   feature6 > 0.8667: classA (3.36/1.18)
|   |   |   predS = classB: classB (5.96/3.72)
|   |   |   predS = classC: classF (20.94/14.54)
|   |   |   predS = classD: classF (20.71/9.36)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (8.77/3.07)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.6: classC (48.77/27.64)
|   |   |   |   |   feature6 > 0.6: classA (4.76/2.37)
|   |   |   predS = classF
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature9 <= 0.5: classF (7.24/2.49)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature9 <= 0.5333: classC (10.96/4.1)
|   |   |   |   |   |   feature9 > 0.5333: classF (5.82/0.66)
|   |   |   |   feature9 > 0.7333
|   |   |   |   |   feature5 = classA: classF (19.55/10.22)
|   |   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   |   feature5 = classC: classF (0.0)
|   |   |   |   |   feature5 = classD: classF (0.0)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature6 <= 0.5333: classB (17.06/9.95)
|   |   |   |   |   |   feature6 > 0.5333: classE (7.81/2.42)
|   |   |   |   |   feature5 = classF: classF (0.0)
|   |   |   |   |   feature5 = classG: classF (0.0)
|   |   |   predS = classG: classF (17.49/10.76)
|   |   prevPredS = classB
|   |   |   predS = classA: classE (2.09/1.36)
|   |   |   predS = classB: classA (39.51/12.24)
|   |   |   predS = classC: classF (3.29/2.47)
|   |   |   predS = classD: classF (3.84/1.81)
|   |   |   predS = classE: classC (13.59/9.34)
|   |   |   predS = classF: classG (4.17/2.92)
|   |   |   predS = classG: classG (1.3/0.58)
|   |   prevPredS = classC: classF (22.85/13.44)
|   |   prevPredS = classD
|   |   |   feature7 <= 0.6
|   |   |   |   feature6 <= 0.6: classF (37.7/26.5)
|   |   |   |   feature6 > 0.6: classD (33.57/12.49)
|   |   |   feature7 > 0.6: classF (16.06/5.71)
|   |   prevPredS = classE: classF (90.59/39.33)
|   |   prevPredS = classF
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.7333: classA (11.85/5.05)
|   |   |   |   |   |   feature9 > 0.7333: classF (4.12/0.18)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classB (3.97/1.89)
|   |   |   |   |   |   feature6 > 0.5667: classF (5.11/2.02)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (2.77/0.69)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   feature6 <= 0.7: classE (9.43/3.28)
|   |   |   |   |   |   feature6 > 0.7: classA (2.92/0.73)
|   |   |   predS = classB: classA (7.38/4.3)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (12.6/6.46)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.5667: classE (11.65/6.97)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature6 <= 0.7: classF (3.35/0.87)
|   |   |   |   |   |   feature6 > 0.7: classB (3.75/1.17)
|   |   |   predS = classD: classF (59.14/19.14)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (22.22/9.64)
|   |   |   |   feature6 > 0.3333: classF (132.69/74.62)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature9 <= 0.8: classF (49.65/9.95)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature7 <= 0.84: classA (18.45/7.77)
|   |   |   |   |   |   |   feature7 > 0.84: classF (5.32/1.07)
|   |   |   |   |   |   feature9 > 0.8667: classF (12.53/2.51)
|   |   |   |   feature6 > 0.5667: classF (148.92/1.8)
|   |   |   predS = classG
|   |   |   |   feature7 <= 0.76
|   |   |   |   |   feature9 <= 0.5: classA (11.9/5.35)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.3333: classA (4.37/1.09)
|   |   |   |   |   |   feature6 > 0.3333: classF (5.49/1.99)
|   |   |   |   feature7 > 0.76: classF (24.02/4.19)
|   |   prevPredS = classG: classF (83.66/41.36)
|   feature2 = classG
|   |   predS = classA: classF (3.87/2.9)
|   |   predS = classB: classA (3.0/1.32)
|   |   predS = classC: classF (3.41/2.5)
|   |   predS = classD: classG (5.43/3.0)
|   |   predS = classE
|   |   |   feature6 <= 0.4: classD (9.36/4.27)
|   |   |   feature6 > 0.4: classC (11.17/7.2)
|   |   predS = classF: classG (9.09/5.47)
|   |   predS = classG: classG (14.23/6.18)
feature3 = classG
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature5 = classA
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature7 <= 0.64: classG (9.48/4.58)
|   |   |   |   |   |   feature7 > 0.64: classA (11.37/7.3)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classB (10.34/6.33)
|   |   |   |   |   |   feature6 > 0.5667: classG (49.73/23.05)
|   |   |   |   feature5 = classB: classA (0.76/0.37)
|   |   |   |   feature5 = classC: classG (0.0)
|   |   |   |   feature5 = classD: classA (0.01/0.01)
|   |   |   |   feature5 = classE: classA (3.02/1.46)
|   |   |   |   feature5 = classF: classF (2.28/0.63)
|   |   |   |   feature5 = classG: classA (29.47/14.95)
|   |   |   prevPredS = classB: classB (0.62/0.23)
|   |   |   prevPredS = classC: classA (4.0/2.63)
|   |   |   prevPredS = classD: classD (0.81/0.41)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.3: classD (3.49/0.92)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature6 <= 0.4333: classE (4.87/2.76)
|   |   |   |   |   feature6 > 0.4333: classA (7.49/3.96)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.3667: classC (3.7/1.65)
|   |   |   |   feature9 > 0.3667: classA (17.87/7.01)
|   |   |   prevPredS = classG
|   |   |   |   feature7 <= 0.72
|   |   |   |   |   feature7 <= 0.48: classG (4.29/1.94)
|   |   |   |   |   feature7 > 0.48: classA (8.11/4.0)
|   |   |   |   feature7 > 0.72: classG (25.45/11.49)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667: classA (62.87/38.73)
|   |   |   |   feature9 > 0.9667: classC (29.9/17.45)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature9 <= 0.9333: classA (8.47/3.64)
|   |   |   |   |   feature9 > 0.9333: classG (13.35/3.53)
|   |   |   |   feature6 > 0.7333
|   |   |   |   |   feature6 <= 0.7667: classD (12.69/6.61)
|   |   |   |   |   feature6 > 0.7667
|   |   |   |   |   |   prevPredS = classA: classA (21.67/6.15)
|   |   |   |   |   |   prevPredS = classB: classA (0.02/0.0)
|   |   |   |   |   |   prevPredS = classC: classA (0.01/0.0)
|   |   |   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   |   |   prevPredS = classE: classA (0.01/0.0)
|   |   |   |   |   |   prevPredS = classF: classA (0.07/0.02)
|   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   feature6 <= 0.9333: classA (5.98/1.5)
|   |   |   |   |   |   |   feature6 > 0.9333: classG (5.07/1.92)
|   predS = classB
|   |   feature6 <= 0.9667: classB (25.88/14.08)
|   |   feature6 > 0.9667: classA (134.34/60.75)
|   predS = classC
|   |   feature6 <= 0.2667
|   |   |   feature6 <= 0.2333: classE (6.67/3.58)
|   |   |   feature6 > 0.2333: classA (57.99/28.24)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.4333: classF (43.23/29.76)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.5: classD (15.74/6.3)
|   |   |   |   |   |   feature6 > 0.5: classE (13.97/5.84)
|   |   |   |   feature6 > 0.6: classG (18.18/13.19)
|   |   |   feature6 > 0.7333: classB (26.18/14.02)
|   predS = classD
|   |   feature2 = classA
|   |   |   feature6 <= 0.7: classF (81.58/47.97)
|   |   |   feature6 > 0.7: classD (19.42/6.84)
|   |   feature2 = classB: classF (0.0)
|   |   feature2 = classC
|   |   |   feature6 <= 0.5333: classF (3.69/1.83)
|   |   |   feature6 > 0.5333: classA (3.49/1.31)
|   |   feature2 = classD
|   |   |   feature6 <= 0.4667: classF (52.74/27.6)
|   |   |   feature6 > 0.4667: classD (38.65/20.11)
|   |   feature2 = classE: classF (54.87/33.68)
|   |   feature2 = classF: classF (4.76/1.87)
|   |   feature2 = classG
|   |   |   feature9 <= 0.4333
|   |   |   |   feature6 <= 0.3: classA (4.44/1.11)
|   |   |   |   feature6 > 0.3: classF (8.99/5.03)
|   |   |   feature9 > 0.4333: classG (61.26/32.7)
|   predS = classE
|   |   feature6 <= 0.3: classG (123.64/63.62)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classD (64.18/47.96)
|   |   |   |   feature6 > 0.4333: classC (488.17/308.47)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.6667: classF (68.05/49.3)
|   |   |   |   feature6 > 0.6667: classA (71.35/45.45)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature9 <= 0.8
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.5: classA (11.24/6.31)
|   |   |   |   |   feature9 > 0.5: classC (17.16/10.2)
|   |   |   |   feature9 > 0.5667: classG (11.35/4.39)
|   |   |   feature9 > 0.8
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3: classG (11.88/3.14)
|   |   |   |   |   |   feature6 > 0.3: classA (4.55/2.24)
|   |   |   |   |   feature6 > 0.4333: classB (56.26/27.33)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classD (7.46/3.09)
|   |   |   |   |   |   feature6 > 0.5: classG (11.88/3.14)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classA (11.74/7.2)
|   |   |   |   |   |   feature6 > 0.5667: classF (7.62/0.11)
|   |   prevPredS = classB: classF (4.55/3.31)
|   |   prevPredS = classC: classF (3.18/2.23)
|   |   prevPredS = classD
|   |   |   feature2 = classA: classA (0.77/0.36)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classD (1.05/0.63)
|   |   |   feature2 = classE: classG (0.0)
|   |   |   feature2 = classF: classD (9.52/5.82)
|   |   |   feature2 = classG: classG (8.1/3.92)
|   |   prevPredS = classE: classF (24.31/13.26)
|   |   prevPredS = classF: classF (27.77/14.64)
|   |   prevPredS = classG
|   |   |   feature8 <= 0.3333: classF (19.31/5.85)
|   |   |   feature8 > 0.3333: classG (67.49/31.64)
|   predS = classG
|   |   feature6 <= 0.7
|   |   |   feature2 = classA
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 <= 0.6: classA (23.02/11.62)
|   |   |   |   |   feature7 > 0.6
|   |   |   |   |   |   feature7 <= 0.88: classG (19.29/7.11)
|   |   |   |   |   |   feature7 > 0.88: classA (14.2/7.06)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   prevPredS = classD: classG (0.04/0.01)
|   |   |   |   prevPredS = classE: classG (4.0/2.61)
|   |   |   |   prevPredS = classF: classG (2.28/0.77)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 <= 0.88: classG (11.4/4.02)
|   |   |   |   |   feature7 > 0.88: classA (3.65/1.54)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classC (0.02/0.01)
|   |   |   feature2 = classD: classD (5.8/3.28)
|   |   |   feature2 = classE
|   |   |   |   prevPredS = classA: classE (6.07/3.43)
|   |   |   |   prevPredS = classB: classF (0.0)
|   |   |   |   prevPredS = classC: classF (0.0)
|   |   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   |   prevPredS = classE: classA (9.13/4.71)
|   |   |   |   prevPredS = classF: classF (3.96/0.74)
|   |   |   |   prevPredS = classG: classG (0.83/0.24)
|   |   |   feature2 = classF: classF (2.56/1.26)
|   |   |   feature2 = classG
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   feature9 <= 0.5333: classC (5.7/2.23)
|   |   |   |   |   |   feature9 > 0.5333: classG (4.79/1.39)
|   |   |   |   |   feature9 > 0.6667: classF (9.28/4.73)
|   |   |   |   prevPredS = classB: classG (0.02/0.01)
|   |   |   |   prevPredS = classC: classG (0.11/0.03)
|   |   |   |   prevPredS = classD: classG (0.76/0.22)
|   |   |   |   prevPredS = classE: classG (9.73/5.36)
|   |   |   |   prevPredS = classF: classG (6.93/2.01)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   feature9 <= 0.5333: classG (24.46/7.07)
|   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   feature6 <= 0.6: classG (19.65/6.19)
|   |   |   |   |   |   |   |   feature6 > 0.6: classA (13.04/3.35)
|   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classA (20.65/7.55)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classG (4.22/2.02)
|   |   |   |   |   feature9 > 0.6: classG (38.53/12.55)
|   |   feature6 > 0.7
|   |   |   feature9 <= 0.7333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5667: classC (8.61/2.69)
|   |   |   |   |   feature9 > 0.5667: classA (5.65/2.11)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   prevPredS = classD: classG (0.69/0.18)
|   |   |   |   prevPredS = classE: classG (5.3/1.4)
|   |   |   |   prevPredS = classF: classG (2.73/0.72)
|   |   |   |   prevPredS = classG: classG (20.68/7.03)
|   |   |   feature9 > 0.7333: classG (226.07/59.81)

Number of Leaves  : \t1241

Size of the tree : \t1961


Weight: 1.15

J48 pruned tree
------------------

predS = classA
|   feature6 <= 0.6667
|   |   feature6 <= 0.5667
|   |   |   feature6 <= 0.5333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature9 <= 0.4667: classD (25.85/13.68)
|   |   |   |   |   |   |   feature9 > 0.4667: classA (19.15/4.25)
|   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.3: classD (8.75/3.95)
|   |   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classG (45.13/19.94)
|   |   |   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   |   |   feature9 <= 0.5667: classA (4.08/0.67)
|   |   |   |   |   |   |   |   |   feature9 > 0.5667: classG (26.62/6.24)
|   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature6 <= 0.3333: classD (26.73/11.95)
|   |   |   |   |   |   |   feature6 > 0.3333: classA (187.5/61.82)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature5 = classA: classF (29.24/17.64)
|   |   |   |   |   |   |   feature5 = classB: classB (2.67/0.51)
|   |   |   |   |   |   |   feature5 = classC: classA (0.1/0.02)
|   |   |   |   |   |   |   feature5 = classD: classA (1.73/0.29)
|   |   |   |   |   |   |   feature5 = classE: classA (9.68/1.6)
|   |   |   |   |   |   |   feature5 = classF: classF (1.53/0.36)
|   |   |   |   |   |   |   feature5 = classG: classA (1.36/0.22)
|   |   |   |   prevPredS = classB: classB (33.21/20.28)
|   |   |   |   prevPredS = classC: classC (12.04/5.22)
|   |   |   |   prevPredS = classD: classA (22.01/13.76)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5: classB (3.3/1.14)
|   |   |   |   |   |   |   feature9 > 0.5: classD (22.55/3.83)
|   |   |   |   |   |   feature9 > 0.6: classE (6.77/2.34)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature9 <= 0.3333: classE (22.4/8.81)
|   |   |   |   |   |   feature9 > 0.3333
|   |   |   |   |   |   |   feature9 <= 0.7333: classA (29.5/11.34)
|   |   |   |   |   |   |   feature9 > 0.7333: classE (16.71/5.51)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 <= 0.56: classA (14.36/6.46)
|   |   |   |   |   feature7 > 0.56: classF (19.41/10.65)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.5667: classA (45.23/22.18)
|   |   |   |   |   feature9 > 0.5667: classD (61.42/18.27)
|   |   |   feature6 > 0.5333: classB (326.71/137.9)
|   |   feature6 > 0.5667
|   |   |   feature6 <= 0.6: classG (213.22/88.55)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.6333: classD (346.12/154.58)
|   |   |   |   feature6 > 0.6333
|   |   |   |   |   prevPredS = classA: classA (27.88/14.49)
|   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   prevPredS = classC: classA (2.92/0.53)
|   |   |   |   |   prevPredS = classD: classA (0.05/0.01)
|   |   |   |   |   prevPredS = classE: classA (6.69/1.1)
|   |   |   |   |   prevPredS = classF: classE (6.82/2.51)
|   |   |   |   |   prevPredS = classG: classG (43.41/9.45)
|   feature6 > 0.6667
|   |   feature6 <= 0.7
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9667: classA (149.54/68.67)
|   |   |   |   feature9 > 0.9667: classC (561.65/321.08)
|   |   |   prevPredS = classB: classC (0.0)
|   |   |   prevPredS = classC: classC (53.72/27.23)
|   |   |   prevPredS = classD: classA (15.37/5.85)
|   |   |   prevPredS = classE
|   |   |   |   feature8 <= 0.9: classE (7.17/3.48)
|   |   |   |   feature8 > 0.9: classA (8.25/3.13)
|   |   |   prevPredS = classF: classA (21.47/9.46)
|   |   |   prevPredS = classG: classA (12.79/4.85)
|   |   feature6 > 0.7
|   |   |   feature6 <= 0.7667
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature9 <= 0.6: classF (20.75/8.7)
|   |   |   |   |   feature9 > 0.6: classE (2.6/0.45)
|   |   |   |   feature9 > 0.6333: classA (143.62/78.65)
|   |   |   feature6 > 0.7667
|   |   |   |   feature5 = classA: classA (156.27/40.97)
|   |   |   |   feature5 = classB: classA (0.59/0.11)
|   |   |   |   feature5 = classC: classA (3.17/0.71)
|   |   |   |   feature5 = classD: classA (6.56/1.2)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature9 <= 0.7: classA (15.74/3.69)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature6 <= 0.9333
|   |   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   |   feature8 <= 0.8333: classE (9.89/3.1)
|   |   |   |   |   |   |   |   feature8 > 0.8333: classA (3.46/0.57)
|   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   |   |   feature2 = classE: classE (12.37/3.71)
|   |   |   |   |   |   |   feature2 = classF: classA (0.29/0.05)
|   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   |   feature6 > 0.9333: classA (3.82/0.63)
|   |   |   |   feature5 = classF: classF (50.54/20.64)
|   |   |   |   feature5 = classG: classA (10.85/4.02)
predS = classB
|   prevPredS = classA
|   |   feature9 <= 0.6333
|   |   |   feature9 <= 0.4667: classE (18.21/7.85)
|   |   |   feature9 > 0.4667: classC (43.41/20.07)
|   |   feature9 > 0.6333: classA (31.88/18.32)
|   prevPredS = classB
|   |   feature9 <= 0.9: classB (72.4/41.17)
|   |   feature9 > 0.9
|   |   |   feature9 <= 0.9333
|   |   |   |   feature6 <= 0.9667: classA (52.53/12.1)
|   |   |   |   feature6 > 0.9667: classB (13.22/5.36)
|   |   |   feature9 > 0.9333: classB (1314.15/688.75)
|   prevPredS = classC: classC (27.27/19.07)
|   prevPredS = classD: classD (0.4/0.13)
|   prevPredS = classE
|   |   feature6 <= 0.3333: classE (16.7/6.3)
|   |   feature6 > 0.3333: classA (8.81/4.57)
|   prevPredS = classF: classA (14.9/11.37)
|   prevPredS = classG: classG (0.7/0.22)
predS = classC
|   feature6 <= 0.7333
|   |   feature6 <= 0.2667: classC (613.57/363.82)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.6
|   |   |   |   feature6 <= 0.4333: classE (534.87/331.9)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5: classD (137.86/79.65)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classA (224.22/139.65)
|   |   |   |   |   |   feature6 > 0.5333: classC (78.73/47.46)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.7: classD (153.36/71.5)
|   |   |   |   feature6 > 0.7: classC (29.88/7.06)
|   feature6 > 0.7333
|   |   feature6 <= 0.8: classA (162.78/91.41)
|   |   feature6 > 0.8: classC (265.16/120.64)
predS = classD
|   feature2 = classA
|   |   feature7 <= 0.4
|   |   |   feature6 <= 0.7: classG (56.07/37.16)
|   |   |   feature6 > 0.7: classD (9.39/1.94)
|   |   feature7 > 0.4
|   |   |   feature6 <= 0.3667
|   |   |   |   feature6 <= 0.3333: classE (33.08/17.39)
|   |   |   |   feature6 > 0.3333: classA (15.32/7.05)
|   |   |   feature6 > 0.3667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4667: classD (620.68/350.56)
|   |   |   |   |   |   feature6 > 0.4667: classG (19.01/6.66)
|   |   |   |   |   feature6 > 0.5333: classD (20.55/5.44)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classG (52.26/37.7)
|   |   |   |   prevPredS = classD: classG (82.07/44.09)
|   |   |   |   prevPredS = classE: classD (2.71/1.43)
|   |   |   |   prevPredS = classF: classG (25.71/18.55)
|   |   |   |   prevPredS = classG: classD (16.33/8.62)
|   feature2 = classB: classB (37.28/24.69)
|   feature2 = classC: classA (341.72/230.08)
|   feature2 = classD
|   |   feature6 <= 0.5
|   |   |   feature6 <= 0.4333: classD (127.54/89.08)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classG (660.88/358.23)
|   |   |   |   feature6 > 0.4667: classD (66.64/40.89)
|   |   feature6 > 0.5
|   |   |   prevPredS = classA: classC (7.79/2.34)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC: classD (3.24/1.49)
|   |   |   |   feature5 = classD: classD (29.32/19.91)
|   |   |   |   feature5 = classE: classC (19.78/10.07)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classD (0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.5: classG (48.04/27.08)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   feature7 <= 0.68
|   |   |   |   |   |   |   feature9 <= 0.9667: classD (45.08/16.98)
|   |   |   |   |   |   |   feature9 > 0.9667: classC (19.61/6.02)
|   |   |   |   |   |   feature7 > 0.68: classC (26.95/12.77)
|   |   |   |   |   feature7 > 0.72: classD (135.75/37.79)
|   |   |   prevPredS = classE: classE (13.29/6.19)
|   |   |   prevPredS = classF: classD (7.4/1.22)
|   |   |   prevPredS = classG: classD (20.26/3.34)
|   feature2 = classE
|   |   prevPredS = classA
|   |   |   feature9 <= 0.5333: classC (64.73/38.44)
|   |   |   feature9 > 0.5333
|   |   |   |   feature9 <= 0.8333
|   |   |   |   |   feature6 <= 0.4333: classD (5.75/1.35)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4667: classG (8.15/2.61)
|   |   |   |   |   |   feature6 > 0.4667: classD (8.66/1.83)
|   |   |   |   feature9 > 0.8333: classE (16.2/8.09)
|   |   prevPredS = classB: classD (0.08/0.04)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333: classD (11.7/3.53)
|   |   |   |   feature6 > 0.4333: classG (24.16/7.52)
|   |   |   feature6 > 0.5333
|   |   |   |   feature9 <= 0.4333: classE (9.94/4.63)
|   |   |   |   feature9 > 0.4333
|   |   |   |   |   feature9 <= 0.8: classD (8.47/1.63)
|   |   |   |   |   feature9 > 0.8: classA (8.88/3.97)
|   |   prevPredS = classD
|   |   |   feature9 <= 0.6333
|   |   |   |   feature7 <= 0.44
|   |   |   |   |   feature6 <= 0.5: classG (19.38/11.47)
|   |   |   |   |   feature6 > 0.5: classD (10.64/4.98)
|   |   |   |   feature7 > 0.44
|   |   |   |   |   feature6 <= 0.5333: classE (239.03/144.17)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classG (40.65/12.53)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.7: classE (7.88/2.44)
|   |   |   |   |   |   |   feature6 > 0.7: classF (9.4/4.03)
|   |   |   feature9 > 0.6333
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.3333: classE (7.68/1.63)
|   |   |   |   |   feature6 > 0.3333: classD (294.78/157.95)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.6667: classD (3.31/0.58)
|   |   |   |   |   feature9 > 0.6667: classE (36.11/12.64)
|   |   prevPredS = classE
|   |   |   feature7 <= 0.64
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature5 = classA: classD (13.49/6.7)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   feature5 = classD: classA (4.28/2.13)
|   |   |   |   |   |   feature5 = classE: classE (21.6/10.02)
|   |   |   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   feature6 > 0.4333: classG (251.65/165.77)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature8 <= 0.6333: classD (38.77/18.31)
|   |   |   |   |   feature8 > 0.6333
|   |   |   |   |   |   feature7 <= 0.56: classE (6.97/3.01)
|   |   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   |   feature6 <= 0.5333: classD (7.01/2.5)
|   |   |   |   |   |   |   feature6 > 0.5333: classE (5.67/2.14)
|   |   |   feature7 > 0.64: classE (392.67/209.15)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.4333: classE (20.83/12.53)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.5333: classG (50.98/27.89)
|   |   |   |   feature6 > 0.5333: classD (15.85/4.77)
|   |   prevPredS = classG
|   |   |   feature6 <= 0.4667: classG (81.45/33.58)
|   |   |   feature6 > 0.4667
|   |   |   |   feature9 <= 0.3333: classE (53.82/12.63)
|   |   |   |   feature9 > 0.3333
|   |   |   |   |   feature6 <= 0.6333: classG (7.92/1.65)
|   |   |   |   |   feature6 > 0.6333: classD (10.07/1.66)
|   feature2 = classF: classF (183.48/120.34)
|   feature2 = classG: classG (93.68/41.75)
predS = classE
|   prevPredS = classA
|   |   feature9 <= 0.9333
|   |   |   feature6 <= 0.5
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature7 <= 0.4: classD (47.55/30.08)
|   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   feature6 <= 0.3333: classA (21.97/8.71)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (8.16/1.77)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (35.41/25.91)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.5333: classC (360.46/196.79)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature6 <= 0.4333: classE (172.5/84.96)
|   |   |   |   |   |   feature6 > 0.4333: classD (346.79/249.91)
|   |   |   feature6 > 0.5: classE (107.06/50.87)
|   |   feature9 > 0.9333
|   |   |   feature7 <= 0.6: classE (51.63/38.98)
|   |   |   feature7 > 0.6
|   |   |   |   feature5 = classA: classA (54.18/31.35)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC: classC (0.08/0.04)
|   |   |   |   feature5 = classD: classD (0.13/0.07)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.6: classD (647.89/352.27)
|   |   |   |   |   feature6 > 0.6: classA (13.41/2.22)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classD (0.0)
|   prevPredS = classB
|   |   feature2 = classA: classA (2.77/1.37)
|   |   feature2 = classB
|   |   |   feature6 <= 0.5333: classA (10.25/7.72)
|   |   |   feature6 > 0.5333: classB (8.16/1.66)
|   |   feature2 = classC: classA (18.11/8.93)
|   |   feature2 = classD: classD (0.03/0.02)
|   |   feature2 = classE: classE (163.76/110.31)
|   |   feature2 = classF: classE (0.0)
|   |   feature2 = classG: classE (0.0)
|   prevPredS = classC: classC (169.68/113.55)
|   prevPredS = classD
|   |   feature9 <= 0.5333
|   |   |   feature2 = classA: classA (5.84/3.05)
|   |   |   feature2 = classB: classE (0.0)
|   |   |   feature2 = classC: classC (0.05/0.03)
|   |   |   feature2 = classD: classD (70.56/50.11)
|   |   |   feature2 = classE: classE (279.15/187.85)
|   |   |   feature2 = classF: classD (49.0/31.09)
|   |   |   feature2 = classG: classE (0.0)
|   |   feature9 > 0.5333: classD (575.9/344.7)
|   prevPredS = classE
|   |   feature9 <= 0.9
|   |   |   feature8 <= 0.6333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classE (0.38/0.23)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature9 <= 0.6: classD (102.93/63.51)
|   |   |   |   |   |   feature9 > 0.6: classE (19.78/12.4)
|   |   |   |   |   feature5 = classE: classE (1088.87/669.85)
|   |   |   |   |   feature5 = classF: classG (9.08/6.48)
|   |   |   |   |   feature5 = classG: classG (31.44/22.93)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature2 = classA: classE (28.28/14.51)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classE (1.18/0.32)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature9 <= 0.5333: classE (14.0/5.82)
|   |   |   |   |   |   feature9 > 0.5333: classD (13.08/6.05)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.7333: classE (138.39/83.7)
|   |   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   |   feature6 <= 0.8
|   |   |   |   |   |   |   |   feature9 <= 0.5: classD (5.18/0.87)
|   |   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classG (11.69/3.06)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.8333: classE (3.21/0.53)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.8333: classD (3.89/1.05)
|   |   |   |   |   |   |   feature6 > 0.8: classE (19.54/6.29)
|   |   |   |   |   feature2 = classF: classF (9.21/3.86)
|   |   |   |   |   feature2 = classG: classG (1.65/0.55)
|   |   |   feature8 > 0.6333: classE (2433.03/1520.78)
|   |   feature9 > 0.9
|   |   |   feature6 <= 0.4667
|   |   |   |   feature8 <= 0.9333: classE (107.86/68.28)
|   |   |   |   feature8 > 0.9333
|   |   |   |   |   feature6 <= 0.4: classG (13.21/4.62)
|   |   |   |   |   feature6 > 0.4: classA (153.15/83.7)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature8 <= 0.8667
|   |   |   |   |   |   feature7 <= 0.96: classE (8.05/2.31)
|   |   |   |   |   |   feature7 > 0.96: classA (12.51/4.19)
|   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   feature8 <= 0.9667: classE (7.61/1.26)
|   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   feature7 <= 0.84: classB (9.79/3.0)
|   |   |   |   |   |   |   |   feature7 > 0.84: classE (5.58/0.92)
|   |   |   |   |   |   feature6 > 0.6667: classA (5.17/1.69)
|   |   |   |   feature6 > 0.7: classE (28.44/4.83)
|   prevPredS = classF: classE (952.13/627.7)
|   prevPredS = classG
|   |   feature2 = classA: classE (239.09/141.07)
|   |   feature2 = classB: classE (0.0)
|   |   feature2 = classC: classC (0.07/0.04)
|   |   feature2 = classD: classD (39.09/22.49)
|   |   feature2 = classE
|   |   |   feature8 <= 0.5: classG (40.73/26.15)
|   |   |   feature8 > 0.5: classE (29.8/20.63)
|   |   feature2 = classF: classE (180.09/104.27)
|   |   feature2 = classG: classG (39.72/28.02)
predS = classF
|   prevPredS = classA
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4
|   |   |   |   feature6 <= 0.2667: classG (93.64/18.99)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature6 <= 0.3: classE (10.24/5.94)
|   |   |   |   |   |   feature6 > 0.3: classA (70.59/33.31)
|   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   feature2 = classC: classA (0.03/0.02)
|   |   |   |   |   feature2 = classD: classA (17.22/9.93)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.3333: classA (28.78/12.81)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.3667: classG (17.05/6.68)
|   |   |   |   |   |   |   feature6 > 0.3667: classA (8.96/1.74)
|   |   |   |   |   feature2 = classF: classA (0.0)
|   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   feature6 > 0.4
|   |   |   |   feature9 <= 0.6333: classC (25.0/8.58)
|   |   |   |   feature9 > 0.6333: classE (530.2/281.23)
|   |   feature6 > 0.4667
|   |   |   feature6 <= 0.5: classD (172.66/55.09)
|   |   |   feature6 > 0.5
|   |   |   |   feature6 <= 0.5333: classG (139.53/64.89)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classA (269.82/137.44)
|   |   |   |   |   feature6 > 0.5667: classF (24.84/0.94)
|   prevPredS = classB
|   |   feature6 <= 0.4333
|   |   |   feature6 <= 0.4: classB (22.27/11.53)
|   |   |   feature6 > 0.4: classE (32.56/12.44)
|   |   feature6 > 0.4333: classA (20.78/14.37)
|   prevPredS = classC: classA (47.38/27.64)
|   prevPredS = classD
|   |   feature9 <= 0.6333: classD (154.94/97.85)
|   |   feature9 > 0.6333: classA (34.11/14.7)
|   prevPredS = classE
|   |   feature5 = classA: classE (10.24/6.79)
|   |   feature5 = classB: classE (0.0)
|   |   feature5 = classC
|   |   |   feature7 <= 0.44: classF (37.24/15.94)
|   |   |   feature7 > 0.44: classA (19.0/9.33)
|   |   feature5 = classD
|   |   |   feature6 <= 0.4333: classE (18.82/11.68)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.5: classD (31.93/6.26)
|   |   |   |   feature6 > 0.5: classA (12.81/7.51)
|   |   feature5 = classE
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classG (21.07/9.97)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   feature7 <= 0.76: classA (13.05/5.73)
|   |   |   |   |   |   |   feature7 > 0.76: classE (12.88/5.79)
|   |   |   |   |   |   feature6 > 0.3667: classE (33.34/8.49)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   feature9 <= 0.5: classE (5.15/0.85)
|   |   |   |   |   |   |   |   |   feature9 > 0.5: classD (7.75/1.28)
|   |   |   |   |   |   |   |   feature9 > 0.6333: classE (5.45/0.9)
|   |   |   |   |   |   |   feature2 = classF: classE (32.53/5.36)
|   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   |   feature6 > 0.4667: classD (28.26/8.62)
|   |   |   |   |   feature6 > 0.5: classG (17.38/6.28)
|   |   |   feature6 > 0.5333
|   |   |   |   feature6 <= 0.5667: classA (27.6/10.12)
|   |   |   |   feature6 > 0.5667: classE (4.96/1.14)
|   |   feature5 = classF: classF (27.28/15.13)
|   |   feature5 = classG: classE (0.0)
|   prevPredS = classF
|   |   feature6 <= 0.5667
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3: classG (60.65/29.81)
|   |   |   |   |   feature6 > 0.3: classA (54.54/25.64)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5: classD (113.25/57.27)
|   |   |   |   |   feature6 > 0.5: classG (48.05/16.47)
|   |   |   feature6 > 0.5333: classA (66.95/17.51)
|   |   feature6 > 0.5667
|   |   |   feature9 <= 0.6
|   |   |   |   feature9 <= 0.5: classF (24.85/9.52)
|   |   |   |   feature9 > 0.5: classG (113.09/32.89)
|   |   |   feature9 > 0.6: classF (100.6/17.19)
|   prevPredS = classG
|   |   feature6 <= 0.5
|   |   |   feature6 <= 0.4333: classG (36.8/22.46)
|   |   |   feature6 > 0.4333: classD (34.17/16.4)
|   |   feature6 > 0.5
|   |   |   feature6 <= 0.5333: classF (57.52/11.97)
|   |   |   feature6 > 0.5333: classG (84.41/48.65)
predS = classG
|   feature5 = classA
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6667
|   |   |   |   feature9 <= 0.5333: classA (43.46/29.77)
|   |   |   |   feature9 > 0.5333: classG (35.84/20.01)
|   |   |   feature9 > 0.6667
|   |   |   |   feature7 <= 0.92
|   |   |   |   |   feature6 <= 0.5: classG (30.01/12.46)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature9 <= 0.7: classE (32.1/6.69)
|   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   feature9 <= 0.9333: classA (90.45/38.72)
|   |   |   |   |   |   |   feature9 > 0.9333: classG (7.84/4.21)
|   |   |   |   feature7 > 0.92: classE (91.39/52.84)
|   |   prevPredS = classB: classG (0.0)
|   |   prevPredS = classC: classG (0.02/0.0)
|   |   prevPredS = classD: classA (5.05/1.76)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.3
|   |   |   |   feature9 <= 0.4: classG (7.91/1.38)
|   |   |   |   feature9 > 0.4: classA (16.31/2.69)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.4333: classE (40.34/14.1)
|   |   |   |   feature6 > 0.4333: classF (5.39/2.08)
|   |   prevPredS = classF: classG (47.12/13.28)
|   |   prevPredS = classG
|   |   |   feature6 <= 0.4
|   |   |   |   feature7 <= 0.8: classE (10.04/3.25)
|   |   |   |   feature7 > 0.8: classA (49.11/8.17)
|   |   |   feature6 > 0.4
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4667: classG (20.52/6.83)
|   |   |   |   |   feature6 > 0.4667: classF (8.45/2.12)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature7 <= 0.52: classG (14.41/2.9)
|   |   |   |   |   feature7 > 0.52: classA (40.36/21.86)
|   feature5 = classB: classA (30.79/22.97)
|   feature5 = classC
|   |   feature9 <= 0.5: classA (44.41/23.56)
|   |   feature9 > 0.5: classG (25.19/18.0)
|   feature5 = classD: classD (81.18/51.48)
|   feature5 = classE
|   |   prevPredS = classA
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.4667: classG (19.44/6.19)
|   |   |   |   feature6 > 0.4667: classE (94.02/24.42)
|   |   |   feature6 > 0.5667: classG (27.18/16.38)
|   |   prevPredS = classB: classE (0.0)
|   |   prevPredS = classC: classG (0.01/0.0)
|   |   prevPredS = classD: classE (3.37/1.18)
|   |   prevPredS = classE
|   |   |   feature9 <= 0.5667
|   |   |   |   feature9 <= 0.4333: classG (30.5/15.77)
|   |   |   |   feature9 > 0.4333: classA (87.27/51.77)
|   |   |   feature9 > 0.5667: classE (34.84/11.01)
|   |   prevPredS = classF
|   |   |   feature9 <= 0.5333
|   |   |   |   feature9 <= 0.4: classG (15.2/8.74)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature6 <= 0.4: classE (8.08/1.33)
|   |   |   |   |   feature6 > 0.4: classF (29.63/10.67)
|   |   |   feature9 > 0.5333: classG (23.91/6.96)
|   |   prevPredS = classG
|   |   |   feature2 = classA: classG (12.02/6.96)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classG (0.29/0.06)
|   |   |   feature2 = classE: classE (14.81/6.37)
|   |   |   feature2 = classF: classD (11.49/4.7)
|   |   |   feature2 = classG: classG (1.85/0.37)
|   feature5 = classF
|   |   feature9 <= 0.9667: classF (117.21/70.49)
|   |   feature9 > 0.9667
|   |   |   feature6 <= 0.5667: classG (8.93/3.55)
|   |   |   feature6 > 0.5667: classA (51.27/10.08)
|   feature5 = classG: classG (454.47/193.02)

Number of Leaves  : \t351

Size of the tree : \t556


Weight: 0.75

J48 pruned tree
------------------

feature3 = classA
|   predS = classA
|   |   feature6 <= 0.7667
|   |   |   prevPredS = classA
|   |   |   |   feature8 <= 0.4: classE (9.24/4.83)
|   |   |   |   feature8 > 0.4: classA (17.04/9.5)
|   |   |   prevPredS = classB: classB (0.04/0.01)
|   |   |   prevPredS = classC: classC (0.9/0.55)
|   |   |   prevPredS = classD: classG (5.74/2.18)
|   |   |   prevPredS = classE: classE (1.46/1.02)
|   |   |   prevPredS = classF: classC (0.84/0.56)
|   |   |   prevPredS = classG: classD (1.66/1.13)
|   |   feature6 > 0.7667: classA (48.33/6.39)
|   predS = classB: classA (19.26/8.6)
|   predS = classC
|   |   feature6 <= 0.2667: classA (8.02/4.04)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.7333: classC (18.47/8.88)
|   |   |   feature6 > 0.7333: classB (3.24/1.56)
|   predS = classD: classG (44.69/24.52)
|   predS = classE
|   |   feature6 <= 0.3: classG (16.01/7.75)
|   |   feature6 > 0.3: classA (107.51/77.54)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4: classA (6.23/3.96)
|   |   |   feature6 > 0.4: classB (8.37/4.39)
|   |   feature6 > 0.4667
|   |   |   feature6 <= 0.5: classD (4.03/1.47)
|   |   |   feature6 > 0.5
|   |   |   |   feature6 <= 0.5333: classG (3.18/1.55)
|   |   |   |   feature6 > 0.5333: classA (7.65/4.87)
|   predS = classG
|   |   feature2 = classA: classA (24.49/9.3)
|   |   feature2 = classB: classA (0.0)
|   |   feature2 = classC: classC (0.01/0.0)
|   |   feature2 = classD: classG (0.27/0.15)
|   |   feature2 = classE: classG (4.45/2.03)
|   |   feature2 = classF: classF (0.53/0.36)
|   |   feature2 = classG: classG (0.8/0.3)
feature3 = classB
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667: classA (9.02/3.2)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.5667: classB (12.12/4.18)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.6: classG (3.67/1.71)
|   |   |   |   |   |   |   feature6 > 0.6: classD (3.59/0.6)
|   |   |   |   |   feature6 > 0.6333: classB (12.19/2.12)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.3667: classA (22.86/5.37)
|   |   |   |   |   feature6 > 0.3667: classB (14.64/4.01)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6: classG (4.23/1.42)
|   |   |   |   |   feature6 > 0.6: classA (16.31/6.26)
|   |   |   prevPredS = classC: classA (4.2/1.72)
|   |   |   prevPredS = classD: classA (0.35/0.12)
|   |   |   prevPredS = classE: classE (5.39/4.11)
|   |   |   prevPredS = classF: classC (2.78/1.52)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.5: classA (3.97/1.32)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature6 <= 0.4: classD (2.29/0.33)
|   |   |   |   |   feature6 > 0.4: classG (3.49/1.38)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7: classE (43.36/25.59)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.7333: classB (14.37/3.79)
|   |   |   |   feature6 > 0.7333: classA (12.35/5.37)
|   predS = classB
|   |   feature6 <= 0.3: classE (8.5/1.15)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.6: classA (97.67/50.64)
|   |   |   feature6 > 0.6: classB (191.82/71.26)
|   predS = classC
|   |   feature6 <= 0.2667: classA (35.78/18.01)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.4
|   |   |   |   feature6 <= 0.3667: classE (13.15/7.76)
|   |   |   |   feature6 > 0.3667: classC (23.57/11.07)
|   |   |   feature6 > 0.4
|   |   |   |   feature9 <= 0.7: classE (36.54/22.68)
|   |   |   |   feature9 > 0.7: classB (20.55/9.38)
|   predS = classD
|   |   feature6 <= 0.3667
|   |   |   feature6 <= 0.2333
|   |   |   |   feature9 <= 0.9333: classB (10.74/1.46)
|   |   |   |   feature9 > 0.9333: classA (3.89/0.47)
|   |   |   feature6 > 0.2333
|   |   |   |   feature9 <= 0.4667: classE (16.35/1.99)
|   |   |   |   feature9 > 0.4667: classG (5.75/3.15)
|   |   feature6 > 0.3667
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature9 <= 0.3667: classE (2.74/0.68)
|   |   |   |   |   feature9 > 0.3667: classD (5.96/2.77)
|   |   |   |   feature6 > 0.4333: classG (121.19/67.0)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333: classE (13.05/7.85)
|   |   |   |   feature6 > 0.5333: classD (22.19/13.25)
|   predS = classE
|   |   feature6 <= 0.3: classG (71.4/34.57)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4333: classD (18.26/9.57)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classA (412.76/298.17)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6667: classD (18.19/13.0)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   feature6 <= 0.7: classA (24.56/9.27)
|   |   |   |   |   |   feature6 > 0.7: classE (5.86/2.85)
|   predS = classF
|   |   feature2 = classA: classF (4.95/2.94)
|   |   feature2 = classB
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.2667: classG (2.79/0.37)
|   |   |   |   |   feature6 > 0.2667: classA (5.93/3.7)
|   |   |   |   feature6 > 0.4: classB (24.03/7.31)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (5.36/1.55)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (3.21/0.78)
|   |   |   |   |   feature6 > 0.5333: classA (6.88/2.87)
|   |   feature2 = classC
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4: classA (3.41/2.23)
|   |   |   |   feature6 > 0.4: classB (4.55/2.22)
|   |   |   feature6 > 0.4667: classA (10.88/6.28)
|   |   feature2 = classD: classD (0.55/0.4)
|   |   feature2 = classE
|   |   |   feature6 <= 0.4667: classB (11.52/6.51)
|   |   |   feature6 > 0.4667: classF (9.37/5.26)
|   |   feature2 = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classG (5.21/3.41)
|   |   |   |   |   |   feature6 > 0.4333: classB (11.58/5.48)
|   |   |   |   |   feature6 > 0.4667: classD (5.93/3.1)
|   |   |   |   feature6 > 0.5333: classE (13.12/4.88)
|   |   |   prevPredS = classB: classE (0.78/0.46)
|   |   |   prevPredS = classC: classF (0.03/0.01)
|   |   |   prevPredS = classD: classA (0.64/0.36)
|   |   |   prevPredS = classE: classE (5.6/3.65)
|   |   |   prevPredS = classF: classG (3.84/2.16)
|   |   |   prevPredS = classG: classF (2.61/1.19)
|   |   feature2 = classG: classG (1.0/0.63)
|   predS = classG
|   |   feature2 = classA: classA (31.42/15.03)
|   |   feature2 = classB
|   |   |   feature6 <= 0.4: classB (13.82/3.06)
|   |   |   feature6 > 0.4: classG (6.81/3.76)
|   |   feature2 = classC: classE (1.51/0.62)
|   |   feature2 = classD: classG (1.42/0.8)
|   |   feature2 = classE
|   |   |   prevPredS = classA: classE (8.2/3.99)
|   |   |   prevPredS = classB: classE (0.0)
|   |   |   prevPredS = classC: classE (0.0)
|   |   |   prevPredS = classD: classE (14.96/4.2)
|   |   |   prevPredS = classE: classA (4.93/2.94)
|   |   |   prevPredS = classF: classG (2.96/1.15)
|   |   |   prevPredS = classG: classA (7.81/2.8)
|   |   feature2 = classF: classG (2.79/1.85)
|   |   feature2 = classG: classG (4.17/1.7)
feature3 = classC
|   feature5 = classA
|   |   predS = classA
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5: classA (3.85/2.47)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classC (14.15/3.24)
|   |   |   |   |   feature6 > 0.5333: classB (3.78/1.29)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.6: classA (4.03/2.16)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.6333: classD (3.12/0.63)
|   |   |   |   |   |   feature6 > 0.6333: classA (2.84/0.82)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (12.23/7.28)
|   |   |   |   |   feature6 > 0.7: classA (4.66/1.66)
|   |   predS = classB: classA (22.3/7.61)
|   |   predS = classC
|   |   |   feature8 <= 0.7333
|   |   |   |   feature6 <= 0.4333: classC (30.26/9.89)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.7333: classD (3.03/1.81)
|   |   |   |   |   feature6 > 0.7333: classB (2.48/1.19)
|   |   |   feature8 > 0.7333
|   |   |   |   feature7 <= 0.56: classC (6.62/2.81)
|   |   |   |   feature7 > 0.56: classA (15.41/6.98)
|   |   predS = classD
|   |   |   prevPredS = classA
|   |   |   |   feature7 <= 0.56: classD (41.85/16.5)
|   |   |   |   feature7 > 0.56: classA (12.32/5.02)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5: classG (8.49/3.76)
|   |   |   |   feature6 > 0.5: classC (19.81/3.29)
|   |   |   prevPredS = classD: classG (4.7/2.87)
|   |   |   prevPredS = classE: classG (1.14/0.57)
|   |   |   prevPredS = classF: classF (0.74/0.42)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4667: classG (2.54/0.98)
|   |   |   |   feature6 > 0.4667: classE (5.24/1.11)
|   |   predS = classE
|   |   |   feature6 <= 0.3333
|   |   |   |   feature9 <= 0.7667: classE (20.21/10.79)
|   |   |   |   feature9 > 0.7667: classG (5.24/3.03)
|   |   |   feature6 > 0.3333: classA (139.35/93.16)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.2667: classG (2.52/0.51)
|   |   |   |   |   feature6 > 0.2667: classA (4.52/2.35)
|   |   |   |   feature6 > 0.4: classB (10.51/5.55)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (5.73/2.55)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classG (3.11/1.1)
|   |   |   |   |   feature6 > 0.5333: classA (7.03/3.2)
|   |   predS = classG: classA (27.13/14.59)
|   feature5 = classB
|   |   feature6 <= 0.8
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667: classB (5.23/3.42)
|   |   |   |   feature6 > 0.6667: classE (3.32/1.99)
|   |   |   predS = classB: classC (14.51/3.6)
|   |   |   predS = classC: classC (6.99/4.91)
|   |   |   predS = classD: classG (9.45/4.61)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (4.24/1.48)
|   |   |   |   feature6 > 0.3333: classA (32.25/22.42)
|   |   |   predS = classF: classF (7.94/6.36)
|   |   |   predS = classG: classG (3.1/1.9)
|   |   feature6 > 0.8: classB (34.02/8.84)
|   feature5 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5333: classD (15.88/10.24)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature7 <= 0.64: classA (30.68/17.0)
|   |   |   |   |   |   feature7 > 0.64: classC (15.4/9.6)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (13.34/2.51)
|   |   |   |   |   feature6 > 0.6333: classG (2.89/0.94)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   prevPredS = classA: classC (35.68/21.23)
|   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   prevPredS = classC: classA (20.91/12.25)
|   |   |   |   |   prevPredS = classD: classE (0.0)
|   |   |   |   |   prevPredS = classE: classE (0.0)
|   |   |   |   |   prevPredS = classF: classA (1.94/0.95)
|   |   |   |   |   prevPredS = classG: classE (0.0)
|   |   |   |   feature6 > 0.7: classD (8.61/4.09)
|   |   predS = classB
|   |   |   prevPredS = classA: classB (3.64/2.55)
|   |   |   prevPredS = classB: classA (79.63/23.4)
|   |   |   prevPredS = classC
|   |   |   |   feature9 <= 0.8333: classA (3.1/1.17)
|   |   |   |   feature9 > 0.8333: classC (9.16/3.02)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classE (1.98/0.93)
|   |   |   prevPredS = classF: classA (2.31/0.48)
|   |   |   prevPredS = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.6
|   |   |   |   feature2 = classA: classA (25.17/7.44)
|   |   |   |   feature2 = classB: classC (0.21/0.05)
|   |   |   |   feature2 = classC
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature7 <= 0.8
|   |   |   |   |   |   |   feature6 <= 0.2667: classA (12.38/5.92)
|   |   |   |   |   |   |   feature6 > 0.2667: classC (22.96/11.09)
|   |   |   |   |   |   feature7 > 0.8
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.2667: classA (28.99/14.54)
|   |   |   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   |   |   feature6 <= 0.3667: classD (8.36/5.22)
|   |   |   |   |   |   |   |   |   feature6 > 0.3667: classC (19.13/8.51)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature8 <= 0.9667: classC (3.0/1.2)
|   |   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   |   feature7 <= 0.88: classA (12.32/2.25)
|   |   |   |   |   |   |   |   |   feature7 > 0.88
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.9333: classC (4.31/0.74)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.9333: classA (8.58/1.87)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature7 <= 0.84: classA (25.71/7.77)
|   |   |   |   |   |   feature7 > 0.84: classC (189.35/91.91)
|   |   |   |   feature2 = classD: classC (2.93/0.77)
|   |   |   |   feature2 = classE: classC (6.89/1.8)
|   |   |   |   feature2 = classF: classC (0.0)
|   |   |   |   feature2 = classG: classC (0.0)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature6 <= 0.6667: classC (22.53/8.34)
|   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   prevPredS = classA: classA (15.21/5.41)
|   |   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (20.24/6.99)
|   |   |   |   |   |   prevPredS = classD: classC (4.66/2.17)
|   |   |   |   |   |   prevPredS = classE: classC (2.47/0.72)
|   |   |   |   |   |   prevPredS = classF: classC (16.93/5.82)
|   |   |   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   |   feature6 > 0.8667
|   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   feature9 <= 0.7333: classA (5.99/1.71)
|   |   |   |   |   |   feature9 > 0.7333: classC (3.5/1.03)
|   |   |   |   |   feature7 > 0.84: classC (94.97/11.53)
|   |   predS = classD
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.3333: classE (9.7/4.97)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.3667: classC (6.63/1.11)
|   |   |   |   |   |   feature6 > 0.3667: classD (6.29/2.22)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   prevPredS = classA: classG (8.1/5.29)
|   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   prevPredS = classC
|   |   |   |   |   |   feature6 <= 0.4667: classA (177.31/110.79)
|   |   |   |   |   |   feature6 > 0.4667: classG (5.08/0.84)
|   |   |   |   |   prevPredS = classD: classD (0.9/0.58)
|   |   |   |   |   prevPredS = classE: classD (2.97/1.9)
|   |   |   |   |   prevPredS = classF: classA (8.75/5.47)
|   |   |   |   |   prevPredS = classG: classG (0.0)
|   |   |   feature6 > 0.5
|   |   |   |   prevPredS = classA: classA (3.72/2.35)
|   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   prevPredS = classC: classC (27.09/9.25)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.5333: classG (7.66/3.11)
|   |   |   |   |   feature9 > 0.5333: classC (15.84/5.62)
|   |   |   |   prevPredS = classE: classD (0.11/0.02)
|   |   |   |   prevPredS = classF: classD (2.66/1.28)
|   |   |   |   prevPredS = classG: classD (1.68/0.36)
|   |   predS = classE
|   |   |   feature6 <= 0.3333
|   |   |   |   feature6 <= 0.2333: classC (6.63/1.11)
|   |   |   |   feature6 > 0.2333: classG (73.28/28.66)
|   |   |   feature6 > 0.3333: classA (550.55/362.09)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.2667: classG (4.22/0.69)
|   |   |   |   |   |   feature6 > 0.2667: classA (7.75/4.53)
|   |   |   |   |   feature6 > 0.4333: classB (42.29/20.75)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classD (7.78/2.23)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classG (4.22/0.69)
|   |   |   |   |   |   feature6 > 0.5333: classA (7.63/1.24)
|   |   |   prevPredS = classB: classE (2.76/1.61)
|   |   |   prevPredS = classC
|   |   |   |   feature9 <= 0.8
|   |   |   |   |   feature8 <= 0.7333: classC (4.68/2.39)
|   |   |   |   |   feature8 > 0.7333: classA (7.39/2.97)
|   |   |   |   feature9 > 0.8: classC (7.32/3.28)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.4: classA (4.55/2.5)
|   |   |   |   |   feature6 > 0.4: classC (19.42/2.66)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5: classD (3.6/1.18)
|   |   |   |   |   feature6 > 0.5: classA (4.64/2.15)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.6333: classF (6.4/2.59)
|   |   |   |   feature9 > 0.6333: classE (4.29/1.93)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.4667: classA (23.28/7.48)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature6 <= 0.6: classF (9.12/4.46)
|   |   |   |   |   feature6 > 0.6: classG (6.04/1.49)
|   |   |   prevPredS = classG: classF (6.34/3.35)
|   |   predS = classG
|   |   |   feature9 <= 0.6667: classG (36.42/19.85)
|   |   |   feature9 > 0.6667
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature6 <= 0.5333: classF (5.45/2.83)
|   |   |   |   |   feature6 > 0.5333: classE (9.51/2.52)
|   |   |   |   feature9 > 0.7333: classF (6.98/2.9)
|   feature5 = classD
|   |   prevPredS = classA: classC (19.52/15.11)
|   |   prevPredS = classB: classA (10.01/5.16)
|   |   prevPredS = classC: classC (29.07/15.23)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.9: classD (34.73/23.78)
|   |   |   feature6 > 0.9: classC (15.03/3.02)
|   |   prevPredS = classE: classD (32.73/20.47)
|   |   prevPredS = classF: classE (4.87/3.67)
|   |   prevPredS = classG: classG (11.25/7.17)
|   feature5 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5333: classE (8.19/5.48)
|   |   |   |   |   feature6 > 0.5333: classB (8.52/5.11)
|   |   |   |   feature6 > 0.6: classD (5.26/1.85)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7: classE (14.76/7.97)
|   |   |   |   feature6 > 0.7: classD (2.81/1.39)
|   |   predS = classB
|   |   |   feature2 = classA: classA (0.0)
|   |   |   feature2 = classB: classA (3.34/1.78)
|   |   |   feature2 = classC
|   |   |   |   prevPredS = classA: classC (0.5/0.32)
|   |   |   |   prevPredS = classB: classA (9.34/2.3)
|   |   |   |   prevPredS = classC: classB (0.1/0.02)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE: classA (0.0)
|   |   |   |   prevPredS = classF: classC (6.51/1.81)
|   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   feature2 = classD: classA (0.0)
|   |   |   feature2 = classE: classA (18.84/4.68)
|   |   |   feature2 = classF: classA (0.0)
|   |   |   feature2 = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (13.66/6.88)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.6: classE (19.11/11.46)
|   |   |   |   feature6 > 0.6: classB (9.01/6.16)
|   |   predS = classD: classD (89.23/56.03)
|   |   predS = classE
|   |   |   feature6 <= 0.3
|   |   |   |   feature2 = classA: classG (0.34/0.07)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classC (5.43/2.75)
|   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   feature2 = classE: classE (37.35/16.37)
|   |   |   |   feature2 = classF: classE (2.24/0.98)
|   |   |   |   feature2 = classG: classE (0.0)
|   |   |   feature6 > 0.3
|   |   |   |   feature9 <= 0.4333: classA (44.28/22.19)
|   |   |   |   feature9 > 0.4333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.9333: classC (13.08/8.31)
|   |   |   |   |   |   feature9 > 0.9333: classD (64.99/33.76)
|   |   |   |   |   prevPredS = classB: classA (0.22/0.1)
|   |   |   |   |   prevPredS = classC: classE (0.01/0.0)
|   |   |   |   |   prevPredS = classD: classD (14.21/7.86)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   |   |   feature6 <= 0.4: classD (3.27/0.47)
|   |   |   |   |   |   |   |   feature6 > 0.4: classA (9.0/6.22)
|   |   |   |   |   |   |   feature7 > 0.6: classE (74.45/52.71)
|   |   |   |   |   |   feature6 > 0.4667: classD (31.85/13.19)
|   |   |   |   |   prevPredS = classF: classE (4.51/2.94)
|   |   |   |   |   prevPredS = classG: classG (4.36/3.4)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classG (6.33/4.1)
|   |   |   |   |   |   feature6 > 0.4333: classB (12.86/6.08)
|   |   |   |   |   feature6 > 0.4667: classA (13.73/8.19)
|   |   |   |   feature6 > 0.5333: classE (24.62/7.12)
|   |   |   prevPredS = classB: classE (0.77/0.4)
|   |   |   prevPredS = classC: classF (0.03/0.01)
|   |   |   prevPredS = classD: classA (0.5/0.23)
|   |   |   prevPredS = classE: classE (7.37/3.26)
|   |   |   prevPredS = classF: classG (3.15/1.47)
|   |   |   prevPredS = classG: classF (1.84/0.93)
|   |   predS = classG
|   |   |   prevPredS = classA: classE (12.39/5.97)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.5333: classG (3.1/1.4)
|   |   |   |   feature9 > 0.5333: classA (5.16/2.53)
|   |   |   prevPredS = classF: classF (4.28/2.1)
|   |   |   prevPredS = classG: classG (2.21/1.23)
|   feature5 = classF
|   |   predS = classA: classA (14.63/7.86)
|   |   predS = classB: classA (5.0/1.84)
|   |   predS = classC: classC (6.61/4.73)
|   |   predS = classD
|   |   |   feature6 <= 0.5: classG (7.46/3.4)
|   |   |   feature6 > 0.5: classD (2.76/1.48)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (3.79/1.32)
|   |   |   feature6 > 0.3333
|   |   |   |   feature2 = classA: classA (0.23/0.11)
|   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   feature2 = classC: classE (0.71/0.45)
|   |   |   |   feature2 = classD: classE (0.0/0.0)
|   |   |   |   feature2 = classE: classA (8.98/5.05)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature7 <= 0.36: classE (5.65/3.26)
|   |   |   |   |   feature7 > 0.36: classF (31.34/16.11)
|   |   |   |   feature2 = classG: classF (0.0)
|   |   predS = classF: classF (10.33/6.18)
|   |   predS = classG
|   |   |   prevPredS = classA: classA (6.27/2.13)
|   |   |   prevPredS = classB: classA (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.0/0.0)
|   |   |   prevPredS = classE: classA (0.42/0.29)
|   |   |   prevPredS = classF: classF (1.06/0.33)
|   |   |   prevPredS = classG: classF (2.95/1.52)
|   feature5 = classG: classG (16.94/11.26)
feature3 = classD
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   |   feature9 <= 0.6333: classD (9.33/3.87)
|   |   |   |   |   |   |   feature9 > 0.6333: classA (10.2/2.88)
|   |   |   |   |   |   feature7 > 0.84: classD (19.5/5.53)
|   |   |   |   |   feature2 = classB: classB (3.66/1.55)
|   |   |   |   |   feature2 = classC: classC (3.56/2.29)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   prevPredS = classA: classA (8.71/4.98)
|   |   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   |   prevPredS = classC: classA (0.19/0.03)
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature7 <= 0.48: classD (15.01/4.04)
|   |   |   |   |   |   |   feature7 > 0.48: classA (4.18/0.78)
|   |   |   |   |   |   prevPredS = classE: classD (6.31/1.36)
|   |   |   |   |   |   prevPredS = classF: classD (4.31/0.69)
|   |   |   |   |   |   prevPredS = classG: classD (4.15/1.34)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.3: classD (3.8/0.5)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature7 <= 0.64: classA (10.43/4.71)
|   |   |   |   |   |   |   feature7 > 0.64: classE (7.53/4.17)
|   |   |   |   |   feature2 = classF: classA (0.61/0.21)
|   |   |   |   |   feature2 = classG
|   |   |   |   |   |   feature6 <= 0.4: classD (10.63/2.1)
|   |   |   |   |   |   feature6 > 0.4: classG (2.47/0.72)
|   |   |   |   feature6 > 0.5333: classB (67.2/31.76)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.6: classG (39.96/16.76)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (83.05/46.0)
|   |   |   |   |   feature6 > 0.6333: classG (9.95/3.58)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (3.99/1.76)
|   |   |   |   |   |   |   feature9 > 0.5: classC (4.39/2.04)
|   |   |   |   |   |   feature9 > 0.5333: classA (18.27/8.04)
|   |   |   |   |   feature9 > 0.9667: classE (160.0/109.01)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classC (9.18/4.26)
|   |   |   |   prevPredS = classD: classA (8.84/3.91)
|   |   |   |   prevPredS = classE: classA (7.32/3.22)
|   |   |   |   prevPredS = classF: classA (3.08/1.36)
|   |   |   |   prevPredS = classG: classA (6.05/2.66)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.8667
|   |   |   |   |   feature9 <= 0.8: classA (3.66/0.85)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature8 <= 0.6: classD (16.28/5.87)
|   |   |   |   |   |   feature8 > 0.6
|   |   |   |   |   |   |   feature9 <= 0.8333: classD (13.96/6.21)
|   |   |   |   |   |   |   feature9 > 0.8333: classA (3.93/0.48)
|   |   |   |   feature6 > 0.8667: classA (11.9/1.58)
|   predS = classB
|   |   feature9 <= 0.9: classB (32.57/20.41)
|   |   feature9 > 0.9: classA (314.16/129.4)
|   predS = classC
|   |   feature6 <= 0.5667
|   |   |   feature6 <= 0.2667: classA (165.36/94.89)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.3667
|   |   |   |   |   feature6 <= 0.3333: classD (37.65/19.42)
|   |   |   |   |   feature6 > 0.3333: classG (8.78/3.62)
|   |   |   |   feature6 > 0.3667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5: classC (124.56/63.16)
|   |   |   |   |   |   feature6 > 0.5: classE (17.41/2.61)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature9 <= 0.8333: classE (9.31/4.32)
|   |   |   |   |   |   feature9 > 0.8333: classA (5.9/1.54)
|   |   feature6 > 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.3667
|   |   |   |   |   feature6 <= 0.9667: classB (3.44/1.59)
|   |   |   |   |   feature6 > 0.9667: classD (6.13/0.75)
|   |   |   |   feature9 > 0.3667
|   |   |   |   |   feature6 <= 0.8: classA (24.94/10.92)
|   |   |   |   |   feature6 > 0.8: classB (3.66/0.9)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA: classC (0.05/0.02)
|   |   |   |   feature5 = classB: classC (0.04/0.02)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.9667: classC (12.41/7.11)
|   |   |   |   |   feature6 > 0.9667: classD (5.49/1.71)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.9333: classB (5.52/2.84)
|   |   |   |   |   feature6 > 0.9333: classD (8.35/1.04)
|   |   |   |   feature5 = classE: classD (0.0)
|   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   feature5 = classG: classD (6.05/2.1)
|   |   |   prevPredS = classD: classD (66.54/23.7)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.7333: classC (3.92/1.12)
|   |   |   |   feature6 > 0.7333: classB (2.66/1.39)
|   |   |   prevPredS = classF: classD (4.02/1.37)
|   |   |   prevPredS = classG: classD (0.0)
|   predS = classD
|   |   feature7 <= 0.36
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.3333: classE (4.68/0.93)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4: classD (2.72/0.54)
|   |   |   |   |   |   feature6 > 0.4: classG (9.42/4.48)
|   |   |   |   |   feature6 > 0.5: classD (11.71/2.33)
|   |   |   prevPredS = classB: classE (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature7 <= 0.28: classE (5.56/2.81)
|   |   |   |   feature7 > 0.28
|   |   |   |   |   feature6 <= 0.5333: classG (3.78/2.09)
|   |   |   |   |   feature6 > 0.5333: classD (5.95/1.48)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.4667: classD (17.87/7.18)
|   |   |   |   feature9 > 0.4667: classG (10.79/4.95)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667: classE (107.33/40.76)
|   |   |   |   feature6 > 0.4667: classD (4.81/1.89)
|   |   |   prevPredS = classF: classD (2.86/1.5)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4667: classG (9.51/2.9)
|   |   |   |   feature6 > 0.4667: classE (9.97/2.24)
|   |   feature7 > 0.36
|   |   |   feature6 <= 0.4333
|   |   |   |   feature6 <= 0.3333
|   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   feature7 <= 0.68: classD (6.62/1.51)
|   |   |   |   |   |   feature7 > 0.68: classA (27.54/4.86)
|   |   |   |   |   feature6 > 0.3: classE (31.37/18.11)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.9333: classA (3.17/1.11)
|   |   |   |   |   |   feature9 > 0.9333: classD (3.81/0.46)
|   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   prevPredS = classC: classD (3.79/0.47)
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   |   feature7 <= 0.84: classD (2.84/0.34)
|   |   |   |   |   |   |   feature7 > 0.84: classA (3.82/0.47)
|   |   |   |   |   |   feature6 > 0.3667: classD (17.13/2.08)
|   |   |   |   |   prevPredS = classE: classD (10.67/2.12)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature9 <= 0.3: classA (11.52/1.4)
|   |   |   |   |   |   feature9 > 0.3: classF (5.57/2.72)
|   |   |   |   |   prevPredS = classG: classD (6.13/1.1)
|   |   |   feature6 > 0.4333
|   |   |   |   feature6 <= 0.4667: classD (708.96/362.68)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature2 = classA: classD (5.11/1.41)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC
|   |   |   |   |   |   prevPredS = classA: classA (3.31/0.86)
|   |   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   |   prevPredS = classC: classD (3.76/0.87)
|   |   |   |   |   |   prevPredS = classD: classD (1.45/0.89)
|   |   |   |   |   |   prevPredS = classE: classD (0.01/0.0)
|   |   |   |   |   |   prevPredS = classF: classD (0.13/0.02)
|   |   |   |   |   |   prevPredS = classG: classD (0.13/0.02)
|   |   |   |   |   feature2 = classD: classD (196.2/66.36)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   prevPredS = classA: classD (1.49/0.77)
|   |   |   |   |   |   prevPredS = classB: classD (0.04/0.01)
|   |   |   |   |   |   prevPredS = classC: classD (2.02/1.47)
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature6 <= 0.5333: classE (7.4/2.52)
|   |   |   |   |   |   |   feature6 > 0.5333: classD (9.72/3.69)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature9 <= 0.4667: classD (3.66/0.62)
|   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   feature7 <= 0.52: classD (2.7/0.45)
|   |   |   |   |   |   |   |   feature7 > 0.52: classE (19.0/4.23)
|   |   |   |   |   |   prevPredS = classF: classD (0.96/0.16)
|   |   |   |   |   |   prevPredS = classG: classG (2.06/0.92)
|   |   |   |   |   feature2 = classF: classD (12.46/4.49)
|   |   |   |   |   feature2 = classG: classD (7.25/3.33)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature8 <= 0.6
|   |   |   |   feature7 <= 0.48: classG (12.57/6.72)
|   |   |   |   feature7 > 0.48: classE (228.27/115.92)
|   |   |   feature8 > 0.6
|   |   |   |   prevPredS = classA: classG (13.54/7.82)
|   |   |   |   prevPredS = classB: classD (58.81/29.23)
|   |   |   |   prevPredS = classC: classC (3.67/1.82)
|   |   |   |   prevPredS = classD: classD (6.13/3.05)
|   |   |   |   prevPredS = classE: classE (27.8/13.83)
|   |   |   |   prevPredS = classF: classE (24.99/12.43)
|   |   |   |   prevPredS = classG: classE (8.4/4.21)
|   |   feature6 > 0.3
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature7 <= 0.44: classD (15.59/10.0)
|   |   |   |   |   |   feature7 > 0.44: classA (15.62/9.57)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.6: classC (86.35/46.96)
|   |   |   |   |   |   feature6 > 0.6: classA (3.98/1.54)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   feature6 <= 0.5: classD (312.65/191.62)
|   |   |   |   |   feature6 > 0.5: classA (18.38/9.42)
|   |   |   prevPredS = classB: classA (40.04/28.77)
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   feature5 = classC: classC (4.14/2.29)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.4333: classD (3.99/0.55)
|   |   |   |   |   feature6 > 0.4333: classA (8.75/5.82)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4667: classA (17.0/11.83)
|   |   |   |   |   feature6 > 0.4667: classE (8.5/1.72)
|   |   |   |   feature5 = classF: classA (0.0)
|   |   |   |   feature5 = classG: classA (0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature8 <= 0.9667: classD (390.07/252.32)
|   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   feature9 <= 0.4: classA (17.61/10.11)
|   |   |   |   |   |   feature9 > 0.4: classD (10.43/6.75)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.6: classD (3.78/1.65)
|   |   |   |   |   |   feature6 > 0.6: classE (43.29/16.33)
|   |   |   |   |   feature8 > 0.6333: classD (20.33/7.63)
|   |   |   prevPredS = classE
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.56: classA (22.11/12.03)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.4667: classA (11.39/7.94)
|   |   |   |   |   |   feature6 > 0.4667: classD (5.58/1.23)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classE (1.58/1.05)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature6 <= 0.4667: classD (124.33/78.46)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   feature6 <= 0.6333: classD (3.99/1.02)
|   |   |   |   |   |   |   |   feature6 > 0.6333: classA (7.28/3.52)
|   |   |   |   |   |   |   feature6 > 0.7: classD (3.22/0.42)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature6 <= 0.5: classA (29.1/18.42)
|   |   |   |   |   |   feature6 > 0.5: classD (6.98/1.91)
|   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature8 <= 0.5333
|   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   feature6 <= 0.6667: classE (113.2/74.54)
|   |   |   |   |   |   |   feature6 > 0.6667: classA (3.74/0.57)
|   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (10.83/4.58)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classA (171.44/127.7)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   |   feature7 <= 0.6: classD (7.69/2.97)
|   |   |   |   |   |   |   |   |   feature7 > 0.6: classE (2.83/0.34)
|   |   |   |   |   |   |   |   feature6 > 0.6667: classD (22.71/12.3)
|   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333: classD (17.57/7.38)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (279.6/204.15)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   feature9 <= 0.6333: classD (19.68/4.21)
|   |   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   |   feature6 <= 0.5667: classE (9.79/1.19)
|   |   |   |   |   |   |   |   |   feature6 > 0.5667: classD (3.97/1.09)
|   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.7: classD (24.61/13.9)
|   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   feature8 <= 0.6
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.64: classE (3.96/0.48)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.64: classD (2.34/0.83)
|   |   |   |   |   |   |   |   |   feature8 > 0.6: classD (10.23/2.63)
|   |   |   |   feature2 = classF: classD (3.95/2.85)
|   |   |   |   feature2 = classG: classG (26.44/19.71)
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   feature5 = classC: classA (22.81/12.17)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.4667: classD (53.21/32.19)
|   |   |   |   |   feature6 > 0.4667: classF (3.66/1.92)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4333: classE (6.12/0.96)
|   |   |   |   |   feature6 > 0.4333: classA (25.53/18.25)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature7 <= 0.44
|   |   |   |   |   |   feature7 <= 0.28
|   |   |   |   |   |   |   feature6 <= 0.7: classA (10.92/7.4)
|   |   |   |   |   |   |   feature6 > 0.7: classE (4.37/0.53)
|   |   |   |   |   |   feature7 > 0.28
|   |   |   |   |   |   |   feature6 <= 0.4667: classA (17.77/12.36)
|   |   |   |   |   |   |   feature6 > 0.4667: classD (8.88/2.19)
|   |   |   |   |   feature7 > 0.44: classF (16.93/10.48)
|   |   |   |   feature5 = classG: classA (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature5 = classA
|   |   |   |   |   feature6 <= 0.5667: classE (51.82/36.15)
|   |   |   |   |   feature6 > 0.5667: classG (5.6/2.65)
|   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   feature5 = classD: classD (5.95/3.89)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature9 <= 0.4333: classD (12.97/7.82)
|   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   feature6 <= 0.4333: classE (2.59/1.23)
|   |   |   |   |   |   feature6 > 0.4333: classA (10.7/7.64)
|   |   |   |   feature5 = classF: classD (3.5/2.29)
|   |   |   |   feature5 = classG: classG (5.44/4.0)
|   predS = classF
|   |   feature9 <= 0.8333
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature9 <= 0.3333
|   |   |   |   |   |   feature6 <= 0.3333: classE (10.2/2.22)
|   |   |   |   |   |   feature6 > 0.3333: classA (3.6/2.43)
|   |   |   |   |   feature9 > 0.3333: classA (23.37/7.29)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.6333: classC (14.45/7.81)
|   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (2.99/1.72)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (22.24/4.31)
|   |   |   |   |   |   feature6 > 0.5333: classA (2.31/0.32)
|   |   |   prevPredS = classB: classE (6.53/2.75)
|   |   |   prevPredS = classC: classA (3.18/1.18)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.2667: classG (4.51/0.55)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature8 <= 0.8667: classD (8.92/2.96)
|   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature8 <= 0.9333: classA (22.84/3.19)
|   |   |   |   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   |   |   |   feature6 <= 0.3: classD (3.47/0.42)
|   |   |   |   |   |   |   |   |   feature6 > 0.3: classA (4.47/0.69)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (5.1/1.89)
|   |   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classG (2.32/0.28)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classA (3.81/0.6)
|   |   |   |   |   feature9 > 0.5333: classD (30.79/9.82)
|   |   |   prevPredS = classE
|   |   |   |   feature5 = classA: classF (0.0)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.4333: classA (4.39/2.74)
|   |   |   |   |   feature6 > 0.4333: classF (6.45/2.07)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.5333: classD (13.46/4.74)
|   |   |   |   |   |   feature6 > 0.5333: classF (3.25/1.21)
|   |   |   |   |   feature9 > 0.6333: classE (5.61/2.37)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4667: classE (12.63/3.37)
|   |   |   |   |   feature6 > 0.4667: classF (6.6/3.67)
|   |   |   |   feature5 = classF: classF (0.78/0.33)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA: classF (0.64/0.28)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.5: classF (8.88/2.2)
|   |   |   |   |   feature6 > 0.5: classG (5.25/2.16)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature9 <= 0.7: classG (3.47/1.56)
|   |   |   |   |   feature9 > 0.7: classD (5.74/2.01)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.4333: classA (14.59/5.15)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classE (3.89/0.47)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667: classD (2.43/1.3)
|   |   |   |   |   |   |   |   feature8 > 0.6333: classD (15.28/4.29)
|   |   |   |   |   |   |   feature6 > 0.5333: classA (4.6/0.73)
|   |   |   |   |   feature6 > 0.5667: classG (12.62/3.39)
|   |   |   |   feature5 = classF: classF (8.76/4.77)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.3333: classG (2.67/1.15)
|   |   |   |   |   feature6 > 0.3333: classD (9.89/2.43)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5333: classF (9.49/1.63)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.5667: classA (2.73/0.33)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature9 <= 0.6667: classG (5.91/1.19)
|   |   |   |   |   |   |   feature9 > 0.6667: classF (2.49/0.0)
|   |   feature9 > 0.8333
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.2667: classG (14.46/1.76)
|   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   feature6 <= 0.3667: classA (15.74/6.5)
|   |   |   |   |   |   |   feature6 > 0.3667: classD (9.66/4.6)
|   |   |   |   |   feature6 > 0.4333: classB (131.68/61.21)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classD (26.67/6.67)
|   |   |   |   |   feature6 > 0.5: classG (14.46/1.76)
|   |   |   feature6 > 0.5333
|   |   |   |   feature6 <= 0.5667: classE (60.01/27.31)
|   |   |   |   feature6 > 0.5667: classC (3.6/1.38)
|   predS = classG
|   |   prevPredS = classA
|   |   |   feature9 <= 0.7
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4: classD (8.9/2.18)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.4333: classG (6.91/1.22)
|   |   |   |   |   |   feature6 > 0.4333: classA (3.39/0.84)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5667: classE (43.3/12.53)
|   |   |   |   |   feature6 > 0.5667: classG (9.5/1.67)
|   |   |   feature9 > 0.7
|   |   |   |   feature9 <= 0.8: classF (11.95/2.09)
|   |   |   |   feature9 > 0.8
|   |   |   |   |   feature6 <= 0.5: classF (3.97/1.92)
|   |   |   |   |   feature6 > 0.5: classA (19.27/2.84)
|   |   prevPredS = classB: classG (0.02/0.0)
|   |   prevPredS = classC: classC (0.07/0.03)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.3333: classG (11.71/1.52)
|   |   |   feature6 > 0.3333: classD (24.81/11.22)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667
|   |   |   |   feature9 <= 0.3333
|   |   |   |   |   feature6 <= 0.3: classG (4.27/0.52)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature6 <= 0.4: classD (6.29/1.2)
|   |   |   |   |   |   feature6 > 0.4: classG (2.53/0.31)
|   |   |   |   feature9 > 0.3333
|   |   |   |   |   feature9 <= 0.5667: classA (21.02/6.12)
|   |   |   |   |   feature9 > 0.5667: classE (10.91/3.18)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (42.81/11.47)
|   |   |   |   feature6 > 0.5: classG (4.86/0.59)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.5333
|   |   |   |   feature9 <= 0.4667: classG (6.55/1.6)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature6 <= 0.4: classA (3.89/0.47)
|   |   |   |   |   feature6 > 0.4: classF (7.46/1.69)
|   |   |   feature6 > 0.5333: classG (14.41/1.85)
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature7 <= 0.6: classG (3.58/0.68)
|   |   |   |   feature7 > 0.6: classA (25.68/8.49)
|   |   |   feature2 = classB: classD (0.0)
|   |   |   feature2 = classC: classD (0.0)
|   |   |   feature2 = classD: classD (8.61/3.06)
|   |   |   feature2 = classE: classG (1.5/0.28)
|   |   |   feature2 = classF: classD (8.57/3.57)
|   |   |   feature2 = classG
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature9 <= 0.6: classG (3.38/0.64)
|   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   feature6 <= 0.3333: classD (12.09/1.52)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (3.03/0.37)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classF (3.82/1.19)
|   |   |   |   |   |   |   feature6 > 0.6667: classD (13.01/2.43)
|   |   |   |   feature9 > 0.7: classG (17.14/4.86)
feature3 = classE
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (5.61/2.31)
|   |   |   |   |   |   |   |   feature9 > 0.4667: classA (3.6/0.69)
|   |   |   |   |   |   |   feature9 > 0.5: classG (16.09/6.69)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (6.52/3.51)
|   |   |   |   |   |   |   |   feature6 > 0.3333: classE (10.45/3.0)
|   |   |   |   |   |   |   feature6 > 0.4333: classA (5.93/1.85)
|   |   |   |   |   prevPredS = classB: classB (0.58/0.14)
|   |   |   |   |   prevPredS = classC: classC (2.4/1.05)
|   |   |   |   |   prevPredS = classD: classA (0.27/0.05)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   |   feature9 <= 0.6: classD (7.06/2.44)
|   |   |   |   |   |   |   feature9 > 0.6: classE (4.97/1.71)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature9 <= 0.3333: classE (5.78/2.98)
|   |   |   |   |   |   |   feature9 > 0.3333
|   |   |   |   |   |   |   |   feature8 <= 0.8667
|   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classA (7.4/2.12)
|   |   |   |   |   |   |   |   |   feature9 > 0.7333: classE (5.7/1.08)
|   |   |   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   |   |   feature6 <= 0.4333: classE (3.13/1.12)
|   |   |   |   |   |   |   |   |   feature6 > 0.4333: classA (3.98/0.48)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature7 <= 0.56: classA (3.24/1.66)
|   |   |   |   |   |   feature7 > 0.56: classE (8.82/2.1)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.5667: classA (4.04/1.72)
|   |   |   |   |   |   feature9 > 0.5667: classD (10.74/1.81)
|   |   |   |   feature6 > 0.5333: classB (70.96/32.02)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.6: classG (50.3/24.81)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333: classD (79.34/39.69)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   prevPredS = classA: classA (3.89/0.72)
|   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   |   |   prevPredS = classD: classA (0.01/0.0)
|   |   |   |   |   |   prevPredS = classE: classA (3.76/0.46)
|   |   |   |   |   |   prevPredS = classF: classE (4.46/1.28)
|   |   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   |   feature9 <= 0.7: classA (2.55/0.31)
|   |   |   |   |   |   |   feature9 > 0.7: classG (8.22/1.21)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   prevPredS = classA: classA (282.52/158.05)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classC (8.89/3.47)
|   |   |   |   prevPredS = classD: classA (0.0)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 <= 0.8: classE (4.3/1.64)
|   |   |   |   |   feature7 > 0.8: classA (3.38/1.26)
|   |   |   |   prevPredS = classF: classD (7.49/4.74)
|   |   |   |   prevPredS = classG: classA (2.27/0.84)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.7667
|   |   |   |   |   feature6 <= 0.7333: classA (7.43/1.05)
|   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   feature9 <= 0.6333: classE (3.63/2.04)
|   |   |   |   |   |   feature9 > 0.6333: classD (35.47/19.2)
|   |   |   |   feature6 > 0.7667
|   |   |   |   |   feature9 <= 0.7: classA (13.26/2.55)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature7 <= 0.48: classE (15.86/6.1)
|   |   |   |   |   |   feature7 > 0.48: classA (18.78/3.9)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.4667: classE (4.87/2.73)
|   |   |   |   feature9 > 0.4667: classC (5.91/1.77)
|   |   |   feature9 > 0.6333: classB (8.28/3.42)
|   |   prevPredS = classB
|   |   |   feature9 <= 0.9: classB (5.93/1.31)
|   |   |   feature9 > 0.9: classA (342.91/140.8)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.6667: classE (7.22/2.1)
|   |   |   feature6 > 0.6667: classB (2.92/1.24)
|   |   prevPredS = classD: classA (0.0)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.3333: classE (2.44/0.3)
|   |   |   feature6 > 0.3333: classB (3.08/1.51)
|   |   prevPredS = classF: classD (4.94/1.48)
|   |   prevPredS = classG: classG (0.14/0.04)
|   predS = classC
|   |   prevPredS = classA
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.2667: classA (51.97/26.82)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.3333: classD (12.9/6.2)
|   |   |   |   |   |   feature6 > 0.3333: classG (7.74/2.07)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.4333: classC (38.54/19.94)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classC (13.87/4.28)
|   |   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (6.25/0.96)
|   |   |   |   |   |   |   |   |   feature6 > 0.5333: classC (3.37/0.41)
|   |   |   |   |   |   feature6 > 0.6: classD (11.06/5.74)
|   |   |   feature6 > 0.7333
|   |   |   |   feature6 <= 0.8: classA (21.58/8.61)
|   |   |   |   feature6 > 0.8: classB (6.57/1.29)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.2667: classG (30.47/16.76)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.3667: classD (3.51/1.94)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4333: classC (9.17/3.54)
|   |   |   |   |   |   feature6 > 0.4333: classD (4.93/2.58)
|   |   |   |   feature6 > 0.7333: classB (3.58/0.44)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.2667: classE (83.45/48.33)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.3667: classD (10.92/6.04)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4333: classC (26.86/10.82)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (5.73/0.7)
|   |   |   |   |   |   |   |   feature6 > 0.5: classE (5.56/0.68)
|   |   |   |   |   |   |   feature6 > 0.5333: classD (11.79/6.43)
|   |   |   |   feature6 > 0.7333: classB (16.45/6.67)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.2667: classA (5.21/2.59)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.5667: classE (6.13/3.7)
|   |   |   |   feature6 > 0.5667: classD (6.76/3.24)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.2667: classA (25.34/12.6)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classC (17.95/9.17)
|   |   |   |   |   feature2 = classD: classE (0.28/0.14)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (4.13/2.22)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classC (9.43/3.8)
|   |   |   |   |   |   |   feature6 > 0.4: classE (14.46/2.6)
|   |   |   |   |   |   feature6 > 0.5667: classC (4.59/2.28)
|   |   |   |   |   feature2 = classF: classE (0.0)
|   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   feature6 > 0.7333
|   |   |   |   |   feature6 <= 0.8333: classB (6.09/0.74)
|   |   |   |   |   feature6 > 0.8333: classE (5.77/0.71)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.2667: classA (14.11/7.91)
|   |   |   feature6 > 0.2667
|   |   |   |   feature9 <= 0.3667: classD (8.99/4.78)
|   |   |   |   feature9 > 0.3667
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5: classC (9.12/4.68)
|   |   |   |   |   |   feature6 > 0.5: classE (7.27/0.88)
|   |   |   |   |   feature6 > 0.6: classB (3.32/1.54)
|   |   prevPredS = classG: classC (0.0)
|   predS = classD
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature5 = classA: classD (53.87/24.79)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classA (5.76/3.06)
|   |   |   |   |   feature5 = classD: classD (0.09/0.04)
|   |   |   |   |   feature5 = classE: classD (0.0)
|   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   feature9 > 0.5: classC (30.14/18.07)
|   |   |   feature9 > 0.6333
|   |   |   |   feature7 <= 0.44: classE (39.82/19.4)
|   |   |   |   feature7 > 0.44
|   |   |   |   |   feature6 <= 0.4: classE (3.73/1.83)
|   |   |   |   |   feature6 > 0.4: classD (53.59/25.07)
|   |   prevPredS = classB: classE (0.0)
|   |   prevPredS = classC
|   |   |   feature6 <= 0.5333
|   |   |   |   feature6 <= 0.4333: classE (13.59/6.0)
|   |   |   |   feature6 > 0.4333: classG (22.01/8.7)
|   |   |   feature6 > 0.5333
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature9 <= 0.8: classE (9.08/3.13)
|   |   |   |   |   feature9 > 0.8: classA (4.73/2.13)
|   |   |   |   feature6 > 0.7: classC (10.16/4.21)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.5667
|   |   |   |   feature8 <= 0.6
|   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC: classD (0.42/0.24)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (12.94/6.5)
|   |   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (9.51/5.3)
|   |   |   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.5333: classD (4.03/0.79)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.5333: classG (4.43/0.69)
|   |   |   |   |   |   |   feature9 > 0.5: classD (50.97/25.6)
|   |   |   |   |   |   feature9 > 0.6667: classE (6.48/3.96)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.5: classE (29.2/16.84)
|   |   |   |   |   |   |   |   feature6 > 0.5: classD (4.14/0.5)
|   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classD (2.99/1.44)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classG (10.53/2.92)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.5: classD (48.69/26.02)
|   |   |   |   |   |   |   feature6 > 0.5: classE (4.13/0.95)
|   |   |   |   |   feature2 = classF: classD (1.92/1.09)
|   |   |   |   |   feature2 = classG: classG (2.31/0.73)
|   |   |   |   feature8 > 0.6
|   |   |   |   |   feature2 = classA: classG (0.0)
|   |   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   |   feature2 = classC: classD (0.42/0.24)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature6 <= 0.4: classE (4.25/1.37)
|   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   feature6 <= 0.5: classD (36.64/20.85)
|   |   |   |   |   |   |   feature6 > 0.5: classG (4.17/2.26)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classE (7.95/2.8)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classG (39.66/24.69)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   |   |   feature9 <= 0.4667: classE (3.42/1.28)
|   |   |   |   |   |   |   |   |   feature9 > 0.4667: classG (3.47/0.54)
|   |   |   |   |   |   |   |   feature9 > 0.5: classE (9.42/2.08)
|   |   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   |   feature6 <= 0.5333: classE (74.85/40.42)
|   |   |   |   |   |   |   feature6 > 0.5333: classG (5.36/1.96)
|   |   |   |   |   feature2 = classF: classD (1.93/1.09)
|   |   |   |   |   feature2 = classG: classG (2.33/0.73)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.8333
|   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   feature9 <= 0.5667: classD (9.27/3.81)
|   |   |   |   |   |   feature9 > 0.5667: classE (22.98/9.28)
|   |   |   |   |   feature9 > 0.9667: classC (3.85/1.05)
|   |   |   |   feature6 > 0.8333
|   |   |   |   |   feature9 <= 0.5: classF (3.01/0.42)
|   |   |   |   |   feature9 > 0.5: classD (8.82/3.77)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.3
|   |   |   |   feature7 <= 0.88: classA (10.38/2.64)
|   |   |   |   feature7 > 0.88: classE (2.9/0.35)
|   |   |   feature6 > 0.3
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature9 <= 0.4333
|   |   |   |   |   |   feature8 <= 0.8333: classD (18.32/9.31)
|   |   |   |   |   |   feature8 > 0.8333
|   |   |   |   |   |   |   feature6 <= 0.4333: classE (3.11/0.67)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classG (8.22/4.53)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classE (4.17/2.03)
|   |   |   |   |   feature9 > 0.4333: classE (265.68/136.54)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature8 <= 0.4667: classD (4.47/0.56)
|   |   |   |   |   feature8 > 0.4667: classE (24.66/9.38)
|   |   prevPredS = classF
|   |   |   feature9 <= 0.4: classD (27.37/12.6)
|   |   |   feature9 > 0.4
|   |   |   |   feature6 <= 0.4333: classE (9.45/3.99)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5333: classG (13.3/6.0)
|   |   |   |   |   feature6 > 0.5333: classE (9.93/3.21)
|   |   prevPredS = classG
|   |   |   feature6 <= 0.4667: classG (31.11/12.18)
|   |   |   feature6 > 0.4667
|   |   |   |   feature9 <= 0.3333: classE (10.55/2.06)
|   |   |   |   feature9 > 0.3333: classD (9.07/4.2)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature6 <= 0.2667: classE (12.33/3.62)
|   |   |   feature6 > 0.2667: classG (335.43/176.77)
|   |   feature6 > 0.3
|   |   |   feature8 <= 0.6667
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4: classD (6.63/2.2)
|   |   |   |   |   |   |   feature6 > 0.4: classA (13.53/9.38)
|   |   |   |   |   |   feature9 > 0.5: classC (28.99/14.7)
|   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   feature5 = classA: classE (27.48/17.07)
|   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   feature5 = classD: classD (0.0)
|   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   feature6 <= 0.5: classD (53.06/29.62)
|   |   |   |   |   |   |   feature6 > 0.5: classE (3.37/1.78)
|   |   |   |   |   |   feature5 = classF: classE (1.01/0.63)
|   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   prevPredS = classB: classE (11.51/8.2)
|   |   |   |   prevPredS = classC: classE (4.49/3.15)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classD (4.72/2.08)
|   |   |   |   |   |   feature6 > 0.4333: classA (63.5/45.47)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   feature5 = classA: classD (4.01/0.65)
|   |   |   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (1.42/0.32)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature7 <= 0.72: classE (2.61/0.61)
|   |   |   |   |   |   |   |   feature7 > 0.72: classD (6.19/1.09)
|   |   |   |   |   |   |   feature5 = classF: classF (2.26/0.09)
|   |   |   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   |   |   feature6 > 0.6333: classE (14.5/5.0)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   feature7 <= 0.36: classG (5.53/2.11)
|   |   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   |   feature8 <= 0.6333: classE (9.1/4.18)
|   |   |   |   |   |   |   |   feature8 > 0.6333: classD (10.05/3.3)
|   |   |   |   |   |   feature6 > 0.4333: classA (328.68/243.69)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classD (24.95/12.78)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classE (3.96/0.48)
|   |   |   |   |   |   |   feature6 > 0.6333: classA (29.68/16.56)
|   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   |   feature6 <= 0.8
|   |   |   |   |   |   |   |   |   feature9 <= 0.7: classD (12.55/3.83)
|   |   |   |   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.7333: classG (7.23/0.88)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.7333: classD (13.63/5.33)
|   |   |   |   |   |   |   |   feature6 > 0.8: classE (12.0/4.82)
|   |   |   |   |   |   |   feature7 > 0.72
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classD (2.67/0.88)
|   |   |   |   |   |   |   |   feature9 > 0.4667: classE (7.72/0.94)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature5 = classA: classE (0.54/0.34)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classA (6.17/2.97)
|   |   |   |   |   feature5 = classD: classD (0.0)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature8 <= 0.6: classE (6.76/4.22)
|   |   |   |   |   |   feature8 > 0.6: classD (80.93/46.83)
|   |   |   |   |   feature5 = classF: classF (12.34/8.2)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature7 <= 0.56: classG (26.29/18.34)
|   |   |   |   |   feature7 > 0.56: classE (44.36/29.09)
|   |   |   feature8 > 0.6667
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (24.48/17.34)
|   |   |   |   |   |   |   feature9 > 0.5: classC (70.23/39.9)
|   |   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   |   feature7 <= 0.6: classE (14.21/9.64)
|   |   |   |   |   |   |   feature7 > 0.6: classD (133.8/81.23)
|   |   |   |   |   prevPredS = classB: classE (25.07/17.9)
|   |   |   |   |   prevPredS = classC: classC (0.85/0.47)
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature9 <= 0.5333
|   |   |   |   |   |   |   feature9 <= 0.4333: classD (9.79/6.49)
|   |   |   |   |   |   |   feature9 > 0.4333: classE (139.66/94.75)
|   |   |   |   |   |   feature9 > 0.5333: classD (25.65/15.55)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   |   feature5 = classA: classE (0.65/0.45)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classE (0.15/0.1)
|   |   |   |   |   |   |   feature5 = classD
|   |   |   |   |   |   |   |   feature7 <= 0.52: classE (15.89/11.42)
|   |   |   |   |   |   |   |   feature7 > 0.52: classD (39.38/25.19)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classA (8.38/1.67)
|   |   |   |   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.56: classD (9.07/3.62)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.56: classE (22.15/10.17)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.8: classE (6.08/0.74)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.8: classD (4.93/1.48)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classE (729.49/517.31)
|   |   |   |   |   |   |   feature5 = classF: classE (0.65/0.45)
|   |   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   feature8 <= 0.9333: classE (41.21/27.96)
|   |   |   |   |   |   |   feature8 > 0.9333: classA (120.82/64.22)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature2 = classA: classE (2.94/1.99)
|   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   |   |   feature2 = classE: classE (26.27/17.83)
|   |   |   |   |   |   feature2 = classF: classF (10.69/6.89)
|   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.4667: classA (19.4/11.82)
|   |   |   |   |   |   feature9 > 0.4667: classE (47.68/33.58)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.5667: classE (66.24/29.72)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   |   |   |   feature2 = classA: classA (5.31/2.55)
|   |   |   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   |   |   feature2 = classC: classF (1.82/0.2)
|   |   |   |   |   |   |   |   |   feature2 = classD: classD (1.12/0.28)
|   |   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   |   feature7 <= 0.96: classE (28.65/5.39)
|   |   |   |   |   |   |   |   |   |   feature7 > 0.96: classA (7.12/2.11)
|   |   |   |   |   |   |   |   |   feature2 = classF: classA (3.86/0.88)
|   |   |   |   |   |   |   |   |   feature2 = classG: classE (2.21/0.42)
|   |   |   |   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   |   |   |   feature2 = classA: classA (2.21/1.26)
|   |   |   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   |   |   feature2 = classC: classF (0.62/0.07)
|   |   |   |   |   |   |   |   |   feature2 = classD: classD (0.37/0.08)
|   |   |   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.84: classB (6.1/1.09)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.84: classE (2.48/0.33)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.6: classE (3.93/1.22)
|   |   |   |   |   |   |   |   |   feature2 = classF: classA (1.39/0.38)
|   |   |   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.7: classA (91.9/46.96)
|   |   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   |   feature9 <= 0.5333: classD (13.98/5.69)
|   |   |   |   |   |   |   |   |   feature9 > 0.5333: classE (7.75/2.1)
|   |   |   |   |   feature6 > 0.7333: classE (57.5/7.6)
|   predS = classF
|   |   feature9 <= 0.7333
|   |   |   feature5 = classA
|   |   |   |   feature6 <= 0.4667: classE (17.08/5.65)
|   |   |   |   feature6 > 0.4667: classF (18.0/11.16)
|   |   |   feature5 = classB: classE (0.0)
|   |   |   feature5 = classC: classF (27.51/13.95)
|   |   |   feature5 = classD: classD (17.33/8.96)
|   |   |   feature5 = classE
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   feature6 <= 0.5: classE (20.17/7.83)
|   |   |   |   |   |   feature6 > 0.5: classA (3.84/1.75)
|   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   feature6 <= 0.3667: classG (22.22/12.47)
|   |   |   |   |   |   feature6 > 0.3667: classA (27.24/11.0)
|   |   |   |   prevPredS = classB: classE (3.82/1.53)
|   |   |   |   prevPredS = classC: classF (0.19/0.05)
|   |   |   |   prevPredS = classD: classD (14.16/10.03)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature7 <= 0.48: classE (18.56/11.6)
|   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   feature9 <= 0.6: classE (20.46/8.75)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classA (2.88/0.92)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classD (7.72/2.24)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classA (3.29/1.36)
|   |   |   |   |   |   |   |   feature6 > 0.3667: classE (11.31/4.32)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature9 <= 0.4: classD (11.04/3.74)
|   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   feature6 <= 0.4667: classE (5.4/3.16)
|   |   |   |   |   |   |   |   feature6 > 0.4667: classD (7.53/4.24)
|   |   |   |   |   |   |   feature6 > 0.5667: classG (12.32/3.28)
|   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   feature6 <= 0.6: classA (3.18/2.25)
|   |   |   |   |   |   |   feature6 > 0.6: classE (5.92/0.86)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.4667: classE (7.09/2.84)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5333: classF (7.58/2.32)
|   |   |   |   |   |   feature6 > 0.5333: classG (4.18/1.32)
|   |   |   feature5 = classF
|   |   |   |   feature8 <= 0.5667: classF (7.09/2.9)
|   |   |   |   feature8 > 0.5667
|   |   |   |   |   prevPredS = classA: classE (3.76/2.78)
|   |   |   |   |   prevPredS = classB: classE (0.78/0.31)
|   |   |   |   |   prevPredS = classC: classF (0.04/0.01)
|   |   |   |   |   prevPredS = classD: classF (0.63/0.16)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature6 <= 0.5: classE (9.69/3.36)
|   |   |   |   |   |   feature6 > 0.5: classF (2.36/1.33)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature9 <= 0.5: classE (18.0/7.49)
|   |   |   |   |   |   feature9 > 0.5: classG (6.41/3.22)
|   |   |   |   |   prevPredS = classG: classF (3.04/1.36)
|   |   |   feature5 = classG
|   |   |   |   feature2 = classA: classF (0.72/0.28)
|   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   feature2 = classD: classF (0.03/0.01)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.6: classF (4.3/2.89)
|   |   |   |   |   feature6 > 0.6: classE (4.53/1.17)
|   |   |   |   feature2 = classF: classF (5.61/2.2)
|   |   |   |   feature2 = classG: classG (31.45/13.33)
|   |   feature9 > 0.7333
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classG (27.98/13.53)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3333: classA (13.37/2.95)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.3667: classF (6.29/1.66)
|   |   |   |   |   |   |   feature6 > 0.3667: classA (4.64/0.74)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature9 <= 0.8667: classB (145.61/68.18)
|   |   |   |   |   feature9 > 0.8667
|   |   |   |   |   |   feature9 <= 0.9: classA (3.82/0.46)
|   |   |   |   |   |   feature9 > 0.9: classE (2.8/0.38)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (30.36/7.6)
|   |   |   |   |   feature6 > 0.5: classG (18.88/4.42)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature5 = classA: classF (1.17/0.32)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classC (4.08/1.62)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature6 <= 0.5667: classA (5.09/0.62)
|   |   |   |   |   |   feature6 > 0.5667: classE (11.41/1.47)
|   |   |   |   |   feature5 = classE: classE (60.75/24.15)
|   |   |   |   |   feature5 = classF: classF (1.46/0.4)
|   |   |   |   |   feature5 = classG: classE (0.0)
|   predS = classG
|   |   feature2 = classA
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4: classE (5.93/1.07)
|   |   |   |   |   |   feature6 > 0.4: classG (9.81/3.02)
|   |   |   |   |   feature6 > 0.4667: classF (12.19/5.13)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature8 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (5.13/0.72)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.6667: classA (6.39/1.01)
|   |   |   |   |   |   |   |   feature9 > 0.6667: classE (5.43/0.83)
|   |   |   |   |   |   feature8 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   |   feature9 <= 0.9333: classA (5.97/0.93)
|   |   |   |   |   |   |   |   feature9 > 0.9333: classE (4.95/0.6)
|   |   |   |   |   |   |   feature6 > 0.5333: classE (5.33/0.92)
|   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   feature9 <= 0.8
|   |   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   |   feature6 <= 0.7: classG (2.62/0.48)
|   |   |   |   |   |   |   |   feature6 > 0.7: classA (4.13/1.1)
|   |   |   |   |   |   |   feature9 > 0.7333: classF (3.8/0.35)
|   |   |   |   |   |   feature9 > 0.8: classA (11.76/2.34)
|   |   |   prevPredS = classB: classA (0.0)
|   |   |   prevPredS = classC: classA (0.0)
|   |   |   prevPredS = classD: classG (0.07/0.01)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.3: classA (5.13/2.09)
|   |   |   |   feature6 > 0.3: classE (5.61/2.58)
|   |   |   prevPredS = classF: classG (8.71/1.64)
|   |   |   prevPredS = classG
|   |   |   |   feature7 <= 0.72
|   |   |   |   |   feature6 <= 0.3667: classE (6.04/1.04)
|   |   |   |   |   feature6 > 0.3667: classG (11.28/5.52)
|   |   |   |   feature7 > 0.72
|   |   |   |   |   feature6 <= 0.4: classA (9.64/1.2)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (2.5/0.3)
|   |   |   |   |   |   |   feature6 > 0.4333: classF (2.35/0.29)
|   |   |   |   |   |   feature6 > 0.5: classA (12.04/2.57)
|   |   feature2 = classB: classE (0.0)
|   |   feature2 = classC: classC (0.1/0.05)
|   |   feature2 = classD
|   |   |   feature9 <= 0.6333: classG (3.3/0.96)
|   |   |   feature9 > 0.6333: classD (3.18/1.61)
|   |   feature2 = classE
|   |   |   feature8 <= 0.8333
|   |   |   |   feature7 <= 0.52
|   |   |   |   |   prevPredS = classA: classE (3.03/1.8)
|   |   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   |   |   prevPredS = classE: classA (5.85/3.32)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature9 <= 0.4333: classD (5.45/1.8)
|   |   |   |   |   |   feature9 > 0.4333: classE (4.31/1.89)
|   |   |   |   |   prevPredS = classG: classG (1.37/0.26)
|   |   |   |   feature7 > 0.52: classE (52.72/23.56)
|   |   |   feature8 > 0.8333
|   |   |   |   feature8 <= 0.8667
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.9333
|   |   |   |   |   |   |   feature6 <= 0.4667: classG (3.26/0.49)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classE (13.26/4.15)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classF (3.93/1.74)
|   |   |   |   |   |   feature6 > 0.9333: classA (11.89/1.95)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (0.0)
|   |   |   |   |   prevPredS = classD: classG (0.03/0.01)
|   |   |   |   |   prevPredS = classE: classA (24.86/10.71)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.5: classF (5.87/2.57)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (11.32/1.37)
|   |   |   |   |   |   |   feature6 > 0.5333: classG (3.53/0.43)
|   |   |   |   |   prevPredS = classG: classE (6.37/3.21)
|   |   |   |   feature8 > 0.8667: classE (27.92/13.4)
|   |   feature2 = classF
|   |   |   feature6 <= 0.4667: classA (5.41/2.34)
|   |   |   feature6 > 0.4667: classF (7.5/3.98)
|   |   feature2 = classG
|   |   |   prevPredS = classA: classE (9.02/5.37)
|   |   |   prevPredS = classB: classG (0.02/0.0)
|   |   |   prevPredS = classC: classG (0.01/0.0)
|   |   |   prevPredS = classD: classG (0.07/0.01)
|   |   |   prevPredS = classE: classE (19.58/8.94)
|   |   |   prevPredS = classF: classG (4.21/0.79)
|   |   |   prevPredS = classG
|   |   |   |   feature7 <= 0.56: classD (10.91/4.2)
|   |   |   |   feature7 > 0.56: classG (15.64/4.72)
feature3 = classF
|   feature5 = classA
|   |   feature8 <= 0.5667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5667: classB (4.26/2.71)
|   |   |   |   |   feature6 > 0.5667: classF (5.76/1.65)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature9 <= 0.9333: classE (24.2/7.69)
|   |   |   |   |   feature9 > 0.9333: classC (4.83/2.85)
|   |   |   predS = classB: classA (12.44/4.27)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.7333: classC (14.87/10.08)
|   |   |   |   feature6 > 0.7333: classB (2.32/1.03)
|   |   |   predS = classD: classD (60.36/26.47)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (11.54/5.16)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.6: classA (71.62/51.72)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.6333: classD (12.26/1.68)
|   |   |   |   |   |   feature6 > 0.6333: classA (4.95/2.08)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4: classG (4.03/2.78)
|   |   |   |   |   feature6 > 0.4: classB (6.01/2.93)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classD (2.96/0.99)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5667: classA (4.39/2.31)
|   |   |   |   |   |   feature6 > 0.5667: classF (2.43/0.88)
|   |   |   predS = classG
|   |   |   |   feature8 <= 0.3333
|   |   |   |   |   feature9 <= 0.8667: classA (4.18/3.05)
|   |   |   |   |   feature9 > 0.8667: classD (14.26/3.69)
|   |   |   |   feature8 > 0.3333: classE (12.45/5.58)
|   |   feature8 > 0.5667
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature8 <= 0.8: classA (142.39/54.3)
|   |   |   |   |   |   feature8 > 0.8: classF (6.55/0.33)
|   |   |   |   |   feature6 > 0.5333: classA (57.14/23.41)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (25.25/14.65)
|   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   |   feature7 <= 0.92: classF (12.9/1.63)
|   |   |   |   |   |   |   feature7 > 0.92
|   |   |   |   |   |   |   |   feature7 <= 0.96: classA (3.55/0.67)
|   |   |   |   |   |   |   |   feature7 > 0.96
|   |   |   |   |   |   |   |   |   feature8 <= 0.9333: classA (3.12/0.59)
|   |   |   |   |   |   |   |   |   feature8 > 0.9333: classF (18.98/3.24)
|   |   |   |   |   |   feature6 > 0.8333: classA (5.31/0.7)
|   |   |   predS = classB
|   |   |   |   feature9 <= 0.9: classB (3.35/1.57)
|   |   |   |   feature9 > 0.9: classA (39.47/11.76)
|   |   |   predS = classC
|   |   |   |   feature6 <= 0.2667: classA (21.34/10.74)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.3667: classD (6.15/3.73)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.4333: classC (13.82/6.09)
|   |   |   |   |   |   |   feature6 > 0.4333: classD (9.87/5.87)
|   |   |   |   |   feature6 > 0.7333: classB (7.99/3.54)
|   |   |   predS = classD
|   |   |   |   feature7 <= 0.52: classG (91.44/59.19)
|   |   |   |   feature7 > 0.52: classF (17.63/8.98)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (39.72/17.76)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.4333: classF (11.98/7.13)
|   |   |   |   |   feature6 > 0.4333: classA (257.65/179.3)
|   |   |   predS = classF
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.2667: classG (4.97/0.66)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature9 <= 0.7
|   |   |   |   |   |   |   |   feature9 <= 0.6: classF (5.02/2.81)
|   |   |   |   |   |   |   |   feature9 > 0.6: classA (5.72/2.02)
|   |   |   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   |   |   feature6 <= 0.4333: classF (6.58/3.02)
|   |   |   |   |   |   |   |   feature6 > 0.4333: classB (24.75/14.15)
|   |   |   |   |   |   feature9 > 0.8667: classF (16.79/3.96)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classD (11.39/4.6)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classG (7.68/3.37)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classA (12.48/5.33)
|   |   |   |   |   |   |   feature6 > 0.5667: classF (16.91/3.13)
|   |   |   predS = classG
|   |   |   |   feature8 <= 0.8333: classF (17.33/8.2)
|   |   |   |   feature8 > 0.8333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature6 <= 0.5: classF (6.14/2.33)
|   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classA (2.63/0.36)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classE (2.87/0.49)
|   |   |   |   |   |   |   feature6 > 0.5667: classA (15.02/4.06)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   |   |   prevPredS = classE: classG (3.02/2.18)
|   |   |   |   |   prevPredS = classF: classG (2.76/0.83)
|   |   |   |   |   prevPredS = classG: classA (6.35/2.91)
|   feature5 = classB
|   |   predS = classA
|   |   |   feature6 <= 0.6667: classB (4.32/2.69)
|   |   |   feature6 > 0.6667: classE (2.43/1.46)
|   |   predS = classB: classB (33.83/7.62)
|   |   predS = classC: classC (5.39/3.84)
|   |   predS = classD: classG (7.11/3.6)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (3.08/1.07)
|   |   |   feature6 > 0.3333: classA (23.65/16.5)
|   |   predS = classF: classF (5.77/4.62)
|   |   predS = classG: classG (2.38/1.4)
|   feature5 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.6667: classD (5.33/4.04)
|   |   |   feature6 > 0.6667: classE (4.23/2.54)
|   |   predS = classB
|   |   |   feature6 <= 0.8333: classC (26.57/4.89)
|   |   |   feature6 > 0.8333: classA (6.37/2.01)
|   |   predS = classC: classC (21.86/8.44)
|   |   predS = classD
|   |   |   feature6 <= 0.5333: classG (11.02/5.25)
|   |   |   feature6 > 0.5333: classA (3.3/1.92)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (5.39/1.89)
|   |   |   feature6 > 0.3333: classA (45.65/29.63)
|   |   predS = classF: classF (18.0/10.96)
|   |   predS = classG
|   |   |   feature6 <= 0.4667: classA (3.12/1.56)
|   |   |   feature6 > 0.4667: classF (2.64/1.54)
|   feature5 = classD
|   |   prevPredS = classA: classC (11.72/9.08)
|   |   prevPredS = classB: classA (6.0/3.1)
|   |   prevPredS = classC: classE (4.37/2.76)
|   |   prevPredS = classD: classD (28.05/16.94)
|   |   prevPredS = classE: classD (31.3/19.01)
|   |   prevPredS = classF: classE (2.94/2.22)
|   |   prevPredS = classG: classG (9.88/6.15)
|   feature5 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.6: classA (23.02/16.77)
|   |   |   |   feature6 > 0.6: classD (6.46/2.2)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7: classE (18.43/9.96)
|   |   |   |   feature6 > 0.7: classD (2.99/1.21)
|   |   predS = classB: classA (33.93/11.44)
|   |   predS = classC
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.2667: classA (17.06/8.59)
|   |   |   |   feature6 > 0.2667: classE (27.64/18.6)
|   |   |   feature6 > 0.7333: classB (6.29/2.73)
|   |   predS = classD
|   |   |   prevPredS = classA: classC (3.89/2.3)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classC (4.81/3.5)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4667: classD (48.05/21.07)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5333: classE (4.98/2.04)
|   |   |   |   |   feature6 > 0.5333: classG (3.77/1.98)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.6: classD (3.87/1.66)
|   |   |   |   feature9 > 0.6: classE (59.04/25.64)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4333: classD (8.23/1.54)
|   |   |   |   feature6 > 0.4333: classG (10.21/6.8)
|   |   |   prevPredS = classG: classG (2.84/1.68)
|   |   predS = classE
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature6 <= 0.5: classC (17.39/11.3)
|   |   |   |   |   feature6 > 0.5: classE (2.92/1.32)
|   |   |   |   feature9 > 0.9333: classD (64.52/33.89)
|   |   |   prevPredS = classB: classE (2.56/1.56)
|   |   |   prevPredS = classC: classC (8.78/4.96)
|   |   |   prevPredS = classD: classD (42.08/22.83)
|   |   |   prevPredS = classE
|   |   |   |   feature2 = classA: classA (1.6/0.73)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   feature2 = classD: classD (8.45/4.9)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4667: classE (153.37/102.83)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   feature9 <= 0.4667: classE (5.81/0.71)
|   |   |   |   |   |   |   feature9 > 0.4667: classD (10.05/4.66)
|   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   feature6 <= 0.7: classD (14.32/6.33)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature9 <= 0.5: classD (3.61/0.92)
|   |   |   |   |   |   |   |   feature9 > 0.5: classE (2.41/0.29)
|   |   |   |   feature2 = classF: classF (5.38/2.93)
|   |   |   |   feature2 = classG: classE (0.07/0.04)
|   |   |   prevPredS = classF: classE (15.54/9.29)
|   |   |   prevPredS = classG: classE (9.91/7.38)
|   |   predS = classF
|   |   |   feature2 = classA: classF (0.81/0.39)
|   |   |   feature2 = classB: classE (0.0)
|   |   |   feature2 = classC
|   |   |   |   feature6 <= 0.5: classB (6.43/4.86)
|   |   |   |   feature6 > 0.5: classA (9.05/2.42)
|   |   |   feature2 = classD: classF (0.03/0.01)
|   |   |   feature2 = classE: classF (4.65/2.88)
|   |   |   feature2 = classF
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.3: classG (2.36/0.39)
|   |   |   |   |   |   |   |   feature6 > 0.3: classA (3.28/1.69)
|   |   |   |   |   |   |   feature6 > 0.4333: classB (12.08/5.71)
|   |   |   |   |   |   feature6 > 0.4667: classD (6.48/3.38)
|   |   |   |   |   feature6 > 0.5333: classE (24.3/6.66)
|   |   |   |   prevPredS = classB: classE (0.73/0.39)
|   |   |   |   prevPredS = classC: classF (0.03/0.01)
|   |   |   |   prevPredS = classD: classA (0.48/0.22)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.3667: classF (2.86/0.55)
|   |   |   |   |   feature6 > 0.3667: classE (5.99/2.54)
|   |   |   |   prevPredS = classF: classG (3.86/2.21)
|   |   |   |   prevPredS = classG: classF (1.32/0.75)
|   |   |   feature2 = classG: classG (0.15/0.08)
|   |   predS = classG
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5667: classE (11.82/4.82)
|   |   |   |   feature6 > 0.5667: classF (2.45/1.24)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classA (6.82/3.24)
|   |   |   |   feature6 > 0.4333: classG (2.45/1.18)
|   |   |   prevPredS = classF: classG (5.02/2.38)
|   |   |   prevPredS = classG: classG (2.82/1.57)
|   feature5 = classF
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.4667: classA (14.08/2.24)
|   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   feature8 <= 0.9: classF (11.51/4.76)
|   |   |   |   |   |   feature8 > 0.9: classA (7.08/2.94)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6: classF (24.55/13.38)
|   |   |   |   |   feature6 > 0.6: classD (13.47/7.57)
|   |   |   feature6 > 0.6667
|   |   |   |   feature9 <= 0.8667: classA (32.55/12.43)
|   |   |   |   feature9 > 0.8667
|   |   |   |   |   feature7 <= 0.56: classA (28.13/10.73)
|   |   |   |   |   feature7 > 0.56: classF (29.69/10.2)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (4.03/1.82)
|   |   |   feature9 > 0.9: classA (43.92/13.25)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classB (46.63/26.68)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.3667: classD (6.82/4.13)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4333: classC (15.3/6.75)
|   |   |   |   |   |   feature6 > 0.4333: classF (23.79/9.6)
|   |   |   |   feature6 > 0.7333: classB (8.72/3.79)
|   |   predS = classD
|   |   |   feature6 <= 0.4
|   |   |   |   feature6 <= 0.3333: classE (5.26/2.68)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature9 <= 0.7333: classF (4.25/1.94)
|   |   |   |   |   feature9 > 0.7333: classA (12.25/1.49)
|   |   |   feature6 > 0.4
|   |   |   |   feature6 <= 0.5: classG (72.61/34.22)
|   |   |   |   feature6 > 0.5: classD (17.33/9.6)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (37.37/13.04)
|   |   |   feature6 > 0.3333
|   |   |   |   prevPredS = classA: classC (24.12/15.67)
|   |   |   |   prevPredS = classB: classE (6.09/4.44)
|   |   |   |   prevPredS = classC: classE (0.02/0.02)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature8 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5333: classA (33.15/23.19)
|   |   |   |   |   |   feature6 > 0.5333: classD (12.81/3.17)
|   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   feature6 <= 0.4333: classF (3.2/0.3)
|   |   |   |   |   |   feature6 > 0.4333: classA (12.21/8.42)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature2 = classA: classA (3.9/2.11)
|   |   |   |   |   feature2 = classB: classF (0.0)
|   |   |   |   |   feature2 = classC: classE (1.02/0.72)
|   |   |   |   |   feature2 = classD: classE (0.02/0.02)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.4333: classF (4.07/1.87)
|   |   |   |   |   |   feature6 > 0.4333: classA (43.06/31.49)
|   |   |   |   |   feature2 = classF: classF (78.34/52.09)
|   |   |   |   |   feature2 = classG: classF (0.0)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature7 <= 0.32
|   |   |   |   |   |   feature6 <= 0.7: classA (7.07/4.76)
|   |   |   |   |   |   feature6 > 0.7: classE (2.36/0.29)
|   |   |   |   |   feature7 > 0.32: classF (114.36/75.12)
|   |   |   |   prevPredS = classG: classA (3.79/2.86)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature9 <= 0.7: classC (3.74/2.17)
|   |   |   |   |   feature9 > 0.7: classB (23.74/12.0)
|   |   |   |   feature6 > 0.4667: classF (10.1/4.66)
|   |   |   prevPredS = classB: classE (1.14/0.52)
|   |   |   prevPredS = classC: classF (0.04/0.01)
|   |   |   prevPredS = classD: classF (3.93/0.95)
|   |   |   prevPredS = classE: classF (5.17/2.02)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature9 <= 0.8: classF (41.78/11.05)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature7 <= 0.84: classA (17.11/5.22)
|   |   |   |   |   |   |   feature7 > 0.84: classF (4.93/1.3)
|   |   |   |   |   |   feature9 > 0.8667: classF (11.62/3.07)
|   |   |   |   feature6 > 0.5667: classF (66.23/2.94)
|   |   |   prevPredS = classG: classF (12.62/2.56)
|   |   predS = classG
|   |   |   feature7 <= 0.76
|   |   |   |   feature6 <= 0.3333: classA (6.37/2.16)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.4667: classG (5.13/1.19)
|   |   |   |   |   feature6 > 0.4667: classA (26.15/15.26)
|   |   |   feature7 > 0.76: classF (19.22/8.49)
|   feature5 = classG
|   |   predS = classA: classA (3.37/2.57)
|   |   predS = classB: classA (1.8/0.64)
|   |   predS = classC: classC (2.43/1.74)
|   |   predS = classD: classG (4.3/1.77)
|   |   predS = classE
|   |   |   feature6 <= 0.4333: classD (7.58/2.37)
|   |   |   feature6 > 0.4333: classA (10.66/7.43)
|   |   predS = classF: classF (6.04/3.58)
|   |   predS = classG: classG (3.56/0.96)
feature3 = classG
|   feature5 = classA
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.4: classA (10.2/4.84)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.5333: classG (8.35/3.34)
|   |   |   |   |   |   feature6 > 0.5333: classA (38.39/18.17)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature7 <= 0.52: classA (6.32/2.05)
|   |   |   |   |   feature7 > 0.52: classG (35.88/11.86)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7: classE (35.25/21.64)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature9 <= 0.9333: classA (2.86/0.52)
|   |   |   |   |   |   feature9 > 0.9333: classG (12.94/2.86)
|   |   |   |   |   feature6 > 0.7333: classA (14.85/4.82)
|   |   predS = classB: classA (61.98/19.67)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classA (30.97/14.27)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.3667: classD (8.93/5.82)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4333: classC (20.05/10.1)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (2.73/0.63)
|   |   |   |   |   |   |   |   feature6 > 0.5: classE (6.11/2.29)
|   |   |   |   |   |   |   feature6 > 0.6: classD (5.44/2.56)
|   |   |   |   feature6 > 0.7333: classB (11.57/5.85)
|   |   predS = classD
|   |   |   feature8 <= 0.7333
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature6 <= 0.4: classD (8.11/3.83)
|   |   |   |   |   feature6 > 0.4: classG (52.35/30.62)
|   |   |   |   feature6 > 0.7: classD (14.04/2.51)
|   |   |   feature8 > 0.7333
|   |   |   |   feature7 <= 0.48
|   |   |   |   |   prevPredS = classA: classD (26.43/14.58)
|   |   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   |   prevPredS = classC: classG (1.64/1.19)
|   |   |   |   |   prevPredS = classD: classG (4.01/2.24)
|   |   |   |   |   prevPredS = classE: classG (0.58/0.17)
|   |   |   |   |   prevPredS = classF: classF (0.66/0.38)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature6 <= 0.4667: classG (2.54/1.02)
|   |   |   |   |   |   feature6 > 0.4667: classE (2.52/0.67)
|   |   |   |   feature7 > 0.48: classA (49.87/33.19)
|   |   predS = classE
|   |   |   feature6 <= 0.4333
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature8 <= 0.9667
|   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   feature9 <= 0.4: classE (12.05/4.81)
|   |   |   |   |   |   |   feature9 > 0.4: classG (5.55/3.12)
|   |   |   |   |   |   feature9 > 0.6333: classG (53.96/8.87)
|   |   |   |   |   feature8 > 0.9667: classA (19.18/10.13)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.3333: classG (16.35/9.11)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.3667: classA (10.58/2.57)
|   |   |   |   |   |   feature6 > 0.3667: classE (3.0/1.71)
|   |   |   feature6 > 0.4333
|   |   |   |   feature8 <= 0.8
|   |   |   |   |   feature6 <= 0.4667: classA (63.74/45.01)
|   |   |   |   |   feature6 > 0.4667: classE (16.51/5.39)
|   |   |   |   feature8 > 0.8: classA (295.8/179.13)
|   |   predS = classF
|   |   |   feature8 <= 0.7667
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature9 <= 0.7: classF (10.74/7.58)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333: classG (2.65/1.82)
|   |   |   |   |   |   |   feature6 > 0.4333: classB (6.86/3.19)
|   |   |   |   |   |   feature6 > 0.4667: classA (4.25/2.93)
|   |   |   |   feature6 > 0.6333: classF (10.84/0.12)
|   |   |   feature8 > 0.7667
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature7 <= 0.48: classG (23.55/10.3)
|   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   feature8 <= 0.9667: classG (16.71/6.78)
|   |   |   |   |   |   feature8 > 0.9667: classA (16.95/7.29)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classA (6.7/4.13)
|   |   |   |   |   |   feature6 > 0.4333: classB (21.98/12.04)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5: classD (4.04/1.48)
|   |   |   |   |   |   feature6 > 0.5: classA (5.7/2.37)
|   |   predS = classG
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667: classA (34.19/17.65)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.5: classF (11.31/5.11)
|   |   |   |   |   |   feature6 > 0.5: classA (7.16/2.97)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature9 <= 0.6333: classG (3.06/0.77)
|   |   |   |   |   feature9 > 0.6333: classE (5.87/1.45)
|   |   |   feature6 > 0.5667
|   |   |   |   feature9 <= 0.7333
|   |   |   |   |   feature7 <= 0.76: classG (13.75/4.81)
|   |   |   |   |   feature7 > 0.76: classA (6.82/1.6)
|   |   |   |   feature9 > 0.7333: classG (52.69/13.15)
|   feature5 = classB
|   |   predS = classA: classB (5.49/4.16)
|   |   predS = classB: classB (27.44/6.19)
|   |   predS = classC: classC (4.37/3.12)
|   |   predS = classD: classG (5.77/2.92)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (2.5/0.87)
|   |   |   feature6 > 0.3333: classA (19.2/13.4)
|   |   predS = classF: classF (4.68/3.75)
|   |   predS = classG: classG (1.93/1.13)
|   feature5 = classC
|   |   predS = classA: classA (4.6/3.63)
|   |   predS = classB: classA (4.24/2.04)
|   |   predS = classC: classC (13.61/4.27)
|   |   predS = classD: classG (7.01/4.32)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (2.37/0.84)
|   |   |   feature6 > 0.3333: classA (21.44/13.06)
|   |   predS = classF: classF (10.93/5.92)
|   |   predS = classG: classA (3.14/1.85)
|   feature5 = classD
|   |   feature6 <= 0.3333: classG (8.5/5.58)
|   |   feature6 > 0.3333: classD (90.17/60.11)
|   feature5 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.5667: classB (10.29/7.74)
|   |   |   |   feature6 > 0.5667: classD (6.54/3.98)
|   |   |   feature6 > 0.6667: classE (12.9/7.81)
|   |   predS = classB
|   |   |   feature9 <= 0.5333: classG (3.13/1.41)
|   |   |   feature9 > 0.5333: classA (19.12/5.97)
|   |   predS = classC
|   |   |   feature6 <= 0.6: classC (24.77/17.33)
|   |   |   feature6 > 0.6: classB (6.71/4.57)
|   |   predS = classD: classD (69.87/42.86)
|   |   predS = classE
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9333: classC (13.31/9.14)
|   |   |   |   feature9 > 0.9333: classD (50.25/25.62)
|   |   |   prevPredS = classB: classE (1.46/0.87)
|   |   |   prevPredS = classC: classC (5.38/2.52)
|   |   |   prevPredS = classD: classD (12.93/7.26)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature7 <= 0.56: classD (7.84/4.68)
|   |   |   |   |   feature7 > 0.56: classE (95.73/61.59)
|   |   |   |   feature6 > 0.4667: classD (27.35/11.95)
|   |   |   prevPredS = classF: classE (9.61/5.57)
|   |   |   prevPredS = classG: classE (6.66/4.97)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classG (4.76/3.08)
|   |   |   |   |   |   feature6 > 0.4333: classB (9.65/4.56)
|   |   |   |   |   feature6 > 0.4667: classA (10.8/6.23)
|   |   |   |   feature6 > 0.5333: classE (19.99/5.55)
|   |   |   prevPredS = classB: classE (0.56/0.29)
|   |   |   prevPredS = classC: classF (0.02/0.0)
|   |   |   prevPredS = classD: classA (0.37/0.17)
|   |   |   prevPredS = classE: classE (5.83/2.5)
|   |   |   prevPredS = classF: classG (2.34/1.1)
|   |   |   prevPredS = classG: classF (1.37/0.69)
|   |   predS = classG
|   |   |   prevPredS = classA: classE (9.42/4.29)
|   |   |   prevPredS = classB: classG (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.5333: classG (4.88/1.53)
|   |   |   |   feature9 > 0.5333: classA (4.0/1.83)
|   |   |   prevPredS = classF: classF (3.22/1.52)
|   |   |   prevPredS = classG: classG (1.76/0.93)
|   feature5 = classF: classF (43.66/32.17)
|   feature5 = classG
|   |   predS = classA
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature2 = classA: classG (6.33/2.8)
|   |   |   |   |   feature2 = classB: classG (0.0)
|   |   |   |   |   feature2 = classC: classG (0.0)
|   |   |   |   |   feature2 = classD: classG (0.0)
|   |   |   |   |   feature2 = classE: classA (0.06/0.03)
|   |   |   |   |   feature2 = classF: classG (0.0)
|   |   |   |   |   feature2 = classG: classA (6.56/3.4)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature9 <= 0.9667: classA (27.63/10.68)
|   |   |   |   |   feature9 > 0.9667: classC (8.97/2.99)
|   |   |   prevPredS = classB: classA (0.0)
|   |   |   prevPredS = classC: classC (1.77/1.01)
|   |   |   prevPredS = classD: classA (3.1/0.97)
|   |   |   prevPredS = classE: classA (1.77/0.87)
|   |   |   prevPredS = classF: classA (17.7/6.22)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   feature6 <= 0.4333: classA (4.46/0.96)
|   |   |   |   |   |   feature6 > 0.4333: classG (4.45/1.75)
|   |   |   |   |   feature7 > 0.72: classG (20.07/6.43)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classE (4.26/0.78)
|   |   |   |   |   feature6 > 0.7: classG (10.89/4.31)
|   |   predS = classB: classA (37.19/12.43)
|   |   predS = classC
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.2667
|   |   |   |   |   feature6 <= 0.2333: classG (7.35/1.97)
|   |   |   |   |   feature6 > 0.2333: classA (17.63/8.3)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.3667: classD (5.42/3.29)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.4333: classC (12.16/5.36)
|   |   |   |   |   |   |   feature6 > 0.4333: classE (5.26/2.64)
|   |   |   |   |   feature6 > 0.6: classG (9.21/4.08)
|   |   |   feature6 > 0.7333: classB (6.93/3.01)
|   |   predS = classD
|   |   |   feature6 <= 0.4333
|   |   |   |   prevPredS = classA: classC (0.37/0.09)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classG (2.66/1.05)
|   |   |   |   prevPredS = classD: classD (15.87/3.86)
|   |   |   |   prevPredS = classE: classG (1.02/0.31)
|   |   |   |   prevPredS = classF: classF (0.42/0.03)
|   |   |   |   prevPredS = classG: classA (6.53/3.11)
|   |   |   feature6 > 0.4333: classG (69.3/30.55)
|   |   predS = classE
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classG (40.21/17.45)
|   |   |   |   feature6 > 0.4333: classA (208.9/148.68)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333: classG (43.47/7.03)
|   |   |   |   feature6 > 0.5333: classA (12.26/3.58)
|   |   predS = classF
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classG (18.88/9.8)
|   |   |   |   feature6 > 0.4333: classB (20.24/10.92)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (8.63/2.65)
|   |   |   |   feature6 > 0.5: classG (26.19/12.64)
|   |   predS = classG
|   |   |   feature9 <= 0.6
|   |   |   |   feature8 <= 0.9333: classG (13.04/2.93)
|   |   |   |   feature8 > 0.9333
|   |   |   |   |   feature9 <= 0.5333: classG (12.1/4.61)
|   |   |   |   |   feature9 > 0.5333: classA (32.8/9.43)
|   |   |   feature9 > 0.6
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5667: classE (3.84/0.81)
|   |   |   |   |   feature6 > 0.5667: classF (2.42/1.12)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   |   prevPredS = classE: classG (0.0)
|   |   |   |   prevPredS = classF: classG (0.67/0.1)
|   |   |   |   prevPredS = classG: classG (89.02/12.72)

Number of Leaves  : \t1424

Size of the tree : \t2252


Weight: 0.54

J48 pruned tree
------------------

feature3 = classA
|   predS = classA
|   |   feature6 <= 0.7667
|   |   |   prevPredS = classA
|   |   |   |   feature8 <= 0.4: classE (8.2/4.76)
|   |   |   |   feature8 > 0.4: classA (15.13/8.92)
|   |   |   prevPredS = classB: classB (0.03/0.01)
|   |   |   prevPredS = classC: classC (0.84/0.56)
|   |   |   prevPredS = classD: classG (4.61/1.82)
|   |   |   prevPredS = classE: classA (1.43/1.0)
|   |   |   prevPredS = classF: classC (0.93/0.57)
|   |   |   prevPredS = classG: classD (1.23/0.86)
|   |   feature6 > 0.7667: classA (40.15/6.96)
|   predS = classB: classA (16.74/8.88)
|   predS = classC: classC (27.18/16.14)
|   predS = classD: classG (39.48/24.16)
|   predS = classE
|   |   feature6 <= 0.3: classG (14.57/8.51)
|   |   feature6 > 0.3: classC (116.04/85.72)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4: classA (4.94/3.19)
|   |   |   feature6 > 0.4: classE (8.07/4.49)
|   |   feature6 > 0.4667: classF (11.9/7.97)
|   predS = classG
|   |   feature2 = classA: classA (19.79/7.89)
|   |   feature2 = classB: classA (0.0)
|   |   feature2 = classC: classC (0.0/0.0)
|   |   feature2 = classD: classG (0.21/0.12)
|   |   feature2 = classE: classG (3.53/1.66)
|   |   feature2 = classF: classF (0.41/0.26)
|   |   feature2 = classG: classG (0.68/0.32)
feature3 = classB
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667: classA (7.47/2.86)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.5667: classB (10.74/4.52)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature6 <= 0.6: classA (3.76/2.23)
|   |   |   |   |   |   |   feature6 > 0.6: classD (2.93/0.62)
|   |   |   |   |   feature6 > 0.6333: classB (10.13/2.16)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature9 <= 0.9667
|   |   |   |   |   |   |   feature7 <= 0.88: classA (3.65/0.73)
|   |   |   |   |   |   |   feature7 > 0.88: classB (2.87/0.63)
|   |   |   |   |   |   feature9 > 0.9667: classA (13.59/2.72)
|   |   |   |   |   feature6 > 0.3667: classB (13.63/5.22)
|   |   |   |   feature6 > 0.5667: classA (17.76/8.53)
|   |   |   prevPredS = classC: classA (4.28/1.88)
|   |   |   prevPredS = classD: classA (0.34/0.12)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classE (2.95/1.68)
|   |   |   |   feature6 > 0.4333: classA (2.7/1.43)
|   |   |   prevPredS = classF: classC (3.74/2.01)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.5: classA (3.29/1.16)
|   |   |   |   feature9 > 0.5: classD (4.84/2.95)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667: classA (16.05/8.84)
|   |   |   |   feature9 > 0.9667: classC (31.42/15.79)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature2 = classA: classB (10.62/2.25)
|   |   |   |   |   feature2 = classB: classB (0.0)
|   |   |   |   |   feature2 = classC: classC (0.0/0.0)
|   |   |   |   |   feature2 = classD: classB (0.0)
|   |   |   |   |   feature2 = classE: classA (2.46/0.43)
|   |   |   |   |   feature2 = classF: classA (0.0/0.0)
|   |   |   |   |   feature2 = classG: classB (0.0)
|   |   |   |   feature6 > 0.7333: classA (11.01/4.89)
|   predS = classB
|   |   feature6 <= 0.3: classE (7.08/1.26)
|   |   feature6 > 0.3
|   |   |   feature9 <= 0.9667
|   |   |   |   feature6 <= 0.6333: classA (22.4/10.95)
|   |   |   |   feature6 > 0.6333: classB (23.4/7.57)
|   |   |   feature9 > 0.9667: classB (228.91/97.9)
|   predS = classC
|   |   feature6 <= 0.2667: classC (39.25/23.29)
|   |   feature6 > 0.2667
|   |   |   feature6 <= 0.4: classE (38.55/23.53)
|   |   |   feature6 > 0.4
|   |   |   |   feature7 <= 0.52
|   |   |   |   |   feature6 <= 0.7333: classE (23.19/12.7)
|   |   |   |   |   feature6 > 0.7333: classB (7.14/3.55)
|   |   |   |   feature7 > 0.52: classB (20.11/11.02)
|   predS = classD
|   |   feature6 <= 0.3667
|   |   |   feature6 <= 0.2333
|   |   |   |   feature9 <= 0.9333: classB (8.91/1.57)
|   |   |   |   feature9 > 0.9333: classA (3.24/0.53)
|   |   |   feature6 > 0.2333
|   |   |   |   feature9 <= 0.4667: classE (13.46/2.22)
|   |   |   |   feature9 > 0.4667: classG (6.04/3.18)
|   |   feature6 > 0.3667
|   |   |   feature6 <= 0.4667: classF (127.31/69.94)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5667: classG (20.02/13.81)
|   |   |   |   feature6 > 0.5667: classD (12.99/8.93)
|   predS = classE
|   |   feature6 <= 0.3: classG (70.84/41.37)
|   |   feature6 > 0.3
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classE (18.63/11.4)
|   |   |   |   feature6 > 0.4333: classC (499.21/352.53)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.6667: classE (18.69/13.24)
|   |   |   |   feature6 > 0.6667
|   |   |   |   |   feature6 <= 0.7: classA (22.21/9.98)
|   |   |   |   |   feature6 > 0.7: classE (5.65/2.86)
|   predS = classF
|   |   feature6 <= 0.4667
|   |   |   feature6 <= 0.4
|   |   |   |   feature6 <= 0.3: classG (11.4/5.61)
|   |   |   |   feature6 > 0.3: classA (12.93/7.82)
|   |   |   feature6 > 0.4: classB (49.54/26.8)
|   |   feature6 > 0.4667
|   |   |   feature6 <= 0.5: classD (16.58/7.47)
|   |   |   feature6 > 0.5
|   |   |   |   feature6 <= 0.5333: classG (11.97/6.15)
|   |   |   |   feature6 > 0.5333: classA (29.28/19.36)
|   predS = classG
|   |   feature2 = classA: classA (26.36/13.26)
|   |   feature2 = classB
|   |   |   feature6 <= 0.4: classB (11.48/2.97)
|   |   |   feature6 > 0.4: classG (5.66/3.25)
|   |   feature2 = classC: classE (1.25/0.55)
|   |   feature2 = classD: classG (1.19/0.7)
|   |   feature2 = classE
|   |   |   prevPredS = classA: classE (6.79/3.44)
|   |   |   prevPredS = classB: classE (0.0)
|   |   |   prevPredS = classC: classE (0.0)
|   |   |   prevPredS = classD: classE (12.46/3.94)
|   |   |   prevPredS = classE: classA (4.13/2.55)
|   |   |   prevPredS = classF: classG (2.48/1.04)
|   |   |   prevPredS = classG: classA (6.51/2.55)
|   |   feature2 = classF: classF (2.37/1.51)
|   |   feature2 = classG: classG (3.98/1.92)
feature3 = classC
|   feature5 = classA
|   |   predS = classA
|   |   |   feature7 <= 0.84
|   |   |   |   feature9 <= 0.9667: classA (9.47/6.55)
|   |   |   |   feature9 > 0.9667: classC (19.29/8.0)
|   |   |   feature7 > 0.84: classA (15.83/8.78)
|   |   predS = classB: classA (20.86/9.34)
|   |   predS = classC
|   |   |   feature8 <= 0.7333: classC (33.3/15.11)
|   |   |   feature8 > 0.7333
|   |   |   |   feature7 <= 0.56: classC (6.27/2.96)
|   |   |   |   feature7 > 0.56: classA (13.77/7.38)
|   |   predS = classD
|   |   |   prevPredS = classA
|   |   |   |   feature7 <= 0.56: classD (36.56/16.7)
|   |   |   |   feature7 > 0.56: classA (9.69/4.54)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5: classF (8.8/4.36)
|   |   |   |   feature6 > 0.5: classC (16.99/3.7)
|   |   |   prevPredS = classD: classG (4.15/2.7)
|   |   |   prevPredS = classE: classG (1.46/0.73)
|   |   |   prevPredS = classF: classF (0.66/0.33)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4667: classG (2.51/1.28)
|   |   |   |   feature6 > 0.4667: classE (4.34/1.1)
|   |   predS = classE
|   |   |   feature7 <= 0.96: classE (138.35/99.7)
|   |   |   feature7 > 0.96: classA (55.26/36.56)
|   |   predS = classF
|   |   |   feature6 <= 0.4667: classE (16.73/11.35)
|   |   |   feature6 > 0.4667: classF (13.54/8.68)
|   |   predS = classG: classA (22.2/12.53)
|   feature5 = classB
|   |   feature6 <= 0.8
|   |   |   predS = classA
|   |   |   |   feature6 <= 0.6667: classB (4.71/3.32)
|   |   |   |   feature6 > 0.6667: classC (3.29/2.09)
|   |   |   predS = classB: classC (12.48/3.86)
|   |   |   predS = classC: classC (6.82/4.76)
|   |   |   predS = classD: classF (8.87/4.85)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.3333: classG (3.89/1.82)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5333: classC (34.3/23.99)
|   |   |   |   |   feature6 > 0.5333: classA (2.51/1.58)
|   |   |   predS = classF: classF (6.97/5.25)
|   |   |   predS = classG: classG (2.44/1.54)
|   |   feature6 > 0.8: classB (28.67/8.52)
|   feature5 = classC
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature9 <= 0.8: classA (30.51/20.93)
|   |   |   |   |   feature9 > 0.8: classC (7.65/3.67)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6: classA (16.27/8.54)
|   |   |   |   |   feature6 > 0.6: classD (13.44/4.89)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   prevPredS = classA: classC (42.08/22.88)
|   |   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   |   prevPredS = classC: classA (15.54/8.63)
|   |   |   |   |   prevPredS = classD: classC (0.0)
|   |   |   |   |   prevPredS = classE: classC (0.0)
|   |   |   |   |   prevPredS = classF: classA (1.46/0.66)
|   |   |   |   |   prevPredS = classG: classC (0.0)
|   |   |   |   feature6 > 0.7: classD (8.62/5.05)
|   |   predS = classB
|   |   |   prevPredS = classA: classB (3.63/2.57)
|   |   |   prevPredS = classB: classA (75.14/30.73)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.6333: classC (7.29/2.68)
|   |   |   |   feature6 > 0.6333: classB (3.45/2.03)
|   |   |   prevPredS = classD: classA (0.0)
|   |   |   prevPredS = classE: classE (1.71/0.89)
|   |   |   prevPredS = classF: classA (1.88/0.54)
|   |   |   prevPredS = classG: classA (0.0)
|   |   predS = classC
|   |   |   feature6 <= 0.6
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   feature6 <= 0.3667: classC (5.37/3.52)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature6 <= 0.4333: classF (5.7/2.1)
|   |   |   |   |   |   |   feature6 > 0.4333: classC (5.95/1.35)
|   |   |   |   |   feature9 > 0.6333: classA (8.98/3.83)
|   |   |   |   prevPredS = classB: classC (0.23/0.07)
|   |   |   |   prevPredS = classC
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature2 = classA
|   |   |   |   |   |   |   feature6 <= 0.3667: classA (25.02/11.52)
|   |   |   |   |   |   |   feature6 > 0.3667: classC (7.36/4.55)
|   |   |   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   |   |   feature2 = classC
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.2667: classC (29.9/17.98)
|   |   |   |   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   |   |   |   feature6 <= 0.3333: classE (6.52/3.49)
|   |   |   |   |   |   |   |   |   feature6 > 0.3333: classC (19.56/9.85)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature7 <= 0.64: classC (3.82/1.47)
|   |   |   |   |   |   |   |   feature7 > 0.64: classA (23.8/9.96)
|   |   |   |   |   |   feature2 = classD: classC (4.48/2.12)
|   |   |   |   |   |   feature2 = classE: classA (0.0)
|   |   |   |   |   |   feature2 = classF: classA (0.0)
|   |   |   |   |   |   feature2 = classG: classA (0.0)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (194.52/107.03)
|   |   |   |   |   |   |   feature6 > 0.5333: classC (5.87/1.12)
|   |   |   |   |   |   feature6 > 0.5667
|   |   |   |   |   |   |   feature8 <= 0.9333: classC (2.63/0.43)
|   |   |   |   |   |   |   feature8 > 0.9333: classA (11.48/2.74)
|   |   |   |   prevPredS = classD: classC (0.84/0.25)
|   |   |   |   prevPredS = classE: classC (3.51/1.54)
|   |   |   |   prevPredS = classF: classA (9.91/4.72)
|   |   |   |   prevPredS = classG: classA (0.0)
|   |   |   feature6 > 0.6: classC (155.23/50.59)
|   |   predS = classD
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.4667: classF (203.49/126.43)
|   |   |   |   feature6 > 0.4667: classG (5.96/2.23)
|   |   |   feature6 > 0.5
|   |   |   |   prevPredS = classA: classA (2.97/1.91)
|   |   |   |   prevPredS = classB: classC (0.0)
|   |   |   |   prevPredS = classC: classC (24.54/9.55)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature9 <= 0.5333: classG (6.33/2.74)
|   |   |   |   |   feature9 > 0.5333: classC (13.1/5.01)
|   |   |   |   prevPredS = classE: classD (0.09/0.02)
|   |   |   |   prevPredS = classF: classD (2.07/0.99)
|   |   |   |   prevPredS = classG: classD (1.48/0.44)
|   |   predS = classE
|   |   |   feature6 <= 0.3333
|   |   |   |   feature6 <= 0.2333: classC (5.44/1.1)
|   |   |   |   feature6 > 0.2333: classG (69.93/34.72)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.6667
|   |   |   |   |   feature6 <= 0.4333: classE (16.97/10.38)
|   |   |   |   |   feature6 > 0.4333: classC (610.56/429.68)
|   |   |   |   feature6 > 0.6667: classA (19.32/3.98)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.2667: classG (3.87/0.76)
|   |   |   |   |   |   feature6 > 0.2667: classA (6.8/4.01)
|   |   |   |   |   feature6 > 0.4333: classE (44.42/25.74)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5: classD (7.89/2.99)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature6 <= 0.5333: classG (3.87/0.76)
|   |   |   |   |   |   feature6 > 0.5333: classA (6.91/1.36)
|   |   |   prevPredS = classB: classE (2.61/1.7)
|   |   |   prevPredS = classC
|   |   |   |   feature8 <= 0.9667
|   |   |   |   |   feature7 <= 0.8: classC (4.94/2.61)
|   |   |   |   |   feature7 > 0.8: classA (3.71/1.32)
|   |   |   |   feature8 > 0.9667: classC (6.94/3.63)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.4: classA (3.5/1.98)
|   |   |   |   |   feature6 > 0.4: classC (16.12/2.86)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.5: classD (3.19/1.44)
|   |   |   |   |   feature6 > 0.5: classA (3.51/1.72)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classE (4.35/2.49)
|   |   |   |   feature6 > 0.4333: classF (4.95/1.69)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.4667: classA (18.4/6.44)
|   |   |   |   feature9 > 0.4667
|   |   |   |   |   feature6 <= 0.6: classF (7.57/3.37)
|   |   |   |   |   feature6 > 0.6: classG (5.45/1.85)
|   |   |   prevPredS = classG: classF (5.12/2.49)
|   |   predS = classG
|   |   |   feature9 <= 0.6667: classG (29.9/16.81)
|   |   |   feature9 > 0.6667
|   |   |   |   feature6 <= 0.4667: classG (3.6/0.82)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5667: classE (10.11/4.58)
|   |   |   |   |   feature6 > 0.5667: classF (4.19/1.66)
|   feature5 = classD
|   |   prevPredS = classA: classC (21.4/16.24)
|   |   prevPredS = classB: classA (10.16/6.24)
|   |   prevPredS = classC: classC (26.75/14.66)
|   |   prevPredS = classD
|   |   |   predS = classA: classE (1.64/1.2)
|   |   |   predS = classB: classB (0.61/0.32)
|   |   |   predS = classC: classC (2.89/1.96)
|   |   |   predS = classD
|   |   |   |   feature6 <= 0.5667: classF (4.92/3.01)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature8 <= 0.7333: classD (3.96/1.44)
|   |   |   |   |   feature8 > 0.7333: classC (14.37/3.18)
|   |   |   predS = classE
|   |   |   |   feature6 <= 0.5: classC (15.36/11.0)
|   |   |   |   feature6 > 0.5: classD (2.9/0.88)
|   |   |   predS = classF: classA (1.73/1.26)
|   |   |   predS = classG: classD (1.62/1.02)
|   |   prevPredS = classE: classD (34.36/23.74)
|   |   prevPredS = classF: classE (5.97/4.38)
|   |   prevPredS = classG: classG (11.42/7.79)
|   feature5 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.5333: classE (7.31/4.67)
|   |   |   |   |   feature6 > 0.5333: classB (4.77/2.17)
|   |   |   |   feature6 > 0.5667: classD (7.72/5.13)
|   |   |   feature6 > 0.6667
|   |   |   |   feature9 <= 0.9667: classA (6.53/4.56)
|   |   |   |   feature9 > 0.9667: classC (11.24/5.57)
|   |   predS = classB: classA (34.46/16.51)
|   |   predS = classC
|   |   |   feature6 <= 0.7333: classC (36.01/25.35)
|   |   |   feature6 > 0.7333: classB (4.4/2.23)
|   |   predS = classD: classF (80.85/53.43)
|   |   predS = classE
|   |   |   feature6 <= 0.3
|   |   |   |   feature2 = classA: classG (0.27/0.08)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classC (7.61/4.02)
|   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   feature2 = classE: classE (30.48/13.06)
|   |   |   |   feature2 = classF: classE (3.04/1.3)
|   |   |   |   feature2 = classG: classE (0.0)
|   |   |   feature6 > 0.3
|   |   |   |   feature9 <= 0.4333
|   |   |   |   |   feature6 <= 0.4333: classA (14.16/4.61)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature6 <= 0.6: classC (29.28/20.55)
|   |   |   |   |   |   feature6 > 0.6: classA (2.98/0.88)
|   |   |   |   feature9 > 0.4333
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   |   feature9 <= 0.6: classC (8.61/4.67)
|   |   |   |   |   |   |   feature9 > 0.6: classE (6.55/4.26)
|   |   |   |   |   |   feature9 > 0.9333: classD (63.08/35.74)
|   |   |   |   |   prevPredS = classB: classA (0.35/0.19)
|   |   |   |   |   prevPredS = classC: classE (0.01/0.0)
|   |   |   |   |   prevPredS = classD: classD (14.25/8.59)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature7 <= 0.6
|   |   |   |   |   |   |   |   feature6 <= 0.4: classD (2.73/0.53)
|   |   |   |   |   |   |   |   feature6 > 0.4: classC (9.91/6.81)
|   |   |   |   |   |   |   feature7 > 0.6: classE (83.42/62.21)
|   |   |   |   |   |   feature6 > 0.4667: classD (29.08/14.46)
|   |   |   |   |   prevPredS = classF: classE (4.54/3.18)
|   |   |   |   |   prevPredS = classG: classG (5.86/4.6)
|   |   predS = classF
|   |   |   feature2 = classA: classF (0.51/0.23)
|   |   |   feature2 = classB: classE (0.0)
|   |   |   feature2 = classC
|   |   |   |   feature6 <= 0.5: classE (5.24/3.81)
|   |   |   |   feature6 > 0.5: classA (7.13/2.09)
|   |   |   feature2 = classD: classF (0.02/0.01)
|   |   |   feature2 = classE: classF (2.43/1.58)
|   |   |   feature2 = classF: classE (45.86/24.71)
|   |   |   feature2 = classG: classG (0.2/0.11)
|   |   predS = classG
|   |   |   prevPredS = classA: classE (9.97/5.0)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   prevPredS = classE: classA (6.71/4.09)
|   |   |   prevPredS = classF: classF (3.46/1.6)
|   |   |   prevPredS = classG: classG (1.76/1.02)
|   feature5 = classF: classF (106.8/70.34)
|   feature5 = classG: classG (16.96/12.17)
feature3 = classD
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature5 = classA
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature9 <= 0.6333: classG (3.35/1.89)
|   |   |   |   |   |   feature9 > 0.6333: classD (7.7/1.73)
|   |   |   |   |   feature6 > 0.5: classA (41.04/20.64)
|   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   prevPredS = classC: classA (1.96/1.05)
|   |   |   |   prevPredS = classD: classA (0.01/0.0)
|   |   |   |   prevPredS = classE: classD (0.88/0.38)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.5667: classC (2.45/0.98)
|   |   |   |   |   feature6 > 0.5667: classA (2.48/1.12)
|   |   |   |   prevPredS = classG: classD (9.92/4.94)
|   |   |   feature5 = classB
|   |   |   |   feature6 <= 0.5667: classB (3.79/1.53)
|   |   |   |   feature6 > 0.5667: classA (3.03/1.61)
|   |   |   feature5 = classC: classA (4.71/2.75)
|   |   |   feature5 = classD
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature8 <= 0.9: classD (33.99/14.69)
|   |   |   |   |   |   feature8 > 0.9: classA (14.98/6.63)
|   |   |   |   |   feature6 > 0.5333: classB (39.23/23.22)
|   |   |   |   feature6 > 0.5667
|   |   |   |   |   feature6 <= 0.6: classG (21.52/11.04)
|   |   |   |   |   feature6 > 0.6
|   |   |   |   |   |   feature6 <= 0.6333: classA (70.08/29.44)
|   |   |   |   |   |   feature6 > 0.6333: classG (4.45/1.57)
|   |   |   feature5 = classE
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.6333: classD (5.14/3.25)
|   |   |   |   |   feature9 > 0.6333: classA (3.74/1.55)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classA (0.87/0.47)
|   |   |   |   prevPredS = classD: classD (4.92/1.75)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4333: classE (7.39/2.44)
|   |   |   |   |   feature6 > 0.4333: classA (5.58/3.91)
|   |   |   |   prevPredS = classF: classC (1.24/0.58)
|   |   |   |   prevPredS = classG: classD (2.23/1.43)
|   |   |   feature5 = classF
|   |   |   |   feature2 = classA: classF (8.47/3.55)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classC (0.18/0.1)
|   |   |   |   feature2 = classD: classD (0.0)
|   |   |   |   feature2 = classE: classA (0.09/0.05)
|   |   |   |   feature2 = classF: classA (1.07/0.54)
|   |   |   |   feature2 = classG: classD (12.53/5.6)
|   |   |   feature5 = classG: classG (1.62/0.79)
|   |   feature6 > 0.6667: classA (291.48/185.05)
|   predS = classB: classA (325.73/170.08)
|   predS = classC
|   |   feature6 <= 0.5667
|   |   |   feature6 <= 0.2667
|   |   |   |   feature6 <= 0.2333: classE (12.29/2.13)
|   |   |   |   feature6 > 0.2333: classC (174.1/111.72)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.4
|   |   |   |   |   feature6 <= 0.3667: classE (46.36/28.52)
|   |   |   |   |   feature6 > 0.3667: classC (94.11/55.12)
|   |   |   |   feature6 > 0.4
|   |   |   |   |   feature6 <= 0.5: classD (37.02/18.65)
|   |   |   |   |   feature6 > 0.5: classE (27.29/11.73)
|   |   feature6 > 0.5667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.3667: classD (8.03/3.06)
|   |   |   |   feature9 > 0.3667
|   |   |   |   |   feature6 <= 0.8: classA (20.91/9.89)
|   |   |   |   |   feature6 > 0.8: classB (3.11/0.99)
|   |   |   prevPredS = classB: classD (0.0)
|   |   |   prevPredS = classC: classD (32.92/17.91)
|   |   |   prevPredS = classD: classD (56.96/23.13)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.7333: classC (3.5/1.17)
|   |   |   |   feature6 > 0.7333: classD (3.13/1.69)
|   |   |   prevPredS = classF: classD (3.37/1.29)
|   |   |   prevPredS = classG: classD (0.0)
|   predS = classD
|   |   feature7 <= 0.36
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.3333: classE (3.82/0.87)
|   |   |   |   feature6 > 0.3333
|   |   |   |   |   feature6 <= 0.5: classF (11.1/6.41)
|   |   |   |   |   feature6 > 0.5: classD (9.58/2.18)
|   |   |   prevPredS = classB: classE (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333: classF (6.09/3.36)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature9 <= 0.5333: classE (4.55/2.03)
|   |   |   |   |   feature9 > 0.5333: classD (4.16/1.17)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.4667: classD (15.46/7.09)
|   |   |   |   feature9 > 0.4667: classG (9.78/5.22)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667: classE (94.81/42.16)
|   |   |   |   feature6 > 0.4667: classD (3.93/1.65)
|   |   |   prevPredS = classF: classD (2.45/1.39)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4667: classG (8.64/3.56)
|   |   |   |   feature6 > 0.4667: classE (8.22/2.14)
|   |   feature7 > 0.36
|   |   |   feature6 <= 0.4333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature7 <= 0.64: classD (5.39/1.83)
|   |   |   |   |   feature7 > 0.64: classA (5.97/2.03)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classD (3.51/0.89)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.3: classA (22.43/6.48)
|   |   |   |   |   feature6 > 0.3: classD (29.5/11.91)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.3333
|   |   |   |   |   |   feature6 <= 0.3: classA (5.77/3.78)
|   |   |   |   |   |   feature6 > 0.3: classG (10.14/3.98)
|   |   |   |   |   feature6 > 0.3333: classD (9.43/2.67)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature9 <= 0.3: classA (10.67/2.66)
|   |   |   |   |   feature9 > 0.3: classD (7.24/3.55)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature9 <= 0.6: classD (6.77/1.69)
|   |   |   |   |   feature9 > 0.6: classG (5.01/1.25)
|   |   |   feature6 > 0.4333: classD (895.05/490.02)
|   predS = classE
|   |   feature6 <= 0.3
|   |   |   feature8 <= 0.6
|   |   |   |   feature7 <= 0.4: classC (11.09/6.86)
|   |   |   |   feature7 > 0.4: classE (214.6/105.69)
|   |   |   feature8 > 0.6
|   |   |   |   prevPredS = classA: classE (15.19/8.93)
|   |   |   |   prevPredS = classB: classD (45.01/21.61)
|   |   |   |   prevPredS = classC: classC (4.76/2.29)
|   |   |   |   prevPredS = classD: classD (4.69/2.25)
|   |   |   |   prevPredS = classE: classE (21.14/10.15)
|   |   |   |   prevPredS = classF: classE (32.59/15.66)
|   |   |   |   prevPredS = classG: classE (10.91/5.27)
|   |   feature6 > 0.3
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5667
|   |   |   |   |   feature9 <= 0.5
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature6 <= 0.4: classD (7.06/4.94)
|   |   |   |   |   |   |   feature6 > 0.4: classC (26.75/18.39)
|   |   |   |   |   |   feature6 > 0.5333: classD (3.6/1.31)
|   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   feature6 <= 0.4667: classC (97.34/54.6)
|   |   |   |   |   |   feature6 > 0.4667: classA (3.41/1.48)
|   |   |   |   feature9 > 0.5667
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classE (8.09/3.34)
|   |   |   |   |   |   feature6 > 0.4333: classD (322.25/208.47)
|   |   |   |   |   feature6 > 0.5: classE (17.49/9.56)
|   |   |   prevPredS = classB
|   |   |   |   feature6 <= 0.4667: classE (60.39/45.32)
|   |   |   |   feature6 > 0.4667: classA (5.02/2.61)
|   |   |   prevPredS = classC
|   |   |   |   feature5 = classA: classC (0.0)
|   |   |   |   feature5 = classB: classC (0.0)
|   |   |   |   feature5 = classC: classC (4.25/2.42)
|   |   |   |   feature5 = classD: classD (12.82/8.13)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4667: classC (18.62/12.88)
|   |   |   |   |   feature6 > 0.4667: classE (7.04/1.65)
|   |   |   |   feature5 = classF: classC (0.0)
|   |   |   |   feature5 = classG: classC (0.0)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature8 <= 0.9667: classD (410.61/275.7)
|   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   feature6 <= 0.3667: classA (3.9/1.25)
|   |   |   |   |   |   feature6 > 0.3667: classC (25.64/18.17)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature8 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.4333: classE (20.22/6.67)
|   |   |   |   |   |   feature9 > 0.4333
|   |   |   |   |   |   |   feature2 = classA: classE (0.0)
|   |   |   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   |   |   |   feature2 = classD: classD (4.85/1.68)
|   |   |   |   |   |   |   feature2 = classE
|   |   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   |   feature6 <= 0.6333: classE (5.11/1.7)
|   |   |   |   |   |   |   |   |   feature6 > 0.6333: classA (2.98/0.49)
|   |   |   |   |   |   |   |   feature6 > 0.7: classE (7.01/1.27)
|   |   |   |   |   |   |   feature2 = classF: classF (0.4/0.07)
|   |   |   |   |   |   |   feature2 = classG: classE (0.0)
|   |   |   |   |   feature8 > 0.6333: classD (17.47/7.04)
|   |   |   prevPredS = classE
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.56
|   |   |   |   |   |   feature6 <= 0.4667: classC (17.3/12.0)
|   |   |   |   |   |   feature6 > 0.4667: classA (6.43/2.04)
|   |   |   |   |   feature7 > 0.56
|   |   |   |   |   |   feature6 <= 0.4667: classC (12.41/8.6)
|   |   |   |   |   |   feature6 > 0.4667: classD (4.61/1.17)
|   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   feature2 = classC: classE (1.57/1.12)
|   |   |   |   feature2 = classD
|   |   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature6 <= 0.4667: classD (132.41/87.59)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   |   feature6 <= 0.6333: classD (3.44/1.09)
|   |   |   |   |   |   |   |   feature6 > 0.6333: classE (7.48/4.04)
|   |   |   |   |   |   |   feature6 > 0.7: classD (2.69/0.48)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature7 <= 0.4
|   |   |   |   |   |   |   feature6 <= 0.5: classC (14.43/10.02)
|   |   |   |   |   |   |   feature6 > 0.5: classD (5.26/1.28)
|   |   |   |   |   |   feature7 > 0.4
|   |   |   |   |   |   |   feature6 <= 0.4: classA (3.43/0.77)
|   |   |   |   |   |   |   feature6 > 0.4: classC (15.23/11.06)
|   |   |   |   |   feature5 = classF: classD (0.0)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classD (29.85/16.17)
|   |   |   |   |   |   feature6 > 0.4333: classC (671.27/492.0)
|   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   feature9 <= 0.6333: classD (25.47/9.55)
|   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classE (12.04/1.98)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classD (3.83/1.55)
|   |   |   |   |   |   feature6 > 0.6667: classD (59.33/35.51)
|   |   |   |   feature2 = classF: classD (5.14/3.87)
|   |   |   |   feature2 = classG: classC (26.52/20.59)
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA: classD (0.0)
|   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.4667: classC (17.12/11.84)
|   |   |   |   |   feature6 > 0.4667: classA (6.47/1.78)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.4667: classD (55.69/35.67)
|   |   |   |   |   feature6 > 0.4667: classF (3.49/1.64)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4333: classE (5.17/1.02)
|   |   |   |   |   feature6 > 0.4333: classC (27.69/20.35)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature7 <= 0.44
|   |   |   |   |   |   feature7 <= 0.28
|   |   |   |   |   |   |   feature6 <= 0.7: classC (12.2/8.66)
|   |   |   |   |   |   |   feature6 > 0.7: classE (3.62/0.6)
|   |   |   |   |   |   feature7 > 0.28
|   |   |   |   |   |   |   feature6 <= 0.4667: classC (20.14/13.93)
|   |   |   |   |   |   |   feature6 > 0.4667: classD (7.61/2.31)
|   |   |   |   |   feature7 > 0.44: classF (17.5/11.09)
|   |   |   |   feature5 = classG: classD (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.5667: classC (139.7/105.4)
|   |   |   |   feature6 > 0.5667: classG (13.74/6.75)
|   predS = classF
|   |   feature9 <= 0.8333
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5
|   |   |   |   |   feature9 <= 0.3333
|   |   |   |   |   |   feature6 <= 0.3333: classE (8.35/2.07)
|   |   |   |   |   |   feature6 > 0.3333: classA (2.8/1.97)
|   |   |   |   |   feature9 > 0.3333: classA (18.89/6.43)
|   |   |   |   feature9 > 0.5
|   |   |   |   |   feature9 <= 0.6333: classC (10.73/6.04)
|   |   |   |   |   feature9 > 0.6333: classD (22.41/8.36)
|   |   |   prevPredS = classB: classE (5.27/2.3)
|   |   |   prevPredS = classC: classA (2.57/1.02)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature8 <= 0.8667: classD (7.81/3.13)
|   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   feature6 <= 0.4333: classA (27.26/8.81)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5: classF (4.8/2.35)
|   |   |   |   |   |   |   feature6 > 0.5: classA (4.72/2.38)
|   |   |   |   feature9 > 0.5333: classD (26.42/10.0)
|   |   |   prevPredS = classE
|   |   |   |   feature5 = classA: classF (0.0)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.4333: classA (4.85/2.81)
|   |   |   |   |   feature6 > 0.4333: classF (5.83/1.8)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature9 <= 0.6333: classD (13.4/6.62)
|   |   |   |   |   feature9 > 0.6333: classE (4.33/1.89)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.4667: classE (10.13/2.95)
|   |   |   |   |   feature6 > 0.4667: classF (5.1/2.56)
|   |   |   |   feature5 = classF: classF (0.62/0.23)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   prevPredS = classF
|   |   |   |   feature5 = classA: classF (0.53/0.21)
|   |   |   |   feature5 = classB: classF (0.0)
|   |   |   |   feature5 = classC
|   |   |   |   |   feature6 <= 0.5: classF (7.27/1.6)
|   |   |   |   |   feature6 > 0.5: classG (4.41/2.08)
|   |   |   |   feature5 = classD
|   |   |   |   |   feature6 <= 0.7333: classG (4.51/2.66)
|   |   |   |   |   feature6 > 0.7333: classD (3.21/0.59)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature8 <= 0.8667
|   |   |   |   |   |   |   feature8 <= 0.6333: classE (6.0/3.3)
|   |   |   |   |   |   |   feature8 > 0.6333: classD (13.1/6.08)
|   |   |   |   |   |   feature8 > 0.8667
|   |   |   |   |   |   |   feature6 <= 0.4333: classA (9.13/2.59)
|   |   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   |   feature6 <= 0.5: classD (2.72/0.84)
|   |   |   |   |   |   |   |   feature6 > 0.5: classA (2.66/1.42)
|   |   |   |   |   feature6 > 0.5667: classG (11.45/4.29)
|   |   |   |   feature5 = classF: classF (8.64/4.61)
|   |   |   |   feature5 = classG: classF (0.0)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.5: classD (10.18/4.45)
|   |   |   |   feature6 > 0.5: classF (16.79/6.66)
|   |   feature9 > 0.8333
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classG (13.08/2.16)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3333: classA (11.25/3.48)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature6 <= 0.3667: classF (3.48/0.0)
|   |   |   |   |   |   |   feature6 > 0.3667: classD (8.33/4.32)
|   |   |   |   feature6 > 0.4333: classE (139.33/78.43)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (26.66/9.46)
|   |   |   |   |   feature6 > 0.5: classG (13.08/2.16)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classE (51.4/25.69)
|   |   |   |   |   feature6 > 0.5667: classC (3.01/1.26)
|   predS = classG
|   |   prevPredS = classA
|   |   |   feature9 <= 0.7
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4: classD (7.34/2.02)
|   |   |   |   |   feature6 > 0.4
|   |   |   |   |   |   feature6 <= 0.4333: classG (5.53/1.16)
|   |   |   |   |   |   feature6 > 0.4333: classA (2.77/0.77)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.5667: classE (35.35/11.16)
|   |   |   |   |   feature6 > 0.5667: classG (7.75/1.62)
|   |   |   feature9 > 0.7
|   |   |   |   feature9 <= 0.8: classF (10.03/1.76)
|   |   |   |   feature9 > 0.8
|   |   |   |   |   feature6 <= 0.5: classF (3.29/1.51)
|   |   |   |   |   feature6 > 0.5: classA (16.14/3.06)
|   |   prevPredS = classB: classG (0.02/0.0)
|   |   prevPredS = classC: classC (0.05/0.02)
|   |   prevPredS = classD
|   |   |   feature5 = classA: classG (0.0)
|   |   |   feature5 = classB: classG (0.0)
|   |   |   feature5 = classC: classG (0.0)
|   |   |   feature5 = classD: classD (9.28/3.73)
|   |   |   feature5 = classE: classG (0.0)
|   |   |   feature5 = classF: classD (3.96/1.3)
|   |   |   feature5 = classG
|   |   |   |   feature7 <= 0.4: classD (3.97/1.31)
|   |   |   |   feature7 > 0.4: classG (13.63/3.12)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.4667
|   |   |   |   feature9 <= 0.3333
|   |   |   |   |   feature6 <= 0.3: classG (3.53/0.58)
|   |   |   |   |   feature6 > 0.3: classD (7.31/3.29)
|   |   |   |   feature9 > 0.3333
|   |   |   |   |   feature9 <= 0.5667: classA (17.38/5.65)
|   |   |   |   |   feature9 > 0.5667: classE (9.01/2.93)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5: classD (35.56/10.76)
|   |   |   |   feature6 > 0.5: classG (4.01/0.66)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.4: classG (6.94/3.85)
|   |   |   feature6 > 0.4
|   |   |   |   feature6 <= 0.5333: classF (7.86/2.12)
|   |   |   |   feature6 > 0.5333: classG (11.98/2.11)
|   |   prevPredS = classG
|   |   |   feature2 = classA
|   |   |   |   feature7 <= 0.72: classG (4.52/2.04)
|   |   |   |   feature7 > 0.72: classA (19.6/7.08)
|   |   |   feature2 = classB: classD (0.0)
|   |   |   feature2 = classC: classD (0.0)
|   |   |   feature2 = classD: classD (7.15/2.76)
|   |   |   feature2 = classE: classG (1.24/0.28)
|   |   |   feature2 = classF: classD (7.11/3.15)
|   |   |   feature2 = classG
|   |   |   |   feature9 <= 0.7
|   |   |   |   |   feature6 <= 0.3333: classD (10.08/1.71)
|   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   feature6 <= 0.6667: classG (8.34/3.3)
|   |   |   |   |   |   feature6 > 0.6667: classD (11.69/3.32)
|   |   |   |   feature9 > 0.7
|   |   |   |   |   feature9 <= 0.8: classF (5.1/1.75)
|   |   |   |   |   feature9 > 0.8: classG (10.46/2.39)
feature3 = classE
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   feature6 <= 0.5667
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature9 <= 0.7333
|   |   |   |   |   |   |   feature9 <= 0.5: classA (8.42/4.29)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classA (4.65/2.26)
|   |   |   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   |   |   feature9 <= 0.5333: classG (5.88/1.65)
|   |   |   |   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.5667: classA (2.66/0.44)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.5667: classG (5.78/2.36)
|   |   |   |   |   |   feature9 > 0.7333
|   |   |   |   |   |   |   feature8 <= 0.9333: classE (9.44/3.38)
|   |   |   |   |   |   |   feature8 > 0.9333: classA (5.52/2.62)
|   |   |   |   |   prevPredS = classB: classB (0.5/0.14)
|   |   |   |   |   prevPredS = classC: classC (2.77/1.16)
|   |   |   |   |   prevPredS = classD: classA (0.22/0.05)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature6 <= 0.3
|   |   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   |   feature9 <= 0.5: classB (3.3/1.14)
|   |   |   |   |   |   |   |   feature9 > 0.5: classD (3.79/0.62)
|   |   |   |   |   |   |   feature9 > 0.6: classE (3.95/1.37)
|   |   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   |   feature9 <= 0.3333: classE (4.99/2.71)
|   |   |   |   |   |   |   feature9 > 0.3333
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classA (2.64/0.44)
|   |   |   |   |   |   |   |   feature9 > 0.5333
|   |   |   |   |   |   |   |   |   feature9 <= 0.9: classE (6.31/1.68)
|   |   |   |   |   |   |   |   |   feature9 > 0.9: classA (4.55/1.57)
|   |   |   |   |   prevPredS = classF: classE (9.89/4.57)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.5667: classA (3.47/1.57)
|   |   |   |   |   |   feature9 > 0.5667: classD (9.22/1.94)
|   |   |   |   feature6 > 0.5: classB (83.17/51.49)
|   |   |   feature6 > 0.5667
|   |   |   |   feature6 <= 0.6: classA (55.17/30.68)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.6333
|   |   |   |   |   |   feature9 <= 0.9: classA (51.68/28.66)
|   |   |   |   |   |   feature9 > 0.9
|   |   |   |   |   |   |   feature9 <= 0.9333: classE (14.78/7.83)
|   |   |   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   |   |   feature8 <= 0.8: classE (4.3/2.27)
|   |   |   |   |   |   |   |   feature8 > 0.8: classA (16.29/8.62)
|   |   |   |   |   feature6 > 0.6333
|   |   |   |   |   |   prevPredS = classA: classA (3.3/0.71)
|   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   prevPredS = classC: classC (0.0/0.0)
|   |   |   |   |   |   prevPredS = classD: classA (0.01/0.0)
|   |   |   |   |   |   prevPredS = classE: classA (3.2/0.53)
|   |   |   |   |   |   prevPredS = classF: classE (3.85/1.34)
|   |   |   |   |   |   prevPredS = classG: classG (9.37/3.67)
|   |   feature6 > 0.6667: classA (393.73/233.3)
|   predS = classB
|   |   prevPredS = classA
|   |   |   feature9 <= 0.6333
|   |   |   |   feature9 <= 0.4667: classE (7.22/4.23)
|   |   |   |   feature9 > 0.4667: classC (4.95/1.8)
|   |   |   feature9 > 0.6333: classB (8.76/4.34)
|   |   prevPredS = classB: classA (334.33/168.86)
|   |   prevPredS = classC
|   |   |   feature9 <= 0.8667: classB (5.47/2.71)
|   |   |   feature9 > 0.8667: classE (4.3/1.59)
|   |   prevPredS = classD: classA (0.0)
|   |   prevPredS = classE: classE (4.9/3.16)
|   |   prevPredS = classF: classD (4.02/1.46)
|   |   prevPredS = classG: classG (0.22/0.08)
|   predS = classC
|   |   prevPredS = classA
|   |   |   feature6 <= 0.7333
|   |   |   |   feature6 <= 0.2667: classC (61.33/35.89)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.3667
|   |   |   |   |   |   feature6 <= 0.3333: classE (14.78/8.53)
|   |   |   |   |   |   feature6 > 0.3333: classG (6.62/2.01)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4333: classF (45.7/28.27)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.5: classC (13.93/6.15)
|   |   |   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   |   |   feature6 <= 0.5333: classE (5.64/1.07)
|   |   |   |   |   |   |   |   feature6 > 0.5333: classC (13.89/8.88)
|   |   |   feature6 > 0.7333
|   |   |   |   feature6 <= 0.8: classA (18.66/8.11)
|   |   |   |   feature6 > 0.8: classB (6.12/1.54)
|   |   prevPredS = classB
|   |   |   feature6 <= 0.2667: classG (28.49/17.64)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333: classE (17.24/11.07)
|   |   |   |   feature6 > 0.7333: classB (2.86/0.48)
|   |   prevPredS = classC
|   |   |   feature2 = classA: classE (0.0)
|   |   |   feature2 = classB: classE (0.0)
|   |   |   feature2 = classC: classC (39.97/24.71)
|   |   |   feature2 = classD: classE (0.0)
|   |   |   feature2 = classE
|   |   |   |   feature6 <= 0.6: classE (103.6/60.6)
|   |   |   |   feature6 > 0.6
|   |   |   |   |   feature6 <= 0.7333: classD (4.92/2.07)
|   |   |   |   |   feature6 > 0.7333: classB (7.07/1.4)
|   |   |   feature2 = classF: classE (0.0)
|   |   |   feature2 = classG: classE (0.0)
|   |   prevPredS = classD
|   |   |   feature6 <= 0.2667: classC (6.76/4.04)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.5667: classE (7.44/4.35)
|   |   |   |   feature6 > 0.5667: classD (6.99/4.06)
|   |   prevPredS = classE
|   |   |   feature6 <= 0.2667: classC (27.85/16.65)
|   |   |   feature6 > 0.2667
|   |   |   |   feature5 = classA: classE (0.0)
|   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   feature5 = classC: classC (13.34/7.43)
|   |   |   |   feature5 = classD: classD (0.01/0.01)
|   |   |   |   feature5 = classE
|   |   |   |   |   feature6 <= 0.7333
|   |   |   |   |   |   feature6 <= 0.5667: classE (32.26/15.25)
|   |   |   |   |   |   feature6 > 0.5667: classC (5.08/2.51)
|   |   |   |   |   feature6 > 0.7333
|   |   |   |   |   |   feature6 <= 0.9667: classB (3.98/0.66)
|   |   |   |   |   |   feature6 > 0.9667: classE (4.8/0.79)
|   |   |   |   feature5 = classF: classE (0.0)
|   |   |   |   feature5 = classG: classE (0.0)
|   |   prevPredS = classF
|   |   |   feature6 <= 0.2667: classC (14.54/9.33)
|   |   |   feature6 > 0.2667
|   |   |   |   feature9 <= 0.3667: classD (7.67/4.46)
|   |   |   |   feature9 > 0.3667
|   |   |   |   |   feature6 <= 0.6: classE (15.49/7.38)
|   |   |   |   |   feature6 > 0.6: classB (2.91/1.5)
|   |   prevPredS = classG: classC (0.0)
|   predS = classD
|   |   feature2 = classA
|   |   |   feature7 <= 0.4: classE (37.66/23.13)
|   |   |   feature7 > 0.4: classD (117.87/68.43)
|   |   feature2 = classB: classF (0.0)
|   |   feature2 = classC
|   |   |   feature6 <= 0.5333: classF (3.89/2.2)
|   |   |   feature6 > 0.5333: classA (3.12/0.9)
|   |   feature2 = classD
|   |   |   feature6 <= 0.5
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   prevPredS = classA: classC (0.35/0.1)
|   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   prevPredS = classC: classE (8.46/2.23)
|   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   feature9 <= 0.5333: classD (2.77/0.76)
|   |   |   |   |   |   feature9 > 0.5333: classE (2.93/0.5)
|   |   |   |   |   prevPredS = classE: classE (10.04/3.63)
|   |   |   |   |   prevPredS = classF: classF (0.75/0.08)
|   |   |   |   |   prevPredS = classG: classG (4.76/1.31)
|   |   |   |   feature6 > 0.4333
|   |   |   |   |   feature6 <= 0.4667: classF (148.12/85.85)
|   |   |   |   |   feature6 > 0.4667: classD (11.03/5.2)
|   |   |   feature6 > 0.5
|   |   |   |   feature6 <= 0.9
|   |   |   |   |   feature9 <= 0.9
|   |   |   |   |   |   prevPredS = classA: classC (0.66/0.22)
|   |   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   |   prevPredS = classC: classE (5.62/2.42)
|   |   |   |   |   |   prevPredS = classD
|   |   |   |   |   |   |   feature9 <= 0.5: classG (6.18/3.01)
|   |   |   |   |   |   |   feature9 > 0.5
|   |   |   |   |   |   |   |   feature8 <= 0.5667: classD (4.68/1.12)
|   |   |   |   |   |   |   |   feature8 > 0.5667: classE (16.55/7.02)
|   |   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   |   feature9 <= 0.4667: classD (2.6/0.7)
|   |   |   |   |   |   |   feature9 > 0.4667: classE (4.97/1.11)
|   |   |   |   |   |   prevPredS = classF: classD (1.08/0.18)
|   |   |   |   |   |   prevPredS = classG: classD (1.31/0.22)
|   |   |   |   |   feature9 > 0.9: classC (9.18/3.41)
|   |   |   |   feature6 > 0.9: classC (13.65/4.66)
|   |   feature2 = classE
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4333: classD (8.21/3.8)
|   |   |   |   feature6 > 0.4333: classF (29.96/19.37)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.6333
|   |   |   |   |   feature6 <= 0.4333: classD (2.81/0.76)
|   |   |   |   |   feature6 > 0.4333: classF (9.88/4.87)
|   |   |   |   feature6 > 0.6333
|   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   feature9 <= 0.7333: classE (3.09/0.52)
|   |   |   |   |   |   feature9 > 0.7333: classA (2.54/0.43)
|   |   |   |   |   feature6 > 0.7: classC (4.53/2.13)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.6333
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3667: classE (3.14/0.52)
|   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   feature9 <= 0.5333: classD (8.73/3.75)
|   |   |   |   |   |   |   feature9 > 0.5333: classE (2.47/0.41)
|   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   feature6 <= 0.5: classF (5.03/2.37)
|   |   |   |   |   |   |   feature6 > 0.5: classD (6.09/1.77)
|   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   feature6 <= 0.4667: classF (87.2/53.66)
|   |   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   |   feature9 <= 0.4667: classE (10.38/5.15)
|   |   |   |   |   |   |   |   feature9 > 0.4667
|   |   |   |   |   |   |   |   |   feature9 <= 0.5: classG (13.02/5.2)
|   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (5.76/1.57)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4667: classF (59.27/36.94)
|   |   |   |   |   |   feature6 > 0.4667: classD (10.96/3.04)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   feature9 <= 0.6667: classD (2.87/0.52)
|   |   |   |   |   |   feature9 > 0.6667: classE (11.75/3.22)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.3
|   |   |   |   |   feature7 <= 0.88: classA (9.68/3.5)
|   |   |   |   |   feature7 > 0.88: classE (2.41/0.4)
|   |   |   |   feature6 > 0.3
|   |   |   |   |   feature7 <= 0.64
|   |   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   |   |   feature9 <= 0.4333: classD (5.81/1.33)
|   |   |   |   |   |   |   |   feature9 > 0.4333: classE (3.25/1.34)
|   |   |   |   |   |   |   feature6 > 0.4333: classF (18.98/9.09)
|   |   |   |   |   |   feature6 > 0.4667
|   |   |   |   |   |   |   feature8 <= 0.4667: classD (4.05/0.82)
|   |   |   |   |   |   |   feature8 > 0.4667: classE (11.52/5.48)
|   |   |   |   |   feature7 > 0.64: classE (217.65/119.9)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.4: classD (19.94/10.32)
|   |   |   |   feature9 > 0.4
|   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.4333: classE (6.57/2.42)
|   |   |   |   |   |   feature6 > 0.4333: classF (6.84/3.22)
|   |   |   |   |   feature6 > 0.5333: classE (3.4/0.75)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.3333
|   |   |   |   |   feature6 <= 0.4667: classF (5.97/2.81)
|   |   |   |   |   feature6 > 0.4667: classE (8.7/1.78)
|   |   |   |   feature9 > 0.3333
|   |   |   |   |   feature6 <= 0.6333: classG (10.66/3.97)
|   |   |   |   |   feature6 > 0.6333: classD (2.52/0.42)
|   |   feature2 = classF: classF (24.29/12.82)
|   |   feature2 = classG: classG (5.79/2.26)
|   predS = classE
|   |   feature6 <= 0.4667
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.6333: classC (164.7/104.77)
|   |   |   |   feature9 > 0.6333
|   |   |   |   |   feature5 = classA
|   |   |   |   |   |   feature6 <= 0.4333: classE (38.48/13.05)
|   |   |   |   |   |   feature6 > 0.4333: classC (90.73/63.56)
|   |   |   |   |   feature5 = classB: classD (0.0)
|   |   |   |   |   feature5 = classC: classD (0.0)
|   |   |   |   |   feature5 = classD: classD (0.0)
|   |   |   |   |   feature5 = classE
|   |   |   |   |   |   feature7 <= 0.6: classE (20.09/15.1)
|   |   |   |   |   |   feature7 > 0.6: classD (210.91/139.08)
|   |   |   |   |   feature5 = classF: classE (0.18/0.13)
|   |   |   |   |   feature5 = classG: classD (0.0)
|   |   |   prevPredS = classB: classE (55.22/39.88)
|   |   |   prevPredS = classC: classC (39.03/23.0)
|   |   |   prevPredS = classD
|   |   |   |   feature9 <= 0.5333
|   |   |   |   |   feature9 <= 0.4333: classD (26.33/17.31)
|   |   |   |   |   feature9 > 0.4333: classE (125.01/87.85)
|   |   |   |   feature9 > 0.5333: classD (44.2/29.24)
|   |   |   prevPredS = classE
|   |   |   |   feature9 <= 0.9
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature6 <= 0.3333: classG (137.3/78.65)
|   |   |   |   |   |   feature6 > 0.3333
|   |   |   |   |   |   |   feature8 <= 0.6667: classD (20.21/12.22)
|   |   |   |   |   |   |   feature8 > 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.3667: classE (17.25/7.18)
|   |   |   |   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   |   |   |   feature8 <= 0.9333: classE (11.62/5.07)
|   |   |   |   |   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.7: classD (3.91/2.17)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.7: classA (5.94/1.38)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.4: classD (5.06/2.75)
|   |   |   |   |   feature6 > 0.4333: classC (1163.34/876.34)
|   |   |   |   feature9 > 0.9
|   |   |   |   |   feature8 <= 0.9333: classE (96.88/68.08)
|   |   |   |   |   feature8 > 0.9333: classA (108.15/69.5)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4333: classE (96.74/40.13)
|   |   |   |   feature6 > 0.4333: classC (277.24/198.59)
|   |   |   prevPredS = classG
|   |   |   |   feature2 = classA
|   |   |   |   |   feature7 <= 0.76: classE (102.24/71.84)
|   |   |   |   |   feature7 > 0.76
|   |   |   |   |   |   feature6 <= 0.4333: classA (5.13/2.47)
|   |   |   |   |   |   feature6 > 0.4333: classC (10.43/7.16)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classE (0.0)
|   |   |   |   feature2 = classD: classD (8.63/5.43)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature6 <= 0.4333: classG (5.7/2.96)
|   |   |   |   |   feature6 > 0.4333: classC (25.68/19.08)
|   |   |   |   feature2 = classF: classE (77.52/54.47)
|   |   |   |   feature2 = classG: classG (7.69/5.65)
|   |   feature6 > 0.4667
|   |   |   prevPredS = classA: classE (42.5/17.98)
|   |   |   prevPredS = classB: classB (4.5/2.63)
|   |   |   prevPredS = classC: classE (3.35/1.68)
|   |   |   prevPredS = classD
|   |   |   |   feature8 <= 0.5333
|   |   |   |   |   feature2 = classA: classD (0.0)
|   |   |   |   |   feature2 = classB: classD (0.0)
|   |   |   |   |   feature2 = classC: classD (0.0)
|   |   |   |   |   feature2 = classD: classD (4.03/1.29)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.6333: classD (10.03/3.26)
|   |   |   |   |   |   feature6 > 0.6333: classE (4.47/2.41)
|   |   |   |   |   feature2 = classF: classF (2.35/0.36)
|   |   |   |   |   feature2 = classG: classD (0.0)
|   |   |   |   feature8 > 0.5333: classE (27.96/11.1)
|   |   |   prevPredS = classE
|   |   |   |   feature7 <= 0.8
|   |   |   |   |   feature2 = classA
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature9 <= 0.5333: classE (6.83/2.16)
|   |   |   |   |   |   |   feature9 > 0.5333: classA (8.23/2.51)
|   |   |   |   |   |   feature6 > 0.7: classD (4.79/2.13)
|   |   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   |   feature2 = classC: classE (0.52/0.15)
|   |   |   |   |   feature2 = classD
|   |   |   |   |   |   feature7 <= 0.36: classD (6.49/1.96)
|   |   |   |   |   |   feature7 > 0.36
|   |   |   |   |   |   |   feature6 <= 0.7: classE (10.27/3.58)
|   |   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   |   feature7 <= 0.48: classE (2.57/0.42)
|   |   |   |   |   |   |   |   feature7 > 0.48: classD (3.51/0.77)
|   |   |   |   |   feature2 = classE
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature6 <= 0.6667
|   |   |   |   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   |   |   |   feature8 <= 0.8
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   |   |   |   |   |   feature8 <= 0.5: classD (7.23/2.85)
|   |   |   |   |   |   |   |   |   |   |   |   feature8 > 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (2.67/1.0)
|   |   |   |   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (4.54/0.75)
|   |   |   |   |   |   |   |   |   |   |   feature9 > 0.6: classD (10.0/2.09)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.6333
|   |   |   |   |   |   |   |   |   |   |   feature7 <= 0.76: classE (8.59/1.42)
|   |   |   |   |   |   |   |   |   |   |   feature7 > 0.76: classD (4.56/1.9)
|   |   |   |   |   |   |   |   |   feature8 > 0.8: classE (12.55/4.3)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classE (9.93/1.64)
|   |   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   |   feature7 <= 0.72
|   |   |   |   |   |   |   |   |   feature7 <= 0.68: classE (11.75/6.02)
|   |   |   |   |   |   |   |   |   feature7 > 0.68: classD (30.5/17.26)
|   |   |   |   |   |   |   |   feature7 > 0.72: classE (18.38/9.41)
|   |   |   |   |   |   feature6 > 0.7
|   |   |   |   |   |   |   feature5 = classA: classE (3.27/0.54)
|   |   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   |   feature5 = classD: classD (8.66/3.34)
|   |   |   |   |   |   |   feature5 = classE
|   |   |   |   |   |   |   |   feature7 <= 0.44: classG (3.14/0.63)
|   |   |   |   |   |   |   |   feature7 > 0.44
|   |   |   |   |   |   |   |   |   feature8 <= 0.5333
|   |   |   |   |   |   |   |   |   |   feature6 <= 0.7667
|   |   |   |   |   |   |   |   |   |   |   feature6 <= 0.7333: classD (3.38/1.84)
|   |   |   |   |   |   |   |   |   |   |   feature6 > 0.7333: classG (3.21/0.7)
|   |   |   |   |   |   |   |   |   |   feature6 > 0.7667: classD (8.82/3.0)
|   |   |   |   |   |   |   |   |   feature8 > 0.5333
|   |   |   |   |   |   |   |   |   |   feature9 <= 0.5: classD (15.16/7.07)
|   |   |   |   |   |   |   |   |   |   feature9 > 0.5: classE (13.94/2.3)
|   |   |   |   |   |   |   feature5 = classF: classE (2.26/0.37)
|   |   |   |   |   |   |   feature5 = classG: classE (0.05/0.01)
|   |   |   |   |   feature2 = classF: classE (5.85/1.64)
|   |   |   |   |   feature2 = classG: classG (1.8/0.7)
|   |   |   |   feature7 > 0.8
|   |   |   |   |   feature7 <= 0.84
|   |   |   |   |   |   feature6 <= 0.6: classB (6.12/2.16)
|   |   |   |   |   |   feature6 > 0.6: classE (7.37/2.77)
|   |   |   |   |   feature7 > 0.84
|   |   |   |   |   |   feature6 <= 0.7
|   |   |   |   |   |   |   feature9 <= 0.9333: classE (28.46/10.26)
|   |   |   |   |   |   |   feature9 > 0.9333
|   |   |   |   |   |   |   |   feature9 <= 0.9667: classA (8.26/2.68)
|   |   |   |   |   |   |   |   feature9 > 0.9667: classE (4.48/1.62)
|   |   |   |   |   |   feature6 > 0.7: classE (28.72/4.74)
|   |   |   prevPredS = classF
|   |   |   |   feature2 = classA: classE (1.17/0.41)
|   |   |   |   feature2 = classB: classE (0.0)
|   |   |   |   feature2 = classC: classF (3.8/0.64)
|   |   |   |   feature2 = classD: classE (0.0)
|   |   |   |   feature2 = classE
|   |   |   |   |   feature9 <= 0.3667: classD (5.81/2.59)
|   |   |   |   |   feature9 > 0.3667: classE (4.26/1.88)
|   |   |   |   feature2 = classF
|   |   |   |   |   feature5 = classA: classA (0.0)
|   |   |   |   |   feature5 = classB: classA (0.0)
|   |   |   |   |   feature5 = classC: classA (8.07/2.32)
|   |   |   |   |   feature5 = classD: classA (0.0)
|   |   |   |   |   feature5 = classE: classE (0.23/0.08)
|   |   |   |   |   feature5 = classF: classE (5.75/2.0)
|   |   |   |   |   feature5 = classG: classA (0.0)
|   |   |   |   feature2 = classG: classE (1.36/0.48)
|   |   |   prevPredS = classG: classG (23.96/14.74)
|   predS = classF
|   |   feature9 <= 0.7333
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.4667: classE (19.77/6.53)
|   |   |   |   feature6 > 0.4667: classF (16.8/8.02)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classA (34.61/18.61)
|   |   |   feature2 = classD
|   |   |   |   feature8 <= 0.7667: classD (13.46/6.97)
|   |   |   |   feature8 > 0.7667: classE (7.13/3.89)
|   |   |   feature2 = classE
|   |   |   |   feature5 = classA: classE (9.26/5.03)
|   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   feature5 = classC: classF (11.36/3.96)
|   |   |   |   feature5 = classD: classE (0.0)
|   |   |   |   feature5 = classE
|   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   feature7 <= 0.48
|   |   |   |   |   |   |   feature6 <= 0.5: classE (17.13/7.11)
|   |   |   |   |   |   |   feature6 > 0.5: classA (3.1/1.47)
|   |   |   |   |   |   feature7 > 0.48: classG (14.35/7.24)
|   |   |   |   |   prevPredS = classB: classE (2.08/0.86)
|   |   |   |   |   prevPredS = classC: classF (0.1/0.02)
|   |   |   |   |   prevPredS = classD: classA (6.98/4.2)
|   |   |   |   |   prevPredS = classE
|   |   |   |   |   |   feature7 <= 0.48: classF (5.13/1.44)
|   |   |   |   |   |   feature7 > 0.48
|   |   |   |   |   |   |   feature9 <= 0.6: classE (16.5/7.2)
|   |   |   |   |   |   |   feature9 > 0.6
|   |   |   |   |   |   |   |   feature9 <= 0.6333: classD (8.59/4.32)
|   |   |   |   |   |   |   |   feature9 > 0.6333: classE (11.21/5.9)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature9 <= 0.4: classD (8.09/2.89)
|   |   |   |   |   |   feature9 > 0.4
|   |   |   |   |   |   |   feature9 <= 0.6: classG (14.24/8.39)
|   |   |   |   |   |   |   feature9 > 0.6: classE (7.11/3.1)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.4667: classE (4.31/1.79)
|   |   |   |   |   |   feature9 > 0.4667: classF (4.95/2.62)
|   |   |   |   feature5 = classF
|   |   |   |   |   feature6 <= 0.8333: classF (6.21/3.81)
|   |   |   |   |   feature6 > 0.8333: classE (4.96/0.9)
|   |   |   |   feature5 = classG: classE (6.55/3.56)
|   |   |   feature2 = classF
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.3: classG (2.56/0.58)
|   |   |   |   |   feature6 > 0.3
|   |   |   |   |   |   feature5 = classA: classE (0.09/0.03)
|   |   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   |   feature5 = classC: classE (0.0)
|   |   |   |   |   |   feature5 = classD: classD (6.28/2.32)
|   |   |   |   |   |   feature5 = classE: classE (8.48/3.24)
|   |   |   |   |   |   feature5 = classF: classE (18.89/8.85)
|   |   |   |   |   |   feature5 = classG: classE (0.0)
|   |   |   |   feature6 > 0.5: classF (17.12/8.45)
|   |   |   feature2 = classG
|   |   |   |   prevPredS = classA: classE (2.88/2.12)
|   |   |   |   prevPredS = classB: classE (0.62/0.26)
|   |   |   |   prevPredS = classC: classF (0.03/0.01)
|   |   |   |   prevPredS = classD: classD (4.54/1.76)
|   |   |   |   prevPredS = classE: classE (1.47/0.73)
|   |   |   |   prevPredS = classF: classG (19.13/6.97)
|   |   |   |   prevPredS = classG: classG (8.05/3.99)
|   |   feature9 > 0.7333
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.2667: classE (31.83/18.09)
|   |   |   |   |   feature6 > 0.2667
|   |   |   |   |   |   feature6 <= 0.3333: classA (13.06/4.0)
|   |   |   |   |   |   feature6 > 0.3333: classF (11.25/5.96)
|   |   |   |   feature6 > 0.4333: classE (165.28/93.01)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (31.34/11.12)
|   |   |   |   |   feature6 > 0.5: classG (18.83/6.0)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature5 = classA: classF (1.0/0.28)
|   |   |   |   |   feature5 = classB: classE (0.0)
|   |   |   |   |   feature5 = classC: classC (3.6/1.6)
|   |   |   |   |   feature5 = classD
|   |   |   |   |   |   feature6 <= 0.5667: classA (4.66/0.77)
|   |   |   |   |   |   feature6 > 0.5667: classE (9.51/1.64)
|   |   |   |   |   feature5 = classE: classE (53.59/23.82)
|   |   |   |   |   feature5 = classF: classF (1.28/0.35)
|   |   |   |   |   feature5 = classG: classE (0.0)
|   predS = classG
|   |   feature5 = classA
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9
|   |   |   |   |   feature9 <= 0.7
|   |   |   |   |   |   feature9 <= 0.6667
|   |   |   |   |   |   |   feature6 <= 0.5333: classF (2.67/1.41)
|   |   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classA (5.67/1.41)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classG (4.62/2.34)
|   |   |   |   |   |   feature9 > 0.6667: classE (10.91/3.54)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature9 <= 0.8: classF (5.55/1.83)
|   |   |   |   |   |   feature9 > 0.8: classA (13.05/4.23)
|   |   |   |   feature9 > 0.9: classE (24.0/7.83)
|   |   |   prevPredS = classB: classE (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.05/0.01)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.3: classA (4.43/1.94)
|   |   |   |   feature6 > 0.3: classE (16.41/6.48)
|   |   |   prevPredS = classF: classG (8.95/3.01)
|   |   |   prevPredS = classG
|   |   |   |   feature8 <= 0.6333
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature7 <= 0.8: classE (4.84/0.88)
|   |   |   |   |   |   feature7 > 0.8: classA (5.32/0.89)
|   |   |   |   |   feature6 > 0.4: classG (10.25/5.4)
|   |   |   |   feature8 > 0.6333: classA (11.26/4.82)
|   |   feature5 = classB: classF (0.0)
|   |   feature5 = classC: classA (5.16/2.68)
|   |   feature5 = classD: classG (6.78/3.81)
|   |   feature5 = classE
|   |   |   feature8 <= 0.8333: classE (63.9/36.52)
|   |   |   feature8 > 0.8333
|   |   |   |   feature8 <= 0.8667
|   |   |   |   |   feature6 <= 0.5
|   |   |   |   |   |   feature6 <= 0.4333: classG (15.91/8.72)
|   |   |   |   |   |   feature6 > 0.4333
|   |   |   |   |   |   |   feature6 <= 0.4667: classE (3.32/0.82)
|   |   |   |   |   |   |   feature6 > 0.4667: classF (9.85/3.55)
|   |   |   |   |   feature6 > 0.5
|   |   |   |   |   |   prevPredS = classA
|   |   |   |   |   |   |   feature9 <= 0.8333
|   |   |   |   |   |   |   |   feature6 <= 0.5667: classE (5.4/1.12)
|   |   |   |   |   |   |   |   feature6 > 0.5667: classF (3.64/1.62)
|   |   |   |   |   |   |   feature9 > 0.8333: classA (9.81/1.94)
|   |   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   |   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   |   |   |   prevPredS = classE: classA (10.74/2.87)
|   |   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   |   feature6 <= 0.5333: classA (9.44/1.56)
|   |   |   |   |   |   |   feature6 > 0.5333: classG (3.13/0.52)
|   |   |   |   |   |   prevPredS = classG: classA (2.99/1.5)
|   |   |   |   feature8 > 0.8667: classE (19.62/10.33)
|   |   feature5 = classF
|   |   |   feature2 = classA
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature6 <= 0.4667: classG (2.79/1.13)
|   |   |   |   |   feature6 > 0.4667: classF (3.07/1.52)
|   |   |   |   feature6 > 0.5667: classA (10.72/3.22)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (0.0)
|   |   |   feature2 = classD: classG (0.02/0.01)
|   |   |   feature2 = classE: classE (3.65/1.62)
|   |   |   feature2 = classF: classF (0.83/0.33)
|   |   |   feature2 = classG: classF (8.55/3.96)
|   |   feature5 = classG
|   |   |   prevPredS = classA: classE (4.27/2.65)
|   |   |   prevPredS = classB: classG (0.02/0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.61/0.14)
|   |   |   prevPredS = classE: classG (3.77/1.95)
|   |   |   prevPredS = classF: classG (2.16/0.49)
|   |   |   prevPredS = classG
|   |   |   |   feature9 <= 0.5333: classD (9.31/3.99)
|   |   |   |   feature9 > 0.5333: classG (7.84/1.79)
feature3 = classF
|   feature5 = classA
|   |   predS = classA
|   |   |   feature6 <= 0.6
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature7 <= 0.92: classA (142.82/72.64)
|   |   |   |   |   feature7 > 0.92: classF (4.81/0.23)
|   |   |   |   feature6 > 0.5333: classA (37.64/20.03)
|   |   |   feature6 > 0.6
|   |   |   |   feature6 <= 0.7
|   |   |   |   |   feature9 <= 0.8: classE (16.15/5.1)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature6 <= 0.6667: classA (20.13/8.69)
|   |   |   |   |   |   feature6 > 0.6667
|   |   |   |   |   |   |   feature9 <= 0.9667: classA (5.64/3.25)
|   |   |   |   |   |   |   feature9 > 0.9667: classC (26.25/13.79)
|   |   |   |   feature6 > 0.7
|   |   |   |   |   feature6 <= 0.8333
|   |   |   |   |   |   feature6 <= 0.7667: classF (15.36/5.14)
|   |   |   |   |   |   feature6 > 0.7667
|   |   |   |   |   |   |   feature7 <= 0.96: classA (4.45/0.77)
|   |   |   |   |   |   |   feature7 > 0.96: classF (16.58/3.22)
|   |   |   |   |   feature6 > 0.8333
|   |   |   |   |   |   feature6 <= 0.8667: classE (3.89/1.23)
|   |   |   |   |   |   feature6 > 0.8667: classA (6.41/1.11)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (4.43/2.19)
|   |   |   feature9 > 0.9: classA (50.74/21.12)
|   |   predS = classC
|   |   |   feature6 <= 0.2667: classC (31.28/18.56)
|   |   |   feature6 > 0.2667
|   |   |   |   feature6 <= 0.7333
|   |   |   |   |   feature6 <= 0.3667: classE (8.55/4.9)
|   |   |   |   |   feature6 > 0.3667
|   |   |   |   |   |   feature6 <= 0.4333: classC (19.59/11.32)
|   |   |   |   |   |   feature6 > 0.4333: classD (12.95/7.62)
|   |   |   |   feature6 > 0.7333: classB (9.24/4.48)
|   |   predS = classD
|   |   |   prevPredS = classA
|   |   |   |   feature8 <= 0.5667: classD (75.36/45.72)
|   |   |   |   feature8 > 0.5667: classF (18.93/9.39)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classF (10.2/6.71)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4333: classD (2.48/0.97)
|   |   |   |   |   feature6 > 0.4333: classF (17.84/8.44)
|   |   |   |   feature6 > 0.5
|   |   |   |   |   feature9 <= 0.4667: classD (11.61/2.24)
|   |   |   |   |   feature9 > 0.4667: classG (4.55/2.16)
|   |   |   prevPredS = classE: classG (5.8/2.98)
|   |   |   prevPredS = classF: classF (2.61/1.31)
|   |   |   prevPredS = classG
|   |   |   |   feature6 <= 0.4667: classG (6.83/3.45)
|   |   |   |   feature6 > 0.4667: classE (5.27/1.96)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (55.13/31.66)
|   |   |   feature6 > 0.3333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.5333: classC (123.95/84.78)
|   |   |   |   |   feature6 > 0.5333: classD (16.39/8.02)
|   |   |   |   prevPredS = classB: classC (19.05/14.18)
|   |   |   |   prevPredS = classC: classC (0.04/0.03)
|   |   |   |   prevPredS = classD: classD (5.4/4.02)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classE (3.7/2.01)
|   |   |   |   |   |   feature6 > 0.4333: classC (94.18/67.01)
|   |   |   |   |   feature6 > 0.4667: classF (8.43/4.72)
|   |   |   |   prevPredS = classF
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classF (4.11/0.75)
|   |   |   |   |   |   feature6 > 0.4333: classC (48.17/33.06)
|   |   |   |   |   feature6 > 0.4667: classF (6.86/1.67)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature6 <= 0.5333: classC (105.1/76.01)
|   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   feature6 <= 0.6: classF (2.78)
|   |   |   |   |   |   feature6 > 0.6: classA (5.93/3.43)
|   |   predS = classF
|   |   |   feature6 <= 0.2667: classG (5.58/0.97)
|   |   |   feature6 > 0.2667: classF (124.55/61.15)
|   |   predS = classG
|   |   |   feature8 <= 0.5667
|   |   |   |   feature8 <= 0.3333
|   |   |   |   |   feature9 <= 0.8333: classF (8.16/5.88)
|   |   |   |   |   feature9 > 0.8333: classD (13.84/5.47)
|   |   |   |   feature8 > 0.3333
|   |   |   |   |   prevPredS = classA: classE (10.44/4.63)
|   |   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   |   |   prevPredS = classD: classG (0.01/0.0)
|   |   |   |   |   prevPredS = classE: classA (1.02/0.75)
|   |   |   |   |   prevPredS = classF: classG (0.93/0.3)
|   |   |   |   |   prevPredS = classG: classG (3.67/1.91)
|   |   |   feature8 > 0.5667
|   |   |   |   feature8 <= 0.8333: classF (11.18/4.23)
|   |   |   |   feature8 > 0.8333
|   |   |   |   |   feature6 <= 0.5: classF (7.95/4.28)
|   |   |   |   |   feature6 > 0.5: classA (17.1/6.64)
|   feature5 = classB
|   |   predS = classA
|   |   |   feature6 <= 0.6667: classB (3.98/2.71)
|   |   |   feature6 > 0.6667: classC (2.44/1.55)
|   |   predS = classB: classB (28.87/7.76)
|   |   predS = classC: classC (5.3/3.73)
|   |   predS = classD: classF (6.78/3.75)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (2.87/1.34)
|   |   |   feature6 > 0.3333: classC (27.42/19.81)
|   |   predS = classF: classF (5.14/3.87)
|   |   predS = classG: classG (1.9/1.16)
|   feature5 = classC
|   |   predS = classA: classC (8.68/6.76)
|   |   predS = classB
|   |   |   feature6 <= 0.8333: classC (22.14/5.03)
|   |   |   feature6 > 0.8333: classA (5.73/2.46)
|   |   predS = classC: classC (19.59/8.44)
|   |   predS = classD: classF (13.35/7.87)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (4.94/2.32)
|   |   |   feature6 > 0.3333
|   |   |   |   feature6 <= 0.6: classC (46.05/31.42)
|   |   |   |   feature6 > 0.6: classA (4.55/1.07)
|   |   predS = classF: classF (15.89/9.31)
|   |   predS = classG: classA (4.6/3.23)
|   feature5 = classD
|   |   prevPredS = classA: classC (13.81/10.48)
|   |   prevPredS = classB: classA (6.55/4.02)
|   |   prevPredS = classC: classE (4.56/3.18)
|   |   prevPredS = classD
|   |   |   feature7 <= 0.6: classD (14.61/8.21)
|   |   |   feature7 > 0.6: classC (16.33/10.96)
|   |   prevPredS = classE: classD (33.23/22.51)
|   |   prevPredS = classF: classE (3.87/2.85)
|   |   prevPredS = classG: classG (10.2/6.82)
|   feature5 = classE
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature6 <= 0.6
|   |   |   |   |   feature6 <= 0.5667
|   |   |   |   |   |   feature6 <= 0.5333: classE (8.83/6.13)
|   |   |   |   |   |   feature6 > 0.5333: classB (5.91/2.63)
|   |   |   |   |   feature6 > 0.5667: classA (6.17/3.22)
|   |   |   |   feature6 > 0.6: classD (5.56/2.28)
|   |   |   feature6 > 0.6667
|   |   |   |   feature6 <= 0.7: classC (18.96/11.16)
|   |   |   |   feature6 > 0.7: classD (2.8/1.43)
|   |   predS = classB: classA (31.69/14.36)
|   |   predS = classC
|   |   |   feature6 <= 0.7333: classC (44.8/31.32)
|   |   |   feature6 > 0.7333: classB (5.2/2.45)
|   |   predS = classD
|   |   |   prevPredS = classA: classC (3.13/1.98)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC
|   |   |   |   feature6 <= 0.5333: classF (2.52/1.37)
|   |   |   |   feature6 > 0.5333: classC (3.51/1.77)
|   |   |   prevPredS = classD: classD (48.98/26.08)
|   |   |   prevPredS = classE: classE (55.46/28.71)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.4333: classD (6.88/1.58)
|   |   |   |   feature6 > 0.4333: classE (12.58/8.02)
|   |   |   prevPredS = classG: classF (3.05/1.43)
|   |   predS = classE
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.9333
|   |   |   |   |   feature9 <= 0.6: classC (14.59/8.87)
|   |   |   |   |   feature9 > 0.6: classE (7.1/4.74)
|   |   |   |   feature9 > 0.9333: classD (61.32/34.62)
|   |   |   prevPredS = classB: classE (4.02/2.61)
|   |   |   prevPredS = classC: classC (14.16/8.16)
|   |   |   prevPredS = classD: classD (40.52/23.62)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4667
|   |   |   |   |   feature6 <= 0.4333
|   |   |   |   |   |   feature7 <= 0.56: classD (4.18/1.92)
|   |   |   |   |   |   feature7 > 0.56: classE (31.49/14.1)
|   |   |   |   |   feature6 > 0.4333: classC (133.11/98.0)
|   |   |   |   feature6 > 0.4667
|   |   |   |   |   feature6 <= 0.6667: classE (19.14/10.06)
|   |   |   |   |   feature6 > 0.6667: classD (18.28/9.82)
|   |   |   prevPredS = classF: classE (21.69/13.79)
|   |   |   prevPredS = classG: classE (14.56/11.31)
|   |   predS = classF
|   |   |   feature2 = classA: classF (0.68/0.32)
|   |   |   feature2 = classB: classE (0.0)
|   |   |   feature2 = classC
|   |   |   |   feature6 <= 0.5: classE (5.9/4.29)
|   |   |   |   feature6 > 0.5: classA (7.47/2.26)
|   |   |   feature2 = classD: classF (0.02/0.01)
|   |   |   feature2 = classE: classF (4.07/2.39)
|   |   |   feature2 = classF
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classF (8.94/5.43)
|   |   |   |   |   |   feature6 > 0.4333: classE (15.14/7.55)
|   |   |   |   |   feature6 > 0.4667: classD (8.18/5.03)
|   |   |   |   feature6 > 0.5333: classE (24.02/10.05)
|   |   |   feature2 = classG: classG (0.22/0.13)
|   |   predS = classG
|   |   |   prevPredS = classA: classE (11.62/6.14)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   prevPredS = classE: classA (7.62/4.81)
|   |   |   prevPredS = classF: classF (4.1/2.03)
|   |   |   prevPredS = classG: classG (2.28/1.32)
|   feature5 = classF
|   |   predS = classA
|   |   |   feature6 <= 0.6667
|   |   |   |   feature2 = classA: classF (10.64/3.66)
|   |   |   |   feature2 = classB: classA (0.0)
|   |   |   |   feature2 = classC: classC (0.35/0.16)
|   |   |   |   feature2 = classD: classA (0.0)
|   |   |   |   feature2 = classE: classA (0.49/0.21)
|   |   |   |   feature2 = classF
|   |   |   |   |   prevPredS = classA: classA (13.23/6.16)
|   |   |   |   |   prevPredS = classB: classA (0.0)
|   |   |   |   |   prevPredS = classC: classA (0.84/0.31)
|   |   |   |   |   prevPredS = classD: classA (0.01/0.0)
|   |   |   |   |   prevPredS = classE: classA (4.33/1.82)
|   |   |   |   |   prevPredS = classF
|   |   |   |   |   |   feature6 <= 0.4: classA (8.8/3.25)
|   |   |   |   |   |   feature6 > 0.4: classF (10.45/5.13)
|   |   |   |   |   prevPredS = classG
|   |   |   |   |   |   feature9 <= 0.4333: classA (10.41/3.78)
|   |   |   |   |   |   feature9 > 0.4333: classF (5.98/2.86)
|   |   |   |   feature2 = classG: classA (0.0)
|   |   |   feature6 > 0.6667
|   |   |   |   feature9 <= 0.8667: classA (27.07/10.66)
|   |   |   |   feature9 > 0.8667
|   |   |   |   |   feature7 <= 0.56: classA (25.62/11.73)
|   |   |   |   |   feature7 > 0.56: classF (28.69/11.39)
|   |   predS = classB
|   |   |   feature9 <= 0.9: classB (3.85/1.83)
|   |   |   feature9 > 0.9: classA (40.64/17.12)
|   |   predS = classC
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.5: classF (6.07/3.66)
|   |   |   |   feature9 > 0.5: classC (8.49/5.74)
|   |   |   prevPredS = classB: classC (0.16/0.08)
|   |   |   prevPredS = classC: classF (4.09/2.56)
|   |   |   prevPredS = classD
|   |   |   |   feature6 <= 0.2667: classB (31.37/15.58)
|   |   |   |   feature6 > 0.2667
|   |   |   |   |   feature6 <= 0.7333: classE (13.49/8.52)
|   |   |   |   |   feature6 > 0.7333: classB (2.92/1.01)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.6333: classC (11.93/7.92)
|   |   |   |   feature6 > 0.6333: classF (9.62/1.27)
|   |   |   prevPredS = classF: classF (6.28/3.91)
|   |   |   prevPredS = classG: classF (0.0)
|   |   predS = classD
|   |   |   feature6 <= 0.4: classA (18.67/10.15)
|   |   |   feature6 > 0.4: classF (90.39/42.77)
|   |   predS = classE
|   |   |   feature6 <= 0.3333: classG (35.07/16.4)
|   |   |   feature6 > 0.3333
|   |   |   |   prevPredS = classA: classC (26.23/16.83)
|   |   |   |   prevPredS = classB: classE (10.13/7.66)
|   |   |   |   prevPredS = classC: classE (0.02/0.02)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature8 <= 0.5333
|   |   |   |   |   |   feature6 <= 0.5333: classC (35.54/24.72)
|   |   |   |   |   |   feature6 > 0.5333: classD (10.57/2.95)
|   |   |   |   |   feature8 > 0.5333: classF (17.92/11.95)
|   |   |   |   prevPredS = classE: classF (152.87/110.63)
|   |   |   |   prevPredS = classF: classF (124.81/84.04)
|   |   |   |   prevPredS = classG: classC (6.3/4.82)
|   |   predS = classF
|   |   |   prevPredS = classA
|   |   |   |   feature6 <= 0.4667: classE (27.2/16.28)
|   |   |   |   feature6 > 0.4667: classF (8.77/3.82)
|   |   |   prevPredS = classB: classE (1.08/0.59)
|   |   |   prevPredS = classC: classF (0.03/0.0)
|   |   |   prevPredS = classD: classF (3.35/0.73)
|   |   |   prevPredS = classE: classF (4.2/1.52)
|   |   |   prevPredS = classF
|   |   |   |   feature6 <= 0.5667
|   |   |   |   |   feature9 <= 0.8: classF (34.45/8.25)
|   |   |   |   |   feature9 > 0.8
|   |   |   |   |   |   feature9 <= 0.8667
|   |   |   |   |   |   |   feature7 <= 0.84: classA (14.11/4.79)
|   |   |   |   |   |   |   feature7 > 0.84: classF (4.07/0.97)
|   |   |   |   |   |   feature9 > 0.8667: classF (9.58/2.29)
|   |   |   |   feature6 > 0.5667: classF (55.65/2.53)
|   |   |   prevPredS = classG: classF (10.38/1.92)
|   |   predS = classG
|   |   |   prevPredS = classA
|   |   |   |   feature9 <= 0.7333: classE (6.32/3.4)
|   |   |   |   feature9 > 0.7333: classA (6.41/3.11)
|   |   |   prevPredS = classB: classF (0.0)
|   |   |   prevPredS = classC: classG (0.0/0.0)
|   |   |   prevPredS = classD: classG (0.02/0.0)
|   |   |   prevPredS = classE: classA (3.72/2.73)
|   |   |   prevPredS = classF
|   |   |   |   feature7 <= 0.76: classA (14.98/7.01)
|   |   |   |   feature7 > 0.76: classF (8.41/1.58)
|   |   |   prevPredS = classG: classF (8.24/3.57)
|   feature5 = classG
|   |   predS = classA: classA (3.16/2.45)
|   |   predS = classB: classA (1.79/0.85)
|   |   predS = classC: classC (2.54/1.8)
|   |   predS = classD: classG (4.2/2.12)
|   |   predS = classE
|   |   |   feature6 <= 0.4333: classD (6.59/2.46)
|   |   |   feature6 > 0.4333: classC (13.2/9.53)
|   |   predS = classF
|   |   |   feature9 <= 0.6667: classG (3.36/1.14)
|   |   |   feature9 > 0.6667: classF (2.96/1.21)
|   |   predS = classG: classG (3.0/0.92)
feature3 = classG
|   predS = classA
|   |   feature6 <= 0.6667
|   |   |   prevPredS = classA
|   |   |   |   feature7 <= 0.92
|   |   |   |   |   feature5 = classA
|   |   |   |   |   |   feature9 <= 0.5667
|   |   |   |   |   |   |   feature6 <= 0.4: classA (3.04/0.86)
|   |   |   |   |   |   |   feature6 > 0.4: classG (14.41/7.65)
|   |   |   |   |   |   feature9 > 0.5667: classA (25.99/10.5)
|   |   |   |   |   feature5 = classB: classA (0.92/0.38)
|   |   |   |   |   feature5 = classC: classA (0.0)
|   |   |   |   |   feature5 = classD: classA (0.0/0.0)
|   |   |   |   |   feature5 = classE: classA (1.58/0.64)
|   |   |   |   |   feature5 = classF: classF (2.77/0.81)
|   |   |   |   |   feature5 = classG
|   |   |   |   |   |   feature9 <= 0.5: classA (16.04/5.91)
|   |   |   |   |   |   feature9 > 0.5: classG (5.81/3.09)
|   |   |   |   feature7 > 0.92: classG (32.51/13.53)
|   |   |   prevPredS = classB: classB (0.24/0.09)
|   |   |   prevPredS = classC: classA (3.92/2.03)
|   |   |   prevPredS = classD: classD (0.72/0.37)
|   |   |   prevPredS = classE
|   |   |   |   feature6 <= 0.4333: classE (5.18/3.07)
|   |   |   |   feature6 > 0.4333: classA (6.06/3.04)
|   |   |   prevPredS = classF
|   |   |   |   feature9 <= 0.3667: classC (5.19/2.32)
|   |   |   |   feature9 > 0.3667: classA (15.55/5.61)
|   |   |   prevPredS = classG
|   |   |   |   feature7 <= 0.72
|   |   |   |   |   feature6 <= 0.4333: classA (5.54/2.0)
|   |   |   |   |   feature6 > 0.4333: classG (6.79/3.82)
|   |   |   |   feature7 > 0.72: classG (21.67/9.64)
|   |   feature6 > 0.6667
|   |   |   feature6 <= 0.7
|   |   |   |   feature9 <= 0.9667: classA (25.68/14.06)
|   |   |   |   feature9 > 0.9667: classC (55.25/29.29)
|   |   |   feature6 > 0.7
|   |   |   |   feature6 <= 0.7333: classG (16.2/5.57)
|   |   |   |   feature6 > 0.7333: classA (27.89/12.35)
|   predS = classB: classA (143.14/74.49)
|   predS = classC
|   |   feature6 <= 0.6
|   |   |   feature6 <= 0.2667: classC (73.61/47.01)
|   |   |   feature6 > 0.2667: classE (85.8/57.02)
|   |   feature6 > 0.6
|   |   |   feature6 <= 0.7: classD (14.68/9.46)
|   |   |   feature6 > 0.7: classB (24.63/14.71)
|   predS = classD
|   |   feature8 <= 0.9333
|   |   |   feature2 = classA
|   |   |   |   prevPredS = classA: classD (36.55/22.3)
|   |   |   |   prevPredS = classB: classD (0.0)
|   |   |   |   prevPredS = classC: classF (3.56/2.34)
|   |   |   |   prevPredS = classD
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.4667: classF (13.87/6.83)
|   |   |   |   |   |   feature6 > 0.4667: classG (2.88/1.41)
|   |   |   |   |   feature6 > 0.6: classD (10.18/1.82)
|   |   |   |   prevPredS = classE: classG (1.69/0.64)
|   |   |   |   prevPredS = classF: classF (1.15/0.57)
|   |   |   |   prevPredS = classG: classG (1.56/0.86)
|   |   |   feature2 = classB: classF (0.0)
|   |   |   feature2 = classC: classF (2.29/1.5)
|   |   |   feature2 = classD
|   |   |   |   feature6 <= 0.5
|   |   |   |   |   feature6 <= 0.4333: classD (8.01/4.17)
|   |   |   |   |   feature6 > 0.4333: classF (42.97/23.98)
|   |   |   |   feature6 > 0.5: classD (16.42/9.48)
|   |   |   feature2 = classE: classF (36.84/24.09)
|   |   |   feature2 = classF: classF (2.96/1.46)
|   |   |   feature2 = classG
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature9 <= 0.5333: classD (12.54/3.33)
|   |   |   |   |   feature9 > 0.5333: classG (3.99/0.85)
|   |   |   |   feature6 > 0.4333: classG (35.65/18.13)
|   |   feature8 > 0.9333: classF (104.33/68.04)
|   predS = classE
|   |   feature5 = classA
|   |   |   feature6 <= 0.4333
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.7
|   |   |   |   |   |   feature7 <= 0.64: classA (8.25/3.94)
|   |   |   |   |   |   feature7 > 0.64: classG (45.56/10.74)
|   |   |   |   |   feature9 > 0.7
|   |   |   |   |   |   feature6 <= 0.3333: classE (16.82/9.67)
|   |   |   |   |   |   feature6 > 0.3333: classA (9.97/3.67)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   prevPredS = classD: classD (0.75/0.35)
|   |   |   |   prevPredS = classE: classE (4.34/2.77)
|   |   |   |   prevPredS = classF: classE (18.87/9.66)
|   |   |   |   prevPredS = classG: classE (5.7/2.64)
|   |   |   feature6 > 0.4333
|   |   |   |   feature8 <= 0.8
|   |   |   |   |   feature6 <= 0.4667: classC (68.06/47.38)
|   |   |   |   |   feature6 > 0.4667: classE (13.66/4.73)
|   |   |   |   feature8 > 0.8
|   |   |   |   |   feature7 <= 0.52: classA (254.96/173.82)
|   |   |   |   |   feature7 > 0.52: classC (96.47/71.93)
|   |   feature5 = classB: classC (3.78/3.01)
|   |   feature5 = classC
|   |   |   feature6 <= 0.5667: classC (11.55/8.31)
|   |   |   feature6 > 0.5667: classA (2.61/0.54)
|   |   feature5 = classD
|   |   |   feature6 <= 0.3333: classG (3.46/1.62)
|   |   |   feature6 > 0.3333: classD (41.98/28.86)
|   |   feature5 = classE
|   |   |   feature6 <= 0.3: classE (44.48/25.12)
|   |   |   feature6 > 0.3
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature9 <= 0.9333
|   |   |   |   |   |   feature6 <= 0.5: classC (24.77/16.21)
|   |   |   |   |   |   feature6 > 0.5: classE (2.82/1.27)
|   |   |   |   |   feature9 > 0.9333: classD (74.79/47.79)
|   |   |   |   prevPredS = classB: classE (6.74/4.94)
|   |   |   |   prevPredS = classC: classE (0.02/0.01)
|   |   |   |   prevPredS = classD: classD (21.11/14.26)
|   |   |   |   prevPredS = classE
|   |   |   |   |   feature6 <= 0.4667
|   |   |   |   |   |   feature6 <= 0.4333: classD (6.59/3.57)
|   |   |   |   |   |   feature6 > 0.4333: classC (132.7/95.54)
|   |   |   |   |   feature6 > 0.4667: classD (26.8/15.11)
|   |   |   |   prevPredS = classF: classF (7.04/5.4)
|   |   |   |   prevPredS = classG: classC (12.15/9.44)
|   |   feature5 = classF
|   |   |   feature6 <= 0.5333: classF (13.14/9.83)
|   |   |   feature6 > 0.5333: classE (2.61/0.95)
|   |   feature5 = classG
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333: classG (24.39/12.57)
|   |   |   |   feature6 > 0.4333: classC (157.59/112.27)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333: classG (35.97/7.13)
|   |   |   |   feature6 > 0.5333: classA (6.4/2.3)
|   predS = classF
|   |   prevPredS = classA
|   |   |   feature6 <= 0.4667
|   |   |   |   feature6 <= 0.4333
|   |   |   |   |   feature6 <= 0.4
|   |   |   |   |   |   feature6 <= 0.2667: classG (6.89/1.49)
|   |   |   |   |   |   feature6 > 0.2667: classA (11.17/6.12)
|   |   |   |   |   feature6 > 0.4: classG (5.37/1.16)
|   |   |   |   feature6 > 0.4333: classE (63.27/37.3)
|   |   |   feature6 > 0.4667
|   |   |   |   feature6 <= 0.5333
|   |   |   |   |   feature6 <= 0.5: classD (14.6/6.09)
|   |   |   |   |   feature6 > 0.5: classG (11.32/5.92)
|   |   |   |   feature6 > 0.5333
|   |   |   |   |   feature6 <= 0.5667: classE (25.84/14.88)
|   |   |   |   |   feature6 > 0.5667: classF (3.0/0.15)
|   |   prevPredS = classB: classE (3.6/2.34)
|   |   prevPredS = classC: classA (2.55/1.67)
|   |   prevPredS = classD
|   |   |   feature2 = classA: classA (0.88/0.33)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classG (0.0)
|   |   |   feature2 = classD: classD (0.31/0.15)
|   |   |   feature2 = classE: classG (0.0)
|   |   |   feature2 = classF: classD (4.95/2.46)
|   |   |   feature2 = classG: classG (5.1/2.35)
|   |   prevPredS = classE
|   |   |   feature9 <= 0.6: classF (9.23/4.82)
|   |   |   feature9 > 0.6: classE (7.92/3.62)
|   |   prevPredS = classF
|   |   |   feature7 <= 0.68: classF (11.76/6.13)
|   |   |   feature7 > 0.68: classG (21.37/8.78)
|   |   prevPredS = classG
|   |   |   feature8 <= 0.3333: classF (11.58/3.08)
|   |   |   feature8 > 0.3333: classG (31.07/14.53)
|   predS = classG
|   |   feature6 <= 0.7333
|   |   |   feature2 = classA
|   |   |   |   prevPredS = classA
|   |   |   |   |   feature6 <= 0.6
|   |   |   |   |   |   feature6 <= 0.5333
|   |   |   |   |   |   |   feature7 <= 0.88
|   |   |   |   |   |   |   |   feature9 <= 0.5333: classA (5.43/2.16)
|   |   |   |   |   |   |   |   feature9 > 0.5333: classG (10.15/3.99)
|   |   |   |   |   |   |   feature7 > 0.88: classA (10.64/4.0)
|   |   |   |   |   |   feature6 > 0.5333
|   |   |   |   |   |   |   feature6 <= 0.5667: classE (4.77/1.43)
|   |   |   |   |   |   |   feature6 > 0.5667: classA (4.12/1.18)
|   |   |   |   |   feature6 > 0.6: classG (10.0/3.73)
|   |   |   |   prevPredS = classB: classG (0.0)
|   |   |   |   prevPredS = classC: classG (0.0)
|   |   |   |   prevPredS = classD: classG (0.02/0.01)
|   |   |   |   prevPredS = classE: classA (4.46/2.96)
|   |   |   |   prevPredS = classF: classG (3.62/1.08)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature8 <= 0.9667: classG (6.63/3.33)
|   |   |   |   |   feature8 > 0.9667
|   |   |   |   |   |   feature9 <= 0.3667: classG (3.98/1.38)
|   |   |   |   |   |   feature9 > 0.3667: classA (7.78/3.41)
|   |   |   feature2 = classB: classG (0.0)
|   |   |   feature2 = classC: classC (0.03/0.01)
|   |   |   feature2 = classD: classD (6.53/3.1)
|   |   |   feature2 = classE
|   |   |   |   prevPredS = classA: classE (4.84/1.73)
|   |   |   |   prevPredS = classB: classE (0.0)
|   |   |   |   prevPredS = classC: classE (0.0)
|   |   |   |   prevPredS = classD: classG (0.0/0.0)
|   |   |   |   prevPredS = classE: classA (3.24/1.44)
|   |   |   |   prevPredS = classF: classF (1.58/0.43)
|   |   |   |   prevPredS = classG: classG (0.51/0.11)
|   |   |   feature2 = classF: classF (2.28/1.34)
|   |   |   feature2 = classG
|   |   |   |   prevPredS = classA: classE (8.48/5.02)
|   |   |   |   prevPredS = classB: classG (0.01/0.0)
|   |   |   |   prevPredS = classC: classG (0.04/0.01)
|   |   |   |   prevPredS = classD: classG (0.24/0.05)
|   |   |   |   prevPredS = classE: classG (5.0/3.41)
|   |   |   |   prevPredS = classF: classG (4.32/0.93)
|   |   |   |   prevPredS = classG
|   |   |   |   |   feature8 <= 0.9333: classG (15.61/3.63)
|   |   |   |   |   feature8 > 0.9333
|   |   |   |   |   |   feature9 <= 0.6
|   |   |   |   |   |   |   feature9 <= 0.5333: classG (5.42/1.17)
|   |   |   |   |   |   |   feature9 > 0.5333: classA (27.72/9.22)
|   |   |   |   |   |   feature9 > 0.6: classG (7.36/2.26)
|   |   feature6 > 0.7333: classG (113.15/27.12)

Number of Leaves  : \t1246

Size of the tree : \t1921


Weight: 0.77

Number of performed Iterations: 9


Time taken to build model: 5.43 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances       24727               98.3142 %
Incorrectly Classified Instances       424                1.6858 %
Kappa statistic                          0.9803
Mean absolute error                      0.0052
Root mean squared error                  0.0654
Relative absolute error                  2.1352 %
Root relative squared error             18.6826 %
Total Number of Instances            25151     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0,971    0,005    0,972      0,971    0,971      0,967    0,996     0,989     classA
                 0,992    0,001    0,995      0,992    0,993      0,992    0,999     0,998     classB
                 0,993    0,001    0,992      0,993    0,992      0,991    1,000     0,998     classC
                 0,962    0,003    0,981      0,962    0,972      0,967    0,997     0,991     classD
                 0,978    0,005    0,969      0,978    0,974      0,969    0,998     0,989     classE
                 0,997    0,002    0,985      0,997    0,991      0,990    1,000     0,998     classF
                 0,989    0,002    0,987      0,989    0,988      0,986    1,000     0,997     classG
Weighted Avg.    0,983    0,003    0,983      0,983    0,983      0,980    0,998     0,994     

=== Confusion Matrix ===

    a    b    c    d    e    f    g   <-- classified as
 3488   12   10   18   30   17   18 |    a = classA
   22 3564    2    0    5    0    0 |    b = classB
   10    2 3568    8    4    0    1 |    c = classC
   31    1   10 3458   61   15   17 |    d = classD
   16    3    6   34 3514   11    9 |    e = classE
    9    0    0    0    1 3582    1 |    f = classF
   12    0    2    6   10   10 3553 |    g = classG

`;
