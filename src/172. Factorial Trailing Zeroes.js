/**
 * @param {number} n
 * @return {number}
 */

/*
function trailingZeroes (n) {
  return n < 5
    ? 0 
    : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5))
}
 */

function trailingZeroes(n) {
  let numZeroes = 0
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i)
  }
  return numZeroes
}
