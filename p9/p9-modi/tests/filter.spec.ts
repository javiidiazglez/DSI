/* eslint-disable new-cap */
import 'mocha';
import {expect} from 'chai';
// eslint-disable-next-line no-unused-vars
import {MethodClases} from '../src/MethodClases/methodclases';
import {NumerosClases} from '../src/NumerosClases/numerosclases';
import {FilterMapAddReduce} from '../src/FilterMapAddReduce/filterMapAddReduce';
import {FilterMapSubReduce} from '../src/FilterMapSubReduce/filterMapSubReduce';
import {FilterMapMultReduce} from '../src/FilterMapMultReduce/filterMapMultReduce';
import {FilterMapDivReduce} from '../src/FilterMapDivReduce/filterMapDivReduce';

describe('Test - NumerosClases', () => {
  const listanumeros1: NumerosClases = new NumerosClases([2, 6, 8, 10]);
  it('Existe Reduce = 26', () => {
    expect(listanumeros1.Reduce()).to.be.equal(26);
  });
  it('Existe Map = [20, 60, 80, 100]', () => {
    expect(listanumeros1.Map((numero: number) => numero * 10)).to.be.deep.equal([20, 60, 80, 100]);
  });
  it('Existe Filter = [8, 10]', () => {
    expect(listanumeros1.Filter((numero: number) => numero > 7 ? true : false)).to.be.deep.equal([8, 10]);
  });
});
describe('Test - filterMapAddReduce', () => {
  const listanumeros2: FilterMapAddReduce = new FilterMapAddReduce([0, 10, 20, 30]);
  it('Existe filterMapAddReduce = 350', () => {
    expect(listanumeros2.filterMapAddReduce(((numero: number) => numero > 20 ? true : false), ((numero: number) => numero * 10), 50)).to.be.equal(350);
  });
});
describe('Test - filterMapSubReduce', () => {
  const listanumeros3: FilterMapSubReduce = new FilterMapSubReduce([0, 20, 40, 50]);
  it('Existe filterMapAddReduce = 800', () => {
    expect(listanumeros3.filterMapSubReduce(((numero: number) => numero > 20 ? true : false), ((numero: number) => numero * 10), 50)).to.be.equal(800);
  });

});
describe('Test - filterMapMultbReduce', () => {
  const listanumeros4: FilterMapMultReduce = new FilterMapMultReduce([0, 10, 20, 50]);
  it('Existe filterMapMultReduce = 25000', () => {
    expect(listanumeros4.filterMapMultReduce(((numero: number) => numero > 20 ? true : false), ((numero: number) => numero * 10), 50)).to.be.equal(25000);
  });
});
describe('Test - filterMapDivbReduce', () => {
  const listanumeros5: FilterMapDivReduce = new FilterMapDivReduce([0, 10, 20, 50]);
  it('Existe filterMapDivReduce = 10', () => {
    expect(listanumeros5.filterMapDivReduce(((numero: number) => numero > 20 ? true : false), ((numero: number) => numero * 10), 50)).to.be.equal(10);
  });
});