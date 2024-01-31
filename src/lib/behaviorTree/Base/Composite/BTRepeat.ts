import BTNode from "../BTNode"
import { State } from "../constants"
import BTDecorator from "./BTDecorator"

export default class BTRepeat extends BTDecorator {
  constructor(node: BTNode[], private times?: number) {
    super(node)
  }

  private loops = 0

  update(dt?: number): State {
    if (this.times && this.loops >= this.times) return State.Succeed

    const cur = this.children[0]
    const state = cur.run(dt)
    if (state !== State.Running) {
      this.loops++
    }
    return State.Running
  }
}