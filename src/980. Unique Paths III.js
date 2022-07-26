/**
 * @param {number[][]} grid
 * @return {number}
 */

export function uniquePathsIII(grid) {
  const m = grid.length,
    n = grid[0].length
  let x,
    y,
    moveCount = 1,
    pathCount = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        x = i
        y = j
      } else if (grid[i][j] === 0) moveCount++
    }
  }

  backtracking(x, y)
  return pathCount

  function backtracking(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] < 0) return
    if (grid[x][y] === 2) {
      if (moveCount === 0) pathCount++
      return
    }
    grid[x][y] = -2
    moveCount--
    backtracking(x - 1, y)
    backtracking(x + 1, y)
    backtracking(x, y - 1)
    backtracking(x, y + 1)
    grid[x][y] = 0
    moveCount++
  }
}
