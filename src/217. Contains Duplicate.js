/**
 * @param {number[]} nums
 * @return {boolean}
 */

export function containsDuplicate(nums) {
  const dict = new Set()
  for (let num of nums) {
    if (dict.has(num)) return true
    dict.add(num, true)
  }
  return false
}
