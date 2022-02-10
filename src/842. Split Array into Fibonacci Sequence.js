/**
 * @param {string} num
 * @return {number[]}
 */

export function splitIntoFibonacci(num) {
  const results = [],
    INT_MAX = 2 ** 31 - 1
  dfs(0)
  return results
  function dfs(start) {
    if (start >= num.length) return results.length >= 3
    const digitLength = num[start] === '0' ? 1 : 10,
      end = Math.min(start + digitLength, num.length)
    let value = 0
    for (let i = start; i < end; i++) {
      value = value * 10 + Number(num[i])
      if (value > INT_MAX) break
      if (results.length >= 2) {
        const sum = results[results.length - 2] + results[results.length - 1]
        if (value > sum) break
        else if (value < sum) continue
      }
      results.push(value)
      if (dfs(i + 1)) return true
      results.pop()
    }
    return false
  }
}
