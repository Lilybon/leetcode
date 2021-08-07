/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

function levelOrder(root) {
  const results = [],
    queue = [[root]]
  if (!root) return results
  while (queue.length) {
    const nodes = queue.shift()
    const vals = nodes.map((node) => node.val)
    const children = nodes.reduce(
      (list, node) => list.concat(node.children),
      []
    )
    results.push(vals)
    if (children.length) queue.push(children)
  }
  return results
}
