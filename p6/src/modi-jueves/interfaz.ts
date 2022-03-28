/**
 * Interfaz a implementar por nuestras clases
 */
 export interface Arithmeticable<T> {
  add(num: T): T;
  sub(num: T): T;
  multiply(num: T): T;
  divide(num: T): T;
}