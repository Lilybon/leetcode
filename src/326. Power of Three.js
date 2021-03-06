/**
 * @param {number} n
 * @return {boolean}
 */

export function isPowerOfThree(n) {
  if (n === 1) return true
  return n > 1 ? isPowerOfThree(n / 3) : false
}
