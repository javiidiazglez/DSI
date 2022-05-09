import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaPlayList } from "./schema";
import {CommonOrdenable} from "../Interfaces/BaseInterface";
import * as can from "./cancion";
/**
 * Clase que representa un playlist
 */
export class PlayList {
  private dbCanciones: can.JsonCancionCollection = new can.JsonCancionCollection([]);
  /**
   * 
   * @param nombre_ nombre
   * @param autor_ autor
   * @param canciones_ canciones
   * @param duracion_ duracion
   * @param generos_ generos
   */
  constructor(
    private nombre_: string,
    private autor_: string,
    private canciones_: string[],
    private duracion_: string,
    private generos_: string[]) {
      this.duracion_ = this.obtainDuracionFromCancion();
    }
  /**
   * 
   * @returns duracion de la playlist a partir de la de las canciones
   */  
  obtainDuracionFromCancion(): string {
    let mins: number = 0;
    let secs: number = 0;
    let v: string[] = [];
    this.canciones_.forEach(c => {
      v = this.dbCanciones.getCancionByName(c).getDuracion().split(':');
      mins += parseInt(v[0]);
      secs += parseInt(v[1]);
    });
    mins += Math.floor(secs/60);
    secs %= 60;
    return mins + ':' + ((secs < 10)? "0" + secs:secs);
  }
  /**
   * 
   * @returns nombre
   */
  getNombre(): string {
      return this.nombre_;
  }
  /**
   * 
   * @returns canciones
   */
  getCanciones(): string[] {
      return this.canciones_;
  }
  /**
   * 
   * @returns duracion
   */
  getDuracion(): string {
      return this.duracion_;
  }
  /**
   * 
   * @returns generos
   */
  getGeneros(): string[] {
      return this.generos_;
  }
  /**
   * 
   * @returns autor
   */
  getAutor(): string {
    return this.autor_;
  }
  /**
   * 
   * @param nombre nombre
   */
  setNombre(nombre: string): void {
      this.nombre_ = nombre;
  }
  /**
   * 
   * @param autor autor
   */
  setAutor(autor:string): void {
      this.autor_ = autor;
  }
  /**
   * 
   * @param canciones canciones
   */
  setCanciones(canciones: string[]): void {
      this.canciones_ = canciones;
  }
  /**
   * 
   * @param duracion duracion
   */
  setDuracion(duracion: string): void {
      this.duracion_ = duracion;
  }
  /**
   * 
   * @param genero generos
   */
  setGeneros(genero: string[]): void {
      this.generos_ = genero;
  }
  /**
   * Muestra la informacion de un playlist
   */
  printData() {
    console.log(this.nombre_);
    console.log('Autor: ', this.autor_);
    console.log('Canciones:');
    this.canciones_.forEach((c) => {
      console.log('   ', c);
    });
    console.log('Duracion: ', this.duracion_);
    console.log('Generos:');
    this.generos_.forEach((g) => {
      console.log('   ', g);
    });
  }
}
  /**
   * Clase que representa un colección de playlist y permite acceder a la base de datos y administrar Playlist
   */
  export class JsonPlayListCollection implements CommonOrdenable<PlayList> {
    protected displayMod: PlayList[];
    protected database:lowdb.LowdbSync<schemaPlayList>;
    /**
     * Constructor que lee un archivo .json donde se encuentran la playlists y las introduce en un array como objetos PLaylist
     * @param coleccion Coleccion de playlists
     */
    constructor(public coleccion: PlayList[]) {
      this.database = lowdb(new FileSync("dataBase/db_playlists.json"));
      if (this.database.has("playlists").value()) {
          let dbItems = this.database.get("playlists").value();
          dbItems.forEach(item => this.coleccion.push(new PlayList(item.nombre, item.autor, item.canciones, item.duracion, item.generos)));
      }
      this.displayMod = this.coleccion;
    }
    /**
     * 
     * @returns coleccion
     */
    getCollection(): PlayList[] {
      return this.coleccion;
    }
    /**
     * 
     * @param n indice
     * @returns playlist
     */
    getPlayList(n: number): PlayList {
        return this.coleccion[n];
    }
    /**
     * 
     * @param n nombre
     * @returns playlist coincidente
     */
    getPlayListByName(n: string): PlayList | undefined {
      return this.coleccion.find(e => e.getNombre() === n);
    }
    /**
     * 
     * @param n nombre
     * @returns existe o no
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
     * @param asc ascendente o descendente
     * @returns ordenadas alfabeticamente
     */
    ordAlfabeticoTitulo(asc: boolean): PlayList[] {
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
     * @param asc ascendente o descendente
     * @returns ordenadas por duracion
     */
    ordDuracion(asc: boolean): PlayList[] {
      this.displayMod = this.coleccion;
      if (asc) {
        this.displayMod.sort((a, b) => a.getDuracion().localeCompare(b.getDuracion()));
      } else {
        this.displayMod.sort((a, b) => b.getDuracion().localeCompare(a.getDuracion()));
      }
      return this.displayMod;
    }
    /**
     * 
     * @param asc ascendente o descendente
     * @returns ordenadas por reproducciones
     */
    ordReproduccionesPlaylist(asc: boolean, n: number) {
      if (asc) {
        this.coleccion[n][1].sort((a, b) => a.getReproducciones() - b.getReproducciones());
      } else {
        this.coleccion[n][1].sort((a, b) => b.getReproducciones() - a.getReproducciones());
      }
    }
    /**
     * Muestra informacion de las playlists
     */
    displayOrdenedPlayList() {
      console.log('──────────────────────────');
      this.displayMod.forEach((album)=> {
        album.printData();
        console.log('──────────────────────────');
      });
    }
}
