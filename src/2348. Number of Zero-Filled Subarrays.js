/**
 * @param {number[]} nums
 * @return {number}
 */
function zeroFilledSubarray(nums) {
  let left = 0
  let count = 0
  for (let right = 0; right <= nums.length; ++right) {
    if (right === nums.length || nums[right] !== 0) {
      const n = right - left
      count += (n * (n + 1)) / 2
      left = right + 1
    }
  }
  return count
}
