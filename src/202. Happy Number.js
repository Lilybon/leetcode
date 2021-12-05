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
    n = 0
    for (let char of n.toString()) {
      n += char ** 2
    }
  }
  return n === 1
}
