import { maxDistToClosest } from '../src/849. Maximize Distance to Closest Person'

describe('maxDistToClosest', () => {
  test('it returns the maximum distance to the closest person', () => {
    expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2)
    expect(maxDistToClosest([1, 0, 0, 0])).toBe(3)
    expect(maxDistToClosest([0, 1])).toBe(1)
  })
})
