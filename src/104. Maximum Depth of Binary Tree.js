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

/*
function maxDepth (root) {
  if (!root) return 0
  let max = 1
  dfs(root, max)
  return max

  function dfs (node, level) {
    if (!node) return
    max = Math.max(max ,level)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
*/

function maxDepth(root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
