import BTNode from "../../Base/BTNode"
import { State } from "../../Base/constants"
import BTCondition from "../../Base/Composite/BTCondition"
import BlackBoard from "../Blackboard"

export default class IsDeadCondition extends BTCondition {
  update() {
    if (BlackBoard.instance.hp <= 0) return State.Succeed
    return State.Failed
  }
}