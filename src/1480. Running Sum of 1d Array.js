/**
 * @param {number[]} nums
 * @return {number[]}
 */

// pure function
// function runningSum(nums) {
//   const results = [...nums]
//   for (let i = 1; i < results.length; i++) {
//     results[i] += results[i - 1]
//   }
//   return results
// }

// non-pure function
export function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}
