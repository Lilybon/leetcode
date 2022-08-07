/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

export function arithmeticTriplets(nums, diff) {
  const set = new Set()
  let count = 0
  for (let num of nums) {
    if (set.has(num - diff) && set.has(num - 2 * diff)) count++
    set.add(num)
  }
  return count
}
