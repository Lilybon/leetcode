/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSymmetric(root) {
  if (root === null) return true
  return isSameNode(root.left, root.right)
}

function isSameNode(left, right) {
  if (left === null && right === null) return true
  if (left !== null && right === null) return false
  if (left === null && right !== null) return false
  if (left.val !== right.val) return false
  return (
    isSameNode(left.right, right.left) && isSameNode(left.left, right.right)
  )
}
