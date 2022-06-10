/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

export function shiftGrid(grid, k) {
  const m = grid.length,
    n = grid[0].length,
    totalCelllCount = m * n,
    results = Array.from(Array(m), () => Array(n)),
    steps = k % totalCelllCount
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const rawSerial = i * n + j + steps,
        nextSerial =
          rawSerial < totalCelllCount ? rawSerial : rawSerial - totalCelllCount,
        nextJ = nextSerial % n,
        nextI = (nextSerial - nextJ) / n
      results[nextI][nextJ] = grid[i][j]
    }
  }
  return results
}
