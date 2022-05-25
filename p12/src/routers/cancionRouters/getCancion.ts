import * as express from 'express';
import { Cancion } from '../../models/canciones';

export const getCancionRouter = express.Router();

/**
 * Funcion que obtiene una cancion de la base de datos segun un nombre.
 * Comprueba que se disponga del parametro nombre en la query
 * y crea el filtro para la base de datos tratandolo como una cadena.
 * La bbdd se filtra y si se obtiene alguna cancion se devuelve, en
 * caso contrario se informa de un error.
*/
getCancionRouter.get('/canciones', async (req, res) => {
  const filter = req.query.nombre ? { nombre: req.query.nombre.toString() } : {};

  try {
    const canciones = await Cancion.find(filter);

    if (canciones.length !== 0) {
      return res.send(canciones);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Funcion que obtiene una cancion de la base de datos segun un id.
 * Se busca ese id en la bbdd y si se encuentra se devuelve, en
 * caso contrario se informa de un error.
*/
getCancionRouter.get('/canciones/:id', async (req, res) => {
  try {
    const cancion = await Cancion.findById(req.params.id);

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(500).send();
  }
});
