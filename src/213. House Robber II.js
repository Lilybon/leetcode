/**
 * @param {number[]} nums
 * @return {number}
 */

export function rob(nums) {
  const n = nums.length
  if (n <= 0) return 0
  if (n === 1) return nums[0]
  const plan0 = robMax(nums, 0, n - 2)
  const plan1 = robMax(nums, 1, n - 1)
  return Math.max(plan0, plan1)
}

function robMax(nums, start, end) {
  let prevMax = 0,
    currMax = 0
  for (let i = start; i <= end; i++) {
    let tmp = currMax
    currMax = Math.max(prevMax + nums[i], currMax)
    prevMax = tmp
  }
  return currMax
}
