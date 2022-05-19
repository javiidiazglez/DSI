import 'mocha';
import {expect} from 'chai';
import {hello} from '../src/index';

describe('pruebas de ejemplo iniciales', ()=>{
  it('funcion hello', ()=>{
    expect(hello()).to.be.eql('hello world');
  });
});