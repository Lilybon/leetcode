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
 * @return {number[][]}
 */

function levelOrderBottom(root) {
  let traverse = []
  dfs(root, 0)
  return traverse.reverse()
  function dfs(node, level) {
    if (!node) return
    if (!traverse[level]) traverse[level] = []
    traverse[level].push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
