/**
 * @param {number[]} prices
 * @return {number}
 */

// DP
// function maxProfit(prices) {
//   const n = prices.length,
//     dp = Array.from(Array(n), () => [0, 0])
//   dp[0][1] = -prices[0]
//   for (let i = 1; i < n; i++) {
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
//     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
//   }
//   return dp[n - 1][0]
// }

// Optimize DP
// function maxProfit (prices) {
//   const n = prices.length
//   let prevSell = 0,
//         prevBuy = -prices[0]
//   for (let i = 1; i < n; i++) {
//       let currentSell = Math.max(prevSell, prevBuy + prices[i]),
//           currentBuy = Math.max(prevBuy, prevSell - prices[i])
//       prevSell = currentSell
//       prevBuy = currentBuy
//   }
//   return prevSell
// }

// Greedy
export function maxProfit(prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
}
