/**
 * @param {string} s
 * @return {string}
 */

export function reverseString(s) {
  const n = s.length
  for (let i = 0; i <= Math.floor((n - 1) / 2); i++) {
    let tmp = s[i]
    s[i] = s[n - 1 - i]
    s[n - 1 - i] = tmp
  }
  return s
}
