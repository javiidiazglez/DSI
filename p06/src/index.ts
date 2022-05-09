type ColorType = 'red' | 'yellow' | 'blue' | 'green';
abstract class TwoDimensionalFigure {
  constructor(private readonly name: string, private color: ColorType) {
  }
  getName() {
    return this.name;
  }
  getColor() {
    return this.color;
  }
  setColor(color: ColorType) {
    this.color = color;
  }
  abstract getArea(): number;
  abstract print(): void;
}
class Rectangle extends TwoDimensionalFigure {
  private readonly sides = 4;
  constructor(name: string, color: ColorType,
    private base: number = 1, private height: number = 1) {
    super(name, color);
  }
  getSides() {
    return this.sides;
  }
  getArea() {
    return this.base * this.height;
  }
  print() {
    console.log(`I am a ${this.getName()}, I have ${this.getSides()} sides, ` +
      `and my area is ${this.getArea()}`);
  }
}
class FigureCollection<T extends TwoDimensionalFigure> {
  private figures: Map<string, T>;

  constructor(figures: T[]) {
    this.figures = new Map<string, T>();
    figures.forEach((figure) => this.addFigure(figure));
  }

  addFigure(newFigure: T) {
    this.figures.set(newFigure.getName(), newFigure);
  }

  getNumberOfFigures() {
    return this.figures.size;
  }

  getFigure(name: string) {
    return this.figures.get(name);
  }

  getFigures(): IterableIterator<T> {
    return this.figures.values();
  }

  print() {
    this.figures.forEach((figure) => figure.print());
  }
}

const myTwoDimensionalFigureCollection =
new FigureCollection<TwoDimensionalFigure>([
  new Rectangle('RedRectangle', 'red', 10, 5),
  new Rectangle('GreenRectangle', 'green', 5, 30),
]);

[...myTwoDimensionalFigureCollection.getFigures()].forEach((figure) =>
  figure.print());