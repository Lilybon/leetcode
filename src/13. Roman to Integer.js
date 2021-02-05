/**
 * @param {string} s
 * @return {number}
 */

export function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let results = 0,
    nextValue
  for (let i = s.length - 1; i >= 0; i--) {
    let value = map[s[i]]
    results += (value < nextValue ? -1 : 1) * value
    nextValue = value
  }
  return results
}
