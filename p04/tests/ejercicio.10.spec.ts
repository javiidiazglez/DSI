import 'mocha';
import {expect} from 'chai';
import {cartesiano} from '../src/ejercicio-10';

describe('Ejercicio 10 - El Cartesiano', () => {
  it('cartesiano(["n", "s", "e", "o"] = true', () => {
    expect(cartesiano(['n', 's', 'e', 'o'])).to.deep.equal(true);
  });
  it('cartesiano(["n", "s", "e", "o", "n"] = false', () => {
    expect(cartesiano(['n', 's', 'e', 'o', 'n'])).to.deep.equal(false);
  });
  it('cartesiano(["n", "s", "e", "o", "n", "d"] = undefined', () => {
    expect(cartesiano(['n', 's', 'e', 'o', 'n', 'd'])).to.deep.equal(undefined);
  });
});