import { maxArea } from '../src/11. Container With Most Water'

describe('maxArea', () => {
  test('it finds two lines to form a container contains the most water', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(maxArea([1, 1])).toBe(1)
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16)
    expect(maxArea([1, 2, 1])).toBe(2)
  })
})
