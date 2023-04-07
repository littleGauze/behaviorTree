import Singleton from "../../../common/Singleton"

export default class BlackBoard extends Singleton {
  static get instance() {
    return this.getInstance<BlackBoard>()
  }

  hp: number = 100
  mp: number = 100
}