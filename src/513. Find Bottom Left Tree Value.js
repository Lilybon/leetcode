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
 * @return {number}
 */

function findBottomLeftValue(root) {
  let maxLevel = 0
  let value = root.val
  helper(root, 0)
  return value
  function helper(node, level) {
    if (!node) return
    if (!node.left && level > maxLevel) {
      maxLevel = level
      value = node.val
    } else {
      helper(node.left, level + 1)
    }
    helper(node.right, level + 1)
  }
}
