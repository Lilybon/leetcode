/**
 * @param {number[]} nums
 * @return {number}
 */

export function minimumReplacement(nums) {
  const n = nums.length
  let count = 0,
    upperBound = nums[nums.length - 1]
  for (let i = n - 2; i >= 0; i--) {
    let k = Math.ceil(nums[i] / upperBound)
    upperBound = Math.floor(nums[i] / k)
    count += k - 1
  }
  return count
}
