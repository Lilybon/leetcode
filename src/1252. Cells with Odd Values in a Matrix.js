/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */

export function oddCells(m, n, indices) {
  const rowOddFlags = Array(m).fill(0),
    colOddFlags = Array(n).fill(0)
  indices.forEach(([r, c]) => {
    rowOddFlags[r] ^= 1
    colOddFlags[c] ^= 1
  })
  const colSums = sum(colOddFlags)
  const rowSums = sum(rowOddFlags)
  return colSums * m + rowSums * n - 2 * rowSums * colSums
}

function sum(args) {
  return args.reduce((sum, val) => sum + val, 0)
}
