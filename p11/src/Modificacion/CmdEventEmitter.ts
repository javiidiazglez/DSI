import {EventEmitter} from 'events';

/* It's an event emitter that emits events when a command is executed. */
export class CmdEventEmitter extends EventEmitter {

  /**
   * The constructor function takes a connection object as an argument, and then it sets the connection
   * object as the parent of the new object
   * @param {EventEmitter} connection - EventEmitter - This is the connection object that is passed to
   * the constructor of the class that extends EventEmitter.
   */
  constructor(connection: EventEmitter) {
    super();
    connection.on('data', (data) => {
      const message = JSON.parse(data);
      this.emit('command', message);
    });
  }
}