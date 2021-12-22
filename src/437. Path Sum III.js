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
 * @param {number} targetSum
 * @return {number}
 */

export function pathSum(root, targetSum) {
  if (!root) return 0
  return (
    sumUp(root, 0, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  )
}

function sumUp(root, currentSum, targetSum) {
  if (!root) return 0
  currentSum += root.val
  return (
    (currentSum === targetSum) +
    sumUp(root.left, currentSum, targetSum) +
    sumUp(root.right, currentSum, targetSum)
  )
}
