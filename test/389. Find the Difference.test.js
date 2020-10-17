import { findTheDifference } from '../src/389. Find the Difference'

describe('findTheDifference', () => {
  test('it returns the letter that was added to t', () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e')
    expect(findTheDifference('', 'y')).toBe('y')
    expect(findTheDifference('a', 'aa')).toBe('a')
    expect(findTheDifference('ae', 'aea')).toBe('a')
  })
})
