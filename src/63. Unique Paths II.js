/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*
export function uniquePathsWithObstacles(obstacleGrid) {
  if (obstacleGrid[0][0]) return 0
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length,
    dp = Array.from(Array(m), (_) => Array(n).fill(0))
  dp[0][0] = 1
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0]) break
    dp[i][0] = 1
  }
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i]) break
    dp[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}
 */

export function uniquePathsWithObstacles(obstacleGrid) {
  if (obstacleGrid[0][0]) return 0
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length,
    dp = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i]) break
    dp[i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[j] = obstacleGrid[i][j] ? 0 : (dp[j - 1] || 0) + dp[j]
    }
  }
  return dp[n - 1]
}
