import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-9';
import {resta} from '../src/ejercicio-9';
import {producto} from '../src/ejercicio-9';
import {distEuclidea} from '../src/ejercicio-9';


describe('Ejercicio 9 - Puntos n-dimensionales', () => {
  it('suma([1, 2, 4, 1], [4, 1, 1, 3]) = [5, 3, 5, 4]', () => {
    expect(suma([1, 2, 4, 1], [4, 1, 1, 3])).to.deep.equal([5, 3, 5, 4]);
  });
  it('resta([1, 2, 4, 1], [4, 1, 1, 3]) = [-3, 1, 3, -2]', () => {
    expect(resta([1, 2, 4, 1], [4, 1, 1, 3])).to.deep.equal([-3, 1, 3, -2]);
  });
  it('producto([1, 2, 3], 5) = [5, 10, 15]', () => {
    expect(producto([1, 2, 3], 5)).to.deep.equal([5, 10, 15]);
  });
  it('distEuclidea([1, 2, 3], [6, 6, 3]) = 6.40312', () => {
    expect(distEuclidea([1, 2, 3], [6, 6, 3])).to.deep.equal(6.40312);
  });
});