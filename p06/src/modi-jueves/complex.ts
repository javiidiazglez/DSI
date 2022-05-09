
import { Arithmeticable } from './interfaz';

/**
 * ComplexCollection class that allow us to create numerador collection of strings
 */
export class Complex implements Arithmeticable<Complex> {
  constructor(
    public numerador: number,
    public denominador: number) { }
    /**
     * Add
     * @param num clase Complex
     * @returns aux
     */
  add(num: Complex): Complex {
    const aux = new Complex(num.numerador + this.numerador, num.denominador + this.denominador);
    return aux;
  }
  /**
   * sub
   * @param num clase Complex
   * @returns aux
   */
  sub(num: Complex): Complex {
    const aux = new Complex(this.numerador - num.numerador, this.denominador - num.denominador);
    return aux;
  }
  /**
   * multiply
   * @param num clase Complex
   * @returns aux
   */
  multiply(num: Complex): Complex {
    const aux = new Complex((num.numerador * this.numerador) - (num.denominador * this.denominador), (this.numerador * num.denominador) + (this.denominador * num.numerador));
    return aux;
  }
  /**
   * divide
   * @param num clase Complex
   * @returns aux
   */
  divide(num: Complex): Complex {
    const aux = new Complex(((num.numerador * this.numerador) + (num.denominador * this.denominador)) / ((num.numerador ** 2) + (num.denominador ** 2)), ((this.denominador * num.numerador) - (this.numerador * num.denominador)) / ((num.numerador ** 2) + (num.denominador ** 2)));
    return aux;
  }
}