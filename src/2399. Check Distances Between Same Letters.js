/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
function checkDistances(s, distance) {
  const pos = Array(26)
  for (let i = 0; i < s.length; i++) {
    const char = s[i],
      n = char.charCodeAt(0) - 97
    if (pos[n] > 0 && distance[n] !== i - pos[n]) return false
    pos[n] = i + 1
  }
  return true
}
