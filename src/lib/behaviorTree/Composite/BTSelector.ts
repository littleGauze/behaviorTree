import BTParent from "../Base/BTParent"
import { State } from "../Base/constants"

export default class BTSelector extends BTParent {
  start() {
    super.start()
    this.index = 0
  }

  update(): State {
    if (this.state === State.Succeed) return State.Succeed
    if (this.index < this.children.length) {
      const cur = this.children[this.index]
      const state = cur.run()
      if (state === State.Succeed) {
        this.state = State.Succeed
        return State.Succeed
      }
      this.index++
    } else {
      this.end()
      return State.Failed
    }
    return State.Running
  }
}