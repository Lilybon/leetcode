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

export function widthOfBinaryTree(root) {
  const lefts = []
  let maxWidth = 0

  dfs(root, 0, 0)
  return maxWidth

  function dfs(node, level, position) {
    if (!node) return
    if (level === lefts.length) lefts[level] = position

    const delta = position - lefts[level]
    maxWidth = Math.max(maxWidth, delta + 1)
    dfs(node.left, level + 1, delta * 2)
    dfs(node.right, level + 1, delta * 2 + 1)
  }
}
