import { sortColors } from '../src/75. Sort Colors'

describe('sortColors', () => {
  test('it sorts arrays colored red, white, blue in-place', () => {
    const colors1 = [2, 0, 2, 1, 1, 0]
    sortColors(colors1)
    expect(colors1).toEqual([0, 0, 1, 1, 2, 2])

    const colors2 = [2, 0, 1]
    sortColors(colors2)
    expect(colors2).toEqual([0, 1, 2])

    const colors3 = [0]
    sortColors(colors3)
    expect(colors3).toEqual([0])

    const colors4 = [1]
    sortColors(colors4)
    expect(colors4).toEqual([1])
  })
})
