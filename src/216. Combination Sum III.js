/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

export function combinationSum3(k, n) {
  const result = [],
    row = []
  backtracking(1, 0)
  return result
  function backtracking(start, sum) {
    if (row.length > k || sum > n) return
    if (row.length === k && sum === n) {
      result.push([...row])
      return
    }
    for (let i = start; i <= 9; i++) {
      row.push(i)
      backtracking(i + 1, sum + i)
      row.pop()
    }
  }
}
