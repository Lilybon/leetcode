/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

/*
const customSortString = (S, T) => {
  let orders = {}
  for (let i = 0; i < S.length; i++) orders[S[i]] = i + 1
  return T
    .split('')
    .sort((a, b) => (orders[a] || 27) - (orders[b] || 27))
    .join('')
}
 */

const customSortString = (S, T) => {
  let counts = {},
    result = ''
  for (let i = 0; i < S.length; i++) counts[S[i]] = 0
  for (let char of T) {
    if (counts.hasOwnProperty(char)) counts[char]++
    else result += char
  }
  Object.entries(counts).forEach(([char, count]) => {
    result += char.repeat(count)
  })
  return result
}
