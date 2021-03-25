/**
 * @param {number[][]} matrix
 * @return {number}
 */

export function minFallingPathSum(matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    dp = Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    let prev = [...dp]
    for (let j = 0; j < n; j++) {
      dp[j] =
        Math.min(prev[j - 1] || Infinity, prev[j], prev[j + 1] || Infinity) +
        matrix[i][j]
    }
  }
  return Math.min(...dp)
}
