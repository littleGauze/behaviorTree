import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"

export default class DropdownAction extends BTAction {
  constructor(private node: Snake) {
    super()
  }

  private timer: number = 0

  start() {
    super.start()
    if (!this.node.pos.x) {
      const pos = BlackBoard.instance.randomPos()
      this.node.pos.x = pos.x
    }
    new TWEEN.Tween(this.node.pos)
      .delay(this.node.pos.y)
      .to({ x: this.node.pos.x, y: BlackBoard.instance.screenHeight }, 2000)
      .easing(TWEEN.Easing.Bounce.Out)
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