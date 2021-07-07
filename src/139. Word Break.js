/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

export function wordBreak(s, wordDict) {
  const dp = Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] === true && wordDict.includes(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[dp.length - 1]
}
