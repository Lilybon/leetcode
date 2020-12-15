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
  function dfs(i = 0, sum = 0) {
    if (sum === target) result.push([...row])
    if (sum > target) return
    for (let j = i; j < candidates.length; j++) {
      row.push(candidates[j])
      dfs(j, sum + candidates[j])
      row.pop()
    }
  }
}
