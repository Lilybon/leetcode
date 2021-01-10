import { intersection } from '../src/349. Intersection of Two Arrays'

describe('intersection', () => {
  test('it computes intersection of two arrays', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2])
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(
      expect.arrayContaining([9, 4])
    )
  })
})
