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
 * @param {number} sum
 * @return {boolean}
 */

function hasPathSum(root, sum) {
  return helper(root)
  function helper(root, currentSum = 0) {
    if (!root) return false
    currentSum += root.val
    if (!root.left && !root.right && currentSum === sum) return true
    return helper(root.left, currentSum) || helper(root.right, currentSum)
  }
}
