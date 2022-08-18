import { minSetSize } from '../src/1338. Reduce Array Size to The Half'

describe('minSetSize', () => {
  test('it returns the minimum size of the set so that at least half of the integers of the array are removed', () => {
    expect(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])).toBe(2)
    expect(minSetSize([7, 7, 7, 7, 7, 7])).toBe(1)
  })
})
