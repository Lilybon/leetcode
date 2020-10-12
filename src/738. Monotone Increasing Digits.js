/**
 * @param {number} N
 * @return {number}
 */

// Greedy
/*
function monotoneIncreasingDigits (N) {
  let S = String(N)
  let max = ''
  search:
  for (let i = 0; i < S.length; i++) {
    for (let d = 1; d <= 9; d++) {
      if (N < max + String(d).repeat(S.length - i)) {
        max += String(d - 1)
        continue search
      }
    }
    max += '9'
  }
  return parseInt(max)
}
 */

// Truncate After Cliff
function monotoneIncreasingDigits(N) {
  let S = String(N).split('')
  let i = 1
  while (i < S.length && S[i - 1] <= S[i]) i++
  while (0 < i && i < S.length && S[i - 1] > S[i]) S[--i]--
  for (let j = i + 1; j < S.length; j++) S[j] = '9'
  return parseInt(S.join(''))
}
