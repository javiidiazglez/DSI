/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

describe('Clase Pokedex', () => {
  const pokemon1: Pokemon = new Pokemon("Charmander", 8, 5, "Electrico", [54, 25, 7, 231]);
  const pokemon2: Pokemon = new Pokemon("Squirtle", 4, 3, "Agua", [6, 44, 3, 480]);
  const pokemon3: Pokemon = new Pokemon("Charizard", 10, 2, "Agua", [52, 34, 70, 241]);

  const pokedex: Pokedex = new Pokedex();

  pokedex.añadirPokemon(pokemon1);
  pokedex.añadirPokemon(pokemon2);
  pokedex.añadirPokemon(pokemon3);
  // pokedex.eliminarPokemon(pokemon2);

  it('AñadirPokemon (Pokemon1)', () => {
    expect(pokedex.añadirPokemon(pokemon1)).not.to.be.equal(null);
  });
  it('EliminarPokemon (Pokemon2)', () => {
    expect(pokedex.eliminarPokemon(pokemon2)).not.to.be.equal(null);
  });

  it("BuscarPokemon (Pokemon1) devuelve Pokemon1 -> [Charmander]", () => {
    expect(pokedex.buscarPokemon(pokemon1)).to.be.equal(pokemon1);
  });
  it("Tamaño del Pokemon", () => {
    expect(pokedex.pokedexSize()).to.be.equal(3);
  });
});