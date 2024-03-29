/**
 * @param {number[]} nums
 * @return {number}
 */

// function majorityElement(nums) {
//   const arr = []
//   const major = nums.length / 2
//   for (let i = 0; i < nums.length; i++) {
//     const v = nums[i]
//     if (!arr[v]) arr[v] = 0
//     arr[v] += 1
//     if (arr[v] >= major) return v
//   }
// }

// Boyer–Moore majority vote algorithm
export function majorityElement(nums) {
  let major,
    count = 0
  for (let num of nums) {
    if (count === 0) major = num
    count += major === num ? 1 : -1
  }
  return major
}
