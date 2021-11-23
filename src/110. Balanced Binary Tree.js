/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

export function isBalanced(root) {
  let isValid = true
  postorder(root)
  return result
  function postorder(node) {
    if (!node || !isValid) return 0
    const leftHeight = postorder(node.left)
    const rightHeight = postorder(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      isValid = false
      return 0
    }
    return 1 + Math.max(leftHeight, rightHeight)
  }
}
