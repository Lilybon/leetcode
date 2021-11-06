/**
 * @param {string} digits
 * @return {string[]}
 */

export function letterCombinations(digits) {
  const results = [],
    map = {
      1: [''],
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    }
  let combination = ''
  backtracking(0)
  return results
  function backtracking(start) {
    if (!digits.length) return
    if (combination.length === digits.length) {
      results.push(combination)
      return
    }
    for (let char of map[digits[start]]) {
      let backup = combination
      combination += char
      backtracking(start + 1)
      combination = backup
    }
  }
}
