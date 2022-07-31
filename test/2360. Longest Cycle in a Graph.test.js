import { longestCycle } from '../src/2360. Longest Cycle in a Graph'

describe('longestCycle', () => {
  test('it returns the length of the longest cycle in the graph', () => {
    expect(longestCycle([3, 3, 4, 2, 3])).toBe(3)
  })
  test('if no cycle exists, return -1', () => {
    expect(longestCycle([2, -1, 3, 1])).toBe(-1)
  })
})
