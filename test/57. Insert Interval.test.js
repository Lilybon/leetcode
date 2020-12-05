import { insert } from '../src/57. Insert Interval'

describe('insert', () => {
  test('it inserts a new interval into the intervals', () => {
    const intervals1 = [
      [1, 3],
      [6, 9],
    ]
    expect(insert(intervals1, [2, 5])).toEqual([
      [1, 5],
      [6, 9],
    ])

    const intervals2 = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ]
    expect(insert(intervals2, [4, 8])).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ])

    const intervals3 = []
    expect(insert(intervals3, [5, 7])).toEqual([[5, 7]])

    const intervals4 = [[1, 5]]
    expect(insert(intervals4, [2, 3])).toEqual([[1, 5]])
    expect(insert(intervals4, [2, 7])).toEqual([[1, 7]])
  })
})
