/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export class BSTIterator {
  /**
   * @param {TreeNode} root
   */
  constructor(root) {
    this.stack = []
    this._collectLeftNodes(root)
  }
  /**
   * @return {number}
   */
  next() {
    const node = this.stack.pop()
    if (node.right) this._collectLeftNodes(node.right)
    return node.val
  }
  /**
   * @return {boolean}
   */
  hasNext() {
    return !!this.stack.length
  }
  /**
   * @return {undefined}
   */
  _collectLeftNodes(node) {
    let current = node
    while (current) {
      this.stack.push(current)
      current = current.left
    }
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
