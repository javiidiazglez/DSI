import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/Pokemon/pokemon';
import {Tipos} from '../src/Pokemon/pokemon';

let charmander = new Pokemon('Charmander', Tipos.fuego, 20, 30, 48, 750);

describe('Clase Pokemon', () => {
  it('Instanciar un objeto Pokemon', () => {
    expect(charmander).to.be.an.instanceOf(Pokemon);
  });
  it('Nombre de Charmander', () => {
    expect(charmander.getNombre()).to.be.eql('Charmander');
  });
  it('Tipo de Charmander', () => {
    expect(charmander.getTipo()).to.be.eql(Tipos.fuego);
  });
  it('Ataque de Charmander', () => {
    expect(charmander.getAtaque()).to.be.eql(20);
  });
  it('Defensa de Charmander', () => {
    expect(charmander.getDefensa()).to.be.eql(30);
  });
  it('Velocidad de Charmander', () => {
    expect(charmander.getVelocidad()).to.be.eql(48);
  });
  it('Vida de Charmander', () => {
    expect(charmander.getVida()).to.be.eql(750);
  });
});