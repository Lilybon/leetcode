/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function searchInsert(nums, target) {
  if (target < nums[0]) return 0
  const len = nums.length
  if (target > nums[len - 1]) return len
  for (let i = 0; i < len; i++) {
    if (target == nums[i] || target < nums[i]) return i
  }
}
