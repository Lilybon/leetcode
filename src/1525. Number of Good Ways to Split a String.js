/**
 * @param {string} s
 * @return {number}
 */

export function numSplits(s) {
  let count = 0,
    leftMap = new Map(),
    rightMap = new Map(),
    leftUnique = 0,
    rightUnique = 0
  for (let char of s) {
    if (!rightMap.has(char)) rightUnique++
    rightMap.set(char, rightMap.has(char) ? rightMap.get(char) + 1 : 1)
  }
  for (let char of s) {
    if (!leftMap.has(char)) leftUnique++
    leftMap.set(char, leftMap.has(char) ? leftMap.get(char) + 1 : 1)
    rightMap.set(char, rightMap.get(char) - 1)
    if (rightMap.get(char) === 0) rightUnique--
    if (leftUnique === rightUnique) count++
  }
  return count
}
