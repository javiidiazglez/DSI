/* eslint-disable new-cap */
import {spawn} from 'child_process';
import yargs from 'yargs';
import chalk from 'chalk';
import * as fs from 'fs';

class classCatGrep {
  constructor(private ruta: string, private palabra: string, private metodo: number) {
    if (this.metodo === 1) {
      this.metodoPipe();
    } else if (this.metodo === 2) {
      this.metodoSinPipe();
    } else {
      console.log(chalk.red('Error: El método no existe'));
    }
  }
  private metodoPipe() { // Método con pipe
    const cat = spawn('cat', [this.ruta]);
    const grep = spawn('grep', [this.palabra]);
    cat.stdout.pipe(grep.stdin);
    let auxGrep = '';
    let contador: number = 0;
    grep.stdout.on('data', (piece) => {
      auxGrep = piece.toString();
    });
    grep.on('close', () => {
      console.log();
      console.log(chalk.white('Contenido del fichero:'));
      console.log(chalk.yellow(auxGrep));
      const result = auxGrep.split(/\s+/);
      result.forEach((item) => {
        if (item === this.palabra) {
          contador++;
        }
      });
      if (contador === 0) {
        console.log();
        console.log(chalk.red(`No hay coincidencias con: ${this.palabra}`));
      } else {
        console.log();
        console.log(chalk.cyan(`Numeros de coincidencias: ${contador}`));
      }
    });
  }
  private metodoSinPipe() { // Método sin pipe
    const catGrep = spawn('cat', [this.ruta, 'grep', this.palabra]);
    let contador: number = 0;
    let auxCatGrep = '';
    catGrep.stdout.on('data', (n) => {
      auxCatGrep = n.toString();
    });
    catGrep.on('close', () => {
      console.log();
      console.log(chalk.white('Contenido del fichero:'));
      console.log(chalk.yellow(auxCatGrep));
      const result = auxCatGrep.split(/\s+/);
      result.forEach((item) => {
        if (item === this.palabra) {
          contador++;
        }
      });
      if (contador === 0) {
        console.log();
        console.log(chalk.red(`No hay coincidencias con: ${this.palabra}`));
      } else {
        console.log();
        console.log(chalk.cyan(`Numeros de coincidencias: ${contador}`));
      }
    });
  }
}

yargs.command({
  command: 'optionCatGrep',
  describe: 'Comando para contar el numero de coincidencias en el fichero',
  builder: {
    file: {
      describe: 'nombre del fichero',
      demandOption: true,
      type: 'string',
    },
    word: {
      describe: 'Comprobar coincidencias',
      demandOption: true,
      type: 'string',
    },
    method: {
      describe: 'Meotodo para seleccionar',
      demandOption: true,
      type: 'number',
    },
  },
  handler(argv) {
    if ((typeof argv.file === 'string') && (typeof argv.word === 'string') && (typeof argv.method === 'number')) {
      if (fs.existsSync(argv.file) === true) {
        const catGrep = new classCatGrep(argv.file, argv.word, argv.method);
      } else {
        console.log(chalk.red('Error: El fichero no existe'));
      }
    }
  },
});

yargs.parse();

// node dist/ejercicio-2/ejercicio-2.js catGrepOption --file=src/ejercicio-2/salida.txt --word=a --method=1
// node dist/ejercicio-2/ejercicio-2.js catGrepOption --file=src/ejercicio-2/salida.txt --word=Hola --method=2