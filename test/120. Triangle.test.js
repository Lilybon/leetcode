import { minimumTotal } from '../src/120. Triangle'

describe('minimumTotal', () => {
  test('it finds the minimum path sum from top to bottom', () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
    expect(minimumTotal(triangle)).toBe(11)
  })
})
