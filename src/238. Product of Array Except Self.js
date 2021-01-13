/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
export function productExceptSelf (nums) {
  const n = nums.length,
        forwards = Array(n).fill(1),
        backwards = Array(n).fill(1),
        results = Array(n)
  for (let i = 0; i < n - 1; i++) {
    forwards[i + 1] = nums[i] * forwards[i]
  }
  for (let i = n - 1; i > 0; i--) {
    backwards[i - 1] = nums[i] * backwards[i]
  }
  for (let i = 0; i < n; i++) {
    results[i] = forwards[i] * backwards[i]
  }
  return results
}
 */

export function productExceptSelf(nums) {
  const n = nums.length,
    results = Array(n).fill(1)
  let right = 1
  for (let i = 0; i < n - 1; i++) {
    results[i + 1] = nums[i] * results[i]
  }
  for (let i = n - 1; i >= 0; i--) {
    results[i] *= right
    right *= nums[i]
  }
  return results
}
