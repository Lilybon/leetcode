import { uniquePaths } from '../src/62. Unique Path'

describe('uniquePaths', () => {
  test('it return count of unique paths to the bottom-right corner of m * n grid which allows moving down or right', () => {
    expect(uniquePaths(3, 2)).toBe(3)
    expect(uniquePaths(7, 3)).toBe(28)
    expect(uniquePaths(3, 3)).toBe(6)
  })
})
