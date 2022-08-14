/**
 * @param {number[]} edges
 * @return {number}
 */
export function edgeScore(edges) {
  const map = new Map()
  for (let i = 0; i < edges.length; i++) {
    map.set(edges[i], (map.get(edges[i]) ?? 0) + i)
  }
  let result,
    max = -Infinity
  for (let [node, score] of map) {
    if (score > max) {
      max = score
      result = node
    } else if (score === max && node < result) {
      result = node
    }
  }
  return result
}
