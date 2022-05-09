import * as net from 'net';
import {spawn} from 'child_process';
import {EventEmitter} from 'events';

export class CommandServer {
  constructor() {
    net.createServer((connection) => {
      const socket = new CommandEventEmitterServer(connection);
      console.log('Se he conectado una cliente.');
      connection.write(JSON.stringify({'type': 'status', 'data': 'Esperando comandos'}) +'\n');
      socket.on('command', (message) => {
        if (message.type === 'requestCommand') {
          const requestedProcess = spawn(message.command, [message.arguments]);
          let salida: string = '';
          requestedProcess.stderr.on('data', (data_) => salida += data_);
          requestedProcess.stdout.on('data', (data_) => salida += data_);
          requestedProcess.on('close', () =>{
            console.log('Resultados:\n' + salida);
            connection.write(JSON.stringify({'type': 'result', 'data': salida}) + '\n');
          });
        }
        if (message.type === 'exit') {
          connection.end();
        }
      });
      connection.on('close', () => {
        console.log('Un cliente ha sido desconectado.');
      });
    }).listen(60300, () => {
      console.log('Esperando personas.');
    });
  }
}

export class CommandEventEmitterServer extends EventEmitter {
  constructor(connection: EventEmitter) {
    super();
    let wholeData = '';
    connection.on('data', (dataChunk) => {
      wholeData += dataChunk;

      let messageLimit = wholeData.indexOf('\n');
      while (messageLimit !== -1) {
        const message = wholeData.substring(0, messageLimit);
        wholeData = wholeData.substring(messageLimit + 1);
        this.emit('command', JSON.parse(message));
        messageLimit = wholeData.indexOf('\n');
      }
    });
  }
}


const server: CommandServer = new CommandServer();