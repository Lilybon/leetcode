/**
 * @param {number} n
 * @return {number}
 */

export function countPrimes(n) {
  const f = new Uint8Array(n).fill(1)
  f[0] = 0
  f[1] = 0
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (f[i] === 0) continue
    for (let j = i * i; j < n; j += i) f[j] = 0
  }
  return f.reduce((sum, count) => sum + count, 0)
}
