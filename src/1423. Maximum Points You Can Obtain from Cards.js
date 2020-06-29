/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

const maxScore = (cardPoints, k) => {
  const n = cardPoints.length
  let maxSum = 0
  for (let i = 0; i < k; i++) {
    maxSum += cardPoints[i]
  }
  let start = k - 1,
    end = n - 1,
    localSum = maxSum
  while (start >= 0) {
    localSum = localSum - cardPoints[start] + cardPoints[end]
    maxSum = Math.max(maxSum, localSum)
    start--
    end--
  }
  return maxSum
}
