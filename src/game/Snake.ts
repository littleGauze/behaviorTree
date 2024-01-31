import { Ref, watch } from "vue"
import GameObject, { Position } from "../common/GameObject"
import BTTree from "../lib/behaviorTree/Base/BTTree"
import SnakeBTTree from "../lib/behaviorTree/Tree/SnakeBTTree"
import BlackBoard from "../lib/behaviorTree/Biz/Blackboard"

export default class Snake extends GameObject {
  private behavior?: SnakeBTTree
  constructor(public id: string, private el: Ref<HTMLDivElement | undefined>, public mouse: { x: Ref<number>, y: Ref<number> }) {
    super()
    this.init()
  }

  init() {
    watch(this.el, () => {
      if (this.el.value) {
        this.changeColor()
      }
    })

    this.behavior = new SnakeBTTree(this)
  }

  changeColor() {
    const hue = Math.floor(Math.random() * 360)
    const color = `hsl(${hue} 100% 80%)`
    if (this.el.value) {
      this.el.value.style.backgroundColor = color
    }
  }

  moveTo(pos: Position) {
    this.pos = pos
  }

  followMouse() {
    const pos = new Position(this.mouse.x.value, this.mouse.y.value)
    if (this.pos.distance(pos) < 300) {
      return pos
    }
    return false
  }

  canMove() {
    const snakes = BlackBoard.instance.snakes
    for (const snake of snakes!.value) {
      if (snake.s.pos.distance(this.pos) < 64 && snake.s.id < this.id) {
        return false
      }
    }
    return true
  }

  scaleTo(scale: number) {
    if (this.el.value) {
      this.el.value.style.transform = `scale(${scale})`
    }
  }

  render(dt?: number): void {
    if (this.el.value) {
      this.el.value.style.top = this.pos.y - 32 + 'px'
      this.el.value.style.left = this.pos.x - 32 + 'px'
    }
    if (this.behavior) {
      this.behavior.run(dt)
    }
  }
}