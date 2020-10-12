/**
 * @param {number} n
 * @return {number}
 */

function climbStairs(n) {
  let ones = 1
  let twos = 0
  for (let i = 1; i <= n - 1; i++) [ones, twos] = [ones + twos, ones]
  return ones + twos
}
