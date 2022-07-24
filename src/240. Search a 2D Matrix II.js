/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

export function searchMatrix(matrix, target) {
  const m = matrix.length,
    n = matrix[0].length
  let i = m - 1,
    j = 0
  while (i >= 0 && j < n) {
    if (matrix[i][j] > target) i--
    else if (matrix[i][j] < target) j++
    else return true
  }
  return false
}
