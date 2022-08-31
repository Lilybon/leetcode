/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export function isIsomorphic(s, t) {
  const s2t = {},
    t2s = {}
  for (let i = 0; i < s.length; i++) {
    if (!s2t[s[i]] && !t2s[t[i]]) {
      s2t[s[i]] = t[i]
      t2s[t[i]] = s[i]
    } else if (s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) return false
  }
  return true
}
