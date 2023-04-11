import BTParent from "../BTParent"
import { State } from "../constants"

export default class BTSelector extends BTParent {
  start() {
    super.start()
    this.index = 0
  }

  update(dt?: number): State {
    if (this.state === State.Succeed) return State.Succeed
    if (this.index < this.children.length) {
      const cur = this.children[this.index]
      const state = cur.run(dt)
      switch (state) {
        case State.Succeed:
          this.state = State.Succeed
          return State.Succeed
        case State.Failed:
          this.index++
      }
      return State.Running
    }
    return State.Failed
  }
}