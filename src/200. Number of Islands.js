/**
 * @param {character[][]} grid
 * @return {number}
 */

function numIslands(grid) {
  let count = 0
  const m = grid.length
  if (!m) return count
  const n = grid[0].length
  if (!n) return count
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++
        breakIsland(grid, i, j, m, n)
      }
    }
  }
  return count

  function breakIsland(grid, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') return
    grid[i][j] = '0'
    breakIsland(grid, i - 1, j)
    breakIsland(grid, i + 1, j)
    breakIsland(grid, i, j - 1)
    breakIsland(grid, i, j + 1)
  }
}
