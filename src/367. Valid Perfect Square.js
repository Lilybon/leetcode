/**
 * @param {number} num
 * @return {boolean}
 */

/*
export function isPerfectSquare(num) {
  const sqrtNum = Math.sqrt(num)
  return sqrtNum === parseInt(sqrtNum)
}
 */

export function isPerfectSquare(nums) {
  for (let i = 1; i <= nums / i; i++) {
    if (i ** 2 === nums) return true
  }
  return false
}
