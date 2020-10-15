/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export function isAnagram(s, t) {
  const sortStr = (str) => str.split('').sort().join('')
  if (s.length != t.length) return false
  const sortS = sortStr(s)
  const sortT = sortStr(t)
  return sortS === sortT
}
