/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// DFS
function levelOrder(root) {
  const results = []
  dfs(root, 1)
  return tvs
  function dfs(node, level) {
    if (!node) return
    // generate new level container only when the first next level element comes up
    if (results.length < level) results.push([])
    tvs[level - 1].push(node.val)
    if (node.left) dfs(node.left, level + 1)
    if (node.right) dfs(node.right, level + 1)
  }
}

// BFS
/*
function levelOrder(root) {
  const results = []
  if (root === null) return results
  const queue = [[root]]
  while (queue.length) {
    const nodes = queue.pop()
    const nextNodes = []
    results.push([])
    for (let node of nodes) {
      results[results.length - 1].push(node.val)
      if (node.left) nextNodes.push(node.left)
      if (node.right) nextNodes.push(node.right)
    }
    if (nextNodes.length) queue.push(nextNodes)
  }
  return results
}
 */
