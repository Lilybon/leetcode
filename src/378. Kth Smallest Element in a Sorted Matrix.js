/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

/*
 const kthSmallest = (matrix, k) => {
  const n = matrix.length
  let pointer = new Array(n).fill(0)
  let min
  for (let i = 0; i < k; i++) {
    min = Infinity
    let minIndex = -1
    for (let j = 0; j < n; j++) {
      if (pointer[j] < n) {
        let compared = matrix[j][pointer[j]]
        if (compared < min) {
          minIndex = j
          min = compared
        }
      }
    }
    pointer[minIndex]++
  }
  return min
}
  */

const kthSmallest = function (matrix, k) {
  const n = matrix.length
  let start = matrix[0][0],
    end = matrix[n - 1][n - 1]

  while (start < end) {
    let middle = Math.floor((start + end) / 2)
    let count = countLessEqual(matrix, middle)
    if (count < k) start = middle + 1
    else end = middle
  }
  return start
}

const countLessEqual = (matrix, target) => {
  const n = matrix.length
  let i = n - 1,
    j = 0,
    count = 0
  while (i >= 0 && j < n) {
    if (matrix[i][j] <= target) {
      count += i + 1 // count row below
      j++
    } else i--
  }
  return count
}
