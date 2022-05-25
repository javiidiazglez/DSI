import * as express from 'express';
import { Playlist } from '../../models/playlists';

export const deletePlaylistRouter = express.Router();

/**
 * Funcion que elimina una playlist de la base de datos segun un nombre
 * Comprueba que se reciba el nombre de la playlist y que esta exista en la bbdd.
 * En caso afirmativo la elimina y en cualquier otro caso informa de un error.
*/
deletePlaylistRouter.delete('/playlist', async (req, res) => {
  if (!req.query.nombre) {
    return res.status(400).send({
      error: 'Se debe proveer un nombre',
    });
  }

  try {
    const playlist =
      await Playlist.findOneAndDelete({ nombre: req.query.nombre.toString() });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Funcion que elimina una playlist de la base de datos segun un id
 * Comprueba que esta exista en la bbdd.
 * En caso afirmativo la elimina y en cualquier otro caso informa de un error.
*/
deletePlaylistRouter.delete('/playlist/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndDelete(req.params.id);

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send();
  }
});
