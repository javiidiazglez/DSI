import * as inquirer from 'inquirer';
import * as gen from '../estructura/genero';
let scanf = require('scanf');
import {mainPrompt} from './index';

const genCol: gen.JsonGeneroCollection = new gen.JsonGeneroCollection([]);

let onlySingles: boolean = false; // Al principio se muestran todos

export function promptDelete() { // col.coleccion.map(e => e.getNombre())
  console.clear();
  inquirer.prompt({
       type: "checkbox", name: "DelCanEx",
       message: "Seleccione las canciones que quiera borrar: ",
                    choices: genCol.coleccion.map(e => e.getNombre())})
      .then(answers => {
        let borradas = answers["DelCanEx"] as string[];
        genCol.deleteGeneroVector(borradas);
        promptUser();
      });
}

export function promptMod() {
  enum CMod {
    Mod = "Modificar",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "ModCancion", message: "Modificar Canciones:",
                    choices: Object.values(CMod)})
      .then(answers => {
        switch (answers["ModCancion"]) {
          case CMod.Mod:

          process.stdout.write('Nombre> ');
          const n: string = scanf('%s');
          if (genCol.includesGenero(n)) {
            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            process.stdout.write('Grupos separados por ","> ');
            const a: string = scanf('%s');
            const c: string[] = a.split(',');
            process.stdout.write('Artistas separados por ","> ');
            const h: string = scanf('%s');
            const f: string[] = h.split(',');
            process.stdout.write('Albumes separados por ","> ');
            const b: string = scanf('%s');
            const g: string[] = b.split(',');
            process.stdout.write('Canciones separados por ","> ');
            const e: string = scanf('%s');
            const al: string[] = e.split(',');
            genCol.deleteGenero(n);
            genCol.addGenero(n, c, f, g, al);
          } else {
            console.log(n, ' no esta guardada.');
            console.log('Pulse cualquier tecla para continuar.');
            scanf('%s');
          }
            promptMod();
            break;
          case CMod.Quit:
            promptUser();
            break;
        }
      });
}

export function promptAdd() {
  enum CAdd {
    Nueva = "Añadir un nuevo genero",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "AddCancion", message: "Añadir Canciones:",
                    choices: Object.values(CAdd)})
      .then(answers => {
        switch (answers["AddCancion"]) {
          case CAdd.Nueva:
            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            if (!genCol.includesGenero(n)) {
              process.stdout.write('Nombre> ');
              const n: string = scanf('%s');
              process.stdout.write('Grupos separados por ","> ');
              const a: string = scanf('%s');
              const c: string[] = a.split(',');
              process.stdout.write('Artistas separados por ","> ');
              const h: string = scanf('%s');
              const f: string[] = h.split(',');
              process.stdout.write('Albumes separados por ","> ');
              const b: string = scanf('%s');
              const g: string[] = b.split(',');
              process.stdout.write('Canciones separados por ","> ');
              const e: string = scanf('%s');
              const al: string[] = e.split(',');
              genCol.deleteGenero(n);
              genCol.addGenero(n, c, f, g, al);
            promptUser();
            break;
          } else {
            console.log(n, ' ya esta guardada.');
            console.log('Pulse cualquier tecla para continuar.');
            scanf('%s');
          }
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
  genCol.displayGeneros();
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
    Add = "Añadir genero",
    List = "Listar geneross",
    Delete = "Borrar genero",
    Mod = 'Modificar genero',
    Purge = "Borrar generos",
    Quit = "Quit"
  }
  let showEscuchadas: boolean = false;
  console.clear();
  inquirer.prompt({
          type: "list",
          name: "command",
          message: "Choose option",
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