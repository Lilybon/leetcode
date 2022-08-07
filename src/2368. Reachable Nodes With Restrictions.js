/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */

class Node {
  constructor(value) {
    this.value = value
    this.siblings = new Set()
  }
  addSibling(value) {
    this.siblings.add(value)
  }
}

export function reachableNodes(n, edges, restricted) {
  const map = new Map(),
    restrictedSet = new Set(restricted),
    visited = new Set()

  for (let [from, to] of edges) {
    if (!map.has(from)) map.set(from, new Node(from))
    if (!map.has(to)) map.set(to, new Node(to))
    map.get(from).addSibling(to)
    map.get(to).addSibling(from)
  }

  traverse(0)
  return visited.size
  function traverse(value) {
    if (visited.has(value) || restrictedSet.has(value)) return
    visited.add(value)
    for (let sibling of map.get(value).siblings) {
      traverse(sibling)
    }
  }
}
