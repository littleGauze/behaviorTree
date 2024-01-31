import { State } from "../constants"
import BTSelector from "./BTSelector"

export default class BTRandomSequence extends BTSelector {
  start() {
    super.start()
    this.shuffle()
  }

  shuffle() {
    const len = this.children.length
    this.children.forEach((it, i) => {
      const idx = Math.floor(len * Math.random())
      this.children[i] = this.children[idx]
      this.children[idx] = it
    })
  }
}