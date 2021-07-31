/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

function postorder(root) {
  const results = []
  helper(root)
  return results
  function helper(node) {
    if (!node) return
    for (let child of node.children) {
      helper(child)
    }
    results.push(node.val)
  }
}
