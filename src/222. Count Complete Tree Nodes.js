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
 * @return {number}
 */

/*
const countNodes = root => {
  return root
    ? 1 + countNodes(root.left) + countNodes(root.right)
    : 0
}
 */

const countNodes = (root) => {
  let hLeft = 0,
    hRight = 0
  let pLeft = root,
    pRight = root
  while (pLeft) {
    hLeft++
    pLeft = pLeft.left
  }
  while (pRight) {
    hRight++
    pRight = pRight.right
  }
  return hLeft === hRight
    ? 2 ** hLeft - 1
    : 1 + countNodes(root.left) + countNodes(root.right)
}
