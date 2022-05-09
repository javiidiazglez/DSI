import 'mocha';
import {expect} from 'chai';
import {LuchadorCreator} from '../src/Luchador/luchadorCreator';
import {Tipos} from '../src/Pokemon/pokemon';
import {PokemonCreator} from '../src/Pokemon/pokemonCreator';

let charmander = new PokemonCreator('Psyduck', Tipos.fuego, 20, 30, 48, 750);

describe('Clase PokemonCreator', () => {
  it('Instanciar un objeto PokemonCreator', () => {
    expect(charmander).to.be.an.instanceOf(PokemonCreator);
  });
  it('El objeto Charmander es un LuchadorCreator', () => {
    expect(charmander).to.be.an.instanceOf(LuchadorCreator);
  });
  it('Se puede utilizar el objeto Charmander en factory method', () => {
    expect(charmander.factoryMethod()).to.be.eql(charmander);
  });
});