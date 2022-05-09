import * as fs from 'fs';
import * as chalk from 'chalk';
import * as yargs from 'yargs';

function userWatch(usuario: string, ruta: string) {
  let rutaUsuario: string = ruta;

  rutaUsuario += '/' + usuario;

  console.log('Directorio actual -> ' + rutaUsuario);

  let watch: boolean = false;
  fs.watch(rutaUsuario, (type, filename) => {
    if (watch) return;
      watch = true;
    if (type == 'rename') { // creado o eliminado fichero
      fs.access(rutaUsuario + '/' + filename, (err) => { // existencia fichero
        if (err) {
          console.log('Fichero "' + filename + '" eliminado');
        } else {
          console.log('Fichero "' + filename + '" creado');
        }
      });
    } else {
      fs.access(rutaUsuario + '/' + filename, (err) => {
        if (err) {
          console.log('ERROR: Problema con el fichero ' + filename);
        } else {
          console.log('Fichero ' + filename + ' modificado');
        }
      });
    }
    setTimeout(() => {watch = false;}, 100); // evitar duplicados
  });
}

yargs.command({
  command: 'watch',
  describe: 'new watch',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    ruta: {
      describe: 'Ruta',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.ruta === 'string') {
      userWatch(argv.user, argv.ruta);
    } else {
      console.log(chalk.default.red('ERROR: Argumentos no validos'));
    }
  },
});

yargs.parse();

/*
node dist/ejercicio-3/noteApp/noteApp.js add --user="Javi" --title="prueba1" --body="hola mundo" --color="green"
node dist/ejercicio-3/noteApp/noteApp.js modify  --user="Javi" --title="prueba1" --body="hola mundo2" --color="green"
node dist/ejercicio-3/noteApp/noteApp.js remove  --user="Javi" --title="prueba1" --body="hola mundo2" --color="green"

node dist/ejercicio-3/ejercicio-3.js watch --user="Javi" --ruta="src/ejercicio-3/db"
*/