/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */

function buildMatrix(k, rowConditions, colConditions) {
  const rows = helper(rowConditions),
    cols = helper(colConditions)
  if (!rows.length || !cols.length) return []
  const matrix = Array.from(Array(k), () => Array(k).fill(0))
  for (let i = 0; i < k; i++) {
    matrix[rows.indexOf(i)][cols.indexOf(i)] = i + 1
  }
  return matrix
  function helper(conditions) {
    const nxt = Array.from(Array(k), () => new Set()),
      indegree = Array(k).fill(0),
      queue = [],
      results = [],
      tupleConditions = [...new Set(conditions.map(String))].map((value) =>
        value.split(',').map((v) => +v)
      )
    for (let [from, to] of tupleConditions) {
      nxt[from - 1].add(to - 1)
      indegree[to - 1]++
    }
    for (let i = 0; i < k; i++) {
      if (indegree[i] === 0) queue.push(i)
    }
    while (queue.length) {
      const from = queue.shift()
      results.push(from)
      for (let to of nxt[from]) {
        indegree[to]--
        if (indegree[to] === 0) queue.push(to)
      }
    }
    return results.length === k ? results : []
  }
}
