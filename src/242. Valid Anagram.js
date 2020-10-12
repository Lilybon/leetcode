/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
  const sortStr = (str) => str.split('').sort().join('')
  if (s.length != t.length) return false
  const sort_s = sortStr(s)
  const sort_t = sortStr(t)
  return sort_s === sort_t
}
