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

export function sumEvenGrandparent(root) {
  let count = 0
  helper(root)
  return count
  function helper(root) {
    if (!root) return
    if (root.val % 2 === 0) {
      if (root.left?.left) count += root.left.left.val
      if (root.left?.right) count += root.left.right.val
      if (root.right?.left) count += root.right.left.val
      if (root.right?.right) count += root.right.right.val
    }
    helper(root.left)
    helper(root.right)
  }
}
