import { reorderedPowerOf2 } from '../src/869. Reordered Power of 2'

describe('reorderedPowerOf2', () => {
  test('it returns true if and only if we can do this so that the resulting number is a power of two', () => {
    expect(reorderedPowerOf2(1)).toBe(true)
    expect(reorderedPowerOf2(10)).toBe(false)
  })
})
