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
 * @return {TreeNode}
 */

// function lcaDeepestLeaves (root) {
//   const map = {}
//   return getLca(root)
//   function getLca (node) {
//     if (!node) return null
//     const left = getDepth(node.left)
//     const right = getDepth(node.right)
//     if (left === right) return node
//     return getLca(left > right ? node.left : node.right)
//   }
//   function getDepth (node) {
//     if (!node) return 0
//     if (map[node.val]) return map[node.val]
//     return map[node.val] = 1 + Math.max(getDepth(node.left), getDepth(node.right))
//   }
// }

export function lcaDeepestLeaves(root) {
  let result,
    maxDepth = 0
  postorder(root, 0)
  return result
  function postorder(node, depth) {
    maxDepth = Math.max(maxDepth, depth)
    if (!node) return depth
    const leftMaxDepth = postorder(node.left, depth + 1)
    const rightMaxDepth = postorder(node.right, depth + 1)
    if (leftMaxDepth === maxDepth && rightMaxDepth === maxDepth) result = node
    return Math.max(leftMaxDepth, rightMaxDepth)
  }
}
