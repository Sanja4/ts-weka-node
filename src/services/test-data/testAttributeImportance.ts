export const testAttributeImportance: string = `



Attribute importance based on average impurity decrease (and number of nodes using that attribute)

      0.39 (    11)  feature1
      0.28 (     3)  feature2
      0.28 (     8)  feature3
      0.25 (    10)  feature4
      0.24 (    15)  feature5
      0.24 (     4)  feature6
      0.24 (     8)  feature7
      0.24 (    44)  feature8
      0.23 (     4)  feature9
      0.23 (     6)  feature10
      0.22 (    14)  feature11
      0.21 (    18)  feature12
      0.21 (     4)  feature13
      0.21 (    15)  feature14
      0.2  (     2)  feature15
      0.19 (    20)  feature16
      0.19 (     2)  feature17
      0.19 (    20)  feature18
      0.18 (    32)  feature19
      0.18 (    24)  feature20
      0.17 (     3)  feature21
      0.17 (    37)  feature22
      0.14 (    18)  feature23
      0.14 (    25)  feature24
      0.14 (    28)  feature25
      0.12 (    35)  feature26
      0.12 (    12)  feature27
      0.12 (    42)  feature28
      0.12 (    37)  feature29
      0.12 (    21)  feature30
      0.11 (    18)  feature31
      0.11 (     4)  feature32
      0.1  (    19)  feature33
      0.1  (    27)  feature34
      0.1  (    42)  feature35
      0.1  (    19)  feature36
      0.09 (    22)  feature37
      0.09 (    23)  feature38
      0.08 (    18)  feature39
      0.06 (     2)  feature40
      0.03 (    11)  feature41
      0    (     0)  feature42
      0    (     0)  feature43
      0    (     0)  feature44
      0    (     0)  feature45

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
