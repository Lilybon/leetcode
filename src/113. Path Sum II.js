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
 * @param {number} sum
 * @return {number[][]}
 */

function pathSum(root, sum) {
  let paths = []
  helper(root, sum, [])
  return paths
  function helper(node, tmpSum, path) {
    if (!node) return
    path.push(node.val)
    tmpSum -= node.val
    if (!node.left && !node.right && tmpSum === 0) {
      paths.push([...path]) // avoid collection mutated by dfs helper
    } else {
      helper(node.left, tmpSum, path)
      helper(node.right, tmpSum, path)
    }
    path.pop() // remove current node while call stack release
  }
}
