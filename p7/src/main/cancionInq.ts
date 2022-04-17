import * as inquirer from 'inquirer';
import * as can from '../estructura/cancion';
let scanf = require('scanf');
import {mainPrompt} from './index';

const canCol: can.JsonCancionCollection = new can.JsonCancionCollection([]);

let onlySingles: boolean = false; // Al principio se muestran todos

export function promptDelete() {
  enum CDel {
    Borrar = "Borrar una cancion exisitente",
    Quit = "Salir"
  }
  console.clear();
  inquirer.prompt({ type: "list", name: "DelCan", message: "Añadir Canciones:",
                    choices: Object.values(CDel)})
      .then(answers => {
        switch (answers["DelCan"]) {
          case CDel.Borrar:
            process.stdout.write('Nombre> ');
            const n: string = scanf('%s');
            // if (col.getCancionByName(n) != undefined) {
              canCol.deleteCancion(n);
              console.log(n, " se elimino correctamente.");
            // } else {
            //  console.log('Error. ', n, ' no se encontro en Guardados.');
            // }
            scanf('%s');
            promptUser();
            break;
          case CDel.Quit:
            promptUser();
            break;
        }
      });
}

export function promptDeleteExisting() { // col.coleccion.map(e => e.getNombre())
  console.clear();
  inquirer.prompt({
       type: "checkbox", name: "DelCanEx",
       message: "Seleccione las canciones que quiera borrar: ",
                    choices: canCol.coleccion.map(e => e.getNombre())})
      .then(answers => {
        let borradas = answers["DelCanEx"] as string[];
        canCol.deleteCancionesVector(borradas);
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
            if (canCol.includesCancion(n)) {
              process.stdout.write('Autor> ');
              const a: string = scanf('%s');
              process.stdout.write('Duracion> ');
              const d: string = scanf('%s');
              process.stdout.write('Single?> ');
              const s: boolean = (scanf('%d') > 0)? true: false;
              process.stdout.write('Reproducciones> ');
              const r: number = scanf('%d');
              canCol.deleteCancion(n);
              canCol.addCancion(n, a, [], d, s, r);
            } else {
              console.log(n, ' no esta guardada.');
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
    Nueva = "Añadir una cancion nueva",
    Existente = "Añadir una cancion existente",
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
            process.stdout.write('Autor> ');
            const a: string = scanf('%s');
            process.stdout.write('Duracion> ');
            const d: string = scanf('%s');
            process.stdout.write('Single?> ');
            const s: boolean = (scanf('%d') > 0)? true: false;
            process.stdout.write('Reproducciones> ');
            const r: number = scanf('%d');
            // const c: Cancion = new Cancion(n, a, [], d, s, r);
            canCol.addCancion(n, a, [], d, s, r);
            promptUser();
            break;
          case CAdd.Existente:
            promptUser();
            break;
          case CAdd.Quit:
            promptUser();
            break;
        }
      });
}

export function promptOrdenCancion() {
  enum OrdenCancion {
    Single = "Mostrar / Ocultar Singles",
    Repr = "Por numero de reproducciones",
    Alph = "Alfabeticamente"
  }
    console.clear();
    inquirer.prompt({
        type: "list", name: "OrdenCan",
        message: "Seleccione como quiere ordenar las canciones: ",
        choices: Object.values(OrdenCancion)})
        .then(answers => {
          switch (answers["OrdenCan"]) {
            case OrdenCancion.Single:
              onlySingles = !onlySingles;
              canCol.ordSingles(onlySingles);
              promptList();
              break;
            case OrdenCancion.Repr:
            process.stdout.write('Ascendentemente?> ');
            const ascR: boolean = (scanf('%d') > 0)? true: false;
              canCol.ordReproducciones(ascR);
              promptList();
              break;
            case OrdenCancion.Alph:
              process.stdout.write('Ascendentemente?> ');
              const ascA: boolean = (scanf('%d') > 0)? true: false;
              canCol.ordAlfabeticoTitulo(ascA);
                promptList();
                break;
            default:
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
  canCol.displayMode();
  inquirer.prompt({
    type: "list",
    name: "comand",
    message: "Teclee para continuar",
    choices: Object.values(CList),
  }).then(answers => {
    switch (answers["comand"]) {
      case CList.Ordenar:
        promptOrdenCancion();
        break;
      case CList.Quit:
        promptUser();
        break;
    }
  });
}

export function promptUser(): void {

  enum Comandos{
    Add = "Añadir cancion",
    List = "Listar canciones",
    Delete = "Borrer cancion",
    Mod = 'Modificar cancion',
    escuchada = "Marcar como escuchada",
    Toggle = "Show/Hide escuchadas",
    Purge = "Borrar Canciones",
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
          case Comandos.Toggle:
              showEscuchadas = !showEscuchadas;
              promptUser();
              break;
          case Comandos.Add:
              promptAdd();
              break;
          case Comandos.Delete:
            promptDeleteExisting();
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