/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function setZeroes(matrix) {
  let columnHasZero = {}
  let rowHasZero = {}
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        columnHasZero[i] = true
        rowHasZero[j] = true
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (columnHasZero[i] || rowHasZero[j]) {
        matrix[i][j] = 0
      }
    }
  }
}
