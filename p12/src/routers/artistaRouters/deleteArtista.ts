import * as express from 'express';
import { Artista } from '../../models/artista';

export const deleteArtistaRouter = express.Router();

/**
 * Funcion que elimina un artista de la base de datos segun un nombre
 * Comprueba que se reciba el nombre del artista y que esta exista en la bbdd.
 * En caso afirmativo la elimina y en cualquier otro caso informa de un error.
*/
deleteArtistaRouter.delete('/artista', async (req, res) => {
  if (!req.query.nombre) {
    return res.status(400).send({
      error: 'Se debe proveer un nombre',
    });
  }

  try {
    const artista =
      await Artista.findOneAndDelete({ nombre: req.query.nombre.toString() });

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Funcion que elimina un artista de la base de datos segun id
 * Comprueba que exista en la bbdd.
 * En caso afirmativo la elimina y en cualquier otro caso informa de un error.
*/
deleteArtistaRouter.delete('/artista/:id', async (req, res) => {
  try {
    const artista = await Artista.findByIdAndDelete(req.params.id);

    if (!artista) {
      return res.status(404).send();
    }

    return res.send(artista);
  } catch (error) {
    return res.status(400).send();
  }
});