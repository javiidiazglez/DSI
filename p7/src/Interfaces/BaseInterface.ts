import { Album } from "../estructura/album";
import {Cancion} from "../estructura/cancion";

export interface CommonOrdenable <T>{
  ordAlfabeticoTitulo(asc: boolean): T[];
}

// Referentes a albumes
export interface AlbumOrdenable{
  ordAño(asc: boolean): Album[];
}

// Referentes a Canciones
export interface CancionOrdenable{
  ordReproducciones(asc: boolean): Cancion[];
  ordSingles(s: boolean): Cancion[];
}


