/**
 * @param {string} s
 * @return {number}
 */

export function lengthOfLongestSubstring(s) {
  const seen = {}
  let start = 0,
    maxLen = 0
  for (let i = 0; i < s.length; i++) {
    let val = s[i]
    if (seen[val]) {
      // if same char occurs at index i, take larger index as start
      start = Math.max(start, seen[val])
    }
    maxLen = Math.max(maxLen, i - start + 1)
    seen[val] = i + 1
  }
  return maxLen
}
