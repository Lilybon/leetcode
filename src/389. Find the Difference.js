/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const findTheDifference = (s, t) => {
  let hash = {}
  for (let i = 0; i < t.length; i++) {
    let alphabet = t[i]
    if (!hash[alphabet]) hash[alphabet] = 1
    else hash[alphabet]++
  }
  for (let j = 0; j < s.length; j++) {
    let alphabet = s[j]
    hash[alphabet]--
  }
  for (let k = 0; k < t.length; k++) {
    let alphabet = t[k]
    if (hash[alphabet] == 1) {
      return alphabet
    }
  }
}
