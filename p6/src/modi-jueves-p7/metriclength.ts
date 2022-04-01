export class MetricLength {

  cantidad: number;

  constructor(cantidad_: number) {
    this.cantidad = cantidad_
  }

  centimetro(tipo: string): number {
    switch (tipo) {
      case 'metro': {
        return this.cantidad * 0.01;
      }
      case 'kilo': {
        return this.cantidad * 0.00001;
      }
    }
    return this.cantidad;
  }

  metros(tipo: string) {
    switch (tipo) {
      case 'centimetro': {
        return this.cantidad * 100;
      }
      case 'kilo': {
        return this.cantidad * 0.001;
      }
    }
    return this.cantidad;
  }

  kilometros(tipo: string) {
    switch (tipo) {
      case 'centrimetro': {
        return this.cantidad * 100000;
      }
      case 'metro': {
        return this.cantidad * 1000;
      }
    }
    return this.cantidad;
  }
}