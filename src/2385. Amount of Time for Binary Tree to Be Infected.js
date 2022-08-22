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
 * @param {number} start
 * @return {number}
 */

function amountOfTime(root, start) {
  const graph = new Map(),
    queue = [[0, root]]

  while (queue.length) {
    const [parent, node] = queue.shift()
    if (parent !== 0) {
      if (!graph.has(parent)) graph.set(parent, new Set())
      if (!graph.has(node.val)) graph.set(node.val, new Set())
      graph.get(parent).add(node.val)
      graph.get(node.val).add(parent)
    }
    if (node.left) queue.push([node.val, node.left])
    if (node.right) queue.push([node.val, node.right])
  }

  const seen = new Set()
  let minutes = -1
  queue.length = 0
  queue.push(start)
  while (queue.length) {
    let n = queue.length
    while (n > 0) {
      const value = queue.shift()
      if (graph.has(value)) {
        for (let child of graph.get(value)) {
          if (seen.has(child)) continue
          seen.add(value)
          queue.push(child)
        }
      }
      n--
    }
    minutes++
  }

  return minutes
}
