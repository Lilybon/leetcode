/**
 * @param {number} n
 * @return {number}
 */

/*
const integerBreak = n => {
  let dp = Array(n + 1).fill(1)
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      let candidate = Math.max((i - j) * j, dp[i - j] * j)
      dp[i] = Math.max(dp[i], candidate)
    }
  }
  return dp[n]
}
 */

const integerBreak = (n) => {
  if (n === 2 || n === 3) return n - 1
  let mod = n % 3
  n -= mod
  if (mod === 0) return 3 ** (n / 3)
  else if (mod === 1) return 4 * 3 ** (n / 3 - 1)
  else return 2 * 3 ** (n / 3)
}
