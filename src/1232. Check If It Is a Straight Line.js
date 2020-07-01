/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

const checkStraightLine = (coordinates) => {
  const n = coordinates.length
  if (n <= 1) return false
  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]
  for (let i = 2; i < n; i++) {
    let [x3, y3] = coordinates[i]
    if ((y1 - y2) * (x2 - x3) !== (y2 - y3) * (x1 - x2)) return false
  }
  return true
}
