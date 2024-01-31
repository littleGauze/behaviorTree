import BTNode from "./BTNode";
import Singleton from "./Singleton";
import { State } from "./constants";

export default abstract class BTTree<BlackBoard> extends BTNode {
  bb?: BlackBoard
  root?: BTNode

  update(dt?: number) {
    if (this.root) {
      return this.root.run(dt)
    }
    return State.Succeed
  }
}