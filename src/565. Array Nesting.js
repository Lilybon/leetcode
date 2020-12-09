/**
 * @param {number[]} nums
 * @return {number}
 */

// pure function with O(n) time and O(n) space
/*
export function arrayNesting (nums) {
  const visited = {}
  let count = 0
  for (let i in nums) {
    if (!visited[i]) {
      let start = nums[i],
          tmpCount = 0
      do {
        start = nums[start]
        tmpCount++
        visited[start] = true
      } while (start !== nums[i])
      count = Math.max(count, tmpCount)
    }
  }
  return count
}
 */

// non-pure function with O(n) time and O(1) space
export function arrayNesting(nums) {
  let count = 0
  for (let i in nums) {
    if (nums[i] < Infinity) {
      let start = nums[i],
        tmpCount = 0
      while (nums[start] < Infinity) {
        let prev = start
        start = nums[start]
        tmpCount++
        nums[prev] = Infinity
      }
      count = Math.max(count, tmpCount)
    }
  }
  return count
}
