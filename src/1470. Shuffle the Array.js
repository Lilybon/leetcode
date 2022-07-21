/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

export function shuffle(nums, n) {
  const m = 2 * n,
    results = Array(2 * n)
  let i = 0,
    j = 0
  while (i < m) {
    results[i] = nums[j]
    results[i + 1] = nums[j + n]
    i += 2
    j++
  }
  return results
}
