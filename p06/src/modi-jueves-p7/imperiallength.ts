export class ImperialLength {

  cantidad: number;
  tipo: string;

  constructor(cantidad_: number, tipo: string) {
    this.cantidad = cantidad_;
    this.tipo = tipo;
  }

  pulgadas(tipo: string): number | string {
    switch (tipo) {
      case 'pies': {
        return this.cantidad * 0.083;
      }
      case 'yardas': {
        return this.cantidad * 0.028;
      }
      case 'millas': {
        return this.cantidad * 0.000016;
      }
    }
    return this.cantidad;
  }

  pies(tipo: string): number | string {
    switch (tipo) {
      case 'pulgadas': {
        return this.cantidad * 12;
      }
      case 'yardas': {
        return this.cantidad * 0.33;
      }
      case 'millas': {
        return this.cantidad * 0.00019;
      }
    }
    return this.cantidad;
  }

  yardas(tipo: string): number | string {
    switch (tipo) {
      case 'pulgadas': {
        return this.cantidad * 36;
      }
      case 'pies': {
        return this.cantidad * 3;
      }
      case 'millas': {
        return this.cantidad * 0.00057;
      }
    }
    return this.cantidad;
  }

  millas(tipo: string): number | string {
    switch (tipo) {
      case 'pulgadas': {
        return this.cantidad * 63360;
      }
      case 'pies': {
        return this.cantidad * 5280;
      }
      case 'yardas': {
        return this.cantidad * 1760;
      }
    }
    return this.cantidad;
  }
}