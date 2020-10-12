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

function insertIntoBST(root, val) {
  let newNode = new TreeNode(val)
  if (root === null) {
    root = newNode
    return root
  }
  let current = root
  while (true) {
    if (current.val < val) {
      if (!current.right) {
        current.right = newNode
        return root
      }
      current = current.right
    } else {
      if (!current.left) {
        current.left = newNode
        return root
      }
      current = current.left
    }
  }
}
