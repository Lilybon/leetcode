/**
 * @param {number} n
 * @return {string[]}
 */

export function fizzBuzz(n) {
  return Array.from(Array(n), (_, idx) => `${idx + 1}`).map(formatStr)
}

function formatStr(num) {
  const fizz = 'Fizz',
    buzz = 'Buzz'
  if (num % 15 === 0) return fizz + buzz
  else if (num % 5 === 0) return buzz
  else if (num % 3 === 0) return fizz
  else return num
}
