/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

export function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let sum = coin; sum <= amount; sum++) {
      dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
