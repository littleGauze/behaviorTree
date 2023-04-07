import BTParent from "../Base/BTParent"
import { State } from "../Base/constants"

export default class BTSequence extends BTParent {
  start() {
    super.start()
    this.index = 0
  }

  update(dt?: number): State {
    if (this.state === State.Failed) return State.Failed
    if (this.index < this.children.length) {
      const cur = this.children[this.index]
      const state = cur.run(dt)
      switch (state) {
        case State.Failed:
          this.state = State.Failed
          return State.Failed
        case State.Succeed:
          this.index++
      }
      return State.Running
    }
    return State.Succeed
  }
}