/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
  let n = 0
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] !== ' ') n++
    else if (s[j] === ' ' && n) break
  }
  return n
}
