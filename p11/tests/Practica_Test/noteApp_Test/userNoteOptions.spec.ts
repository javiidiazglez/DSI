import 'mocha';
import * as fs from 'fs';
import {expect} from 'chai';
import {Note} from '../../../src/Practica/server/noteApp/note';
import {UserNoteOptions} from '../../../src/Practica/server/noteApp/userNoteOptions';

describe('Comprobar clase userNoteOptions - Tests', () => {
  let userOptions = new UserNoteOptions();
  it('Se puede crear una nueva nota ', () => {
    userOptions.addNote('Test', 'Nota_test', 'Nota prueba', 'green');
    expect(fs.existsSync('db/Test/Nota_test.json')).true;
  });

  it('Si la nota existe, da error si vuelves a crearla', () => {
    expect(userOptions.addNote('Test', 'Nota_test', 'Nota prueba', 'green')).to.be.undefined;
  });

  it('Se puede modificar una nota correctamente', () => {
    userOptions.modifyNote('Test', 'Nota_test', 'Nota prueba modificada', 'blue');
    expect(fs.existsSync('db/Test/Nota_test.json')).true;
    let info = fs.readFileSync('db/Test/Nota_test.json');
    expect(info.toString()).to.be.eql('{\n\"title\": \"Nota_test' + '\",\n\"body\": \"Nota prueba modificada'+ '\",\n\"color\": \"blue' + '\"\n}');
  });

  it('Se puede listar las notas de un usuario correctamente', () => {
    userOptions.addNote('Test', 'Nota_test2', 'Nota prueba', 'green');
    let nota1 = new Note('Nota_test', 'Nota prueba modificada', 'blue');
    let nota2 = new Note('Nota_test2', 'Nota prueba', 'green');
    expect(userOptions.listNotes('Test')).to.be.eql([nota1, nota2]);
  });

  it('Se puede leer una nota correctamente', () => {
    let nota1 = new Note('Nota_test', 'Nota prueba modificada', 'blue');
    expect(userOptions.readNote('Test', 'Nota_test')).to.be.eql(nota1);
  });

  it('Se puede eliminar una nota correctamente', () => {
    userOptions.removeNote('Test', 'Nota_test');
    userOptions.removeNote('Test', 'Nota_test2');

    expect(fs.existsSync('db/Test/Nota_test.json')).false;
    expect(fs.existsSync('db/Test/Nota_test2.json')).false;
  });

  it('Si la nota no existe, da error si la modificas', () => {
    expect(userOptions.modifyNote('Test', 'Nota_test', 'Nota prueba modificada', 'blue')).to.be.undefined;
  });

  it('Si la nota no existe, da error si la intentas leer', () => {
    expect(userOptions.readNote('Test', 'Nota_test')).to.be.undefined;
  });

  it('Si la nota no existe, da error si la intentas borrar', () => {
    expect(userOptions.removeNote('Test', 'Nota_test2')).to.be.undefined;
  });
});