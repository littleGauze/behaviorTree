import { Position } from "./GameObject"

export function randomPos(width: number, height: number) {
  const x = Math.floor(Math.random() * width)
  const y = Math.floor(Math.random() * height)
  return new Position(x, y)
}