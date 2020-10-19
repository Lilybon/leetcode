/**
 * @param {number[]} A
 * @return {number[]}
 */

export function sortedSquares(A) {
  const result = Array(A.length)
  let left = 0,
    right = A.length - 1,
    index = A.length - 1
  while (left <= right) {
    let leftSqrt = A[left] ** 2
    let rightSqrt = A[right] ** 2
    if (leftSqrt >= rightSqrt) {
      result[index--] = leftSqrt
      left++
    } else {
      result[index--] = rightSqrt
      right--
    }
  }
  return result
}
