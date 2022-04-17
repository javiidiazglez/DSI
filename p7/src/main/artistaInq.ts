import * as inquirer from 'inquirer';
import * as art from '../estructura/artista';
let scanf = require('scanf');
import {mainPrompt} from './index';

const artCol: art.JsonArtistaCollection = new art.JsonArtistaCollection([]);

let asc: boolean = false; // Determina si se ordena ascendente o descendentemente

export function promptDelete() { // col.coleccion.map(e => e.getNombre())
  console.clear();
  inquirer.prompt({
       type: "checkbox", name: "DelArtEx",
       message: "Seleccione las canciones que quiera borrar: ",
       choices: artCol.coleccion.map(e => e.getNombre())})
      .then(answers => {
        let borradas = answers["DelArtEx"] as string[];
        artCol.deleteArtistaVector(borradas);
        promptUser();
      });
}

export function promptMod() {
  enum CMod {
    Mod = "Modificar",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "ModArt", message: "Modificar Canciones:",
                    choices: Object.values(CMod)})
      .then(answers => {
        switch (answers["ModArt"]) {
          case CMod.Mod:

            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            if (artCol.includesArtista(n)) {
              process.stdout.write('Grupos separados por ","> ');
              const a: string = scanf('%s');
              const gr: string[] = a.split(',');
              process.stdout.write('Albumes separados por ","> ');
              const aux: string = scanf('%s');
              const al: string[] = aux.split(',');
              process.stdout.write('Generos separados por ","> ');
              const b: string = scanf('%s');
              const g: string[] = b.split(',');
              process.stdout.write('Canciones separadas por ","> ');
              const e: string = scanf('%s');
              const c: string[] = e.split(',');
              artCol.deleteArtista(n);
              artCol.addArtista(n, gr, g, al, c);
            } else {
              console.log(n, ' no esta guardada.');
              console.log('Pulse cualquier tecla para continuar.');
              scanf('%s');
            }
            promptUser();
            break;
          case CMod.Quit:
            promptUser();
            break;
        }
      });
}

export function promptAdd() {
  enum CAdd {
    Nueva = "Añadir un Album nuevo",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "AddAlbum", message: "Añadir Album:",
                    choices: Object.values(CAdd)})
      .then(answers => {
        switch (answers["AddAlbum"]) {
          case CAdd.Nueva:
            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            if (!artCol.includesArtista(n)) {
              process.stdout.write('Grupos separados por ","> ');
              const a: string = scanf('%s');
              const gr: string[] = a.split(',');
              process.stdout.write('Albumes separados por ","> ');
              const aux: string = scanf('%s');
              const al: string[] = aux.split(',');
              process.stdout.write('Generos separados por ","> ');
              const b: string = scanf('%s');
              const g: string[] = b.split(',');
              process.stdout.write('Canciones separadas por ","> ');
              const e: string = scanf('%s');
              const c: string[] = e.split(',');
              artCol.addArtista(n, gr, g, al, c);
            } else {
              console.log(n, ' ya esta registrada.');
              console.log('Pulse cualquier tecla para continuar.');
              scanf('%s');
            }
            promptUser();
            break;
          case CAdd.Quit:
            promptUser();
            break;
        }
      });
}

export function promptList() {
  enum CList{
    Quit = "Salir"
  }
  console.clear();
  artCol.displayOrdenedArtistas();
  inquirer.prompt({
    type: "list",
    name: "comand",
    message: "Teclee para continuar",
    choices: Object.values(CList),
  }).then(answers => {
    switch (answers["comand"]) {
      case CList.Quit:
        promptUser();
        break;
    }
  });
}

export function promptUser(): void {

  enum Comandos{
    Add = "Añadir artista",
    List = "Listar artista",
    Delete = "Borrar artista",
    Mod = 'Modificar artista',
    Purge = "Borrar artistas",
    Quit = "Quit"
  }
  console.clear();
  inquirer.prompt({
          type: "list",
          name: "command",
          message: "Elija una opcion:",
          choices: Object.values(Comandos),
  }).then((answers) => {
      switch (answers["command"]) {
          case Comandos.Add:
            promptAdd();
            break;
          case Comandos.Delete:
            promptDelete();
            break;
          case Comandos.List:
            promptList();
            break;
          case Comandos.Mod:
            promptMod();
            break;
          case Comandos.Purge:
            promptUser();
            break;
          case Comandos.Quit:
            mainPrompt();
            break;
      }
  });
}