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
 * @return {number[]}
 */

export function rightSideView(root) {
  const results = []
  if (!root) return results
  const queue = [[root]]
  while (queue.length) {
    let currentNodes = queue.shift()
    results.push(currentNodes[0].val)
    let nextNodes = currentNodes.reduce((list, node) => {
      if (node.right) list.push(node.right)
      if (node.left) list.push(node.left)
      return list
    }, [])
    if (nextNodes.length) queue.push(nextNodes)
  }
  return results
}
