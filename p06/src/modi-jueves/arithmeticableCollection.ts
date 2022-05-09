import {Arithmeticable} from './interfaz';

export class ArithmeticableCollection<T extends Arithmeticable<T> > {
    /**
   * Constructor of Arithmeticable Collection
   * @param collection Array of collections
   */
  constructor(public collection: T[]) { }
  
  // addArithmeticable(): void {
  //   this.collection.push();
  // }
  /**
   * Method that adds an item on the array
   * @param item An item of the collection array
   * @returns The array with the added item
   */
  addArithmeticable(item: T): void {
    this.collection.push(item);
  }
  /**
   * Gets an collection of the array
   * @return The value of the collection
   */

  getArithmeticable(index: number) {
    return this.collection[index];
  }

  /**
   * Gets the number of collection on the array
   * @return The lenght of the collection array
   */
  getNumberOfArithmeticables() : number {
    return this.collection.length;
  }
}
