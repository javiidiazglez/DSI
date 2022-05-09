import * as net from 'net';
import {EventEmitter} from 'events';

export class CommandClient {
  constructor(private comandos: string, private argumentList: string) {
    const socket_ = net.connect({port: 60300});
    const client = new MessageEventEmitterClient(socket_);

    socket_.write(JSON.stringify({'type': 'requestCommand', 'command': comandos, 'arguments': argumentList}) + '\n');
    client.on('message', (response) => {
      if (response.type === 'status') {
        console.log('Salida servidor: ' + response.data);
      }
      if (response.type === 'result') {
        console.log('Resultado del comando: \n' + response.data);
        socket_.write(JSON.stringify({'type': 'exit', 'data': 'Data recibido'}) + '\n');
      }
    });
  }
}

export class MessageEventEmitterClient extends EventEmitter {
  constructor(connection: EventEmitter) {
    super();
    let wholeData = '';
    connection.on('data', (dataChunk) => {
      wholeData += dataChunk;
      let messageLimit = wholeData.indexOf('\n');
      while (messageLimit !== -1) {
        const message = wholeData.substring(0, messageLimit);
        wholeData = wholeData.substring(messageLimit + 1);
        this.emit('message', JSON.parse(message));   // message
        messageLimit = wholeData.indexOf('\n');
      }
    });
  }
}
let comandos: string = process.argv[2];
let lista: string = process.argv[3];

let client: CommandClient = new CommandClient(comandos, lista);