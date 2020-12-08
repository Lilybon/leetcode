/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

export function getAllElements(root1, root2) {
  const list1 = [],
    list2 = [],
    result = []
  let idx1 = 0,
    idx2 = 0
  inorder(root1, list1)
  inorder(root2, list2)
  while (idx1 < list1.length && idx2 < list2.length) {
    if (list1[idx1] < list2[idx2]) {
      result.push(list1[idx1])
      idx1++
    } else {
      result.push(list2[idx2])
      idx2++
    }
  }
  while (idx1 < list1.length) {
    result.push(list1[idx1])
    idx1++
  }
  while (idx2 < list2.length) {
    result.push(list2[idx2])
    idx2++
  }
  return result
}

function inorder(root, list) {
  if (!root) return
  inorder(root.left, list)
  list.push(root.val)
  inorder(root.right, list)
}
