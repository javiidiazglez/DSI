import {Document, Schema, model} from 'mongoose';
import validator from 'validator';

/* Definición de la interfaz del modelo PlayList. */
interface PlayListInterface extends Document {
  nombre: string,
  generos: string[],
  canciones: string[],
  duracion: number
}

/* Definición del esquema para el modelo PlayList. */
const PlayListSchema = new Schema({
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
  generos: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((element) => {
        if (!element.match(/^[A-Z0-9]/)) {
          throw new Error('El género de una playlist debe comenzar por mayúscula.');
        } else if (!validator.isAlphanumeric(element)) {
          throw new Error('El género de una playlist solo puede contener caracteres alfanuméricos');
        }
      });
    },
  },
  canciones: {
    type: [String],
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
    trim: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('La duración no pueden ser negativas');
      }
    },
  },
});

/* Exportando el modelo Playlist, que es un modelo de la interfaz PlayListInterface, que es un modelo
del esquema PlayListSchema. */
export const Playlist = model<PlayListInterface>('PlayList', PlayListSchema);