import { State } from "./constants"

export default abstract class BTNode {
  protected state: State = State.Ready

  run(dt?: number) {
    if (this.state === State.Ready) {
      this.start()
    }

    const state = this.update(dt)
    if (state !== State.Running) {
      this.end()
    }

    return state
  }

  start() {
    this.state = State.Running
  }

  update(dt?: number): State {
    return State.Succeed
  }

  end() {
    this.state = State.Ready
  }
}