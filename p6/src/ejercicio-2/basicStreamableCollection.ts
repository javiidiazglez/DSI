import {StremeableSearch} from './stremeable';
/**
 * Clase que define una coleccion stremeable y con posibilidad de busqueda
 */
export abstract class BasicStreamableCollection<T> implements StremeableSearch<T> {
  /**
   * Constructor de la clase
   * @param lista Lista que compone la coleccion
   */
  constructor(protected lista: T[]) {};
  /**
   * Añadir elemento a la coleccion
   * @param elementoAñadir Elemento a añadir
   */
  addElement(elementoAñadir: T) {
    this.lista.push(elementoAñadir);
  }
  /**
   * Devolver la lista de la coleccion
   */
  abstract getElementos(): T[];

  /**
   * Buscar los elementos de la coleccion con el valor buscado dentro de una categoria
   * @param parametro Categoria a buscar
   * @param valor Valor a buscar
   */
  abstract buscar(parametro: string, valor: string): T[];
}