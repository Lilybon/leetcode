/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

export function maxSumSubmatrix(matrix, k) {
  const m = matrix.length,
    n = matrix[0].length,
    prefixSums = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefixSums[i][j] =
        prefixSums[i - 1][j] +
        prefixSums[i][j - 1] -
        prefixSums[i - 1][j - 1] +
        matrix[i - 1][j - 1]
      for (let r = 1; r <= i; r++) {
        for (let c = 1; c <= j; c++) {
          let sum = prefixSums[i][j]
          if (r > 1) sum -= prefixSums[r - 1][j]
          if (c > 1) sum -= prefixSums[i][c - 1]
          if (r > 1 && c > 1) sum += prefixSums[r - 1][c - 1]
          if (sum <= k) max = Math.max(max, sum)
        }
      }
    }
  }
  return max
}
