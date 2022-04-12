/**
 * @param {number[]} time
 * @return {number}
 */

export function numPairsDivisibleBy60(time) {
  const n = 60,
    remainder2Count = new Map()
  let result = 0
  time.forEach((val) => {
    const left = val % n,
      right = (n - left) % n
    result += remainder2Count.has(right) ? remainder2Count.get(right) : 0
    remainder2Count.set(left, (remainder2Count.get(left) || 0) + 1)
  })
  return result
}
