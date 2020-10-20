import { minFlipsMonoIncr } from '../src/926. Flip String to Monotone Increasing'

describe('minFlipsMonoIncr', () => {
  test('it returns the minimum number of flips to make S monotone increasing', () => {
    expect(minFlipsMonoIncr('00110')).toBe(1)
    expect(minFlipsMonoIncr('010110')).toBe(2)
    expect(minFlipsMonoIncr('00011000')).toBe(2)
    expect(minFlipsMonoIncr('10011111110010111011')).toBe(5)
  })
})
