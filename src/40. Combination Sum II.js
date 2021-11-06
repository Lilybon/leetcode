/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

export function combinationSum2(candidates, target) {
  candidates.sort()
  const results = [],
    row = []
  backtracking()
  return results
  function backtracking(start = 0, sum = 0) {
    if (sum === target) results.push([...row])
    if (sum > target) return
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue
      row.push(candidates[i])
      backtracking(i + 1, sum + candidates[i])
      row.pop()
    }
  }
}
