import 'mocha';
import {expect} from 'chai';
import {Note} from '../../../src/Practica/server/noteApp/note';

describe('Comprobar clase Note - Test', () => {
  let nota1 = new Note('Nota de prueba', 'Nota de prueba 2', 'green');
  let notafail = new Note('Nota de prueba fail', 'Nota de prueba 2', 'white');
  it('La nota es una intancia de la clase nota', () => {
    expect(nota1).to.be.instanceOf(Note);
  });
  it('El titulo de la nota -> "Nota de prueba"', () => {
    expect(nota1.getTitle()).to.be.eql('Nota de prueba');
  });
  it('El cuerpo de la nota -> "Nota de prueba 2"', () => {
    expect(nota1.getBody()).to.be.eql('Nota de prueba 2');
  });
  it('El color de la nota -> "green"', () => {
    expect(nota1.getColor()).to.be.eql('green');
  });
  it('Si el color no valido -> defecto "rojo"', () => {
    expect(notafail.getColor()).to.be.eql('red');
  });
  it('El titulo de la nota se puede cambiar -> "prueba"', () => {
    nota1.setTitle('prueba');
    expect(nota1.getTitle()).to.be.eql('prueba');
  });
  it('El cuerpo de la nota se puede cambiar -> "Hola mundo"', () => {
    nota1.setBody('Hola mundo');
    expect(nota1.getBody()).to.be.eql('Hola mundo');
  });
  it('El color de la nota se puede cambiar -> "rojo"', () => {
    nota1.setColor('red');
    expect(nota1.getColor()).to.be.eql('red');
  });
  it('Existe función noteToJSON()', () => {
    expect(nota1.noteToJSON()).to.not.be.null;
  });
});