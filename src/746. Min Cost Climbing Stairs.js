/**
 * @param {number[]} cost
 * @return {number}
 */

/*
export function minCostClimbingStairs (cost) {
  const n = cost.length,
        dp = Array(n)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }
  return Math.min(dp[n - 1], dp[n - 2])
}
 */

export function minCostClimbingStairs(cost) {
  const n = cost.length
  let prev = cost[0],
    curr = cost[1]
  for (let i = 2; i < n; i++) {
    ;[prev, curr] = [curr, Math.min(prev, curr) + cost[i]]
  }
  return Math.min(prev, curr)
}
