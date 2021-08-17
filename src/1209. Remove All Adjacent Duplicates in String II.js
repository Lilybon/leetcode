/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
export function removeDuplicates(s, k) {
  const stack = []
  for (let char of s) {
    const last = stack[stack.length - 1]
    if (!last || char !== last.char) stack.push({ char, count: 1 })
    else if (last.count === k - 1) stack.pop()
    else last.count++
  }
  return stack.reduce(
    (result, { char, count }) => result + char.repeat(count),
    ''
  )
}
