/**
 * @param {number[]} nums
 * @return {number}
 */

export function countBadPairs(nums) {
  const n = nums.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const sum = nums[i] - i
    map.set(sum, (map.get(sum) ?? 0) + 1)
  }
  let result = (n * (n - 1)) / 2
  for (let [sum, count] of map) {
    result -= (count * (count - 1)) / 2
  }
  return result
}
