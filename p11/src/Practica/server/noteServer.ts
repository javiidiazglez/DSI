import * as net from 'net';
import { ResponseType } from '../messageType';
import { UserNoteOptions } from './noteApp/userNoteOptions';
import chalk = require('chalk');

const noteOpt = new UserNoteOptions();

/* Creating a server that allows half open connections. */
net.createServer({ allowHalfOpen: true }, (connection) => {
  console.log(chalk.hex('#FF8800')('\nUn cliente se ha conectado.'));

  let wholeData = '';
  connection.on('data', (dataChunk) => {
    wholeData += dataChunk;
    let messageLimit = wholeData.indexOf("\n");
    while (messageLimit !== -1) {
      const message = wholeData.substring(0, messageLimit);
      wholeData = wholeData.substring(messageLimit + 1);
      connection.emit('request', JSON.parse(message));
      messageLimit = wholeData.indexOf('\n');
    }
  });

  /* A switch case that is executed when the server receives a request from the client. */
  connection.on('request', (message) => {
    console.log(chalk.yellow.bold('Peticion realizada -> ') + chalk.white.bold(message.type));
    switch (message.type) {
      /* Adding a note to the user. */
      case 'add': {
        let statusadd = noteOpt.addNote(message.user, message.title, message.body, message.color);
        const data: ResponseType = {
          type: 'add',
          status: statusadd,
        };
        connection.write(`${JSON.stringify(data)}\n`, (err) => {
          if (err) {
            console.error(err);
          } else {
            connection.end();
          }
        });
      }
        break;
      /* Removing a note from the user. */
      case 'remove': {
        let statusremove = noteOpt.removeNote(message.user, message.title);
        const data: ResponseType = {
          type: 'remove',
          status: statusremove,
        };
        connection.write(`${JSON.stringify(data)}\n`, (err) => {
          if (err) {
            console.error(err);
          } else {
            connection.end();
          }
        });
      }
        break;
      /* Modifying a note. */
      case 'modify': {
        let statusModify = noteOpt.modifyNote(message.user, message.title, message.body, message.color);
        const data: ResponseType = {
          type: 'modify',
          status: statusModify,
        };
        connection.write(`${JSON.stringify(data)}\n`, (err) => {
          if (err) {
            console.error(err);
          } else {
            connection.end();
          }
        });
      }
        break;
      /* Reading a note from the user. */
      case 'read': {
        let statusRead = noteOpt.readNote(message.user, message.title);
        const data: ResponseType = {
          type: 'read',
          status: true,
        };
        if (statusRead == undefined) {
          data.status = false;
        } else {
          data.notas = [statusRead.noteToJSON()];
        }
        connection.write(`${JSON.stringify(data)}\n`, (err) => {
          if (err) {
            console.error(err);
          } else {
            connection.end();
          }
        });
      }
        break;
      /* Reading a list from the user. */
      case 'list': {
        let salida = noteOpt.listNotes(message.user);
        let salida2: string[] = [];
        salida.forEach((element) => {
          salida2.push(element.noteToJSON());
        });
        connection.write(`${JSON.stringify(({ type: 'listar', status: true, notas: salida2 }))}\n`, (err) => {
          if (err) {
            console.error(err);
          } else {
            connection.end();
          }
        });
      }
        break;
    }
  });

/* A listener that is executed when the connection is closed. */
connection.on('close', () => {
  console.log(chalk.cyan('Un cliente ha abandonado la sesión.'));
});
/* Listening to the port 60300. */
}).listen(60300, () => {
  console.log('Esperando personas...');
});