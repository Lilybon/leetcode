/**
 * @param {number[]} nums
 * @return {boolean}
 */

export function isMonotonic(nums) {
  return isIncreasing(nums) || isDecreasing(nums)
}

function isIncreasing(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return false
  }
  return true
}

function isDecreasing(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) return false
  }
  return true
}
