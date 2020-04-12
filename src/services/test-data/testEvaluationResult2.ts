export const testEvaluationResult2: string = `
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
