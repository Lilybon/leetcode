import { restoreArray } from '../src/1743. Restore the Array From Adjacent Pairs'

describe('restoreArray', () => {
  test('it returns the original array nums', () => {
    expect(
      restoreArray([
        [2, 1],
        [3, 4],
        [3, 2],
      ]),
    ).toEqual([1, 2, 3, 4])
    expect(
      restoreArray([
        [4, -2],
        [1, 4],
        [-3, 1],
      ]),
    ).toEqual([-2, 4, 1, -3])
  })
})
