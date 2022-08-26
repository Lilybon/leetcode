/**
 * @param {number} N
 * @return {boolean}
 */

// Backtracking
// function reorderedPowerOf2(N) {
//   const enumeration = new Set(),
//     permutation = String(N).split('')
//   let num = 1
//   for (let i = 0; i <= 29; i++) {
//     enumeration.add('' + num)
//     num *= 2
//   }
//   return backtracking(0)
//   function backtracking(start) {
//     if (start === permutation.length) {
//       return enumeration.has(permutation.join(''))
//     }
//     for (let i = start; i < permutation.length; i++) {
//       const tmp = permutation[start]
//       permutation[start] = permutation[i]
//       permutation[i] = tmp
//       if (backtracking(start + 1)) {
//         return true
//       }
//       permutation[i] = permutation[start]
//       permutation[start] = tmp
//     }
//     return false
//   }
// }

// Counting
export function reorderedPowerOf2(N) {
  const A = count(N)
  for (let i = 0; i < 31; i++) {
    const shiftA = count(1 << i)
    if (A.every((value, index) => value === shiftA[index])) return true
  }
  return false
}

function count(N) {
  const arr = Array(10).fill(0)
  while (N > 0) {
    const remainder = N % 10
    arr[remainder]++
    N = (N - remainder) / 10
  }
  return arr
}
