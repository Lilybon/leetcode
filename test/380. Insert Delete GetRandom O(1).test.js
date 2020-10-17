import { RandomizedSet } from '../src/380. Insert Delete GetRandom O(1)'

describe('RandomizedSet', () => {
  test('it implements the RandomizedSet class', () => {
    const randomizedSet = new RandomizedSet()
    expect(randomizedSet.insert(1)).toBe(true)
    expect(randomizedSet.remove(2)).toBe(false)
    expect(randomizedSet.insert(2)).toBe(true)
    const rng1 = randomizedSet.getRandom()
    expect(rng1 === 1 || rng1 === 2).toBe(true)
    expect(randomizedSet.remove(1)).toBe(true)
    expect(randomizedSet.insert(2)).toBe(false)
    const rng2 = randomizedSet.getRandom()
    expect(rng2).toBe(2)
  })
})
