/**
 * @param {number[]} nums
 * @return {number}
 */

// a XOR b XOR a = b (XOR運算律)
const singleNumber = (nums) =>
  nums.reduce((acc, num) => {
    acc ^= num
    return acc
  }, 0)
