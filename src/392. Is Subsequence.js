/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export function isSubsequence(s, t) {
  let index = 0
  for (let char of t) {
    if (char === s[index]) index++
  }
  return index === s.length
}
