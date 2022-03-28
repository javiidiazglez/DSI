import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/ejercicio-1/combat';
import {Marvel} from '../src/ejercicio-1/marvel';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {DragonBall} from '../src/ejercicio-1/dragonball';
import {StarWars} from '../src/ejercicio-1/starwars';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Fighterdex} from '../src/ejercicio-1/fighterdex';

describe('Ejercicio 1 - El combate definitivo', () => {
  describe('Comprobamos la clase Pokemon', () => {
    let pokemon1 = new Pokemon('Charmander', 'Electrico', 10, 7, 'Uuuh', {HPMax: 37, ataque: 50, defensa: 38, velocidad: 88});

    it('Pokemon 1 es una instancia de pokemon', () => {
      expect(pokemon1).to.be.instanceOf(Pokemon);
    });

    it('Pokemon 1 pertenece al universo de Pokemon', () => {
      expect(pokemon1.getUniverso()).to.be.equal('Pokemon');
    });

    it('Pokemon 1 es una instancia luchador', () => {
      expect(pokemon1).to.be.instanceOf(Fighter);
    });

    it('Pokemon 1 es tipo eléctrico', () => {
      expect(pokemon1.getTipo()).to.be.equal('Electrico');
    });
    it('Pokemon 1 = 37 puntos de HPMax', () => {
      expect(pokemon1.getStats().HPMax).to.be.equal(37);
    });
    it('Pokemon 1 = 50 puntos de ataque', () => {
      expect(pokemon1.getStats().ataque).to.be.equal(50);
    });
    it('Pokemon 1 = 38 puntos de defensa', () => {
      expect(pokemon1.getStats().defensa).to.be.equal(38);
    });
    it('Pokemon 1 = 88 puntos de ataque', () => {
      expect(pokemon1.getStats().velocidad).to.be.equal(88);
    });
  });

  describe('Comprobamos la clase Combate', () => {
    let charmander = new Pokemon('Charmander', 'Electrico', 10, 70, 'Uuuh', {HPMax: 37, ataque: 50, defensa: 38, velocidad: 88});
    let squirtle = new Pokemon('Squirtle', 'Agua', 5, 30, 'Jeje', {HPMax: 23, ataque: 8, defensa: 40, velocidad: 22});
    let bulbasur = new Pokemon('Bulbasur', 'Hierba', 58, 195, 'Hojitass', {HPMax: 60, ataque: 80, defensa: 56, velocidad: 145});
    let piccolo = new DragonBall('Piccolo', 80, 190, 'Grrr', {HPMax: 500, ataque: 600, defensa: 500, velocidad: 250});
    let thanos = new Marvel('Thanos', 220, 275,'Bye bye', {HPMax: 400, ataque: 300, defensa: 450, velocidad: 150});
    let chewbacca = new StarWars('Chewbacca', 230, 300,'Uuuur', {HPMax: 500, ataque: 550, defensa: 500, velocidad: 250});

    let combate1 = new Combat(chewbacca, thanos);
    let combate2 = new Combat(charmander, piccolo);
    let combate3 = new Combat(bulbasur, squirtle);

    it('Combate 1 es un combate', () => {
      expect(combate1).to.be.instanceOf(Combat);
    });

    it('Piccolo pertenece al universo de Dragon Ball', () => {
      expect(piccolo.getUniverso()).to.be.equal('Dragon Ball');
    });
    it('Thanos pertenece al universo de Marvel', () => {
      expect(thanos.getUniverso()).to.be.equal('Marvel');
    });
    it('Chewbacca pertenece al universo de Star Wars', () => {
      expect(chewbacca.getUniverso()).to.be.equal('Star Wars');
    });

    it('Combate1 es ganado por Chewbacca', () => {
      expect(combate1.combatir()).to.be.equal('Chewbacca gana.');
    });

    it('Combate 2 es ganado por Piccolo', () => {
      expect(combate2.combatir()).to.be.equal('Piccolo gana.');
    });

    it('Combate 3 es ganado por Bulbasur', () => {
      expect(combate3.combatir()).to.be.equal('Bulbasur gana.');
    });
  });

  describe('Comprobamos la clase Fighterdex', () => {
    let charmander = new Pokemon('Charmander', 'Electrico', 10, 70, 'Uuuh', {HPMax: 37, ataque: 50, defensa: 38, velocidad: 88});
    let piccolo = new DragonBall('Piccolo', 80, 190, 'Grrr', {HPMax: 500, ataque: 600, defensa: 500, velocidad: 250});
    let thanos = new Marvel('Thanos', 220, 275,'Bye bye', {HPMax: 400, ataque: 300, defensa: 450, velocidad: 150});
    let chewbacca = new StarWars('Chewbacca', 230, 300,'Uuuur', {HPMax: 500, ataque: 550, defensa: 500, velocidad: 250});

    let fightdex = new Fighterdex([]);

    it('Fightdex es una instancia de Fighterdex', () => {
      expect(fightdex).to.be.instanceOf(Fighterdex);
    });

    it('Fightdex vacía', () => {
      expect(fightdex.fighterdexSize()).to.be.equal(0);
    });

    it('Fightdex tiene 3 luchadores', () => {
      fightdex.addFighter(chewbacca);
      fightdex.addFighter(thanos);
      fightdex.addFighter(piccolo);
      expect(fightdex.fighterdexSize()).to.be.equal(3);
    });

    it('Fightdex tiene a Thanos', () => {
      expect(fightdex.buscarLuchador(thanos)).not.to.null;
    });

    it('Fightdex no tiene a Charmander', () => {
      expect(fightdex.buscarLuchador(charmander)).to.be.equal(null);
    });

    it('Se ha eliminado a piccolo. Fightdex tiene ahora 2 luchadores', () => {
      fightdex.deleteFighter(piccolo);
      expect(fightdex.fighterdexSize()).to.be.equal(2);
    });
  });
});