import { garbageCollection } from '../src/2391. Minimum Amount of Time to Collect Garbage'

describe('garbageCollection', () => {
  test('it returns the minimum number of minutes needed to pick up all the garbage', () => {
    expect(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3])).toBe(21)
    expect(garbageCollection(['MMM', 'PGM', 'GP'], [3, 10])).toBe(37)
  })
})
