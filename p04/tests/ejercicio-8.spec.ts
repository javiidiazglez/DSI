import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-8';
import {resta} from '../src/ejercicio-8';
import {producto} from '../src/ejercicio-8';
import {distEuclidea} from '../src/ejercicio-8';

describe('Ejercicio 8 - Puntos bi-dimensionales', () => {
  it('suma([5, 2], [1, 3]) = [5, 5]', () => {
    expect(suma([5, 2], [1, 3])).to.deep.equal([6, 5]);
  });
  it('resta([5, 2], [1, 3]) = [3, -1]', () => {
    expect(resta([5, 2], [1, 3])).to.deep.equal([4, -1]);
  });
  it('producto([5, 2] con 3 = [12, 6]', () => {
    expect(producto([5, 2], 3)).to.deep.equal([15, 6]);
  });
  it('distEuclidea([5, 7], [9, 2]) = 6.40312', () => {
    expect(distEuclidea([5, 7], [9, 2])).to.deep.equal(6.40312);
  });
});