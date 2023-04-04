import { State } from "./constants"

export default abstract class BTNode {
  protected state: State = State.Ready

  run() {
    if (this.state === State.Ready) {
      this.start()
    }

    const s = this.update()
    if (s !== State.Running) {
      this.end()
    }
  }

  start() {
    this.state = State.Running
  }

  update(): State {
    return State.Succeed
  }

  end() {
    this.state = State.Ready
  }
}