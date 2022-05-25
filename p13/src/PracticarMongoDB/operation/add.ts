/* eslint-disable camelcase */
import '../db/moongose';
import { User } from '../models/user';

export function addUser(
  user_nombre: string,
  user_apellidos: string,
  user_edad: number,
  user_e: string,
  user_titulacion: string,
  user_asignaturas: string) {

  const user = new User({
    nombre: user_nombre,
    apellidos: user_apellidos,
    edad: user_edad,
    email: user_e,
    titulacion: user_titulacion,
    asignaturasMatriculadas: user_asignaturas,
  });

  user.save().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

addUser('Javi', 'Diaz', 24, 'javi@javi.com', 'Quimica', 'Base de Datos');