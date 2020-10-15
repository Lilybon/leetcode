/**
 * @param {number} n
 * @return {boolean}
 */

export function isPowerOfTwo(n) {
  // bitString of powerOfTwo will be like a 1 in front and 0s following behind
  const bitString = n.toString(2)
  if (bitString[0] !== '1') return false
  for (let i = 1; i < bitString.length; i++) {
    if (bitString[i] !== '0') return false
  }
  return true
}
