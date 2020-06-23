/**
 * @param {string} s
 * @return {string}
 */

const frequencySort = (s) => {
  let dict = new Map()
  for (let char of s) {
    dict.set(char, dict.get(char) + 1 || 1)
  }
  return Array.from(dict)
    .sort((a, b) => b[1] - a[1])
    .reduce((str, [key, count]) => (str += key.repeat(count)), '')
}
