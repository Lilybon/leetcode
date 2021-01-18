/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */

export function numRollsToTarget(d, f, target) {
  const memo = Array.from(Array(d + 1), (_) => Array(target + 1).fill(0)),
    MOD = 1e9 + 7
  return helper(d, target)
  function helper(d, target) {
    if (target === 0 && d === 0) return 1
    if (target > f * d || target < 1 * d) return 0
    if (memo[d][target]) return memo[d][target]
    let count = 0
    for (let i = 1; i <= f; i++) {
      count += helper(d - 1, target - i)
    }
    return (memo[d][target] = count % MOD)
  }
}
