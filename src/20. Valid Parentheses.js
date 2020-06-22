/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  const match = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const left = Object.values(match)
  const right = Object.keys(match)
  let stack = []
  for (let char of s) {
    if (left.includes(char)) stack.push(char)
    if (right.includes(char)) {
      let contrastChar = stack.pop()
      if (contrastChar !== match[char]) return false
    }
  }
  return !stack.length
}
