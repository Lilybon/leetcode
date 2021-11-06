/**
 * @param {string[]} strs
 * @return {string}
 */

export function longestCommonPrefix(strs) {
  if (!strs.length) return ''
  const compared = strs[0]
  let maxLen = compared.length
  for (let str of strs) {
    let tmpMaxLen = 0
    for (let j = 0; j < Math.min(maxLen, str.length); j++) {
      if (compared[j] !== str[j]) break
      tmpMaxLen++
    }
    maxLen = Math.min(maxLen, tmpMaxLen)
  }
  return compared.slice(0, maxLen)
}
