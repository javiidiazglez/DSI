import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import {MessageEventEmitterClient} from '../../src/Practica/client/eventEmitterClient';

describe('MessageEventEmitterClient - Tests', () => {
  it('Comprobar mensaje completo emitiendo "add" -> Evento Message',
    (done) => {
      const socket = new EventEmitter();
      const client = new MessageEventEmitterClient(socket);

      client.on('message', (message) => {
        expect(message).to.be.eql({'type': 'add', 'status': true});
        done();
      });

      socket.emit('data', '{"type": "add"');
      socket.emit('data', ', "status": true}');
      socket.emit('data', '\n');
    });

    it('Comprobar mensaje completo emitiendo "remove" -> Evento Message',
    (done) => {
      const socket = new EventEmitter();
      const client = new MessageEventEmitterClient(socket);

      client.on('message', (message) => {
        expect(message).to.be.eql({'type': 'remove', 'status': true});
        done();
      });

      socket.emit('data', '{"type": "remove"');
      socket.emit('data', ', "status": true}');
      socket.emit('data', '\n');
    });
    it('Comprobar mensaje completo emitiendo "modify" -> Evento Message',
    (done) => {
      const socket = new EventEmitter();
      const client = new MessageEventEmitterClient(socket);

      client.on('message', (message) => {
        expect(message).to.be.eql({'type': 'modify', 'status': true});
        done();
      });

      socket.emit('data', '{"type": "modify"');
      socket.emit('data', ', "status": true}');
      socket.emit('data', '\n');
    });
    it('Comprobar mensaje completo emitiendo "read" -> Evento Message',
    (done) => {
      const socket = new EventEmitter();
      const client = new MessageEventEmitterClient(socket);

      client.on('message', (message) => {
        expect(message).to.be.eql({'type': 'read', 'status': true});
        done();
      });

      socket.emit('data', '{"type": "read"');
      socket.emit('data', ', "status": true}');
      socket.emit('data', '\n');
    });
    it('Comprobar mensaje completo emitiendo "list" -> Evento Message',
    (done) => {
      const socket = new EventEmitter();
      const client = new MessageEventEmitterClient(socket);

      client.on('message', (message) => {
        expect(message).to.be.eql({'type': 'list', 'status': true});
        done();
      });

      socket.emit('data', '{"type": "list"');
      socket.emit('data', ', "status": true}');
      socket.emit('data', '\n');
    });
    
});