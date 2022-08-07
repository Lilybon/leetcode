/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

export function arithmeticTriplets(nums, diff) {
  const values = new Map(),
    twins = new Map(),
    triplets = new Map()

  for (let num of nums) {
    values.set(num, (values.get(num) ?? 0) + 1)
  }

  for (let num of nums) {
    const target = num - diff
    if (values.has(target))
      twins.set(num, (twins.get(num) ?? 0) + values.get(target))
  }

  for (let num of nums) {
    const target = num - diff
    if (twins.has(target))
      triplets.set(num, (triplets.get(num) ?? 0) + twins.get(target))
  }

  return [...triplets.entries()].reduce((sum, [num, count]) => sum + count, 0)
}
