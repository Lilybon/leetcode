/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

export function maxProfit(prices, fee) {
  const n = prices.length
  let prevSell = 0,
    prevBuy = -prices[0]
  for (let i = 1; i < n; i++) {
    let currentSell = Math.max(prevSell, prevBuy + prices[i] - fee),
      currentBuy = Math.max(prevBuy, prevSell - prices[i])
    prevSell = currentSell
    prevBuy = currentBuy
  }
  return prevSell
}
