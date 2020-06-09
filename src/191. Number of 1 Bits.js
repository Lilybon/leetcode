/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const hammingWeight = (n) => {
  let count = 0
  if (n === 0) return 0
  while (n > 0) {
    let digit = n % 2
    if (digit === 1) count++
    n = parseInt(n / 2)
  }
  return count
}
