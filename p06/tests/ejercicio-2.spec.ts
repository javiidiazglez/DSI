import 'mocha';
import {expect} from 'chai';
import {Documentales} from '../src/ejercicio-2/documentales';
import {Peliculas} from '../src/ejercicio-2/peliculas';
import {Series} from '../src/ejercicio-2/series';

let serie = {titulo: 'La Casa de Papel', año: 2016, temporadas: 3, genero: 'sitcom', clasificacion: 8};
let listaSeries = new Series([{titulo: 'The Flash', año: 2014, temporadas: 7, genero: 'sitcom', clasificacion: 7.4}, serie]);
let listaDocumental = new Documentales([{titulo: 'Steve Jobs', año: 2015, genero: 'tecnologia', duracion: 120}]);
let listaPeliculas = new Peliculas([ {titulo: 'La momia', año: 1999, genero: 'accion', clasificacion: 8.5}]);
let peliculanueva = {titulo: 'Piratas del Caribe', año: 2008, genero: 'drama', clasificacion: 9.3};

describe('Ejercicio 2 - DSIflix', () => {
  describe('Comprobamos la clase Pelicula', () => {

    it('Añadir una pelicula nueva', () => {
      listaPeliculas.addElement(peliculanueva);
      expect(listaPeliculas.getElementos().length).to.be.equal(2);
    });

    it('Buscar la nueva pelicula (nombre) ', () => {
      expect(listaPeliculas.buscar('titulo', 'Piratas del Caribe')).to.deep.equal([peliculanueva]);
    });

    it('Buscar una pelicula (año)', () => {
      expect(listaPeliculas.buscar('año', '1999')).to.deep.equal([{titulo: 'La momia', año: 1999, genero: 'accion', clasificacion: 8.5}]);
    });

    it('Buscar una pelicula (clasificacion)', () => {
      expect(listaPeliculas.buscar('clasificacion', '8.5')).to.deep.equal([{titulo: 'La momia', año: 1999, genero: 'accion', clasificacion: 8.5}]);
    });

    it('Buscar una pelicula (genero)', () => {
      expect(listaPeliculas.buscar('genero', 'accion')).to.deep.equal([{titulo: 'La momia', año: 1999, genero: 'accion', clasificacion: 8.5}]);
    });
  });
  describe('Comprobamos la clase Series', () => {
    it('Buscar una serie (nombre)', () => {
      expect(listaSeries.buscar('titulo', 'La Casa de Papel')).to.deep.equal([serie]);
    });

    it('Buscar una serie (genero)', () => {
      expect(listaSeries.buscar('genero', 'sitcom').length).to.be.equal(2);
    });

    it('Buscar una serie (año)', () => {
      expect(listaSeries.buscar('año', '2016')).to.deep.equal([serie]);
    });

    it('Buscar una serie (numero de temporadas)', () => {
      expect(listaSeries.buscar('temporadas', '3')).to.deep.equal([serie]);
    });

    it('Buscar una serie (clasificacion)', () => {
      expect(listaSeries.buscar('clasificacion', '8')).to.deep.equal([serie]);
    });
  });
  describe('Comprobamos la clase Documentales', () => {

    it('Buscar un documental (duracion)', () => {
      expect(listaDocumental.buscar('duracion', '120')).to.deep.equal([{titulo: 'Steve Jobs', año: 2015, genero: 'tecnologia', duracion: 120}]);
    });

    it('Buscar un documental (fecha)', () => {
      expect(listaDocumental.buscar('año', '2015')).to.deep.equal([{titulo: 'Steve Jobs', año: 2015, genero: 'tecnologia', duracion: 120}]);
    });

    it('Bbuscar un documental (genero)', () => {
      expect(listaDocumental.buscar('genero', 'tecnologia')).to.deep.equal([{titulo: 'Steve Jobs', año: 2015, genero: 'tecnologia',duracion: 120}]);
    });

    it('Buscar un documental (nombre)', () => {
      expect(listaDocumental.buscar('titulo', 'Steve Jobs')).to.deep.equal([{titulo: 'Steve Jobs', año: 2015, genero: 'tecnologia', duracion: 120}]);
    });
  });
});