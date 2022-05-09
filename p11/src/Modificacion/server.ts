import {spawn} from 'child_process';
import * as net from 'net';
import * as chalk from 'chalk';

/* Creating a server and listening for connections. */
net.createServer((connection) => {
  console.log(chalk.hex('#FF8800')('Un cliente se ha conectado!'));

  /* Sending a JSON object to the client. */
  connection.write(JSON.stringify({'type': 'connected'}));
  connection.on('data', (data) => {
    /* Printing the command that the client is sending to the server. */
    console.log(chalk.cyan('Comando seleccionado: ') + chalk.white(data.toString()));

    /* Executing the command that the client is sending to the server. */
    const command = spawn(data.toString(), {shell: true});

    // Devuelve el data
    command.stdout.on('data', (dataPass) => {
      // connection.write(JSON.stringify());
      // connection.end();
      connection.write(`${JSON.stringify({'type': 'success', 'msg': dataPass.toString()})}\n`, (err) => {
        if (err) {
          console.error(err);
        } else {
          connection.end();
        }
      });
    });
    // Error stderr devuelve json
    command.stderr.on('data', (error) => {
      // connection.write(JSON.stringify());
      // connection.end();
      connection.write(`${JSON.stringify({'type': 'stderr', 'msg': error.toString()})}\n`, (err) => {
        if (err) {
          console.error(err);
        } else {
          connection.end();
        }
      });
    });
    // Error json
    command.on('error', (error) => {
      // connection.write(JSON.stringify());
      // connection.end();

      connection.write(`${JSON.stringify({'type': 'error', 'msg': error.message})}\n`, (err) => {
        if (err) {
          console.error(err);
        } else {
          connection.end();
        }
      });
    });
  });
  connection.on('close', () => {
    console.log(chalk.green('Un cliente ha abandonado la sesión.\n'));
  });

})/* Listening for connections on port 60300. */
.listen(60300, () => {
  console.log('Esperando personas...');
});