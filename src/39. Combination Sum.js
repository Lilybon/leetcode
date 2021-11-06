/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

export function combinationSum(candidates, target) {
  let results = [],
    row = []
  backtracking()
  return results
  function backtracking(start = 0, sum = 0) {
    if (sum === target) results.push([...row])
    if (sum > target) return
    for (let i = start; i < candidates.length; i++) {
      row.push(candidates[i])
      backtracking(i, sum + candidates[i])
      row.pop()
    }
  }
}
