/**
 * @param {number[]} nums
 * @return {number}
 */

export function waysToMakeFair(nums) {
  const totalSums = [0, 0],
    beforeSums = [0, 0]
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    totalSums[i % 2] += nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    let groupIdx = i % 2,
      newTotalSums = [0, 0]
    newTotalSums[0] =
      totalSums[1] - beforeSums[1] + beforeSums[0] - groupIdx * nums[i]
    newTotalSums[1] =
      totalSums[0] - beforeSums[0] + beforeSums[1] - (1 - groupIdx) * nums[i]
    count += newTotalSums[0] === newTotalSums[1]
    beforeSums[groupIdx] += nums[i]
  }
  return count
}
