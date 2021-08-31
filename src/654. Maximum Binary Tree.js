/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function constructMaximumBinaryTree(nums) {
  return constructSubTree(0, nums.length - 1)
  function constructSubTree(left, right) {
    if (left > right) return null
    let max = -Infinity,
      mid
    for (let i = left; i <= right; i++) {
      if (nums[i] > max) {
        max = nums[i]
        mid = i
      }
    }
    const root = new TreeNode(max)
    root.left = constructSubTree(left, mid - 1)
    root.right = constructSubTree(mid + 1, right)
    return root
  }
}
