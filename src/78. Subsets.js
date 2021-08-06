/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export function subsets(nums) {
  const results = [],
    row = []
  backtracking(0, 0)
  return results
  function backtracking(start, count) {
    results.push([...row])
    if (count >= nums.length) return
    for (let i = start; i < nums.length; i++) {
      row.push(nums[i])
      backtracking(i + 1, count + 1)
      row.pop()
    }
  }
}
