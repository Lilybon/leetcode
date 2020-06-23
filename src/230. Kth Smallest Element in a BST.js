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
 * @param {number} k
 * @return {number}
 */

// Stack
/*
function kthSmallest (root, k) {
  let count = 0
  let stack = []
  let node = root
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    let leftmost = stack.pop()
    count++
    if (count === k) return leftmost.val
    node = leftmost.right
  }
  return 0
}
 */

// DFS
function kthSmallest(root, k) {
  let count = 0
  let result = null
  dfs(root)
  return result
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    count++
    if (count === k) result = node.val
    dfs(node.right)
  }
}
