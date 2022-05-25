import * as express from 'express';
import { Playlist } from '../../models/playlists';

export const patchPlaylistRouter = express.Router();

/**
 * Funcion que actualiza los datos de una playlist por nombre.
 * Comprueba que los atributos que se van a editar estan permitidos.
 * Crea el objeto para modificar y lo actualiza.
 * Devolviendo estados en consecuencia a los errores.
 */
patchPlaylistRouter.patch('/playlist', async (req, res) => {
  if (!req.query.nombre) {
    return res.status(400).send({
      error: 'Se debe proveer un nombre',
    });
  }

  const allowedUpdates = ['nombre', 'generos', 'canciones', 'duracion'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const playlist =
      await Playlist.findOneAndUpdate({ nombre: req.query.nombre.toString() }, req.body, {
        new: true,
        runValidators: true,
      });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Funcion que actualiza los datos de una playlist por id.
 * Comprueba que los atributos que se van a editar estan permitidos.
 * Crea el objeto para modificar y lo actualiza.
 * Devolviendo estados en consecuencia a los errores.
*/
patchPlaylistRouter.patch('/playlist/:id', async (req, res) => {
  const allowedUpdates = ['nombre', 'generos', 'canciones', 'duracion'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});
