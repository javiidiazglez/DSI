import 'mocha';
import {expect} from 'chai';
import {ArithmeticableCollection} from '../src/modi-jueves/arithmeticableCollection';
import {Rational} from '../src/modi-jueves/rational';
import {Complex} from '../src/modi-jueves/complex';

describe('Modificación Jueves P6:', () => {
  const complejo1 = new Complex(1, 2);
  const complejo2 = new Complex(2, 3);

  const rational1 = new Rational(2, 3);
  const rational2 = new Rational(4, 5);
  const rational3 = new Rational(3, 7);

  const collection = new ArithmeticableCollection([complejo1, rational1, rational3]);

  describe('Clase Arithmeticable collection:', () => {
    it('Pruebas de los metodos:', () => {
      expect(collection.addArithmeticable(rational2)).to.be.eql(undefined);
      expect(collection.getNumberOfArithmeticables()).to.be.eql(4);
      //expect(collection.getArithmeticable()).to.be.eql(undefined);
    });
  });
  
  describe('Clase Complejo:', () => {
    it('¿Existe clase complejos?', () => {
      expect(complejo1.numerador).to.be.eql(1);
      expect(complejo1.denominador).to.be.eql(2);
      expect(complejo2.numerador).to.be.eql(2);
      expect(complejo2.denominador).to.be.eql(3);
    });
    it('Métodos Add, Sub, Multiply, Divide', () => {
      expect(complejo1.add(complejo2)).not.to.be.eql(undefined);
      expect(complejo1.sub(complejo2)).not.to.be.eql(undefined);
      expect(complejo1.multiply(complejo2)).not.to.be.eql(undefined);
      expect(complejo1.divide(complejo2)).not.to.be.eql(undefined);
      expect(complejo2.add(complejo2)).not.to.be.eql(undefined);
      expect(complejo2.sub(complejo2)).not.to.be.eql(undefined);
      expect(complejo2.multiply(complejo2)).not.to.be.eql(undefined);
      expect(complejo2.divide(complejo2)).not.to.be.eql(undefined);
    });
  });
  describe('Clase Rational', () => {
    it('¿Existe clase rational?', () => {
      expect(rational1.numerador).to.be.eql(2);
      expect(rational1.denominador).to.be.eql(3);
      expect(rational2.numerador).to.be.eql(4);
      expect(rational2.denominador).to.be.eql(5);
      expect(rational3.numerador).to.be.eql(3);
      expect(rational3.denominador).to.be.eql(7);
    });
    it('Métodos Add, Sub, Multiply, Divide', () => {
      expect(rational1.add(rational2)).not.to.be.eql(undefined);
      expect(rational1.sub(rational2)).not.to.be.eql(undefined);
      expect(rational1.multiply(rational2)).not.to.be.eql(undefined);
      expect(rational1.divide(rational2)).not.to.be.eql(undefined);
    });
  });
});