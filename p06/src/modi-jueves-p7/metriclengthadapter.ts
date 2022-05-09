import {ImperialLength} from "./imperiallength";

export class MetricLengthAdapter extends ImperialLength {

  convertir: ImperialLength;

  constructor(cantidad_: ImperialLength) {
    super(cantidad_.cantidad, cantidad_.tipo);
    this.convertir = cantidad_;
  }

  pulgadas(tipo: string): number | string {
    switch (tipo) {
      case 'centimetros': {
        return this.convertir.cantidad * 2.54;
      }
      case 'metros': {
        return this.convertir.cantidad * 0.0254;
      }
      case 'kilometros': {
        return this.convertir.cantidad * 0.0000254;
      }
    }
    return "Metrica invalida";
  }

  pies(tipo: string): number | string {
    switch (tipo) {
      case 'centimetros': {
        return this.convertir.cantidad * 30.48;
      }
      case 'metros': {
        return this.convertir.cantidad * 0.3048;
      }
      case 'kilometros': {
        return this.convertir.cantidad * 0.0003048;
      }
    }
    return "Metrica invalida";
  }

  yardas(tipo: string): number | string {
    switch (tipo) {
      case 'centimetros': {
        return this.convertir.cantidad * 91.44;
      }
      case 'metros': {
        return this.convertir.cantidad * 0.9144;
      }
      case 'kilometros': {
        return this.convertir.cantidad * 0.0009144;
      }
    }
    return "Metrica invalida";
  }

  millas(tipo: string): number | string {
    switch (tipo) {
      case 'centimetros': {
        return this.convertir.cantidad * 160934.4;
      }
      case 'metros': {
        return this.convertir.cantidad * 1609.344;
      }
      case 'kilometros': {
        return this.convertir.cantidad * 1.609344;
      }
    }
    return "Metrica invalida";
  }
}