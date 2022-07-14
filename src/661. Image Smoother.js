/**
 * @param {number[][]} img
 * @return {number[][]}
 */

export function imageSmoother(img) {
  const m = img.length,
    n = img[0].length,
    result = Array.from(Array(m), () => Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = getSmootherValue(i, j)
    }
  }
  return result
  function getSmootherValue(r, c) {
    let cellSum = 0,
      cellCount = 0
    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (i >= 0 && i < m && j >= 0 && j < n) {
          cellSum += img[i][j]
          cellCount += 1
        }
      }
    }
    return Math.floor(cellSum / cellCount)
  }
}
