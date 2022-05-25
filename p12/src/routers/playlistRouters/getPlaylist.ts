import * as express from 'express';
import { Playlist } from '../../models/playlists';

export const getPlaylistRouter = express.Router();

/* Este es un controlador de ruta para el punto final `/playlist`.
Está utilizando el objeto `req.query` para obtener el parámetro de consulta `nombre`.
Si el parámetro de consulta `nombre` está presente, lo usará para filtrar los resultados.
Si el parámetro de consulta `nombre` no está presente, devolverá todas las listas de reproducción. */

getPlaylistRouter.get('/playlist', async (req, res) => {
  const filter = req.query.nombre ? { nombre: req.query.nombre.toString() } : {};

  try {
    const playlist = await Playlist.find(filter);

    if (playlist.length !== 0) {
      return res.send(playlist);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/* Este es un controlador de ruta para el punto final `/playlist/:id`.
Está utilizando `req.params.id` para obtener el parámetro `id`.
Si el parámetro `id` está presente, lo usará para filtrar los resultados.
Si el parámetro `id` no está presente, devolverá todas las listas de reproducción. */

getPlaylistRouter.get('/playlist/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(500).send();
  }
});