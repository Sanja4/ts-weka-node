# ts-weka-node

WORK IN PROGRESS

Uses Weka v3.9.3.

## Setup
1. Download the Weka 3.9.3 JAR from https://mvnrepository.com/artifact/nz.ac.waikato.cms.weka/weka-dev/3.9.3 and place the Weka JAR file in your src folder, e.g. under `./src/bin/weka-3.9.3.jar`
1. If you want to use certain classes for attribute selection, download the attributeSelectionSearchMethods JAR from https://sourceforge.net/projects/weka/files/weka-packages/attributeSelectionSearchMethods1.0.7.zip. If you already downloaded the package using the WEKA Package Manager, you can find the file in `<Home>\packages\attributeSelectionSearchMethods`. Place the attributeSelectionSearchMethods JAR file in your src folder, e.g. under `./src/bin/attributeSelectionSearchMethods-1.0.7.jar`.
1. If you want to use EvolutionarySearch for attribute selection, download the JAR from https://github.com/sebastian-luna-valero/EvolutionarySearch/releases/download/1.0.2/EvolutionarySearch.zip and place it in your src folder, e.g. under `./src/bin/EvolutionarySearch-1.0.2.jar`
1. To use this plugin, create a new WekaLibraryService instance:

    ```
    import * as path from 'path';
    import {WekaLibraryService} from 'ts-weka-node/lib/services/weka-library.service';
    ...
   
    private binPath: string = path.join(__dirname, '../src/bin/');
   
    private wekaLibraryService: WekaLibraryService = new WekaLibraryService('./input', './output', this.binPath);
    ```
   The path for the attributeSelectionSearchMethods JAR is optional.
   
   The WekaLibraryService distinguishes between balanced and unbalanced datasets. It expects unbalanced and balanced datasets (as `.arff`) in the input folder:
     
     - `./input/datasets/balanced/...`
     - `./input/datasets/unbalanced/...`
     
     Additionally, if feature selection is performed, the initial files are placed in the following directory:
     - `./input/datasets/initial/...`
     
     Whenever a file name is required as a parameter, it can be provided with or without the suffix `.arff`
  
