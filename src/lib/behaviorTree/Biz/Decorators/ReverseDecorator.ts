import { State } from "../../Base/constants"
import BTDecorator from "../../Base/Composite/BTDecorator"

export default class ReverseDecorator extends BTDecorator {
  update(): State {
    const cur = this.children[0]
    const state = cur.run()
    if (state === State.Succeed) {
      return State.Failed
    } else if (state === State.Failed) {
      return State.Succeed
    }
    return State.Running
  }
}