import BTAction from "../../Base/BTAction"
import { State } from "../../Base/constants"

export default class LoggerAction extends BTAction {
  constructor(private text: string) {
    super()
  }

  update() {
    console.log(this.text)
    return State.Succeed
  }
}