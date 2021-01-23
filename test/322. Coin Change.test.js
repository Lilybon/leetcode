import { coinChange } from '../src/322. Coin Change'

describe('coinChange', () => {
  test('it computes the fewest number of coins that you need to make up that amount', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3)
    expect(coinChange([1], 0)).toBe(0)
    expect(coinChange([1], 1)).toBe(1)
    expect(coinChange([1], 2)).toBe(2)
  })
  test('it returns -1 if the amount of money cannot be made up by any combination of the coins', () => {
    expect(coinChange([2], 3)).toBe(-1)
  })
})
