/**
 * @param {string} n
 * @return {number}
 */

export function minPartitions(n) {
  let max = 0
  for (let digit of n) {
    max = Math.max(max, +digit)
  }
  return max
}
