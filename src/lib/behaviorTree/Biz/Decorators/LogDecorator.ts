import { State } from "../../Base/constants"
import BTDecorator from "../../Base/Composite/BTDecorator"

export default class LogDecorator extends BTDecorator {
  update(): State {
    const cur = this.children[0]
    const state = cur.run()

    console.log(`${cur.constructor.name}: ${State[state]}`)

    return state
  }
}