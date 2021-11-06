/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export function searchRange(nums, target) {
  return [searchFirst(nums, target), searchLast(nums, target)]
}

function searchFirst(nums, target) {
  let left = 0,
    right = nums.length
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  if (left === nums.length || nums[left] !== target) return -1
  return left
}

function searchLast(nums, target) {
  let left = 0,
    right = nums.length
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) right = mid
    else left = mid + 1
  }
  left--
  if (left < 0 || nums[left] !== target) return -1
  return left
}
