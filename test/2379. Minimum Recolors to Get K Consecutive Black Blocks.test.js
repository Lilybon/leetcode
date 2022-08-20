import { minimumRecolors } from '../src/2379. Minimum Recolors to Get K Consecutive Black Blocks'

describe('minimumRecolors', () => {
  test('it returns the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3)
    expect(minimumRecolors('WBWBBBW', 2)).toBe(0)
  })
})
