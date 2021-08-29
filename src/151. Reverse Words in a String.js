/**
 * @param {string} s
 * @return {string}
 */

export function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
}
