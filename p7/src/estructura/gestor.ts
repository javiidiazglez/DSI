import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaPlayList } from "./schema";
import {CommonOrdenable} from "../Interfaces/BaseInterface";
import * as can from "./cancion";
import * as pla from "./playlist";

/**
 * enum para seleccionar que atributo quiere modificar en algunos metodos
 */
enum Att {Nombre, Autor, Canciones, Duracion, Generos};

/**
 * Clase Gestor, para manejar la informacion relacionada con las playlist y cada una de
 * sus propiedades
 */
export class Gestor extends pla.JsonPlayListCollection {
  /**
   * Acceso a la base de datos de las canciones para obtener los datos necesarios para ordenar
   */
  private dbCanciones: can.JsonCancionCollection = new can.JsonCancionCollection([]);
  private selectedPlaylist: string;
  private actualPlaylistSongs: string[];
  private user: string;
  /**
   * Inicializa la coleccion de playlists
   */
  constructor() {
    super([]);
  }
  /**
   * 
   * @param nuevo si es nueva la playlist o es sobre una existente
   * @param existente el identificador de la playlist existente
   * @param n nombre
   * @parvam a autors
   * @param d duracion en s
   * @param c vector de cancionetring
   * @param g vector de generos
   */
  addPlayList(nuevo: boolean, existente: number = 0, n: string, a: string, c: string[], d: string, g: string[]) {
    if (nuevo) {
      this.coleccion.push(new pla.PlayList(n, a, c, d, g));
      this.database.get("playlists").push({nombre: n, autor: a, canciones: c, duracion: d, generos: g}).write();
    } else {
      c.push(this.coleccion[existente][1]);
      d = d + this.coleccion[existente][2];
      g.push(this.coleccion[existente][3]);
      this.coleccion.push(new pla.PlayList(n, a, c, d, g));
    }
  }
  /**
   * @param n nombre de la playlist a eliminar
   * @param ususario nombre del usuario para ver si puede o no eliminar la playlist
   */
  deletePlayList(n: string, ususario: string) {
    if ((this.getPlayListByName(n).getAutor() != 'Sistema')&&(this.getPlayListByName(n).getAutor() == 'Usuario')) {
      this.database.get("playlists").remove({nombre: n}).write();
      this.coleccion = this.coleccion.filter(element => {element.getNombre() !== n;});
    }
  }
  /**
   * 
   * @param gs vector de playlist a eliminar
   */
  deletePlayListVector(gs: string[]) {
    gs.forEach(e => {
      this.database.get("playlists").remove({nombre: e}).write();
      this.coleccion = this.coleccion.filter(buenas => {buenas.getNombre() !== e;});
    });
  }
  /**
   * obtiene una playlist
   * @param n nombre
   * @returns la playlist deseada
   */
  getPlayList(n: number): pla.PlayList {
      return this.coleccion[n];
  }
  /**
   * 
   * @param n nombre de la playlist a buscar
   * @returns verdadero o falso dependiendo si la playlist esta o no registrada
   */
  includesPlayList(n: string): boolean {
    let isIn: boolean = false;
    this.coleccion.forEach(element => {
      if (element.getNombre() === n) {
        isIn = true;
      }
    });
    return isIn;
  }
  /**
   * 
   * @param asc selector del orden a imprimir
   * @returns un vector de playlist ordenado
   */
  ordAlfabeticoTitulo(asc: boolean): pla.PlayList[] {
    this.displayMod = this.coleccion;
    if (asc) {
      this.displayMod.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    } else {
      this.displayMod.sort((a, b) => b.getNombre().localeCompare(a.getNombre()));
    }
    return this.displayMod;
  }
  /**
   * 
   * @param n nombre de la playlist a obtener
   * @returns la playlist en cuestion o undefined si no se encuentra registrada
   */
  getPlayListByName(n: string): pla.PlayList | undefined {
    return this.coleccion.find((element) => element.getNombre() === n);
  }/**
   * 
   * @returns el vector de las canciones de la playlist actual
   */
  getActualSongs(): string[] {
    return this.actualPlaylistSongs;
  }
  /**
   * 
   * @param s selecciona una playlist de nombre s
   */
  setSelectedPlaylist(s: string) {
    this.selectedPlaylist = s;
    this.actualPlaylistSongs = this.getPlayListByName(s).getCanciones();
  }
  /**
   * 
   * @param s nombre de la cancion a añadir a la playlist
   */
  addSongToActualPlaylist(s: string) {
    this.actualPlaylistSongs.push(s);
  }
  /**
   * Añade una serie de canciones a la playlist
   * @param s vector de canciones
   */
  addSongVectorToActualPlaylist(s: string[]) {
    s.forEach(element => {
      this.actualPlaylistSongs.push(element);
    });
  }
  /**
   * Borra una cancion de la playlist
   * @param s nombre de la cancion
   */
    deleteSongFromActualPlaylist(s: string) {
    this.actualPlaylistSongs = this.actualPlaylistSongs.filter(buenas => {
      buenas !== s;
    });
  }
  /**
   * Borra una serie de canciones de la playlist
   * @param s nombres de la canciones a borrar
   */
  deleteSongVectorFromActualPlaylist(s: string[]) {
    this.actualPlaylistSongs = this.actualPlaylistSongs.filter(buenas => {
      !s.includes(buenas);
    });
  }
  /**
   * 
   * @returns un vector que contiene todas las canciones registradas
   */
  getTodasCanciones(): can.Cancion[] {
    return this.dbCanciones.getCollection();
  }
  /**
   * Usa un metodo generico para asignar un valor de un determinado
   * tipo en tiempo de ejecucion
   * @param n  nombre d ela playlist
   * @param a atributo a modificar
   * @param value valor a asignar
   */
  modifyPlaylist<T>(n: string, a: Att, value: T) {
    switch (a) {
      case Att.Nombre:
        this.database.get("playlists").find({nombre: n}).assign({nombre: value}).value();
        break;
      case Att.Autor:
        this.database.get("playlists").find({nombre: n}).assign({autor: value}).value();
        break;
      case Att.Canciones:
        this.database.get("playlists").find({nombre: n}).assign({canciones: value}).value();
        break;
      case Att.Generos:
        this.database.get("playlists").find({nombre: n}).assign({generos: value}).value();
        break;
      case Att.Duracion:
        this.database.get("playlists").find({nombre: n}).assign({duracion: value}).value();
        break;
      default:
        break;
    }
  }
  /**
   * ORdena en orden alfabetico de los nombres de las canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordAlfPlaylistCan(asc: boolean, n: string) {
    this.actualPlaylistSongs = this.getPlayListByName(n).getCanciones();
    if (asc) {
      this.actualPlaylistSongs.sort((a, b) => a[0].localeCompare(b[0]));
    } else {
      this.actualPlaylistSongs.sort((a, b) => b[0].localeCompare(a[0]));
    }
  }
  /**
   * ORdena en orden alfabetico de los autores de las canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordAlfPlaylistAut(asc: boolean, n: string) {
    this.getCollection().forEach((c) => {
       if (c.getAutor() === '') {
       }
    });
    if (asc) {
      this.coleccion[n][1].sort((a, b) => a.getAutor().localeCompare(b.getAutor()));
    } else {
      this.coleccion[n][1].sort((a, b) => b.getAutor().localeCompare(a.getAutor()));
    }
  }
    /**
   * ORdena en orden alfabetico de los generos de las canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordAlfPlaylistGenero(asc: boolean, n: number) {
    if (asc) {
      this.coleccion[n][1].sort((a, b) => a.getGeneros().localeCompare(b.getGeneros()));
    } else {
      this.coleccion[n][1].sort((a, b) => b.getGeneros().localeCompare(a.getGeneros()));
    }
  }
    /**
   * ORdena en orden alfabetico de los años de las canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordPlaylistAño(asc: boolean, n: number) {
    if (asc) {
      this.coleccion[n][1].sort((a, b) => a.getAño() - b.getAño());
    } else {
      this.coleccion[n][1].sort((a, b) => b.getAño() - a.getAño());
    }
  }
    /**
   * ORdena en orden alfabetico de la duracion de las canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordPlaylistDur(asc: boolean, n: number) {
    if (asc) {
      this.coleccion[n][1].sort((a, b) => a.getDuracion().localeCompare(b.getDuracion()));
    } else {
      this.coleccion[n][1].sort((a, b) => b.getDuracion().localeCompare(a.getDuracion()));
    }
  }
    /**
   * ORdena en orden alfabetico del numero de canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordPlaylistNum(asc: boolean, n: number) {
    if (asc) {
      this.coleccion[n][1].sort((a, b) => a.getDuracion().localeCompare(b.getDuracion()));
    } else {
      this.coleccion[n][1].sort((a, b) => b.getDuracion().localeCompare(a.getDuracion()));
    }
  }
    /**
   * ORdena en orden alfabetico de las reproduccioness de las canciones
   * @param asc si la ordenacion es ascendente o no
   * @param n playlist a ordenar
   */
  ordReproduccionesPlaylist(asc: boolean, n: number) {
    if (asc) {
      this.coleccion[n][1].sort((a, b) => a.getReproducciones() - b.getReproducciones());
    } else {
      this.coleccion[n][1].sort((a, b) => b.getReproducciones() - a.getReproducciones());
    }
  }
  /**
   * Muestra las canciones de la playlist que esta seleccionada para manejar
   */
  displayPlaylistSongs() {
    console.log('──────────────────────────');
    this.actualPlaylistSongs.forEach((cancion)=> {
      console.log(cancion);
      console.log('──────────────────────────');
    });
  }
}