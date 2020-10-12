/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

/*
function bstFromPreorder (preorder, start = 0, end = preorder.length - 1) {
  if (start > end) return null
  const val = preorder[start]
  let node = new TreeNode(val)
  if (start === end) return node
  let mid = start + 1
  while (mid <= end) {
    if (preorder[mid] > val) break
    mid++
  }
  node.left = bstFromPreorder(preorder, start + 1, mid - 1)
  node.right = bstFromPreorder(preorder, mid, end)
  return node
}
 */

function bstFromPreorder(preorder) {
  let root = new TreeNode(preorder[0])
  for (let i = 1; i < preorder.length; i++) {
    setNode(root, preorder[i])
  }
  return root
}

function setNode(tree, val) {
  if (tree.val > val) {
    if (tree.left) setNode(tree.left, val)
    else tree.left = new TreeNode(val)
  } else {
    if (tree.right) setNode(tree.right, val)
    else tree.right = new TreeNode(val)
  }
}
