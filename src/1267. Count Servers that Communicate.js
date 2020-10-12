/**
 * @param {number[][]} grid
 * @return {number}
 */

function countServers(grid) {
  let count = 0
  const rowCounts = new Uint32Array(grid.length),
    colCounts = new Uint32Array(grid[0].length)
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        rowCounts[i]++
        colCounts[j]++
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] && (rowCounts[i] > 1 || colCounts[j] > 1)) count++
    }
  }
  return count
}
