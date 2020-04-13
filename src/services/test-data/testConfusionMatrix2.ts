export const testConfusionMatrix2: string = `
     a     b     c     d     e     f     g     h     i     j     k   <-- classified as
   134    11    11     3    15     3     3     0   126    15     2 |     a = open front left
    11   104     1     6    10    24    14     1    81    14    19 |     b = close front left
    10     5   117    16     5     3    11    10   158    51    13 |     c = open front right
     1     2    11   182     7     2     3    28    70    13     4 |     d = close front right
    20     2     7     3   139    28     3     6    80     5    11 |     e = open back left
     4     7     1     3    24   158     3     8    44     8    25 |     f = close back left
     0     4    14     1     3     3   129     4   128    26    11 |     g = open back right
     0     0     1    38     2    12     2   175    45    10    19 |     h = close back right
    10     7     9     8     7     2    13     7 36483    52    15 |     i = no car door
    11    11    25     3     5     1    20     1   252   480     8 |     j = open trunk
     2    10     5    10    14    19    11    10    94    27   216 |     k = close trunk
`;
