import { canConstruct } from '../src/383. Ransom Note'

describe('canConstruct', () => {
  test('it returns true if the ransom note can be constructed from the magazines', () => {
    expect(canConstruct('a', 'b')).toBe(false)
    expect(canConstruct('aa', 'ab')).toBe(false)
    expect(canConstruct('aa', 'aab')).toBe(true)
  })
})
