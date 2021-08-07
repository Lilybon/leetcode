/**
 * @param {number[][]} mat
 * @return {number[]}
 */

export function findDiagonalOrder(mat) {
  const directions = [
      [-1, 1],
      [1, -1],
    ],
    results = [],
    m = mat.length,
    n = mat[0].length
  let i = 0,
    j = 0,
    k = 0
  for (let count = 0; count < m * n; count++) {
    results.push(mat[i][j])
    const [vi, vj] = directions[k]
    i += vi
    j += vj
    if (i >= m) {
      i = m - 1
      j += 2
      k = 1 - k
    }
    if (j >= n) {
      i += 2
      j = n - 1
      k = 1 - k
    }
    if (i < 0) {
      i = 0
      k = 1 - k
    }
    if (j < 0) {
      j = 0
      k = 1 - k
    }
  }
  return results
}
