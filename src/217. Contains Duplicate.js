/**
 * @param {number[]} nums
 * @return {boolean}
 */

export function containsDuplicate(nums) {
  let dict = new Map()
  for (let num of nums) {
    if (dict.get(num)) return true
    dict.set(num, true)
  }
  return false
}
