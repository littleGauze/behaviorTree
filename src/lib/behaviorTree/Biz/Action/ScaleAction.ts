import GameObject, { Position } from "../../../../common/GameObject"
import BTAction from "../../Base/BTAction"
import TWEEN, { Tween } from '@tweenjs/tween.js'
import BlackBoard from "../Blackboard"
import { State } from "../../Base/constants"
import Snake from "../../../../game/Snake"

export default class ScaleAction extends BTAction {
  constructor(private node: Snake) {
    super()
  }

  private timer: number = 0

  start() {
    super.start()
    const scale = .5 + Math.random() * 2
    const scaleUp = new TWEEN.Tween({ s: 1 })
      .to({ s: scale }, 1000)
      .easing(TWEEN.Easing.Bounce.Out)
      .onUpdate(({ s }) => {
        this.node.scaleTo(s)
      })

    const scaleDown = new TWEEN.Tween({ s: scale })
      .to({ s: 1 }, 1000)
      .easing(TWEEN.Easing.Bounce.Out)
      .onUpdate(({ s }) => {
        this.node.scaleTo(s)
      })
      .onComplete(() => {
        this.state = State.Succeed
      })

    scaleUp.chain(scaleDown).start()
  }

  update(dt?: number) {
    this.timer += dt || 0
    return this.state
  }
}