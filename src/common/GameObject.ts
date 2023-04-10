export class Position {
  constructor(public x: number = 0, public y: number = 0) { }

  distance(pos: Position): number {
    return Math.abs(Math.sqrt((pos.x - this.x) ** 2 + (pos.y - this.y)))
  }
}

export default abstract class GameObject {
  pos: Position = new Position()

  abstract render(dt: number): void
}