import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { schemaArtista } from "./schema";
import { Cancion } from "./cancion";
import { JsonCancionCollection } from "./cancion";
import { JsonGrupoCollection } from "./grupo";
/**
 * Clase que representa un artista
 */
export class Artista {
    private oyentesMensuales_: number;
    /**
     * Constructor de clase que calcula el atributo de oyentes sumando los oyentes de sus canciones indeivudales y grupales
     * @param nombre_ 
     * @param grupos_ 
     * @param generos_ 
     * @param albumes_ 
     * @param canciones_ 
     */
    constructor(
      private nombre_: string,
      private grupos_: string[],
      private generos_: string[],
      private albumes_: string[],
      private canciones_: string[]) {
        let oyentesInd: number = 0;
        let oyentesGrup: number = 0;
        let colCanciones = new JsonCancionCollection([]);
        let colGrupos = new JsonGrupoCollection([]);
        this.canciones_.forEach((cancion) => {
            if (colCanciones.includesCancion(cancion)) {
                this.grupos_.forEach((grupo) => {
                    if (colGrupos.includesGrupo(grupo)) {
                        if (colCanciones.getCancionByName(cancion).getAutor() == colGrupos.getGrupoByName(grupo).getNombre()) {
                            oyentesInd = oyentesInd + colCanciones.getCancionByName(cancion).getReproducciones();
                        }
                    }
                });
            }
        });
        this.grupos_.forEach((grupo) => {
            if (colGrupos.includesGrupo(grupo)) {
                oyentesGrup = oyentesGrup + colGrupos.getGrupoByName(grupo).getOyentes();
            }
        });
        this.oyentesMensuales_ = oyentesInd + oyentesGrup;
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
     * @returns grupos
     */
    getGrupos(): string[] {
        return this.grupos_;
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
     * @returns canciones
     */
    getCanciones(): string[] {
        return this.canciones_;
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
     * @param grupos grupos
     */
    setGrupos(grupos: string[]): void {
        this.grupos_ = grupos;
    }/**
     * 
     * @param generos generos
     */
    setGeneros(generos: string[]): void {
        this.generos_ = generos;
    }/**
     * 
     * @param albumes albumes
     */
    setAlbumes(albumes: string[]): void {
        this.albumes_ = albumes;
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
     * @param oyentes oyentes
     */
    setOyentes(oyentes: number): void {
        this.oyentesMensuales_ = oyentes;
    }
    /**
     * muestra la informacion de la clase
     */
    printData() {
      console.log(this.nombre_);
      console.log('Grupos:');
      this.grupos_.forEach((g) => {
        console.log('   ', g);
      });
      console.log('Generos:');
      this.generos_.forEach((g) => {
        console.log('   ', g);
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
   * Clase que representa un colección de artistas y permite acceder a la base de datos y administrar artistas
   */
  export class JsonArtistaCollection {
    private displayMod: Artista[];
    private database:lowdb.LowdbSync<schemaArtista>;
    constructor(public coleccion: Artista[]) {
      /**
     * Constructor que lee un archivo .json donde se encuentran los artistas y las introduce en un array como objetos Artista
     * @param coleccion Coleccion de artistas
     */
        this.database = lowdb(new FileSync("dataBase/db_artistas.json"));
        if (this.database.has("artistas").value()) {
            let dbItems = this.database.get("artistas").value();
            dbItems.forEach(item => this.coleccion.push(new Artista(item.nombre, item.grupos, item.generos, item.albumes, item.canciones)));
        } 
        this.displayMod = this.coleccion;
    }
    /**
     * Añade un artista
     * @param n nombre
     * @param g grupos
     * @param gen generos
     * @param alb albumes
     * @param c canciones
     */
    addArtista(n: string, g: string[], gen: string[], alb: string[], c: string[]) {
        this.coleccion.push(new Artista(n, g, gen, alb, c));
        this.database.get("artistas").push({nombre: n, grupos: g, generos: g, albumes: alb, canciones: c}).write();
    }
    /**
     * Elimina un artista
     * @param n nombre
     */
    deleteArtista(n: string) {
        this.database.get("artistas").remove({nombre: n}).write();
        this.coleccion = this.coleccion.filter(element => {element.getNombre() !== n;});
      }
      /**
       * Elimina varios artistas
       * @param gs artistas
       */
      deleteArtistaVector(gs: string[]) {
        gs.forEach(e => {
          this.database.get("artistas").remove({nombre: e}).write();
          this.coleccion = this.coleccion.filter(buenas => {buenas.getNombre() !== e;});
        });
      }
      /**
       * 
       * @param n indice
       * @returns artista
       */
      getArtista(n: number): Artista {
          return this.coleccion[n];
      }
      /**
       * 
       * @param n nombre
       * @returns existe o no
       */
      includesArtista(n: string): boolean {
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
     * @returns artista coindicente
     */
    getArtistaByName(n: string): Artista | undefined {
      return this.coleccion.find((element) => {
        element.getNombre() === n;
      });
    }
    /**
     * Muestra la informacion de los artistas
     */
    displayOrdenedArtistas() {
      console.log('──────────────────────────');
      this.displayMod.forEach((artista)=> {
        artista.printData();
        console.log('──────────────────────────');
      });
    }
}
