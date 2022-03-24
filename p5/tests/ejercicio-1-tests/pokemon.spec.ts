/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

describe('Clase Pokemon', () => {
  const pokemon1: Pokemon = new Pokemon("Charmander", 8, 5, "Electrico", [54, 25, 7, 231]);
  const pokemon2: Pokemon = new Pokemon("Squirtle", 4, 3, "Agua", [6, 44, 3, 480]);

  describe('Pokemon Charmander', () => {
    it('Nombre de Charmander', () => {
      expect(pokemon1.getNombre()).to.be.equal("Charmander");
    });
    it('Peso de Charmander = 8', () => {
      expect(pokemon1.getPeso()).to.be.equal(8);
    });
    it('Altura de Charmander = 5', () => {
      expect(pokemon1.getAltura()).to.be.equal(5);
    });
    it('Tipo de Charmander = "Electrico"', () => {
      expect(pokemon1.getTipo()).to.be.equal("Electrico");
    });
    it('Ataque de Charmander = 54', () => {
      expect(pokemon1.getAtaque()).to.be.equal(54);
    });
    it('Defensa de Charmander = 25', () => {
      expect(pokemon1.getDefensa()).to.be.equal(25);
    });
    it('MaxHP de Charmander = 231', () => {
      expect(pokemon1.getMaxHP()).to.be.equal(231);
    });
  });
  describe('Pokemon Squirtle', () => {
    it('Nombre de Squirtle', () => {
      expect(pokemon2.getNombre()).to.be.equal("Squirtle");
    });
    it('Peso de Squirtle = 4', () => {
      expect(pokemon2.getPeso()).to.be.equal(4);
    });
    it('Altura de Squirtle = 5', () => {
      expect(pokemon2.getAltura()).to.be.equal(3);
    });
    it('Tipo de Squirtle = "Agua"', () => {
      expect(pokemon2.getTipo()).to.be.equal("Agua");
    });
    it('Ataque de Squirtle = 6', () => {
      expect(pokemon2.getAtaque()).to.be.equal(6);
    });
    it('Defensa de Squirtle = 44', () => {
      expect(pokemon2.getDefensa()).to.be.equal(44);
    });
    it('MaxHP de Squirtle = 480', () => {
      expect(pokemon2.getMaxHP()).to.be.equal(480);
    });
  });
});