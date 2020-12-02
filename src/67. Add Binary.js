/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

export function addBinary(a, b) {
  let result = '',
    aDigit = a.length - 1,
    bDigit = b.length - 1,
    overflow = 0
  while (aDigit >= 0 || bDigit >= 0) {
    let sum = overflow + Number(a[aDigit] || 0) + Number(b[bDigit] || 0)
    result = String(sum % 2) + result
    overflow = Math.floor(sum / 2)
    aDigit--
    bDigit--
  }
  if (overflow) {
    result = String(overflow) + result
  }
  return result
}
