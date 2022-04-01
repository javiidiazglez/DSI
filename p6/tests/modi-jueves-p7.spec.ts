import 'mocha';
import { expect } from 'chai';
import { MetricLengthAdapter } from '../src/modi-jueves-p7/metriclengthadapter';
import { ImperialLength } from '../src/modi-jueves-p7/imperiallength';
import { MetricLength } from '../src/modi-jueves-p7/metriclength';

describe('Práctica 7: Ejercicios - PE103 - MetricLengthAdapter', () => {
  describe('Unidades con Pulgadas', () => {
    it('Pulgadas a Centimetros', () => {
      let convertirPulgada = new ImperialLength(8, "pulgadas");
      let convertir = new MetricLengthAdapter(convertirPulgada);
      expect(convertir.pulgadas("centimetros")).to.be.eql(20.32);
    });
    it('Pulgadas a Metros', () => {
      let convertirPulgada = new ImperialLength(8, "pulgadas");
      let convertir = new MetricLengthAdapter(convertirPulgada);
      expect(convertir.pulgadas("metros")).to.be.eql(0.2032);
    });
    it('Pulgadas a Kilometros', () => {
      let convertirPulgada = new ImperialLength(8, "pulgadas");
      let convertir = new MetricLengthAdapter(convertirPulgada);
      expect(convertir.pulgadas("kilometros")).to.be.eql(0.0002032);
    });
    it('Pulgadas a Metrica inválida', () => {
      let convertirPulgada = new ImperialLength(8, "pulgadas");
      let convertir = new MetricLengthAdapter(convertirPulgada);
      expect(convertir.pulgadas("a")).to.be.eql("Metrica invalida");
    });
  });
  describe('Unidades con Pies', () => {
    it('Pies a Centímetro', () => {
      let convertirPies = new ImperialLength(8, "pies");
      let convertir = new MetricLengthAdapter(convertirPies);
      expect(convertir.pies("centimetros")).to.be.eql(243.84);
    });
    it('Pies a Metros', () => {
      let convertirPies = new ImperialLength(8, "pies");
      let convertir = new MetricLengthAdapter(convertirPies);
      expect(convertir.pies("metros")).to.be.eql(2.4384);
    });
    it('Pies a Kilometros', () => {
      let convertirPies = new ImperialLength(8, "pies");
      let convertir = new MetricLengthAdapter(convertirPies);
      expect(convertir.pies("kilometros")).to.be.eql(0.0024384);
    });
    it('Pies a Metrica inválida', () => {
      let convertirPies = new ImperialLength(8, "pies");
      let convertir = new MetricLengthAdapter(convertirPies);
      expect(convertir.pulgadas("a")).to.be.eql("Metrica invalida");
    });
  });
  describe('Unidades con Yardas', () => {
    it('Yardas a Centímetro', () => {
      let convertirYardas = new ImperialLength(8, "yardas");
      let convertir = new MetricLengthAdapter(convertirYardas);
      expect(convertir.pies("centimetros")).to.be.eql(243.84);
    });
    it('Yardas a Metros', () => {
      let convertirYardas = new ImperialLength(8, "yardas");
      let convertir = new MetricLengthAdapter(convertirYardas);
      expect(convertir.pies("metros")).to.be.eql(2.4384);
    });
    it('Yardas a Kilometros', () => {
      let convertirYardas = new ImperialLength(8, "yardas");
      let convertir = new MetricLengthAdapter(convertirYardas);
      expect(convertir.pies("kilometros")).to.be.eql(0.0024384);
    });
    it('Yardas a Metrica inválida', () => {
      let convertirYardas = new ImperialLength(8, "yardas");
      let convertir = new MetricLengthAdapter(convertirYardas);
      expect(convertir.pulgadas("a")).to.be.eql("Metrica invalida");
    });
  });
  describe('Unidades con Millas', () => {
    it('Millas a Centimetros', () => {
      let convertirMillas = new ImperialLength(8, "millas");
      let convertir = new MetricLengthAdapter(convertirMillas);
      expect(convertir.millas("centimetros")).to.be.eql(1287475.2);
    });
    it('Millas a Metros', () => {
      let convertirMillas = new ImperialLength(8, "millas");
      let convertir = new MetricLengthAdapter(convertirMillas);
      expect(convertir.millas("metros")).to.be.eql(12874.752);
    });
    it('Millas a Kilometros', () => {
      let convertirMillas = new ImperialLength(8, "millas");
      let convertir = new MetricLengthAdapter(convertirMillas);
      expect(convertir.millas("kilometros")).to.be.eql(12.874752);
    });
    it('Millas a Metrica inválida', () => {
      let convertirMillas = new ImperialLength(8, "millas");
      let convertir = new MetricLengthAdapter(convertirMillas);
      expect(convertir.pulgadas("a")).to.be.eql("Metrica invalida");
    });
  });
});