/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplitArray(nums) {
  let left = nums.reduce((acc, v) => acc + v, 0)
  let ans = 0
  let right = 0
  for (let i = 0; i < nums.length - 1; i++) {
    right += nums[i]
    left -= nums[i]
    if (right >= left) {
      ans++
    }
  }
  return ans
}
