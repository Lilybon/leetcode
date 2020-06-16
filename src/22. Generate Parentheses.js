/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n) {
  let result = []
  collect(n, n, '')
  return result

  function collect(upper, lower, str) {
    if (!upper && !lower && validate(str)) result.push(str)
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
