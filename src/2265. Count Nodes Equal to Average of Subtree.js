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

export function averageOfSubtree(root) {
  let count = 0
  postorder(root)
  return count
  function postorder(node) {
    if (!node) return [0, 0]
    const [leftSum, leftNodeCount] = postorder(node.left)
    const [rightSum, rightNodeCount] = postorder(node.right)
    const sum = leftSum + rightSum + node.val
    const nodeCount = leftNodeCount + rightNodeCount + 1
    if (~~(sum / nodeCount) === node.val) count++
    return [sum, nodeCount]
  }
}
