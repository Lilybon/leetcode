import { checkStraightLine } from '../src/1232. Check If It Is a Straight Line'

describe('checkStraightLine', () => {
  test('it checks if points make a straight line in the XY plane', () => {
    const coordinates1 = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ]
    expect(checkStraightLine(coordinates1)).toBe(true)

    const coordinates2 = [
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 7],
    ]
    expect(checkStraightLine(coordinates2)).toBe(false)
  })
})
