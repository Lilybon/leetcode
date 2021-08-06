/**
 * @param {string} s
 * @return {number}
 */

export function longestPalindrome(s) {
  const map = {}
  let result = 0
  for (let char of s) {
    map[char] = (map[char] || 0) + 1
    if (map[char] % 2 === 0) result += 2
  }
  return s.length > result ? result + 1 : result
}
