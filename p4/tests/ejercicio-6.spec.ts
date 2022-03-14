/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-6';

describe('Ejercicio 6 - Mover los ceros al final', () => {
  it('moveZeros([1, 0, 1, 2, 0, 1, 3]) = [ 1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.deep.equal([1, 1, 2, 1, 3, 0, 0]);
  });
});