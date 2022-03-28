import {BasicStreamableCollection} from './basicStreamableCollection';
/**
 * Tipo de dato que contiene los datos de una pelicula
 */
export type peliculas = {
  titulo: string;
  año: number;
  genero: string;
  clasificacion: number;
}
/**
 * Clase para representar a las peliculas
 * */
export class Peliculas extends BasicStreamableCollection<peliculas> {
  /**
   * Constructor de la clase que representa peliculas
   * @param peliculas Lista de peliculas
   */
  constructor(private peliculas: peliculas[]) {
    super(peliculas);
  }
  /**
   * Getter para el array de peliculas
   * @returns Array de peliculas
   */
  getElementos() {
    return this.peliculas;
  }
  /**
   * Funcion para buscar una pelicula con parametros
   * @param parametro Parametro a buscar: titulo, año y clasificacion
   * @param valor Valor de ese parametro
   * @returns Resultado del array con las peliculas que coinciden
   */
  buscar(parametro: string, valor: string): peliculas[] {
    let resultado: peliculas[] = [];
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
      case ('clasificacion'):
        resultado = this.getElementos().filter((aux) => (aux.clasificacion == +valor));
        break;
      default:
        console.log('No existe');
    }
    return resultado;
  }
}