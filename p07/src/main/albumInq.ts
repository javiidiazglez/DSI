import * as inquirer from 'inquirer';
import * as alb from '../estructura/album';
let scanf = require('scanf');
import {mainPrompt} from './index';

const albCol: alb.JsonAlbumCollection = new alb.JsonAlbumCollection([]);

let asc: boolean = false; // Determina si se ordena ascendente o descendentemente

export function promptDelete() { // col.coleccion.map(e => e.getNombre())
  console.clear();
  inquirer.prompt({
       type: "checkbox", name: "DelAlbEx",
       message: "Seleccione las canciones que quiera borrar: ",
       choices: albCol.coleccion.map(e => e.getNombre())})
      .then(answers => {
        let borradas = answers["DelAlbEx"] as string[];
        albCol.deleteAlbumVector(borradas);
        promptUser();
      });
}

export function promptMod() {
  enum CMod {
    Mod = "Modificar",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "ModAlb", message: "Modificar Canciones:",
                    choices: Object.values(CMod)})
      .then(answers => {
        switch (answers["ModAlb"]) {
          case CMod.Mod:

            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            if (albCol.includesAlbum(n)) {
              process.stdout.write('Autor> ');
              const a: string = scanf('%s');
              process.stdout.write('Año de publicacion> ');
              const d: number = scanf('%d');
              process.stdout.write('Generos separados por ","> ');
              const b: string = scanf('%s');
              const g: string[] = b.split(',');
              process.stdout.write('Canciones separadas por ","> ');
              const e: string = scanf('%s');
              const c: string[] = e.split(',');
              albCol.deleteAlbum(n);
              albCol.addAlbum(n, a, d, g, c);
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
            if (!albCol.includesAlbum(n)) {
              process.stdout.write('Autor> ');
              const a: string = scanf('%s');
              process.stdout.write('Año de publicacion> ');
              const d: number = scanf('%d');
              process.stdout.write('Generos separados por ","> ');
              const b: string = scanf('%s');
              const g: string[] = b.split(',');
              process.stdout.write('Canciones separadas por ","> ');
              const e: string = scanf('%s');
              const c: string[] = e.split(',');
              albCol.addAlbum(n, a, d, g, c);
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

export function promptOrd() {
  enum COrd{
    Nom = "Nombre",
    Ano = "Año de lanzamiento",
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
        albCol.ordAlfabeticoTitulo(asc);
        break;
        case COrd.Ano:
          albCol.ordAño(asc);
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
  albCol.displayOrdenedGeneros();
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
    Add = "Añadir album",
    List = "Listar album",
    Delete = "Borrar album",
    Mod = 'Modificar album',
    Purge = "Borrar albumes",
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