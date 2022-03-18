/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */

export function countSubIslands(grid1, grid2) {
  // Non-pure function
  // Define grid2[i][j] = 2 to be an visited island.
  const m = grid2.length,
    n = grid2[0].length
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] !== 1) continue
      if (isSubIsland(i, j)) count++
      breakIsland(i, j)
    }
  }
  return count

  function isSubIsland(x, y) {
    if (
      m <= x ||
      x < 0 ||
      n <= y ||
      y < 0 ||
      grid2[x][y] === 0 ||
      grid2[x][y] === 2
    )
      return true
    grid2[x][y] = 2
    if (grid1[x][y] === 0) return false
    return (
      isSubIsland(x - 1, y) &&
      isSubIsland(x + 1, y) &&
      isSubIsland(x, y - 1) &&
      isSubIsland(x, y + 1)
    )
  }

  function breakIsland(x, y) {
    if (m <= x || x < 0 || n <= y || y < 0 || grid2[x][y] === 0) return
    grid2[x][y] = 0
    breakIsland(x - 1, y)
    breakIsland(x + 1, y)
    breakIsland(x, y - 1)
    breakIsland(x, y + 1)
  }
}
