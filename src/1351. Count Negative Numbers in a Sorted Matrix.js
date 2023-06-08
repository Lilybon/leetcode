/**
 * @param {number[][]} grid
 * @return {number}
 */

export function countNegatives(grid) {
  const m = grid.length,
    n = grid[0].length
  let count = 0,
    j = n - 1
  for (let i = 0; i < m; ++i) {
    while (j >= 0 && grid[i][j] < 0) {
      j--
    }
    count += n - 1 - j
  }
  return count
}
