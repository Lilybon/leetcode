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

function maxLevelSum(root) {
  let queue = [],
    level = 1,
    result = 1,
    globalMax = 0
  queue.push([root])
  while (queue.length) {
    let nodeList = queue.shift(),
      localMax = 0,
      nextList = []
    for (let node of nodeList) {
      localMax += node.val
      if (node.left) nextList.push(node.left)
      if (node.right) nextList.push(node.right)
    }
    if (localMax > globalMax) {
      result = level
      globalMax = localMax
    }
    level++
    if (nextList.length) queue.push(nextList)
  }
  return result
}
