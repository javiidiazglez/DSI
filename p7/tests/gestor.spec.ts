import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaPlayList } from "../src/estructura/schema";
import {CommonOrdenable} from "../Interfaces/BaseInterface";
import {Gestor} from '../src/estructura/gestor';
import * as can from "../src/estructura/cancion";
import * as pla from "../src/estructura/playlist";;

const ges = new Gestor();

describe('Comprobar clase Gestor - Test', () => {
    it('Función ordAlfPlaylistCan()', () => {
      expect(ges.ordAlfPlaylistCan(true, "Playlist 1" )).to.not.be.null;
    });
    it('Función ordAlfPlaylistAut()', () => {
      expect(ges.ordAlfPlaylistAut(true, "Playlist 1" )).to.not.be.null;
    });
    it('Función ordAlfPlaylistGenero()', () => {
      expect(ges.ordAlfPlaylistGenero(true, 0)).to.not.be.null;
    });
    it('Función ordPlaylistAño()', () => {
      expect(ges.ordPlaylistAño(true, 0 )).to.not.be.null;
    });
    it('Función ordPlaylistDur()', () => {
      expect(ges.ordPlaylistDur(true, 0 )).to.not.be.null;
    });
    it('Función ordPlaylistNum()', () => {
      expect(ges.ordPlaylistNum(true, 0 )).to.not.be.null;
    });
    it('Función ordReproduccionesPlaylist()', () => {
      expect(ges.ordReproduccionesPlaylist(true, 0 )).to.not.be.null;
    });
    it('Función displayPlaylistSongs()', () => {
      expect(ges.displayPlaylistSongs()).to.not.be.null;
    });
});
