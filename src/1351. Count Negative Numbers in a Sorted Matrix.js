/**
 * @param {number[][]} grid
 * @return {number}
 */

export function countNegatives(grid) {
  let count = 0
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      if (grid[i][j] >= 0) break
      count++
    }
  }
  return count
}
