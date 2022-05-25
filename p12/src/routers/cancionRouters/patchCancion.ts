import * as express from 'express';
import { Cancion } from '../../models/canciones';

export const patchCancionRouter = express.Router();

/**
 * Funcion que actualiza los datos de una cancion por nombre.
 * Comprueba que los atributos que se van a editar estan permitidos.
 * Crea el objeto para modificar y lo actualiza.
 * Devolviendo estados en consecuencia a los errores.
 */
patchCancionRouter.patch('/canciones', async (req, res) => {
  if (!req.query.nombre) {
    return res.status(400).send({
      error: 'Se debe proporcionar un nombre',
    });
  }

  const allowedUpdates = ['nombre', 'autor', 'duracion', 'generos', 'single', 'reproducciones'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const cancion =
      await Cancion.findOneAndUpdate({ nombre: req.query.nombre.toString() }, req.body, {
        new: true,
        runValidators: true,
      });

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Funcion que actualiza los datos de una cancion por id.
 * Comprueba que los atributos que se van a editar estan permitidos.
 * Crea el objeto para modificar y lo actualiza.
 * Devolviendo estados en consecuencia a los errores.
*/
patchCancionRouter.patch('/canciones/:id', async (req, res) => {
  const allowedUpdates = ['nombre', 'autor', 'duracion', 'generos', 'single', 'reproducciones'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!cancion) {
      return res.status(404).send();
    }

    return res.send(cancion);
  } catch (error) {
    return res.status(400).send(error);
  }
});