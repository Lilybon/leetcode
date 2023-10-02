/**
 * @param {number[][]} questions
 * @return {number}
 */
function mostPoints(questions) {
  const dp = Array(200001).fill(0)
  for (let i = questions.length - 1; i >= 0; --i) {
    dp[i] = Math.max(dp[i + 1], dp[questions[i][1] + i + 1] + questions[i][0])
  }
  return dp[0]
}
