/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */

export function minPathCost(grid, moveCost) {
  const m = grid.length,
    n = grid[0].length,
    dp = Array.from(Array(m), () => Array(n).fill(Number.MAX_SAFE_INTEGER))

  for (let i = 0; i < n; i++) {
    dp[0][i] = grid[0][i]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + moveCost[grid[i - 1][k]][j] + grid[i][j],
        )
      }
    }
  }

  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[m - 1][i])
  }

  return min
}
