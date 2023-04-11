import BTNode from "../../Base/BTNode"
import { State } from "../../Base/constants"
import BTCondition from "../../Base/Composite/BTCondition"
import BlackBoard from "../Blackboard"

export default class HasMpCondition extends BTCondition {
  update() {
    if (BlackBoard.instance.mp > 0) return State.Succeed
    return State.Failed
  }
}