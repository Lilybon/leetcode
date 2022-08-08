/**
 * @param {number[]} nums
 * @return {number}
 */

export function lengthOfLIS(nums) {
  const n = nums.length,
    dp = Array(n).fill(1)
  let maxLength = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    maxLength = Math.max(maxLength, dp[i])
  }
  return maxLength
}
