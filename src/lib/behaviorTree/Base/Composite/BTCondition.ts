import BTNode from "../BTNode"
import BTParent from "../BTParent"
import { State } from "../constants"

export default abstract class BTCondition extends BTNode {
  abstract update(dt?: number): State.Succeed | State.Failed
}