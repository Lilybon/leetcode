import { isPossible } from '../src/659. Split Array into Consecutive Subsequences'

describe('isPossible', () => {
  test('it returns true if you can split nums according to the above conditions', () => {
    expect(isPossible([1, 2, 3, 3, 4, 5])).toBe(true)
    expect(isPossible([1, 2, 3, 3, 4, 4, 5, 5])).toBe(true)
  })
  test('it returns false otherwise', () => {
    expect(isPossible([1, 2, 3, 4, 4, 5])).toBe(false)
  })
})
