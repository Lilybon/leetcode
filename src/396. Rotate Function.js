/**
 * @param {number[]} A
 * @return {number}
 */

function maxRotateFunction(A) {
  const n = A.length
  if (n === 0) return 0
  let sum = 0
  let f = 0
  for (let i = 0; i < n; i++) {
    sum += A[i]
    f += A[i] * i
  }
  let max = f
  for (let i = 1; i < n; i++) {
    f += sum - n * A[n - i]
    max = Math.max(max, f)
  }
  return max
}
