/**
 * @param {string} dominoes
 * @return {string}
 */

export function pushDominoes(dominoes) {
  const n = dominoes.length,
    results = Array(n).fill(0)
  let force = 0
  for (let i = 0; i < n; i++) {
    let char = dominoes[i]
    if (char === 'R') force = n
    else if (char === 'L') force = 0
    else force = Math.max(force - 1, 0)
    results[i] += force
  }
  force = 0
  for (let i = n - 1; i >= 0; i--) {
    let char = dominoes[i]
    if (char === 'L') force = n
    else if (char === 'R') force = 0
    else force = Math.max(force - 1, 0)
    results[i] -= force
  }
  for (let i = 0; i < n; i++) {
    results[i] = results[i] === 0 ? '.' : results[i] > 0 ? 'R' : 'L'
  }
  return results.join('')
}
