/**
 * @param {number} n
 * @return {string[]}
 */

export function fizzBuzz(n) {
  return Array.from(Array(n), (_, idx) => idx + 1).map(formatStr)
}

function formatStr(num) {
  let result = ''
  if (num % 3 === 0) result += 'Fizz'
  if (num % 5 === 0) result += 'Buzz'
  return result === '' ? '' + num : result
}
