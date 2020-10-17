import { findContentChildren } from '../src/455. Assign Cookies'

describe('findContentChildren', () => {
  test('it maximizes the number of your content children and outputs the maximum number', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2)
  })
})
