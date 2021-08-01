/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// function reverseStr (s, k) {
//   const regExp = new RegExp(`.{1,${k}}`, 'g')
//   const chunk = s.match(regExp)
//   return chunk
//     .map((value, index) =>
//       index % 2
//         ? value
//         : value
//           .split('')
//           .reverse()
//           .join('')
//     )
//     .join('')
// }

export function reverseStr(s, k) {
  var arr = s.split('')
  var start = 0
  while (start < arr.length) {
    const end = Math.min(start + k, arr.length) - 1
    reverse(arr, start, end)
    start += 2 * k
  }
  return arr.join('')
}

function reverse(arr, start, end) {
  while (start < end) {
    ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
