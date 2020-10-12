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
  const generateBST = (start, end) => {
    if (start >= end) return null
    const mid = Math.floor((start + end) / 2)
    let node = new TreeNode(nums[mid])
    node.left = generateBST(start, mid)
    node.right = generateBST(mid + 1, end)
    return node
  }
  return generateBST(0, nums.length)
}
