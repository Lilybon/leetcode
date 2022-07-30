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
 * @return {TreeNode}
 */

function bstToGst(root) {
  let sum = 0
  dfs(root)
  return root
  function dfs(node) {
    if (!node) return
    dfs(node.right)
    const value = node.val
    node.val += sum
    sum += value
    dfs(node.left)
  }
}
