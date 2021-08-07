/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export function subsets(nums) {
  const results = [],
    row = []
  backtracking(0)
  return results
  function backtracking(start) {
    results.push([...row])
    for (let i = start; i < nums.length; i++) {
      row.push(nums[i])
      backtracking(i + 1)
      row.pop()
    }
  }
}
