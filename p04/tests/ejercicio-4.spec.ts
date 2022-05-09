import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-4';

describe('Ejercicio 4 - Compresión de números en rangos', () => {
  it('meshArray(["apple", "peggy"]) = "Error al encadenar"', () => {
    expect(meshArray(['apple', 'peggy'])).to.be.equal('Error al encadenar');
  });
  it('meshArray(["apply", "plywood"]) = "ply"', () => {
    expect(meshArray(['apply', 'plywood'])).to.be.equal('ply');
  });
});