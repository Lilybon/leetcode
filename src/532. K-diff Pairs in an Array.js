/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export function findPairs(nums, k) {
  if (k < 0) return 0
  const store = new Set()
  const result = new Set()
  for (let num of nums) {
    if (store.has(num + k)) result.add(num + k)
    if (store.has(num - k)) result.add(num)
    store.add(num)
  }
  return result.size
}
