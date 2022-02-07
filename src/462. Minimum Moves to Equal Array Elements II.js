/**
 * @param {number[]} nums
 * @return {number}
 */

export function minMoves2(nums) {
  nums.sort((a, b) => a - b)
  const median = nums[Math.floor(nums.length / 2)]
  return nums.reduce((count, val) => count + Math.abs(val - median), 0)
}
