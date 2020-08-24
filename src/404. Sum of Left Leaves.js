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
function sumOfLeftLeaves (root) {
  let total = 0
  if (root) {
    dfs(root.right, 'right')
    dfs(root.left, 'left')
  }
  return total
  function dfs (root, label) {
    if (!root) return
    if (label === 'left' && !root.left && !root.right) {
      total += root.val
    }
    dfs(root.right, 'right')
    dfs(root.left, 'left')
  }
}
 */

/*
function sumOfLeftLeaves (root) {
  if (!root) return 0
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }
  return sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left)
}
 */

function sumOfLeftLeaves(root) {
  if (!root) return 0
  const queue = [root]
  let total = 0
  while (queue.length) {
    let node = queue.shift()
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        total += node.left.val
      } else {
        queue.push(node.left)
      }
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return total
}
