/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

export function canFinish(numCourses, prerequisites) {
  let visited = new Set()
  let visiting = new Set()
  let adj = [...Array(numCourses)].map((_) => [])

  for (let [u, v] of prerequisites) {
    adj[v].push(u)
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false
  }
  return true

  function hasCycle(v) {
    if (visited.has(v)) return false
    if (visiting.has(v)) return true
    visiting.add(v)
    for (let nv of adj[v]) {
      if (hasCycle(nv)) return true
    }
    visiting.delete(v)
    visited.add(v)
    return false
  }
}
