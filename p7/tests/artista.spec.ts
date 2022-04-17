import 'mocha';
import {expect} from 'chai';
import {Artista, JsonArtistaCollection} from '../src/estructura/artista';

const art = new JsonArtistaCollection([]);

describe('Comprobar clase Artista - Test', () => {
  describe('Comprobar clase JsonArtistaCollection', () => {
    it('Función addArtista() añade un artista', () => {
      art.addArtista('Pharmacist', ["Grupo 1"], ["Pop", "Electronica"], ["Motomami"], ["A Love Supreme"]);
    });
    it('Función deleteArtista() elimina un artista', () => {
      art.deleteArtista('Thelonious Monk');
    });
    it('Existe función deleteArtistaesVector()', () => {
      art.deleteArtistaVector(['Thelonious Monk']);
    });
    it('Existe Función getArtista()', () => {
      expect(art.getArtista(0).getNombre()).to.eql('Thelonious Monk');
    });
    it('Existe función includesArtista()', () => {
      expect(art.includesArtista("Thelonious Monk")).to.eql(true);
    });
    it('Existe Función getArtistaByName()', () => {
      expect(art.getArtistaByName("Prueba")).to.eql(false);
    });
    it('Existe función displayOrdenedArtistas()', () => {
      expect(art.displayOrdenedArtistas()).to.not.be.null;
    });
  });
  describe('Atributos de la clase Artista', () => {
    it('Existe un Getter de tipo "Nombre"', () => {
      expect(art.getArtista(0).getNombre()).to.eql('Thelonious Monk');
    });
    it('Existe un Getter de tipo "Grupos"', () => {
      expect(art.getArtista(0).getGrupos()).to.eql(["Grupo 1"]);
    });
    it('Existe un Getter de tipo "Géneros"', () => {
      expect(art.getArtista(0).getGeneros()).to.eql(["Pop", "Electronica"]);
    });
    it('Existe un Getter de tipo "Albumes"', () => {
      expect(art.getArtista(0).getAlbumes()).to.eql(["Motomami"]);
    });
    it('Existe un Getter de tipo "Canciones"', () => {
      expect(art.getArtista(0).getCanciones()).to.eql(["Hot Fives and Sevens"]);
    });
    it('Existe un Getter de tipo "Oyentes"', () => {
      expect(art.getArtista(0).getOyentes()).to.not.be.null;
    });
    it('Existe un Setter de tipo "Nombre"', () => {
      art.getArtista(0).setNombre("Thelonious Monk");
      expect(art.getArtista(0).getNombre()).to.eql("Thelonious Monk");
    });
    it('Existe un Setter de tipo "Grupos"', () => {
      art.getArtista(0).setGrupos(["Grupo 1"]);
      expect(art.getArtista(0).getGrupos()).to.eql(["Grupo 1"]);
    });
    it('Existe un Setter de tipo "Géneros"', () => {
      art.getArtista(0).setGeneros(["Pop", "Electronica"]);
      expect(art.getArtista(0).getGeneros()).to.eql(["Pop", "Electronica"]);
    });
    it('Existe un Setter de tipo "Albumes"', () => {
      art.getArtista(0).setAlbumes(["Motomami"]);
      expect(art.getArtista(0).getAlbumes()).to.eql(["Motomami"]);
    });
    it('Existe un Setter de tipo "Canciones"', () => {
      art.getArtista(0).setCanciones(["Hot Fives and Sevens"]);
      expect(art.getArtista(0).getCanciones()).to.eql(["Hot Fives and Sevens"]);
    });
    it('Existe un Setter de tipo "Oyentes"', () => {
      art.getArtista(0).setOyentes(1000);
      expect(art.getArtista(0).getOyentes()).to.eql(1000);
    });
    it('Existe función printdata()', () => {
      expect(art.getArtista(0).printData()).to.not.be.null;
    });
  });
});