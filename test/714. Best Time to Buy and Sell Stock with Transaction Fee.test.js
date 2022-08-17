import { maxProfit } from '../src/714. Best Time to Buy and Sell Stock with Transaction Fee'

describe('maxProfit', () => {
  test('it finds the maximum profit you can achieve', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8)
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6)
  })
})
