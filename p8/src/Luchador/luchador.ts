export {Luchador};

/**
 * Interfaz luchador
 */
interface Luchador {
  getNombre(): string;
  getAtaque(): number;
  getDefensa(): number;
  getVelocidad(): number;
  getVida(): number;
}