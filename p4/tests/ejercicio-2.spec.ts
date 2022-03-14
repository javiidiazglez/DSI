/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges} from '../src/ejercicio-2';
import {fromRangesToArray} from '../src/ejercicio-2';


describe('Ejercicio 2 - Compresión de números en rangos', () => {
  describe('fromArrayToRanges', () => {
    it('fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) = 5_7, 9, 12_14', () => {
      expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.deep.equal('5_7, 9, 12_14');
    });
    it('fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) = 5_7, 9, 12_14', () => {
      expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.deep.equal('-3_-1, 3, 5_7');
    });
    it('fromArrayToRanges([17]) = 17', () => {
      expect(fromArrayToRanges([17])).to.deep.equal('17');
    });
    it('fromArrayToRanges([3, 5, 6, 7, 9, 10]) = 3, 5_7, 9_10', () => {
      expect(fromArrayToRanges([3, 5, 6, 7, 9, 10])).to.deep.equal('3, 5_7, 9_10');
    });
  });
  describe('fromRangesToArray ', () => {
    it('fromRangesToArray ("5_7, 9, 12_14") = [5, 6, 7, 9, 12, 13, 14]', () => {
      expect(fromRangesToArray("5_7, 9, 12_14")).to.deep.equal([5, 6, 7, 9, 12, 13, 14]);
    });
    it('fromRangesToArray ("-3_-1, 3, 5_7") = [-3, -2, -1, 3, 5, 6, 7]', () => {
      expect(fromRangesToArray("-3_-1, 3, 5_7")).to.deep.equal([-3, -2, -1, 3, 5, 6, 7]);
    });
    it('fromRangesToArray ("17") = [17]', () => {
      expect(fromRangesToArray("17")).to.deep.equal([17]);
    });
    it('fromRangesToArray ("3, 5_7, 9_10") = [3, 5, 6, 7, 9, 10]', () => {
      expect(fromRangesToArray("3, 5_7, 9_10")).to.deep.equal([3, 5, 6, 7, 9, 10]);
    });
  });
});