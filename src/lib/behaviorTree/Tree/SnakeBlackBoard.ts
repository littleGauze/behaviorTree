import { Ref } from "vue";
import { Position } from "../../../common/GameObject";
import Blackboard from "../Biz/Blackboard";
import Snake from "../../../game/Snake";
import { randomPos } from "../../../common/Utils";
import Singleton from "../Base/Singleton";

export default class SnakeBlackBoard extends Singleton {

  public entity: any

  static get ins() {
    return this.getInstance<SnakeBlackBoard>()
  }

  static createNew() {
    return new SnakeBlackBoard()
  }

  get node() {
    return this.entity
  }

  get pos() {
    return this.entity.pos
  }

  set pos(value: Position) {
    this.entity.pos = value
  }

  setPos(x: number | Position, y: number) {
    if (x instanceof Position) {
      this.pos = x
    } else {
      this.pos = new Position(x, y)
    }
  }

  randomPos() {
    return randomPos(Blackboard.instance.screenWidth, Blackboard.instance.screenHeight)
  }

  randomTopPos() {
    return randomPos(Blackboard.instance.screenWidth, 0)
  }
}
