import {Fighter, Stats} from './fighter';
/**
 * Clase Marvel
 */
export class Marvel extends Fighter {
  private universo: string = 'Marvel';
  /**
   * Constructor de la clase Marvel
   * @param nombre Nombre del personaje de Marvel
   * @param peso Peso del personaje de Marvel
   * @param altura Altura del personaje de Marvel
   * @param frase Frase del personaje de Marvel
   * @param estadisticas Estadisticas del personaje de Marvel
   */
  constructor(nombre: string,
    peso: number,
    altura: number,
    frase: string,
    estadisticas: Stats) {
    super(nombre, peso, altura, frase, estadisticas);
  }
  /**
   * Universo del luchador en Marvel
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
}