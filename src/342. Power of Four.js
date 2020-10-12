/**
 * @param {number} num
 * @return {boolean}
 */

function isPowerOfFour(num) {
  const digit_str = num.toString(4)
  if (digit_str[0] !== 1) return false
  for (let i = 1; i < digit_str.length; i++) {
    if (digit_str[i] !== 0) return false
  }
  return true
}
