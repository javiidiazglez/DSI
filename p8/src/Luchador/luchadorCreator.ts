export {LuchadorCreator};
import {Luchador} from './luchador';

/**
 * Clase abstracta creadora de luchadores
 */
abstract class LuchadorCreator {
  /**
   * Factory Method a implementar por las clases hijas
   */
  public abstract factoryMethod(): Luchador;

  /**
   * Método Logic para devolver la información formateada
   * @returns cadena con la informacion del luchador
   */
  public logic(): string {
    const luchador = this.factoryMethod();
    return `El luchador ${luchador.getNombre()} ` +
           `tiene ${luchador.getAtaque()} de ataque y ` +
           `${luchador.getDefensa()} de defensa. ` +
           `Posee ${luchador.getVida()} de vida y ` +
           `${luchador.getVelocidad()} puntos de velocidad.`;
  }
}