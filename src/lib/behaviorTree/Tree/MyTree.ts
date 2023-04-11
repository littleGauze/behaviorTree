import BTSelector from "../Base/Composite/BTSelector"
import BTSequence from "../Base/Composite/BTSequence"
import BTTree from "../Base/BTTree"
import LoggerAction from "../Biz/Action/LoggerAction"
import ReverseDecorator from "../Biz/Condition/ReverseDecorator"
import HasMpCondition from "../Biz/Condition/HasMpCondition"
import MagicAttackAction from "../Biz/Action/MagicAttackAction"
import WaittingAction from "../Biz/Action/WaittingAction"
import IsDeadCondition from "../Biz/Condition/IsDeadCondition"
import AttackAction from "../Biz/Action/AttackAction"
import BTCondition from "../Base/Composite/BTCondition"
import BTRepeat from "../Base/Composite/BTRepeat"

export default class MyTree extends BTTree {
  constructor() {
    super()
    this.init()
  }

  init() {
    this.root = new BTSequence(
      // new ReverseDecorator(new IsDeadCondition()),
      new BTRepeat(
        new BTSelector(
          new BTSequence(
            new HasMpCondition(),
            new WaittingAction(2000),
            new MagicAttackAction(),
            new LoggerAction('Magic Attack...'),
          ),
          new BTSequence(
            new WaittingAction(1000),
            new AttackAction(),
            new LoggerAction('Physical Attack...'),
          ),
        ),
        3
      )
    )
  }
}