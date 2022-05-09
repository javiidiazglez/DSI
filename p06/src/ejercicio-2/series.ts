import {BasicStreamableCollection} from './basicStreamableCollection';
/**
 * Tipo de dato que contiene los datos de una serie
 */
export type series = {
  titulo: string;
  año: number;
  temporadas: number;
  genero: string;
  clasificacion: number;
}
/**
 * Clase para representar a las series
 * */
export class Series extends BasicStreamableCollection<series> {
  /**
   * Constructor de la clase Series
   * @param series Lista de series
   */
  constructor(private series: series[]) {
    super(series);
  }
  /**
   * Array de series
   * @returns Array de series
   */
  getElementos() {
    return this.series;
  }
  /**
   * Funcion para buscar una serie con parametros
   * @param parametro Parametro a buscar: titulo, año, temporadas, genero y clasificacion
   * @param valor Valor del parametro
   * @returns Resultado del array con las series que coinciden
   */
  buscar(parametro: string, valor: string): series[] {
    let resultado: series[] = [];
    switch (parametro) {
      case ('titulo'):
        resultado = this.getElementos().filter((aux) => (aux.titulo == valor));
        break;
      case ('año'):
        resultado = this.getElementos().filter((aux) => (aux.año == +valor));
        break;
      case ('temporadas'):
        resultado = this.getElementos().filter((aux) => (aux.temporadas == +valor));
        break;
      case ('genero'):
        resultado = this.getElementos().filter((aux) => (aux.genero == valor));
        break;
      case ('clasificacion'):
        resultado = this.getElementos().filter((aux) => (aux.clasificacion == +valor));
        break;
      default:
        console.log('Lo sentimos, no hemos encontrado nada');
    }
    return resultado;
  }
}