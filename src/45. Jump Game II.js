/**
 * @param {number[]} nums
 * @return {number}
 */

/*
function jump (nums) {
  // define a dp array which cell of index i represents min jumps from last index to index i
  const dp = Array(nums.length).fill(Infinity)
  dp[nums.length - 1] = 0
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = nums[i]; j > 0; j--) {
      const jumpIndex = Math.min(i + j, nums.length - 1)
      dp[i] = Math.min(dp[jumpIndex] + 1, dp[i])
    }
  }
  return dp[0]
}
 */

export function jump(nums) {
  let jumps = 0,
    end = 0,
    farthest = 0
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i])
    if (i === end) {
      jumps++
      end = farthest
    }
  }
  return jumps
}
