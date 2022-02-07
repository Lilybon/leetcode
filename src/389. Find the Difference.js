/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

export function findTheDifference(s, t) {
  let hash = {}
  for (let alphabet of t) {
    if (!hash[alphabet]) hash[alphabet] = 1
    else hash[alphabet]++
  }
  for (let alphabet of s) {
    hash[alphabet]--
  }
  for (let alphabet of t) {
    if (hash[alphabet] === 1) return alphabet
  }
}
