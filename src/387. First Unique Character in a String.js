/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
  const dict = {}
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] !== undefined) dict[s[i]] = -1
    else dict[s[i]] = i
  }
  const value = Object.values(dict).find((val) => val >= 0)
  return value >= 0 ? value : -1
}
