import BTNode from "../../Base/BTNode"
import { State } from "../../Base/constants"
import BTCondition from "../../Base/Composite/BTCondition"
import Snake from "../../../../game/Snake"
import { Position } from "../../../../common/GameObject"
import SnakeBlackBoard from "../../Tree/SnakeBlackBoard"

export default class ISOnTheFloor extends BTCondition {
  constructor(private bb: SnakeBlackBoard) {
    super()
  }
  
  update(dt: number) {
    if (this.bb.node.pos.distance(Position.Zero) < 1) {
      return State.Succeed
    }
    return State.Failed
  }
}