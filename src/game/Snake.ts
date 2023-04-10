import { Ref, watch } from "vue"
import GameObject, { Position } from "../common/GameObject"
import BTTree from "../lib/behaviorTree/Base/BTTree"
import MyTree from "../lib/behaviorTree/Tree/MyTree"
import SnakeBTTree from "../lib/behaviorTree/Tree/SnakeBTTree"
import { randomPos } from "../common/Utils"
import BlackBoard from "../lib/behaviorTree/Biz/Blackboard"

export default class Snake extends GameObject {
  private behavior?: BTTree
  constructor(public id: string, private el: Ref<HTMLDivElement | undefined>) {
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
      this.behavior.root?.run(dt)
    }
  }
}