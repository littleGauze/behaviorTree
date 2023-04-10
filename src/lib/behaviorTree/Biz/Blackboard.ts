import { Ref } from "vue"
import Singleton from "../../../common/Singleton"
import { randomPos } from "../../../common/Utils"
import Snake from "../../../components/Snake.vue"

export default class BlackBoard extends Singleton {
  static get instance() {
    return this.getInstance<BlackBoard>()
  }

  stage?: Ref<HTMLDivElement | undefined>
  snakes?: Ref<InstanceType<typeof Snake>[]>

  get screenWidth() {
    return this.stage?.value?.clientWidth || 0
  }

  get screenHeight() {
    return this.stage?.value?.clientHeight || 0
  }

  randomPos() {
    return randomPos(this.screenWidth, this.screenHeight)
  }

  randomTopPos() {
    return randomPos(this.screenWidth, 0)
  }
}