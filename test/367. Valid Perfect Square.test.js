import { isPerfectSquare } from '../src/367. Valid Perfect Square'

describe('isPerfectSquare', () => {
  test('it returns true if num is a perfect square else false', () => {
    expect(isPerfectSquare(16)).toBe(true)
    expect(isPerfectSquare(14)).toBe(false)
  })
})
