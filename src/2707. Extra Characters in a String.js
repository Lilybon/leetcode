/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
function minExtraChar(s, dictionary) {
  const dp = Array(s.length + 1).fill(0)
  for (let i = 1; i <= s.length; ++i) {
    dp[i] = dp[i - 1] + 1
    for (let c of dictionary) {
      if (i - c.length >= 0 && s.substring(i - c.length, i) === c) {
        dp[i] = Math.min(dp[i], dp[i - c.length])
      }
    }
  }
  return dp[dp.length - 1]
}
