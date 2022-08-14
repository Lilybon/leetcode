/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

export function largestLocal(grid) {
  const n = grid.length,
    results = Array.from(Array(n - 2), () => Array(n - 2))
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      let max = -Infinity
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          max = Math.max(max, grid[i + k][j + l])
        }
      }
      results[i][j] = max
    }
  }
  return results
}
