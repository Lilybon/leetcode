import { maxProfit } from '../src/122. Best Time to Buy and Sell Stock II'

describe('maxProfit', () => {
  test('it returns the maximum profit from an array for which the ith element is the price of a given stock on day i', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
