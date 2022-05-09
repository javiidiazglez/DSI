/* eslint-disable new-cap */
import {MethodClases} from '../MethodClases/methodclases';


export class FilterMapDivReduce extends MethodClases {
  constructor(list: number[]) {
    super(list);
  }
   /**
   * Clase Reduce generico
   * @returns resultado reduce
   */
  public Reduce(): number {
    let resultado: number = 0;
    this.lista.forEach((number) => {
      resultado += number;
    });
    return resultado;
  }
    /**
   * Clase publica de la division
   * @param numero lista de numeros a añadir
   * @returns resultado de la divisions
   */
  public Div(numero: number): Array<number> {
    let resultado: number[] = [];
    this.lista.forEach((valor) => {
      resultado.push(valor / numero);
    });
    return resultado;
  }
    /**
   * Clase para filtrar la funcion de la division
   * @param filterFunction devuelve la funcion, el mapa, la division
   * @param mapFunction devuelve el mapa
   * @param divNumber lista de numeros
   * @returns funcion Reduce
   */
  public filterMapDivReduce(filterFunction: Function, mapFunction: Function, divNumber: number): number {
    this.setList(this.Filter(filterFunction));
    this.setList(this.Map(mapFunction));
    this.setList(this.Div(divNumber));
    return this.Reduce();
  }
}