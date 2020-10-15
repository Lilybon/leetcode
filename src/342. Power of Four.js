/**
 * @param {number} num
 * @return {boolean}
 */

export function isPowerOfFour(num) {
  const digitStr = num.toString(4)
  if (digitStr[0] !== '1') return false
  for (let i = 1; i < digitStr.length; i++) {
    if (digitStr[i] !== '0') return false
  }
  return true
}
