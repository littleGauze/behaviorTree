export class Position {
  constructor(public x: number = 0, public y: number = 0) { }

  distance(pos: Position): number {
    return Math.abs(Math.sqrt((pos.x - this.x) ** 2 + (pos.y - this.y) ** 2))
  }

  equals(pos: Position): boolean {
    return this.x === pos.x && this.y === pos.y
  }

  static Zero = new Position(0, 0)
}

export default abstract class GameObject {
  pos: Position = new Position()

  abstract render(dt: number): void
}