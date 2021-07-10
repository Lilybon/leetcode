/**
 * @param {string} s
 * @return {string[]}
 */

export function restoreIpAddresses(s) {
  if (s.length < 4 || s.length > 12) return []
  const results = [],
    digits = []
  backtracking(0)
  return results
  function backtracking(start) {
    if (digits.length >= 4 && start === s.length) {
      results.push(digits.join('.'))
      return
    }
    if (digits.length >= 4 || start === s.length) return
    let digit = ''
    for (let i = 0; i < 3; i++) {
      digit += s[start + i]
      if (digit > 255 || (digit.length > 1 && digit[0] === '0')) return
      digits.push(digit)
      backtracking(start + i + 1)
      digits.pop()
    }
  }
}
