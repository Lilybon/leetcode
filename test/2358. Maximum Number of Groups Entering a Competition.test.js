import { maximumGroups } from '../src/2358. Maximum Number of Groups Entering a Competition'

describe('maximumGroups', () => {
  test('it returns the maximum number of groups that can be formed', () => {
    expect(maximumGroups([10, 6, 12, 7, 3, 5])).toBe(3)
    expect(maximumGroups([8, 8])).toBe(1)
  })
})
