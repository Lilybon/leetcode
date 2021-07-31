/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

function preorder(root) {
  const results = []
  helper(root)
  return results
  function helper(node) {
    if (!node) return
    results.push(node.val)
    for (let child of node.children) {
      helper(child)
    }
  }
}
