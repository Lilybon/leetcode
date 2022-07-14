/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

export function strStr(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) return i
      if (i + j === haystack.length) return -1
      if (needle[j] !== haystack[i + j]) break
    }
  }
}
