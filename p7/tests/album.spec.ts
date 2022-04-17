import 'mocha';
import {expect} from 'chai';
import {Album, JsonAlbumCollection} from '../src/estructura/album';

const alb = new JsonAlbumCollection([]);

describe('Comprobar clase Album - Test', () => {
  describe('Comprobar clase JsonAlbumCollection', () => {
    it('Función addAlbum() añade un album', () => {
      alb.addAlbum('Noches de Bohemia', 'Pepe Benavente', 2014, ["Pop"], ['Por Medio Peso']);
    });
    it('Función deleteAlbum() elimina un album', () => {
      alb.deleteAlbum('Noches de Bohemia');
    });
    it('Existe función deleteAlbumesVector()', () => {
      alb.deleteAlbumVector(['Noches de Bohemia']);
    });
    it('Existe Función getAlbum()', () => {
      expect(alb.getAlbum(0).getNombre()).to.eql('Motomami');
    });
    it('Existe función includesAlbum()', () => {
      expect(alb.includesAlbum("Motomami")).to.eql(true);
    });
    it('Existe Función getAlbumByName()', () => {
      expect(alb.getAlbumByName("Prueba")).to.eql(false);
    });
    it('Existe función ordAlfabeticoTitulo()', () => {
      expect(alb.ordAlfabeticoTitulo(true)).to.eql([]);
    });
    it('Existe función ordAño()', () => {
      expect(alb.ordAño(true)).to.eql([]);
    });
    it('Existe función displayOrdenedGeneros()', () => {
      expect(alb.displayOrdenedGeneros()).to.not.be.null;
    });
  });
  describe('Atributos de la clase Album', () => {
    it('Existe un Getter de tipo "Nombre"', () => {
      expect(alb.getAlbum(0).getNombre()).to.eql('Motomami');
    });
    it('Existe un Getter de tipo "Autor"', () => {
      expect(alb.getAlbum(0).getAutor()).to.eql('Rosalia');
    });
    it('Existe un Getter de tipo "Año"', () => {
      expect(alb.getAlbum(0).getAño()).to.eql(2022);
    });
    it('Existe un Getter de tipo "Géneros"', () => {
      expect(alb.getAlbum(0).getGeneros()).to.eql(['Pop']);
    });
    it('Existe un Getter de tipo "Canciones""', () => {
      expect(alb.getAlbum(0).getCanciones()).to.eql(['Motomami']);
    });
    it('Existe un Setter de tipo "Nombre"', () => {
      alb.getAlbum(0).setNombre("Motomami");
      expect(alb.getAlbum(0).getNombre()).to.eql("Motomami");
    });
    it('Existe un Setter de tipo "Autor"', () => {
      alb.getAlbum(0).setAutor('Rosalia');
      expect(alb.getAlbum(0).getAutor()).to.eql('Rosalia');
    });
    it('Existe un Setter de tipo "Año"', () => {
      alb.getAlbum(0).setAño(2022);
      expect(alb.getAlbum(0).getAño()).to.eql(2022);
    });
    it('Existe un Setter de tipo "Géneros"', () => {
      alb.getAlbum(0).setGeneros(['Pop']);
      expect(alb.getAlbum(0).getGeneros()).to.eql(['Pop']);
    });
    it('Existe un Setter de tipo "Canciones"', () => {
      alb.getAlbum(0).setCanciones(['Motomami']);
      expect(alb.getAlbum(0).getCanciones()).to.eql(['Motomami']);
    });
    it('Existe función printdata()', () => {
      expect(alb.getAlbum(0).printData()).to.not.be.null;
    });
  });
});
