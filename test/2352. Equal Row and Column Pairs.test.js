import { equalPairs } from '../src/2352. Equal Row and Column Pairs'

describe('equalPairs', () => {
  test('it returns the number of pairs (Ri, Cj) such that row Ri and column Cj are equal', () => {
    expect(
      equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ])
    ).toBe(1)
    expect(
      equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ])
    ).toBe(3)
  })
})
