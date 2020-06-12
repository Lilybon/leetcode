/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

function cloneGraph(node) {
  if (!node) return undefined
  const traverse = new Map()
  return clone(node)
  function clone(node) {
    if (traverse.has(node.val)) {
      return traverse.get(node.val)
    } else {
      const clonedNode = new Node(node.val)
      traverse.set(node.val, clonedNode)
      node.neighbors.forEach((neighbor) => {
        clonedNode.neighbors.push(clone(neighbor))
      })
      return clonedNode
    }
  }
}
