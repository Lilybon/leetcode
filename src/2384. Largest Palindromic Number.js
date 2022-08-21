/**
 * @param {string} num
 * @return {string}
 */

export function largestPalindromic(num) {
  const counter = Array(10).fill(0)
  for (let char of num) {
    counter[+char]++
  }
  const arr = []
  for (let i = 9; i >= 0; i--) {
    while (counter[i] >= 2) {
      arr.push(i)
      counter[i] -= 2
    }
  }
  let result = ''
  for (let i = 9; i >= 0; i--) {
    if (counter[i] > 0) {
      result = '' + i
      break
    }
  }
  if (!arr.length || arr[0] === 0) return result || '0'
  for (let i = arr.length - 1; i >= 0; i--) {
    result = arr[i] + result + arr[i]
  }
  return result
}
