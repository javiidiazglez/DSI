import * as express from 'express';
import { Artista } from '../../models/artista';

export const postArtistaRouter = express.Router();

/**
 * Funcion que crea un nuevo artista y lo almacena en la base de datos.
 * Comprueba que los atributos que se van a editar estan permitidos.
 * Crea el objeto para modificar y lo actualiza.
 * Devolviendo estados en consecuencia a los errores.
 */
postArtistaRouter.post('/artista', async (req, res) => {
  const artista = new Artista(req.body);

  try {
    await artista.save();
    res.status(201).send(artista);
  } catch (error) {
    res.status(400).send(error);
  }
});