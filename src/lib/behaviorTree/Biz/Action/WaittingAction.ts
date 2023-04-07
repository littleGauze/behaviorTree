import BTAction from "../../Base/BTAction"
import { State } from "../../Base/constants"

export default class WaittingAction extends BTAction {
  constructor(private duration: number) {
    super()
  }
  private timer: number = 0

  start() {
    this.timer = 0
    super.start()
  }

  update(dt: number) {
    this.timer += dt
    if (this.timer < this.duration) return State.Running
    return State.Succeed
  }
}