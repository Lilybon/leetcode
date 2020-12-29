/**
 * @param {string} S
 * @return {string}
 */

export function removeDuplicates(S) {
  const stack = []
  for (let char of S) {
    if (stack[stack.length - 1] === char) stack.pop()
    else stack.push(char)
  }
  return stack.join('')
}
