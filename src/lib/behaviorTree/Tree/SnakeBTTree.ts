import BTSelector from "../Base/Composite/BTSelector"
import BTSequence from "../Base/Composite/BTSequence"
import BTTree from "../Base/BTTree"
import LoggerAction from "../Biz/Action/LoggerAction"
import ReverseDecorator from "../Biz/Decorators/ReverseDecorator"
import HasMpCondition from "../Biz/Condition/HasMpCondition"
import MagicAttackAction from "../Biz/Action/MagicAttackAction"
import WaittingAction from "../Biz/Action/WaittingAction"
import IsDeadCondition from "../Biz/Condition/IsDeadCondition"
import AttackAction from "../Biz/Action/AttackAction"
import BTCondition from "../Base/Composite/BTCondition"
import BTRepeat from "../Base/Composite/BTRepeat"
import { Ref } from "vue"
import { randomPos } from "../../../common/Utils"
import GameObject from "../../../common/GameObject"
import MoveToRandomAction from "../Biz/Action/MoveToRandomAction"
import Snake from "../../../game/Snake"
import ScaleAction from "../Biz/Action/ScaleAction"
import FollowMouseAction from "../Biz/Action/FollowMouseAction"
import DropdownAction from "../Biz/Action/DropdownAction"
import BTRandomSequence from "../Base/Composite/BTRansomSequence"
import BTRandomSelector from "../Base/Composite/BTRansomSelector"
import LogDecorator from "../Biz/Decorators/LogDecorator"
import ISOnTheFloor from "../Biz/Condition/IsOnTheFloor"
import SleepAction from "../Biz/Action/SleepAction"
import BTNode from "../Base/BTNode"
import { State } from "../Base/constants"
import SnakeBlackBoard from "./SnakeBlackBoard"

export default class SnakeBTTree extends BTTree<SnakeBlackBoard> {
  constructor(node: Snake) {
    super()
    this.bb = SnakeBlackBoard.createNew()
    this.bb.entity = node
  }

  init() {
    this.root = new BTSequence([
      new BTRepeat([
        new BTSequence([
          new BTRandomSelector([
            new BTSelector([
              new ISOnTheFloor(this.bb!),
              new DropdownAction(this.bb!),
            ]),
            new MoveToRandomAction(this.bb!),
            new SleepAction(2000)
          ]),
          new ScaleAction(this.bb!),
          new FollowMouseAction(this.bb!),
        ]),
      ])
    ])
  }

}