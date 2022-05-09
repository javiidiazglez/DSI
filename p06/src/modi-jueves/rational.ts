import { Arithmeticable } from './interfaz';

/**
 * ComplexCollection class that allow us to create numerador collection of strings
 */
export class Rational implements Arithmeticable<Rational> {
  constructor(
    public numerador: number,
    public denominador: number) { }
  /**
   * Add
   * @param num clase Rational
   * @returns aux
   */
  add(num: Rational): Rational {
    const aux = new Rational((this.numerador * num.denominador) + (this.denominador * num.numerador), this.denominador * num.denominador);
    return aux;
  }
  /**
   * Sub
   * @param num clase Rational
   * @returns aux
   */
  sub(num: Rational): Rational {
    const aux = new Rational((this.numerador * num.denominador) - (this.denominador * num.numerador), this.denominador * num.denominador);
    return aux;
  }
  /**
   * Multiply
   * @param num clase Rational
   * @returns aux
   */
  multiply(num: Rational): Rational {
    const aux = new Rational(num.numerador * this.numerador, this.denominador * num.denominador);
    return aux;
  }
  /**
   * Divide
   * @param num clase Rational
   * @returns aux
   */
  divide(num: Rational): Rational {
    const aux = new Rational(this.numerador * num.denominador, this.denominador * num.numerador);
    return aux;
  }
}
