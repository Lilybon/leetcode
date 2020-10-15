/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

export function rotate(nums, k) {
  while (k > 0) {
    let lastItem = nums.pop()
    nums.unshift(lastItem)
    k--
  }
}
