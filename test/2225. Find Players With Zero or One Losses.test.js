import { findWinners } from '../src/2225. Find Players With Zero or One Losses'

describe('findWinners', () => {
  test('it returns a list answer of size 2 where 0 answer[0] is a list of all players that have not lost any matches and answer[1] is a list of all players that have lost exactly one match', () => {
    expect(
      findWinners([
        [1, 3],
        [2, 3],
        [3, 6],
        [5, 6],
        [5, 7],
        [4, 5],
        [4, 8],
        [4, 9],
        [10, 4],
        [10, 9],
      ])
    ).toEqual([
      [1, 2, 10],
      [4, 5, 7, 8],
    ])
    expect(
      findWinners([
        [2, 3],
        [1, 3],
        [5, 4],
        [6, 4],
      ])
    ).toEqual([[1, 2, 5, 6], []])
  })
})
