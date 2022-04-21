
/**
 * Clase que define el metodo de la clase añadiendo constructor y el setter
 */
export abstract class MethodClases {
  constructor(protected lista: Array<any>) {
    this.lista = lista;
  }
  protected setList(list: Array<any>) {
    this.lista = list;
  }
 /**
   * Operacion Reduce por las subclases hija
   */
  protected abstract Reduce(): void;

   /**
   * Clase Filter generico
   * @returns resultado filter
   */
  public Filter(predicate: Function): Array<any> {
    let resultado: any[] = [];
    this.lista.forEach((item) => {
      if (predicate(item)) {
        resultado.push(item);
      }
    });
    return resultado;
  }
  /**
   * Clase Mapa
   * @param predicado devuelve el predicado con su array
   * @returns resultado del mapa (array)
   */
  public Map(predicado: Function): Array<any> {
    let resultado: any[] = [];
    this.lista.forEach((item) => {
      resultado.push(predicado(item));
    });
    return resultado;
  }
}