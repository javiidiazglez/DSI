import { MongoClient, ObjectID } from 'mongodb';
import { connect } from 'mongoose';
import { EstudianteInterface, Estudiante } from './models/estudiante';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'dsi-assessment2';

export class EstudianteManagment {
  constructor() { }

  /**
   * Crea un atleta en la base de datos de MongoDB
   * @param estudiante Esquema de interfaz de atleta
   * @returns Promesa que verifica el cumplimiento de la creación
   */
  public createEstudiante(estudiante: EstudianteInterface): Promise<EstudianteInterface> {
    return new Promise<EstudianteInterface>((resolve, reject) => {
      connect('mongodb://127.0.0.1:27017/dsi-assessment2', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }).then(() => {
        return new Estudiante(estudiante).save();
      }).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  public findEstudiante(email_: string): Promise<EstudianteInterface> {
    return new Promise<EstudianteInterface>((resolve, reject) => {
      MongoClient.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((client) => {
        const db = client.db(dbName);
        return db.collection<EstudianteInterface>('estudiantes').find({
          email: email_,
        }).toArray();
      }).then((result) => {
        if (result.length != 0) resolve(result[0]);
        else reject(new Error('There is no estudiante with that email_'));
      }).catch((err) => {
        reject(err);
      });
    });
  }

  public updateEstudiante(_email: string, estudiante: EstudianteInterface): Promise<Number> {
    return new Promise<number>((resolve, reject) => {
      MongoClient.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((client) => {
        const db = client.db(dbName);
        return db.collection<EstudianteInterface>('estudiantes').updateMany({
          email: _email,
        }, {
          $set: {
            nombre: estudiante.nombre,
            apellidos: estudiante.apellidos,
            email: estudiante.email,
            edad: estudiante.edad,
            titulacion: estudiante.titulacion,
            asignaturasMatriculadas: estudiante.asignaturasMatriculadas,
          },
        });
      }).then((result) => {
        resolve(result.modifiedCount);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  public deleteEstudiante(email_: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      MongoClient.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((client) => {
        const db = client.db(dbName);
        return db.collection<EstudianteInterface>('estudiantes').deleteOne({
          email: email_,
        });
      }).then((result) => {
        if (result.deletedCount) resolve(result.deletedCount);
        else reject(new Error('Estudiante not found'));
      }).catch((err) => {
        console.log(err);
      });
    });
  }
}