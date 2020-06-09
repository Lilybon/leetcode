/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findMaxAverage = (nums, k) => {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let max_sum = sum
  for (let j = k; j < nums.length; j++) {
    sum += nums[j] - nums[j - k]
    max_sum = Math.max(sum, max_sum)
  }
  return max_sum / k
}
