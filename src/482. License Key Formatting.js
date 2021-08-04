/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

export function licenseKeyFormatting(s, k) {
  let count = 0,
    result = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '-') continue
    result = s[i].toUpperCase() + result
    count++
    if (count < k) continue
    result = '-' + result
    count = 0
  }
  return result[0] === '-' ? result.slice(1) : result
}
