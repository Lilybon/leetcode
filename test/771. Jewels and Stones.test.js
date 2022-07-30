import { numJewelsInStones } from '../src/771. Jewels and Stones'

describe('numJewelsInStones', () => {
  test('it returns how many of the stones you have are also jewels', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3)
    expect(numJewelsInStones('z', 'ZZ')).toBe(0)
  })
})
