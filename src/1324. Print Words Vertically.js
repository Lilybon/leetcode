/**
 * @param {string} s
 * @return {string[]}
 */

export function printVertically(s) {
  const words = s.split(' '),
    max = words.reduce((val, word) => Math.max(val, word.length), 0),
    result = Array(max).fill('')
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < words.length; j++) {
      result[i] += words[j][i] || ' '
    }
    result[i] = result[i].trimEnd()
  }
  return result
}
