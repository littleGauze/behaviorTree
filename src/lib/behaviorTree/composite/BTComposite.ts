import BTParent from "../Base/BTParent"
import { State } from "../Base/constants"

export default class BTComposite extends BTParent {

  private index: number = 0
  
  update() {
    if (this.index < this.children.length) {
      const node = this.children[this.index]
    }
    return State.Running
  }
}