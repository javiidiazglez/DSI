/* eslint-disable max-len */
export class Pokemon {
  private nombre: string;
  private peso: number;
  private altura: number;
  private tipo: string;
  private estadistica = new Array(4);
  public hpCombate: number = 0;

  constructor(
      nombreEntrada: string,
      pesoEntrada: number,
      alturaEntrada: number,
      tipoEntrada: string,
      statsEntrada: number[]) {
    this.nombre = nombreEntrada;
    this.peso = pesoEntrada;
    this.altura = alturaEntrada;
    this.tipo = tipoEntrada;
    this.estadistica = statsEntrada;
    this.hpCombate = this.estadistica[3];
  }

  getNombre() {
    return this.nombre;
  }
  getPeso() {
    return this.peso;
  }
  getAltura() {
    return this.altura;
  }
  getTipo() {
    return this.tipo;
  }
  getAtaque() {
    return this.estadistica[0];
  }
  getDefensa() {
    return this.estadistica[1];
  }
  getMaxHP() {
    return this.estadistica[3];
  }

  showData() {
    console.log("Pokemon [" + this.getNombre() + "] Tipo: [" + this.getTipo() + "] Ataque: (" + this.getAtaque() + ") Defensa: (" +
    this.getDefensa() + ") HP: (" + this.getMaxHP() + ")");
  }
};