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

const sumNumbers = (root, sum = 0) => {
  if (!root) return 0
  sum = 10 * sum + root.val
  if (!root.left && !root.right) return sum
  return sumNumbers(root.left, sum) + sumNumbers(root.right, sum)
}
