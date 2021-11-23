/**
 * @param {number} n
 * @return {number}
 */

export function numTrees(n) {
  if (n < 0) return 0
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = 0
    for (let j = 1; j <= i; j++) {
      dp[i] += Math.max(dp[j - 1], 1) * Math.max(dp[i - j], 1)
    }
  }
  return dp[n]
}
