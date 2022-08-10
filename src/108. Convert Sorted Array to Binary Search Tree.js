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

export function sortedArrayToBST(nums) {
  return helper(0, nums.length)
  function helper(start, end) {
    if (start >= end) return null
    const mid = Math.floor((start + end) / 2)
    return new TreeNode(nums[mid], helper(start, mid), helper(mid + 1, end))
  }
}
