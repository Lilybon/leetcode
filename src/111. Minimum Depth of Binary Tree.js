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

// DFS
/*
function minDepth (root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  let l = root.left ? minDepth(root.left) : Infinity
  let r = root.right ? minDepth(root.right) : Infinity
  return Math.min(l, r) + 1
}
 */

// BFS
function minDepth(root) {
  if (!root) return 0
  let min = 1
  const queue = [[root]]
  while (queue.length) {
    let currents = queue.pop()
    let nexts = []
    for (let node of currents) {
      if (!node.left && !node.right) return min
      if (node.left) nexts.push(node.left)
      if (node.right) nexts.push(node.right)
    }
    queue.unshift(nexts)
    min++
  }
}
