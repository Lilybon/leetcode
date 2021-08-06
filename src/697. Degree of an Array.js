/**
 * @param {number[]} nums
 * @return {number}
 */

export function findShortestSubArray(nums) {
  const countMap = {}
  const startMap = {}
  const endMap = {}
  let maxCount = 0,
    minDiff = nums.length
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (startMap[num] === undefined) startMap[num] = i
    countMap[num] = (countMap[num] || 0) + 1
    maxCount = Math.max(maxCount, countMap[num])
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]
    if (endMap[num] === undefined) endMap[num] = i
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (countMap[num] === maxCount)
      minDiff = Math.min(minDiff, endMap[num] - startMap[num] + 1)
  }
  return minDiff
}
