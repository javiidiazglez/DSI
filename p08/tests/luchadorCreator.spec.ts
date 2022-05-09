import 'mocha';
import {expect} from 'chai';
import {LuchadorCreator} from '../src/Luchador/luchadorCreator';
import {Tipos} from '../src/Pokemon/pokemon';
import {PokemonCreator} from '../src/Pokemon/pokemonCreator';

let charmander = new PokemonCreator('Charmander', Tipos.fuego, 20, 30, 48, 750);

describe('Clase LuchadorCreator', () => {
  it('Instanciar un objeto LuchadorCreator', () => {
    expect(charmander).to.be.an.instanceOf(LuchadorCreator);
  });
  it('Método logic', () => {
    expect(charmander.logic()).to.be.eql('El luchador Charmander tiene 20 de ataque y 30 de defensa. Posee 750 de vida y 48 puntos de velocidad.');
  });
});