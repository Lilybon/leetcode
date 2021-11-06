/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
export function uniquePaths (m, n) {
  if (!m || !n) return 1
  const dp = Array.from(Array(m), () => Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 1
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}
*/

export function uniquePaths(m, n) {
  let result = 1
  for (let i = n; i <= m + n - 2; i++) {
    result *= i / (i - n + 1)
  }
  return result
}
