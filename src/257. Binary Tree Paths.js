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
 * @return {string[]}
 */

export function binaryTreePaths(root) {
  const results = []
  dfs(root)
  return results
  function dfs(node, path = '') {
    if (!node) return
    path += node.val
    if (!node.left && !node.right) {
      results.push(path)
    } else {
      path += '->'
      dfs(node.left, path)
      dfs(node.right, path)
    }
  }
}
