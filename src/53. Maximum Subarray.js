/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
  let curMax = 0,
    sumMax = -Number.MAX_VALUE
  for (let val of nums) {
    curMax = val + Math.max(curMax, 0)
    sumMax = Math.max(sumMax, curMax)
  }
  return sumMax
}
