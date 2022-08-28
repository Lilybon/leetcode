import { removeStars } from '../src/2390. Removing Stars From a String'

describe('removeStars', () => {
  test('it returns the string after all stars have been removed', () => {
    expect(removeStars('leet**cod*e')).toBe('lecoe')
    expect(removeStars('erase*****')).toBe('')
  })
})
