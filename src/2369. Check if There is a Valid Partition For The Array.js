/**
 * @param {number[]} nums
 * @return {boolean}
 */

export function validPartition(nums) {
  const n = nums.length,
    // first i number combination is valid
    dp = Array(n + 1).fill(false)
  dp[0] = true
  for (let length = 1; length <= n; length++) {
    if (nums[length - 1] === nums[length - 2]) dp[length] ||= dp[length - 2]
    if (
      (nums[length - 1] === nums[length - 2] &&
        nums[length - 2] === nums[length - 3]) ||
      (nums[length - 2] - 1 === nums[length - 3] &&
        nums[length - 1] - 1 === nums[length - 2])
    )
      dp[length] ||= dp[length - 3]
  }
  return dp[n]
}
