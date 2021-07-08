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
 * @param {number} target
 * @return {TreeNode}
 */

function removeLeafNodes(root, target) {
  if (!root) return null
  root.left = removeLeafNodes(root.left, target)
  root.right = removeLeafNodes(root.right, target)
  return root.val === target && !root.right && !root.left ? null : root
}
