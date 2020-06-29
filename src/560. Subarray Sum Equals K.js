/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 1. Brutal Force
/*
 const subarraySum = (nums, k) => {
  const n = nums.length
  let count = 0
  for (let i = 0; i < n; i++) {
    let sum = nums[i]
    if (sum === k) count++
    for (let j = i + 1; j < n; j++) {
      sum += nums[j]
      if (sum === k) count++
    }
  }
  return count
}
  */

const subarraySum = (nums, k) => {
  const n = nums.length
  let count = 0
  let sum = 0
  let map = new Map()
  for (let i = 0; i < n; i++) {
    if (!map.has(sum)) map.set(sum, 0)
    map.set(sum, map.get(sum) + 1)
    sum += nums[i]
    if (map.has(sum - k)) count += map.get(sum - k)
  }
  return count
}
