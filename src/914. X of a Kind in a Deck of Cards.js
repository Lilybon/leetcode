/**
 * @param {number[]} deck
 * @return {boolean}
 */

export function hasGroupsSizeX(deck) {
  const map = {}
  for (let num of deck) {
    map[num] = (map[num] || 0) + 1
  }
  let result = 0
  for (let num in map) {
    result = gcd(result, map[num])
    if (result < 2) return false
  }
  return result >= 2
}

function gcd(x, y) {
  return x === 0 ? y : gcd(y % x, x)
}
