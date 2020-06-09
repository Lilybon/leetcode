/**
 * @param {number} x
 * @return {boolean}
 */

/*
const isPalindrome = x => {
  if(x < 0) return false
  if(x < 10) return true

  const str = x.toString()
  const rStr = str.split('').reverse().join('')
  return str === rStr ? true : false
}
*/

const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  if (x < 10) return true

  const str = x.toString()
  const rStr = str.split('').reverse().join('')
  return str === rStr ? true : false
}
