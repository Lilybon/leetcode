/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

function searchBST(root, val) {
  if (!root) return null
  let current = root
  while (current) {
    if (current.val === val) return current
    else if (current.val > val) current = current.left
    else current = current.right
  }
  return null
}
