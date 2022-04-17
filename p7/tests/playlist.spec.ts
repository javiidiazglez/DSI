import 'mocha';
import {expect} from 'chai';
import {PlayList, JsonPlayListCollection} from '../src/estructura/playlist';

const ply = new JsonPlayListCollection([]);

describe('Comprobar clase PlayList - Test', () => {
  describe('Comprobar clase JsonPlayListCollection', () => {
    // it('Función addPlayList() añade una playlist', () => {
    //   grp.addPlayList(true, 0, "PlayList 1", "Sistema", ["Motomami", "Saoko"], "4:01", ["Pop", "Pop"]);
    // });
    // it('Función deletePlayList() elimina una playlist', () => {
    //   grp.deletePlayList('PlayList 1', "Usuario");
    // });
    // it('Existe función deletePlayListesVector()', () => {
    //   grp.deletePlayListVector(['PlayList 1']);
    // });
    it('Existe Función getPlayList()', () => {
      expect(ply.getPlayList(0).getNombre()).to.eql('PlayList 2');
    });
    it('Existe función includesPlayList()', () => {
      expect(ply.includesPlayList("PlayList 2")).to.eql(true);
    });
    it('Existe Función getPlayListByName()', () => {
      expect(ply.getPlayListByName("Prueba")).to.eql(undefined);
    });
    it('Existe función ordAlfabeticoTitulo()', () => {
      expect(ply.ordAlfabeticoTitulo(true)).to.not.be.null;
    });
    it('Existe función ordDuracion()', () => {
      expect(ply.ordDuracion(true)).to.not.be.null;
    });
    it('Existe función getPlayListByName()', () => {
      expect(ply.getPlayListByName('PlayList 1')).to.not.be.null;
    });
    it('Existe función ordReproduccionesPlaylist()', () => {
      expect(ply.ordReproduccionesPlaylist(true, 1)).to.not.be.null;
    });
    it('Existe función displayOrdenedPlayList()', () => {
      expect(ply.displayOrdenedPlayList()).to.not.be.null;
    });
    // it('Existe fuordReproduccionesPlaylistnción updateAlfPlaylistCan()', () => {
    //   expect(grp.updateAlfPlaylistCan(true, 1)).to.not.be.null;
    // });
    // it('Existe función updateAlfPlaylistAut()', () => {
    //   expect(grp.updateAlfPlaylistAut(true, 1)).to.not.be.null;
    // });
    // it('Existe función updateAlfPlaylistGenero()', () => {
    //   expect(grp.updateAlfPlaylistGenero(true, 1)).to.not.be.null;
    // });
    // it('Existe función updatePlaylistAño()', () => {
    //   expect(grp.updatePlaylistAño(true, 1)).to.not.be.null;
    // });
    // it('Existe función updatePlaylistDur()', () => {
    //   expect(grp.updatePlaylistDur(true, 1)).to.not.be.null;
    // });
  });
  describe('Atributos de la clase PlayList', () => {
    it('Existe un Getter de tipo "Nombre"', () => {
      expect(ply.getPlayList(0).getNombre()).to.eql('PlayList 1');
    });
    it('Existe un Getter de tipo "Autor"', () => {
      expect(ply.getPlayList(0).getAutor()).to.eql('Sistema');
    });
    it('Existe un Getter de tipo "Canciones"', () => {
      expect(ply.getPlayList(0).getCanciones()).to.eql(["Motomami", "Respect"]);
    });
    it('Existe un Getter de tipo "Duración"', () => {
      expect(ply.getPlayList(0).getDuracion()).to.eql("5:20");
    });
    it('Existe un Getter de tipo "Géneros"', () => {
      expect(ply.getPlayList(0).getGeneros()).to.eql(["Pop", "Pop"]);
    });
    it('Existe un Setter de tipo "Nombre"', () => {
      ply.getPlayList(0).setNombre("PlayList 2");
      expect(ply.getPlayList(0).getNombre()).to.eql("PlayList 2");
    });
    it('Existe un Setter de tipo "Componentes"', () => {
      ply.getPlayList(0).setAutor("Sistema");
      expect(ply.getPlayList(0).getAutor()).to.eql("Sistema");
    });
    it('Existe un Setter de tipo "Canciones"', () => {
      ply.getPlayList(0).setCanciones(["Alone", "Enemy"]);
      expect(ply.getPlayList(0).getCanciones()).to.eql(["Alone", "Enemy"]);
    });
    it('Existe un Setter de tipo "Duración"', () => {
      ply.getPlayList(0).setDuracion("4:10");
      expect(ply.getPlayList(0).getDuracion()).to.eql("4:10");
    });
    it('Existe un Setter de tipo "Géneros"', () => {
      ply.getPlayList(0).setGeneros(["Pop", "Pop"]);
      expect(ply.getPlayList(0).getGeneros()).to.eql(["Pop", "Pop"]);
    });
    it('Existe función printdata()', () => {
      expect(ply.getPlayList(0).printData()).to.not.be.null;
    });
  });
});