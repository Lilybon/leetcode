/**
 * @param {number} n
 * @return {boolean}
 */

function isHappy(n) {
  // how to handle endless condition?
  // repeat number comes up => return false
  // use hash to remember results in loop
  if (n === 0) return false
  if (n === 1) return true
  var hash = {}
  while (n !== 1 && !hash[n]) {
    hash[n] = 1 // set a flag
    let arr = n.toString().split('')
    n = 0
    for (let i = 0; i < arr.length; i++) {
      n += Math.pow(arr[i], 2)
    }
  }
  return n == 1
}
