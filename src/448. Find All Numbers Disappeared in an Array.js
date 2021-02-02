/**
 * @param {number[]} nums
 * @return {number[]}
 */

export function findDisappearedNumbers(nums) {
  const n = nums.length,
    results = []
  for (let i = 0; i < n; i++) {
    let j = Math.abs(nums[i]) - 1
    nums[j] *= nums[j] > 0 ? -1 : 1
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) results.push(i + 1)
  }
  return results
}
