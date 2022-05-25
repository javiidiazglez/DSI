import express from 'express';
import './db/mongoose';

import {getCancionRouter} from './routers/cancionRouters/getCancion';
import {postCancionRouter} from './routers/cancionRouters/postCancion';
import {deleteCancionRouter} from './routers/cancionRouters/deleteCancion';
import {patchCancionRouter} from './routers/cancionRouters/patchCancion';

import {getArtistaRouter} from './routers/artistaRouters/getArtista';
import {postArtistaRouter} from './routers/artistaRouters/postArtista';
import {deleteArtistaRouter} from './routers/artistaRouters/deleteArtista';
import {patchArtistaRouter} from './routers/artistaRouters/patchArtista';

import {getPlaylistRouter} from './routers/playlistRouters/getPlaylist';
import {postPlaylistRouter} from './routers/playlistRouters/postPlaylist';
import {deletePlaylistRouter} from './routers/playlistRouters/deletePlaylist';
import {patchPlaylistRouter} from './routers/playlistRouters/patchPlaylist';

import {defaultRouter} from './routers/default';

const app = express();
app.use(express.json());

app.use(postCancionRouter);
app.use(getCancionRouter);
app.use(patchCancionRouter);
app.use(deleteCancionRouter);

app.use(postArtistaRouter);
app.use(getArtistaRouter);
app.use(patchArtistaRouter);
app.use(deleteArtistaRouter);

app.use(postPlaylistRouter);
app.use(getPlaylistRouter);
app.use(patchPlaylistRouter);
app.use(deletePlaylistRouter);

app.use(defaultRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});