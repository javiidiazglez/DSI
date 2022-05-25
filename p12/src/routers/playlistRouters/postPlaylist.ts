import * as express from 'express';
import { Playlist } from '../../models/playlists';

/**
 * Funcion que obtiene una playlist de la base de datos segun un nombre.
 * Comprueba que se disponga del parametro nombre en la query
 * y crea el filtro para la base de datos tratandolo como una cadena.
 * La bbdd se filtra y si se obtiene alguna playlist se devuelve, en
 * caso contrario se informa de un error.
*/
export const postPlaylistRouter = express.Router();

/**
 * Funcion que obtiene una playlist de la base de datos segun un id.
 * Se busca ese id en la bbdd y si se encuentra se devuelve, en
 * caso contrario se informa de un error.
*/
postPlaylistRouter.post('/playlist', async (req, res) => {
  const playlist = new Playlist(req.body);

  try {
    await playlist.save();
    res.status(201).send(playlist);
  } catch (error) {
    res.status(400).send(error);
  }
});
