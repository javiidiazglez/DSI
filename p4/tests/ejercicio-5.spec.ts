/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-5';

describe('Ejercicio 5 - Compresión de números en rangos', () => {
  it('meanAndConcatenate["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0] = [3.6, "udiwstagwo"]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.deep.equal([3.6, 'udiwstagwo']);
  });
});