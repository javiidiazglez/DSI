import {Fighter, Stats} from './fighter';
/**
 * Clase Pokemon
 */
export class Pokemon extends Fighter {
  private universo: string = 'Pokemon';
  /**
   * Constructor de la clase Pokemon
   * @param nombre Nombre del pokemon
   * @param tipo Tipo del pokemon
   * @param peso Peso del pokemon
   * @param altura Altura del pokemon
   * @param frase Frase del Pokemon
   * @param estadisticas Estadisticas del pokemon
   */
  constructor(
    nombre: string,
    private readonly tipo: string,
    peso: number,
    altura: number, 
    frase: string, 
    estadisticas: Stats) {
    super(nombre, peso, altura, frase, estadisticas);
  }
  /**
   * Universo del luchador en Pokemon
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
  /**
   * Tipo del pokemon
   * @returns tipo
   */
  getTipo() {
    return this.tipo;
  }
}