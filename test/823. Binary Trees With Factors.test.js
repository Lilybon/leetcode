import { numFactoredBinaryTrees } from '../src/823. Binary Trees With Factors'

describe('numFactoredBinaryTrees', () => {
  test('it returns the number of binary trees we can make', () => {
    expect(numFactoredBinaryTrees([2, 4])).toBe(3)
    expect(numFactoredBinaryTrees([2, 4, 5, 10])).toBe(7)
  })
})
