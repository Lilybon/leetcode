import { hasGroupsSizeX } from '../src/914. X of a Kind in a Deck of Cards'

describe('hasGroupsSizeX', () => {
  test('it returns true if and only if it is possible to split the entire deck into 1 or more groups of card', () => {
    expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
    expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
    expect(hasGroupsSizeX([1])).toBe(false)
    expect(hasGroupsSizeX([1, 1])).toBe(true)
    expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toBe(true)
  })
})
