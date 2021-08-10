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

function increasingBST(root) {
  const dummyHead = new TreeNode(null)
  let currentHead = dummyHead
  inorder(root)
  return dummyHead.right
  function inorder(node) {
    if (!node) return
    inorder(node.left)
    currentHead.right = node
    currentHead = currentHead.right
    currentHead.left = null
    inorder(node.right)
  }
}
