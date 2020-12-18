/**
 * @param {number[]} nums
 * @return {number}
 */

// time O(nlog(n)) and O(1) space
/*
export function longestConsecutive (nums) {
  nums.sort((a, b) => a - b)
  let max = 0
  if (!nums.length) return max
  let tmpMax = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) continue
    if (nums[i - 1] + 1 === nums[i]) tmpMax++
    else {
      max = Math.max(max, tmpMax)
      tmpMax = 1
    }
  }
  max = Math.max(max, tmpMax)
  return max
}
 */

// time O(n)) and O(n) space
export function longestConsecutive(nums) {
  const map = {}
  let max = 0
  for (let num of nums) {
    if (map[num]) continue
    if (!map[num]) map[num] = 1
    let left = map[num - 1] || 0,
      right = map[num + 1] || 0,
      tmpMax = map[num] + left + right
    map[num] = map[num + right] = map[num - left] = tmpMax
    max = Math.max(max, tmpMax)
  }
  return max
}
