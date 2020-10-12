/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(s, numRows) {
  if (numRows <= 1) return s
  let zigzag = new Array(numRows).fill('')
  let currRow = 0,
    goDown = true
  for (let char of s) {
    zigzag[currRow] += char
    if (goDown) {
      if (currRow < numRows - 1) currRow++
      else {
        goDown = false
        currRow--
      }
    } else {
      if (currRow > 0) currRow--
      else {
        goDown = true
        currRow++
      }
    }
  }
  return zigzag.join('')
}
