/**
 * @param {number[]} edges
 * @return {number}
 */
export function longestCycle(edges) {
  const n = edges.length
  const visited = Array(n).fill(false)
  let maxCyclePath = -1
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue
    }
    const paths = new Map()
    let distance = 0
    for (let j = i; j !== -1; j = edges[j]) {
      if (paths.has(j)) {
        maxCyclePath = Math.max(maxCyclePath, distance - paths.get(j))
        break
      }
      if (visited[j]) {
        break
      }
      visited[j] = true
      paths.set(j, distance)
      distance++
    }
  }

  return maxCyclePath
}
