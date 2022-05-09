/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Combate} from '../../src/ejercicio-1/combat';

describe('Clase Combate', () => {
  const pokemon1: Pokemon = new Pokemon("Charmander", 8, 5, "Electrico", [54, 25, 7, 231]);
  const pokemon2: Pokemon = new Pokemon("Squirtle", 4, 3, "Agua", [6, 44, 3, 480]);
  const combate: Combate = new Combate(pokemon1, pokemon2);

  it("Resultado Combate -> Ganador [Charmander]", () => {
    expect(combate.combatePokemon()).to.equal(pokemon1);
  });

  it('Llamada a la funcion de combate NO es null', () => {
    expect(combate.combatePokemon()).not.to.be.equal(null);
  });
});