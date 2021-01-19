/**
 * @param {string} s
 * @return {boolean}
 */

export function checkRecord(s) {
  let aCount = 0,
    lCount = 0,
    lastChar
  for (let char of s) {
    if (char === 'A') aCount += 1
    if (char === 'L' && (lastChar !== 'L' || lastChar === char)) lCount += 1
    else lCount = 0
    if (aCount > 1 || lCount > 2) return false
    lastChar = char
  }
  return true
}
