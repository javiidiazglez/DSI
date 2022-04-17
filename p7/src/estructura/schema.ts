import {Genero} from "./genero";
import {Cancion} from "./cancion";

/**
 * Esquemas  de tipo para representar los elementos de formato .json a clases
 */
export type schemaCancion = {
    canciones: {nombre: string, autor: string, generos: string[], duracion: string, single: boolean, reproducciones: number}[]
};

export type schemaGenero = {
    generos: {nombre: string, grupos: string[], artistas: string[], albumes: string[], canciones: string[]}[]
};

export type schemaGrupo = {
    grupos: {nombre: string, componentes: string[], año: number, generos: string[], albumes: string[], oyentes: number}[]
};

export type schemaAlbum = {
    albumes: {nombre: string, autor: string, año: number, generos: string[], canciones: string[]}[]
};

export type schemaArtista = {
    artistas: {nombre: string, grupos: string[], generos: string[], albumes: string[], canciones: string[]}[]
};

export type schemaPlayList = {
    playlists: {nombre: string, autor: string, canciones: string[], duracion: string, generos: string[]}[]
};
