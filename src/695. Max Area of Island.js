/**
 * @param {number[][]} grid
 * @return {number}
 */

export function maxAreaOfIsland(grid) {
  let max = 0,
    tmpMax = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        tmpMax = 0
        countAndMark(i, j)
        max = Math.max(max, tmpMax)
      }
    }
  }
  return max
  function countAndMark(i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      !grid[i][j]
    )
      return
    grid[i][j] = 0
    tmpMax++
    countAndMark(i - 1, j)
    countAndMark(i + 1, j)
    countAndMark(i, j - 1)
    countAndMark(i, j + 1)
  }
}
