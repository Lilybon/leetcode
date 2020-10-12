/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let start = 0,
    seen = {},
    maxLen = 0
  for (let i = 0; i < s.length; i++) {
    let val = s[i]
    if (seen[val]) {
      start = Math.max(start, seen[val])
    }
    maxLen = Math.max(maxLen, i - start + 1)
    seen[val] = i + 1
  }
  return maxLen
}
