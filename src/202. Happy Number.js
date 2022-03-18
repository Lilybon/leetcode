/**
 * @param {number} n
 * @return {boolean}
 */

export function isHappy(n) {
  // how to handle endless condition?
  // repeat number comes up => return false
  // use hash to remember results in loop
  const hash = {}
  while (n !== 1 && !hash[n]) {
    hash[n] = true
    let next = 0
    while (n) {
      const remainder = n % 10
      next += remainder ** 2
      n = (n - remainder) / 10
    }
    n = next
  }
  return n === 1
}
