/**
 * @param {number[]} nums
 * @return {number}
 */

export function numIdenticalPairs(nums) {
  const counts = new Map()
  for (let num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1)
  }

  let totalCount = 0
  for (let [num, frequency] of counts) {
    totalCount += (frequency * (frequency - 1)) / 2
  }
  return totalCount
}
