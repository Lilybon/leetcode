/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

export function combinationSum3(k, n) {
  const result = [],
    row = []
  backtracking(1, 0, 0)
  return result
  function backtracking(start, count, sum) {
    if (count > k || sum > n) return
    if (count === k && sum === n) {
      result.push([...row])
      return
    }
    count++
    for (let i = start; i <= 9; i++) {
      row.push(i)
      backtracking(i + 1, count, sum + i)
      row.pop()
    }
  }
}
