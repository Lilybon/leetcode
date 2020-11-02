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
export function deepestLeavesSum (root) {
  const sumSet = []
  helper(root, 0)
  return sumSet[sumSet.length - 1]
  function helper (node, level) {
    if (!node) return
    if (!sumSet[level]) sumSet[level] = 0
    sumSet[level] += node.val
    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
}
 */

// BFS
export function deepestLeavesSum(root) {
  const queue = [[root]]
  let sum = 0
  while (queue.length) {
    const nodeList = queue.shift(),
      nextList = []
    let tmpSum = 0
    for (let node of nodeList) {
      if (!node) continue
      tmpSum += node.val
      if (node.left) nextList.push(node.left)
      if (node.right) nextList.push(node.right)
    }
    sum = tmpSum
    if (nextList.length) queue.push(nextList)
  }
  return sum
}
