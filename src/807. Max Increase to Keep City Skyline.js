/**
 * @param {number[][]} grid
 * @return {number}
 */

export function maxIncreaseKeepingSkyline(grid) {
  const n = grid.length,
    rowMaxs = Array(n).fill(0),
    colMaxs = Array(n).fill(0),
    results = Array.from(Array(n), () => Array(n))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowMaxs[i] = Math.max(rowMaxs[i], grid[i][j])
      colMaxs[i] = Math.max(colMaxs[i], grid[j][i])
    }
  }

  let sum = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.min(rowMaxs[i], colMaxs[j]) - grid[i][j]
    }
  }

  return sum
}
