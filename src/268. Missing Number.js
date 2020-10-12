/**
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums) {
  const n = nums.length
  let sum = (n * (1 + n)) / 2
  for (let val of nums) sum -= val
  return sum
}
