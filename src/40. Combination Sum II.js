/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

export function combinationSum2(candidates, target) {
  candidates.sort()
  let result = [],
    row = []
  dfs()
  return result
  function dfs(start = 0, sum = 0) {
    if (sum === target) result.push([...row])
    if (sum > target) return
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue
      row.push(candidates[i])
      dfs(i + 1, sum + candidates[i])
      row.pop()
    }
  }
}
