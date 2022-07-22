/**
 * @param {number} num
 * @return {number}
 */

export function minimumSum(num) {
  const digits = String(num)
    .split('')
    .map((value) => +value)
  digits.sort((a, b) => a - b)
  return 10 * (digits[0] + digits[1]) + digits[2] + digits[3]
}
