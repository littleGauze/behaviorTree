import BTNode from "../Base/BTNode"
import BTParent from "../Base/BTParent"
import { State } from "../Base/constants"

export default class BTCondition extends BTParent {
  constructor(cond: BTNode, then: BTNode, el: BTNode) {
    super(cond, then, el)
  }

  update(dt?: number): State {
    const cond = this.children[0]
    const then = this.children[1]
    const el = this.children[2]
    const state = cond.run(dt)
    if (state === State.Succeed) {
      then.run(dt)
    } else if (state === State.Failed) {
      el.run(dt)
    }
    return State.Succeed
  }
}