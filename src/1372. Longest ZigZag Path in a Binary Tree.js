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

export function longestZigZag(root) {
  let max = 0
  dfs(root, true)
  dfs(root, false)
  return max
  function dfs(node, leftB) {
    if (!node) return -1
    if (!node.right && !node.left) return 0
    const leftV = 1 + dfs(node.left, true)
    const rightV = 1 + dfs(node.right, false)
    max = Math.max(max, leftV, rightV)
    return leftB ? rightV : leftV
  }
}
