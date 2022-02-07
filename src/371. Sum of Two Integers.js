/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/*
function getSum(a, b) {
  return a + b
}
 */

export function getSum(a, b) {
  let carry
  while (b) {
    carry = a & b
    a ^= b
    b = carry << 1
  }

  return a
}
