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
 * @return {string}
 */

function tree2str(root) {
  if (!root) return ''
  let result = String(root.val)
  if (!root.left && !root.right) return result
  result += `(${tree2str(root.left)})`
  if (root.right) result += `(${tree2str(root.right)})`
  return result
}
