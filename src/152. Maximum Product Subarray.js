/**
 * @param {number[]} nums
 * @return {number}
 */

export function maxProduct(nums) {
  let max = 1,
    min = 1,
    res = -Number.MAX_VALUE
  for (let val of nums) {
    ;[max, min] = [
      Math.max(val, max * val, min * val),
      Math.min(val, max * val, min * val),
    ]
    res = Math.max(res, max)
  }
  return res
}
