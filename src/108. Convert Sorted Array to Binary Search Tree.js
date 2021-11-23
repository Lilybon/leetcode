/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  return generateBST(0, nums.length)
  function generateBST(start, end) {
    if (start >= end) return null
    const mid = Math.floor((start + end) / 2)
    const node = new TreeNode(nums[mid])
    node.left = generateBST(start, mid)
    node.right = generateBST(mid + 1, end)
    return node
  }
}
