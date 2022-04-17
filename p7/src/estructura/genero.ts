import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaGenero } from "./schema";

/**
 * Clase que representa un genero
 */
export class Genero {
  /**
   * 
   * @param nombre_ nombre del genero
   * @param grupos_  grupos pertenecientes
   * @param artistas_ artistas pertenecientes
   * @param albumes_ albumes pertenecientes
   * @param canciones_ canciones pertenecientes
   */
  constructor(
    private nombre_: string,
    private grupos_: string[], /* hay que hacer una interfaz generica para no usar union de tipos*/
    private artistas_: string[],
    private albumes_: string[],
    private canciones_: string[]) {}

  /**
   * 
   * @returns retorna nombre
   */  
  getNombre(): string {
      return this.nombre_;
  }
  /**
   * 
   * @returns retorna grupos
   */
  getGrupos(): string[] {
      return this.grupos_;
  }
  /**
   * 
   * @returns retorna artistas
   */
  getArtistas(): string[] {
      return this.artistas_;
  }
  /**
   * 
   * @returns retorna albumes
   */
  getAlbumes(): string[] {
      return this.albumes_;
  }
  /**
   * 
   * @returns retorna canciones
   */
  getCanciones(): string[] {
      return this.canciones_;
  }
  /**
   * 
   * @param nombre nombre del genero
   */
  setNombre(nombre: string): void {
      this.nombre_ = nombre;
  }
  /**
   * 
   * @param grupos grupos del genero
   */
  setGrupos(grupos: string[]): void {
      this.grupos_ = grupos;
  }
  /**
   * 
   * @param artistas artistas del genero
   */
  setArtistas(artistas: string[]): void {
      this.artistas_ = artistas;
  }
  /**
   * 
   * @param albumes albumes del genero
   */
  setAlbumes(albumes: string[]): void {
      this.albumes_ = albumes;
  }
  /**
   * 
   * @param canciones canciones del genero
   */
  setCanciones(canciones: string[]): void {
      this.canciones_ = canciones;
  }
  /**
     * Imprime la información de una canción
     */
  printData() {
    console.log(this.nombre_);
    console.log('Grupos:');
    this.grupos_.forEach((g) => {
      console.log('   ', g);
    });
    console.log('Artistas:');
    this.artistas_.forEach((a) => {
      console.log('   ', a);
    });
    console.log('Albumes:');
    this.albumes_.forEach((a) => {
      console.log('   ', a);
    });
    console.log('Canciones:');
    this.canciones_.forEach((c) => {
      console.log('   ', c);
    });
  }
}
/**
   * Clase que representa un colección de generos y permite acceder a la base de datos y administrar generos
   */
export class JsonGeneroCollection {
    private displayMod: Genero[];
    private database:lowdb.LowdbSync<schemaGenero>;
    /**
     * Constructor que lee un archivo .json donde se encuentran la generos y las introduce en un array como objetos Generos
     * @param coleccion Coleccion de generos
     */
    constructor(public coleccion: Genero[]) {
        this.database = lowdb(new FileSync("dataBase/db_generos.json"));
        if (this.database.has("generos").value()) {
            let dbItems = this.database.get("generos").value();
            dbItems.forEach(item => this.coleccion.push(new Genero(item.nombre, item.grupos, item.artistas, item.albumes, item.canciones)));
        }
        this.displayMod = this.coleccion;
    }
    /**
     * Añade un generos a la coleccion y a la base de datos
     * @param n nombre
     * @param g grupos
     * @param art artistas
     * @param alb albumes
     * @param c canciones
     */
    addGenero(n: string, g: string[], art: string[], alb: string[], c: string[]) {
        this.coleccion.push(new Genero(n, g, art, alb, c));
        this.database.get("generos").push({nombre: n, grupos: g, artistas: g, albumes: alb, canciones: c}).write();
    }
    /**
     * Elimina un genero a la coleccion y a la base de datos
     * @param n nombre del genero
     */
    deleteGenero(n: string) {
        this.database.get("generos").remove({nombre: n}).write();
        this.coleccion = this.coleccion.filter(element => {element.getNombre() !== n;});
      }
      /**
     * Elimina varias generos a la coleccion y a la base de datos
     * @param cs generos
     */
      deleteGeneroVector(gs: string[]) {
        gs.forEach(e => {
          this.database.get("generos").remove({nombre: e}).write();
          this.coleccion = this.coleccion.filter(buenas => {buenas.getNombre() !== e;});
        });
      }
      /**
       * 
       * @param n indice del genero
       * @returns genero
       */
      getGenero(n: number): Genero {
          return this.coleccion[n];
      }
      /**
       * 
       * @param n nombre del genero
       * @returns se encuentra o no
       */
      includesGenero(n: string): boolean {
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
     * @param n nombre del genero
     * @returns genero coincidente
     */
    getGeneroByName(n: string): Genero | undefined {
      return this.coleccion.find((element) => {
        element.getNombre() === n;
      });
    }
    /**
   * Muestra las informacion de los generos
   */
    displayGeneros() {
      console.log('──────────────────────────');
      this.coleccion.forEach((genero)=> {
        genero.printData();
        console.log('──────────────────────────');
      });
    }
}
