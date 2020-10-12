/**
 * @param {number} n
 * @return {string}
 */

function convertToTitle(n) {
  // String.fromCharCode(65) = 'A'， String.fromCharCode(66) = 'B' ..... String.fromCharCode(90) = 'Z'
  let columnTitle = ''
  while (n > 0) {
    let charNum = (n - 1) % 26
    let char = String.fromCharCode(charNum + 65)
    columnTitle = char + columnTitle
    n = parseInt((n - 1) / 26)
  }
  return columnTitle
}
