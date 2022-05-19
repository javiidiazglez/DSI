import {EstudianteManagment} from "./estudianteManagment";
import {EstudianteInterface} from "./models/estudiante";


const at: EstudianteInterface = {
  nombre: 'Javi',
  apellidos: 'Diaz',
  email: 'javito3@javi.com',
  edad: 20,
  titulacion: 'Quimica',
  asignaturasMatriculadas: 'Dsi',
};

new EstudianteManagment().createEstudiante({
  nombre: 'Javi',
  apellidos: 'Diaz',
  email: 'javito3@javi.com',
  edad: 20,
  titulacion: 'Quimica',
  asignaturasMatriculadas: 'Dsi',
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err.message);
});


new EstudianteManagment().findEstudiante('javito3@javi.com').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err.message);
});


new EstudianteManagment().updateEstudiante('javitoooo@javi.com', at).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err.message);
});


new EstudianteManagment().deleteEstudiante('javitoooo@javi.com').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err.message);
});
