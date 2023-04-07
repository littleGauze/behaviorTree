import BTAction from "../../Base/BTAction"
import { State } from "../../Base/constants"
import BlackBoard from "../Blackboard"

export default class MagicAttackAction extends BTAction {
  update() {
    BlackBoard.instance.mp -= 40
    BlackBoard.instance.hp -= 20
    return State.Succeed
  }
}