import BTParent from "../Base/BTParent"
import { State } from "../Base/constants"

export default class BTSequence extends BTParent {
  start() {
    super.start()
    this.index = 0
  }

  update(): State {
    if (this.state === State.Failed) return State.Failed
    if (this.index < this.children.length) {
      const cur = this.children[this.index]
      const state = cur.run()
      if (state === State.Failed) {
        this.state = State.Failed
        return State.Failed
      }
      this.index++
    } else {
      this.end()
      return State.Succeed
    }
    return State.Running
  }
}