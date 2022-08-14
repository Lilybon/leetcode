/**
 * @param {number[]} edges
 * @return {number}
 */

export function edgeScore(edges) {
  const n = edges.length,
    scores = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    scores[edges[i]] += i
  }
  let result,
    max = -Infinity
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i]
      result = i
    }
  }
  return result
}
