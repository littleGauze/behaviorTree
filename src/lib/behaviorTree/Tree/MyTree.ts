import BTTree from "../Base/BTTree"
import { LoggerAction } from "../Biz/Action/LoggerAction"

export default class MyTree extends BTTree {
  constructor() {
    super()
    this.init()
  }

  init() {
    this.root = new LoggerAction('hello world')
  }
}