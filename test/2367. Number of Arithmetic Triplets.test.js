import { arithmeticTriplets } from '../src/2367. Number of Arithmetic Triplets'

describe('arithmeticTriplets', () => {
  test('it returns the number of unique arithmetic triplets', () => {
    expect(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)).toBe(2)
    expect(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)).toBe(2)
  })
})
