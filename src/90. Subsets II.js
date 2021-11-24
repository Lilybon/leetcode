/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export function subsetsWithDup(nums) {
  const _nums = nums.slice().sort()
  const results = [],
    row = []
  backtracking(0)
  return results
  function backtracking(start) {
    results.push([...row])
    for (let i = start; i < _nums.length; i++) {
      if (i > start && _nums[i] === _nums[i - 1]) continue
      row.push(_nums[i])
      backtracking(i + 1)
      row.pop()
    }
  }
}
