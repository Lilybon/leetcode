/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// 1. DFS
/*
export function findTargetSumWays(nums, S) {
  return dfs(0, 0)
  function dfs (idx, sum) {
    if (idx === nums.length) return sum === S ? 1 : 0
    return dfs(idx + 1, sum + nums[idx]) + dfs(idx + 1, sum - nums[idx])
  }
}
 */

// 2. DFS + memorization
/*
export function findTargetSumWays(nums, S) {
  let memo = new Array(nums.length)
    .fill(0)
    .map(() => new Map())
  return dfs(0, 0)

  function dfs (idx, sum) {
    if (idx === nums.length) return sum === S ? 1 : 0
    if (memo[idx].has(sum)) return memo[idx].get(sum)
    let ans = dfs(idx + 1, sum + nums[idx]) + dfs(idx + 1, sum - nums[idx])
    memo[idx].set(sum, ans)
    return ans
  }
}
 */

// 3. DP
export function findTargetSumWays(nums, S) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum < S || (sum + S) % 2 === 1) return 0
  const total = (sum + S) / 2
  let dp = new Uint32Array(total + 1)
  dp[0] = 1
  for (let num of nums) {
    for (let i = total; i >= num; i--) {
      dp[i] += dp[i - num]
    }
  }
  return dp[total] || 0
}
