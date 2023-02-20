/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function searchInsert(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
