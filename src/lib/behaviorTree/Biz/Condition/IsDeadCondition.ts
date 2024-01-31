import BTNode from "../../Base/BTNode"
import { State } from "../../Base/constants"
import BTCondition from "../../Base/Composite/BTCondition"
import BlackBoard from "../../Base/Blackboard"

export default class IsDeadCondition extends BTCondition {
  update(dt?: number) {
    // if (BlackBoard.ins.hp <= 0) return State.Succeed
    return State.Succeed
  }
}