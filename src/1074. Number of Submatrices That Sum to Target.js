/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */

export function numSubmatrixSumTarget(matrix, target) {
  const m = matrix.length,
    n = matrix[0].length
  for (let row = 0; row < m; row++) {
    for (let col = 1; col < n; col++) {
      matrix[row][col] += matrix[row][col - 1]
    }
  }

  let count = 0
  for (let col1 = 0; col1 < n; col1++) {
    for (let col2 = col1; col2 < n; col2++) {
      const map = new Map([[0, 1]])
      let sum = 0
      for (let row = 0; row < m; row++) {
        sum += matrix[row][col2] - (matrix[row][col1 - 1] ?? 0)
        count += map.get(sum - target) ?? 0
        map.set(sum, (map.get(sum) ?? 0) + 1)
      }
    }
  }

  return count
}
