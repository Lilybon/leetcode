/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  runtime faster than 100% of javascript online submission,
  memory usage less than 100% of javascript online submission,
  hurray!
  check my discuss link below
  https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/discuss/993850/Javascript-DP-100
 */
export function maxProductPath(grid) {
  const m = grid.length,
    n = grid[0].length,
    dpMax = Array(n),
    dpMin = Array(n),
    mod = 1e9 + 7
  dpMax[0] = dpMin[0] = grid[0][0]
  for (let j = 1; j < n; j++) {
    dpMax[j] = dpMin[j] = dpMax[j - 1] * grid[0][j]
  }
  for (let i = 1; i < m; i++) {
    dpMax[0] *= grid[i][0]
    dpMin[0] *= grid[i][0]
    for (let j = 1; j < n; j++) {
      let leftMax = dpMax[j - 1] * grid[i][j],
        topMax = dpMax[j] * grid[i][j],
        leftMin = dpMin[j - 1] * grid[i][j],
        topMin = dpMin[j] * grid[i][j]
      dpMax[j] = Math.max(leftMax, topMax, leftMin, topMin)
      dpMin[j] = Math.min(leftMax, topMax, leftMin, topMin)
    }
  }
  return dpMax[n - 1] >= 0 ? dpMax[n - 1] % mod : -1
}
