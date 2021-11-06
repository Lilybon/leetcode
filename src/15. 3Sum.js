/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export function threeSum(nums) {
  const n = nums.length,
    results = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n - 2; i++) {
    const a = nums[i]
    if (a > 0) break
    if (i > 0 && a === nums[i - 1]) continue
    let start = i + 1,
      end = n - 1
    while (start < end) {
      const b = nums[start],
        c = nums[end],
        sum = a + b + c
      if (sum === 0) {
        results.push([a, b, c])
        while (start < end && nums[start] === nums[start + 1]) start++
        while (start < end && nums[end] === nums[end - 1]) end--
        start++
        end--
      } else if (sum < 0) {
        start++
      } else {
        end--
      }
    }
  }
  return results
}
