import {Fighter} from './fighter';
import {Pokemon} from './pokemon';

/**
 * Clase combate. 2 luchadores
 */
export class Combat {
  private datoAtaque: number[] = new Array(2);

  /**
   * Contructor de la clase Combate. 
   * @param fighter1 Fighter 1
   * @param fighter2 Fighter 2
   */
  constructor(
    public readonly fighter1: Fighter,
    public readonly fighter2: Fighter) { }

  /**
   * Combate entre los luchadores
  */
  combatir() {
    this.calcularAtaque();
    let iterator: number = 1;

    console.log('\nCombate entre: (' + this.fighter1.getNombre() + ') vs (' + this.fighter2.getNombre() + ")");
    
    while ((this.fighter1.getHPCombate() > 0) && (this.fighter2.getHPCombate() > 0)) {
      console.log("\nRonda: " + iterator);
      if ((iterator % 2) == 0) {
        console.log("[" + this.fighter2.getNombre() + '] dice: "' + this.fighter2.getFrase() + '"');
        console.log("[" + this.fighter2.getNombre() + "] causa -" + this.datoAtaque[1] + " de daño a -> [" + this.fighter1.getNombre() + "]");
        this.fighter1.restarHP(this.datoAtaque[1]);
      } else {
        console.log("[" + this.fighter1.getNombre() + '] dice: "' + this.fighter1.getFrase() + '"');
        console.log("[" + this.fighter1.getNombre() + "] causa -" + this.datoAtaque[0] + " de daño a -> [" + this.fighter2.getNombre() + "]");
        this.fighter2.restarHP(this.datoAtaque[0]);
      }
      iterator++;
      console.log("[" + this.fighter1.getNombre() + "] -> Vida: (" +(this.fighter1.getHPCombate()).toFixed(4) + ") vs [" + this.fighter2.getNombre() + 
      "] -> Vida: (" + (this.fighter2.getHPCombate()).toFixed(4)  + ")");
    }
    return (this.fighter1.getHPCombate() <= 0) ? (this.fighter2.getNombre() + ' gana.') : (this.fighter1.getNombre() + ' gana.')
  }
  /**
   * Calcula el daño entre luchador 1 y luchador 2.
   */
  calcularAtaque() {
    this.datoAtaque[0] = this.calculoCombate(this.fighter1, this.fighter2);
    this.datoAtaque[1] = this.calculoCombate(this.fighter2, this.fighter1);
  }

  /**
   * Calcular el daño del ataque del pokemon 1 al pokemon 2 con sus ataque, defensa y efectividad
   * @param luchador1 pokemon 1
   * @param luchador2 pokemon 2
   * @returns Daño del pokemon 1 al pokemon 2
   */
  calculoCombate(luchador1: Fighter, luchador2: Fighter): number {
    let universo1: string = luchador1.getUniverso();
    let universo2: string = luchador2.getUniverso();
    let ataque: number = luchador1.getStats().ataque;
    let defensa: number = luchador2.getStats().defensa;
    let efectividad: number = 0; 
    if (universo1 === universo2) {
      if ((luchador1 instanceof Pokemon) && (luchador2 instanceof Pokemon)) {
        let tipo1 = luchador1.getTipo();
        let tipo2 = luchador2.getTipo();
        if (tipo1 === tipo2) {
          efectividad = 0.5;
        } else if (tipo1 === 'Fuego') {
          switch (tipo2) {
            case 'Hierba':
              efectividad = 2;
              break;
            case 'Electrico':
              efectividad = 1;
              break;
            case 'Agua':
              efectividad = 0.5;
              break;
          }
        } else if (tipo1 === 'Agua') {
          switch (tipo2) {
            case ('Hierba'):
            case ('Electrico'):
              efectividad = 0.5;
              break;
            case 'Fuego':
              efectividad = 2;
              break;
          }
        } else if (tipo1 === 'Electrico') {
          switch (tipo2) {
            case ('Fuego'):
            case ('Hierba)'):
              efectividad = 1;
              break;
            case 'Agua':
              efectividad = 2;
              break;
          }
        } else {
          switch (tipo2) {
            case 'Electrico':
              efectividad = 1;
              break;
            case 'Agua':
              efectividad = 2;
              break;
            case 'Fuego':
              efectividad = 0.5;
              break;
          }
        }
      } else {
        efectividad = 1;
      }
    } else {
      if (universo1 == 'Pokemon') {
        switch (universo2) {
          case 'Dragon Ball':
            efectividad = 0.5;
            break;
          case 'Star Wars':
            efectividad = 1.5;
            break;
          case 'Marvel':
            efectividad = 1;
            break;
        }
      } else if (universo1 == 'Dragon Ball') {
        efectividad = 0.5;
      } else if (universo1 == 'Star Wars') {
        switch (universo2) {
          case 'Dragon Ball':
            efectividad = 0.5;
            break;
          case 'Pokemon':
            efectividad = 1;
            break;
          case 'Marvel':
            efectividad = 1;
            break;
        }
      } else if (universo1 == 'Marvel') {
        switch (universo2) {
          case 'Dragon Ball':
            efectividad = 0.5;
            break;
          case 'Pokemon':
            efectividad = 1;
            break;
          case 'Star Wars':
            efectividad = 1;
            break;
        }
      }
    }
    let daño: number = 50 * (ataque / defensa) * efectividad;
    return parseFloat(daño.toFixed(4));
  }
}