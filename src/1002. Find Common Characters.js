/**
 * @param {string[]} A
 * @return {string[]}
 */

export function commonChars(A) {
  const result = []
  const map = {}
  for (let char of A[0]) {
    map[char] = (map[char] || 0) + 1
  }
  for (let i = 1; i < A.length; i++) {
    let tmpMap = {}
    for (let char of A[i]) {
      tmpMap[char] = (tmpMap[char] || 0) + 1
    }
    for (let char in map) {
      if (!tmpMap[char]) delete map[char]
      map[char] = Math.min(map[char], tmpMap[char])
    }
  }
  for (let char in map) {
    let count = map[char]
    while (count) {
      result.push(char)
      count--
    }
  }
  return result
}
