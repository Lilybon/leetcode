/**
 * @param {number} n
 * @return {boolean}
 */

// function isPowerOfThree(n) {
//   if (n === 1) return true
//   return n > 1 ? isPowerOfThree(n / 3) : false
// }

export function isPowerOfThree(n) {
  return n > 0 && 1162261467 % n == 0
}
