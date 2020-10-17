/**
 * @param {number} c
 * @return {boolean}
 */

export function judgeSquareSum(c) {
  if (c === 0) return true
  for (let i = 1; i <= Math.sqrt(c); i++) {
    let tmp = c - Math.pow(i, 2)
    if (Number.isInteger(Math.sqrt(tmp))) return true
  }
  return false
}
