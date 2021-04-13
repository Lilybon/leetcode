import { minDistance } from '../src/72. Edit Distance'

describe('minDistance', () => {
  test('it returns the minimum number of operations required to convert word1 to word2', () => {
    expect(minDistance('horse', 'ros')).toBe(3)
    expect(minDistance('intention', 'execution')).toBe(5)
    expect(minDistance('', '')).toBe(0)
  })
})
