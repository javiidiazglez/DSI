/**
 * Tipo de dato que contiene las estadisticas del luchador
 */
export type Stats = {
  HPMax: number,
  ataque: number,
  defensa: number,
  velocidad: number
}

/**
 * Clase abstracta para defensa los luchadores
 */
export abstract class Fighter {
  private HPCombate: number = 0;

  /**
   * Constructor de la clase Fighter
   * @param nombre Nombre del luchador
   * @param peso Peso del luchador
   * @param altura Altura del luchador
   * @param frase Frase del luchador
   * @param estadisticas Arrays de estadisticas (HPMax, ataque, defensa y velocidad)
   */

  constructor(
    private readonly nombre: string,
    private readonly peso: number,
    private readonly altura: number,
    private readonly frase: string,
    private readonly estadisticas: Stats) {
    this.HPCombate = estadisticas.HPMax;
  }
  /**
   * Daño recibido lo resta a la salud actual
   * @param daño Daño
   */
  restarHP(daño: number) {
    this.HPCombate -= daño;
  }
  /**
   * Getter para nombre
   * @returns nombre
   */
  getNombre() {
    return this.nombre;
  }
  /**
   * Getter para peso
   * @returns peso
   */
  getPeso() {
    return this.peso;
  }
  /**
   * Getter para altura
   * @returns altura
   */
  getAltura() {
    return this.altura;
  }
  /**
   * Getter HP del combate
   * @returns HPCombate
   */
  getHPCombate() {
    return this.HPCombate;
  }
  /**
   * Getter Array de estadisticas
   * @returns estadisticas
   */
  getStats() {
    return this.estadisticas;
  }
  /**
   * Getter frase del luchador
   * @returns frase
   */
  getFrase() {
    return this.frase;
  }
  /**
   * Getter Uuniverso del luchador
   */
  abstract getUniverso(): string;
}