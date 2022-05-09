import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaCancion } from "./schema";
import {CancionOrdenable, CommonOrdenable} from "../Interfaces/BaseInterface";

/**
 * Clase que representa una canción
 */
export class Cancion {
    /**
     * Constructor
     * @param nombre_ nombre de la cancion
     * @param autor_ autor
     * @param generos_ generos
     * @param duracion_ duración
     * @param single_ es single o no
     * @param reproducciones_ numero de reproducciones
     */
    constructor(
      private nombre_: string,
      private autor_: string, 
      private generos_: string[],
      private duracion_: string,
      private single_: boolean,
      private reproducciones_: number) {}
    /**
     * 
     * @returns retorna el nombre
     */
    getNombre(): string {
      return this.nombre_;
    }
    /**
     * 
     * @returns retorna el autor
     */
    getAutor(): string {
        return this.autor_;
    }
    /**
     * 
     * @returns retorna los generos
     */
    getGeneros(): string[] {
        return this.generos_;
    }
    /**
     * 
     * @returns retorna la duracion
     */
    getDuracion(): string {
        return this.duracion_;
    }
    /**
     * 
     * @returns retorna si es single 
     */
    getSingle(): boolean {
        return this.single_;
    }
    /**
     * 
     * @returns retorna la reproducciones
     */
    getReproducciones(): number {
        return this.reproducciones_;
    }
    /**
     * 
     * @param nombre nombre de la cancion
     */
    setNombre(nombre: string): void {
        this.nombre_ = nombre;
    }
    /**
     * 
     * @param autor autor de la cancion
     */
    setAutor(autor: string): void {
        this.autor_ = autor;
    }
    /**
     * 
     * @param genero generos de la cancion
     */
    setGeneros(genero: string[]): void {
        this.generos_ = genero;
    }
    /**
     * 
     * @param duracion duración de la canción
     */
    setDuracion(duracion: string): void {
        this.duracion_ = duracion;
    }
    /**
     * 
     * @param single tipo de cancion
     */
    setSingle(single: boolean): void {
        this.single_ = single;
    }
    /**
     * 
     * @param reproducciones reproducciones de la canción
     */
    setReproducciones(reproducciones: number): void {
        this.reproducciones_ = reproducciones;
    }
    /**
     * Imprime la información de una canción
     */
    printData() {
      console.log(this.nombre_, (this.single_)?' Single': '');
      console.log('Autor: ', this.autor_);
      console.log('Genero: ', this.autor_);
      console.log('D: ', this.duracion_, ' R: ', this.reproducciones_);
    }
    /**
     * 
     * @returns Funciona para poder pasar a formato .json
     */
    convertJSON(): (number | string | boolean | string[])[] {
      return [this.nombre_, this.autor_, this.generos_, this.duracion_, this.single_, this.reproducciones_];
    }
  }

  /**
   * Clase que representa un colección de canciones y permite acceder a la base de datos y administrar canciones
   */
export class JsonCancionCollection implements CommonOrdenable<Cancion>, CancionOrdenable {
    private displayMod: Cancion[];
    private database:lowdb.LowdbSync<schemaCancion>;
    /**
     * Constructor que lee un archivo .json donde se encuentran la canciones y las introduce en un array como objetos Canciones
     * @param coleccion Coleccion de canciones
     */
    constructor(public coleccion: Cancion[]) {
        this.database = lowdb(new FileSync("dataBase/db_canciones.json"));
        if (this.database.has("canciones").value()) {
            let dbItems = this.database.get("canciones").value();
            dbItems.forEach(item => this.coleccion.push(new Cancion(item.nombre, item.autor, item.generos, item.duracion, item.single, item.reproducciones)));
          }
          this.displayMod = this.coleccion;
    }
    /**
     * Añade una cancion a la coleccion y a la base de datos
     * @param n nombre
     * @param a autor
     * @param g generos
     * @param d duracion
     * @param s single
     * @param r reproducciones
     */
    addCancion(n: string, a: string, g: string[], d: string, s: boolean, r: number) {
        this.coleccion.push(new Cancion(n, a, g, d, s, r));
        this.database.get("canciones").push({nombre: n, autor: a, generos: g, duracion: d, single: s, reproducciones: r}).write();
    }
    /**
     * Elimina una cancion a la coleccion y a la base de datos
     * @param n nombre de la cancion
     */
    deleteCancion(n: string) {
      this.database.get("canciones").remove({nombre: n}).write();
      this.coleccion = this.coleccion.filter(element => {
        element.getNombre() !== n;
      });
    }
    /**
     * Elimina varias canciones a la coleccion y a la base de datos
     * @param cs canciones
     */
    deleteCancionesVector(cs: string[]) {
      cs.forEach(e => {
        this.database.get("canciones").remove({nombre: e}).write();
        this.coleccion = this.coleccion.filter(buenas => {
          buenas.getNombre() !== e;
        });
      });
    }
    /**
     * @returns el vector que contiene todas las canciones
     */
    getCollection(): Cancion[] {
      return this.coleccion;
    }
    /**
     * 
     * @param n indice de la cancion
     * @returns retorna una cancion
     */
    getCancion(n: number): Cancion {
        return this.coleccion[n];
    }
    /**
     * 
     * @param n nombre de la cancion
     * @returns retorna si se encuentra una cancion en la coleccion
     */
    includesCancion(n: string): boolean {
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
   * @param n nombre de la cancion
   * @returns retorna la cancion coincidente
   */
  getCancionByName(n: string): Cancion | undefined {
    return this.coleccion.find(e => e.getNombre() === n);
  }

  // Interfaces
  /**
   * 
   * @param s ascendente o descendente
   * @returns canciones ordenadas por singles
   */
  ordSingles(s: boolean): Cancion[] {
    if (s) {
      this.displayMod = [];
      this.coleccion.forEach((e) => {
        if (e.getSingle() == true) {
          this.displayMod.push(e);
        }
      });
    } else {
      this.displayMod = this.coleccion;
    }
    return this.displayMod;
  }
  /**
   * 
   * @param s ascendente o descendente
   * @returns canciones ordenadas por reproducciones
   */
  ordReproducciones(asc: boolean): Cancion[] {
    this.displayMod = this.coleccion;
    if (asc) {
      this.displayMod.sort((a, b) => a.getReproducciones() - b.getReproducciones());
    } else {
      this.displayMod.sort((a, b) => b.getReproducciones() - a.getReproducciones());
    }
    return this.displayMod;
  }
  /**
   * 
   * @param s ascendente o descendente
   * @returns canciones ordenadas alfabeticamente
   */
  ordAlfabeticoTitulo(asc: boolean): Cancion[] {
    this.displayMod = this.coleccion;
    if (asc) {
      this.displayMod.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    } else {
      this.displayMod.sort((a, b) => b.getNombre().localeCompare(a.getNombre()));
    }
    return this.displayMod;
  }
  /**
   * Muestra las informacion de las canciones
   */
  displayCanciones() {
    console.log('──────────────────────────');
    this.coleccion.forEach((cancion)=> {
      cancion.printData();
      console.log('──────────────────────────');
    });
  }
  /**
   * Muestra las informacion de las canciones(inquirer)
   */
  displayMode() {
    console.log('──────────────────────────');
    this.displayMod.forEach((cancion)=> {
      cancion.printData();
      console.log('──────────────────────────');
    });
  }
}

