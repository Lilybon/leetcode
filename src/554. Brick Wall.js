/**
 * @param {number[][]} wall
 * @return {number}
 */

export function leastBricks(wall) {
  const map = {}
  let maxCount = 0
  for (let row of wall) {
    // sum is represented for each brick edge in the middle of wall
    let sum = 0
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i]
      map[sum] = (map[sum] || 0) + 1
    }
  }
  for (let edge in map) {
    maxCount = Math.max(maxCount, map[edge])
  }
  return wall.length - maxCount
}
