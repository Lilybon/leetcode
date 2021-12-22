import { jump } from '../src/45. Jump Game II'

describe('jump', () => {
  test('it returns the minimum number of jumps from start index to last index', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2)
    expect(jump([2, 3, 0, 1, 4])).toBe(2)
    expect(jump([2, 1])).toBe(1)
  })
})
