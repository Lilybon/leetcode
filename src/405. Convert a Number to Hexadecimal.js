/**
 * @param {number} num
 * @return {string}
 */

export function toHex(num) {
  if (num === 0) return '0'

  const chars = '0123456789abcdef'
  let hex = ''
  num >>>= 0

  while (num > 0) {
    hex = chars[num & 15] + hex
    num >>>= 4
  }

  return hex
}
