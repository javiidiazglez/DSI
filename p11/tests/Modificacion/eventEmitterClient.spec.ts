// import 'mocha';
// import {expect} from 'chai';
// import {EventEmitter} from 'events';
// import {MessageEventEmitterClient} from '../../src/Modificacion2/client';

// describe('MessageEventEmitterClient', () => {
//   it('test hecha modificacion', (done) => {
//     const socket = new EventEmitter();
//     const client = new MessageEventEmitterClient(socket);

//     client.on('message', (message) => {
//       expect(message).to.be.eql({'type': 'result', 'data': "17"});
//       done();
//     });

//     socket.emit('data', '{"type": "result", "data": "17"}');
//     socket.emit('data', '\n');
//   });
// });