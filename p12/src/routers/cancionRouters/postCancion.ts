import * as express from 'express';
import { Cancion } from '../../models/canciones';

export const postCancionRouter = express.Router();

/**
 * Funcion que crea una nueva cancion y la almacena en la base de datos.
 * Comprueba que los atributos que se van a editar estan permitidos.
 * Crea el objeto para modificar y lo actualiza.
 * Devolviendo estados en consecuencia a los errores.
 */
postCancionRouter.post('/canciones', async (req, res) => {
  const cancion = new Cancion(req.body);

  try {
    await cancion.save();
    res.status(201).send(cancion);
  } catch (error) {
    res.status(400).send(error);
  }
});