/**
 * @param {number[]} nums
 * @return {number}
 */

export function countBadPairs(nums) {
  const n = nums.length,
    map = new Map()
  for (let i = 0; i < n; i++) {
    const diff = nums[i] - i
    map.set(diff, (map.get(diff) ?? 0) + 1)
  }
  let result = (n * (n - 1)) / 2
  for (let [diff, count] of map) {
    result -= (count * (count - 1)) / 2
  }
  return result
}
