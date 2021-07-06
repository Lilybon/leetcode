/**
 * @param {number[][]} grid
 * @return {number}
 */
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

export function getMaximumGold(grid) {
  let max = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) max = Math.max(max, dfs(grid, i, j))
    }
  }
  return max
}

function dfs(grid, i, j) {
  const value = grid[i][j]
  let max = 0
  grid[i][j] = 0
  for (let [vi, vj] of directions) {
    let nextI = i + vi,
      nextJ = j + vj
    if (
      nextI >= 0 &&
      nextI < grid.length &&
      nextJ >= 0 &&
      nextJ < grid[0].length &&
      grid[nextI][nextJ] > 0
    )
      max = Math.max(max, dfs(grid, nextI, nextJ))
  }
  grid[i][j] = value
  return max + value
}
