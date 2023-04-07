import BTAction from "../../Base/BTAction"
import { State } from "../../Base/constants"
import BlackBoard from "../Blackboard"

export default class AttackAction extends BTAction {
  update() {
    BlackBoard.instance.hp -= 10
    return State.Succeed
  }
}