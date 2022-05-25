import * as express from 'express';
import { Cancion } from '../../models/canciones';

export const deleteCancionRouter = express.Router();

/**
 * Funcion que elimina una cancion de la base de datos segun un nombre
 * Comprueba que se reciba el nombre de la cancion y que esta exista en la bbdd.
 * En caso afirmativo la elimina y en cualquier otro caso informa de un error.
*/
deleteCancionRouter.delete('/canciones', async (req, res) => {
  if (!req.query.nombre) {
    return res.status(400).send({
      error: 'Se debe proporcionar un nombre',
    });
  }

  try {
    const cancion =
      await Cancion.findOneAndDelete({ nombre: req.query.nombre.toString() });

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Funcion que elimina una cancion de la base de datos segun un id
 * Comprueba que esta exista en la bbdd.
 * En caso afirmativo la elimina y en cualquier otro caso informa de un error.
*/
deleteCancionRouter.delete('/canciones/:id', async (req, res) => {
  try {
    const cancion = await Cancion.findByIdAndDelete(req.params.id);

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send();
  }
});
