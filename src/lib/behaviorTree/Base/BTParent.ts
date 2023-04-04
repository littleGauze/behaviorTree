import BTNode from "./BTNode"

export default abstract class BTParent extends BTNode {
  protected children: BTNode[] = []

  constructor(...nodes: BTNode[]) {
    super()
    this.children = nodes
  }
}