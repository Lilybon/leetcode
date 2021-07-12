import { totalFruit } from '../src/904. Fruit Into Baskets'

describe('totalFruit', () => {
  test('it returns the maximum number of fruits you can pick', () => {
    expect(totalFruit([1, 2, 1])).toBe(3)
    expect(totalFruit([0, 1, 2, 2])).toBe(3)
    expect(totalFruit([1, 2, 3, 2, 2])).toBe(4)
    expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5)
  })
})
