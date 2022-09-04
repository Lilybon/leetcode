/**
 * @param {number[]} nums
 * @return {boolean}
 */
function findSubarrays(nums) {
  const n = nums.length,
    set = new Set()
  for (let i = 1; i < n; i++) {
    const sum = nums[i] + nums[i - 1]
    if (set.has(sum)) return true
    set.add(sum)
  }
  return false
}
