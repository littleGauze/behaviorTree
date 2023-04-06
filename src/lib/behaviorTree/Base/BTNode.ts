import { State } from "./constants"

export default abstract class BTNode {
  protected state: State = State.Ready

  run() {
    if (this.state === State.Ready) {
      this.start()
    }

    const state = this.update()
    if (state !== State.Running) {
      this.end()
    }

    return state
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