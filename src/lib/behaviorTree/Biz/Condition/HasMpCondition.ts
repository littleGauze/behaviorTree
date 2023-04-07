import BTNode from "../../Base/BTNode"
import { State } from "../../Base/constants"
import BlackBoard from "../Blackboard"

export default class HasMpCondition extends BTNode {
  update(): State {
    if (BlackBoard.instance.mp > 0) return State.Succeed
    return State.Failed
  }
}