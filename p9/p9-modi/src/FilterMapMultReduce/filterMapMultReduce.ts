/* eslint-disable new-cap */
import {MethodClases} from '../MethodClases/methodclases';


export class FilterMapMultReduce extends MethodClases {
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
   * Clase publica de la multiplicacion
   * @param numero lista de numeros a añadir
   * @returns resultado de la multiplicacion
   */
  public Mult(numero: number): Array<number> {
    let resultado: number[] = [];
    this.lista.forEach((valor) => {
      resultado.push(valor * numero);
    });
    return resultado;
  }
    /**
   * Clase para filtrar la funcion de la multiplicacion
   * @param filterFunction devuelve la funcion, el mapa, la multiplicacion
   * @param mapFunction devuelve el mapa
   * @param multNumber lista de numeros
   * @returns funcion Reduce
   */
  public filterMapMultReduce(filterFunction: Function, mapFunction: Function, multNumber: number): number {
    this.setList(this.Filter(filterFunction));
    this.setList(this.Map(mapFunction));
    this.setList(this.Mult(multNumber));
    return this.Reduce();
  }
}