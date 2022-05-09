import * as fs from 'fs';
import * as chalk from 'chalk';

import {colores, Note} from './note';

/**
 * Clase UserNoteOptions
 * Todas los métodos para interactuar con las notas al propio usuario.
 */
export class UserNoteOptions {
  constructor() {}
  /**
   * Crear una nueva nota
   * @param usuario Usuario que crea la nota
   * @param titulo Titulo de la nota
   * @param cuerpo Texto de la nota
   * @param color Color de la nota
   */
  addNote(usuario: string, titulo: string, cuerpo: string, color: string): void {
    try {
      if (fs.existsSync(`src/ejercicio-3/db/${usuario}`) == false) { // Si el directorio del usuario no existe se crea
        console.log('Creado fichero del usuario');
        fs.mkdirSync(`src/ejercicio-3/db/${usuario}`, {recursive: true});
      }
      const nota = new Note(titulo, cuerpo, color as colores);
      if (fs.existsSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`) == false) {
        fs.writeFileSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`, nota.noteToJSON());
        console.log(chalk.default.green('Nota creada correctamente!'));
      } else {
        throw new Error('ERROR: Parece que ya existe una nota con el mismo titulo');
      }
    } catch (err) {
      console.log(chalk.default.red(err.message));
    }
  }
  /**
   * Eliminar una nota
   * @param usuario Usuario eliminar la nota
   * @param titulo Titulo eliminar la nota
   */
  removeNote(usuario: string, titulo: string): void {
    try {
      if (fs.existsSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`) == true) {
        fs.rmSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`);
        console.log(chalk.default.green('Nota eliminada correctamente!'));
      } else {
        throw new Error('ERROR: Parece que esa nota no existia');
      }
    } catch (err) {
      console.log(chalk.default.red(err.message));
    }
  }
  /**
   * Modificar una nota
   * @param usuario Usuario que modificará la nota
   * @param titulo Titulo que modificará la nota
   * @param cuerpo Cuerpo que modificará la nota
   * @param color Color que modificará la nota
   */
  modifyNote(usuario: string, titulo: string, cuerpo: string, color: string): void {
    try {
      if (fs.existsSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`) == true) {
        const nota = new Note(titulo, cuerpo, color as colores);
        fs.writeFileSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`, nota.noteToJSON());
        console.log(chalk.default.green('Nota modificada correctamente!'));
      } else {
        throw new Error('ERROR: Parece que esa nota no existe');
      }
    } catch (err) {
      console.log(chalk.default.red(err.message));
    }
  }

  /**
   * Listar todas las notas del usuario
   * @param usuario Usuario que listan las notas
   * @returns lista de notas que tiene el usuario
   */
  listNotes(usuario: string): Note[] {
    let listNotes: Note[] = [];
    fs.readdirSync(`src/ejercicio-3/db/${usuario}`).forEach((notes) => {
      const info = fs.readFileSync(`src/ejercicio-3/db/${usuario}/${notes}`);
      const notaJson = JSON.parse(info.toString());
      const nota = new Note(notaJson.title, notaJson.body, notaJson.color);
      listNotes.push(nota);
    });
    return listNotes;
  }

  /**
   * Leer nota
   * @param usuario Usuario del que se leera la nota
   * @param titulo Titulo de la nota a leer
   */
  readNote(usuario: string, titulo: string): Note|void {
    try {
      if (fs.existsSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`) == true) {
        const info = fs.readFileSync(`src/ejercicio-3/db/${usuario}/${titulo}.json`);
        const notaJson = JSON.parse(info.toString());
        const nota = new Note(notaJson.title, notaJson.body, notaJson.color);
        return nota;
      } else {
        throw new Error('ERROR: Parece que esa nota no existe');
      }
    } catch (err) {
      console.log(chalk.default.red(err.message));
    }
  }
}