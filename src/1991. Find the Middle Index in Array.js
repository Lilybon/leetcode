/**
 * @param {number[]} nums
 * @return {number}
 */

export function findMiddleIndex(nums) {
  let leftSum = 0,
    rightSum = nums.reduce((sum, val) => sum + val, 0)
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i]
    if (leftSum === rightSum) return i
    leftSum += nums[i]
  }
  return -1
}
