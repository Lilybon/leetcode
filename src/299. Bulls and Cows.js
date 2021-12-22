/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

export function getHint(secret, guess) {
  const count = new Map(),
    same = new Set()
  let A = 0,
    B = 0
  for (let i in secret) {
    if (secret[i] === guess[i]) {
      A++
      same.add(i)
    } else count.set(secret[i], (count.get(secret[i]) || 0) + 1)
  }
  for (let i in guess) {
    if (same.has(i)) continue
    if (count.get(guess[i]) > 0) {
      B++
      count.set(guess[i], count.get(guess[i]) - 1)
    }
  }
  return A + 'A' + B + 'B'
}
