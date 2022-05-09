import * as chalk from 'chalk';
import * as yargs from 'yargs';

import {Note} from './note';
import {UserNoteOptions} from './userNoteOptions';

const noteOptions = new UserNoteOptions();

/**
 * Comando ADD
 */
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
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      noteOptions.addNote(argv.user, argv.title, argv.body, argv.color);
    } else {
      console.log(chalk.default.red('ERROR: Argumentos no validos'));
    }
  },
});

/**
 * Comando REMOVE
 */
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
      noteOptions.removeNote(argv.user, argv.title);
    } else {
      console.log(chalk.default.red('ERROR: Argumentos no validos'));
    }
  },
});

/**
 * Comando MODIFY
 */
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
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      noteOptions.modifyNote(argv.user, argv.title, argv.body, argv.color);
    } else {
      console.log(chalk.default.red('ERROR: Argumentos no validos'));
    }
  },
});

/**
 * Comando READ
 */
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
      let nota = noteOptions.readNote(argv.user, argv.title);

      if (nota instanceof Note) {
        console.log(chalk.default.keyword(nota.getColor())(nota.getTitle()));
        console.log(chalk.default.keyword(nota.getColor())(nota.getBody()));
      }
    } else {
      console.log(chalk.default.red('ERROR: Argumentos no validos'));
    }
  },
});

/**
 * Comando LIST
 */
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
      const notas: Note[] = noteOptions.listNotes(argv.user);
      console.log(chalk.default.bgGray.white('### Notas de ' + argv.user + ' ###'));
      notas.forEach((nota) => {
        console.log(chalk.default.keyword(nota.getColor())(nota.getTitle()));
      });
    } else {
      console.log(chalk.default.red('ERROR: Argumentos no validos'));
    }
  },
});

yargs.parse();