/**
 * @param {number[]} nums
 * @return {number}
 */

// a XOR b XOR a = b (XOR運算律)
export function singleNumber(nums) {
  return nums.reduce((acc, num) => {
    acc ^= num
    return acc
  }, 0)
}
