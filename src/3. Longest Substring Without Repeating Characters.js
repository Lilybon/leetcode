/**
 * @param {string} s
 * @return {number}
 */

export function lengthOfLongestSubstring(s) {
  const seen = new Map()
  let start = 0,
    maxLen = 0
  for (let i = 0; i < s.length; i++) {
    let val = s[i]
    if (seen.has(val)) {
      start = Math.max(start, seen.get(val) + 1)
    }
    maxLen = Math.max(maxLen, i - start + 1)
    seen.set(val, i)
  }
  return maxLen
}
