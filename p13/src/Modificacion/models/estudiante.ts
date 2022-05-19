import {Document, model, Schema} from 'mongoose';
import validator from 'validator';

export interface EstudianteInterface {
  nombre: string,
  apellidos: string,
  email: string,
  edad: number,
  titulacion: string,
  asignaturasMatriculadas: string,
}

export interface EstudianteDocumentInterface extends Document {
  nombre: string,
  apellidos: string,
  email: string,
  edad: number,
  titulacion: string,
  asignaturasMatriculadas: string,
}

const EstudianteSchema = new Schema<EstudianteDocumentInterface>({
  nombre: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El nombre del estudiante debe empezar con una mayúsculas');
      } else if (!validator.isAlpha(value)) {
        throw new Error('Estudiante nombre must contain letters only');
      }
    },
  },
  apellidos: {
    type: String,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El apellido del estudiante debe empezar con una mayúsculas');
      } else if (!validator.isAlpha(value, 'es-ES', {ignore: ' '})) {
        throw new Error('Estudiante apellidos must contain letters only');
      }
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value: string) => {
      if (!value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) { // regex para email -> alguien@algunlugar.es
        throw new Error('Email incorrecto.');
      }
    },
  },
  edad: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('La edad no pueden ser negativos');
      }
    },
  },
  titulacion: {
    type: String,
    uniq: true,
    trim: true,
    require: true,
    validate: (value: string) => {
      if (!validator.isAlphanumeric(value)) {
        throw new Error('La titulación deben contener solo carácteres alphanumerica.');
      }
    },
  },
  asignaturasMatriculadas: {
    type: String,
    trim: true,
    require: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Nombre debería empezar con una mayúsculas.');
      }
    },
  },
});

export const Estudiante = model<EstudianteDocumentInterface>('Estudiante', EstudianteSchema);