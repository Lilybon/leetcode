/**
 * @param {string} s
 * @return {boolean}
 */

export function isValid(s) {
  const match = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const left = Object.values(match)
  const right = Object.keys(match)
  const stack = []
  for (let char of s) {
    if (left.includes(char)) stack.push(char)
    if (right.includes(char)) {
      const contrastChar = stack.pop()
      if (contrastChar !== match[char]) return false
    }
  }
  return !stack.length
}
