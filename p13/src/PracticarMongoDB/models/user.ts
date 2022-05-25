import { Document, model, Schema } from 'mongoose';
import validator from 'validator';

interface UserDocumentInterface extends Document {
  name: string,
  apellidos: string,
  edad: number,
  email: string,
  titulacion: string,
  asignaturasMatriculadas: string,
}

const UserSchema = new Schema<UserDocumentInterface>({
  nombre: {
    type: String,
    trim: true,
    require: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Nombre debería empezar con una mayúsculas.');
      }
    },
  },
  apellidos: {
    type: String,
    trim: true,
    require: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El apellido debe empezar con una mayúsculas.');
      }
    },
  },
  edad: {
    type: Number,
    require: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('La edad no pueden ser negativos');
      }
    },
  },
  email: {
    type: String,
    uniq: true,
    trim: true,
    require: true,
    validate: (value: string) => {
      if (!value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) { // regex para email -> alguien@algunlugar.es
        throw new Error('Email incorrecto.');
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

export const User = model<UserDocumentInterface>('User', UserSchema);