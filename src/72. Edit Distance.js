/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

/*
export function minDistance (word1, word2) {
  const l1 = word1.length,
        l2 = word2.length,
        dp = Array.from(Array(l1 + 1), _ => Array(l2 + 1))
  for (let i = 0; i <= l1; i++) dp[i][0] = i
  for (let i = 0; i <= l2; i++) dp[0][i] = i
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      let c = word1[i - 1] === word2[j - 1] ? 0 : 1
      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + c,
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1
      )
    }
  }
  return dp[l1][l2]
}
 */

export function minDistance(word1, word2) {
  const l1 = word1.length,
    l2 = word2.length,
    dp = Array.from(Array(l1 + 1), (_) => Array(l2 + 1))
  helper(l1, l2)
  return dp[l1][l2]
  function helper(l1, l2) {
    if (dp[l1][l2] >= 0) return dp[l1][l2]
    if (l1 === 0) return (dp[l1][l2] = l2)
    if (l2 === 0) return (dp[l1][l2] = l1)
    const min =
      word1[l1 - 1] === word2[l2 - 1]
        ? helper(l1 - 1, l2 - 1)
        : Math.min(
            helper(l1 - 1, l2 - 1),
            helper(l1 - 1, l2),
            helper(l1, l2 - 1),
          ) + 1
    return (dp[l1][l2] = min)
  }
}
