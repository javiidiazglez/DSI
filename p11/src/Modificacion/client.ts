import * as net from 'net';
import * as chalk from 'chalk';
import {CmdEventEmitter} from './CmdEventEmitter';

if (process.argv.length < 3) {
  console.log(chalk.red(`Ruta < 3. Escriba una opción más.`));
} else {
  const command = process.argv[2];
  const socket = net.connect({port: 60300}); // Conectamos el socket.


  const client = new CmdEventEmitter(socket); // Conectamos el cliente.

  socket.write(command);
  socket.end();

  client.on('command', (message) => {

    if (message.type === 'connected') {
      console.log(chalk.magenta(`Conectado correctamente!\n `) + chalk.yellow(`-> Comando seleccionado: `) + chalk.white(`${command}`));
    } else if (message.type === 'success') {
      console.log(chalk.green(`Resultado: ${message.msg}`));
    } else if (message.type === 'error') {
      console.log(chalk.red(`Error: ${message.msg}`));
    } else if (message.type === 'stderr') {
      console.log(chalk.red(`Error: commando con ruta: ${message.msg}`));
    } else {
      console.log(chalk.red(`Error: ${message.type} no existe`));
    }
  });

  client.on('end', () => {
    console.log('Conexión terminada.');
    console.log(command);
  });
}