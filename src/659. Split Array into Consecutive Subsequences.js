/**
 * @param {number[]} nums
 * @return {boolean}
 */

export function isPossible(nums) {
  const frequencies = new Map()
  for (let num of nums) {
    frequencies.set(num, (frequencies.get(num) ?? 0) + 1)
  }
  const needs = new Map()
  for (let num of nums) {
    if (frequencies.get(num) <= 0) continue
    if (needs.get(num) > 0) {
      needs.set(num, needs.get(num) - 1)
      frequencies.set(num, frequencies.get(num) - 1)
      needs.set(num + 1, (needs.get(num + 1) ?? 0) + 1)
    } else if (
      frequencies.get(num) > 0 &&
      frequencies.get(num + 1) > 0 &&
      frequencies.get(num + 2) > 0
    ) {
      frequencies.set(num, frequencies.get(num) - 1)
      frequencies.set(num + 1, frequencies.get(num + 1) - 1)
      frequencies.set(num + 2, frequencies.get(num + 2) - 1)
      needs.set(num + 3, (needs.get(num + 3) ?? 0) + 1)
    } else {
      return false
    }
  }
  return true
}
