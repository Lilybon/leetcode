/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function isValidBST_Recursive(node, min, max) {
  if (node === null) return true
  if (node.val >= max || node.val <= min) return false
  return (
    isValidBST_Recursive(node.right, node.val, max) &&
    isValidBST_Recursive(node.left, min, node.val)
  )
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root) {
  return isValidBST_Recursive(root, -Infinity, Infinity)
}
