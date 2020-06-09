/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
  while (k > 0) {
    let last_item = nums.pop()
    nums.unshift(last_item)
    k--
  }
}
