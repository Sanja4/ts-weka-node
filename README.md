# ts-weka-node

WORK IN PROGRESS

Uses Weka v3.9.3.

## Setup
1. Download the Weka 3.9.3 JAR from https://mvnrepository.com/artifact/nz.ac.waikato.cms.weka/weka-dev/3.9.3
1. Place the Weka JAR file in your src folder, e.g. under `./src/bin/weka-3.9.3.jar`
1. To use this plugin, create a new WekaLibraryService instance:

    ```
    import {WekaLibraryService} from 'ts-weka-node/lib/services/weka-library.service';
    ...
    private wekaLibraryService: WekaLibraryService = new WekaLibraryService('./input', './output', './src/bin/weka-3.9.3.jar');
    ```
     The WekaLibraryService distinguishes between balanced and unbalanced datasets. It expects unbalanced and balanced datasets (as `.arff`) in the input folder:
     
     - `./input/datasets/balanced/...`
     - `./input/datasets/unbalanced/...`
     
     Whenever a file name is required as a parameter, it can be provided with or without the suffix `.arff`
  
