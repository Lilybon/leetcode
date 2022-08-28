/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

export function diagonalSort(mat) {
  const m = mat.length,
    n = mat[0].length,
    candidates = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const diff = i - j
      if (!candidates.has(diff)) candidates.set(diff, [])
      candidates.get(diff).push(mat[i][j])
    }
  }
  for (let [diff, diagonalItems] of candidates) {
    diagonalItems.sort((a, b) => b - a)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const diff = i - j
      mat[i][j] = candidates.get(diff).pop()
    }
  }
  return mat
}
