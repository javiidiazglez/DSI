import * as express from 'express';

/* Creación de un nuevo objeto de enrutador. */
export const defaultRouter = express.Router();

/* Esta es una ruta general que se usará si ninguna otra ruta coincide. */
defaultRouter.all('*', (_, res) => {
  res.status(404).send();
});