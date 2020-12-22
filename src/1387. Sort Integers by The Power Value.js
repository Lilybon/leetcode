/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */

const getPowerStep = (function () {
  const memo = {}
  return function helper(n) {
    if (memo[n]) return memo[n]
    if (n === 1) return 0
    return (memo[n] = (n % 2 ? helper(3 * n + 1) : helper(n / 2)) + 1)
  }
})()

export function getKth(lo, hi, k) {
  const steps = Array.from(Array(hi - lo + 1), (_, idx) => [lo + idx, null])
  for (let i = lo; i <= hi; i++) {
    steps[i - lo][1] = getPowerStep(i)
  }
  steps.sort((a, b) => a[1] - b[1])
  return steps[k - 1][0]
}
