/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
export function searchMatrix (matrix, target) {
  const m = matrix.length
  if (!m) return false 
  const n = matrix[0].length
  if (!n) return false
  if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) return false
  for (let i = 0; i < m; i++) {
    if (matrix[i][n - 1] < target) continue
    for(let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === target) return true
    }
    return false
  }
}
 */

export function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false
  const [m, n] = [matrix.length, matrix[0].length]
  let [r, c] = [0, n - 1]
  while (r < m && c >= 0) {
    const compare = matrix[r][c]
    if (compare === target) return true
    if (compare > target) c--
    else r++
  }
  return false
}
