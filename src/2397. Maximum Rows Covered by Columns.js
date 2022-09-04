/**
 * @param {number[][]} mat
 * @param {number} cols
 * @return {number}
 */
function maximumRows(mat, cols) {
  const m = mat.length,
    n = mat[0].length,
    visited = Array(n).fill(false)
  let max = 0
  backtracking(0, cols)
  return max
  function backtracking(start, remain) {
    if (remain === 0) {
      let tmpMax = m
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (visited[j]) continue
          if (mat[i][j]) {
            tmpMax--
            break
          }
        }
      }
      max = Math.max(max, tmpMax)
      return
    }
    for (let i = start; i < n; i++) {
      visited[i] = true
      remain--
      backtracking(i + 1, remain)
      visited[i] = false
      remain++
    }
  }
}
