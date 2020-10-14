import { calculateMinimumHP } from '../src/174. Dungeon Game'

describe('calculateMinimumHP', () => {
  test("it determines the knight's minimum initial health so that he is able to rescue the princess", () => {
    const dungeon = [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ]
    expect(calculateMinimumHP(dungeon)).toBe(7)
  })
})
