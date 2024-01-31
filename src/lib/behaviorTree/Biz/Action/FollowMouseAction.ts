import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"
import SnakeBlackBoard from "../../Tree/SnakeBlackBoard"

export default class FollowMouseAction extends BTAction {
  constructor(private bb: SnakeBlackBoard) {
    super()
  }

  private tw: Tween<Position> | null = null

  update(dt?: number) {
    let pos = this.bb.node.followMouse()
    if (pos) {
      if (!pos.equals(this.bb.node.pos) && !this.tw?.isPlaying()) {
        this.tw = new TWEEN.Tween(this.bb.node.pos)
          .to(pos)
          .easing(TWEEN.Easing.Exponential.Out)
          .onUpdate(({ x, y }) => {
            this.bb.node.moveTo(new Position(x, y))
          })
          .start()
      }
      return State.Running
    }
    return State.Succeed
  }
}