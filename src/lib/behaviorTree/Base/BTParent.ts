import BTNode from "./BTNode"

export default abstract class BTParent extends BTNode {
  index: number = 0

  protected children: BTNode[] = []

  constructor(nodes: BTNode[]) {
    super()
    this.children = nodes
  }
}