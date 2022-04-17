import * as inquirer from 'inquirer';
import * as pla from '../estructura/playlist';
let scanf = require('scanf');
import {mainPrompt} from './index';

const plaCol: pla.JsonPlayListCollection = new pla.JsonPlayListCollection([]);

let asc: boolean = false; // Determina si se ordena ascendente o descendentemente

export function promptOrd() {
  enum COrd{
    Nom = "Nombre",
    Dur = "Duracion",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({
    type: "list",
    name: "comand",
    message: "Teclee para continuar",
    choices: Object.values(COrd),
  }).then(answers => {
    asc = !asc;
    switch (answers["comand"]) {
      case COrd.Nom:
        promptList();
        plaCol.ordAlfabeticoTitulo(asc);
        break;
        case COrd.Dur:
          plaCol.ordDuracion(asc);
        promptList();
        break;
      case COrd.Quit:
        promptUser();
        break;
    }
  });
}

export function promptList() {
  enum CList{
    Ordenar = "Ordenar",
    Quit = "Salir"
  }
  console.clear();
  plaCol.displayOrdenedPlayList();
  inquirer.prompt({
    type: "list",
    name: "comand",
    message: "Teclee para continuar",
    choices: Object.values(CList),
  }).then(answers => {
    switch (answers["comand"]) {
      case CList.Ordenar:
        promptOrd();
        break;
      case CList.Quit:
        promptUser();
        break;
    }
  });
}

export function promptUser(): void {

  enum Comandos{
    List = "Listar album",
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
        case Comandos.List:
          promptList();
          break;
        case Comandos.Quit:
          mainPrompt();
          break;
      }
  });
}