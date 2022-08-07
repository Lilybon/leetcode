/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */

export function reachableNodes(n, edges, restricted) {
  const map = new Map(),
    restrictedSet = new Set(restricted),
    visited = new Set()

  for (let [from, to] of edges) {
    if (!map.has(from)) map.set(from, new Set())
    if (!map.has(to)) map.set(to, new Set())
    map.get(from).add(to)
    map.get(to).add(from)
  }

  traverse(0)
  return visited.size
  function traverse(value) {
    if (visited.has(value) || restrictedSet.has(value)) return
    visited.add(value)
    for (let sibling of map.get(value)) {
      traverse(sibling)
    }
  }
}
