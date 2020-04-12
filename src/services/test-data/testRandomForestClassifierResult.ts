export const testRandomForestClassifierResult: string = `
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
      0    (     0)  stoppages30To90s`;
