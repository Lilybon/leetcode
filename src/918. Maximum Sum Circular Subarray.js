/**
 * @param {number[]} A
 * @return {number}
 */

// 1. Next Array
/*
const maxSubarraySumCircular = A => {
  const n = A.length
  let ans = A[0],
      cur = A[0]
  for (let i = 1; i < n; i++) {
    cur = A[i] + Math.max(cur, 0)
    ans = Math.max(ans, cur)
  }

  let rightSums = new Array(n)
  rightSums[n - 1] = A[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightSums[i] = rightSums[i + 1] + A[i]
  }

  let maxRight = new Array(n)
  maxRight[n - 1] = A[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], rightSums[i])
  }

  let leftSum = 0
  for (let i = 0; i < n - 2; i++) {
    leftSum += A[i]
    ans = Math.max(ans, leftSum + maxRight[i + 2])
  }

  return ans
}
 */

// 2. Kadane's (Sign Variant)
/*
const maxSubarraySumCircular = A => {
  const S = A.reduce((sum, val) => sum += val, 0) // S = sum(A)
  const ans1 = kadane(A, 0, A.length - 1, 1)
  const ans2 = S + kadane(A, 1, A.length - 1, -1)
  const ans3 = S + kadane(A, 0, A.length - 2, -1)
  return Math.max(ans1, ans2, ans3)
}

const kadane = (A, i, j, sign) => {
  let ans = -Number.MAX_VALUE,
      cur = -Number.MAX_VALUE
  for (let k = i; k <= j; k++) {
    cur = sign * A[k] + Math.max(cur, 0)
    ans = Math.max(ans, cur)
  }
  return ans  
}
 */

const maxSubarraySumCircular = (A) => {
  const n = A.length
  let maxStraightSum = -Number.MAX_VALUE,
    minStraightSum = Number.MAX_VALUE,
    arraySum = 0,
    tempMaxSum = 0,
    tempMinSum = 0
  for (let i = 0; i < n; i++) {
    arraySum += A[i]

    tempMaxSum += A[i]
    maxStraightSum = Math.max(maxStraightSum, tempMaxSum)
    tempMaxSum = Math.max(tempMaxSum, 0)

    tempMinSum += A[i]
    minStraightSum = Math.min(minStraightSum, tempMinSum)
    tempMinSum = Math.min(tempMinSum, 0)
  }
  return arraySum === minStraightSum
    ? maxStraightSum
    : Math.max(maxStraightSum, arraySum - minStraightSum)
}
