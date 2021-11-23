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

// DFS
/*
function zigzagLevelOrder (root) {
  let traversal =[]
  dfs(root, 0)
  return traversal

  function dfs (node, level) {
    if (!node) return
    traversal[level] = traversal[level] || []
    if (level % 2 === 0) traversal[level].push(node.val)
    else traversal[level].unshift(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
 */

// BFS
function zigzagLevelOrder(root) {
  const traversal = []
  if (!root) return traversal
  const queue = [[root]]
  let level = 0
  while (queue.length) {
    const nodes = queue.shift()
    const vals = nodes.map((node) => node.val)
    traversal.push(level % 2 === 0 ? vals : vals.reverse())
    const nextNodes = nodes.reduce((list, node) => {
      if (node.left) list.push(node.left)
      if (node.right) list.push(node.right)
      return list
    }, [])
    level++
    if (nextNodes.length) queue.push(nextNodes)
  }
  return traversal
}
