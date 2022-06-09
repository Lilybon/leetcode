import { validSquare } from '../src/593. Valid Square'

describe('validSquare', () => {
  test('it returns if the four points construct a square', () => {
    expect(validSquare([0, 0], [1, 1], [1, 0], [0, 1])).toBe(true)
    expect(validSquare([0, 0], [1, 1], [1, 0], [0, 12])).toBe(false)
    expect(validSquare([1, 0], [-1, 0], [0, 1], [0, -1])).toBe(true)
  })
})
