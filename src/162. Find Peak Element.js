/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. Recursive Binary Search
/*
function findPeakElement (nums) {
  return helper(0, nums.length - 1)
  function helper (left, right) {
    if (left === right) return left
    let mid = Math.floor((left + right) / 2)
    return nums[mid] > nums[mid + 1]
      ? helper(left, mid)
      : helper(mid + 1, right)
  }
}
 */

// 2. Iterative Binary Search
function findPeakElement(nums) {
  let left = 0,
    right = nums.length - 1
  while (left !== right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) right = mid
    else left = mid + 1
  }
  return left
}
