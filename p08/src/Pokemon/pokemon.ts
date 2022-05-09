export {Pokemon};
export {Tipos};
import {Luchador} from '../Luchador/luchador';

/**
 * Tipo Enum que representa los tipos de los Pokemon
 */
enum Tipos {fuego, agua, hierba, electrico};

/**
 * Clase que representa a un Pokemon
 */
class Pokemon implements Luchador {
  /**
   * Clase Pokemon
   * @param nombre Nombre del Pokemon
   * @param tipo Tipo del Pokemon
   * @param ataque Ataque del Pokemon
   * @param defensa Defensa del Pokemon
   * @param velocidad Velocidad del Pokemon
   * @param vida vida del Pokemon
   */
  constructor(private nombre: string, private tipo: Tipos,
              private ataque: number, private defensa: number,
              private velocidad: number, private vida: number) {
  }

  getNombre() : string {
    return this.nombre;
  }
  getTipo() : Tipos {
    return this.tipo;
  }
  getAtaque() : number {
    return this.ataque;
  }
  getDefensa() : number {
    return this.defensa;
  }
  getVelocidad() : number {
    return this.velocidad;
  }
  getVida() : number {
    return this.vida;
  }
}