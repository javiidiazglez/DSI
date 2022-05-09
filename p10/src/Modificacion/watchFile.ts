// node dist/Modificacion/watchFile.js src/Modificacion/numberList.txt

import {watch} from 'fs';
import {spawn} from 'child_process';

/**
 * Funcion que permite el archivo hacer las operaciones de numeros y actualizar
 */
watch(process.argv[2], (eventType, filename) => {
  if (eventType === 'rename') {
    console.log(`The file ${filename} has been deleted or renamed`);
  }
  if (eventType === 'change') {
    console.log(`The file ${filename} was modified!`);
    spawn('node', ['dist/suma.js', filename, process.argv[3]]).stdout.pipe(process.stdout);
  }
});
