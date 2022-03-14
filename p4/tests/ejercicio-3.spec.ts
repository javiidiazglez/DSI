import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-3';

describe('Ejercicio 3 - Decodificar Resistencias', () => {
  it('decodeResistor([`Marron`, `Verde`]) = 15', () => {
    expect(decodeResistor([`Marron`, `Verde`])).to.be.equal(15);
  });
  it('decodeResistor([`Azul`, `Verde`]) = 65', () => {
    expect(decodeResistor([`Azul`, `Verde`])).to.be.equal(65);
  });
  it('decodeResistor([`Rojo`,`Negro`]) = 20', () => {
    expect(decodeResistor([`Rojo`, `Negro`])).to.be.equal(20);
  });
});