import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaAlbum } from "./schema";
import {AlbumOrdenable, CommonOrdenable} from "../Interfaces/BaseInterface";
/**
 * Clase que representa un album
 */
export class Album {
  /**
   * 
   * @param nombre_ nombre
   * @param autor_ autor
   * @param añoPublicacion_ año de publicacion
   * @param generos_ generos
   * @param canciones_ canciones
   */
  constructor(
    private nombre_: string,
    private autor_: string, /* o Artista*/
    private añoPublicacion_: number,
    private generos_: string[],
    private canciones_: string[]) {}
  /**
   * 
   * @returns nombre
   */
  getNombre(): string {
      return this.nombre_;
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
   * @returns año
   */
  getAño(): number {
      return this.añoPublicacion_;
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
   * @returns canciones
   */
  getCanciones(): string[] {
      return this.canciones_;
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
  setAutor(autor: string): void {
      this.autor_ = autor;
  }
  /**
   * 
   * @param año año
   */
  setAño(año: number): void {
      this.añoPublicacion_ = año;
  }
  /**
   * 
   * @param genero genero
   */
  setGeneros(genero: string[]): void {
      this.generos_ = genero;
  }
  /**
   * 
   * @param canciones canciones
   */
  setCanciones(canciones: string[]): void {
      this.canciones_ = canciones;
  }
  /**
   * Muestra la informacion de la clse
   */
  printData() {
    console.log(this.nombre_);
    console.log('Autor: ', this.autor_);
    console.log('Año: ', this.añoPublicacion_);
    console.log('Generos:');
    this.generos_.forEach((g) => {
      console.log('   ', g);
    });
    console.log('Canciones:');
    this.canciones_.forEach((c) => {
      console.log('   ', c);
    });
  }
}
/**
   * Clase que representa un colección de albumed y permite acceder a la base de datos y administrar albumes
   */
export class JsonAlbumCollection implements CommonOrdenable<Album>, AlbumOrdenable {
    private displayMod: Album[];
    private database:lowdb.LowdbSync<schemaAlbum>;
    /**
     * 
     * Constructor que lee un archivo .json donde se encuentran los albumes y las introduce en un array como objetos Album
     * @param coleccion Coleccion de albumes
     */
    constructor(public coleccion: Album[]) {
      this.database = lowdb(new FileSync("dataBase/db_albumes.json"));
      if (this.database.has("albumes").value()) {
        let dbItems = this.database.get("albumes").value();
        dbItems.forEach(item => this.coleccion.push(new Album(item.nombre, item.autor, item.año, item.generos, item.canciones)));
      } 
      this.displayMod = this.coleccion;
    }
    /**
     * Añade un album a la coleccion y a la base de datos
     * @param n nombre
     * @param aut autor
     * @param a año
     * @param g genero
     * @param c canciones
     */
    addAlbum(n: string, aut: string, a: number, g: string[], c: string[]) {
      this.coleccion.push(new Album(n, aut, a, g, c));
      this.database.get("albumes").push({nombre: n, autor: aut, año: a, generos: g, canciones: c}).write();
      this.displayMod = this.coleccion;
    }
    /**
     * Elimina un album
     * @param n nombre
     */
    deleteAlbum(n: string) {
      this.database.get("albumes").remove({nombre: n}).write();
      this.coleccion = this.coleccion.filter(element => {element.getNombre() !== n;});
      this.displayMod = this.coleccion;
    }
    /**
     * Elimina varios albumes
     * @param as albumes
     */
    deleteAlbumVector(as: string[]) {
      as.forEach(e => {
        this.database.get("albumes").remove({nombre: e}).write();
        this.coleccion = this.coleccion.filter(buenas => {buenas.getNombre() !== e;});
      });
      this.displayMod = this.coleccion;
    }
    /**
     * 
     * @param n indice
     * @returns album
     */
    getAlbum(n: number): Album {
      return this.coleccion[n];
    }
    /**
     * 
     * @param n nombre
     * @returns existe o no
     */
    includesAlbum(n: string): boolean {
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
     * @param n nombre
     * @returns album coincidente
     */
    getAlbumByName(n: string): Album | undefined {
      return this.coleccion.find((element) => {
        element.getNombre() === n;
      });
    }
    /**
     * 
     * @param asc ascendente o descendente
     * @returns ordenado alfabeticamente
     */
    ordAlfabeticoTitulo(asc: boolean): Album[] {
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
     * @returns ordenado por año
     */
    ordAño(asc: boolean): Album[] {
        this.displayMod = this.coleccion;
        if (asc) {
          this.displayMod.sort((a, b) => a.getAño() - b.getAño());
        } else {
          this.displayMod.sort((a, b) => b.getAño() - a.getAño());
        }
        return this.displayMod;
    }
    /**
     * Muestra la informacion de los albumes
     */
    displayOrdenedGeneros() {
      console.log('──────────────────────────');
      this.displayMod.forEach((album)=> {
        album.printData();
        console.log('──────────────────────────');
      });
    }
}
