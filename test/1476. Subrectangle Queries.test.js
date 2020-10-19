import { SubrectangleQueries } from '../src/1476. Subrectangle Queries'

describe('SubrectangleQueries', () => {
  test('it implements the class SubrectangleQueries', () => {
    const subrectangleQueries1 = new SubrectangleQueries([
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ])
    expect(subrectangleQueries1.getValue(0, 2)).toBe(1)
    subrectangleQueries1.updateSubrectangle(0, 0, 3, 2, 5)
    expect(subrectangleQueries1.getValue(0, 2)).toBe(5)
    expect(subrectangleQueries1.getValue(3, 1)).toBe(5)
    subrectangleQueries1.updateSubrectangle(3, 0, 3, 2, 10)
    expect(subrectangleQueries1.getValue(3, 1)).toBe(10)
    expect(subrectangleQueries1.getValue(0, 2)).toBe(5)

    const subrectangleQueries2 = new SubrectangleQueries([
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ])
    expect(subrectangleQueries2.getValue(0, 0)).toBe(1)
    subrectangleQueries2.updateSubrectangle(0, 0, 2, 2, 100)
    expect(subrectangleQueries2.getValue(0, 0)).toBe(100)
    expect(subrectangleQueries2.getValue(2, 2)).toBe(100)
    subrectangleQueries2.updateSubrectangle(1, 1, 2, 2, 20)
    expect(subrectangleQueries2.getValue(2, 2)).toBe(20)
  })
})
