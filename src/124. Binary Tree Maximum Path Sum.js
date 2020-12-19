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

export function maxPathSum(root) {
  let max = -Infinity
  dfs(root)
  return max
  function dfs(node) {
    if (!node) return -Infinity
    const leftSum = dfs(node.left)
    const rightSum = dfs(node.right)
    const currentSum = node.val + leftSum + rightSum
    const emitSum = node.val + Math.max(leftSum, rightSum, 0)
    max = Math.max(max, leftSum, rightSum, currentSum, emitSum)
    return emitSum
  }
}
