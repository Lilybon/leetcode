/**
 * @param {number[]} nums
 * @return {number}
 */

export function numberOfArithmeticSlices(nums) {
  const n = nums.length,
    dp = Array(n + 1).fill(0)

  for (let i = 3; i <= n; i++) {
    if (nums[i - 3] - nums[i - 2] === nums[i - 2] - nums[i - 1]) {
      dp[i] += dp[i - 1] + 1
    }
  }
  return dp.reduce((count, num) => count + num, 0)
}
