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

/*
const invertTree = root => {
  invertNode(root)
  return root
}

const invertNode = node => {
  if (!node) return
  [node.left, node.right] = [node.right, node.left]
  invertNode(node.left)s
  invertNode(node.right)
}
 */

const invertTree = (root) => {
  if (!root) return root
  let left = root.right
  let right = root.left
  root.left = invertTree(left)
  root.right = invertTree(right)
  return root
}
