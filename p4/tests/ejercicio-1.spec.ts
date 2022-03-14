/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';

describe('Ejercicio 1 - Tablas de multiplicar', () => {
  it('productTable(2) = [[1, 2], [2, 4]]', () => {
    expect(productTable(2)).to.be.eql([[1, 2], [2, 4]]);
  });
  it('productTable(3) = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
    expect(productTable(3)).to.be.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
  it('productTable(4) = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
    expect(productTable(4)).to.be.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  });
});