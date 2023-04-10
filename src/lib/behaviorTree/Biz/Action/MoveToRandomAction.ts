import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"

export default class MoveToRandomAction extends BTAction {
  constructor(private node: Snake) {
    super()
  }

  private timer: number = 0
  private pos: Position[] = []

  private tween?: Tween<Position>

  start() {
    super.start()
    this.pos = [
      BlackBoard.instance.randomPos(),
      BlackBoard.instance.randomPos(),
      BlackBoard.instance.randomPos()
    ]
    const target = this.pos.reduce((o, p: Position) => {
      o.x.push(p.x)
      o.y.push(p.y)
      return o
    }, { x: [] as number[], y: [] as number[] })
    this.tween = new TWEEN.Tween(this.node.pos)
      .to(target, 2000)
      .easing(TWEEN.Easing.Exponential.InOut)
      .interpolation(TWEEN.Interpolation.Bezier)
      .onUpdate(({ x, y }) => {
        this.node.moveTo(new Position(x, y))
      })
      .onComplete(() => {
        this.state = State.Succeed
      })
      .start()
  }

  update(dt?: number) {
    this.timer += dt || 0
    return this.state
  }
}