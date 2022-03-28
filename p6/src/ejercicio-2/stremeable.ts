/**
 * Interfaz StremeableSearch extiende Stremeable para cumplir el principio Interface segregation de SOLID
 */
export interface StremeableSearch<T> extends Stremeable<T> {
  buscar(parametro: string, valor: string): T[];
}

/**
 * Interfaz Stremeable
 */
export interface Stremeable<T> {
  addElement(index: T): void;
  getElementos(): T[];
}