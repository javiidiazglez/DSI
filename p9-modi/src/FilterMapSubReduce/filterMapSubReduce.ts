/* eslint-disable new-cap */
import {MethodClases} from '../MethodClases/methodclases';


export class FilterMapSubReduce extends MethodClases {
  constructor(list: number[]) {
    super(list);
  }
  /**
   * Clase Reduce generico
   * @returns resultado reduce
   */
  public Reduce(): number {
    let resultado:number = 0;
    this.lista.forEach((number) => {
      resultado += number;
    });
    return resultado;
  }
    /**
   * Clase publica de la resta
   * @param numero lista de numeros a añadir
   * @returns resultado de la resta
   */
  public Sub(numero: number): Array<number> {
    let resultado: number[] = [];
    this.lista.forEach((valor) => {
      resultado.push(valor - numero);
    });
    return resultado;
  }
    /**
   * Clase para filtrar la funcion de la resta
   * @param filterFunction devuelve la funcion, el mapa, la resta
   * @param mapFunction devuelve el mapa
   * @param subNumber lista de numeros
   * @returns funcion Reduce
   */
  public filterMapSubReduce(filterFunction: Function, mapFunction: Function, subNumber: number): number {
    this.setList(this.Filter(filterFunction));
    this.setList(this.Map(mapFunction));
    this.setList(this.Sub(subNumber));
    return this.Reduce();
  }
}