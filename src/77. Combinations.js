/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

export function combine(n, k) {
  const results = new Array(),
    visited = new Uint8Array(n + 1),
    row = new Array()
  dfs()
  return results
  function dfs(start = 1) {
    if (row.length === k) {
      results.push([...row])
      return
    }
    for (let i = start; i <= n; i++) {
      if (visited[i]) continue
      visited[i] = 1
      row.push(i)
      dfs(i + 1)
      visited[i] = 0
      row.pop()
    }
  }
}
