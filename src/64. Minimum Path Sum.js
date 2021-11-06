/**
 * @param {number[][]} grid
 * @return {number}
 */

// pure function
/*
export function minPathSum (grid) {
  const m = grid.length
  if (!m) return 0
  const n = grid[0].length
  if (!n) return 0
  const dp = Array.from(Array(m + 1), () => Array(n + 1))
  for (let i = 2; i <= m; i++) dp[i][0] = Infinity
  for (let j = 2; j <= n; j++)  dp[0][j] = Infinity
  dp[1][0] = 0
  dp[0][1] = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j -1]) + grid[i - 1][j - 1]
    }
  }
  return dp[m][n]
}
 */

// non-pure function (great runtime and memory usage but mutate grid)
export function minPathSum(grid) {
  const m = grid.length
  if (!m) return 0
  const n = grid[0].length
  if (!n) return 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        if (i) grid[i][j] += grid[i - 1][j]
        if (j) grid[i][j] += grid[i][j - 1]
      } else {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
      }
    }
  }
  return grid[m - 1][n - 1]
}
