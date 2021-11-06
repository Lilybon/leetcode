/**
 * @param {number} n
 * @return {string[]}
 */

export function generateParenthesis(n) {
  const results = []
  collect(n, n, '')
  return results

  function collect(upper, lower, str) {
    if (!upper && !lower && validate(str)) results.push(str)
    if (lower) collect(upper, lower - 1, str + ')')
    if (upper) collect(upper - 1, lower, str + '(')
  }

  function validate(str) {
    let stack = 0
    for (let i = 0; i < str.length; i++) {
      stack += str[i] === '(' ? 1 : -1
      if (stack < 0) return false
    }
    return stack === 0
  }
}

// Closure Number
/*
function generateParenthesis(n) {
  const results = []
  if (n === 0) {
    results.push('')
    return results
  }
  for (let i = 0; i < n; i++) {
    for (let left of generateParenthesis(i)) {
      for (let right of generateParenthesis(n - 1 - i)) {
        results.push(`(${left})${right}`)
      }
    }
  }
  return results
}
*/
