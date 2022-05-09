import {Fighter, Stats} from './fighter';
/**
 * Clase Dragon Ball
 */
export class DragonBall extends Fighter {
  private universo: string = 'Dragon Ball';
  /**
   * Constructor de la clase Dragon Ball
   * @param nombre Nombre del personaje de Dragon Ball
   * @param peso Peso del personaje de Dragon Ball
   * @param altura Altura del personaje de  Dragon Ball
   * @param frase Frase personaje de del Dragon Ball
   * @param estadisticas Estadisticas personaje de Dragon Ball
   */
  constructor(
    nombre: string,
    peso: number,
    altura: number,
    frase: string,
    estadisticas: Stats) {
    super(nombre, peso, altura, frase, estadisticas);
  }
  /**
   * Universo del luchador en Dragon Ball
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
}