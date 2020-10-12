/**
 * @param {number} n
 * @return {number}
 */

function minOperations(n) {
  return ((n - (n % 2)) * Math.ceil(n / 2)) / 2
}
