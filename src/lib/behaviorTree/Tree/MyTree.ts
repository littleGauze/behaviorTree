import BTSelector from "../Composite/BTSelector"
import BTSequence from "../Composite/BTSequence"
import BTTree from "../Base/BTTree"
import LoggerAction from "../Biz/Action/LoggerAction"
import ReverseDecorator from "../Biz/Condition/ReverseDecorator"

export default class MyTree extends BTTree {
  constructor() {
    super()
    this.init()
  }

  init() {
    this.root = new BTSelector(
      new ReverseDecorator(new LoggerAction('hello world')),
      new LoggerAction('hello bt'),
    )
  }
}