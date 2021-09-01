/**
 * @param {string} s
 * @return {string}
 */

export function decodeString(s) {
  const stack = []
  let count = 0,
    word = ''
  for (let char of s) {
    if (char === '[') {
      stack.push([count, word])
      count = 0
      word = ''
    } else if (char === ']') {
      const [lastCount, lastWord] = stack.pop()
      word = lastWord + word.repeat(lastCount)
    } else if (char >= '0' && char <= '9') {
      count = count * 10 + Number(char)
    } else {
      word += char
    }
  }
  return word
}
