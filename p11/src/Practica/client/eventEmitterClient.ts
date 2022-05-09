/**
 * La información que se envía por el servidor se va acumulando en la que si la información se envía fraccionada no hay problema alguno,
 * pero si el paquete llega correctamente se emite un evento MESSAGE, en la que la información del paquete está completo.
 * Para ello, acabará con un salto de línea o '\n'
 */

import {EventEmitter} from 'events';

/* It takes a connection that emits data events, and emits message events for each line of data */

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
        this.emit('message', JSON.parse(message));
        messageLimit = wholeData.indexOf('\n');
      }
    });
  }
}