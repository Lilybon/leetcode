/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export function permute(nums) {
  const results = Array(),
    visited = Array(nums.length),
    row = Array()
  backtracking()
  return results
  function backtracking() {
    if (row.length === nums.length) {
      results.push([...row])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      visited[i] = true
      row.push(nums[i])
      backtracking()
      visited[i] = false
      row.pop()
    }
  }
}
