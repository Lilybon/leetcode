/**
 * @param {number} num
 * @return {string}
 */
export function intToRoman(num) {
  // consider all possible 4 and 9 conbination and add all of them in descending order.
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const chars = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ]
  let result = ''
  for (let i in values) {
    while (num >= values[i]) {
      num -= values[i]
      result += chars[i]
    }
  }
  return result
}
