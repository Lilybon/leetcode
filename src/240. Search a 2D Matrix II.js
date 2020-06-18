/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = (matrix, target) => {
  const m = matrix.length
  if (!m) return false
  const n = matrix[0].length
  if (!n) return false
  let i = m - 1,
    j = 0
  while (true) {
    if (i < 0 || j >= n) break
    else if (matrix[i][j] > target) i--
    else if (matrix[i][j] < target) j++
    else return true
  }
  return false
}
