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

export function postorderTraversal(root) {
  let traverse = []
  postorder(root)
  return traverse

  function postorder(node) {
    if (!node) return
    if (node.left) postorder(node.left)
    if (node.right) postorder(node.right)
    traverse.push(node.val)
  }
}
