import BTSelector from "../Composite/BTSelector"
import BTSequence from "../Composite/BTSequence"
import BTTree from "../Base/BTTree"
import LoggerAction from "../Biz/Action/LoggerAction"
import ReverseDecorator from "../Biz/Condition/ReverseDecorator"
import HasMpCondition from "../Biz/Condition/HasMpCondition"
import MagicAttackAction from "../Biz/Action/MagicAttackAction"
import WaittingAction from "../Biz/Action/WaittingAction"
import IsDeadCondition from "../Biz/Condition/IsDeadCondition"
import AttackAction from "../Biz/Action/AttackAction"
import BTCondition from "../Composite/BTCondition"
import BTRepeat from "../Composite/BTRepeat"
import { Ref } from "vue"
import { randomPos } from "../../../common/Utils"
import GameObject from "../../../common/GameObject"
import MoveToRandomAction from "../Biz/Action/MoveToRandomAction"
import Snake from "../../../game/Snake"
import ScaleAction from "../Biz/Action/ScaleAction"
import DropdownAction from "../Biz/Action/DropDownAction"

export default class SnakeBTTree extends BTTree {
  constructor(private node: Snake) {
    super()
    this.init()
  }

  init() {
    this.root = new BTSequence(
      new BTRepeat(
        new BTSequence(
          new DropdownAction(this.node),
          new MoveToRandomAction(this.node),
          new ScaleAction(this.node),
        ),
      )
    )
  }
}