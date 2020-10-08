/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

const findLength = (A, B) => {
  let max = 0
  const memo = Array.from(
    Array(A.length + 1),
    () => new Uint32Array(B.length + 1)
  )
  for (let i = A.length - 1; i >= 0; i--) {
    for (let j = B.length - 1; j >= 0; j--) {
      if (A[i] === B[j]) {
        memo[i][j] = memo[i + 1][j + 1] + 1
        max = Math.max(max, memo[i][j])
      }
    }
  }
  return max
}
