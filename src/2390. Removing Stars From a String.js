/**
 * @param {string} s
 * @return {string}
 */

export function removeStars(s) {
  const stack = []
  for (let char of s) {
    if (char !== '*') stack.push(char)
    else stack.pop()
  }
  return stack.join('')
}
