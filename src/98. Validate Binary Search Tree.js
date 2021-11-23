/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function isValidBSTRecursive(node, min, max) {
  if (node === null) return true
  if (node.val >= max || node.val <= min) return false
  return (
    isValidBSTRecursive(node.right, node.val, max) &&
    isValidBSTRecursive(node.left, min, node.val)
  )
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root) {
  return isValidBSTRecursive(root, -Infinity, Infinity)
}
