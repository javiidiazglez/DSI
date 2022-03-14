import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-7';

describe('Ejercicio 7 - Factoría de multiplicaciones', () => {
  it('multiplyAll([2, 6, 8])(3)', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.deep.equal([6, 18, 24]);
  });
});