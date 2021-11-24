/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// O(m + n)space
/*
export function setZeroes(matrix) {
  const columnHasZero = {}
  const rowHasZero = {}
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
 */

// O(1)space - store map value on first row and first column
export function setZeroes(matrix) {
  const R = matrix.length,
    C = matrix[0].length
  let firstColHasZero = false
  for (let i = 0; i < R; i++) {
    if (!matrix[i][0]) firstColHasZero = true
    for (let j = 1; j < C; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < C; i++) {
      matrix[0][i] = 0
    }
  }
  if (firstColHasZero) {
    for (let i = 0; i < R; i++) {
      matrix[i][0] = 0
    }
  }
}
