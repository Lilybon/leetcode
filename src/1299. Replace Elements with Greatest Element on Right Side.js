/**
 * @param {number[]} arr
 * @return {number[]}
 */

function replaceElements(arr) {
  const n = arr.length
  const result = Array(n)
  result[n - 1] = -1
  let max = -Infinity
  for (let i = n - 2; i >= 0; i--) {
    max = Math.max(max, arr[i + 1])
    result[i] = max
  }
  return result
}
