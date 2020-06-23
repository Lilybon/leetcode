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

// BFS
/*
function findSecondMinimumValue (root) {
  const first = root.val
  let second = Number.MAX_VALUE
  let queue = [root]
  while (queue.length) {
    let node = queue.pop()
    if (node.val > first && node.val < second) second = node.val
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return second === Number.MAX_VALUE ? -1 : second
}
 */

// DFS
function findSecondMinimumValue(root) {
  const first = root.val
  let second = Number.MAX_VALUE
  dfs(root)
  return second === Number.MAX_VALUE ? -1 : second
  function dfs(node) {
    if (!node) return
    if (node.val > first && node.val < second) second = node.val
    dfs(node.left)
    dfs(node.right)
  }
}
