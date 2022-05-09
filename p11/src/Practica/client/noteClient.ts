import * as yargs from 'yargs';
import * as chalk from 'chalk';
import {RequestType} from '../messageType';
import {connect} from 'net';
import {MessageEventEmitterClient} from './eventEmitterClient';

/* Creating a new connection to the server. */
const client = connect({port: 60300});
/* Creating a new instance of the class MessageEventEmitterClient. */
const clientExecuted = new MessageEventEmitterClient(client);

/* Class MessageEventEmitterClient, a switch case that is executed when the client receives a message from the server. */
clientExecuted.on('message', (message) => {
  switch (message.type) {
    case 'add':
      if (!message.status) {
        console.log(chalk.green('Nota añadida correctamente!'));
      } else {
        console.log(chalk.red('Error: La nota no pudo ser añadida'));
      }
      break;
    case 'remove':
      if (!message.status) {
        console.log(chalk.green('Nota eliminada correctamente!'));
      } else {
        console.log(chalk.red('Error: La nota no pudo ser eliminada'));
      }
      break;
    case 'modify':
      if (!message.status) {
        console.log(chalk.green('Nota modificada correctamente!'));
      } else {
        console.log(chalk.red('Error: La nota no pudo ser modificada'));
      }
      break;
    case 'read':
      if (message.status) {
        let nota = message.notas[0];
        let notaObj = JSON.parse(nota);
        console.log(chalk.keyword(notaObj.color)('El título de la nota -> ' + notaObj.title));
        console.log(chalk.keyword(notaObj.color)('El cuerpo de la nota -> ' + notaObj.body));
      } else {
        console.log(chalk.red('Error: La nota no pudo ser leida'));
      }
      break;
    case 'listar':
      if (message.status) {
        console.log(chalk.hex('#FF8800')('-> ¡Se han encontrado notas!'));
        let aux: string[] = message.notas;
        aux.forEach( (elemento) => {
          let notaObj = JSON.parse(elemento);
          console.log(chalk.keyword(notaObj.color)('El título de la nota -> ' + notaObj.title));
        });
      }
      else {
        console.log(chalk.red('Error: La nota no pudo ser listada'));
      }
      break;
  }
});

/* Defining the command `add` and its parameters. */
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
    typeof argv.body === 'string' && typeof argv.color === 'string') {
      const data: RequestType = {
        type: 'add',
        user: argv.user,
        title: argv.title,
        body: argv.body,
        color: argv.color,
      };
      console.log(chalk.yellow.bold('Opción seleccionada: ') + chalk.white.bold('Añadir nota'));
      client.write(`${JSON.stringify(data)}\n`);
    } else {
      console.log(chalk.red('ERROR: Argumentos no válidos'));
    }
  },
});

/* Defining the command `remove` and its parameters. */
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      const data: RequestType = {
        type: 'remove',
        user: argv.user,
        title: argv.title,
      };
      console.log(chalk.yellow.bold('Opción seleccionada: ') + chalk.white.bold('Eliminar nota'));
      client.write(`${JSON.stringify(data)}\n`);
    } else {
      console.log(chalk.red('ERROR: Argumentos no válidos'));
    }
  },
});

/* Defining the command `modify` and its parameters. */
yargs.command({
  command: 'modify',
  describe: 'Modify a note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
    typeof argv.body === 'string' && typeof argv.color === 'string') {
      const data: RequestType = {
        type: 'modify',
        user: argv.user,
        title: argv.title,
        body: argv.body,
        color: argv.color,
      };
      console.log(chalk.yellow.bold('Opción seleccionada: ') + chalk.white.bold('Modificar nota'));
      client.write(`${JSON.stringify(data)}\n`);
    } else {
      console.log(chalk.red('ERROR: Argumentos no válidos'));
    }
  },
});

/* Defining the command `read` and its parameters. */
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      const data: RequestType = {
        type: 'read',
        user: argv.user,
        title: argv.title,
      };
      console.log(chalk.yellow.bold('Opción seleccionada: ') + chalk.white.bold('Leer nota'));
      client.write(`${JSON.stringify(data)}\n`);
    } else {
      console.log(chalk.red('ERROR: Argumentos no válidos'));
    }
  },
});

/* Defining the command `list` and its parameters. */
yargs.command({
  command: 'list',
  describe: 'List all note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      const data: RequestType = {
        type: 'list',
        user: argv.user,
      };
      console.log(chalk.yellow.bold('Opción seleccionada: ') + chalk.white.bold('Listar nota'));
      client.write(`${JSON.stringify(data)}\n`);
    } else {
      console.log(chalk.red('ERROR: Argumentos no válidos'));
    }
  },
});

/* Parsing the arguments that are passed to the program. */
yargs.parse();