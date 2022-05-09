import * as chalk from 'chalk';

export type colores = 'red'|'yellow'|'blue'|'green';

/**
 * Clase Note
 */
export class Note {
  /**
   * Constructor de la clase Note
   * @param title Titulo de la nota
   * @param body Texto de la nota
   * @param color Color de la nota. Por defecto el rojo.
   */
  private color: string;
  private coloresPosibles: string[] = ['red', 'yellow', 'blue', 'green'];
  constructor(private title: string, private body: string, color_: string) {
    try {
      if (!this.coloresPosibles.includes(color_)) {
        this.color = 'red';
        throw new Error('El color no valido, se pondrá el rojo por defecto');
      } else {
        this.color = color_;
      }
    } catch (err) {
      console.log(chalk.default.red(err.message));
    }
  }
  /**
   * Setter para establecer titulo
   * @param title Titulo de la nota.
   */
  setTitle(title: string): void {
    this.title = title;
  }
  /**
   * Setter para establecer el texto de la nota
   * @param body Texto de la nota
   */
  setBody(body: string): void {
    this.body = body;
  }
  /**
   * Setter para establecer color
   * @param color Color de la nota
   */
  setColor(color: colores): void {
    this.color = color;
  }
  /**
   * Getter para devolver el titulo
   * @returns Titulo
   */
  getTitle(): string {
    return this.title;
  }
  /**
   * Getter para devolver el texto de la nota
   * @returns Texto de la nota
   */
  getBody(): string {
    return this.body;
  }
  /**
   * Getter para devolver el color
   * @returns Color
   */
  getColor(): string {
    return this.color;
  }
  /**
   * Modifcar los datos de la nota string en formato JSON
   * @returns String formato JSON
   */
  noteToJSON(): string {
    return '{\n\"title\": \"' + this.title + '\",\n\"body\": \"'+ this.body + '\",\n\"color\": \"' + this.color + '\"\n}';
  }
}