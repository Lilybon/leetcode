/**
 * @param {string} s
 * @return {number}
 */

export function secondsToRemoveOccurrences(s) {
  const arr = s.split(''),
    n = s.length
  let count = 0
  while (true) {
    let allSorted = true
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] === '0' && arr[i + 1] === '1') {
        allSorted = false
        const temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
        i--
      }
    }
    if (allSorted) break
    count++
  }
  return count
}
