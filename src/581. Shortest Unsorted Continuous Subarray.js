/**
 * @param {number[]} nums
 * @return {number}
 */

/*
export function findUnsortedSubarray (nums) {
  const n = nums.length
  const clone = [ ...nums ].sort((a, b) => a - b)
  let i = 0,
    j = n - 1
  while (nums[i] === clone[i] && i < n) i++
  while (nums[j] === clone[j] && j > i) j--
  return j - i + 1
}
 */

export function findUnsortedSubarray(nums) {
  const n = nums.length
  let start = -1,
    end = -2,
    max = nums[0],
    min = nums[n - 1]
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i])
    min = Math.min(min, nums[n - 1 - i])
    if (max > nums[i]) end = i
    if (min < nums[n - 1 - i]) start = n - 1 - i
  }
  return end - start + 1
}
