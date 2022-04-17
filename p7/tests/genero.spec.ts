import 'mocha';
import {expect} from 'chai';
import {Genero, JsonGeneroCollection} from '../src/estructura/genero';

const gen = new JsonGeneroCollection([]);

describe('Comprobar clase Genero - Test', () => {
  describe('Comprobar clase JsonGeneroCollection', () => {
    it('Función addGenero() añade un género', () => {
      gen.addGenero('Rap', ["Wade", "Syro"], ["Pepe Benavente", "Rosalia"], ["Pepe Benavente", "Rosalia"], ["Por Medio Peso", "Motomami"]);
    });
    it('Función deleteGenero() elimina un género', () => {
      gen.deleteGenero('Rap');
    });
    it('Existe función deleteGeneroesVector()', () => {
      gen.deleteGeneroVector(['Rap']);
    });
    it('Existe Función getGenero()', () => {
      expect(gen.getGenero(0).getNombre()).to.eql('Reggae');
    });
    it('Existe función includesGenero()', () => {
      expect(gen.includesGenero("Rap")).to.eql(true);
    });
    it('Existe Función getGeneroByName()', () => {
      expect(gen.getGeneroByName("Prueba")).to.eql(false);
    });
    it('Existe función displayGeneros()', () => {
      expect(gen.displayGeneros()).to.not.be.null;
    });
  });
  describe('Atributos de la clase Genero', () => {
    it('Existe un Getter de tipo "Nombre"', () => {
      expect(gen.getGenero(0).getNombre()).to.eql('Reggae');
    });
    it('Existe un Getter de tipo "Grupos"', () => {
      expect(gen.getGenero(0).getGrupos()).to.eql(["UB40", "Bob Marley and The Wailers"]);
    });
    it('Existe un Getter de tipo "Artistas"', () => {
      expect(gen.getGenero(0).getArtistas()).to.eql(["Bob Marley", "Morodo"]);
    });
    it('Existe un Getter de tipo "Albumes"', () => {
      expect(gen.getGenero(0).getAlbumes()).to.eql(["Kaya", "Legalize it"]);
    });
    it('Existe un Getter de tipo "Canciones"', () => {
      expect(gen.getGenero(0).getCanciones()).to.eql(["Red red wine", "Could you be loved"]);
    });
    it('Existe un Setter de tipo "Nombre"', () => {
      gen.getGenero(0).setNombre("Reggae");
      expect(gen.getGenero(0).getNombre()).to.eql("Reggae");
    });
    it('Existe un Setter de tipo "Grupos"', () => {
      gen.getGenero(0).setGrupos(["UB40", "Bob Marley and The Wailers"]);
      expect(gen.getGenero(0).getGrupos()).to.eql(["UB40", "Bob Marley and The Wailers"]);
    });
    it('Existe un Setter de tipo "Artistas"', () => {
      gen.getGenero(0).setArtistas(["Bob Marley", "Morodo"]);
      expect(gen.getGenero(0).getArtistas()).to.eql(["Bob Marley", "Morodo"]);
    });
    it('Existe un Setter de tipo "Albumes"', () => {
      gen.getGenero(0).setAlbumes(["Kaya", "Legalize it"]);
      expect(gen.getGenero(0).getAlbumes()).to.eql(["Kaya", "Legalize it"]);
    });
    it('Existe un Setter de tipo "Canciones"', () => {
      gen.getGenero(0).setCanciones(["Red red wine", "Could you be loved"]);
      expect(gen.getGenero(0).getCanciones()).to.eql(["Red red wine", "Could you be loved"]);
    });
    it('Existe función printdata()', () => {
      expect(gen.getGenero(0).printData()).to.not.be.null;
    });
  });
});
