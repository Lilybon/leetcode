/**
 * @param {string[]} strs
 * @return {string}
 */

export function longestCommonPrefix(strs) {
  if (!strs.length) return ''
  let compared = strs[0],
    len = compared.length
  for (let i = 1; i < strs.length; i++) {
    let str = strs[i],
      tmpLen = 0
    for (let j = 0; j < Math.min(len, str.length); j++) {
      if (compared[j] !== str[j]) break
      tmpLen++
    }
    len = Math.min(len, tmpLen)
  }
  return compared.slice(0, len)
}
