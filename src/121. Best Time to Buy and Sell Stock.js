/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let maxprofit = 0
  let minprice = Number.MAX_SAFE_INTEGER
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i]
    } else if (maxprofit < prices[i] - minprice) {
      maxprofit = prices[i] - minprice
    }
  }
  return maxprofit
}
