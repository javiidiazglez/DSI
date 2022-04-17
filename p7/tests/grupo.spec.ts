import 'mocha';
import {expect} from 'chai';
import {Grupo, JsonGrupoCollection} from '../src/estructura/grupo';

const grp = new JsonGrupoCollection([]);

describe('Comprobar clase Grupo - Test', () => {
  describe('Comprobar clase JsonGrupoCollection', () => {
    it('Función addGrupo() añade un grupo', () => {
      grp.addGrupo('Grupo 1', ["Mick Jagger", "Jimmy Page"], 1962, ["Rock", "blues"], ["Hotel California"], 4000);
    });
    it('Función deleteGrupo() elimina un grupo', () => {
      grp.deleteGrupo('Grupo 1');
    });
    it('Existe función deleteGrupoesVector()', () => {
      grp.deleteGrupoVector(['Grupo 1']);
    });
    it('Existe Función getGrupo()', () => {
      expect(grp.getGrupo(0).getNombre()).to.eql('Grupo 1');
    });
    it('Existe función includesGrupo()', () => {
      expect(grp.includesGrupo("Grupo 1")).to.eql(true);
    });
    it('Existe Función getGrupoByName()', () => {
      expect(grp.getGrupoByName("Prueba")).to.eql(false);
    });
    it('Existe función displayGrupos()', () => {
      expect(grp.displayGrupos()).to.not.be.null;
    });
  });
  describe('Atributos de la clase Grupo', () => {
    it('Existe un Getter de tipo "Nombre"', () => {
      expect(grp.getGrupo(0).getNombre()).to.eql('Grupo 5: UB40');
    });
    it('Existe un Getter de tipo "Componentes"', () => {
      expect(grp.getGrupo(0).getComponentes()).to.eql(["Jimmy Brown", "Duncan Campbell", "Robin Campbell", "Earl Falconer", "Norman Hassan", "Brian Travers", "Tony Mullings"]);
    });
    it('Existe un Getter de tipo "Año Creación"', () => {
      expect(grp.getGrupo(0).getAñoCreacion()).to.eql(1978);
    });
    it('Existe un Getter de tipo "Géneros"', () => {
      expect(grp.getGrupo(0).getGeneros()).to.eql(["Reggae", "pop", "dub"]);
    });
    it('Existe un Getter de tipo "Albumes"', () => {
      expect(grp.getGrupo(0).getAlbumes()).to.eql(["Red Red Wine", "Sweet Sensation"]);
    });
    it('Existe un Getter de tipo "Oyentes"', () => {
      expect(grp.getGrupo(0).getOyentes()).to.eql(5000);
    });
    it('Existe un Setter de tipo "Nombre"', () => {
      grp.getGrupo(0).setNombre("Grupo 5: UB40");
      expect(grp.getGrupo(0).getNombre()).to.eql("Grupo 5: UB40");
    });
    it('Existe un Setter de tipo "Componentes"', () => {
      grp.getGrupo(0).setComponentes(["Jimmy Brown", "Duncan Campbell", "Robin Campbell", "Earl Falconer", "Norman Hassan", "Brian Travers", "Tony Mullings"]);
      expect(grp.getGrupo(0).getComponentes()).to.eql(["Jimmy Brown", "Duncan Campbell", "Robin Campbell", "Earl Falconer", "Norman Hassan", "Brian Travers", "Tony Mullings"]);
    });
    it('Existe un Setter de tipo "Año Creación"', () => {
      grp.getGrupo(0).setAñoCreacion(1978);
      expect(grp.getGrupo(0).getAñoCreacion()).to.eql(1978);
    });
    it('Existe un Setter de tipo "Géneros"', () => {
      grp.getGrupo(0).setGeneros(["Reggae", "pop", "dub"]);
      expect(grp.getGrupo(0).getGeneros()).to.eql(["Reggae", "pop", "dub"]);
    });
    it('Existe un Setter de tipo "Albumes"', () => {
      grp.getGrupo(0).setAlbumes(["Red Red Wine", "Sweet Sensation"]);
      expect(grp.getGrupo(0).getAlbumes()).to.eql(["Red Red Wine", "Sweet Sensation"]);
    });
    it('Existe un Setter de tipo "Oyentes"', () => {
      grp.getGrupo(0).setOyentes(5000);
      expect(grp.getGrupo(0).getOyentes()).to.eql(5000);
    });
    it('Existe función printdata()', () => {
      expect(grp.getGrupo(0).printData()).to.not.be.null;
    });
  });
});