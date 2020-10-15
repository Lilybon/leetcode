/**
 * @param {number} num
 * @return {boolean}
 */

export function isPerfectSquare(num) {
  const sqrtNum = Math.sqrt(num)
  return sqrtNum === parseInt(sqrtNum)
}
