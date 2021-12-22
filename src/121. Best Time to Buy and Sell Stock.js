/**
 * @param {number[]} prices
 * @return {number}
 */

export function maxProfit(prices) {
  let maxProfit = 0,
    minPrice = Number.MAX_SAFE_INTEGER
  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else if (maxProfit < price - minPrice) {
      maxProfit = price - minPrice
    }
  }
  return maxProfit
}
