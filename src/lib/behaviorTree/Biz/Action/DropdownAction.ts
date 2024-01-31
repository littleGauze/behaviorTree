import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"
import SnakeBlackBoard from "../../Tree/SnakeBlackBoard"

export default class DropdownAction extends BTAction {
  constructor(private bb: SnakeBlackBoard) {
    super()
  }

  override init() {
    if (!this.bb.node.pos.x) {
      const pos = BlackBoard.instance.randomPos()
      this.bb.node.pos.x = pos.x
    }
    const target = new Position(this.bb.node.pos.x, BlackBoard.instance.screenHeight)
    if (this.bb.node.pos.distance(target) < 1) {
      this.state = State.Succeed
      return
    }
    new TWEEN.Tween(this.bb.node.pos)
      .delay(this.bb.node.pos.y)
      .to(target, 2000)
      .easing(TWEEN.Easing.Bounce.Out)
      .onUpdate(({ x, y }) => {
        this.bb.node.moveTo(new Position(x, y))
      })
      .onComplete(() => {
        this.state = State.Succeed
      })
      .start()
  }

  update(dt?: number) {
    return this.state
  }
}