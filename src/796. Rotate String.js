/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

export function rotateString(A, B) {
  if (A.length !== B.length) return false
  let i = 0
  while (i < A.length) {
    B = B.slice(1) + B[0]
    if (A === B) return true
    i++
  }
  return false
}
