import {BasicStreamableCollection} from './basicStreamableCollection';
/**
 * Tipo de dato que contiene los datos de un documental
 */
export type documentales = {
  titulo: string;
  año: number;
  genero: string;
  duracion: number;
}
/**
 * Clase para representar a las documentales
 * */
export class Documentales extends BasicStreamableCollection<documentales> {
  /**
   * Constructor de la clase que representa documentales
   * @param documentales Lista de documentales
   */
  constructor(private documentales: documentales[]) {
    super(documentales);
  }
  /**
   * Array de documentales
   * @returns Array de documentales
   */
  getElementos() {
    return this.documentales;
  }
  /**
   * Funcion para buscar un documental con parametros
   * @param parametro Parametro a buscar: titulo, año, genero y duracion
   * @param valor Valor de ese parametro
   * @returns Resultado del array con las documentales que coinciden
   */
  buscar(parametro: string, valor: string): documentales[] {
    let resultado: documentales[] = [];
    switch (parametro) {
      case ('titulo'):
        resultado = this.getElementos().filter((aux) => (aux.titulo == valor));
        break;
      case ('año'):
        resultado = this.getElementos().filter((aux) => (aux.año == +valor));
        break;
      case ('genero'):
        resultado = this.getElementos().filter((aux) => (aux.genero == valor));
        break;
      case ('duracion'):
        resultado = this.getElementos().filter((aux) => (aux.duracion == +valor));
        break;
      default:
        console.log('No existe');
    }
    return resultado;
  }
}