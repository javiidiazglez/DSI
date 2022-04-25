import {MethodClases} from '../MethodClases/methodclases';

/**
 * Clase que define el numero de clases
 */
export class NumerosClases extends MethodClases {
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
}