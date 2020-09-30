/**
 * @param {number[]} nums
 * @return {number}
 */

const findMin = (nums) => {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[right] < nums[mid]) left = mid + 1
    else right = mid
  }
  return nums[left]
}
