import { countPoints } from '../src/1828. Queries on Number of Points Inside a Circle'

describe('countPoints', () => {
  test('it returns an array answer, where answer[j] is the answer to the jth query', () => {
    expect(
      countPoints(
        [
          [1, 3],
          [3, 3],
          [5, 3],
          [2, 2],
        ],
        [
          [2, 3, 1],
          [4, 3, 1],
          [1, 1, 2],
        ]
      )
    ).toEqual([3, 2, 2])
    expect(
      countPoints(
        [
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5],
        ],
        [
          [1, 2, 2],
          [2, 2, 2],
          [4, 3, 2],
          [4, 3, 3],
        ]
      )
    ).toEqual([2, 3, 2, 4])
  })
})
