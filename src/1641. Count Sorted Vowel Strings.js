/**
 * @param {number} n
 * @return {number}
 */

// DP
/*
export function countVowelStrings (n) {
  if (n <= 0) return 0
  let dp = new Uint32Array(5).fill(1)
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = j + 1; k < 5; k++) {
        dp[j] += dp[k]
      }
    }
  }
  return dp.reduce((sum, val) => sum + val, 0)
}
 */
// Combination Number
export function countVowelStrings(n) {
  return ((n + 1) * (n + 2) * (n + 3) * (n + 4)) / 24
}
