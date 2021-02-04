/**
 * @param {string} s
 * @return {string}
 */

export function longestPalindrome(s) {
  let result = '',
    maxLength = 0
  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i
    while (left > 0 && s[left - 1] === s[i]) left--
    while (right < s.length - 1 && s[right + 1] === s[i]) right++
    while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
      left--
      right++
    }
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1
      result = s.slice(left, right + 1)
    }
  }
  return result
}
