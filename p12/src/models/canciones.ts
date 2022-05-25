import {Document, Schema, model} from 'mongoose';
import validator from 'validator';

/* Definición de la interfaz del modelo Cancion. */
interface CancionInterface extends Document {
  nombre: string,
  autor: string,
  duracion: number,
  generos: string[],
  single: boolean,
  reproducciones: number
}

/* Definición del esquema para el modelo Cancion. */
const CancionSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z0-9]/)) {
        throw new Error('El nombre de una canción debe comenzar por mayúscula.');
      } else if (!validator.isAlphanumeric(value)) {
        throw new Error('El nombre de una canción solo puede contener caracteres alfanuméricos');
      }
    },
  },
  autor: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z0-9]/)) {
        throw new Error('El autor de una canción debe comenzar por mayúscula.');
      } else if (!validator.isAlphanumeric(value)) {
        throw new Error('El autor de una canción solo puede contener caracteres alfanuméricos');
      }
    },
  },
  duracion: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('La duración no pueden ser negativas');
      }
    },
  },
  generos: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((element) => {
        if (!element.match(/^[A-Z]/)) {
          throw new Error('El género de una música debe comenzar por mayúscula.');
        } else if (!validator.isAlphanumeric(element)) {
          throw new Error('El género de una música solo puede contener caracteres alfanuméricos');
        }
      });
    },
  },
  single: {
    type: Boolean,
    required: true,
    validate: (value: number) => {
      if ( typeof value !== 'boolean' ) {
        throw new Error('Single debe devolver true o false');
      }
    },
  },
  reproducciones: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Las reproducciones no pueden ser negativas');
      }
    },
  },
});

/* Exportando el modelo Canción. */
export const Cancion = model<CancionInterface>('Cancion', CancionSchema);
