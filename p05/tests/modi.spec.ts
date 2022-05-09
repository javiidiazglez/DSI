import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/modi';

describe('Pruebas modificación - Jueves', () => {
  const myHexNumber = new Hexadecimal(38);
  it('Devuelve un string "0x26"', () => {
    expect(myHexNumber.parseHexadecimal()).to.be.eql('0x26');
  });
  it('Devuelve el número 38', () => {
    expect(myHexNumber.parseNumero()).to.be.deep.equal(38);
  });
});