/* eslint-disable new-cap */
import {MethodClases} from '../MethodClases/methodclases';

/**
 * Clase que defina la reduccion de los elementos numericos del array map mediante la suma
 */
export class FilterMapAddReduce extends MethodClases {
    /**
   * Constructor de la clase AddMap
   * @param list Lista de numeros a reducir
   */
  constructor(list: number[]) {
    super(list);
  }
   /**
   * Clase Reduce generico
   * @returns resultado reduce
   */
  public Reduce(): number {
    let result: number = 0;
    this.lista.forEach((number) => {
      result += number;
    });
    return result;
  }
  /**
   * Clase publica de la suma
   * @param numero lista de numeros a añadir
   * @returns resultado de la suma
   */
  public Add(numero: number): Array<number> {
    let resultado: number[] = [];
    this.lista.forEach((valor) => {
      resultado.push(valor + numero);
    });
    return resultado;
  }
  /**
   * Clase para filtrar la funcion de la suma
   * @param filterFunction devuelve la funcion, el mapa, la suma
   * @param mapFunction devuelve el mapa
   * @param addNumber lista de numeros
   * @returns funcion Reduce
   */
  public filterMapAddReduce(filterFunction: Function, mapFunction: Function, addNumber: number): number {
    this.setList(this.Filter(filterFunction));
    this.setList(this.Map(mapFunction));
    this.setList(this.Add(addNumber));
    return this.Reduce();
  }
}