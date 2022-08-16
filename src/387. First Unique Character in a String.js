/**
 * @param {string} s
 * @return {number}
 */

export function firstUniqChar(s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], -1)
    else map.set(s[i], i)
  }
  const values = [...map.values()]
  return values.find((value) => value >= 0) ?? -1
}
