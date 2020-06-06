export const testResultStringRandomForest: string = `
Options: -num-slots 0 -I 3 -M 20 -depth 0 -print -attribute-importance 

=== Classifier model (full training set) ===

RandomForest

Bagging with 3 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 20.0 -V 0.001 -S 1 -do-not-check-capabilitiesAll the base classifiers: 


RandomTree
==========

featureD < 1.38
|   featureK < 0.61
|   |   featureJ < 0.21
|   |   |   accumulatedTravelDistance < 4.99
|   |   |   |   featureO < 0.09 : stationary (431.61/0)
|   |   |   |   featureO >= 0.09
|   |   |   |   |   featureD < 0.04
|   |   |   |   |   |   featureP < 0.14 : stationary (12.74/1.78)
|   |   |   |   |   |   featureP >= 0.14 : stationary (41.22/0)
|   |   |   |   |   featureD >= 0.04 : train (3.96/1)
|   |   |   accumulatedTravelDistance >= 4.99
|   |   |   |   trajectorySimilarityTrain < 920.02 : train (27.28/18.02)
|   |   |   |   trajectorySimilarityTrain >= 920.02
|   |   |   |   |   featureM < 0.08
|   |   |   |   |   |   featureL < 0.07 : stationary (26.12/0)
|   |   |   |   |   |   featureL >= 0.07 : stationary (39/19)
|   |   |   |   |   featureM >= 0.08
|   |   |   |   |   |   featureP < 0.13 : stationary (193.22/0)
|   |   |   |   |   |   featureP >= 0.13
|   |   |   |   |   |   |   featureE < 0.04
|   |   |   |   |   |   |   |   featureI < 0.07
|   |   |   |   |   |   |   |   |   featureT < 0.02 : stationary (1.12/0.37)
|   |   |   |   |   |   |   |   |   featureT >= 0.02 : stationary (46.1/0)
|   |   |   |   |   |   |   |   featureI >= 0.07 : train (0.37/-0)
|   |   |   |   |   |   |   featureE >= 0.04 : train (3.25/1)
|   |   featureJ >= 0.21
|   |   |   featureT < 0.15
|   |   |   |   speed25Quantile < 1.89
|   |   |   |   |   mediumSpeedPointRatio < 0.01
|   |   |   |   |   |   headingVariance < 4.02
|   |   |   |   |   |   |   featureO < 0.55
|   |   |   |   |   |   |   |   featureC < 3.08
|   |   |   |   |   |   |   |   |   featureG < 0.07
|   |   |   |   |   |   |   |   |   |   featureQ < 0.24
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.04 : stationary (4/0)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.08 : train (29.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.08 : train (19.9/1.22)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.24 : stationary (2.22/0.22)
|   |   |   |   |   |   |   |   |   featureG >= 0.07
|   |   |   |   |   |   |   |   |   |   featureL < 0.86
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.49 : train (71.53/0)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.49 : bus (0.11/0)
|   |   |   |   |   |   |   |   |   |   featureL >= 0.86 : train (1.23/0.22)
|   |   |   |   |   |   |   |   featureC >= 3.08 : stationary (8.68/2.67)
|   |   |   |   |   |   |   featureO >= 0.55 : car (3/0)
|   |   |   |   |   |   headingVariance >= 4.02
|   |   |   |   |   |   |   speedVariance < 0.71
|   |   |   |   |   |   |   |   maximumTravelDistance < 2.3
|   |   |   |   |   |   |   |   |   featureN < 0.16
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 756.11 : bus (20.3/2.2)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 756.11 : stationary (35.27/6.97)
|   |   |   |   |   |   |   |   |   featureN >= 0.16 : stationary (16.26/6.09)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 2.3
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 656.26 : train (24.69/11.36)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 656.26 : stationary (31.43/7.15)
|   |   |   |   |   |   |   speedVariance >= 0.71 : bus (19.67/6.59)
|   |   |   |   |   mediumSpeedPointRatio >= 0.01
|   |   |   |   |   |   trajectorySimilarityTrain < 929.14
|   |   |   |   |   |   |   trajectorySimilarityBus < 46.41
|   |   |   |   |   |   |   |   featureC < 0.87 : train (8.1/0.06)
|   |   |   |   |   |   |   |   featureC >= 0.87
|   |   |   |   |   |   |   |   |   speedMin < 0.34
|   |   |   |   |   |   |   |   |   |   speedMax < 7.98 : bus (25.95/10.83)
|   |   |   |   |   |   |   |   |   |   speedMax >= 7.98 : bus (39.44/3.27)
|   |   |   |   |   |   |   |   |   speedMin >= 0.34 : train (5.19/0.08)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 46.41
|   |   |   |   |   |   |   |   headingVariance < 12.59
|   |   |   |   |   |   |   |   |   featureK < 0.51
|   |   |   |   |   |   |   |   |   |   featureD < 0.08 : stationary (0.55/0.21)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.08
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.33 : train (69.33/0)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.33 : train (11.28/0.07)
|   |   |   |   |   |   |   |   |   featureK >= 0.51 : train (5.18/0.83)
|   |   |   |   |   |   |   |   headingVariance >= 12.59 : car (4.37/1.36)
|   |   |   |   |   |   trajectorySimilarityTrain >= 929.14
|   |   |   |   |   |   |   featureU < 0.12
|   |   |   |   |   |   |   |   featureS < 0.12
|   |   |   |   |   |   |   |   |   featureG < 0.03 : train (9.84/0.67)
|   |   |   |   |   |   |   |   |   featureG >= 0.03
|   |   |   |   |   |   |   |   |   |   featureM < 0.03 : bus (1.34/0.5)
|   |   |   |   |   |   |   |   |   |   featureM >= 0.03
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 0.38 : train (10/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.38 : train (31/0)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.08 : train (66.51/0)
|   |   |   |   |   |   |   |   featureS >= 0.12 : train (2.17/1)
|   |   |   |   |   |   |   featureU >= 0.12
|   |   |   |   |   |   |   |   featureM < 0.64
|   |   |   |   |   |   |   |   |   featureD < 0.15 : train (16.01/2.5)
|   |   |   |   |   |   |   |   |   featureD >= 0.15 : car (29.5/1.5)
|   |   |   |   |   |   |   |   featureM >= 0.64
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.64 : train (39.8/9.79)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.64 : car (2.57/0.55)
|   |   |   |   speed25Quantile >= 1.89
|   |   |   |   |   speedMax < 17.27
|   |   |   |   |   |   featureA < 0.06
|   |   |   |   |   |   |   trajectorySimilarityTram < 285.48
|   |   |   |   |   |   |   |   featureQ < 0.14 : train (27.32/13.55)
|   |   |   |   |   |   |   |   featureQ >= 0.14
|   |   |   |   |   |   |   |   |   featureB < 0.01 : train (2.74/0.91)
|   |   |   |   |   |   |   |   |   featureB >= 0.01 : tram (161/0)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 285.48
|   |   |   |   |   |   |   |   featureJ < 1.59
|   |   |   |   |   |   |   |   |   featureE < 0.07 : stationary (1.42/0.39)
|   |   |   |   |   |   |   |   |   featureE >= 0.07 : train (132.64/0)
|   |   |   |   |   |   |   |   featureJ >= 1.59 : bus (1/-0)
|   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   featureJ < 5.42
|   |   |   |   |   |   |   |   featureQ < 0.25 : train (22.25/0)
|   |   |   |   |   |   |   |   featureQ >= 0.25 : bus (21.68/10.12)
|   |   |   |   |   |   |   featureJ >= 5.42 : bike (19/0)
|   |   |   |   |   speedMax >= 17.27
|   |   |   |   |   |   featureC < 3.16
|   |   |   |   |   |   |   featureM < 0.08 : train (4.46/0.46)
|   |   |   |   |   |   |   featureM >= 0.08
|   |   |   |   |   |   |   |   featureD < 0.09 : train (0.77/0.31)
|   |   |   |   |   |   |   |   featureD >= 0.09
|   |   |   |   |   |   |   |   |   featureH < 0.4 : train (162.93/0)
|   |   |   |   |   |   |   |   |   featureH >= 0.4 : train (11.93/0.31)
|   |   |   |   |   |   featureC >= 3.16 : train (13.32/1.7)
|   |   |   featureT >= 0.15
|   |   |   |   stationaryPointRatio < 0.18
|   |   |   |   |   trajectorySimilarityTram < 478.34
|   |   |   |   |   |   featureL < 1
|   |   |   |   |   |   |   featureJ < 0.71 : tram (11.07/1.07)
|   |   |   |   |   |   |   featureJ >= 0.71 : tram (33/0)
|   |   |   |   |   |   featureL >= 1 : tram (22.71/0.71)
|   |   |   |   |   trajectorySimilarityTram >= 478.34 : train (39.04/9.42)
|   |   |   |   stationaryPointRatio >= 0.18
|   |   |   |   |   accumulatedTravelDistance < 89.31
|   |   |   |   |   |   speedMedian < 0.06
|   |   |   |   |   |   |   trajectorySimilarityBus < 42.77
|   |   |   |   |   |   |   |   featureF < 0.06 : car (2.68/1.68)
|   |   |   |   |   |   |   |   featureF >= 0.06
|   |   |   |   |   |   |   |   |   featureE < 0.35
|   |   |   |   |   |   |   |   |   |   featureD < 0.22 : bus (39/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.22 : bus (11.71/1.36)
|   |   |   |   |   |   |   |   |   featureE >= 0.35 : bus (74/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 42.77 : car (21.57/5.57)
|   |   |   |   |   |   speedMedian >= 0.06 : train (4.11/2.04)
|   |   |   |   |   accumulatedTravelDistance >= 89.31
|   |   |   |   |   |   accumulatedTravelDistance < 483.02
|   |   |   |   |   |   |   featureR < 0.22 : car (26.3/0.3)
|   |   |   |   |   |   |   featureR >= 0.22
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.7
|   |   |   |   |   |   |   |   |   featureC < 1.35 : car (5.99/0.99)
|   |   |   |   |   |   |   |   |   featureC >= 1.35
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 257.07 : bus (25.48/0.1)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 257.07 : bus (39.75/17.15)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.7 : car (14.45/0.45)
|   |   |   |   |   |   accumulatedTravelDistance >= 483.02 : train (5.14/0.05)
|   featureK >= 0.61
|   |   speedMax < 12.7
|   |   |   lowSpeedPointRatio < 0.93
|   |   |   |   trajectorySimilarityTram < 510.05
|   |   |   |   |   featureN < 0.52 : train (13.79/1.4)
|   |   |   |   |   featureN >= 0.52
|   |   |   |   |   |   featureQ < 0.68 : tram (36.73/1.69)
|   |   |   |   |   |   featureQ >= 0.68 : car (7.09/4.71)
|   |   |   |   trajectorySimilarityTram >= 510.05
|   |   |   |   |   featureU < 1.35
|   |   |   |   |   |   speedMin < 5.09
|   |   |   |   |   |   |   maximumTravelDistance < 13.99
|   |   |   |   |   |   |   |   featureJ < 1.98
|   |   |   |   |   |   |   |   |   featureO < 0.89
|   |   |   |   |   |   |   |   |   |   featureT < 0.19
|   |   |   |   |   |   |   |   |   |   |   speedVariance < 18.72
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 3.78 : bus (26.79/8.47)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 3.78 : bus (36.83/3.39)
|   |   |   |   |   |   |   |   |   |   |   speedVariance >= 18.72 : train (11.16/2.36)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.19
|   |   |   |   |   |   |   |   |   |   |   featureC < 4.96
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.72
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.63 : bus (4/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.58
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.58 : bus (39.56/1.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.58 : bus (27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.58 : bus (31/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.72 : car (1/-0)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 4.96 : car (7/3)
|   |   |   |   |   |   |   |   |   featureO >= 0.89
|   |   |   |   |   |   |   |   |   |   featureB < 0.06
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.27
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.13 : bike (0.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.44 : bus (13.11/1.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.44 : bus (33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.92 : car (2.22/1.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.68 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 7.31 : car (31.66/1.53)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 7.31 : car (21.45/8.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.54 : bus (20/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.27
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 149.76 : bus (2.14/0.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 149.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.83 : car (37.33/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.83 : car (4.64/0.64)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.59 : bus (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.67 : bus (10.33/1.11)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.06
|   |   |   |   |   |   |   |   |   |   |   featureN < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 340.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.19 : bus (26.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.19 : bus (27.53/1.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 340.15 : car (1.04/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 1.1 : car (1.56/0)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 1.1 : car (9.22/0.22)
|   |   |   |   |   |   |   |   featureJ >= 1.98
|   |   |   |   |   |   |   |   |   featureD < 1.31
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 993.85
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 102.98
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 7.79
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 3.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.53 : bus (16.21/1.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.53
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.11 : car (0.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 2.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.9 : bus (70.47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.68 : tram (0.55/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : bus (1.37/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.23 : bus (1.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.23 : bus (48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 2.14 : car (0.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 3.26 : car (0.55/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.16 : bus (12.92/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.16 : bus (47.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.91 : bus (8.39/2.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.67 : bus (33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.92 : bus (7.66/1.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.44 : bus (5.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.66 : bus (19.37/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.66 : bus (177.61/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 7.79
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 9.11 : car (8.32/2.95)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 9.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.07 : bike (0.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.63 : bus (16.55/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.15 : bus (44.92/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.15 : bus (4.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 102.98
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.07 : bus (33.57/1.77)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.07 : car (7.13/1.07)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 993.85
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 8.77 : train (7.31/2.23)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 8.77
|   |   |   |   |   |   |   |   |   |   |   |   speedMean < 5.38 : car (19.83/5.71)
|   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 5.38
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.31 : car (2.56/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.31 : bus (38.14/0.59)
|   |   |   |   |   |   |   |   |   featureD >= 1.31 : car (9/0)
|   |   |   |   |   |   |   maximumTravelDistance >= 13.99 : car (28.28/8.96)
|   |   |   |   |   |   speedMin >= 5.09
|   |   |   |   |   |   |   trajectorySimilarityBus < 153.72
|   |   |   |   |   |   |   |   featureU < 0.9
|   |   |   |   |   |   |   |   |   speed95Quantile < 7.98 : car (1.07/0.06)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 7.98 : bus (39.72/1.83)
|   |   |   |   |   |   |   |   featureU >= 0.9 : car (34.63/9.28)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 153.72
|   |   |   |   |   |   |   |   featureC < 5.55
|   |   |   |   |   |   |   |   |   featureE < 0.46 : train (3.78/0.35)
|   |   |   |   |   |   |   |   |   featureE >= 0.46 : car (37.71/0.26)
|   |   |   |   |   |   |   |   featureC >= 5.55 : train (10.89/2.61)
|   |   |   |   |   featureU >= 1.35
|   |   |   |   |   |   featureC < 6.5
|   |   |   |   |   |   |   featureM < 3.73 : bus (7.25/0.25)
|   |   |   |   |   |   |   featureM >= 3.73
|   |   |   |   |   |   |   |   featureH < 2.08
|   |   |   |   |   |   |   |   |   featureN < 1.38 : car (15.51/1)
|   |   |   |   |   |   |   |   |   featureN >= 1.38 : car (79.11/0)
|   |   |   |   |   |   |   |   featureH >= 2.08 : car (6.25/3)
|   |   |   |   |   |   featureC >= 6.5
|   |   |   |   |   |   |   maximumTravelDistance < 7.02 : bike (4.06/0.01)
|   |   |   |   |   |   |   maximumTravelDistance >= 7.02
|   |   |   |   |   |   |   |   featureM < 4.19 : car (9.24/1)
|   |   |   |   |   |   |   |   featureM >= 4.19
|   |   |   |   |   |   |   |   |   featureL < 3.42 : bus (9/3)
|   |   |   |   |   |   |   |   |   featureL >= 3.42
|   |   |   |   |   |   |   |   |   |   featureC < 34.5
|   |   |   |   |   |   |   |   |   |   |   featureU < 2.32 : bus (46/0)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 2.32 : bike (0.72/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 34.5 : car (1/0)
|   |   |   lowSpeedPointRatio >= 0.93
|   |   |   |   featureE < 0.45
|   |   |   |   |   accumulatedTravelDistance < 109.97
|   |   |   |   |   |   featureM < 2.9
|   |   |   |   |   |   |   trajectorySimilarityTrain < 585.71 : walk (7.15/3.15)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 585.71
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 934.11
|   |   |   |   |   |   |   |   |   featureR < 0.56
|   |   |   |   |   |   |   |   |   |   featureI < 0.15 : stationary (22.06/0.06)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.15
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.06 : train (0.17/0.04)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.05
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.17 : train (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.32 : stationary (34.17/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.32 : stationary (11.13/0.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.05 : bus (0.06/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.23 : train (0.13/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.88 : stationary (4.11/0.11)
|   |   |   |   |   |   |   |   |   featureR >= 0.56 : train (0.61/0.04)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 934.11 : stationary (36.75/8.7)
|   |   |   |   |   |   featureM >= 2.9 : bus (27.3/17.27)
|   |   |   |   |   accumulatedTravelDistance >= 109.97 : train (18.34/4.15)
|   |   |   |   featureE >= 0.45
|   |   |   |   |   featureT < 0.34 : train (12.87/8.03)
|   |   |   |   |   featureT >= 0.34 : car (35.69/2.06)
|   |   speedMax >= 12.7
|   |   |   featureO < 1
|   |   |   |   featureC < 2.67
|   |   |   |   |   featureU < 0.62
|   |   |   |   |   |   speedMedian < 16.64
|   |   |   |   |   |   |   trajectorySimilarityBus < 106.85 : train (26.98/16.88)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 106.85 : train (31.47/2.02)
|   |   |   |   |   |   speedMedian >= 16.64
|   |   |   |   |   |   |   featureN < 0.29 : train (35.59/3.55)
|   |   |   |   |   |   |   featureN >= 0.29
|   |   |   |   |   |   |   |   featureH < 0.65 : train (86.13/0)
|   |   |   |   |   |   |   |   featureH >= 0.65 : train (34.52/1.52)
|   |   |   |   |   featureU >= 0.62 : car (18/3)
|   |   |   |   featureC >= 2.67
|   |   |   |   |   featureJ < 3.65
|   |   |   |   |   |   featureE < 0.73
|   |   |   |   |   |   |   speedMax < 15.5
|   |   |   |   |   |   |   |   featureR < 0.47
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 565.61 : tram (9.39/1.32)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 565.61 : car (31.7/12.7)
|   |   |   |   |   |   |   |   featureR >= 0.47 : bus (25.53/4.04)
|   |   |   |   |   |   |   speedMax >= 15.5
|   |   |   |   |   |   |   |   maximumTravelDistance < 17.86 : bus (21.78/4.29)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 17.86
|   |   |   |   |   |   |   |   |   featureK < 1.18 : train (34.25/11.32)
|   |   |   |   |   |   |   |   |   featureK >= 1.18 : train (29.81/0.88)
|   |   |   |   |   |   featureE >= 0.73
|   |   |   |   |   |   |   maximumTravelDistance < 18.71
|   |   |   |   |   |   |   |   featureR < 0.67 : car (25.21/1.28)
|   |   |   |   |   |   |   |   featureR >= 0.67 : car (16.85/4.85)
|   |   |   |   |   |   |   maximumTravelDistance >= 18.71 : bus (3.61/0.55)
|   |   |   |   |   featureJ >= 3.65
|   |   |   |   |   |   featureC < 7.08
|   |   |   |   |   |   |   featureG < 0.67 : car (21.39/1.39)
|   |   |   |   |   |   |   featureG >= 0.67 : car (85/0)
|   |   |   |   |   |   featureC >= 7.08 : train (4.09/0)
|   |   |   featureO >= 1
|   |   |   |   featureL < 4.12
|   |   |   |   |   featureD < 0.86
|   |   |   |   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   |   |   |   featureL < 2.97
|   |   |   |   |   |   |   |   featureU < 0.88
|   |   |   |   |   |   |   |   |   speed50Quantile < 13.09
|   |   |   |   |   |   |   |   |   |   featureS < 0.6 : bus (9.13/2.13)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.6
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.57
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.43 : car (47.68/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.43 : car (17.04/2.13)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 2.87 : car (9.3/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 2.87 : car (33.06/11.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.24 : bus (11.45/0.45)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 13.09
|   |   |   |   |   |   |   |   |   |   featureU < 0.55 : train (6.2/0.2)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.55
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 480.19
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.73
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.23 : bus (8.17/1.83)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.23 : bus (52/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.73 : walk (0.57/0.23)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 480.19
|   |   |   |   |   |   |   |   |   |   |   |   speedMax < 15.32 : bus (10.47/0.41)
|   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 15.32 : car (32.47/5.67)
|   |   |   |   |   |   |   |   featureU >= 0.88
|   |   |   |   |   |   |   |   |   featureG < 0.35
|   |   |   |   |   |   |   |   |   |   featureJ < 2.46 : car (39.53/1.27)
|   |   |   |   |   |   |   |   |   |   featureJ >= 2.46 : bus (5/-0)
|   |   |   |   |   |   |   |   |   featureG >= 0.35
|   |   |   |   |   |   |   |   |   |   featureC < 12.5
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.01
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.5 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.5
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.77 : car (84.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.77 : car (18.91/0.84)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.01 : car (168.11/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 12.5 : bike (2.27/1)
|   |   |   |   |   |   |   featureL >= 2.97
|   |   |   |   |   |   |   |   speedVariance < 0.94 : bus (18.04/8.33)
|   |   |   |   |   |   |   |   speedVariance >= 0.94
|   |   |   |   |   |   |   |   |   featureO < 1.02 : train (2/0)
|   |   |   |   |   |   |   |   |   featureO >= 1.02
|   |   |   |   |   |   |   |   |   |   featureE < 0.47 : walk (1.12/0.37)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.47
|   |   |   |   |   |   |   |   |   |   |   featureK < 1.75
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.66 : bus (15.75/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.66 : bus (81.25/0)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 1.75
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.21 : car (1.87/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.21 : bus (41.25/0)
|   |   |   |   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   |   |   |   maximumTravelDistance < 34.98
|   |   |   |   |   |   |   |   featureI < 0.17 : train (8.23/4.23)
|   |   |   |   |   |   |   |   featureI >= 0.17
|   |   |   |   |   |   |   |   |   featureD < 0.56 : tram (17.98/4.48)
|   |   |   |   |   |   |   |   |   featureD >= 0.56
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 17.37
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 13.94
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 18.05
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.66 : bus (0.1/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.14 : bus (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.86 : car (14.46/0.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 3.84 : car (57.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 3.84 : car (8.46/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.95 : bus (0.66/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 18.05 : bus (1.04/0.03)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 13.94 : bus (7.27/3.19)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 17.37
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.33
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.58
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.59 : tram (0.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.59 : car (84.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.58
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.76 : bus (0.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.72 : car (37.46/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.72 : car (6.38/0.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.46 : car (174.54/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.33 : bus (3.08/0.58)
|   |   |   |   |   |   |   maximumTravelDistance >= 34.98
|   |   |   |   |   |   |   |   featureT < 0.48 : train (37.35/1.3)
|   |   |   |   |   |   |   |   featureT >= 0.48 : train (7.8/3.72)
|   |   |   |   |   featureD >= 0.86
|   |   |   |   |   |   featureD < 0.97
|   |   |   |   |   |   |   featureQ < 1.38
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 50.45 : car (33.49/9.22)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 50.45
|   |   |   |   |   |   |   |   |   featureU < 0.84
|   |   |   |   |   |   |   |   |   |   featureO < 1.37
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.92 : car (52/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.92 : car (17.01/2.01)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.37 : bus (5.68/2)
|   |   |   |   |   |   |   |   |   featureU >= 0.84
|   |   |   |   |   |   |   |   |   |   featureH < 0.08 : bus (0.67/0)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.08 : car (741.69/0)
|   |   |   |   |   |   |   featureQ >= 1.38 : bus (14/1)
|   |   |   |   |   |   featureD >= 0.97
|   |   |   |   |   |   |   featureS < 0.99
|   |   |   |   |   |   |   |   featureB < 0.08
|   |   |   |   |   |   |   |   |   featureH < 2.69
|   |   |   |   |   |   |   |   |   |   featureC < 8.66 : car (69/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 8.66 : car (6.09/2.09)
|   |   |   |   |   |   |   |   |   featureH >= 2.69 : bus (2.09/0)
|   |   |   |   |   |   |   |   featureB >= 0.08
|   |   |   |   |   |   |   |   |   featureP < 1.64 : train (5.48/2)
|   |   |   |   |   |   |   |   |   featureP >= 1.64
|   |   |   |   |   |   |   |   |   |   featureE < 0.89 : train (0.7/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.89 : car (61.48/0)
|   |   |   |   |   |   |   featureS >= 0.99
|   |   |   |   |   |   |   |   featureA < 1.21
|   |   |   |   |   |   |   |   |   featureG < 1.52 : car (657.06/0)
|   |   |   |   |   |   |   |   |   featureG >= 1.52
|   |   |   |   |   |   |   |   |   |   featureD < 1.13 : car (104.39/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.13 : car (18.7/0.7)
|   |   |   |   |   |   |   |   featureA >= 1.21 : bike (1.39/-0)
|   |   |   |   featureL >= 4.12
|   |   |   |   |   speed75Quantile < 23.83
|   |   |   |   |   |   featureN < 1.42
|   |   |   |   |   |   |   trajectorySimilarityTrain < 123.76 : train (1.06/0.06)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 123.76
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 191.82
|   |   |   |   |   |   |   |   |   featureP < 3.76 : bus (106.08/0)
|   |   |   |   |   |   |   |   |   featureP >= 3.76 : bus (3.47/0.47)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 191.82 : car (1.06/0.06)
|   |   |   |   |   |   featureN >= 1.42
|   |   |   |   |   |   |   featureC < 6.04 : bus (31.43/1.43)
|   |   |   |   |   |   |   featureC >= 6.04
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 356.14 : bus (27.31/0.15)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 356.14
|   |   |   |   |   |   |   |   |   featureO < 3.3
|   |   |   |   |   |   |   |   |   |   featureB < 0.04 : car (12.32/5.32)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : car (32/2)
|   |   |   |   |   |   |   |   |   featureO >= 3.3 : bus (13.32/0.32)
|   |   |   |   |   speed75Quantile >= 23.83
|   |   |   |   |   |   featureD < 0.98 : bus (2.64/0)
|   |   |   |   |   |   featureD >= 0.98
|   |   |   |   |   |   |   featureL < 6.72
|   |   |   |   |   |   |   |   featureN < 1.35 : car (3.44/0.44)
|   |   |   |   |   |   |   |   featureN >= 1.35 : car (98.88/0)
|   |   |   |   |   |   |   featureL >= 6.72 : bike (0.22/0)
featureD >= 1.38
|   accumulatedTravelDistance < 146.15
|   |   featureD < 3.75
|   |   |   featureA < 3.37 : bus (15.2/6.69)
|   |   |   featureA >= 3.37
|   |   |   |   featureJ < 13.63
|   |   |   |   |   featureC < 33.6
|   |   |   |   |   |   speedMax < 4.06 : walk (75.14/0)
|   |   |   |   |   |   speedMax >= 4.06 : bike (2.12/0.12)
|   |   |   |   |   featureC >= 33.6 : bike (2.82/0)
|   |   |   |   featureJ >= 13.63 : bike (6.86/2)
|   |   featureD >= 3.75 : walk (2107.55/0)
|   accumulatedTravelDistance >= 146.15
|   |   highSpeedPointRatio < 0.01
|   |   |   featureP < 0.37
|   |   |   |   featureA < 0.68 : bike (5.62/2.62)
|   |   |   |   featureA >= 0.68
|   |   |   |   |   featureE < 4.71 : bike (935.24/0)
|   |   |   |   |   featureE >= 4.71
|   |   |   |   |   |   featureE < 4.83 : bike (11.36/3.36)
|   |   |   |   |   |   featureE >= 4.83 : bike (69/0)
|   |   |   featureP >= 0.37
|   |   |   |   featureB < 0.26
|   |   |   |   |   featureO < 4.28 : walk (32.7/16.23)
|   |   |   |   |   featureO >= 4.28
|   |   |   |   |   |   featureL < 15.47
|   |   |   |   |   |   |   featureS < 4.17
|   |   |   |   |   |   |   |   featureA < 5.52 : bike (46.37/0)
|   |   |   |   |   |   |   |   featureA >= 5.52 : walk (2.24/0.75)
|   |   |   |   |   |   |   featureS >= 4.17 : bike (136/0)
|   |   |   |   |   |   featureL >= 15.47
|   |   |   |   |   |   |   featureP < 12.59 : walk (11.59/0)
|   |   |   |   |   |   |   featureP >= 12.59
|   |   |   |   |   |   |   |   featureK < 14.35
|   |   |   |   |   |   |   |   |   featureC < 22.88 : walk (0.37/0)
|   |   |   |   |   |   |   |   |   featureC >= 22.88 : bike (60.24/0)
|   |   |   |   |   |   |   |   featureK >= 14.35 : bike (12.99/2.99)
|   |   |   |   featureB >= 0.26 : walk (34.77/0)
|   |   highSpeedPointRatio >= 0.01
|   |   |   featureR < 1 : bike (16.4/6.29)
|   |   |   featureR >= 1
|   |   |   |   featureQ < 3.08
|   |   |   |   |   speedMedian < 23.75
|   |   |   |   |   |   featureN < 4.54
|   |   |   |   |   |   |   featureM < 4.92 : walk (0.03/0)
|   |   |   |   |   |   |   featureM >= 4.92
|   |   |   |   |   |   |   |   featureP < 6.64
|   |   |   |   |   |   |   |   |   featureH < 0.39 : walk (0.02/0)
|   |   |   |   |   |   |   |   |   featureH >= 0.39 : bus (41.24/0)
|   |   |   |   |   |   |   |   featureP >= 6.64 : bus (3.02/0.02)
|   |   |   |   |   |   featureN >= 4.54 : bike (0.03/0)
|   |   |   |   |   speedMedian >= 23.75 : car (2.02/0.02)
|   |   |   |   featureQ >= 3.08 : walk (3.04/0.11)

Size of the tree : 573


RandomTree
==========

featureA < 1.29
|   featureK < 0.59
|   |   featureK < 0.14
|   |   |   featureE < 0.04
|   |   |   |   headingVariance < 0.01
|   |   |   |   |   featureS < 0.02 : train (32.24/1.24)
|   |   |   |   |   featureS >= 0.02
|   |   |   |   |   |   featureQ < 0.03 : stationary (47.11/0)
|   |   |   |   |   |   featureQ >= 0.03 : stationary (14.5/0.23)
|   |   |   |   headingVariance >= 0.01
|   |   |   |   |   speed50Quantile < 0.1
|   |   |   |   |   |   featureI < 0.25
|   |   |   |   |   |   |   lowSpeedPointRatio < 0.95 : car (1.52/0.52)
|   |   |   |   |   |   |   lowSpeedPointRatio >= 0.95
|   |   |   |   |   |   |   |   featureO < 0.09 : stationary (642.64/0)
|   |   |   |   |   |   |   |   featureO >= 0.09
|   |   |   |   |   |   |   |   |   featureM < 0.17 : stationary (3.51/1.76)
|   |   |   |   |   |   |   |   |   featureM >= 0.17 : stationary (82.45/0)
|   |   |   |   |   |   featureI >= 0.25 : train (4/2)
|   |   |   |   |   speed50Quantile >= 0.1 : stationary (6.04/3.01)
|   |   |   featureE >= 0.04
|   |   |   |   featureI < 0.53
|   |   |   |   |   featureC < 2.26
|   |   |   |   |   |   headingVariance < 9.41
|   |   |   |   |   |   |   featureT < 0.04 : train (41.59/0)
|   |   |   |   |   |   |   featureT >= 0.04 : train (17.72/2)
|   |   |   |   |   |   headingVariance >= 9.41 : train (26.69/10)
|   |   |   |   |   featureC >= 2.26 : stationary (3/1)
|   |   |   |   featureI >= 0.53
|   |   |   |   |   featureC < 5.17 : train (11/3)
|   |   |   |   |   featureC >= 5.17 : bike (41/0)
|   |   featureK >= 0.14
|   |   |   lowSpeedPointRatio < 0.26
|   |   |   |   speed25Quantile < 13.09
|   |   |   |   |   trajectorySimilarityTram < 271.81
|   |   |   |   |   |   featureE < 0.17 : tram (29.72/10.72)
|   |   |   |   |   |   featureE >= 0.17
|   |   |   |   |   |   |   featureD < 0.35
|   |   |   |   |   |   |   |   featureS < 0.05 : bus (0.68/0)
|   |   |   |   |   |   |   |   featureS >= 0.05
|   |   |   |   |   |   |   |   |   featureA < 0.06
|   |   |   |   |   |   |   |   |   |   featureJ < 0.62 : tram (18.35/1.35)
|   |   |   |   |   |   |   |   |   |   featureJ >= 0.62
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.09 : tram (55/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.09 : tram (18.34/0.34)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.2 : tram (115/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.06 : tram (4.68/0.68)
|   |   |   |   |   |   |   featureD >= 0.35 : train (1.86/1.02)
|   |   |   |   |   trajectorySimilarityTram >= 271.81
|   |   |   |   |   |   featureR < 0.23
|   |   |   |   |   |   |   featureE < 0.08 : stationary (0.86/0.14)
|   |   |   |   |   |   |   featureE >= 0.08 : train (181.84/0)
|   |   |   |   |   |   featureR >= 0.23 : train (24.6/3.88)
|   |   |   |   speed25Quantile >= 13.09
|   |   |   |   |   featureQ < 0.26
|   |   |   |   |   |   featureO < 0.57
|   |   |   |   |   |   |   featureL < 0.29 : stationary (0.47/0.09)
|   |   |   |   |   |   |   featureL >= 0.29 : train (106.84/0)
|   |   |   |   |   |   featureO >= 0.57 : train (4.84/0.19)
|   |   |   |   |   featureQ >= 0.26 : train (21.86/1.77)
|   |   |   lowSpeedPointRatio >= 0.26
|   |   |   |   featureT < 0.11
|   |   |   |   |   featureD < 0.1
|   |   |   |   |   |   featureU < 0.09
|   |   |   |   |   |   |   speedMedian < 0.15
|   |   |   |   |   |   |   |   featureS < 0.07 : train (15/0)
|   |   |   |   |   |   |   |   featureS >= 0.07
|   |   |   |   |   |   |   |   |   featureR < 0.11 : train (27.97/7.97)
|   |   |   |   |   |   |   |   |   featureR >= 0.11 : stationary (15/0)
|   |   |   |   |   |   |   speedMedian >= 0.15 : stationary (13.22/0)
|   |   |   |   |   |   featureU >= 0.09 : stationary (31.34/0)
|   |   |   |   |   featureD >= 0.1
|   |   |   |   |   |   speedVariance < 13.34
|   |   |   |   |   |   |   trajectorySimilarityTrain < 837.7
|   |   |   |   |   |   |   |   featureC < 1.13
|   |   |   |   |   |   |   |   |   travelDistance < 8.14 : train (19.83/6)
|   |   |   |   |   |   |   |   |   travelDistance >= 8.14 : train (53.35/0)
|   |   |   |   |   |   |   |   featureC >= 1.13
|   |   |   |   |   |   |   |   |   headingVariance < 4.31
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 3.22 : train (19.94/0.47)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 3.22 : bus (28.34/8.07)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.31
|   |   |   |   |   |   |   |   |   |   featureC < 3.06
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 45.84
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.4 : bus (38.63/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.4 : bus (3.79/0.79)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 45.84 : car (1.03/0.02)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.17 : train (4.13/1)
|   |   |   |   |   |   |   |   |   |   featureC >= 3.06 : bike (20.64/13.64)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 837.7
|   |   |   |   |   |   |   |   travelDistance < 41.75
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.83 : stationary (13.1/4.06)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.83 : train (29.48/6.43)
|   |   |   |   |   |   |   |   travelDistance >= 41.75
|   |   |   |   |   |   |   |   |   featureE < 0.08 : car (17.36/3.36)
|   |   |   |   |   |   |   |   |   featureE >= 0.08 : train (32.07/11.72)
|   |   |   |   |   |   speedVariance >= 13.34
|   |   |   |   |   |   |   featureM < 0.06 : bus (2.74/0)
|   |   |   |   |   |   |   featureM >= 0.06
|   |   |   |   |   |   |   |   featureS < 0.16 : train (106.59/0)
|   |   |   |   |   |   |   |   featureS >= 0.16 : train (18.41/3.11)
|   |   |   |   featureT >= 0.11
|   |   |   |   |   speedMean < 0.24
|   |   |   |   |   |   featureM < 1.28
|   |   |   |   |   |   |   featureT < 0.17 : stationary (16.85/9.85)
|   |   |   |   |   |   |   featureT >= 0.17 : bus (67.68/0)
|   |   |   |   |   |   featureM >= 1.28 : car (13.36/9.36)
|   |   |   |   |   speedMean >= 0.24
|   |   |   |   |   |   trajectorySimilarityTrain < 275.7
|   |   |   |   |   |   |   featureF < 0.27 : train (38.75/10.39)
|   |   |   |   |   |   |   featureF >= 0.27
|   |   |   |   |   |   |   |   featureG < 0.5
|   |   |   |   |   |   |   |   |   speedMax < 12.63
|   |   |   |   |   |   |   |   |   |   featureE < 0.36 : bus (11.27/0.91)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.36 : bus (33/0)
|   |   |   |   |   |   |   |   |   speedMax >= 12.63 : bus (3.09/1.06)
|   |   |   |   |   |   |   |   featureG >= 0.5 : train (26.19/13)
|   |   |   |   |   |   trajectorySimilarityTrain >= 275.7
|   |   |   |   |   |   |   speedMedian < 1.3
|   |   |   |   |   |   |   |   featureC < 3.85
|   |   |   |   |   |   |   |   |   speedMean < 2.84
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.81
|   |   |   |   |   |   |   |   |   |   |   featureC < 1.68 : car (14.19/1.19)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 1.68 : car (34.3/0.3)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.81 : bus (4.13/2.11)
|   |   |   |   |   |   |   |   |   speedMean >= 2.84 : car (16.5/5.5)
|   |   |   |   |   |   |   |   featureC >= 3.85 : bus (12.28/3)
|   |   |   |   |   |   |   speedMedian >= 1.3
|   |   |   |   |   |   |   |   travelDistance < 156.58 : bus (27.82/3.63)
|   |   |   |   |   |   |   |   travelDistance >= 156.58 : car (23.7/11.7)
|   featureK >= 0.59
|   |   featureE < 0.78
|   |   |   mediumSpeedPointRatio < 0.02
|   |   |   |   speedMax < 2.21
|   |   |   |   |   trajectorySimilarityTrain < 841.5 : car (21.48/13.98)
|   |   |   |   |   trajectorySimilarityTrain >= 841.5
|   |   |   |   |   |   speedMean < 0.11
|   |   |   |   |   |   |   featureD < 0.16 : stationary (20/0)
|   |   |   |   |   |   |   featureD >= 0.16 : train (39.08/5.33)
|   |   |   |   |   |   speedMean >= 0.11
|   |   |   |   |   |   |   featureR < 0.57
|   |   |   |   |   |   |   |   featureL < 1.78
|   |   |   |   |   |   |   |   |   featureD < 0.53
|   |   |   |   |   |   |   |   |   |   featureS < 0.5
|   |   |   |   |   |   |   |   |   |   |   featureC < 1.64 : train (0.16/0.03)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 1.64
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.65 : stationary (56.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.65 : stationary (17.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.38 : stationary (4.39/0.39)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.5 : train (0.39/0.23)
|   |   |   |   |   |   |   |   |   featureD >= 0.53 : car (1.08/0.26)
|   |   |   |   |   |   |   |   featureL >= 1.78 : stationary (12.21/1.08)
|   |   |   |   |   |   |   featureR >= 0.57 : train (6.21/2.56)
|   |   |   |   speedMax >= 2.21 : bus (38.67/20.78)
|   |   |   mediumSpeedPointRatio >= 0.02
|   |   |   |   featureC < 2.75
|   |   |   |   |   featureU < 0.73
|   |   |   |   |   |   speed75Quantile < 18.13
|   |   |   |   |   |   |   featureO < 0.62
|   |   |   |   |   |   |   |   featureP < 0.86
|   |   |   |   |   |   |   |   |   featureP < 0.53 : train (30.13/9.6)
|   |   |   |   |   |   |   |   |   featureP >= 0.53 : train (39.19/14.53)
|   |   |   |   |   |   |   |   featureP >= 0.86 : bus (17.51/0.51)
|   |   |   |   |   |   |   featureO >= 0.62
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 245.09 : tram (12.51/0.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 245.09
|   |   |   |   |   |   |   |   |   featureE < 0.52
|   |   |   |   |   |   |   |   |   |   featureT < 0.27
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 9.05
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.44 : car (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 20.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.17 : bus (14.17/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.17 : bus (40/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 20.52 : bus (5.11/1.11)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 9.05 : train (6.13/0)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.27
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.41 : bus (29.94/14.94)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.41 : bus (36/1)
|   |   |   |   |   |   |   |   |   featureE >= 0.52 : bus (18.77/8.77)
|   |   |   |   |   |   speed75Quantile >= 18.13
|   |   |   |   |   |   |   featureE < 0.54
|   |   |   |   |   |   |   |   featureU < 0.18 : train (21.17/2.92)
|   |   |   |   |   |   |   |   featureU >= 0.18
|   |   |   |   |   |   |   |   |   featureE < 0.35 : train (29.08/0.42)
|   |   |   |   |   |   |   |   |   featureE >= 0.35 : train (105.08/0)
|   |   |   |   |   |   |   featureE >= 0.54
|   |   |   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   |   |   featureP < 1.85
|   |   |   |   |   |   |   |   |   |   featureP < 0.86 : tram (1.25/0)
|   |   |   |   |   |   |   |   |   |   featureP >= 0.86 : train (42/0)
|   |   |   |   |   |   |   |   |   featureP >= 1.85 : bus (2/0)
|   |   |   |   |   |   |   |   featureA >= 0.11 : tram (3.75/1.25)
|   |   |   |   |   featureU >= 0.73
|   |   |   |   |   |   speedMax < 34.65
|   |   |   |   |   |   |   accumulatedTravelDistance < 374.69
|   |   |   |   |   |   |   |   featureD < 0.57 : car (38/0)
|   |   |   |   |   |   |   |   featureD >= 0.57 : bus (31/14)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 374.69 : car (164.38/0)
|   |   |   |   |   |   speedMax >= 34.65 : train (22.32/0.32)
|   |   |   |   featureC >= 2.75
|   |   |   |   |   trajectorySimilarityBus < 170.62
|   |   |   |   |   |   featureR < 0.89
|   |   |   |   |   |   |   featureS < 0.64
|   |   |   |   |   |   |   |   featureD < 0.48
|   |   |   |   |   |   |   |   |   speedMax < 10.58
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 0.18 : car (2.22/0.22)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 0.18
|   |   |   |   |   |   |   |   |   |   |   featureU < 0.51
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.63
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.04 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.08 : bus (65.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.08 : train (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.63 : train (1.7/-0)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 0.51 : bus (16.85/0.85)
|   |   |   |   |   |   |   |   |   speedMax >= 10.58
|   |   |   |   |   |   |   |   |   |   featureS < 0.29 : bus (10.9/5.63)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.29
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 981.32 : bus (20.72/1.74)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 981.32 : car (32.71/11.71)
|   |   |   |   |   |   |   |   featureD >= 0.48
|   |   |   |   |   |   |   |   |   featureE < 0.51
|   |   |   |   |   |   |   |   |   |   featureM < 1.5 : bus (34.78/5.51)
|   |   |   |   |   |   |   |   |   |   featureM >= 1.5
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.43 : bus (79.3/0)
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.43 : bus (12.2/1)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : bus (6.75/0.75)
|   |   |   |   |   |   |   |   |   featureE >= 0.51
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 959.04
|   |   |   |   |   |   |   |   |   |   |   featureN < 0.27 : car (2.76/1.38)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.79
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 143.52 : bus (83.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 143.52 : bus (8.31/3)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.79 : tram (2.07/-0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 959.04 : tram (8.75/1.56)
|   |   |   |   |   |   |   featureS >= 0.64
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 914.79
|   |   |   |   |   |   |   |   |   featureU < 0.96
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.33
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.2 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.69 : bus (1.94/0.94)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.47 : bus (17.26/0.63)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.47 : bus (102.26/0)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.16
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.02
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean < 9.29 : bus (35.31/6.61)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 9.29 : car (5.89/1.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.02 : bus (40.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.16
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 18.69 : car (18.5/3.28)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 18.69 : bus (23.94/1.58)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.33
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 26.3 : bus (38.08/10.5)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 26.3
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 12.29 : car (31.73/14.56)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 12.29 : car (14.81/0.26)
|   |   |   |   |   |   |   |   |   featureU >= 0.96
|   |   |   |   |   |   |   |   |   |   speedMin < 5.67
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 60.38
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 11.52
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 7.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.58
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.98 : bus (36.66/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.98 : bus (6.66/1.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.58 : car (1.06/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.82 : car (1.53/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 7.56 : car (2.53/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.91 : bus (22/0)
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 11.52 : car (9.75/2.14)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 60.38 : car (35.76/8.52)
|   |   |   |   |   |   |   |   |   |   speedMin >= 5.67
|   |   |   |   |   |   |   |   |   |   |   featureL < 2.96
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.75
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.28 : car (0.42/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.28 : car (49.69/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.75 : bike (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 2.96 : bus (8.27/3.71)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 914.79
|   |   |   |   |   |   |   |   |   featureL < 3.01
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 205.28 : bus (21.3/8.08)
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 205.28
|   |   |   |   |   |   |   |   |   |   |   featureM < 3.22
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.98
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.11 : car (10.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.11 : car (74.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.15 : car (8.31/1.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.73 : car (26.24/10.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.73
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.1 : car (63.48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.1 : car (1.31/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.15 : car (37.75/8.55)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.98 : bus (5.62/1.62)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 3.22
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.06 : bike (0.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.06 : car (96.89/0)
|   |   |   |   |   |   |   |   |   featureL >= 3.01
|   |   |   |   |   |   |   |   |   |   featureK < 1.58
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.67 : car (0.66/0.33)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.67 : bus (43.99/0)
|   |   |   |   |   |   |   |   |   |   featureK >= 1.58 : bus (5.98/2.32)
|   |   |   |   |   |   featureR >= 0.89
|   |   |   |   |   |   |   stationaryPointRatio < 0.02
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 516.13 : tram (5.34/0.34)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 516.13
|   |   |   |   |   |   |   |   |   featureL < 3.18 : bus (18.76/2.38)
|   |   |   |   |   |   |   |   |   featureL >= 3.18
|   |   |   |   |   |   |   |   |   |   featureF < 0.46
|   |   |   |   |   |   |   |   |   |   |   featureC < 6.84
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 2.13 : bus (32.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 2.13 : bus (9.4/0.4)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 6.84 : bus (17.38/2.79)
|   |   |   |   |   |   |   |   |   |   featureF >= 0.46 : bus (117.59/0)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.02
|   |   |   |   |   |   |   |   featureD < 1.08
|   |   |   |   |   |   |   |   |   speed95Quantile < 16.39
|   |   |   |   |   |   |   |   |   |   featureJ < 4.74
|   |   |   |   |   |   |   |   |   |   |   featureC < 6.4
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.25
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 5.4 : bus (30.16/7)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 5.4 : bus (30.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.25 : car (6.32/2)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 6.4
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.91 : bus (6.64/1)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.22 : bus (7.56/0.96)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.22 : bus (60.48/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 4.74 : bus (13.6/1.6)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 16.39 : car (11.75/2.73)
|   |   |   |   |   |   |   |   featureD >= 1.08 : train (3/0)
|   |   |   |   |   trajectorySimilarityBus >= 170.62
|   |   |   |   |   |   featureS < 0.58
|   |   |   |   |   |   |   speedMax < 9.97 : bus (37.22/1.21)
|   |   |   |   |   |   |   speedMax >= 9.97
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 252.12 : tram (2.19/0.18)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 252.12
|   |   |   |   |   |   |   |   |   featureC < 3.42 : train (4.61/2.61)
|   |   |   |   |   |   |   |   |   featureC >= 3.42
|   |   |   |   |   |   |   |   |   |   featureH < 0.65
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.39 : train (7.42/0.42)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.39 : train (38.31/0.21)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.65 : train (7.67/1.05)
|   |   |   |   |   |   featureS >= 0.58
|   |   |   |   |   |   |   maximumTravelDistance < 39.92
|   |   |   |   |   |   |   |   featureE < 0.43 : tram (35.75/18.59)
|   |   |   |   |   |   |   |   featureE >= 0.43
|   |   |   |   |   |   |   |   |   featureA < 0.39
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 7.45 : bus (6.3/0.25)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 7.45
|   |   |   |   |   |   |   |   |   |   |   featureK < 1.45
|   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.13 : car (56.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.34 : bus (0.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 4.57 : car (45.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 4.57 : car (27.99/0.47)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 1.45
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.51
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.7 : bus (1.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.59 : bus (0.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.75 : car (11.31/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.75 : car (66.57/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.51 : bus (7.31/1.31)
|   |   |   |   |   |   |   |   |   featureA >= 0.39 : bus (9.54/3.65)
|   |   |   |   |   |   |   maximumTravelDistance >= 39.92 : train (22.49/1.4)
|   |   featureE >= 0.78
|   |   |   trajectorySimilarityTrain < 909.69
|   |   |   |   maximumTravelDistance < 25.09
|   |   |   |   |   speedMean < 8.03
|   |   |   |   |   |   featureP < 3.25
|   |   |   |   |   |   |   featureC < 4.43
|   |   |   |   |   |   |   |   featureR < 0.49 : car (16.16/0)
|   |   |   |   |   |   |   |   featureR >= 0.49 : bus (36.13/5.73)
|   |   |   |   |   |   |   featureC >= 4.43
|   |   |   |   |   |   |   |   featureT < 0.34 : bus (5.22/1.22)
|   |   |   |   |   |   |   |   featureT >= 0.34
|   |   |   |   |   |   |   |   |   featureJ < 4.39 : bus (33.89/0)
|   |   |   |   |   |   |   |   |   featureJ >= 4.39 : bus (9.24/0.16)
|   |   |   |   |   |   featureP >= 3.25
|   |   |   |   |   |   |   featureL < 4.87
|   |   |   |   |   |   |   |   featureA < 0.51 : car (59.03/0)
|   |   |   |   |   |   |   |   featureA >= 0.51 : car (16.41/1.16)
|   |   |   |   |   |   |   featureL >= 4.87 : bus (36.16/7)
|   |   |   |   |   speedMean >= 8.03
|   |   |   |   |   |   trajectorySimilarityBus < 131.23
|   |   |   |   |   |   |   featureL < 3.8
|   |   |   |   |   |   |   |   headingVariance < 10.47
|   |   |   |   |   |   |   |   |   speedMedian < 23.23
|   |   |   |   |   |   |   |   |   |   featureI < 0.81 : car (9.94/1.56)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.81 : car (36.86/0.19)
|   |   |   |   |   |   |   |   |   speedMedian >= 23.23 : bus (2.08/0.07)
|   |   |   |   |   |   |   |   headingVariance >= 10.47 : bus (11.44/2.38)
|   |   |   |   |   |   |   featureL >= 3.8
|   |   |   |   |   |   |   |   featureL < 4.5 : bus (24.87/0.73)
|   |   |   |   |   |   |   |   featureL >= 4.5 : bus (41.53/0)
|   |   |   |   |   |   trajectorySimilarityBus >= 131.23
|   |   |   |   |   |   |   featureO < 3.01
|   |   |   |   |   |   |   |   featureT < 1.02
|   |   |   |   |   |   |   |   |   featureF < 2.53
|   |   |   |   |   |   |   |   |   |   featureD < 1.02
|   |   |   |   |   |   |   |   |   |   |   featureK < 1.08 : car (0.29/0.14)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.03 : car (1.08/0.5)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.03 : car (122.72/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.02
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.86 : train (0.43/0)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.86
|   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.1 : car (21.16/0.94)
|   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.1 : car (32.43/0.07)
|   |   |   |   |   |   |   |   |   featureF >= 2.53 : car (1.36/0.36)
|   |   |   |   |   |   |   |   featureT >= 1.02 : bus (1/0)
|   |   |   |   |   |   |   featureO >= 3.01 : bus (8.07/0.07)
|   |   |   |   maximumTravelDistance >= 25.09
|   |   |   |   |   featureJ < 1.61 : bus (0.44/0.05)
|   |   |   |   |   featureJ >= 1.61
|   |   |   |   |   |   featureA < 0.51
|   |   |   |   |   |   |   featureQ < 1.11
|   |   |   |   |   |   |   |   featureS < 0.7 : car (7.49/0.29)
|   |   |   |   |   |   |   |   featureS >= 0.7
|   |   |   |   |   |   |   |   |   featureL < 3.06 : car (41.49/0)
|   |   |   |   |   |   |   |   |   featureL >= 3.06
|   |   |   |   |   |   |   |   |   |   featureJ < 3.98 : car (60.39/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 3.98 : bus (0.15/-0)
|   |   |   |   |   |   |   featureQ >= 1.11 : car (16.93/0.29)
|   |   |   |   |   |   featureA >= 0.51 : bus (0.88/0.39)
|   |   |   trajectorySimilarityTrain >= 909.69
|   |   |   |   featureR < 1.23
|   |   |   |   |   featureC < 7.1
|   |   |   |   |   |   featureJ < 3.16
|   |   |   |   |   |   |   featureJ < 1.61
|   |   |   |   |   |   |   |   featureC < 3.5 : car (49.75/0)
|   |   |   |   |   |   |   |   featureC >= 3.5 : bus (4.75/1)
|   |   |   |   |   |   |   featureJ >= 1.61
|   |   |   |   |   |   |   |   featureT < 0.5
|   |   |   |   |   |   |   |   |   featureR < 1.1
|   |   |   |   |   |   |   |   |   |   featureI < 0.42 : car (17.75/1)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.42 : car (304.75/0)
|   |   |   |   |   |   |   |   |   featureR >= 1.1 : car (3/1)
|   |   |   |   |   |   |   |   featureT >= 0.5 : car (958.24/0)
|   |   |   |   |   |   featureJ >= 3.16
|   |   |   |   |   |   |   speed95Quantile < 24.02
|   |   |   |   |   |   |   |   featureN < 1.2 : car (105.23/0)
|   |   |   |   |   |   |   |   featureN >= 1.2
|   |   |   |   |   |   |   |   |   featureL < 4.15 : car (39.46/0.92)
|   |   |   |   |   |   |   |   |   featureL >= 4.15 : bus (13.61/1)
|   |   |   |   |   |   |   speed95Quantile >= 24.02
|   |   |   |   |   |   |   |   featureN < 2.27
|   |   |   |   |   |   |   |   |   featureH < 0.3 : car (3.89/0.89)
|   |   |   |   |   |   |   |   |   featureH >= 0.3 : car (222.98/0)
|   |   |   |   |   |   |   |   featureN >= 2.27 : bus (1.33/0)
|   |   |   |   |   featureC >= 7.1
|   |   |   |   |   |   featureS < 0.89 : train (20.25/8)
|   |   |   |   |   |   featureS >= 0.89
|   |   |   |   |   |   |   featureJ < 1.55 : bus (2.25/0)
|   |   |   |   |   |   |   featureJ >= 1.55
|   |   |   |   |   |   |   |   featureL < 4.54 : car (115/0)
|   |   |   |   |   |   |   |   featureL >= 4.54 : bus (5.5/1)
|   |   |   |   featureR >= 1.23
|   |   |   |   |   featureL < 4.42 : car (28.5/1.5)
|   |   |   |   |   featureL >= 4.42
|   |   |   |   |   |   featureB < 0.1
|   |   |   |   |   |   |   headingVariance < 9.58
|   |   |   |   |   |   |   |   featureJ < 3.62 : bus (24/0)
|   |   |   |   |   |   |   |   featureJ >= 3.62 : bus (20.09/8)
|   |   |   |   |   |   |   headingVariance >= 9.58 : train (4.41/0.41)
|   |   |   |   |   |   featureB >= 0.1 : car (18/0)
featureA >= 1.29
|   speed95Quantile < 3.08
|   |   featureR < 2.22
|   |   |   featureE < 4.13
|   |   |   |   featureO < 2.09 : walk (25.8/12.8)
|   |   |   |   featureO >= 2.09 : bus (26/14)
|   |   |   featureE >= 4.13 : walk (83.6/0)
|   |   featureR >= 2.22
|   |   |   featureF < 1.01
|   |   |   |   featureG < 4.54 : walk (24/3)
|   |   |   |   featureG >= 4.54 : walk (28.6/0)
|   |   |   featureF >= 1.01 : walk (1969.21/0)
|   speed95Quantile >= 3.08
|   |   speedMax < 10.36
|   |   |   featureO < 0.69
|   |   |   |   featureD < 1.13 : bus (1/0)
|   |   |   |   featureD >= 1.13
|   |   |   |   |   featureJ < 18.19
|   |   |   |   |   |   featureB < 0.1 : bike (22.24/1.12)
|   |   |   |   |   |   featureB >= 0.1 : bike (231.24/0)
|   |   |   |   |   featureJ >= 18.19 : bike (760.75/0)
|   |   |   featureO >= 0.69
|   |   |   |   featureB < 0.26
|   |   |   |   |   featureS < 2.77 : walk (14.71/6.86)
|   |   |   |   |   featureS >= 2.77
|   |   |   |   |   |   featureE < 4.25
|   |   |   |   |   |   |   featureE < 3.28 : bike (222.36/0)
|   |   |   |   |   |   |   featureE >= 3.28 : bike (36.62/2.62)
|   |   |   |   |   |   featureE >= 4.25 : walk (22.19/5)
|   |   |   |   featureB >= 0.26 : walk (32.52/0)
|   |   speedMax >= 10.36
|   |   |   featureB < 0.15
|   |   |   |   featureP < 1.77 : train (1.24/0.24)
|   |   |   |   featureP >= 1.77
|   |   |   |   |   featureL < 12.75
|   |   |   |   |   |   featureE < 2.25
|   |   |   |   |   |   |   featureT < 0.45 : bus (1.1/0.1)
|   |   |   |   |   |   |   featureT >= 0.45
|   |   |   |   |   |   |   |   featureA < 1.4 : bus (1.13/0.1)
|   |   |   |   |   |   |   |   featureA >= 1.4
|   |   |   |   |   |   |   |   |   featureN < 1.54 : bus (9.18/0.03)
|   |   |   |   |   |   |   |   |   featureN >= 1.54
|   |   |   |   |   |   |   |   |   |   featureS < 2.95 : bus (51.16/0)
|   |   |   |   |   |   |   |   |   |   featureS >= 2.95 : bus (8.03/0.03)
|   |   |   |   |   |   featureE >= 2.25 : walk (0.31/0)
|   |   |   |   |   featureL >= 12.75 : walk (0.81/0.1)
|   |   |   featureB >= 0.15 : bike (21.2/3.06)

Size of the tree : 531


RandomTree
==========

featureK < 4.59
|   featureR < 0.04
|   |   featureJ < 5.7
|   |   |   featureF < 0.1
|   |   |   |   accumulatedTravelDistance < 4.56
|   |   |   |   |   featureS < 0.05 : stationary (416.46/0)
|   |   |   |   |   featureS >= 0.05
|   |   |   |   |   |   featureJ < 0.1 : stationary (37.07/0)
|   |   |   |   |   |   featureJ >= 0.1 : stationary (11.65/2.33)
|   |   |   |   accumulatedTravelDistance >= 4.56
|   |   |   |   |   headingVariance < 0.08 : train (38.3/15.11)
|   |   |   |   |   headingVariance >= 0.08
|   |   |   |   |   |   speedMin < 0.03
|   |   |   |   |   |   |   featureD < 0.04
|   |   |   |   |   |   |   |   featureP < 0.13 : stationary (243.98/0)
|   |   |   |   |   |   |   |   featureP >= 0.13 : stationary (24.23/0.7)
|   |   |   |   |   |   |   featureD >= 0.04 : stationary (10.72/5.72)
|   |   |   |   |   |   speedMin >= 0.03 : train (17.58/5.52)
|   |   |   featureF >= 0.1 : train (20/3)
|   |   featureJ >= 5.7
|   |   |   accumulatedTravelDistance < 163.85 : walk (7.09/0.03)
|   |   |   accumulatedTravelDistance >= 163.85
|   |   |   |   featureG < 1.8 : bike (298.97/0)
|   |   |   |   featureG >= 1.8
|   |   |   |   |   featureJ < 18.18
|   |   |   |   |   |   featureH < 4.66
|   |   |   |   |   |   |   featureI < 6.35 : bike (117.99/0)
|   |   |   |   |   |   |   featureI >= 6.35 : bike (10.99/1.99)
|   |   |   |   |   |   featureH >= 4.66 : bike (18.96/5.96)
|   |   |   |   |   featureJ >= 18.18 : bike (619/0)
|   featureR >= 0.04
|   |   featureT < 0.28
|   |   |   speedMax < 2.12
|   |   |   |   trajectorySimilarityBus < 14.31
|   |   |   |   |   stationaryPointRatio < 0.62
|   |   |   |   |   |   featureE < 0.17 : train (4.5/1.24)
|   |   |   |   |   |   featureE >= 0.17
|   |   |   |   |   |   |   featureD < 0.55
|   |   |   |   |   |   |   |   featureA < 0.06 : train (1.26/0.07)
|   |   |   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   |   |   featureO < 0.11 : bus (0.27/0.1)
|   |   |   |   |   |   |   |   |   featureO >= 0.11
|   |   |   |   |   |   |   |   |   |   featureC < 3.21
|   |   |   |   |   |   |   |   |   |   |   featureC < 1.64 : car (0.27/0.14)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 1.64
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.55 : bus (0.1/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.07
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.34 : stationary (21.2/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.34 : stationary (54.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.37 : stationary (0.14/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.07 : stationary (3.1/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.19 : train (0.1/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 3.21 : bus (0.41/0.03)
|   |   |   |   |   |   |   featureD >= 0.55 : train (2.17/1.36)
|   |   |   |   |   stationaryPointRatio >= 0.62
|   |   |   |   |   |   featureG < 0.07 : bus (24.21/13.12)
|   |   |   |   |   |   featureG >= 0.07
|   |   |   |   |   |   |   featureL < 0.71
|   |   |   |   |   |   |   |   featureF < 0.04 : train (3.09/0)
|   |   |   |   |   |   |   |   featureF >= 0.04
|   |   |   |   |   |   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 1.98
|   |   |   |   |   |   |   |   |   |   |   featureJ < 0.39 : bus (35.29/0.29)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.39 : bus (37.66/3.29)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 1.98 : bus (2.11/1.1)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 0.01 : train (2.5/0.01)
|   |   |   |   |   |   |   featureL >= 0.71 : train (8.5/4.86)
|   |   |   |   trajectorySimilarityBus >= 14.31
|   |   |   |   |   featureD < 0.28
|   |   |   |   |   |   headingVariance < 4.02
|   |   |   |   |   |   |   featureI < 0.06
|   |   |   |   |   |   |   |   featureG < 0.07
|   |   |   |   |   |   |   |   |   speedMax < 0.01 : train (26.62/12.26)
|   |   |   |   |   |   |   |   |   speedMax >= 0.01 : train (14.71/2.22)
|   |   |   |   |   |   |   |   featureG >= 0.07 : train (16.74/0.07)
|   |   |   |   |   |   |   featureI >= 0.06
|   |   |   |   |   |   |   |   featureK < 0.15 : train (5.71/0.07)
|   |   |   |   |   |   |   |   featureK >= 0.15 : train (81.03/0)
|   |   |   |   |   |   headingVariance >= 4.02
|   |   |   |   |   |   |   featureD < 0.11
|   |   |   |   |   |   |   |   speedMax < 0.06
|   |   |   |   |   |   |   |   |   featureC < 0.68 : stationary (3.02/1.02)
|   |   |   |   |   |   |   |   |   featureC >= 0.68 : stationary (56.22/0)
|   |   |   |   |   |   |   |   speedMax >= 0.06 : stationary (21.12/5.68)
|   |   |   |   |   |   |   featureD >= 0.11
|   |   |   |   |   |   |   |   featureC < 6.75
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 590.78 : train (27.64/0.05)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 590.78 : train (14.42/6.02)
|   |   |   |   |   |   |   |   featureC >= 6.75 : stationary (19/0)
|   |   |   |   |   featureD >= 0.28
|   |   |   |   |   |   speed25Quantile < 0.04
|   |   |   |   |   |   |   featureL < 0.66 : car (11.94/2.94)
|   |   |   |   |   |   |   featureL >= 0.66 : train (33.44/12.81)
|   |   |   |   |   |   speed25Quantile >= 0.04 : stationary (28.88/7.34)
|   |   |   speedMax >= 2.12
|   |   |   |   highSpeedPointRatio < 0.19
|   |   |   |   |   featureJ < 0.78
|   |   |   |   |   |   lowSpeedPointRatio < 0.71
|   |   |   |   |   |   |   speed50Quantile < 2.88
|   |   |   |   |   |   |   |   featureT < 0.11 : train (39.89/1.22)
|   |   |   |   |   |   |   |   featureT >= 0.11 : car (5.43/2.43)
|   |   |   |   |   |   |   speed50Quantile >= 2.88
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 594.73 : train (32.73/0.88)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 594.73 : tram (24.2/7.2)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.71
|   |   |   |   |   |   |   featureD < 0.17
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 28.23 : train (27.16/17.37)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 28.23
|   |   |   |   |   |   |   |   |   featureR < 0.06 : train (7.74/2.81)
|   |   |   |   |   |   |   |   |   featureR >= 0.06 : train (35.47/1.36)
|   |   |   |   |   |   |   featureD >= 0.17
|   |   |   |   |   |   |   |   featureT < 0.06 : train (6/0)
|   |   |   |   |   |   |   |   featureT >= 0.06
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 413.14 : bus (20.87/4.87)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 413.14 : car (34.05/5.05)
|   |   |   |   |   featureJ >= 0.78
|   |   |   |   |   |   speed25Quantile < 1.67
|   |   |   |   |   |   |   featureE < 0.14
|   |   |   |   |   |   |   |   maximumTravelDistance < 9.54 : bus (29.29/16.29)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 9.54 : train (36.88/19.05)
|   |   |   |   |   |   |   featureE >= 0.14
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.89
|   |   |   |   |   |   |   |   |   featureP < 0.62
|   |   |   |   |   |   |   |   |   |   featureM < 0.17 : bus (34.29/0)
|   |   |   |   |   |   |   |   |   |   featureM >= 0.17
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 174.53
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.11 : train (13.31/3.15)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.62 : bus (35.76/5.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.62 : train (11.53/3.85)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 174.53 : train (15.76/1.46)
|   |   |   |   |   |   |   |   |   featureP >= 0.62
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.56
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.56
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 145.34
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.24 : bus (33.57/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.78 : bus (15.9/0.49)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.78 : bus (29.41/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.9 : train (0.73/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.41 : train (0.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 145.34
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 155.45 : bus (21.76/10.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 155.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean < 3.41 : bus (3.11/1.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 3.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.08 : bus (14.95/0.81)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.97 : bus (43.75/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.97 : bus (3.07/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.52 : bus (4.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : bus (0.34/0.14)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.56 : bus (21.55/5.55)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.56 : bus (37.02/12.48)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.89
|   |   |   |   |   |   |   |   |   featureC < 3.31 : car (29.88/10.7)
|   |   |   |   |   |   |   |   |   featureC >= 3.31 : bus (12.64/5.12)
|   |   |   |   |   |   speed25Quantile >= 1.67
|   |   |   |   |   |   |   trajectorySimilarityTrain < 554.34
|   |   |   |   |   |   |   |   featureQ < 0.22 : train (7.13/0)
|   |   |   |   |   |   |   |   featureQ >= 0.22
|   |   |   |   |   |   |   |   |   featureI < 1.32
|   |   |   |   |   |   |   |   |   |   featureE < 0.43 : bus (29.82/7.98)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.43
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.76
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.2 : train (0.61/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.48 : bus (6.31/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.48 : bus (36.48/0.22)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.76 : train (0.83/0.44)
|   |   |   |   |   |   |   |   |   featureI >= 1.32 : train (2.7/0.57)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 554.34
|   |   |   |   |   |   |   |   featureD < 0.88
|   |   |   |   |   |   |   |   |   featureI < 0.48
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 537.38
|   |   |   |   |   |   |   |   |   |   |   featureL < 1.23
|   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 0.86 : tram (4.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 0.86 : tram (39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.08 : stationary (0.5/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : train (0.94/0.4)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 1.23 : tram (19.93/2.38)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 537.38 : bus (28.17/2.83)
|   |   |   |   |   |   |   |   |   featureI >= 0.48 : bus (20.21/3.14)
|   |   |   |   |   |   |   |   featureD >= 0.88 : car (22.78/0.85)
|   |   |   |   highSpeedPointRatio >= 0.19
|   |   |   |   |   featureJ < 3.74
|   |   |   |   |   |   trajectorySimilarityTram < 180.29
|   |   |   |   |   |   |   featureB < 0.01 : train (5.19/2.21)
|   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   |   |   |   speedMax < 18.3
|   |   |   |   |   |   |   |   |   |   featureD < 0.34
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.1 : train (1.68/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.13 : tram (2.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.17 : tram (2.67/0.67)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 0.5 : train (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 1.21 : tram (133/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 1.21 : tram (30.67/0.67)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.34 : train (1.68/0.08)
|   |   |   |   |   |   |   |   |   speedMax >= 18.3 : train (1.85/0)
|   |   |   |   |   |   |   |   featureA >= 0.04 : tram (19.34/8.89)
|   |   |   |   |   |   trajectorySimilarityTram >= 180.29
|   |   |   |   |   |   |   featureU < 0.33
|   |   |   |   |   |   |   |   featureJ < 1.69
|   |   |   |   |   |   |   |   |   featureK < 0.15 : train (19.25/6.26)
|   |   |   |   |   |   |   |   |   featureK >= 0.15
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 188.6 : train (10.77/4.2)
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 188.6
|   |   |   |   |   |   |   |   |   |   |   featureP < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.06 : train (32.02/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.06 : train (201.05/0)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.46 : train (24.5/5.42)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 248.26 : train (2.22/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 248.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.32 : train (96.34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.51 : train (36.43/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.51 : train (19/1.34)
|   |   |   |   |   |   |   |   featureJ >= 1.69
|   |   |   |   |   |   |   |   |   featureJ < 2.8
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 87.97 : bus (9.8/3.33)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 87.97
|   |   |   |   |   |   |   |   |   |   |   featureM < 0.14 : bus (2.86/0)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.28 : train (24.91/1.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.28 : train (25.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.4 : train (9.95/0.95)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.57 : train (4.27/1.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.57 : train (36.95/0)
|   |   |   |   |   |   |   |   |   featureJ >= 2.8 : bus (15.09/7.39)
|   |   |   |   |   |   |   featureU >= 0.33
|   |   |   |   |   |   |   |   speed95Quantile < 19.84
|   |   |   |   |   |   |   |   |   featureR < 0.25 : train (16.96/3.2)
|   |   |   |   |   |   |   |   |   featureR >= 0.25
|   |   |   |   |   |   |   |   |   |   featureC < 6.66
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.99
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 59.55 : train (10.79/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 59.55 : bus (32.36/7.36)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.99 : bus (29.12/2.75)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : car (28.73/13.73)
|   |   |   |   |   |   |   |   |   |   featureC >= 6.66 : train (18.77/1.59)
|   |   |   |   |   |   |   |   speed95Quantile >= 19.84
|   |   |   |   |   |   |   |   |   featureC < 2.38 : train (90.63/0)
|   |   |   |   |   |   |   |   |   featureC >= 2.38 : train (14.71/4.39)
|   |   |   |   |   featureJ >= 3.74
|   |   |   |   |   |   featureP < 1.62
|   |   |   |   |   |   |   featureR < 0.37 : train (2.16/0)
|   |   |   |   |   |   |   featureR >= 0.37
|   |   |   |   |   |   |   |   featureS < 0.22 : car (79.62/0)
|   |   |   |   |   |   |   |   featureS >= 0.22 : car (20.87/0.87)
|   |   |   |   |   |   featureP >= 1.62 : train (1.3/-0)
|   |   featureT >= 0.28
|   |   |   trajectorySimilarityBus < 170.01
|   |   |   |   maximumTravelDistance < 12.7
|   |   |   |   |   speedMean < 1.67
|   |   |   |   |   |   featureA < 0.34
|   |   |   |   |   |   |   featureM < 1.45 : bus (25/0)
|   |   |   |   |   |   |   featureM >= 1.45
|   |   |   |   |   |   |   |   featureB < 0.04 : bus (7.9/3.87)
|   |   |   |   |   |   |   |   featureB >= 0.04 : car (33.2/2.41)
|   |   |   |   |   |   featureA >= 0.34
|   |   |   |   |   |   |   featureJ < 3.67 : stationary (34.98/15.98)
|   |   |   |   |   |   |   featureJ >= 3.67 : walk (34.79/16.48)
|   |   |   |   |   speedMean >= 1.67
|   |   |   |   |   |   featureJ < 1.43
|   |   |   |   |   |   |   featureE < 0.65
|   |   |   |   |   |   |   |   featureM < 1.88 : car (17.8/6.8)
|   |   |   |   |   |   |   |   featureM >= 1.88
|   |   |   |   |   |   |   |   |   speed50Quantile < 8.78
|   |   |   |   |   |   |   |   |   |   featureU < 0.63 : tram (1/0)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.63 : car (64.77/0)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 8.78 : car (2.02/1)
|   |   |   |   |   |   |   featureE >= 0.65 : bus (27.59/4)
|   |   |   |   |   |   featureJ >= 1.43
|   |   |   |   |   |   |   featureP < 6.32
|   |   |   |   |   |   |   |   featureS < 0.82
|   |   |   |   |   |   |   |   |   featureG < 0.04 : car (2/0)
|   |   |   |   |   |   |   |   |   featureG >= 0.04
|   |   |   |   |   |   |   |   |   |   featureE < 0.93
|   |   |   |   |   |   |   |   |   |   |   featureI < 1.82
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.42 : bus (20.2/2.2)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 6.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.4 : bus (8.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.4 : bus (57/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.03 : bus (174.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 6.38 : bus (31.79/1.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.95 : bus (13.39/1)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 1.82 : bus (13/2)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.93 : car (1.99/0.4)
|   |   |   |   |   |   |   |   featureS >= 0.82
|   |   |   |   |   |   |   |   |   featureJ < 3.15
|   |   |   |   |   |   |   |   |   |   featureR < 0.66
|   |   |   |   |   |   |   |   |   |   |   speedMax < 11.84
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 3.71
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.83 : car (15.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 6.5 : bus (34.01/0.94)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 6.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.6
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speed25Quantile < 7.02 : bus (37.21/4.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speed25Quantile >= 7.02 : car (6.2/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.6 : car (11.22/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 3.71 : car (7.28/0)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 11.84 : car (15.06/0.02)
|   |   |   |   |   |   |   |   |   |   featureR >= 0.66
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.56
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.25
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 516.13 : tram (1.02/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 516.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.89 : bus (55.98/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.89 : bus (16.59/0.39)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.1 : car (0.2/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.25 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.56
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.6 : bus (22.99/1.79)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.6 : car (35.98/15.2)
|   |   |   |   |   |   |   |   |   featureJ >= 3.15
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.71
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.59
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.74 : bus (1.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.74
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.88 : bus (66.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.88 : bus (37.57/0.2)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 5.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.42 : bus (14.2/5.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.64 : bus (15.79/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.64 : bus (28.38/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 5.97 : car (2.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.12 : bus (3.39/0.39)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.12 : bus (50.38/0)
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.71 : bike (2.1/1.09)
|   |   |   |   |   |   |   featureP >= 6.32 : bike (15.59/0)
|   |   |   |   maximumTravelDistance >= 12.7
|   |   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   |   featureC < 7.19
|   |   |   |   |   |   |   featureD < 0.73
|   |   |   |   |   |   |   |   featureU < 0.79
|   |   |   |   |   |   |   |   |   speedMean < 9.7
|   |   |   |   |   |   |   |   |   |   featureF < 0.26
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.44 : car (31/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.44 : car (10.53/4.53)
|   |   |   |   |   |   |   |   |   |   featureF >= 0.26
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.39
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 12.6 : bus (17.49/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 12.6 : car (34.97/16.65)
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.39 : car (18.51/2.34)
|   |   |   |   |   |   |   |   |   speedMean >= 9.7
|   |   |   |   |   |   |   |   |   |   featureR < 0.4 : car (2.64/0.37)
|   |   |   |   |   |   |   |   |   |   featureR >= 0.4
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 14.17 : car (7.1/3.09)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 14.17
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.78
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.28 : bus (5.21/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.28 : bus (53.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.13 : bus (10.06/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.78 : walk (0.58/0)
|   |   |   |   |   |   |   |   featureU >= 0.79
|   |   |   |   |   |   |   |   |   speed95Quantile < 12.44 : bus (17.14/5.13)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 12.44
|   |   |   |   |   |   |   |   |   |   featureL < 2.37
|   |   |   |   |   |   |   |   |   |   |   featureP < 2.05 : car (12.63/0.21)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 2.05 : car (182.04/0)
|   |   |   |   |   |   |   |   |   |   featureL >= 2.37
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.61 : bus (31.42/15.21)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.61 : car (22/-0)
|   |   |   |   |   |   |   featureD >= 0.73
|   |   |   |   |   |   |   |   featureE < 1.06
|   |   |   |   |   |   |   |   |   featureL < 2.98
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.22
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.62 : car (1.53/0.53)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.62 : car (125.31/0)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.22 : car (33.32/12.14)
|   |   |   |   |   |   |   |   |   featureL >= 2.98
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 3.33 : car (18.66/5.25)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 3.33
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.76 : bus (99.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.76 : bus (30.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 5.79
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.27 : car (5/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 38.31 : bus (13.47/3.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 38.31
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.67 : bus (39.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.77 : bus (4.43/0.89)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.77 : bus (37.89/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 5.79 : car (20.36/6.42)
|   |   |   |   |   |   |   |   featureE >= 1.06 : car (37.12/0)
|   |   |   |   |   |   featureC >= 7.19
|   |   |   |   |   |   |   featureT < 0.36 : train (8.68/4.67)
|   |   |   |   |   |   |   featureT >= 0.36
|   |   |   |   |   |   |   |   highSpeedPointRatio < 0.65
|   |   |   |   |   |   |   |   |   featureC < 9.46 : bus (17.42/0.16)
|   |   |   |   |   |   |   |   |   featureC >= 9.46 : bus (23.63/4.44)
|   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.65
|   |   |   |   |   |   |   |   |   featureC < 17.44
|   |   |   |   |   |   |   |   |   |   featureN < 1.73 : bus (37.36/18.89)
|   |   |   |   |   |   |   |   |   |   featureN >= 1.73 : bus (27.01/-0)
|   |   |   |   |   |   |   |   |   featureC >= 17.44 : car (10.88/2.59)
|   |   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   |   featureS < 0.9 : car (19.6/2.92)
|   |   |   |   |   |   featureS >= 0.9
|   |   |   |   |   |   |   featureE < 1.31
|   |   |   |   |   |   |   |   featureE < 0.66 : car (1.55/0.75)
|   |   |   |   |   |   |   |   featureE >= 0.66
|   |   |   |   |   |   |   |   |   featureR < 1.63
|   |   |   |   |   |   |   |   |   |   featureP < 5.89
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.17
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.77
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.73 : car (34.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.73 : car (9.25/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.77 : bus (0.06/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.03 : car (14.56/0.31)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.17 : car (210.17/0)
|   |   |   |   |   |   |   |   |   |   featureP >= 5.89 : bike (0.19/0)
|   |   |   |   |   |   |   |   |   featureR >= 1.63 : bus (0.37/0.19)
|   |   |   |   |   |   |   featureE >= 1.31 : bus (1.24/0.25)
|   |   |   trajectorySimilarityBus >= 170.01
|   |   |   |   trajectorySimilarityTrain < 210.15
|   |   |   |   |   speed25Quantile < 18.95
|   |   |   |   |   |   featureL < 3.95
|   |   |   |   |   |   |   speedMax < 17.58 : bus (19.74/9.61)
|   |   |   |   |   |   |   speedMax >= 17.58 : car (29.09/3.42)
|   |   |   |   |   |   featureL >= 3.95 : bus (11.79/0.39)
|   |   |   |   |   speed25Quantile >= 18.95
|   |   |   |   |   |   featureD < 0.74
|   |   |   |   |   |   |   featureA < 0.25
|   |   |   |   |   |   |   |   featureJ < 1.89
|   |   |   |   |   |   |   |   |   featureL < 1.87 : car (0.1/0.05)
|   |   |   |   |   |   |   |   |   featureL >= 1.87
|   |   |   |   |   |   |   |   |   |   featureG < 0.23 : train (3.02/0.02)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.23 : train (38/0)
|   |   |   |   |   |   |   |   featureJ >= 1.89 : train (4.12/0.12)
|   |   |   |   |   |   |   featureA >= 0.25 : bus (0.25/0.17)
|   |   |   |   |   |   featureD >= 0.74 : car (1.54/0.71)
|   |   |   |   trajectorySimilarityTrain >= 210.15
|   |   |   |   |   featureD < 0.6
|   |   |   |   |   |   speed95Quantile < 5.68 : bus (9.53/1.41)
|   |   |   |   |   |   speed95Quantile >= 5.68
|   |   |   |   |   |   |   featureC < 6
|   |   |   |   |   |   |   |   featureE < 0.4 : car (19.83/9.83)
|   |   |   |   |   |   |   |   featureE >= 0.4 : car (30.86/1)
|   |   |   |   |   |   |   featureC >= 6 : tram (14.83/5.83)
|   |   |   |   |   featureD >= 0.6
|   |   |   |   |   |   accumulatedTravelDistance < 428.07
|   |   |   |   |   |   |   featureL < 5.1
|   |   |   |   |   |   |   |   speed95Quantile < 6.39 : bus (29.02/9.8)
|   |   |   |   |   |   |   |   speed95Quantile >= 6.39
|   |   |   |   |   |   |   |   |   featureF < 0.43 : train (14.8/5.8)
|   |   |   |   |   |   |   |   |   featureF >= 0.43
|   |   |   |   |   |   |   |   |   |   featureI < 0.17 : train (1.18/0.18)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.17
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.55 : train (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.72 : car (24.69/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.72 : car (37.84/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 1.03 : bus (0.11/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.67 : bus (0.04/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.41 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.44 : bus (0.69/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 3.18 : car (67.53/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.94 : train (2.07/1.07)
|   |   |   |   |   |   |   featureL >= 5.1 : bus (19.44/2.44)
|   |   |   |   |   |   accumulatedTravelDistance >= 428.07
|   |   |   |   |   |   |   featureI < 0.15 : car (11.52/4.1)
|   |   |   |   |   |   |   featureI >= 0.15
|   |   |   |   |   |   |   |   featureE < 1.36
|   |   |   |   |   |   |   |   |   featureC < 6.42
|   |   |   |   |   |   |   |   |   |   featureU < 1.16
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.53 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.19 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.54 : car (201.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.14 : car (14.78/1.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.04 : car (30.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.04 : car (16.42/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.45 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.91 : car (4.26/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.3 : bus (1.68/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.07 : car (355.4/0)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.68 : bus (3.52/1)
|   |   |   |   |   |   |   |   |   |   featureU >= 1.16 : car (1069.73/0)
|   |   |   |   |   |   |   |   |   featureC >= 6.42
|   |   |   |   |   |   |   |   |   |   featureB < 0.04 : car (17.44/11.34)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.04
|   |   |   |   |   |   |   |   |   |   |   featureJ < 4.42
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.79 : train (3.52/1)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.79
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.34 : car (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 3.41 : car (15.52/1.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 3.41 : car (132.94/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.42 : car (14.94/3.94)
|   |   |   |   |   |   |   |   featureE >= 1.36 : bus (6.72/1.68)
featureK >= 4.59
|   speedMax < 3.87
|   |   featureD < 2.12 : stationary (8.89/0.89)
|   |   featureD >= 2.12
|   |   |   featureU < 12.37 : walk (2168.52/0)
|   |   |   featureU >= 12.37 : bike (1.79/0)
|   speedMax >= 3.87
|   |   highSpeedPointRatio < 0.31
|   |   |   featureP < 7.28 : walk (4/0.1)
|   |   |   featureP >= 7.28
|   |   |   |   featureH < 5.14
|   |   |   |   |   featureE < 4.25
|   |   |   |   |   |   featureR < 4.02 : bike (146/0)
|   |   |   |   |   |   featureR >= 4.02
|   |   |   |   |   |   |   featureR < 4.07 : walk (0.2/0)
|   |   |   |   |   |   |   featureR >= 4.07
|   |   |   |   |   |   |   |   featureM < 18.2 : walk (0.29/0)
|   |   |   |   |   |   |   |   featureM >= 18.2 : bike (42.2/0)
|   |   |   |   |   featureE >= 4.25 : bike (7.71/3.71)
|   |   |   |   featureH >= 5.14 : bike (37.81/7.81)
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
      0.17 (    37)  featureL
      0.17 (    51)  featureC
      0.17 (    10)  lowSpeedPointRatio
      0.16 (    13)  accumulatedTravelDistance
      0.15 (    47)  featureD
      0.15 (     5)  speedVariance
      0.15 (    41)  featureJ
      0.15 (    21)  featureB
      0.15 (    37)  featureR
      0.15 (     4)  speedMin
      0.15 (    47)  featureE
      0.14 (    20)  featureO
      0.14 (    27)  featureA
      0.13 (    33)  featureM
      0.13 (    32)  featureS
      0.13 (    20)  featureN
      0.13 (    25)  featureK
      0.13 (    31)  featureU
      0.13 (    26)  featureT
      0.12 (     4)  speed50Quantile
      0.12 (    23)  featureQ
      0.09 (    32)  featureP
      0.07 (    23)  featureI
      0.07 (    14)  featureF
      0.06 (    19)  featureG
      0.05 (    19)  featureH
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

featureR < 1.85
|   featureS < 0.48
|   |   featureJ < 5.53
|   |   |   featureQ < 0.04
|   |   |   |   featureR < 0.04
|   |   |   |   |   featureI < 0.14
|   |   |   |   |   |   accumulatedTravelDistance < 7.81 : stationary (364.18/0)
|   |   |   |   |   |   accumulatedTravelDistance >= 7.81
|   |   |   |   |   |   |   speed50Quantile < 0.07
|   |   |   |   |   |   |   |   maximumTravelDistance < 3.21 : stationary (27.75/4)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 3.21 : stationary (123.33/0)
|   |   |   |   |   |   |   speed50Quantile >= 0.07 : train (14.74/6.74)
|   |   |   |   |   featureI >= 0.14 : train (11/1)
|   |   |   |   featureR >= 0.04
|   |   |   |   |   featureJ < 0.15
|   |   |   |   |   |   featureE < 0.04 : stationary (36/4)
|   |   |   |   |   |   featureE >= 0.04 : train (11/4)
|   |   |   |   |   featureJ >= 0.15 : train (30/4)
|   |   |   featureQ >= 0.04
|   |   |   |   trajectorySimilarityBus < 50.33
|   |   |   |   |   featureP < 0.61
|   |   |   |   |   |   travelDistance < 23.79
|   |   |   |   |   |   |   featureJ < 1.33
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 461.22
|   |   |   |   |   |   |   |   |   travelDistance < 0.47 : train (17.21/1.11)
|   |   |   |   |   |   |   |   |   travelDistance >= 0.47 : train (33.91/20.48)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 461.22
|   |   |   |   |   |   |   |   |   speedMax < 1.73
|   |   |   |   |   |   |   |   |   |   featureG < 0.08
|   |   |   |   |   |   |   |   |   |   |   speedMax < 0.01 : stationary (28.07/1.07)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 0.01 : train (29.97/14.8)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.08 : bus (21.22/14.22)
|   |   |   |   |   |   |   |   |   speedMax >= 1.73 : bus (10.82/5.82)
|   |   |   |   |   |   |   featureJ >= 1.33
|   |   |   |   |   |   |   |   maximumTravelDistance < 1.63 : stationary (38.1/1.63)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 1.63 : stationary (26.46/10.14)
|   |   |   |   |   |   travelDistance >= 23.79
|   |   |   |   |   |   |   featureA < 0.03
|   |   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   |   featureR < 0.06 : train (3.57/1.42)
|   |   |   |   |   |   |   |   |   featureR >= 0.06
|   |   |   |   |   |   |   |   |   |   featureD < 0.09 : train (7.47/0.47)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.09 : train (45.27/0)
|   |   |   |   |   |   |   |   speedMin >= 0.01 : tram (16.24/5.24)
|   |   |   |   |   |   |   featureA >= 0.03
|   |   |   |   |   |   |   |   featureC < 3.12
|   |   |   |   |   |   |   |   |   featureL < 0.52 : bus (37.2/20)
|   |   |   |   |   |   |   |   |   featureL >= 0.52
|   |   |   |   |   |   |   |   |   |   featureQ < 0.19 : bus (5/0)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.19
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.26 : train (19.41/0.41)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.26 : train (23.87/6.84)
|   |   |   |   |   |   |   |   featureC >= 3.12
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 952.86
|   |   |   |   |   |   |   |   |   |   featureD < 0.1 : stationary (1.01/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.1
|   |   |   |   |   |   |   |   |   |   |   featureJ < 3.5
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 0.72 : bus (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 0.72 : bus (11.01/0.5)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.5 : train (0.5/-0)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 952.86 : stationary (9.54/4.29)
|   |   |   |   |   featureP >= 0.61
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   featureF < 0.04 : car (15/7)
|   |   |   |   |   |   |   featureF >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   featureB < 0.23
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.54
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.33
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 28.09 : train (3.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 28.09
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.27 : bus (34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.27 : bus (6.55/2.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.41 : bus (4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.35 : bus (2.46/0.46)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.35 : bus (45/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.33 : train (2.16/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.61
|   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.15 : train (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.95 : bus (74.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.95 : bus (1.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.81 : bus (1.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.61 : bus (8.96/0.96)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.54 : bus (3.17/2.12)
|   |   |   |   |   |   |   |   |   featureB >= 0.23 : car (3/-0)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.91
|   |   |   |   |   |   |   |   |   |   featureE < 0.11 : car (7/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.11
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.87
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.18 : bus (3.14/1.14)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.18 : bus (37.87/1.58)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.87 : bus (7.93/5.36)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.91 : train (6.33/0.11)
|   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   stationaryPointRatio < 0.03
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (11.58/0.56)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 540.91 : bus (36.83/4.29)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.03 : stationary (15.78/3.78)
|   |   |   |   trajectorySimilarityBus >= 50.33
|   |   |   |   |   featureJ < 3.72
|   |   |   |   |   |   speed50Quantile < 2.57
|   |   |   |   |   |   |   featureI < 0.06
|   |   |   |   |   |   |   |   featureE < 0.04 : stationary (35.8/0)
|   |   |   |   |   |   |   |   featureE >= 0.04
|   |   |   |   |   |   |   |   |   featureK < 0.27 : train (34.25/1.17)
|   |   |   |   |   |   |   |   |   featureK >= 0.27 : stationary (10.7/2.52)
|   |   |   |   |   |   |   featureI >= 0.06
|   |   |   |   |   |   |   |   featureO < 0.35
|   |   |   |   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.3 : train (10.74/3.11)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.3
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.19
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.06 : train (19.48/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.06 : train (85.23/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.19 : train (18.56/2.12)
|   |   |   |   |   |   |   |   |   featureA >= 0.11 : train (7.39/3.7)
|   |   |   |   |   |   |   |   featureO >= 0.35
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.43 : car (39.16/20.99)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.43
|   |   |   |   |   |   |   |   |   |   featureA < 0.07 : train (29.23/0.18)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.07 : train (12.24/3.43)
|   |   |   |   |   |   speed50Quantile >= 2.57
|   |   |   |   |   |   |   featureD < 0.34
|   |   |   |   |   |   |   |   featureM < 0.62
|   |   |   |   |   |   |   |   |   featureG < 0.04 : train (15.75/7.21)
|   |   |   |   |   |   |   |   |   featureG >= 0.04
|   |   |   |   |   |   |   |   |   |   speedMedian < 10.09
|   |   |   |   |   |   |   |   |   |   |   featureJ < 0.5 : tram (17.68/8.68)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   speedMean < 9.86
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.1 : stationary (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.04 : train (30.87/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.04 : train (12.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 9.86 : tram (1.03/0.03)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 10.09
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.08 : train (1.65/0.27)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.05 : train (1.37/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.05 : train (111.12/0)
|   |   |   |   |   |   |   |   featureM >= 0.62
|   |   |   |   |   |   |   |   |   speedMax < 17.3
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 279.38
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.18 : train (9.52/3)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.18
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.06 : tram (90/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.06 : stationary (0.61/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (2.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.83 : tram (7.02/1.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.18 : tram (45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.18 : train (0.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.32 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 279.38
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.3 : train (48.8/0)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.3 : train (11.39/0.24)
|   |   |   |   |   |   |   |   |   speedMax >= 17.3
|   |   |   |   |   |   |   |   |   |   featureD < 0.3 : train (97.53/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.3 : train (10.71/0.43)
|   |   |   |   |   |   |   featureD >= 0.34
|   |   |   |   |   |   |   |   featureU < 0.3
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.09 : bus (2.32/0.26)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.09
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 101.46 : bus (2.34/0.27)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 101.46
|   |   |   |   |   |   |   |   |   |   |   featureC < 2.78
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.22 : train (30.11/2.04)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.22 : train (36.66/0.41)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 2.78
|   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.2 : train (25.07/3.67)
|   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.2 : train (22.63/0)
|   |   |   |   |   |   |   |   featureU >= 0.3
|   |   |   |   |   |   |   |   |   speed95Quantile < 17.64
|   |   |   |   |   |   |   |   |   |   featureD < 0.74
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (7/2)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01 : bus (39.29/5.14)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.74 : car (5.64/2.64)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 17.64
|   |   |   |   |   |   |   |   |   |   featureI < 2.25
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.34 : train (8.52/1.47)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.01 : train (39.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.01 : train (2.84/0.21)
|   |   |   |   |   |   |   |   |   |   featureI >= 2.25 : bus (0.42/0)
|   |   |   |   |   featureJ >= 3.72 : car (76/-0)
|   |   featureJ >= 5.53
|   |   |   featureM < 1.65
|   |   |   |   travelDistance < 79.43 : walk (4.04/0.02)
|   |   |   |   travelDistance >= 79.43
|   |   |   |   |   featureH < 4.72 : bike (620.98/0)
|   |   |   |   |   featureH >= 4.72
|   |   |   |   |   |   featureB < 0.1 : bike (7.98/3.98)
|   |   |   |   |   |   featureB >= 0.1 : bike (195/0)
|   |   |   featureM >= 1.65 : car (14/0)
|   featureS >= 0.48
|   |   travelDistance < 374.76
|   |   |   speed95Quantile < 2.77
|   |   |   |   featureJ < 4.01
|   |   |   |   |   speedMax < 1.98 : car (33.38/23.23)
|   |   |   |   |   speedMax >= 1.98 : car (18.31/8.67)
|   |   |   |   featureJ >= 4.01
|   |   |   |   |   accumulatedTravelDistance < 24.01 : bus (9.15/4.09)
|   |   |   |   |   accumulatedTravelDistance >= 24.01 : walk (31.52/0.44)
|   |   |   speed95Quantile >= 2.77
|   |   |   |   featureJ < 1.32
|   |   |   |   |   speedMin < 0.03
|   |   |   |   |   |   travelDistance < 86.66 : bus (23.08/10.98)
|   |   |   |   |   |   travelDistance >= 86.66
|   |   |   |   |   |   |   featureG < 0.53
|   |   |   |   |   |   |   |   featureS < 0.57 : car (9.96/1.96)
|   |   |   |   |   |   |   |   featureS >= 0.57
|   |   |   |   |   |   |   |   |   featureJ < 0.93 : car (14.39/0.2)
|   |   |   |   |   |   |   |   |   featureJ >= 0.93 : car (35.59/0)
|   |   |   |   |   |   |   featureG >= 0.53 : car (32.37/4.98)
|   |   |   |   |   speedMin >= 0.03 : car (34.62/18.17)
|   |   |   |   featureJ >= 1.32
|   |   |   |   |   trajectorySimilarityTrain < 991.84
|   |   |   |   |   |   featureA < 1.2
|   |   |   |   |   |   |   featureT < 0.65
|   |   |   |   |   |   |   |   featureL < 3.55
|   |   |   |   |   |   |   |   |   featureT < 0.37
|   |   |   |   |   |   |   |   |   |   featureD < 0.95
|   |   |   |   |   |   |   |   |   |   |   featureL < 1.3 : car (13.46/6)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 1.3
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 0.03 : bus (11.3/3.2)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.22
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.06 : bike (0.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.35 : bus (39.66/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.35 : tram (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.2 : bus (174.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.2 : car (0.22/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.22 : bus (11.97/1.97)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.95 : car (7.44/1.83)
|   |   |   |   |   |   |   |   |   featureT >= 0.37
|   |   |   |   |   |   |   |   |   |   speedMax < 14.43
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 2.75 : car (10.72/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 2.75 : bus (37.52/14.68)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.69 : bus (13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.36 : car (37.8/18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.61 : bus (37/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.61 : car (12/6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.17 : car (23.08/8.43)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 308.1 : bus (22.92/6.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 308.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 2.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.64 : bus (27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.69 : bus (16.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.69 : bus (24.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.29 : car (0.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 2.1 : car (0.32/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.92 : car (0.32/0)
|   |   |   |   |   |   |   |   |   |   speedMax >= 14.43 : car (16.68/2.29)
|   |   |   |   |   |   |   |   featureL >= 3.55
|   |   |   |   |   |   |   |   |   featureJ < 4.53
|   |   |   |   |   |   |   |   |   |   featureI < 1.31 : bus (105.98/0)
|   |   |   |   |   |   |   |   |   |   featureI >= 1.31 : bus (21.15/0.92)
|   |   |   |   |   |   |   |   |   featureJ >= 4.53 : bus (14.46/0.46)
|   |   |   |   |   |   |   featureT >= 0.65
|   |   |   |   |   |   |   |   featureP < 3.18 : bus (9.69/0)
|   |   |   |   |   |   |   |   featureP >= 3.18
|   |   |   |   |   |   |   |   |   featureM < 4.54 : car (38.44/1.23)
|   |   |   |   |   |   |   |   |   featureM >= 4.54
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 61.58 : bus (24.99/4.64)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 61.58
|   |   |   |   |   |   |   |   |   |   |   featureL < 4.6 : car (29.71/0.14)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 4.6 : car (11.57/4.57)
|   |   |   |   |   |   featureA >= 1.2 : bus (20.75/7.38)
|   |   |   |   |   trajectorySimilarityTrain >= 991.84
|   |   |   |   |   |   featureA < 0.43
|   |   |   |   |   |   |   featureU < 0.59 : bus (26.15/8.15)
|   |   |   |   |   |   |   featureU >= 0.59
|   |   |   |   |   |   |   |   featureL < 3.06
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.25
|   |   |   |   |   |   |   |   |   |   featureI < 0.11 : car (3.13/1.07)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.11
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.29 : car (9.6/0.47)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.74 : car (101.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.74 : car (11.53/0.07)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.25
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.63 : car (37.14/4.18)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.63 : bus (5.16/1.15)
|   |   |   |   |   |   |   |   featureL >= 3.06
|   |   |   |   |   |   |   |   |   featureM < 3.11 : bus (12.18/0)
|   |   |   |   |   |   |   |   |   featureM >= 3.11
|   |   |   |   |   |   |   |   |   |   travelDistance < 371.05
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.81 : car (16.94/2.6)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.81 : car (33.53/0)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 371.05 : bus (2.1/0.08)
|   |   |   |   |   |   featureA >= 0.43
|   |   |   |   |   |   |   headingVariance < 10.23
|   |   |   |   |   |   |   |   speedVariance < 18.44
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.41 : car (1.11/0.11)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.41
|   |   |   |   |   |   |   |   |   |   featureO < 1.45 : train (1.25/0.69)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.45 : bus (38.88/0.88)
|   |   |   |   |   |   |   |   speedVariance >= 18.44 : train (4.46/1.38)
|   |   |   |   |   |   |   headingVariance >= 10.23 : car (11.15/1.08)
|   |   travelDistance >= 374.76
|   |   |   trajectorySimilarityTrain < 281.19
|   |   |   |   speed95Quantile < 23.2
|   |   |   |   |   trajectorySimilarityBus < 529.04
|   |   |   |   |   |   featureE < 0.95
|   |   |   |   |   |   |   accumulatedTravelDistance < 636.54
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 39.3 : bus (34.42/0.98)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 39.3
|   |   |   |   |   |   |   |   |   speed75Quantile < 11.56 : bus (9.39/4.27)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 11.56
|   |   |   |   |   |   |   |   |   |   featureR < 0.71 : car (25.18/2.61)
|   |   |   |   |   |   |   |   |   |   featureR >= 0.71 : bus (30.09/12.55)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 636.54
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 126.28 : train (4.17/2.14)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 126.28
|   |   |   |   |   |   |   |   |   featureE < 0.51 : train (1.52/0.99)
|   |   |   |   |   |   |   |   |   featureE >= 0.51
|   |   |   |   |   |   |   |   |   |   featureL < 2.51 : bus (10.76/1.76)
|   |   |   |   |   |   |   |   |   |   featureL >= 2.51
|   |   |   |   |   |   |   |   |   |   |   featureS < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.3 : train (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.29 : bus (49.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.29 : bus (9.15/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.43 : bus (0.79/0.12)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 1.24 : bus (34.91/0.85)
|   |   |   |   |   |   featureE >= 0.95 : car (22.3/1.04)
|   |   |   |   |   trajectorySimilarityBus >= 529.04 : car (26.24/3.71)
|   |   |   |   speed95Quantile >= 23.2
|   |   |   |   |   featureJ < 2.6
|   |   |   |   |   |   featureP < 2.52
|   |   |   |   |   |   |   featureJ < 1.58
|   |   |   |   |   |   |   |   featureC < 3.24
|   |   |   |   |   |   |   |   |   featureA < 0.1 : train (45.26/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.1 : train (8.07/0.07)
|   |   |   |   |   |   |   |   featureC >= 3.24 : train (2.31/0.31)
|   |   |   |   |   |   |   featureJ >= 1.58 : train (10.15/1.08)
|   |   |   |   |   |   featureP >= 2.52 : car (2.72/0.12)
|   |   |   |   |   featureJ >= 2.6 : car (28.04/1.56)
|   |   |   trajectorySimilarityTrain >= 281.19
|   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   featureL < 4.17
|   |   |   |   |   |   featureE < 0.43
|   |   |   |   |   |   |   featureM < 3.01
|   |   |   |   |   |   |   |   speed75Quantile < 11.64 : tram (23.44/6.01)
|   |   |   |   |   |   |   |   speed75Quantile >= 11.64
|   |   |   |   |   |   |   |   |   featureA < 0.08 : bus (11.49/3.49)
|   |   |   |   |   |   |   |   |   featureA >= 0.08 : car (37.74/7.74)
|   |   |   |   |   |   |   featureM >= 3.01 : train (16/8)
|   |   |   |   |   |   featureE >= 0.43
|   |   |   |   |   |   |   maximumTravelDistance < 16.51
|   |   |   |   |   |   |   |   speed95Quantile < 15.56
|   |   |   |   |   |   |   |   |   featureK < 1.75
|   |   |   |   |   |   |   |   |   |   featureL < 3.41
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 70.27
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.81 : bus (8.4/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.76 : bus (3.17/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.43 : car (13.15/2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.43 : car (29.74/0.04)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 70.27
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.72 : tram (0.6/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 12.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.32 : car (49.86/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.32 : car (16.84/0.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 12.5 : bike (0.06/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.24 : train (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.84 : car (101.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.84 : car (3.12/0.12)
|   |   |   |   |   |   |   |   |   |   featureL >= 3.41 : bus (13.71/5.24)
|   |   |   |   |   |   |   |   |   featureK >= 1.75 : bus (27.32/13.97)
|   |   |   |   |   |   |   |   speed95Quantile >= 15.56 : bus (36.38/18.08)
|   |   |   |   |   |   |   maximumTravelDistance >= 16.51
|   |   |   |   |   |   |   |   featureE < 0.81
|   |   |   |   |   |   |   |   |   featureL < 3.64
|   |   |   |   |   |   |   |   |   |   featureU < 0.83 : car (26.36/11.39)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.83
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.35 : car (242.83/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.35
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 1.02
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 3.29 : car (3.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 3.29 : car (39.9/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.36 : bus (1.22/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1.02 : bus (0.49/-0)
|   |   |   |   |   |   |   |   |   featureL >= 3.64 : bus (15.68/0.98)
|   |   |   |   |   |   |   |   featureE >= 0.81
|   |   |   |   |   |   |   |   |   speed95Quantile < 23.66
|   |   |   |   |   |   |   |   |   |   featureC < 7.12
|   |   |   |   |   |   |   |   |   |   |   featureD < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.55 : car (31.46/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.55 : car (375.34/0)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 1.13 : car (26.73/0.49)
|   |   |   |   |   |   |   |   |   |   featureC >= 7.12
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.4 : car (8.91/2.91)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.4 : car (50/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 23.66 : bus (2.04/0.04)
|   |   |   |   |   featureL >= 4.17
|   |   |   |   |   |   featureT < 0.43 : train (6.67/0.67)
|   |   |   |   |   |   featureT >= 0.43
|   |   |   |   |   |   |   featureC < 14.69
|   |   |   |   |   |   |   |   headingVariance < 1.22
|   |   |   |   |   |   |   |   |   featureL < 4.47 : bus (17.02/0.41)
|   |   |   |   |   |   |   |   |   featureL >= 4.47 : bus (47.44/0)
|   |   |   |   |   |   |   |   headingVariance >= 1.22
|   |   |   |   |   |   |   |   |   featureC < 11.88 : bus (35.21/7.26)
|   |   |   |   |   |   |   |   |   featureC >= 11.88 : car (6/-0)
|   |   |   |   |   |   |   featureC >= 14.69 : car (14.67/1.67)
|   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   featureO < 1.33 : train (16.14/10.21)
|   |   |   |   |   featureO >= 1.33
|   |   |   |   |   |   featureA < 0.46
|   |   |   |   |   |   |   featureP < 2.06 : tram (0.95/0)
|   |   |   |   |   |   |   featureP >= 2.06
|   |   |   |   |   |   |   |   featureU < 1.18
|   |   |   |   |   |   |   |   |   featureO < 1.95
|   |   |   |   |   |   |   |   |   |   featureG < 1.44 : car (170.93/0)
|   |   |   |   |   |   |   |   |   |   featureG >= 1.44 : car (16.24/0.24)
|   |   |   |   |   |   |   |   |   featureO >= 1.95 : car (8.66/0.95)
|   |   |   |   |   |   |   |   featureU >= 1.18 : car (714.55/0)
|   |   |   |   |   |   featureA >= 0.46 : car (28.63/10.68)
featureR >= 1.85
|   featureD < 4.13
|   |   featureU < 2.93
|   |   |   featureK < 5.86
|   |   |   |   featureT < 1.13
|   |   |   |   |   travelDistance < 91.22 : walk (19.89/4.89)
|   |   |   |   |   travelDistance >= 91.22 : bus (35.11/1)
|   |   |   |   featureT >= 1.13 : stationary (8/4)
|   |   |   featureK >= 5.86 : walk (64/0)
|   |   featureU >= 2.93
|   |   |   featureC < 65.3
|   |   |   |   speed95Quantile < 2.99 : walk (4.07/0.04)
|   |   |   |   speed95Quantile >= 2.99
|   |   |   |   |   speed95Quantile < 9.68
|   |   |   |   |   |   featureN < 3.27 : bike (3.97/0.97)
|   |   |   |   |   |   featureN >= 3.27 : bike (175.95/0)
|   |   |   |   |   speed95Quantile >= 9.68 : bus (1.02/0.02)
|   |   |   featureC >= 65.3 : bus (14/4)
|   featureD >= 4.13
|   |   featureE < 4.25
|   |   |   featureO < 9.44 : walk (89/0)
|   |   |   featureO >= 9.44 : bike (17/0)
|   |   featureE >= 4.25
|   |   |   speedMean < 3.08 : walk (1498.78/0)
|   |   |   speedMean >= 3.08 : bike (3.22/0.22)

Size of the tree : 477


RandomTree
==========

featureJ < 6.91
|   featureD < 0.4
|   |   featureK < 0.09
|   |   |   featureA < 0.01
|   |   |   |   featureD < 0.04
|   |   |   |   |   speed75Quantile < 0.21
|   |   |   |   |   |   featureR < 0.04
|   |   |   |   |   |   |   featureC < 0.1 : stationary (249.17/0)
|   |   |   |   |   |   |   featureC >= 0.1
|   |   |   |   |   |   |   |   featureL < 0.08 : stationary (28/1)
|   |   |   |   |   |   |   |   featureL >= 0.08 : stationary (259.77/0)
|   |   |   |   |   |   featureR >= 0.04 : stationary (20.66/0.97)
|   |   |   |   |   speed75Quantile >= 0.21 : stationary (16.4/3.03)
|   |   |   |   featureD >= 0.04
|   |   |   |   |   featureJ < 0.09 : stationary (25/0)
|   |   |   |   |   featureJ >= 0.09 : train (38/12)
|   |   |   featureA >= 0.01 : car (20/13)
|   |   featureK >= 0.09
|   |   |   speedMean < 5.33
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   featureR < 0.25
|   |   |   |   |   |   featureN < 0.36
|   |   |   |   |   |   |   featureE < 0.23
|   |   |   |   |   |   |   |   speedVariance < 13.44
|   |   |   |   |   |   |   |   |   speedMedian < 2.49
|   |   |   |   |   |   |   |   |   |   featureC < 1.65
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.71 : train (34.27/6.26)
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.71 : train (35.41/7.27)
|   |   |   |   |   |   |   |   |   |   featureC >= 1.65
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.17 : car (5.53/0.53)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 875.58 : bus (25.87/5.87)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 875.58 : train (18.32/6.29)
|   |   |   |   |   |   |   |   |   speedMedian >= 2.49 : tram (18.97/8.97)
|   |   |   |   |   |   |   |   speedVariance >= 13.44
|   |   |   |   |   |   |   |   |   featureH < 0.18
|   |   |   |   |   |   |   |   |   |   featureG < 0.08 : train (14.22/0.74)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.08 : train (31.06/0)
|   |   |   |   |   |   |   |   |   featureH >= 0.18 : train (17.21/2.19)
|   |   |   |   |   |   |   featureE >= 0.23 : bus (15.3/2)
|   |   |   |   |   |   featureN >= 0.36 : car (22.09/5.09)
|   |   |   |   |   featureR >= 0.25
|   |   |   |   |   |   featureP < 1.29
|   |   |   |   |   |   |   speedVariance < 5.54 : bus (35.46/18.13)
|   |   |   |   |   |   |   speedVariance >= 5.54
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 59.31
|   |   |   |   |   |   |   |   |   featureJ < 0.78 : car (5.07/1.07)
|   |   |   |   |   |   |   |   |   featureJ >= 0.78
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 312.17
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 4.89
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.14 : stationary (0.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 0.85 : bus (17.53/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.59 : bus (16.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.59 : bus (30.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.91 : bus (2.35/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : car (0.53/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 4.89 : train (2.23/1.18)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.94 : car (1.35/0.35)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 312.17 : train (1.06/0.03)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 59.31 : bus (16.12/7.97)
|   |   |   |   |   |   featureP >= 1.29
|   |   |   |   |   |   |   featureL < 1.76
|   |   |   |   |   |   |   |   featureQ < 0.36 : car (33.19/5.19)
|   |   |   |   |   |   |   |   featureQ >= 0.36 : car (10.3/3.3)
|   |   |   |   |   |   |   featureL >= 1.76 : bus (7.09/2.09)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   stationaryPointRatio < 0.77
|   |   |   |   |   |   featureH < 0.33
|   |   |   |   |   |   |   speed50Quantile < 0.1 : train (7.86/3.19)
|   |   |   |   |   |   |   speed50Quantile >= 0.1
|   |   |   |   |   |   |   |   featureA < 0.06 : train (24.55/6.87)
|   |   |   |   |   |   |   |   featureA >= 0.06 : stationary (37.24/2.06)
|   |   |   |   |   |   featureH >= 0.33 : stationary (28.77/4.77)
|   |   |   |   |   stationaryPointRatio >= 0.77
|   |   |   |   |   |   featureE < 0.06
|   |   |   |   |   |   |   featureC < 0.68 : train (12.39/0)
|   |   |   |   |   |   |   featureC >= 0.68
|   |   |   |   |   |   |   |   headingVariance < 2.28 : stationary (31.76/8.06)
|   |   |   |   |   |   |   |   headingVariance >= 2.28
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 8.62 : car (2.05/0.05)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 8.62
|   |   |   |   |   |   |   |   |   |   featureA < 0.07 : stationary (45.6/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.07 : stationary (27.13/0.13)
|   |   |   |   |   |   featureE >= 0.06
|   |   |   |   |   |   |   featureD < 0.17
|   |   |   |   |   |   |   |   featureS < 0.2
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 17.61 : bus (39.79/14.79)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 17.61 : train (23.87/0.45)
|   |   |   |   |   |   |   |   featureS >= 0.2 : bus (18.59/4.59)
|   |   |   |   |   |   |   featureD >= 0.17
|   |   |   |   |   |   |   |   featureM < 1.07
|   |   |   |   |   |   |   |   |   featureD < 0.27 : train (48.13/0)
|   |   |   |   |   |   |   |   |   featureD >= 0.27 : train (5.96/1.98)
|   |   |   |   |   |   |   |   featureM >= 1.07 : train (19.22/9.96)
|   |   |   speedMean >= 5.33
|   |   |   |   speedMax < 17.58
|   |   |   |   |   trajectorySimilarityTram < 283.79
|   |   |   |   |   |   featureB < 0.01 : train (7.54/2.51)
|   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   featureL < 0.44 : train (3.79/1.28)
|   |   |   |   |   |   |   featureL >= 0.44
|   |   |   |   |   |   |   |   featureL < 1.62
|   |   |   |   |   |   |   |   |   featureK < 0.62
|   |   |   |   |   |   |   |   |   |   featureD < 0.18 : tram (8.26/1.26)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.18
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.42
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.52 : tram (4.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.32 : tram (99/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.32 : tram (4.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.42
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.15 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.18 : tram (11.98/0.98)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.25 : tram (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.25 : tram (14.28/0.28)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.49 : train (0.42/0)
|   |   |   |   |   |   |   |   |   featureK >= 0.62 : tram (8.82/1.82)
|   |   |   |   |   |   |   |   featureL >= 1.62 : train (0.84/0)
|   |   |   |   |   trajectorySimilarityTram >= 283.79
|   |   |   |   |   |   featureP < 0.98
|   |   |   |   |   |   |   featureK < 0.44
|   |   |   |   |   |   |   |   featureL < 0.29 : train (3.84/0.73)
|   |   |   |   |   |   |   |   featureL >= 0.29 : train (112.49/0)
|   |   |   |   |   |   |   featureK >= 0.44 : train (28.31/4.57)
|   |   |   |   |   |   featureP >= 0.98 : bus (27.06/13.06)
|   |   |   |   speedMax >= 17.58
|   |   |   |   |   featureF < 0.08 : train (32.13/2.78)
|   |   |   |   |   featureF >= 0.08
|   |   |   |   |   |   featureO < 0.59
|   |   |   |   |   |   |   featureK < 0.76
|   |   |   |   |   |   |   |   featureU < 0.18
|   |   |   |   |   |   |   |   |   featureL < 0.26 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   featureL >= 0.26 : train (133.61/0)
|   |   |   |   |   |   |   |   featureU >= 0.18
|   |   |   |   |   |   |   |   |   featureT < 0.08 : train (1.87/0.17)
|   |   |   |   |   |   |   |   |   featureT >= 0.08 : train (47/0)
|   |   |   |   |   |   |   featureK >= 0.76 : train (4.35/0.35)
|   |   |   |   |   |   featureO >= 0.59 : train (24.74/1.39)
|   featureD >= 0.4
|   |   speed50Quantile < 9.39
|   |   |   speed95Quantile < 2
|   |   |   |   speed25Quantile < 0.04
|   |   |   |   |   featureA < 2.62
|   |   |   |   |   |   featureE < 0.6 : bus (33.99/7.46)
|   |   |   |   |   |   featureE >= 0.6 : car (25.6/8.03)
|   |   |   |   |   featureA >= 2.62 : walk (21.13/4.07)
|   |   |   |   speed25Quantile >= 0.04 : stationary (32.93/5.9)
|   |   |   speed95Quantile >= 2
|   |   |   |   trajectorySimilarityTrain < 951.47
|   |   |   |   |   featureS < 0.9
|   |   |   |   |   |   featureD < 1.11
|   |   |   |   |   |   |   featureC < 1.81 : train (28.41/10)
|   |   |   |   |   |   |   featureC >= 1.81
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 28.18 : train (13.44/3.38)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 28.18
|   |   |   |   |   |   |   |   |   featureL < 1.93
|   |   |   |   |   |   |   |   |   |   featureM < 2.36
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.84
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.27 : train (1.58/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.15 : car (2.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.02 : bus (87.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.02 : bus (1.34/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.97 : car (2.01/1)
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.03 : car (21.52/9.32)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.84
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.37 : bus (13.37/1.08)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.29 : bus (12.51/1.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.29 : bus (47.29/0)
|   |   |   |   |   |   |   |   |   |   featureM >= 2.36 : car (21.8/5.86)
|   |   |   |   |   |   |   |   |   featureL >= 1.93
|   |   |   |   |   |   |   |   |   |   featureD < 0.46 : bus (12.22/4.22)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.46
|   |   |   |   |   |   |   |   |   |   |   featureC < 3.59
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.41
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.98 : bus (23.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.98 : bus (47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.25 : bus (23.37/1.94)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.41 : car (1.43/0)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 3.59
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.04
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.95 : bus (130.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.95 : bus (34.43/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.04 : bus (38.94/0.43)
|   |   |   |   |   |   featureD >= 1.11 : bike (14.98/6.98)
|   |   |   |   |   featureS >= 0.9
|   |   |   |   |   |   featureT < 0.66
|   |   |   |   |   |   |   featureL < 2.42
|   |   |   |   |   |   |   |   featureL < 2.02 : car (33.43/0)
|   |   |   |   |   |   |   |   featureL >= 2.02
|   |   |   |   |   |   |   |   |   featureB < 0.03 : car (15.22/0)
|   |   |   |   |   |   |   |   |   featureB >= 0.03 : car (27.54/11.22)
|   |   |   |   |   |   |   featureL >= 2.42
|   |   |   |   |   |   |   |   featureL < 3.66
|   |   |   |   |   |   |   |   |   featureM < 4.51
|   |   |   |   |   |   |   |   |   |   featureI < 0.6
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.8 : bus (34.11/2.44)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.8 : car (12.22/6)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.6
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.46 : bus (29.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.46 : bus (22.76/1.77)
|   |   |   |   |   |   |   |   |   featureM >= 4.51 : car (12.22/2.22)
|   |   |   |   |   |   |   |   featureL >= 3.66
|   |   |   |   |   |   |   |   |   featureE < 0.95 : bus (71.1/0)
|   |   |   |   |   |   |   |   |   featureE >= 0.95 : bus (4.88/0.88)
|   |   |   |   |   |   featureT >= 0.66
|   |   |   |   |   |   |   trajectorySimilarityBus < 61.58
|   |   |   |   |   |   |   |   travelDistance < 196.52 : car (31.12/4.15)
|   |   |   |   |   |   |   |   travelDistance >= 196.52 : bus (33.35/7.94)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 61.58
|   |   |   |   |   |   |   |   featureO < 4.22
|   |   |   |   |   |   |   |   |   featureH < 0.52 : car (7.18/0.86)
|   |   |   |   |   |   |   |   |   featureH >= 0.52
|   |   |   |   |   |   |   |   |   |   featureA < 1.11
|   |   |   |   |   |   |   |   |   |   |   featureN < 1.94 : car (28.69/0)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 1.94 : car (16.08/0.22)
|   |   |   |   |   |   |   |   |   |   featureA >= 1.11 : bus (0.86/0.32)
|   |   |   |   |   |   |   |   featureO >= 4.22 : bike (8.32/-0)
|   |   |   |   trajectorySimilarityTrain >= 951.47
|   |   |   |   |   featureL < 2.74
|   |   |   |   |   |   featureU < 0.68
|   |   |   |   |   |   |   featureB < 0.06
|   |   |   |   |   |   |   |   featureS < 0.32 : train (5.13/2.4)
|   |   |   |   |   |   |   |   featureS >= 0.32
|   |   |   |   |   |   |   |   |   featureL < 2.06 : bus (35.62/10.47)
|   |   |   |   |   |   |   |   |   featureL >= 2.06 : car (19.16/3.16)
|   |   |   |   |   |   |   featureB >= 0.06 : tram (19.86/8.78)
|   |   |   |   |   |   featureU >= 0.68
|   |   |   |   |   |   |   featureQ < 0.87
|   |   |   |   |   |   |   |   speedVariance < 19.01
|   |   |   |   |   |   |   |   |   featureA < 0.21
|   |   |   |   |   |   |   |   |   |   featureE < 0.35 : tram (0.03/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.35
|   |   |   |   |   |   |   |   |   |   |   featureN < 1.1
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.52 : car (25.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.52 : car (15.8/0.06)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 1.1 : car (0.21/0.03)
|   |   |   |   |   |   |   |   |   featureA >= 0.21 : car (14.25/5.12)
|   |   |   |   |   |   |   |   speedVariance >= 19.01
|   |   |   |   |   |   |   |   |   featureQ < 0.48 : car (43.66/0)
|   |   |   |   |   |   |   |   |   featureQ >= 0.48
|   |   |   |   |   |   |   |   |   |   featureE < 0.34 : bike (0.14/0.05)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.34
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.78 : car (6.04/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.78 : car (35.94/0.05)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.41 : bus (0.09/0)
|   |   |   |   |   |   |   featureQ >= 0.87 : tram (3/1)
|   |   |   |   |   featureL >= 2.74
|   |   |   |   |   |   featureA < 0.96
|   |   |   |   |   |   |   featureM < 3.16 : bus (26.78/2.55)
|   |   |   |   |   |   |   featureM >= 3.16
|   |   |   |   |   |   |   |   maximumTravelDistance < 11.98 : bus (37.58/17.3)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 11.98 : car (37.58/1.68)
|   |   |   |   |   |   featureA >= 0.96 : bus (14.48/4.86)
|   |   speed50Quantile >= 9.39
|   |   |   speed95Quantile < 23.87
|   |   |   |   featureP < 1.39
|   |   |   |   |   featureB < 0.06
|   |   |   |   |   |   featureR < 0.45
|   |   |   |   |   |   |   featureG < 0.14 : train (4.49/2.49)
|   |   |   |   |   |   |   featureG >= 0.14 : train (37.81/2.66)
|   |   |   |   |   |   featureR >= 0.45
|   |   |   |   |   |   |   featureB < 0.03 : bus (25.73/6.07)
|   |   |   |   |   |   |   featureB >= 0.03 : train (28.61/4.32)
|   |   |   |   |   featureB >= 0.06
|   |   |   |   |   |   featureE < 0.8 : train (12.24/5.24)
|   |   |   |   |   |   featureE >= 0.8
|   |   |   |   |   |   |   featureM < 2.89 : car (10.73/3.73)
|   |   |   |   |   |   |   featureM >= 2.89 : car (52.32/0)
|   |   |   |   featureP >= 1.39
|   |   |   |   |   featureB < 0.07
|   |   |   |   |   |   trajectorySimilarityTrain < 830.76
|   |   |   |   |   |   |   featureC < 7.16
|   |   |   |   |   |   |   |   featureU < 0.92
|   |   |   |   |   |   |   |   |   featureL < 2.46 : bus (28.18/10.54)
|   |   |   |   |   |   |   |   |   featureL >= 2.46
|   |   |   |   |   |   |   |   |   |   featureG < 0.31 : bus (8.64/0.32)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.31 : bus (59.09/0)
|   |   |   |   |   |   |   |   featureU >= 0.92
|   |   |   |   |   |   |   |   |   speed50Quantile < 19.49
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.54
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 192.78
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.38 : car (36.82/1.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.38 : bus (5.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 192.78 : bus (13.28/2.25)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.54 : bus (32.54/2.23)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.45
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.6
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.52 : car (3.31/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.52 : car (85.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.6 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.45
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.7 : bus (19.77/3.31)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.7 : car (23.77/9)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 19.49
|   |   |   |   |   |   |   |   |   |   featureM < 4.77 : bus (28.78/0.55)
|   |   |   |   |   |   |   |   |   |   featureM >= 4.77 : bus (26.94/6.88)
|   |   |   |   |   |   |   featureC >= 7.16
|   |   |   |   |   |   |   |   featureR < 0.68 : tram (7.57/2.57)
|   |   |   |   |   |   |   |   featureR >= 0.68
|   |   |   |   |   |   |   |   |   featureO < 1.31 : train (3.32/0.16)
|   |   |   |   |   |   |   |   |   featureO >= 1.31
|   |   |   |   |   |   |   |   |   |   featureD < 0.63 : train (0.8/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.63
|   |   |   |   |   |   |   |   |   |   |   featureN < 1.6 : bus (18.09/0.8)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 1.6 : bus (25.09/0.8)
|   |   |   |   |   |   trajectorySimilarityTrain >= 830.76
|   |   |   |   |   |   |   featureC < 4.18
|   |   |   |   |   |   |   |   featureQ < 0.46
|   |   |   |   |   |   |   |   |   featureL < 1.62 : car (26.54/0.76)
|   |   |   |   |   |   |   |   |   featureL >= 1.62
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 68.28 : bus (25/6)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 68.28 : car (28/0)
|   |   |   |   |   |   |   |   featureQ >= 0.46
|   |   |   |   |   |   |   |   |   featureA < 0.31
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 12.41
|   |   |   |   |   |   |   |   |   |   |   featureL < 3.48
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.95 : car (7.12/1.01)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.95
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.96 : car (10.64/0.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.96 : car (66.64/0)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 3.48 : bus (8.19/-0)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 12.41
|   |   |   |   |   |   |   |   |   |   |   featureP < 2.04 : car (19.57/0.57)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 2.04
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.97 : car (255.99/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.97 : bus (0.19/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.31 : bus (4/-0)
|   |   |   |   |   |   |   featureC >= 4.18
|   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   featureC < 7
|   |   |   |   |   |   |   |   |   |   featureP < 2.49 : bus (11.61/2.03)
|   |   |   |   |   |   |   |   |   |   featureP >= 2.49 : car (34.52/1.76)
|   |   |   |   |   |   |   |   |   featureC >= 7 : train (23.13/10.61)
|   |   |   |   |   |   |   |   featureB >= 0.04
|   |   |   |   |   |   |   |   |   featureL < 4.28
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 16.18 : bus (29.61/10.03)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 16.18
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.69 : car (28.59/4.13)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 1.14
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.63 : car (13.94/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.63 : car (41.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 1.14 : car (1.38/0.38)
|   |   |   |   |   |   |   |   |   featureL >= 4.28 : bus (37.52/8.51)
|   |   |   |   |   featureB >= 0.07
|   |   |   |   |   |   featureL < 4.26
|   |   |   |   |   |   |   featureQ < 0.83 : car (366.3/0)
|   |   |   |   |   |   |   featureQ >= 0.83
|   |   |   |   |   |   |   |   featureE < 0.8 : car (21.24/4.83)
|   |   |   |   |   |   |   |   featureE >= 0.8
|   |   |   |   |   |   |   |   |   speed75Quantile < 11.39 : bus (1.01/0.01)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 11.39
|   |   |   |   |   |   |   |   |   |   featureO < 1.03 : car (1.82/0.82)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.03 : car (128.82/0)
|   |   |   |   |   |   featureL >= 4.26 : bus (23.9/7.49)
|   |   |   speed95Quantile >= 23.87
|   |   |   |   featureD < 0.73
|   |   |   |   |   featureR < 0.79
|   |   |   |   |   |   featureP < 2.55
|   |   |   |   |   |   |   featureC < 3.21
|   |   |   |   |   |   |   |   featureO < 0.37 : train (10.68/2.6)
|   |   |   |   |   |   |   |   featureO >= 0.37
|   |   |   |   |   |   |   |   |   featureG < 1.64
|   |   |   |   |   |   |   |   |   |   featureA < 0.11 : train (43.04/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.11 : train (27.04/1.04)
|   |   |   |   |   |   |   |   |   featureG >= 1.64 : tram (0.26/-0)
|   |   |   |   |   |   |   featureC >= 3.21 : train (14.15/8.85)
|   |   |   |   |   |   featureP >= 2.55 : car (4.56/-0)
|   |   |   |   |   featureR >= 0.79 : train (35.81/1.3)
|   |   |   |   featureD >= 0.73
|   |   |   |   |   featureO < 1.37 : car (35.19/7.98)
|   |   |   |   |   featureO >= 1.37
|   |   |   |   |   |   featureA < 0.51
|   |   |   |   |   |   |   featureO < 1.72
|   |   |   |   |   |   |   |   featureO < 1.72
|   |   |   |   |   |   |   |   |   featureM < 2.62 : bus (0.26/0)
|   |   |   |   |   |   |   |   |   featureM >= 2.62
|   |   |   |   |   |   |   |   |   |   featureL < 5.32 : car (147.42/0)
|   |   |   |   |   |   |   |   |   |   featureL >= 5.32 : bus (0.26/-0)
|   |   |   |   |   |   |   |   featureO >= 1.72 : bus (0.52/-0)
|   |   |   |   |   |   |   featureO >= 1.72
|   |   |   |   |   |   |   |   featureJ < 2.37
|   |   |   |   |   |   |   |   |   featureL < 3.68 : car (183.86/0)
|   |   |   |   |   |   |   |   |   featureL >= 3.68 : car (17.26/0.26)
|   |   |   |   |   |   |   |   featureJ >= 2.37 : car (602.59/0)
|   |   |   |   |   |   featureA >= 0.51 : bus (15.71/8.42)
featureJ >= 6.91
|   speedMin < 1.85
|   |   speed50Quantile < 2.15
|   |   |   featureE < 1.99
|   |   |   |   featureR < 2.06 : bike (17.44/7.6)
|   |   |   |   featureR >= 2.06 : walk (38.06/16.25)
|   |   |   featureE >= 1.99
|   |   |   |   travelDistance < 239.24 : walk (1661.05/0)
|   |   |   |   travelDistance >= 239.24 : bike (6.32/1.32)
|   |   speed50Quantile >= 2.15
|   |   |   featureJ < 11.62 : bus (12.46/7.3)
|   |   |   featureJ >= 11.62
|   |   |   |   featureK < 8.78
|   |   |   |   |   featureS < 0.64
|   |   |   |   |   |   featureG < 2.58 : bike (31.04/0)
|   |   |   |   |   |   featureG >= 2.58
|   |   |   |   |   |   |   featureB < 0.12 : bike (10.16/0.12)
|   |   |   |   |   |   |   featureB >= 0.12 : bike (34/0)
|   |   |   |   |   featureS >= 0.64 : bike (16.12/0.12)
|   |   |   |   featureK >= 8.78 : bike (9.67/2.47)
|   speedMin >= 1.85
|   |   featureL < 2.47
|   |   |   featureG < 2.76 : bike (393.42/0)
|   |   |   featureG >= 2.76
|   |   |   |   featureI < 2.84 : bike (168.71/0)
|   |   |   |   featureI >= 2.84
|   |   |   |   |   featureB < 0.1 : walk (2.07/1)
|   |   |   |   |   featureB >= 0.1 : bike (190/0)
|   |   featureL >= 2.47
|   |   |   featureP < 7.3
|   |   |   |   featureF < 3.81 : bus (36.12/5.7)
|   |   |   |   featureF >= 3.81 : walk (9.55/1)
|   |   |   featureP >= 7.3
|   |   |   |   speed50Quantile < 12.41
|   |   |   |   |   featureR < 3.86
|   |   |   |   |   |   featureP < 11.09 : bike (37.67/1.34)
|   |   |   |   |   |   featureP >= 11.09 : bike (89/0)
|   |   |   |   |   featureR >= 3.86
|   |   |   |   |   |   featureF < 3.82 : bike (34.68/7.01)
|   |   |   |   |   |   featureF >= 3.82
|   |   |   |   |   |   |   featureN < 7.26 : walk (24.38/0)
|   |   |   |   |   |   |   featureN >= 7.26 : bike (16.67/1.67)
|   |   |   |   speed50Quantile >= 12.41 : car (13.41/7.41)

Size of the tree : 447


RandomTree
==========

featureQ < 2.82
|   featureE < 0.73
|   |   featureQ < 0.05
|   |   |   featureJ < 0.17
|   |   |   |   featureS < 0.05
|   |   |   |   |   featureM < 0.08
|   |   |   |   |   |   featureM < 0.01 : stationary (107/0)
|   |   |   |   |   |   featureM >= 0.01 : train (4/0)
|   |   |   |   |   featureM >= 0.08 : stationary (302/0)
|   |   |   |   featureS >= 0.05
|   |   |   |   |   featureE < 0.04
|   |   |   |   |   |   featureN < 0.05
|   |   |   |   |   |   |   featureI < 0.08
|   |   |   |   |   |   |   |   speedVariance < 0.01
|   |   |   |   |   |   |   |   |   featureJ < 0.1 : stationary (52.3/0)
|   |   |   |   |   |   |   |   |   featureJ >= 0.1 : train (4.81/2)
|   |   |   |   |   |   |   |   speedVariance >= 0.01 : train (3.89/0.7)
|   |   |   |   |   |   |   featureI >= 0.08 : train (8/3)
|   |   |   |   |   |   featureN >= 0.05 : stationary (103/0)
|   |   |   |   |   featureE >= 0.04 : train (4/1)
|   |   |   featureJ >= 0.17
|   |   |   |   featureK < 0.08 : train (28/0)
|   |   |   |   featureK >= 0.08
|   |   |   |   |   featureJ < 0.28 : stationary (24/12)
|   |   |   |   |   featureJ >= 0.28 : train (18/4)
|   |   featureQ >= 0.05
|   |   |   featureU < 0.53
|   |   |   |   maximumTravelDistance < 17.73
|   |   |   |   |   speed25Quantile < 1.68
|   |   |   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   |   |   featureC < 1.6
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 820.69
|   |   |   |   |   |   |   |   |   featureB < 0.01 : train (36.73/5.48)
|   |   |   |   |   |   |   |   |   featureB >= 0.01 : bus (12.76/3.76)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 820.69
|   |   |   |   |   |   |   |   |   featureU < 0.13 : train (38.76/0.54)
|   |   |   |   |   |   |   |   |   featureU >= 0.13 : train (16.92/6)
|   |   |   |   |   |   |   featureC >= 1.6
|   |   |   |   |   |   |   |   featureJ < 1.28
|   |   |   |   |   |   |   |   |   speedMax < 8.18
|   |   |   |   |   |   |   |   |   |   speedMax < 6.15 : bus (21.27/9.19)
|   |   |   |   |   |   |   |   |   |   speedMax >= 6.15
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.21 : bus (16.34/4.34)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.21 : bus (27.26/1.1)
|   |   |   |   |   |   |   |   |   speedMax >= 8.18
|   |   |   |   |   |   |   |   |   |   featureT < 0.07 : train (10.55/3.41)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.07
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 3.44
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.26 : bus (15.76/7.76)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.26 : car (25.42/1.42)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.18 : bus (10.98/2.87)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 3.44 : bus (13.84/3.78)
|   |   |   |   |   |   |   |   featureJ >= 1.28
|   |   |   |   |   |   |   |   |   featureD < 0.39
|   |   |   |   |   |   |   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.04 : train (2/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.62
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.29 : bus (8.59/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.29 : bus (58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.27 : train (2.37/1)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.62 : train (7.2/3.06)
|   |   |   |   |   |   |   |   |   |   speed25Quantile >= 0.01 : train (14.4/6.12)
|   |   |   |   |   |   |   |   |   featureD >= 0.39
|   |   |   |   |   |   |   |   |   |   featureT < 0.2
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.07 : bus (12.63/5.79)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.07
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.48 : bus (20.44/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.48 : bus (31.74/2.47)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.63 : car (0.62/-0)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.2
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.04 : bus (52.51/0)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : bus (11.53/1.53)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   featureD < 0.29
|   |   |   |   |   |   |   |   featureH < 0.08
|   |   |   |   |   |   |   |   |   featureA < 0.03
|   |   |   |   |   |   |   |   |   |   featureD < 0.1
|   |   |   |   |   |   |   |   |   |   |   featureM < 0.31
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 0.25 : stationary (8.38/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.25 : train (37.06/9.06)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 0.31 : stationary (27.55/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.1 : bus (19.67/8.67)
|   |   |   |   |   |   |   |   |   featureA >= 0.03
|   |   |   |   |   |   |   |   |   |   featureQ < 0.24 : stationary (30.88/12.35)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.24 : stationary (12.06/3.53)
|   |   |   |   |   |   |   |   featureH >= 0.08
|   |   |   |   |   |   |   |   |   featureE < 0.15
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 26.48 : bus (34.94/11.94)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 26.48 : train (18.04/3.06)
|   |   |   |   |   |   |   |   |   featureE >= 0.15 : train (36.71/6)
|   |   |   |   |   |   |   featureD >= 0.29
|   |   |   |   |   |   |   |   speedMin < 0.01 : bus (19.93/5.07)
|   |   |   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   |   |   featureJ < 1.45 : train (9.49/4.99)
|   |   |   |   |   |   |   |   |   featureJ >= 1.45
|   |   |   |   |   |   |   |   |   |   featureD < 0.48
|   |   |   |   |   |   |   |   |   |   |   featureL < 0.55 : bus (0.99/0)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.38 : stationary (60.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.38 : stationary (1.28/0.28)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.48 : stationary (6.36/4.36)
|   |   |   |   |   speed25Quantile >= 1.68
|   |   |   |   |   |   featureC < 1.51
|   |   |   |   |   |   |   featureL < 0.55
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 851.42 : train (13.89/0.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 851.42 : train (38.89/18.75)
|   |   |   |   |   |   |   featureL >= 0.55
|   |   |   |   |   |   |   |   speed95Quantile < 10.54 : tram (17.67/7.67)
|   |   |   |   |   |   |   |   speed95Quantile >= 10.54
|   |   |   |   |   |   |   |   |   featureQ < 0.31
|   |   |   |   |   |   |   |   |   |   featureQ < 0.14 : train (4.28/2)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.14
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.18 : tram (61/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.18 : tram (5.91/0.91)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.2 : tram (69/0)
|   |   |   |   |   |   |   |   |   featureQ >= 0.31 : train (3.65/0)
|   |   |   |   |   |   featureC >= 1.51
|   |   |   |   |   |   |   speedMean < 8.93
|   |   |   |   |   |   |   |   featureD < 0.35
|   |   |   |   |   |   |   |   |   featureM < 0.93 : train (6.88/2.44)
|   |   |   |   |   |   |   |   |   featureM >= 0.93
|   |   |   |   |   |   |   |   |   |   speedVariance < 12.7
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.09
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.4 : tram (34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.4 : tram (11.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.29 : train (0.67/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.09 : tram (7.67/3.67)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 12.7 : train (4.2/0.05)
|   |   |   |   |   |   |   |   featureD >= 0.35
|   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.27 : tram (4.42/0.37)
|   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.27
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : tram (4.42/1.37)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.31 : bus (18.31/3.99)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.44 : bus (28.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.99 : train (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.99
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.04 : train (0.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.04 : bus (40/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.55 : bus (18.5/1.16)
|   |   |   |   |   |   |   speedMean >= 8.93
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 247.47 : tram (8.9/0.83)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 247.47
|   |   |   |   |   |   |   |   |   featureM < 1.66 : train (30.62/2.14)
|   |   |   |   |   |   |   |   |   featureM >= 1.66 : bus (36.14/15.81)
|   |   |   |   maximumTravelDistance >= 17.73
|   |   |   |   |   featureS < 0.13
|   |   |   |   |   |   featureB < 0.01
|   |   |   |   |   |   |   speedMax < 2.59 : stationary (19.85/0.88)
|   |   |   |   |   |   |   speedMax >= 2.59
|   |   |   |   |   |   |   |   featureU < 0.14
|   |   |   |   |   |   |   |   |   featureU < 0.02 : train (16/0)
|   |   |   |   |   |   |   |   |   featureU >= 0.02 : train (27.01/1.07)
|   |   |   |   |   |   |   |   featureU >= 0.14 : stationary (0.64/0)
|   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   featureL < 0.24 : bus (2.81/0.62)
|   |   |   |   |   |   |   featureL >= 0.24
|   |   |   |   |   |   |   |   featureL < 0.48 : train (73.25/0)
|   |   |   |   |   |   |   |   featureL >= 0.48
|   |   |   |   |   |   |   |   |   featureK < 1.15 : train (84.87/0)
|   |   |   |   |   |   |   |   |   featureK >= 1.15 : train (4.62/0.62)
|   |   |   |   |   featureS >= 0.13
|   |   |   |   |   |   featureS < 0.15 : train (29.06/8)
|   |   |   |   |   |   featureS >= 0.15
|   |   |   |   |   |   |   featureJ < 3.66
|   |   |   |   |   |   |   |   featureO < 0.25 : train (17.12/1.87)
|   |   |   |   |   |   |   |   featureO >= 0.25
|   |   |   |   |   |   |   |   |   featureE < 0.27
|   |   |   |   |   |   |   |   |   |   featureS < 0.35 : train (115.62/0)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.35 : train (12.75/0.94)
|   |   |   |   |   |   |   |   |   featureE >= 0.27
|   |   |   |   |   |   |   |   |   |   featureO < 0.29 : bus (1.25/0.31)
|   |   |   |   |   |   |   |   |   |   featureO >= 0.29
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (5/1)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.78
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 614.63 : train (12.64/2.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 614.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.47 : train (49.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.79
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.54 : train (71.84/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.54 : tram (1.42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.79 : tram (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.78 : train (25.37/3.12)
|   |   |   |   |   |   |   featureJ >= 3.66 : walk (2/-0)
|   |   |   featureU >= 0.53
|   |   |   |   trajectorySimilarityTrain < 250.91
|   |   |   |   |   featureB < 0.01 : bike (29.34/16)
|   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   maximumTravelDistance < 24.16
|   |   |   |   |   |   |   maximumTravelDistance < 14.38
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 19.14 : bus (16.88/5.61)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 19.14
|   |   |   |   |   |   |   |   |   featureE < 0.18 : bike (1/0)
|   |   |   |   |   |   |   |   |   featureE >= 0.18
|   |   |   |   |   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.03 : bus (10.16/1.16)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : bus (87.39/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.11
|   |   |   |   |   |   |   |   |   |   |   featureN < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.31 : car (2.19/1.19)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.31
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 242.78
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.24 : bus (39.77/6.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.24 : bus (33.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 242.78 : car (1.07/0)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 0.92
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.74 : car (1.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.74
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 24.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.48 : bus (35.97/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.06 : bus (22.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.06 : bus (28.07/1.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 24.34 : bus (8.97/0.97)
|   |   |   |   |   |   |   maximumTravelDistance >= 14.38
|   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   featureL < 2.51 : car (31.48/6.92)
|   |   |   |   |   |   |   |   |   featureL >= 2.51 : bus (15.25/0.82)
|   |   |   |   |   |   |   |   featureB >= 0.04
|   |   |   |   |   |   |   |   |   speedMedian < 13.99
|   |   |   |   |   |   |   |   |   |   speedMean < 10.49 : bus (30.55/2.36)
|   |   |   |   |   |   |   |   |   |   speedMean >= 10.49 : car (20.37/4.13)
|   |   |   |   |   |   |   |   |   speedMedian >= 13.99
|   |   |   |   |   |   |   |   |   |   featureH < 1.45
|   |   |   |   |   |   |   |   |   |   |   featureF < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.16 : car (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.16
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.43 : bus (9.15/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.43 : bus (35.24/0)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 1.08 : bus (1.19/0.19)
|   |   |   |   |   |   |   |   |   |   featureH >= 1.45 : car (0.19/0)
|   |   |   |   |   |   maximumTravelDistance >= 24.16
|   |   |   |   |   |   |   accumulatedTravelDistance < 385.68 : bus (1.05/0.04)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 385.68
|   |   |   |   |   |   |   |   featureP < 2.48
|   |   |   |   |   |   |   |   |   featureJ < 2.24
|   |   |   |   |   |   |   |   |   |   featureA < 0.13 : train (37.24/0.03)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.13 : train (9.97/0.87)
|   |   |   |   |   |   |   |   |   featureJ >= 2.24 : bus (0.55/0.1)
|   |   |   |   |   |   |   |   featureP >= 2.48 : car (0.76/0.31)
|   |   |   |   trajectorySimilarityTrain >= 250.91
|   |   |   |   |   featureC < 9
|   |   |   |   |   |   featureP < 1.95
|   |   |   |   |   |   |   featureN < 0.76
|   |   |   |   |   |   |   |   featureE < 0.36
|   |   |   |   |   |   |   |   |   speed25Quantile < 2.84
|   |   |   |   |   |   |   |   |   |   featureK < 0.84
|   |   |   |   |   |   |   |   |   |   |   featureC < 6.25 : car (56/0)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 6.25 : car (1.5/0.5)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.84 : bus (5.5/1)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 2.84 : tram (20.32/8.16)
|   |   |   |   |   |   |   |   featureE >= 0.36
|   |   |   |   |   |   |   |   |   featureK < 0.74 : car (39.25/19.6)
|   |   |   |   |   |   |   |   |   featureK >= 0.74
|   |   |   |   |   |   |   |   |   |   travelDistance < 242.25 : bus (20/8)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 242.25 : bus (25/0)
|   |   |   |   |   |   |   featureN >= 0.76
|   |   |   |   |   |   |   |   featureE < 0.34 : bus (15/7)
|   |   |   |   |   |   |   |   featureE >= 0.34
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.02 : bus (29.21/12)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.02
|   |   |   |   |   |   |   |   |   |   speedMin < 2.13 : bus (41.3/0)
|   |   |   |   |   |   |   |   |   |   speedMin >= 2.13 : bus (21.15/4)
|   |   |   |   |   |   featureP >= 1.95
|   |   |   |   |   |   |   featureJ < 2.27
|   |   |   |   |   |   |   |   maximumTravelDistance < 16.12
|   |   |   |   |   |   |   |   |   featureD < 0.63
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 4.96 : bus (1.06/0.06)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 4.96
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.61 : car (115.65/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.61 : bus (3/1)
|   |   |   |   |   |   |   |   |   featureD >= 0.63
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 61.28 : bus (37.25/18.13)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 61.28
|   |   |   |   |   |   |   |   |   |   |   headingVariance < 0.55 : bus (3.1/0.09)
|   |   |   |   |   |   |   |   |   |   |   headingVariance >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.61 : car (5.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.61 : car (49.66/0)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 16.12
|   |   |   |   |   |   |   |   |   featureS < 0.85 : car (26.34/1.34)
|   |   |   |   |   |   |   |   |   featureS >= 0.85 : car (200.11/0)
|   |   |   |   |   |   |   featureJ >= 2.27
|   |   |   |   |   |   |   |   featureB < 0.07
|   |   |   |   |   |   |   |   |   featureL < 2.94
|   |   |   |   |   |   |   |   |   |   featureP < 2.29 : bus (23.66/1.66)
|   |   |   |   |   |   |   |   |   |   featureP >= 2.29
|   |   |   |   |   |   |   |   |   |   |   speedMean < 4.7 : bus (1.06/0.05)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 4.7
|   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.78 : car (2.1/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.78 : car (39.83/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.4 : bus (0.64/0)
|   |   |   |   |   |   |   |   |   featureL >= 2.94
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 139.15
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 221.34 : car (1.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 221.34 : bus (96.04/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 139.15 : train (3.35/1.35)
|   |   |   |   |   |   |   |   featureB >= 0.07 : car (19/3)
|   |   |   |   |   featureC >= 9
|   |   |   |   |   |   speedMedian < 1.11 : stationary (32.17/16.17)
|   |   |   |   |   |   speedMedian >= 1.11
|   |   |   |   |   |   |   trajectorySimilarityBus < 117.47 : bus (25.52/2.29)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 117.47 : train (15.53/7.84)
|   featureE >= 0.73
|   |   featureJ < 6.63
|   |   |   featureK < 2.23
|   |   |   |   featureE < 0.81
|   |   |   |   |   featureL < 3.42
|   |   |   |   |   |   mediumSpeedPointRatio < 0.98
|   |   |   |   |   |   |   featureA < 0.15 : bus (37.89/1.89)
|   |   |   |   |   |   |   featureA >= 0.15
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.34 : car (25.42/10.18)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.34 : car (16.94/1.12)
|   |   |   |   |   |   mediumSpeedPointRatio >= 0.98
|   |   |   |   |   |   |   maximumTravelDistance < 15.05 : bus (10.42/5.38)
|   |   |   |   |   |   |   maximumTravelDistance >= 15.05
|   |   |   |   |   |   |   |   featureG < 1.31 : car (151/0)
|   |   |   |   |   |   |   |   featureG >= 1.31 : car (30.33/0.67)
|   |   |   |   |   featureL >= 3.42
|   |   |   |   |   |   featureL < 3.92
|   |   |   |   |   |   |   featureT < 0.74
|   |   |   |   |   |   |   |   featureK < 2.01 : bus (36/1)
|   |   |   |   |   |   |   |   featureK >= 2.01 : car (8/0)
|   |   |   |   |   |   |   featureT >= 0.74 : car (18/3)
|   |   |   |   |   |   featureL >= 3.92
|   |   |   |   |   |   |   featureC < 2.22 : train (3/0)
|   |   |   |   |   |   |   featureC >= 2.22 : bus (47/0)
|   |   |   |   featureE >= 0.81
|   |   |   |   |   speed25Quantile < 7.39
|   |   |   |   |   |   featureR < 0.14 : bike (5/0)
|   |   |   |   |   |   featureR >= 0.14
|   |   |   |   |   |   |   featureK < 1.02 : car (26/0)
|   |   |   |   |   |   |   featureK >= 1.02
|   |   |   |   |   |   |   |   featureH < 1.08
|   |   |   |   |   |   |   |   |   headingVariance < 4.38
|   |   |   |   |   |   |   |   |   |   speedMedian < 1.68 : car (9.17/4.1)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 1.68 : bus (31.57/2.29)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.38 : car (29.54/2.33)
|   |   |   |   |   |   |   |   featureH >= 1.08
|   |   |   |   |   |   |   |   |   featureS < 0.68 : bus (1.72/0.72)
|   |   |   |   |   |   |   |   |   featureS >= 0.68 : car (38.96/0.08)
|   |   |   |   |   speed25Quantile >= 7.39
|   |   |   |   |   |   featureA < 0.33
|   |   |   |   |   |   |   featureL < 4.13
|   |   |   |   |   |   |   |   featureI < 0.57
|   |   |   |   |   |   |   |   |   featureJ < 1.25 : bus (0.92/0)
|   |   |   |   |   |   |   |   |   featureJ >= 1.25 : car (164.76/0)
|   |   |   |   |   |   |   |   featureI >= 0.57 : car (1205.12/0)
|   |   |   |   |   |   |   featureL >= 4.13
|   |   |   |   |   |   |   |   featureU < 1.26 : bus (9.76/0)
|   |   |   |   |   |   |   |   featureU >= 1.26 : car (49/0)
|   |   |   |   |   |   featureA >= 0.33
|   |   |   |   |   |   |   featureQ < 0.97
|   |   |   |   |   |   |   |   featureC < 4.88 : bus (26.84/10.84)
|   |   |   |   |   |   |   |   featureC >= 4.88
|   |   |   |   |   |   |   |   |   featureT < 0.76
|   |   |   |   |   |   |   |   |   |   featureU < 0.56 : car (8.68/3.76)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.56
|   |   |   |   |   |   |   |   |   |   |   featureL < 3.09 : car (20.92/0.92)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 3.09 : car (33/0)
|   |   |   |   |   |   |   |   |   featureT >= 0.76 : car (25.68/10.68)
|   |   |   |   |   |   |   featureQ >= 0.97
|   |   |   |   |   |   |   |   featureL < 2.32 : car (4.84/1.84)
|   |   |   |   |   |   |   |   featureL >= 2.32
|   |   |   |   |   |   |   |   |   featureK < 2.21 : car (85.76/0)
|   |   |   |   |   |   |   |   |   featureK >= 2.21 : car (4.76/1)
|   |   |   featureK >= 2.23
|   |   |   |   featureO < 1.02
|   |   |   |   |   featureR < 1.01 : train (3/0)
|   |   |   |   |   featureR >= 1.01
|   |   |   |   |   |   featureS < 0.69 : car (41/0)
|   |   |   |   |   |   featureS >= 0.69 : train (1/0)
|   |   |   |   featureO >= 1.02
|   |   |   |   |   speed75Quantile < 24.04
|   |   |   |   |   |   travelDistance < 177.12 : bike (10.56/6.52)
|   |   |   |   |   |   travelDistance >= 177.12
|   |   |   |   |   |   |   featureL < 4.43
|   |   |   |   |   |   |   |   featureS < 1.43
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 119.25 : bus (30.38/2.38)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 119.25 : car (32.41/4.41)
|   |   |   |   |   |   |   |   featureS >= 1.43 : car (26.37/0)
|   |   |   |   |   |   |   featureL >= 4.43
|   |   |   |   |   |   |   |   speedMax < 7.53 : car (7.51/0.45)
|   |   |   |   |   |   |   |   speedMax >= 7.53
|   |   |   |   |   |   |   |   |   featureD < 1.79
|   |   |   |   |   |   |   |   |   |   featureQ < 1.94
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.91 : car (0.73/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.91 : bus (84.67/0)
|   |   |   |   |   |   |   |   |   |   featureQ >= 1.94 : bus (11.47/2)
|   |   |   |   |   |   |   |   |   featureD >= 1.79 : bike (0.73/-0)
|   |   |   |   |   speed75Quantile >= 24.04
|   |   |   |   |   |   featureL < 5.42
|   |   |   |   |   |   |   featureM < 3.59 : train (0.17/0)
|   |   |   |   |   |   |   featureM >= 3.59 : car (39.84/0.17)
|   |   |   |   |   |   featureL >= 5.42 : bus (1.17/0.17)
|   |   featureJ >= 6.63
|   |   |   featureP < 0.91
|   |   |   |   mediumSpeedPointRatio < 0.01 : walk (11.14/5.11)
|   |   |   |   mediumSpeedPointRatio >= 0.01
|   |   |   |   |   featureL < 1.41
|   |   |   |   |   |   featureC < 13.45
|   |   |   |   |   |   |   featureJ < 16.74 : bike (98.96/0)
|   |   |   |   |   |   |   featureJ >= 16.74 : bike (11.98/1.98)
|   |   |   |   |   |   featureC >= 13.45 : bike (767.95/0)
|   |   |   |   |   featureL >= 1.41 : car (1.98/-0)
|   |   |   featureP >= 0.91
|   |   |   |   travelDistance < 311.87
|   |   |   |   |   featureM < 9.37 : walk (10.25/4.25)
|   |   |   |   |   featureM >= 9.37 : bike (38.59/0)
|   |   |   |   travelDistance >= 311.87
|   |   |   |   |   featureM < 4.94 : car (7/0)
|   |   |   |   |   featureM >= 4.94 : bus (36.16/3.41)
featureQ >= 2.82
|   speedMax < 3.87
|   |   featureS < 11.28 : walk (1664.39/0)
|   |   featureS >= 11.28 : walk (7.69/2.69)
|   speedMax >= 3.87
|   |   speed95Quantile < 10.38
|   |   |   featureB < 0.26
|   |   |   |   featureT < 1.63 : walk (2.76/0)
|   |   |   |   featureT >= 1.63
|   |   |   |   |   featureC < 21.51 : bike (13.96/2.96)
|   |   |   |   |   featureC >= 21.51
|   |   |   |   |   |   featureH < 3.08 : bike (100.2/0)
|   |   |   |   |   |   featureH >= 3.08
|   |   |   |   |   |   |   featureQ < 5.36
|   |   |   |   |   |   |   |   featureL < 13.03 : bike (9.1/0.1)
|   |   |   |   |   |   |   |   featureL >= 13.03 : bike (40/0)
|   |   |   |   |   |   |   featureQ >= 5.36 : bike (12.28/1.18)
|   |   |   featureB >= 0.26 : walk (5.92/-0)
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
      0.21 (    42)  featureJ
      0.2  (     5)  stationaryPointRatio
      0.19 (     6)  speedMean
      0.19 (    26)  featureM
      0.18 (    19)  featureP
      0.18 (    18)  trajectorySimilarityTrain
      0.18 (    18)  featureU
      0.18 (    23)  featureK
      0.17 (    35)  featureE
      0.17 (    13)  speed95Quantile
      0.17 (    14)  featureT
      0.17 (     6)  accumulatedTravelDistance
      0.16 (    10)  speed50Quantile
      0.16 (    23)  featureB
      0.16 (    13)  maximumTravelDistance
      0.16 (     4)  mediumSpeedPointRatio
      0.15 (    22)  featureR
      0.15 (    32)  featureC
      0.15 (     7)  speed75Quantile
      0.14 (     7)  speedVariance
      0.14 (    21)  featureS
      0.14 (    35)  featureD
      0.14 (    22)  featureQ
      0.14 (    52)  featureL
      0.14 (    37)  featureA
      0.11 (    13)  featureN
      0.09 (    28)  featureO
      0.09 (     9)  featureF
      0.07 (    16)  featureH
      0.06 (    17)  featureG
      0.06 (    12)  featureI
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

featureA < 1.31
|   featureT < 0.24
|   |   featureJ < 0.15
|   |   |   featureG < 0.31
|   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   speedMean < 0.04
|   |   |   |   |   |   headingVariance < 0.01 : stationary (26.41/9.04)
|   |   |   |   |   |   headingVariance >= 0.01
|   |   |   |   |   |   |   featureE < 0.03 : stationary (48.13/0)
|   |   |   |   |   |   |   featureE >= 0.03
|   |   |   |   |   |   |   |   featureT < 0.02 : stationary (345.16/0)
|   |   |   |   |   |   |   |   featureT >= 0.02
|   |   |   |   |   |   |   |   |   featureI < 0.03 : stationary (41.16/0)
|   |   |   |   |   |   |   |   |   featureI >= 0.03
|   |   |   |   |   |   |   |   |   |   featureC < 0.22 : stationary (29.38/0.83)
|   |   |   |   |   |   |   |   |   |   featureC >= 0.22 : stationary (36.51/0)
|   |   |   |   |   speedMean >= 0.04
|   |   |   |   |   |   trajectorySimilarityBus < 27.61 : car (4.4/1.4)
|   |   |   |   |   |   trajectorySimilarityBus >= 27.61
|   |   |   |   |   |   |   featureM < 0.16 : stationary (26.35/0)
|   |   |   |   |   |   |   featureM >= 0.16 : stationary (22.08/0.08)
|   |   |   |   speed25Quantile >= 0.01 : stationary (26.41/13.04)
|   |   |   featureG >= 0.31 : bus (5/0)
|   |   featureJ >= 0.15
|   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   speed95Quantile < 17.25
|   |   |   |   |   featureD < 0.89
|   |   |   |   |   |   featureK < 0.54
|   |   |   |   |   |   |   featureO < 0.24
|   |   |   |   |   |   |   |   featureC < 0.78
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 528.03 : tram (22.43/6.43)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 528.03 : train (23.83/1.27)
|   |   |   |   |   |   |   |   featureC >= 0.78
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.73
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.59 : bus (29.66/15.37)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.59 : train (35.8/15.53)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.73
|   |   |   |   |   |   |   |   |   |   featureH < 0.15
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.04 : train (11.74/1.74)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.04 : train (65/0)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.15
|   |   |   |   |   |   |   |   |   |   |   featureP < 0.11 : train (35.58/4.47)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 0.11 : train (37/0)
|   |   |   |   |   |   |   featureO >= 0.24
|   |   |   |   |   |   |   |   speedMedian < 2.62
|   |   |   |   |   |   |   |   |   featureC < 1.13 : train (9/1)
|   |   |   |   |   |   |   |   |   featureC >= 1.13
|   |   |   |   |   |   |   |   |   |   featureA < 0.04 : train (30.92/14)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 11.52 : bus (34.55/13.44)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 11.52 : car (20.32/1.19)
|   |   |   |   |   |   |   |   speedMedian >= 2.62
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 283.79
|   |   |   |   |   |   |   |   |   |   featureS < 0.39
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.29 : train (13.34/6)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (2.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.98 : tram (105/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.98 : train (0.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.4 : car (0.57/0)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.39 : tram (32.57/0.57)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 283.79 : train (38.99/9.29)
|   |   |   |   |   |   featureK >= 0.54
|   |   |   |   |   |   |   speed25Quantile < 1.69
|   |   |   |   |   |   |   |   featureR < 0.34 : bus (39.08/13.78)
|   |   |   |   |   |   |   |   featureR >= 0.34
|   |   |   |   |   |   |   |   |   featureC < 1.58 : train (7.51/2)
|   |   |   |   |   |   |   |   |   featureC >= 1.58
|   |   |   |   |   |   |   |   |   |   featureE < 0.6
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.94
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.71 : bus (32.36/7.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 4.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.58 : bus (12.63/0.63)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.58 : bus (32.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 4.46 : bus (11.26/3.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.18 : bus (31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.29 : bus (28.26/4)
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.89 : train (4.29/0.11)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.94 : train (4/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.6 : tram (2.92/0.97)
|   |   |   |   |   |   |   speed25Quantile >= 1.69
|   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.99
|   |   |   |   |   |   |   |   |   featureO < 0.5 : bus (19.89/6.61)
|   |   |   |   |   |   |   |   |   featureO >= 0.5
|   |   |   |   |   |   |   |   |   |   speedVariance < 10.39
|   |   |   |   |   |   |   |   |   |   |   featureL < 2.04 : tram (22.92/4.25)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 2.04 : bus (23.15/3.15)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 10.39 : bus (15/0.91)
|   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   |   |   featureD < 0.3 : tram (12.1/1.1)
|   |   |   |   |   |   |   |   |   featureD >= 0.3 : train (37.64/11.27)
|   |   |   |   |   featureD >= 0.89
|   |   |   |   |   |   featureJ < 5.47 : car (35.59/3.59)
|   |   |   |   |   |   featureJ >= 5.47
|   |   |   |   |   |   |   speed50Quantile < 7.29
|   |   |   |   |   |   |   |   featureQ < 0.42 : bike (44.95/0)
|   |   |   |   |   |   |   |   featureQ >= 0.42 : car (4.76/-0)
|   |   |   |   |   |   |   speed50Quantile >= 7.29 : car (5.65/0.11)
|   |   |   |   speed95Quantile >= 17.25
|   |   |   |   |   featureA < 0.24
|   |   |   |   |   |   headingVariance < 1.82
|   |   |   |   |   |   |   featureD < 0.04 : stationary (2.17/0)
|   |   |   |   |   |   |   featureD >= 0.04
|   |   |   |   |   |   |   |   featureC < 3.76
|   |   |   |   |   |   |   |   |   featureF < 1.3
|   |   |   |   |   |   |   |   |   |   featureD < 0.63
|   |   |   |   |   |   |   |   |   |   |   featureC < 1.77
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.25 : train (72.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.25 : train (34.52/1.08)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 1.77
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.19 : train (38.27/0.72)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.21 : train (2.36/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.21 : train (103.35/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.63 : train (20.81/1.81)
|   |   |   |   |   |   |   |   |   featureF >= 1.3 : bus (0.72/0.36)
|   |   |   |   |   |   |   |   featureC >= 3.76 : bus (2.35/1.45)
|   |   |   |   |   |   headingVariance >= 1.82
|   |   |   |   |   |   |   featureO < 0.92
|   |   |   |   |   |   |   |   featureM < 0.08 : bus (0.31/0)
|   |   |   |   |   |   |   |   featureM >= 0.08
|   |   |   |   |   |   |   |   |   featureC < 3.27
|   |   |   |   |   |   |   |   |   |   featureC < 3.16
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.47
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.23 : train (32.56/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.23 : train (32.17/0.31)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.47 : tram (0.1/-0)
|   |   |   |   |   |   |   |   |   |   featureC >= 3.16 : train (10.58/0.58)
|   |   |   |   |   |   |   |   |   featureC >= 3.27 : train (2.05/0.68)
|   |   |   |   |   |   |   featureO >= 0.92 : tram (2.21/1)
|   |   |   |   |   featureA >= 0.24
|   |   |   |   |   |   featureG < 0.3 : train (5.17/0.23)
|   |   |   |   |   |   featureG >= 0.3
|   |   |   |   |   |   |   featureL < 1.53 : train (2.8/1.4)
|   |   |   |   |   |   |   featureL >= 1.53
|   |   |   |   |   |   |   |   featureE < 1.06 : car (5.7/0.7)
|   |   |   |   |   |   |   |   featureE >= 1.06 : car (59.33/0)
|   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   speed75Quantile < 0.2
|   |   |   |   |   headingVariance < 4.04
|   |   |   |   |   |   featureE < 0.1
|   |   |   |   |   |   |   featureR < 0.12
|   |   |   |   |   |   |   |   travelDistance < 2.42 : train (23.52/10.03)
|   |   |   |   |   |   |   |   travelDistance >= 2.42
|   |   |   |   |   |   |   |   |   featureK < 0.07 : train (1.07/0.07)
|   |   |   |   |   |   |   |   |   featureK >= 0.07 : train (48.64/0)
|   |   |   |   |   |   |   featureR >= 0.12 : stationary (13.63/0.43)
|   |   |   |   |   |   featureE >= 0.1
|   |   |   |   |   |   |   trajectorySimilarityBus < 8.11 : bus (32.95/7.39)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 8.11
|   |   |   |   |   |   |   |   featureU < 0.48
|   |   |   |   |   |   |   |   |   featureH < 0.78
|   |   |   |   |   |   |   |   |   |   featureE < 0.56
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.47 : train (54.07/0)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.47 : train (17.01/1.16)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.56 : tram (0.62/0.39)
|   |   |   |   |   |   |   |   |   featureH >= 0.78 : car (2.08/1.31)
|   |   |   |   |   |   |   |   featureU >= 0.48 : bus (6.77/0.62)
|   |   |   |   |   headingVariance >= 4.04
|   |   |   |   |   |   trajectorySimilarityTrain < 748.03 : bus (39.85/18.46)
|   |   |   |   |   |   trajectorySimilarityTrain >= 748.03
|   |   |   |   |   |   |   trajectorySimilarityBus < 3.92 : bus (9.11/1.02)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 3.92
|   |   |   |   |   |   |   |   featureH < 0.07
|   |   |   |   |   |   |   |   |   featureI < 0.06
|   |   |   |   |   |   |   |   |   |   featureP < 0.9
|   |   |   |   |   |   |   |   |   |   |   featureM < 0.29 : stationary (20.22/0.18)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 0.29 : stationary (30.48/0)
|   |   |   |   |   |   |   |   |   |   featureP >= 0.9 : bike (0.04/-0)
|   |   |   |   |   |   |   |   |   featureI >= 0.06 : stationary (3.39/0.39)
|   |   |   |   |   |   |   |   featureH >= 0.07 : stationary (26.69/15.48)
|   |   |   |   speed75Quantile >= 0.2
|   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   speedMin < 0.15
|   |   |   |   |   |   |   featureE < 0.21 : stationary (26.23/11.4)
|   |   |   |   |   |   |   featureE >= 0.21
|   |   |   |   |   |   |   |   featureD < 0.49
|   |   |   |   |   |   |   |   |   featureQ < 0.28 : bus (0.49/0.27)
|   |   |   |   |   |   |   |   |   featureQ >= 0.28
|   |   |   |   |   |   |   |   |   |   featureK < 1.26
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.43 : stationary (51.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.43 : stationary (5.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.38 : stationary (5.38/0.38)
|   |   |   |   |   |   |   |   |   |   featureK >= 1.26 : train (0.88/0)
|   |   |   |   |   |   |   |   featureD >= 0.49 : train (0.71/0.27)
|   |   |   |   |   |   speedMin >= 0.15 : train (4.33/0.08)
|   |   |   |   |   featureB >= 0.04 : car (11.76/2.19)
|   featureT >= 0.24
|   |   speedMax < 12.71
|   |   |   speed95Quantile < 1.96
|   |   |   |   trajectorySimilarityBus < 27.91
|   |   |   |   |   featureL < 0.9 : bus (20/0)
|   |   |   |   |   featureL >= 0.9 : bike (25.94/12.85)
|   |   |   |   trajectorySimilarityBus >= 27.91 : train (34.46/18.27)
|   |   |   speed95Quantile >= 1.96
|   |   |   |   featureU < 0.91
|   |   |   |   |   speedMean < 9.06
|   |   |   |   |   |   featureL < 1.62
|   |   |   |   |   |   |   trajectorySimilarityTrain < 403.01
|   |   |   |   |   |   |   |   featureA < 0.15
|   |   |   |   |   |   |   |   |   featureP < 2.19
|   |   |   |   |   |   |   |   |   |   featureO < 1.04 : bus (52.18/0)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.04 : train (0.71/0.09)
|   |   |   |   |   |   |   |   |   featureP >= 2.19 : car (0.09/-0)
|   |   |   |   |   |   |   |   featureA >= 0.15 : car (13.79/5.18)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 403.01
|   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   featureU < 0.53 : bus (27.47/16.47)
|   |   |   |   |   |   |   |   |   featureU >= 0.53
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 258.95 : tram (4.16/0.13)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 258.95 : car (36.4/1.84)
|   |   |   |   |   |   |   |   featureB >= 0.03
|   |   |   |   |   |   |   |   |   speed50Quantile < 6.39 : bus (38.85/6.48)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 6.39 : car (11.25/0.11)
|   |   |   |   |   |   featureL >= 1.62
|   |   |   |   |   |   |   featureJ < 1.45 : bus (22.71/11.22)
|   |   |   |   |   |   |   featureJ >= 1.45
|   |   |   |   |   |   |   |   featureB < 0.15
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 197.08
|   |   |   |   |   |   |   |   |   |   speedVariance < 16.48
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 4.1 : bus (16.46/3.21)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 4.1
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.57 : bus (65.97/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.11 : bus (11.19/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.11 : bus (42.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.36 : bus (17.39/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 6.98 : bus (38.36/1.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 6.98 : bus (6.75/1.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.2 : car (0.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.96 : bus (114.92/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.9 : bus (14/2)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 16.48
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.34 : bus (37.59/1.38)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.34 : car (9.74/3.74)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 197.08 : car (15.43/7.35)
|   |   |   |   |   |   |   |   featureB >= 0.15 : train (1.73/-0)
|   |   |   |   |   speedMean >= 9.06
|   |   |   |   |   |   featureD < 0.81 : tram (11.96/3.88)
|   |   |   |   |   |   featureD >= 0.81 : car (32.4/2.34)
|   |   |   |   featureU >= 0.91
|   |   |   |   |   speedMedian < 8.72
|   |   |   |   |   |   speedMean < 6.63
|   |   |   |   |   |   |   maximumTravelDistance < 13.12
|   |   |   |   |   |   |   |   featureN < 2.6
|   |   |   |   |   |   |   |   |   featureR < 0.93
|   |   |   |   |   |   |   |   |   |   featureP < 2.94
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : car (6/0)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.78
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.81 : bus (28/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 4.29 : car (3.16/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 4.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.36 : car (3/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.36 : bus (39.18/3.72)
|   |   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.78 : car (4.13/0.03)
|   |   |   |   |   |   |   |   |   |   featureP >= 2.94 : car (39.26/10.91)
|   |   |   |   |   |   |   |   |   featureR >= 0.93
|   |   |   |   |   |   |   |   |   |   headingVariance < 8.54
|   |   |   |   |   |   |   |   |   |   |   featureL < 4.45 : bus (19.04/3.18)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 4.45 : bus (32.47/0)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 8.54 : train (3.36/1.34)
|   |   |   |   |   |   |   |   featureN >= 2.6 : car (16.39/0)
|   |   |   |   |   |   |   maximumTravelDistance >= 13.12 : car (22.38/1.48)
|   |   |   |   |   |   speedMean >= 6.63
|   |   |   |   |   |   |   featureJ < 3.1
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 338.11
|   |   |   |   |   |   |   |   |   featureR < 0.76 : car (33.08/3.12)
|   |   |   |   |   |   |   |   |   featureR >= 0.76 : car (16.36/7.28)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 338.11
|   |   |   |   |   |   |   |   |   featureL < 3.67 : car (39.26/0.1)
|   |   |   |   |   |   |   |   |   featureL >= 3.67 : car (1.76/0.23)
|   |   |   |   |   |   |   featureJ >= 3.1 : bus (18.27/3.02)
|   |   |   |   |   speedMedian >= 8.72
|   |   |   |   |   |   featureR < 0.54 : car (6.44/0)
|   |   |   |   |   |   featureR >= 0.54
|   |   |   |   |   |   |   featureP < 2.53 : train (8.26/3.26)
|   |   |   |   |   |   |   featureP >= 2.53
|   |   |   |   |   |   |   |   featureI < 0.11 : bike (0.48/0.17)
|   |   |   |   |   |   |   |   featureI >= 0.11
|   |   |   |   |   |   |   |   |   featureD < 0.69 : car (0.17/0.04)
|   |   |   |   |   |   |   |   |   featureD >= 0.69
|   |   |   |   |   |   |   |   |   |   featureG < 3.04
|   |   |   |   |   |   |   |   |   |   |   featureI < 1.11
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.98 : car (0.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.98
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.24 : bus (8.35/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.24 : bus (38.09/0.92)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 1.11 : bus (2.92/0.7)
|   |   |   |   |   |   |   |   |   |   featureG >= 3.04 : car (0.17/0.04)
|   |   speedMax >= 12.71
|   |   |   accumulatedTravelDistance < 1046.57
|   |   |   |   trajectorySimilarityBus < 171.1
|   |   |   |   |   trajectorySimilarityTram < 987.1
|   |   |   |   |   |   highSpeedPointRatio < 0.29 : tram (1.04/0.04)
|   |   |   |   |   |   highSpeedPointRatio >= 0.29
|   |   |   |   |   |   |   featureH < 0.12 : bike (0.11/0.04)
|   |   |   |   |   |   |   featureH >= 0.12
|   |   |   |   |   |   |   |   featureA < 0.43
|   |   |   |   |   |   |   |   |   featureP < 1.71 : train (0.38/0.16)
|   |   |   |   |   |   |   |   |   featureP >= 1.71
|   |   |   |   |   |   |   |   |   |   featureS < 1.03 : car (12.89/0.35)
|   |   |   |   |   |   |   |   |   |   featureS >= 1.03 : car (57.73/0)
|   |   |   |   |   |   |   |   featureA >= 0.43 : bus (0.93/0.42)
|   |   |   |   |   trajectorySimilarityTram >= 987.1
|   |   |   |   |   |   trajectorySimilarityTrain < 966.34
|   |   |   |   |   |   |   featureP < 1.6
|   |   |   |   |   |   |   |   featureR < 0.47 : train (33.96/13)
|   |   |   |   |   |   |   |   featureR >= 0.47 : bus (12.85/3.74)
|   |   |   |   |   |   |   featureP >= 1.6
|   |   |   |   |   |   |   |   featureD < 1.1
|   |   |   |   |   |   |   |   |   featureJ < 2.57
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 18.8
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.34 : bus (26.55/4.94)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.34
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.19 : bus (5.16/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 141.39 : bus (8.27/2.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 141.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 7.28
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.32 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.49 : car (49.46/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.49 : car (14.56/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 7.28 : bus (1.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.96 : bus (4/0)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 18.8
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (3.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 26.62
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.46 : car (0.92/0.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.73 : bus (21.85/0.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.73 : bus (34.37/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 26.62 : train (3.12/1.12)
|   |   |   |   |   |   |   |   |   featureJ >= 2.57
|   |   |   |   |   |   |   |   |   |   speedMax < 18.02
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.17
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.77 : bus (37.09/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.77 : bus (11.28/1.71)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.17 : car (15.77/5.47)
|   |   |   |   |   |   |   |   |   |   speedMax >= 18.02
|   |   |   |   |   |   |   |   |   |   |   featureJ < 3.97
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.85 : car (0.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 10.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 3.33 : bus (57.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 3.33 : bus (12.56/0.56)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 10.04 : car (0.23/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.41 : bus (1.35/0.39)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.97 : car (0.84/0.39)
|   |   |   |   |   |   |   |   featureD >= 1.1
|   |   |   |   |   |   |   |   |   featureN < 1.59
|   |   |   |   |   |   |   |   |   |   featureO < 0.98 : car (5.32/0.32)
|   |   |   |   |   |   |   |   |   |   featureO >= 0.98
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.58 : car (4.21/0.11)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.58 : car (39.64/0)
|   |   |   |   |   |   |   |   |   featureN >= 1.59 : bus (12.49/2.42)
|   |   |   |   |   |   trajectorySimilarityTrain >= 966.34
|   |   |   |   |   |   |   speedMedian < 19.71
|   |   |   |   |   |   |   |   featureU < 0.7
|   |   |   |   |   |   |   |   |   speedMean < 4.61 : car (8.41/0.39)
|   |   |   |   |   |   |   |   |   speedMean >= 4.61
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 40.16 : car (10.51/3.49)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 40.16 : bus (33.64/7.29)
|   |   |   |   |   |   |   |   featureU >= 0.7
|   |   |   |   |   |   |   |   |   featureL < 3.05
|   |   |   |   |   |   |   |   |   |   featureJ < 2.38
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.73 : car (16.37/2.27)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.73
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.39 : car (30.37/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.39 : car (184.1/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 2.38 : car (20.19/6.46)
|   |   |   |   |   |   |   |   |   featureL >= 3.05
|   |   |   |   |   |   |   |   |   |   featureK < 2.21
|   |   |   |   |   |   |   |   |   |   |   featureM < 3.83 : bus (29.46/0)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 3.83 : bus (15.74/7.73)
|   |   |   |   |   |   |   |   |   |   featureK >= 2.21 : car (11.47/3.73)
|   |   |   |   |   |   |   speedMedian >= 19.71
|   |   |   |   |   |   |   |   headingVariance < 1.44 : bus (39.68/4.15)
|   |   |   |   |   |   |   |   headingVariance >= 1.44 : car (22.97/0.51)
|   |   |   |   trajectorySimilarityBus >= 171.1
|   |   |   |   |   featureE < 0.45 : tram (23.55/12.02)
|   |   |   |   |   featureE >= 0.45
|   |   |   |   |   |   featureL < 5.01
|   |   |   |   |   |   |   featureC < 4.62
|   |   |   |   |   |   |   |   featureK < 1.12
|   |   |   |   |   |   |   |   |   featureT < 0.26 : tram (0.53/0)
|   |   |   |   |   |   |   |   |   featureT >= 0.26
|   |   |   |   |   |   |   |   |   |   featureL < 2.79 : car (158.76/0)
|   |   |   |   |   |   |   |   |   |   featureL >= 2.79 : bus (0.53/0)
|   |   |   |   |   |   |   |   featureK >= 1.12 : car (538.82/0)
|   |   |   |   |   |   |   featureC >= 4.62
|   |   |   |   |   |   |   |   featureN < 0.96 : car (24.34/4.76)
|   |   |   |   |   |   |   |   featureN >= 0.96
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 206.44 : car (15.96/6.47)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 206.44
|   |   |   |   |   |   |   |   |   |   featureD < 0.81 : car (25.98/4.49)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.81
|   |   |   |   |   |   |   |   |   |   |   featureU < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.7 : car (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : bus (0.25/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.47 : car (217.49/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.47 : car (17.24/1)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 2.31 : bike (1/0)
|   |   |   |   |   |   featureL >= 5.01 : bus (16.7/0)
|   |   |   accumulatedTravelDistance >= 1046.57
|   |   |   |   featureT < 0.48
|   |   |   |   |   speed95Quantile < 33.47
|   |   |   |   |   |   featureE < 0.7 : train (11.19/3.17)
|   |   |   |   |   |   featureE >= 0.7 : car (32.27/2.04)
|   |   |   |   |   speed95Quantile >= 33.47
|   |   |   |   |   |   featureC < 3.2 : train (29.14/1.07)
|   |   |   |   |   |   featureC >= 3.2 : train (21.55/5.24)
|   |   |   |   featureT >= 0.48
|   |   |   |   |   featureU < 1.06 : car (26.75/2.88)
|   |   |   |   |   featureU >= 1.06
|   |   |   |   |   |   featureB < 0.01 : car (6.21/1.55)
|   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   featureS < 1.01 : car (5.33/0.66)
|   |   |   |   |   |   |   featureS >= 1.01
|   |   |   |   |   |   |   |   featureR < 1.66
|   |   |   |   |   |   |   |   |   featureL < 6.12
|   |   |   |   |   |   |   |   |   |   featureE < 0.49 : train (0.44/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.49
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.13 : car (29.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.13 : car (709.07/0)
|   |   |   |   |   |   |   |   |   featureL >= 6.12 : bus (0.44/0)
|   |   |   |   |   |   |   |   featureR >= 1.66 : bus (1.11/0)
featureA >= 1.31
|   featureP < 0.23
|   |   headingVariance < 7
|   |   |   speedMean < 2.33 : bike (3.03/1)
|   |   |   speedMean >= 2.33
|   |   |   |   featureI < 3.96 : bike (468.67/0)
|   |   |   |   featureI >= 3.96
|   |   |   |   |   featureE < 4.72 : bike (150/0)
|   |   |   |   |   featureE >= 4.72
|   |   |   |   |   |   featureB < 0.16 : walk (0.81/0)
|   |   |   |   |   |   featureB >= 0.16 : bike (43/0)
|   |   headingVariance >= 7
|   |   |   maximumTravelDistance < 5.04 : walk (8.08/0.07)
|   |   |   maximumTravelDistance >= 5.04
|   |   |   |   featureH < 5.52 : bike (117.24/0)
|   |   |   |   featureH >= 5.52 : bike (27.18/0.18)
|   featureP >= 0.23
|   |   speed95Quantile < 3.15
|   |   |   speed95Quantile < 0.55 : walk (16.27/9.1)
|   |   |   speed95Quantile >= 0.55
|   |   |   |   featureC < 9.79 : bus (6.8/1.7)
|   |   |   |   featureC >= 9.79
|   |   |   |   |   featureQ < 2.4 : walk (27.8/8.95)
|   |   |   |   |   featureQ >= 2.4 : walk (1724.1/0)
|   |   speed95Quantile >= 3.15
|   |   |   accumulatedTravelDistance < 326.23
|   |   |   |   speedMax < 10.16
|   |   |   |   |   featureC < 21.51 : bike (39.23/10.91)
|   |   |   |   |   featureC >= 21.51
|   |   |   |   |   |   speed75Quantile < 1.49 : bus (1.03/0.03)
|   |   |   |   |   |   speed75Quantile >= 1.49
|   |   |   |   |   |   |   featureK < 8.94
|   |   |   |   |   |   |   |   featureL < 3.32 : bike (2.11/0.11)
|   |   |   |   |   |   |   |   featureL >= 3.32
|   |   |   |   |   |   |   |   |   featureD < 4.08 : bike (129.32/0)
|   |   |   |   |   |   |   |   |   featureD >= 4.08 : bike (1.21/0.21)
|   |   |   |   |   |   |   featureK >= 8.94
|   |   |   |   |   |   |   |   featureH < 8.57
|   |   |   |   |   |   |   |   |   featureB < 0.24
|   |   |   |   |   |   |   |   |   |   featureP < 11.9 : walk (0.21/0)
|   |   |   |   |   |   |   |   |   |   featureP >= 11.9
|   |   |   |   |   |   |   |   |   |   |   featureC < 41.23 : bike (2.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 41.23 : bike (41/0)
|   |   |   |   |   |   |   |   |   featureB >= 0.24 : walk (2.45/0)
|   |   |   |   |   |   |   |   featureH >= 8.57 : walk (2.66/0)
|   |   |   |   speedMax >= 10.16 : bus (5.42/0.41)
|   |   |   accumulatedTravelDistance >= 326.23
|   |   |   |   featureE < 2.75
|   |   |   |   |   featureL < 4.58 : bus (2.07/1.03)
|   |   |   |   |   featureL >= 4.58
|   |   |   |   |   |   featureO < 4.02 : bus (52.2/0)
|   |   |   |   |   |   featureO >= 4.02 : bus (8.2/0.2)
|   |   |   |   featureE >= 2.75 : walk (4.81/-0)

Size of the tree : 501


RandomTree
==========

speedMax < 3.09
|   featureA < 2.37
|   |   featureM < 0.23
|   |   |   headingVariance < 0.01
|   |   |   |   featureN < 0.02 : train (36.87/0.7)
|   |   |   |   featureN >= 0.02 : stationary (36.18/6.25)
|   |   |   headingVariance >= 0.01
|   |   |   |   featureD < 0.04
|   |   |   |   |   featureU < 0.04 : stationary (287.81/0)
|   |   |   |   |   featureU >= 0.04
|   |   |   |   |   |   trajectorySimilarityBus < 570.3
|   |   |   |   |   |   |   featureI < 0.1
|   |   |   |   |   |   |   |   featureG < 0.04 : stationary (69.46/0)
|   |   |   |   |   |   |   |   featureG >= 0.04
|   |   |   |   |   |   |   |   |   featureJ < 0.1 : stationary (42.65/0)
|   |   |   |   |   |   |   |   |   featureJ >= 0.1 : stationary (6.44/0.48)
|   |   |   |   |   |   |   featureI >= 0.1 : train (0.48/0.24)
|   |   |   |   |   |   trajectorySimilarityBus >= 570.3 : train (6.67/0.63)
|   |   |   |   featureD >= 0.04 : stationary (35.06/9.06)
|   |   featureM >= 0.23
|   |   |   featureM < 1.83
|   |   |   |   speed50Quantile < 0.09
|   |   |   |   |   featureH < 0.07
|   |   |   |   |   |   featureE < 0.06
|   |   |   |   |   |   |   featureS < 0.08 : train (9/1)
|   |   |   |   |   |   |   featureS >= 0.08
|   |   |   |   |   |   |   |   featureL < 0.29 : stationary (19/4)
|   |   |   |   |   |   |   |   featureL >= 0.29 : stationary (43.45/0)
|   |   |   |   |   |   featureE >= 0.06 : train (23.12/10)
|   |   |   |   |   featureH >= 0.07
|   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   featureO < 0.16
|   |   |   |   |   |   |   |   speedVariance < 0.36
|   |   |   |   |   |   |   |   |   featureM < 0.45 : train (33.1/0)
|   |   |   |   |   |   |   |   |   featureM >= 0.45 : train (25.88/3)
|   |   |   |   |   |   |   |   speedVariance >= 0.36 : stationary (1.03/0.03)
|   |   |   |   |   |   |   featureO >= 0.16
|   |   |   |   |   |   |   |   featureL < 0.4 : bus (32.45/10.45)
|   |   |   |   |   |   |   |   featureL >= 0.4
|   |   |   |   |   |   |   |   |   speedMax < 0.61
|   |   |   |   |   |   |   |   |   |   featureP < 0.69
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.3 : train (31.01/2.37)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.3 : train (12.27/2.56)
|   |   |   |   |   |   |   |   |   |   featureP >= 0.69 : train (24.35/12.39)
|   |   |   |   |   |   |   |   |   speedMax >= 0.61 : train (20.7/14.94)
|   |   |   |   |   |   featureB >= 0.04 : bus (34.01/7.89)
|   |   |   |   speed50Quantile >= 0.09
|   |   |   |   |   featureE < 0.21 : train (26.77/12.23)
|   |   |   |   |   featureE >= 0.21
|   |   |   |   |   |   featureJ < 1.47 : stationary (8.32/4.32)
|   |   |   |   |   |   featureJ >= 1.47
|   |   |   |   |   |   |   featureM < 0.61 : train (0.72/0)
|   |   |   |   |   |   |   featureM >= 0.61
|   |   |   |   |   |   |   |   featureD < 0.52
|   |   |   |   |   |   |   |   |   featureT < 0.21
|   |   |   |   |   |   |   |   |   |   featureM < 1.61
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.38 : stationary (48.29/0)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.38 : stationary (14.22/0.14)
|   |   |   |   |   |   |   |   |   |   featureM >= 1.61 : train (0.14/-0)
|   |   |   |   |   |   |   |   |   featureT >= 0.21 : bus (0.22/0)
|   |   |   |   |   |   |   |   featureD >= 0.52 : bus (1.44/0.79)
|   |   |   featureM >= 1.83
|   |   |   |   featureE < 0.39 : stationary (36.14/17.14)
|   |   |   |   featureE >= 0.39
|   |   |   |   |   featureU < 0.83 : train (33.86/20.77)
|   |   |   |   |   featureU >= 0.83
|   |   |   |   |   |   featureB < 0.06 : car (19.61/10.16)
|   |   |   |   |   |   featureB >= 0.06 : car (31.04/2.07)
|   featureA >= 2.37
|   |   featureD < 0.8 : stationary (7/0)
|   |   featureD >= 0.8
|   |   |   featureS < 0.11 : walk (10.77/4.89)
|   |   |   featureS >= 0.11
|   |   |   |   featureO < 14.47 : walk (1643.4/0)
|   |   |   |   featureO >= 14.47 : walk (30.36/0.3)
speedMax >= 3.09
|   speedMedian < 9.14
|   |   featureM < 0.03
|   |   |   featureK < 0.01
|   |   |   |   featureH < 0.36 : bike (4/0.67)
|   |   |   |   featureH >= 0.36
|   |   |   |   |   featureE < 0.88 : train (0.67/0)
|   |   |   |   |   featureE >= 0.88
|   |   |   |   |   |   featureC < 13.45
|   |   |   |   |   |   |   featureJ < 17.08 : bike (95.67/0)
|   |   |   |   |   |   |   featureJ >= 17.08 : bike (7/1)
|   |   |   |   |   |   featureC >= 13.45 : bike (781/0)
|   |   |   featureK >= 0.01 : bus (39.66/2.66)
|   |   featureM >= 0.03
|   |   |   featureL < 6.63
|   |   |   |   featureO < 0.35
|   |   |   |   |   featureQ < 0.03
|   |   |   |   |   |   featureE < 0.04 : stationary (55.22/0)
|   |   |   |   |   |   featureE >= 0.04 : car (2/-0)
|   |   |   |   |   featureQ >= 0.03
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   speed95Quantile < 10.79
|   |   |   |   |   |   |   |   featureD < 0.11 : train (39.99/7.73)
|   |   |   |   |   |   |   |   featureD >= 0.11
|   |   |   |   |   |   |   |   |   featureS < 0.1
|   |   |   |   |   |   |   |   |   |   featureE < 0.06 : car (8/2)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.06 : train (35.47/1.89)
|   |   |   |   |   |   |   |   |   featureS >= 0.1
|   |   |   |   |   |   |   |   |   |   speedMax < 10.34
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 3.8
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.06 : train (16.36/6)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 0.39 : train (3.47/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.39 : bus (39.53/8.41)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 3.8 : train (10.27/0.35)
|   |   |   |   |   |   |   |   |   |   speedMax >= 10.34 : car (9.13/0.97)
|   |   |   |   |   |   |   speed95Quantile >= 10.79
|   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   featureJ < 0.19 : stationary (2.47/0.34)
|   |   |   |   |   |   |   |   |   featureJ >= 0.19
|   |   |   |   |   |   |   |   |   |   featureE < 0.04 : stationary (1.24/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.04
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.28 : train (13.76/1.11)
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.28
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.33 : train (90.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.33 : train (3.78/0.78)
|   |   |   |   |   |   |   |   featureB >= 0.03 : car (4.04/1.69)
|   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   featureR < 0.27
|   |   |   |   |   |   |   |   featureA < 0.03
|   |   |   |   |   |   |   |   |   featureF < 0.21 : tram (28.58/12.58)
|   |   |   |   |   |   |   |   |   featureF >= 0.21 : tram (20.31/0.31)
|   |   |   |   |   |   |   |   featureA >= 0.03 : train (7.82/2.5)
|   |   |   |   |   |   |   featureR >= 0.27 : car (7.95/1.63)
|   |   |   |   featureO >= 0.35
|   |   |   |   |   trajectorySimilarityBus < 89.97
|   |   |   |   |   |   featureT < 0.23
|   |   |   |   |   |   |   travelDistance < 227.75
|   |   |   |   |   |   |   |   featureJ < 1.19
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.16 : tram (4.4/0.4)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.16
|   |   |   |   |   |   |   |   |   |   featureH < 0.64 : bus (32.59/13.08)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.64 : car (9.17/1.17)
|   |   |   |   |   |   |   |   featureJ >= 1.19
|   |   |   |   |   |   |   |   |   speed95Quantile < 12.07
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 976.69
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.22 : bus (23.96/2.68)
|   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.22
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.27 : bus (10.38/1.96)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.6
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.97 : bus (68.68/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.97 : train (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.6 : tram (0.28/0)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.94 : train (1.26/-0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 976.69 : bus (25.9/12.32)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 12.07 : car (10.79/4.79)
|   |   |   |   |   |   |   travelDistance >= 227.75
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (37.94/2.79)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 540.91 : bus (27.1/2.56)
|   |   |   |   |   |   featureT >= 0.23
|   |   |   |   |   |   |   featureK < 1.85
|   |   |   |   |   |   |   |   headingVariance < 12.78
|   |   |   |   |   |   |   |   |   featureP < 2.22
|   |   |   |   |   |   |   |   |   |   featureJ < 1.5
|   |   |   |   |   |   |   |   |   |   |   speedMax < 11.39
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.11 : car (6.33/2.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.27 : bus (33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.27 : bus (26.31/1.31)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.4 : bus (7.33/2.16)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.72 : car (20.66/5.66)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 11.39 : car (31.89/5.89)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.5
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.6
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.03 : car (5/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMean < 5.93
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.98
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.1 : car (2.27/1.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 6.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.96 : bus (50.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.26 : bus (2.27/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.01 : bus (6.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.79 : bus (14.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.79 : bus (36.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1 : car (0.27/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 6.95 : bus (11.45/0.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.9 : car (0.27/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.98 : car (4.08/2.06)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMean >= 5.93 : bus (8.17/3.12)
|   |   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.6
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.6 : bus (8.36/2.24)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.6
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 521.04 : tram (1.02/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 521.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.08 : train (0.36/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.48 : bus (66.72/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.44 : tram (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.34 : bus (6.36/0.36)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.34 : bus (39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 3 : bus (32/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.03 : bus (17.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.96 : train (1.08/0.48)
|   |   |   |   |   |   |   |   |   featureP >= 2.22
|   |   |   |   |   |   |   |   |   |   featureL < 2.23
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.57
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.48 : car (39.96/1)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.48 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.57 : bus (13/2)
|   |   |   |   |   |   |   |   |   |   featureL >= 2.23
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.04 : car (13.78/0.3)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 0.92 : car (11.66/0.25)
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 15.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.65 : bus (50.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.65
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.4 : car (5.71/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.34 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 10.19 : bus (29.96/1.94)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 10.19 : bus (22.19/4.44)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 15.96 : car (2.12/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.88 : car (5.54/1.54)
|   |   |   |   |   |   |   |   headingVariance >= 12.78
|   |   |   |   |   |   |   |   |   featureU < 1.19
|   |   |   |   |   |   |   |   |   |   featureI < 0.24 : car (10.28/2.24)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.24
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.45 : car (36.62/13.41)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.45 : bus (35.82/6.34)
|   |   |   |   |   |   |   |   |   featureU >= 1.19 : car (16.69/0.1)
|   |   |   |   |   |   |   featureK >= 1.85
|   |   |   |   |   |   |   |   featureO < 3.4
|   |   |   |   |   |   |   |   |   featureI < 2.66
|   |   |   |   |   |   |   |   |   |   featureD < 0.91
|   |   |   |   |   |   |   |   |   |   |   speedMax < 5.07 : bus (4.14/2.05)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 5.07
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 2.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.34 : bus (12.11/1.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.5 : car (0.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.5
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.45 : bus (76.89/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.45 : bus (7.45/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 2.46 : bus (5.67/0.67)
|   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.28 : bus (10.34/1.14)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.91
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 3.5 : bus (38.85/1.53)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 3.5 : bus (20.34/6.07)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.15 : train (0.76/-0)
|   |   |   |   |   |   |   |   |   featureI >= 2.66 : walk (2.04/0)
|   |   |   |   |   |   |   |   featureO >= 3.4 : bike (3.76/1)
|   |   |   |   |   trajectorySimilarityBus >= 89.97
|   |   |   |   |   |   featureS < 0.63
|   |   |   |   |   |   |   speed50Quantile < 0.67 : car (38.01/13.01)
|   |   |   |   |   |   |   speed50Quantile >= 0.67
|   |   |   |   |   |   |   |   featureC < 2.38 : tram (36.3/13.18)
|   |   |   |   |   |   |   |   featureC >= 2.38
|   |   |   |   |   |   |   |   |   speedMax < 9.53
|   |   |   |   |   |   |   |   |   |   featureK < 1.24 : bus (32.5/0.59)
|   |   |   |   |   |   |   |   |   |   featureK >= 1.24 : bus (17.88/5.88)
|   |   |   |   |   |   |   |   |   speedMax >= 9.53 : train (18.89/6.47)
|   |   |   |   |   |   featureS >= 0.63
|   |   |   |   |   |   |   featureK < 3.58
|   |   |   |   |   |   |   |   featureB < 0.07
|   |   |   |   |   |   |   |   |   featureR < 0.5
|   |   |   |   |   |   |   |   |   |   featureC < 1.75 : train (1.08/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 1.75
|   |   |   |   |   |   |   |   |   |   |   speed25Quantile < 1.37 : car (25.65/0.24)
|   |   |   |   |   |   |   |   |   |   |   speed25Quantile >= 1.37 : car (23.6/2.22)
|   |   |   |   |   |   |   |   |   featureR >= 0.5
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 179.29 : tram (1.07/0.07)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 179.29
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 131.69 : bus (35.21/11.5)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 131.69
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.47 : bus (3/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 48.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 2.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.14 : car (18.59/4.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.14 : car (36.07/1.53)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 2.62 : bus (2.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 48.03 : bus (1.07/0.05)
|   |   |   |   |   |   |   |   featureB >= 0.07
|   |   |   |   |   |   |   |   |   featureH < 1.21 : car (35.5/1.17)
|   |   |   |   |   |   |   |   |   featureH >= 1.21 : car (26.16/0)
|   |   |   |   |   |   |   featureK >= 3.58 : bus (6.8/1.63)
|   |   |   featureL >= 6.63
|   |   |   |   featureN < 3.04 : walk (16.98/7.67)
|   |   |   |   featureN >= 3.04
|   |   |   |   |   featureQ < 4.19
|   |   |   |   |   |   featureF < 7.5
|   |   |   |   |   |   |   featureD < 4.61 : bike (110/0)
|   |   |   |   |   |   |   featureD >= 4.61 : walk (1/0)
|   |   |   |   |   |   featureF >= 7.5 : walk (1.33/0)
|   |   |   |   |   featureQ >= 4.19
|   |   |   |   |   |   featureN < 5.71 : walk (22.62/0)
|   |   |   |   |   |   featureN >= 5.71
|   |   |   |   |   |   |   featureC < 42.1 : bike (38.65/9.31)
|   |   |   |   |   |   |   featureC >= 42.1 : bike (41/0)
|   speedMedian >= 9.14
|   |   featureM < 2.18
|   |   |   featureA < 0.01
|   |   |   |   featureE < 0.04
|   |   |   |   |   featureL < 0.12 : stationary (55.42/0)
|   |   |   |   |   featureL >= 0.12 : stationary (16.37/1.12)
|   |   |   |   featureE >= 0.04 : train (3.35/-0)
|   |   |   featureA >= 0.01
|   |   |   |   trajectorySimilarityTram < 187.94
|   |   |   |   |   featureJ < 1.13
|   |   |   |   |   |   featureO < 0.18 : stationary (1.2/0.08)
|   |   |   |   |   |   featureO >= 0.18
|   |   |   |   |   |   |   speedMin < 16.71
|   |   |   |   |   |   |   |   featureU < 0.52
|   |   |   |   |   |   |   |   |   featureL < 0.53 : tram (6.46/2.46)
|   |   |   |   |   |   |   |   |   featureL >= 0.53
|   |   |   |   |   |   |   |   |   |   featureD < 0.34
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.17 : tram (36/0)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.22
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.15 : train (0.24/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.2 : train (0.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.29 : tram (29/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.29 : tram (11.16/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.62 : train (0.08/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.22 : tram (35.08/0.08)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.34 : tram (1.79/0.79)
|   |   |   |   |   |   |   |   featureU >= 0.52 : train (0.87/0.08)
|   |   |   |   |   |   |   speedMin >= 16.71 : train (1.05/0)
|   |   |   |   |   featureJ >= 1.13 : train (13.82/7.89)
|   |   |   |   trajectorySimilarityTram >= 187.94
|   |   |   |   |   featureU < 0.52
|   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   featureM < 1.18
|   |   |   |   |   |   |   |   featureC < 1.97
|   |   |   |   |   |   |   |   |   featureR < 0.23 : train (146.5/0)
|   |   |   |   |   |   |   |   |   featureR >= 0.23
|   |   |   |   |   |   |   |   |   |   featureN < 0.07 : train (12.88/0.88)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.07
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.41 : train (48.46/0)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.41 : train (4.17/0.58)
|   |   |   |   |   |   |   |   featureC >= 1.97
|   |   |   |   |   |   |   |   |   featureD < 0.1 : stationary (4.09/0)
|   |   |   |   |   |   |   |   |   featureD >= 0.1
|   |   |   |   |   |   |   |   |   |   featureF < 0.68
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.28 : train (28.75/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.28 : train (12.58/0.58)
|   |   |   |   |   |   |   |   |   |   featureF >= 0.68 : stationary (0.88/0)
|   |   |   |   |   |   |   featureM >= 1.18
|   |   |   |   |   |   |   |   speed75Quantile < 17.17 : train (31.84/8.37)
|   |   |   |   |   |   |   |   speed75Quantile >= 17.17
|   |   |   |   |   |   |   |   |   featureC < 2.87
|   |   |   |   |   |   |   |   |   |   featureD < 0.59 : train (96.65/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.59 : train (20.46/0.46)
|   |   |   |   |   |   |   |   |   featureC >= 2.87 : train (2.15/0.92)
|   |   |   |   |   |   featureA >= 0.11
|   |   |   |   |   |   |   featureN < 0.32
|   |   |   |   |   |   |   |   featureD < 1.09 : train (37.05/5.79)
|   |   |   |   |   |   |   |   featureD >= 1.09 : bike (3.63/1.88)
|   |   |   |   |   |   |   featureN >= 0.32 : bus (14.13/5.33)
|   |   |   |   |   featureU >= 0.52 : car (35.84/18.25)
|   |   featureM >= 2.18
|   |   |   featureE < 0.78
|   |   |   |   featureU < 0.76
|   |   |   |   |   trajectorySimilarityBus < 170.31
|   |   |   |   |   |   featureU < 0.61 : bus (36.38/20.86)
|   |   |   |   |   |   featureU >= 0.61
|   |   |   |   |   |   |   featureI < 0.17 : bus (4.26/1.26)
|   |   |   |   |   |   |   featureI >= 0.17
|   |   |   |   |   |   |   |   featureE < 0.7 : bus (54.52/0)
|   |   |   |   |   |   |   |   featureE >= 0.7 : car (0.26/0)
|   |   |   |   |   trajectorySimilarityBus >= 170.31
|   |   |   |   |   |   speed50Quantile < 17.54 : tram (16.96/10.69)
|   |   |   |   |   |   speed50Quantile >= 17.54 : train (25.44/0.89)
|   |   |   |   featureU >= 0.76
|   |   |   |   |   featureJ < 2.55
|   |   |   |   |   |   travelDistance < 1531.49
|   |   |   |   |   |   |   featureC < 2.79
|   |   |   |   |   |   |   |   featureC < 1.59 : train (5/0)
|   |   |   |   |   |   |   |   featureC >= 1.59 : car (143.16/0)
|   |   |   |   |   |   |   featureC >= 2.79
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06
|   |   |   |   |   |   |   |   |   featureL < 2.78 : car (23.36/4.26)
|   |   |   |   |   |   |   |   |   featureL >= 2.78
|   |   |   |   |   |   |   |   |   |   featureC < 5.51
|   |   |   |   |   |   |   |   |   |   |   featureO < 2.13 : bus (54.17/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 2.13 : bus (1.17/0.17)
|   |   |   |   |   |   |   |   |   |   featureC >= 5.51 : car (6.34/2)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   featureT < 0.31 : train (4/0)
|   |   |   |   |   |   |   |   |   featureT >= 0.31
|   |   |   |   |   |   |   |   |   |   featureN < 0.82 : car (18.1/9)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.82
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.15 : bus (5/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.15
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 2.21
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin < 10.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.35 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 2.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.34 : tram (0.25/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.19 : car (4/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.33 : bus (0.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.33
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.44 : car (90.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.44 : car (11.37/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.44 : bus (3.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 2.34 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin >= 10.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.73 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.73 : car (112.65/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.24 : car (21.2/0.6)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 2.21 : bus (2/-0)
|   |   |   |   |   |   travelDistance >= 1531.49 : train (17.37/0.37)
|   |   |   |   |   featureJ >= 2.55
|   |   |   |   |   |   speedMax < 13.43 : bus (31.16/1.01)
|   |   |   |   |   |   speedMax >= 13.43
|   |   |   |   |   |   |   featureD < 0.57 : tram (6.9/0.9)
|   |   |   |   |   |   |   featureD >= 0.57
|   |   |   |   |   |   |   |   speedMedian < 12.61 : car (38.54/10.97)
|   |   |   |   |   |   |   |   speedMedian >= 12.61
|   |   |   |   |   |   |   |   |   featureL < 3.04 : car (12.62/4.21)
|   |   |   |   |   |   |   |   |   featureL >= 3.04
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.06
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 967.37
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.63 : bus (20.4/2.48)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.63
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.97 : bus (21.03/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.97 : bus (23/0)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 967.37 : car (2.15/0.12)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.06 : car (5.37/2.31)
|   |   |   featureE >= 0.78
|   |   |   |   featureO < 3.22
|   |   |   |   |   accumulatedTravelDistance < 1046.57
|   |   |   |   |   |   featureI < 3.67
|   |   |   |   |   |   |   featureL < 4.1
|   |   |   |   |   |   |   |   featureQ < 1.49
|   |   |   |   |   |   |   |   |   speed95Quantile < 11.54 : train (7.1/2.07)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 11.54
|   |   |   |   |   |   |   |   |   |   featureE < 0.81
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 74.94 : bus (11.29/0.29)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 74.94
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.11 : car (5/2)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.11 : car (68.9/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.81
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.35 : car (68.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.35 : car (8.22/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.56 : train (1.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.72 : car (111.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.72
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 1.21 : car (13.88/0.88)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1.21 : car (35/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.89 : bus (0.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.17 : car (15.07/1.53)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.88 : car (419.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.88
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 1.13 : car (169.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1.13 : car (5.66/0.44)
|   |   |   |   |   |   |   |   featureQ >= 1.49 : bus (9/2)
|   |   |   |   |   |   |   featureL >= 4.1
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 168.01
|   |   |   |   |   |   |   |   |   featureN < 1.5
|   |   |   |   |   |   |   |   |   |   featureU < 1.41 : bus (45.29/0)
|   |   |   |   |   |   |   |   |   |   featureU >= 1.41 : bus (3.72/0.72)
|   |   |   |   |   |   |   |   |   featureN >= 1.5
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 899.97 : bus (25.15/1.54)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 899.97 : car (15.31/2.2)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 168.01
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 485.93 : bus (7.37/0.13)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 485.93
|   |   |   |   |   |   |   |   |   |   featureB < 0.03 : train (3.13/0.13)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : car (36.87/1.42)
|   |   |   |   |   |   featureI >= 3.67 : bus (5.87/2.87)
|   |   |   |   |   accumulatedTravelDistance >= 1046.57
|   |   |   |   |   |   featureQ < 1.81
|   |   |   |   |   |   |   featureC < 7.08
|   |   |   |   |   |   |   |   featureS < 1.15
|   |   |   |   |   |   |   |   |   featureC < 5.71
|   |   |   |   |   |   |   |   |   |   featureJ < 1.6 : car (0.6/0.3)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.6 : car (104.72/0)
|   |   |   |   |   |   |   |   |   featureC >= 5.71 : car (4.45/0.45)
|   |   |   |   |   |   |   |   featureS >= 1.15 : car (608.63/0)
|   |   |   |   |   |   |   featureC >= 7.08 : car (22.18/3.18)
|   |   |   |   |   |   featureQ >= 1.81 : car (7.99/4.99)
|   |   |   |   featureO >= 3.22
|   |   |   |   |   featureQ < 3.32 : bus (28.86/9.86)
|   |   |   |   |   featureQ >= 3.32
|   |   |   |   |   |   featureE < 2.54 : bus (3.37/0.37)
|   |   |   |   |   |   featureE >= 2.54 : walk (44.26/0)

Size of the tree : 519


RandomTree
==========

featureA < 1.31
|   featureT < 0.27
|   |   featureJ < 0.17
|   |   |   featureL < 0.15
|   |   |   |   featureO < 0.08
|   |   |   |   |   accumulatedTravelDistance < 4.55 : stationary (340.44/0)
|   |   |   |   |   accumulatedTravelDistance >= 4.55
|   |   |   |   |   |   headingVariance < 0.08 : stationary (13.13/4)
|   |   |   |   |   |   headingVariance >= 0.08
|   |   |   |   |   |   |   stationaryPointRatio < 0.17 : train (1.45/0.45)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.17 : stationary (170.99/0)
|   |   |   |   featureO >= 0.08
|   |   |   |   |   featureL < 0.12 : train (5/2)
|   |   |   |   |   featureL >= 0.12
|   |   |   |   |   |   featureN < 0.05 : train (1/0)
|   |   |   |   |   |   featureN >= 0.05
|   |   |   |   |   |   |   featureE < 0.04 : stationary (64/0)
|   |   |   |   |   |   |   featureE >= 0.04 : car (1/0)
|   |   |   featureL >= 0.15 : stationary (26/10)
|   |   featureJ >= 0.17
|   |   |   trajectorySimilarityBus < 51.98
|   |   |   |   speed75Quantile < 1.26
|   |   |   |   |   travelDistance < 78.28
|   |   |   |   |   |   trajectorySimilarityTrain < 461.22
|   |   |   |   |   |   |   featureM < 0.84
|   |   |   |   |   |   |   |   featureQ < 0.09 : bus (28.07/10.07)
|   |   |   |   |   |   |   |   featureQ >= 0.09
|   |   |   |   |   |   |   |   |   headingVariance < 9.87 : train (36.81/2.88)
|   |   |   |   |   |   |   |   |   headingVariance >= 9.87 : bike (15.16/9.16)
|   |   |   |   |   |   |   featureM >= 0.84 : bus (33.3/8.56)
|   |   |   |   |   |   trajectorySimilarityTrain >= 461.22
|   |   |   |   |   |   |   featureQ < 0.2
|   |   |   |   |   |   |   |   featureE < 0.07
|   |   |   |   |   |   |   |   |   featureO < 0.03 : train (28/5)
|   |   |   |   |   |   |   |   |   featureO >= 0.03 : stationary (37.52/1.74)
|   |   |   |   |   |   |   |   featureE >= 0.07
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.48
|   |   |   |   |   |   |   |   |   |   featureK < 0.16 : train (4.41/0.11)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.16
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.19 : bus (29.9/4.9)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.19 : bus (26/0)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.48 : stationary (3.41/0.41)
|   |   |   |   |   |   |   featureQ >= 0.2
|   |   |   |   |   |   |   |   featureK < 1.22
|   |   |   |   |   |   |   |   |   speed75Quantile < 0.12 : stationary (23.92/7.45)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 0.12
|   |   |   |   |   |   |   |   |   |   featureT < 0.02 : train (1.59/0.62)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.02
|   |   |   |   |   |   |   |   |   |   |   featureP < 1.12
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.27 : stationary (20.33/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.27 : stationary (25.27/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.26 : stationary (18.8/0.62)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.41 : stationary (5.88/0.88)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 1.12 : train (0.97/0.35)
|   |   |   |   |   |   |   |   featureK >= 1.22 : train (9.47/2.18)
|   |   |   |   |   travelDistance >= 78.28
|   |   |   |   |   |   featureT < 0.12 : train (31.75/0.87)
|   |   |   |   |   |   featureT >= 0.12 : car (14.19/1.19)
|   |   |   |   speed75Quantile >= 1.26
|   |   |   |   |   trajectorySimilarityTram < 540.91 : tram (28.46/2.39)
|   |   |   |   |   trajectorySimilarityTram >= 540.91
|   |   |   |   |   |   featureN < 0.26
|   |   |   |   |   |   |   trajectorySimilarityBus < 42.26
|   |   |   |   |   |   |   |   featureD < 0.27
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 18.7 : car (38.07/22.07)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 18.7 : train (11.42/0.48)
|   |   |   |   |   |   |   |   featureD >= 0.27
|   |   |   |   |   |   |   |   |   featureL < 1.5
|   |   |   |   |   |   |   |   |   |   featureD < 0.64
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.17 : bus (5.64/1.64)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.17 : bus (36.38/1.43)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.64 : train (2.23/0.79)
|   |   |   |   |   |   |   |   |   featureL >= 1.5 : train (3.95/0.95)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 42.26 : train (20.5/1.17)
|   |   |   |   |   |   featureN >= 0.26
|   |   |   |   |   |   |   featureD < 0.96
|   |   |   |   |   |   |   |   featureK < 0.43 : car (14.11/8.11)
|   |   |   |   |   |   |   |   featureK >= 0.43
|   |   |   |   |   |   |   |   |   featureG < 0.07 : car (12.19/6.19)
|   |   |   |   |   |   |   |   |   featureG >= 0.07
|   |   |   |   |   |   |   |   |   |   featureG < 0.41
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.25
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.79
|   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 3.87 : bus (17.65/3.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 3.87
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.23 : bus (4.47/1.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1 : bus (7.09/1.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.64 : bus (32.47/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.21 : bus (29.25/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.21 : bus (16/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.79 : bus (7.87/3.87)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.25 : car (3.16/1.16)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.41
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.04 : train (0.96/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.46 : bus (39.19/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.17 : bus (14.54/1.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.5 : bus (1.77/0.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.5 : bus (52.19/0)
|   |   |   |   |   |   |   featureD >= 0.96 : car (14.15/1.15)
|   |   |   trajectorySimilarityBus >= 51.98
|   |   |   |   featureB < 0.08
|   |   |   |   |   speedMean < 2.96
|   |   |   |   |   |   featureO < 0.43
|   |   |   |   |   |   |   headingVariance < 39.63
|   |   |   |   |   |   |   |   featureE < 0.04 : stationary (5.61/0)
|   |   |   |   |   |   |   |   featureE >= 0.04
|   |   |   |   |   |   |   |   |   speed50Quantile < 0.25
|   |   |   |   |   |   |   |   |   |   featureM < 0.03 : bus (1.08/0.29)
|   |   |   |   |   |   |   |   |   |   featureM >= 0.03
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 70.82 : train (16.65/2.15)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 70.82
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.45 : train (102.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.45 : train (2.17/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.32 : train (1.69/0.76)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 0.25 : train (14.02/5.21)
|   |   |   |   |   |   |   headingVariance >= 39.63 : stationary (20.25/1.97)
|   |   |   |   |   |   featureO >= 0.43
|   |   |   |   |   |   |   featureA < 0.08 : car (37.48/14.48)
|   |   |   |   |   |   |   featureA >= 0.08 : bus (18.24/10.37)
|   |   |   |   |   speedMean >= 2.96
|   |   |   |   |   |   featureR < 0.34
|   |   |   |   |   |   |   trajectorySimilarityTrain < 258.07
|   |   |   |   |   |   |   |   featureD < 0.05 : stationary (1.93/0)
|   |   |   |   |   |   |   |   featureD >= 0.05
|   |   |   |   |   |   |   |   |   featureA < 0.04 : train (140/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.04 : train (39.57/2.08)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 258.07
|   |   |   |   |   |   |   |   featureO < 0.25
|   |   |   |   |   |   |   |   |   featureE < 0.92
|   |   |   |   |   |   |   |   |   |   featureG < 0.04 : stationary (8.17/3.97)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.04
|   |   |   |   |   |   |   |   |   |   |   speedMax < 11.21 : tram (8.55/0.55)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 11.21
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 0.04 : bus (2.15/0.92)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.93 : train (156.07/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.93 : train (1.23/0.61)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.08 : train (4/1)
|   |   |   |   |   |   |   |   |   featureE >= 0.92 : bike (4/-0)
|   |   |   |   |   |   |   |   featureO >= 0.25
|   |   |   |   |   |   |   |   |   featureR < 0.24
|   |   |   |   |   |   |   |   |   |   featureR < 0.13 : train (9.29/1)
|   |   |   |   |   |   |   |   |   |   featureR >= 0.13
|   |   |   |   |   |   |   |   |   |   |   speedVariance < 21.91
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 17.2
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.55 : train (3.36/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.09
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.16 : tram (44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.16
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.1 : tram (3.12/1.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.15 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.49 : tram (12.56/0.56)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.49 : tram (52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.03 : train (0.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.09 : train (1.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 17.2 : train (3.21/0)
|   |   |   |   |   |   |   |   |   |   |   speedVariance >= 21.91 : train (14.96/0)
|   |   |   |   |   |   |   |   |   featureR >= 0.24
|   |   |   |   |   |   |   |   |   |   speedVariance < 14.08
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.27
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.31
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.8 : car (0.3/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.8
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.24 : tram (41/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.24 : tram (4.3/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.36 : bus (0.91/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.31 : tram (12.51/1.51)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.27 : car (2.21/1.21)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 14.08 : car (4.3/1.25)
|   |   |   |   |   |   featureR >= 0.34
|   |   |   |   |   |   |   trajectorySimilarityTrain < 161.58
|   |   |   |   |   |   |   |   speed25Quantile < 6.53 : train (29.6/7.08)
|   |   |   |   |   |   |   |   speed25Quantile >= 6.53
|   |   |   |   |   |   |   |   |   featureU < 0.07 : bus (1.03/0)
|   |   |   |   |   |   |   |   |   featureU >= 0.07
|   |   |   |   |   |   |   |   |   |   featureU < 0.51
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.12
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 1.03 : train (86.6/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 1.03 : train (12.06/0.26)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.12 : train (34.86/2.83)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.51 : train (5.8/1.03)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 161.58
|   |   |   |   |   |   |   |   speed75Quantile < 17.36
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.86
|   |   |   |   |   |   |   |   |   |   featureS < 0.55
|   |   |   |   |   |   |   |   |   |   |   speedMin < 3.85 : bus (38.16/2.28)
|   |   |   |   |   |   |   |   |   |   |   speedMin >= 3.85 : bus (8.72/3.52)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.55 : train (2.45/1.27)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.86 : train (8.77/0.32)
|   |   |   |   |   |   |   |   speed75Quantile >= 17.36 : train (29.6/9.08)
|   |   |   |   featureB >= 0.08
|   |   |   |   |   featureM < 1.82
|   |   |   |   |   |   featureK < 0.15 : bike (32.6/0)
|   |   |   |   |   |   featureK >= 0.15 : train (16.37/-0)
|   |   |   |   |   featureM >= 1.82
|   |   |   |   |   |   featureN < 0.66
|   |   |   |   |   |   |   trajectorySimilarityTram < 521.32 : tram (1.05/0.05)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 521.32
|   |   |   |   |   |   |   |   featureU < 0.48 : car (75.54/0)
|   |   |   |   |   |   |   |   featureU >= 0.48 : car (11.59/0.59)
|   |   |   |   |   |   featureN >= 0.66 : tram (3.79/1.79)
|   featureT >= 0.27
|   |   trajectorySimilarityTrain < 963.94
|   |   |   trajectorySimilarityBus < 63.14
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   speedMax < 23.87
|   |   |   |   |   |   featureJ < 1.46
|   |   |   |   |   |   |   speed25Quantile < 3.44
|   |   |   |   |   |   |   |   featureS < 0.66
|   |   |   |   |   |   |   |   |   featureB < 0.01 : car (2/0)
|   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   featureN < 0.57 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.57 : bus (6.81/0.64)
|   |   |   |   |   |   |   |   featureS >= 0.66
|   |   |   |   |   |   |   |   |   speedMax < 7.96 : car (21.94/3.47)
|   |   |   |   |   |   |   |   |   speedMax >= 7.96 : bus (22.99/7.66)
|   |   |   |   |   |   |   speed25Quantile >= 3.44 : car (31.98/1.63)
|   |   |   |   |   |   featureJ >= 1.46
|   |   |   |   |   |   |   featureR < 0.87
|   |   |   |   |   |   |   |   featureD < 0.99
|   |   |   |   |   |   |   |   |   featureP < 2.1
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 856.39 : car (2.02/0.01)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 856.39
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 931.73
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.77
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.96 : bus (212/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.96 : car (0.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.77
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.38 : bus (10.65/1.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.24 : bike (1.08/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.24 : bus (42.22/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 931.73 : car (1.01/0)
|   |   |   |   |   |   |   |   |   featureP >= 2.1
|   |   |   |   |   |   |   |   |   |   featureD < 0.67
|   |   |   |   |   |   |   |   |   |   |   speedMax < 8.89 : car (20.35/2.1)
|   |   |   |   |   |   |   |   |   |   |   speedMax >= 8.89 : bus (25.71/7.71)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.67
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.9 : bus (36.44/0.22)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.9
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian < 2.17 : car (6.29/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   speedMedian >= 2.17
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.71 : bus (38.45/12.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.68 : bus (40.82/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.68 : bus (7.82/0.82)
|   |   |   |   |   |   |   |   featureD >= 0.99 : car (31/5)
|   |   |   |   |   |   |   featureR >= 0.87
|   |   |   |   |   |   |   |   featureD < 0.9
|   |   |   |   |   |   |   |   |   featureD < 0.56 : bus (10.22/0.22)
|   |   |   |   |   |   |   |   |   featureD >= 0.56
|   |   |   |   |   |   |   |   |   |   featureC < 6.34 : bus (100/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 6.34
|   |   |   |   |   |   |   |   |   |   |   featureJ < 4.6 : bus (40.62/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.6 : bus (4.66/0.66)
|   |   |   |   |   |   |   |   featureD >= 0.9
|   |   |   |   |   |   |   |   |   featureC < 6.43 : bus (33.74/10.43)
|   |   |   |   |   |   |   |   |   featureC >= 6.43
|   |   |   |   |   |   |   |   |   |   featureS < 0.7 : train (1.97/0)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.7
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.91 : bus (9.87/0.87)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.91 : bus (39.19/0)
|   |   |   |   |   speedMax >= 23.87 : car (24.93/0.45)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   featureO < 1.13 : bus (18.25/4.15)
|   |   |   |   |   featureO >= 1.13 : car (30.57/12.66)
|   |   |   trajectorySimilarityBus >= 63.14
|   |   |   |   speedMin < 33.5
|   |   |   |   |   featureS < 0.85
|   |   |   |   |   |   featureR < 0.31 : car (27.4/5.4)
|   |   |   |   |   |   featureR >= 0.31
|   |   |   |   |   |   |   maximumTravelDistance < 21.94
|   |   |   |   |   |   |   |   maximumTravelDistance < 15.96
|   |   |   |   |   |   |   |   |   travelDistance < 410.42
|   |   |   |   |   |   |   |   |   |   featureE < 0.82
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 90.78 : car (1.03/0.03)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 90.78
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 1.99 : tram (1.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 1.99
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.03 : bus (33.91/1.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.03 : bus (39.18/0.72)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.82 : train (3.38/0.37)
|   |   |   |   |   |   |   |   |   travelDistance >= 410.42 : tram (12.59/0.53)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 15.96
|   |   |   |   |   |   |   |   |   featureO < 1.35
|   |   |   |   |   |   |   |   |   |   speedMax < 13.71 : car (3.16/0.14)
|   |   |   |   |   |   |   |   |   |   speedMax >= 13.71 : bus (39.02/6.38)
|   |   |   |   |   |   |   |   |   featureO >= 1.35 : car (7.12/0.12)
|   |   |   |   |   |   |   maximumTravelDistance >= 21.94 : train (32.52/13.02)
|   |   |   |   |   featureS >= 0.85
|   |   |   |   |   |   speedMax < 37.54
|   |   |   |   |   |   |   trajectorySimilarityTram < 171.99 : tram (9.33/1.33)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 171.99
|   |   |   |   |   |   |   |   featureR < 1.03
|   |   |   |   |   |   |   |   |   featureT < 0.42 : bus (26.18/7.18)
|   |   |   |   |   |   |   |   |   featureT >= 0.42
|   |   |   |   |   |   |   |   |   |   featureJ < 1.87
|   |   |   |   |   |   |   |   |   |   |   featureU < 0.91 : car (8.18/1)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 0.91 : car (112.18/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.87
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 217.76
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.73 : bus (31.96/7.64)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.73 : car (15.1/0.03)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 217.76
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 7.07 : bus (6.14/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 7.07
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 940.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.28 : car (12/1.5)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.24
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.81 : car (28.5/0.63)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.81 : car (141.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.24 : bus (2/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.47 : bus (0.75/0.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 940.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 24.05 : bus (8.18/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 24.05
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.85 : bus (0.47/0.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.85
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : bike (0.15/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 4.25 : car (6.17/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 4.25 : car (36.17/0)
|   |   |   |   |   |   |   |   featureR >= 1.03
|   |   |   |   |   |   |   |   |   featureH < 0.51 : bus (18.39/0)
|   |   |   |   |   |   |   |   |   featureH >= 0.51
|   |   |   |   |   |   |   |   |   |   featureD < 0.92 : bus (22.78/0.59)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.92
|   |   |   |   |   |   |   |   |   |   |   featureI < 3.66
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 461.65 : car (33.75/1.28)
|   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 461.65
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 24.66 : bus (16.87/7.32)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 24.66 : car (27/1.02)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 3.66 : bus (2/0)
|   |   |   |   |   |   speedMax >= 37.54 : train (8.29/0.29)
|   |   |   |   speedMin >= 33.5 : train (29.08/0.95)
|   |   trajectorySimilarityTrain >= 963.94
|   |   |   speedMean < 12.95
|   |   |   |   speedMax < 11.02
|   |   |   |   |   featureE < 0.1 : stationary (15/0)
|   |   |   |   |   featureE >= 0.1
|   |   |   |   |   |   highSpeedPointRatio < 0.02 : car (32.4/12.68)
|   |   |   |   |   |   highSpeedPointRatio >= 0.02
|   |   |   |   |   |   |   headingVariance < 26.36
|   |   |   |   |   |   |   |   featureN < 1.7 : bus (28.95/5.44)
|   |   |   |   |   |   |   |   featureN >= 1.7 : bus (29.58/0.41)
|   |   |   |   |   |   |   headingVariance >= 26.36 : car (2.09/0.04)
|   |   |   |   speedMax >= 11.02
|   |   |   |   |   maximumTravelDistance < 16.5
|   |   |   |   |   |   trajectorySimilarityBus < 122.56
|   |   |   |   |   |   |   featureS < 1.28
|   |   |   |   |   |   |   |   featureE < 0.67
|   |   |   |   |   |   |   |   |   speed50Quantile < 13.39
|   |   |   |   |   |   |   |   |   |   featureU < 0.88
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 14.3
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.52 : car (34.73/2.36)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.52 : bus (11.39/4.15)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 14.3 : bus (17.42/2.3)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.88
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.75
|   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.49 : car (27.12/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.49 : car (28.17/0)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.75 : bus (1.17/-0)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 13.39 : bus (11.19/0.13)
|   |   |   |   |   |   |   |   featureE >= 0.67 : bus (14/3.14)
|   |   |   |   |   |   |   featureS >= 1.28 : bus (29.32/2.09)
|   |   |   |   |   |   trajectorySimilarityBus >= 122.56
|   |   |   |   |   |   |   featureR < 0.81
|   |   |   |   |   |   |   |   featureD < 0.55 : car (7.71/2.63)
|   |   |   |   |   |   |   |   featureD >= 0.55
|   |   |   |   |   |   |   |   |   featureO < 2.24
|   |   |   |   |   |   |   |   |   |   featureM < 2.89 : car (64.5/0)
|   |   |   |   |   |   |   |   |   |   featureM >= 2.89
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.1 : car (3.08/0.08)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.1
|   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.41 : car (59.71/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.41 : car (2.08/0.04)
|   |   |   |   |   |   |   |   |   featureO >= 2.24 : car (0.21/0.08)
|   |   |   |   |   |   |   featureR >= 0.81 : car (22.67/7.04)
|   |   |   |   |   maximumTravelDistance >= 16.5
|   |   |   |   |   |   speedMax < 12.8 : train (1.04/0.03)
|   |   |   |   |   |   speedMax >= 12.8
|   |   |   |   |   |   |   featureU < 0.63 : bus (6.42/2.34)
|   |   |   |   |   |   |   featureU >= 0.63
|   |   |   |   |   |   |   |   featureC < 5.64
|   |   |   |   |   |   |   |   |   featureF < 0.91
|   |   |   |   |   |   |   |   |   |   featureF < 0.85
|   |   |   |   |   |   |   |   |   |   |   featureN < 0.54 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.97 : car (29.76/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.97 : car (35.61/0)
|   |   |   |   |   |   |   |   |   |   featureF >= 0.85 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   featureF >= 0.91
|   |   |   |   |   |   |   |   |   |   featureL < 3.55 : car (35.42/0)
|   |   |   |   |   |   |   |   |   |   featureL >= 3.55 : car (6.08/0.04)
|   |   |   |   |   |   |   |   featureC >= 5.64 : car (32.98/1.79)
|   |   |   speedMean >= 12.95
|   |   |   |   trajectorySimilarityBus < 140.82
|   |   |   |   |   accumulatedTravelDistance < 1051.82
|   |   |   |   |   |   featureK < 2.51
|   |   |   |   |   |   |   featureL < 3.67
|   |   |   |   |   |   |   |   featureC < 1.78 : bus (1.2/0.2)
|   |   |   |   |   |   |   |   featureC >= 1.78
|   |   |   |   |   |   |   |   |   featureA < 0.33
|   |   |   |   |   |   |   |   |   |   featureD < 0.43 : bus (0.25/0.1)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.43
|   |   |   |   |   |   |   |   |   |   |   featureF < 1.63
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.32 : tram (0.2/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.32
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.68 : bus (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.55 : car (35.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.55 : car (5.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.67 : car (43.49/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.88 : car (49.54/0)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 1.63 : bus (0.05/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.33 : car (2.43/1.38)
|   |   |   |   |   |   |   featureL >= 3.67 : bus (24.22/8.53)
|   |   |   |   |   |   featureK >= 2.51 : bus (27.44/3)
|   |   |   |   |   accumulatedTravelDistance >= 1051.82
|   |   |   |   |   |   featureM < 3.56 : car (1.91/1.21)
|   |   |   |   |   |   featureM >= 3.56
|   |   |   |   |   |   |   featureL < 4.7
|   |   |   |   |   |   |   |   featureC < 6.43
|   |   |   |   |   |   |   |   |   featureL < 3.46 : car (75.42/0)
|   |   |   |   |   |   |   |   |   featureL >= 3.46 : car (37.33/0.3)
|   |   |   |   |   |   |   |   featureC >= 6.43 : car (1.39/0.3)
|   |   |   |   |   |   |   featureL >= 4.7 : bus (0.27/-0)
|   |   |   |   trajectorySimilarityBus >= 140.82
|   |   |   |   |   featureK < 2.38
|   |   |   |   |   |   featureE < 0.58 : car (18.63/12.89)
|   |   |   |   |   |   featureE >= 0.58
|   |   |   |   |   |   |   featureB < 0.17
|   |   |   |   |   |   |   |   featureC < 4.62
|   |   |   |   |   |   |   |   |   featureT < 0.38
|   |   |   |   |   |   |   |   |   |   featureS < 0.67 : car (18.64/0.64)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.67 : car (36.64/0)
|   |   |   |   |   |   |   |   |   featureT >= 0.38 : car (848.66/0)
|   |   |   |   |   |   |   |   featureC >= 4.62
|   |   |   |   |   |   |   |   |   featureB < 0.01 : bus (0.96/0.32)
|   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   featureN < 2.23
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.81
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.84 : car (10.6/1.6)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.84
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.52 : car (99.55/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.52 : car (3.32/0.32)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.82 : car (3.96/0.64)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.82
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 2.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.93 : car (9.64/0.64)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.93 : car (153.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 2.69 : bus (0.32/0)
|   |   |   |   |   |   |   |   |   |   featureN >= 2.23 : bus (1.28/-0)
|   |   |   |   |   |   |   featureB >= 0.17 : train (0.64/-0)
|   |   |   |   |   featureK >= 2.38 : car (17.7/5.11)
featureA >= 1.31
|   speedMax < 3.17
|   |   featureG < 1.83
|   |   |   accumulatedTravelDistance < 22.45 : bus (10.34/6.16)
|   |   |   accumulatedTravelDistance >= 22.45
|   |   |   |   featureN < 0.11 : bike (2.18/0)
|   |   |   |   featureN >= 0.11
|   |   |   |   |   featureL < 8.28 : walk (33.09/4.91)
|   |   |   |   |   featureL >= 8.28
|   |   |   |   |   |   featureA < 17.8 : walk (94.55/0)
|   |   |   |   |   |   featureA >= 17.8 : bike (1.09/0.55)
|   |   featureG >= 1.83
|   |   |   featureT < 0.29 : walk (6.77/3.18)
|   |   |   featureT >= 0.29
|   |   |   |   featureN < 13.67 : walk (1512.28/0)
|   |   |   |   featureN >= 13.67 : walk (3.18/0.59)
|   speedMax >= 3.17
|   |   featureP < 0.86
|   |   |   featureJ < 7.52 : bus (3/0)
|   |   |   featureJ >= 7.52
|   |   |   |   featureF < 1.23
|   |   |   |   |   featureF < 1.23 : bike (128.82/0)
|   |   |   |   |   featureF >= 1.23 : walk (0.41/0)
|   |   |   |   featureF >= 1.23 : bike (722.65/0)
|   |   featureP >= 0.86
|   |   |   speedMean < 7.12
|   |   |   |   featureT < 1.63
|   |   |   |   |   featureE < 2.58 : bike (27.7/11.69)
|   |   |   |   |   featureE >= 2.58 : walk (19.17/0)
|   |   |   |   featureT >= 1.63
|   |   |   |   |   featureO < 7.86
|   |   |   |   |   |   featureR < 3.62
|   |   |   |   |   |   |   featureD < 3.67 : bike (53.67/0)
|   |   |   |   |   |   |   featureD >= 3.67 : walk (0.34/0)
|   |   |   |   |   |   featureR >= 3.62 : walk (18.86/0)
|   |   |   |   |   featureO >= 7.86
|   |   |   |   |   |   featureB < 0.25
|   |   |   |   |   |   |   featureR < 7.75 : bike (124.67/0)
|   |   |   |   |   |   |   featureR >= 7.75 : walk (0.67/0)
|   |   |   |   |   |   featureB >= 0.25 : walk (6.73/0)
|   |   |   speedMean >= 7.12
|   |   |   |   featureR < 2.96
|   |   |   |   |   featureK < 6.05
|   |   |   |   |   |   featureP < 7.67
|   |   |   |   |   |   |   featureB < 0.03 : bus (2.3/0.3)
|   |   |   |   |   |   |   featureB >= 0.03
|   |   |   |   |   |   |   |   featureS < 2.79 : bus (40.3/0)
|   |   |   |   |   |   |   |   featureS >= 2.79 : bike (0.07/0)
|   |   |   |   |   |   featureP >= 7.67 : bike (0.3/0)
|   |   |   |   |   featureK >= 6.05 : walk (0.15/0)
|   |   |   |   featureR >= 2.96 : walk (12.7/3.15)

Size of the tree : 527



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.3  (    12)  trajectorySimilarityTram
      0.27 (    18)  trajectorySimilarityBus
      0.25 (     9)  speed50Quantile
      0.24 (    23)  speedMax
      0.24 (    23)  featureA
      0.23 (     6)  travelDistance
      0.23 (     3)  highSpeedPointRatio
      0.23 (     6)  speedMedian
      0.23 (    16)  trajectorySimilarityTrain
      0.22 (    14)  maximumTravelDistance
      0.21 (    37)  featureE
      0.2  (    12)  speed95Quantile
      0.18 (    12)  headingVariance
      0.16 (    19)  featureQ
      0.15 (     7)  speedVariance
      0.15 (    26)  featureT
      0.15 (    29)  featureO
      0.15 (     5)  stationaryPointRatio
      0.15 (    24)  featureB
      0.15 (    24)  featureM
      0.14 (    40)  featureL
      0.14 (    35)  featureR
      0.14 (    10)  accumulatedTravelDistance
      0.13 (     9)  speed75Quantile
      0.13 (    25)  featureN
      0.13 (    29)  featureJ
      0.13 (    44)  featureD
      0.12 (     6)  speedMin
      0.12 (     9)  speedMean
      0.12 (     3)  lowSpeedPointRatio
      0.12 (     5)  speed25Quantile
      0.12 (    28)  featureK
      0.11 (    27)  featureU
      0.1  (    26)  featureP
      0.1  (     4)  mediumSpeedPointRatio
      0.09 (    31)  featureS
      0.09 (    21)  featureH
      0.08 (    40)  featureC
      0.06 (    15)  featureG
      0.05 (    20)  featureI
      0.05 (    20)  featureF
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

featureJ < 7.12
|   featureA < 0.07
|   |   featureQ < 0.05
|   |   |   featureK < 0.07
|   |   |   |   speedMin < 0.06
|   |   |   |   |   featureM < 0.08
|   |   |   |   |   |   speedMax < 0.01 : stationary (54.73/0)
|   |   |   |   |   |   speedMax >= 0.01 : stationary (32.19/7)
|   |   |   |   |   featureM >= 0.08 : stationary (382.94/0)
|   |   |   |   speedMin >= 0.06 : train (6.14/2.14)
|   |   |   featureK >= 0.07
|   |   |   |   speed50Quantile < 0.01
|   |   |   |   |   featureP < 0.13
|   |   |   |   |   |   featureJ < 0.15
|   |   |   |   |   |   |   featureS < 0.05 : stationary (41.51/0)
|   |   |   |   |   |   |   featureS >= 0.05 : stationary (15.4/4.93)
|   |   |   |   |   |   featureJ >= 0.15 : train (20/3)
|   |   |   |   |   featureP >= 0.13
|   |   |   |   |   |   featureT < 0.04
|   |   |   |   |   |   |   speedMax < 2.27 : stationary (32.49/1)
|   |   |   |   |   |   |   speedMax >= 2.27 : car (8.12/3.12)
|   |   |   |   |   |   featureT >= 0.04 : car (14.82/6.82)
|   |   |   |   speed50Quantile >= 0.01 : train (28.65/10.41)
|   |   featureQ >= 0.05
|   |   |   speedMin < 0.01
|   |   |   |   featureU < 0.38
|   |   |   |   |   travelDistance < 83.13
|   |   |   |   |   |   speed95Quantile < 1.83
|   |   |   |   |   |   |   featureD < 0.1
|   |   |   |   |   |   |   |   featureT < 0.03
|   |   |   |   |   |   |   |   |   featureD < 0.04 : stationary (14.21/0)
|   |   |   |   |   |   |   |   |   featureD >= 0.04 : train (32/3)
|   |   |   |   |   |   |   |   featureT >= 0.03
|   |   |   |   |   |   |   |   |   featureL < 0.44 : stationary (31.41/3)
|   |   |   |   |   |   |   |   |   featureL >= 0.44 : stationary (30.44/0)
|   |   |   |   |   |   |   featureD >= 0.1
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 28.34
|   |   |   |   |   |   |   |   |   featureQ < 0.09 : bus (26.66/3.66)
|   |   |   |   |   |   |   |   |   featureQ >= 0.09 : train (34.31/17.85)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 28.34 : train (27.95/3.39)
|   |   |   |   |   |   speed95Quantile >= 1.83
|   |   |   |   |   |   |   trajectorySimilarityTrain < 932.93
|   |   |   |   |   |   |   |   featureI < 0.06 : bike (8.04/4.04)
|   |   |   |   |   |   |   |   featureI >= 0.06
|   |   |   |   |   |   |   |   |   featureJ < 0.39 : train (4.55/0)
|   |   |   |   |   |   |   |   |   featureJ >= 0.39 : bus (39.72/8.39)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 932.93 : car (22.26/11.26)
|   |   |   |   |   travelDistance >= 83.13
|   |   |   |   |   |   trajectorySimilarityBus < 36.17 : bus (31.66/15.46)
|   |   |   |   |   |   trajectorySimilarityBus >= 36.17
|   |   |   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   |   |   featureQ < 0.26
|   |   |   |   |   |   |   |   |   featureC < 2.28
|   |   |   |   |   |   |   |   |   |   featureE < 0.04 : stationary (0.26/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.04 : train (177.95/0)
|   |   |   |   |   |   |   |   |   featureC >= 2.28 : train (5.79/0.79)
|   |   |   |   |   |   |   |   featureQ >= 0.26 : train (23.69/1.58)
|   |   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   |   featureN < 0.31 : train (26.05/0.53)
|   |   |   |   |   |   |   |   featureN >= 0.31 : train (18.37/4.05)
|   |   |   |   featureU >= 0.38
|   |   |   |   |   featureL < 0.73
|   |   |   |   |   |   featureS < 0.39 : bus (50/0)
|   |   |   |   |   |   featureS >= 0.39 : car (1/0)
|   |   |   |   |   featureL >= 0.73
|   |   |   |   |   |   featureU < 0.73
|   |   |   |   |   |   |   featureM < 2.09
|   |   |   |   |   |   |   |   featureE < 0.61
|   |   |   |   |   |   |   |   |   featureE < 0.4 : bus (28.81/10.81)
|   |   |   |   |   |   |   |   |   featureE >= 0.4 : bus (46/0)
|   |   |   |   |   |   |   |   featureE >= 0.61 : train (6/0)
|   |   |   |   |   |   |   featureM >= 2.09 : car (3/-0)
|   |   |   |   |   |   featureU >= 0.73 : car (38/14)
|   |   |   speedMin >= 0.01
|   |   |   |   maximumTravelDistance < 19.36
|   |   |   |   |   trajectorySimilarityTram < 285.48
|   |   |   |   |   |   featureD < 0.18 : tram (27.94/10.94)
|   |   |   |   |   |   featureD >= 0.18
|   |   |   |   |   |   |   featureQ < 0.4
|   |   |   |   |   |   |   |   featureR < 0.33
|   |   |   |   |   |   |   |   |   featureE < 0.3
|   |   |   |   |   |   |   |   |   |   featureN < 0.06 : bus (0.29/0)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.06
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.19 : tram (52/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.19 : train (0.15/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (0.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.1 : tram (7.29/0.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.2 : tram (30.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.2 : tram (56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.06 : bus (0.15/0)
|   |   |   |   |   |   |   |   |   featureE >= 0.3 : train (0.44/0)
|   |   |   |   |   |   |   |   featureR >= 0.33 : tram (5.32/1.32)
|   |   |   |   |   |   |   featureQ >= 0.4 : train (4.32/1)
|   |   |   |   |   trajectorySimilarityTram >= 285.48
|   |   |   |   |   |   featureS < 0.66
|   |   |   |   |   |   |   featureS < 0.36
|   |   |   |   |   |   |   |   speed25Quantile < 0.17 : stationary (6.71/0.63)
|   |   |   |   |   |   |   |   speed25Quantile >= 0.17
|   |   |   |   |   |   |   |   |   speed50Quantile < 3.29 : train (10.06/2.14)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 3.29
|   |   |   |   |   |   |   |   |   |   featureC < 2.29
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.04 : train (7.23/0.23)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.04 : train (58.21/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 2.29 : stationary (0.68/0)
|   |   |   |   |   |   |   featureS >= 0.36 : bus (12.32/3.94)
|   |   |   |   |   |   featureS >= 0.66 : car (23/-0)
|   |   |   |   maximumTravelDistance >= 19.36
|   |   |   |   |   featureD < 0.63
|   |   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   |   featureI < 0.04 : stationary (2.31/0.71)
|   |   |   |   |   |   |   featureI >= 0.04
|   |   |   |   |   |   |   |   featureG < 0.08 : train (19.85/0.18)
|   |   |   |   |   |   |   |   featureG >= 0.08 : train (143.69/0)
|   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   featureG < 0.14 : train (2.89/0.71)
|   |   |   |   |   |   |   featureG >= 0.14
|   |   |   |   |   |   |   |   featureE < 0.29 : train (12.36/0.36)
|   |   |   |   |   |   |   |   featureE >= 0.29 : train (34.07/0)
|   |   |   |   |   featureD >= 0.63 : train (8/3)
|   featureA >= 0.07
|   |   speed75Quantile < 11.39
|   |   |   speedMax < 2.12
|   |   |   |   featureC < 12.16
|   |   |   |   |   featureP < 1.72
|   |   |   |   |   |   stationaryPointRatio < 0.91
|   |   |   |   |   |   |   featureE < 0.42
|   |   |   |   |   |   |   |   featureS < 0.11 : stationary (7.09/2.09)
|   |   |   |   |   |   |   |   featureS >= 0.11
|   |   |   |   |   |   |   |   |   featureM < 1.99
|   |   |   |   |   |   |   |   |   |   featureQ < 0.67
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.57
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.1 : stationary (26.16/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.1 : stationary (24.21/0.21)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.57 : stationary (5.19/0.14)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.67 : train (0.02/0)
|   |   |   |   |   |   |   |   |   featureM >= 1.99 : train (0.38/0.09)
|   |   |   |   |   |   |   featureE >= 0.42 : train (1.41/0.59)
|   |   |   |   |   |   stationaryPointRatio >= 0.91 : train (33.28/15.68)
|   |   |   |   |   featureP >= 1.72 : car (17.75/7.25)
|   |   |   |   featureC >= 12.16
|   |   |   |   |   featureD < 0.71 : stationary (25.14/6.14)
|   |   |   |   |   featureD >= 0.71 : walk (24.32/1.32)
|   |   |   speedMax >= 2.12
|   |   |   |   featureT < 0.45
|   |   |   |   |   featureN < 0.32
|   |   |   |   |   |   trajectorySimilarityTrain < 957.99
|   |   |   |   |   |   |   featureK < 0.42 : bike (29.87/17.87)
|   |   |   |   |   |   |   featureK >= 0.42
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.24 : train (3.33/1.24)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.24
|   |   |   |   |   |   |   |   |   featureS < 0.33
|   |   |   |   |   |   |   |   |   |   featureI < 1.35
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.17 : bus (39.37/2.18)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.17 : bus (23.58/1.78)
|   |   |   |   |   |   |   |   |   |   featureI >= 1.35 : bus (1.59/0.59)
|   |   |   |   |   |   |   |   |   featureS >= 0.33 : car (2/0)
|   |   |   |   |   |   trajectorySimilarityTrain >= 957.99
|   |   |   |   |   |   |   speedMax < 12.62 : car (36.17/13.72)
|   |   |   |   |   |   |   speedMax >= 12.62 : train (13.15/0.66)
|   |   |   |   |   featureN >= 0.32
|   |   |   |   |   |   speedMax < 14
|   |   |   |   |   |   |   featureC < 6.38
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 786.37 : tram (23.59/7.48)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 786.37
|   |   |   |   |   |   |   |   |   travelDistance < 368.95
|   |   |   |   |   |   |   |   |   |   featureL < 0.92 : car (23/4)
|   |   |   |   |   |   |   |   |   |   featureL >= 0.92
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.54
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.48 : bus (37.6/9)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.48 : car (8.6/2.6)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.65 : bus (21/9)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.65 : bus (23.8/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.15 : train (1.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.28 : bus (20.6/0.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.28 : bus (106/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.97 : bus (31.4/1.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.09 : bus (12.2/4.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.09 : bus (39.4/0.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 1.11
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.65 : bus (15.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.65 : bus (67/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 1.11 : bus (10.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.9 : bus (38.53/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.9 : bus (25.49/10.49)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : car (16.06/5.49)
|   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.54
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.26 : bus (28.91/6.54)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.26 : car (20.3/10.09)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.92 : car (10.33/0.09)
|   |   |   |   |   |   |   |   |   travelDistance >= 368.95 : car (15.38/1.27)
|   |   |   |   |   |   |   featureC >= 6.38
|   |   |   |   |   |   |   |   featureM < 2.77
|   |   |   |   |   |   |   |   |   speedMax < 12.16
|   |   |   |   |   |   |   |   |   |   featureG < 0.37 : bus (25.69/5.61)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.37 : bus (39.81/1.81)
|   |   |   |   |   |   |   |   |   speedMax >= 12.16 : tram (5.28/0.28)
|   |   |   |   |   |   |   |   featureM >= 2.77
|   |   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   |   featureU < 1.14 : bus (36.74/1.87)
|   |   |   |   |   |   |   |   |   |   featureU >= 1.14 : train (6/0)
|   |   |   |   |   |   |   |   |   featureB >= 0.04 : train (19.51/3)
|   |   |   |   |   |   speedMax >= 14
|   |   |   |   |   |   |   lowSpeedPointRatio < 0.34 : bus (13.48/5.36)
|   |   |   |   |   |   |   lowSpeedPointRatio >= 0.34 : car (38.36/3.05)
|   |   |   |   featureT >= 0.45
|   |   |   |   |   featureS < 2.74
|   |   |   |   |   |   travelDistance < 63.58 : car (21.2/11.49)
|   |   |   |   |   |   travelDistance >= 63.58
|   |   |   |   |   |   |   featureP < 3.53
|   |   |   |   |   |   |   |   featureL < 3.16
|   |   |   |   |   |   |   |   |   featureQ < 0.35 : bus (25.49/0)
|   |   |   |   |   |   |   |   |   featureQ >= 0.35
|   |   |   |   |   |   |   |   |   |   headingVariance < 1.63
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.55 : car (24.6/1.13)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.55 : car (20.15/9.67)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 1.63
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 223.61
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin < 3.18
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.56 : car (33.3/7.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.56 : bus (38.12/10.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   speedMin >= 3.18 : car (10.66/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.57 : bus (28.81/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.57 : bus (24.44/5.83)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 223.61 : car (18.11/0.33)
|   |   |   |   |   |   |   |   featureL >= 3.16
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 127.96
|   |   |   |   |   |   |   |   |   |   featureJ < 2.48 : bus (18.4/0.56)
|   |   |   |   |   |   |   |   |   |   featureJ >= 2.48 : bus (88.65/0)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 127.96 : car (6.3/1.26)
|   |   |   |   |   |   |   featureP >= 3.53
|   |   |   |   |   |   |   |   featureS < 1.52 : car (36.97/1.3)
|   |   |   |   |   |   |   |   featureS >= 1.52
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 11.91
|   |   |   |   |   |   |   |   |   |   featureD < 1.27
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 146.25
|   |   |   |   |   |   |   |   |   |   |   |   featureG < 2.99 : bus (39.8/1.8)
|   |   |   |   |   |   |   |   |   |   |   |   featureG >= 2.99 : car (0.45/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 146.25 : car (10.59/1.08)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.27 : car (8/0)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 11.91 : car (33.62/0.22)
|   |   |   |   |   featureS >= 2.74 : bike (19.93/7)
|   |   speed75Quantile >= 11.39
|   |   |   featureO < 1
|   |   |   |   featureF < 0.73
|   |   |   |   |   maximumTravelDistance < 17.9
|   |   |   |   |   |   featureO < 0.4 : train (15.76/5.98)
|   |   |   |   |   |   featureO >= 0.4
|   |   |   |   |   |   |   speed95Quantile < 13.67 : car (8.32/4.32)
|   |   |   |   |   |   |   speed95Quantile >= 13.67 : bus (39.24/10.61)
|   |   |   |   |   maximumTravelDistance >= 17.9
|   |   |   |   |   |   featureD < 0.85
|   |   |   |   |   |   |   featureP < 1.54
|   |   |   |   |   |   |   |   featureC < 2.8
|   |   |   |   |   |   |   |   |   featureB < 0.01 : train (11.18/3.18)
|   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   featureE < 0.54
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.16 : train (19.36/0.45)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.16 : train (35.27/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.54 : train (5.36/2.36)
|   |   |   |   |   |   |   |   featureC >= 2.8
|   |   |   |   |   |   |   |   |   featureE < 0.66
|   |   |   |   |   |   |   |   |   |   featureU < 0.24
|   |   |   |   |   |   |   |   |   |   |   featureJ < 2.08 : train (23.36/0.45)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.08 : train (18/5)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.24 : bus (13.46/6.64)
|   |   |   |   |   |   |   |   |   featureE >= 0.66 : tram (0.91/0)
|   |   |   |   |   |   |   featureP >= 1.54 : bus (5/2)
|   |   |   |   |   |   featureD >= 0.85 : car (12.82/1.36)
|   |   |   |   featureF >= 0.73
|   |   |   |   |   speed25Quantile < 0.02 : bus (4.41/1.39)
|   |   |   |   |   speed25Quantile >= 0.02
|   |   |   |   |   |   featureM < 2.24 : train (32.44/12.27)
|   |   |   |   |   |   featureM >= 2.24
|   |   |   |   |   |   |   featureE < 0.69 : train (3/1)
|   |   |   |   |   |   |   featureE >= 0.69
|   |   |   |   |   |   |   |   featureB < 0.17
|   |   |   |   |   |   |   |   |   featureE < 0.9 : car (20.63/0.63)
|   |   |   |   |   |   |   |   |   featureE >= 0.9 : car (62/0)
|   |   |   |   |   |   |   |   featureB >= 0.17 : car (24.24/6.34)
|   |   |   featureO >= 1
|   |   |   |   speed95Quantile < 23.87
|   |   |   |   |   featureF < 0.53
|   |   |   |   |   |   featureL < 2.5
|   |   |   |   |   |   |   featureI < 0.38
|   |   |   |   |   |   |   |   featureM < 2.33 : bus (21.41/7.41)
|   |   |   |   |   |   |   |   featureM >= 2.33 : car (29.63/2.41)
|   |   |   |   |   |   |   featureI >= 0.38
|   |   |   |   |   |   |   |   featureM < 2.7 : car (39.22/6.41)
|   |   |   |   |   |   |   |   featureM >= 2.7 : car (78.41/0)
|   |   |   |   |   |   featureL >= 2.5
|   |   |   |   |   |   |   trajectorySimilarityBus < 200.27
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 109.25 : car (2.06/0.05)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 109.25
|   |   |   |   |   |   |   |   |   featureN < 1.12
|   |   |   |   |   |   |   |   |   |   featureH < 0.26 : bus (2.52/0.52)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.26
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.46 : bus (40.05/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.46 : bus (16.79/1.26)
|   |   |   |   |   |   |   |   |   featureN >= 1.12
|   |   |   |   |   |   |   |   |   |   featureL < 3.39 : car (21.05/10.52)
|   |   |   |   |   |   |   |   |   |   featureL >= 3.39
|   |   |   |   |   |   |   |   |   |   |   featureC < 6.64
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.36 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.36 : bus (15.52/0.52)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 6.64 : bus (11.52/4)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 200.27
|   |   |   |   |   |   |   |   featureC < 7.19
|   |   |   |   |   |   |   |   |   featureP < 1.73 : walk (0.28/0)
|   |   |   |   |   |   |   |   |   featureP >= 1.73 : car (66.71/0)
|   |   |   |   |   |   |   |   featureC >= 7.19 : train (10.41/4.41)
|   |   |   |   |   featureF >= 0.53
|   |   |   |   |   |   featureA < 0.28
|   |   |   |   |   |   |   trajectorySimilarityBus < 170.62
|   |   |   |   |   |   |   |   featureK < 1.65
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 855.35
|   |   |   |   |   |   |   |   |   |   speedVariance < 31.44
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.83 : bus (20.64/1.42)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.83
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 17.99 : car (36.95/11.12)
|   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 17.99 : bus (15.4/2.34)
|   |   |   |   |   |   |   |   |   |   speedVariance >= 31.44 : car (12.34/0.08)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 855.35
|   |   |   |   |   |   |   |   |   |   speedMean < 15.21
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.77
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.75
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.47 : tram (0.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.47 : car (65.71/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.75 : car (37.47/8.07)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.77 : bus (24.16/10.48)
|   |   |   |   |   |   |   |   |   |   speedMean >= 15.21
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.36 : bus (0.16/0)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.06 : tram (0.1/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.06
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.69 : car (27.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.69 : car (38.41/0.19)
|   |   |   |   |   |   |   |   featureK >= 1.65
|   |   |   |   |   |   |   |   |   featureL < 3.24 : car (13/0)
|   |   |   |   |   |   |   |   |   featureL >= 3.24 : bus (31/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 170.62
|   |   |   |   |   |   |   |   featureD < 0.84
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 267.51 : bus (14.08/6.87)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 267.51
|   |   |   |   |   |   |   |   |   |   featureO < 1.08 : tram (0.74/0)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.08
|   |   |   |   |   |   |   |   |   |   |   featureC < 4.57 : car (121.7/0)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 4.57 : car (22.71/3.23)
|   |   |   |   |   |   |   |   featureD >= 0.84
|   |   |   |   |   |   |   |   |   featureN < 1.22
|   |   |   |   |   |   |   |   |   |   featureD < 0.94
|   |   |   |   |   |   |   |   |   |   |   featureM < 3.85 : car (119/0)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 3.85 : car (29.82/0.54)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.94 : car (142.9/0)
|   |   |   |   |   |   |   |   |   featureN >= 1.22 : car (198.27/0)
|   |   |   |   |   |   featureA >= 0.28
|   |   |   |   |   |   |   featureE < 0.76
|   |   |   |   |   |   |   |   featureT < 0.39 : train (2.41/0.41)
|   |   |   |   |   |   |   |   featureT >= 0.39
|   |   |   |   |   |   |   |   |   featureL < 3.28 : bus (15.04/7.81)
|   |   |   |   |   |   |   |   |   featureL >= 3.28
|   |   |   |   |   |   |   |   |   |   featureJ < 2.9 : bus (8.81/0.81)
|   |   |   |   |   |   |   |   |   |   featureJ >= 2.9 : bus (35.44/0)
|   |   |   |   |   |   |   featureE >= 0.76
|   |   |   |   |   |   |   |   speed50Quantile < 19.64
|   |   |   |   |   |   |   |   |   featureB < 0.06
|   |   |   |   |   |   |   |   |   |   featureT < 0.97
|   |   |   |   |   |   |   |   |   |   |   featureN < 1.34 : bus (22.65/7.33)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 1.34
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.4 : car (20.98/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.4
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 2.06 : bus (17.83/7.56)
|   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 2.06 : car (24.13/1.38)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.97 : bus (8/-0)
|   |   |   |   |   |   |   |   |   featureB >= 0.06
|   |   |   |   |   |   |   |   |   |   featureA < 0.53
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 8.21 : bus (3.22/1.2)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 8.21
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 3.63 : car (30.84/2.84)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 3.63 : car (55.15/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.53 : bus (7.31/0.98)
|   |   |   |   |   |   |   |   speed50Quantile >= 19.64
|   |   |   |   |   |   |   |   |   speed25Quantile < 19.76 : bus (12.75/5.59)
|   |   |   |   |   |   |   |   |   speed25Quantile >= 19.76 : bus (33.99/1.58)
|   |   |   |   speed95Quantile >= 23.87
|   |   |   |   |   speed50Quantile < 34.95
|   |   |   |   |   |   featureS < 0.92 : train (25.58/12.92)
|   |   |   |   |   |   featureS >= 0.92
|   |   |   |   |   |   |   featureA < 0.47
|   |   |   |   |   |   |   |   featureH < 0.1 : bike (0.47/0)
|   |   |   |   |   |   |   |   featureH >= 0.1
|   |   |   |   |   |   |   |   |   featureJ < 1.61 : car (10.14/0.24)
|   |   |   |   |   |   |   |   |   featureJ >= 1.61
|   |   |   |   |   |   |   |   |   |   featureD < 0.81
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.78 : car (48.37/0)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.78 : car (5.37/0.24)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.81 : car (869.75/0)
|   |   |   |   |   |   |   featureA >= 0.47 : bus (9.17/5.14)
|   |   |   |   |   speed50Quantile >= 34.95 : train (36.15/1.09)
featureJ >= 7.12
|   lowSpeedPointRatio < 0.96
|   |   featureO < 0.98
|   |   |   featureE < 4.71 : bike (739.96/0)
|   |   |   featureE >= 4.71
|   |   |   |   featureE < 4.83 : bike (8.54/3.54)
|   |   |   |   featureE >= 4.83 : bike (62/0)
|   |   featureO >= 0.98
|   |   |   speed95Quantile < 9.38
|   |   |   |   featureD < 4.38
|   |   |   |   |   featureL < 6.67 : bus (3.04/0.34)
|   |   |   |   |   featureL >= 6.67
|   |   |   |   |   |   featureN < 3.08 : walk (4.36/2)
|   |   |   |   |   |   featureN >= 3.08 : bike (186.01/0)
|   |   |   |   featureD >= 4.38
|   |   |   |   |   featureS < 7.35 : walk (39.85/0)
|   |   |   |   |   featureS >= 7.35 : walk (6.04/3)
|   |   |   speed95Quantile >= 9.38 : bus (39.04/14.6)
|   lowSpeedPointRatio >= 0.96
|   |   speed25Quantile < 0.01 : stationary (14.86/7.86)
|   |   speed25Quantile >= 0.01
|   |   |   featureA < 2.37 : bus (7.82/3.01)
|   |   |   featureA >= 2.37
|   |   |   |   featureF < 1.21 : walk (37.01/3.2)
|   |   |   |   featureF >= 1.21
|   |   |   |   |   featureI < 3.9
|   |   |   |   |   |   featureG < 0.39 : walk (4.6/0.6)
|   |   |   |   |   |   featureG >= 0.39 : walk (397.08/0)
|   |   |   |   |   featureI >= 3.9 : walk (1221.78/0)

Size of the tree : 449


RandomTree
==========

featureE < 1.31
|   featureB < 0.03
|   |   featureR < 0.04
|   |   |   featureI < 0.14
|   |   |   |   featureE < 0.04
|   |   |   |   |   trajectorySimilarityTrain < 920.02 : train (15.32/7.32)
|   |   |   |   |   trajectorySimilarityTrain >= 920.02
|   |   |   |   |   |   featureM < 0.07
|   |   |   |   |   |   |   featureM < 0.01 : stationary (86.89/0)
|   |   |   |   |   |   |   featureM >= 0.01 : train (4/-0)
|   |   |   |   |   |   featureM >= 0.07 : stationary (469.79/0)
|   |   |   |   featureE >= 0.04 : train (19/5)
|   |   |   featureI >= 0.14 : car (7/3)
|   |   featureR >= 0.04
|   |   |   featureO < 0.53
|   |   |   |   stationaryPointRatio < 0.09
|   |   |   |   |   speedMean < 14.61
|   |   |   |   |   |   featureC < 1.36
|   |   |   |   |   |   |   featureT < 0.05
|   |   |   |   |   |   |   |   speed75Quantile < 7.63 : tram (6.57/3.57)
|   |   |   |   |   |   |   |   speed75Quantile >= 7.63
|   |   |   |   |   |   |   |   |   featureL < 0.27 : train (3.12/1.04)
|   |   |   |   |   |   |   |   |   featureL >= 0.27 : train (37.42/0)
|   |   |   |   |   |   |   featureT >= 0.05
|   |   |   |   |   |   |   |   maximumTravelDistance < 20.04
|   |   |   |   |   |   |   |   |   featureB < 0.01
|   |   |   |   |   |   |   |   |   |   featureQ < 0.15 : train (34.21/12)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 15.5
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 1.88 : tram (48/0)
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 1.88 : tram (8/1)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 15.5 : tram (2/1)
|   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   featureI < 0.18 : tram (16.9/0.9)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.18 : tram (36/0)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 20.04 : train (9.75/0)
|   |   |   |   |   |   featureC >= 1.36
|   |   |   |   |   |   |   featureJ < 1.33
|   |   |   |   |   |   |   |   featureE < 0.2 : train (29.38/1.93)
|   |   |   |   |   |   |   |   featureE >= 0.2 : tram (26.24/15.24)
|   |   |   |   |   |   |   featureJ >= 1.33 : bus (23.62/9.17)
|   |   |   |   |   speedMean >= 14.61
|   |   |   |   |   |   featureP < 0.44 : train (37.61/1.72)
|   |   |   |   |   |   featureP >= 0.44
|   |   |   |   |   |   |   featureA < 0.1
|   |   |   |   |   |   |   |   featureA < 0.08 : train (63.89/0)
|   |   |   |   |   |   |   |   featureA >= 0.08 : train (3.18/0.18)
|   |   |   |   |   |   |   featureA >= 0.1 : stationary (0.63/0.36)
|   |   |   |   stationaryPointRatio >= 0.09
|   |   |   |   |   speedMax < 3.52
|   |   |   |   |   |   travelDistance < 189.16
|   |   |   |   |   |   |   featureC < 1.89
|   |   |   |   |   |   |   |   featureU < 0.24
|   |   |   |   |   |   |   |   |   speedMedian < 0.12
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 17.09 : bus (22.67/9.56)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 17.09
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.16
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 2.19 : stationary (31.15/8.61)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 2.19
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.04 : stationary (4.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.08 : train (35.2/0.33)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.08 : train (7.22/2)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.16 : train (30.69/-0)
|   |   |   |   |   |   |   |   |   speedMedian >= 0.12 : stationary (21.13/2.03)
|   |   |   |   |   |   |   |   featureU >= 0.24 : bus (26.28/1.28)
|   |   |   |   |   |   |   featureC >= 1.89
|   |   |   |   |   |   |   |   featureF < 0.4
|   |   |   |   |   |   |   |   |   speedMax < 1.83
|   |   |   |   |   |   |   |   |   |   featureE < 0.06 : stationary (46.9/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.06
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.56 : stationary (23.42/14.42)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.56 : stationary (21.9/1.71)
|   |   |   |   |   |   |   |   |   speedMax >= 1.83 : bike (7.42/3.42)
|   |   |   |   |   |   |   |   featureF >= 0.4 : stationary (20.28/6.51)
|   |   |   |   |   |   travelDistance >= 189.16
|   |   |   |   |   |   |   featureD < 0.09 : stationary (1.12/0.47)
|   |   |   |   |   |   |   featureD >= 0.09
|   |   |   |   |   |   |   |   featureR < 0.24 : train (53.23/0)
|   |   |   |   |   |   |   |   featureR >= 0.24 : train (14.06/0.94)
|   |   |   |   |   speedMax >= 3.52
|   |   |   |   |   |   featureD < 0.29
|   |   |   |   |   |   |   accumulatedTravelDistance < 149.95
|   |   |   |   |   |   |   |   featureB < 0.01
|   |   |   |   |   |   |   |   |   featureD < 0.11 : train (16.94/3.73)
|   |   |   |   |   |   |   |   |   featureD >= 0.11
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 837.7 : bus (36.65/11.65)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 837.7 : car (34.61/13.61)
|   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   speedVariance < 11.17 : bus (33.16/14.16)
|   |   |   |   |   |   |   |   |   speedVariance >= 11.17 : train (18.3/1.06)
|   |   |   |   |   |   |   accumulatedTravelDistance >= 149.95
|   |   |   |   |   |   |   |   featureO < 0.38
|   |   |   |   |   |   |   |   |   featureT < 0.1
|   |   |   |   |   |   |   |   |   |   featureJ < 0.16 : stationary (1.17/0.59)
|   |   |   |   |   |   |   |   |   |   featureJ >= 0.16
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.06 : train (119.15/0)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.06 : train (3.78/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.06 : train (38.44/0.2)
|   |   |   |   |   |   |   |   |   featureT >= 0.1 : train (5.15/0.98)
|   |   |   |   |   |   |   |   featureO >= 0.38 : train (5.78/3)
|   |   |   |   |   |   featureD >= 0.29
|   |   |   |   |   |   |   featureC < 3.19
|   |   |   |   |   |   |   |   headingVariance < 4.79 : train (19.53/4.21)
|   |   |   |   |   |   |   |   headingVariance >= 4.79 : bus (24.12/4.76)
|   |   |   |   |   |   |   featureC >= 3.19
|   |   |   |   |   |   |   |   featureE < 0.21 : bus (17.35/1.35)
|   |   |   |   |   |   |   |   featureE >= 0.21 : bus (37.35/0)
|   |   |   featureO >= 0.53
|   |   |   |   travelDistance < 47.5
|   |   |   |   |   trajectorySimilarityTrain < 853.49
|   |   |   |   |   |   featureD < 1.23 : bike (26.17/15.99)
|   |   |   |   |   |   featureD >= 1.23 : walk (25.18/0)
|   |   |   |   |   trajectorySimilarityTrain >= 853.49
|   |   |   |   |   |   trajectorySimilarityBus < 281.16
|   |   |   |   |   |   |   featureU < 0.65 : stationary (22.4/8.4)
|   |   |   |   |   |   |   featureU >= 0.65 : stationary (19.32/1.32)
|   |   |   |   |   |   trajectorySimilarityBus >= 281.16 : car (8.56/0.48)
|   |   |   |   travelDistance >= 47.5
|   |   |   |   |   featureU < 0.55
|   |   |   |   |   |   maximumTravelDistance < 19.27
|   |   |   |   |   |   |   featureL < 1.24
|   |   |   |   |   |   |   |   speed50Quantile < 2.63 : bus (24.29/12.13)
|   |   |   |   |   |   |   |   speed50Quantile >= 2.63
|   |   |   |   |   |   |   |   |   featureD < 0.28 : tram (38.16/1.16)
|   |   |   |   |   |   |   |   |   featureD >= 0.28
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.14 : tram (35.5/9.5)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.14 : bus (13.99/2.82)
|   |   |   |   |   |   |   featureL >= 1.24
|   |   |   |   |   |   |   |   speedMedian < 2.52
|   |   |   |   |   |   |   |   |   speedMedian < 2.21 : bus (37.53/3.68)
|   |   |   |   |   |   |   |   |   speedMedian >= 2.21 : car (11.79/5.79)
|   |   |   |   |   |   |   |   speedMedian >= 2.52
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 692.81 : tram (8.58/2.58)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 692.81
|   |   |   |   |   |   |   |   |   |   featureT < 0.26
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.11 : train (3.15/0)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.01
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.33 : bus (39.62/1.21)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.33 : bus (12.11/3.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.64 : train (1.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.01 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.26 : bus (48/0)
|   |   |   |   |   |   maximumTravelDistance >= 19.27
|   |   |   |   |   |   |   travelDistance < 194.88 : car (5.33/2.33)
|   |   |   |   |   |   |   travelDistance >= 194.88
|   |   |   |   |   |   |   |   featureG < 0.22 : train (10.87/0.93)
|   |   |   |   |   |   |   |   featureG >= 0.22
|   |   |   |   |   |   |   |   |   featureU < 0.35 : train (4.31/0.31)
|   |   |   |   |   |   |   |   |   featureU >= 0.35 : train (49.87/0)
|   |   |   |   |   featureU >= 0.55
|   |   |   |   |   |   featureK < 1.71
|   |   |   |   |   |   |   featureP < 1.91
|   |   |   |   |   |   |   |   featureK < 0.82
|   |   |   |   |   |   |   |   |   featureC < 1.65 : train (5.46/0)
|   |   |   |   |   |   |   |   |   featureC >= 1.65
|   |   |   |   |   |   |   |   |   |   speedMin < 1.71
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 77.3 : car (28/7)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 77.3 : car (23/0)
|   |   |   |   |   |   |   |   |   |   speedMin >= 1.71 : tram (5/2)
|   |   |   |   |   |   |   |   featureK >= 0.82
|   |   |   |   |   |   |   |   |   featureT < 0.38
|   |   |   |   |   |   |   |   |   |   featureU < 0.56 : car (4/0)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.56
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 210.7
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.7
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.63 : bus (9/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.63 : bus (76.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.7 : train (1/-0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 210.7 : train (8.32/2.32)
|   |   |   |   |   |   |   |   |   featureT >= 0.38 : bus (22/9)
|   |   |   |   |   |   |   featureP >= 1.91
|   |   |   |   |   |   |   |   featureC < 3.45
|   |   |   |   |   |   |   |   |   headingVariance < 0.15 : train (7.29/0.29)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.15
|   |   |   |   |   |   |   |   |   |   featureF < 2.58
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.23 : car (9.7/1.7)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.23 : car (95.56/0)
|   |   |   |   |   |   |   |   |   |   featureF >= 2.58 : bus (1/0)
|   |   |   |   |   |   |   |   featureC >= 3.45
|   |   |   |   |   |   |   |   |   speedMax < 15.77
|   |   |   |   |   |   |   |   |   |   featureR < 0.6
|   |   |   |   |   |   |   |   |   |   |   featureS < 1.24
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.85 : car (17/2)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.85 : car (25.89/0)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 1.24 : tram (4.16/2.16)
|   |   |   |   |   |   |   |   |   |   featureR >= 0.6
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.12 : car (15.72/3.29)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.12
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.15 : bus (33.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.15 : bus (13.74/3.74)
|   |   |   |   |   |   |   |   |   speedMax >= 15.77
|   |   |   |   |   |   |   |   |   |   featureI < 0.1 : bike (0.99/0)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.1
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.77 : car (36.99/0)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.77 : car (24.99/3.33)
|   |   |   |   |   |   featureK >= 1.71
|   |   |   |   |   |   |   speedMax < 16.37
|   |   |   |   |   |   |   |   featureT < 1.04
|   |   |   |   |   |   |   |   |   featureS < 0.78 : walk (5.68/1)
|   |   |   |   |   |   |   |   |   featureS >= 0.78
|   |   |   |   |   |   |   |   |   |   featureK < 2.32
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 5.23 : bus (3.18/1)
|   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 5.23 : bus (59.33/0)
|   |   |   |   |   |   |   |   |   |   featureK >= 2.32 : bus (39.09/7.34)
|   |   |   |   |   |   |   |   featureT >= 1.04 : car (11/4)
|   |   |   |   |   |   |   speedMax >= 16.37
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 849.68 : bus (29.01/1.72)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 849.68 : car (36.82/3.82)
|   featureB >= 0.03
|   |   trajectorySimilarityTrain < 941.28
|   |   |   trajectorySimilarityBus < 105.31
|   |   |   |   featureJ < 7.68
|   |   |   |   |   speedMax < 23.87
|   |   |   |   |   |   featureU < 0.3 : train (34.33/15.82)
|   |   |   |   |   |   featureU >= 0.3
|   |   |   |   |   |   |   featureC < 7.14
|   |   |   |   |   |   |   |   featureU < 1.18
|   |   |   |   |   |   |   |   |   featureD < 0.99
|   |   |   |   |   |   |   |   |   |   featureU < 0.55
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.1
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.35 : train (1.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.35 : bus (86/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.1 : bus (21.55/5.55)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.55
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 210.39
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.59
|   |   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 2.31 : car (2.03/0.01)
|   |   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 2.31
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 1.86 : car (2.13/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 1.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.3 : bus (9/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.04 : car (0.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.04
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.84
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.65 : bus (64.27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.65 : bus (11.4/0.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.84 : bus (82.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.74 : bus (6.74/1.34)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.59
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 987.1 : car (8.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 987.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 76.31
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.93 : car (0.35/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.93
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 2.92 : bus (51/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 2.92 : car (0.23/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 76.31 : car (1.01/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.82 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 210.39
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.17
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.54
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.65 : car (26.05/0.02)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.65 : bus (14.55/0.43)
|   |   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.54 : bus (15.22/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.17
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.51
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.79 : bus (17.27/4.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.79 : car (26.5/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.51 : bus (37.53/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.43 : bus (76/0)
|   |   |   |   |   |   |   |   |   featureD >= 0.99 : car (36.53/5.02)
|   |   |   |   |   |   |   |   featureU >= 1.18
|   |   |   |   |   |   |   |   |   featureJ < 2.16
|   |   |   |   |   |   |   |   |   |   travelDistance < 611.42 : car (43.22/0)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 611.42 : car (2.06/1)
|   |   |   |   |   |   |   |   |   featureJ >= 2.16
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.47 : car (18.28/0)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.47
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 14.11
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 15.25 : bus (32.26/8.26)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 15.25 : car (13.98/3)
|   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 14.11 : bus (30.11/4.11)
|   |   |   |   |   |   |   featureC >= 7.14
|   |   |   |   |   |   |   |   featureB < 0.08
|   |   |   |   |   |   |   |   |   featureC < 10.18 : bus (60.06/0)
|   |   |   |   |   |   |   |   |   featureC >= 10.18 : bus (35.53/3.27)
|   |   |   |   |   |   |   |   featureB >= 0.08 : bus (7.29/2.29)
|   |   |   |   |   speedMax >= 23.87
|   |   |   |   |   |   featureE < 0.72 : train (1.24/0.61)
|   |   |   |   |   |   featureE >= 0.72
|   |   |   |   |   |   |   featureN < 0.82 : train (0.18/0.1)
|   |   |   |   |   |   |   featureN >= 0.82
|   |   |   |   |   |   |   |   featureK < 3.4
|   |   |   |   |   |   |   |   |   featureO < 1.97 : car (18.47/0.19)
|   |   |   |   |   |   |   |   |   featureO >= 1.97 : car (35.48/0)
|   |   |   |   |   |   |   |   featureK >= 3.4 : bus (0.06/-0)
|   |   |   |   featureJ >= 7.68 : bike (18.81/1)
|   |   |   trajectorySimilarityBus >= 105.31
|   |   |   |   trajectorySimilarityTrain < 165.26
|   |   |   |   |   featureU < 0.91
|   |   |   |   |   |   featureH < 1.05
|   |   |   |   |   |   |   featureK < 0.78
|   |   |   |   |   |   |   |   featureH < 0.49 : train (27.52/0.16)
|   |   |   |   |   |   |   |   featureH >= 0.49 : train (32.1/0)
|   |   |   |   |   |   |   featureK >= 0.78
|   |   |   |   |   |   |   |   featureM < 0.77 : bus (0.21/0.05)
|   |   |   |   |   |   |   |   featureM >= 0.77
|   |   |   |   |   |   |   |   |   featureR < 0.63 : train (38.67/1.25)
|   |   |   |   |   |   |   |   |   featureR >= 0.63
|   |   |   |   |   |   |   |   |   |   featureD < 0.68 : train (38.36/0.05)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.68 : train (8.47/0.16)
|   |   |   |   |   |   featureH >= 1.05 : train (11.68/3.47)
|   |   |   |   |   featureU >= 0.91 : car (26.29/4.78)
|   |   |   |   trajectorySimilarityTrain >= 165.26
|   |   |   |   |   featureM < 2.5
|   |   |   |   |   |   featureA < 0.49
|   |   |   |   |   |   |   featureJ < 1.49 : train (8.32/3.58)
|   |   |   |   |   |   |   featureJ >= 1.49 : bus (38.45/2.17)
|   |   |   |   |   |   featureA >= 0.49 : bike (15.47/0.12)
|   |   |   |   |   featureM >= 2.5
|   |   |   |   |   |   featureO < 3.17
|   |   |   |   |   |   |   speed95Quantile < 8.8 : bus (14.5/3.39)
|   |   |   |   |   |   |   speed95Quantile >= 8.8
|   |   |   |   |   |   |   |   featureE < 0.81
|   |   |   |   |   |   |   |   |   featureL < 3.58
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 232.39 : bus (5.4/1.31)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 232.39
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.94
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.98
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.34 : car (1.92/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.49 : car (2.61/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.08 : bus (0.41/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.51 : car (31.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.51 : car (19.41/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.98 : bus (0.2/-0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.94 : bus (1.51/0.1)
|   |   |   |   |   |   |   |   |   featureL >= 3.58 : bus (28.45/3.45)
|   |   |   |   |   |   |   |   featureE >= 0.81
|   |   |   |   |   |   |   |   |   featureA < 0.43
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 276.39
|   |   |   |   |   |   |   |   |   |   |   featureS < 2.02
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 710.04
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.67 : car (5.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.67 : car (46.82/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 710.04 : car (7.13/1.02)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 2.02 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 276.39
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.42 : car (2.8/0.4)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.42 : car (146.91/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.43 : car (14.9/5.68)
|   |   |   |   |   |   featureO >= 3.17 : bus (17/1)
|   |   trajectorySimilarityTrain >= 941.28
|   |   |   featureP < 1.39
|   |   |   |   featureM < 1.71
|   |   |   |   |   featureD < 0.46 : train (39.36/3.68)
|   |   |   |   |   featureD >= 0.46 : bus (17.32/8.72)
|   |   |   |   featureM >= 1.71
|   |   |   |   |   featureE < 0.84 : tram (27.52/13.48)
|   |   |   |   |   featureE >= 0.84
|   |   |   |   |   |   featureI < 0.42 : car (4.56/0.56)
|   |   |   |   |   |   featureI >= 0.42 : car (73/0)
|   |   |   featureP >= 1.39
|   |   |   |   speedMax < 12.66
|   |   |   |   |   featureL < 2.93
|   |   |   |   |   |   featureJ < 2.53
|   |   |   |   |   |   |   featureE < 0.36 : bus (0.04/0)
|   |   |   |   |   |   |   featureE >= 0.36
|   |   |   |   |   |   |   |   featureD < 1.02
|   |   |   |   |   |   |   |   |   featureF < 0.47 : car (15.33/0.08)
|   |   |   |   |   |   |   |   |   featureF >= 0.47 : car (41.96/0)
|   |   |   |   |   |   |   |   featureD >= 1.02 : car (0.17/0.08)
|   |   |   |   |   |   featureJ >= 2.53 : car (7.21/3.21)
|   |   |   |   |   featureL >= 2.93
|   |   |   |   |   |   featureT < 0.41 : train (7.37/0.12)
|   |   |   |   |   |   featureT >= 0.41
|   |   |   |   |   |   |   featureB < 0.14
|   |   |   |   |   |   |   |   maximumTravelDistance < 10.28 : car (6.18/0.06)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 10.28
|   |   |   |   |   |   |   |   |   featureJ < 2.88 : car (2.7/1.04)
|   |   |   |   |   |   |   |   |   featureJ >= 2.88
|   |   |   |   |   |   |   |   |   |   featureP < 6.44
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.45 : train (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.45
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 3.67 : bus (23.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 3.67 : bus (22.33/0.26)
|   |   |   |   |   |   |   |   |   |   featureP >= 6.44 : car (1/0)
|   |   |   |   |   |   |   featureB >= 0.14 : car (6/-0)
|   |   |   |   speedMax >= 12.66
|   |   |   |   |   featureA < 0.33
|   |   |   |   |   |   speedMean < 16.82
|   |   |   |   |   |   |   featureD < 0.93
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 135.58
|   |   |   |   |   |   |   |   |   featureJ < 2.46
|   |   |   |   |   |   |   |   |   |   featureU < 0.73 : bus (8.31/1.06)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.73
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.99 : car (73.05/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.99 : car (14.19/4.12)
|   |   |   |   |   |   |   |   |   featureJ >= 2.46 : bus (19.12/0.12)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 135.58
|   |   |   |   |   |   |   |   |   featureS < 0.86
|   |   |   |   |   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.4 : bus (0.08/0)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.4 : car (43/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.11 : car (11.39/0.39)
|   |   |   |   |   |   |   |   |   featureS >= 0.86 : car (91.66/0)
|   |   |   |   |   |   |   featureD >= 0.93
|   |   |   |   |   |   |   |   headingVariance < 1.25 : car (2.06/1)
|   |   |   |   |   |   |   |   headingVariance >= 1.25
|   |   |   |   |   |   |   |   |   featureH < 0.71 : car (23.25/0.28)
|   |   |   |   |   |   |   |   |   featureH >= 0.71 : car (125.79/0)
|   |   |   |   |   |   speedMean >= 16.82
|   |   |   |   |   |   |   featureN < 0.61 : bus (1.51/0)
|   |   |   |   |   |   |   featureN >= 0.61
|   |   |   |   |   |   |   |   featureQ < 0.63
|   |   |   |   |   |   |   |   |   featureN < 1.29
|   |   |   |   |   |   |   |   |   |   featureC < 4.53 : car (168.66/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 4.53 : car (8.13/0.38)
|   |   |   |   |   |   |   |   |   featureN >= 1.29 : car (26.26/3.38)
|   |   |   |   |   |   |   |   featureQ >= 0.63
|   |   |   |   |   |   |   |   |   featureL < 2.58
|   |   |   |   |   |   |   |   |   |   featureK < 1.62 : car (63.13/0)
|   |   |   |   |   |   |   |   |   |   featureK >= 1.62 : car (19.75/0.75)
|   |   |   |   |   |   |   |   |   featureL >= 2.58 : car (816.04/0)
|   |   |   |   |   featureA >= 0.33
|   |   |   |   |   |   featureT < 0.7
|   |   |   |   |   |   |   featureT < 0.56 : car (22.7/6.7)
|   |   |   |   |   |   |   featureT >= 0.56
|   |   |   |   |   |   |   |   featureS < 1.38 : bus (36.11/2)
|   |   |   |   |   |   |   |   featureS >= 1.38 : car (11.04/3)
|   |   |   |   |   |   featureT >= 0.7
|   |   |   |   |   |   |   featureK < 1.7 : bus (3/0)
|   |   |   |   |   |   |   featureK >= 1.7
|   |   |   |   |   |   |   |   featureC < 9.05
|   |   |   |   |   |   |   |   |   featureQ < 0.85 : bus (1.04/0)
|   |   |   |   |   |   |   |   |   featureQ >= 0.85 : car (59.74/0)
|   |   |   |   |   |   |   |   featureC >= 9.05 : car (18.59/3.59)
featureE >= 1.31
|   speed50Quantile < 2.28
|   |   featureU < 0.38
|   |   |   featureO < 1.14 : bike (31.26/15.24)
|   |   |   featureO >= 1.14 : walk (19.46/3.62)
|   |   featureU >= 0.38
|   |   |   featureJ < 7.9 : walk (33.43/4.82)
|   |   |   featureJ >= 7.9
|   |   |   |   featureP < 16.81 : walk (1620.1/0)
|   |   |   |   featureP >= 16.81 : walk (31.63/4.01)
|   speed50Quantile >= 2.28
|   |   featureL < 1.32
|   |   |   featureB < 0.1
|   |   |   |   featureD < 4.82 : bike (43.78/0)
|   |   |   |   featureD >= 4.82 : bike (10.37/4.37)
|   |   |   featureB >= 0.1 : bike (789.19/0)
|   |   featureL >= 1.32
|   |   |   featureO < 4.35
|   |   |   |   featureK < 3.9 : car (14.4/1)
|   |   |   |   featureK >= 3.9
|   |   |   |   |   featureA < 2.8 : bus (31.38/0)
|   |   |   |   |   featureA >= 2.8 : walk (12.71/0)
|   |   |   featureO >= 4.35
|   |   |   |   featureR < 5.2
|   |   |   |   |   featureS < 4.61
|   |   |   |   |   |   featureM < 14.23
|   |   |   |   |   |   |   speedMin < 12.54 : bike (46.97/0)
|   |   |   |   |   |   |   speedMin >= 12.54 : bus (3.2/0.2)
|   |   |   |   |   |   featureM >= 14.23 : walk (13.93/4)
|   |   |   |   |   featureS >= 4.61 : bike (139/0)
|   |   |   |   featureR >= 5.2 : walk (38.19/11.99)

Size of the tree : 469


RandomTree
==========

featureJ < 6.94
|   featureM < 1.97
|   |   featureJ < 0.15
|   |   |   featureC < 0.34
|   |   |   |   speed25Quantile < 0.01
|   |   |   |   |   headingVariance < 0.01 : stationary (21.48/1)
|   |   |   |   |   headingVariance >= 0.01 : stationary (510.85/0)
|   |   |   |   speed25Quantile >= 0.01 : stationary (7.67/1)
|   |   |   featureC >= 0.34
|   |   |   |   featureI < 0.14
|   |   |   |   |   featureD < 0.04 : stationary (45/0)
|   |   |   |   |   featureD >= 0.04 : stationary (29/15)
|   |   |   |   featureI >= 0.14 : car (8/2)
|   |   featureJ >= 0.15
|   |   |   accumulatedTravelDistance < 296.57
|   |   |   |   lowSpeedPointRatio < 0.98
|   |   |   |   |   featureT < 0.1
|   |   |   |   |   |   featureE < 0.07
|   |   |   |   |   |   |   featureN < 0.07 : train (21.15/0)
|   |   |   |   |   |   |   featureN >= 0.07 : car (21.69/6.69)
|   |   |   |   |   |   featureE >= 0.07
|   |   |   |   |   |   |   featureM < 0.04 : bus (31.84/12.69)
|   |   |   |   |   |   |   featureM >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityTram < 226.91 : tram (10.5/1.5)
|   |   |   |   |   |   |   |   trajectorySimilarityTram >= 226.91
|   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 97.52
|   |   |   |   |   |   |   |   |   |   featureK < 0.22 : train (19.54/5)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.22 : bus (37.64/15.52)
|   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 97.52
|   |   |   |   |   |   |   |   |   |   featureJ < 1.36 : train (97.87/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.36 : train (14.15/2.2)
|   |   |   |   |   featureT >= 0.1
|   |   |   |   |   |   featureC < 1.98
|   |   |   |   |   |   |   trajectorySimilarityTram < 272.06 : tram (18.73/2.73)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 272.06
|   |   |   |   |   |   |   |   featureR < 0.37
|   |   |   |   |   |   |   |   |   speed50Quantile < 10.38
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 28.07 : bus (25.22/1.22)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 28.07
|   |   |   |   |   |   |   |   |   |   |   speedVariance < 22.23 : car (36.83/6.83)
|   |   |   |   |   |   |   |   |   |   |   speedVariance >= 22.23 : bus (6.26/1.26)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 10.38 : train (9.39/0)
|   |   |   |   |   |   |   |   featureR >= 0.37 : train (14.76/0)
|   |   |   |   |   |   featureC >= 1.98
|   |   |   |   |   |   |   featureS < 0.49
|   |   |   |   |   |   |   |   stationaryPointRatio < 0.11 : bus (38.95/15.83)
|   |   |   |   |   |   |   |   stationaryPointRatio >= 0.11
|   |   |   |   |   |   |   |   |   featureL < 0.65 : car (29/14)
|   |   |   |   |   |   |   |   |   featureL >= 0.65
|   |   |   |   |   |   |   |   |   |   featureL < 0.98 : bus (36.18/11.86)
|   |   |   |   |   |   |   |   |   |   featureL >= 0.98
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.04 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.25
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.63 : bus (16.86/2.91)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.53 : bus (85.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.53 : train (0.95/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.25 : bus (18.73/3.18)
|   |   |   |   |   |   |   featureS >= 0.49
|   |   |   |   |   |   |   |   featureJ < 1.32
|   |   |   |   |   |   |   |   |   featureP < 1.9
|   |   |   |   |   |   |   |   |   |   travelDistance < 64.3 : bus (2.04/1.04)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 64.3 : car (38.73/4.73)
|   |   |   |   |   |   |   |   |   featureP >= 1.9 : bus (6/0)
|   |   |   |   |   |   |   |   featureJ >= 1.32
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.35 : car (38.21/13.21)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.35 : bus (30.17/1)
|   |   |   |   lowSpeedPointRatio >= 0.98
|   |   |   |   |   featureC < 1.92
|   |   |   |   |   |   featureU < 0.26
|   |   |   |   |   |   |   headingVariance < 4.02
|   |   |   |   |   |   |   |   featureF < 0.04
|   |   |   |   |   |   |   |   |   featureQ < 0.08 : train (22.86/0.74)
|   |   |   |   |   |   |   |   |   featureQ >= 0.08 : stationary (19.33/7.88)
|   |   |   |   |   |   |   |   featureF >= 0.04
|   |   |   |   |   |   |   |   |   featureJ < 1.64
|   |   |   |   |   |   |   |   |   |   featureQ < 0.07 : train (16.69/0.5)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.07 : train (36.2/0)
|   |   |   |   |   |   |   |   |   featureJ >= 1.64 : bus (0.13/-0)
|   |   |   |   |   |   |   headingVariance >= 4.02
|   |   |   |   |   |   |   |   featureN < 0.14
|   |   |   |   |   |   |   |   |   featureD < 0.08 : stationary (37.04/1.52)
|   |   |   |   |   |   |   |   |   featureD >= 0.08 : bus (28.46/7.35)
|   |   |   |   |   |   |   |   featureN >= 0.14 : train (13.38/1)
|   |   |   |   |   |   featureU >= 0.26
|   |   |   |   |   |   |   featureM < 0.99
|   |   |   |   |   |   |   |   featureH < 0.1 : bus (10.23/0.23)
|   |   |   |   |   |   |   |   featureH >= 0.1 : bus (46/0)
|   |   |   |   |   |   |   featureM >= 0.99 : train (18.27/7)
|   |   |   |   |   featureC >= 1.92
|   |   |   |   |   |   featureI < 0.08
|   |   |   |   |   |   |   featureP < 0.19 : stationary (11/4)
|   |   |   |   |   |   |   featureP >= 0.19
|   |   |   |   |   |   |   |   featureG < 0.06 : stationary (34.37/0)
|   |   |   |   |   |   |   |   featureG >= 0.06 : stationary (24.92/7.92)
|   |   |   |   |   |   featureI >= 0.08
|   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 11.46 : train (22.97/7.81)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 11.46 : walk (17.23/10.23)
|   |   |   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   |   |   featureA < 0.06 : train (6.14/0)
|   |   |   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   |   |   featureS < 0.07 : train (3.83/0.28)
|   |   |   |   |   |   |   |   |   featureS >= 0.07
|   |   |   |   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   |   |   |   featureC < 10.12
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.21
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 1.27 : stationary (27.56/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 1.27 : stationary (13.27/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.21 : stationary (8.41/0.85)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 10.12 : train (0.7/-0)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : stationary (4.4/2.4)
|   |   |   accumulatedTravelDistance >= 296.57
|   |   |   |   speed95Quantile < 17.25
|   |   |   |   |   featureD < 0.36
|   |   |   |   |   |   featureT < 0.06
|   |   |   |   |   |   |   featureA < 0.01 : stationary (5.7/2.7)
|   |   |   |   |   |   |   featureA >= 0.01
|   |   |   |   |   |   |   |   featureJ < 1.59
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 365.03 : tram (1.04/0.04)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 365.03
|   |   |   |   |   |   |   |   |   |   featureH < 0.06 : train (8.37/0.76)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.06 : train (67.84/0)
|   |   |   |   |   |   |   |   featureJ >= 1.59 : train (6/2)
|   |   |   |   |   |   featureT >= 0.06
|   |   |   |   |   |   |   stationaryPointRatio < 0.04
|   |   |   |   |   |   |   |   featureF < 0.11 : tram (36.32/17.32)
|   |   |   |   |   |   |   |   featureF >= 0.11
|   |   |   |   |   |   |   |   |   featureQ < 0.14 : train (10.45/1)
|   |   |   |   |   |   |   |   |   featureQ >= 0.14
|   |   |   |   |   |   |   |   |   |   featureQ < 0.33
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 291.28 : train (6.11/0.03)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 291.28
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.15 : tram (6.09/1.09)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.19
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : train (0.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01 : tram (90/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.19 : tram (51/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.08 : train (1.08/0.72)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.33 : tram (8.75/3.75)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.04 : train (27.88/0.35)
|   |   |   |   |   featureD >= 0.36
|   |   |   |   |   |   featureE < 0.68
|   |   |   |   |   |   |   featureS < 0.58
|   |   |   |   |   |   |   |   featureP < 0.84 : train (27.28/4.47)
|   |   |   |   |   |   |   |   featureP >= 0.84 : bus (19.41/2.7)
|   |   |   |   |   |   |   featureS >= 0.58 : car (13.06/1.06)
|   |   |   |   |   |   featureE >= 0.68 : bike (6.43/2.43)
|   |   |   |   speed95Quantile >= 17.25
|   |   |   |   |   featureP < 1.15
|   |   |   |   |   |   featureO < 0.4
|   |   |   |   |   |   |   featureE < 0.06 : stationary (1.92/0.17)
|   |   |   |   |   |   |   featureE >= 0.06
|   |   |   |   |   |   |   |   featureN < 0.34
|   |   |   |   |   |   |   |   |   featureI < 0.15 : train (73.89/0)
|   |   |   |   |   |   |   |   |   featureI >= 0.15
|   |   |   |   |   |   |   |   |   |   featureU < 0.24
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.27 : train (62.53/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.27
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.43 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.18 : train (16.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.18 : train (29.34/1.4)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.68 : bus (0.52/0.17)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.24 : train (2.87/0.87)
|   |   |   |   |   |   |   |   featureN >= 0.34 : stationary (1.22/0.17)
|   |   |   |   |   |   featureO >= 0.4
|   |   |   |   |   |   |   featureK < 1.16
|   |   |   |   |   |   |   |   featureA < 0.13
|   |   |   |   |   |   |   |   |   featureJ < 1.45 : train (59.87/0)
|   |   |   |   |   |   |   |   |   featureJ >= 1.45 : train (6.87/0.35)
|   |   |   |   |   |   |   |   featureA >= 0.13 : bus (1.92/-0)
|   |   |   |   |   |   |   featureK >= 1.16 : train (48.51/0)
|   |   |   |   |   featureP >= 1.15 : train (16.09/4.7)
|   featureM >= 1.97
|   |   featureE < 0.78
|   |   |   trajectorySimilarityTrain < 253.48
|   |   |   |   speed25Quantile < 19.75
|   |   |   |   |   featureP < 1.73
|   |   |   |   |   |   speed95Quantile < 20.07
|   |   |   |   |   |   |   trajectorySimilarityTram < 695.47 : train (5.27/0.11)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 695.47
|   |   |   |   |   |   |   |   featureD < 0.29 : train (1.74/0)
|   |   |   |   |   |   |   |   featureD >= 0.29
|   |   |   |   |   |   |   |   |   featureP < 1.67
|   |   |   |   |   |   |   |   |   |   featureT < 0.26 : bus (25.47/4.47)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.26
|   |   |   |   |   |   |   |   |   |   |   featureL < 1.43 : car (2/1)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 1.43
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.94 : bus (81.5/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.94 : walk (0.25/0)
|   |   |   |   |   |   |   |   |   featureP >= 1.67 : car (5/3)
|   |   |   |   |   |   speed95Quantile >= 20.07 : train (20.03/0.43)
|   |   |   |   |   featureP >= 1.73
|   |   |   |   |   |   trajectorySimilarityBus < 12.95 : bike (18.89/8.89)
|   |   |   |   |   |   trajectorySimilarityBus >= 12.95
|   |   |   |   |   |   |   trajectorySimilarityBus < 172.07
|   |   |   |   |   |   |   |   featureS < 0.78
|   |   |   |   |   |   |   |   |   featureS < 0.62 : walk (0.81/0)
|   |   |   |   |   |   |   |   |   featureS >= 0.62
|   |   |   |   |   |   |   |   |   |   featureK < 1.99 : bus (89.81/0)
|   |   |   |   |   |   |   |   |   |   featureK >= 1.99 : bus (3.27/0.27)
|   |   |   |   |   |   |   |   featureS >= 0.78
|   |   |   |   |   |   |   |   |   featureM < 4.54
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 913.95 : car (9.63/0.27)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 913.95
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.45 : car (3.51/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.26 : car (4.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.21 : bus (27.41/12.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.21
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.67 : bus (69.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.67 : bus (36.12/8.09)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.41 : bus (12.03/0.26)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.41 : bus (57.06/0)
|   |   |   |   |   |   |   |   |   featureM >= 4.54
|   |   |   |   |   |   |   |   |   |   featureD < 0.58 : bus (2.54/0.54)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.58 : bus (44.27/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 172.07 : car (25.19/10.62)
|   |   |   |   speed25Quantile >= 19.75
|   |   |   |   |   featureJ < 1.46
|   |   |   |   |   |   featureO < 2.01
|   |   |   |   |   |   |   featureF < 0.37 : train (6.16/0.04)
|   |   |   |   |   |   |   featureF >= 0.37 : train (36.04/0)
|   |   |   |   |   |   featureO >= 2.01 : car (0.04/0)
|   |   |   |   |   featureJ >= 1.46 : train (31.3/8.77)
|   |   |   trajectorySimilarityTrain >= 253.48
|   |   |   |   featureA < 0.24
|   |   |   |   |   featureN < 0.92
|   |   |   |   |   |   featureO < 1.16
|   |   |   |   |   |   |   featureD < 0.4 : tram (31.63/19.63)
|   |   |   |   |   |   |   featureD >= 0.4
|   |   |   |   |   |   |   |   featureJ < 1.39 : car (31.66/4.66)
|   |   |   |   |   |   |   |   featureJ >= 1.39
|   |   |   |   |   |   |   |   |   featureR < 0.49
|   |   |   |   |   |   |   |   |   |   headingVariance < 7.72
|   |   |   |   |   |   |   |   |   |   |   featureP < 1.81 : bus (31.52/2.52)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 1.81 : car (16.04/3)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 7.72 : car (12.41/0.14)
|   |   |   |   |   |   |   |   |   featureR >= 0.49
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 916.98
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.44 : tram (1.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.44
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.32 : bus (6.52/1.52)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.32 : bus (36.02/1.02)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.08 : tram (11/5)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 916.98 : tram (16.19/9.45)
|   |   |   |   |   |   featureO >= 1.16
|   |   |   |   |   |   |   trajectorySimilarityBus < 124.64
|   |   |   |   |   |   |   |   featureL < 2.47
|   |   |   |   |   |   |   |   |   speedVariance < 2.82 : car (19.1/0.18)
|   |   |   |   |   |   |   |   |   speedVariance >= 2.82
|   |   |   |   |   |   |   |   |   |   featureR < 0.43 : car (28.5/0.38)
|   |   |   |   |   |   |   |   |   |   featureR >= 0.43
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.75 : car (24/7)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.75 : bus (26.01/4.63)
|   |   |   |   |   |   |   |   featureL >= 2.47 : bus (31/2)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 124.64
|   |   |   |   |   |   |   |   featureG < 0.9
|   |   |   |   |   |   |   |   |   featureG < 0.68 : car (35.33/0)
|   |   |   |   |   |   |   |   |   featureG >= 0.68 : car (8.95/0.38)
|   |   |   |   |   |   |   |   featureG >= 0.9 : car (8/1)
|   |   |   |   |   featureN >= 0.92
|   |   |   |   |   |   featureS < 0.84
|   |   |   |   |   |   |   featureR < 0.54 : car (20/5)
|   |   |   |   |   |   |   featureR >= 0.54
|   |   |   |   |   |   |   |   featureC < 2.93 : bus (3.31/1.31)
|   |   |   |   |   |   |   |   featureC >= 2.93 : bus (42/0)
|   |   |   |   |   |   featureS >= 0.84
|   |   |   |   |   |   |   featureL < 2.99
|   |   |   |   |   |   |   |   speedMax < 15.77
|   |   |   |   |   |   |   |   |   speed95Quantile < 15.4
|   |   |   |   |   |   |   |   |   |   featureS < 1.08
|   |   |   |   |   |   |   |   |   |   |   featureN < 0.99 : car (29.46/6)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 0.99 : car (52.38/0)
|   |   |   |   |   |   |   |   |   |   featureS >= 1.08 : car (54.38/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 15.4 : tram (7.17/2.17)
|   |   |   |   |   |   |   |   speedMax >= 15.77 : car (244.8/0)
|   |   |   |   |   |   |   featureL >= 2.99 : bus (29.97/13.66)
|   |   |   |   featureA >= 0.24
|   |   |   |   |   speed75Quantile < 2.96
|   |   |   |   |   |   featureD < 0.21 : stationary (14/0)
|   |   |   |   |   |   featureD >= 0.21 : walk (32.77/16.3)
|   |   |   |   |   speed75Quantile >= 2.96
|   |   |   |   |   |   maximumTravelDistance < 12.35
|   |   |   |   |   |   |   featureS < 1.04
|   |   |   |   |   |   |   |   featureE < 0.2 : train (2.39/0)
|   |   |   |   |   |   |   |   featureE >= 0.2
|   |   |   |   |   |   |   |   |   featureS < 0.91
|   |   |   |   |   |   |   |   |   |   featureO < 1.19 : bus (51.68/0)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.19
|   |   |   |   |   |   |   |   |   |   |   featureR < 1.02 : bus (31.73/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 1.02 : bus (9.39/1.71)
|   |   |   |   |   |   |   |   |   featureS >= 0.91 : bus (24.02/2.34)
|   |   |   |   |   |   |   featureS >= 1.04
|   |   |   |   |   |   |   |   speed75Quantile < 8.05 : car (8.77/2.59)
|   |   |   |   |   |   |   |   speed75Quantile >= 8.05
|   |   |   |   |   |   |   |   |   featureM < 5.32 : bus (35.1/0.85)
|   |   |   |   |   |   |   |   |   featureM >= 5.32 : bus (6.56/0.56)
|   |   |   |   |   |   maximumTravelDistance >= 12.35
|   |   |   |   |   |   |   featureL < 3 : car (37.76/9.32)
|   |   |   |   |   |   |   featureL >= 3
|   |   |   |   |   |   |   |   featureG < 0.48 : bus (35.99/2.33)
|   |   |   |   |   |   |   |   featureG >= 0.48 : bus (36.1/16.44)
|   |   featureE >= 0.78
|   |   |   featureC < 7.14
|   |   |   |   highSpeedPointRatio < 0.33
|   |   |   |   |   speedVariance < 1.27
|   |   |   |   |   |   featureL < 3.04 : car (23.55/0.02)
|   |   |   |   |   |   featureL >= 3.04 : car (21.76/0.31)
|   |   |   |   |   speedVariance >= 1.27
|   |   |   |   |   |   featureT < 0.7
|   |   |   |   |   |   |   trajectorySimilarityTrain < 64.2 : car (4.11/0.03)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 64.2
|   |   |   |   |   |   |   |   speed50Quantile < 8.36
|   |   |   |   |   |   |   |   |   featureL < 3.7 : bus (19.07/4.98)
|   |   |   |   |   |   |   |   |   featureL >= 3.7 : bus (32.26/0)
|   |   |   |   |   |   |   |   speed50Quantile >= 8.36 : car (2.05/0.02)
|   |   |   |   |   |   featureT >= 0.7 : car (33.15/4.24)
|   |   |   |   highSpeedPointRatio >= 0.33
|   |   |   |   |   featureA < 0.29
|   |   |   |   |   |   featureB < 0.07
|   |   |   |   |   |   |   highSpeedPointRatio < 0.83
|   |   |   |   |   |   |   |   speedMax < 19.3 : car (33.49/2.25)
|   |   |   |   |   |   |   |   speedMax >= 19.3 : car (18.27/8.13)
|   |   |   |   |   |   |   highSpeedPointRatio >= 0.83
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 65.37 : car (38.57/7.28)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 65.37
|   |   |   |   |   |   |   |   |   featureU < 1.02
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 193.22 : bus (1.08/0.02)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 193.22
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.63 : car (13.12/3.12)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.55 : tram (0.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.55 : car (40/0)
|   |   |   |   |   |   |   |   |   featureU >= 1.02 : car (486.98/0)
|   |   |   |   |   |   featureB >= 0.07
|   |   |   |   |   |   |   featureP < 1.68
|   |   |   |   |   |   |   |   featureP < 1.68 : car (68.93/0)
|   |   |   |   |   |   |   |   featureP >= 1.68 : bus (0.93/0)
|   |   |   |   |   |   |   featureP >= 1.68 : car (670.28/0)
|   |   |   |   |   featureA >= 0.29
|   |   |   |   |   |   featureL < 4.18
|   |   |   |   |   |   |   featureE < 0.98
|   |   |   |   |   |   |   |   speedMedian < 19.39
|   |   |   |   |   |   |   |   |   featureD < 1.11
|   |   |   |   |   |   |   |   |   |   featureD < 1.04 : car (62.55/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.04 : car (7.09/0.77)
|   |   |   |   |   |   |   |   |   featureD >= 1.11 : bus (1.55/0)
|   |   |   |   |   |   |   |   speedMedian >= 19.39 : bus (14.24/6.77)
|   |   |   |   |   |   |   featureE >= 0.98 : car (157.93/0)
|   |   |   |   |   |   featureL >= 4.18
|   |   |   |   |   |   |   speed25Quantile < 23.65
|   |   |   |   |   |   |   |   speedMin < 14.63 : car (38.46/14.23)
|   |   |   |   |   |   |   |   speedMin >= 14.63
|   |   |   |   |   |   |   |   |   speedMax < 24.97
|   |   |   |   |   |   |   |   |   |   featureD < 1.1 : bus (41.59/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.1 : car (4.35/1.88)
|   |   |   |   |   |   |   |   |   speedMax >= 24.97 : car (3.2/0.1)
|   |   |   |   |   |   |   speed25Quantile >= 23.65
|   |   |   |   |   |   |   |   featureL < 4.19 : bus (1.11/0)
|   |   |   |   |   |   |   |   featureL >= 4.19
|   |   |   |   |   |   |   |   |   featureB < 0.02 : bus (0.74/0)
|   |   |   |   |   |   |   |   |   featureB >= 0.02 : car (55.84/0)
|   |   |   featureC >= 7.14
|   |   |   |   featureU < 2.49
|   |   |   |   |   maximumTravelDistance < 12.88
|   |   |   |   |   |   featureO < 1.12 : car (16.86/1.86)
|   |   |   |   |   |   featureO >= 1.12
|   |   |   |   |   |   |   featureH < 4.14
|   |   |   |   |   |   |   |   featureL < 3.2 : train (1.07/0)
|   |   |   |   |   |   |   |   featureL >= 3.2 : bus (46.13/0)
|   |   |   |   |   |   |   featureH >= 4.14 : walk (2/0)
|   |   |   |   |   maximumTravelDistance >= 12.88
|   |   |   |   |   |   trajectorySimilarityTrain < 547.12 : bus (28.16/7.25)
|   |   |   |   |   |   trajectorySimilarityTrain >= 547.12
|   |   |   |   |   |   |   featureD < 1.37
|   |   |   |   |   |   |   |   featureT < 0.42 : car (26.82/12.82)
|   |   |   |   |   |   |   |   featureT >= 0.42
|   |   |   |   |   |   |   |   |   featureJ < 1.54 : bus (1.24/0)
|   |   |   |   |   |   |   |   |   featureJ >= 1.54
|   |   |   |   |   |   |   |   |   |   featureJ < 3.24
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.99 : car (12.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.99 : car (42/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 3.24 : car (68/0)
|   |   |   |   |   |   |   featureD >= 1.37 : bus (3.1/-0)
|   |   |   |   featureU >= 2.49 : bike (27/5)
featureJ >= 6.94
|   featureL < 0.75
|   |   headingVariance < 6.82
|   |   |   featureA < 4.96
|   |   |   |   featureD < 4.3 : bike (155.3/0)
|   |   |   |   featureD >= 4.3 : walk (5.96/-0)
|   |   |   featureA >= 4.96 : bike (551.65/0)
|   |   headingVariance >= 6.82
|   |   |   speedMax < 2.95 : walk (10.14/0.07)
|   |   |   speedMax >= 2.95
|   |   |   |   featureA < 4.96 : bike (30.62/0.97)
|   |   |   |   featureA >= 4.96 : bike (109.32/0)
|   featureL >= 0.75
|   |   speed95Quantile < 3.79
|   |   |   featureQ < 2.82 : bus (25.83/16.74)
|   |   |   featureQ >= 2.82
|   |   |   |   featureE < 1.94 : walk (18.87/0.87)
|   |   |   |   featureE >= 1.94 : walk (1677.09/0)
|   |   speed95Quantile >= 3.79
|   |   |   maximumTravelDistance < 9.68
|   |   |   |   featureA < 7.23
|   |   |   |   |   featureU < 2.5 : walk (1.83/0.64)
|   |   |   |   |   featureU >= 2.5
|   |   |   |   |   |   featureK < 9.73
|   |   |   |   |   |   |   featureR < 3.8
|   |   |   |   |   |   |   |   featureQ < 4.49 : bike (106.18/0)
|   |   |   |   |   |   |   |   featureQ >= 4.49 : bike (5.18/0.18)
|   |   |   |   |   |   |   featureR >= 3.8 : bike (21.92/1.92)
|   |   |   |   |   |   featureK >= 9.73 : walk (1.47/0)
|   |   |   |   featureA >= 7.23
|   |   |   |   |   featureG < 4.83 : bike (31.3/3.21)
|   |   |   |   |   featureG >= 4.83 : bike (13.41/5.41)
|   |   |   maximumTravelDistance >= 9.68
|   |   |   |   featureA < 2.8
|   |   |   |   |   featureP < 7.38 : bus (39.38/0.11)
|   |   |   |   |   featureP >= 7.38 : car (5/-0)
|   |   |   |   featureA >= 2.8 : bike (30.53/7.49)

Size of the tree : 433



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.36 (     5)  lowSpeedPointRatio
      0.35 (     4)  accumulatedTravelDistance
      0.3  (     9)  trajectorySimilarityTram
      0.28 (    12)  maximumTravelDistance
      0.28 (     7)  stationaryPointRatio
      0.28 (    20)  trajectorySimilarityTrain
      0.27 (     1)  mediumSpeedPointRatio
      0.25 (    40)  featureD
      0.24 (    10)  speed50Quantile
      0.23 (    11)  speed95Quantile
      0.23 (     7)  speed75Quantile
      0.22 (    22)  trajectorySimilarityBus
      0.21 (     7)  speedMin
      0.21 (    16)  speedMax
      0.19 (     6)  speedVariance
      0.19 (    24)  featureT
      0.19 (    35)  featureJ
      0.19 (    35)  featureL
      0.18 (    10)  headingVariance
      0.18 (    26)  featureA
      0.18 (     7)  speed25Quantile
      0.18 (    23)  featureM
      0.17 (    20)  featureK
      0.16 (    31)  featureS
      0.16 (     4)  speedMedian
      0.16 (    27)  featureU
      0.16 (    25)  featureP
      0.16 (     8)  travelDistance
      0.15 (    24)  featureO
      0.15 (    21)  featureR
      0.15 (    34)  featureE
      0.14 (    28)  featureC
      0.13 (    19)  featureN
      0.13 (    16)  featureB
      0.12 (    22)  featureQ
      0.11 (     3)  speedMean
      0.1  (    15)  featureI
      0.08 (    10)  featureF
      0.08 (    13)  featureG
      0.05 (    14)  featureH
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

featureA < 1.29
|   featureT < 0.23
|   |   featureD < 0.08
|   |   |   featureE < 0.04
|   |   |   |   featureD < 0.04
|   |   |   |   |   maximumTravelDistance < 2.88 : stationary (356.9/0)
|   |   |   |   |   maximumTravelDistance >= 2.88
|   |   |   |   |   |   featureL < 0.1
|   |   |   |   |   |   |   speedMedian < 0.1
|   |   |   |   |   |   |   |   travelDistance < 15.43 : stationary (19.31/4)
|   |   |   |   |   |   |   |   travelDistance >= 15.43 : stationary (45.52/0)
|   |   |   |   |   |   |   speedMedian >= 0.1 : train (4.14/1.14)
|   |   |   |   |   |   featureL >= 0.1 : stationary (136.12/0)
|   |   |   |   featureD >= 0.04
|   |   |   |   |   featureT < 0.01 : train (22/0)
|   |   |   |   |   featureT >= 0.01
|   |   |   |   |   |   featureS < 0.06 : stationary (18/5)
|   |   |   |   |   |   featureS >= 0.06 : stationary (60/0)
|   |   |   featureE >= 0.04
|   |   |   |   featureL < 0.28
|   |   |   |   |   featureU < 0.07 : train (30/9)
|   |   |   |   |   featureU >= 0.07 : train (16/0)
|   |   |   |   featureL >= 0.28 : stationary (19/2)
|   |   featureD >= 0.08
|   |   |   accumulatedTravelDistance < 342.58
|   |   |   |   speedMin < 0.01
|   |   |   |   |   featureU < 0.24
|   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   speedMax < 10.55
|   |   |   |   |   |   |   |   featureA < 0.03
|   |   |   |   |   |   |   |   |   featureE < 0.11
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 15.18 : bus (30.81/6.81)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 15.18 : train (31.88/3)
|   |   |   |   |   |   |   |   |   featureE >= 0.11 : train (34.26/0)
|   |   |   |   |   |   |   |   featureA >= 0.03
|   |   |   |   |   |   |   |   |   headingVariance < 4.64 : train (21.43/4.6)
|   |   |   |   |   |   |   |   |   headingVariance >= 4.64
|   |   |   |   |   |   |   |   |   |   featureE < 0.07 : car (12/2)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.07
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.4 : bus (24/4)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.4 : bus (27.22/12.86)
|   |   |   |   |   |   |   speedMax >= 10.55
|   |   |   |   |   |   |   |   featureO < 0.21
|   |   |   |   |   |   |   |   |   featureD < 0.32 : train (85.05/0)
|   |   |   |   |   |   |   |   |   featureD >= 0.32 : train (0.6/0.3)
|   |   |   |   |   |   |   |   featureO >= 0.21 : train (30.26/8.2)
|   |   |   |   |   |   featureA >= 0.11
|   |   |   |   |   |   |   mediumSpeedPointRatio < 0.09 : stationary (31.78/10.64)
|   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.09
|   |   |   |   |   |   |   |   featureE < 0.53
|   |   |   |   |   |   |   |   |   featureE < 0.06 : car (1/0)
|   |   |   |   |   |   |   |   |   featureE >= 0.06
|   |   |   |   |   |   |   |   |   |   featureK < 0.56 : bus (9.5/3.5)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.56
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.4 : bus (32.5/0.25)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.4 : bus (10.25/1.5)
|   |   |   |   |   |   |   |   featureE >= 0.53 : car (5.76/1.75)
|   |   |   |   |   featureU >= 0.24
|   |   |   |   |   |   speed50Quantile < 0.67
|   |   |   |   |   |   |   featureS < 0.24
|   |   |   |   |   |   |   |   featureK < 0.5 : bus (39/0)
|   |   |   |   |   |   |   |   featureK >= 0.5 : bus (9.14/1.92)
|   |   |   |   |   |   |   featureS >= 0.24
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 81.13
|   |   |   |   |   |   |   |   |   featureG < 0.07 : car (13.86/1.86)
|   |   |   |   |   |   |   |   |   featureG >= 0.07
|   |   |   |   |   |   |   |   |   |   featureC < 1.69 : train (10.45/3)
|   |   |   |   |   |   |   |   |   |   featureC >= 1.69
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.91 : bus (38.25/2.02)
|   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.91 : bus (10.34/5.28)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 81.13
|   |   |   |   |   |   |   |   |   speedVariance < 12.96 : car (35.38/9.38)
|   |   |   |   |   |   |   |   |   speedVariance >= 12.96 : train (7.5/0.12)
|   |   |   |   |   |   speed50Quantile >= 0.67
|   |   |   |   |   |   |   featureD < 0.77
|   |   |   |   |   |   |   |   speedMean < 7.93
|   |   |   |   |   |   |   |   |   featureC < 1.71 : train (3.91/1)
|   |   |   |   |   |   |   |   |   featureC >= 1.71
|   |   |   |   |   |   |   |   |   |   featureI < 0.08 : bus (6.23/2.23)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.08
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.85
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.12 : bus (3.46/0.31)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.12
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.75 : bus (73.31/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.75 : bus (14.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.85 : bus (1.77/0.77)
|   |   |   |   |   |   |   |   speedMean >= 7.93 : train (2.12/0.03)
|   |   |   |   |   |   |   featureD >= 0.77 : car (7.16/1.16)
|   |   |   |   speedMin >= 0.01
|   |   |   |   |   speed75Quantile < 1
|   |   |   |   |   |   featureM < 0.72 : train (14.73/4.55)
|   |   |   |   |   |   featureM >= 0.72
|   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   featureI < 0.1 : stationary (5.93/0.93)
|   |   |   |   |   |   |   |   featureI >= 0.1
|   |   |   |   |   |   |   |   |   featureK < 0.58 : train (0.66/0.11)
|   |   |   |   |   |   |   |   |   featureK >= 0.58
|   |   |   |   |   |   |   |   |   |   featureE < 0.42
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.93
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.4 : stationary (66.27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.4 : stationary (2.11/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.2 : stationary (2.05/0.05)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.97 : train (0.05/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.93 : train (0.11/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.42 : train (0.11/0)
|   |   |   |   |   |   |   featureB >= 0.03 : train (2.24/0.82)
|   |   |   |   |   speed75Quantile >= 1
|   |   |   |   |   |   featureA < 0.39
|   |   |   |   |   |   |   trajectorySimilarityTram < 90.89
|   |   |   |   |   |   |   |   featureI < 0.35
|   |   |   |   |   |   |   |   |   travelDistance < 72.28 : train (1.01/0.01)
|   |   |   |   |   |   |   |   |   travelDistance >= 72.28 : tram (39.81/2.81)
|   |   |   |   |   |   |   |   featureI >= 0.35 : train (3.61/1.76)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 90.89
|   |   |   |   |   |   |   |   featureA < 0.04 : train (35.57/0.07)
|   |   |   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 40.58 : train (8.86/2.42)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 40.58
|   |   |   |   |   |   |   |   |   |   speedMax < 3.73 : train (3.32/0.16)
|   |   |   |   |   |   |   |   |   |   speedMax >= 3.73 : bus (38.77/5.04)
|   |   |   |   |   |   featureA >= 0.39
|   |   |   |   |   |   |   speedMedian < 7.29
|   |   |   |   |   |   |   |   featureI < 0.54 : bus (2.25/0.25)
|   |   |   |   |   |   |   |   featureI >= 0.54
|   |   |   |   |   |   |   |   |   featureR < 0.33
|   |   |   |   |   |   |   |   |   |   featureF < 0.92 : bike (13.08/0.08)
|   |   |   |   |   |   |   |   |   |   featureF >= 0.92 : bike (30.08/0)
|   |   |   |   |   |   |   |   |   featureR >= 0.33 : car (0.25/0.08)
|   |   |   |   |   |   |   speedMedian >= 7.29 : car (16.23/0.09)
|   |   |   accumulatedTravelDistance >= 342.58
|   |   |   |   featureK < 0.62
|   |   |   |   |   trajectorySimilarityTram < 224.98
|   |   |   |   |   |   featureA < 0.06
|   |   |   |   |   |   |   mediumSpeedPointRatio < 0.64 : train (2.47/0)
|   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.64
|   |   |   |   |   |   |   |   featureK < 0.25 : train (3.78/0)
|   |   |   |   |   |   |   |   featureK >= 0.25
|   |   |   |   |   |   |   |   |   featureP < 0.42 : tram (59/0)
|   |   |   |   |   |   |   |   |   featureP >= 0.42
|   |   |   |   |   |   |   |   |   |   featureH < 0.21
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.15 : train (2.18/0)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.43 : tram (24.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.43 : tram (25/0)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.21 : tram (39.44/0.44)
|   |   |   |   |   |   featureA >= 0.06 : bus (2.95/2.22)
|   |   |   |   |   trajectorySimilarityTram >= 224.98
|   |   |   |   |   |   featureL < 0.27 : train (8.3/2.5)
|   |   |   |   |   |   featureL >= 0.27
|   |   |   |   |   |   |   featureO < 0.59
|   |   |   |   |   |   |   |   featureK < 0.52 : train (257.42/0)
|   |   |   |   |   |   |   |   featureK >= 0.52 : train (39.4/2.1)
|   |   |   |   |   |   |   featureO >= 0.59 : train (18.8/1.2)
|   |   |   |   featureK >= 0.62
|   |   |   |   |   featureE < 0.73
|   |   |   |   |   |   trajectorySimilarityTrain < 166.69
|   |   |   |   |   |   |   featureT < 0.07 : train (3.84/1.92)
|   |   |   |   |   |   |   featureT >= 0.07
|   |   |   |   |   |   |   |   featureI < 0.08 : train (1.6/0.64)
|   |   |   |   |   |   |   |   featureI >= 0.08
|   |   |   |   |   |   |   |   |   featureO < 0.28 : stationary (1.6/0.96)
|   |   |   |   |   |   |   |   |   featureO >= 0.28
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 16.73 : train (10.91/1.12)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 16.73
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.38 : train (24.67/0.89)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.63
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.23 : train (9.78/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.23 : train (103.82/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.63 : tram (0.3/0)
|   |   |   |   |   |   trajectorySimilarityTrain >= 166.69
|   |   |   |   |   |   |   maximumTravelDistance < 18.02 : bus (12.57/1.36)
|   |   |   |   |   |   |   maximumTravelDistance >= 18.02
|   |   |   |   |   |   |   |   featureL < 0.58 : bus (0.51/0)
|   |   |   |   |   |   |   |   featureL >= 0.58
|   |   |   |   |   |   |   |   |   featureO < 0.89
|   |   |   |   |   |   |   |   |   |   featureN < 0.19 : train (29.72/0)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.19 : train (19.62/0.92)
|   |   |   |   |   |   |   |   |   featureO >= 0.89 : bike (0.41/0.21)
|   |   |   |   |   featureE >= 0.73
|   |   |   |   |   |   featureR < 0.67 : car (15.69/0.45)
|   |   |   |   |   |   featureR >= 0.67 : car (54.34/0)
|   featureT >= 0.23
|   |   highSpeedPointRatio < 0.71
|   |   |   speedMax < 12.58
|   |   |   |   speedVariance < 1.06
|   |   |   |   |   headingVariance < 0.83 : bus (34.37/1.88)
|   |   |   |   |   headingVariance >= 0.83
|   |   |   |   |   |   featureC < 7.14
|   |   |   |   |   |   |   featureS < 0.5 : bus (20/1)
|   |   |   |   |   |   |   featureS >= 0.5
|   |   |   |   |   |   |   |   featureA < 0.06 : tram (2.06/0.06)
|   |   |   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   |   |   featureT < 0.26 : train (0.29/0.03)
|   |   |   |   |   |   |   |   |   featureT >= 0.26
|   |   |   |   |   |   |   |   |   |   featureB < 0.01 : car (2.52/0.49)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.57 : car (35.71/0.06)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.57 : car (36.78/0.52)
|   |   |   |   |   |   featureC >= 7.14 : stationary (29.68/19.68)
|   |   |   |   speedVariance >= 1.06
|   |   |   |   |   trajectorySimilarityTram < 406.11 : tram (33.33/3.3)
|   |   |   |   |   trajectorySimilarityTram >= 406.11
|   |   |   |   |   |   featureU < 1.2
|   |   |   |   |   |   |   featureM < 4.05
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 91.53
|   |   |   |   |   |   |   |   |   featureU < 0.64
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.48
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.3 : train (0.72/0)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.25 : bus (12.48/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.25
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 4.39 : bus (98.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.39 : bus (1.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.69 : bus (13.48/0.36)
|   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.48
|   |   |   |   |   |   |   |   |   |   |   featureJ < 0.96 : bus (13.06/5.06)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.96
|   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.42
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.26 : bus (8.58/0.58)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.05 : bus (39.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.05 : bus (2.19/0.19)
|   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.42 : bus (5.13/2.06)
|   |   |   |   |   |   |   |   |   featureU >= 0.64
|   |   |   |   |   |   |   |   |   |   featureE < 0.66
|   |   |   |   |   |   |   |   |   |   |   featureL < 2
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.69 : bus (23.18/5.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 306.82 : car (38.37/1.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 306.82 : bus (3.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 2
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.05 : car (20.62/7.47)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.05
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 4.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.6
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.02 : bus (60.34/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.02 : bus (7.75/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.6 : bus (35.05/1.6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.49 : bus (4.13/1.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.14 : car (2/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.66
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.96
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.34 : bus (37.56/2.38)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.87 : bus (76.46/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.87 : bus (3.37/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.23 : bus (3.1/1.1)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1.13 : train (0.73/0)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.96 : car (1.05/0.02)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 91.53
|   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.01
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 7.19 : bus (37.07/0.7)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 7.19 : car (28.83/8.5)
|   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.01
|   |   |   |   |   |   |   |   |   |   featureM < 2.58
|   |   |   |   |   |   |   |   |   |   |   featureL < 1.98
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.55 : car (21.22/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.55 : car (20.13/0.02)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 1.98 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   featureM >= 2.58 : car (18.34/5.82)
|   |   |   |   |   |   |   featureM >= 4.05
|   |   |   |   |   |   |   |   featureR < 1.93
|   |   |   |   |   |   |   |   |   featureF < 0.97 : bus (59.91/0)
|   |   |   |   |   |   |   |   |   featureF >= 0.97 : bus (25.61/0.69)
|   |   |   |   |   |   |   |   featureR >= 1.93 : train (3/-0)
|   |   |   |   |   |   featureU >= 1.2
|   |   |   |   |   |   |   featureJ < 2.97
|   |   |   |   |   |   |   |   speedMedian < 7.9
|   |   |   |   |   |   |   |   |   featureF < 0.28 : car (10.18/2)
|   |   |   |   |   |   |   |   |   featureF >= 0.28
|   |   |   |   |   |   |   |   |   |   featureC < 8.46 : car (57.05/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 8.46 : car (1.44/0.36)
|   |   |   |   |   |   |   |   speedMedian >= 7.9 : bus (18.83/7.78)
|   |   |   |   |   |   |   featureJ >= 2.97
|   |   |   |   |   |   |   |   speed75Quantile < 6.7 : car (8.32/0.13)
|   |   |   |   |   |   |   |   speed75Quantile >= 6.7
|   |   |   |   |   |   |   |   |   featureC < 5.2 : car (14/4)
|   |   |   |   |   |   |   |   |   featureC >= 5.2
|   |   |   |   |   |   |   |   |   |   featureM < 5.09 : bus (30/0)
|   |   |   |   |   |   |   |   |   |   featureM >= 5.09 : bus (37.13/1.88)
|   |   |   speedMax >= 12.58
|   |   |   |   trajectorySimilarityTram < 222.62 : tram (11.46/0.45)
|   |   |   |   trajectorySimilarityTram >= 222.62
|   |   |   |   |   travelDistance < 669.82
|   |   |   |   |   |   maximumTravelDistance < 16.2
|   |   |   |   |   |   |   featureA < 0.34
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 85.86
|   |   |   |   |   |   |   |   |   featureL < 2.99
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 849.68
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.87 : bus (32.6/1.52)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.87 : car (16.58/1)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 849.68
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 13.41
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.64 : car (6.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.28 : car (19.52/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.28 : car (21.44/0)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 13.41 : bus (27.66/9.62)
|   |   |   |   |   |   |   |   |   featureL >= 2.99
|   |   |   |   |   |   |   |   |   |   speedMax < 16.01
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.27
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 8.86 : bus (44.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 8.86 : car (0.25/0)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.27 : car (0.7/0)
|   |   |   |   |   |   |   |   |   |   speedMax >= 16.01 : car (2.06/0.02)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 85.86
|   |   |   |   |   |   |   |   |   speedMax < 15.79
|   |   |   |   |   |   |   |   |   |   featureE < 0.34 : train (0.24/0.06)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.34
|   |   |   |   |   |   |   |   |   |   |   featureU < 0.65 : car (10.12/0.12)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 0.65
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.54 : car (32.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.54
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.15 : car (7.42/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.38 : car (3.21/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.4 : car (35.48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.4 : car (8.54/0.03)
|   |   |   |   |   |   |   |   |   speedMax >= 15.79 : car (7.19/1.05)
|   |   |   |   |   |   |   featureA >= 0.34
|   |   |   |   |   |   |   |   featureU < 1.37 : bus (36.29/0.93)
|   |   |   |   |   |   |   |   featureU >= 1.37 : car (17.68/8.34)
|   |   |   |   |   |   maximumTravelDistance >= 16.2
|   |   |   |   |   |   |   speedMax < 18.42
|   |   |   |   |   |   |   |   featureR < 1.23
|   |   |   |   |   |   |   |   |   featureP < 2.26
|   |   |   |   |   |   |   |   |   |   featureJ < 1.85
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.87 : bus (1/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.87
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.26 : train (0.18/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 1.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 1.51 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 1.51
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.06 : train (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.21 : car (38.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.21 : car (6.22/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.88 : car (2.22/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 1.13 : car (0.26/0.09)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.85 : car (23.67/10.31)
|   |   |   |   |   |   |   |   |   featureP >= 2.26
|   |   |   |   |   |   |   |   |   |   featureP < 3.48
|   |   |   |   |   |   |   |   |   |   |   featureL < 4.18
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.92
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.56 : car (30.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.56 : car (21.75/0.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.38 : bus (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.92 : car (2.31/0.22)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 4.18 : bus (0.44/0)
|   |   |   |   |   |   |   |   |   |   featureP >= 3.48 : car (30.4/0)
|   |   |   |   |   |   |   |   featureR >= 1.23 : car (14.61/4.61)
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
|   |   |   |   |   |   featureE < 0.9
|   |   |   |   |   |   |   featureT < 0.3 : train (0.33/0.03)
|   |   |   |   |   |   |   featureT >= 0.3
|   |   |   |   |   |   |   |   featureL < 2.25 : car (0.83/0.18)
|   |   |   |   |   |   |   |   featureL >= 2.25
|   |   |   |   |   |   |   |   |   featureJ < 4.11
|   |   |   |   |   |   |   |   |   |   featureQ < 0.73
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.35 : bus (9.05/0.03)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.35 : bus (48.43/0)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.73 : bus (26.16/0.61)
|   |   |   |   |   |   |   |   |   featureJ >= 4.11 : car (0.18/0.08)
|   |   |   |   |   |   featureE >= 0.9 : car (13.96/2.38)
|   |   |   |   speed95Quantile >= 21.48
|   |   |   |   |   featureR < 0.61
|   |   |   |   |   |   speedMax < 23.24 : car (3.07/0.03)
|   |   |   |   |   |   speedMax >= 23.24
|   |   |   |   |   |   |   featureA < 0.13
|   |   |   |   |   |   |   |   featureD < 0.74
|   |   |   |   |   |   |   |   |   featureR < 0.41 : train (8.07/0.02)
|   |   |   |   |   |   |   |   |   featureR >= 0.41
|   |   |   |   |   |   |   |   |   |   featureH < 0.27 : train (3.07/0.02)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.27 : train (37/0)
|   |   |   |   |   |   |   |   featureD >= 0.74 : car (0.26/0.09)
|   |   |   |   |   |   |   featureA >= 0.13 : train (4.84/0.7)
|   |   |   |   |   featureR >= 0.61
|   |   |   |   |   |   headingVariance < 0.63 : car (16/7.57)
|   |   |   |   |   |   headingVariance >= 0.63 : car (24.54/0.87)
|   |   |   trajectorySimilarityTrain >= 220.6
|   |   |   |   featureP < 1.44 : train (16.08/4.51)
|   |   |   |   featureP >= 1.44
|   |   |   |   |   featureK < 2.19
|   |   |   |   |   |   featureL < 4.15
|   |   |   |   |   |   |   speedMedian < 15.76
|   |   |   |   |   |   |   |   featureU < 0.88
|   |   |   |   |   |   |   |   |   featureD < 0.83
|   |   |   |   |   |   |   |   |   |   featureU < 0.74 : bus (19.29/3.6)
|   |   |   |   |   |   |   |   |   |   featureU >= 0.74
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 499 : bus (5.17/0.08)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 499
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.92 : car (15.51/0.3)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.92 : bus (24.81/12.38)
|   |   |   |   |   |   |   |   |   featureD >= 0.83
|   |   |   |   |   |   |   |   |   |   featureD < 0.94 : car (31.79/0.79)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.94 : car (26.99/0.3)
|   |   |   |   |   |   |   |   featureU >= 0.88
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 33.77 : car (18.48/7.07)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 33.77
|   |   |   |   |   |   |   |   |   |   speed50Quantile < 11.54 : car (4.11/2.02)
|   |   |   |   |   |   |   |   |   |   speed50Quantile >= 11.54
|   |   |   |   |   |   |   |   |   |   |   featureC < 7.99
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.88
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 4.62 : car (107.77/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 4.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.57 : car (0.53/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.69 : car (18.62/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.69 : car (42.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.88 : bus (0.35/0.18)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 7.99 : car (19.51/2.18)
|   |   |   |   |   |   |   speedMedian >= 15.76
|   |   |   |   |   |   |   |   featureA < 0.42
|   |   |   |   |   |   |   |   |   featureN < 0.82
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 722.63 : bus (4.89/0.54)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 722.63 : car (35.47/3.95)
|   |   |   |   |   |   |   |   |   featureN >= 0.82
|   |   |   |   |   |   |   |   |   |   featureE < 0.74
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.31 : bus (0.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.81 : bus (1.23/0.41)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.17 : car (144.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.17 : car (25.68/0.41)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.34 : bus (0.82/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.74 : car (1153.26/0)
|   |   |   |   |   |   |   |   featureA >= 0.42 : bus (12.4/5.04)
|   |   |   |   |   |   featureL >= 4.15
|   |   |   |   |   |   |   featureP < 3.73
|   |   |   |   |   |   |   |   speed75Quantile < 27.9 : bus (39.92/0)
|   |   |   |   |   |   |   |   speed75Quantile >= 27.9 : car (1.17/0.17)
|   |   |   |   |   |   |   featureP >= 3.73
|   |   |   |   |   |   |   |   speed95Quantile < 24.84 : car (17/6)
|   |   |   |   |   |   |   |   speed95Quantile >= 24.84 : car (51/0)
|   |   |   |   |   featureK >= 2.19
|   |   |   |   |   |   speed50Quantile < 24.35
|   |   |   |   |   |   |   speedMedian < 19.8
|   |   |   |   |   |   |   |   featureB < 0.04 : bus (15.13/5.14)
|   |   |   |   |   |   |   |   featureB >= 0.04 : car (27.52/3.55)
|   |   |   |   |   |   |   speedMedian >= 19.8
|   |   |   |   |   |   |   |   speedMax < 24.17
|   |   |   |   |   |   |   |   |   featureO < 2.38
|   |   |   |   |   |   |   |   |   |   featureS < 1.42
|   |   |   |   |   |   |   |   |   |   |   featureJ < 3.97
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 1.12 : bus (41.85/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1.12 : car (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.97 : train (1.36/0.51)
|   |   |   |   |   |   |   |   |   |   featureS >= 1.42 : car (1.54/0)
|   |   |   |   |   |   |   |   |   featureO >= 2.38 : car (6.71/1.02)
|   |   |   |   |   |   |   |   speedMax >= 24.17 : car (5.61/0.35)
|   |   |   |   |   |   speed50Quantile >= 24.35
|   |   |   |   |   |   |   featureU < 0.94 : bus (2.14/0.89)
|   |   |   |   |   |   |   featureU >= 0.94
|   |   |   |   |   |   |   |   featureD < 1.46
|   |   |   |   |   |   |   |   |   featureH < 2.48 : car (48.49/0)
|   |   |   |   |   |   |   |   |   featureH >= 2.48 : car (2.18/0.18)
|   |   |   |   |   |   |   |   featureD >= 1.46 : bus (1.07/-0)
featureA >= 1.29
|   speedMax < 3.15
|   |   featureE < 2.29
|   |   |   trajectorySimilarityTrain < 726.74
|   |   |   |   featureA < 2.63 : bus (10.76/3.64)
|   |   |   |   featureA >= 2.63
|   |   |   |   |   featureB < 0.04 : walk (54.12/0)
|   |   |   |   |   featureB >= 0.04 : bike (6.16/2)
|   |   |   trajectorySimilarityTrain >= 726.74 : stationary (12.46/4.46)
|   |   featureE >= 2.29 : walk (1697.83/0)
|   speedMax >= 3.15
|   |   speedMean < 8.18
|   |   |   featureL < 2.1
|   |   |   |   featureN < 0.16
|   |   |   |   |   featureB < 0.1
|   |   |   |   |   |   featureJ < 19.31 : bike (16.73/3.36)
|   |   |   |   |   |   featureJ >= 19.31 : bike (24.37/0)
|   |   |   |   |   featureB >= 0.1 : bike (781.75/0)
|   |   |   |   featureN >= 0.16 : bike (2/0)
|   |   |   featureL >= 2.1
|   |   |   |   featureS < 2.64 : walk (27.78/13.24)
|   |   |   |   featureS >= 2.64
|   |   |   |   |   featureQ < 3.58
|   |   |   |   |   |   featureG < 0.15 : bus (3/0)
|   |   |   |   |   |   featureG >= 0.15 : bike (90.24/0)
|   |   |   |   |   featureQ >= 3.58
|   |   |   |   |   |   featureP < 13.35
|   |   |   |   |   |   |   featureH < 4.72 : walk (18.44/8)
|   |   |   |   |   |   |   featureH >= 4.72 : walk (24/0)
|   |   |   |   |   |   featureP >= 13.35
|   |   |   |   |   |   |   featureD < 5.21 : bike (89.12/0)
|   |   |   |   |   |   |   featureD >= 5.21 : walk (9.46/2)
|   |   speedMean >= 8.18
|   |   |   featureR < 1.34 : train (2.32/0.32)
|   |   |   featureR >= 1.34
|   |   |   |   featureG < 3.47
|   |   |   |   |   featureQ < 3.28 : bus (38.19/0.1)
|   |   |   |   |   featureQ >= 3.28 : bus (4.56/0.56)
|   |   |   |   featureG >= 3.47 : walk (1.72/0.05)

Size of the tree : 521


RandomTree
==========

featureJ < 6.31
|   featureL < 1.3
|   |   featureD < 0.1
|   |   |   featureE < 0.04
|   |   |   |   featureJ < 0.25
|   |   |   |   |   speed25Quantile < 0.08
|   |   |   |   |   |   featureP < 0.03
|   |   |   |   |   |   |   featureK < 0.04 : stationary (50.93/0)
|   |   |   |   |   |   |   featureK >= 0.04 : stationary (38/8)
|   |   |   |   |   |   featureP >= 0.03
|   |   |   |   |   |   |   featureR < 0.04 : stationary (447.41/0)
|   |   |   |   |   |   |   featureR >= 0.04
|   |   |   |   |   |   |   |   featureQ < 0.04 : stationary (3.95/1.97)
|   |   |   |   |   |   |   |   featureQ >= 0.04
|   |   |   |   |   |   |   |   |   featureN < 0.05 : stationary (8.97/0.99)
|   |   |   |   |   |   |   |   |   featureN >= 0.05 : stationary (42.88/0)
|   |   |   |   |   speed25Quantile >= 0.08 : train (7.85/2.81)
|   |   |   |   featureJ >= 0.25 : stationary (35/16)
|   |   |   featureE >= 0.04
|   |   |   |   featureT < 0.04
|   |   |   |   |   featureA < 0.01
|   |   |   |   |   |   featureK < 0.18
|   |   |   |   |   |   |   featureP < 0.13 : train (9/1)
|   |   |   |   |   |   |   featureP >= 0.13 : train (42/0)
|   |   |   |   |   |   featureK >= 0.18 : train (5/1)
|   |   |   |   |   featureA >= 0.01 : car (2/0)
|   |   |   |   featureT >= 0.04
|   |   |   |   |   featureQ < 0.11 : train (18/10)
|   |   |   |   |   featureQ >= 0.11 : stationary (26/0)
|   |   featureD >= 0.1
|   |   |   trajectorySimilarityTram < 197.56
|   |   |   |   featureA < 0.07
|   |   |   |   |   featureQ < 0.15 : tram (27.35/8.35)
|   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   featureO < 0.24 : train (0.98/0)
|   |   |   |   |   |   featureO >= 0.24
|   |   |   |   |   |   |   featureR < 0.37
|   |   |   |   |   |   |   |   featureE < 0.29
|   |   |   |   |   |   |   |   |   featureB < 0.01 : train (0.82/0)
|   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   featureN < 0.34 : tram (116/0)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.34
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.21 : tram (8.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.31 : tram (51/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.31 : tram (6.33/0.33)
|   |   |   |   |   |   |   |   featureE >= 0.29 : tram (1.98/0.98)
|   |   |   |   |   |   |   featureR >= 0.37 : train (1.15/0.49)
|   |   |   |   featureA >= 0.07 : tram (9.22/6.22)
|   |   |   trajectorySimilarityTram >= 197.56
|   |   |   |   maximumTravelDistance < 14.88
|   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   trajectorySimilarityTrain < 874.66
|   |   |   |   |   |   |   trajectorySimilarityBus < 40.58
|   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   featureE < 0.13
|   |   |   |   |   |   |   |   |   |   featureT < 0.08 : bus (19.35/6.35)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.08 : bus (34/0)
|   |   |   |   |   |   |   |   |   featureE >= 0.13 : train (38.25/11)
|   |   |   |   |   |   |   |   featureB >= 0.04 : bus (33/0)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 40.58 : train (42.32/0)
|   |   |   |   |   |   trajectorySimilarityTrain >= 874.66
|   |   |   |   |   |   |   featureM < 1.51
|   |   |   |   |   |   |   |   featureL < 0.32 : train (17.44/4)
|   |   |   |   |   |   |   |   featureL >= 0.32
|   |   |   |   |   |   |   |   |   featureU < 0.09 : train (3/1)
|   |   |   |   |   |   |   |   |   featureU >= 0.09 : train (55.53/0)
|   |   |   |   |   |   |   featureM >= 1.51 : car (6.32/0.32)
|   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   |   |   headingVariance < 4.48
|   |   |   |   |   |   |   |   featureR < 0.32
|   |   |   |   |   |   |   |   |   speedMin < 2.52
|   |   |   |   |   |   |   |   |   |   featureL < 1.09
|   |   |   |   |   |   |   |   |   |   |   featureJ < 0.58 : train (11/5)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.58 : bus (37.13/19.69)
|   |   |   |   |   |   |   |   |   |   featureL >= 1.09 : car (7.44/1.44)
|   |   |   |   |   |   |   |   |   speedMin >= 2.52 : train (18.87/1.48)
|   |   |   |   |   |   |   |   featureR >= 0.32 : bus (26.55/11.71)
|   |   |   |   |   |   |   headingVariance >= 4.48
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 82.97
|   |   |   |   |   |   |   |   |   featureQ < 0.23
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 718.4 : bus (38.09/4.98)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 718.4 : car (37.06/13.06)
|   |   |   |   |   |   |   |   |   featureQ >= 0.23
|   |   |   |   |   |   |   |   |   |   featureO < 0.77
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.39 : bus (34.29/2.57)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.39
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.9 : bus (2.07/1.07)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.44 : bus (50.64/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.44 : bus (1.21/0.21)
|   |   |   |   |   |   |   |   |   |   featureO >= 0.77 : bus (18.64/7.64)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 82.97 : car (27.35/1.1)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   |   |   speedMax < 2.17
|   |   |   |   |   |   |   |   speed95Quantile < 0.45
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 508.12 : train (14.73/7.49)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 508.12 : stationary (35.77/6.56)
|   |   |   |   |   |   |   |   speed95Quantile >= 0.45
|   |   |   |   |   |   |   |   |   featureA < 1.89 : stationary (37.08/1.83)
|   |   |   |   |   |   |   |   |   featureA >= 1.89 : walk (5/0)
|   |   |   |   |   |   |   speedMax >= 2.17 : car (7.36/1.29)
|   |   |   |   maximumTravelDistance >= 14.88
|   |   |   |   |   featureR < 0.26
|   |   |   |   |   |   featureU < 0.32 : train (341.25/0)
|   |   |   |   |   |   featureU >= 0.32 : train (24.18/5.71)
|   |   |   |   |   featureR >= 0.26
|   |   |   |   |   |   speed50Quantile < 11.16
|   |   |   |   |   |   |   featureT < 0.16 : train (13.45/3.6)
|   |   |   |   |   |   |   featureT >= 0.16 : car (27.36/6.11)
|   |   |   |   |   |   speed50Quantile >= 11.16
|   |   |   |   |   |   |   featureA < 0.06
|   |   |   |   |   |   |   |   featureQ < 0.38 : train (46.75/0)
|   |   |   |   |   |   |   |   featureQ >= 0.38 : train (8.61/0.69)
|   |   |   |   |   |   |   featureA >= 0.06 : train (20.43/5.28)
|   featureL >= 1.3
|   |   speed95Quantile < 12.19
|   |   |   featureE < 0.41
|   |   |   |   speed95Quantile < 4.07
|   |   |   |   |   trajectorySimilarityTrain < 584.15 : walk (15.6/8.55)
|   |   |   |   |   trajectorySimilarityTrain >= 584.15
|   |   |   |   |   |   featureD < 0.2 : stationary (19/0)
|   |   |   |   |   |   featureD >= 0.2
|   |   |   |   |   |   |   featureP < 0.24 : train (8/0)
|   |   |   |   |   |   |   featureP >= 0.24 : stationary (35.41/8.41)
|   |   |   |   speed95Quantile >= 4.07
|   |   |   |   |   trajectorySimilarityBus < 150.95
|   |   |   |   |   |   speed75Quantile < 8.25
|   |   |   |   |   |   |   featureI < 0.45
|   |   |   |   |   |   |   |   featureA < 0.12 : bus (20.46/6.11)
|   |   |   |   |   |   |   |   featureA >= 0.12
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 511.45 : tram (2.06/0.06)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 511.45
|   |   |   |   |   |   |   |   |   |   featureT < 0.33 : bus (39.79/1.34)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.33 : car (9.67/4.67)
|   |   |   |   |   |   |   featureI >= 0.45
|   |   |   |   |   |   |   |   featureP < 1.51 : bus (28.17/1.82)
|   |   |   |   |   |   |   |   featureP >= 1.51 : car (36.12/15.12)
|   |   |   |   |   |   speed75Quantile >= 8.25
|   |   |   |   |   |   |   featureC < 1.76 : train (2.05/1)
|   |   |   |   |   |   |   featureC >= 1.76
|   |   |   |   |   |   |   |   travelDistance < 412.71
|   |   |   |   |   |   |   |   |   featureQ < 0.87
|   |   |   |   |   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.29 : train (0.45/0.07)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.29
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.26 : train (0.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.59 : bus (1.15/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.48 : bus (52.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.48 : bus (25.37/0.07)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.01 : bus (2.15/0.15)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : train (0.15/-0)
|   |   |   |   |   |   |   |   |   featureQ >= 0.87 : bus (2.3/0.3)
|   |   |   |   |   |   |   |   travelDistance >= 412.71 : tram (1.03/0.03)
|   |   |   |   |   trajectorySimilarityBus >= 150.95 : tram (27.05/15)
|   |   |   featureE >= 0.41
|   |   |   |   featureU < 1.24
|   |   |   |   |   speedMean < 0.5 : car (24.39/12.86)
|   |   |   |   |   speedMean >= 0.5
|   |   |   |   |   |   trajectorySimilarityTrain < 993.85
|   |   |   |   |   |   |   featureJ < 1.91
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 201.03
|   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.18
|   |   |   |   |   |   |   |   |   |   featureO < 1.12
|   |   |   |   |   |   |   |   |   |   |   featureO < 0.51 : train (0.85/0.24)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 0.51
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.97 : bus (50/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.97 : bus (15.46/0.49)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.12 : bus (34.98/4.37)
|   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.18 : bus (5.39/2.3)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 201.03
|   |   |   |   |   |   |   |   |   featureP < 1.68 : bus (17.02/2.02)
|   |   |   |   |   |   |   |   |   featureP >= 1.68
|   |   |   |   |   |   |   |   |   |   featureD < 0.69
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.14 : car (39/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.14 : bus (4.56/1.56)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.69 : bus (17/3.79)
|   |   |   |   |   |   |   featureJ >= 1.91
|   |   |   |   |   |   |   |   featureC < 7.88
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : train (2.07/0.06)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   featureN < 0.29 : car (1.32/0.66)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.29
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.29
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.25 : bus (4.44/0.44)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.25 : bus (48/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.15 : bus (31.76/2.54)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.29 : bus (225.39/0)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.96 : bus (4.63/1.76)
|   |   |   |   |   |   |   |   featureC >= 7.88
|   |   |   |   |   |   |   |   |   featureA < 0.5 : bus (20.64/6.43)
|   |   |   |   |   |   |   |   |   featureA >= 0.5 : bus (24.65/1.77)
|   |   |   |   |   |   trajectorySimilarityTrain >= 993.85
|   |   |   |   |   |   |   speed75Quantile < 8
|   |   |   |   |   |   |   |   featureC < 5.3 : car (18.18/8.51)
|   |   |   |   |   |   |   |   featureC >= 5.3 : car (24.23/5.98)
|   |   |   |   |   |   |   speed75Quantile >= 8
|   |   |   |   |   |   |   |   featureJ < 2.32 : car (36.57/5.11)
|   |   |   |   |   |   |   |   featureJ >= 2.32
|   |   |   |   |   |   |   |   |   speed50Quantile < 5.25 : car (7.35/0.28)
|   |   |   |   |   |   |   |   |   speed50Quantile >= 5.25
|   |   |   |   |   |   |   |   |   |   featureO < 0.45 : car (3.18/0.09)
|   |   |   |   |   |   |   |   |   |   featureO >= 0.45 : bus (38.8/2.74)
|   |   |   |   featureU >= 1.24
|   |   |   |   |   highSpeedPointRatio < 0.25
|   |   |   |   |   |   featureQ < 1.68
|   |   |   |   |   |   |   featureM < 5.43
|   |   |   |   |   |   |   |   featureL < 4.54
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.36 : car (36.97/0.1)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.36
|   |   |   |   |   |   |   |   |   |   featureC < 6.17 : car (32.82/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 6.17 : bus (7.32/0.32)
|   |   |   |   |   |   |   |   featureL >= 4.54 : bus (3/0)
|   |   |   |   |   |   |   featureM >= 5.43
|   |   |   |   |   |   |   |   featureP < 6.21 : bus (32.03/9.62)
|   |   |   |   |   |   |   |   featureP >= 6.21 : car (10/0)
|   |   |   |   |   |   featureQ >= 1.68 : bike (5.82/0.41)
|   |   |   |   |   highSpeedPointRatio >= 0.25
|   |   |   |   |   |   featureJ < 2.91 : car (8.63/2)
|   |   |   |   |   |   featureJ >= 2.91 : bus (39.62/0.31)
|   |   speed95Quantile >= 12.19
|   |   |   featureM < 2.3
|   |   |   |   speedMax < 21.79
|   |   |   |   |   featureU < 0.37
|   |   |   |   |   |   featureO < 0.59 : train (37.54/3.06)
|   |   |   |   |   |   featureO >= 0.59 : bus (12.71/6.06)
|   |   |   |   |   featureU >= 0.37
|   |   |   |   |   |   featureC < 2.79 : bus (29.88/9.88)
|   |   |   |   |   |   featureC >= 2.79
|   |   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   |   featureR < 0.4 : car (25.81/5.81)
|   |   |   |   |   |   |   |   featureR >= 0.4 : bus (29.35/4)
|   |   |   |   |   |   |   speedMin >= 0.01 : car (29.14/1.14)
|   |   |   |   speedMax >= 21.79
|   |   |   |   |   featureS < 0.09 : car (7.92/2.92)
|   |   |   |   |   featureS >= 0.09
|   |   |   |   |   |   featureA < 0.18
|   |   |   |   |   |   |   featureT < 0.32
|   |   |   |   |   |   |   |   featureK < 1.16
|   |   |   |   |   |   |   |   |   featureC < 2.78 : train (53.44/0)
|   |   |   |   |   |   |   |   |   featureC >= 2.78 : train (4.83/1.22)
|   |   |   |   |   |   |   |   featureK >= 1.16
|   |   |   |   |   |   |   |   |   featureR < 1.01 : train (44.89/0)
|   |   |   |   |   |   |   |   |   featureR >= 1.01 : train (6.53/0.61)
|   |   |   |   |   |   |   featureT >= 0.32 : bus (0.61/-0)
|   |   |   |   |   |   featureA >= 0.18 : bus (3.66/1.53)
|   |   |   featureM >= 2.3
|   |   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   |   travelDistance < 1034.32
|   |   |   |   |   |   featureJ < 2.57
|   |   |   |   |   |   |   featureN < 0.86
|   |   |   |   |   |   |   |   featureS < 0.83
|   |   |   |   |   |   |   |   |   featureP < 1.42 : bus (10.68/6.68)
|   |   |   |   |   |   |   |   |   featureP >= 1.42
|   |   |   |   |   |   |   |   |   |   featureM < 2.46 : car (2/0)
|   |   |   |   |   |   |   |   |   |   featureM >= 2.46
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.93 : bus (47.8/0)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.93 : car (1.58/-0)
|   |   |   |   |   |   |   |   featureS >= 0.83 : car (37.48/10.23)
|   |   |   |   |   |   |   featureN >= 0.86
|   |   |   |   |   |   |   |   featureJ < 1.79
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 217.34 : bus (14.66/1.61)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 217.34
|   |   |   |   |   |   |   |   |   |   featureP < 1.92 : bus (1.81/0.61)
|   |   |   |   |   |   |   |   |   |   featureP >= 1.92
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.88 : car (133.48/0)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.88 : car (0.81/0.2)
|   |   |   |   |   |   |   |   featureJ >= 1.79
|   |   |   |   |   |   |   |   |   featureE < 0.89
|   |   |   |   |   |   |   |   |   |   featureT < 0.46
|   |   |   |   |   |   |   |   |   |   |   speedMedian < 9.92 : car (14.22/5.22)
|   |   |   |   |   |   |   |   |   |   |   speedMedian >= 9.92
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 534.79 : bus (26.41/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 534.79 : bus (17.27/8.13)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.46
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 781.21
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.91 : bus (27.21/8.21)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 212.06 : car (13.39/4.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 212.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.1 : car (3/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.42 : car (26.73/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.42 : car (65.01/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.48 : bus (1/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.86 : bus (17/8)
|   |   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 781.21 : bus (12.27/0.22)
|   |   |   |   |   |   |   |   |   featureE >= 0.89 : car (33.68/0)
|   |   |   |   |   |   featureJ >= 2.57
|   |   |   |   |   |   |   featureE < 0.92
|   |   |   |   |   |   |   |   featureO < 2.13
|   |   |   |   |   |   |   |   |   featureT < 0.54
|   |   |   |   |   |   |   |   |   |   featureR < 1.23
|   |   |   |   |   |   |   |   |   |   |   featureJ < 4.61
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.57 : train (1.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.63 : bus (3.23/0.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.63 : bus (97.51/0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.61 : walk (2.25/-0)
|   |   |   |   |   |   |   |   |   |   featureR >= 1.23 : bus (6.13/2.23)
|   |   |   |   |   |   |   |   |   featureT >= 0.54
|   |   |   |   |   |   |   |   |   |   featureC < 4.14 : bus (13.68/6.68)
|   |   |   |   |   |   |   |   |   |   featureC >= 4.14
|   |   |   |   |   |   |   |   |   |   |   featureS < 1.32 : bus (39.03/0.68)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 1.32 : bus (5/2)
|   |   |   |   |   |   |   |   featureO >= 2.13
|   |   |   |   |   |   |   |   |   featureE < 0.73 : bus (18.45/0.45)
|   |   |   |   |   |   |   |   |   featureE >= 0.73
|   |   |   |   |   |   |   |   |   |   featureL < 4.14 : car (19.9/1.23)
|   |   |   |   |   |   |   |   |   |   featureL >= 4.14
|   |   |   |   |   |   |   |   |   |   |   featureJ < 5.11 : bus (30/1)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 5.11 : car (11/5)
|   |   |   |   |   |   |   featureE >= 0.92
|   |   |   |   |   |   |   |   featureL < 4.53
|   |   |   |   |   |   |   |   |   featureR < 1.34
|   |   |   |   |   |   |   |   |   |   featureT < 0.78
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.81 : car (17.23/0.23)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.81 : car (62.58/0)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.78 : car (2.8/1.13)
|   |   |   |   |   |   |   |   |   featureR >= 1.34 : bus (6/3)
|   |   |   |   |   |   |   |   featureL >= 4.53 : bus (27.35/0.45)
|   |   |   |   |   travelDistance >= 1034.32
|   |   |   |   |   |   featureP < 2.42 : bus (4.93/3.46)
|   |   |   |   |   |   featureP >= 2.42
|   |   |   |   |   |   |   featureC < 6.48
|   |   |   |   |   |   |   |   featureP < 3.17
|   |   |   |   |   |   |   |   |   featureJ < 3.37 : car (41.23/0)
|   |   |   |   |   |   |   |   |   featureJ >= 3.37 : car (3.26/0.26)
|   |   |   |   |   |   |   |   featureP >= 3.17 : car (95.76/0)
|   |   |   |   |   |   |   featureC >= 6.48 : car (0.98/0.57)
|   |   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   |   speedMax < 35.36
|   |   |   |   |   |   trajectorySimilarityTrain < 801.63
|   |   |   |   |   |   |   featureE < 0.56 : tram (22.23/9.17)
|   |   |   |   |   |   |   featureE >= 0.56
|   |   |   |   |   |   |   |   featureU < 1.87
|   |   |   |   |   |   |   |   |   featureL < 4.23
|   |   |   |   |   |   |   |   |   |   featureA < 0.42
|   |   |   |   |   |   |   |   |   |   |   featureM < 3.42 : car (37.28/1.42)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 3.42 : car (143.86/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.42 : car (3.67/1.49)
|   |   |   |   |   |   |   |   |   featureL >= 4.23 : car (16.87/5.74)
|   |   |   |   |   |   |   |   featureU >= 1.87 : bus (15.19/3.19)
|   |   |   |   |   |   trajectorySimilarityTrain >= 801.63
|   |   |   |   |   |   |   featureT < 0.45
|   |   |   |   |   |   |   |   featureU < 0.56
|   |   |   |   |   |   |   |   |   featureI < 0.58 : train (12.58/4.05)
|   |   |   |   |   |   |   |   |   featureI >= 0.58
|   |   |   |   |   |   |   |   |   |   featureE < 0.81 : train (3.38/0.38)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.81
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.82 : car (10.76/0.76)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.82 : car (31/0)
|   |   |   |   |   |   |   |   featureU >= 0.56
|   |   |   |   |   |   |   |   |   featureA < 0.34
|   |   |   |   |   |   |   |   |   |   featureN < 0.6 : car (4.91/1.91)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.6
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.07
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.24 : bus (1.53/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.24
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.94 : car (49.38/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.94 : car (21.38/0.38)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.07 : car (117.87/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.34 : bus (15.22/7.58)
|   |   |   |   |   |   |   featureT >= 0.45
|   |   |   |   |   |   |   |   featureA < 0.41
|   |   |   |   |   |   |   |   |   featureM < 2.62 : car (2.29/1.15)
|   |   |   |   |   |   |   |   |   featureM >= 2.62
|   |   |   |   |   |   |   |   |   |   featureU < 1.02
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.01 : car (127.02/0)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.01 : bus (0.38/-0)
|   |   |   |   |   |   |   |   |   |   featureU >= 1.02 : car (1043.31/0)
|   |   |   |   |   |   |   |   featureA >= 0.41 : car (34.22/11.07)
|   |   |   |   |   speedMax >= 35.36
|   |   |   |   |   |   featureA < 0.24 : train (39.77/0.77)
|   |   |   |   |   |   featureA >= 0.24 : bus (0.95/0.51)
featureJ >= 6.31
|   lowSpeedPointRatio < 0.98
|   |   featureT < 0.15
|   |   |   featureL < 1.43
|   |   |   |   featureE < 4.72 : bike (804.74/0)
|   |   |   |   featureE >= 4.72
|   |   |   |   |   featureE < 4.83 : bike (7.66/1.66)
|   |   |   |   |   featureE >= 4.83 : bike (74/0)
|   |   |   featureL >= 1.43 : car (1.66/0)
|   |   featureT >= 0.15
|   |   |   featureO < 4.7
|   |   |   |   featureE < 2.63
|   |   |   |   |   featureO < 4.36
|   |   |   |   |   |   featureQ < 1.49 : car (5.83/0.83)
|   |   |   |   |   |   featureQ >= 1.49
|   |   |   |   |   |   |   speed50Quantile < 6.46 : car (3.47/1.47)
|   |   |   |   |   |   |   speed50Quantile >= 6.46 : bus (45.17/0)
|   |   |   |   |   featureO >= 4.36 : car (17/3)
|   |   |   |   featureE >= 2.63 : walk (17.03/0)
|   |   |   featureO >= 4.7
|   |   |   |   featureK < 7.99
|   |   |   |   |   featureQ < 2.12 : bus (2/0)
|   |   |   |   |   featureQ >= 2.12
|   |   |   |   |   |   featureT < 1.93 : bike (19.08/0.83)
|   |   |   |   |   |   featureT >= 1.93 : bike (105.42/0)
|   |   |   |   featureK >= 7.99
|   |   |   |   |   featureS < 4.87 : walk (29.49/0)
|   |   |   |   |   featureS >= 4.87
|   |   |   |   |   |   featureJ < 10.67 : bus (9/0)
|   |   |   |   |   |   featureJ >= 10.67
|   |   |   |   |   |   |   featureF < 8.64
|   |   |   |   |   |   |   |   featureK < 11.87 : bike (51.42/0)
|   |   |   |   |   |   |   |   featureK >= 11.87 : bike (16.48/6.65)
|   |   |   |   |   |   |   featureF >= 8.64 : walk (4.15/0)
|   lowSpeedPointRatio >= 0.98
|   |   speedMax < 0.67 : bus (8.53/2.48)
|   |   speedMax >= 0.67
|   |   |   featureA < 2.37 : bus (19.2/9.89)
|   |   |   featureA >= 2.37
|   |   |   |   maximumTravelDistance < 12.88
|   |   |   |   |   featureU < 11.43
|   |   |   |   |   |   featureL < 10.68
|   |   |   |   |   |   |   featureT < 1.9
|   |   |   |   |   |   |   |   featureM < 2.33 : walk (9.89/0.58)
|   |   |   |   |   |   |   |   featureM >= 2.33 : walk (109.52/0)
|   |   |   |   |   |   |   featureT >= 1.9 : bike (0.58/0)
|   |   |   |   |   |   featureL >= 10.68
|   |   |   |   |   |   |   featureT < 5.19 : walk (1540.51/0)
|   |   |   |   |   |   |   featureT >= 5.19 : walk (9.58/0.58)
|   |   |   |   |   featureU >= 11.43 : bike (2.16/1)
|   |   |   |   maximumTravelDistance >= 12.88 : walk (8.44/2.01)

Size of the tree : 435


RandomTree
==========

featureJ < 6.3
|   featureI < 0.34
|   |   featureG < 0.07
|   |   |   featureA < 0.01
|   |   |   |   featureL < 0.16
|   |   |   |   |   featureE < 0.04
|   |   |   |   |   |   trajectorySimilarityTrain < 539.09 : train (10.54/3.37)
|   |   |   |   |   |   trajectorySimilarityTrain >= 539.09
|   |   |   |   |   |   |   featureR < 0.04
|   |   |   |   |   |   |   |   featureJ < 0.13 : stationary (492.01/0)
|   |   |   |   |   |   |   |   featureJ >= 0.13 : stationary (36.84/5)
|   |   |   |   |   |   |   featureR >= 0.04
|   |   |   |   |   |   |   |   featureJ < 0.1 : train (9.85/2.98)
|   |   |   |   |   |   |   |   featureJ >= 0.1 : stationary (31.76/1.96)
|   |   |   |   |   featureE >= 0.04 : train (11/1)
|   |   |   |   featureL >= 0.16
|   |   |   |   |   featureJ < 0.29
|   |   |   |   |   |   featureK < 0.07 : train (8/3)
|   |   |   |   |   |   featureK >= 0.07 : stationary (34/3)
|   |   |   |   |   featureJ >= 0.29 : train (25/1)
|   |   |   featureA >= 0.01
|   |   |   |   speedVariance < 0.41
|   |   |   |   |   featureC < 1.11 : train (21.26/3)
|   |   |   |   |   featureC >= 1.11
|   |   |   |   |   |   headingVariance < 28.73
|   |   |   |   |   |   |   featureA < 0.07 : train (31.32/15.32)
|   |   |   |   |   |   |   featureA >= 0.07 : stationary (11.79/0.79)
|   |   |   |   |   |   headingVariance >= 28.73
|   |   |   |   |   |   |   featureK < 0.99 : stationary (39.8/0.52)
|   |   |   |   |   |   |   featureK >= 0.99 : stationary (2.26/0.26)
|   |   |   |   speedVariance >= 0.41
|   |   |   |   |   featureK < 0.28
|   |   |   |   |   |   featureE < 0.07 : train (20.43/9.96)
|   |   |   |   |   |   featureE >= 0.07
|   |   |   |   |   |   |   speedVariance < 7.38 : train (20.27/6)
|   |   |   |   |   |   |   speedVariance >= 7.38 : train (22.52/0)
|   |   |   |   |   featureK >= 0.28 : train (34.35/22.43)
|   |   featureG >= 0.07
|   |   |   stationaryPointRatio < 0.07
|   |   |   |   featureP < 1.51
|   |   |   |   |   speed50Quantile < 15.19
|   |   |   |   |   |   featureK < 0.66
|   |   |   |   |   |   |   featureN < 0.16
|   |   |   |   |   |   |   |   featureC < 0.94 : train (35.33/10)
|   |   |   |   |   |   |   |   featureC >= 0.94 : train (33.28/2.28)
|   |   |   |   |   |   |   featureN >= 0.16
|   |   |   |   |   |   |   |   featureD < 0.37
|   |   |   |   |   |   |   |   |   speedVariance < 12.73
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 285.48
|   |   |   |   |   |   |   |   |   |   |   featureL < 0.64 : tram (20.95/5.95)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.3 : train (0.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.15 : train (0.26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 1.52 : tram (100/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 1.52 : tram (38.04/1.04)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 285.48 : train (21.02/0)
|   |   |   |   |   |   |   |   |   speedVariance >= 12.73 : train (16.82/1)
|   |   |   |   |   |   |   |   featureD >= 0.37 : bus (8.28/1.64)
|   |   |   |   |   |   featureK >= 0.66
|   |   |   |   |   |   |   speed75Quantile < 4.41 : tram (15.67/6.67)
|   |   |   |   |   |   |   speed75Quantile >= 4.41
|   |   |   |   |   |   |   |   highSpeedPointRatio < 0.35 : bus (37.37/11.18)
|   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.35 : tram (10.85/5.85)
|   |   |   |   |   speed50Quantile >= 15.19
|   |   |   |   |   |   lowSpeedPointRatio < 0.13
|   |   |   |   |   |   |   stationaryPointRatio < 0.05
|   |   |   |   |   |   |   |   featureU < 0.52
|   |   |   |   |   |   |   |   |   featureF < 0.68
|   |   |   |   |   |   |   |   |   |   featureI < 0.24
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.16
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.06 : train (0.67/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.06 : train (105.41/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.16 : train (0.67/0.27)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.24 : train (25/0.8)
|   |   |   |   |   |   |   |   |   featureF >= 0.68 : train (7.93/0.8)
|   |   |   |   |   |   |   |   featureU >= 0.52 : train (1.4/0.4)
|   |   |   |   |   |   |   stationaryPointRatio >= 0.05 : tram (1.1/0.1)
|   |   |   |   |   |   lowSpeedPointRatio >= 0.13 : bus (2.2/0.19)
|   |   |   |   featureP >= 1.51
|   |   |   |   |   featureD < 0.45 : car (21.37/9.37)
|   |   |   |   |   featureD >= 0.45
|   |   |   |   |   |   trajectorySimilarityBus < 142.03
|   |   |   |   |   |   |   featureK < 1.26
|   |   |   |   |   |   |   |   speedMin < 13.04 : car (34.85/13.22)
|   |   |   |   |   |   |   |   speedMin >= 13.04 : bus (7.62/0.62)
|   |   |   |   |   |   |   featureK >= 1.26
|   |   |   |   |   |   |   |   featureR < 0.8 : bus (11.34/6.07)
|   |   |   |   |   |   |   |   featureR >= 0.8 : bus (30.8/0.8)
|   |   |   |   |   |   trajectorySimilarityBus >= 142.03
|   |   |   |   |   |   |   featureE < 0.73 : car (22.46/11.38)
|   |   |   |   |   |   |   featureE >= 0.73 : car (37.52/0.19)
|   |   |   stationaryPointRatio >= 0.07
|   |   |   |   featureP < 0.57
|   |   |   |   |   featureC < 3.57
|   |   |   |   |   |   accumulatedTravelDistance < 122.94
|   |   |   |   |   |   |   featureQ < 0.26
|   |   |   |   |   |   |   |   featureN < 0.16
|   |   |   |   |   |   |   |   |   speed95Quantile < 0.23
|   |   |   |   |   |   |   |   |   |   featureM < 0.33 : train (24.63/3.27)
|   |   |   |   |   |   |   |   |   |   featureM >= 0.33 : train (21.61/7)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 0.23 : bus (29.41/13.24)
|   |   |   |   |   |   |   |   featureN >= 0.16 : train (37.84/9.44)
|   |   |   |   |   |   |   featureQ >= 0.26 : stationary (18.1/1.99)
|   |   |   |   |   |   accumulatedTravelDistance >= 122.94
|   |   |   |   |   |   |   featureR < 0.27
|   |   |   |   |   |   |   |   featureG < 0.08 : train (10.35/0.64)
|   |   |   |   |   |   |   |   featureG >= 0.08 : train (153.39/0)
|   |   |   |   |   |   |   featureR >= 0.27 : train (27.14/7.89)
|   |   |   |   |   featureC >= 3.57 : bus (35.54/14.54)
|   |   |   |   featureP >= 0.57
|   |   |   |   |   maximumTravelDistance < 12.46
|   |   |   |   |   |   featureD < 0.87
|   |   |   |   |   |   |   speedVariance < 0.45
|   |   |   |   |   |   |   |   featureQ < 0.2 : bus (35.24/2.24)
|   |   |   |   |   |   |   |   featureQ >= 0.2 : stationary (21.38/6.21)
|   |   |   |   |   |   |   speedVariance >= 0.45
|   |   |   |   |   |   |   |   featureU < 0.53
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.75
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio < 0.16 : train (2.14/0.03)
|   |   |   |   |   |   |   |   |   |   mediumSpeedPointRatio >= 0.16
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.47 : bus (22.95/4.53)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.47
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.31 : train (1.21/0.21)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.31
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.11 : bus (21.62/0.62)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.11 : bus (33.42/0.42)
|   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.75 : bus (19.26/8.16)
|   |   |   |   |   |   |   |   featureU >= 0.53
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 8.41 : car (17.06/8.42)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 8.41
|   |   |   |   |   |   |   |   |   |   featureF < 0.09 : car (5/0)
|   |   |   |   |   |   |   |   |   |   featureF >= 0.09
|   |   |   |   |   |   |   |   |   |   |   featureL < 1.62 : bus (6.53/2.32)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 1.62
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 8.25
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.89 : bus (35.63/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.89 : bus (15.84/0.84)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 8.25 : bus (5.21/1.21)
|   |   |   |   |   |   featureD >= 0.87 : car (19.41/13.34)
|   |   |   |   |   maximumTravelDistance >= 12.46
|   |   |   |   |   |   featureT < 0.24 : train (35.37/17.59)
|   |   |   |   |   |   featureT >= 0.24
|   |   |   |   |   |   |   featureU < 0.5 : bus (8.2/0.2)
|   |   |   |   |   |   |   featureU >= 0.5
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 823.15 : bus (31.39/13.27)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 823.15
|   |   |   |   |   |   |   |   |   featureH < 0.53
|   |   |   |   |   |   |   |   |   |   featureG < 0.56 : car (33.56/2.28)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.56 : car (18.85/6.28)
|   |   |   |   |   |   |   |   |   featureH >= 0.53 : car (23.97/0.28)
|   featureI >= 0.34
|   |   featureM < 2.27
|   |   |   accumulatedTravelDistance < 427.45
|   |   |   |   featureP < 1.25
|   |   |   |   |   speedMean < 0.54
|   |   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   |   featureT < 0.18 : train (24.22/13.19)
|   |   |   |   |   |   |   featureT >= 0.18 : bus (29.84/3.42)
|   |   |   |   |   |   speedMin >= 0.01 : stationary (30.41/3.29)
|   |   |   |   |   speedMean >= 0.54
|   |   |   |   |   |   featureC < 2.46
|   |   |   |   |   |   |   trajectorySimilarityTram < 237.79 : tram (21.07/2.86)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 237.79
|   |   |   |   |   |   |   |   speed95Quantile < 12.53
|   |   |   |   |   |   |   |   |   featureP < 0.83
|   |   |   |   |   |   |   |   |   |   featureK < 0.18 : car (5/1)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.18
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 43.86 : bus (25.18/9.18)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 43.86 : train (17.23/1.16)
|   |   |   |   |   |   |   |   |   featureP >= 0.83 : bus (26.36/5.36)
|   |   |   |   |   |   |   |   speed95Quantile >= 12.53 : train (25.72/1.99)
|   |   |   |   |   |   featureC >= 2.46
|   |   |   |   |   |   |   speedMin < 3.35
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 952.86
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 4.68 : car (5.59/1.56)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 4.68
|   |   |   |   |   |   |   |   |   |   headingVariance < 26.3
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 695.49 : train (1.12/0.06)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 695.49
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 17.95
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.86
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 2.46
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.13 : train (0.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.13 : bus (58.62/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 2.46 : train (1.16/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.86 : bus (1.77/0.77)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 17.95 : car (1.13/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.26
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.65 : bus (42.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.65 : bus (14.74/2.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.26 : train (1.96/-0)
|   |   |   |   |   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.85 : bus (3.36/1.19)
|   |   |   |   |   |   |   |   |   |   headingVariance >= 26.3 : train (3.36/1.18)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 952.86 : bus (38.04/19.2)
|   |   |   |   |   |   |   speedMin >= 3.35 : bike (7.83/3.83)
|   |   |   |   featureP >= 1.25
|   |   |   |   |   speed75Quantile < 9.28
|   |   |   |   |   |   featureC < 1.73 : car (12.08/6.08)
|   |   |   |   |   |   featureC >= 1.73
|   |   |   |   |   |   |   featureD < 0.46 : car (34.62/9.62)
|   |   |   |   |   |   |   featureD >= 0.46
|   |   |   |   |   |   |   |   featureS < 0.91
|   |   |   |   |   |   |   |   |   featureL < 1.32 : bus (28.08/12.08)
|   |   |   |   |   |   |   |   |   featureL >= 1.32
|   |   |   |   |   |   |   |   |   |   featureG < 0.21 : bus (7/1)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.21 : bus (92.08/0)
|   |   |   |   |   |   |   |   featureS >= 0.91 : car (5/0)
|   |   |   |   |   speed75Quantile >= 9.28
|   |   |   |   |   |   featureC < 4.16
|   |   |   |   |   |   |   featureQ < 0.41
|   |   |   |   |   |   |   |   featureG < 0.66 : car (35.62/0.21)
|   |   |   |   |   |   |   |   featureG >= 0.66 : car (6.21/2.21)
|   |   |   |   |   |   |   featureQ >= 0.41 : car (13/4)
|   |   |   |   |   |   featureC >= 4.16 : car (14.04/7.04)
|   |   |   accumulatedTravelDistance >= 427.45
|   |   |   |   featureM < 1.75
|   |   |   |   |   featureQ < 0.27
|   |   |   |   |   |   featureS < 0.14 : train (37.02/0.25)
|   |   |   |   |   |   featureS >= 0.14 : train (26.05/9.76)
|   |   |   |   |   featureQ >= 0.27
|   |   |   |   |   |   featureE < 0.58
|   |   |   |   |   |   |   featureC < 2.79
|   |   |   |   |   |   |   |   featureQ < 0.4 : train (12.76/0.76)
|   |   |   |   |   |   |   |   featureQ >= 0.4 : train (49.58/0)
|   |   |   |   |   |   |   featureC >= 2.79 : train (17.3/2.54)
|   |   |   |   |   |   featureE >= 0.58 : walk (1.51/0.51)
|   |   |   |   featureM >= 1.75
|   |   |   |   |   speed25Quantile < 17.65
|   |   |   |   |   |   featureF < 0.86 : train (29.92/10.33)
|   |   |   |   |   |   featureF >= 0.86 : car (11.89/0.59)
|   |   |   |   |   speed25Quantile >= 17.65 : train (30.02/1.38)
|   |   featureM >= 2.27
|   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   travelDistance < 1036.71
|   |   |   |   |   trajectorySimilarityTram < 987.1
|   |   |   |   |   |   featureU < 0.85 : tram (10.73/2.64)
|   |   |   |   |   |   featureU >= 0.85 : car (34.92/0.29)
|   |   |   |   |   trajectorySimilarityTram >= 987.1
|   |   |   |   |   |   featureA < 0.41
|   |   |   |   |   |   |   trajectorySimilarityTrain < 955.23
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.51
|   |   |   |   |   |   |   |   |   speed95Quantile < 24.31
|   |   |   |   |   |   |   |   |   |   featureJ < 1.46
|   |   |   |   |   |   |   |   |   |   |   featureP < 2.18 : bus (18.31/6.09)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 2.18 : car (30.09/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.46
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.15
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 2.42 : bus (2.65/0.65)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 2.42
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.29 : bus (7.22/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.29 : bus (110/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.34 : bus (4.65/0.22)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.22 : bus (9.44/1.44)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.22 : bus (82.87/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.15
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile < 11.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance < 1.38 : car (4.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedVariance >= 1.38
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.52 : car (10.65/3)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.52
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.77
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1 : bus (42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1 : bus (12.82/0.82)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.77 : car (2.27/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   speed75Quantile >= 11.47 : car (35.44/5)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.71
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.91
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax < 18.93 : bus (34.95/7.72)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 18.93 : bus (28.79/0.59)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.91 : bus (86.44/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.89
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.29 : bus (25.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.29 : car (30.87/11)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.96 : car (21.48/0)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 24.31 : car (12.34/2.08)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.51
|   |   |   |   |   |   |   |   |   featureO < 1.71
|   |   |   |   |   |   |   |   |   |   featureK < 1.09 : car (32.97/10.22)
|   |   |   |   |   |   |   |   |   |   featureK >= 1.09 : bus (30.86/2.6)
|   |   |   |   |   |   |   |   |   featureO >= 1.71 : car (38.97/0.15)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 955.23
|   |   |   |   |   |   |   |   speed95Quantile < 16.37
|   |   |   |   |   |   |   |   |   featureL < 3.07
|   |   |   |   |   |   |   |   |   |   featureJ < 1.87
|   |   |   |   |   |   |   |   |   |   |   featureI < 1.53
|   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.46 : car (14.85/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.46 : car (41.67/0)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 1.53 : bus (2/1)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.87
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 15.51
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 11.23 : car (34.65/6.2)
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 11.23 : bus (19.36/3.33)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 15.51 : car (20.38/0.12)
|   |   |   |   |   |   |   |   |   featureL >= 3.07 : bus (34.64/4.03)
|   |   |   |   |   |   |   |   speed95Quantile >= 16.37
|   |   |   |   |   |   |   |   |   speedMedian < 18.66
|   |   |   |   |   |   |   |   |   |   featureA < 0.35
|   |   |   |   |   |   |   |   |   |   |   featureU < 0.57 : car (8.24/0.24)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.04 : car (32.01/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.08 : bus (0.04/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.06 : car (6.16/0.08)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.5 : car (25.8/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.5 : car (38.28/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.35 : bus (0.48/0.16)
|   |   |   |   |   |   |   |   |   speedMedian >= 18.66
|   |   |   |   |   |   |   |   |   |   featureQ < 1.22
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.23 : car (26.27/7.43)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.23 : car (23.36/0)
|   |   |   |   |   |   |   |   |   |   featureQ >= 1.22 : bus (13.07/0.07)
|   |   |   |   |   |   featureA >= 0.41
|   |   |   |   |   |   |   featureP < 6.53
|   |   |   |   |   |   |   |   featureM < 3.55 : bus (39.51/22.75)
|   |   |   |   |   |   |   |   featureM >= 3.55
|   |   |   |   |   |   |   |   |   featureK < 2.14
|   |   |   |   |   |   |   |   |   |   featureB < 0.01 : car (8/2)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.32 : bus (36.09/0.84)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.32 : bus (13.12/5.31)
|   |   |   |   |   |   |   |   |   featureK >= 2.14
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance < 156.1 : bus (4.26/2.13)
|   |   |   |   |   |   |   |   |   |   accumulatedTravelDistance >= 156.1
|   |   |   |   |   |   |   |   |   |   |   featureJ < 3 : train (1.09/0.36)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 3
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 51.74
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 2.42 : bus (11.79/0.79)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 2.42
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.32 : bus (6.53/0.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.32 : bus (42.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 51.74 : bus (23.1/3.4)
|   |   |   |   |   |   |   featureP >= 6.53 : bus (7.38/4.38)
|   |   |   |   travelDistance >= 1036.71
|   |   |   |   |   featureP < 2.47 : train (12.17/4.26)
|   |   |   |   |   featureP >= 2.47
|   |   |   |   |   |   featureD < 1.44
|   |   |   |   |   |   |   featureL < 3.46 : car (121.15/0)
|   |   |   |   |   |   |   featureL >= 3.46
|   |   |   |   |   |   |   |   featureU < 1.36 : car (6.48/0.48)
|   |   |   |   |   |   |   |   featureU >= 1.36
|   |   |   |   |   |   |   |   |   featureG < 0.34 : car (4.12/0.12)
|   |   |   |   |   |   |   |   |   featureG >= 0.34 : car (52.79/0)
|   |   |   |   |   |   featureD >= 1.44 : bus (0.42/0.12)
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
|   |   |   |   |   |   |   |   |   |   featureE < 0.45 : train (0.2/0.08)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.45
|   |   |   |   |   |   |   |   |   |   |   featureL < 4.7
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.85 : car (21.37/0.9)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.85
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 1.35
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 2.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 1.77
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.82 : car (41.76/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.82 : car (27.56/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 1.77 : car (0.08/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 2.7 : bus (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 1.35 : walk (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 4.7 : bus (0.28/0.03)
|   |   |   |   |   speed25Quantile >= 7.94
|   |   |   |   |   |   featureC < 7.42
|   |   |   |   |   |   |   speedMax < 34.44
|   |   |   |   |   |   |   |   featureP < 1.59
|   |   |   |   |   |   |   |   |   featureO < 1.07
|   |   |   |   |   |   |   |   |   |   featureI < 0.56 : car (6.41/1.41)
|   |   |   |   |   |   |   |   |   |   featureI >= 0.56
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.86 : car (6.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.86 : car (65/0)
|   |   |   |   |   |   |   |   |   featureO >= 1.07 : car (3.88/1.88)
|   |   |   |   |   |   |   |   featureP >= 1.59
|   |   |   |   |   |   |   |   |   featureE < 0.72
|   |   |   |   |   |   |   |   |   |   featureM < 4.3
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.8 : car (93.57/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.8 : bus (4.35/2)
|   |   |   |   |   |   |   |   |   |   featureM >= 4.3 : bus (2.47/0)
|   |   |   |   |   |   |   |   |   featureE >= 0.72
|   |   |   |   |   |   |   |   |   |   featureJ < 1.13 : bus (0.47/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.13
|   |   |   |   |   |   |   |   |   |   |   featureF < 2.38
|   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.26 : car (22.94/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.26
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.85 : car (268.86/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.85 : car (18.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.15 : car (901.45/0)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 2.38 : car (13.94/0.94)
|   |   |   |   |   |   |   speedMax >= 34.44 : car (7.17/3.05)
|   |   |   |   |   |   featureC >= 7.42
|   |   |   |   |   |   |   featureA < 0.4
|   |   |   |   |   |   |   |   featureB < 0.04 : train (8.3/4.3)
|   |   |   |   |   |   |   |   featureB >= 0.04
|   |   |   |   |   |   |   |   |   featureN < 0.86 : train (0.47/0)
|   |   |   |   |   |   |   |   |   featureN >= 0.86 : car (87.42/0)
|   |   |   |   |   |   |   featureA >= 0.4 : bus (28.04/12.43)
|   |   |   |   speed75Quantile >= 34.7 : train (37.35/1.16)
featureJ >= 6.3
|   speedMax < 4.53
|   |   featureH < 0.04 : stationary (6/2)
|   |   featureH >= 0.04
|   |   |   featureU < 0.38 : walk (32.99/9.79)
|   |   |   featureU >= 0.38
|   |   |   |   featureQ < 2.48 : walk (17.93/5.34)
|   |   |   |   featureQ >= 2.48
|   |   |   |   |   featureQ < 6.2 : walk (1327.95/0)
|   |   |   |   |   featureQ >= 6.2
|   |   |   |   |   |   featureQ < 6.21 : bike (0.59/0)
|   |   |   |   |   |   featureQ >= 6.21 : walk (307.4/0)
|   speedMax >= 4.53
|   |   speed95Quantile < 9.32
|   |   |   featureK < 8
|   |   |   |   featureK < 0.81
|   |   |   |   |   featureB < 0.1
|   |   |   |   |   |   featureG < 5.22
|   |   |   |   |   |   |   featureC < 12.78 : bike (13.16/0.77)
|   |   |   |   |   |   |   featureC >= 12.78 : bike (28.77/0)
|   |   |   |   |   |   featureG >= 5.22 : bike (12.54/1.54)
|   |   |   |   |   featureB >= 0.1 : bike (773.77/0)
|   |   |   |   featureK >= 0.81
|   |   |   |   |   featureD < 4.41
|   |   |   |   |   |   featureN < 2.45 : walk (7.7/4.62)
|   |   |   |   |   |   featureN >= 2.45
|   |   |   |   |   |   |   lowSpeedPointRatio < 0.89 : bike (149.77/0)
|   |   |   |   |   |   |   lowSpeedPointRatio >= 0.89 : bus (1.01/0.01)
|   |   |   |   |   featureD >= 4.41 : walk (4.24/0)
|   |   |   featureK >= 8
|   |   |   |   featureP < 12.14 : walk (37.74/0)
|   |   |   |   featureP >= 12.14
|   |   |   |   |   featureD < 5.12
|   |   |   |   |   |   featureJ < 10.94 : walk (0.39/0)
|   |   |   |   |   |   featureJ >= 10.94 : bike (65.39/0)
|   |   |   |   |   featureD >= 5.12 : walk (18.48/5)
|   |   speed95Quantile >= 9.32
|   |   |   featureR < 0.31 : bike (20.32/0.17)
|   |   |   featureR >= 0.31
|   |   |   |   featureM < 4.58 : car (10.09/0)
|   |   |   |   featureM >= 4.58
|   |   |   |   |   featureJ < 10.9
|   |   |   |   |   |   speed75Quantile < 24.95
|   |   |   |   |   |   |   featureE < 2.66
|   |   |   |   |   |   |   |   featureP < 6.48
|   |   |   |   |   |   |   |   |   featureG < 0.56 : bus (3.03/0.03)
|   |   |   |   |   |   |   |   |   featureG >= 0.56 : bus (41.2/0)
|   |   |   |   |   |   |   |   featureP >= 6.48 : bus (4.09/0.09)
|   |   |   |   |   |   |   featureE >= 2.66 : walk (1.68/0)
|   |   |   |   |   |   speed75Quantile >= 24.95 : car (1.04/0.04)
|   |   |   |   |   featureJ >= 10.9 : walk (2.77/0.06)

Size of the tree : 471



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.31 (    12)  trajectorySimilarityTram
      0.28 (     6)  speedMin
      0.27 (    11)  speed95Quantile
      0.26 (    16)  featureS
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
      0.19 (    31)  featureP
      0.18 (    35)  featureJ
      0.17 (    38)  featureE
      0.17 (    41)  featureA
      0.17 (    27)  featureD
      0.16 (    27)  featureT
      0.16 (     5)  speedMean
      0.15 (    27)  featureQ
      0.15 (    29)  featureC
      0.13 (    21)  featureM
      0.13 (    23)  featureO
      0.13 (    27)  featureK
      0.13 (    34)  featureL
      0.12 (    32)  featureR
      0.12 (    14)  featureB
      0.11 (    36)  featureU
      0.11 (    17)  featureG
      0.1  (    16)  featureI
      0.1  (     7)  travelDistance
      0.1  (     3)  speed25Quantile
      0.09 (     3)  stationaryPointRatio
      0.08 (    14)  featureF
      0.07 (    15)  featureN
      0.04 (    11)  featureH
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

featureT < 0.29
|   featureF < 0.86
|   |   featureR < 0.04
|   |   |   featureJ < 0.23
|   |   |   |   trajectorySimilarityTrain < 374.38 : train (15.28/8.26)
|   |   |   |   trajectorySimilarityTrain >= 374.38
|   |   |   |   |   featureC < 0.13 : stationary (326.93/0)
|   |   |   |   |   featureC >= 0.13
|   |   |   |   |   |   featureS < 0.02
|   |   |   |   |   |   |   featureC < 0.45 : stationary (39/4)
|   |   |   |   |   |   |   featureC >= 0.45 : train (3/0)
|   |   |   |   |   |   featureS >= 0.02
|   |   |   |   |   |   |   featureF < 0.04 : stationary (129.06/0)
|   |   |   |   |   |   |   featureF >= 0.04
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 21.92 : stationary (2.65/1.03)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 21.92
|   |   |   |   |   |   |   |   |   featureU < 0.05 : stationary (54.62/0)
|   |   |   |   |   |   |   |   |   featureU >= 0.05 : stationary (19.46/0.94)
|   |   |   featureJ >= 0.23
|   |   |   |   featureA < 0.57 : train (23/3)
|   |   |   |   featureA >= 0.57 : bike (40/0)
|   |   featureR >= 0.04
|   |   |   maximumTravelDistance < 17.73
|   |   |   |   lowSpeedPointRatio < 0.99
|   |   |   |   |   speedMin < 0.01
|   |   |   |   |   |   featureM < 0.78
|   |   |   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   |   |   featureC < 2.28
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 25.25 : bus (12.65/5.65)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 25.25
|   |   |   |   |   |   |   |   |   |   featureE < 0.04 : stationary (1.55/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.04
|   |   |   |   |   |   |   |   |   |   |   featureJ < 0.21 : car (2.26/0.26)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.27
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.08 : train (3.26/0.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.08 : train (98.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.27 : car (1/-0)
|   |   |   |   |   |   |   |   featureC >= 2.28 : stationary (4.04/-0)
|   |   |   |   |   |   |   featureA >= 0.04
|   |   |   |   |   |   |   |   featureP < 0.28
|   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.51 : bus (23.4/1.99)
|   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.51 : train (24.51/10.48)
|   |   |   |   |   |   |   |   featureP >= 0.28
|   |   |   |   |   |   |   |   |   featureD < 0.2 : car (19/2)
|   |   |   |   |   |   |   |   |   featureD >= 0.2 : bus (30.87/16.87)
|   |   |   |   |   |   featureM >= 0.78
|   |   |   |   |   |   |   speedMedian < 1.1
|   |   |   |   |   |   |   |   featureE < 0.36
|   |   |   |   |   |   |   |   |   featureN < 0.33 : bus (21.16/7.16)
|   |   |   |   |   |   |   |   |   featureN >= 0.33
|   |   |   |   |   |   |   |   |   |   featureA < 0.06 : train (4.62/1)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.06
|   |   |   |   |   |   |   |   |   |   |   featureH < 1
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 932.93 : car (20.98/7.98)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 932.93 : car (20.98/0.98)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 1 : bus (8/0)
|   |   |   |   |   |   |   |   featureE >= 0.36
|   |   |   |   |   |   |   |   |   featureP < 1.48
|   |   |   |   |   |   |   |   |   |   featureE < 0.6
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.21 : train (1.39/0.46)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.54 : bus (16.54/1.73)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.54 : bus (34.35/0.23)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.6 : car (4.5/1.16)
|   |   |   |   |   |   |   |   |   featureP >= 1.48 : car (6/3)
|   |   |   |   |   |   |   speedMedian >= 1.1
|   |   |   |   |   |   |   |   lowSpeedPointRatio < 0.77
|   |   |   |   |   |   |   |   |   featureI < 0.06 : car (3.18/1.18)
|   |   |   |   |   |   |   |   |   featureI >= 0.06
|   |   |   |   |   |   |   |   |   |   featureD < 0.82
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.17 : train (3.69/0)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.17
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.1 : train (3.38/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 1.65 : bus (11.04/5.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 1.65
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.37 : bus (28.36/0.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.45
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.74 : bus (3.15/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.74
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 1.06 : bus (36.9/0.6)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 1.06 : bus (29/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.9 : bus (4.45/0.45)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.45 : train (0.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.45 : bus (12.4/2.26)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.04 : bus (28.34/0.17)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : bus (11.68/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.56 : bus (23.51/3.51)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.82 : car (2.84/1.34)
|   |   |   |   |   |   |   |   lowSpeedPointRatio >= 0.77 : tram (5.41/1.37)
|   |   |   |   |   speedMin >= 0.01
|   |   |   |   |   |   trajectorySimilarityTram < 273.11
|   |   |   |   |   |   |   featureB < 0.03
|   |   |   |   |   |   |   |   featureP < 0.24 : bus (2.57/1.52)
|   |   |   |   |   |   |   |   featureP >= 0.24
|   |   |   |   |   |   |   |   |   featureE < 0.08 : stationary (2.69/1.05)
|   |   |   |   |   |   |   |   |   featureE >= 0.08
|   |   |   |   |   |   |   |   |   |   featureJ < 1.34
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.34
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.14 : tram (26.21/4.21)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.1 : tram (6.35/0.35)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.14
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.28 : tram (23/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.28 : tram (17.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.14 : tram (121/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.28 : tram (10.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.34 : train (2.64/1)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.34 : train (2.57/1.52)
|   |   |   |   |   |   |   featureB >= 0.03 : tram (14.73/7.56)
|   |   |   |   |   |   trajectorySimilarityTram >= 273.11
|   |   |   |   |   |   |   speedMin < 2.92
|   |   |   |   |   |   |   |   featureE < 0.23 : train (7.6/0.94)
|   |   |   |   |   |   |   |   featureE >= 0.23
|   |   |   |   |   |   |   |   |   featureS < 0.32 : bus (21.37/6.63)
|   |   |   |   |   |   |   |   |   featureS >= 0.32
|   |   |   |   |   |   |   |   |   |   featureJ < 0.86 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 0.86
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.7
|   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.64 : bus (1.29/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.33 : train (0.16/0.04)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.33
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.02 : bus (42/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.02 : bus (6.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.7 : bus (1.29/0.29)
|   |   |   |   |   |   |   speedMin >= 2.92
|   |   |   |   |   |   |   |   featureE < 0.81
|   |   |   |   |   |   |   |   |   featureU < 0.35
|   |   |   |   |   |   |   |   |   |   featureQ < 0.22 : train (32.73/0.4)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.22 : train (19.44/1.7)
|   |   |   |   |   |   |   |   |   featureU >= 0.35 : bus (21.7/8.66)
|   |   |   |   |   |   |   |   featureE >= 0.81 : car (14.18/0.04)
|   |   |   |   lowSpeedPointRatio >= 0.99
|   |   |   |   |   featureE < 0.06
|   |   |   |   |   |   headingVariance < 4.06
|   |   |   |   |   |   |   featureQ < 0.16
|   |   |   |   |   |   |   |   featureU < 0.08 : train (34.38/13.3)
|   |   |   |   |   |   |   |   featureU >= 0.08 : train (11.93/0.17)
|   |   |   |   |   |   |   featureQ >= 0.16 : stationary (7/0)
|   |   |   |   |   |   headingVariance >= 4.06
|   |   |   |   |   |   |   travelDistance < 6.71
|   |   |   |   |   |   |   |   featureN < 0.05 : train (0.1/0)
|   |   |   |   |   |   |   |   featureN >= 0.05
|   |   |   |   |   |   |   |   |   featureS < 0.08 : stationary (7.68/0.1)
|   |   |   |   |   |   |   |   |   featureS >= 0.08 : stationary (54.35/0)
|   |   |   |   |   |   |   travelDistance >= 6.71 : car (9.32/4.32)
|   |   |   |   |   featureE >= 0.06
|   |   |   |   |   |   featureC < 1.92
|   |   |   |   |   |   |   featureU < 0.24
|   |   |   |   |   |   |   |   featureC < 1.4
|   |   |   |   |   |   |   |   |   featureQ < 0.08 : bus (9.63/4.63)
|   |   |   |   |   |   |   |   |   featureQ >= 0.08 : train (39.77/0.97)
|   |   |   |   |   |   |   |   featureC >= 1.4 : bus (30.94/17.16)
|   |   |   |   |   |   |   featureU >= 0.24
|   |   |   |   |   |   |   |   featureD < 0.17 : bus (41/0)
|   |   |   |   |   |   |   |   featureD >= 0.17 : bus (31.11/9.11)
|   |   |   |   |   |   featureC >= 1.92
|   |   |   |   |   |   |   speed50Quantile < 0.09 : bike (38.61/26.61)
|   |   |   |   |   |   |   speed50Quantile >= 0.09
|   |   |   |   |   |   |   |   featureR < 0.28 : train (5.08/0.49)
|   |   |   |   |   |   |   |   featureR >= 0.28
|   |   |   |   |   |   |   |   |   featureK < 1.05
|   |   |   |   |   |   |   |   |   |   featureD < 0.46
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.16 : stationary (9/0)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.16
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.73 : stationary (26.24/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.73 : stationary (13.98/0.98)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.46 : bus (1.34/0.85)
|   |   |   |   |   |   |   |   |   featureK >= 1.05 : stationary (9.88/4.88)
|   |   |   maximumTravelDistance >= 17.73
|   |   |   |   featureD < 0.76
|   |   |   |   |   featureO < 0.24
|   |   |   |   |   |   featureL < 0.27 : train (18.75/10.55)
|   |   |   |   |   |   featureL >= 0.27
|   |   |   |   |   |   |   featureB < 0.01
|   |   |   |   |   |   |   |   speed95Quantile < 1.79 : stationary (15.32/5.29)
|   |   |   |   |   |   |   |   speed95Quantile >= 1.79
|   |   |   |   |   |   |   |   |   featureC < 2.3
|   |   |   |   |   |   |   |   |   |   featureK < 0.15 : stationary (0.24/0)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.15 : train (41.72/0)
|   |   |   |   |   |   |   |   |   featureC >= 2.3 : train (8.38/3.13)
|   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   featureA < 0.07 : train (134.03/0)
|   |   |   |   |   |   |   |   featureA >= 0.07
|   |   |   |   |   |   |   |   |   featureS < 0.16 : train (42.89/0)
|   |   |   |   |   |   |   |   |   featureS >= 0.16 : stationary (0.63/-0)
|   |   |   |   |   featureO >= 0.24
|   |   |   |   |   |   maximumTravelDistance < 20.07
|   |   |   |   |   |   |   speed50Quantile < 12.24 : train (30.36/2.57)
|   |   |   |   |   |   |   speed50Quantile >= 12.24 : train (32.72/15.62)
|   |   |   |   |   |   maximumTravelDistance >= 20.07
|   |   |   |   |   |   |   trajectorySimilarityTrain < 511.13
|   |   |   |   |   |   |   |   featureC < 2.78
|   |   |   |   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   |   |   |   featureG < 0.46 : train (121.72/0)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.46
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.04 : train (42.62/0)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.04 : train (14.2/0.2)
|   |   |   |   |   |   |   |   |   featureA >= 0.11 : train (9.61/1.01)
|   |   |   |   |   |   |   |   featureC >= 2.78 : train (25.86/2.83)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 511.13
|   |   |   |   |   |   |   |   travelDistance < 206.17 : car (7.96/0.96)
|   |   |   |   |   |   |   |   travelDistance >= 206.17
|   |   |   |   |   |   |   |   |   featureP < 1.53
|   |   |   |   |   |   |   |   |   |   featureD < 0.43
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.4 : train (35.09/0)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.4 : train (6.76/0.09)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.43 : train (4.51/0.82)
|   |   |   |   |   |   |   |   |   featureP >= 1.53 : car (2/-0)
|   |   |   |   featureD >= 0.76 : car (22.52/1.57)
|   featureF >= 0.86
|   |   featureL < 0.14
|   |   |   speed95Quantile < 2.3 : walk (7.1/0.03)
|   |   |   speed95Quantile >= 2.3
|   |   |   |   featureB < 0.1
|   |   |   |   |   featureH < 5.73
|   |   |   |   |   |   featureE < 4.25 : bike (54/0)
|   |   |   |   |   |   featureE >= 4.25 : walk (1.98/0)
|   |   |   |   |   featureH >= 5.73 : walk (9.95/4)
|   |   |   |   featureB >= 0.1 : bike (774.97/0)
|   |   featureL >= 0.14
|   |   |   speed95Quantile < 13.22
|   |   |   |   trajectorySimilarityTrain < 948.58
|   |   |   |   |   speedMean < 0.78 : stationary (13.73/4.66)
|   |   |   |   |   speedMean >= 0.78 : bus (36.98/4.58)
|   |   |   |   trajectorySimilarityTrain >= 948.58 : car (26.41/11.85)
|   |   |   speed95Quantile >= 13.22
|   |   |   |   featureA < 0.29
|   |   |   |   |   featureD < 0.8 : train (38.53/4.53)
|   |   |   |   |   featureD >= 0.8 : car (6.18/1.18)
|   |   |   |   featureA >= 0.29
|   |   |   |   |   featureE < 0.71 : bus (1/0)
|   |   |   |   |   featureE >= 0.71 : car (64.18/0)
featureT >= 0.29
|   featureK < 4.05
|   |   maximumTravelDistance < 16.41
|   |   |   speedMax < 3.97
|   |   |   |   featureA < 0.34 : car (31.28/10.31)
|   |   |   |   featureA >= 0.34
|   |   |   |   |   featureE < 0.07 : stationary (10/0)
|   |   |   |   |   featureE >= 0.07 : walk (30.47/18.3)
|   |   |   speedMax >= 3.97
|   |   |   |   featureE < 0.81
|   |   |   |   |   trajectorySimilarityTram < 884.93 : car (34.11/16.63)
|   |   |   |   |   trajectorySimilarityTram >= 884.93
|   |   |   |   |   |   featureN < 1.16
|   |   |   |   |   |   |   speed95Quantile < 12.56
|   |   |   |   |   |   |   |   featureF < 0.11 : bus (9.52/4.52)
|   |   |   |   |   |   |   |   featureF >= 0.11
|   |   |   |   |   |   |   |   |   featureS < 0.81
|   |   |   |   |   |   |   |   |   |   featureD < 0.68
|   |   |   |   |   |   |   |   |   |   |   featureL < 1.62
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 39.4 : bus (26.86/0.49)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 39.4 : car (29.95/4.68)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 1.62
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.39 : bus (90.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.55 : car (18/9)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.55 : bus (29/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.96 : car (3/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.68
|   |   |   |   |   |   |   |   |   |   |   featureJ < 4.76
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 12.29
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.41 : bus (74.49/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.41 : bus (33.97/1.25)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 12.29 : bus (5.12/1.01)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.76 : bus (3.55/1.55)
|   |   |   |   |   |   |   |   |   featureS >= 0.81
|   |   |   |   |   |   |   |   |   |   featureD < 0.61
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.13 : car (30/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.13
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 4.82 : bus (22.29/8.03)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 4.82 : car (29.29/4)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.61
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.46 : car (34.07/14.55)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.46
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 977
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.67 : bus (16.23/3)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.67
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.34
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.8 : bus (59.23/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.8 : bus (19.13/1.13)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.34 : car (0.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 977 : car (13.29/1.06)
|   |   |   |   |   |   |   speed95Quantile >= 12.56
|   |   |   |   |   |   |   |   featureP < 1.89
|   |   |   |   |   |   |   |   |   speedVariance < 18.78 : bus (23.62/0.39)
|   |   |   |   |   |   |   |   |   speedVariance >= 18.78 : car (34.91/15.8)
|   |   |   |   |   |   |   |   featureP >= 1.89
|   |   |   |   |   |   |   |   |   headingVariance < 0.4 : bus (15.39/0.21)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.4
|   |   |   |   |   |   |   |   |   |   featureC < 4.77
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.11 : car (36.17/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 15.38
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.07 : car (8.29/2.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.07 : car (39.5/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.4 : bus (3.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 15.38 : bus (10.19/4.13)
|   |   |   |   |   |   |   |   |   |   featureC >= 4.77 : bus (31.97/9.86)
|   |   |   |   |   |   featureN >= 1.16
|   |   |   |   |   |   |   featureB < 0.01 : bike (5.42/2)
|   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 132.78
|   |   |   |   |   |   |   |   |   featureA < 0.35
|   |   |   |   |   |   |   |   |   |   featureJ < 2.74
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.71 : car (17.99/4)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.71 : bus (22.99/6.99)
|   |   |   |   |   |   |   |   |   |   featureJ >= 2.74
|   |   |   |   |   |   |   |   |   |   |   featureG < 0.85 : bus (39/0)
|   |   |   |   |   |   |   |   |   |   |   featureG >= 0.85 : bus (14/1)
|   |   |   |   |   |   |   |   |   featureA >= 0.35
|   |   |   |   |   |   |   |   |   |   featureA < 1.2
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 657.22
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.06 : bike (0.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.06
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.64 : bus (73.63/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.64
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3 : bus (1.66/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 1.44 : bus (45.33/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 1.44 : bus (2.99/0.66)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 657.22 : car (1.04/0.04)
|   |   |   |   |   |   |   |   |   |   featureA >= 1.2 : walk (0.66/0.33)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 132.78 : car (14.73/0.33)
|   |   |   |   featureE >= 0.81
|   |   |   |   |   speedMax < 11.8
|   |   |   |   |   |   featureP < 3.54
|   |   |   |   |   |   |   speed25Quantile < 7.88
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 37.41 : train (2.14/0.11)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 37.41
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 12.98
|   |   |   |   |   |   |   |   |   |   featureQ < 0.9 : bus (25.29/2.48)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.9 : bus (30.35/0.67)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 12.98 : car (1.07/0.04)
|   |   |   |   |   |   |   speed25Quantile >= 7.88 : car (8.56/2.35)
|   |   |   |   |   |   featureP >= 3.54
|   |   |   |   |   |   |   featureA < 0.41 : car (31.12/0)
|   |   |   |   |   |   |   featureA >= 0.41
|   |   |   |   |   |   |   |   speedMedian < 6.03 : car (25.94/5.6)
|   |   |   |   |   |   |   |   speedMedian >= 6.03 : bus (23.86/3.47)
|   |   |   |   |   speedMax >= 11.8
|   |   |   |   |   |   trajectorySimilarityBus < 144.56 : bus (28.61/6.1)
|   |   |   |   |   |   trajectorySimilarityBus >= 144.56
|   |   |   |   |   |   |   speed95Quantile < 11.64 : train (3.18/0.16)
|   |   |   |   |   |   |   speed95Quantile >= 11.64
|   |   |   |   |   |   |   |   featureD < 1.41
|   |   |   |   |   |   |   |   |   featureL < 4.48
|   |   |   |   |   |   |   |   |   |   featureB < 0.03 : train (0.34/0)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.03
|   |   |   |   |   |   |   |   |   |   |   featureL < 3.06
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.54 : train (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.54 : car (103.18/0)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 3.06
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.88 : bus (0.67/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.88
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.14 : car (6.67/0.67)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.14 : car (39.35/0)
|   |   |   |   |   |   |   |   |   featureL >= 4.48 : bus (0.84/0)
|   |   |   |   |   |   |   |   featureD >= 1.41 : bus (1.34/0.5)
|   |   maximumTravelDistance >= 16.41
|   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   maximumTravelDistance < 24.89
|   |   |   |   |   speed50Quantile < 18.73
|   |   |   |   |   |   featureL < 3.22
|   |   |   |   |   |   |   featureU < 0.8
|   |   |   |   |   |   |   |   speedMedian < 6.82 : car (10.68/0.37)
|   |   |   |   |   |   |   |   speedMedian >= 6.82
|   |   |   |   |   |   |   |   |   speed95Quantile < 17.78 : car (16.03/4.56)
|   |   |   |   |   |   |   |   |   speed95Quantile >= 17.78 : bus (25.64/2.36)
|   |   |   |   |   |   |   featureU >= 0.8
|   |   |   |   |   |   |   |   featureL < 2.95
|   |   |   |   |   |   |   |   |   featureJ < 2.75
|   |   |   |   |   |   |   |   |   |   featureA < 0.69
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.7 : car (130.48/0)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.7
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.56 : car (36.34/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.56 : car (33.15/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.69 : car (1.19/0.19)
|   |   |   |   |   |   |   |   |   featureJ >= 2.75 : car (7.48/0.48)
|   |   |   |   |   |   |   |   featureL >= 2.95 : car (22.05/6.57)
|   |   |   |   |   |   featureL >= 3.22
|   |   |   |   |   |   |   featureK < 2.13
|   |   |   |   |   |   |   |   maximumTravelDistance < 22.73
|   |   |   |   |   |   |   |   |   speedMedian < 9.38 : car (1.05/0.04)
|   |   |   |   |   |   |   |   |   speedMedian >= 9.38
|   |   |   |   |   |   |   |   |   |   speedMedian < 18.09
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.46
|   |   |   |   |   |   |   |   |   |   |   |   featureH < 1.64 : bus (44.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureH >= 1.64 : bus (0.42/0.17)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.46 : bike (0.5/0.25)
|   |   |   |   |   |   |   |   |   |   speedMedian >= 18.09 : bus (3.14/1.05)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 22.73 : car (2.09/0.08)
|   |   |   |   |   |   |   featureK >= 2.13 : car (20.25/6.72)
|   |   |   |   |   speed50Quantile >= 18.73
|   |   |   |   |   |   trajectorySimilarityTrain < 751.06
|   |   |   |   |   |   |   featureI < 1.61
|   |   |   |   |   |   |   |   featureJ < 1.57 : car (0.36/0.19)
|   |   |   |   |   |   |   |   featureJ >= 1.57
|   |   |   |   |   |   |   |   |   featureE < 0.53 : car (0.45/0.3)
|   |   |   |   |   |   |   |   |   featureE >= 0.53
|   |   |   |   |   |   |   |   |   |   featureB < 0.1
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : bus (0.28/0.09)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   featureA < 2.54
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.65 : train (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.65
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.25 : bus (37.51/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.25 : bus (27.58/0.51)
|   |   |   |   |   |   |   |   |   |   |   |   featureA >= 2.54 : walk (0.04/-0)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.1 : car (0.19/0.04)
|   |   |   |   |   |   |   featureI >= 1.61 : bus (3.21/1.11)
|   |   |   |   |   |   trajectorySimilarityTrain >= 751.06
|   |   |   |   |   |   |   featureC < 4.59 : bus (27.44/10.35)
|   |   |   |   |   |   |   featureC >= 4.59 : car (19.35/0.85)
|   |   |   |   maximumTravelDistance >= 24.89
|   |   |   |   |   featureA < 0.34
|   |   |   |   |   |   featureC < 1.73 : train (0.14/0)
|   |   |   |   |   |   featureC >= 1.73
|   |   |   |   |   |   |   featureO < 1.57 : car (21.81/0.98)
|   |   |   |   |   |   |   featureO >= 1.57 : car (174.68/0)
|   |   |   |   |   featureA >= 0.34
|   |   |   |   |   |   featureE < 1.02 : bus (25.56/14.31)
|   |   |   |   |   |   featureE >= 1.02 : car (37.77/0.49)
|   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   speedMax < 35.74
|   |   |   |   |   featureL < 5.16
|   |   |   |   |   |   speedMin < 0.23
|   |   |   |   |   |   |   featureI < 0.18 : train (3.17/0.17)
|   |   |   |   |   |   |   featureI >= 0.18
|   |   |   |   |   |   |   |   featureD < 0.73 : car (18.47/7.21)
|   |   |   |   |   |   |   |   featureD >= 0.73 : car (33.32/1.57)
|   |   |   |   |   |   speedMin >= 0.23
|   |   |   |   |   |   |   featureI < 0.11 : bike (3.55/0.79)
|   |   |   |   |   |   |   featureI >= 0.11
|   |   |   |   |   |   |   |   featureU < 1.03
|   |   |   |   |   |   |   |   |   featureB < 0.03 : car (17.8/12.07)
|   |   |   |   |   |   |   |   |   featureB >= 0.03
|   |   |   |   |   |   |   |   |   |   featureJ < 3.56
|   |   |   |   |   |   |   |   |   |   |   featureM < 2.26 : bus (2.76/0)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 2.26
|   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 8.13
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.3
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR < 0.56
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.53 : car (25.37/1.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.53 : car (30.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureR >= 0.56 : car (126.58/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.3 : bus (0.39/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 8.13 : car (9.94/3.55)
|   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.08
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.3 : train (0.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.3 : car (70.15/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 3.56 : car (16.15/3.15)
|   |   |   |   |   |   |   |   featureU >= 1.03
|   |   |   |   |   |   |   |   |   featureR < 1.24 : car (1110.59/0)
|   |   |   |   |   |   |   |   |   featureR >= 1.24 : car (18.79/0.79)
|   |   |   |   |   featureL >= 5.16 : bus (29.32/12.23)
|   |   |   |   speedMax >= 35.74 : train (28.08/1.02)
|   featureK >= 4.05
|   |   featureE < 3.5
|   |   |   speed75Quantile < 2.92
|   |   |   |   speedMean < 0.19 : bus (10.63/4.44)
|   |   |   |   speedMean >= 0.19
|   |   |   |   |   featureD < 2.51 : walk (6.31/2.1)
|   |   |   |   |   featureD >= 2.51 : walk (54.26/0)
|   |   |   speed75Quantile >= 2.92
|   |   |   |   travelDistance < 321.04
|   |   |   |   |   featureO < 4.3 : walk (7.4/3.36)
|   |   |   |   |   featureO >= 4.3
|   |   |   |   |   |   featureF < 2.53 : bike (99.67/0)
|   |   |   |   |   |   featureF >= 2.53
|   |   |   |   |   |   |   featureS < 4.35 : bike (10.36/0.67)
|   |   |   |   |   |   |   featureS >= 4.35 : bike (77/0)
|   |   |   |   travelDistance >= 321.04 : bus (23.38/0.97)
|   |   featureE >= 3.5
|   |   |   mediumSpeedPointRatio < 0.25 : walk (1617.19/0)
|   |   |   mediumSpeedPointRatio >= 0.25 : bike (22.81/1.81)

Size of the tree : 491


RandomTree
==========

featureK < 4.85
|   featureN < 0.42
|   |   featureI < 0.81
|   |   |   featureL < 0.16
|   |   |   |   featureE < 0.04
|   |   |   |   |   trajectorySimilarityTrain < 538.44 : train (10.53/3.49)
|   |   |   |   |   trajectorySimilarityTrain >= 538.44
|   |   |   |   |   |   featureT < 0.01
|   |   |   |   |   |   |   headingVariance < 0.15 : train (11.78/0.78)
|   |   |   |   |   |   |   headingVariance >= 0.15 : stationary (107.08/0)
|   |   |   |   |   |   featureT >= 0.01
|   |   |   |   |   |   |   featureM < 0.16 : stationary (361.5/0)
|   |   |   |   |   |   |   featureM >= 0.16
|   |   |   |   |   |   |   |   featureR < 0.04 : stationary (93.4/0)
|   |   |   |   |   |   |   |   featureR >= 0.04 : stationary (30.71/1.97)
|   |   |   |   featureE >= 0.04
|   |   |   |   |   featureL < 0.02
|   |   |   |   |   |   featureE < 0.86 : train (10/0)
|   |   |   |   |   |   featureE >= 0.86 : bike (33/0)
|   |   |   |   |   featureL >= 0.02 : train (21/9)
|   |   |   featureL >= 0.16
|   |   |   |   speedMax < 3.92
|   |   |   |   |   featureU < 0.39
|   |   |   |   |   |   headingVariance < 4.43
|   |   |   |   |   |   |   trajectorySimilarityBus < 11.61 : bus (22.69/12.47)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 11.61
|   |   |   |   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   |   |   |   speedMean < 0.59
|   |   |   |   |   |   |   |   |   |   featureC < 2.76
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.04 : train (22.86/1.14)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.04 : train (67.73/0)
|   |   |   |   |   |   |   |   |   |   featureC >= 2.76 : stationary (0.59/-0)
|   |   |   |   |   |   |   |   |   speedMean >= 0.59 : stationary (1.82/0.11)
|   |   |   |   |   |   |   |   featureA >= 0.04 : train (32.39/6.79)
|   |   |   |   |   |   headingVariance >= 4.43
|   |   |   |   |   |   |   featureR < 0.24
|   |   |   |   |   |   |   |   speedMax < 1.83
|   |   |   |   |   |   |   |   |   featureU < 0.1
|   |   |   |   |   |   |   |   |   |   featureC < 1.6 : stationary (39.04/3.56)
|   |   |   |   |   |   |   |   |   |   featureC >= 1.6 : stationary (17.47/5.32)
|   |   |   |   |   |   |   |   |   featureU >= 0.1
|   |   |   |   |   |   |   |   |   |   travelDistance < 28.13 : stationary (30.64/17.44)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 28.13 : train (19.53/0.25)
|   |   |   |   |   |   |   |   speedMax >= 1.83 : bus (18.66/4.66)
|   |   |   |   |   |   |   featureR >= 0.24
|   |   |   |   |   |   |   |   featureD < 0.46
|   |   |   |   |   |   |   |   |   featureC < 1.68 : stationary (6.97/3.97)
|   |   |   |   |   |   |   |   |   featureC >= 1.68
|   |   |   |   |   |   |   |   |   |   featureG < 0.26
|   |   |   |   |   |   |   |   |   |   |   featureM < 1.3 : stationary (40.12/0)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 1.3 : stationary (3.19/0.19)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.26 : stationary (39.04/1.67)
|   |   |   |   |   |   |   |   featureD >= 0.46 : bus (19.02/10.46)
|   |   |   |   |   featureU >= 0.39
|   |   |   |   |   |   speedMedian < 0.11 : bus (39.81/0)
|   |   |   |   |   |   speedMedian >= 0.11 : train (5.1/2.1)
|   |   |   |   speedMax >= 3.92
|   |   |   |   |   trajectorySimilarityTram < 186.68
|   |   |   |   |   |   featureJ < 1.13
|   |   |   |   |   |   |   featureR < 0.35
|   |   |   |   |   |   |   |   featureF < 0.08 : tram (8.86/2.86)
|   |   |   |   |   |   |   |   featureF >= 0.08
|   |   |   |   |   |   |   |   |   featureI < 0.05 : train (1.14/0.23)
|   |   |   |   |   |   |   |   |   featureI >= 0.05
|   |   |   |   |   |   |   |   |   |   featureJ < 0.41 : train (0.69/0)
|   |   |   |   |   |   |   |   |   |   featureJ >= 0.41
|   |   |   |   |   |   |   |   |   |   |   featureD < 0.2 : tram (30.4/2.4)
|   |   |   |   |   |   |   |   |   |   |   featureD >= 0.2
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.11 : train (0.11/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.11 : tram (19.11/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.11 : tram (87/0)
|   |   |   |   |   |   |   featureR >= 0.35 : train (3.03/0)
|   |   |   |   |   |   featureJ >= 1.13 : train (10.15/4.31)
|   |   |   |   |   trajectorySimilarityTram >= 186.68
|   |   |   |   |   |   travelDistance < 233.38
|   |   |   |   |   |   |   featureP < 0.57
|   |   |   |   |   |   |   |   featureM < 0.04 : bus (21.72/0)
|   |   |   |   |   |   |   |   featureM >= 0.04
|   |   |   |   |   |   |   |   |   speedVariance < 13.5
|   |   |   |   |   |   |   |   |   |   speed75Quantile < 3.93
|   |   |   |   |   |   |   |   |   |   |   featureN < 0.11 : train (27.85/3.74)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 0.11
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.11 : train (5.64/0.28)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.11 : car (34.79/16.33)
|   |   |   |   |   |   |   |   |   |   speed75Quantile >= 3.93
|   |   |   |   |   |   |   |   |   |   |   featureC < 1.95 : train (27.28/0.25)
|   |   |   |   |   |   |   |   |   |   |   featureC >= 1.95 : train (19.79/7.58)
|   |   |   |   |   |   |   |   |   speedVariance >= 13.5
|   |   |   |   |   |   |   |   |   |   featureS < 0.16
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.04 : train (7.2/0.69)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.07 : train (7.43/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.07 : train (39.57/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.48 : car (0.17/0)
|   |   |   |   |   |   |   |   |   |   featureS >= 0.16 : train (9.28/3.54)
|   |   |   |   |   |   |   featureP >= 0.57
|   |   |   |   |   |   |   |   featureL < 0.83
|   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.02 : bus (24.55/12.55)
|   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.02 : car (18.41/0.41)
|   |   |   |   |   |   |   |   featureL >= 0.83
|   |   |   |   |   |   |   |   |   featureQ < 1.12
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 13.56
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 160.57
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.23 : train (2.2/1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.17 : bus (33.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.17 : bus (7.2/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.43 : bus (34.03/1.42)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2 : train (0.41/-0)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1 : bus (5.22/2.15)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 160.57 : bus (5.22/2.15)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 13.56 : train (4.18/0.07)
|   |   |   |   |   |   |   |   |   featureQ >= 1.12 : car (3/-0)
|   |   |   |   |   |   travelDistance >= 233.38
|   |   |   |   |   |   |   featureL < 1.98
|   |   |   |   |   |   |   |   featureI < 0.29
|   |   |   |   |   |   |   |   |   featureF < 0.88
|   |   |   |   |   |   |   |   |   |   featureT < 0.25
|   |   |   |   |   |   |   |   |   |   |   featureJ < 0.21 : stationary (1.71/0.34)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.04 : stationary (2.39/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.04
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 3.01 : train (281.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 3.01 : train (34.43/1.36)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.25 : bus (1/0)
|   |   |   |   |   |   |   |   |   featureF >= 0.88 : stationary (3.39/2.36)
|   |   |   |   |   |   |   |   featureI >= 0.29
|   |   |   |   |   |   |   |   |   featureP < 0.79
|   |   |   |   |   |   |   |   |   |   featureT < 0.11
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.05 : train (50.73/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.05
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.69
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.36 : bus (1.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.17 : train (24.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.17 : train (17.02/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.69 : car (0.68/-0)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.11 : train (28.75/4.39)
|   |   |   |   |   |   |   |   |   featureP >= 0.79 : bus (9.05/1.34)
|   |   |   |   |   |   |   featureL >= 1.98 : car (23.68/10)
|   |   featureI >= 0.81
|   |   |   featureA < 0.59
|   |   |   |   featureF < 0.87
|   |   |   |   |   maximumTravelDistance < 12.3 : train (26.21/16.6)
|   |   |   |   |   maximumTravelDistance >= 12.3 : train (22.79/9.4)
|   |   |   |   featureF >= 0.87
|   |   |   |   |   featureJ < 6.44
|   |   |   |   |   |   featureI < 0.87 : car (2/1)
|   |   |   |   |   |   featureI >= 0.87 : car (51/0)
|   |   |   |   |   featureJ >= 6.44 : bike (4/0)
|   |   |   featureA >= 0.59
|   |   |   |   accumulatedTravelDistance < 162 : walk (21.28/2.15)
|   |   |   |   accumulatedTravelDistance >= 162
|   |   |   |   |   featureC < 15.66
|   |   |   |   |   |   featureJ < 6.72 : car (0.97/0)
|   |   |   |   |   |   featureJ >= 6.72
|   |   |   |   |   |   |   featureJ < 17.19 : bike (109.9/0)
|   |   |   |   |   |   |   featureJ >= 17.19
|   |   |   |   |   |   |   |   featureC < 13.45 : bike (15.9/3.9)
|   |   |   |   |   |   |   |   featureC >= 13.45
|   |   |   |   |   |   |   |   |   featureA < 4.96 : bike (9.97/0.97)
|   |   |   |   |   |   |   |   |   featureA >= 4.96 : bike (37/0)
|   |   |   |   |   featureC >= 15.66 : bike (637.97/0)
|   featureN >= 0.42
|   |   speedMax < 12.7
|   |   |   speedMax < 1.92
|   |   |   |   speed95Quantile < 0.01 : car (24.1/15.64)
|   |   |   |   speed95Quantile >= 0.01
|   |   |   |   |   featureK < 1.78 : stationary (16.33/2.33)
|   |   |   |   |   featureK >= 1.78 : walk (33.96/10.9)
|   |   |   speedMax >= 1.92
|   |   |   |   maximumTravelDistance < 8.91
|   |   |   |   |   speedVariance < 0.52
|   |   |   |   |   |   featureS < 1.03 : bus (27.79/11.35)
|   |   |   |   |   |   featureS >= 1.03 : bike (37.17/4.11)
|   |   |   |   |   speedVariance >= 0.52
|   |   |   |   |   |   featureU < 1.64
|   |   |   |   |   |   |   trajectorySimilarityTrain < 285.64
|   |   |   |   |   |   |   |   featureC < 1.94 : car (2.13/0.99)
|   |   |   |   |   |   |   |   featureC >= 1.94
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 4.64 : car (2.08/0.05)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 4.64
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 130.85
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.01 : bus (13.18/1.18)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.01
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.52
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.53
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.39 : bus (3.42/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.39
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.48 : bus (27.46/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.48 : bus (54.05/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.53 : train (0.18/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.52
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 2.88 : bus (37.09/2.72)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 2.88
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 1.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 2.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.33 : train (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.33
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 3.49 : bus (35.66/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 3.49 : bus (9.32/0.23)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 2.48 : walk (0.09/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 1.48 : bus (2.6/0.37)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 130.85 : car (2.08/0.05)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 285.64
|   |   |   |   |   |   |   |   featureJ < 1.5 : car (37.75/7.41)
|   |   |   |   |   |   |   |   featureJ >= 1.5
|   |   |   |   |   |   |   |   |   featureT < 0.41
|   |   |   |   |   |   |   |   |   |   featureE < 0.35 : bus (15.43/5.3)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.35
|   |   |   |   |   |   |   |   |   |   |   speedMean < 1.44 : car (2.04/0.03)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 1.44
|   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.72
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 4.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.97
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.03 : bus (13.46/0.12)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : bus (46.12/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.97 : car (0.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.63 : walk (0.08/-0)
|   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.72 : bus (17.83/0.79)
|   |   |   |   |   |   |   |   |   featureT >= 0.41 : car (38.89/16.8)
|   |   |   |   |   |   featureU >= 1.64 : car (24.35/4.18)
|   |   |   |   maximumTravelDistance >= 8.91
|   |   |   |   |   trajectorySimilarityBus < 69.63
|   |   |   |   |   |   trajectorySimilarityTram < 528.11 : tram (15.71/0.7)
|   |   |   |   |   |   trajectorySimilarityTram >= 528.11
|   |   |   |   |   |   |   featureJ < 1.18 : car (33.91/12.79)
|   |   |   |   |   |   |   featureJ >= 1.18
|   |   |   |   |   |   |   |   featureU < 0.92
|   |   |   |   |   |   |   |   |   speedMean < 5.3
|   |   |   |   |   |   |   |   |   |   speed95Quantile < 10.33
|   |   |   |   |   |   |   |   |   |   |   featureP < 2.06
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.98
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.48 : bus (19.58/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.48
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.76
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 0.71 : bus (6.13/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 0.71 : bus (37.13/0.1)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.76 : train (0.1/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.98 : bus (11.93/0.38)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 2.06 : bus (12.12/1.7)
|   |   |   |   |   |   |   |   |   |   speed95Quantile >= 10.33
|   |   |   |   |   |   |   |   |   |   |   featureI < 0.1 : car (10.08/2.08)
|   |   |   |   |   |   |   |   |   |   |   featureI >= 0.1
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 732.93 : bus (32.28/0.78)
|   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 732.93 : car (14.58/6.38)
|   |   |   |   |   |   |   |   |   speedMean >= 5.3
|   |   |   |   |   |   |   |   |   |   featureJ < 2.3
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 8.96 : car (1.04/0.01)
|   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 8.96
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.84
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.23 : train (0.2/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.23
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.4 : bus (1.34/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.4
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 5.2
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.62
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.04 : bus (48.07/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.04 : bus (18.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.62 : bus (13.54/0.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 5.2 : bike (0.2/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.84 : bus (6.49/1.42)
|   |   |   |   |   |   |   |   |   |   featureJ >= 2.3
|   |   |   |   |   |   |   |   |   |   |   featureT < 0.25 : bus (3.69/0.62)
|   |   |   |   |   |   |   |   |   |   |   featureT >= 0.25
|   |   |   |   |   |   |   |   |   |   |   |   featureM < 2.13 : car (0.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureM >= 2.13
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 0.99 : bus (3.34/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 0.99
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.63 : bus (22.89/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.63
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.52 : bus (14.14/0.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.52 : bus (53.17/0)
|   |   |   |   |   |   |   |   featureU >= 0.92
|   |   |   |   |   |   |   |   |   featureA < 0.42
|   |   |   |   |   |   |   |   |   |   speedMax < 11.08
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 8.51 : car (33.8/0.04)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 8.51 : bus (38.03/14.98)
|   |   |   |   |   |   |   |   |   |   speedMax >= 11.08 : bus (30.63/1.6)
|   |   |   |   |   |   |   |   |   featureA >= 0.42
|   |   |   |   |   |   |   |   |   |   featureD < 1.44
|   |   |   |   |   |   |   |   |   |   |   featureO < 2.48 : bus (27.7/0)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 2.48 : bus (25.46/1.34)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.44 : bus (0.85/0.49)
|   |   |   |   |   trajectorySimilarityBus >= 69.63
|   |   |   |   |   |   featureL < 1.62
|   |   |   |   |   |   |   trajectorySimilarityTram < 224.09
|   |   |   |   |   |   |   |   featureG < 0.67
|   |   |   |   |   |   |   |   |   featureS < 0.77
|   |   |   |   |   |   |   |   |   |   featureK < 0.55 : tram (34.07/0.07)
|   |   |   |   |   |   |   |   |   |   featureK >= 0.55 : tram (22.65/0.58)
|   |   |   |   |   |   |   |   |   featureS >= 0.77 : car (0.25/0)
|   |   |   |   |   |   |   |   featureG >= 0.67 : train (0.22/0.07)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 224.09
|   |   |   |   |   |   |   |   featureS < 0.53 : train (12.38/3.03)
|   |   |   |   |   |   |   |   featureS >= 0.53 : car (34.59/0.32)
|   |   |   |   |   |   featureL >= 1.62
|   |   |   |   |   |   |   featureR < 0.6
|   |   |   |   |   |   |   |   featureE < 0.46 : car (12.65/8.46)
|   |   |   |   |   |   |   |   featureE >= 0.46 : car (32.77/0.33)
|   |   |   |   |   |   |   featureR >= 0.6
|   |   |   |   |   |   |   |   featureP < 2.8
|   |   |   |   |   |   |   |   |   travelDistance < 412.94
|   |   |   |   |   |   |   |   |   |   speedMax < 12.4
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 698.27 : train (3.19/0.13)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 698.27
|   |   |   |   |   |   |   |   |   |   |   |   speedMax < 6.92 : train (2.13/0.09)
|   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 6.92
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 3.3 : bus (18.6/2.4)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 3.3 : bus (35.65/0.1)
|   |   |   |   |   |   |   |   |   |   speedMax >= 12.4 : train (5.32/0.22)
|   |   |   |   |   |   |   |   |   travelDistance >= 412.94 : train (6.38/0.27)
|   |   |   |   |   |   |   |   featureP >= 2.8
|   |   |   |   |   |   |   |   |   travelDistance < 298.44 : car (28.89/0.63)
|   |   |   |   |   |   |   |   |   travelDistance >= 298.44 : bus (31.03/6.59)
|   |   speedMax >= 12.7
|   |   |   trajectorySimilarityBus < 169.99
|   |   |   |   accumulatedTravelDistance < 1046.98
|   |   |   |   |   featureL < 3.1
|   |   |   |   |   |   featureE < 0.63
|   |   |   |   |   |   |   speed75Quantile < 19.27
|   |   |   |   |   |   |   |   featureS < 0.65
|   |   |   |   |   |   |   |   |   featureO < 0.88
|   |   |   |   |   |   |   |   |   |   featureT < 0.14 : tram (2/0)
|   |   |   |   |   |   |   |   |   |   featureT >= 0.14
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 92.45 : bus (39.31/3.77)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 92.45 : train (5.62/0.08)
|   |   |   |   |   |   |   |   |   featureO >= 0.88 : bus (34.49/18.49)
|   |   |   |   |   |   |   |   featureS >= 0.65
|   |   |   |   |   |   |   |   |   featureE < 0.38
|   |   |   |   |   |   |   |   |   |   featureJ < 1.14 : car (1.41/0.41)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.14
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.45 : car (36/0)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.45 : car (10.41/0.41)
|   |   |   |   |   |   |   |   |   featureE >= 0.38
|   |   |   |   |   |   |   |   |   |   featureP < 2.04
|   |   |   |   |   |   |   |   |   |   |   featureJ < 1.47 : car (17.21/4)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.47 : bus (33.82/0.41)
|   |   |   |   |   |   |   |   |   |   featureP >= 2.04
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile < 15.66
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile < 13.34
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.9 : car (62.59/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.9
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 6.25 : bus (28.91/9.91)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 6.25 : car (16.52/0)
|   |   |   |   |   |   |   |   |   |   |   |   speed50Quantile >= 13.34 : bus (11.21/2.21)
|   |   |   |   |   |   |   |   |   |   |   speed95Quantile >= 15.66 : car (67.26/0)
|   |   |   |   |   |   |   speed75Quantile >= 19.27 : bus (34.27/11.15)
|   |   |   |   |   |   featureE >= 0.63
|   |   |   |   |   |   |   featureU < 0.62 : train (24.35/11.45)
|   |   |   |   |   |   |   featureU >= 0.62
|   |   |   |   |   |   |   |   featureF < 0.8
|   |   |   |   |   |   |   |   |   travelDistance < 693.32
|   |   |   |   |   |   |   |   |   |   featureH < 0.67 : car (21.45/6.11)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.67 : car (23.36/0.34)
|   |   |   |   |   |   |   |   |   travelDistance >= 693.32
|   |   |   |   |   |   |   |   |   |   featureD < 1.01
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.37 : bus (0.11/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.37
|   |   |   |   |   |   |   |   |   |   |   |   featureK < 1.8
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.98 : car (9.67/0.11)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.98 : car (33.78/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureK >= 1.8 : bus (0.11/-0)
|   |   |   |   |   |   |   |   |   |   featureD >= 1.01 : bus (0.11/-0)
|   |   |   |   |   |   |   |   featureF >= 0.8 : car (134.04/0)
|   |   |   |   |   featureL >= 3.1
|   |   |   |   |   |   speedMax < 24.05
|   |   |   |   |   |   |   trajectorySimilarityTrain < 566.94
|   |   |   |   |   |   |   |   featureA < 0.29
|   |   |   |   |   |   |   |   |   featureP < 2.85 : bus (52.32/0)
|   |   |   |   |   |   |   |   |   featureP >= 2.85 : bus (34.63/0.63)
|   |   |   |   |   |   |   |   featureA >= 0.29
|   |   |   |   |   |   |   |   |   featureN < 0.91 : car (3.63/0.63)
|   |   |   |   |   |   |   |   |   featureN >= 0.91
|   |   |   |   |   |   |   |   |   |   featureU < 1.23 : bus (29.78/0.21)
|   |   |   |   |   |   |   |   |   |   featureU >= 1.23 : bus (26.89/6.36)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 566.94
|   |   |   |   |   |   |   |   featureR < 0.82
|   |   |   |   |   |   |   |   |   featureM < 3.95 : bus (32.6/0)
|   |   |   |   |   |   |   |   |   featureM >= 3.95 : bus (10.9/0.9)
|   |   |   |   |   |   |   |   featureR >= 0.82
|   |   |   |   |   |   |   |   |   travelDistance < 860.67
|   |   |   |   |   |   |   |   |   |   featureR < 1.06 : bus (32.3/12.77)
|   |   |   |   |   |   |   |   |   |   featureR >= 1.06 : car (25.02/4.13)
|   |   |   |   |   |   |   |   |   travelDistance >= 860.67
|   |   |   |   |   |   |   |   |   |   featureC < 5.79 : bus (35.33/0.08)
|   |   |   |   |   |   |   |   |   |   featureC >= 5.79 : car (4.69/1.78)
|   |   |   |   |   |   speedMax >= 24.05 : car (26.67/6.08)
|   |   |   |   accumulatedTravelDistance >= 1046.98
|   |   |   |   |   featureS < 0.81 : train (26.57/2.36)
|   |   |   |   |   featureS >= 0.81
|   |   |   |   |   |   featureR < 1.11
|   |   |   |   |   |   |   featureC < 6.48
|   |   |   |   |   |   |   |   featureQ < 0.86 : car (110.64/0)
|   |   |   |   |   |   |   |   featureQ >= 0.86
|   |   |   |   |   |   |   |   |   featureO < 1.81 : car (0.23/0.05)
|   |   |   |   |   |   |   |   |   featureO >= 1.81 : car (47.75/0)
|   |   |   |   |   |   |   featureC >= 6.48 : car (1.07/0.56)
|   |   |   |   |   |   featureR >= 1.11 : car (14.06/1.68)
|   |   |   trajectorySimilarityBus >= 169.99
|   |   |   |   featureP < 1.39
|   |   |   |   |   trajectorySimilarityTram < 496.95 : tram (1.41/0.38)
|   |   |   |   |   trajectorySimilarityTram >= 496.95
|   |   |   |   |   |   featureB < 0.04
|   |   |   |   |   |   |   featureC < 2.87 : train (45.11/0)
|   |   |   |   |   |   |   featureC >= 2.87 : train (7.87/1.22)
|   |   |   |   |   |   featureB >= 0.04 : train (4.8/1.22)
|   |   |   |   featureP >= 1.39
|   |   |   |   |   featureD < 0.76
|   |   |   |   |   |   speed50Quantile < 22.63
|   |   |   |   |   |   |   trajectorySimilarityTram < 222.62 : tram (11.04/0.99)
|   |   |   |   |   |   |   trajectorySimilarityTram >= 222.62
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 248.44 : bus (16.56/8.39)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 248.44
|   |   |   |   |   |   |   |   |   featureR < 0.84
|   |   |   |   |   |   |   |   |   |   featureG < 0.21 : car (1.88/0.8)
|   |   |   |   |   |   |   |   |   |   featureG >= 0.21
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.36 : car (17.68/1.07)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.36
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.35
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.43 : train (0.54/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.43
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.74 : car (2.27/0.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.74 : car (102.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.35 : bike (0.54/0)
|   |   |   |   |   |   |   |   |   featureR >= 0.84 : train (3.14/1.61)
|   |   |   |   |   |   speed50Quantile >= 22.63
|   |   |   |   |   |   |   featureA < 0.11 : train (26.54/0)
|   |   |   |   |   |   |   featureA >= 0.11 : train (16.51/7.33)
|   |   |   |   |   featureD >= 0.76
|   |   |   |   |   |   featureD < 1.42
|   |   |   |   |   |   |   featureC < 6.47
|   |   |   |   |   |   |   |   featureR < 1.15
|   |   |   |   |   |   |   |   |   featureJ < 1.25 : car (2.66/1.25)
|   |   |   |   |   |   |   |   |   featureJ >= 1.25
|   |   |   |   |   |   |   |   |   |   featureQ < 0.36 : bus (0.42/0)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.36
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 395.49
|   |   |   |   |   |   |   |   |   |   |   |   speedMax < 17.34 : car (39.62/1.03)
|   |   |   |   |   |   |   |   |   |   |   |   speedMax >= 17.34
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 1.07 : car (22.95/0.16)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 1.07 : car (221.86/0)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 395.49
|   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 1.08
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.71 : car (4.32/0.32)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.71 : car (313.88/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.08 : bus (0.32/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureS >= 1.08 : car (680/0)
|   |   |   |   |   |   |   |   featureR >= 1.15 : car (37.16/2.08)
|   |   |   |   |   |   |   featureC >= 6.47
|   |   |   |   |   |   |   |   featureB < 0.03 : bus (7.07/0)
|   |   |   |   |   |   |   |   featureB >= 0.03
|   |   |   |   |   |   |   |   |   featureJ < 3.95
|   |   |   |   |   |   |   |   |   |   featureA < 0.42
|   |   |   |   |   |   |   |   |   |   |   featureU < 0.63 : train (0.42/0)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 0.63 : car (147.66/0)
|   |   |   |   |   |   |   |   |   |   featureA >= 0.42 : car (9.08/2.08)
|   |   |   |   |   |   |   |   |   featureJ >= 3.95 : car (29.49/4.49)
|   |   |   |   |   |   featureD >= 1.42 : bus (7.07/1.66)
featureK >= 4.85
|   speed95Quantile < 3.79
|   |   featureM < 40.7 : walk (1740.94/0)
|   |   featureM >= 40.7 : bike (1.76/-0)
|   speed95Quantile >= 3.79
|   |   featureC < 11.16 : bus (12.48/0.48)
|   |   featureC >= 11.16
|   |   |   speedMin < 10.21
|   |   |   |   featureB < 0.26
|   |   |   |   |   featureT < 1.36 : walk (2.83/0)
|   |   |   |   |   featureT >= 1.36
|   |   |   |   |   |   featureD < 4.82
|   |   |   |   |   |   |   featureT < 2.35 : bike (34.57/0.57)
|   |   |   |   |   |   |   featureT >= 2.35 : bike (153.23/0)
|   |   |   |   |   |   featureD >= 4.82 : bike (13.4/3.4)
|   |   |   |   featureB >= 0.26 : walk (8.04/0)
|   |   |   speedMin >= 10.21 : bus (10.76/0.76)

Size of the tree : 483


RandomTree
==========

featureQ < 2.67
|   featureO < 0.61
|   |   featureR < 0.01
|   |   |   speed25Quantile < 7.67
|   |   |   |   featureB < 0.95
|   |   |   |   |   featureD < 4.92
|   |   |   |   |   |   featureI < 0.28 : bike (2.98/0.99)
|   |   |   |   |   |   featureI >= 0.28 : bike (655.93/0)
|   |   |   |   |   featureD >= 4.92
|   |   |   |   |   |   featureA < 8.81 : walk (4.96/0)
|   |   |   |   |   |   featureA >= 8.81 : bike (130/0)
|   |   |   |   featureB >= 0.95 : walk (4/0)
|   |   |   speed25Quantile >= 7.67 : train (7.12/0.12)
|   |   featureR >= 0.01
|   |   |   featureI < 0.04
|   |   |   |   featureC < 0.4
|   |   |   |   |   featureT < 0.03
|   |   |   |   |   |   featureJ < 0.13
|   |   |   |   |   |   |   featureM < 0.17 : stationary (390/0)
|   |   |   |   |   |   |   featureM >= 0.17
|   |   |   |   |   |   |   |   featureJ < 0.09 : stationary (43/0)
|   |   |   |   |   |   |   |   featureJ >= 0.09 : stationary (15/1)
|   |   |   |   |   |   featureJ >= 0.13 : stationary (31/8)
|   |   |   |   |   featureT >= 0.03 : stationary (14/7)
|   |   |   |   featureC >= 0.4
|   |   |   |   |   featureU < 0.15
|   |   |   |   |   |   featureO < 0.03
|   |   |   |   |   |   |   speedVariance < 0.7 : train (23/7)
|   |   |   |   |   |   |   speedVariance >= 0.7 : train (22/2)
|   |   |   |   |   |   featureO >= 0.03
|   |   |   |   |   |   |   featureE < 0.04
|   |   |   |   |   |   |   |   speedMax < 0.25 : stationary (90.63/0)
|   |   |   |   |   |   |   |   speedMax >= 0.25 : stationary (13.37/2)
|   |   |   |   |   |   |   featureE >= 0.04
|   |   |   |   |   |   |   |   featureL < 0.28 : train (21/2)
|   |   |   |   |   |   |   |   featureL >= 0.28 : train (21/11)
|   |   |   |   |   featureU >= 0.15 : car (32/24)
|   |   |   featureI >= 0.04
|   |   |   |   trajectorySimilarityTram < 187.94
|   |   |   |   |   featureS < 0.09 : stationary (7.37/1.87)
|   |   |   |   |   featureS >= 0.09
|   |   |   |   |   |   featureE < 0.34
|   |   |   |   |   |   |   speedMax < 2.76 : stationary (1.79/0.79)
|   |   |   |   |   |   |   speedMax >= 2.76
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 284.34 : train (1.04/0)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 284.34
|   |   |   |   |   |   |   |   |   featureI < 0.08 : tram (4.42/1.42)
|   |   |   |   |   |   |   |   |   featureI >= 0.08
|   |   |   |   |   |   |   |   |   |   featureC < 0.72 : tram (11.63/1.63)
|   |   |   |   |   |   |   |   |   |   featureC >= 0.72
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.22
|   |   |   |   |   |   |   |   |   |   |   |   featureC < 1.84
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 0.66 : tram (26/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 0.66
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.53 : train (0.41/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.23 : tram (43/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.23 : tram (5.61/0.61)
|   |   |   |   |   |   |   |   |   |   |   |   featureC >= 1.84 : train (0.51/0)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.22 : tram (38.2/0.2)
|   |   |   |   |   |   featureE >= 0.34 : train (8.05/1.98)
|   |   |   |   trajectorySimilarityTram >= 187.94
|   |   |   |   |   headingVariance < 18.63
|   |   |   |   |   |   travelDistance < 242.72
|   |   |   |   |   |   |   featureU < 0.22
|   |   |   |   |   |   |   |   featureD < 0.04 : stationary (21.81/2.75)
|   |   |   |   |   |   |   |   featureD >= 0.04
|   |   |   |   |   |   |   |   |   featureA < 0.11
|   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.01
|   |   |   |   |   |   |   |   |   |   |   featureL < 0.16 : car (8.26/0.26)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 0.16
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance < 3.46
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 29.41 : bus (6.49/3.46)
|   |   |   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 29.41
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 0.36 : train (7.05/0.29)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 0.36 : train (44.09/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.25 : train (2.95/0.48)
|   |   |   |   |   |   |   |   |   |   |   |   headingVariance >= 3.46
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 0.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.07 : car (17.74/8.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.07 : bus (36.78/7.34)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 0.55 : train (29.86/9.3)
|   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.01
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.04
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.12
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.03 : train (14.24/3)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.03 : train (30.15/0.37)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.12 : car (2/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.04 : train (26.98/14.61)
|   |   |   |   |   |   |   |   |   featureA >= 0.11
|   |   |   |   |   |   |   |   |   |   featureD < 0.82
|   |   |   |   |   |   |   |   |   |   |   featureK < 0.57 : train (17.26/9.38)
|   |   |   |   |   |   |   |   |   |   |   featureK >= 0.57 : bus (28.51/2.51)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.82 : car (10.26/4)
|   |   |   |   |   |   |   featureU >= 0.22
|   |   |   |   |   |   |   |   featureJ < 2.93
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 998.1
|   |   |   |   |   |   |   |   |   |   speedMax < 0.56
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.32 : bus (39.93/0.77)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.32 : stationary (6.09/2.09)
|   |   |   |   |   |   |   |   |   |   speedMax >= 0.56
|   |   |   |   |   |   |   |   |   |   |   featureR < 0.82
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 14.23
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.44
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 0.81 : bus (16.25/6.25)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 0.81
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.68
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.22 : car (0.81/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.22
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.9 : bus (62.81/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.9 : train (0.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.68 : bus (7.35/1.14)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.44 : bus (43.45/0)
|   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 14.23 : train (2.1/0.05)
|   |   |   |   |   |   |   |   |   |   |   featureR >= 0.82 : train (2.74/0.46)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 998.1
|   |   |   |   |   |   |   |   |   |   speed50Quantile < 0.07 : car (13.91/4.82)
|   |   |   |   |   |   |   |   |   |   speed50Quantile >= 0.07 : bus (28.89/4.36)
|   |   |   |   |   |   |   |   featureJ >= 2.93 : car (8/1)
|   |   |   |   |   |   travelDistance >= 242.72
|   |   |   |   |   |   |   featureB < 0.06
|   |   |   |   |   |   |   |   featureQ < 0.04 : stationary (9.68/0)
|   |   |   |   |   |   |   |   featureQ >= 0.04
|   |   |   |   |   |   |   |   |   featureQ < 0.26
|   |   |   |   |   |   |   |   |   |   featureD < 0.09 : train (3.79/1.68)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.09
|   |   |   |   |   |   |   |   |   |   |   featureL < 0.77 : train (255.43/0)
|   |   |   |   |   |   |   |   |   |   |   featureL >= 0.77
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.36 : train (3.42/0.42)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.36 : train (60.84/0)
|   |   |   |   |   |   |   |   |   featureQ >= 0.26
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 17.97
|   |   |   |   |   |   |   |   |   |   |   featureE < 0.29 : train (14.37/1.37)
|   |   |   |   |   |   |   |   |   |   |   featureE >= 0.29 : bus (27.72/11.9)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 17.97
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.3
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 0.47 : train (19.99/0.66)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 0.47 : train (38.97/0)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.3
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.35
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 1.66 : train (17.32/0.99)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 1.66 : train (37.6/4.62)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.35 : train (37.85/0.66)
|   |   |   |   |   |   |   featureB >= 0.06
|   |   |   |   |   |   |   |   featureE < 1.04 : train (3.11/0.84)
|   |   |   |   |   |   |   |   featureE >= 1.04 : car (69.53/0)
|   |   |   |   |   headingVariance >= 18.63
|   |   |   |   |   |   featureK < 0.64
|   |   |   |   |   |   |   featureR < 0.04 : stationary (25.64/0.29)
|   |   |   |   |   |   |   featureR >= 0.04
|   |   |   |   |   |   |   |   accumulatedTravelDistance < 51.95 : bus (20.73/11.51)
|   |   |   |   |   |   |   |   accumulatedTravelDistance >= 51.95 : train (25.33/0.54)
|   |   |   |   |   |   featureK >= 0.64
|   |   |   |   |   |   |   featureJ < 1.47 : bus (3.86/1.86)
|   |   |   |   |   |   |   featureJ >= 1.47
|   |   |   |   |   |   |   |   featureC < 3.46
|   |   |   |   |   |   |   |   |   featureR < 0.49
|   |   |   |   |   |   |   |   |   |   featureD < 0.48 : stationary (41.1/0)
|   |   |   |   |   |   |   |   |   |   featureD >= 0.48 : train (0.39/0.1)
|   |   |   |   |   |   |   |   |   featureR >= 0.49 : stationary (20.78/0.78)
|   |   |   |   |   |   |   |   featureC >= 3.46 : car (1.37/0.59)
|   featureO >= 0.61
|   |   speedMean < 9.08
|   |   |   lowSpeedPointRatio < 0.98
|   |   |   |   featureJ < 1.33
|   |   |   |   |   trajectorySimilarityTram < 315.31
|   |   |   |   |   |   featureO < 1.32
|   |   |   |   |   |   |   featureO < 1.01
|   |   |   |   |   |   |   |   featureF < 0.06 : train (0.18/0)
|   |   |   |   |   |   |   |   featureF >= 0.06
|   |   |   |   |   |   |   |   |   featureI < 0.14 : tram (11/0)
|   |   |   |   |   |   |   |   |   featureI >= 0.14
|   |   |   |   |   |   |   |   |   |   featureE < 0.29
|   |   |   |   |   |   |   |   |   |   |   featureS < 0.37 : train (0.09/0)
|   |   |   |   |   |   |   |   |   |   |   featureS >= 0.37 : tram (45/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.29 : tram (5.72/0.45)
|   |   |   |   |   |   |   featureO >= 1.01 : tram (3.9/0.72)
|   |   |   |   |   |   featureO >= 1.32 : car (0.72/-0)
|   |   |   |   |   trajectorySimilarityTram >= 315.31
|   |   |   |   |   |   featureL < 1.55
|   |   |   |   |   |   |   trajectorySimilarityTrain < 95.64 : bus (17.57/5.5)
|   |   |   |   |   |   |   trajectorySimilarityTrain >= 95.64
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 80.39
|   |   |   |   |   |   |   |   |   featureT < 0.24 : bus (25.03/7.03)
|   |   |   |   |   |   |   |   |   featureT >= 0.24
|   |   |   |   |   |   |   |   |   |   featureH < 0.41
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.21 : car (9/4)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.21 : car (37.34/0.34)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.41 : bus (19.55/4.2)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 80.39 : car (28.93/0.93)
|   |   |   |   |   |   featureL >= 1.55
|   |   |   |   |   |   |   featureU < 0.59 : bus (5.04/1.04)
|   |   |   |   |   |   |   featureU >= 0.59
|   |   |   |   |   |   |   |   featureL < 2.83 : car (48.08/0)
|   |   |   |   |   |   |   |   featureL >= 2.83 : bus (1/0)
|   |   |   |   featureJ >= 1.33
|   |   |   |   |   mediumSpeedPointRatio < 0.93
|   |   |   |   |   |   featureT < 0.44
|   |   |   |   |   |   |   featureA < 0.33
|   |   |   |   |   |   |   |   speed95Quantile < 12.39
|   |   |   |   |   |   |   |   |   speed75Quantile < 3.29 : bus (26.49/11.44)
|   |   |   |   |   |   |   |   |   speed75Quantile >= 3.29
|   |   |   |   |   |   |   |   |   |   featureQ < 0.55
|   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio < 0.12
|   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.27
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.96
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM < 1.47 : bus (14.37/5)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureM >= 1.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.49 : bus (36.74/0.74)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.49
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA < 0.15
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.78 : bus (119.18/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.78 : bus (2.18/0.18)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureA >= 0.15 : bus (23.55/0.55)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.96 : car (1.66/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.27 : car (2.37/0)
|   |   |   |   |   |   |   |   |   |   |   highSpeedPointRatio >= 0.12
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.55 : bus (29.3/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.55 : bus (24.8/9.75)
|   |   |   |   |   |   |   |   |   |   featureQ >= 0.55
|   |   |   |   |   |   |   |   |   |   |   featureH < 0.53 : bus (65/0)
|   |   |   |   |   |   |   |   |   |   |   featureH >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   featureN < 0.5 : bus (1.93/0.93)
|   |   |   |   |   |   |   |   |   |   |   |   featureN >= 0.5
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.29 : bus (5.47/0.47)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.29
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG < 0.76 : bus (36/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureG >= 0.76 : bus (13.47/0.47)
|   |   |   |   |   |   |   |   speed95Quantile >= 12.39
|   |   |   |   |   |   |   |   |   maximumTravelDistance < 22.66
|   |   |   |   |   |   |   |   |   |   featureC < 2.99 : bus (13.38/1.38)
|   |   |   |   |   |   |   |   |   |   featureC >= 2.99
|   |   |   |   |   |   |   |   |   |   |   featureP < 1.65 : bus (15.34/1.25)
|   |   |   |   |   |   |   |   |   |   |   featureP >= 1.65 : car (39.55/15.04)
|   |   |   |   |   |   |   |   |   maximumTravelDistance >= 22.66 : car (10.19/2.1)
|   |   |   |   |   |   |   featureA >= 0.33
|   |   |   |   |   |   |   |   featureD < 1
|   |   |   |   |   |   |   |   |   travelDistance < 246.96
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram < 507.28 : tram (2.3/0.3)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTram >= 507.28
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.59 : bus (12.45/3)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.59
|   |   |   |   |   |   |   |   |   |   |   |   featureF < 0.28 : bus (11.82/2.82)
|   |   |   |   |   |   |   |   |   |   |   |   featureF >= 0.28
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.3 : bus (19.23/2.27)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.3 : bus (22.14/0)
|   |   |   |   |   |   |   |   |   travelDistance >= 246.96 : bus (18.42/12.15)
|   |   |   |   |   |   |   |   featureD >= 1 : train (15.09/4)
|   |   |   |   |   |   featureT >= 0.44
|   |   |   |   |   |   |   featureJ < 3.12
|   |   |   |   |   |   |   |   maximumTravelDistance < 11.16
|   |   |   |   |   |   |   |   |   featureA < 0.15
|   |   |   |   |   |   |   |   |   |   featureJ < 1.48 : bus (11/4)
|   |   |   |   |   |   |   |   |   |   featureJ >= 1.48
|   |   |   |   |   |   |   |   |   |   |   featureF < 0.23 : car (1/0)
|   |   |   |   |   |   |   |   |   |   |   featureF >= 0.23
|   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.98 : bus (31.4/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.98 : bus (32.4/0.4)
|   |   |   |   |   |   |   |   |   featureA >= 0.15
|   |   |   |   |   |   |   |   |   |   featureU < 1.31
|   |   |   |   |   |   |   |   |   |   |   featureO < 1.68 : car (17.4/5.93)
|   |   |   |   |   |   |   |   |   |   |   featureO >= 1.68 : bus (23.8/0.67)
|   |   |   |   |   |   |   |   |   |   featureU >= 1.31 : car (21.6/2.27)
|   |   |   |   |   |   |   |   maximumTravelDistance >= 11.16
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 309.61 : bus (33.85/12.46)
|   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 309.61
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio < 0.06 : car (27.51/12.4)
|   |   |   |   |   |   |   |   |   |   stationaryPointRatio >= 0.06
|   |   |   |   |   |   |   |   |   |   |   speedMean < 3.91 : car (10.58/2.15)
|   |   |   |   |   |   |   |   |   |   |   speedMean >= 3.91
|   |   |   |   |   |   |   |   |   |   |   |   featureT < 0.59
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 7.47
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP < 2.34 : car (21.06/1.48)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureP >= 2.34 : car (38.39/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 7.47 : bus (1.26/0.68)
|   |   |   |   |   |   |   |   |   |   |   |   featureT >= 0.59 : car (39.8/0.19)
|   |   |   |   |   |   |   featureJ >= 3.12
|   |   |   |   |   |   |   |   featureA < 1.21
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus < 134.46
|   |   |   |   |   |   |   |   |   |   travelDistance < 224.75 : bus (37.4/11.51)
|   |   |   |   |   |   |   |   |   |   travelDistance >= 224.75
|   |   |   |   |   |   |   |   |   |   |   featureU < 1.48
|   |   |   |   |   |   |   |   |   |   |   |   featureF < 1.73 : bus (83.98/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureF >= 1.73 : bus (9.99/0.2)
|   |   |   |   |   |   |   |   |   |   |   featureU >= 1.48 : bus (22.39/2.39)
|   |   |   |   |   |   |   |   |   trajectorySimilarityBus >= 134.46 : car (21.82/2.56)
|   |   |   |   |   |   |   |   featureA >= 1.21 : bus (26.58/12.59)
|   |   |   |   |   mediumSpeedPointRatio >= 0.93
|   |   |   |   |   |   speedMax < 7.38 : bike (21.01/4.96)
|   |   |   |   |   |   speedMax >= 7.38
|   |   |   |   |   |   |   featureE < 0.34 : tram (6.46/0.46)
|   |   |   |   |   |   |   featureE >= 0.34
|   |   |   |   |   |   |   |   headingVariance < 3.35
|   |   |   |   |   |   |   |   |   featureJ < 3.11
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 9.26 : bus (23.06/1.85)
|   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 9.26 : bus (34.6/13.27)
|   |   |   |   |   |   |   |   |   featureJ >= 3.11
|   |   |   |   |   |   |   |   |   |   featureB < 0.14
|   |   |   |   |   |   |   |   |   |   |   featureN < 3.03
|   |   |   |   |   |   |   |   |   |   |   |   featureB < 0.03 : bus (7.82/0.57)
|   |   |   |   |   |   |   |   |   |   |   |   featureB >= 0.03 : bus (33.02/0.25)
|   |   |   |   |   |   |   |   |   |   |   featureN >= 3.03 : bike (0.11/0)
|   |   |   |   |   |   |   |   |   |   featureB >= 0.14 : car (1.08/0.08)
|   |   |   |   |   |   |   |   headingVariance >= 3.35
|   |   |   |   |   |   |   |   |   featureL < 2.84 : car (25.18/4.54)
|   |   |   |   |   |   |   |   |   featureL >= 2.84 : bus (36.74/10.98)
|   |   |   lowSpeedPointRatio >= 0.98
|   |   |   |   featureD < 0.74
|   |   |   |   |   featureS < 0.89 : stationary (39.83/23.83)
|   |   |   |   |   featureS >= 0.89 : stationary (28.4/16.4)
|   |   |   |   featureD >= 0.74
|   |   |   |   |   featureE < 0.72 : walk (20.81/3.65)
|   |   |   |   |   featureE >= 0.72 : car (29.48/2.21)
|   |   speedMean >= 9.08
|   |   |   speed95Quantile < 23.87
|   |   |   |   featureT < 0.31
|   |   |   |   |   featureN < 0.55 : train (30.57/11.76)
|   |   |   |   |   featureN >= 0.55
|   |   |   |   |   |   featureI < 0.38 : train (32.09/15.52)
|   |   |   |   |   |   featureI >= 0.38
|   |   |   |   |   |   |   featureE < 0.76 : bus (24.43/15.43)
|   |   |   |   |   |   |   featureE >= 0.76
|   |   |   |   |   |   |   |   featureQ < 0.67 : car (46.38/0)
|   |   |   |   |   |   |   |   featureQ >= 0.67 : car (21.9/1.9)
|   |   |   |   featureT >= 0.31
|   |   |   |   |   featureR < 1
|   |   |   |   |   |   featureU < 0.89
|   |   |   |   |   |   |   featureR < 0.45
|   |   |   |   |   |   |   |   trajectorySimilarityTrain < 927.64 : tram (8.69/0.54)
|   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 927.64
|   |   |   |   |   |   |   |   |   featureM < 1.97 : tram (2.32/1.33)
|   |   |   |   |   |   |   |   |   featureM >= 1.97
|   |   |   |   |   |   |   |   |   |   featureN < 0.76 : car (35.33/0)
|   |   |   |   |   |   |   |   |   |   featureN >= 0.76 : car (20.99/0.33)
|   |   |   |   |   |   |   featureR >= 0.45
|   |   |   |   |   |   |   |   featureL < 2.25
|   |   |   |   |   |   |   |   |   featureB < 0.03 : bus (18.38/6.38)
|   |   |   |   |   |   |   |   |   featureB >= 0.03
|   |   |   |   |   |   |   |   |   |   featureM < 2.46 : car (7.76/2.76)
|   |   |   |   |   |   |   |   |   |   featureM >= 2.46
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.45 : car (9/1)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.45 : car (64.28/0)
|   |   |   |   |   |   |   |   featureL >= 2.25
|   |   |   |   |   |   |   |   |   headingVariance < 0.49
|   |   |   |   |   |   |   |   |   |   featureE < 0.81
|   |   |   |   |   |   |   |   |   |   |   featureB < 0.06
|   |   |   |   |   |   |   |   |   |   |   |   featureQ < 0.67 : bus (38.43/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.67 : bus (2.76/0.22)
|   |   |   |   |   |   |   |   |   |   |   featureB >= 0.06 : car (0.11/0)
|   |   |   |   |   |   |   |   |   |   featureE >= 0.81 : car (4.76/0.43)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.49
|   |   |   |   |   |   |   |   |   |   featureH < 0.75
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 912.73 : bus (34.35/1.6)
|   |   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 912.73 : car (28.1/8.74)
|   |   |   |   |   |   |   |   |   |   featureH >= 0.75
|   |   |   |   |   |   |   |   |   |   |   featureM < 3.09 : car (27.64/3.82)
|   |   |   |   |   |   |   |   |   |   |   featureM >= 3.09 : car (26.09/1.09)
|   |   |   |   |   |   featureU >= 0.89
|   |   |   |   |   |   |   featureL < 4.14
|   |   |   |   |   |   |   |   trajectorySimilarityBus < 90.88
|   |   |   |   |   |   |   |   |   featureD < 0.77
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain < 203.61 : car (27.19/12.04)
|   |   |   |   |   |   |   |   |   |   trajectorySimilarityTrain >= 203.61
|   |   |   |   |   |   |   |   |   |   |   travelDistance < 461.4 : car (22.16/1.03)
|   |   |   |   |   |   |   |   |   |   |   travelDistance >= 461.4
|   |   |   |   |   |   |   |   |   |   |   |   featureI < 0.05 : bike (0.13/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureI >= 0.05 : car (95.54/0)
|   |   |   |   |   |   |   |   |   featureD >= 0.77
|   |   |   |   |   |   |   |   |   |   featureL < 3
|   |   |   |   |   |   |   |   |   |   |   featureQ < 0.53 : car (1.12/0.41)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 0.53
|   |   |   |   |   |   |   |   |   |   |   |   featureJ < 3.2 : car (42.22/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.2 : bus (0.1/0)
|   |   |   |   |   |   |   |   |   |   featureL >= 3 : bus (38.02/5.51)
|   |   |   |   |   |   |   |   trajectorySimilarityBus >= 90.88
|   |   |   |   |   |   |   |   |   headingVariance < 0.29
|   |   |   |   |   |   |   |   |   |   speedMean < 13.61 : tram (6.12/0.12)
|   |   |   |   |   |   |   |   |   |   speedMean >= 13.61
|   |   |   |   |   |   |   |   |   |   |   featureQ < 1.55
|   |   |   |   |   |   |   |   |   |   |   |   featureE < 0.57 : car (0.33/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   featureE >= 0.57
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC < 8.7
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ < 4.01
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO < 1.25 : bus (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureO >= 1.25
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH < 0.21 : bus (0.03/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureH >= 0.21
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 2.52 : car (19.36/0.03)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 2.52 : car (45.36/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureJ >= 4.01 : bus (0.06/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureC >= 8.7 : bike (0.15/0.09)
|   |   |   |   |   |   |   |   |   |   |   featureQ >= 1.55 : bus (1/0)
|   |   |   |   |   |   |   |   |   headingVariance >= 0.29
|   |   |   |   |   |   |   |   |   |   featureP < 2.09 : train (1/0)
|   |   |   |   |   |   |   |   |   |   featureP >= 2.09
|   |   |   |   |   |   |   |   |   |   |   featureA < 0.41
|   |   |   |   |   |   |   |   |   |   |   |   featureD < 0.83
|   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance < 18.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance < 589.27
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU < 0.98 : car (10.75/1.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureU >= 0.98 : car (29.27/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   travelDistance >= 589.27 : bus (3.16/0.15)
|   |   |   |   |   |   |   |   |   |   |   |   |   maximumTravelDistance >= 18.59
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL < 1.55 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   featureL >= 1.55
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS < 0.77 : bus (0.17/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   featureS >= 0.77 : car (88.14/0)
|   |   |   |   |   |   |   |   |   |   |   |   featureD >= 0.83 : car (405.23/0)
|   |   |   |   |   |   |   |   |   |   |   featureA >= 0.41 : car (10.96/2.96)
|   |   |   |   |   |   |   featureL >= 4.14
|   |   |   |   |   |   |   |   speedMax < 18.82 : bus (24.17/7)
|   |   |   |   |   |   |   |   speedMax >= 18.82 : bus (31.21/0)
|   |   |   |   |   featureR >= 1
|   |   |   |   |   |   featureE < 0.77
|   |   |   |   |   |   |   featureC < 5.81 : bus (35.38/0)
|   |   |   |   |   |   |   featureC >= 5.81 : bus (34.28/8.09)
|   |   |   |   |   |   featureE >= 0.77
|   |   |   |   |   |   |   trajectorySimilarityBus < 281.01
|   |   |   |   |   |   |   |   speedMax < 16 : bus (27.24/1.38)
|   |   |   |   |   |   |   |   speedMax >= 16
|   |   |   |   |   |   |   |   |   featureP < 2.67 : car (9.62/0.62)
|   |   |   |   |   |   |   |   |   featureP >= 2.67
|   |   |   |   |   |   |   |   |   |   featureN < 1.49 : bus (31.11/0.99)
|   |   |   |   |   |   |   |   |   |   featureN >= 1.49 : bus (30.08/10.35)
|   |   |   |   |   |   |   trajectorySimilarityBus >= 281.01
|   |   |   |   |   |   |   |   speed50Quantile < 10.51 : train (4.36/0.34)
|   |   |   |   |   |   |   |   speed50Quantile >= 10.51
|   |   |   |   |   |   |   |   |   featureT < 0.94
|   |   |   |   |   |   |   |   |   |   featureN < 2.22
|   |   |   |   |   |   |   |   |   |   |   featureJ < 3.97
|   |   |   |   |   |   |   |   |   |   |   |   featureL < 4.6
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN < 1.98 : car (103.02/0)
|   |   |   |   |   |   |   |   |   |   |   |   |   featureN >= 1.98 : car (1.41/0.2)
|   |   |   |   |   |   |   |   |   |   |   |   featureL >= 4.6 : bus (0.4/-0)
|   |   |   |   |   |   |   |   |   |   |   featureJ >= 3.97 : bus (2.42/1.61)
|   |   |   |   |   |   |   |   |   |   featureN >= 2.22 : bus (2.22/-0)
|   |   |   |   |   |   |   |   |   featureT >= 0.94 : bus (6.01/1.01)
|   |   |   speed95Quantile >= 23.87
|   |   |   |   featureE < 0.73
|   |   |   |   |   featureP < 2.51
|   |   |   |   |   |   featureR < 0.89
|   |   |   |   |   |   |   featureT < 0.43
|   |   |   |   |   |   |   |   featureT < 0.3
|   |   |   |   |   |   |   |   |   featureA < 0.1
|   |   |   |   |   |   |   |   |   |   featureO < 0.66 : train (6.21/0.48)
|   |   |   |   |   |   |   |   |   |   featureO >= 0.66 : train (40.66/0)
|   |   |   |   |   |   |   |   |   featureA >= 0.1 : train (5.35/1.94)
|   |   |   |   |   |   |   |   featureT >= 0.3 : train (18.42/2.42)
|   |   |   |   |   |   |   featureT >= 0.43 : train (16.84/5.84)
|   |   |   |   |   |   featureR >= 0.89 : bus (10.26/5.9)
|   |   |   |   |   featureP >= 2.51 : car (36.08/3.42)
|   |   |   |   featureE >= 0.73
|   |   |   |   |   featureU < 0.65 : train (7.18/0.24)
|   |   |   |   |   featureU >= 0.65
|   |   |   |   |   |   featureN < 2.22
|   |   |   |   |   |   |   featureP < 2.53
|   |   |   |   |   |   |   |   featureT < 0.53
|   |   |   |   |   |   |   |   |   featureB < 0.17
|   |   |   |   |   |   |   |   |   |   featureO < 1.67 : car (45.14/0)
|   |   |   |   |   |   |   |   |   |   featureO >= 1.67 : car (3.48/0.48)
|   |   |   |   |   |   |   |   |   featureB >= 0.17 : car (1.73/0.73)
|   |   |   |   |   |   |   |   featureT >= 0.53 : bus (1.69/0)
|   |   |   |   |   |   |   featureP >= 2.53
|   |   |   |   |   |   |   |   featureA < 0.51 : car (853.05/0)
|   |   |   |   |   |   |   |   featureA >= 0.51 : car (9.18/1.94)
|   |   |   |   |   |   featureN >= 2.22 : car (9.32/3.87)
featureQ >= 2.67
|   speedMax < 3.87
|   |   featureH < 0.05 : stationary (2/0)
|   |   featureH >= 0.05
|   |   |   featureP < 29.52 : walk (1694.84/0)
|   |   |   featureP >= 29.52 : bike (3.5/-0)
|   speedMax >= 3.87
|   |   speedMax < 10.45
|   |   |   featureE < 3.62
|   |   |   |   featureS < 3.14 : bike (1.23/0.23)
|   |   |   |   featureS >= 3.14
|   |   |   |   |   featureE < 3.5 : bike (186.47/0)
|   |   |   |   |   featureE >= 3.5 : bike (3.12/0.12)
|   |   |   featureE >= 3.62 : bike (35.61/17.61)
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
      0.24 (    44)  featureE
      0.23 (     4)  speed75Quantile
      0.23 (     6)  speedMedian
      0.22 (    14)  featureK
      0.21 (    18)  trajectorySimilarityBus
      0.21 (     4)  speedVariance
      0.21 (    15)  speed95Quantile
      0.2  (     2)  highSpeedPointRatio
      0.19 (    20)  trajectorySimilarityTrain
      0.19 (     2)  speed25Quantile
      0.19 (    20)  speedMax
      0.18 (    32)  featureL
      0.18 (    24)  featureR
      0.17 (     3)  lowSpeedPointRatio
      0.17 (    37)  featureA
      0.14 (    18)  maximumTravelDistance
      0.14 (    25)  featureS
      0.14 (    28)  featureP
      0.12 (    35)  featureC
      0.12 (    12)  featureH
      0.12 (    42)  featureD
      0.12 (    37)  featureU
      0.12 (    21)  featureI
      0.11 (    18)  featureO
      0.11 (     4)  stationaryPointRatio
      0.1  (    19)  featureN
      0.1  (    27)  featureT
      0.1  (    42)  featureJ
      0.1  (    19)  featureF
      0.09 (    22)  featureQ
      0.09 (    23)  featureB
      0.08 (    18)  featureM
      0.06 (     2)  mediumSpeedPointRatio
      0.03 (    11)  featureG
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
