import BTNode from "../../Base/BTNode"
import { State } from "../../Base/constants"
import BlackBoard from "../Blackboard"

export default class IsDeadCondition extends BTNode {
  update(): State {
    if (BlackBoard.instance.hp <= 0) return State.Succeed
    return State.Failed
  }
}