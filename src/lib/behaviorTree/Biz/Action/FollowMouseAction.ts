import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"

export default class FollowMouseAction extends BTAction {
  constructor(private node: Snake) {
    super()
  }

  private timer: number = 0
  private pos?: Position
  private tween?: Tween<any>

  start() {
    super.start()
    if (this.pos && this.pos.distance(this.node.pos) > 0) {
      this.tween = new TWEEN.Tween(this.node.pos)
        .to(this.pos)
        .easing(TWEEN.Easing.Exponential.Out)
        .onUpdate(({ x, y }) => {
          this.node.moveTo(new Position(x, y))
        })
        .onComplete(() => {
          this.state = State.Succeed
          this.pos = undefined
        })
        .start()
    }
  }

  update(dt?: number) {
    let pos
    if (pos = this.node.followMouse()) {
      this.pos = pos as Position
      this.start()
    } else {
      // this.state = State.Running
    }
    return this.state
  }
}