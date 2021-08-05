/**
 * @param {string} s
 * @return {boolean}
 */

export function validPalindrome(s) {
  let left = 0,
    right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right])
      return isValid(s, left, right - 1) || isValid(s, left + 1, right)
    left++
    right--
  }
  return true
}

function isValid(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }
  return true
}
