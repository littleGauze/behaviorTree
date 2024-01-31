import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"
import SnakeBlackBoard from "../../Tree/SnakeBlackBoard"

export default class ScaleAction extends BTAction {
  constructor(private bb: SnakeBlackBoard) {
    super()
  }

  override init() {
    const scale = .5 + Math.random() * 2
    const scaleUp = new TWEEN.Tween({ s: 1 })
      .to({ s: scale }, 1000)
      .easing(TWEEN.Easing.Bounce.Out)
      .onUpdate(({ s }) => {
        this.bb.node.scaleTo(s)
      })

    const scaleDown = new TWEEN.Tween({ s: scale })
      .to({ s: 1 }, 1000)
      .easing(TWEEN.Easing.Bounce.Out)
      .onUpdate(({ s }) => {
        this.bb.node.scaleTo(s)
      })
      .onComplete(() => {
        this.state = State.Succeed
      })

    scaleUp.chain(scaleDown).start()
  }

  update(dt?: number) {
    return this.state
  }
}