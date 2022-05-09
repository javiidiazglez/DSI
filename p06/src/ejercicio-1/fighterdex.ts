import {Fighter} from './fighter';
/**
 * Clase base de datos con luchadores
 */
export class Fighterdex {
  /**
   * Constructor de la clase
   * @param fighterBase Array luchadores
   */
  constructor(
    private fighterBase: Fighter[]) {};

  /**
   * Aañadir luchadores
   * @param luchador Luchador a añadir
   */
  addFighter(luchador: Fighter) {
    this.fighterBase.push(luchador);
  }
  /**
   * Eliminar luchador
   * @param luchador Luchador a eliminar
   */
  deleteFighter(luchador: Fighter) {
    let pos: number = -1;
    this.fighterBase.forEach((iterador) => {
      if (iterador === luchador) {
        pos = this.fighterBase.indexOf(iterador);
      }
    });
    return (pos == -1) ? 'No existe' : this.fighterBase.splice(pos, 1);
  };
  /**
   * Tamaño de la base de datos
   * @returns size fighterBase
   */
  fighterdexSize(): number {
    return this.fighterBase.length;
  }
  /**
   * Buscar un luchador
   * @param luchador Luchador a buscar
   * @returns Posicion en la fighterBase.
   */
  buscarLuchador(luchador: Fighter) {
    let pos: number = -1;
    this.fighterBase.forEach((iterador) => {
      if (iterador === luchador) {
        pos = this.fighterBase.indexOf(iterador);
      }
    });
    if (pos == -1) {
      return null;
    } else {
      return this.fighterBase[pos];
    }
  }
};