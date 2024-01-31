import BTAction from "../../Base/BTAction"
import { State } from "../../Base/constants"

export default class SleepAction extends BTAction {
  constructor(private duration: number) {
    super()
  }

  private timer: number = 0

  init(): void {
    this.timer = 0
  }

  update(dt: number) {
    this.timer += dt
    if (this.timer >= this.duration) {
      return State.Succeed
    }
    return this.state
  }
}