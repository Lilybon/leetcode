/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */

export function shiftingLetters(s, shifts) {
  const arr = s.split('').map((c) => c.charCodeAt(0) - 97)
  for (let [start, end, direction] of shifts) {
    const v = direction ? 1 : -1
    for (let i = start; i <= end; i++) {
      arr[i] += v
    }
  }
  return arr
    .map((v) => {
      const index = (v < 0 ? 1300000 + v : v) % 26
      return String.fromCharCode(97 + index)
    })
    .join('')
}
