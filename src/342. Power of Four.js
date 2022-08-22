/**
 * @param {number} num
 * @return {boolean}
 */

// function isPowerOfFour(num) {
//   const digitStr = num.toString(4)
//   if (digitStr[0] !== '1') return false
//   for (let i = 1; i < digitStr.length; i++) {
//     if (digitStr[i] !== '0') return false
//   }
//   return true
// }

export function isPowerOfFour(num) {
  if (num < 0) return false
  for (let i = 0; i < 32; i += 2) {
    if (num === 1 << i) return true
  }
  return false
}
