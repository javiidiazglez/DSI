import {spawn} from 'child_process';
import chalk from 'chalk';
import * as yargs from 'yargs';
import * as fs from 'fs';
import {access, constants} from 'fs';

/**
 * Función si una path que se le pasa es un fichero o directorio
 * @param path path que se quiere comprobar
 */
function ficheroDirectorio(path: string) {
  access(path, constants.F_OK, (err) => {
    console.log(chalk.cyan(`${path} ${err ? 'no existe' : 'existe'}`));
    if (err) {
      process.exit(-1);
    } else {
      fs.open(path, fs.constants.O_DIRECTORY, (err) => {
        if (err) {
          console.log(chalk.cyan(`${path} es un fichero`));
        } else {
          console.log(chalk.cyan(`${path} es un directorio`));
        }
      });
    }
  });
}

/**
 * Función para crear un directorio en la ruta
 * @param path ruta donde se quiere crear un directorio
 */
function crearDirectorio(path: string) {
  access(path, constants.F_OK, (err) => {
    if (!err) {
      console.log(chalk.red('Error: Existe ya el directorio'));
      process.exit(-1);
    } else {
      fs.mkdir(path, (err) => {
        if (err) {
          console.log(chalk.red('Error: No se puede crear el directorio'));
        } else {
          console.log(chalk.yellow('Se ha creado el directorio'));
        }
      });
    }
  });
}

/**
 * Función para listar el contenido de un directorio
 * @param path directorio que se quiere listar
 */
function listarFicheroDirectorio(path: string) {
  access(path, constants.F_OK, (err) => {
    console.log(chalk.cyan(`${path} ${err ? 'no existe' : 'existe'}`));
    if (err) {
      process.exit(-1);
    } else {
      const lsAux = spawn('ls', [path]);
      let output = '';
      lsAux.stdout.on('data', (chunk) => (output += chunk));
      lsAux.on('close', () => {
        console.log(output);
      });
    }
  });
}

/**
 * Función para mostrar el contenido de un fichero
 * @param path fichero que se quiere mostrar
 */
function mostrarFichero(path: string) {
  access(path, constants.F_OK, (err) => {
    console.log(chalk.cyan(`${path} ${err ? 'no existe' : 'existe'}`));
    if (err) {
      process.exit(-1);
    } else {
      fs.open(path, fs.constants.O_DIRECTORY, (err) => {
        if (!err) {
          console.log(chalk.red(`Error: ${path} es un directorio, no fichero`));
          process.exit(-1);
        } else {
          const catAux = spawn('cat', [path]);
          let output = '';
          catAux.stdout.on('data', (chunk) => (output += chunk));
          catAux.on('close', () => {
            console.log(output);
          });
        }
      });
    }
  });
}

/**
 * Función para eliminar un fichero o un directorio
 * @param path ruta que se quiere eliminar
 */
function eliminar(path: string) {
  access(path, constants.F_OK, (err) => {
    console.log(chalk.cyan(`${path} ${err ? 'no existe' : 'existe'}`));
    if (err) {
      process.exit(-1);
    } else {
      const rmAux = spawn('rm', ['-r', path]);
      rmAux.on('close', (err) => {
        if (err) {
          console.log(chalk.red('Error: No se ha eliminado el fichero'));
        } else {
          console.log(chalk.yellow('Eliminado correctamente'));
        }
      });
    }
  });
}

/**
 * Función para copiar un fichero o directorio en otra ruta
 * @param origen ruta origen
 * @param destino ruta destino
 */
function mover(origen: string, destino: string) {
  access(origen, constants.F_OK, (err) => {
    console.log(chalk.cyan(`${origen} ${err ? 'no existe' : 'existe'}`));
    if (err) {
      process.exit(-1);
    } else {
      const cpAux = spawn('cp', ['-r', origen, destino]);
      cpAux.on('close', (err) => {
        if (err) {
          console.log(chalk.red('Error: No se ha movido el directorio'));
        } else {
          console.log(chalk.yellow('Copiado correctamente'));
        }
      });
    }
  });
}

/**
 * Comando DoF (ficheroDirectorio)
 */
yargs.command( {
  command: 'DoF',
  describe: 'Comprueba si es un un directorio o un fichero',
  builder: {
    path: {
      describe: 'Ruta',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === "string") {
      ficheroDirectorio(argv.path);
    }
  },
});

/**
 * Comando CD (crearDirectorio)
 */
yargs.command( {
  command: 'cd',
  describe: 'Crear un directorio',
  builder: {
    path: {
      describe: 'Ruta para crear el directorio',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === "string") {
      crearDirectorio(argv.path);
    }
  },
});

/**
 * Comando LF (listarFicheroDirectorio)
 */
yargs.command( {
  command: 'lf',
  describe: 'Listar ficheros de un directorio',
  builder: {
    path: {
      describe: 'Ruta para listar el fichero',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === "string") {
      listarFicheroDirectorio(argv.path);
    }
  },
});

/**
 * Comando MF (mostrarFichero)
 */
yargs.command( {
  command: 'mf',
  describe: 'Mostrar contenido de un fichero',
  builder: {
    path: {
      describe: 'Fichero que se quiere mostrar',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === "string") {
      mostrarFichero(argv.path);
    }
  },
});

/**
 * Comando RM (eliminar)
 */
yargs.command( {
  command: 'rm',
  describe: 'Eliminar un fichero o un directorio',
  builder: {
    path: {
      describe: 'Directorio que se quiere eliminar',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === "string") {
      eliminar(argv.path);
    }
  },
});

/**
 * Comando CP (mover)
 */
yargs.command( {
  command: 'cp',
  describe: 'Mover un directorio o fichero de una ruta especificada ',
  builder: {
    origen: {
      describe: 'Directorio origen para eliminar',
      demandOption: true,
      type: 'string',
    },
    destino: {
      describe: 'Directorio destino para eliminar',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.origen === "string" && typeof argv.destino === "string") {
      mover(argv.origen, argv.destino);
    }
  },
});

yargs.parse();