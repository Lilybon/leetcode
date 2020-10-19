/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

// Bellman-Ford
export function networkDelayTime(times, N, K) {
  const costs = Array(N + 1).fill(Infinity)
  costs[0] = 0
  costs[K] = 0
  for (let i = 1; i < N; i++) {
    let count = 0
    for (let [u, v, t] of times) {
      if (costs[u] === Infinity) continue
      if (costs[v] > costs[u] + t) {
        costs[v] = costs[u] + t
        count++
      }
    }
    if (!count) break
  }
  let max = Math.max(...costs)
  return max === Infinity ? -1 : max
}
