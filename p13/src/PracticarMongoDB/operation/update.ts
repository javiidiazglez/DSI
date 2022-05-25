import '../db/moongose';
import { User } from '../models/user';

export function UpdateUser(new_nombre: string, new_apellidos: string, new_edad: number, new_email: string, new_titulacion: string, new_asignaturas: string, find: string) {
  const user = new User({
    nombre: new_nombre,
    apellidos: new_apellidos,
    edad: new_edad,
    email: new_email,
    titulacion: new_titulacion,
    asignaturasMatriculadas: new_asignaturas,
  });

  User.findOneAndUpdate({ email: find }, user, { new: true }).then((result) => {
    // console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

UpdateUser('Pedro', 'Diaz', 23, 'pedro@email.com', 'Informatica', 'Dsi', 'pedro@email.com');