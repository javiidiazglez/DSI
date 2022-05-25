import * as express from 'express';
import { Artista } from '../../models/artista';

export const getArtistaRouter = express.Router();

/**
 * Funcion que obtiene a un artista de la base de datos segun un nombre.
 * Comprueba que se disponga del parametro nombre en la query
 * y crea el filtro para la base de datos tratandolo como una cadena.
 * La bbdd se filtra y si se obtiene algun artista se devuelve, en
 * caso contrario se informa de un error.
*/
getArtistaRouter.get('/artista', async (req, res) => {
  const filter = req.query.nombre ? { nombre: req.query.nombre.toString() } : {};

  try {
    const artista = await Artista.find(filter);

    if (artista.length !== 0) {
      return res.send(artista);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Funcion que obtiene a un artista de la base de datos segun un id.
 * Se busca ese id en la bbdd y si se encuentra se devuelve, en
 * caso contrario se informa de un error.
*/
getArtistaRouter.get('/artista/:id', async (req, res) => {
  try {
    const artista = await Artista.findById(req.params.id);

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(500).send();
  }
});