/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

export function combinationSum(candidates, target) {
  let result = [],
    row = []
  dfs()
  return result
  function dfs(start = 0, sum = 0) {
    if (sum === target) result.push([...row])
    if (sum > target) return
    for (let i = start; i < candidates.length; i++) {
      row.push(candidates[i])
      dfs(i, sum + candidates[i])
      row.pop()
    }
  }
}
