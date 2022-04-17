import * as inquirer from 'inquirer';
import * as gru from '../estructura/grupo';
let scanf = require('scanf');
import {mainPrompt} from './index';

const gruCol: gru.JsonGrupoCollection = new gru.JsonGrupoCollection([]);

let onlySingles: boolean = false; // Al principio se muestran todos

export function promptDelete() { // col.coleccion.map(e => e.getNombre())
  console.clear();
  inquirer.prompt({
       type: "checkbox", name: "DelgruEx",
       message: "Seleccione las canciones que quiera borrar: ",
                    choices: gruCol.coleccion.map(e => e.getNombre())})
      .then(answers => {
        let borradas = answers["DelgruEx"] as string[];
        gruCol.deleteGrupoVector(borradas);
        promptUser();
      });
}

export function promptMod() {
  enum CMod {
    Mod = "Modificar",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "Modgru", message: "Modificar Canciones:",
                    choices: Object.values(CMod)})
      .then(answers => {
        switch (answers["ModGru"]) {
          case CMod.Mod:

            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            if (gruCol.includesGrupo(n)) {
              process.stdout.write('Nombre> ');
              const n: string = scanf('%s');
              process.stdout.write('Componentes separados por ","> ');
              const a: string = scanf('%s');
              const c: string[] = a.split(',');
              process.stdout.write('Año de creacion> ');
              const d: number = scanf('%s');
              process.stdout.write('Generos separados por ","> ');
              const b: string = scanf('%s');
              const g: string[] = b.split(',');
              process.stdout.write('Albumes separados por ","> ');
              const e: string = scanf('%s');
              const al: string[] = e.split(',');
              process.stdout.write('Oyentes mensuales> ');
              const o: number = scanf('%d');
              gruCol.deleteGrupo(n);
              gruCol.addGrupo(n, c, d, g, al, o);
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
    Nueva = "Añadir un grupo nuevo",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "AddGrupo", message: "Añadir Canciones:",
                    choices: Object.values(CAdd)})
      .then(answers => {
        switch (answers["AddGrupo"]) {
          case CAdd.Nueva:
            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            process.stdout.write('Componentes separados por ","> ');
            const a: string = scanf('%s');
            const c: string[] = a.split(',');
            process.stdout.write('Año de creacion> ');
            const d: number = scanf('%s');
            process.stdout.write('Generos separados por ","> ');
            const b: string = scanf('%s');
            const g: string[] = b.split(',');
            process.stdout.write('Albumes separados por ","> ');
            const e: string = scanf('%s');
            const al: string[] = e.split(',');
            process.stdout.write('Oyentes mensuales> ');
            const o: number = scanf('%d');
            gruCol.addGrupo(n, c, d, g, al, o);
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
    Navegar = "Navegar",
    Quit = "Salir"
  }
  console.clear();
  gruCol.displayGrupos();
  inquirer.prompt({
    type: "list",
    name: "comand",
    message: "Teclee para continuar",
    choices: Object.values(CList),
  }).then(answers => {
    switch (answers["comand"]) {
      case CList.Navegar:
        // promptOrdenCancion();
        break;
      case CList.Quit:
        promptUser();
        break;
    }
  });
}

export function promptUser(): void {

  enum Comandos{
    Add = "Añadir grupo",
    List = "Listar grupos",
    Delete = "Borrar grupo",
    Mod = 'Modificar grupo',
    Purge = "Borrar grupos",
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