/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

function findContentChildren(g, s) {
  const rule = (a, b) => b - a
  g.sort(rule)
  s.sort(rule)
  let count = 0
  for (let i = 0; i < g.length; i++) {
    if (g[i] <= s[0]) {
      s.shift() // use a cookie
      count++
    }
  }
  return count
}
