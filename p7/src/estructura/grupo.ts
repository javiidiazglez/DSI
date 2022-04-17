import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaGrupo } from "./schema";
/**
 * Clase que representa un grupo
 */
export class Grupo {
  /**
   * 
   * @param nombre_ nombre
   * @param componentes_ componenetes
   * @param añoCreacion_ año de creacion
   * @param generos_ generos
   * @param albumes_ albumes
   * @param oyentesMensuales_ oyentes
   */
  constructor(
    private nombre_: string,
    private componentes_: string[], /* o Artista*/
    private añoCreacion_: number,
    private generos_: string[],
    private albumes_: string[],
    private oyentesMensuales_: number) { }
  /**
   * 
   * @returns nombre
   */
  getNombre(): string {
    return this.nombre_;
  }
  /**
   * 
   * @returns componentes
   */
  getComponentes(): string[] {
    return this.componentes_;
  }
  /**
   * 
   * @returns año
   */
  getAñoCreacion(): number {
    return this.añoCreacion_;
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
   * @returns albumes
   */
  getAlbumes(): string[] {
    return this.albumes_;
  }
  /**
   * 
   * @returns oyentes
   */
  getOyentes(): number {
    return this.oyentesMensuales_;
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
   * @param componentes componentes
   */
  setComponentes(componentes: string[]): void {
      this.componentes_ = componentes;
  }
  /**
   * 
   * @param añocreacion año
   */
  setAñoCreacion(añocreacion: number): void {
    this.añoCreacion_ = añocreacion;
  }
  /**
   * 
   * @param generos generos
   */
  setGeneros(generos: string[]): void {
      this.generos_ = generos;
  }
  /**
   * 
   * @param albumes albumes
   */
  setAlbumes(albumes: string[]): void {
      this.albumes_ = albumes;
  }
  /**
   * 
   * @param oyentes oyentes
   */
  setOyentes(oyentes: number): void {
      this.oyentesMensuales_ = oyentes;
  }
  /**
   * Muestra la informacion de un grupo
   */
  printData() {
    console.log(this.nombre_);
    console.log('Componentes:');
    this.componentes_.forEach((c) => {
      console.log('   ', c);
    });
    console.log('Generos:');
    this.generos_.forEach((g) => {
      console.log('   ', g);
    });
    console.log('Albumes:');
    this.albumes_.forEach((a) => {
      console.log('   ', a);
    });
    console.log('Oyentes mensuales: ', this.oyentesMensuales_);
  }
}
/**
   * Clase que representa un colección de grupos y permite acceder a la base de datos y administrar grupos
   */
export class JsonGrupoCollection {
  private displayMod: Grupo[];
  private database:lowdb.LowdbSync<schemaGrupo>;
  /**
     * Constructor que lee un archivo .json donde se encuentran la grupos y las introduce en un array como objetos Grupo
     * @param coleccion Coleccion de grupos
     */
  constructor(public coleccion: Grupo[]) {
      this.database = lowdb(new FileSync("dataBase/db_grupos.json"));
      if (this.database.has("grupos").value()) {
          let dbItems = this.database.get("grupos").value();
          dbItems.forEach(item => this.coleccion.push(new Grupo(item.nombre, item.componentes, item.año, item.generos, item.albumes, item.oyentes)));
      } 
      this.displayMod = this.coleccion;
  }
  /**
   * Añade un grupo
   * @param n nombre
   * @param c componentes
   * @param a autores
   * @param g generos
   * @param alb albumes
   * @param o oyentes
   */
  addGrupo(n: string, c: string[], a: number, g: string[], alb: string[], o: number) {
      this.coleccion.push(new Grupo(n, c, a, g, alb, o));
      this.database.get("grupos").push({nombre: n, componentes: c, año: a, generos: g, albumes: alb, oyentes: o}).write();
  }
  /**
   * Elimina un grupo a la coleccion y a la base de datos
   * @param n nombre
   */
  deleteGrupo(n: string) {
      this.database.get("grupos").remove({nombre: n}).write();
      this.coleccion = this.coleccion.filter(element => {
        element.getNombre() !== n;
      });
    }
    /**
     * Elimina varios grupos
     * @param gs grupos
     */
  deleteGrupoVector(gs: string[]) {
    gs.forEach(e => {
      this.database.get("grupos").remove({nombre: e}).write();
      this.coleccion = this.coleccion.filter(buenas => {
        buenas.getNombre() !== e;
      });
    });
  }
  /**
   * 
   * @param n indice del grupo
   * @returns grupo
   */
  getGrupo(n: number): Grupo {
      return this.coleccion[n];
  }
  /**
   * 
   * @param n nombre
   * @returns se encuentra o no
   */
  includesGrupo(n: string): boolean {
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
   * @returns grupo coincidente
   */
  getGrupoByName(n: string): Grupo | undefined {
    return this.coleccion.find((element) => {
      element.getNombre() === n;
    });
  }
  /**
   * Muestra los grupos
   */
  displayGrupos() {
    console.log('──────────────────────────');
    this.coleccion.forEach((grupo)=> {
      grupo.printData();
      console.log('──────────────────────────');
    });
  }
}
