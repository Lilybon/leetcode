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
 * @return {number[]}
 */

export function largestValues(root) {
  const results = []
  preorder(root, 0)
  return results
  function preorder(node, level) {
    if (!node) return
    if (results.length < level + 1) results.push(-Infinity)
    results[level] = Math.max(node.val, results[level])
    preorder(node.left, level + 1)
    preorder(node.right, level + 1)
  }
}
